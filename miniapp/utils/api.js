function getBaseUrl() {
  const app = getApp();
  return app.globalData.baseUrl;
}

function getToken() {
  return wx.getStorageSync("token") || "";
}

function request(method, path, data) {
  return new Promise((resolve, reject) => {
    wx.request({
      url: `${getBaseUrl()}${path}`,
      method,
      data,
      header: {
        "content-type": "application/json",
        authorization: getToken() ? `Bearer ${getToken()}` : "",
      },
      success: (res) => {
        if (res.statusCode >= 200 && res.statusCode < 300) {
          resolve(res.data);
          return;
        }
        reject(res);
      },
      fail: reject,
    });
  });
}

async function ensureDevAuth() {
  const token = getToken();
  if (token) return token;

  const phone = "13800000000";
  const password = "password123";

  try {
    const reg = await request("POST", "/auth/register", { phone, password, nickname: "demo" });
    wx.setStorageSync("token", reg.token);
    return reg.token;
  } catch (e) {
    const login = await request("POST", "/auth/login", { phone, password });
    wx.setStorageSync("token", login.token);
    return login.token;
  }
}

function uploadScreenshot(filePath, formData) {
  return new Promise((resolve, reject) => {
    wx.uploadFile({
      url: `${getBaseUrl()}/import/screenshot`,
      filePath,
      name: "file",
      formData: formData || {},
      header: {
        authorization: getToken() ? `Bearer ${getToken()}` : "",
      },
      success: (res) => {
        try {
          resolve(JSON.parse(res.data));
        } catch {
          resolve(res.data);
        }
      },
      fail: reject,
    });
  });
}

module.exports = {
  request,
  ensureDevAuth,
  uploadScreenshot,
};

