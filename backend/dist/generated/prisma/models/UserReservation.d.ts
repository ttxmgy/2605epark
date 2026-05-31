import type * as runtime from "@prisma/client/runtime/client";
import type * as $Enums from "../enums.js";
import type * as Prisma from "../internal/prismaNamespace.js";
export type UserReservationModel = runtime.Types.Result.DefaultSelection<Prisma.$UserReservationPayload>;
export type AggregateUserReservation = {
    _count: UserReservationCountAggregateOutputType | null;
    _avg: UserReservationAvgAggregateOutputType | null;
    _sum: UserReservationSumAggregateOutputType | null;
    _min: UserReservationMinAggregateOutputType | null;
    _max: UserReservationMaxAggregateOutputType | null;
};
export type UserReservationAvgAggregateOutputType = {
    guestCount: number | null;
};
export type UserReservationSumAggregateOutputType = {
    guestCount: number | null;
};
export type UserReservationMinAggregateOutputType = {
    id: string | null;
    userId: string | null;
    category: string | null;
    visitDate: string | null;
    timeWindow: string | null;
    status: $Enums.ReservationStatus | null;
    guestName: string | null;
    guestCount: number | null;
    voucherHash: string | null;
    voucherLast4: string | null;
    sourceImportId: string | null;
    createdAt: Date | null;
    updatedAt: Date | null;
};
export type UserReservationMaxAggregateOutputType = {
    id: string | null;
    userId: string | null;
    category: string | null;
    visitDate: string | null;
    timeWindow: string | null;
    status: $Enums.ReservationStatus | null;
    guestName: string | null;
    guestCount: number | null;
    voucherHash: string | null;
    voucherLast4: string | null;
    sourceImportId: string | null;
    createdAt: Date | null;
    updatedAt: Date | null;
};
export type UserReservationCountAggregateOutputType = {
    id: number;
    userId: number;
    category: number;
    visitDate: number;
    timeWindow: number;
    status: number;
    guestName: number;
    guestCount: number;
    voucherHash: number;
    voucherLast4: number;
    sourceImportId: number;
    createdAt: number;
    updatedAt: number;
    _all: number;
};
export type UserReservationAvgAggregateInputType = {
    guestCount?: true;
};
export type UserReservationSumAggregateInputType = {
    guestCount?: true;
};
export type UserReservationMinAggregateInputType = {
    id?: true;
    userId?: true;
    category?: true;
    visitDate?: true;
    timeWindow?: true;
    status?: true;
    guestName?: true;
    guestCount?: true;
    voucherHash?: true;
    voucherLast4?: true;
    sourceImportId?: true;
    createdAt?: true;
    updatedAt?: true;
};
export type UserReservationMaxAggregateInputType = {
    id?: true;
    userId?: true;
    category?: true;
    visitDate?: true;
    timeWindow?: true;
    status?: true;
    guestName?: true;
    guestCount?: true;
    voucherHash?: true;
    voucherLast4?: true;
    sourceImportId?: true;
    createdAt?: true;
    updatedAt?: true;
};
export type UserReservationCountAggregateInputType = {
    id?: true;
    userId?: true;
    category?: true;
    visitDate?: true;
    timeWindow?: true;
    status?: true;
    guestName?: true;
    guestCount?: true;
    voucherHash?: true;
    voucherLast4?: true;
    sourceImportId?: true;
    createdAt?: true;
    updatedAt?: true;
    _all?: true;
};
export type UserReservationAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.UserReservationWhereInput;
    orderBy?: Prisma.UserReservationOrderByWithRelationInput | Prisma.UserReservationOrderByWithRelationInput[];
    cursor?: Prisma.UserReservationWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | UserReservationCountAggregateInputType;
    _avg?: UserReservationAvgAggregateInputType;
    _sum?: UserReservationSumAggregateInputType;
    _min?: UserReservationMinAggregateInputType;
    _max?: UserReservationMaxAggregateInputType;
};
export type GetUserReservationAggregateType<T extends UserReservationAggregateArgs> = {
    [P in keyof T & keyof AggregateUserReservation]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateUserReservation[P]> : Prisma.GetScalarType<T[P], AggregateUserReservation[P]>;
};
export type UserReservationGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.UserReservationWhereInput;
    orderBy?: Prisma.UserReservationOrderByWithAggregationInput | Prisma.UserReservationOrderByWithAggregationInput[];
    by: Prisma.UserReservationScalarFieldEnum[] | Prisma.UserReservationScalarFieldEnum;
    having?: Prisma.UserReservationScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: UserReservationCountAggregateInputType | true;
    _avg?: UserReservationAvgAggregateInputType;
    _sum?: UserReservationSumAggregateInputType;
    _min?: UserReservationMinAggregateInputType;
    _max?: UserReservationMaxAggregateInputType;
};
export type UserReservationGroupByOutputType = {
    id: string;
    userId: string;
    category: string | null;
    visitDate: string;
    timeWindow: string | null;
    status: $Enums.ReservationStatus;
    guestName: string | null;
    guestCount: number | null;
    voucherHash: string | null;
    voucherLast4: string | null;
    sourceImportId: string | null;
    createdAt: Date;
    updatedAt: Date;
    _count: UserReservationCountAggregateOutputType | null;
    _avg: UserReservationAvgAggregateOutputType | null;
    _sum: UserReservationSumAggregateOutputType | null;
    _min: UserReservationMinAggregateOutputType | null;
    _max: UserReservationMaxAggregateOutputType | null;
};
export type GetUserReservationGroupByPayload<T extends UserReservationGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<UserReservationGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof UserReservationGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], UserReservationGroupByOutputType[P]> : Prisma.GetScalarType<T[P], UserReservationGroupByOutputType[P]>;
}>>;
export type UserReservationWhereInput = {
    AND?: Prisma.UserReservationWhereInput | Prisma.UserReservationWhereInput[];
    OR?: Prisma.UserReservationWhereInput[];
    NOT?: Prisma.UserReservationWhereInput | Prisma.UserReservationWhereInput[];
    id?: Prisma.StringFilter<"UserReservation"> | string;
    userId?: Prisma.StringFilter<"UserReservation"> | string;
    category?: Prisma.StringNullableFilter<"UserReservation"> | string | null;
    visitDate?: Prisma.StringFilter<"UserReservation"> | string;
    timeWindow?: Prisma.StringNullableFilter<"UserReservation"> | string | null;
    status?: Prisma.EnumReservationStatusFilter<"UserReservation"> | $Enums.ReservationStatus;
    guestName?: Prisma.StringNullableFilter<"UserReservation"> | string | null;
    guestCount?: Prisma.IntNullableFilter<"UserReservation"> | number | null;
    voucherHash?: Prisma.StringNullableFilter<"UserReservation"> | string | null;
    voucherLast4?: Prisma.StringNullableFilter<"UserReservation"> | string | null;
    sourceImportId?: Prisma.StringNullableFilter<"UserReservation"> | string | null;
    createdAt?: Prisma.DateTimeFilter<"UserReservation"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"UserReservation"> | Date | string;
    user?: Prisma.XOR<Prisma.UserScalarRelationFilter, Prisma.UserWhereInput>;
};
export type UserReservationOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    userId?: Prisma.SortOrder;
    category?: Prisma.SortOrderInput | Prisma.SortOrder;
    visitDate?: Prisma.SortOrder;
    timeWindow?: Prisma.SortOrderInput | Prisma.SortOrder;
    status?: Prisma.SortOrder;
    guestName?: Prisma.SortOrderInput | Prisma.SortOrder;
    guestCount?: Prisma.SortOrderInput | Prisma.SortOrder;
    voucherHash?: Prisma.SortOrderInput | Prisma.SortOrder;
    voucherLast4?: Prisma.SortOrderInput | Prisma.SortOrder;
    sourceImportId?: Prisma.SortOrderInput | Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
    user?: Prisma.UserOrderByWithRelationInput;
};
export type UserReservationWhereUniqueInput = Prisma.AtLeast<{
    id?: string;
    voucherHash?: string;
    AND?: Prisma.UserReservationWhereInput | Prisma.UserReservationWhereInput[];
    OR?: Prisma.UserReservationWhereInput[];
    NOT?: Prisma.UserReservationWhereInput | Prisma.UserReservationWhereInput[];
    userId?: Prisma.StringFilter<"UserReservation"> | string;
    category?: Prisma.StringNullableFilter<"UserReservation"> | string | null;
    visitDate?: Prisma.StringFilter<"UserReservation"> | string;
    timeWindow?: Prisma.StringNullableFilter<"UserReservation"> | string | null;
    status?: Prisma.EnumReservationStatusFilter<"UserReservation"> | $Enums.ReservationStatus;
    guestName?: Prisma.StringNullableFilter<"UserReservation"> | string | null;
    guestCount?: Prisma.IntNullableFilter<"UserReservation"> | number | null;
    voucherLast4?: Prisma.StringNullableFilter<"UserReservation"> | string | null;
    sourceImportId?: Prisma.StringNullableFilter<"UserReservation"> | string | null;
    createdAt?: Prisma.DateTimeFilter<"UserReservation"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"UserReservation"> | Date | string;
    user?: Prisma.XOR<Prisma.UserScalarRelationFilter, Prisma.UserWhereInput>;
}, "id" | "voucherHash">;
export type UserReservationOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    userId?: Prisma.SortOrder;
    category?: Prisma.SortOrderInput | Prisma.SortOrder;
    visitDate?: Prisma.SortOrder;
    timeWindow?: Prisma.SortOrderInput | Prisma.SortOrder;
    status?: Prisma.SortOrder;
    guestName?: Prisma.SortOrderInput | Prisma.SortOrder;
    guestCount?: Prisma.SortOrderInput | Prisma.SortOrder;
    voucherHash?: Prisma.SortOrderInput | Prisma.SortOrder;
    voucherLast4?: Prisma.SortOrderInput | Prisma.SortOrder;
    sourceImportId?: Prisma.SortOrderInput | Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
    _count?: Prisma.UserReservationCountOrderByAggregateInput;
    _avg?: Prisma.UserReservationAvgOrderByAggregateInput;
    _max?: Prisma.UserReservationMaxOrderByAggregateInput;
    _min?: Prisma.UserReservationMinOrderByAggregateInput;
    _sum?: Prisma.UserReservationSumOrderByAggregateInput;
};
export type UserReservationScalarWhereWithAggregatesInput = {
    AND?: Prisma.UserReservationScalarWhereWithAggregatesInput | Prisma.UserReservationScalarWhereWithAggregatesInput[];
    OR?: Prisma.UserReservationScalarWhereWithAggregatesInput[];
    NOT?: Prisma.UserReservationScalarWhereWithAggregatesInput | Prisma.UserReservationScalarWhereWithAggregatesInput[];
    id?: Prisma.StringWithAggregatesFilter<"UserReservation"> | string;
    userId?: Prisma.StringWithAggregatesFilter<"UserReservation"> | string;
    category?: Prisma.StringNullableWithAggregatesFilter<"UserReservation"> | string | null;
    visitDate?: Prisma.StringWithAggregatesFilter<"UserReservation"> | string;
    timeWindow?: Prisma.StringNullableWithAggregatesFilter<"UserReservation"> | string | null;
    status?: Prisma.EnumReservationStatusWithAggregatesFilter<"UserReservation"> | $Enums.ReservationStatus;
    guestName?: Prisma.StringNullableWithAggregatesFilter<"UserReservation"> | string | null;
    guestCount?: Prisma.IntNullableWithAggregatesFilter<"UserReservation"> | number | null;
    voucherHash?: Prisma.StringNullableWithAggregatesFilter<"UserReservation"> | string | null;
    voucherLast4?: Prisma.StringNullableWithAggregatesFilter<"UserReservation"> | string | null;
    sourceImportId?: Prisma.StringNullableWithAggregatesFilter<"UserReservation"> | string | null;
    createdAt?: Prisma.DateTimeWithAggregatesFilter<"UserReservation"> | Date | string;
    updatedAt?: Prisma.DateTimeWithAggregatesFilter<"UserReservation"> | Date | string;
};
export type UserReservationCreateInput = {
    id?: string;
    category?: string | null;
    visitDate: string;
    timeWindow?: string | null;
    status?: $Enums.ReservationStatus;
    guestName?: string | null;
    guestCount?: number | null;
    voucherHash?: string | null;
    voucherLast4?: string | null;
    sourceImportId?: string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    user: Prisma.UserCreateNestedOneWithoutReservationsInput;
};
export type UserReservationUncheckedCreateInput = {
    id?: string;
    userId: string;
    category?: string | null;
    visitDate: string;
    timeWindow?: string | null;
    status?: $Enums.ReservationStatus;
    guestName?: string | null;
    guestCount?: number | null;
    voucherHash?: string | null;
    voucherLast4?: string | null;
    sourceImportId?: string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type UserReservationUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    category?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    visitDate?: Prisma.StringFieldUpdateOperationsInput | string;
    timeWindow?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    status?: Prisma.EnumReservationStatusFieldUpdateOperationsInput | $Enums.ReservationStatus;
    guestName?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    guestCount?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    voucherHash?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    voucherLast4?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    sourceImportId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    user?: Prisma.UserUpdateOneRequiredWithoutReservationsNestedInput;
};
export type UserReservationUncheckedUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    userId?: Prisma.StringFieldUpdateOperationsInput | string;
    category?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    visitDate?: Prisma.StringFieldUpdateOperationsInput | string;
    timeWindow?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    status?: Prisma.EnumReservationStatusFieldUpdateOperationsInput | $Enums.ReservationStatus;
    guestName?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    guestCount?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    voucherHash?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    voucherLast4?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    sourceImportId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type UserReservationCreateManyInput = {
    id?: string;
    userId: string;
    category?: string | null;
    visitDate: string;
    timeWindow?: string | null;
    status?: $Enums.ReservationStatus;
    guestName?: string | null;
    guestCount?: number | null;
    voucherHash?: string | null;
    voucherLast4?: string | null;
    sourceImportId?: string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type UserReservationUpdateManyMutationInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    category?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    visitDate?: Prisma.StringFieldUpdateOperationsInput | string;
    timeWindow?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    status?: Prisma.EnumReservationStatusFieldUpdateOperationsInput | $Enums.ReservationStatus;
    guestName?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    guestCount?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    voucherHash?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    voucherLast4?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    sourceImportId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type UserReservationUncheckedUpdateManyInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    userId?: Prisma.StringFieldUpdateOperationsInput | string;
    category?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    visitDate?: Prisma.StringFieldUpdateOperationsInput | string;
    timeWindow?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    status?: Prisma.EnumReservationStatusFieldUpdateOperationsInput | $Enums.ReservationStatus;
    guestName?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    guestCount?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    voucherHash?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    voucherLast4?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    sourceImportId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type UserReservationListRelationFilter = {
    every?: Prisma.UserReservationWhereInput;
    some?: Prisma.UserReservationWhereInput;
    none?: Prisma.UserReservationWhereInput;
};
export type UserReservationOrderByRelationAggregateInput = {
    _count?: Prisma.SortOrder;
};
export type UserReservationCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    userId?: Prisma.SortOrder;
    category?: Prisma.SortOrder;
    visitDate?: Prisma.SortOrder;
    timeWindow?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    guestName?: Prisma.SortOrder;
    guestCount?: Prisma.SortOrder;
    voucherHash?: Prisma.SortOrder;
    voucherLast4?: Prisma.SortOrder;
    sourceImportId?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type UserReservationAvgOrderByAggregateInput = {
    guestCount?: Prisma.SortOrder;
};
export type UserReservationMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    userId?: Prisma.SortOrder;
    category?: Prisma.SortOrder;
    visitDate?: Prisma.SortOrder;
    timeWindow?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    guestName?: Prisma.SortOrder;
    guestCount?: Prisma.SortOrder;
    voucherHash?: Prisma.SortOrder;
    voucherLast4?: Prisma.SortOrder;
    sourceImportId?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type UserReservationMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    userId?: Prisma.SortOrder;
    category?: Prisma.SortOrder;
    visitDate?: Prisma.SortOrder;
    timeWindow?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    guestName?: Prisma.SortOrder;
    guestCount?: Prisma.SortOrder;
    voucherHash?: Prisma.SortOrder;
    voucherLast4?: Prisma.SortOrder;
    sourceImportId?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type UserReservationSumOrderByAggregateInput = {
    guestCount?: Prisma.SortOrder;
};
export type UserReservationCreateNestedManyWithoutUserInput = {
    create?: Prisma.XOR<Prisma.UserReservationCreateWithoutUserInput, Prisma.UserReservationUncheckedCreateWithoutUserInput> | Prisma.UserReservationCreateWithoutUserInput[] | Prisma.UserReservationUncheckedCreateWithoutUserInput[];
    connectOrCreate?: Prisma.UserReservationCreateOrConnectWithoutUserInput | Prisma.UserReservationCreateOrConnectWithoutUserInput[];
    createMany?: Prisma.UserReservationCreateManyUserInputEnvelope;
    connect?: Prisma.UserReservationWhereUniqueInput | Prisma.UserReservationWhereUniqueInput[];
};
export type UserReservationUncheckedCreateNestedManyWithoutUserInput = {
    create?: Prisma.XOR<Prisma.UserReservationCreateWithoutUserInput, Prisma.UserReservationUncheckedCreateWithoutUserInput> | Prisma.UserReservationCreateWithoutUserInput[] | Prisma.UserReservationUncheckedCreateWithoutUserInput[];
    connectOrCreate?: Prisma.UserReservationCreateOrConnectWithoutUserInput | Prisma.UserReservationCreateOrConnectWithoutUserInput[];
    createMany?: Prisma.UserReservationCreateManyUserInputEnvelope;
    connect?: Prisma.UserReservationWhereUniqueInput | Prisma.UserReservationWhereUniqueInput[];
};
export type UserReservationUpdateManyWithoutUserNestedInput = {
    create?: Prisma.XOR<Prisma.UserReservationCreateWithoutUserInput, Prisma.UserReservationUncheckedCreateWithoutUserInput> | Prisma.UserReservationCreateWithoutUserInput[] | Prisma.UserReservationUncheckedCreateWithoutUserInput[];
    connectOrCreate?: Prisma.UserReservationCreateOrConnectWithoutUserInput | Prisma.UserReservationCreateOrConnectWithoutUserInput[];
    upsert?: Prisma.UserReservationUpsertWithWhereUniqueWithoutUserInput | Prisma.UserReservationUpsertWithWhereUniqueWithoutUserInput[];
    createMany?: Prisma.UserReservationCreateManyUserInputEnvelope;
    set?: Prisma.UserReservationWhereUniqueInput | Prisma.UserReservationWhereUniqueInput[];
    disconnect?: Prisma.UserReservationWhereUniqueInput | Prisma.UserReservationWhereUniqueInput[];
    delete?: Prisma.UserReservationWhereUniqueInput | Prisma.UserReservationWhereUniqueInput[];
    connect?: Prisma.UserReservationWhereUniqueInput | Prisma.UserReservationWhereUniqueInput[];
    update?: Prisma.UserReservationUpdateWithWhereUniqueWithoutUserInput | Prisma.UserReservationUpdateWithWhereUniqueWithoutUserInput[];
    updateMany?: Prisma.UserReservationUpdateManyWithWhereWithoutUserInput | Prisma.UserReservationUpdateManyWithWhereWithoutUserInput[];
    deleteMany?: Prisma.UserReservationScalarWhereInput | Prisma.UserReservationScalarWhereInput[];
};
export type UserReservationUncheckedUpdateManyWithoutUserNestedInput = {
    create?: Prisma.XOR<Prisma.UserReservationCreateWithoutUserInput, Prisma.UserReservationUncheckedCreateWithoutUserInput> | Prisma.UserReservationCreateWithoutUserInput[] | Prisma.UserReservationUncheckedCreateWithoutUserInput[];
    connectOrCreate?: Prisma.UserReservationCreateOrConnectWithoutUserInput | Prisma.UserReservationCreateOrConnectWithoutUserInput[];
    upsert?: Prisma.UserReservationUpsertWithWhereUniqueWithoutUserInput | Prisma.UserReservationUpsertWithWhereUniqueWithoutUserInput[];
    createMany?: Prisma.UserReservationCreateManyUserInputEnvelope;
    set?: Prisma.UserReservationWhereUniqueInput | Prisma.UserReservationWhereUniqueInput[];
    disconnect?: Prisma.UserReservationWhereUniqueInput | Prisma.UserReservationWhereUniqueInput[];
    delete?: Prisma.UserReservationWhereUniqueInput | Prisma.UserReservationWhereUniqueInput[];
    connect?: Prisma.UserReservationWhereUniqueInput | Prisma.UserReservationWhereUniqueInput[];
    update?: Prisma.UserReservationUpdateWithWhereUniqueWithoutUserInput | Prisma.UserReservationUpdateWithWhereUniqueWithoutUserInput[];
    updateMany?: Prisma.UserReservationUpdateManyWithWhereWithoutUserInput | Prisma.UserReservationUpdateManyWithWhereWithoutUserInput[];
    deleteMany?: Prisma.UserReservationScalarWhereInput | Prisma.UserReservationScalarWhereInput[];
};
export type EnumReservationStatusFieldUpdateOperationsInput = {
    set?: $Enums.ReservationStatus;
};
export type UserReservationCreateWithoutUserInput = {
    id?: string;
    category?: string | null;
    visitDate: string;
    timeWindow?: string | null;
    status?: $Enums.ReservationStatus;
    guestName?: string | null;
    guestCount?: number | null;
    voucherHash?: string | null;
    voucherLast4?: string | null;
    sourceImportId?: string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type UserReservationUncheckedCreateWithoutUserInput = {
    id?: string;
    category?: string | null;
    visitDate: string;
    timeWindow?: string | null;
    status?: $Enums.ReservationStatus;
    guestName?: string | null;
    guestCount?: number | null;
    voucherHash?: string | null;
    voucherLast4?: string | null;
    sourceImportId?: string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type UserReservationCreateOrConnectWithoutUserInput = {
    where: Prisma.UserReservationWhereUniqueInput;
    create: Prisma.XOR<Prisma.UserReservationCreateWithoutUserInput, Prisma.UserReservationUncheckedCreateWithoutUserInput>;
};
export type UserReservationCreateManyUserInputEnvelope = {
    data: Prisma.UserReservationCreateManyUserInput | Prisma.UserReservationCreateManyUserInput[];
};
export type UserReservationUpsertWithWhereUniqueWithoutUserInput = {
    where: Prisma.UserReservationWhereUniqueInput;
    update: Prisma.XOR<Prisma.UserReservationUpdateWithoutUserInput, Prisma.UserReservationUncheckedUpdateWithoutUserInput>;
    create: Prisma.XOR<Prisma.UserReservationCreateWithoutUserInput, Prisma.UserReservationUncheckedCreateWithoutUserInput>;
};
export type UserReservationUpdateWithWhereUniqueWithoutUserInput = {
    where: Prisma.UserReservationWhereUniqueInput;
    data: Prisma.XOR<Prisma.UserReservationUpdateWithoutUserInput, Prisma.UserReservationUncheckedUpdateWithoutUserInput>;
};
export type UserReservationUpdateManyWithWhereWithoutUserInput = {
    where: Prisma.UserReservationScalarWhereInput;
    data: Prisma.XOR<Prisma.UserReservationUpdateManyMutationInput, Prisma.UserReservationUncheckedUpdateManyWithoutUserInput>;
};
export type UserReservationScalarWhereInput = {
    AND?: Prisma.UserReservationScalarWhereInput | Prisma.UserReservationScalarWhereInput[];
    OR?: Prisma.UserReservationScalarWhereInput[];
    NOT?: Prisma.UserReservationScalarWhereInput | Prisma.UserReservationScalarWhereInput[];
    id?: Prisma.StringFilter<"UserReservation"> | string;
    userId?: Prisma.StringFilter<"UserReservation"> | string;
    category?: Prisma.StringNullableFilter<"UserReservation"> | string | null;
    visitDate?: Prisma.StringFilter<"UserReservation"> | string;
    timeWindow?: Prisma.StringNullableFilter<"UserReservation"> | string | null;
    status?: Prisma.EnumReservationStatusFilter<"UserReservation"> | $Enums.ReservationStatus;
    guestName?: Prisma.StringNullableFilter<"UserReservation"> | string | null;
    guestCount?: Prisma.IntNullableFilter<"UserReservation"> | number | null;
    voucherHash?: Prisma.StringNullableFilter<"UserReservation"> | string | null;
    voucherLast4?: Prisma.StringNullableFilter<"UserReservation"> | string | null;
    sourceImportId?: Prisma.StringNullableFilter<"UserReservation"> | string | null;
    createdAt?: Prisma.DateTimeFilter<"UserReservation"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"UserReservation"> | Date | string;
};
export type UserReservationCreateManyUserInput = {
    id?: string;
    category?: string | null;
    visitDate: string;
    timeWindow?: string | null;
    status?: $Enums.ReservationStatus;
    guestName?: string | null;
    guestCount?: number | null;
    voucherHash?: string | null;
    voucherLast4?: string | null;
    sourceImportId?: string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type UserReservationUpdateWithoutUserInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    category?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    visitDate?: Prisma.StringFieldUpdateOperationsInput | string;
    timeWindow?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    status?: Prisma.EnumReservationStatusFieldUpdateOperationsInput | $Enums.ReservationStatus;
    guestName?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    guestCount?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    voucherHash?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    voucherLast4?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    sourceImportId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type UserReservationUncheckedUpdateWithoutUserInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    category?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    visitDate?: Prisma.StringFieldUpdateOperationsInput | string;
    timeWindow?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    status?: Prisma.EnumReservationStatusFieldUpdateOperationsInput | $Enums.ReservationStatus;
    guestName?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    guestCount?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    voucherHash?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    voucherLast4?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    sourceImportId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type UserReservationUncheckedUpdateManyWithoutUserInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    category?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    visitDate?: Prisma.StringFieldUpdateOperationsInput | string;
    timeWindow?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    status?: Prisma.EnumReservationStatusFieldUpdateOperationsInput | $Enums.ReservationStatus;
    guestName?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    guestCount?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    voucherHash?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    voucherLast4?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    sourceImportId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type UserReservationSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    userId?: boolean;
    category?: boolean;
    visitDate?: boolean;
    timeWindow?: boolean;
    status?: boolean;
    guestName?: boolean;
    guestCount?: boolean;
    voucherHash?: boolean;
    voucherLast4?: boolean;
    sourceImportId?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
    user?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["userReservation"]>;
export type UserReservationSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    userId?: boolean;
    category?: boolean;
    visitDate?: boolean;
    timeWindow?: boolean;
    status?: boolean;
    guestName?: boolean;
    guestCount?: boolean;
    voucherHash?: boolean;
    voucherLast4?: boolean;
    sourceImportId?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
    user?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["userReservation"]>;
export type UserReservationSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    userId?: boolean;
    category?: boolean;
    visitDate?: boolean;
    timeWindow?: boolean;
    status?: boolean;
    guestName?: boolean;
    guestCount?: boolean;
    voucherHash?: boolean;
    voucherLast4?: boolean;
    sourceImportId?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
    user?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["userReservation"]>;
export type UserReservationSelectScalar = {
    id?: boolean;
    userId?: boolean;
    category?: boolean;
    visitDate?: boolean;
    timeWindow?: boolean;
    status?: boolean;
    guestName?: boolean;
    guestCount?: boolean;
    voucherHash?: boolean;
    voucherLast4?: boolean;
    sourceImportId?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
};
export type UserReservationOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "userId" | "category" | "visitDate" | "timeWindow" | "status" | "guestName" | "guestCount" | "voucherHash" | "voucherLast4" | "sourceImportId" | "createdAt" | "updatedAt", ExtArgs["result"]["userReservation"]>;
export type UserReservationInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    user?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
};
export type UserReservationIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    user?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
};
export type UserReservationIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    user?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
};
export type $UserReservationPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "UserReservation";
    objects: {
        user: Prisma.$UserPayload<ExtArgs>;
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: string;
        userId: string;
        category: string | null;
        visitDate: string;
        timeWindow: string | null;
        status: $Enums.ReservationStatus;
        guestName: string | null;
        guestCount: number | null;
        voucherHash: string | null;
        voucherLast4: string | null;
        sourceImportId: string | null;
        createdAt: Date;
        updatedAt: Date;
    }, ExtArgs["result"]["userReservation"]>;
    composites: {};
};
export type UserReservationGetPayload<S extends boolean | null | undefined | UserReservationDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$UserReservationPayload, S>;
export type UserReservationCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<UserReservationFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: UserReservationCountAggregateInputType | true;
};
export interface UserReservationDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['UserReservation'];
        meta: {
            name: 'UserReservation';
        };
    };
    findUnique<T extends UserReservationFindUniqueArgs>(args: Prisma.SelectSubset<T, UserReservationFindUniqueArgs<ExtArgs>>): Prisma.Prisma__UserReservationClient<runtime.Types.Result.GetResult<Prisma.$UserReservationPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends UserReservationFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, UserReservationFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__UserReservationClient<runtime.Types.Result.GetResult<Prisma.$UserReservationPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends UserReservationFindFirstArgs>(args?: Prisma.SelectSubset<T, UserReservationFindFirstArgs<ExtArgs>>): Prisma.Prisma__UserReservationClient<runtime.Types.Result.GetResult<Prisma.$UserReservationPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends UserReservationFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, UserReservationFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__UserReservationClient<runtime.Types.Result.GetResult<Prisma.$UserReservationPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends UserReservationFindManyArgs>(args?: Prisma.SelectSubset<T, UserReservationFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$UserReservationPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends UserReservationCreateArgs>(args: Prisma.SelectSubset<T, UserReservationCreateArgs<ExtArgs>>): Prisma.Prisma__UserReservationClient<runtime.Types.Result.GetResult<Prisma.$UserReservationPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends UserReservationCreateManyArgs>(args?: Prisma.SelectSubset<T, UserReservationCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    createManyAndReturn<T extends UserReservationCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, UserReservationCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$UserReservationPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    delete<T extends UserReservationDeleteArgs>(args: Prisma.SelectSubset<T, UserReservationDeleteArgs<ExtArgs>>): Prisma.Prisma__UserReservationClient<runtime.Types.Result.GetResult<Prisma.$UserReservationPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends UserReservationUpdateArgs>(args: Prisma.SelectSubset<T, UserReservationUpdateArgs<ExtArgs>>): Prisma.Prisma__UserReservationClient<runtime.Types.Result.GetResult<Prisma.$UserReservationPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends UserReservationDeleteManyArgs>(args?: Prisma.SelectSubset<T, UserReservationDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends UserReservationUpdateManyArgs>(args: Prisma.SelectSubset<T, UserReservationUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateManyAndReturn<T extends UserReservationUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, UserReservationUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$UserReservationPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    upsert<T extends UserReservationUpsertArgs>(args: Prisma.SelectSubset<T, UserReservationUpsertArgs<ExtArgs>>): Prisma.Prisma__UserReservationClient<runtime.Types.Result.GetResult<Prisma.$UserReservationPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends UserReservationCountArgs>(args?: Prisma.Subset<T, UserReservationCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], UserReservationCountAggregateOutputType> : number>;
    aggregate<T extends UserReservationAggregateArgs>(args: Prisma.Subset<T, UserReservationAggregateArgs>): Prisma.PrismaPromise<GetUserReservationAggregateType<T>>;
    groupBy<T extends UserReservationGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: UserReservationGroupByArgs['orderBy'];
    } : {
        orderBy?: UserReservationGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, UserReservationGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserReservationGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: UserReservationFieldRefs;
}
export interface Prisma__UserReservationClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    user<T extends Prisma.UserDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.UserDefaultArgs<ExtArgs>>): Prisma.Prisma__UserClient<runtime.Types.Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface UserReservationFieldRefs {
    readonly id: Prisma.FieldRef<"UserReservation", 'String'>;
    readonly userId: Prisma.FieldRef<"UserReservation", 'String'>;
    readonly category: Prisma.FieldRef<"UserReservation", 'String'>;
    readonly visitDate: Prisma.FieldRef<"UserReservation", 'String'>;
    readonly timeWindow: Prisma.FieldRef<"UserReservation", 'String'>;
    readonly status: Prisma.FieldRef<"UserReservation", 'ReservationStatus'>;
    readonly guestName: Prisma.FieldRef<"UserReservation", 'String'>;
    readonly guestCount: Prisma.FieldRef<"UserReservation", 'Int'>;
    readonly voucherHash: Prisma.FieldRef<"UserReservation", 'String'>;
    readonly voucherLast4: Prisma.FieldRef<"UserReservation", 'String'>;
    readonly sourceImportId: Prisma.FieldRef<"UserReservation", 'String'>;
    readonly createdAt: Prisma.FieldRef<"UserReservation", 'DateTime'>;
    readonly updatedAt: Prisma.FieldRef<"UserReservation", 'DateTime'>;
}
export type UserReservationFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.UserReservationSelect<ExtArgs> | null;
    omit?: Prisma.UserReservationOmit<ExtArgs> | null;
    include?: Prisma.UserReservationInclude<ExtArgs> | null;
    where: Prisma.UserReservationWhereUniqueInput;
};
export type UserReservationFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.UserReservationSelect<ExtArgs> | null;
    omit?: Prisma.UserReservationOmit<ExtArgs> | null;
    include?: Prisma.UserReservationInclude<ExtArgs> | null;
    where: Prisma.UserReservationWhereUniqueInput;
};
export type UserReservationFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.UserReservationSelect<ExtArgs> | null;
    omit?: Prisma.UserReservationOmit<ExtArgs> | null;
    include?: Prisma.UserReservationInclude<ExtArgs> | null;
    where?: Prisma.UserReservationWhereInput;
    orderBy?: Prisma.UserReservationOrderByWithRelationInput | Prisma.UserReservationOrderByWithRelationInput[];
    cursor?: Prisma.UserReservationWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.UserReservationScalarFieldEnum | Prisma.UserReservationScalarFieldEnum[];
};
export type UserReservationFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.UserReservationSelect<ExtArgs> | null;
    omit?: Prisma.UserReservationOmit<ExtArgs> | null;
    include?: Prisma.UserReservationInclude<ExtArgs> | null;
    where?: Prisma.UserReservationWhereInput;
    orderBy?: Prisma.UserReservationOrderByWithRelationInput | Prisma.UserReservationOrderByWithRelationInput[];
    cursor?: Prisma.UserReservationWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.UserReservationScalarFieldEnum | Prisma.UserReservationScalarFieldEnum[];
};
export type UserReservationFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.UserReservationSelect<ExtArgs> | null;
    omit?: Prisma.UserReservationOmit<ExtArgs> | null;
    include?: Prisma.UserReservationInclude<ExtArgs> | null;
    where?: Prisma.UserReservationWhereInput;
    orderBy?: Prisma.UserReservationOrderByWithRelationInput | Prisma.UserReservationOrderByWithRelationInput[];
    cursor?: Prisma.UserReservationWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.UserReservationScalarFieldEnum | Prisma.UserReservationScalarFieldEnum[];
};
export type UserReservationCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.UserReservationSelect<ExtArgs> | null;
    omit?: Prisma.UserReservationOmit<ExtArgs> | null;
    include?: Prisma.UserReservationInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.UserReservationCreateInput, Prisma.UserReservationUncheckedCreateInput>;
};
export type UserReservationCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.UserReservationCreateManyInput | Prisma.UserReservationCreateManyInput[];
};
export type UserReservationCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.UserReservationSelectCreateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.UserReservationOmit<ExtArgs> | null;
    data: Prisma.UserReservationCreateManyInput | Prisma.UserReservationCreateManyInput[];
    include?: Prisma.UserReservationIncludeCreateManyAndReturn<ExtArgs> | null;
};
export type UserReservationUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.UserReservationSelect<ExtArgs> | null;
    omit?: Prisma.UserReservationOmit<ExtArgs> | null;
    include?: Prisma.UserReservationInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.UserReservationUpdateInput, Prisma.UserReservationUncheckedUpdateInput>;
    where: Prisma.UserReservationWhereUniqueInput;
};
export type UserReservationUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.UserReservationUpdateManyMutationInput, Prisma.UserReservationUncheckedUpdateManyInput>;
    where?: Prisma.UserReservationWhereInput;
    limit?: number;
};
export type UserReservationUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.UserReservationSelectUpdateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.UserReservationOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.UserReservationUpdateManyMutationInput, Prisma.UserReservationUncheckedUpdateManyInput>;
    where?: Prisma.UserReservationWhereInput;
    limit?: number;
    include?: Prisma.UserReservationIncludeUpdateManyAndReturn<ExtArgs> | null;
};
export type UserReservationUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.UserReservationSelect<ExtArgs> | null;
    omit?: Prisma.UserReservationOmit<ExtArgs> | null;
    include?: Prisma.UserReservationInclude<ExtArgs> | null;
    where: Prisma.UserReservationWhereUniqueInput;
    create: Prisma.XOR<Prisma.UserReservationCreateInput, Prisma.UserReservationUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.UserReservationUpdateInput, Prisma.UserReservationUncheckedUpdateInput>;
};
export type UserReservationDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.UserReservationSelect<ExtArgs> | null;
    omit?: Prisma.UserReservationOmit<ExtArgs> | null;
    include?: Prisma.UserReservationInclude<ExtArgs> | null;
    where: Prisma.UserReservationWhereUniqueInput;
};
export type UserReservationDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.UserReservationWhereInput;
    limit?: number;
};
export type UserReservationDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.UserReservationSelect<ExtArgs> | null;
    omit?: Prisma.UserReservationOmit<ExtArgs> | null;
    include?: Prisma.UserReservationInclude<ExtArgs> | null;
};
