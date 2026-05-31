export declare const PoiType: {
    readonly ATTRACTION: "ATTRACTION";
    readonly SHOW: "SHOW";
    readonly RESTAURANT: "RESTAURANT";
    readonly ACTIVITY: "ACTIVITY";
    readonly SERVICE: "SERVICE";
    readonly ENTRY: "ENTRY";
    readonly LANDMARK: "LANDMARK";
};
export type PoiType = (typeof PoiType)[keyof typeof PoiType];
export declare const PoiStatus: {
    readonly OPEN: "OPEN";
    readonly TEMP_CLOSED: "TEMP_CLOSED";
    readonly DOWN: "DOWN";
    readonly UNKNOWN: "UNKNOWN";
};
export type PoiStatus = (typeof PoiStatus)[keyof typeof PoiStatus];
export declare const GuideMode: {
    readonly MISSION: "MISSION";
    readonly COPILOT: "COPILOT";
};
export type GuideMode = (typeof GuideMode)[keyof typeof GuideMode];
export declare const ReservationStatus: {
    readonly VALID: "VALID";
    readonly REDEEMED: "REDEEMED";
    readonly EXPIRED: "EXPIRED";
    readonly UNKNOWN: "UNKNOWN";
};
export type ReservationStatus = (typeof ReservationStatus)[keyof typeof ReservationStatus];
