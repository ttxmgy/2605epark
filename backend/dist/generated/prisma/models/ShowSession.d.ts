import type * as runtime from "@prisma/client/runtime/client";
import type * as Prisma from "../internal/prismaNamespace.js";
export type ShowSessionModel = runtime.Types.Result.DefaultSelection<Prisma.$ShowSessionPayload>;
export type AggregateShowSession = {
    _count: ShowSessionCountAggregateOutputType | null;
    _min: ShowSessionMinAggregateOutputType | null;
    _max: ShowSessionMaxAggregateOutputType | null;
};
export type ShowSessionMinAggregateOutputType = {
    id: string | null;
    poiId: string | null;
    startAt: Date | null;
    endAt: Date | null;
    status: string | null;
    createdAt: Date | null;
};
export type ShowSessionMaxAggregateOutputType = {
    id: string | null;
    poiId: string | null;
    startAt: Date | null;
    endAt: Date | null;
    status: string | null;
    createdAt: Date | null;
};
export type ShowSessionCountAggregateOutputType = {
    id: number;
    poiId: number;
    startAt: number;
    endAt: number;
    status: number;
    createdAt: number;
    _all: number;
};
export type ShowSessionMinAggregateInputType = {
    id?: true;
    poiId?: true;
    startAt?: true;
    endAt?: true;
    status?: true;
    createdAt?: true;
};
export type ShowSessionMaxAggregateInputType = {
    id?: true;
    poiId?: true;
    startAt?: true;
    endAt?: true;
    status?: true;
    createdAt?: true;
};
export type ShowSessionCountAggregateInputType = {
    id?: true;
    poiId?: true;
    startAt?: true;
    endAt?: true;
    status?: true;
    createdAt?: true;
    _all?: true;
};
export type ShowSessionAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.ShowSessionWhereInput;
    orderBy?: Prisma.ShowSessionOrderByWithRelationInput | Prisma.ShowSessionOrderByWithRelationInput[];
    cursor?: Prisma.ShowSessionWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | ShowSessionCountAggregateInputType;
    _min?: ShowSessionMinAggregateInputType;
    _max?: ShowSessionMaxAggregateInputType;
};
export type GetShowSessionAggregateType<T extends ShowSessionAggregateArgs> = {
    [P in keyof T & keyof AggregateShowSession]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateShowSession[P]> : Prisma.GetScalarType<T[P], AggregateShowSession[P]>;
};
export type ShowSessionGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.ShowSessionWhereInput;
    orderBy?: Prisma.ShowSessionOrderByWithAggregationInput | Prisma.ShowSessionOrderByWithAggregationInput[];
    by: Prisma.ShowSessionScalarFieldEnum[] | Prisma.ShowSessionScalarFieldEnum;
    having?: Prisma.ShowSessionScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: ShowSessionCountAggregateInputType | true;
    _min?: ShowSessionMinAggregateInputType;
    _max?: ShowSessionMaxAggregateInputType;
};
export type ShowSessionGroupByOutputType = {
    id: string;
    poiId: string;
    startAt: Date;
    endAt: Date | null;
    status: string | null;
    createdAt: Date;
    _count: ShowSessionCountAggregateOutputType | null;
    _min: ShowSessionMinAggregateOutputType | null;
    _max: ShowSessionMaxAggregateOutputType | null;
};
export type GetShowSessionGroupByPayload<T extends ShowSessionGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<ShowSessionGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof ShowSessionGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], ShowSessionGroupByOutputType[P]> : Prisma.GetScalarType<T[P], ShowSessionGroupByOutputType[P]>;
}>>;
export type ShowSessionWhereInput = {
    AND?: Prisma.ShowSessionWhereInput | Prisma.ShowSessionWhereInput[];
    OR?: Prisma.ShowSessionWhereInput[];
    NOT?: Prisma.ShowSessionWhereInput | Prisma.ShowSessionWhereInput[];
    id?: Prisma.StringFilter<"ShowSession"> | string;
    poiId?: Prisma.StringFilter<"ShowSession"> | string;
    startAt?: Prisma.DateTimeFilter<"ShowSession"> | Date | string;
    endAt?: Prisma.DateTimeNullableFilter<"ShowSession"> | Date | string | null;
    status?: Prisma.StringNullableFilter<"ShowSession"> | string | null;
    createdAt?: Prisma.DateTimeFilter<"ShowSession"> | Date | string;
    poi?: Prisma.XOR<Prisma.PoiScalarRelationFilter, Prisma.PoiWhereInput>;
};
export type ShowSessionOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    poiId?: Prisma.SortOrder;
    startAt?: Prisma.SortOrder;
    endAt?: Prisma.SortOrderInput | Prisma.SortOrder;
    status?: Prisma.SortOrderInput | Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    poi?: Prisma.PoiOrderByWithRelationInput;
};
export type ShowSessionWhereUniqueInput = Prisma.AtLeast<{
    id?: string;
    AND?: Prisma.ShowSessionWhereInput | Prisma.ShowSessionWhereInput[];
    OR?: Prisma.ShowSessionWhereInput[];
    NOT?: Prisma.ShowSessionWhereInput | Prisma.ShowSessionWhereInput[];
    poiId?: Prisma.StringFilter<"ShowSession"> | string;
    startAt?: Prisma.DateTimeFilter<"ShowSession"> | Date | string;
    endAt?: Prisma.DateTimeNullableFilter<"ShowSession"> | Date | string | null;
    status?: Prisma.StringNullableFilter<"ShowSession"> | string | null;
    createdAt?: Prisma.DateTimeFilter<"ShowSession"> | Date | string;
    poi?: Prisma.XOR<Prisma.PoiScalarRelationFilter, Prisma.PoiWhereInput>;
}, "id">;
export type ShowSessionOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    poiId?: Prisma.SortOrder;
    startAt?: Prisma.SortOrder;
    endAt?: Prisma.SortOrderInput | Prisma.SortOrder;
    status?: Prisma.SortOrderInput | Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    _count?: Prisma.ShowSessionCountOrderByAggregateInput;
    _max?: Prisma.ShowSessionMaxOrderByAggregateInput;
    _min?: Prisma.ShowSessionMinOrderByAggregateInput;
};
export type ShowSessionScalarWhereWithAggregatesInput = {
    AND?: Prisma.ShowSessionScalarWhereWithAggregatesInput | Prisma.ShowSessionScalarWhereWithAggregatesInput[];
    OR?: Prisma.ShowSessionScalarWhereWithAggregatesInput[];
    NOT?: Prisma.ShowSessionScalarWhereWithAggregatesInput | Prisma.ShowSessionScalarWhereWithAggregatesInput[];
    id?: Prisma.StringWithAggregatesFilter<"ShowSession"> | string;
    poiId?: Prisma.StringWithAggregatesFilter<"ShowSession"> | string;
    startAt?: Prisma.DateTimeWithAggregatesFilter<"ShowSession"> | Date | string;
    endAt?: Prisma.DateTimeNullableWithAggregatesFilter<"ShowSession"> | Date | string | null;
    status?: Prisma.StringNullableWithAggregatesFilter<"ShowSession"> | string | null;
    createdAt?: Prisma.DateTimeWithAggregatesFilter<"ShowSession"> | Date | string;
};
export type ShowSessionCreateInput = {
    id?: string;
    startAt: Date | string;
    endAt?: Date | string | null;
    status?: string | null;
    createdAt?: Date | string;
    poi: Prisma.PoiCreateNestedOneWithoutShowsInput;
};
export type ShowSessionUncheckedCreateInput = {
    id?: string;
    poiId: string;
    startAt: Date | string;
    endAt?: Date | string | null;
    status?: string | null;
    createdAt?: Date | string;
};
export type ShowSessionUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    startAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    endAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    status?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    poi?: Prisma.PoiUpdateOneRequiredWithoutShowsNestedInput;
};
export type ShowSessionUncheckedUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    poiId?: Prisma.StringFieldUpdateOperationsInput | string;
    startAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    endAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    status?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type ShowSessionCreateManyInput = {
    id?: string;
    poiId: string;
    startAt: Date | string;
    endAt?: Date | string | null;
    status?: string | null;
    createdAt?: Date | string;
};
export type ShowSessionUpdateManyMutationInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    startAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    endAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    status?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type ShowSessionUncheckedUpdateManyInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    poiId?: Prisma.StringFieldUpdateOperationsInput | string;
    startAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    endAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    status?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type ShowSessionListRelationFilter = {
    every?: Prisma.ShowSessionWhereInput;
    some?: Prisma.ShowSessionWhereInput;
    none?: Prisma.ShowSessionWhereInput;
};
export type ShowSessionOrderByRelationAggregateInput = {
    _count?: Prisma.SortOrder;
};
export type ShowSessionCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    poiId?: Prisma.SortOrder;
    startAt?: Prisma.SortOrder;
    endAt?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
};
export type ShowSessionMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    poiId?: Prisma.SortOrder;
    startAt?: Prisma.SortOrder;
    endAt?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
};
export type ShowSessionMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    poiId?: Prisma.SortOrder;
    startAt?: Prisma.SortOrder;
    endAt?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
};
export type ShowSessionCreateNestedManyWithoutPoiInput = {
    create?: Prisma.XOR<Prisma.ShowSessionCreateWithoutPoiInput, Prisma.ShowSessionUncheckedCreateWithoutPoiInput> | Prisma.ShowSessionCreateWithoutPoiInput[] | Prisma.ShowSessionUncheckedCreateWithoutPoiInput[];
    connectOrCreate?: Prisma.ShowSessionCreateOrConnectWithoutPoiInput | Prisma.ShowSessionCreateOrConnectWithoutPoiInput[];
    createMany?: Prisma.ShowSessionCreateManyPoiInputEnvelope;
    connect?: Prisma.ShowSessionWhereUniqueInput | Prisma.ShowSessionWhereUniqueInput[];
};
export type ShowSessionUncheckedCreateNestedManyWithoutPoiInput = {
    create?: Prisma.XOR<Prisma.ShowSessionCreateWithoutPoiInput, Prisma.ShowSessionUncheckedCreateWithoutPoiInput> | Prisma.ShowSessionCreateWithoutPoiInput[] | Prisma.ShowSessionUncheckedCreateWithoutPoiInput[];
    connectOrCreate?: Prisma.ShowSessionCreateOrConnectWithoutPoiInput | Prisma.ShowSessionCreateOrConnectWithoutPoiInput[];
    createMany?: Prisma.ShowSessionCreateManyPoiInputEnvelope;
    connect?: Prisma.ShowSessionWhereUniqueInput | Prisma.ShowSessionWhereUniqueInput[];
};
export type ShowSessionUpdateManyWithoutPoiNestedInput = {
    create?: Prisma.XOR<Prisma.ShowSessionCreateWithoutPoiInput, Prisma.ShowSessionUncheckedCreateWithoutPoiInput> | Prisma.ShowSessionCreateWithoutPoiInput[] | Prisma.ShowSessionUncheckedCreateWithoutPoiInput[];
    connectOrCreate?: Prisma.ShowSessionCreateOrConnectWithoutPoiInput | Prisma.ShowSessionCreateOrConnectWithoutPoiInput[];
    upsert?: Prisma.ShowSessionUpsertWithWhereUniqueWithoutPoiInput | Prisma.ShowSessionUpsertWithWhereUniqueWithoutPoiInput[];
    createMany?: Prisma.ShowSessionCreateManyPoiInputEnvelope;
    set?: Prisma.ShowSessionWhereUniqueInput | Prisma.ShowSessionWhereUniqueInput[];
    disconnect?: Prisma.ShowSessionWhereUniqueInput | Prisma.ShowSessionWhereUniqueInput[];
    delete?: Prisma.ShowSessionWhereUniqueInput | Prisma.ShowSessionWhereUniqueInput[];
    connect?: Prisma.ShowSessionWhereUniqueInput | Prisma.ShowSessionWhereUniqueInput[];
    update?: Prisma.ShowSessionUpdateWithWhereUniqueWithoutPoiInput | Prisma.ShowSessionUpdateWithWhereUniqueWithoutPoiInput[];
    updateMany?: Prisma.ShowSessionUpdateManyWithWhereWithoutPoiInput | Prisma.ShowSessionUpdateManyWithWhereWithoutPoiInput[];
    deleteMany?: Prisma.ShowSessionScalarWhereInput | Prisma.ShowSessionScalarWhereInput[];
};
export type ShowSessionUncheckedUpdateManyWithoutPoiNestedInput = {
    create?: Prisma.XOR<Prisma.ShowSessionCreateWithoutPoiInput, Prisma.ShowSessionUncheckedCreateWithoutPoiInput> | Prisma.ShowSessionCreateWithoutPoiInput[] | Prisma.ShowSessionUncheckedCreateWithoutPoiInput[];
    connectOrCreate?: Prisma.ShowSessionCreateOrConnectWithoutPoiInput | Prisma.ShowSessionCreateOrConnectWithoutPoiInput[];
    upsert?: Prisma.ShowSessionUpsertWithWhereUniqueWithoutPoiInput | Prisma.ShowSessionUpsertWithWhereUniqueWithoutPoiInput[];
    createMany?: Prisma.ShowSessionCreateManyPoiInputEnvelope;
    set?: Prisma.ShowSessionWhereUniqueInput | Prisma.ShowSessionWhereUniqueInput[];
    disconnect?: Prisma.ShowSessionWhereUniqueInput | Prisma.ShowSessionWhereUniqueInput[];
    delete?: Prisma.ShowSessionWhereUniqueInput | Prisma.ShowSessionWhereUniqueInput[];
    connect?: Prisma.ShowSessionWhereUniqueInput | Prisma.ShowSessionWhereUniqueInput[];
    update?: Prisma.ShowSessionUpdateWithWhereUniqueWithoutPoiInput | Prisma.ShowSessionUpdateWithWhereUniqueWithoutPoiInput[];
    updateMany?: Prisma.ShowSessionUpdateManyWithWhereWithoutPoiInput | Prisma.ShowSessionUpdateManyWithWhereWithoutPoiInput[];
    deleteMany?: Prisma.ShowSessionScalarWhereInput | Prisma.ShowSessionScalarWhereInput[];
};
export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null;
};
export type ShowSessionCreateWithoutPoiInput = {
    id?: string;
    startAt: Date | string;
    endAt?: Date | string | null;
    status?: string | null;
    createdAt?: Date | string;
};
export type ShowSessionUncheckedCreateWithoutPoiInput = {
    id?: string;
    startAt: Date | string;
    endAt?: Date | string | null;
    status?: string | null;
    createdAt?: Date | string;
};
export type ShowSessionCreateOrConnectWithoutPoiInput = {
    where: Prisma.ShowSessionWhereUniqueInput;
    create: Prisma.XOR<Prisma.ShowSessionCreateWithoutPoiInput, Prisma.ShowSessionUncheckedCreateWithoutPoiInput>;
};
export type ShowSessionCreateManyPoiInputEnvelope = {
    data: Prisma.ShowSessionCreateManyPoiInput | Prisma.ShowSessionCreateManyPoiInput[];
};
export type ShowSessionUpsertWithWhereUniqueWithoutPoiInput = {
    where: Prisma.ShowSessionWhereUniqueInput;
    update: Prisma.XOR<Prisma.ShowSessionUpdateWithoutPoiInput, Prisma.ShowSessionUncheckedUpdateWithoutPoiInput>;
    create: Prisma.XOR<Prisma.ShowSessionCreateWithoutPoiInput, Prisma.ShowSessionUncheckedCreateWithoutPoiInput>;
};
export type ShowSessionUpdateWithWhereUniqueWithoutPoiInput = {
    where: Prisma.ShowSessionWhereUniqueInput;
    data: Prisma.XOR<Prisma.ShowSessionUpdateWithoutPoiInput, Prisma.ShowSessionUncheckedUpdateWithoutPoiInput>;
};
export type ShowSessionUpdateManyWithWhereWithoutPoiInput = {
    where: Prisma.ShowSessionScalarWhereInput;
    data: Prisma.XOR<Prisma.ShowSessionUpdateManyMutationInput, Prisma.ShowSessionUncheckedUpdateManyWithoutPoiInput>;
};
export type ShowSessionScalarWhereInput = {
    AND?: Prisma.ShowSessionScalarWhereInput | Prisma.ShowSessionScalarWhereInput[];
    OR?: Prisma.ShowSessionScalarWhereInput[];
    NOT?: Prisma.ShowSessionScalarWhereInput | Prisma.ShowSessionScalarWhereInput[];
    id?: Prisma.StringFilter<"ShowSession"> | string;
    poiId?: Prisma.StringFilter<"ShowSession"> | string;
    startAt?: Prisma.DateTimeFilter<"ShowSession"> | Date | string;
    endAt?: Prisma.DateTimeNullableFilter<"ShowSession"> | Date | string | null;
    status?: Prisma.StringNullableFilter<"ShowSession"> | string | null;
    createdAt?: Prisma.DateTimeFilter<"ShowSession"> | Date | string;
};
export type ShowSessionCreateManyPoiInput = {
    id?: string;
    startAt: Date | string;
    endAt?: Date | string | null;
    status?: string | null;
    createdAt?: Date | string;
};
export type ShowSessionUpdateWithoutPoiInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    startAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    endAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    status?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type ShowSessionUncheckedUpdateWithoutPoiInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    startAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    endAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    status?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type ShowSessionUncheckedUpdateManyWithoutPoiInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    startAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    endAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    status?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type ShowSessionSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    poiId?: boolean;
    startAt?: boolean;
    endAt?: boolean;
    status?: boolean;
    createdAt?: boolean;
    poi?: boolean | Prisma.PoiDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["showSession"]>;
export type ShowSessionSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    poiId?: boolean;
    startAt?: boolean;
    endAt?: boolean;
    status?: boolean;
    createdAt?: boolean;
    poi?: boolean | Prisma.PoiDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["showSession"]>;
export type ShowSessionSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    poiId?: boolean;
    startAt?: boolean;
    endAt?: boolean;
    status?: boolean;
    createdAt?: boolean;
    poi?: boolean | Prisma.PoiDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["showSession"]>;
export type ShowSessionSelectScalar = {
    id?: boolean;
    poiId?: boolean;
    startAt?: boolean;
    endAt?: boolean;
    status?: boolean;
    createdAt?: boolean;
};
export type ShowSessionOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "poiId" | "startAt" | "endAt" | "status" | "createdAt", ExtArgs["result"]["showSession"]>;
export type ShowSessionInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    poi?: boolean | Prisma.PoiDefaultArgs<ExtArgs>;
};
export type ShowSessionIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    poi?: boolean | Prisma.PoiDefaultArgs<ExtArgs>;
};
export type ShowSessionIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    poi?: boolean | Prisma.PoiDefaultArgs<ExtArgs>;
};
export type $ShowSessionPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "ShowSession";
    objects: {
        poi: Prisma.$PoiPayload<ExtArgs>;
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: string;
        poiId: string;
        startAt: Date;
        endAt: Date | null;
        status: string | null;
        createdAt: Date;
    }, ExtArgs["result"]["showSession"]>;
    composites: {};
};
export type ShowSessionGetPayload<S extends boolean | null | undefined | ShowSessionDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$ShowSessionPayload, S>;
export type ShowSessionCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<ShowSessionFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: ShowSessionCountAggregateInputType | true;
};
export interface ShowSessionDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['ShowSession'];
        meta: {
            name: 'ShowSession';
        };
    };
    findUnique<T extends ShowSessionFindUniqueArgs>(args: Prisma.SelectSubset<T, ShowSessionFindUniqueArgs<ExtArgs>>): Prisma.Prisma__ShowSessionClient<runtime.Types.Result.GetResult<Prisma.$ShowSessionPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends ShowSessionFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, ShowSessionFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__ShowSessionClient<runtime.Types.Result.GetResult<Prisma.$ShowSessionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends ShowSessionFindFirstArgs>(args?: Prisma.SelectSubset<T, ShowSessionFindFirstArgs<ExtArgs>>): Prisma.Prisma__ShowSessionClient<runtime.Types.Result.GetResult<Prisma.$ShowSessionPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends ShowSessionFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, ShowSessionFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__ShowSessionClient<runtime.Types.Result.GetResult<Prisma.$ShowSessionPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends ShowSessionFindManyArgs>(args?: Prisma.SelectSubset<T, ShowSessionFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$ShowSessionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends ShowSessionCreateArgs>(args: Prisma.SelectSubset<T, ShowSessionCreateArgs<ExtArgs>>): Prisma.Prisma__ShowSessionClient<runtime.Types.Result.GetResult<Prisma.$ShowSessionPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends ShowSessionCreateManyArgs>(args?: Prisma.SelectSubset<T, ShowSessionCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    createManyAndReturn<T extends ShowSessionCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, ShowSessionCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$ShowSessionPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    delete<T extends ShowSessionDeleteArgs>(args: Prisma.SelectSubset<T, ShowSessionDeleteArgs<ExtArgs>>): Prisma.Prisma__ShowSessionClient<runtime.Types.Result.GetResult<Prisma.$ShowSessionPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends ShowSessionUpdateArgs>(args: Prisma.SelectSubset<T, ShowSessionUpdateArgs<ExtArgs>>): Prisma.Prisma__ShowSessionClient<runtime.Types.Result.GetResult<Prisma.$ShowSessionPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends ShowSessionDeleteManyArgs>(args?: Prisma.SelectSubset<T, ShowSessionDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends ShowSessionUpdateManyArgs>(args: Prisma.SelectSubset<T, ShowSessionUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateManyAndReturn<T extends ShowSessionUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, ShowSessionUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$ShowSessionPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    upsert<T extends ShowSessionUpsertArgs>(args: Prisma.SelectSubset<T, ShowSessionUpsertArgs<ExtArgs>>): Prisma.Prisma__ShowSessionClient<runtime.Types.Result.GetResult<Prisma.$ShowSessionPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends ShowSessionCountArgs>(args?: Prisma.Subset<T, ShowSessionCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], ShowSessionCountAggregateOutputType> : number>;
    aggregate<T extends ShowSessionAggregateArgs>(args: Prisma.Subset<T, ShowSessionAggregateArgs>): Prisma.PrismaPromise<GetShowSessionAggregateType<T>>;
    groupBy<T extends ShowSessionGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: ShowSessionGroupByArgs['orderBy'];
    } : {
        orderBy?: ShowSessionGroupByArgs['orderBy'];
    }, OrderFields extends Prisma.ExcludeUnderscoreKeys<Prisma.Keys<Prisma.MaybeTupleToUnion<T['orderBy']>>>, ByFields extends Prisma.MaybeTupleToUnion<T['by']>, ByValid extends Prisma.Has<ByFields, OrderFields>, HavingFields extends Prisma.GetHavingFields<T['having']>, HavingValid extends Prisma.Has<ByFields, HavingFields>, ByEmpty extends T['by'] extends never[] ? Prisma.True : Prisma.False, InputErrors extends ByEmpty extends Prisma.True ? `Error: "by" must not be empty.` : HavingValid extends Prisma.False ? {
        [P in HavingFields]: P extends ByFields ? never : P extends string ? `Error: Field "${P}" used in "having" needs to be provided in "by".` : [
            Error,
            'Field ',
            P,
            ` in "having" needs to be provided in "by"`
        ];
    }[HavingFields] : 'take' extends Prisma.Keys<T> ? 'orderBy' extends Prisma.Keys<T> ? ByValid extends Prisma.True ? {} : {
        [P in OrderFields]: P extends ByFields ? never : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
    }[OrderFields] : 'Error: If you provide "take", you also need to provide "orderBy"' : 'skip' extends Prisma.Keys<T> ? 'orderBy' extends Prisma.Keys<T> ? ByValid extends Prisma.True ? {} : {
        [P in OrderFields]: P extends ByFields ? never : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
    }[OrderFields] : 'Error: If you provide "skip", you also need to provide "orderBy"' : ByValid extends Prisma.True ? {} : {
        [P in OrderFields]: P extends ByFields ? never : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, ShowSessionGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetShowSessionGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: ShowSessionFieldRefs;
}
export interface Prisma__ShowSessionClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    poi<T extends Prisma.PoiDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.PoiDefaultArgs<ExtArgs>>): Prisma.Prisma__PoiClient<runtime.Types.Result.GetResult<Prisma.$PoiPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface ShowSessionFieldRefs {
    readonly id: Prisma.FieldRef<"ShowSession", 'String'>;
    readonly poiId: Prisma.FieldRef<"ShowSession", 'String'>;
    readonly startAt: Prisma.FieldRef<"ShowSession", 'DateTime'>;
    readonly endAt: Prisma.FieldRef<"ShowSession", 'DateTime'>;
    readonly status: Prisma.FieldRef<"ShowSession", 'String'>;
    readonly createdAt: Prisma.FieldRef<"ShowSession", 'DateTime'>;
}
export type ShowSessionFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ShowSessionSelect<ExtArgs> | null;
    omit?: Prisma.ShowSessionOmit<ExtArgs> | null;
    include?: Prisma.ShowSessionInclude<ExtArgs> | null;
    where: Prisma.ShowSessionWhereUniqueInput;
};
export type ShowSessionFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ShowSessionSelect<ExtArgs> | null;
    omit?: Prisma.ShowSessionOmit<ExtArgs> | null;
    include?: Prisma.ShowSessionInclude<ExtArgs> | null;
    where: Prisma.ShowSessionWhereUniqueInput;
};
export type ShowSessionFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ShowSessionSelect<ExtArgs> | null;
    omit?: Prisma.ShowSessionOmit<ExtArgs> | null;
    include?: Prisma.ShowSessionInclude<ExtArgs> | null;
    where?: Prisma.ShowSessionWhereInput;
    orderBy?: Prisma.ShowSessionOrderByWithRelationInput | Prisma.ShowSessionOrderByWithRelationInput[];
    cursor?: Prisma.ShowSessionWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.ShowSessionScalarFieldEnum | Prisma.ShowSessionScalarFieldEnum[];
};
export type ShowSessionFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ShowSessionSelect<ExtArgs> | null;
    omit?: Prisma.ShowSessionOmit<ExtArgs> | null;
    include?: Prisma.ShowSessionInclude<ExtArgs> | null;
    where?: Prisma.ShowSessionWhereInput;
    orderBy?: Prisma.ShowSessionOrderByWithRelationInput | Prisma.ShowSessionOrderByWithRelationInput[];
    cursor?: Prisma.ShowSessionWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.ShowSessionScalarFieldEnum | Prisma.ShowSessionScalarFieldEnum[];
};
export type ShowSessionFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ShowSessionSelect<ExtArgs> | null;
    omit?: Prisma.ShowSessionOmit<ExtArgs> | null;
    include?: Prisma.ShowSessionInclude<ExtArgs> | null;
    where?: Prisma.ShowSessionWhereInput;
    orderBy?: Prisma.ShowSessionOrderByWithRelationInput | Prisma.ShowSessionOrderByWithRelationInput[];
    cursor?: Prisma.ShowSessionWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.ShowSessionScalarFieldEnum | Prisma.ShowSessionScalarFieldEnum[];
};
export type ShowSessionCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ShowSessionSelect<ExtArgs> | null;
    omit?: Prisma.ShowSessionOmit<ExtArgs> | null;
    include?: Prisma.ShowSessionInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.ShowSessionCreateInput, Prisma.ShowSessionUncheckedCreateInput>;
};
export type ShowSessionCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.ShowSessionCreateManyInput | Prisma.ShowSessionCreateManyInput[];
};
export type ShowSessionCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ShowSessionSelectCreateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.ShowSessionOmit<ExtArgs> | null;
    data: Prisma.ShowSessionCreateManyInput | Prisma.ShowSessionCreateManyInput[];
    include?: Prisma.ShowSessionIncludeCreateManyAndReturn<ExtArgs> | null;
};
export type ShowSessionUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ShowSessionSelect<ExtArgs> | null;
    omit?: Prisma.ShowSessionOmit<ExtArgs> | null;
    include?: Prisma.ShowSessionInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.ShowSessionUpdateInput, Prisma.ShowSessionUncheckedUpdateInput>;
    where: Prisma.ShowSessionWhereUniqueInput;
};
export type ShowSessionUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.ShowSessionUpdateManyMutationInput, Prisma.ShowSessionUncheckedUpdateManyInput>;
    where?: Prisma.ShowSessionWhereInput;
    limit?: number;
};
export type ShowSessionUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ShowSessionSelectUpdateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.ShowSessionOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.ShowSessionUpdateManyMutationInput, Prisma.ShowSessionUncheckedUpdateManyInput>;
    where?: Prisma.ShowSessionWhereInput;
    limit?: number;
    include?: Prisma.ShowSessionIncludeUpdateManyAndReturn<ExtArgs> | null;
};
export type ShowSessionUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ShowSessionSelect<ExtArgs> | null;
    omit?: Prisma.ShowSessionOmit<ExtArgs> | null;
    include?: Prisma.ShowSessionInclude<ExtArgs> | null;
    where: Prisma.ShowSessionWhereUniqueInput;
    create: Prisma.XOR<Prisma.ShowSessionCreateInput, Prisma.ShowSessionUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.ShowSessionUpdateInput, Prisma.ShowSessionUncheckedUpdateInput>;
};
export type ShowSessionDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ShowSessionSelect<ExtArgs> | null;
    omit?: Prisma.ShowSessionOmit<ExtArgs> | null;
    include?: Prisma.ShowSessionInclude<ExtArgs> | null;
    where: Prisma.ShowSessionWhereUniqueInput;
};
export type ShowSessionDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.ShowSessionWhereInput;
    limit?: number;
};
export type ShowSessionDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ShowSessionSelect<ExtArgs> | null;
    omit?: Prisma.ShowSessionOmit<ExtArgs> | null;
    include?: Prisma.ShowSessionInclude<ExtArgs> | null;
};
