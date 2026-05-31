import { PoiStatus, PoiType } from '@prisma/client';

export type CandidatePoi = {
  id: string;
  type: PoiType;
  name: string;
  zone: string | null;
  lat: number;
  lng: number;
  status: PoiStatus;
  waitMin: number | null;
};

export type Location = { lat: number; lng: number };

export function haversineMeters(a: Location, b: Location) {
  const R = 6371000;
  const dLat = ((b.lat - a.lat) * Math.PI) / 180;
  const dLng = ((b.lng - a.lng) * Math.PI) / 180;
  const lat1 = (a.lat * Math.PI) / 180;
  const lat2 = (b.lat * Math.PI) / 180;
  const sin1 = Math.sin(dLat / 2);
  const sin2 = Math.sin(dLng / 2);
  const h = sin1 * sin1 + Math.cos(lat1) * Math.cos(lat2) * sin2 * sin2;
  return 2 * R * Math.asin(Math.sqrt(h));
}

export function walkEtaMinutes(from: Location, to: Location) {
  const meters = haversineMeters(from, to);
  const metersPerMin = 72;
  return Math.max(1, Math.round(meters / metersPerMin));
}

export function expectedDurationMin(type: PoiType) {
  if (type === 'SHOW') return 30;
  if (type === 'RESTAURANT') return 45;
  if (type === 'ATTRACTION') return 10;
  return 10;
}

export function scoreCandidates(params: {
  from: Location;
  keepTotalMin: number;
  candidates: CandidatePoi[];
  mode: 'MISSION' | 'COPILOT';
  sameZone?: string | null;
}) {
  const { from, keepTotalMin, candidates, mode, sameZone } = params;

  return candidates
    .map((c) => {
      const walk = walkEtaMinutes(from, { lat: c.lat, lng: c.lng });
      const wait = c.waitMin ?? 20;
      const duration = expectedDurationMin(c.type);
      const total = walk + wait + duration;
      const save = keepTotalMin - total;
      const zoneBonus = sameZone && c.zone === sameZone ? 5 : 0;
      const openBonus = c.status === 'OPEN' ? 3 : c.status === 'UNKNOWN' ? 0 : -999;
      const score =
        (mode === 'MISSION' ? -2 : -1) * total +
        (mode === 'MISSION' ? -1.5 : -1) * wait +
        zoneBonus +
        openBonus +
        (mode === 'COPILOT' ? 2 : 0) * (c.type === 'ATTRACTION' ? 1 : 0);

      return {
        poi: c,
        walk_eta_min: walk,
        expected_wait_min: c.waitMin,
        expected_total_min: total,
        save_total_min: save,
        score,
      };
    })
    .filter((x) => x.score > -900)
    .sort((a, b) => b.score - a.score);
}
