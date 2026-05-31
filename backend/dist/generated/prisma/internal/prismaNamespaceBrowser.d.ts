import * as runtime from "@prisma/client/runtime/index-browser";
export type * from '../models.js';
export type * from './prismaNamespace.js';
export declare const Decimal: typeof runtime.Decimal;
export declare const NullTypes: {
    DbNull: (new (secret: never) => typeof runtime.DbNull);
    JsonNull: (new (secret: never) => typeof runtime.JsonNull);
    AnyNull: (new (secret: never) => typeof runtime.AnyNull);
};
export declare const DbNull: any;
export declare const JsonNull: any;
export declare const AnyNull: any;
export declare const ModelName: {
    readonly User: "User";
    readonly UserProfile: "UserProfile";
    readonly Park: "Park";
    readonly ParkHours: "ParkHours";
    readonly Poi: "Poi";
    readonly PoiLive: "PoiLive";
    readonly ShowSession: "ShowSession";
    readonly Plan: "Plan";
    readonly ProgressEvent: "ProgressEvent";
    readonly ImportedArtifact: "ImportedArtifact";
    readonly UserReservation: "UserReservation";
};
export type ModelName = (typeof ModelName)[keyof typeof ModelName];
export declare const TransactionIsolationLevel: {
    readonly Serializable: "Serializable";
};
export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel];
export declare const UserScalarFieldEnum: {
    readonly id: "id";
    readonly phone: "phone";
    readonly email: "email";
    readonly passwordHash: "passwordHash";
    readonly nickname: "nickname";
    readonly createdAt: "createdAt";
    readonly updatedAt: "updatedAt";
};
export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum];
export declare const UserProfileScalarFieldEnum: {
    readonly id: "id";
    readonly userId: "userId";
    readonly mode: "mode";
    readonly tags: "tags";
    readonly createdAt: "createdAt";
    readonly updatedAt: "updatedAt";
};
export type UserProfileScalarFieldEnum = (typeof UserProfileScalarFieldEnum)[keyof typeof UserProfileScalarFieldEnum];
export declare const ParkScalarFieldEnum: {
    readonly id: "id";
    readonly name: "name";
    readonly createdAt: "createdAt";
    readonly updatedAt: "updatedAt";
};
export type ParkScalarFieldEnum = (typeof ParkScalarFieldEnum)[keyof typeof ParkScalarFieldEnum];
export declare const ParkHoursScalarFieldEnum: {
    readonly id: "id";
    readonly parkId: "parkId";
    readonly date: "date";
    readonly venueName: "venueName";
    readonly openTime: "openTime";
    readonly closeTime: "closeTime";
    readonly createdAt: "createdAt";
};
export type ParkHoursScalarFieldEnum = (typeof ParkHoursScalarFieldEnum)[keyof typeof ParkHoursScalarFieldEnum];
export declare const PoiScalarFieldEnum: {
    readonly id: "id";
    readonly parkId: "parkId";
    readonly type: "type";
    readonly name: "name";
    readonly zone: "zone";
    readonly lat: "lat";
    readonly lng: "lng";
    readonly tags: "tags";
    readonly createdAt: "createdAt";
    readonly updatedAt: "updatedAt";
};
export type PoiScalarFieldEnum = (typeof PoiScalarFieldEnum)[keyof typeof PoiScalarFieldEnum];
export declare const PoiLiveScalarFieldEnum: {
    readonly id: "id";
    readonly poiId: "poiId";
    readonly capturedAt: "capturedAt";
    readonly status: "status";
    readonly waitMin: "waitMin";
};
export type PoiLiveScalarFieldEnum = (typeof PoiLiveScalarFieldEnum)[keyof typeof PoiLiveScalarFieldEnum];
export declare const ShowSessionScalarFieldEnum: {
    readonly id: "id";
    readonly poiId: "poiId";
    readonly startAt: "startAt";
    readonly endAt: "endAt";
    readonly status: "status";
    readonly createdAt: "createdAt";
};
export type ShowSessionScalarFieldEnum = (typeof ShowSessionScalarFieldEnum)[keyof typeof ShowSessionScalarFieldEnum];
export declare const PlanScalarFieldEnum: {
    readonly id: "id";
    readonly userId: "userId";
    readonly parkId: "parkId";
    readonly mode: "mode";
    readonly template: "template";
    readonly data: "data";
    readonly createdAt: "createdAt";
    readonly updatedAt: "updatedAt";
};
export type PlanScalarFieldEnum = (typeof PlanScalarFieldEnum)[keyof typeof PlanScalarFieldEnum];
export declare const ProgressEventScalarFieldEnum: {
    readonly id: "id";
    readonly userId: "userId";
    readonly planId: "planId";
    readonly poiId: "poiId";
    readonly type: "type";
    readonly payload: "payload";
    readonly createdAt: "createdAt";
};
export type ProgressEventScalarFieldEnum = (typeof ProgressEventScalarFieldEnum)[keyof typeof ProgressEventScalarFieldEnum];
export declare const ImportedArtifactScalarFieldEnum: {
    readonly id: "id";
    readonly userId: "userId";
    readonly type: "type";
    readonly captureTime: "captureTime";
    readonly rawPath: "rawPath";
    readonly parsed: "parsed";
    readonly createdAt: "createdAt";
};
export type ImportedArtifactScalarFieldEnum = (typeof ImportedArtifactScalarFieldEnum)[keyof typeof ImportedArtifactScalarFieldEnum];
export declare const UserReservationScalarFieldEnum: {
    readonly id: "id";
    readonly userId: "userId";
    readonly category: "category";
    readonly visitDate: "visitDate";
    readonly timeWindow: "timeWindow";
    readonly status: "status";
    readonly guestName: "guestName";
    readonly guestCount: "guestCount";
    readonly voucherHash: "voucherHash";
    readonly voucherLast4: "voucherLast4";
    readonly sourceImportId: "sourceImportId";
    readonly createdAt: "createdAt";
    readonly updatedAt: "updatedAt";
};
export type UserReservationScalarFieldEnum = (typeof UserReservationScalarFieldEnum)[keyof typeof UserReservationScalarFieldEnum];
export declare const SortOrder: {
    readonly asc: "asc";
    readonly desc: "desc";
};
export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder];
export declare const NullableJsonNullValueInput: {
    readonly DbNull: any;
    readonly JsonNull: any;
};
export type NullableJsonNullValueInput = (typeof NullableJsonNullValueInput)[keyof typeof NullableJsonNullValueInput];
export declare const JsonNullValueInput: {
    readonly JsonNull: any;
};
export type JsonNullValueInput = (typeof JsonNullValueInput)[keyof typeof JsonNullValueInput];
export declare const NullsOrder: {
    readonly first: "first";
    readonly last: "last";
};
export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder];
export declare const JsonNullValueFilter: {
    readonly DbNull: any;
    readonly JsonNull: any;
    readonly AnyNull: any;
};
export type JsonNullValueFilter = (typeof JsonNullValueFilter)[keyof typeof JsonNullValueFilter];
export declare const QueryMode: {
    readonly default: "default";
    readonly insensitive: "insensitive";
};
export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode];
