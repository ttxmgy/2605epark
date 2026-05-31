const { request, ensureDevAuth, uploadScreenshot } = require("../../utils/api");

Page({
  data: {
    mode: "COPILOT",
    parkId: "",
    planId: "",
    center: { lat: 39.849, lng: 116.565 },
    markers: [],
    nextAction: { poi_id: "", title: "", walk_eta_min: 0, wait_min: null },
    banner: { show: false, text: "" },
    modal: { show: false, text: "" },
    alternatives: [],
    currentPoiId: "",
  },

  async onLoad() {
    await ensureDevAuth();
    await this.ensurePark();
    await this.refreshLive();
  },

  async ensurePark() {
    const parks = await request("GET", "/parks");
    if (parks.length > 0) {
      this.setData({ parkId: parks[0].id });
      return;
    }
    const seeded = await request("POST", "/parks/dev/seed", { name: "Demo Park" });
    this.setData({ parkId: seeded.id });
  },

  toggleMode() {
    const next = this.data.mode === "MISSION" ? "COPILOT" : "MISSION";
    this.setData({ mode: next });
  },

  async refreshLive() {
    if (!this.data.parkId) return;
    const live = await request("GET", `/parks/${this.data.parkId}/live`);
    const markers = (live.poi || []).map((p) => ({
      id: p.id,
      latitude: p.lat,
      longitude: p.lng,
      width: 28,
      height: 28,
      callout: {
        content: `${p.name}${p.live?.waitMin != null ? `\n等待${p.live.waitMin}分钟` : ""}`,
        display: "BYCLICK",
        padding: 6,
        borderRadius: 8,
      },
    }));
    this.setData({ markers });
  },

  async generatePlan() {
    if (!this.data.parkId) return;
    const location = await this.getLocationSafe();
    const res = await request("POST", "/plan/generate", {
      parkId: this.data.parkId,
      mode: this.data.mode,
      template: "user_select",
      location,
    });
    this.setData({
      planId: res.plan.id,
      nextAction: res.next_action,
      currentPoiId: res.next_action.poi_id,
      banner: { show: false, text: "" },
      modal: { show: false, text: "" },
      alternatives: [],
    });
  },

  async triggerReplan() {
    if (!this.data.planId || !this.data.currentPoiId) return;
    const location = await this.getLocationSafe();
    const res = await request("POST", "/plan/replan", {
      planId: this.data.planId,
      eventType: "WAIT_SPIKE",
      currentPoiId: this.data.currentPoiId,
      location,
      currentWaitMin: 70,
      lastWaitMin: 35,
    });

    const best = res.alternatives?.[0];
    const text = best ? `切换到 ${best.title}（预计省${best.save_total_min}分钟）` : "发现更优方案";

    if (res.ui_directive?.presentation === "modal") {
      this.setData({
        modal: { show: true, text },
        banner: { show: false, text: "" },
        alternatives: res.alternatives || [],
      });
      return;
    }

    this.setData({
      banner: { show: true, text },
      modal: { show: false, text: "" },
      alternatives: res.alternatives || [],
    });
  },

  openAlternatives() {
    if (!this.data.alternatives.length) return;
    this.setData({ modal: { show: true, text: this.data.banner.text }, banner: { show: false, text: "" } });
  },

  closeModal() {
    this.setData({ modal: { show: false, text: "" } });
  },

  applyBestAlternative() {
    const best = this.data.alternatives[0];
    if (!best) return;
    this.applyAlternative(best.poi_id);
  },

  pickAlternative(e) {
    const poiId = e.currentTarget.dataset.poiid;
    this.applyAlternative(poiId);
  },

  applyAlternative(poiId) {
    const alt = this.data.alternatives.find((a) => a.poi_id === poiId);
    if (!alt) return;
    this.setData({
      currentPoiId: poiId,
      nextAction: {
        poi_id: alt.poi_id,
        title: alt.title,
        walk_eta_min: alt.walk_eta_min,
        wait_min: alt.expected_wait_min,
      },
      modal: { show: false, text: "" },
      banner: { show: false, text: "" },
    });
  },

  async importScreenshot() {
    const choose = await new Promise((resolve, reject) => {
      wx.chooseImage({
        count: 1,
        sizeType: ["compressed"],
        sourceType: ["album"],
        success: resolve,
        fail: reject,
      });
    });
    const filePath = choose.tempFilePaths[0];
    const res = await uploadScreenshot(filePath, { captureTime: new Date().toISOString() });
    wx.showModal({
      title: "导入结果",
      content: typeof res === "string" ? res : JSON.stringify(res.parsed || res, null, 2),
      showCancel: false,
    });
  },

  async sendProgressArrived() {
    await this.sendProgress("arrived");
  },

  async sendProgressQueue() {
    await this.sendProgress("queue_start");
  },

  async sendProgressDone() {
    await this.sendProgress("done");
  },

  async sendProgress(type) {
    if (!this.data.planId) return;
    await request("POST", "/progress/event", {
      type,
      planId: this.data.planId,
      poiId: this.data.currentPoiId || undefined,
    });
    wx.showToast({ title: "已记录", icon: "success" });
  },

  async getLocationSafe() {
    try {
      const loc = await new Promise((resolve, reject) => {
        wx.getLocation({
          type: "gcj02",
          success: resolve,
          fail: reject,
        });
      });
      return { lat: loc.latitude, lng: loc.longitude };
    } catch {
      return this.data.center;
    }
  },
});

