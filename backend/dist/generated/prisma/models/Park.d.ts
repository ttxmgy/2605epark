import type * as runtime from "@prisma/client/runtime/client";
import type * as Prisma from "../internal/prismaNamespace.js";
export type ParkModel = runtime.Types.Result.DefaultSelection<Prisma.$ParkPayload>;
export type AggregatePark = {
    _count: ParkCountAggregateOutputType | null;
    _min: ParkMinAggregateOutputType | null;
    _max: ParkMaxAggregateOutputType | null;
};
export type ParkMinAggregateOutputType = {
    id: string | null;
    name: string | null;
    createdAt: Date | null;
    updatedAt: Date | null;
};
export type ParkMaxAggregateOutputType = {
    id: string | null;
    name: string | null;
    createdAt: Date | null;
    updatedAt: Date | null;
};
export type ParkCountAggregateOutputType = {
    id: number;
    name: number;
    createdAt: number;
    updatedAt: number;
    _all: number;
};
export type ParkMinAggregateInputType = {
    id?: true;
    name?: true;
    createdAt?: true;
    updatedAt?: true;
};
export type ParkMaxAggregateInputType = {
    id?: true;
    name?: true;
    createdAt?: true;
    updatedAt?: true;
};
export type ParkCountAggregateInputType = {
    id?: true;
    name?: true;
    createdAt?: true;
    updatedAt?: true;
    _all?: true;
};
export type ParkAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.ParkWhereInput;
    orderBy?: Prisma.ParkOrderByWithRelationInput | Prisma.ParkOrderByWithRelationInput[];
    cursor?: Prisma.ParkWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | ParkCountAggregateInputType;
    _min?: ParkMinAggregateInputType;
    _max?: ParkMaxAggregateInputType;
};
export type GetParkAggregateType<T extends ParkAggregateArgs> = {
    [P in keyof T & keyof AggregatePark]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregatePark[P]> : Prisma.GetScalarType<T[P], AggregatePark[P]>;
};
export type ParkGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.ParkWhereInput;
    orderBy?: Prisma.ParkOrderByWithAggregationInput | Prisma.ParkOrderByWithAggregationInput[];
    by: Prisma.ParkScalarFieldEnum[] | Prisma.ParkScalarFieldEnum;
    having?: Prisma.ParkScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: ParkCountAggregateInputType | true;
    _min?: ParkMinAggregateInputType;
    _max?: ParkMaxAggregateInputType;
};
export type ParkGroupByOutputType = {
    id: string;
    name: string;
    createdAt: Date;
    updatedAt: Date;
    _count: ParkCountAggregateOutputType | null;
    _min: ParkMinAggregateOutputType | null;
    _max: ParkMaxAggregateOutputType | null;
};
export type GetParkGroupByPayload<T extends ParkGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<ParkGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof ParkGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], ParkGroupByOutputType[P]> : Prisma.GetScalarType<T[P], ParkGroupByOutputType[P]>;
}>>;
export type ParkWhereInput = {
    AND?: Prisma.ParkWhereInput | Prisma.ParkWhereInput[];
    OR?: Prisma.ParkWhereInput[];
    NOT?: Prisma.ParkWhereInput | Prisma.ParkWhereInput[];
    id?: Prisma.StringFilter<"Park"> | string;
    name?: Prisma.StringFilter<"Park"> | string;
    createdAt?: Prisma.DateTimeFilter<"Park"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"Park"> | Date | string;
    pois?: Prisma.PoiListRelationFilter;
    hours?: Prisma.ParkHoursListRelationFilter;
    plans?: Prisma.PlanListRelationFilter;
};
export type ParkOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
    pois?: Prisma.PoiOrderByRelationAggregateInput;
    hours?: Prisma.ParkHoursOrderByRelationAggregateInput;
    plans?: Prisma.PlanOrderByRelationAggregateInput;
};
export type ParkWhereUniqueInput = Prisma.AtLeast<{
    id?: string;
    AND?: Prisma.ParkWhereInput | Prisma.ParkWhereInput[];
    OR?: Prisma.ParkWhereInput[];
    NOT?: Prisma.ParkWhereInput | Prisma.ParkWhereInput[];
    name?: Prisma.StringFilter<"Park"> | string;
    createdAt?: Prisma.DateTimeFilter<"Park"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"Park"> | Date | string;
    pois?: Prisma.PoiListRelationFilter;
    hours?: Prisma.ParkHoursListRelationFilter;
    plans?: Prisma.PlanListRelationFilter;
}, "id">;
export type ParkOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
    _count?: Prisma.ParkCountOrderByAggregateInput;
    _max?: Prisma.ParkMaxOrderByAggregateInput;
    _min?: Prisma.ParkMinOrderByAggregateInput;
};
export type ParkScalarWhereWithAggregatesInput = {
    AND?: Prisma.ParkScalarWhereWithAggregatesInput | Prisma.ParkScalarWhereWithAggregatesInput[];
    OR?: Prisma.ParkScalarWhereWithAggregatesInput[];
    NOT?: Prisma.ParkScalarWhereWithAggregatesInput | Prisma.ParkScalarWhereWithAggregatesInput[];
    id?: Prisma.StringWithAggregatesFilter<"Park"> | string;
    name?: Prisma.StringWithAggregatesFilter<"Park"> | string;
    createdAt?: Prisma.DateTimeWithAggregatesFilter<"Park"> | Date | string;
    updatedAt?: Prisma.DateTimeWithAggregatesFilter<"Park"> | Date | string;
};
export type ParkCreateInput = {
    id?: string;
    name: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    pois?: Prisma.PoiCreateNestedManyWithoutParkInput;
    hours?: Prisma.ParkHoursCreateNestedManyWithoutParkInput;
    plans?: Prisma.PlanCreateNestedManyWithoutParkInput;
};
export type ParkUncheckedCreateInput = {
    id?: string;
    name: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    pois?: Prisma.PoiUncheckedCreateNestedManyWithoutParkInput;
    hours?: Prisma.ParkHoursUncheckedCreateNestedManyWithoutParkInput;
    plans?: Prisma.PlanUncheckedCreateNestedManyWithoutParkInput;
};
export type ParkUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    pois?: Prisma.PoiUpdateManyWithoutParkNestedInput;
    hours?: Prisma.ParkHoursUpdateManyWithoutParkNestedInput;
    plans?: Prisma.PlanUpdateManyWithoutParkNestedInput;
};
export type ParkUncheckedUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    pois?: Prisma.PoiUncheckedUpdateManyWithoutParkNestedInput;
    hours?: Prisma.ParkHoursUncheckedUpdateManyWithoutParkNestedInput;
    plans?: Prisma.PlanUncheckedUpdateManyWithoutParkNestedInput;
};
export type ParkCreateManyInput = {
    id?: string;
    name: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type ParkUpdateManyMutationInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type ParkUncheckedUpdateManyInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type ParkCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type ParkMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type ParkMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type ParkScalarRelationFilter = {
    is?: Prisma.ParkWhereInput;
    isNot?: Prisma.ParkWhereInput;
};
export type ParkCreateNestedOneWithoutHoursInput = {
    create?: Prisma.XOR<Prisma.ParkCreateWithoutHoursInput, Prisma.ParkUncheckedCreateWithoutHoursInput>;
    connectOrCreate?: Prisma.ParkCreateOrConnectWithoutHoursInput;
    connect?: Prisma.ParkWhereUniqueInput;
};
export type ParkUpdateOneRequiredWithoutHoursNestedInput = {
    create?: Prisma.XOR<Prisma.ParkCreateWithoutHoursInput, Prisma.ParkUncheckedCreateWithoutHoursInput>;
    connectOrCreate?: Prisma.ParkCreateOrConnectWithoutHoursInput;
    upsert?: Prisma.ParkUpsertWithoutHoursInput;
    connect?: Prisma.ParkWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.ParkUpdateToOneWithWhereWithoutHoursInput, Prisma.ParkUpdateWithoutHoursInput>, Prisma.ParkUncheckedUpdateWithoutHoursInput>;
};
export type ParkCreateNestedOneWithoutPoisInput = {
    create?: Prisma.XOR<Prisma.ParkCreateWithoutPoisInput, Prisma.ParkUncheckedCreateWithoutPoisInput>;
    connectOrCreate?: Prisma.ParkCreateOrConnectWithoutPoisInput;
    connect?: Prisma.ParkWhereUniqueInput;
};
export type ParkUpdateOneRequiredWithoutPoisNestedInput = {
    create?: Prisma.XOR<Prisma.ParkCreateWithoutPoisInput, Prisma.ParkUncheckedCreateWithoutPoisInput>;
    connectOrCreate?: Prisma.ParkCreateOrConnectWithoutPoisInput;
    upsert?: Prisma.ParkUpsertWithoutPoisInput;
    connect?: Prisma.ParkWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.ParkUpdateToOneWithWhereWithoutPoisInput, Prisma.ParkUpdateWithoutPoisInput>, Prisma.ParkUncheckedUpdateWithoutPoisInput>;
};
export type ParkCreateNestedOneWithoutPlansInput = {
    create?: Prisma.XOR<Prisma.ParkCreateWithoutPlansInput, Prisma.ParkUncheckedCreateWithoutPlansInput>;
    connectOrCreate?: Prisma.ParkCreateOrConnectWithoutPlansInput;
    connect?: Prisma.ParkWhereUniqueInput;
};
export type ParkUpdateOneRequiredWithoutPlansNestedInput = {
    create?: Prisma.XOR<Prisma.ParkCreateWithoutPlansInput, Prisma.ParkUncheckedCreateWithoutPlansInput>;
    connectOrCreate?: Prisma.ParkCreateOrConnectWithoutPlansInput;
    upsert?: Prisma.ParkUpsertWithoutPlansInput;
    connect?: Prisma.ParkWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.ParkUpdateToOneWithWhereWithoutPlansInput, Prisma.ParkUpdateWithoutPlansInput>, Prisma.ParkUncheckedUpdateWithoutPlansInput>;
};
export type ParkCreateWithoutHoursInput = {
    id?: string;
    name: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    pois?: Prisma.PoiCreateNestedManyWithoutParkInput;
    plans?: Prisma.PlanCreateNestedManyWithoutParkInput;
};
export type ParkUncheckedCreateWithoutHoursInput = {
    id?: string;
    name: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    pois?: Prisma.PoiUncheckedCreateNestedManyWithoutParkInput;
    plans?: Prisma.PlanUncheckedCreateNestedManyWithoutParkInput;
};
export type ParkCreateOrConnectWithoutHoursInput = {
    where: Prisma.ParkWhereUniqueInput;
    create: Prisma.XOR<Prisma.ParkCreateWithoutHoursInput, Prisma.ParkUncheckedCreateWithoutHoursInput>;
};
export type ParkUpsertWithoutHoursInput = {
    update: Prisma.XOR<Prisma.ParkUpdateWithoutHoursInput, Prisma.ParkUncheckedUpdateWithoutHoursInput>;
    create: Prisma.XOR<Prisma.ParkCreateWithoutHoursInput, Prisma.ParkUncheckedCreateWithoutHoursInput>;
    where?: Prisma.ParkWhereInput;
};
export type ParkUpdateToOneWithWhereWithoutHoursInput = {
    where?: Prisma.ParkWhereInput;
    data: Prisma.XOR<Prisma.ParkUpdateWithoutHoursInput, Prisma.ParkUncheckedUpdateWithoutHoursInput>;
};
export type ParkUpdateWithoutHoursInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    pois?: Prisma.PoiUpdateManyWithoutParkNestedInput;
    plans?: Prisma.PlanUpdateManyWithoutParkNestedInput;
};
export type ParkUncheckedUpdateWithoutHoursInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    pois?: Prisma.PoiUncheckedUpdateManyWithoutParkNestedInput;
    plans?: Prisma.PlanUncheckedUpdateManyWithoutParkNestedInput;
};
export type ParkCreateWithoutPoisInput = {
    id?: string;
    name: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    hours?: Prisma.ParkHoursCreateNestedManyWithoutParkInput;
    plans?: Prisma.PlanCreateNestedManyWithoutParkInput;
};
export type ParkUncheckedCreateWithoutPoisInput = {
    id?: string;
    name: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    hours?: Prisma.ParkHoursUncheckedCreateNestedManyWithoutParkInput;
    plans?: Prisma.PlanUncheckedCreateNestedManyWithoutParkInput;
};
export type ParkCreateOrConnectWithoutPoisInput = {
    where: Prisma.ParkWhereUniqueInput;
    create: Prisma.XOR<Prisma.ParkCreateWithoutPoisInput, Prisma.ParkUncheckedCreateWithoutPoisInput>;
};
export type ParkUpsertWithoutPoisInput = {
    update: Prisma.XOR<Prisma.ParkUpdateWithoutPoisInput, Prisma.ParkUncheckedUpdateWithoutPoisInput>;
    create: Prisma.XOR<Prisma.ParkCreateWithoutPoisInput, Prisma.ParkUncheckedCreateWithoutPoisInput>;
    where?: Prisma.ParkWhereInput;
};
export type ParkUpdateToOneWithWhereWithoutPoisInput = {
    where?: Prisma.ParkWhereInput;
    data: Prisma.XOR<Prisma.ParkUpdateWithoutPoisInput, Prisma.ParkUncheckedUpdateWithoutPoisInput>;
};
export type ParkUpdateWithoutPoisInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    hours?: Prisma.ParkHoursUpdateManyWithoutParkNestedInput;
    plans?: Prisma.PlanUpdateManyWithoutParkNestedInput;
};
export type ParkUncheckedUpdateWithoutPoisInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    hours?: Prisma.ParkHoursUncheckedUpdateManyWithoutParkNestedInput;
    plans?: Prisma.PlanUncheckedUpdateManyWithoutParkNestedInput;
};
export type ParkCreateWithoutPlansInput = {
    id?: string;
    name: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    pois?: Prisma.PoiCreateNestedManyWithoutParkInput;
    hours?: Prisma.ParkHoursCreateNestedManyWithoutParkInput;
};
export type ParkUncheckedCreateWithoutPlansInput = {
    id?: string;
    name: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    pois?: Prisma.PoiUncheckedCreateNestedManyWithoutParkInput;
    hours?: Prisma.ParkHoursUncheckedCreateNestedManyWithoutParkInput;
};
export type ParkCreateOrConnectWithoutPlansInput = {
    where: Prisma.ParkWhereUniqueInput;
    create: Prisma.XOR<Prisma.ParkCreateWithoutPlansInput, Prisma.ParkUncheckedCreateWithoutPlansInput>;
};
export type ParkUpsertWithoutPlansInput = {
    update: Prisma.XOR<Prisma.ParkUpdateWithoutPlansInput, Prisma.ParkUncheckedUpdateWithoutPlansInput>;
    create: Prisma.XOR<Prisma.ParkCreateWithoutPlansInput, Prisma.ParkUncheckedCreateWithoutPlansInput>;
    where?: Prisma.ParkWhereInput;
};
export type ParkUpdateToOneWithWhereWithoutPlansInput = {
    where?: Prisma.ParkWhereInput;
    data: Prisma.XOR<Prisma.ParkUpdateWithoutPlansInput, Prisma.ParkUncheckedUpdateWithoutPlansInput>;
};
export type ParkUpdateWithoutPlansInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    pois?: Prisma.PoiUpdateManyWithoutParkNestedInput;
    hours?: Prisma.ParkHoursUpdateManyWithoutParkNestedInput;
};
export type ParkUncheckedUpdateWithoutPlansInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    pois?: Prisma.PoiUncheckedUpdateManyWithoutParkNestedInput;
    hours?: Prisma.ParkHoursUncheckedUpdateManyWithoutParkNestedInput;
};
export type ParkCountOutputType = {
    pois: number;
    hours: number;
    plans: number;
};
export type ParkCountOutputTypeSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    pois?: boolean | ParkCountOutputTypeCountPoisArgs;
    hours?: boolean | ParkCountOutputTypeCountHoursArgs;
    plans?: boolean | ParkCountOutputTypeCountPlansArgs;
};
export type ParkCountOutputTypeDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ParkCountOutputTypeSelect<ExtArgs> | null;
};
export type ParkCountOutputTypeCountPoisArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.PoiWhereInput;
};
export type ParkCountOutputTypeCountHoursArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.ParkHoursWhereInput;
};
export type ParkCountOutputTypeCountPlansArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.PlanWhereInput;
};
export type ParkSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    name?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
    pois?: boolean | Prisma.Park$poisArgs<ExtArgs>;
    hours?: boolean | Prisma.Park$hoursArgs<ExtArgs>;
    plans?: boolean | Prisma.Park$plansArgs<ExtArgs>;
    _count?: boolean | Prisma.ParkCountOutputTypeDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["park"]>;
export type ParkSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    name?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
}, ExtArgs["result"]["park"]>;
export type ParkSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    name?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
}, ExtArgs["result"]["park"]>;
export type ParkSelectScalar = {
    id?: boolean;
    name?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
};
export type ParkOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "name" | "createdAt" | "updatedAt", ExtArgs["result"]["park"]>;
export type ParkInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    pois?: boolean | Prisma.Park$poisArgs<ExtArgs>;
    hours?: boolean | Prisma.Park$hoursArgs<ExtArgs>;
    plans?: boolean | Prisma.Park$plansArgs<ExtArgs>;
    _count?: boolean | Prisma.ParkCountOutputTypeDefaultArgs<ExtArgs>;
};
export type ParkIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {};
export type ParkIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {};
export type $ParkPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "Park";
    objects: {
        pois: Prisma.$PoiPayload<ExtArgs>[];
        hours: Prisma.$ParkHoursPayload<ExtArgs>[];
        plans: Prisma.$PlanPayload<ExtArgs>[];
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: string;
        name: string;
        createdAt: Date;
        updatedAt: Date;
    }, ExtArgs["result"]["park"]>;
    composites: {};
};
export type ParkGetPayload<S extends boolean | null | undefined | ParkDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$ParkPayload, S>;
export type ParkCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<ParkFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: ParkCountAggregateInputType | true;
};
export interface ParkDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['Park'];
        meta: {
            name: 'Park';
        };
    };
    findUnique<T extends ParkFindUniqueArgs>(args: Prisma.SelectSubset<T, ParkFindUniqueArgs<ExtArgs>>): Prisma.Prisma__ParkClient<runtime.Types.Result.GetResult<Prisma.$ParkPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends ParkFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, ParkFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__ParkClient<runtime.Types.Result.GetResult<Prisma.$ParkPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends ParkFindFirstArgs>(args?: Prisma.SelectSubset<T, ParkFindFirstArgs<ExtArgs>>): Prisma.Prisma__ParkClient<runtime.Types.Result.GetResult<Prisma.$ParkPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends ParkFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, ParkFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__ParkClient<runtime.Types.Result.GetResult<Prisma.$ParkPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends ParkFindManyArgs>(args?: Prisma.SelectSubset<T, ParkFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$ParkPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends ParkCreateArgs>(args: Prisma.SelectSubset<T, ParkCreateArgs<ExtArgs>>): Prisma.Prisma__ParkClient<runtime.Types.Result.GetResult<Prisma.$ParkPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends ParkCreateManyArgs>(args?: Prisma.SelectSubset<T, ParkCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    createManyAndReturn<T extends ParkCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, ParkCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$ParkPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    delete<T extends ParkDeleteArgs>(args: Prisma.SelectSubset<T, ParkDeleteArgs<ExtArgs>>): Prisma.Prisma__ParkClient<runtime.Types.Result.GetResult<Prisma.$ParkPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends ParkUpdateArgs>(args: Prisma.SelectSubset<T, ParkUpdateArgs<ExtArgs>>): Prisma.Prisma__ParkClient<runtime.Types.Result.GetResult<Prisma.$ParkPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends ParkDeleteManyArgs>(args?: Prisma.SelectSubset<T, ParkDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends ParkUpdateManyArgs>(args: Prisma.SelectSubset<T, ParkUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateManyAndReturn<T extends ParkUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, ParkUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$ParkPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    upsert<T extends ParkUpsertArgs>(args: Prisma.SelectSubset<T, ParkUpsertArgs<ExtArgs>>): Prisma.Prisma__ParkClient<runtime.Types.Result.GetResult<Prisma.$ParkPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends ParkCountArgs>(args?: Prisma.Subset<T, ParkCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], ParkCountAggregateOutputType> : number>;
    aggregate<T extends ParkAggregateArgs>(args: Prisma.Subset<T, ParkAggregateArgs>): Prisma.PrismaPromise<GetParkAggregateType<T>>;
    groupBy<T extends ParkGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: ParkGroupByArgs['orderBy'];
    } : {
        orderBy?: ParkGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, ParkGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetParkGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: ParkFieldRefs;
}
export interface Prisma__ParkClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    pois<T extends Prisma.Park$poisArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.Park$poisArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$PoiPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    hours<T extends Prisma.Park$hoursArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.Park$hoursArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$ParkHoursPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    plans<T extends Prisma.Park$plansArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.Park$plansArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$PlanPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface ParkFieldRefs {
    readonly id: Prisma.FieldRef<"Park", 'String'>;
    readonly name: Prisma.FieldRef<"Park", 'String'>;
    readonly createdAt: Prisma.FieldRef<"Park", 'DateTime'>;
    readonly updatedAt: Prisma.FieldRef<"Park", 'DateTime'>;
}
export type ParkFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ParkSelect<ExtArgs> | null;
    omit?: Prisma.ParkOmit<ExtArgs> | null;
    include?: Prisma.ParkInclude<ExtArgs> | null;
    where: Prisma.ParkWhereUniqueInput;
};
export type ParkFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ParkSelect<ExtArgs> | null;
    omit?: Prisma.ParkOmit<ExtArgs> | null;
    include?: Prisma.ParkInclude<ExtArgs> | null;
    where: Prisma.ParkWhereUniqueInput;
};
export type ParkFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ParkSelect<ExtArgs> | null;
    omit?: Prisma.ParkOmit<ExtArgs> | null;
    include?: Prisma.ParkInclude<ExtArgs> | null;
    where?: Prisma.ParkWhereInput;
    orderBy?: Prisma.ParkOrderByWithRelationInput | Prisma.ParkOrderByWithRelationInput[];
    cursor?: Prisma.ParkWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.ParkScalarFieldEnum | Prisma.ParkScalarFieldEnum[];
};
export type ParkFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ParkSelect<ExtArgs> | null;
    omit?: Prisma.ParkOmit<ExtArgs> | null;
    include?: Prisma.ParkInclude<ExtArgs> | null;
    where?: Prisma.ParkWhereInput;
    orderBy?: Prisma.ParkOrderByWithRelationInput | Prisma.ParkOrderByWithRelationInput[];
    cursor?: Prisma.ParkWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.ParkScalarFieldEnum | Prisma.ParkScalarFieldEnum[];
};
export type ParkFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ParkSelect<ExtArgs> | null;
    omit?: Prisma.ParkOmit<ExtArgs> | null;
    include?: Prisma.ParkInclude<ExtArgs> | null;
    where?: Prisma.ParkWhereInput;
    orderBy?: Prisma.ParkOrderByWithRelationInput | Prisma.ParkOrderByWithRelationInput[];
    cursor?: Prisma.ParkWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.ParkScalarFieldEnum | Prisma.ParkScalarFieldEnum[];
};
export type ParkCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ParkSelect<ExtArgs> | null;
    omit?: Prisma.ParkOmit<ExtArgs> | null;
    include?: Prisma.ParkInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.ParkCreateInput, Prisma.ParkUncheckedCreateInput>;
};
export type ParkCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.ParkCreateManyInput | Prisma.ParkCreateManyInput[];
};
export type ParkCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ParkSelectCreateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.ParkOmit<ExtArgs> | null;
    data: Prisma.ParkCreateManyInput | Prisma.ParkCreateManyInput[];
};
export type ParkUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ParkSelect<ExtArgs> | null;
    omit?: Prisma.ParkOmit<ExtArgs> | null;
    include?: Prisma.ParkInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.ParkUpdateInput, Prisma.ParkUncheckedUpdateInput>;
    where: Prisma.ParkWhereUniqueInput;
};
export type ParkUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.ParkUpdateManyMutationInput, Prisma.ParkUncheckedUpdateManyInput>;
    where?: Prisma.ParkWhereInput;
    limit?: number;
};
export type ParkUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ParkSelectUpdateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.ParkOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.ParkUpdateManyMutationInput, Prisma.ParkUncheckedUpdateManyInput>;
    where?: Prisma.ParkWhereInput;
    limit?: number;
};
export type ParkUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ParkSelect<ExtArgs> | null;
    omit?: Prisma.ParkOmit<ExtArgs> | null;
    include?: Prisma.ParkInclude<ExtArgs> | null;
    where: Prisma.ParkWhereUniqueInput;
    create: Prisma.XOR<Prisma.ParkCreateInput, Prisma.ParkUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.ParkUpdateInput, Prisma.ParkUncheckedUpdateInput>;
};
export type ParkDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ParkSelect<ExtArgs> | null;
    omit?: Prisma.ParkOmit<ExtArgs> | null;
    include?: Prisma.ParkInclude<ExtArgs> | null;
    where: Prisma.ParkWhereUniqueInput;
};
export type ParkDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.ParkWhereInput;
    limit?: number;
};
export type Park$poisArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.PoiSelect<ExtArgs> | null;
    omit?: Prisma.PoiOmit<ExtArgs> | null;
    include?: Prisma.PoiInclude<ExtArgs> | null;
    where?: Prisma.PoiWhereInput;
    orderBy?: Prisma.PoiOrderByWithRelationInput | Prisma.PoiOrderByWithRelationInput[];
    cursor?: Prisma.PoiWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.PoiScalarFieldEnum | Prisma.PoiScalarFieldEnum[];
};
export type Park$hoursArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type Park$plansArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.PlanSelect<ExtArgs> | null;
    omit?: Prisma.PlanOmit<ExtArgs> | null;
    include?: Prisma.PlanInclude<ExtArgs> | null;
    where?: Prisma.PlanWhereInput;
    orderBy?: Prisma.PlanOrderByWithRelationInput | Prisma.PlanOrderByWithRelationInput[];
    cursor?: Prisma.PlanWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.PlanScalarFieldEnum | Prisma.PlanScalarFieldEnum[];
};
export type ParkDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ParkSelect<ExtArgs> | null;
    omit?: Prisma.ParkOmit<ExtArgs> | null;
    include?: Prisma.ParkInclude<ExtArgs> | null;
};
