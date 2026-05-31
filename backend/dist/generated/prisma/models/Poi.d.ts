import type * as runtime from "@prisma/client/runtime/client";
import type * as $Enums from "../enums.js";
import type * as Prisma from "../internal/prismaNamespace.js";
export type PoiModel = runtime.Types.Result.DefaultSelection<Prisma.$PoiPayload>;
export type AggregatePoi = {
    _count: PoiCountAggregateOutputType | null;
    _avg: PoiAvgAggregateOutputType | null;
    _sum: PoiSumAggregateOutputType | null;
    _min: PoiMinAggregateOutputType | null;
    _max: PoiMaxAggregateOutputType | null;
};
export type PoiAvgAggregateOutputType = {
    lat: number | null;
    lng: number | null;
};
export type PoiSumAggregateOutputType = {
    lat: number | null;
    lng: number | null;
};
export type PoiMinAggregateOutputType = {
    id: string | null;
    parkId: string | null;
    type: $Enums.PoiType | null;
    name: string | null;
    zone: string | null;
    lat: number | null;
    lng: number | null;
    createdAt: Date | null;
    updatedAt: Date | null;
};
export type PoiMaxAggregateOutputType = {
    id: string | null;
    parkId: string | null;
    type: $Enums.PoiType | null;
    name: string | null;
    zone: string | null;
    lat: number | null;
    lng: number | null;
    createdAt: Date | null;
    updatedAt: Date | null;
};
export type PoiCountAggregateOutputType = {
    id: number;
    parkId: number;
    type: number;
    name: number;
    zone: number;
    lat: number;
    lng: number;
    tags: number;
    createdAt: number;
    updatedAt: number;
    _all: number;
};
export type PoiAvgAggregateInputType = {
    lat?: true;
    lng?: true;
};
export type PoiSumAggregateInputType = {
    lat?: true;
    lng?: true;
};
export type PoiMinAggregateInputType = {
    id?: true;
    parkId?: true;
    type?: true;
    name?: true;
    zone?: true;
    lat?: true;
    lng?: true;
    createdAt?: true;
    updatedAt?: true;
};
export type PoiMaxAggregateInputType = {
    id?: true;
    parkId?: true;
    type?: true;
    name?: true;
    zone?: true;
    lat?: true;
    lng?: true;
    createdAt?: true;
    updatedAt?: true;
};
export type PoiCountAggregateInputType = {
    id?: true;
    parkId?: true;
    type?: true;
    name?: true;
    zone?: true;
    lat?: true;
    lng?: true;
    tags?: true;
    createdAt?: true;
    updatedAt?: true;
    _all?: true;
};
export type PoiAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.PoiWhereInput;
    orderBy?: Prisma.PoiOrderByWithRelationInput | Prisma.PoiOrderByWithRelationInput[];
    cursor?: Prisma.PoiWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | PoiCountAggregateInputType;
    _avg?: PoiAvgAggregateInputType;
    _sum?: PoiSumAggregateInputType;
    _min?: PoiMinAggregateInputType;
    _max?: PoiMaxAggregateInputType;
};
export type GetPoiAggregateType<T extends PoiAggregateArgs> = {
    [P in keyof T & keyof AggregatePoi]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregatePoi[P]> : Prisma.GetScalarType<T[P], AggregatePoi[P]>;
};
export type PoiGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.PoiWhereInput;
    orderBy?: Prisma.PoiOrderByWithAggregationInput | Prisma.PoiOrderByWithAggregationInput[];
    by: Prisma.PoiScalarFieldEnum[] | Prisma.PoiScalarFieldEnum;
    having?: Prisma.PoiScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: PoiCountAggregateInputType | true;
    _avg?: PoiAvgAggregateInputType;
    _sum?: PoiSumAggregateInputType;
    _min?: PoiMinAggregateInputType;
    _max?: PoiMaxAggregateInputType;
};
export type PoiGroupByOutputType = {
    id: string;
    parkId: string;
    type: $Enums.PoiType;
    name: string;
    zone: string | null;
    lat: number;
    lng: number;
    tags: runtime.JsonValue | null;
    createdAt: Date;
    updatedAt: Date;
    _count: PoiCountAggregateOutputType | null;
    _avg: PoiAvgAggregateOutputType | null;
    _sum: PoiSumAggregateOutputType | null;
    _min: PoiMinAggregateOutputType | null;
    _max: PoiMaxAggregateOutputType | null;
};
export type GetPoiGroupByPayload<T extends PoiGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<PoiGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof PoiGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], PoiGroupByOutputType[P]> : Prisma.GetScalarType<T[P], PoiGroupByOutputType[P]>;
}>>;
export type PoiWhereInput = {
    AND?: Prisma.PoiWhereInput | Prisma.PoiWhereInput[];
    OR?: Prisma.PoiWhereInput[];
    NOT?: Prisma.PoiWhereInput | Prisma.PoiWhereInput[];
    id?: Prisma.StringFilter<"Poi"> | string;
    parkId?: Prisma.StringFilter<"Poi"> | string;
    type?: Prisma.EnumPoiTypeFilter<"Poi"> | $Enums.PoiType;
    name?: Prisma.StringFilter<"Poi"> | string;
    zone?: Prisma.StringNullableFilter<"Poi"> | string | null;
    lat?: Prisma.FloatFilter<"Poi"> | number;
    lng?: Prisma.FloatFilter<"Poi"> | number;
    tags?: Prisma.JsonNullableFilter<"Poi">;
    createdAt?: Prisma.DateTimeFilter<"Poi"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"Poi"> | Date | string;
    park?: Prisma.XOR<Prisma.ParkScalarRelationFilter, Prisma.ParkWhereInput>;
    live?: Prisma.PoiLiveListRelationFilter;
    shows?: Prisma.ShowSessionListRelationFilter;
    events?: Prisma.ProgressEventListRelationFilter;
};
export type PoiOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    parkId?: Prisma.SortOrder;
    type?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
    zone?: Prisma.SortOrderInput | Prisma.SortOrder;
    lat?: Prisma.SortOrder;
    lng?: Prisma.SortOrder;
    tags?: Prisma.SortOrderInput | Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
    park?: Prisma.ParkOrderByWithRelationInput;
    live?: Prisma.PoiLiveOrderByRelationAggregateInput;
    shows?: Prisma.ShowSessionOrderByRelationAggregateInput;
    events?: Prisma.ProgressEventOrderByRelationAggregateInput;
};
export type PoiWhereUniqueInput = Prisma.AtLeast<{
    id?: string;
    parkId_type_name?: Prisma.PoiParkIdTypeNameCompoundUniqueInput;
    AND?: Prisma.PoiWhereInput | Prisma.PoiWhereInput[];
    OR?: Prisma.PoiWhereInput[];
    NOT?: Prisma.PoiWhereInput | Prisma.PoiWhereInput[];
    parkId?: Prisma.StringFilter<"Poi"> | string;
    type?: Prisma.EnumPoiTypeFilter<"Poi"> | $Enums.PoiType;
    name?: Prisma.StringFilter<"Poi"> | string;
    zone?: Prisma.StringNullableFilter<"Poi"> | string | null;
    lat?: Prisma.FloatFilter<"Poi"> | number;
    lng?: Prisma.FloatFilter<"Poi"> | number;
    tags?: Prisma.JsonNullableFilter<"Poi">;
    createdAt?: Prisma.DateTimeFilter<"Poi"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"Poi"> | Date | string;
    park?: Prisma.XOR<Prisma.ParkScalarRelationFilter, Prisma.ParkWhereInput>;
    live?: Prisma.PoiLiveListRelationFilter;
    shows?: Prisma.ShowSessionListRelationFilter;
    events?: Prisma.ProgressEventListRelationFilter;
}, "id" | "parkId_type_name">;
export type PoiOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    parkId?: Prisma.SortOrder;
    type?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
    zone?: Prisma.SortOrderInput | Prisma.SortOrder;
    lat?: Prisma.SortOrder;
    lng?: Prisma.SortOrder;
    tags?: Prisma.SortOrderInput | Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
    _count?: Prisma.PoiCountOrderByAggregateInput;
    _avg?: Prisma.PoiAvgOrderByAggregateInput;
    _max?: Prisma.PoiMaxOrderByAggregateInput;
    _min?: Prisma.PoiMinOrderByAggregateInput;
    _sum?: Prisma.PoiSumOrderByAggregateInput;
};
export type PoiScalarWhereWithAggregatesInput = {
    AND?: Prisma.PoiScalarWhereWithAggregatesInput | Prisma.PoiScalarWhereWithAggregatesInput[];
    OR?: Prisma.PoiScalarWhereWithAggregatesInput[];
    NOT?: Prisma.PoiScalarWhereWithAggregatesInput | Prisma.PoiScalarWhereWithAggregatesInput[];
    id?: Prisma.StringWithAggregatesFilter<"Poi"> | string;
    parkId?: Prisma.StringWithAggregatesFilter<"Poi"> | string;
    type?: Prisma.EnumPoiTypeWithAggregatesFilter<"Poi"> | $Enums.PoiType;
    name?: Prisma.StringWithAggregatesFilter<"Poi"> | string;
    zone?: Prisma.StringNullableWithAggregatesFilter<"Poi"> | string | null;
    lat?: Prisma.FloatWithAggregatesFilter<"Poi"> | number;
    lng?: Prisma.FloatWithAggregatesFilter<"Poi"> | number;
    tags?: Prisma.JsonNullableWithAggregatesFilter<"Poi">;
    createdAt?: Prisma.DateTimeWithAggregatesFilter<"Poi"> | Date | string;
    updatedAt?: Prisma.DateTimeWithAggregatesFilter<"Poi"> | Date | string;
};
export type PoiCreateInput = {
    id?: string;
    type: $Enums.PoiType;
    name: string;
    zone?: string | null;
    lat: number;
    lng: number;
    tags?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    park: Prisma.ParkCreateNestedOneWithoutPoisInput;
    live?: Prisma.PoiLiveCreateNestedManyWithoutPoiInput;
    shows?: Prisma.ShowSessionCreateNestedManyWithoutPoiInput;
    events?: Prisma.ProgressEventCreateNestedManyWithoutPoiInput;
};
export type PoiUncheckedCreateInput = {
    id?: string;
    parkId: string;
    type: $Enums.PoiType;
    name: string;
    zone?: string | null;
    lat: number;
    lng: number;
    tags?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    live?: Prisma.PoiLiveUncheckedCreateNestedManyWithoutPoiInput;
    shows?: Prisma.ShowSessionUncheckedCreateNestedManyWithoutPoiInput;
    events?: Prisma.ProgressEventUncheckedCreateNestedManyWithoutPoiInput;
};
export type PoiUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    type?: Prisma.EnumPoiTypeFieldUpdateOperationsInput | $Enums.PoiType;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    zone?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    lat?: Prisma.FloatFieldUpdateOperationsInput | number;
    lng?: Prisma.FloatFieldUpdateOperationsInput | number;
    tags?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    park?: Prisma.ParkUpdateOneRequiredWithoutPoisNestedInput;
    live?: Prisma.PoiLiveUpdateManyWithoutPoiNestedInput;
    shows?: Prisma.ShowSessionUpdateManyWithoutPoiNestedInput;
    events?: Prisma.ProgressEventUpdateManyWithoutPoiNestedInput;
};
export type PoiUncheckedUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    parkId?: Prisma.StringFieldUpdateOperationsInput | string;
    type?: Prisma.EnumPoiTypeFieldUpdateOperationsInput | $Enums.PoiType;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    zone?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    lat?: Prisma.FloatFieldUpdateOperationsInput | number;
    lng?: Prisma.FloatFieldUpdateOperationsInput | number;
    tags?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    live?: Prisma.PoiLiveUncheckedUpdateManyWithoutPoiNestedInput;
    shows?: Prisma.ShowSessionUncheckedUpdateManyWithoutPoiNestedInput;
    events?: Prisma.ProgressEventUncheckedUpdateManyWithoutPoiNestedInput;
};
export type PoiCreateManyInput = {
    id?: string;
    parkId: string;
    type: $Enums.PoiType;
    name: string;
    zone?: string | null;
    lat: number;
    lng: number;
    tags?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type PoiUpdateManyMutationInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    type?: Prisma.EnumPoiTypeFieldUpdateOperationsInput | $Enums.PoiType;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    zone?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    lat?: Prisma.FloatFieldUpdateOperationsInput | number;
    lng?: Prisma.FloatFieldUpdateOperationsInput | number;
    tags?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type PoiUncheckedUpdateManyInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    parkId?: Prisma.StringFieldUpdateOperationsInput | string;
    type?: Prisma.EnumPoiTypeFieldUpdateOperationsInput | $Enums.PoiType;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    zone?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    lat?: Prisma.FloatFieldUpdateOperationsInput | number;
    lng?: Prisma.FloatFieldUpdateOperationsInput | number;
    tags?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type PoiListRelationFilter = {
    every?: Prisma.PoiWhereInput;
    some?: Prisma.PoiWhereInput;
    none?: Prisma.PoiWhereInput;
};
export type PoiOrderByRelationAggregateInput = {
    _count?: Prisma.SortOrder;
};
export type PoiParkIdTypeNameCompoundUniqueInput = {
    parkId: string;
    type: $Enums.PoiType;
    name: string;
};
export type PoiCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    parkId?: Prisma.SortOrder;
    type?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
    zone?: Prisma.SortOrder;
    lat?: Prisma.SortOrder;
    lng?: Prisma.SortOrder;
    tags?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type PoiAvgOrderByAggregateInput = {
    lat?: Prisma.SortOrder;
    lng?: Prisma.SortOrder;
};
export type PoiMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    parkId?: Prisma.SortOrder;
    type?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
    zone?: Prisma.SortOrder;
    lat?: Prisma.SortOrder;
    lng?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type PoiMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    parkId?: Prisma.SortOrder;
    type?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
    zone?: Prisma.SortOrder;
    lat?: Prisma.SortOrder;
    lng?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type PoiSumOrderByAggregateInput = {
    lat?: Prisma.SortOrder;
    lng?: Prisma.SortOrder;
};
export type PoiScalarRelationFilter = {
    is?: Prisma.PoiWhereInput;
    isNot?: Prisma.PoiWhereInput;
};
export type PoiNullableScalarRelationFilter = {
    is?: Prisma.PoiWhereInput | null;
    isNot?: Prisma.PoiWhereInput | null;
};
export type PoiCreateNestedManyWithoutParkInput = {
    create?: Prisma.XOR<Prisma.PoiCreateWithoutParkInput, Prisma.PoiUncheckedCreateWithoutParkInput> | Prisma.PoiCreateWithoutParkInput[] | Prisma.PoiUncheckedCreateWithoutParkInput[];
    connectOrCreate?: Prisma.PoiCreateOrConnectWithoutParkInput | Prisma.PoiCreateOrConnectWithoutParkInput[];
    createMany?: Prisma.PoiCreateManyParkInputEnvelope;
    connect?: Prisma.PoiWhereUniqueInput | Prisma.PoiWhereUniqueInput[];
};
export type PoiUncheckedCreateNestedManyWithoutParkInput = {
    create?: Prisma.XOR<Prisma.PoiCreateWithoutParkInput, Prisma.PoiUncheckedCreateWithoutParkInput> | Prisma.PoiCreateWithoutParkInput[] | Prisma.PoiUncheckedCreateWithoutParkInput[];
    connectOrCreate?: Prisma.PoiCreateOrConnectWithoutParkInput | Prisma.PoiCreateOrConnectWithoutParkInput[];
    createMany?: Prisma.PoiCreateManyParkInputEnvelope;
    connect?: Prisma.PoiWhereUniqueInput | Prisma.PoiWhereUniqueInput[];
};
export type PoiUpdateManyWithoutParkNestedInput = {
    create?: Prisma.XOR<Prisma.PoiCreateWithoutParkInput, Prisma.PoiUncheckedCreateWithoutParkInput> | Prisma.PoiCreateWithoutParkInput[] | Prisma.PoiUncheckedCreateWithoutParkInput[];
    connectOrCreate?: Prisma.PoiCreateOrConnectWithoutParkInput | Prisma.PoiCreateOrConnectWithoutParkInput[];
    upsert?: Prisma.PoiUpsertWithWhereUniqueWithoutParkInput | Prisma.PoiUpsertWithWhereUniqueWithoutParkInput[];
    createMany?: Prisma.PoiCreateManyParkInputEnvelope;
    set?: Prisma.PoiWhereUniqueInput | Prisma.PoiWhereUniqueInput[];
    disconnect?: Prisma.PoiWhereUniqueInput | Prisma.PoiWhereUniqueInput[];
    delete?: Prisma.PoiWhereUniqueInput | Prisma.PoiWhereUniqueInput[];
    connect?: Prisma.PoiWhereUniqueInput | Prisma.PoiWhereUniqueInput[];
    update?: Prisma.PoiUpdateWithWhereUniqueWithoutParkInput | Prisma.PoiUpdateWithWhereUniqueWithoutParkInput[];
    updateMany?: Prisma.PoiUpdateManyWithWhereWithoutParkInput | Prisma.PoiUpdateManyWithWhereWithoutParkInput[];
    deleteMany?: Prisma.PoiScalarWhereInput | Prisma.PoiScalarWhereInput[];
};
export type PoiUncheckedUpdateManyWithoutParkNestedInput = {
    create?: Prisma.XOR<Prisma.PoiCreateWithoutParkInput, Prisma.PoiUncheckedCreateWithoutParkInput> | Prisma.PoiCreateWithoutParkInput[] | Prisma.PoiUncheckedCreateWithoutParkInput[];
    connectOrCreate?: Prisma.PoiCreateOrConnectWithoutParkInput | Prisma.PoiCreateOrConnectWithoutParkInput[];
    upsert?: Prisma.PoiUpsertWithWhereUniqueWithoutParkInput | Prisma.PoiUpsertWithWhereUniqueWithoutParkInput[];
    createMany?: Prisma.PoiCreateManyParkInputEnvelope;
    set?: Prisma.PoiWhereUniqueInput | Prisma.PoiWhereUniqueInput[];
    disconnect?: Prisma.PoiWhereUniqueInput | Prisma.PoiWhereUniqueInput[];
    delete?: Prisma.PoiWhereUniqueInput | Prisma.PoiWhereUniqueInput[];
    connect?: Prisma.PoiWhereUniqueInput | Prisma.PoiWhereUniqueInput[];
    update?: Prisma.PoiUpdateWithWhereUniqueWithoutParkInput | Prisma.PoiUpdateWithWhereUniqueWithoutParkInput[];
    updateMany?: Prisma.PoiUpdateManyWithWhereWithoutParkInput | Prisma.PoiUpdateManyWithWhereWithoutParkInput[];
    deleteMany?: Prisma.PoiScalarWhereInput | Prisma.PoiScalarWhereInput[];
};
export type EnumPoiTypeFieldUpdateOperationsInput = {
    set?: $Enums.PoiType;
};
export type FloatFieldUpdateOperationsInput = {
    set?: number;
    increment?: number;
    decrement?: number;
    multiply?: number;
    divide?: number;
};
export type PoiCreateNestedOneWithoutLiveInput = {
    create?: Prisma.XOR<Prisma.PoiCreateWithoutLiveInput, Prisma.PoiUncheckedCreateWithoutLiveInput>;
    connectOrCreate?: Prisma.PoiCreateOrConnectWithoutLiveInput;
    connect?: Prisma.PoiWhereUniqueInput;
};
export type PoiUpdateOneRequiredWithoutLiveNestedInput = {
    create?: Prisma.XOR<Prisma.PoiCreateWithoutLiveInput, Prisma.PoiUncheckedCreateWithoutLiveInput>;
    connectOrCreate?: Prisma.PoiCreateOrConnectWithoutLiveInput;
    upsert?: Prisma.PoiUpsertWithoutLiveInput;
    connect?: Prisma.PoiWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.PoiUpdateToOneWithWhereWithoutLiveInput, Prisma.PoiUpdateWithoutLiveInput>, Prisma.PoiUncheckedUpdateWithoutLiveInput>;
};
export type PoiCreateNestedOneWithoutShowsInput = {
    create?: Prisma.XOR<Prisma.PoiCreateWithoutShowsInput, Prisma.PoiUncheckedCreateWithoutShowsInput>;
    connectOrCreate?: Prisma.PoiCreateOrConnectWithoutShowsInput;
    connect?: Prisma.PoiWhereUniqueInput;
};
export type PoiUpdateOneRequiredWithoutShowsNestedInput = {
    create?: Prisma.XOR<Prisma.PoiCreateWithoutShowsInput, Prisma.PoiUncheckedCreateWithoutShowsInput>;
    connectOrCreate?: Prisma.PoiCreateOrConnectWithoutShowsInput;
    upsert?: Prisma.PoiUpsertWithoutShowsInput;
    connect?: Prisma.PoiWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.PoiUpdateToOneWithWhereWithoutShowsInput, Prisma.PoiUpdateWithoutShowsInput>, Prisma.PoiUncheckedUpdateWithoutShowsInput>;
};
export type PoiCreateNestedOneWithoutEventsInput = {
    create?: Prisma.XOR<Prisma.PoiCreateWithoutEventsInput, Prisma.PoiUncheckedCreateWithoutEventsInput>;
    connectOrCreate?: Prisma.PoiCreateOrConnectWithoutEventsInput;
    connect?: Prisma.PoiWhereUniqueInput;
};
export type PoiUpdateOneWithoutEventsNestedInput = {
    create?: Prisma.XOR<Prisma.PoiCreateWithoutEventsInput, Prisma.PoiUncheckedCreateWithoutEventsInput>;
    connectOrCreate?: Prisma.PoiCreateOrConnectWithoutEventsInput;
    upsert?: Prisma.PoiUpsertWithoutEventsInput;
    disconnect?: Prisma.PoiWhereInput | boolean;
    delete?: Prisma.PoiWhereInput | boolean;
    connect?: Prisma.PoiWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.PoiUpdateToOneWithWhereWithoutEventsInput, Prisma.PoiUpdateWithoutEventsInput>, Prisma.PoiUncheckedUpdateWithoutEventsInput>;
};
export type PoiCreateWithoutParkInput = {
    id?: string;
    type: $Enums.PoiType;
    name: string;
    zone?: string | null;
    lat: number;
    lng: number;
    tags?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    live?: Prisma.PoiLiveCreateNestedManyWithoutPoiInput;
    shows?: Prisma.ShowSessionCreateNestedManyWithoutPoiInput;
    events?: Prisma.ProgressEventCreateNestedManyWithoutPoiInput;
};
export type PoiUncheckedCreateWithoutParkInput = {
    id?: string;
    type: $Enums.PoiType;
    name: string;
    zone?: string | null;
    lat: number;
    lng: number;
    tags?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    live?: Prisma.PoiLiveUncheckedCreateNestedManyWithoutPoiInput;
    shows?: Prisma.ShowSessionUncheckedCreateNestedManyWithoutPoiInput;
    events?: Prisma.ProgressEventUncheckedCreateNestedManyWithoutPoiInput;
};
export type PoiCreateOrConnectWithoutParkInput = {
    where: Prisma.PoiWhereUniqueInput;
    create: Prisma.XOR<Prisma.PoiCreateWithoutParkInput, Prisma.PoiUncheckedCreateWithoutParkInput>;
};
export type PoiCreateManyParkInputEnvelope = {
    data: Prisma.PoiCreateManyParkInput | Prisma.PoiCreateManyParkInput[];
};
export type PoiUpsertWithWhereUniqueWithoutParkInput = {
    where: Prisma.PoiWhereUniqueInput;
    update: Prisma.XOR<Prisma.PoiUpdateWithoutParkInput, Prisma.PoiUncheckedUpdateWithoutParkInput>;
    create: Prisma.XOR<Prisma.PoiCreateWithoutParkInput, Prisma.PoiUncheckedCreateWithoutParkInput>;
};
export type PoiUpdateWithWhereUniqueWithoutParkInput = {
    where: Prisma.PoiWhereUniqueInput;
    data: Prisma.XOR<Prisma.PoiUpdateWithoutParkInput, Prisma.PoiUncheckedUpdateWithoutParkInput>;
};
export type PoiUpdateManyWithWhereWithoutParkInput = {
    where: Prisma.PoiScalarWhereInput;
    data: Prisma.XOR<Prisma.PoiUpdateManyMutationInput, Prisma.PoiUncheckedUpdateManyWithoutParkInput>;
};
export type PoiScalarWhereInput = {
    AND?: Prisma.PoiScalarWhereInput | Prisma.PoiScalarWhereInput[];
    OR?: Prisma.PoiScalarWhereInput[];
    NOT?: Prisma.PoiScalarWhereInput | Prisma.PoiScalarWhereInput[];
    id?: Prisma.StringFilter<"Poi"> | string;
    parkId?: Prisma.StringFilter<"Poi"> | string;
    type?: Prisma.EnumPoiTypeFilter<"Poi"> | $Enums.PoiType;
    name?: Prisma.StringFilter<"Poi"> | string;
    zone?: Prisma.StringNullableFilter<"Poi"> | string | null;
    lat?: Prisma.FloatFilter<"Poi"> | number;
    lng?: Prisma.FloatFilter<"Poi"> | number;
    tags?: Prisma.JsonNullableFilter<"Poi">;
    createdAt?: Prisma.DateTimeFilter<"Poi"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"Poi"> | Date | string;
};
export type PoiCreateWithoutLiveInput = {
    id?: string;
    type: $Enums.PoiType;
    name: string;
    zone?: string | null;
    lat: number;
    lng: number;
    tags?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    park: Prisma.ParkCreateNestedOneWithoutPoisInput;
    shows?: Prisma.ShowSessionCreateNestedManyWithoutPoiInput;
    events?: Prisma.ProgressEventCreateNestedManyWithoutPoiInput;
};
export type PoiUncheckedCreateWithoutLiveInput = {
    id?: string;
    parkId: string;
    type: $Enums.PoiType;
    name: string;
    zone?: string | null;
    lat: number;
    lng: number;
    tags?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    shows?: Prisma.ShowSessionUncheckedCreateNestedManyWithoutPoiInput;
    events?: Prisma.ProgressEventUncheckedCreateNestedManyWithoutPoiInput;
};
export type PoiCreateOrConnectWithoutLiveInput = {
    where: Prisma.PoiWhereUniqueInput;
    create: Prisma.XOR<Prisma.PoiCreateWithoutLiveInput, Prisma.PoiUncheckedCreateWithoutLiveInput>;
};
export type PoiUpsertWithoutLiveInput = {
    update: Prisma.XOR<Prisma.PoiUpdateWithoutLiveInput, Prisma.PoiUncheckedUpdateWithoutLiveInput>;
    create: Prisma.XOR<Prisma.PoiCreateWithoutLiveInput, Prisma.PoiUncheckedCreateWithoutLiveInput>;
    where?: Prisma.PoiWhereInput;
};
export type PoiUpdateToOneWithWhereWithoutLiveInput = {
    where?: Prisma.PoiWhereInput;
    data: Prisma.XOR<Prisma.PoiUpdateWithoutLiveInput, Prisma.PoiUncheckedUpdateWithoutLiveInput>;
};
export type PoiUpdateWithoutLiveInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    type?: Prisma.EnumPoiTypeFieldUpdateOperationsInput | $Enums.PoiType;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    zone?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    lat?: Prisma.FloatFieldUpdateOperationsInput | number;
    lng?: Prisma.FloatFieldUpdateOperationsInput | number;
    tags?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    park?: Prisma.ParkUpdateOneRequiredWithoutPoisNestedInput;
    shows?: Prisma.ShowSessionUpdateManyWithoutPoiNestedInput;
    events?: Prisma.ProgressEventUpdateManyWithoutPoiNestedInput;
};
export type PoiUncheckedUpdateWithoutLiveInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    parkId?: Prisma.StringFieldUpdateOperationsInput | string;
    type?: Prisma.EnumPoiTypeFieldUpdateOperationsInput | $Enums.PoiType;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    zone?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    lat?: Prisma.FloatFieldUpdateOperationsInput | number;
    lng?: Prisma.FloatFieldUpdateOperationsInput | number;
    tags?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    shows?: Prisma.ShowSessionUncheckedUpdateManyWithoutPoiNestedInput;
    events?: Prisma.ProgressEventUncheckedUpdateManyWithoutPoiNestedInput;
};
export type PoiCreateWithoutShowsInput = {
    id?: string;
    type: $Enums.PoiType;
    name: string;
    zone?: string | null;
    lat: number;
    lng: number;
    tags?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    park: Prisma.ParkCreateNestedOneWithoutPoisInput;
    live?: Prisma.PoiLiveCreateNestedManyWithoutPoiInput;
    events?: Prisma.ProgressEventCreateNestedManyWithoutPoiInput;
};
export type PoiUncheckedCreateWithoutShowsInput = {
    id?: string;
    parkId: string;
    type: $Enums.PoiType;
    name: string;
    zone?: string | null;
    lat: number;
    lng: number;
    tags?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    live?: Prisma.PoiLiveUncheckedCreateNestedManyWithoutPoiInput;
    events?: Prisma.ProgressEventUncheckedCreateNestedManyWithoutPoiInput;
};
export type PoiCreateOrConnectWithoutShowsInput = {
    where: Prisma.PoiWhereUniqueInput;
    create: Prisma.XOR<Prisma.PoiCreateWithoutShowsInput, Prisma.PoiUncheckedCreateWithoutShowsInput>;
};
export type PoiUpsertWithoutShowsInput = {
    update: Prisma.XOR<Prisma.PoiUpdateWithoutShowsInput, Prisma.PoiUncheckedUpdateWithoutShowsInput>;
    create: Prisma.XOR<Prisma.PoiCreateWithoutShowsInput, Prisma.PoiUncheckedCreateWithoutShowsInput>;
    where?: Prisma.PoiWhereInput;
};
export type PoiUpdateToOneWithWhereWithoutShowsInput = {
    where?: Prisma.PoiWhereInput;
    data: Prisma.XOR<Prisma.PoiUpdateWithoutShowsInput, Prisma.PoiUncheckedUpdateWithoutShowsInput>;
};
export type PoiUpdateWithoutShowsInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    type?: Prisma.EnumPoiTypeFieldUpdateOperationsInput | $Enums.PoiType;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    zone?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    lat?: Prisma.FloatFieldUpdateOperationsInput | number;
    lng?: Prisma.FloatFieldUpdateOperationsInput | number;
    tags?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    park?: Prisma.ParkUpdateOneRequiredWithoutPoisNestedInput;
    live?: Prisma.PoiLiveUpdateManyWithoutPoiNestedInput;
    events?: Prisma.ProgressEventUpdateManyWithoutPoiNestedInput;
};
export type PoiUncheckedUpdateWithoutShowsInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    parkId?: Prisma.StringFieldUpdateOperationsInput | string;
    type?: Prisma.EnumPoiTypeFieldUpdateOperationsInput | $Enums.PoiType;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    zone?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    lat?: Prisma.FloatFieldUpdateOperationsInput | number;
    lng?: Prisma.FloatFieldUpdateOperationsInput | number;
    tags?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    live?: Prisma.PoiLiveUncheckedUpdateManyWithoutPoiNestedInput;
    events?: Prisma.ProgressEventUncheckedUpdateManyWithoutPoiNestedInput;
};
export type PoiCreateWithoutEventsInput = {
    id?: string;
    type: $Enums.PoiType;
    name: string;
    zone?: string | null;
    lat: number;
    lng: number;
    tags?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    park: Prisma.ParkCreateNestedOneWithoutPoisInput;
    live?: Prisma.PoiLiveCreateNestedManyWithoutPoiInput;
    shows?: Prisma.ShowSessionCreateNestedManyWithoutPoiInput;
};
export type PoiUncheckedCreateWithoutEventsInput = {
    id?: string;
    parkId: string;
    type: $Enums.PoiType;
    name: string;
    zone?: string | null;
    lat: number;
    lng: number;
    tags?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    live?: Prisma.PoiLiveUncheckedCreateNestedManyWithoutPoiInput;
    shows?: Prisma.ShowSessionUncheckedCreateNestedManyWithoutPoiInput;
};
export type PoiCreateOrConnectWithoutEventsInput = {
    where: Prisma.PoiWhereUniqueInput;
    create: Prisma.XOR<Prisma.PoiCreateWithoutEventsInput, Prisma.PoiUncheckedCreateWithoutEventsInput>;
};
export type PoiUpsertWithoutEventsInput = {
    update: Prisma.XOR<Prisma.PoiUpdateWithoutEventsInput, Prisma.PoiUncheckedUpdateWithoutEventsInput>;
    create: Prisma.XOR<Prisma.PoiCreateWithoutEventsInput, Prisma.PoiUncheckedCreateWithoutEventsInput>;
    where?: Prisma.PoiWhereInput;
};
export type PoiUpdateToOneWithWhereWithoutEventsInput = {
    where?: Prisma.PoiWhereInput;
    data: Prisma.XOR<Prisma.PoiUpdateWithoutEventsInput, Prisma.PoiUncheckedUpdateWithoutEventsInput>;
};
export type PoiUpdateWithoutEventsInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    type?: Prisma.EnumPoiTypeFieldUpdateOperationsInput | $Enums.PoiType;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    zone?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    lat?: Prisma.FloatFieldUpdateOperationsInput | number;
    lng?: Prisma.FloatFieldUpdateOperationsInput | number;
    tags?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    park?: Prisma.ParkUpdateOneRequiredWithoutPoisNestedInput;
    live?: Prisma.PoiLiveUpdateManyWithoutPoiNestedInput;
    shows?: Prisma.ShowSessionUpdateManyWithoutPoiNestedInput;
};
export type PoiUncheckedUpdateWithoutEventsInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    parkId?: Prisma.StringFieldUpdateOperationsInput | string;
    type?: Prisma.EnumPoiTypeFieldUpdateOperationsInput | $Enums.PoiType;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    zone?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    lat?: Prisma.FloatFieldUpdateOperationsInput | number;
    lng?: Prisma.FloatFieldUpdateOperationsInput | number;
    tags?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    live?: Prisma.PoiLiveUncheckedUpdateManyWithoutPoiNestedInput;
    shows?: Prisma.ShowSessionUncheckedUpdateManyWithoutPoiNestedInput;
};
export type PoiCreateManyParkInput = {
    id?: string;
    type: $Enums.PoiType;
    name: string;
    zone?: string | null;
    lat: number;
    lng: number;
    tags?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type PoiUpdateWithoutParkInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    type?: Prisma.EnumPoiTypeFieldUpdateOperationsInput | $Enums.PoiType;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    zone?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    lat?: Prisma.FloatFieldUpdateOperationsInput | number;
    lng?: Prisma.FloatFieldUpdateOperationsInput | number;
    tags?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    live?: Prisma.PoiLiveUpdateManyWithoutPoiNestedInput;
    shows?: Prisma.ShowSessionUpdateManyWithoutPoiNestedInput;
    events?: Prisma.ProgressEventUpdateManyWithoutPoiNestedInput;
};
export type PoiUncheckedUpdateWithoutParkInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    type?: Prisma.EnumPoiTypeFieldUpdateOperationsInput | $Enums.PoiType;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    zone?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    lat?: Prisma.FloatFieldUpdateOperationsInput | number;
    lng?: Prisma.FloatFieldUpdateOperationsInput | number;
    tags?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    live?: Prisma.PoiLiveUncheckedUpdateManyWithoutPoiNestedInput;
    shows?: Prisma.ShowSessionUncheckedUpdateManyWithoutPoiNestedInput;
    events?: Prisma.ProgressEventUncheckedUpdateManyWithoutPoiNestedInput;
};
export type PoiUncheckedUpdateManyWithoutParkInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    type?: Prisma.EnumPoiTypeFieldUpdateOperationsInput | $Enums.PoiType;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    zone?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    lat?: Prisma.FloatFieldUpdateOperationsInput | number;
    lng?: Prisma.FloatFieldUpdateOperationsInput | number;
    tags?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type PoiCountOutputType = {
    live: number;
    shows: number;
    events: number;
};
export type PoiCountOutputTypeSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    live?: boolean | PoiCountOutputTypeCountLiveArgs;
    shows?: boolean | PoiCountOutputTypeCountShowsArgs;
    events?: boolean | PoiCountOutputTypeCountEventsArgs;
};
export type PoiCountOutputTypeDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.PoiCountOutputTypeSelect<ExtArgs> | null;
};
export type PoiCountOutputTypeCountLiveArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.PoiLiveWhereInput;
};
export type PoiCountOutputTypeCountShowsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.ShowSessionWhereInput;
};
export type PoiCountOutputTypeCountEventsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.ProgressEventWhereInput;
};
export type PoiSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    parkId?: boolean;
    type?: boolean;
    name?: boolean;
    zone?: boolean;
    lat?: boolean;
    lng?: boolean;
    tags?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
    park?: boolean | Prisma.ParkDefaultArgs<ExtArgs>;
    live?: boolean | Prisma.Poi$liveArgs<ExtArgs>;
    shows?: boolean | Prisma.Poi$showsArgs<ExtArgs>;
    events?: boolean | Prisma.Poi$eventsArgs<ExtArgs>;
    _count?: boolean | Prisma.PoiCountOutputTypeDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["poi"]>;
export type PoiSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    parkId?: boolean;
    type?: boolean;
    name?: boolean;
    zone?: boolean;
    lat?: boolean;
    lng?: boolean;
    tags?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
    park?: boolean | Prisma.ParkDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["poi"]>;
export type PoiSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    parkId?: boolean;
    type?: boolean;
    name?: boolean;
    zone?: boolean;
    lat?: boolean;
    lng?: boolean;
    tags?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
    park?: boolean | Prisma.ParkDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["poi"]>;
export type PoiSelectScalar = {
    id?: boolean;
    parkId?: boolean;
    type?: boolean;
    name?: boolean;
    zone?: boolean;
    lat?: boolean;
    lng?: boolean;
    tags?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
};
export type PoiOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "parkId" | "type" | "name" | "zone" | "lat" | "lng" | "tags" | "createdAt" | "updatedAt", ExtArgs["result"]["poi"]>;
export type PoiInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    park?: boolean | Prisma.ParkDefaultArgs<ExtArgs>;
    live?: boolean | Prisma.Poi$liveArgs<ExtArgs>;
    shows?: boolean | Prisma.Poi$showsArgs<ExtArgs>;
    events?: boolean | Prisma.Poi$eventsArgs<ExtArgs>;
    _count?: boolean | Prisma.PoiCountOutputTypeDefaultArgs<ExtArgs>;
};
export type PoiIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    park?: boolean | Prisma.ParkDefaultArgs<ExtArgs>;
};
export type PoiIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    park?: boolean | Prisma.ParkDefaultArgs<ExtArgs>;
};
export type $PoiPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "Poi";
    objects: {
        park: Prisma.$ParkPayload<ExtArgs>;
        live: Prisma.$PoiLivePayload<ExtArgs>[];
        shows: Prisma.$ShowSessionPayload<ExtArgs>[];
        events: Prisma.$ProgressEventPayload<ExtArgs>[];
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: string;
        parkId: string;
        type: $Enums.PoiType;
        name: string;
        zone: string | null;
        lat: number;
        lng: number;
        tags: runtime.JsonValue | null;
        createdAt: Date;
        updatedAt: Date;
    }, ExtArgs["result"]["poi"]>;
    composites: {};
};
export type PoiGetPayload<S extends boolean | null | undefined | PoiDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$PoiPayload, S>;
export type PoiCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<PoiFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: PoiCountAggregateInputType | true;
};
export interface PoiDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['Poi'];
        meta: {
            name: 'Poi';
        };
    };
    findUnique<T extends PoiFindUniqueArgs>(args: Prisma.SelectSubset<T, PoiFindUniqueArgs<ExtArgs>>): Prisma.Prisma__PoiClient<runtime.Types.Result.GetResult<Prisma.$PoiPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends PoiFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, PoiFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__PoiClient<runtime.Types.Result.GetResult<Prisma.$PoiPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends PoiFindFirstArgs>(args?: Prisma.SelectSubset<T, PoiFindFirstArgs<ExtArgs>>): Prisma.Prisma__PoiClient<runtime.Types.Result.GetResult<Prisma.$PoiPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends PoiFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, PoiFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__PoiClient<runtime.Types.Result.GetResult<Prisma.$PoiPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends PoiFindManyArgs>(args?: Prisma.SelectSubset<T, PoiFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$PoiPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends PoiCreateArgs>(args: Prisma.SelectSubset<T, PoiCreateArgs<ExtArgs>>): Prisma.Prisma__PoiClient<runtime.Types.Result.GetResult<Prisma.$PoiPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends PoiCreateManyArgs>(args?: Prisma.SelectSubset<T, PoiCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    createManyAndReturn<T extends PoiCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, PoiCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$PoiPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    delete<T extends PoiDeleteArgs>(args: Prisma.SelectSubset<T, PoiDeleteArgs<ExtArgs>>): Prisma.Prisma__PoiClient<runtime.Types.Result.GetResult<Prisma.$PoiPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends PoiUpdateArgs>(args: Prisma.SelectSubset<T, PoiUpdateArgs<ExtArgs>>): Prisma.Prisma__PoiClient<runtime.Types.Result.GetResult<Prisma.$PoiPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends PoiDeleteManyArgs>(args?: Prisma.SelectSubset<T, PoiDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends PoiUpdateManyArgs>(args: Prisma.SelectSubset<T, PoiUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateManyAndReturn<T extends PoiUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, PoiUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$PoiPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    upsert<T extends PoiUpsertArgs>(args: Prisma.SelectSubset<T, PoiUpsertArgs<ExtArgs>>): Prisma.Prisma__PoiClient<runtime.Types.Result.GetResult<Prisma.$PoiPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends PoiCountArgs>(args?: Prisma.Subset<T, PoiCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], PoiCountAggregateOutputType> : number>;
    aggregate<T extends PoiAggregateArgs>(args: Prisma.Subset<T, PoiAggregateArgs>): Prisma.PrismaPromise<GetPoiAggregateType<T>>;
    groupBy<T extends PoiGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: PoiGroupByArgs['orderBy'];
    } : {
        orderBy?: PoiGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, PoiGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPoiGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: PoiFieldRefs;
}
export interface Prisma__PoiClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    park<T extends Prisma.ParkDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.ParkDefaultArgs<ExtArgs>>): Prisma.Prisma__ParkClient<runtime.Types.Result.GetResult<Prisma.$ParkPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    live<T extends Prisma.Poi$liveArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.Poi$liveArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$PoiLivePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    shows<T extends Prisma.Poi$showsArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.Poi$showsArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$ShowSessionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    events<T extends Prisma.Poi$eventsArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.Poi$eventsArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$ProgressEventPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface PoiFieldRefs {
    readonly id: Prisma.FieldRef<"Poi", 'String'>;
    readonly parkId: Prisma.FieldRef<"Poi", 'String'>;
    readonly type: Prisma.FieldRef<"Poi", 'PoiType'>;
    readonly name: Prisma.FieldRef<"Poi", 'String'>;
    readonly zone: Prisma.FieldRef<"Poi", 'String'>;
    readonly lat: Prisma.FieldRef<"Poi", 'Float'>;
    readonly lng: Prisma.FieldRef<"Poi", 'Float'>;
    readonly tags: Prisma.FieldRef<"Poi", 'Json'>;
    readonly createdAt: Prisma.FieldRef<"Poi", 'DateTime'>;
    readonly updatedAt: Prisma.FieldRef<"Poi", 'DateTime'>;
}
export type PoiFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.PoiSelect<ExtArgs> | null;
    omit?: Prisma.PoiOmit<ExtArgs> | null;
    include?: Prisma.PoiInclude<ExtArgs> | null;
    where: Prisma.PoiWhereUniqueInput;
};
export type PoiFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.PoiSelect<ExtArgs> | null;
    omit?: Prisma.PoiOmit<ExtArgs> | null;
    include?: Prisma.PoiInclude<ExtArgs> | null;
    where: Prisma.PoiWhereUniqueInput;
};
export type PoiFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type PoiFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type PoiFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type PoiCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.PoiSelect<ExtArgs> | null;
    omit?: Prisma.PoiOmit<ExtArgs> | null;
    include?: Prisma.PoiInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.PoiCreateInput, Prisma.PoiUncheckedCreateInput>;
};
export type PoiCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.PoiCreateManyInput | Prisma.PoiCreateManyInput[];
};
export type PoiCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.PoiSelectCreateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.PoiOmit<ExtArgs> | null;
    data: Prisma.PoiCreateManyInput | Prisma.PoiCreateManyInput[];
    include?: Prisma.PoiIncludeCreateManyAndReturn<ExtArgs> | null;
};
export type PoiUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.PoiSelect<ExtArgs> | null;
    omit?: Prisma.PoiOmit<ExtArgs> | null;
    include?: Prisma.PoiInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.PoiUpdateInput, Prisma.PoiUncheckedUpdateInput>;
    where: Prisma.PoiWhereUniqueInput;
};
export type PoiUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.PoiUpdateManyMutationInput, Prisma.PoiUncheckedUpdateManyInput>;
    where?: Prisma.PoiWhereInput;
    limit?: number;
};
export type PoiUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.PoiSelectUpdateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.PoiOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.PoiUpdateManyMutationInput, Prisma.PoiUncheckedUpdateManyInput>;
    where?: Prisma.PoiWhereInput;
    limit?: number;
    include?: Prisma.PoiIncludeUpdateManyAndReturn<ExtArgs> | null;
};
export type PoiUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.PoiSelect<ExtArgs> | null;
    omit?: Prisma.PoiOmit<ExtArgs> | null;
    include?: Prisma.PoiInclude<ExtArgs> | null;
    where: Prisma.PoiWhereUniqueInput;
    create: Prisma.XOR<Prisma.PoiCreateInput, Prisma.PoiUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.PoiUpdateInput, Prisma.PoiUncheckedUpdateInput>;
};
export type PoiDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.PoiSelect<ExtArgs> | null;
    omit?: Prisma.PoiOmit<ExtArgs> | null;
    include?: Prisma.PoiInclude<ExtArgs> | null;
    where: Prisma.PoiWhereUniqueInput;
};
export type PoiDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.PoiWhereInput;
    limit?: number;
};
export type Poi$liveArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type Poi$showsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type Poi$eventsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type PoiDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.PoiSelect<ExtArgs> | null;
    omit?: Prisma.PoiOmit<ExtArgs> | null;
    include?: Prisma.PoiInclude<ExtArgs> | null;
};
