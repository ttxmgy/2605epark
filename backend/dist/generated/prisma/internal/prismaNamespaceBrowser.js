"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || (function () {
    var ownKeys = function(o) {
        ownKeys = Object.getOwnPropertyNames || function (o) {
            var ar = [];
            for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
            return ar;
        };
        return ownKeys(o);
    };
    return function (mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
        __setModuleDefault(result, mod);
        return result;
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.QueryMode = exports.JsonNullValueFilter = exports.NullsOrder = exports.JsonNullValueInput = exports.NullableJsonNullValueInput = exports.SortOrder = exports.UserReservationScalarFieldEnum = exports.ImportedArtifactScalarFieldEnum = exports.ProgressEventScalarFieldEnum = exports.PlanScalarFieldEnum = exports.ShowSessionScalarFieldEnum = exports.PoiLiveScalarFieldEnum = exports.PoiScalarFieldEnum = exports.ParkHoursScalarFieldEnum = exports.ParkScalarFieldEnum = exports.UserProfileScalarFieldEnum = exports.UserScalarFieldEnum = exports.TransactionIsolationLevel = exports.ModelName = exports.AnyNull = exports.JsonNull = exports.DbNull = exports.NullTypes = exports.Decimal = void 0;
const runtime = __importStar(require("@prisma/client/runtime/index-browser"));
exports.Decimal = runtime.Decimal;
exports.NullTypes = {
    DbNull: runtime.NullTypes.DbNull,
    JsonNull: runtime.NullTypes.JsonNull,
    AnyNull: runtime.NullTypes.AnyNull,
};
exports.DbNull = runtime.DbNull;
exports.JsonNull = runtime.JsonNull;
exports.AnyNull = runtime.AnyNull;
exports.ModelName = {
    User: 'User',
    UserProfile: 'UserProfile',
    Park: 'Park',
    ParkHours: 'ParkHours',
    Poi: 'Poi',
    PoiLive: 'PoiLive',
    ShowSession: 'ShowSession',
    Plan: 'Plan',
    ProgressEvent: 'ProgressEvent',
    ImportedArtifact: 'ImportedArtifact',
    UserReservation: 'UserReservation'
};
exports.TransactionIsolationLevel = runtime.makeStrictEnum({
    Serializable: 'Serializable'
});
exports.UserScalarFieldEnum = {
    id: 'id',
    phone: 'phone',
    email: 'email',
    passwordHash: 'passwordHash',
    nickname: 'nickname',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
};
exports.UserProfileScalarFieldEnum = {
    id: 'id',
    userId: 'userId',
    mode: 'mode',
    tags: 'tags',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
};
exports.ParkScalarFieldEnum = {
    id: 'id',
    name: 'name',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
};
exports.ParkHoursScalarFieldEnum = {
    id: 'id',
    parkId: 'parkId',
    date: 'date',
    venueName: 'venueName',
    openTime: 'openTime',
    closeTime: 'closeTime',
    createdAt: 'createdAt'
};
exports.PoiScalarFieldEnum = {
    id: 'id',
    parkId: 'parkId',
    type: 'type',
    name: 'name',
    zone: 'zone',
    lat: 'lat',
    lng: 'lng',
    tags: 'tags',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
};
exports.PoiLiveScalarFieldEnum = {
    id: 'id',
    poiId: 'poiId',
    capturedAt: 'capturedAt',
    status: 'status',
    waitMin: 'waitMin'
};
exports.ShowSessionScalarFieldEnum = {
    id: 'id',
    poiId: 'poiId',
    startAt: 'startAt',
    endAt: 'endAt',
    status: 'status',
    createdAt: 'createdAt'
};
exports.PlanScalarFieldEnum = {
    id: 'id',
    userId: 'userId',
    parkId: 'parkId',
    mode: 'mode',
    template: 'template',
    data: 'data',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
};
exports.ProgressEventScalarFieldEnum = {
    id: 'id',
    userId: 'userId',
    planId: 'planId',
    poiId: 'poiId',
    type: 'type',
    payload: 'payload',
    createdAt: 'createdAt'
};
exports.ImportedArtifactScalarFieldEnum = {
    id: 'id',
    userId: 'userId',
    type: 'type',
    captureTime: 'captureTime',
    rawPath: 'rawPath',
    parsed: 'parsed',
    createdAt: 'createdAt'
};
exports.UserReservationScalarFieldEnum = {
    id: 'id',
    userId: 'userId',
    category: 'category',
    visitDate: 'visitDate',
    timeWindow: 'timeWindow',
    status: 'status',
    guestName: 'guestName',
    guestCount: 'guestCount',
    voucherHash: 'voucherHash',
    voucherLast4: 'voucherLast4',
    sourceImportId: 'sourceImportId',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
};
exports.SortOrder = {
    asc: 'asc',
    desc: 'desc'
};
exports.NullableJsonNullValueInput = {
    DbNull: exports.DbNull,
    JsonNull: exports.JsonNull
};
exports.JsonNullValueInput = {
    JsonNull: exports.JsonNull
};
exports.NullsOrder = {
    first: 'first',
    last: 'last'
};
exports.JsonNullValueFilter = {
    DbNull: exports.DbNull,
    JsonNull: exports.JsonNull,
    AnyNull: exports.AnyNull
};
exports.QueryMode = {
    default: 'default',
    insensitive: 'insensitive'
};
//# sourceMappingURL=prismaNamespaceBrowser.js.map