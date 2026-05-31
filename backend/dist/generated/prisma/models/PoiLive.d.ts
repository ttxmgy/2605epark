import type * as runtime from "@prisma/client/runtime/client";
import type * as $Enums from "../enums.js";
import type * as Prisma from "../internal/prismaNamespace.js";
export type PoiLiveModel = runtime.Types.Result.DefaultSelection<Prisma.$PoiLivePayload>;
export type AggregatePoiLive = {
    _count: PoiLiveCountAggregateOutputType | null;
    _avg: PoiLiveAvgAggregateOutputType | null;
    _sum: PoiLiveSumAggregateOutputType | null;
    _min: PoiLiveMinAggregateOutputType | null;
    _max: PoiLiveMaxAggregateOutputType | null;
};
export type PoiLiveAvgAggregateOutputType = {
    waitMin: number | null;
};
export type PoiLiveSumAggregateOutputType = {
    waitMin: number | null;
};
export type PoiLiveMinAggregateOutputType = {
    id: string | null;
    poiId: string | null;
    capturedAt: Date | null;
    status: $Enums.PoiStatus | null;
    waitMin: number | null;
};
export type PoiLiveMaxAggregateOutputType = {
    id: string | null;
    poiId: string | null;
    capturedAt: Date | null;
    status: $Enums.PoiStatus | null;
    waitMin: number | null;
};
export type PoiLiveCountAggregateOutputType = {
    id: number;
    poiId: number;
    capturedAt: number;
    status: number;
    waitMin: number;
    _all: number;
};
export type PoiLiveAvgAggregateInputType = {
    waitMin?: true;
};
export type PoiLiveSumAggregateInputType = {
    waitMin?: true;
};
export type PoiLiveMinAggregateInputType = {
    id?: true;
    poiId?: true;
    capturedAt?: true;
    status?: true;
    waitMin?: true;
};
export type PoiLiveMaxAggregateInputType = {
    id?: true;
    poiId?: true;
    capturedAt?: true;
    status?: true;
    waitMin?: true;
};
export type PoiLiveCountAggregateInputType = {
    id?: true;
    poiId?: true;
    capturedAt?: true;
    status?: true;
    waitMin?: true;
    _all?: true;
};
export type PoiLiveAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.PoiLiveWhereInput;
    orderBy?: Prisma.PoiLiveOrderByWithRelationInput | Prisma.PoiLiveOrderByWithRelationInput[];
    cursor?: Prisma.PoiLiveWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | PoiLiveCountAggregateInputType;
    _avg?: PoiLiveAvgAggregateInputType;
    _sum?: PoiLiveSumAggregateInputType;
    _min?: PoiLiveMinAggregateInputType;
    _max?: PoiLiveMaxAggregateInputType;
};
export type GetPoiLiveAggregateType<T extends PoiLiveAggregateArgs> = {
    [P in keyof T & keyof AggregatePoiLive]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregatePoiLive[P]> : Prisma.GetScalarType<T[P], AggregatePoiLive[P]>;
};
export type PoiLiveGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.PoiLiveWhereInput;
    orderBy?: Prisma.PoiLiveOrderByWithAggregationInput | Prisma.PoiLiveOrderByWithAggregationInput[];
    by: Prisma.PoiLiveScalarFieldEnum[] | Prisma.PoiLiveScalarFieldEnum;
    having?: Prisma.PoiLiveScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: PoiLiveCountAggregateInputType | true;
    _avg?: PoiLiveAvgAggregateInputType;
    _sum?: PoiLiveSumAggregateInputType;
    _min?: PoiLiveMinAggregateInputType;
    _max?: PoiLiveMaxAggregateInputType;
};
export type PoiLiveGroupByOutputType = {
    id: string;
    poiId: string;
    capturedAt: Date;
    status: $Enums.PoiStatus;
    waitMin: number | null;
    _count: PoiLiveCountAggregateOutputType | null;
    _avg: PoiLiveAvgAggregateOutputType | null;
    _sum: PoiLiveSumAggregateOutputType | null;
    _min: PoiLiveMinAggregateOutputType | null;
    _max: PoiLiveMaxAggregateOutputType | null;
};
export type GetPoiLiveGroupByPayload<T extends PoiLiveGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<PoiLiveGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof PoiLiveGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], PoiLiveGroupByOutputType[P]> : Prisma.GetScalarType<T[P], PoiLiveGroupByOutputType[P]>;
}>>;
export type PoiLiveWhereInput = {
    AND?: Prisma.PoiLiveWhereInput | Prisma.PoiLiveWhereInput[];
    OR?: Prisma.PoiLiveWhereInput[];
    NOT?: Prisma.PoiLiveWhereInput | Prisma.PoiLiveWhereInput[];
    id?: Prisma.StringFilter<"PoiLive"> | string;
    poiId?: Prisma.StringFilter<"PoiLive"> | string;
    capturedAt?: Prisma.DateTimeFilter<"PoiLive"> | Date | string;
    status?: Prisma.EnumPoiStatusFilter<"PoiLive"> | $Enums.PoiStatus;
    waitMin?: Prisma.IntNullableFilter<"PoiLive"> | number | null;
    poi?: Prisma.XOR<Prisma.PoiScalarRelationFilter, Prisma.PoiWhereInput>;
};
export type PoiLiveOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    poiId?: Prisma.SortOrder;
    capturedAt?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    waitMin?: Prisma.SortOrderInput | Prisma.SortOrder;
    poi?: Prisma.PoiOrderByWithRelationInput;
};
export type PoiLiveWhereUniqueInput = Prisma.AtLeast<{
    id?: string;
    AND?: Prisma.PoiLiveWhereInput | Prisma.PoiLiveWhereInput[];
    OR?: Prisma.PoiLiveWhereInput[];
    NOT?: Prisma.PoiLiveWhereInput | Prisma.PoiLiveWhereInput[];
    poiId?: Prisma.StringFilter<"PoiLive"> | string;
    capturedAt?: Prisma.DateTimeFilter<"PoiLive"> | Date | string;
    status?: Prisma.EnumPoiStatusFilter<"PoiLive"> | $Enums.PoiStatus;
    waitMin?: Prisma.IntNullableFilter<"PoiLive"> | number | null;
    poi?: Prisma.XOR<Prisma.PoiScalarRelationFilter, Prisma.PoiWhereInput>;
}, "id">;
export type PoiLiveOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    poiId?: Prisma.SortOrder;
    capturedAt?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    waitMin?: Prisma.SortOrderInput | Prisma.SortOrder;
    _count?: Prisma.PoiLiveCountOrderByAggregateInput;
    _avg?: Prisma.PoiLiveAvgOrderByAggregateInput;
    _max?: Prisma.PoiLiveMaxOrderByAggregateInput;
    _min?: Prisma.PoiLiveMinOrderByAggregateInput;
    _sum?: Prisma.PoiLiveSumOrderByAggregateInput;
};
export type PoiLiveScalarWhereWithAggregatesInput = {
    AND?: Prisma.PoiLiveScalarWhereWithAggregatesInput | Prisma.PoiLiveScalarWhereWithAggregatesInput[];
    OR?: Prisma.PoiLiveScalarWhereWithAggregatesInput[];
    NOT?: Prisma.PoiLiveScalarWhereWithAggregatesInput | Prisma.PoiLiveScalarWhereWithAggregatesInput[];
    id?: Prisma.StringWithAggregatesFilter<"PoiLive"> | string;
    poiId?: Prisma.StringWithAggregatesFilter<"PoiLive"> | string;
    capturedAt?: Prisma.DateTimeWithAggregatesFilter<"PoiLive"> | Date | string;
    status?: Prisma.EnumPoiStatusWithAggregatesFilter<"PoiLive"> | $Enums.PoiStatus;
    waitMin?: Prisma.IntNullableWithAggregatesFilter<"PoiLive"> | number | null;
};
export type PoiLiveCreateInput = {
    id?: string;
    capturedAt?: Date | string;
    status?: $Enums.PoiStatus;
    waitMin?: number | null;
    poi: Prisma.PoiCreateNestedOneWithoutLiveInput;
};
export type PoiLiveUncheckedCreateInput = {
    id?: string;
    poiId: string;
    capturedAt?: Date | string;
    status?: $Enums.PoiStatus;
    waitMin?: number | null;
};
export type PoiLiveUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    capturedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    status?: Prisma.EnumPoiStatusFieldUpdateOperationsInput | $Enums.PoiStatus;
    waitMin?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    poi?: Prisma.PoiUpdateOneRequiredWithoutLiveNestedInput;
};
export type PoiLiveUncheckedUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    poiId?: Prisma.StringFieldUpdateOperationsInput | string;
    capturedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    status?: Prisma.EnumPoiStatusFieldUpdateOperationsInput | $Enums.PoiStatus;
    waitMin?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
};
export type PoiLiveCreateManyInput = {
    id?: string;
    poiId: string;
    capturedAt?: Date | string;
    status?: $Enums.PoiStatus;
    waitMin?: number | null;
};
export type PoiLiveUpdateManyMutationInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    capturedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    status?: Prisma.EnumPoiStatusFieldUpdateOperationsInput | $Enums.PoiStatus;
    waitMin?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
};
export type PoiLiveUncheckedUpdateManyInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    poiId?: Prisma.StringFieldUpdateOperationsInput | string;
    capturedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    status?: Prisma.EnumPoiStatusFieldUpdateOperationsInput | $Enums.PoiStatus;
    waitMin?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
};
export type PoiLiveListRelationFilter = {
    every?: Prisma.PoiLiveWhereInput;
    some?: Prisma.PoiLiveWhereInput;
    none?: Prisma.PoiLiveWhereInput;
};
export type PoiLiveOrderByRelationAggregateInput = {
    _count?: Prisma.SortOrder;
};
export type PoiLiveCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    poiId?: Prisma.SortOrder;
    capturedAt?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    waitMin?: Prisma.SortOrder;
};
export type PoiLiveAvgOrderByAggregateInput = {
    waitMin?: Prisma.SortOrder;
};
export type PoiLiveMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    poiId?: Prisma.SortOrder;
    capturedAt?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    waitMin?: Prisma.SortOrder;
};
export type PoiLiveMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    poiId?: Prisma.SortOrder;
    capturedAt?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    waitMin?: Prisma.SortOrder;
};
export type PoiLiveSumOrderByAggregateInput = {
    waitMin?: Prisma.SortOrder;
};
export type PoiLiveCreateNestedManyWithoutPoiInput = {
    create?: Prisma.XOR<Prisma.PoiLiveCreateWithoutPoiInput, Prisma.PoiLiveUncheckedCreateWithoutPoiInput> | Prisma.PoiLiveCreateWithoutPoiInput[] | Prisma.PoiLiveUncheckedCreateWithoutPoiInput[];
    connectOrCreate?: Prisma.PoiLiveCreateOrConnectWithoutPoiInput | Prisma.PoiLiveCreateOrConnectWithoutPoiInput[];
    createMany?: Prisma.PoiLiveCreateManyPoiInputEnvelope;
    connect?: Prisma.PoiLiveWhereUniqueInput | Prisma.PoiLiveWhereUniqueInput[];
};
export type PoiLiveUncheckedCreateNestedManyWithoutPoiInput = {
    create?: Prisma.XOR<Prisma.PoiLiveCreateWithoutPoiInput, Prisma.PoiLiveUncheckedCreateWithoutPoiInput> | Prisma.PoiLiveCreateWithoutPoiInput[] | Prisma.PoiLiveUncheckedCreateWithoutPoiInput[];
    connectOrCreate?: Prisma.PoiLiveCreateOrConnectWithoutPoiInput | Prisma.PoiLiveCreateOrConnectWithoutPoiInput[];
    createMany?: Prisma.PoiLiveCreateManyPoiInputEnvelope;
    connect?: Prisma.PoiLiveWhereUniqueInput | Prisma.PoiLiveWhereUniqueInput[];
};
export type PoiLiveUpdateManyWithoutPoiNestedInput = {
    create?: Prisma.XOR<Prisma.PoiLiveCreateWithoutPoiInput, Prisma.PoiLiveUncheckedCreateWithoutPoiInput> | Prisma.PoiLiveCreateWithoutPoiInput[] | Prisma.PoiLiveUncheckedCreateWithoutPoiInput[];
    connectOrCreate?: Prisma.PoiLiveCreateOrConnectWithoutPoiInput | Prisma.PoiLiveCreateOrConnectWithoutPoiInput[];
    upsert?: Prisma.PoiLiveUpsertWithWhereUniqueWithoutPoiInput | Prisma.PoiLiveUpsertWithWhereUniqueWithoutPoiInput[];
    createMany?: Prisma.PoiLiveCreateManyPoiInputEnvelope;
    set?: Prisma.PoiLiveWhereUniqueInput | Prisma.PoiLiveWhereUniqueInput[];
    disconnect?: Prisma.PoiLiveWhereUniqueInput | Prisma.PoiLiveWhereUniqueInput[];
    delete?: Prisma.PoiLiveWhereUniqueInput | Prisma.PoiLiveWhereUniqueInput[];
    connect?: Prisma.PoiLiveWhereUniqueInput | Prisma.PoiLiveWhereUniqueInput[];
    update?: Prisma.PoiLiveUpdateWithWhereUniqueWithoutPoiInput | Prisma.PoiLiveUpdateWithWhereUniqueWithoutPoiInput[];
    updateMany?: Prisma.PoiLiveUpdateManyWithWhereWithoutPoiInput | Prisma.PoiLiveUpdateManyWithWhereWithoutPoiInput[];
    deleteMany?: Prisma.PoiLiveScalarWhereInput | Prisma.PoiLiveScalarWhereInput[];
};
export type PoiLiveUncheckedUpdateManyWithoutPoiNestedInput = {
    create?: Prisma.XOR<Prisma.PoiLiveCreateWithoutPoiInput, Prisma.PoiLiveUncheckedCreateWithoutPoiInput> | Prisma.PoiLiveCreateWithoutPoiInput[] | Prisma.PoiLiveUncheckedCreateWithoutPoiInput[];
    connectOrCreate?: Prisma.PoiLiveCreateOrConnectWithoutPoiInput | Prisma.PoiLiveCreateOrConnectWithoutPoiInput[];
    upsert?: Prisma.PoiLiveUpsertWithWhereUniqueWithoutPoiInput | Prisma.PoiLiveUpsertWithWhereUniqueWithoutPoiInput[];
    createMany?: Prisma.PoiLiveCreateManyPoiInputEnvelope;
    set?: Prisma.PoiLiveWhereUniqueInput | Prisma.PoiLiveWhereUniqueInput[];
    disconnect?: Prisma.PoiLiveWhereUniqueInput | Prisma.PoiLiveWhereUniqueInput[];
    delete?: Prisma.PoiLiveWhereUniqueInput | Prisma.PoiLiveWhereUniqueInput[];
    connect?: Prisma.PoiLiveWhereUniqueInput | Prisma.PoiLiveWhereUniqueInput[];
    update?: Prisma.PoiLiveUpdateWithWhereUniqueWithoutPoiInput | Prisma.PoiLiveUpdateWithWhereUniqueWithoutPoiInput[];
    updateMany?: Prisma.PoiLiveUpdateManyWithWhereWithoutPoiInput | Prisma.PoiLiveUpdateManyWithWhereWithoutPoiInput[];
    deleteMany?: Prisma.PoiLiveScalarWhereInput | Prisma.PoiLiveScalarWhereInput[];
};
export type EnumPoiStatusFieldUpdateOperationsInput = {
    set?: $Enums.PoiStatus;
};
export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null;
    increment?: number;
    decrement?: number;
    multiply?: number;
    divide?: number;
};
export type PoiLiveCreateWithoutPoiInput = {
    id?: string;
    capturedAt?: Date | string;
    status?: $Enums.PoiStatus;
    waitMin?: number | null;
};
export type PoiLiveUncheckedCreateWithoutPoiInput = {
    id?: string;
    capturedAt?: Date | string;
    status?: $Enums.PoiStatus;
    waitMin?: number | null;
};
export type PoiLiveCreateOrConnectWithoutPoiInput = {
    where: Prisma.PoiLiveWhereUniqueInput;
    create: Prisma.XOR<Prisma.PoiLiveCreateWithoutPoiInput, Prisma.PoiLiveUncheckedCreateWithoutPoiInput>;
};
export type PoiLiveCreateManyPoiInputEnvelope = {
    data: Prisma.PoiLiveCreateManyPoiInput | Prisma.PoiLiveCreateManyPoiInput[];
};
export type PoiLiveUpsertWithWhereUniqueWithoutPoiInput = {
    where: Prisma.PoiLiveWhereUniqueInput;
    update: Prisma.XOR<Prisma.PoiLiveUpdateWithoutPoiInput, Prisma.PoiLiveUncheckedUpdateWithoutPoiInput>;
    create: Prisma.XOR<Prisma.PoiLiveCreateWithoutPoiInput, Prisma.PoiLiveUncheckedCreateWithoutPoiInput>;
};
export type PoiLiveUpdateWithWhereUniqueWithoutPoiInput = {
    where: Prisma.PoiLiveWhereUniqueInput;
    data: Prisma.XOR<Prisma.PoiLiveUpdateWithoutPoiInput, Prisma.PoiLiveUncheckedUpdateWithoutPoiInput>;
};
export type PoiLiveUpdateManyWithWhereWithoutPoiInput = {
    where: Prisma.PoiLiveScalarWhereInput;
    data: Prisma.XOR<Prisma.PoiLiveUpdateManyMutationInput, Prisma.PoiLiveUncheckedUpdateManyWithoutPoiInput>;
};
export type PoiLiveScalarWhereInput = {
    AND?: Prisma.PoiLiveScalarWhereInput | Prisma.PoiLiveScalarWhereInput[];
    OR?: Prisma.PoiLiveScalarWhereInput[];
    NOT?: Prisma.PoiLiveScalarWhereInput | Prisma.PoiLiveScalarWhereInput[];
    id?: Prisma.StringFilter<"PoiLive"> | string;
    poiId?: Prisma.StringFilter<"PoiLive"> | string;
    capturedAt?: Prisma.DateTimeFilter<"PoiLive"> | Date | string;
    status?: Prisma.EnumPoiStatusFilter<"PoiLive"> | $Enums.PoiStatus;
    waitMin?: Prisma.IntNullableFilter<"PoiLive"> | number | null;
};
export type PoiLiveCreateManyPoiInput = {
    id?: string;
    capturedAt?: Date | string;
    status?: $Enums.PoiStatus;
    waitMin?: number | null;
};
export type PoiLiveUpdateWithoutPoiInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    capturedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    status?: Prisma.EnumPoiStatusFieldUpdateOperationsInput | $Enums.PoiStatus;
    waitMin?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
};
export type PoiLiveUncheckedUpdateWithoutPoiInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    capturedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    status?: Prisma.EnumPoiStatusFieldUpdateOperationsInput | $Enums.PoiStatus;
    waitMin?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
};
export type PoiLiveUncheckedUpdateManyWithoutPoiInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    capturedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    status?: Prisma.EnumPoiStatusFieldUpdateOperationsInput | $Enums.PoiStatus;
    waitMin?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
};
export type PoiLiveSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    poiId?: boolean;
    capturedAt?: boolean;
    status?: boolean;
    waitMin?: boolean;
    poi?: boolean | Prisma.PoiDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["poiLive"]>;
export type PoiLiveSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    poiId?: boolean;
    capturedAt?: boolean;
    status?: boolean;
    waitMin?: boolean;
    poi?: boolean | Prisma.PoiDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["poiLive"]>;
export type PoiLiveSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    poiId?: boolean;
    capturedAt?: boolean;
    status?: boolean;
    waitMin?: boolean;
    poi?: boolean | Prisma.PoiDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["poiLive"]>;
export type PoiLiveSelectScalar = {
    id?: boolean;
    poiId?: boolean;
    capturedAt?: boolean;
    status?: boolean;
    waitMin?: boolean;
};
export type PoiLiveOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "poiId" | "capturedAt" | "status" | "waitMin", ExtArgs["result"]["poiLive"]>;
export type PoiLiveInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    poi?: boolean | Prisma.PoiDefaultArgs<ExtArgs>;
};
export type PoiLiveIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    poi?: boolean | Prisma.PoiDefaultArgs<ExtArgs>;
};
export type PoiLiveIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    poi?: boolean | Prisma.PoiDefaultArgs<ExtArgs>;
};
export type $PoiLivePayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "PoiLive";
    objects: {
        poi: Prisma.$PoiPayload<ExtArgs>;
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: string;
        poiId: string;
        capturedAt: Date;
        status: $Enums.PoiStatus;
        waitMin: number | null;
    }, ExtArgs["result"]["poiLive"]>;
    composites: {};
};
export type PoiLiveGetPayload<S extends boolean | null | undefined | PoiLiveDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$PoiLivePayload, S>;
export type PoiLiveCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<PoiLiveFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: PoiLiveCountAggregateInputType | true;
};
export interface PoiLiveDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['PoiLive'];
        meta: {
            name: 'PoiLive';
        };
    };
    findUnique<T extends PoiLiveFindUniqueArgs>(args: Prisma.SelectSubset<T, PoiLiveFindUniqueArgs<ExtArgs>>): Prisma.Prisma__PoiLiveClient<runtime.Types.Result.GetResult<Prisma.$PoiLivePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends PoiLiveFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, PoiLiveFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__PoiLiveClient<runtime.Types.Result.GetResult<Prisma.$PoiLivePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends PoiLiveFindFirstArgs>(args?: Prisma.SelectSubset<T, PoiLiveFindFirstArgs<ExtArgs>>): Prisma.Prisma__PoiLiveClient<runtime.Types.Result.GetResult<Prisma.$PoiLivePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends PoiLiveFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, PoiLiveFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__PoiLiveClient<runtime.Types.Result.GetResult<Prisma.$PoiLivePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends PoiLiveFindManyArgs>(args?: Prisma.SelectSubset<T, PoiLiveFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$PoiLivePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends PoiLiveCreateArgs>(args: Prisma.SelectSubset<T, PoiLiveCreateArgs<ExtArgs>>): Prisma.Prisma__PoiLiveClient<runtime.Types.Result.GetResult<Prisma.$PoiLivePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends PoiLiveCreateManyArgs>(args?: Prisma.SelectSubset<T, PoiLiveCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    createManyAndReturn<T extends PoiLiveCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, PoiLiveCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$PoiLivePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    delete<T extends PoiLiveDeleteArgs>(args: Prisma.SelectSubset<T, PoiLiveDeleteArgs<ExtArgs>>): Prisma.Prisma__PoiLiveClient<runtime.Types.Result.GetResult<Prisma.$PoiLivePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends PoiLiveUpdateArgs>(args: Prisma.SelectSubset<T, PoiLiveUpdateArgs<ExtArgs>>): Prisma.Prisma__PoiLiveClient<runtime.Types.Result.GetResult<Prisma.$PoiLivePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends PoiLiveDeleteManyArgs>(args?: Prisma.SelectSubset<T, PoiLiveDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends PoiLiveUpdateManyArgs>(args: Prisma.SelectSubset<T, PoiLiveUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateManyAndReturn<T extends PoiLiveUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, PoiLiveUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$PoiLivePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    upsert<T extends PoiLiveUpsertArgs>(args: Prisma.SelectSubset<T, PoiLiveUpsertArgs<ExtArgs>>): Prisma.Prisma__PoiLiveClient<runtime.Types.Result.GetResult<Prisma.$PoiLivePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends PoiLiveCountArgs>(args?: Prisma.Subset<T, PoiLiveCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], PoiLiveCountAggregateOutputType> : number>;
    aggregate<T extends PoiLiveAggregateArgs>(args: Prisma.Subset<T, PoiLiveAggregateArgs>): Prisma.PrismaPromise<GetPoiLiveAggregateType<T>>;
    groupBy<T extends PoiLiveGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: PoiLiveGroupByArgs['orderBy'];
    } : {
        orderBy?: PoiLiveGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, PoiLiveGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPoiLiveGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: PoiLiveFieldRefs;
}
export interface Prisma__PoiLiveClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    poi<T extends Prisma.PoiDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.PoiDefaultArgs<ExtArgs>>): Prisma.Prisma__PoiClient<runtime.Types.Result.GetResult<Prisma.$PoiPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface PoiLiveFieldRefs {
    readonly id: Prisma.FieldRef<"PoiLive", 'String'>;
    readonly poiId: Prisma.FieldRef<"PoiLive", 'String'>;
    readonly capturedAt: Prisma.FieldRef<"PoiLive", 'DateTime'>;
    readonly status: Prisma.FieldRef<"PoiLive", 'PoiStatus'>;
    readonly waitMin: Prisma.FieldRef<"PoiLive", 'Int'>;
}
export type PoiLiveFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.PoiLiveSelect<ExtArgs> | null;
    omit?: Prisma.PoiLiveOmit<ExtArgs> | null;
    include?: Prisma.PoiLiveInclude<ExtArgs> | null;
    where: Prisma.PoiLiveWhereUniqueInput;
};
export type PoiLiveFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.PoiLiveSelect<ExtArgs> | null;
    omit?: Prisma.PoiLiveOmit<ExtArgs> | null;
    include?: Prisma.PoiLiveInclude<ExtArgs> | null;
    where: Prisma.PoiLiveWhereUniqueInput;
};
export type PoiLiveFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.PoiLiveSelect<ExtArgs> | null;
    omit?: Prisma.PoiLiveOmit<ExtArgs> | null;
    include?: Prisma.PoiLiveInclude<ExtArgs> | null;
    where?: Prisma.PoiLiveWhereInput;
    orderBy?: Prisma.PoiLiveOrderByWithRelationInput | Prisma.PoiLiveOrderByWithRelationInput[];
    cursor?: Prisma.PoiLiveWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.PoiLiveScalarFieldEnum | Prisma.PoiLiveScalarFieldEnum[];
};
export type PoiLiveFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.PoiLiveSelect<ExtArgs> | null;
    omit?: Prisma.PoiLiveOmit<ExtArgs> | null;
    include?: Prisma.PoiLiveInclude<ExtArgs> | null;
    where?: Prisma.PoiLiveWhereInput;
    orderBy?: Prisma.PoiLiveOrderByWithRelationInput | Prisma.PoiLiveOrderByWithRelationInput[];
    cursor?: Prisma.PoiLiveWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.PoiLiveScalarFieldEnum | Prisma.PoiLiveScalarFieldEnum[];
};
export type PoiLiveFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.PoiLiveSelect<ExtArgs> | null;
    omit?: Prisma.PoiLiveOmit<ExtArgs> | null;
    include?: Prisma.PoiLiveInclude<ExtArgs> | null;
    where?: Prisma.PoiLiveWhereInput;
    orderBy?: Prisma.PoiLiveOrderByWithRelationInput | Prisma.PoiLiveOrderByWithRelationInput[];
    cursor?: Prisma.PoiLiveWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.PoiLiveScalarFieldEnum | Prisma.PoiLiveScalarFieldEnum[];
};
export type PoiLiveCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.PoiLiveSelect<ExtArgs> | null;
    omit?: Prisma.PoiLiveOmit<ExtArgs> | null;
    include?: Prisma.PoiLiveInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.PoiLiveCreateInput, Prisma.PoiLiveUncheckedCreateInput>;
};
export type PoiLiveCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.PoiLiveCreateManyInput | Prisma.PoiLiveCreateManyInput[];
};
export type PoiLiveCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.PoiLiveSelectCreateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.PoiLiveOmit<ExtArgs> | null;
    data: Prisma.PoiLiveCreateManyInput | Prisma.PoiLiveCreateManyInput[];
    include?: Prisma.PoiLiveIncludeCreateManyAndReturn<ExtArgs> | null;
};
export type PoiLiveUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.PoiLiveSelect<ExtArgs> | null;
    omit?: Prisma.PoiLiveOmit<ExtArgs> | null;
    include?: Prisma.PoiLiveInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.PoiLiveUpdateInput, Prisma.PoiLiveUncheckedUpdateInput>;
    where: Prisma.PoiLiveWhereUniqueInput;
};
export type PoiLiveUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.PoiLiveUpdateManyMutationInput, Prisma.PoiLiveUncheckedUpdateManyInput>;
    where?: Prisma.PoiLiveWhereInput;
    limit?: number;
};
export type PoiLiveUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.PoiLiveSelectUpdateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.PoiLiveOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.PoiLiveUpdateManyMutationInput, Prisma.PoiLiveUncheckedUpdateManyInput>;
    where?: Prisma.PoiLiveWhereInput;
    limit?: number;
    include?: Prisma.PoiLiveIncludeUpdateManyAndReturn<ExtArgs> | null;
};
export type PoiLiveUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.PoiLiveSelect<ExtArgs> | null;
    omit?: Prisma.PoiLiveOmit<ExtArgs> | null;
    include?: Prisma.PoiLiveInclude<ExtArgs> | null;
    where: Prisma.PoiLiveWhereUniqueInput;
    create: Prisma.XOR<Prisma.PoiLiveCreateInput, Prisma.PoiLiveUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.PoiLiveUpdateInput, Prisma.PoiLiveUncheckedUpdateInput>;
};
export type PoiLiveDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.PoiLiveSelect<ExtArgs> | null;
    omit?: Prisma.PoiLiveOmit<ExtArgs> | null;
    include?: Prisma.PoiLiveInclude<ExtArgs> | null;
    where: Prisma.PoiLiveWhereUniqueInput;
};
export type PoiLiveDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.PoiLiveWhereInput;
    limit?: number;
};
export type PoiLiveDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.PoiLiveSelect<ExtArgs> | null;
    omit?: Prisma.PoiLiveOmit<ExtArgs> | null;
    include?: Prisma.PoiLiveInclude<ExtArgs> | null;
};
