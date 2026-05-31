import type * as runtime from "@prisma/client/runtime/client";
import type * as Prisma from "../internal/prismaNamespace.js";
export type ProgressEventModel = runtime.Types.Result.DefaultSelection<Prisma.$ProgressEventPayload>;
export type AggregateProgressEvent = {
    _count: ProgressEventCountAggregateOutputType | null;
    _min: ProgressEventMinAggregateOutputType | null;
    _max: ProgressEventMaxAggregateOutputType | null;
};
export type ProgressEventMinAggregateOutputType = {
    id: string | null;
    userId: string | null;
    planId: string | null;
    poiId: string | null;
    type: string | null;
    createdAt: Date | null;
};
export type ProgressEventMaxAggregateOutputType = {
    id: string | null;
    userId: string | null;
    planId: string | null;
    poiId: string | null;
    type: string | null;
    createdAt: Date | null;
};
export type ProgressEventCountAggregateOutputType = {
    id: number;
    userId: number;
    planId: number;
    poiId: number;
    type: number;
    payload: number;
    createdAt: number;
    _all: number;
};
export type ProgressEventMinAggregateInputType = {
    id?: true;
    userId?: true;
    planId?: true;
    poiId?: true;
    type?: true;
    createdAt?: true;
};
export type ProgressEventMaxAggregateInputType = {
    id?: true;
    userId?: true;
    planId?: true;
    poiId?: true;
    type?: true;
    createdAt?: true;
};
export type ProgressEventCountAggregateInputType = {
    id?: true;
    userId?: true;
    planId?: true;
    poiId?: true;
    type?: true;
    payload?: true;
    createdAt?: true;
    _all?: true;
};
export type ProgressEventAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.ProgressEventWhereInput;
    orderBy?: Prisma.ProgressEventOrderByWithRelationInput | Prisma.ProgressEventOrderByWithRelationInput[];
    cursor?: Prisma.ProgressEventWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | ProgressEventCountAggregateInputType;
    _min?: ProgressEventMinAggregateInputType;
    _max?: ProgressEventMaxAggregateInputType;
};
export type GetProgressEventAggregateType<T extends ProgressEventAggregateArgs> = {
    [P in keyof T & keyof AggregateProgressEvent]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateProgressEvent[P]> : Prisma.GetScalarType<T[P], AggregateProgressEvent[P]>;
};
export type ProgressEventGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.ProgressEventWhereInput;
    orderBy?: Prisma.ProgressEventOrderByWithAggregationInput | Prisma.ProgressEventOrderByWithAggregationInput[];
    by: Prisma.ProgressEventScalarFieldEnum[] | Prisma.ProgressEventScalarFieldEnum;
    having?: Prisma.ProgressEventScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: ProgressEventCountAggregateInputType | true;
    _min?: ProgressEventMinAggregateInputType;
    _max?: ProgressEventMaxAggregateInputType;
};
export type ProgressEventGroupByOutputType = {
    id: string;
    userId: string;
    planId: string | null;
    poiId: string | null;
    type: string;
    payload: runtime.JsonValue | null;
    createdAt: Date;
    _count: ProgressEventCountAggregateOutputType | null;
    _min: ProgressEventMinAggregateOutputType | null;
    _max: ProgressEventMaxAggregateOutputType | null;
};
export type GetProgressEventGroupByPayload<T extends ProgressEventGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<ProgressEventGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof ProgressEventGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], ProgressEventGroupByOutputType[P]> : Prisma.GetScalarType<T[P], ProgressEventGroupByOutputType[P]>;
}>>;
export type ProgressEventWhereInput = {
    AND?: Prisma.ProgressEventWhereInput | Prisma.ProgressEventWhereInput[];
    OR?: Prisma.ProgressEventWhereInput[];
    NOT?: Prisma.ProgressEventWhereInput | Prisma.ProgressEventWhereInput[];
    id?: Prisma.StringFilter<"ProgressEvent"> | string;
    userId?: Prisma.StringFilter<"ProgressEvent"> | string;
    planId?: Prisma.StringNullableFilter<"ProgressEvent"> | string | null;
    poiId?: Prisma.StringNullableFilter<"ProgressEvent"> | string | null;
    type?: Prisma.StringFilter<"ProgressEvent"> | string;
    payload?: Prisma.JsonNullableFilter<"ProgressEvent">;
    createdAt?: Prisma.DateTimeFilter<"ProgressEvent"> | Date | string;
    user?: Prisma.XOR<Prisma.UserScalarRelationFilter, Prisma.UserWhereInput>;
    plan?: Prisma.XOR<Prisma.PlanNullableScalarRelationFilter, Prisma.PlanWhereInput> | null;
    poi?: Prisma.XOR<Prisma.PoiNullableScalarRelationFilter, Prisma.PoiWhereInput> | null;
};
export type ProgressEventOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    userId?: Prisma.SortOrder;
    planId?: Prisma.SortOrderInput | Prisma.SortOrder;
    poiId?: Prisma.SortOrderInput | Prisma.SortOrder;
    type?: Prisma.SortOrder;
    payload?: Prisma.SortOrderInput | Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    user?: Prisma.UserOrderByWithRelationInput;
    plan?: Prisma.PlanOrderByWithRelationInput;
    poi?: Prisma.PoiOrderByWithRelationInput;
};
export type ProgressEventWhereUniqueInput = Prisma.AtLeast<{
    id?: string;
    AND?: Prisma.ProgressEventWhereInput | Prisma.ProgressEventWhereInput[];
    OR?: Prisma.ProgressEventWhereInput[];
    NOT?: Prisma.ProgressEventWhereInput | Prisma.ProgressEventWhereInput[];
    userId?: Prisma.StringFilter<"ProgressEvent"> | string;
    planId?: Prisma.StringNullableFilter<"ProgressEvent"> | string | null;
    poiId?: Prisma.StringNullableFilter<"ProgressEvent"> | string | null;
    type?: Prisma.StringFilter<"ProgressEvent"> | string;
    payload?: Prisma.JsonNullableFilter<"ProgressEvent">;
    createdAt?: Prisma.DateTimeFilter<"ProgressEvent"> | Date | string;
    user?: Prisma.XOR<Prisma.UserScalarRelationFilter, Prisma.UserWhereInput>;
    plan?: Prisma.XOR<Prisma.PlanNullableScalarRelationFilter, Prisma.PlanWhereInput> | null;
    poi?: Prisma.XOR<Prisma.PoiNullableScalarRelationFilter, Prisma.PoiWhereInput> | null;
}, "id">;
export type ProgressEventOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    userId?: Prisma.SortOrder;
    planId?: Prisma.SortOrderInput | Prisma.SortOrder;
    poiId?: Prisma.SortOrderInput | Prisma.SortOrder;
    type?: Prisma.SortOrder;
    payload?: Prisma.SortOrderInput | Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    _count?: Prisma.ProgressEventCountOrderByAggregateInput;
    _max?: Prisma.ProgressEventMaxOrderByAggregateInput;
    _min?: Prisma.ProgressEventMinOrderByAggregateInput;
};
export type ProgressEventScalarWhereWithAggregatesInput = {
    AND?: Prisma.ProgressEventScalarWhereWithAggregatesInput | Prisma.ProgressEventScalarWhereWithAggregatesInput[];
    OR?: Prisma.ProgressEventScalarWhereWithAggregatesInput[];
    NOT?: Prisma.ProgressEventScalarWhereWithAggregatesInput | Prisma.ProgressEventScalarWhereWithAggregatesInput[];
    id?: Prisma.StringWithAggregatesFilter<"ProgressEvent"> | string;
    userId?: Prisma.StringWithAggregatesFilter<"ProgressEvent"> | string;
    planId?: Prisma.StringNullableWithAggregatesFilter<"ProgressEvent"> | string | null;
    poiId?: Prisma.StringNullableWithAggregatesFilter<"ProgressEvent"> | string | null;
    type?: Prisma.StringWithAggregatesFilter<"ProgressEvent"> | string;
    payload?: Prisma.JsonNullableWithAggregatesFilter<"ProgressEvent">;
    createdAt?: Prisma.DateTimeWithAggregatesFilter<"ProgressEvent"> | Date | string;
};
export type ProgressEventCreateInput = {
    id?: string;
    type: string;
    payload?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    createdAt?: Date | string;
    user: Prisma.UserCreateNestedOneWithoutEventsInput;
    plan?: Prisma.PlanCreateNestedOneWithoutEventsInput;
    poi?: Prisma.PoiCreateNestedOneWithoutEventsInput;
};
export type ProgressEventUncheckedCreateInput = {
    id?: string;
    userId: string;
    planId?: string | null;
    poiId?: string | null;
    type: string;
    payload?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    createdAt?: Date | string;
};
export type ProgressEventUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    type?: Prisma.StringFieldUpdateOperationsInput | string;
    payload?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    user?: Prisma.UserUpdateOneRequiredWithoutEventsNestedInput;
    plan?: Prisma.PlanUpdateOneWithoutEventsNestedInput;
    poi?: Prisma.PoiUpdateOneWithoutEventsNestedInput;
};
export type ProgressEventUncheckedUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    userId?: Prisma.StringFieldUpdateOperationsInput | string;
    planId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    poiId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    type?: Prisma.StringFieldUpdateOperationsInput | string;
    payload?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type ProgressEventCreateManyInput = {
    id?: string;
    userId: string;
    planId?: string | null;
    poiId?: string | null;
    type: string;
    payload?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    createdAt?: Date | string;
};
export type ProgressEventUpdateManyMutationInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    type?: Prisma.StringFieldUpdateOperationsInput | string;
    payload?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type ProgressEventUncheckedUpdateManyInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    userId?: Prisma.StringFieldUpdateOperationsInput | string;
    planId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    poiId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    type?: Prisma.StringFieldUpdateOperationsInput | string;
    payload?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type ProgressEventListRelationFilter = {
    every?: Prisma.ProgressEventWhereInput;
    some?: Prisma.ProgressEventWhereInput;
    none?: Prisma.ProgressEventWhereInput;
};
export type ProgressEventOrderByRelationAggregateInput = {
    _count?: Prisma.SortOrder;
};
export type ProgressEventCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    userId?: Prisma.SortOrder;
    planId?: Prisma.SortOrder;
    poiId?: Prisma.SortOrder;
    type?: Prisma.SortOrder;
    payload?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
};
export type ProgressEventMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    userId?: Prisma.SortOrder;
    planId?: Prisma.SortOrder;
    poiId?: Prisma.SortOrder;
    type?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
};
export type ProgressEventMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    userId?: Prisma.SortOrder;
    planId?: Prisma.SortOrder;
    poiId?: Prisma.SortOrder;
    type?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
};
export type ProgressEventCreateNestedManyWithoutUserInput = {
    create?: Prisma.XOR<Prisma.ProgressEventCreateWithoutUserInput, Prisma.ProgressEventUncheckedCreateWithoutUserInput> | Prisma.ProgressEventCreateWithoutUserInput[] | Prisma.ProgressEventUncheckedCreateWithoutUserInput[];
    connectOrCreate?: Prisma.ProgressEventCreateOrConnectWithoutUserInput | Prisma.ProgressEventCreateOrConnectWithoutUserInput[];
    createMany?: Prisma.ProgressEventCreateManyUserInputEnvelope;
    connect?: Prisma.ProgressEventWhereUniqueInput | Prisma.ProgressEventWhereUniqueInput[];
};
export type ProgressEventUncheckedCreateNestedManyWithoutUserInput = {
    create?: Prisma.XOR<Prisma.ProgressEventCreateWithoutUserInput, Prisma.ProgressEventUncheckedCreateWithoutUserInput> | Prisma.ProgressEventCreateWithoutUserInput[] | Prisma.ProgressEventUncheckedCreateWithoutUserInput[];
    connectOrCreate?: Prisma.ProgressEventCreateOrConnectWithoutUserInput | Prisma.ProgressEventCreateOrConnectWithoutUserInput[];
    createMany?: Prisma.ProgressEventCreateManyUserInputEnvelope;
    connect?: Prisma.ProgressEventWhereUniqueInput | Prisma.ProgressEventWhereUniqueInput[];
};
export type ProgressEventUpdateManyWithoutUserNestedInput = {
    create?: Prisma.XOR<Prisma.ProgressEventCreateWithoutUserInput, Prisma.ProgressEventUncheckedCreateWithoutUserInput> | Prisma.ProgressEventCreateWithoutUserInput[] | Prisma.ProgressEventUncheckedCreateWithoutUserInput[];
    connectOrCreate?: Prisma.ProgressEventCreateOrConnectWithoutUserInput | Prisma.ProgressEventCreateOrConnectWithoutUserInput[];
    upsert?: Prisma.ProgressEventUpsertWithWhereUniqueWithoutUserInput | Prisma.ProgressEventUpsertWithWhereUniqueWithoutUserInput[];
    createMany?: Prisma.ProgressEventCreateManyUserInputEnvelope;
    set?: Prisma.ProgressEventWhereUniqueInput | Prisma.ProgressEventWhereUniqueInput[];
    disconnect?: Prisma.ProgressEventWhereUniqueInput | Prisma.ProgressEventWhereUniqueInput[];
    delete?: Prisma.ProgressEventWhereUniqueInput | Prisma.ProgressEventWhereUniqueInput[];
    connect?: Prisma.ProgressEventWhereUniqueInput | Prisma.ProgressEventWhereUniqueInput[];
    update?: Prisma.ProgressEventUpdateWithWhereUniqueWithoutUserInput | Prisma.ProgressEventUpdateWithWhereUniqueWithoutUserInput[];
    updateMany?: Prisma.ProgressEventUpdateManyWithWhereWithoutUserInput | Prisma.ProgressEventUpdateManyWithWhereWithoutUserInput[];
    deleteMany?: Prisma.ProgressEventScalarWhereInput | Prisma.ProgressEventScalarWhereInput[];
};
export type ProgressEventUncheckedUpdateManyWithoutUserNestedInput = {
    create?: Prisma.XOR<Prisma.ProgressEventCreateWithoutUserInput, Prisma.ProgressEventUncheckedCreateWithoutUserInput> | Prisma.ProgressEventCreateWithoutUserInput[] | Prisma.ProgressEventUncheckedCreateWithoutUserInput[];
    connectOrCreate?: Prisma.ProgressEventCreateOrConnectWithoutUserInput | Prisma.ProgressEventCreateOrConnectWithoutUserInput[];
    upsert?: Prisma.ProgressEventUpsertWithWhereUniqueWithoutUserInput | Prisma.ProgressEventUpsertWithWhereUniqueWithoutUserInput[];
    createMany?: Prisma.ProgressEventCreateManyUserInputEnvelope;
    set?: Prisma.ProgressEventWhereUniqueInput | Prisma.ProgressEventWhereUniqueInput[];
    disconnect?: Prisma.ProgressEventWhereUniqueInput | Prisma.ProgressEventWhereUniqueInput[];
    delete?: Prisma.ProgressEventWhereUniqueInput | Prisma.ProgressEventWhereUniqueInput[];
    connect?: Prisma.ProgressEventWhereUniqueInput | Prisma.ProgressEventWhereUniqueInput[];
    update?: Prisma.ProgressEventUpdateWithWhereUniqueWithoutUserInput | Prisma.ProgressEventUpdateWithWhereUniqueWithoutUserInput[];
    updateMany?: Prisma.ProgressEventUpdateManyWithWhereWithoutUserInput | Prisma.ProgressEventUpdateManyWithWhereWithoutUserInput[];
    deleteMany?: Prisma.ProgressEventScalarWhereInput | Prisma.ProgressEventScalarWhereInput[];
};
export type ProgressEventCreateNestedManyWithoutPoiInput = {
    create?: Prisma.XOR<Prisma.ProgressEventCreateWithoutPoiInput, Prisma.ProgressEventUncheckedCreateWithoutPoiInput> | Prisma.ProgressEventCreateWithoutPoiInput[] | Prisma.ProgressEventUncheckedCreateWithoutPoiInput[];
    connectOrCreate?: Prisma.ProgressEventCreateOrConnectWithoutPoiInput | Prisma.ProgressEventCreateOrConnectWithoutPoiInput[];
    createMany?: Prisma.ProgressEventCreateManyPoiInputEnvelope;
    connect?: Prisma.ProgressEventWhereUniqueInput | Prisma.ProgressEventWhereUniqueInput[];
};
export type ProgressEventUncheckedCreateNestedManyWithoutPoiInput = {
    create?: Prisma.XOR<Prisma.ProgressEventCreateWithoutPoiInput, Prisma.ProgressEventUncheckedCreateWithoutPoiInput> | Prisma.ProgressEventCreateWithoutPoiInput[] | Prisma.ProgressEventUncheckedCreateWithoutPoiInput[];
    connectOrCreate?: Prisma.ProgressEventCreateOrConnectWithoutPoiInput | Prisma.ProgressEventCreateOrConnectWithoutPoiInput[];
    createMany?: Prisma.ProgressEventCreateManyPoiInputEnvelope;
    connect?: Prisma.ProgressEventWhereUniqueInput | Prisma.ProgressEventWhereUniqueInput[];
};
export type ProgressEventUpdateManyWithoutPoiNestedInput = {
    create?: Prisma.XOR<Prisma.ProgressEventCreateWithoutPoiInput, Prisma.ProgressEventUncheckedCreateWithoutPoiInput> | Prisma.ProgressEventCreateWithoutPoiInput[] | Prisma.ProgressEventUncheckedCreateWithoutPoiInput[];
    connectOrCreate?: Prisma.ProgressEventCreateOrConnectWithoutPoiInput | Prisma.ProgressEventCreateOrConnectWithoutPoiInput[];
    upsert?: Prisma.ProgressEventUpsertWithWhereUniqueWithoutPoiInput | Prisma.ProgressEventUpsertWithWhereUniqueWithoutPoiInput[];
    createMany?: Prisma.ProgressEventCreateManyPoiInputEnvelope;
    set?: Prisma.ProgressEventWhereUniqueInput | Prisma.ProgressEventWhereUniqueInput[];
    disconnect?: Prisma.ProgressEventWhereUniqueInput | Prisma.ProgressEventWhereUniqueInput[];
    delete?: Prisma.ProgressEventWhereUniqueInput | Prisma.ProgressEventWhereUniqueInput[];
    connect?: Prisma.ProgressEventWhereUniqueInput | Prisma.ProgressEventWhereUniqueInput[];
    update?: Prisma.ProgressEventUpdateWithWhereUniqueWithoutPoiInput | Prisma.ProgressEventUpdateWithWhereUniqueWithoutPoiInput[];
    updateMany?: Prisma.ProgressEventUpdateManyWithWhereWithoutPoiInput | Prisma.ProgressEventUpdateManyWithWhereWithoutPoiInput[];
    deleteMany?: Prisma.ProgressEventScalarWhereInput | Prisma.ProgressEventScalarWhereInput[];
};
export type ProgressEventUncheckedUpdateManyWithoutPoiNestedInput = {
    create?: Prisma.XOR<Prisma.ProgressEventCreateWithoutPoiInput, Prisma.ProgressEventUncheckedCreateWithoutPoiInput> | Prisma.ProgressEventCreateWithoutPoiInput[] | Prisma.ProgressEventUncheckedCreateWithoutPoiInput[];
    connectOrCreate?: Prisma.ProgressEventCreateOrConnectWithoutPoiInput | Prisma.ProgressEventCreateOrConnectWithoutPoiInput[];
    upsert?: Prisma.ProgressEventUpsertWithWhereUniqueWithoutPoiInput | Prisma.ProgressEventUpsertWithWhereUniqueWithoutPoiInput[];
    createMany?: Prisma.ProgressEventCreateManyPoiInputEnvelope;
    set?: Prisma.ProgressEventWhereUniqueInput | Prisma.ProgressEventWhereUniqueInput[];
    disconnect?: Prisma.ProgressEventWhereUniqueInput | Prisma.ProgressEventWhereUniqueInput[];
    delete?: Prisma.ProgressEventWhereUniqueInput | Prisma.ProgressEventWhereUniqueInput[];
    connect?: Prisma.ProgressEventWhereUniqueInput | Prisma.ProgressEventWhereUniqueInput[];
    update?: Prisma.ProgressEventUpdateWithWhereUniqueWithoutPoiInput | Prisma.ProgressEventUpdateWithWhereUniqueWithoutPoiInput[];
    updateMany?: Prisma.ProgressEventUpdateManyWithWhereWithoutPoiInput | Prisma.ProgressEventUpdateManyWithWhereWithoutPoiInput[];
    deleteMany?: Prisma.ProgressEventScalarWhereInput | Prisma.ProgressEventScalarWhereInput[];
};
export type ProgressEventCreateNestedManyWithoutPlanInput = {
    create?: Prisma.XOR<Prisma.ProgressEventCreateWithoutPlanInput, Prisma.ProgressEventUncheckedCreateWithoutPlanInput> | Prisma.ProgressEventCreateWithoutPlanInput[] | Prisma.ProgressEventUncheckedCreateWithoutPlanInput[];
    connectOrCreate?: Prisma.ProgressEventCreateOrConnectWithoutPlanInput | Prisma.ProgressEventCreateOrConnectWithoutPlanInput[];
    createMany?: Prisma.ProgressEventCreateManyPlanInputEnvelope;
    connect?: Prisma.ProgressEventWhereUniqueInput | Prisma.ProgressEventWhereUniqueInput[];
};
export type ProgressEventUncheckedCreateNestedManyWithoutPlanInput = {
    create?: Prisma.XOR<Prisma.ProgressEventCreateWithoutPlanInput, Prisma.ProgressEventUncheckedCreateWithoutPlanInput> | Prisma.ProgressEventCreateWithoutPlanInput[] | Prisma.ProgressEventUncheckedCreateWithoutPlanInput[];
    connectOrCreate?: Prisma.ProgressEventCreateOrConnectWithoutPlanInput | Prisma.ProgressEventCreateOrConnectWithoutPlanInput[];
    createMany?: Prisma.ProgressEventCreateManyPlanInputEnvelope;
    connect?: Prisma.ProgressEventWhereUniqueInput | Prisma.ProgressEventWhereUniqueInput[];
};
export type ProgressEventUpdateManyWithoutPlanNestedInput = {
    create?: Prisma.XOR<Prisma.ProgressEventCreateWithoutPlanInput, Prisma.ProgressEventUncheckedCreateWithoutPlanInput> | Prisma.ProgressEventCreateWithoutPlanInput[] | Prisma.ProgressEventUncheckedCreateWithoutPlanInput[];
    connectOrCreate?: Prisma.ProgressEventCreateOrConnectWithoutPlanInput | Prisma.ProgressEventCreateOrConnectWithoutPlanInput[];
    upsert?: Prisma.ProgressEventUpsertWithWhereUniqueWithoutPlanInput | Prisma.ProgressEventUpsertWithWhereUniqueWithoutPlanInput[];
    createMany?: Prisma.ProgressEventCreateManyPlanInputEnvelope;
    set?: Prisma.ProgressEventWhereUniqueInput | Prisma.ProgressEventWhereUniqueInput[];
    disconnect?: Prisma.ProgressEventWhereUniqueInput | Prisma.ProgressEventWhereUniqueInput[];
    delete?: Prisma.ProgressEventWhereUniqueInput | Prisma.ProgressEventWhereUniqueInput[];
    connect?: Prisma.ProgressEventWhereUniqueInput | Prisma.ProgressEventWhereUniqueInput[];
    update?: Prisma.ProgressEventUpdateWithWhereUniqueWithoutPlanInput | Prisma.ProgressEventUpdateWithWhereUniqueWithoutPlanInput[];
    updateMany?: Prisma.ProgressEventUpdateManyWithWhereWithoutPlanInput | Prisma.ProgressEventUpdateManyWithWhereWithoutPlanInput[];
    deleteMany?: Prisma.ProgressEventScalarWhereInput | Prisma.ProgressEventScalarWhereInput[];
};
export type ProgressEventUncheckedUpdateManyWithoutPlanNestedInput = {
    create?: Prisma.XOR<Prisma.ProgressEventCreateWithoutPlanInput, Prisma.ProgressEventUncheckedCreateWithoutPlanInput> | Prisma.ProgressEventCreateWithoutPlanInput[] | Prisma.ProgressEventUncheckedCreateWithoutPlanInput[];
    connectOrCreate?: Prisma.ProgressEventCreateOrConnectWithoutPlanInput | Prisma.ProgressEventCreateOrConnectWithoutPlanInput[];
    upsert?: Prisma.ProgressEventUpsertWithWhereUniqueWithoutPlanInput | Prisma.ProgressEventUpsertWithWhereUniqueWithoutPlanInput[];
    createMany?: Prisma.ProgressEventCreateManyPlanInputEnvelope;
    set?: Prisma.ProgressEventWhereUniqueInput | Prisma.ProgressEventWhereUniqueInput[];
    disconnect?: Prisma.ProgressEventWhereUniqueInput | Prisma.ProgressEventWhereUniqueInput[];
    delete?: Prisma.ProgressEventWhereUniqueInput | Prisma.ProgressEventWhereUniqueInput[];
    connect?: Prisma.ProgressEventWhereUniqueInput | Prisma.ProgressEventWhereUniqueInput[];
    update?: Prisma.ProgressEventUpdateWithWhereUniqueWithoutPlanInput | Prisma.ProgressEventUpdateWithWhereUniqueWithoutPlanInput[];
    updateMany?: Prisma.ProgressEventUpdateManyWithWhereWithoutPlanInput | Prisma.ProgressEventUpdateManyWithWhereWithoutPlanInput[];
    deleteMany?: Prisma.ProgressEventScalarWhereInput | Prisma.ProgressEventScalarWhereInput[];
};
export type ProgressEventCreateWithoutUserInput = {
    id?: string;
    type: string;
    payload?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    createdAt?: Date | string;
    plan?: Prisma.PlanCreateNestedOneWithoutEventsInput;
    poi?: Prisma.PoiCreateNestedOneWithoutEventsInput;
};
export type ProgressEventUncheckedCreateWithoutUserInput = {
    id?: string;
    planId?: string | null;
    poiId?: string | null;
    type: string;
    payload?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    createdAt?: Date | string;
};
export type ProgressEventCreateOrConnectWithoutUserInput = {
    where: Prisma.ProgressEventWhereUniqueInput;
    create: Prisma.XOR<Prisma.ProgressEventCreateWithoutUserInput, Prisma.ProgressEventUncheckedCreateWithoutUserInput>;
};
export type ProgressEventCreateManyUserInputEnvelope = {
    data: Prisma.ProgressEventCreateManyUserInput | Prisma.ProgressEventCreateManyUserInput[];
};
export type ProgressEventUpsertWithWhereUniqueWithoutUserInput = {
    where: Prisma.ProgressEventWhereUniqueInput;
    update: Prisma.XOR<Prisma.ProgressEventUpdateWithoutUserInput, Prisma.ProgressEventUncheckedUpdateWithoutUserInput>;
    create: Prisma.XOR<Prisma.ProgressEventCreateWithoutUserInput, Prisma.ProgressEventUncheckedCreateWithoutUserInput>;
};
export type ProgressEventUpdateWithWhereUniqueWithoutUserInput = {
    where: Prisma.ProgressEventWhereUniqueInput;
    data: Prisma.XOR<Prisma.ProgressEventUpdateWithoutUserInput, Prisma.ProgressEventUncheckedUpdateWithoutUserInput>;
};
export type ProgressEventUpdateManyWithWhereWithoutUserInput = {
    where: Prisma.ProgressEventScalarWhereInput;
    data: Prisma.XOR<Prisma.ProgressEventUpdateManyMutationInput, Prisma.ProgressEventUncheckedUpdateManyWithoutUserInput>;
};
export type ProgressEventScalarWhereInput = {
    AND?: Prisma.ProgressEventScalarWhereInput | Prisma.ProgressEventScalarWhereInput[];
    OR?: Prisma.ProgressEventScalarWhereInput[];
    NOT?: Prisma.ProgressEventScalarWhereInput | Prisma.ProgressEventScalarWhereInput[];
    id?: Prisma.StringFilter<"ProgressEvent"> | string;
    userId?: Prisma.StringFilter<"ProgressEvent"> | string;
    planId?: Prisma.StringNullableFilter<"ProgressEvent"> | string | null;
    poiId?: Prisma.StringNullableFilter<"ProgressEvent"> | string | null;
    type?: Prisma.StringFilter<"ProgressEvent"> | string;
    payload?: Prisma.JsonNullableFilter<"ProgressEvent">;
    createdAt?: Prisma.DateTimeFilter<"ProgressEvent"> | Date | string;
};
export type ProgressEventCreateWithoutPoiInput = {
    id?: string;
    type: string;
    payload?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    createdAt?: Date | string;
    user: Prisma.UserCreateNestedOneWithoutEventsInput;
    plan?: Prisma.PlanCreateNestedOneWithoutEventsInput;
};
export type ProgressEventUncheckedCreateWithoutPoiInput = {
    id?: string;
    userId: string;
    planId?: string | null;
    type: string;
    payload?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    createdAt?: Date | string;
};
export type ProgressEventCreateOrConnectWithoutPoiInput = {
    where: Prisma.ProgressEventWhereUniqueInput;
    create: Prisma.XOR<Prisma.ProgressEventCreateWithoutPoiInput, Prisma.ProgressEventUncheckedCreateWithoutPoiInput>;
};
export type ProgressEventCreateManyPoiInputEnvelope = {
    data: Prisma.ProgressEventCreateManyPoiInput | Prisma.ProgressEventCreateManyPoiInput[];
};
export type ProgressEventUpsertWithWhereUniqueWithoutPoiInput = {
    where: Prisma.ProgressEventWhereUniqueInput;
    update: Prisma.XOR<Prisma.ProgressEventUpdateWithoutPoiInput, Prisma.ProgressEventUncheckedUpdateWithoutPoiInput>;
    create: Prisma.XOR<Prisma.ProgressEventCreateWithoutPoiInput, Prisma.ProgressEventUncheckedCreateWithoutPoiInput>;
};
export type ProgressEventUpdateWithWhereUniqueWithoutPoiInput = {
    where: Prisma.ProgressEventWhereUniqueInput;
    data: Prisma.XOR<Prisma.ProgressEventUpdateWithoutPoiInput, Prisma.ProgressEventUncheckedUpdateWithoutPoiInput>;
};
export type ProgressEventUpdateManyWithWhereWithoutPoiInput = {
    where: Prisma.ProgressEventScalarWhereInput;
    data: Prisma.XOR<Prisma.ProgressEventUpdateManyMutationInput, Prisma.ProgressEventUncheckedUpdateManyWithoutPoiInput>;
};
export type ProgressEventCreateWithoutPlanInput = {
    id?: string;
    type: string;
    payload?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    createdAt?: Date | string;
    user: Prisma.UserCreateNestedOneWithoutEventsInput;
    poi?: Prisma.PoiCreateNestedOneWithoutEventsInput;
};
export type ProgressEventUncheckedCreateWithoutPlanInput = {
    id?: string;
    userId: string;
    poiId?: string | null;
    type: string;
    payload?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    createdAt?: Date | string;
};
export type ProgressEventCreateOrConnectWithoutPlanInput = {
    where: Prisma.ProgressEventWhereUniqueInput;
    create: Prisma.XOR<Prisma.ProgressEventCreateWithoutPlanInput, Prisma.ProgressEventUncheckedCreateWithoutPlanInput>;
};
export type ProgressEventCreateManyPlanInputEnvelope = {
    data: Prisma.ProgressEventCreateManyPlanInput | Prisma.ProgressEventCreateManyPlanInput[];
};
export type ProgressEventUpsertWithWhereUniqueWithoutPlanInput = {
    where: Prisma.ProgressEventWhereUniqueInput;
    update: Prisma.XOR<Prisma.ProgressEventUpdateWithoutPlanInput, Prisma.ProgressEventUncheckedUpdateWithoutPlanInput>;
    create: Prisma.XOR<Prisma.ProgressEventCreateWithoutPlanInput, Prisma.ProgressEventUncheckedCreateWithoutPlanInput>;
};
export type ProgressEventUpdateWithWhereUniqueWithoutPlanInput = {
    where: Prisma.ProgressEventWhereUniqueInput;
    data: Prisma.XOR<Prisma.ProgressEventUpdateWithoutPlanInput, Prisma.ProgressEventUncheckedUpdateWithoutPlanInput>;
};
export type ProgressEventUpdateManyWithWhereWithoutPlanInput = {
    where: Prisma.ProgressEventScalarWhereInput;
    data: Prisma.XOR<Prisma.ProgressEventUpdateManyMutationInput, Prisma.ProgressEventUncheckedUpdateManyWithoutPlanInput>;
};
export type ProgressEventCreateManyUserInput = {
    id?: string;
    planId?: string | null;
    poiId?: string | null;
    type: string;
    payload?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    createdAt?: Date | string;
};
export type ProgressEventUpdateWithoutUserInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    type?: Prisma.StringFieldUpdateOperationsInput | string;
    payload?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    plan?: Prisma.PlanUpdateOneWithoutEventsNestedInput;
    poi?: Prisma.PoiUpdateOneWithoutEventsNestedInput;
};
export type ProgressEventUncheckedUpdateWithoutUserInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    planId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    poiId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    type?: Prisma.StringFieldUpdateOperationsInput | string;
    payload?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type ProgressEventUncheckedUpdateManyWithoutUserInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    planId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    poiId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    type?: Prisma.StringFieldUpdateOperationsInput | string;
    payload?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type ProgressEventCreateManyPoiInput = {
    id?: string;
    userId: string;
    planId?: string | null;
    type: string;
    payload?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    createdAt?: Date | string;
};
export type ProgressEventUpdateWithoutPoiInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    type?: Prisma.StringFieldUpdateOperationsInput | string;
    payload?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    user?: Prisma.UserUpdateOneRequiredWithoutEventsNestedInput;
    plan?: Prisma.PlanUpdateOneWithoutEventsNestedInput;
};
export type ProgressEventUncheckedUpdateWithoutPoiInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    userId?: Prisma.StringFieldUpdateOperationsInput | string;
    planId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    type?: Prisma.StringFieldUpdateOperationsInput | string;
    payload?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type ProgressEventUncheckedUpdateManyWithoutPoiInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    userId?: Prisma.StringFieldUpdateOperationsInput | string;
    planId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    type?: Prisma.StringFieldUpdateOperationsInput | string;
    payload?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type ProgressEventCreateManyPlanInput = {
    id?: string;
    userId: string;
    poiId?: string | null;
    type: string;
    payload?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    createdAt?: Date | string;
};
export type ProgressEventUpdateWithoutPlanInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    type?: Prisma.StringFieldUpdateOperationsInput | string;
    payload?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    user?: Prisma.UserUpdateOneRequiredWithoutEventsNestedInput;
    poi?: Prisma.PoiUpdateOneWithoutEventsNestedInput;
};
export type ProgressEventUncheckedUpdateWithoutPlanInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    userId?: Prisma.StringFieldUpdateOperationsInput | string;
    poiId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    type?: Prisma.StringFieldUpdateOperationsInput | string;
    payload?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type ProgressEventUncheckedUpdateManyWithoutPlanInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    userId?: Prisma.StringFieldUpdateOperationsInput | string;
    poiId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    type?: Prisma.StringFieldUpdateOperationsInput | string;
    payload?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type ProgressEventSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    userId?: boolean;
    planId?: boolean;
    poiId?: boolean;
    type?: boolean;
    payload?: boolean;
    createdAt?: boolean;
    user?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
    plan?: boolean | Prisma.ProgressEvent$planArgs<ExtArgs>;
    poi?: boolean | Prisma.ProgressEvent$poiArgs<ExtArgs>;
}, ExtArgs["result"]["progressEvent"]>;
export type ProgressEventSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    userId?: boolean;
    planId?: boolean;
    poiId?: boolean;
    type?: boolean;
    payload?: boolean;
    createdAt?: boolean;
    user?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
    plan?: boolean | Prisma.ProgressEvent$planArgs<ExtArgs>;
    poi?: boolean | Prisma.ProgressEvent$poiArgs<ExtArgs>;
}, ExtArgs["result"]["progressEvent"]>;
export type ProgressEventSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    userId?: boolean;
    planId?: boolean;
    poiId?: boolean;
    type?: boolean;
    payload?: boolean;
    createdAt?: boolean;
    user?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
    plan?: boolean | Prisma.ProgressEvent$planArgs<ExtArgs>;
    poi?: boolean | Prisma.ProgressEvent$poiArgs<ExtArgs>;
}, ExtArgs["result"]["progressEvent"]>;
export type ProgressEventSelectScalar = {
    id?: boolean;
    userId?: boolean;
    planId?: boolean;
    poiId?: boolean;
    type?: boolean;
    payload?: boolean;
    createdAt?: boolean;
};
export type ProgressEventOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "userId" | "planId" | "poiId" | "type" | "payload" | "createdAt", ExtArgs["result"]["progressEvent"]>;
export type ProgressEventInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    user?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
    plan?: boolean | Prisma.ProgressEvent$planArgs<ExtArgs>;
    poi?: boolean | Prisma.ProgressEvent$poiArgs<ExtArgs>;
};
export type ProgressEventIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    user?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
    plan?: boolean | Prisma.ProgressEvent$planArgs<ExtArgs>;
    poi?: boolean | Prisma.ProgressEvent$poiArgs<ExtArgs>;
};
export type ProgressEventIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    user?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
    plan?: boolean | Prisma.ProgressEvent$planArgs<ExtArgs>;
    poi?: boolean | Prisma.ProgressEvent$poiArgs<ExtArgs>;
};
export type $ProgressEventPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "ProgressEvent";
    objects: {
        user: Prisma.$UserPayload<ExtArgs>;
        plan: Prisma.$PlanPayload<ExtArgs> | null;
        poi: Prisma.$PoiPayload<ExtArgs> | null;
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: string;
        userId: string;
        planId: string | null;
        poiId: string | null;
        type: string;
        payload: runtime.JsonValue | null;
        createdAt: Date;
    }, ExtArgs["result"]["progressEvent"]>;
    composites: {};
};
export type ProgressEventGetPayload<S extends boolean | null | undefined | ProgressEventDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$ProgressEventPayload, S>;
export type ProgressEventCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<ProgressEventFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: ProgressEventCountAggregateInputType | true;
};
export interface ProgressEventDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['ProgressEvent'];
        meta: {
            name: 'ProgressEvent';
        };
    };
    findUnique<T extends ProgressEventFindUniqueArgs>(args: Prisma.SelectSubset<T, ProgressEventFindUniqueArgs<ExtArgs>>): Prisma.Prisma__ProgressEventClient<runtime.Types.Result.GetResult<Prisma.$ProgressEventPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends ProgressEventFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, ProgressEventFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__ProgressEventClient<runtime.Types.Result.GetResult<Prisma.$ProgressEventPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends ProgressEventFindFirstArgs>(args?: Prisma.SelectSubset<T, ProgressEventFindFirstArgs<ExtArgs>>): Prisma.Prisma__ProgressEventClient<runtime.Types.Result.GetResult<Prisma.$ProgressEventPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends ProgressEventFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, ProgressEventFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__ProgressEventClient<runtime.Types.Result.GetResult<Prisma.$ProgressEventPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends ProgressEventFindManyArgs>(args?: Prisma.SelectSubset<T, ProgressEventFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$ProgressEventPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends ProgressEventCreateArgs>(args: Prisma.SelectSubset<T, ProgressEventCreateArgs<ExtArgs>>): Prisma.Prisma__ProgressEventClient<runtime.Types.Result.GetResult<Prisma.$ProgressEventPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends ProgressEventCreateManyArgs>(args?: Prisma.SelectSubset<T, ProgressEventCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    createManyAndReturn<T extends ProgressEventCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, ProgressEventCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$ProgressEventPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    delete<T extends ProgressEventDeleteArgs>(args: Prisma.SelectSubset<T, ProgressEventDeleteArgs<ExtArgs>>): Prisma.Prisma__ProgressEventClient<runtime.Types.Result.GetResult<Prisma.$ProgressEventPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends ProgressEventUpdateArgs>(args: Prisma.SelectSubset<T, ProgressEventUpdateArgs<ExtArgs>>): Prisma.Prisma__ProgressEventClient<runtime.Types.Result.GetResult<Prisma.$ProgressEventPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends ProgressEventDeleteManyArgs>(args?: Prisma.SelectSubset<T, ProgressEventDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends ProgressEventUpdateManyArgs>(args: Prisma.SelectSubset<T, ProgressEventUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateManyAndReturn<T extends ProgressEventUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, ProgressEventUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$ProgressEventPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    upsert<T extends ProgressEventUpsertArgs>(args: Prisma.SelectSubset<T, ProgressEventUpsertArgs<ExtArgs>>): Prisma.Prisma__ProgressEventClient<runtime.Types.Result.GetResult<Prisma.$ProgressEventPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends ProgressEventCountArgs>(args?: Prisma.Subset<T, ProgressEventCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], ProgressEventCountAggregateOutputType> : number>;
    aggregate<T extends ProgressEventAggregateArgs>(args: Prisma.Subset<T, ProgressEventAggregateArgs>): Prisma.PrismaPromise<GetProgressEventAggregateType<T>>;
    groupBy<T extends ProgressEventGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: ProgressEventGroupByArgs['orderBy'];
    } : {
        orderBy?: ProgressEventGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, ProgressEventGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetProgressEventGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: ProgressEventFieldRefs;
}
export interface Prisma__ProgressEventClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    user<T extends Prisma.UserDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.UserDefaultArgs<ExtArgs>>): Prisma.Prisma__UserClient<runtime.Types.Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    plan<T extends Prisma.ProgressEvent$planArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.ProgressEvent$planArgs<ExtArgs>>): Prisma.Prisma__PlanClient<runtime.Types.Result.GetResult<Prisma.$PlanPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    poi<T extends Prisma.ProgressEvent$poiArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.ProgressEvent$poiArgs<ExtArgs>>): Prisma.Prisma__PoiClient<runtime.Types.Result.GetResult<Prisma.$PoiPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface ProgressEventFieldRefs {
    readonly id: Prisma.FieldRef<"ProgressEvent", 'String'>;
    readonly userId: Prisma.FieldRef<"ProgressEvent", 'String'>;
    readonly planId: Prisma.FieldRef<"ProgressEvent", 'String'>;
    readonly poiId: Prisma.FieldRef<"ProgressEvent", 'String'>;
    readonly type: Prisma.FieldRef<"ProgressEvent", 'String'>;
    readonly payload: Prisma.FieldRef<"ProgressEvent", 'Json'>;
    readonly createdAt: Prisma.FieldRef<"ProgressEvent", 'DateTime'>;
}
export type ProgressEventFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ProgressEventSelect<ExtArgs> | null;
    omit?: Prisma.ProgressEventOmit<ExtArgs> | null;
    include?: Prisma.ProgressEventInclude<ExtArgs> | null;
    where: Prisma.ProgressEventWhereUniqueInput;
};
export type ProgressEventFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ProgressEventSelect<ExtArgs> | null;
    omit?: Prisma.ProgressEventOmit<ExtArgs> | null;
    include?: Prisma.ProgressEventInclude<ExtArgs> | null;
    where: Prisma.ProgressEventWhereUniqueInput;
};
export type ProgressEventFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type ProgressEventFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type ProgressEventFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type ProgressEventCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ProgressEventSelect<ExtArgs> | null;
    omit?: Prisma.ProgressEventOmit<ExtArgs> | null;
    include?: Prisma.ProgressEventInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.ProgressEventCreateInput, Prisma.ProgressEventUncheckedCreateInput>;
};
export type ProgressEventCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.ProgressEventCreateManyInput | Prisma.ProgressEventCreateManyInput[];
};
export type ProgressEventCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ProgressEventSelectCreateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.ProgressEventOmit<ExtArgs> | null;
    data: Prisma.ProgressEventCreateManyInput | Prisma.ProgressEventCreateManyInput[];
    include?: Prisma.ProgressEventIncludeCreateManyAndReturn<ExtArgs> | null;
};
export type ProgressEventUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ProgressEventSelect<ExtArgs> | null;
    omit?: Prisma.ProgressEventOmit<ExtArgs> | null;
    include?: Prisma.ProgressEventInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.ProgressEventUpdateInput, Prisma.ProgressEventUncheckedUpdateInput>;
    where: Prisma.ProgressEventWhereUniqueInput;
};
export type ProgressEventUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.ProgressEventUpdateManyMutationInput, Prisma.ProgressEventUncheckedUpdateManyInput>;
    where?: Prisma.ProgressEventWhereInput;
    limit?: number;
};
export type ProgressEventUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ProgressEventSelectUpdateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.ProgressEventOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.ProgressEventUpdateManyMutationInput, Prisma.ProgressEventUncheckedUpdateManyInput>;
    where?: Prisma.ProgressEventWhereInput;
    limit?: number;
    include?: Prisma.ProgressEventIncludeUpdateManyAndReturn<ExtArgs> | null;
};
export type ProgressEventUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ProgressEventSelect<ExtArgs> | null;
    omit?: Prisma.ProgressEventOmit<ExtArgs> | null;
    include?: Prisma.ProgressEventInclude<ExtArgs> | null;
    where: Prisma.ProgressEventWhereUniqueInput;
    create: Prisma.XOR<Prisma.ProgressEventCreateInput, Prisma.ProgressEventUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.ProgressEventUpdateInput, Prisma.ProgressEventUncheckedUpdateInput>;
};
export type ProgressEventDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ProgressEventSelect<ExtArgs> | null;
    omit?: Prisma.ProgressEventOmit<ExtArgs> | null;
    include?: Prisma.ProgressEventInclude<ExtArgs> | null;
    where: Prisma.ProgressEventWhereUniqueInput;
};
export type ProgressEventDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.ProgressEventWhereInput;
    limit?: number;
};
export type ProgressEvent$planArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.PlanSelect<ExtArgs> | null;
    omit?: Prisma.PlanOmit<ExtArgs> | null;
    include?: Prisma.PlanInclude<ExtArgs> | null;
    where?: Prisma.PlanWhereInput;
};
export type ProgressEvent$poiArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.PoiSelect<ExtArgs> | null;
    omit?: Prisma.PoiOmit<ExtArgs> | null;
    include?: Prisma.PoiInclude<ExtArgs> | null;
    where?: Prisma.PoiWhereInput;
};
export type ProgressEventDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ProgressEventSelect<ExtArgs> | null;
    omit?: Prisma.ProgressEventOmit<ExtArgs> | null;
    include?: Prisma.ProgressEventInclude<ExtArgs> | null;
};
