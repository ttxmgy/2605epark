import type * as runtime from "@prisma/client/runtime/client";
import type * as Prisma from "../internal/prismaNamespace.js";
export type ParkHoursModel = runtime.Types.Result.DefaultSelection<Prisma.$ParkHoursPayload>;
export type AggregateParkHours = {
    _count: ParkHoursCountAggregateOutputType | null;
    _min: ParkHoursMinAggregateOutputType | null;
    _max: ParkHoursMaxAggregateOutputType | null;
};
export type ParkHoursMinAggregateOutputType = {
    id: string | null;
    parkId: string | null;
    date: string | null;
    venueName: string | null;
    openTime: string | null;
    closeTime: string | null;
    createdAt: Date | null;
};
export type ParkHoursMaxAggregateOutputType = {
    id: string | null;
    parkId: string | null;
    date: string | null;
    venueName: string | null;
    openTime: string | null;
    closeTime: string | null;
    createdAt: Date | null;
};
export type ParkHoursCountAggregateOutputType = {
    id: number;
    parkId: number;
    date: number;
    venueName: number;
    openTime: number;
    closeTime: number;
    createdAt: number;
    _all: number;
};
export type ParkHoursMinAggregateInputType = {
    id?: true;
    parkId?: true;
    date?: true;
    venueName?: true;
    openTime?: true;
    closeTime?: true;
    createdAt?: true;
};
export type ParkHoursMaxAggregateInputType = {
    id?: true;
    parkId?: true;
    date?: true;
    venueName?: true;
    openTime?: true;
    closeTime?: true;
    createdAt?: true;
};
export type ParkHoursCountAggregateInputType = {
    id?: true;
    parkId?: true;
    date?: true;
    venueName?: true;
    openTime?: true;
    closeTime?: true;
    createdAt?: true;
    _all?: true;
};
export type ParkHoursAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.ParkHoursWhereInput;
    orderBy?: Prisma.ParkHoursOrderByWithRelationInput | Prisma.ParkHoursOrderByWithRelationInput[];
    cursor?: Prisma.ParkHoursWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | ParkHoursCountAggregateInputType;
    _min?: ParkHoursMinAggregateInputType;
    _max?: ParkHoursMaxAggregateInputType;
};
export type GetParkHoursAggregateType<T extends ParkHoursAggregateArgs> = {
    [P in keyof T & keyof AggregateParkHours]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateParkHours[P]> : Prisma.GetScalarType<T[P], AggregateParkHours[P]>;
};
export type ParkHoursGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.ParkHoursWhereInput;
    orderBy?: Prisma.ParkHoursOrderByWithAggregationInput | Prisma.ParkHoursOrderByWithAggregationInput[];
    by: Prisma.ParkHoursScalarFieldEnum[] | Prisma.ParkHoursScalarFieldEnum;
    having?: Prisma.ParkHoursScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: ParkHoursCountAggregateInputType | true;
    _min?: ParkHoursMinAggregateInputType;
    _max?: ParkHoursMaxAggregateInputType;
};
export type ParkHoursGroupByOutputType = {
    id: string;
    parkId: string;
    date: string;
    venueName: string;
    openTime: string;
    closeTime: string;
    createdAt: Date;
    _count: ParkHoursCountAggregateOutputType | null;
    _min: ParkHoursMinAggregateOutputType | null;
    _max: ParkHoursMaxAggregateOutputType | null;
};
export type GetParkHoursGroupByPayload<T extends ParkHoursGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<ParkHoursGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof ParkHoursGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], ParkHoursGroupByOutputType[P]> : Prisma.GetScalarType<T[P], ParkHoursGroupByOutputType[P]>;
}>>;
export type ParkHoursWhereInput = {
    AND?: Prisma.ParkHoursWhereInput | Prisma.ParkHoursWhereInput[];
    OR?: Prisma.ParkHoursWhereInput[];
    NOT?: Prisma.ParkHoursWhereInput | Prisma.ParkHoursWhereInput[];
    id?: Prisma.StringFilter<"ParkHours"> | string;
    parkId?: Prisma.StringFilter<"ParkHours"> | string;
    date?: Prisma.StringFilter<"ParkHours"> | string;
    venueName?: Prisma.StringFilter<"ParkHours"> | string;
    openTime?: Prisma.StringFilter<"ParkHours"> | string;
    closeTime?: Prisma.StringFilter<"ParkHours"> | string;
    createdAt?: Prisma.DateTimeFilter<"ParkHours"> | Date | string;
    park?: Prisma.XOR<Prisma.ParkScalarRelationFilter, Prisma.ParkWhereInput>;
};
export type ParkHoursOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    parkId?: Prisma.SortOrder;
    date?: Prisma.SortOrder;
    venueName?: Prisma.SortOrder;
    openTime?: Prisma.SortOrder;
    closeTime?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    park?: Prisma.ParkOrderByWithRelationInput;
};
export type ParkHoursWhereUniqueInput = Prisma.AtLeast<{
    id?: string;
    AND?: Prisma.ParkHoursWhereInput | Prisma.ParkHoursWhereInput[];
    OR?: Prisma.ParkHoursWhereInput[];
    NOT?: Prisma.ParkHoursWhereInput | Prisma.ParkHoursWhereInput[];
    parkId?: Prisma.StringFilter<"ParkHours"> | string;
    date?: Prisma.StringFilter<"ParkHours"> | string;
    venueName?: Prisma.StringFilter<"ParkHours"> | string;
    openTime?: Prisma.StringFilter<"ParkHours"> | string;
    closeTime?: Prisma.StringFilter<"ParkHours"> | string;
    createdAt?: Prisma.DateTimeFilter<"ParkHours"> | Date | string;
    park?: Prisma.XOR<Prisma.ParkScalarRelationFilter, Prisma.ParkWhereInput>;
}, "id">;
export type ParkHoursOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    parkId?: Prisma.SortOrder;
    date?: Prisma.SortOrder;
    venueName?: Prisma.SortOrder;
    openTime?: Prisma.SortOrder;
    closeTime?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    _count?: Prisma.ParkHoursCountOrderByAggregateInput;
    _max?: Prisma.ParkHoursMaxOrderByAggregateInput;
    _min?: Prisma.ParkHoursMinOrderByAggregateInput;
};
export type ParkHoursScalarWhereWithAggregatesInput = {
    AND?: Prisma.ParkHoursScalarWhereWithAggregatesInput | Prisma.ParkHoursScalarWhereWithAggregatesInput[];
    OR?: Prisma.ParkHoursScalarWhereWithAggregatesInput[];
    NOT?: Prisma.ParkHoursScalarWhereWithAggregatesInput | Prisma.ParkHoursScalarWhereWithAggregatesInput[];
    id?: Prisma.StringWithAggregatesFilter<"ParkHours"> | string;
    parkId?: Prisma.StringWithAggregatesFilter<"ParkHours"> | string;
    date?: Prisma.StringWithAggregatesFilter<"ParkHours"> | string;
    venueName?: Prisma.StringWithAggregatesFilter<"ParkHours"> | string;
    openTime?: Prisma.StringWithAggregatesFilter<"ParkHours"> | string;
    closeTime?: Prisma.StringWithAggregatesFilter<"ParkHours"> | string;
    createdAt?: Prisma.DateTimeWithAggregatesFilter<"ParkHours"> | Date | string;
};
export type ParkHoursCreateInput = {
    id?: string;
    date: string;
    venueName: string;
    openTime: string;
    closeTime: string;
    createdAt?: Date | string;
    park: Prisma.ParkCreateNestedOneWithoutHoursInput;
};
export type ParkHoursUncheckedCreateInput = {
    id?: string;
    parkId: string;
    date: string;
    venueName: string;
    openTime: string;
    closeTime: string;
    createdAt?: Date | string;
};
export type ParkHoursUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    date?: Prisma.StringFieldUpdateOperationsInput | string;
    venueName?: Prisma.StringFieldUpdateOperationsInput | string;
    openTime?: Prisma.StringFieldUpdateOperationsInput | string;
    closeTime?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    park?: Prisma.ParkUpdateOneRequiredWithoutHoursNestedInput;
};
export type ParkHoursUncheckedUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    parkId?: Prisma.StringFieldUpdateOperationsInput | string;
    date?: Prisma.StringFieldUpdateOperationsInput | string;
    venueName?: Prisma.StringFieldUpdateOperationsInput | string;
    openTime?: Prisma.StringFieldUpdateOperationsInput | string;
    closeTime?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type ParkHoursCreateManyInput = {
    id?: string;
    parkId: string;
    date: string;
    venueName: string;
    openTime: string;
    closeTime: string;
    createdAt?: Date | string;
};
export type ParkHoursUpdateManyMutationInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    date?: Prisma.StringFieldUpdateOperationsInput | string;
    venueName?: Prisma.StringFieldUpdateOperationsInput | string;
    openTime?: Prisma.StringFieldUpdateOperationsInput | string;
    closeTime?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type ParkHoursUncheckedUpdateManyInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    parkId?: Prisma.StringFieldUpdateOperationsInput | string;
    date?: Prisma.StringFieldUpdateOperationsInput | string;
    venueName?: Prisma.StringFieldUpdateOperationsInput | string;
    openTime?: Prisma.StringFieldUpdateOperationsInput | string;
    closeTime?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type ParkHoursListRelationFilter = {
    every?: Prisma.ParkHoursWhereInput;
    some?: Prisma.ParkHoursWhereInput;
    none?: Prisma.ParkHoursWhereInput;
};
export type ParkHoursOrderByRelationAggregateInput = {
    _count?: Prisma.SortOrder;
};
export type ParkHoursCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    parkId?: Prisma.SortOrder;
    date?: Prisma.SortOrder;
    venueName?: Prisma.SortOrder;
    openTime?: Prisma.SortOrder;
    closeTime?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
};
export type ParkHoursMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    parkId?: Prisma.SortOrder;
    date?: Prisma.SortOrder;
    venueName?: Prisma.SortOrder;
    openTime?: Prisma.SortOrder;
    closeTime?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
};
export type ParkHoursMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    parkId?: Prisma.SortOrder;
    date?: Prisma.SortOrder;
    venueName?: Prisma.SortOrder;
    openTime?: Prisma.SortOrder;
    closeTime?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
};
export type ParkHoursCreateNestedManyWithoutParkInput = {
    create?: Prisma.XOR<Prisma.ParkHoursCreateWithoutParkInput, Prisma.ParkHoursUncheckedCreateWithoutParkInput> | Prisma.ParkHoursCreateWithoutParkInput[] | Prisma.ParkHoursUncheckedCreateWithoutParkInput[];
    connectOrCreate?: Prisma.ParkHoursCreateOrConnectWithoutParkInput | Prisma.ParkHoursCreateOrConnectWithoutParkInput[];
    createMany?: Prisma.ParkHoursCreateManyParkInputEnvelope;
    connect?: Prisma.ParkHoursWhereUniqueInput | Prisma.ParkHoursWhereUniqueInput[];
};
export type ParkHoursUncheckedCreateNestedManyWithoutParkInput = {
    create?: Prisma.XOR<Prisma.ParkHoursCreateWithoutParkInput, Prisma.ParkHoursUncheckedCreateWithoutParkInput> | Prisma.ParkHoursCreateWithoutParkInput[] | Prisma.ParkHoursUncheckedCreateWithoutParkInput[];
    connectOrCreate?: Prisma.ParkHoursCreateOrConnectWithoutParkInput | Prisma.ParkHoursCreateOrConnectWithoutParkInput[];
    createMany?: Prisma.ParkHoursCreateManyParkInputEnvelope;
    connect?: Prisma.ParkHoursWhereUniqueInput | Prisma.ParkHoursWhereUniqueInput[];
};
export type ParkHoursUpdateManyWithoutParkNestedInput = {
    create?: Prisma.XOR<Prisma.ParkHoursCreateWithoutParkInput, Prisma.ParkHoursUncheckedCreateWithoutParkInput> | Prisma.ParkHoursCreateWithoutParkInput[] | Prisma.ParkHoursUncheckedCreateWithoutParkInput[];
    connectOrCreate?: Prisma.ParkHoursCreateOrConnectWithoutParkInput | Prisma.ParkHoursCreateOrConnectWithoutParkInput[];
    upsert?: Prisma.ParkHoursUpsertWithWhereUniqueWithoutParkInput | Prisma.ParkHoursUpsertWithWhereUniqueWithoutParkInput[];
    createMany?: Prisma.ParkHoursCreateManyParkInputEnvelope;
    set?: Prisma.ParkHoursWhereUniqueInput | Prisma.ParkHoursWhereUniqueInput[];
    disconnect?: Prisma.ParkHoursWhereUniqueInput | Prisma.ParkHoursWhereUniqueInput[];
    delete?: Prisma.ParkHoursWhereUniqueInput | Prisma.ParkHoursWhereUniqueInput[];
    connect?: Prisma.ParkHoursWhereUniqueInput | Prisma.ParkHoursWhereUniqueInput[];
    update?: Prisma.ParkHoursUpdateWithWhereUniqueWithoutParkInput | Prisma.ParkHoursUpdateWithWhereUniqueWithoutParkInput[];
    updateMany?: Prisma.ParkHoursUpdateManyWithWhereWithoutParkInput | Prisma.ParkHoursUpdateManyWithWhereWithoutParkInput[];
    deleteMany?: Prisma.ParkHoursScalarWhereInput | Prisma.ParkHoursScalarWhereInput[];
};
export type ParkHoursUncheckedUpdateManyWithoutParkNestedInput = {
    create?: Prisma.XOR<Prisma.ParkHoursCreateWithoutParkInput, Prisma.ParkHoursUncheckedCreateWithoutParkInput> | Prisma.ParkHoursCreateWithoutParkInput[] | Prisma.ParkHoursUncheckedCreateWithoutParkInput[];
    connectOrCreate?: Prisma.ParkHoursCreateOrConnectWithoutParkInput | Prisma.ParkHoursCreateOrConnectWithoutParkInput[];
    upsert?: Prisma.ParkHoursUpsertWithWhereUniqueWithoutParkInput | Prisma.ParkHoursUpsertWithWhereUniqueWithoutParkInput[];
    createMany?: Prisma.ParkHoursCreateManyParkInputEnvelope;
    set?: Prisma.ParkHoursWhereUniqueInput | Prisma.ParkHoursWhereUniqueInput[];
    disconnect?: Prisma.ParkHoursWhereUniqueInput | Prisma.ParkHoursWhereUniqueInput[];
    delete?: Prisma.ParkHoursWhereUniqueInput | Prisma.ParkHoursWhereUniqueInput[];
    connect?: Prisma.ParkHoursWhereUniqueInput | Prisma.ParkHoursWhereUniqueInput[];
    update?: Prisma.ParkHoursUpdateWithWhereUniqueWithoutParkInput | Prisma.ParkHoursUpdateWithWhereUniqueWithoutParkInput[];
    updateMany?: Prisma.ParkHoursUpdateManyWithWhereWithoutParkInput | Prisma.ParkHoursUpdateManyWithWhereWithoutParkInput[];
    deleteMany?: Prisma.ParkHoursScalarWhereInput | Prisma.ParkHoursScalarWhereInput[];
};
export type ParkHoursCreateWithoutParkInput = {
    id?: string;
    date: string;
    venueName: string;
    openTime: string;
    closeTime: string;
    createdAt?: Date | string;
};
export type ParkHoursUncheckedCreateWithoutParkInput = {
    id?: string;
    date: string;
    venueName: string;
    openTime: string;
    closeTime: string;
    createdAt?: Date | string;
};
export type ParkHoursCreateOrConnectWithoutParkInput = {
    where: Prisma.ParkHoursWhereUniqueInput;
    create: Prisma.XOR<Prisma.ParkHoursCreateWithoutParkInput, Prisma.ParkHoursUncheckedCreateWithoutParkInput>;
};
export type ParkHoursCreateManyParkInputEnvelope = {
    data: Prisma.ParkHoursCreateManyParkInput | Prisma.ParkHoursCreateManyParkInput[];
};
export type ParkHoursUpsertWithWhereUniqueWithoutParkInput = {
    where: Prisma.ParkHoursWhereUniqueInput;
    update: Prisma.XOR<Prisma.ParkHoursUpdateWithoutParkInput, Prisma.ParkHoursUncheckedUpdateWithoutParkInput>;
    create: Prisma.XOR<Prisma.ParkHoursCreateWithoutParkInput, Prisma.ParkHoursUncheckedCreateWithoutParkInput>;
};
export type ParkHoursUpdateWithWhereUniqueWithoutParkInput = {
    where: Prisma.ParkHoursWhereUniqueInput;
    data: Prisma.XOR<Prisma.ParkHoursUpdateWithoutParkInput, Prisma.ParkHoursUncheckedUpdateWithoutParkInput>;
};
export type ParkHoursUpdateManyWithWhereWithoutParkInput = {
    where: Prisma.ParkHoursScalarWhereInput;
    data: Prisma.XOR<Prisma.ParkHoursUpdateManyMutationInput, Prisma.ParkHoursUncheckedUpdateManyWithoutParkInput>;
};
export type ParkHoursScalarWhereInput = {
    AND?: Prisma.ParkHoursScalarWhereInput | Prisma.ParkHoursScalarWhereInput[];
    OR?: Prisma.ParkHoursScalarWhereInput[];
    NOT?: Prisma.ParkHoursScalarWhereInput | Prisma.ParkHoursScalarWhereInput[];
    id?: Prisma.StringFilter<"ParkHours"> | string;
    parkId?: Prisma.StringFilter<"ParkHours"> | string;
    date?: Prisma.StringFilter<"ParkHours"> | string;
    venueName?: Prisma.StringFilter<"ParkHours"> | string;
    openTime?: Prisma.StringFilter<"ParkHours"> | string;
    closeTime?: Prisma.StringFilter<"ParkHours"> | string;
    createdAt?: Prisma.DateTimeFilter<"ParkHours"> | Date | string;
};
export type ParkHoursCreateManyParkInput = {
    id?: string;
    date: string;
    venueName: string;
    openTime: string;
    closeTime: string;
    createdAt?: Date | string;
};
export type ParkHoursUpdateWithoutParkInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    date?: Prisma.StringFieldUpdateOperationsInput | string;
    venueName?: Prisma.StringFieldUpdateOperationsInput | string;
    openTime?: Prisma.StringFieldUpdateOperationsInput | string;
    closeTime?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type ParkHoursUncheckedUpdateWithoutParkInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    date?: Prisma.StringFieldUpdateOperationsInput | string;
    venueName?: Prisma.StringFieldUpdateOperationsInput | string;
    openTime?: Prisma.StringFieldUpdateOperationsInput | string;
    closeTime?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type ParkHoursUncheckedUpdateManyWithoutParkInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    date?: Prisma.StringFieldUpdateOperationsInput | string;
    venueName?: Prisma.StringFieldUpdateOperationsInput | string;
    openTime?: Prisma.StringFieldUpdateOperationsInput | string;
    closeTime?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type ParkHoursSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    parkId?: boolean;
    date?: boolean;
    venueName?: boolean;
    openTime?: boolean;
    closeTime?: boolean;
    createdAt?: boolean;
    park?: boolean | Prisma.ParkDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["parkHours"]>;
export type ParkHoursSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    parkId?: boolean;
    date?: boolean;
    venueName?: boolean;
    openTime?: boolean;
    closeTime?: boolean;
    createdAt?: boolean;
    park?: boolean | Prisma.ParkDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["parkHours"]>;
export type ParkHoursSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    parkId?: boolean;
    date?: boolean;
    venueName?: boolean;
    openTime?: boolean;
    closeTime?: boolean;
    createdAt?: boolean;
    park?: boolean | Prisma.ParkDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["parkHours"]>;
export type ParkHoursSelectScalar = {
    id?: boolean;
    parkId?: boolean;
    date?: boolean;
    venueName?: boolean;
    openTime?: boolean;
    closeTime?: boolean;
    createdAt?: boolean;
};
export type ParkHoursOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "parkId" | "date" | "venueName" | "openTime" | "closeTime" | "createdAt", ExtArgs["result"]["parkHours"]>;
export type ParkHoursInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    park?: boolean | Prisma.ParkDefaultArgs<ExtArgs>;
};
export type ParkHoursIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    park?: boolean | Prisma.ParkDefaultArgs<ExtArgs>;
};
export type ParkHoursIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    park?: boolean | Prisma.ParkDefaultArgs<ExtArgs>;
};
export type $ParkHoursPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "ParkHours";
    objects: {
        park: Prisma.$ParkPayload<ExtArgs>;
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: string;
        parkId: string;
        date: string;
        venueName: string;
        openTime: string;
        closeTime: string;
        createdAt: Date;
    }, ExtArgs["result"]["parkHours"]>;
    composites: {};
};
export type ParkHoursGetPayload<S extends boolean | null | undefined | ParkHoursDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$ParkHoursPayload, S>;
export type ParkHoursCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<ParkHoursFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: ParkHoursCountAggregateInputType | true;
};
export interface ParkHoursDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['ParkHours'];
        meta: {
            name: 'ParkHours';
        };
    };
    findUnique<T extends ParkHoursFindUniqueArgs>(args: Prisma.SelectSubset<T, ParkHoursFindUniqueArgs<ExtArgs>>): Prisma.Prisma__ParkHoursClient<runtime.Types.Result.GetResult<Prisma.$ParkHoursPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends ParkHoursFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, ParkHoursFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__ParkHoursClient<runtime.Types.Result.GetResult<Prisma.$ParkHoursPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends ParkHoursFindFirstArgs>(args?: Prisma.SelectSubset<T, ParkHoursFindFirstArgs<ExtArgs>>): Prisma.Prisma__ParkHoursClient<runtime.Types.Result.GetResult<Prisma.$ParkHoursPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends ParkHoursFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, ParkHoursFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__ParkHoursClient<runtime.Types.Result.GetResult<Prisma.$ParkHoursPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends ParkHoursFindManyArgs>(args?: Prisma.SelectSubset<T, ParkHoursFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$ParkHoursPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends ParkHoursCreateArgs>(args: Prisma.SelectSubset<T, ParkHoursCreateArgs<ExtArgs>>): Prisma.Prisma__ParkHoursClient<runtime.Types.Result.GetResult<Prisma.$ParkHoursPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends ParkHoursCreateManyArgs>(args?: Prisma.SelectSubset<T, ParkHoursCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    createManyAndReturn<T extends ParkHoursCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, ParkHoursCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$ParkHoursPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    delete<T extends ParkHoursDeleteArgs>(args: Prisma.SelectSubset<T, ParkHoursDeleteArgs<ExtArgs>>): Prisma.Prisma__ParkHoursClient<runtime.Types.Result.GetResult<Prisma.$ParkHoursPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends ParkHoursUpdateArgs>(args: Prisma.SelectSubset<T, ParkHoursUpdateArgs<ExtArgs>>): Prisma.Prisma__ParkHoursClient<runtime.Types.Result.GetResult<Prisma.$ParkHoursPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends ParkHoursDeleteManyArgs>(args?: Prisma.SelectSubset<T, ParkHoursDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends ParkHoursUpdateManyArgs>(args: Prisma.SelectSubset<T, ParkHoursUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateManyAndReturn<T extends ParkHoursUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, ParkHoursUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$ParkHoursPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    upsert<T extends ParkHoursUpsertArgs>(args: Prisma.SelectSubset<T, ParkHoursUpsertArgs<ExtArgs>>): Prisma.Prisma__ParkHoursClient<runtime.Types.Result.GetResult<Prisma.$ParkHoursPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends ParkHoursCountArgs>(args?: Prisma.Subset<T, ParkHoursCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], ParkHoursCountAggregateOutputType> : number>;
    aggregate<T extends ParkHoursAggregateArgs>(args: Prisma.Subset<T, ParkHoursAggregateArgs>): Prisma.PrismaPromise<GetParkHoursAggregateType<T>>;
    groupBy<T extends ParkHoursGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: ParkHoursGroupByArgs['orderBy'];
    } : {
        orderBy?: ParkHoursGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, ParkHoursGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetParkHoursGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: ParkHoursFieldRefs;
}
export interface Prisma__ParkHoursClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    park<T extends Prisma.ParkDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.ParkDefaultArgs<ExtArgs>>): Prisma.Prisma__ParkClient<runtime.Types.Result.GetResult<Prisma.$ParkPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface ParkHoursFieldRefs {
    readonly id: Prisma.FieldRef<"ParkHours", 'String'>;
    readonly parkId: Prisma.FieldRef<"ParkHours", 'String'>;
    readonly date: Prisma.FieldRef<"ParkHours", 'String'>;
    readonly venueName: Prisma.FieldRef<"ParkHours", 'String'>;
    readonly openTime: Prisma.FieldRef<"ParkHours", 'String'>;
    readonly closeTime: Prisma.FieldRef<"ParkHours", 'String'>;
    readonly createdAt: Prisma.FieldRef<"ParkHours", 'DateTime'>;
}
export type ParkHoursFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ParkHoursSelect<ExtArgs> | null;
    omit?: Prisma.ParkHoursOmit<ExtArgs> | null;
    include?: Prisma.ParkHoursInclude<ExtArgs> | null;
    where: Prisma.ParkHoursWhereUniqueInput;
};
export type ParkHoursFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ParkHoursSelect<ExtArgs> | null;
    omit?: Prisma.ParkHoursOmit<ExtArgs> | null;
    include?: Prisma.ParkHoursInclude<ExtArgs> | null;
    where: Prisma.ParkHoursWhereUniqueInput;
};
export type ParkHoursFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ParkHoursSelect<ExtArgs> | null;
    omit?: Prisma.ParkHoursOmit<ExtArgs> | null;
    include?: Prisma.ParkHoursInclude<ExtArgs> | null;
    where?: Prisma.ParkHoursWhereInput;
    orderBy?: Prisma.ParkHoursOrderByWithRelationInput | Prisma.ParkHoursOrderByWithRelationInput[];
    cursor?: Prisma.ParkHoursWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.ParkHoursScalarFieldEnum | Prisma.ParkHoursScalarFieldEnum[];
};
export type ParkHoursFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ParkHoursSelect<ExtArgs> | null;
    omit?: Prisma.ParkHoursOmit<ExtArgs> | null;
    include?: Prisma.ParkHoursInclude<ExtArgs> | null;
    where?: Prisma.ParkHoursWhereInput;
    orderBy?: Prisma.ParkHoursOrderByWithRelationInput | Prisma.ParkHoursOrderByWithRelationInput[];
    cursor?: Prisma.ParkHoursWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.ParkHoursScalarFieldEnum | Prisma.ParkHoursScalarFieldEnum[];
};
export type ParkHoursFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ParkHoursSelect<ExtArgs> | null;
    omit?: Prisma.ParkHoursOmit<ExtArgs> | null;
    include?: Prisma.ParkHoursInclude<ExtArgs> | null;
    where?: Prisma.ParkHoursWhereInput;
    orderBy?: Prisma.ParkHoursOrderByWithRelationInput | Prisma.ParkHoursOrderByWithRelationInput[];
    cursor?: Prisma.ParkHoursWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.ParkHoursScalarFieldEnum | Prisma.ParkHoursScalarFieldEnum[];
};
export type ParkHoursCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ParkHoursSelect<ExtArgs> | null;
    omit?: Prisma.ParkHoursOmit<ExtArgs> | null;
    include?: Prisma.ParkHoursInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.ParkHoursCreateInput, Prisma.ParkHoursUncheckedCreateInput>;
};
export type ParkHoursCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.ParkHoursCreateManyInput | Prisma.ParkHoursCreateManyInput[];
};
export type ParkHoursCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ParkHoursSelectCreateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.ParkHoursOmit<ExtArgs> | null;
    data: Prisma.ParkHoursCreateManyInput | Prisma.ParkHoursCreateManyInput[];
    include?: Prisma.ParkHoursIncludeCreateManyAndReturn<ExtArgs> | null;
};
export type ParkHoursUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ParkHoursSelect<ExtArgs> | null;
    omit?: Prisma.ParkHoursOmit<ExtArgs> | null;
    include?: Prisma.ParkHoursInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.ParkHoursUpdateInput, Prisma.ParkHoursUncheckedUpdateInput>;
    where: Prisma.ParkHoursWhereUniqueInput;
};
export type ParkHoursUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.ParkHoursUpdateManyMutationInput, Prisma.ParkHoursUncheckedUpdateManyInput>;
    where?: Prisma.ParkHoursWhereInput;
    limit?: number;
};
export type ParkHoursUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ParkHoursSelectUpdateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.ParkHoursOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.ParkHoursUpdateManyMutationInput, Prisma.ParkHoursUncheckedUpdateManyInput>;
    where?: Prisma.ParkHoursWhereInput;
    limit?: number;
    include?: Prisma.ParkHoursIncludeUpdateManyAndReturn<ExtArgs> | null;
};
export type ParkHoursUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ParkHoursSelect<ExtArgs> | null;
    omit?: Prisma.ParkHoursOmit<ExtArgs> | null;
    include?: Prisma.ParkHoursInclude<ExtArgs> | null;
    where: Prisma.ParkHoursWhereUniqueInput;
    create: Prisma.XOR<Prisma.ParkHoursCreateInput, Prisma.ParkHoursUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.ParkHoursUpdateInput, Prisma.ParkHoursUncheckedUpdateInput>;
};
export type ParkHoursDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ParkHoursSelect<ExtArgs> | null;
    omit?: Prisma.ParkHoursOmit<ExtArgs> | null;
    include?: Prisma.ParkHoursInclude<ExtArgs> | null;
    where: Prisma.ParkHoursWhereUniqueInput;
};
export type ParkHoursDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.ParkHoursWhereInput;
    limit?: number;
};
export type ParkHoursDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ParkHoursSelect<ExtArgs> | null;
    omit?: Prisma.ParkHoursOmit<ExtArgs> | null;
    include?: Prisma.ParkHoursInclude<ExtArgs> | null;
};
