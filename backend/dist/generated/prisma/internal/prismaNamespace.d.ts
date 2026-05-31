import * as runtime from "@prisma/client/runtime/client";
import type * as Prisma from "../models.js";
import { type PrismaClient } from "./class.js";
export type * from '../models.js';
export type DMMF = typeof runtime.DMMF;
export type PrismaPromise<T> = runtime.Types.Public.PrismaPromise<T>;
export declare const PrismaClientKnownRequestError: typeof runtime.PrismaClientKnownRequestError;
export type PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError;
export declare const PrismaClientUnknownRequestError: typeof runtime.PrismaClientUnknownRequestError;
export type PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError;
export declare const PrismaClientRustPanicError: typeof runtime.PrismaClientRustPanicError;
export type PrismaClientRustPanicError = runtime.PrismaClientRustPanicError;
export declare const PrismaClientInitializationError: typeof runtime.PrismaClientInitializationError;
export type PrismaClientInitializationError = runtime.PrismaClientInitializationError;
export declare const PrismaClientValidationError: typeof runtime.PrismaClientValidationError;
export type PrismaClientValidationError = runtime.PrismaClientValidationError;
export declare const sql: typeof runtime.sqltag;
export declare const empty: runtime.Sql;
export declare const join: typeof runtime.join;
export declare const raw: typeof runtime.raw;
export declare const Sql: typeof runtime.Sql;
export type Sql = runtime.Sql;
export declare const Decimal: typeof runtime.Decimal;
export type Decimal = runtime.Decimal;
export type DecimalJsLike = runtime.DecimalJsLike;
export type Extension = runtime.Types.Extensions.UserArgs;
export declare const getExtensionContext: typeof runtime.Extensions.getExtensionContext;
export type Args<T, F extends runtime.Operation> = runtime.Types.Public.Args<T, F>;
export type Payload<T, F extends runtime.Operation = never> = runtime.Types.Public.Payload<T, F>;
export type Result<T, A, F extends runtime.Operation> = runtime.Types.Public.Result<T, A, F>;
export type Exact<A, W> = runtime.Types.Public.Exact<A, W>;
export type PrismaVersion = {
    client: string;
    engine: string;
};
export declare const prismaVersion: PrismaVersion;
export type Bytes = runtime.Bytes;
export type JsonObject = runtime.JsonObject;
export type JsonArray = runtime.JsonArray;
export type JsonValue = runtime.JsonValue;
export type InputJsonObject = runtime.InputJsonObject;
export type InputJsonArray = runtime.InputJsonArray;
export type InputJsonValue = runtime.InputJsonValue;
export declare const NullTypes: {
    DbNull: (new (secret: never) => typeof runtime.DbNull);
    JsonNull: (new (secret: never) => typeof runtime.JsonNull);
    AnyNull: (new (secret: never) => typeof runtime.AnyNull);
};
export declare const DbNull: any;
export declare const JsonNull: any;
export declare const AnyNull: any;
type SelectAndInclude = {
    select: any;
    include: any;
};
type SelectAndOmit = {
    select: any;
    omit: any;
};
type Prisma__Pick<T, K extends keyof T> = {
    [P in K]: T[P];
};
export type Enumerable<T> = T | Array<T>;
export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
};
export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
} & (T extends SelectAndInclude ? 'Please either choose `select` or `include`.' : T extends SelectAndOmit ? 'Please either choose `select` or `omit`.' : {});
export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
} & K;
type Without<T, U> = {
    [P in Exclude<keyof T, keyof U>]?: never;
};
export type XOR<T, U> = T extends object ? U extends object ? (Without<T, U> & U) | (Without<U, T> & T) : U : T;
type IsObject<T extends any> = T extends Array<any> ? False : T extends Date ? False : T extends Uint8Array ? False : T extends BigInt ? False : T extends object ? True : False;
export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T;
type __Either<O extends object, K extends Key> = Omit<O, K> & {
    [P in K]: Prisma__Pick<O, P & keyof O>;
}[K];
type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>;
type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>;
type _Either<O extends object, K extends Key, strict extends Boolean> = {
    1: EitherStrict<O, K>;
    0: EitherLoose<O, K>;
}[strict];
export type Either<O extends object, K extends Key, strict extends Boolean = 1> = O extends unknown ? _Either<O, K, strict> : never;
export type Union = any;
export type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K];
} & {};
export type IntersectOf<U extends Union> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;
export type Overwrite<O extends object, O1 extends object> = {
    [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
} & {};
type _Merge<U extends object> = IntersectOf<Overwrite<U, {
    [K in keyof U]-?: At<U, K>;
}>>;
type Key = string | number | symbol;
type AtStrict<O extends object, K extends Key> = O[K & keyof O];
type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
    1: AtStrict<O, K>;
    0: AtLoose<O, K>;
}[strict];
export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
} & {};
export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
} & {};
type _Record<K extends keyof any, T> = {
    [P in K]: T;
};
type NoExpand<T> = T extends unknown ? T : never;
export type AtLeast<O extends object, K extends string> = NoExpand<O extends unknown ? (K extends keyof O ? {
    [P in K]: O[P];
} & O : O) | {
    [P in keyof O as P extends K ? P : never]-?: O[P];
} & O : never>;
type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;
export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;
export type Boolean = True | False;
export type True = 1;
export type False = 0;
export type Not<B extends Boolean> = {
    0: 1;
    1: 0;
}[B];
export type Extends<A1 extends any, A2 extends any> = [A1] extends [never] ? 0 : A1 extends A2 ? 1 : 0;
export type Has<U extends Union, U1 extends Union> = Not<Extends<Exclude<U1, U>, U1>>;
export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
        0: 0;
        1: 1;
    };
    1: {
        0: 1;
        1: 1;
    };
}[B1][B2];
export type Keys<U extends Union> = U extends unknown ? keyof U : never;
export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O ? O[P] : never;
} : never;
type FieldPaths<T, U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>> = IsObject<T> extends True ? U : T;
export type GetHavingFields<T> = {
    [K in keyof T]: Or<Or<Extends<'OR', K>, Extends<'AND', K>>, Extends<'NOT', K>> extends True ? T[K] extends infer TK ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never> : never : {} extends FieldPaths<T[K]> ? never : K;
}[keyof T];
type _TupleToUnion<T> = T extends (infer E)[] ? E : never;
type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>;
export type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T;
export type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>;
export type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T;
export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>;
type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>;
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
export interface TypeMapCb<GlobalOmitOptions = {}> extends runtime.Types.Utils.Fn<{
    extArgs: runtime.Types.Extensions.InternalArgs;
}, runtime.Types.Utils.Record<string, any>> {
    returns: TypeMap<this['params']['extArgs'], GlobalOmitOptions>;
}
export type TypeMap<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
        omit: GlobalOmitOptions;
    };
    meta: {
        modelProps: "user" | "userProfile" | "park" | "parkHours" | "poi" | "poiLive" | "showSession" | "plan" | "progressEvent" | "importedArtifact" | "userReservation";
        txIsolationLevel: TransactionIsolationLevel;
    };
    model: {
        User: {
            payload: Prisma.$UserPayload<ExtArgs>;
            fields: Prisma.UserFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.UserFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$UserPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.UserFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$UserPayload>;
                };
                findFirst: {
                    args: Prisma.UserFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$UserPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.UserFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$UserPayload>;
                };
                findMany: {
                    args: Prisma.UserFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$UserPayload>[];
                };
                create: {
                    args: Prisma.UserCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$UserPayload>;
                };
                createMany: {
                    args: Prisma.UserCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.UserCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$UserPayload>[];
                };
                delete: {
                    args: Prisma.UserDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$UserPayload>;
                };
                update: {
                    args: Prisma.UserUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$UserPayload>;
                };
                deleteMany: {
                    args: Prisma.UserDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.UserUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.UserUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$UserPayload>[];
                };
                upsert: {
                    args: Prisma.UserUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$UserPayload>;
                };
                aggregate: {
                    args: Prisma.UserAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateUser>;
                };
                groupBy: {
                    args: Prisma.UserGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.UserGroupByOutputType>[];
                };
                count: {
                    args: Prisma.UserCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.UserCountAggregateOutputType> | number;
                };
            };
        };
        UserProfile: {
            payload: Prisma.$UserProfilePayload<ExtArgs>;
            fields: Prisma.UserProfileFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.UserProfileFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$UserProfilePayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.UserProfileFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$UserProfilePayload>;
                };
                findFirst: {
                    args: Prisma.UserProfileFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$UserProfilePayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.UserProfileFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$UserProfilePayload>;
                };
                findMany: {
                    args: Prisma.UserProfileFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$UserProfilePayload>[];
                };
                create: {
                    args: Prisma.UserProfileCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$UserProfilePayload>;
                };
                createMany: {
                    args: Prisma.UserProfileCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.UserProfileCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$UserProfilePayload>[];
                };
                delete: {
                    args: Prisma.UserProfileDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$UserProfilePayload>;
                };
                update: {
                    args: Prisma.UserProfileUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$UserProfilePayload>;
                };
                deleteMany: {
                    args: Prisma.UserProfileDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.UserProfileUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.UserProfileUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$UserProfilePayload>[];
                };
                upsert: {
                    args: Prisma.UserProfileUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$UserProfilePayload>;
                };
                aggregate: {
                    args: Prisma.UserProfileAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateUserProfile>;
                };
                groupBy: {
                    args: Prisma.UserProfileGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.UserProfileGroupByOutputType>[];
                };
                count: {
                    args: Prisma.UserProfileCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.UserProfileCountAggregateOutputType> | number;
                };
            };
        };
        Park: {
            payload: Prisma.$ParkPayload<ExtArgs>;
            fields: Prisma.ParkFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.ParkFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ParkPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.ParkFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ParkPayload>;
                };
                findFirst: {
                    args: Prisma.ParkFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ParkPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.ParkFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ParkPayload>;
                };
                findMany: {
                    args: Prisma.ParkFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ParkPayload>[];
                };
                create: {
                    args: Prisma.ParkCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ParkPayload>;
                };
                createMany: {
                    args: Prisma.ParkCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.ParkCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ParkPayload>[];
                };
                delete: {
                    args: Prisma.ParkDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ParkPayload>;
                };
                update: {
                    args: Prisma.ParkUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ParkPayload>;
                };
                deleteMany: {
                    args: Prisma.ParkDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.ParkUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.ParkUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ParkPayload>[];
                };
                upsert: {
                    args: Prisma.ParkUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ParkPayload>;
                };
                aggregate: {
                    args: Prisma.ParkAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregatePark>;
                };
                groupBy: {
                    args: Prisma.ParkGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.ParkGroupByOutputType>[];
                };
                count: {
                    args: Prisma.ParkCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.ParkCountAggregateOutputType> | number;
                };
            };
        };
        ParkHours: {
            payload: Prisma.$ParkHoursPayload<ExtArgs>;
            fields: Prisma.ParkHoursFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.ParkHoursFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ParkHoursPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.ParkHoursFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ParkHoursPayload>;
                };
                findFirst: {
                    args: Prisma.ParkHoursFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ParkHoursPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.ParkHoursFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ParkHoursPayload>;
                };
                findMany: {
                    args: Prisma.ParkHoursFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ParkHoursPayload>[];
                };
                create: {
                    args: Prisma.ParkHoursCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ParkHoursPayload>;
                };
                createMany: {
                    args: Prisma.ParkHoursCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.ParkHoursCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ParkHoursPayload>[];
                };
                delete: {
                    args: Prisma.ParkHoursDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ParkHoursPayload>;
                };
                update: {
                    args: Prisma.ParkHoursUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ParkHoursPayload>;
                };
                deleteMany: {
                    args: Prisma.ParkHoursDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.ParkHoursUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.ParkHoursUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ParkHoursPayload>[];
                };
                upsert: {
                    args: Prisma.ParkHoursUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ParkHoursPayload>;
                };
                aggregate: {
                    args: Prisma.ParkHoursAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateParkHours>;
                };
                groupBy: {
                    args: Prisma.ParkHoursGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.ParkHoursGroupByOutputType>[];
                };
                count: {
                    args: Prisma.ParkHoursCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.ParkHoursCountAggregateOutputType> | number;
                };
            };
        };
        Poi: {
            payload: Prisma.$PoiPayload<ExtArgs>;
            fields: Prisma.PoiFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.PoiFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$PoiPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.PoiFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$PoiPayload>;
                };
                findFirst: {
                    args: Prisma.PoiFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$PoiPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.PoiFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$PoiPayload>;
                };
                findMany: {
                    args: Prisma.PoiFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$PoiPayload>[];
                };
                create: {
                    args: Prisma.PoiCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$PoiPayload>;
                };
                createMany: {
                    args: Prisma.PoiCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.PoiCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$PoiPayload>[];
                };
                delete: {
                    args: Prisma.PoiDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$PoiPayload>;
                };
                update: {
                    args: Prisma.PoiUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$PoiPayload>;
                };
                deleteMany: {
                    args: Prisma.PoiDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.PoiUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.PoiUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$PoiPayload>[];
                };
                upsert: {
                    args: Prisma.PoiUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$PoiPayload>;
                };
                aggregate: {
                    args: Prisma.PoiAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregatePoi>;
                };
                groupBy: {
                    args: Prisma.PoiGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.PoiGroupByOutputType>[];
                };
                count: {
                    args: Prisma.PoiCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.PoiCountAggregateOutputType> | number;
                };
            };
        };
        PoiLive: {
            payload: Prisma.$PoiLivePayload<ExtArgs>;
            fields: Prisma.PoiLiveFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.PoiLiveFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$PoiLivePayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.PoiLiveFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$PoiLivePayload>;
                };
                findFirst: {
                    args: Prisma.PoiLiveFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$PoiLivePayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.PoiLiveFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$PoiLivePayload>;
                };
                findMany: {
                    args: Prisma.PoiLiveFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$PoiLivePayload>[];
                };
                create: {
                    args: Prisma.PoiLiveCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$PoiLivePayload>;
                };
                createMany: {
                    args: Prisma.PoiLiveCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.PoiLiveCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$PoiLivePayload>[];
                };
                delete: {
                    args: Prisma.PoiLiveDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$PoiLivePayload>;
                };
                update: {
                    args: Prisma.PoiLiveUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$PoiLivePayload>;
                };
                deleteMany: {
                    args: Prisma.PoiLiveDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.PoiLiveUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.PoiLiveUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$PoiLivePayload>[];
                };
                upsert: {
                    args: Prisma.PoiLiveUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$PoiLivePayload>;
                };
                aggregate: {
                    args: Prisma.PoiLiveAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregatePoiLive>;
                };
                groupBy: {
                    args: Prisma.PoiLiveGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.PoiLiveGroupByOutputType>[];
                };
                count: {
                    args: Prisma.PoiLiveCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.PoiLiveCountAggregateOutputType> | number;
                };
            };
        };
        ShowSession: {
            payload: Prisma.$ShowSessionPayload<ExtArgs>;
            fields: Prisma.ShowSessionFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.ShowSessionFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ShowSessionPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.ShowSessionFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ShowSessionPayload>;
                };
                findFirst: {
                    args: Prisma.ShowSessionFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ShowSessionPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.ShowSessionFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ShowSessionPayload>;
                };
                findMany: {
                    args: Prisma.ShowSessionFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ShowSessionPayload>[];
                };
                create: {
                    args: Prisma.ShowSessionCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ShowSessionPayload>;
                };
                createMany: {
                    args: Prisma.ShowSessionCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.ShowSessionCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ShowSessionPayload>[];
                };
                delete: {
                    args: Prisma.ShowSessionDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ShowSessionPayload>;
                };
                update: {
                    args: Prisma.ShowSessionUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ShowSessionPayload>;
                };
                deleteMany: {
                    args: Prisma.ShowSessionDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.ShowSessionUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.ShowSessionUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ShowSessionPayload>[];
                };
                upsert: {
                    args: Prisma.ShowSessionUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ShowSessionPayload>;
                };
                aggregate: {
                    args: Prisma.ShowSessionAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateShowSession>;
                };
                groupBy: {
                    args: Prisma.ShowSessionGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.ShowSessionGroupByOutputType>[];
                };
                count: {
                    args: Prisma.ShowSessionCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.ShowSessionCountAggregateOutputType> | number;
                };
            };
        };
        Plan: {
            payload: Prisma.$PlanPayload<ExtArgs>;
            fields: Prisma.PlanFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.PlanFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$PlanPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.PlanFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$PlanPayload>;
                };
                findFirst: {
                    args: Prisma.PlanFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$PlanPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.PlanFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$PlanPayload>;
                };
                findMany: {
                    args: Prisma.PlanFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$PlanPayload>[];
                };
                create: {
                    args: Prisma.PlanCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$PlanPayload>;
                };
                createMany: {
                    args: Prisma.PlanCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.PlanCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$PlanPayload>[];
                };
                delete: {
                    args: Prisma.PlanDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$PlanPayload>;
                };
                update: {
                    args: Prisma.PlanUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$PlanPayload>;
                };
                deleteMany: {
                    args: Prisma.PlanDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.PlanUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.PlanUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$PlanPayload>[];
                };
                upsert: {
                    args: Prisma.PlanUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$PlanPayload>;
                };
                aggregate: {
                    args: Prisma.PlanAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregatePlan>;
                };
                groupBy: {
                    args: Prisma.PlanGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.PlanGroupByOutputType>[];
                };
                count: {
                    args: Prisma.PlanCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.PlanCountAggregateOutputType> | number;
                };
            };
        };
        ProgressEvent: {
            payload: Prisma.$ProgressEventPayload<ExtArgs>;
            fields: Prisma.ProgressEventFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.ProgressEventFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ProgressEventPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.ProgressEventFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ProgressEventPayload>;
                };
                findFirst: {
                    args: Prisma.ProgressEventFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ProgressEventPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.ProgressEventFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ProgressEventPayload>;
                };
                findMany: {
                    args: Prisma.ProgressEventFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ProgressEventPayload>[];
                };
                create: {
                    args: Prisma.ProgressEventCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ProgressEventPayload>;
                };
                createMany: {
                    args: Prisma.ProgressEventCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.ProgressEventCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ProgressEventPayload>[];
                };
                delete: {
                    args: Prisma.ProgressEventDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ProgressEventPayload>;
                };
                update: {
                    args: Prisma.ProgressEventUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ProgressEventPayload>;
                };
                deleteMany: {
                    args: Prisma.ProgressEventDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.ProgressEventUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.ProgressEventUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ProgressEventPayload>[];
                };
                upsert: {
                    args: Prisma.ProgressEventUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ProgressEventPayload>;
                };
                aggregate: {
                    args: Prisma.ProgressEventAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateProgressEvent>;
                };
                groupBy: {
                    args: Prisma.ProgressEventGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.ProgressEventGroupByOutputType>[];
                };
                count: {
                    args: Prisma.ProgressEventCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.ProgressEventCountAggregateOutputType> | number;
                };
            };
        };
        ImportedArtifact: {
            payload: Prisma.$ImportedArtifactPayload<ExtArgs>;
            fields: Prisma.ImportedArtifactFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.ImportedArtifactFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ImportedArtifactPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.ImportedArtifactFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ImportedArtifactPayload>;
                };
                findFirst: {
                    args: Prisma.ImportedArtifactFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ImportedArtifactPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.ImportedArtifactFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ImportedArtifactPayload>;
                };
                findMany: {
                    args: Prisma.ImportedArtifactFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ImportedArtifactPayload>[];
                };
                create: {
                    args: Prisma.ImportedArtifactCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ImportedArtifactPayload>;
                };
                createMany: {
                    args: Prisma.ImportedArtifactCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.ImportedArtifactCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ImportedArtifactPayload>[];
                };
                delete: {
                    args: Prisma.ImportedArtifactDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ImportedArtifactPayload>;
                };
                update: {
                    args: Prisma.ImportedArtifactUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ImportedArtifactPayload>;
                };
                deleteMany: {
                    args: Prisma.ImportedArtifactDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.ImportedArtifactUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.ImportedArtifactUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ImportedArtifactPayload>[];
                };
                upsert: {
                    args: Prisma.ImportedArtifactUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ImportedArtifactPayload>;
                };
                aggregate: {
                    args: Prisma.ImportedArtifactAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateImportedArtifact>;
                };
                groupBy: {
                    args: Prisma.ImportedArtifactGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.ImportedArtifactGroupByOutputType>[];
                };
                count: {
                    args: Prisma.ImportedArtifactCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.ImportedArtifactCountAggregateOutputType> | number;
                };
            };
        };
        UserReservation: {
            payload: Prisma.$UserReservationPayload<ExtArgs>;
            fields: Prisma.UserReservationFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.UserReservationFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$UserReservationPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.UserReservationFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$UserReservationPayload>;
                };
                findFirst: {
                    args: Prisma.UserReservationFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$UserReservationPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.UserReservationFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$UserReservationPayload>;
                };
                findMany: {
                    args: Prisma.UserReservationFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$UserReservationPayload>[];
                };
                create: {
                    args: Prisma.UserReservationCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$UserReservationPayload>;
                };
                createMany: {
                    args: Prisma.UserReservationCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.UserReservationCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$UserReservationPayload>[];
                };
                delete: {
                    args: Prisma.UserReservationDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$UserReservationPayload>;
                };
                update: {
                    args: Prisma.UserReservationUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$UserReservationPayload>;
                };
                deleteMany: {
                    args: Prisma.UserReservationDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.UserReservationUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.UserReservationUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$UserReservationPayload>[];
                };
                upsert: {
                    args: Prisma.UserReservationUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$UserReservationPayload>;
                };
                aggregate: {
                    args: Prisma.UserReservationAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateUserReservation>;
                };
                groupBy: {
                    args: Prisma.UserReservationGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.UserReservationGroupByOutputType>[];
                };
                count: {
                    args: Prisma.UserReservationCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.UserReservationCountAggregateOutputType> | number;
                };
            };
        };
    };
} & {
    other: {
        payload: any;
        operations: {
            $executeRaw: {
                args: [query: TemplateStringsArray | Sql, ...values: any[]];
                result: any;
            };
            $executeRawUnsafe: {
                args: [query: string, ...values: any[]];
                result: any;
            };
            $queryRaw: {
                args: [query: TemplateStringsArray | Sql, ...values: any[]];
                result: any;
            };
            $queryRawUnsafe: {
                args: [query: string, ...values: any[]];
                result: any;
            };
        };
    };
};
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
export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>;
export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>;
export type EnumGuideModeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'GuideMode'>;
export type JsonFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Json'>;
export type EnumQueryModeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'QueryMode'>;
export type EnumPoiTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'PoiType'>;
export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>;
export type EnumPoiStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'PoiStatus'>;
export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>;
export type EnumReservationStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'ReservationStatus'>;
export type BatchPayload = {
    count: number;
};
export declare const defineExtension: runtime.Types.Extensions.ExtendsHook<"define", TypeMapCb, runtime.Types.Extensions.DefaultArgs>;
export type DefaultPrismaClient = PrismaClient;
export type ErrorFormat = 'pretty' | 'colorless' | 'minimal';
export type PrismaClientOptions = ({
    adapter: runtime.SqlDriverAdapterFactory;
    accelerateUrl?: never;
} | {
    accelerateUrl: string;
    adapter?: never;
}) & {
    errorFormat?: ErrorFormat;
    log?: (LogLevel | LogDefinition)[];
    transactionOptions?: {
        maxWait?: number;
        timeout?: number;
        isolationLevel?: TransactionIsolationLevel;
    };
    omit?: GlobalOmitConfig;
    comments?: runtime.SqlCommenterPlugin[];
    queryPlanCacheMaxSize?: number;
};
export type GlobalOmitConfig = {
    user?: Prisma.UserOmit;
    userProfile?: Prisma.UserProfileOmit;
    park?: Prisma.ParkOmit;
    parkHours?: Prisma.ParkHoursOmit;
    poi?: Prisma.PoiOmit;
    poiLive?: Prisma.PoiLiveOmit;
    showSession?: Prisma.ShowSessionOmit;
    plan?: Prisma.PlanOmit;
    progressEvent?: Prisma.ProgressEventOmit;
    importedArtifact?: Prisma.ImportedArtifactOmit;
    userReservation?: Prisma.UserReservationOmit;
};
export type LogLevel = 'info' | 'query' | 'warn' | 'error';
export type LogDefinition = {
    level: LogLevel;
    emit: 'stdout' | 'event';
};
export type CheckIsLogLevel<T> = T extends LogLevel ? T : never;
export type GetLogType<T> = CheckIsLogLevel<T extends LogDefinition ? T['level'] : T>;
export type GetEvents<T extends any[]> = T extends Array<LogLevel | LogDefinition> ? GetLogType<T[number]> : never;
export type QueryEvent = {
    timestamp: Date;
    query: string;
    params: string;
    duration: number;
    target: string;
};
export type LogEvent = {
    timestamp: Date;
    message: string;
    target: string;
};
export type PrismaAction = 'findUnique' | 'findUniqueOrThrow' | 'findMany' | 'findFirst' | 'findFirstOrThrow' | 'create' | 'createMany' | 'createManyAndReturn' | 'update' | 'updateMany' | 'updateManyAndReturn' | 'upsert' | 'delete' | 'deleteMany' | 'executeRaw' | 'queryRaw' | 'aggregate' | 'count' | 'runCommandRaw' | 'findRaw' | 'groupBy';
export type TransactionClient = Omit<DefaultPrismaClient, runtime.ITXClientDenyList>;
