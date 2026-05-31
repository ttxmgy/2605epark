import type * as runtime from "@prisma/client/runtime/client";
import type * as $Enums from "../enums.js";
import type * as Prisma from "../internal/prismaNamespace.js";
export type PlanModel = runtime.Types.Result.DefaultSelection<Prisma.$PlanPayload>;
export type AggregatePlan = {
    _count: PlanCountAggregateOutputType | null;
    _min: PlanMinAggregateOutputType | null;
    _max: PlanMaxAggregateOutputType | null;
};
export type PlanMinAggregateOutputType = {
    id: string | null;
    userId: string | null;
    parkId: string | null;
    mode: $Enums.GuideMode | null;
    template: string | null;
    createdAt: Date | null;
    updatedAt: Date | null;
};
export type PlanMaxAggregateOutputType = {
    id: string | null;
    userId: string | null;
    parkId: string | null;
    mode: $Enums.GuideMode | null;
    template: string | null;
    createdAt: Date | null;
    updatedAt: Date | null;
};
export type PlanCountAggregateOutputType = {
    id: number;
    userId: number;
    parkId: number;
    mode: number;
    template: number;
    data: number;
    createdAt: number;
    updatedAt: number;
    _all: number;
};
export type PlanMinAggregateInputType = {
    id?: true;
    userId?: true;
    parkId?: true;
    mode?: true;
    template?: true;
    createdAt?: true;
    updatedAt?: true;
};
export type PlanMaxAggregateInputType = {
    id?: true;
    userId?: true;
    parkId?: true;
    mode?: true;
    template?: true;
    createdAt?: true;
    updatedAt?: true;
};
export type PlanCountAggregateInputType = {
    id?: true;
    userId?: true;
    parkId?: true;
    mode?: true;
    template?: true;
    data?: true;
    createdAt?: true;
    updatedAt?: true;
    _all?: true;
};
export type PlanAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.PlanWhereInput;
    orderBy?: Prisma.PlanOrderByWithRelationInput | Prisma.PlanOrderByWithRelationInput[];
    cursor?: Prisma.PlanWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | PlanCountAggregateInputType;
    _min?: PlanMinAggregateInputType;
    _max?: PlanMaxAggregateInputType;
};
export type GetPlanAggregateType<T extends PlanAggregateArgs> = {
    [P in keyof T & keyof AggregatePlan]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregatePlan[P]> : Prisma.GetScalarType<T[P], AggregatePlan[P]>;
};
export type PlanGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.PlanWhereInput;
    orderBy?: Prisma.PlanOrderByWithAggregationInput | Prisma.PlanOrderByWithAggregationInput[];
    by: Prisma.PlanScalarFieldEnum[] | Prisma.PlanScalarFieldEnum;
    having?: Prisma.PlanScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: PlanCountAggregateInputType | true;
    _min?: PlanMinAggregateInputType;
    _max?: PlanMaxAggregateInputType;
};
export type PlanGroupByOutputType = {
    id: string;
    userId: string;
    parkId: string;
    mode: $Enums.GuideMode;
    template: string | null;
    data: runtime.JsonValue;
    createdAt: Date;
    updatedAt: Date;
    _count: PlanCountAggregateOutputType | null;
    _min: PlanMinAggregateOutputType | null;
    _max: PlanMaxAggregateOutputType | null;
};
export type GetPlanGroupByPayload<T extends PlanGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<PlanGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof PlanGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], PlanGroupByOutputType[P]> : Prisma.GetScalarType<T[P], PlanGroupByOutputType[P]>;
}>>;
export type PlanWhereInput = {
    AND?: Prisma.PlanWhereInput | Prisma.PlanWhereInput[];
    OR?: Prisma.PlanWhereInput[];
    NOT?: Prisma.PlanWhereInput | Prisma.PlanWhereInput[];
    id?: Prisma.StringFilter<"Plan"> | string;
    userId?: Prisma.StringFilter<"Plan"> | string;
    parkId?: Prisma.StringFilter<"Plan"> | string;
    mode?: Prisma.EnumGuideModeFilter<"Plan"> | $Enums.GuideMode;
    template?: Prisma.StringNullableFilter<"Plan"> | string | null;
    data?: Prisma.JsonFilter<"Plan">;
    createdAt?: Prisma.DateTimeFilter<"Plan"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"Plan"> | Date | string;
    user?: Prisma.XOR<Prisma.UserScalarRelationFilter, Prisma.UserWhereInput>;
    park?: Prisma.XOR<Prisma.ParkScalarRelationFilter, Prisma.ParkWhereInput>;
    events?: Prisma.ProgressEventListRelationFilter;
};
export type PlanOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    userId?: Prisma.SortOrder;
    parkId?: Prisma.SortOrder;
    mode?: Prisma.SortOrder;
    template?: Prisma.SortOrderInput | Prisma.SortOrder;
    data?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
    user?: Prisma.UserOrderByWithRelationInput;
    park?: Prisma.ParkOrderByWithRelationInput;
    events?: Prisma.ProgressEventOrderByRelationAggregateInput;
};
export type PlanWhereUniqueInput = Prisma.AtLeast<{
    id?: string;
    AND?: Prisma.PlanWhereInput | Prisma.PlanWhereInput[];
    OR?: Prisma.PlanWhereInput[];
    NOT?: Prisma.PlanWhereInput | Prisma.PlanWhereInput[];
    userId?: Prisma.StringFilter<"Plan"> | string;
    parkId?: Prisma.StringFilter<"Plan"> | string;
    mode?: Prisma.EnumGuideModeFilter<"Plan"> | $Enums.GuideMode;
    template?: Prisma.StringNullableFilter<"Plan"> | string | null;
    data?: Prisma.JsonFilter<"Plan">;
    createdAt?: Prisma.DateTimeFilter<"Plan"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"Plan"> | Date | string;
    user?: Prisma.XOR<Prisma.UserScalarRelationFilter, Prisma.UserWhereInput>;
    park?: Prisma.XOR<Prisma.ParkScalarRelationFilter, Prisma.ParkWhereInput>;
    events?: Prisma.ProgressEventListRelationFilter;
}, "id">;
export type PlanOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    userId?: Prisma.SortOrder;
    parkId?: Prisma.SortOrder;
    mode?: Prisma.SortOrder;
    template?: Prisma.SortOrderInput | Prisma.SortOrder;
    data?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
    _count?: Prisma.PlanCountOrderByAggregateInput;
    _max?: Prisma.PlanMaxOrderByAggregateInput;
    _min?: Prisma.PlanMinOrderByAggregateInput;
};
export type PlanScalarWhereWithAggregatesInput = {
    AND?: Prisma.PlanScalarWhereWithAggregatesInput | Prisma.PlanScalarWhereWithAggregatesInput[];
    OR?: Prisma.PlanScalarWhereWithAggregatesInput[];
    NOT?: Prisma.PlanScalarWhereWithAggregatesInput | Prisma.PlanScalarWhereWithAggregatesInput[];
    id?: Prisma.StringWithAggregatesFilter<"Plan"> | string;
    userId?: Prisma.StringWithAggregatesFilter<"Plan"> | string;
    parkId?: Prisma.StringWithAggregatesFilter<"Plan"> | string;
    mode?: Prisma.EnumGuideModeWithAggregatesFilter<"Plan"> | $Enums.GuideMode;
    template?: Prisma.StringNullableWithAggregatesFilter<"Plan"> | string | null;
    data?: Prisma.JsonWithAggregatesFilter<"Plan">;
    createdAt?: Prisma.DateTimeWithAggregatesFilter<"Plan"> | Date | string;
    updatedAt?: Prisma.DateTimeWithAggregatesFilter<"Plan"> | Date | string;
};
export type PlanCreateInput = {
    id?: string;
    mode?: $Enums.GuideMode;
    template?: string | null;
    data: Prisma.JsonNullValueInput | runtime.InputJsonValue;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    user: Prisma.UserCreateNestedOneWithoutPlansInput;
    park: Prisma.ParkCreateNestedOneWithoutPlansInput;
    events?: Prisma.ProgressEventCreateNestedManyWithoutPlanInput;
};
export type PlanUncheckedCreateInput = {
    id?: string;
    userId: string;
    parkId: string;
    mode?: $Enums.GuideMode;
    template?: string | null;
    data: Prisma.JsonNullValueInput | runtime.InputJsonValue;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    events?: Prisma.ProgressEventUncheckedCreateNestedManyWithoutPlanInput;
};
export type PlanUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    mode?: Prisma.EnumGuideModeFieldUpdateOperationsInput | $Enums.GuideMode;
    template?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    data?: Prisma.JsonNullValueInput | runtime.InputJsonValue;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    user?: Prisma.UserUpdateOneRequiredWithoutPlansNestedInput;
    park?: Prisma.ParkUpdateOneRequiredWithoutPlansNestedInput;
    events?: Prisma.ProgressEventUpdateManyWithoutPlanNestedInput;
};
export type PlanUncheckedUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    userId?: Prisma.StringFieldUpdateOperationsInput | string;
    parkId?: Prisma.StringFieldUpdateOperationsInput | string;
    mode?: Prisma.EnumGuideModeFieldUpdateOperationsInput | $Enums.GuideMode;
    template?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    data?: Prisma.JsonNullValueInput | runtime.InputJsonValue;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    events?: Prisma.ProgressEventUncheckedUpdateManyWithoutPlanNestedInput;
};
export type PlanCreateManyInput = {
    id?: string;
    userId: string;
    parkId: string;
    mode?: $Enums.GuideMode;
    template?: string | null;
    data: Prisma.JsonNullValueInput | runtime.InputJsonValue;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type PlanUpdateManyMutationInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    mode?: Prisma.EnumGuideModeFieldUpdateOperationsInput | $Enums.GuideMode;
    template?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    data?: Prisma.JsonNullValueInput | runtime.InputJsonValue;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type PlanUncheckedUpdateManyInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    userId?: Prisma.StringFieldUpdateOperationsInput | string;
    parkId?: Prisma.StringFieldUpdateOperationsInput | string;
    mode?: Prisma.EnumGuideModeFieldUpdateOperationsInput | $Enums.GuideMode;
    template?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    data?: Prisma.JsonNullValueInput | runtime.InputJsonValue;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type PlanListRelationFilter = {
    every?: Prisma.PlanWhereInput;
    some?: Prisma.PlanWhereInput;
    none?: Prisma.PlanWhereInput;
};
export type PlanOrderByRelationAggregateInput = {
    _count?: Prisma.SortOrder;
};
export type PlanCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    userId?: Prisma.SortOrder;
    parkId?: Prisma.SortOrder;
    mode?: Prisma.SortOrder;
    template?: Prisma.SortOrder;
    data?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type PlanMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    userId?: Prisma.SortOrder;
    parkId?: Prisma.SortOrder;
    mode?: Prisma.SortOrder;
    template?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type PlanMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    userId?: Prisma.SortOrder;
    parkId?: Prisma.SortOrder;
    mode?: Prisma.SortOrder;
    template?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type PlanNullableScalarRelationFilter = {
    is?: Prisma.PlanWhereInput | null;
    isNot?: Prisma.PlanWhereInput | null;
};
export type PlanCreateNestedManyWithoutUserInput = {
    create?: Prisma.XOR<Prisma.PlanCreateWithoutUserInput, Prisma.PlanUncheckedCreateWithoutUserInput> | Prisma.PlanCreateWithoutUserInput[] | Prisma.PlanUncheckedCreateWithoutUserInput[];
    connectOrCreate?: Prisma.PlanCreateOrConnectWithoutUserInput | Prisma.PlanCreateOrConnectWithoutUserInput[];
    createMany?: Prisma.PlanCreateManyUserInputEnvelope;
    connect?: Prisma.PlanWhereUniqueInput | Prisma.PlanWhereUniqueInput[];
};
export type PlanUncheckedCreateNestedManyWithoutUserInput = {
    create?: Prisma.XOR<Prisma.PlanCreateWithoutUserInput, Prisma.PlanUncheckedCreateWithoutUserInput> | Prisma.PlanCreateWithoutUserInput[] | Prisma.PlanUncheckedCreateWithoutUserInput[];
    connectOrCreate?: Prisma.PlanCreateOrConnectWithoutUserInput | Prisma.PlanCreateOrConnectWithoutUserInput[];
    createMany?: Prisma.PlanCreateManyUserInputEnvelope;
    connect?: Prisma.PlanWhereUniqueInput | Prisma.PlanWhereUniqueInput[];
};
export type PlanUpdateManyWithoutUserNestedInput = {
    create?: Prisma.XOR<Prisma.PlanCreateWithoutUserInput, Prisma.PlanUncheckedCreateWithoutUserInput> | Prisma.PlanCreateWithoutUserInput[] | Prisma.PlanUncheckedCreateWithoutUserInput[];
    connectOrCreate?: Prisma.PlanCreateOrConnectWithoutUserInput | Prisma.PlanCreateOrConnectWithoutUserInput[];
    upsert?: Prisma.PlanUpsertWithWhereUniqueWithoutUserInput | Prisma.PlanUpsertWithWhereUniqueWithoutUserInput[];
    createMany?: Prisma.PlanCreateManyUserInputEnvelope;
    set?: Prisma.PlanWhereUniqueInput | Prisma.PlanWhereUniqueInput[];
    disconnect?: Prisma.PlanWhereUniqueInput | Prisma.PlanWhereUniqueInput[];
    delete?: Prisma.PlanWhereUniqueInput | Prisma.PlanWhereUniqueInput[];
    connect?: Prisma.PlanWhereUniqueInput | Prisma.PlanWhereUniqueInput[];
    update?: Prisma.PlanUpdateWithWhereUniqueWithoutUserInput | Prisma.PlanUpdateWithWhereUniqueWithoutUserInput[];
    updateMany?: Prisma.PlanUpdateManyWithWhereWithoutUserInput | Prisma.PlanUpdateManyWithWhereWithoutUserInput[];
    deleteMany?: Prisma.PlanScalarWhereInput | Prisma.PlanScalarWhereInput[];
};
export type PlanUncheckedUpdateManyWithoutUserNestedInput = {
    create?: Prisma.XOR<Prisma.PlanCreateWithoutUserInput, Prisma.PlanUncheckedCreateWithoutUserInput> | Prisma.PlanCreateWithoutUserInput[] | Prisma.PlanUncheckedCreateWithoutUserInput[];
    connectOrCreate?: Prisma.PlanCreateOrConnectWithoutUserInput | Prisma.PlanCreateOrConnectWithoutUserInput[];
    upsert?: Prisma.PlanUpsertWithWhereUniqueWithoutUserInput | Prisma.PlanUpsertWithWhereUniqueWithoutUserInput[];
    createMany?: Prisma.PlanCreateManyUserInputEnvelope;
    set?: Prisma.PlanWhereUniqueInput | Prisma.PlanWhereUniqueInput[];
    disconnect?: Prisma.PlanWhereUniqueInput | Prisma.PlanWhereUniqueInput[];
    delete?: Prisma.PlanWhereUniqueInput | Prisma.PlanWhereUniqueInput[];
    connect?: Prisma.PlanWhereUniqueInput | Prisma.PlanWhereUniqueInput[];
    update?: Prisma.PlanUpdateWithWhereUniqueWithoutUserInput | Prisma.PlanUpdateWithWhereUniqueWithoutUserInput[];
    updateMany?: Prisma.PlanUpdateManyWithWhereWithoutUserInput | Prisma.PlanUpdateManyWithWhereWithoutUserInput[];
    deleteMany?: Prisma.PlanScalarWhereInput | Prisma.PlanScalarWhereInput[];
};
export type PlanCreateNestedManyWithoutParkInput = {
    create?: Prisma.XOR<Prisma.PlanCreateWithoutParkInput, Prisma.PlanUncheckedCreateWithoutParkInput> | Prisma.PlanCreateWithoutParkInput[] | Prisma.PlanUncheckedCreateWithoutParkInput[];
    connectOrCreate?: Prisma.PlanCreateOrConnectWithoutParkInput | Prisma.PlanCreateOrConnectWithoutParkInput[];
    createMany?: Prisma.PlanCreateManyParkInputEnvelope;
    connect?: Prisma.PlanWhereUniqueInput | Prisma.PlanWhereUniqueInput[];
};
export type PlanUncheckedCreateNestedManyWithoutParkInput = {
    create?: Prisma.XOR<Prisma.PlanCreateWithoutParkInput, Prisma.PlanUncheckedCreateWithoutParkInput> | Prisma.PlanCreateWithoutParkInput[] | Prisma.PlanUncheckedCreateWithoutParkInput[];
    connectOrCreate?: Prisma.PlanCreateOrConnectWithoutParkInput | Prisma.PlanCreateOrConnectWithoutParkInput[];
    createMany?: Prisma.PlanCreateManyParkInputEnvelope;
    connect?: Prisma.PlanWhereUniqueInput | Prisma.PlanWhereUniqueInput[];
};
export type PlanUpdateManyWithoutParkNestedInput = {
    create?: Prisma.XOR<Prisma.PlanCreateWithoutParkInput, Prisma.PlanUncheckedCreateWithoutParkInput> | Prisma.PlanCreateWithoutParkInput[] | Prisma.PlanUncheckedCreateWithoutParkInput[];
    connectOrCreate?: Prisma.PlanCreateOrConnectWithoutParkInput | Prisma.PlanCreateOrConnectWithoutParkInput[];
    upsert?: Prisma.PlanUpsertWithWhereUniqueWithoutParkInput | Prisma.PlanUpsertWithWhereUniqueWithoutParkInput[];
    createMany?: Prisma.PlanCreateManyParkInputEnvelope;
    set?: Prisma.PlanWhereUniqueInput | Prisma.PlanWhereUniqueInput[];
    disconnect?: Prisma.PlanWhereUniqueInput | Prisma.PlanWhereUniqueInput[];
    delete?: Prisma.PlanWhereUniqueInput | Prisma.PlanWhereUniqueInput[];
    connect?: Prisma.PlanWhereUniqueInput | Prisma.PlanWhereUniqueInput[];
    update?: Prisma.PlanUpdateWithWhereUniqueWithoutParkInput | Prisma.PlanUpdateWithWhereUniqueWithoutParkInput[];
    updateMany?: Prisma.PlanUpdateManyWithWhereWithoutParkInput | Prisma.PlanUpdateManyWithWhereWithoutParkInput[];
    deleteMany?: Prisma.PlanScalarWhereInput | Prisma.PlanScalarWhereInput[];
};
export type PlanUncheckedUpdateManyWithoutParkNestedInput = {
    create?: Prisma.XOR<Prisma.PlanCreateWithoutParkInput, Prisma.PlanUncheckedCreateWithoutParkInput> | Prisma.PlanCreateWithoutParkInput[] | Prisma.PlanUncheckedCreateWithoutParkInput[];
    connectOrCreate?: Prisma.PlanCreateOrConnectWithoutParkInput | Prisma.PlanCreateOrConnectWithoutParkInput[];
    upsert?: Prisma.PlanUpsertWithWhereUniqueWithoutParkInput | Prisma.PlanUpsertWithWhereUniqueWithoutParkInput[];
    createMany?: Prisma.PlanCreateManyParkInputEnvelope;
    set?: Prisma.PlanWhereUniqueInput | Prisma.PlanWhereUniqueInput[];
    disconnect?: Prisma.PlanWhereUniqueInput | Prisma.PlanWhereUniqueInput[];
    delete?: Prisma.PlanWhereUniqueInput | Prisma.PlanWhereUniqueInput[];
    connect?: Prisma.PlanWhereUniqueInput | Prisma.PlanWhereUniqueInput[];
    update?: Prisma.PlanUpdateWithWhereUniqueWithoutParkInput | Prisma.PlanUpdateWithWhereUniqueWithoutParkInput[];
    updateMany?: Prisma.PlanUpdateManyWithWhereWithoutParkInput | Prisma.PlanUpdateManyWithWhereWithoutParkInput[];
    deleteMany?: Prisma.PlanScalarWhereInput | Prisma.PlanScalarWhereInput[];
};
export type PlanCreateNestedOneWithoutEventsInput = {
    create?: Prisma.XOR<Prisma.PlanCreateWithoutEventsInput, Prisma.PlanUncheckedCreateWithoutEventsInput>;
    connectOrCreate?: Prisma.PlanCreateOrConnectWithoutEventsInput;
    connect?: Prisma.PlanWhereUniqueInput;
};
export type PlanUpdateOneWithoutEventsNestedInput = {
    create?: Prisma.XOR<Prisma.PlanCreateWithoutEventsInput, Prisma.PlanUncheckedCreateWithoutEventsInput>;
    connectOrCreate?: Prisma.PlanCreateOrConnectWithoutEventsInput;
    upsert?: Prisma.PlanUpsertWithoutEventsInput;
    disconnect?: Prisma.PlanWhereInput | boolean;
    delete?: Prisma.PlanWhereInput | boolean;
    connect?: Prisma.PlanWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.PlanUpdateToOneWithWhereWithoutEventsInput, Prisma.PlanUpdateWithoutEventsInput>, Prisma.PlanUncheckedUpdateWithoutEventsInput>;
};
export type PlanCreateWithoutUserInput = {
    id?: string;
    mode?: $Enums.GuideMode;
    template?: string | null;
    data: Prisma.JsonNullValueInput | runtime.InputJsonValue;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    park: Prisma.ParkCreateNestedOneWithoutPlansInput;
    events?: Prisma.ProgressEventCreateNestedManyWithoutPlanInput;
};
export type PlanUncheckedCreateWithoutUserInput = {
    id?: string;
    parkId: string;
    mode?: $Enums.GuideMode;
    template?: string | null;
    data: Prisma.JsonNullValueInput | runtime.InputJsonValue;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    events?: Prisma.ProgressEventUncheckedCreateNestedManyWithoutPlanInput;
};
export type PlanCreateOrConnectWithoutUserInput = {
    where: Prisma.PlanWhereUniqueInput;
    create: Prisma.XOR<Prisma.PlanCreateWithoutUserInput, Prisma.PlanUncheckedCreateWithoutUserInput>;
};
export type PlanCreateManyUserInputEnvelope = {
    data: Prisma.PlanCreateManyUserInput | Prisma.PlanCreateManyUserInput[];
};
export type PlanUpsertWithWhereUniqueWithoutUserInput = {
    where: Prisma.PlanWhereUniqueInput;
    update: Prisma.XOR<Prisma.PlanUpdateWithoutUserInput, Prisma.PlanUncheckedUpdateWithoutUserInput>;
    create: Prisma.XOR<Prisma.PlanCreateWithoutUserInput, Prisma.PlanUncheckedCreateWithoutUserInput>;
};
export type PlanUpdateWithWhereUniqueWithoutUserInput = {
    where: Prisma.PlanWhereUniqueInput;
    data: Prisma.XOR<Prisma.PlanUpdateWithoutUserInput, Prisma.PlanUncheckedUpdateWithoutUserInput>;
};
export type PlanUpdateManyWithWhereWithoutUserInput = {
    where: Prisma.PlanScalarWhereInput;
    data: Prisma.XOR<Prisma.PlanUpdateManyMutationInput, Prisma.PlanUncheckedUpdateManyWithoutUserInput>;
};
export type PlanScalarWhereInput = {
    AND?: Prisma.PlanScalarWhereInput | Prisma.PlanScalarWhereInput[];
    OR?: Prisma.PlanScalarWhereInput[];
    NOT?: Prisma.PlanScalarWhereInput | Prisma.PlanScalarWhereInput[];
    id?: Prisma.StringFilter<"Plan"> | string;
    userId?: Prisma.StringFilter<"Plan"> | string;
    parkId?: Prisma.StringFilter<"Plan"> | string;
    mode?: Prisma.EnumGuideModeFilter<"Plan"> | $Enums.GuideMode;
    template?: Prisma.StringNullableFilter<"Plan"> | string | null;
    data?: Prisma.JsonFilter<"Plan">;
    createdAt?: Prisma.DateTimeFilter<"Plan"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"Plan"> | Date | string;
};
export type PlanCreateWithoutParkInput = {
    id?: string;
    mode?: $Enums.GuideMode;
    template?: string | null;
    data: Prisma.JsonNullValueInput | runtime.InputJsonValue;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    user: Prisma.UserCreateNestedOneWithoutPlansInput;
    events?: Prisma.ProgressEventCreateNestedManyWithoutPlanInput;
};
export type PlanUncheckedCreateWithoutParkInput = {
    id?: string;
    userId: string;
    mode?: $Enums.GuideMode;
    template?: string | null;
    data: Prisma.JsonNullValueInput | runtime.InputJsonValue;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    events?: Prisma.ProgressEventUncheckedCreateNestedManyWithoutPlanInput;
};
export type PlanCreateOrConnectWithoutParkInput = {
    where: Prisma.PlanWhereUniqueInput;
    create: Prisma.XOR<Prisma.PlanCreateWithoutParkInput, Prisma.PlanUncheckedCreateWithoutParkInput>;
};
export type PlanCreateManyParkInputEnvelope = {
    data: Prisma.PlanCreateManyParkInput | Prisma.PlanCreateManyParkInput[];
};
export type PlanUpsertWithWhereUniqueWithoutParkInput = {
    where: Prisma.PlanWhereUniqueInput;
    update: Prisma.XOR<Prisma.PlanUpdateWithoutParkInput, Prisma.PlanUncheckedUpdateWithoutParkInput>;
    create: Prisma.XOR<Prisma.PlanCreateWithoutParkInput, Prisma.PlanUncheckedCreateWithoutParkInput>;
};
export type PlanUpdateWithWhereUniqueWithoutParkInput = {
    where: Prisma.PlanWhereUniqueInput;
    data: Prisma.XOR<Prisma.PlanUpdateWithoutParkInput, Prisma.PlanUncheckedUpdateWithoutParkInput>;
};
export type PlanUpdateManyWithWhereWithoutParkInput = {
    where: Prisma.PlanScalarWhereInput;
    data: Prisma.XOR<Prisma.PlanUpdateManyMutationInput, Prisma.PlanUncheckedUpdateManyWithoutParkInput>;
};
export type PlanCreateWithoutEventsInput = {
    id?: string;
    mode?: $Enums.GuideMode;
    template?: string | null;
    data: Prisma.JsonNullValueInput | runtime.InputJsonValue;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    user: Prisma.UserCreateNestedOneWithoutPlansInput;
    park: Prisma.ParkCreateNestedOneWithoutPlansInput;
};
export type PlanUncheckedCreateWithoutEventsInput = {
    id?: string;
    userId: string;
    parkId: string;
    mode?: $Enums.GuideMode;
    template?: string | null;
    data: Prisma.JsonNullValueInput | runtime.InputJsonValue;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type PlanCreateOrConnectWithoutEventsInput = {
    where: Prisma.PlanWhereUniqueInput;
    create: Prisma.XOR<Prisma.PlanCreateWithoutEventsInput, Prisma.PlanUncheckedCreateWithoutEventsInput>;
};
export type PlanUpsertWithoutEventsInput = {
    update: Prisma.XOR<Prisma.PlanUpdateWithoutEventsInput, Prisma.PlanUncheckedUpdateWithoutEventsInput>;
    create: Prisma.XOR<Prisma.PlanCreateWithoutEventsInput, Prisma.PlanUncheckedCreateWithoutEventsInput>;
    where?: Prisma.PlanWhereInput;
};
export type PlanUpdateToOneWithWhereWithoutEventsInput = {
    where?: Prisma.PlanWhereInput;
    data: Prisma.XOR<Prisma.PlanUpdateWithoutEventsInput, Prisma.PlanUncheckedUpdateWithoutEventsInput>;
};
export type PlanUpdateWithoutEventsInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    mode?: Prisma.EnumGuideModeFieldUpdateOperationsInput | $Enums.GuideMode;
    template?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    data?: Prisma.JsonNullValueInput | runtime.InputJsonValue;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    user?: Prisma.UserUpdateOneRequiredWithoutPlansNestedInput;
    park?: Prisma.ParkUpdateOneRequiredWithoutPlansNestedInput;
};
export type PlanUncheckedUpdateWithoutEventsInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    userId?: Prisma.StringFieldUpdateOperationsInput | string;
    parkId?: Prisma.StringFieldUpdateOperationsInput | string;
    mode?: Prisma.EnumGuideModeFieldUpdateOperationsInput | $Enums.GuideMode;
    template?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    data?: Prisma.JsonNullValueInput | runtime.InputJsonValue;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type PlanCreateManyUserInput = {
    id?: string;
    parkId: string;
    mode?: $Enums.GuideMode;
    template?: string | null;
    data: Prisma.JsonNullValueInput | runtime.InputJsonValue;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type PlanUpdateWithoutUserInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    mode?: Prisma.EnumGuideModeFieldUpdateOperationsInput | $Enums.GuideMode;
    template?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    data?: Prisma.JsonNullValueInput | runtime.InputJsonValue;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    park?: Prisma.ParkUpdateOneRequiredWithoutPlansNestedInput;
    events?: Prisma.ProgressEventUpdateManyWithoutPlanNestedInput;
};
export type PlanUncheckedUpdateWithoutUserInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    parkId?: Prisma.StringFieldUpdateOperationsInput | string;
    mode?: Prisma.EnumGuideModeFieldUpdateOperationsInput | $Enums.GuideMode;
    template?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    data?: Prisma.JsonNullValueInput | runtime.InputJsonValue;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    events?: Prisma.ProgressEventUncheckedUpdateManyWithoutPlanNestedInput;
};
export type PlanUncheckedUpdateManyWithoutUserInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    parkId?: Prisma.StringFieldUpdateOperationsInput | string;
    mode?: Prisma.EnumGuideModeFieldUpdateOperationsInput | $Enums.GuideMode;
    template?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    data?: Prisma.JsonNullValueInput | runtime.InputJsonValue;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type PlanCreateManyParkInput = {
    id?: string;
    userId: string;
    mode?: $Enums.GuideMode;
    template?: string | null;
    data: Prisma.JsonNullValueInput | runtime.InputJsonValue;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type PlanUpdateWithoutParkInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    mode?: Prisma.EnumGuideModeFieldUpdateOperationsInput | $Enums.GuideMode;
    template?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    data?: Prisma.JsonNullValueInput | runtime.InputJsonValue;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    user?: Prisma.UserUpdateOneRequiredWithoutPlansNestedInput;
    events?: Prisma.ProgressEventUpdateManyWithoutPlanNestedInput;
};
export type PlanUncheckedUpdateWithoutParkInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    userId?: Prisma.StringFieldUpdateOperationsInput | string;
    mode?: Prisma.EnumGuideModeFieldUpdateOperationsInput | $Enums.GuideMode;
    template?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    data?: Prisma.JsonNullValueInput | runtime.InputJsonValue;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    events?: Prisma.ProgressEventUncheckedUpdateManyWithoutPlanNestedInput;
};
export type PlanUncheckedUpdateManyWithoutParkInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    userId?: Prisma.StringFieldUpdateOperationsInput | string;
    mode?: Prisma.EnumGuideModeFieldUpdateOperationsInput | $Enums.GuideMode;
    template?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    data?: Prisma.JsonNullValueInput | runtime.InputJsonValue;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type PlanCountOutputType = {
    events: number;
};
export type PlanCountOutputTypeSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    events?: boolean | PlanCountOutputTypeCountEventsArgs;
};
export type PlanCountOutputTypeDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.PlanCountOutputTypeSelect<ExtArgs> | null;
};
export type PlanCountOutputTypeCountEventsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.ProgressEventWhereInput;
};
export type PlanSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    userId?: boolean;
    parkId?: boolean;
    mode?: boolean;
    template?: boolean;
    data?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
    user?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
    park?: boolean | Prisma.ParkDefaultArgs<ExtArgs>;
    events?: boolean | Prisma.Plan$eventsArgs<ExtArgs>;
    _count?: boolean | Prisma.PlanCountOutputTypeDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["plan"]>;
export type PlanSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    userId?: boolean;
    parkId?: boolean;
    mode?: boolean;
    template?: boolean;
    data?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
    user?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
    park?: boolean | Prisma.ParkDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["plan"]>;
export type PlanSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    userId?: boolean;
    parkId?: boolean;
    mode?: boolean;
    template?: boolean;
    data?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
    user?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
    park?: boolean | Prisma.ParkDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["plan"]>;
export type PlanSelectScalar = {
    id?: boolean;
    userId?: boolean;
    parkId?: boolean;
    mode?: boolean;
    template?: boolean;
    data?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
};
export type PlanOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "userId" | "parkId" | "mode" | "template" | "data" | "createdAt" | "updatedAt", ExtArgs["result"]["plan"]>;
export type PlanInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    user?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
    park?: boolean | Prisma.ParkDefaultArgs<ExtArgs>;
    events?: boolean | Prisma.Plan$eventsArgs<ExtArgs>;
    _count?: boolean | Prisma.PlanCountOutputTypeDefaultArgs<ExtArgs>;
};
export type PlanIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    user?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
    park?: boolean | Prisma.ParkDefaultArgs<ExtArgs>;
};
export type PlanIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    user?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
    park?: boolean | Prisma.ParkDefaultArgs<ExtArgs>;
};
export type $PlanPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "Plan";
    objects: {
        user: Prisma.$UserPayload<ExtArgs>;
        park: Prisma.$ParkPayload<ExtArgs>;
        events: Prisma.$ProgressEventPayload<ExtArgs>[];
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: string;
        userId: string;
        parkId: string;
        mode: $Enums.GuideMode;
        template: string | null;
        data: runtime.JsonValue;
        createdAt: Date;
        updatedAt: Date;
    }, ExtArgs["result"]["plan"]>;
    composites: {};
};
export type PlanGetPayload<S extends boolean | null | undefined | PlanDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$PlanPayload, S>;
export type PlanCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<PlanFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: PlanCountAggregateInputType | true;
};
export interface PlanDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['Plan'];
        meta: {
            name: 'Plan';
        };
    };
    findUnique<T extends PlanFindUniqueArgs>(args: Prisma.SelectSubset<T, PlanFindUniqueArgs<ExtArgs>>): Prisma.Prisma__PlanClient<runtime.Types.Result.GetResult<Prisma.$PlanPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends PlanFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, PlanFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__PlanClient<runtime.Types.Result.GetResult<Prisma.$PlanPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends PlanFindFirstArgs>(args?: Prisma.SelectSubset<T, PlanFindFirstArgs<ExtArgs>>): Prisma.Prisma__PlanClient<runtime.Types.Result.GetResult<Prisma.$PlanPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends PlanFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, PlanFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__PlanClient<runtime.Types.Result.GetResult<Prisma.$PlanPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends PlanFindManyArgs>(args?: Prisma.SelectSubset<T, PlanFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$PlanPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends PlanCreateArgs>(args: Prisma.SelectSubset<T, PlanCreateArgs<ExtArgs>>): Prisma.Prisma__PlanClient<runtime.Types.Result.GetResult<Prisma.$PlanPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends PlanCreateManyArgs>(args?: Prisma.SelectSubset<T, PlanCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    createManyAndReturn<T extends PlanCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, PlanCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$PlanPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    delete<T extends PlanDeleteArgs>(args: Prisma.SelectSubset<T, PlanDeleteArgs<ExtArgs>>): Prisma.Prisma__PlanClient<runtime.Types.Result.GetResult<Prisma.$PlanPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends PlanUpdateArgs>(args: Prisma.SelectSubset<T, PlanUpdateArgs<ExtArgs>>): Prisma.Prisma__PlanClient<runtime.Types.Result.GetResult<Prisma.$PlanPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends PlanDeleteManyArgs>(args?: Prisma.SelectSubset<T, PlanDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends PlanUpdateManyArgs>(args: Prisma.SelectSubset<T, PlanUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateManyAndReturn<T extends PlanUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, PlanUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$PlanPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    upsert<T extends PlanUpsertArgs>(args: Prisma.SelectSubset<T, PlanUpsertArgs<ExtArgs>>): Prisma.Prisma__PlanClient<runtime.Types.Result.GetResult<Prisma.$PlanPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends PlanCountArgs>(args?: Prisma.Subset<T, PlanCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], PlanCountAggregateOutputType> : number>;
    aggregate<T extends PlanAggregateArgs>(args: Prisma.Subset<T, PlanAggregateArgs>): Prisma.PrismaPromise<GetPlanAggregateType<T>>;
    groupBy<T extends PlanGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: PlanGroupByArgs['orderBy'];
    } : {
        orderBy?: PlanGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, PlanGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPlanGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: PlanFieldRefs;
}
export interface Prisma__PlanClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    user<T extends Prisma.UserDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.UserDefaultArgs<ExtArgs>>): Prisma.Prisma__UserClient<runtime.Types.Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    park<T extends Prisma.ParkDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.ParkDefaultArgs<ExtArgs>>): Prisma.Prisma__ParkClient<runtime.Types.Result.GetResult<Prisma.$ParkPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    events<T extends Prisma.Plan$eventsArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.Plan$eventsArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$ProgressEventPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface PlanFieldRefs {
    readonly id: Prisma.FieldRef<"Plan", 'String'>;
    readonly userId: Prisma.FieldRef<"Plan", 'String'>;
    readonly parkId: Prisma.FieldRef<"Plan", 'String'>;
    readonly mode: Prisma.FieldRef<"Plan", 'GuideMode'>;
    readonly template: Prisma.FieldRef<"Plan", 'String'>;
    readonly data: Prisma.FieldRef<"Plan", 'Json'>;
    readonly createdAt: Prisma.FieldRef<"Plan", 'DateTime'>;
    readonly updatedAt: Prisma.FieldRef<"Plan", 'DateTime'>;
}
export type PlanFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.PlanSelect<ExtArgs> | null;
    omit?: Prisma.PlanOmit<ExtArgs> | null;
    include?: Prisma.PlanInclude<ExtArgs> | null;
    where: Prisma.PlanWhereUniqueInput;
};
export type PlanFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.PlanSelect<ExtArgs> | null;
    omit?: Prisma.PlanOmit<ExtArgs> | null;
    include?: Prisma.PlanInclude<ExtArgs> | null;
    where: Prisma.PlanWhereUniqueInput;
};
export type PlanFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type PlanFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type PlanFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type PlanCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.PlanSelect<ExtArgs> | null;
    omit?: Prisma.PlanOmit<ExtArgs> | null;
    include?: Prisma.PlanInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.PlanCreateInput, Prisma.PlanUncheckedCreateInput>;
};
export type PlanCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.PlanCreateManyInput | Prisma.PlanCreateManyInput[];
};
export type PlanCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.PlanSelectCreateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.PlanOmit<ExtArgs> | null;
    data: Prisma.PlanCreateManyInput | Prisma.PlanCreateManyInput[];
    include?: Prisma.PlanIncludeCreateManyAndReturn<ExtArgs> | null;
};
export type PlanUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.PlanSelect<ExtArgs> | null;
    omit?: Prisma.PlanOmit<ExtArgs> | null;
    include?: Prisma.PlanInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.PlanUpdateInput, Prisma.PlanUncheckedUpdateInput>;
    where: Prisma.PlanWhereUniqueInput;
};
export type PlanUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.PlanUpdateManyMutationInput, Prisma.PlanUncheckedUpdateManyInput>;
    where?: Prisma.PlanWhereInput;
    limit?: number;
};
export type PlanUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.PlanSelectUpdateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.PlanOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.PlanUpdateManyMutationInput, Prisma.PlanUncheckedUpdateManyInput>;
    where?: Prisma.PlanWhereInput;
    limit?: number;
    include?: Prisma.PlanIncludeUpdateManyAndReturn<ExtArgs> | null;
};
export type PlanUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.PlanSelect<ExtArgs> | null;
    omit?: Prisma.PlanOmit<ExtArgs> | null;
    include?: Prisma.PlanInclude<ExtArgs> | null;
    where: Prisma.PlanWhereUniqueInput;
    create: Prisma.XOR<Prisma.PlanCreateInput, Prisma.PlanUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.PlanUpdateInput, Prisma.PlanUncheckedUpdateInput>;
};
export type PlanDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.PlanSelect<ExtArgs> | null;
    omit?: Prisma.PlanOmit<ExtArgs> | null;
    include?: Prisma.PlanInclude<ExtArgs> | null;
    where: Prisma.PlanWhereUniqueInput;
};
export type PlanDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.PlanWhereInput;
    limit?: number;
};
export type Plan$eventsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ProgressEventSelect<ExtArgs> | null;
    omit?: Prisma.ProgressEventOmit<ExtArgs> | null;
    include?: Prisma.ProgressEventInclude<ExtArgs> | null;
    where?: Prisma.ProgressEventWhereInput;
    orderBy?: Prisma.ProgressEventOrderByWithRelationInput | Prisma.ProgressEventOrderByWithRelationInput[];
    cursor?: Prisma.ProgressEventWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.ProgressEventScalarFieldEnum | Prisma.ProgressEventScalarFieldEnum[];
};
export type PlanDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.PlanSelect<ExtArgs> | null;
    omit?: Prisma.PlanOmit<ExtArgs> | null;
    include?: Prisma.PlanInclude<ExtArgs> | null;
};
