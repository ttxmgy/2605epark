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
export type Location = {
    lat: number;
    lng: number;
};
export declare function haversineMeters(a: Location, b: Location): number;
export declare function walkEtaMinutes(from: Location, to: Location): number;
export declare function expectedDurationMin(type: PoiType): 10 | 30 | 45;
export declare function scoreCandidates(params: {
    from: Location;
    keepTotalMin: number;
    candidates: CandidatePoi[];
    mode: 'MISSION' | 'COPILOT';
    sameZone?: string | null;
}): {
    poi: CandidatePoi;
    walk_eta_min: number;
    expected_wait_min: number | null;
    expected_total_min: number;
    save_total_min: number;
    score: number;
}[];
