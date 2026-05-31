import type * as runtime from "@prisma/client/runtime/client";
import type * as Prisma from "../internal/prismaNamespace.js";
export type UserModel = runtime.Types.Result.DefaultSelection<Prisma.$UserPayload>;
export type AggregateUser = {
    _count: UserCountAggregateOutputType | null;
    _min: UserMinAggregateOutputType | null;
    _max: UserMaxAggregateOutputType | null;
};
export type UserMinAggregateOutputType = {
    id: string | null;
    phone: string | null;
    email: string | null;
    passwordHash: string | null;
    nickname: string | null;
    createdAt: Date | null;
    updatedAt: Date | null;
};
export type UserMaxAggregateOutputType = {
    id: string | null;
    phone: string | null;
    email: string | null;
    passwordHash: string | null;
    nickname: string | null;
    createdAt: Date | null;
    updatedAt: Date | null;
};
export type UserCountAggregateOutputType = {
    id: number;
    phone: number;
    email: number;
    passwordHash: number;
    nickname: number;
    createdAt: number;
    updatedAt: number;
    _all: number;
};
export type UserMinAggregateInputType = {
    id?: true;
    phone?: true;
    email?: true;
    passwordHash?: true;
    nickname?: true;
    createdAt?: true;
    updatedAt?: true;
};
export type UserMaxAggregateInputType = {
    id?: true;
    phone?: true;
    email?: true;
    passwordHash?: true;
    nickname?: true;
    createdAt?: true;
    updatedAt?: true;
};
export type UserCountAggregateInputType = {
    id?: true;
    phone?: true;
    email?: true;
    passwordHash?: true;
    nickname?: true;
    createdAt?: true;
    updatedAt?: true;
    _all?: true;
};
export type UserAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.UserWhereInput;
    orderBy?: Prisma.UserOrderByWithRelationInput | Prisma.UserOrderByWithRelationInput[];
    cursor?: Prisma.UserWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | UserCountAggregateInputType;
    _min?: UserMinAggregateInputType;
    _max?: UserMaxAggregateInputType;
};
export type GetUserAggregateType<T extends UserAggregateArgs> = {
    [P in keyof T & keyof AggregateUser]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateUser[P]> : Prisma.GetScalarType<T[P], AggregateUser[P]>;
};
export type UserGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.UserWhereInput;
    orderBy?: Prisma.UserOrderByWithAggregationInput | Prisma.UserOrderByWithAggregationInput[];
    by: Prisma.UserScalarFieldEnum[] | Prisma.UserScalarFieldEnum;
    having?: Prisma.UserScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: UserCountAggregateInputType | true;
    _min?: UserMinAggregateInputType;
    _max?: UserMaxAggregateInputType;
};
export type UserGroupByOutputType = {
    id: string;
    phone: string | null;
    email: string | null;
    passwordHash: string;
    nickname: string | null;
    createdAt: Date;
    updatedAt: Date;
    _count: UserCountAggregateOutputType | null;
    _min: UserMinAggregateOutputType | null;
    _max: UserMaxAggregateOutputType | null;
};
export type GetUserGroupByPayload<T extends UserGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<UserGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof UserGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], UserGroupByOutputType[P]> : Prisma.GetScalarType<T[P], UserGroupByOutputType[P]>;
}>>;
export type UserWhereInput = {
    AND?: Prisma.UserWhereInput | Prisma.UserWhereInput[];
    OR?: Prisma.UserWhereInput[];
    NOT?: Prisma.UserWhereInput | Prisma.UserWhereInput[];
    id?: Prisma.StringFilter<"User"> | string;
    phone?: Prisma.StringNullableFilter<"User"> | string | null;
    email?: Prisma.StringNullableFilter<"User"> | string | null;
    passwordHash?: Prisma.StringFilter<"User"> | string;
    nickname?: Prisma.StringNullableFilter<"User"> | string | null;
    createdAt?: Prisma.DateTimeFilter<"User"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"User"> | Date | string;
    profile?: Prisma.XOR<Prisma.UserProfileNullableScalarRelationFilter, Prisma.UserProfileWhereInput> | null;
    plans?: Prisma.PlanListRelationFilter;
    events?: Prisma.ProgressEventListRelationFilter;
    imports?: Prisma.ImportedArtifactListRelationFilter;
    reservations?: Prisma.UserReservationListRelationFilter;
};
export type UserOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    phone?: Prisma.SortOrderInput | Prisma.SortOrder;
    email?: Prisma.SortOrderInput | Prisma.SortOrder;
    passwordHash?: Prisma.SortOrder;
    nickname?: Prisma.SortOrderInput | Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
    profile?: Prisma.UserProfileOrderByWithRelationInput;
    plans?: Prisma.PlanOrderByRelationAggregateInput;
    events?: Prisma.ProgressEventOrderByRelationAggregateInput;
    imports?: Prisma.ImportedArtifactOrderByRelationAggregateInput;
    reservations?: Prisma.UserReservationOrderByRelationAggregateInput;
};
export type UserWhereUniqueInput = Prisma.AtLeast<{
    id?: string;
    phone?: string;
    email?: string;
    AND?: Prisma.UserWhereInput | Prisma.UserWhereInput[];
    OR?: Prisma.UserWhereInput[];
    NOT?: Prisma.UserWhereInput | Prisma.UserWhereInput[];
    passwordHash?: Prisma.StringFilter<"User"> | string;
    nickname?: Prisma.StringNullableFilter<"User"> | string | null;
    createdAt?: Prisma.DateTimeFilter<"User"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"User"> | Date | string;
    profile?: Prisma.XOR<Prisma.UserProfileNullableScalarRelationFilter, Prisma.UserProfileWhereInput> | null;
    plans?: Prisma.PlanListRelationFilter;
    events?: Prisma.ProgressEventListRelationFilter;
    imports?: Prisma.ImportedArtifactListRelationFilter;
    reservations?: Prisma.UserReservationListRelationFilter;
}, "id" | "phone" | "email">;
export type UserOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    phone?: Prisma.SortOrderInput | Prisma.SortOrder;
    email?: Prisma.SortOrderInput | Prisma.SortOrder;
    passwordHash?: Prisma.SortOrder;
    nickname?: Prisma.SortOrderInput | Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
    _count?: Prisma.UserCountOrderByAggregateInput;
    _max?: Prisma.UserMaxOrderByAggregateInput;
    _min?: Prisma.UserMinOrderByAggregateInput;
};
export type UserScalarWhereWithAggregatesInput = {
    AND?: Prisma.UserScalarWhereWithAggregatesInput | Prisma.UserScalarWhereWithAggregatesInput[];
    OR?: Prisma.UserScalarWhereWithAggregatesInput[];
    NOT?: Prisma.UserScalarWhereWithAggregatesInput | Prisma.UserScalarWhereWithAggregatesInput[];
    id?: Prisma.StringWithAggregatesFilter<"User"> | string;
    phone?: Prisma.StringNullableWithAggregatesFilter<"User"> | string | null;
    email?: Prisma.StringNullableWithAggregatesFilter<"User"> | string | null;
    passwordHash?: Prisma.StringWithAggregatesFilter<"User"> | string;
    nickname?: Prisma.StringNullableWithAggregatesFilter<"User"> | string | null;
    createdAt?: Prisma.DateTimeWithAggregatesFilter<"User"> | Date | string;
    updatedAt?: Prisma.DateTimeWithAggregatesFilter<"User"> | Date | string;
};
export type UserCreateInput = {
    id?: string;
    phone?: string | null;
    email?: string | null;
    passwordHash: string;
    nickname?: string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    profile?: Prisma.UserProfileCreateNestedOneWithoutUserInput;
    plans?: Prisma.PlanCreateNestedManyWithoutUserInput;
    events?: Prisma.ProgressEventCreateNestedManyWithoutUserInput;
    imports?: Prisma.ImportedArtifactCreateNestedManyWithoutUserInput;
    reservations?: Prisma.UserReservationCreateNestedManyWithoutUserInput;
};
export type UserUncheckedCreateInput = {
    id?: string;
    phone?: string | null;
    email?: string | null;
    passwordHash: string;
    nickname?: string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    profile?: Prisma.UserProfileUncheckedCreateNestedOneWithoutUserInput;
    plans?: Prisma.PlanUncheckedCreateNestedManyWithoutUserInput;
    events?: Prisma.ProgressEventUncheckedCreateNestedManyWithoutUserInput;
    imports?: Prisma.ImportedArtifactUncheckedCreateNestedManyWithoutUserInput;
    reservations?: Prisma.UserReservationUncheckedCreateNestedManyWithoutUserInput;
};
export type UserUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    phone?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    email?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    passwordHash?: Prisma.StringFieldUpdateOperationsInput | string;
    nickname?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    profile?: Prisma.UserProfileUpdateOneWithoutUserNestedInput;
    plans?: Prisma.PlanUpdateManyWithoutUserNestedInput;
    events?: Prisma.ProgressEventUpdateManyWithoutUserNestedInput;
    imports?: Prisma.ImportedArtifactUpdateManyWithoutUserNestedInput;
    reservations?: Prisma.UserReservationUpdateManyWithoutUserNestedInput;
};
export type UserUncheckedUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    phone?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    email?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    passwordHash?: Prisma.StringFieldUpdateOperationsInput | string;
    nickname?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    profile?: Prisma.UserProfileUncheckedUpdateOneWithoutUserNestedInput;
    plans?: Prisma.PlanUncheckedUpdateManyWithoutUserNestedInput;
    events?: Prisma.ProgressEventUncheckedUpdateManyWithoutUserNestedInput;
    imports?: Prisma.ImportedArtifactUncheckedUpdateManyWithoutUserNestedInput;
    reservations?: Prisma.UserReservationUncheckedUpdateManyWithoutUserNestedInput;
};
export type UserCreateManyInput = {
    id?: string;
    phone?: string | null;
    email?: string | null;
    passwordHash: string;
    nickname?: string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type UserUpdateManyMutationInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    phone?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    email?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    passwordHash?: Prisma.StringFieldUpdateOperationsInput | string;
    nickname?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type UserUncheckedUpdateManyInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    phone?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    email?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    passwordHash?: Prisma.StringFieldUpdateOperationsInput | string;
    nickname?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type UserCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    phone?: Prisma.SortOrder;
    email?: Prisma.SortOrder;
    passwordHash?: Prisma.SortOrder;
    nickname?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type UserMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    phone?: Prisma.SortOrder;
    email?: Prisma.SortOrder;
    passwordHash?: Prisma.SortOrder;
    nickname?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type UserMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    phone?: Prisma.SortOrder;
    email?: Prisma.SortOrder;
    passwordHash?: Prisma.SortOrder;
    nickname?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type UserScalarRelationFilter = {
    is?: Prisma.UserWhereInput;
    isNot?: Prisma.UserWhereInput;
};
export type StringFieldUpdateOperationsInput = {
    set?: string;
};
export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null;
};
export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string;
};
export type UserCreateNestedOneWithoutProfileInput = {
    create?: Prisma.XOR<Prisma.UserCreateWithoutProfileInput, Prisma.UserUncheckedCreateWithoutProfileInput>;
    connectOrCreate?: Prisma.UserCreateOrConnectWithoutProfileInput;
    connect?: Prisma.UserWhereUniqueInput;
};
export type UserUpdateOneRequiredWithoutProfileNestedInput = {
    create?: Prisma.XOR<Prisma.UserCreateWithoutProfileInput, Prisma.UserUncheckedCreateWithoutProfileInput>;
    connectOrCreate?: Prisma.UserCreateOrConnectWithoutProfileInput;
    upsert?: Prisma.UserUpsertWithoutProfileInput;
    connect?: Prisma.UserWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.UserUpdateToOneWithWhereWithoutProfileInput, Prisma.UserUpdateWithoutProfileInput>, Prisma.UserUncheckedUpdateWithoutProfileInput>;
};
export type UserCreateNestedOneWithoutPlansInput = {
    create?: Prisma.XOR<Prisma.UserCreateWithoutPlansInput, Prisma.UserUncheckedCreateWithoutPlansInput>;
    connectOrCreate?: Prisma.UserCreateOrConnectWithoutPlansInput;
    connect?: Prisma.UserWhereUniqueInput;
};
export type UserUpdateOneRequiredWithoutPlansNestedInput = {
    create?: Prisma.XOR<Prisma.UserCreateWithoutPlansInput, Prisma.UserUncheckedCreateWithoutPlansInput>;
    connectOrCreate?: Prisma.UserCreateOrConnectWithoutPlansInput;
    upsert?: Prisma.UserUpsertWithoutPlansInput;
    connect?: Prisma.UserWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.UserUpdateToOneWithWhereWithoutPlansInput, Prisma.UserUpdateWithoutPlansInput>, Prisma.UserUncheckedUpdateWithoutPlansInput>;
};
export type UserCreateNestedOneWithoutEventsInput = {
    create?: Prisma.XOR<Prisma.UserCreateWithoutEventsInput, Prisma.UserUncheckedCreateWithoutEventsInput>;
    connectOrCreate?: Prisma.UserCreateOrConnectWithoutEventsInput;
    connect?: Prisma.UserWhereUniqueInput;
};
export type UserUpdateOneRequiredWithoutEventsNestedInput = {
    create?: Prisma.XOR<Prisma.UserCreateWithoutEventsInput, Prisma.UserUncheckedCreateWithoutEventsInput>;
    connectOrCreate?: Prisma.UserCreateOrConnectWithoutEventsInput;
    upsert?: Prisma.UserUpsertWithoutEventsInput;
    connect?: Prisma.UserWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.UserUpdateToOneWithWhereWithoutEventsInput, Prisma.UserUpdateWithoutEventsInput>, Prisma.UserUncheckedUpdateWithoutEventsInput>;
};
export type UserCreateNestedOneWithoutImportsInput = {
    create?: Prisma.XOR<Prisma.UserCreateWithoutImportsInput, Prisma.UserUncheckedCreateWithoutImportsInput>;
    connectOrCreate?: Prisma.UserCreateOrConnectWithoutImportsInput;
    connect?: Prisma.UserWhereUniqueInput;
};
export type UserUpdateOneRequiredWithoutImportsNestedInput = {
    create?: Prisma.XOR<Prisma.UserCreateWithoutImportsInput, Prisma.UserUncheckedCreateWithoutImportsInput>;
    connectOrCreate?: Prisma.UserCreateOrConnectWithoutImportsInput;
    upsert?: Prisma.UserUpsertWithoutImportsInput;
    connect?: Prisma.UserWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.UserUpdateToOneWithWhereWithoutImportsInput, Prisma.UserUpdateWithoutImportsInput>, Prisma.UserUncheckedUpdateWithoutImportsInput>;
};
export type UserCreateNestedOneWithoutReservationsInput = {
    create?: Prisma.XOR<Prisma.UserCreateWithoutReservationsInput, Prisma.UserUncheckedCreateWithoutReservationsInput>;
    connectOrCreate?: Prisma.UserCreateOrConnectWithoutReservationsInput;
    connect?: Prisma.UserWhereUniqueInput;
};
export type UserUpdateOneRequiredWithoutReservationsNestedInput = {
    create?: Prisma.XOR<Prisma.UserCreateWithoutReservationsInput, Prisma.UserUncheckedCreateWithoutReservationsInput>;
    connectOrCreate?: Prisma.UserCreateOrConnectWithoutReservationsInput;
    upsert?: Prisma.UserUpsertWithoutReservationsInput;
    connect?: Prisma.UserWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.UserUpdateToOneWithWhereWithoutReservationsInput, Prisma.UserUpdateWithoutReservationsInput>, Prisma.UserUncheckedUpdateWithoutReservationsInput>;
};
export type UserCreateWithoutProfileInput = {
    id?: string;
    phone?: string | null;
    email?: string | null;
    passwordHash: string;
    nickname?: string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    plans?: Prisma.PlanCreateNestedManyWithoutUserInput;
    events?: Prisma.ProgressEventCreateNestedManyWithoutUserInput;
    imports?: Prisma.ImportedArtifactCreateNestedManyWithoutUserInput;
    reservations?: Prisma.UserReservationCreateNestedManyWithoutUserInput;
};
export type UserUncheckedCreateWithoutProfileInput = {
    id?: string;
    phone?: string | null;
    email?: string | null;
    passwordHash: string;
    nickname?: string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    plans?: Prisma.PlanUncheckedCreateNestedManyWithoutUserInput;
    events?: Prisma.ProgressEventUncheckedCreateNestedManyWithoutUserInput;
    imports?: Prisma.ImportedArtifactUncheckedCreateNestedManyWithoutUserInput;
    reservations?: Prisma.UserReservationUncheckedCreateNestedManyWithoutUserInput;
};
export type UserCreateOrConnectWithoutProfileInput = {
    where: Prisma.UserWhereUniqueInput;
    create: Prisma.XOR<Prisma.UserCreateWithoutProfileInput, Prisma.UserUncheckedCreateWithoutProfileInput>;
};
export type UserUpsertWithoutProfileInput = {
    update: Prisma.XOR<Prisma.UserUpdateWithoutProfileInput, Prisma.UserUncheckedUpdateWithoutProfileInput>;
    create: Prisma.XOR<Prisma.UserCreateWithoutProfileInput, Prisma.UserUncheckedCreateWithoutProfileInput>;
    where?: Prisma.UserWhereInput;
};
export type UserUpdateToOneWithWhereWithoutProfileInput = {
    where?: Prisma.UserWhereInput;
    data: Prisma.XOR<Prisma.UserUpdateWithoutProfileInput, Prisma.UserUncheckedUpdateWithoutProfileInput>;
};
export type UserUpdateWithoutProfileInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    phone?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    email?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    passwordHash?: Prisma.StringFieldUpdateOperationsInput | string;
    nickname?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    plans?: Prisma.PlanUpdateManyWithoutUserNestedInput;
    events?: Prisma.ProgressEventUpdateManyWithoutUserNestedInput;
    imports?: Prisma.ImportedArtifactUpdateManyWithoutUserNestedInput;
    reservations?: Prisma.UserReservationUpdateManyWithoutUserNestedInput;
};
export type UserUncheckedUpdateWithoutProfileInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    phone?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    email?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    passwordHash?: Prisma.StringFieldUpdateOperationsInput | string;
    nickname?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    plans?: Prisma.PlanUncheckedUpdateManyWithoutUserNestedInput;
    events?: Prisma.ProgressEventUncheckedUpdateManyWithoutUserNestedInput;
    imports?: Prisma.ImportedArtifactUncheckedUpdateManyWithoutUserNestedInput;
    reservations?: Prisma.UserReservationUncheckedUpdateManyWithoutUserNestedInput;
};
export type UserCreateWithoutPlansInput = {
    id?: string;
    phone?: string | null;
    email?: string | null;
    passwordHash: string;
    nickname?: string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    profile?: Prisma.UserProfileCreateNestedOneWithoutUserInput;
    events?: Prisma.ProgressEventCreateNestedManyWithoutUserInput;
    imports?: Prisma.ImportedArtifactCreateNestedManyWithoutUserInput;
    reservations?: Prisma.UserReservationCreateNestedManyWithoutUserInput;
};
export type UserUncheckedCreateWithoutPlansInput = {
    id?: string;
    phone?: string | null;
    email?: string | null;
    passwordHash: string;
    nickname?: string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    profile?: Prisma.UserProfileUncheckedCreateNestedOneWithoutUserInput;
    events?: Prisma.ProgressEventUncheckedCreateNestedManyWithoutUserInput;
    imports?: Prisma.ImportedArtifactUncheckedCreateNestedManyWithoutUserInput;
    reservations?: Prisma.UserReservationUncheckedCreateNestedManyWithoutUserInput;
};
export type UserCreateOrConnectWithoutPlansInput = {
    where: Prisma.UserWhereUniqueInput;
    create: Prisma.XOR<Prisma.UserCreateWithoutPlansInput, Prisma.UserUncheckedCreateWithoutPlansInput>;
};
export type UserUpsertWithoutPlansInput = {
    update: Prisma.XOR<Prisma.UserUpdateWithoutPlansInput, Prisma.UserUncheckedUpdateWithoutPlansInput>;
    create: Prisma.XOR<Prisma.UserCreateWithoutPlansInput, Prisma.UserUncheckedCreateWithoutPlansInput>;
    where?: Prisma.UserWhereInput;
};
export type UserUpdateToOneWithWhereWithoutPlansInput = {
    where?: Prisma.UserWhereInput;
    data: Prisma.XOR<Prisma.UserUpdateWithoutPlansInput, Prisma.UserUncheckedUpdateWithoutPlansInput>;
};
export type UserUpdateWithoutPlansInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    phone?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    email?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    passwordHash?: Prisma.StringFieldUpdateOperationsInput | string;
    nickname?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    profile?: Prisma.UserProfileUpdateOneWithoutUserNestedInput;
    events?: Prisma.ProgressEventUpdateManyWithoutUserNestedInput;
    imports?: Prisma.ImportedArtifactUpdateManyWithoutUserNestedInput;
    reservations?: Prisma.UserReservationUpdateManyWithoutUserNestedInput;
};
export type UserUncheckedUpdateWithoutPlansInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    phone?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    email?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    passwordHash?: Prisma.StringFieldUpdateOperationsInput | string;
    nickname?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    profile?: Prisma.UserProfileUncheckedUpdateOneWithoutUserNestedInput;
    events?: Prisma.ProgressEventUncheckedUpdateManyWithoutUserNestedInput;
    imports?: Prisma.ImportedArtifactUncheckedUpdateManyWithoutUserNestedInput;
    reservations?: Prisma.UserReservationUncheckedUpdateManyWithoutUserNestedInput;
};
export type UserCreateWithoutEventsInput = {
    id?: string;
    phone?: string | null;
    email?: string | null;
    passwordHash: string;
    nickname?: string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    profile?: Prisma.UserProfileCreateNestedOneWithoutUserInput;
    plans?: Prisma.PlanCreateNestedManyWithoutUserInput;
    imports?: Prisma.ImportedArtifactCreateNestedManyWithoutUserInput;
    reservations?: Prisma.UserReservationCreateNestedManyWithoutUserInput;
};
export type UserUncheckedCreateWithoutEventsInput = {
    id?: string;
    phone?: string | null;
    email?: string | null;
    passwordHash: string;
    nickname?: string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    profile?: Prisma.UserProfileUncheckedCreateNestedOneWithoutUserInput;
    plans?: Prisma.PlanUncheckedCreateNestedManyWithoutUserInput;
    imports?: Prisma.ImportedArtifactUncheckedCreateNestedManyWithoutUserInput;
    reservations?: Prisma.UserReservationUncheckedCreateNestedManyWithoutUserInput;
};
export type UserCreateOrConnectWithoutEventsInput = {
    where: Prisma.UserWhereUniqueInput;
    create: Prisma.XOR<Prisma.UserCreateWithoutEventsInput, Prisma.UserUncheckedCreateWithoutEventsInput>;
};
export type UserUpsertWithoutEventsInput = {
    update: Prisma.XOR<Prisma.UserUpdateWithoutEventsInput, Prisma.UserUncheckedUpdateWithoutEventsInput>;
    create: Prisma.XOR<Prisma.UserCreateWithoutEventsInput, Prisma.UserUncheckedCreateWithoutEventsInput>;
    where?: Prisma.UserWhereInput;
};
export type UserUpdateToOneWithWhereWithoutEventsInput = {
    where?: Prisma.UserWhereInput;
    data: Prisma.XOR<Prisma.UserUpdateWithoutEventsInput, Prisma.UserUncheckedUpdateWithoutEventsInput>;
};
export type UserUpdateWithoutEventsInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    phone?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    email?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    passwordHash?: Prisma.StringFieldUpdateOperationsInput | string;
    nickname?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    profile?: Prisma.UserProfileUpdateOneWithoutUserNestedInput;
    plans?: Prisma.PlanUpdateManyWithoutUserNestedInput;
    imports?: Prisma.ImportedArtifactUpdateManyWithoutUserNestedInput;
    reservations?: Prisma.UserReservationUpdateManyWithoutUserNestedInput;
};
export type UserUncheckedUpdateWithoutEventsInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    phone?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    email?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    passwordHash?: Prisma.StringFieldUpdateOperationsInput | string;
    nickname?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    profile?: Prisma.UserProfileUncheckedUpdateOneWithoutUserNestedInput;
    plans?: Prisma.PlanUncheckedUpdateManyWithoutUserNestedInput;
    imports?: Prisma.ImportedArtifactUncheckedUpdateManyWithoutUserNestedInput;
    reservations?: Prisma.UserReservationUncheckedUpdateManyWithoutUserNestedInput;
};
export type UserCreateWithoutImportsInput = {
    id?: string;
    phone?: string | null;
    email?: string | null;
    passwordHash: string;
    nickname?: string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    profile?: Prisma.UserProfileCreateNestedOneWithoutUserInput;
    plans?: Prisma.PlanCreateNestedManyWithoutUserInput;
    events?: Prisma.ProgressEventCreateNestedManyWithoutUserInput;
    reservations?: Prisma.UserReservationCreateNestedManyWithoutUserInput;
};
export type UserUncheckedCreateWithoutImportsInput = {
    id?: string;
    phone?: string | null;
    email?: string | null;
    passwordHash: string;
    nickname?: string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    profile?: Prisma.UserProfileUncheckedCreateNestedOneWithoutUserInput;
    plans?: Prisma.PlanUncheckedCreateNestedManyWithoutUserInput;
    events?: Prisma.ProgressEventUncheckedCreateNestedManyWithoutUserInput;
    reservations?: Prisma.UserReservationUncheckedCreateNestedManyWithoutUserInput;
};
export type UserCreateOrConnectWithoutImportsInput = {
    where: Prisma.UserWhereUniqueInput;
    create: Prisma.XOR<Prisma.UserCreateWithoutImportsInput, Prisma.UserUncheckedCreateWithoutImportsInput>;
};
export type UserUpsertWithoutImportsInput = {
    update: Prisma.XOR<Prisma.UserUpdateWithoutImportsInput, Prisma.UserUncheckedUpdateWithoutImportsInput>;
    create: Prisma.XOR<Prisma.UserCreateWithoutImportsInput, Prisma.UserUncheckedCreateWithoutImportsInput>;
    where?: Prisma.UserWhereInput;
};
export type UserUpdateToOneWithWhereWithoutImportsInput = {
    where?: Prisma.UserWhereInput;
    data: Prisma.XOR<Prisma.UserUpdateWithoutImportsInput, Prisma.UserUncheckedUpdateWithoutImportsInput>;
};
export type UserUpdateWithoutImportsInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    phone?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    email?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    passwordHash?: Prisma.StringFieldUpdateOperationsInput | string;
    nickname?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    profile?: Prisma.UserProfileUpdateOneWithoutUserNestedInput;
    plans?: Prisma.PlanUpdateManyWithoutUserNestedInput;
    events?: Prisma.ProgressEventUpdateManyWithoutUserNestedInput;
    reservations?: Prisma.UserReservationUpdateManyWithoutUserNestedInput;
};
export type UserUncheckedUpdateWithoutImportsInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    phone?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    email?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    passwordHash?: Prisma.StringFieldUpdateOperationsInput | string;
    nickname?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    profile?: Prisma.UserProfileUncheckedUpdateOneWithoutUserNestedInput;
    plans?: Prisma.PlanUncheckedUpdateManyWithoutUserNestedInput;
    events?: Prisma.ProgressEventUncheckedUpdateManyWithoutUserNestedInput;
    reservations?: Prisma.UserReservationUncheckedUpdateManyWithoutUserNestedInput;
};
export type UserCreateWithoutReservationsInput = {
    id?: string;
    phone?: string | null;
    email?: string | null;
    passwordHash: string;
    nickname?: string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    profile?: Prisma.UserProfileCreateNestedOneWithoutUserInput;
    plans?: Prisma.PlanCreateNestedManyWithoutUserInput;
    events?: Prisma.ProgressEventCreateNestedManyWithoutUserInput;
    imports?: Prisma.ImportedArtifactCreateNestedManyWithoutUserInput;
};
export type UserUncheckedCreateWithoutReservationsInput = {
    id?: string;
    phone?: string | null;
    email?: string | null;
    passwordHash: string;
    nickname?: string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    profile?: Prisma.UserProfileUncheckedCreateNestedOneWithoutUserInput;
    plans?: Prisma.PlanUncheckedCreateNestedManyWithoutUserInput;
    events?: Prisma.ProgressEventUncheckedCreateNestedManyWithoutUserInput;
    imports?: Prisma.ImportedArtifactUncheckedCreateNestedManyWithoutUserInput;
};
export type UserCreateOrConnectWithoutReservationsInput = {
    where: Prisma.UserWhereUniqueInput;
    create: Prisma.XOR<Prisma.UserCreateWithoutReservationsInput, Prisma.UserUncheckedCreateWithoutReservationsInput>;
};
export type UserUpsertWithoutReservationsInput = {
    update: Prisma.XOR<Prisma.UserUpdateWithoutReservationsInput, Prisma.UserUncheckedUpdateWithoutReservationsInput>;
    create: Prisma.XOR<Prisma.UserCreateWithoutReservationsInput, Prisma.UserUncheckedCreateWithoutReservationsInput>;
    where?: Prisma.UserWhereInput;
};
export type UserUpdateToOneWithWhereWithoutReservationsInput = {
    where?: Prisma.UserWhereInput;
    data: Prisma.XOR<Prisma.UserUpdateWithoutReservationsInput, Prisma.UserUncheckedUpdateWithoutReservationsInput>;
};
export type UserUpdateWithoutReservationsInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    phone?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    email?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    passwordHash?: Prisma.StringFieldUpdateOperationsInput | string;
    nickname?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    profile?: Prisma.UserProfileUpdateOneWithoutUserNestedInput;
    plans?: Prisma.PlanUpdateManyWithoutUserNestedInput;
    events?: Prisma.ProgressEventUpdateManyWithoutUserNestedInput;
    imports?: Prisma.ImportedArtifactUpdateManyWithoutUserNestedInput;
};
export type UserUncheckedUpdateWithoutReservationsInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    phone?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    email?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    passwordHash?: Prisma.StringFieldUpdateOperationsInput | string;
    nickname?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    profile?: Prisma.UserProfileUncheckedUpdateOneWithoutUserNestedInput;
    plans?: Prisma.PlanUncheckedUpdateManyWithoutUserNestedInput;
    events?: Prisma.ProgressEventUncheckedUpdateManyWithoutUserNestedInput;
    imports?: Prisma.ImportedArtifactUncheckedUpdateManyWithoutUserNestedInput;
};
export type UserCountOutputType = {
    plans: number;
    events: number;
    imports: number;
    reservations: number;
};
export type UserCountOutputTypeSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    plans?: boolean | UserCountOutputTypeCountPlansArgs;
    events?: boolean | UserCountOutputTypeCountEventsArgs;
    imports?: boolean | UserCountOutputTypeCountImportsArgs;
    reservations?: boolean | UserCountOutputTypeCountReservationsArgs;
};
export type UserCountOutputTypeDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.UserCountOutputTypeSelect<ExtArgs> | null;
};
export type UserCountOutputTypeCountPlansArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.PlanWhereInput;
};
export type UserCountOutputTypeCountEventsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.ProgressEventWhereInput;
};
export type UserCountOutputTypeCountImportsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.ImportedArtifactWhereInput;
};
export type UserCountOutputTypeCountReservationsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.UserReservationWhereInput;
};
export type UserSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    phone?: boolean;
    email?: boolean;
    passwordHash?: boolean;
    nickname?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
    profile?: boolean | Prisma.User$profileArgs<ExtArgs>;
    plans?: boolean | Prisma.User$plansArgs<ExtArgs>;
    events?: boolean | Prisma.User$eventsArgs<ExtArgs>;
    imports?: boolean | Prisma.User$importsArgs<ExtArgs>;
    reservations?: boolean | Prisma.User$reservationsArgs<ExtArgs>;
    _count?: boolean | Prisma.UserCountOutputTypeDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["user"]>;
export type UserSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    phone?: boolean;
    email?: boolean;
    passwordHash?: boolean;
    nickname?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
}, ExtArgs["result"]["user"]>;
export type UserSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    phone?: boolean;
    email?: boolean;
    passwordHash?: boolean;
    nickname?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
}, ExtArgs["result"]["user"]>;
export type UserSelectScalar = {
    id?: boolean;
    phone?: boolean;
    email?: boolean;
    passwordHash?: boolean;
    nickname?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
};
export type UserOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "phone" | "email" | "passwordHash" | "nickname" | "createdAt" | "updatedAt", ExtArgs["result"]["user"]>;
export type UserInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    profile?: boolean | Prisma.User$profileArgs<ExtArgs>;
    plans?: boolean | Prisma.User$plansArgs<ExtArgs>;
    events?: boolean | Prisma.User$eventsArgs<ExtArgs>;
    imports?: boolean | Prisma.User$importsArgs<ExtArgs>;
    reservations?: boolean | Prisma.User$reservationsArgs<ExtArgs>;
    _count?: boolean | Prisma.UserCountOutputTypeDefaultArgs<ExtArgs>;
};
export type UserIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {};
export type UserIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {};
export type $UserPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "User";
    objects: {
        profile: Prisma.$UserProfilePayload<ExtArgs> | null;
        plans: Prisma.$PlanPayload<ExtArgs>[];
        events: Prisma.$ProgressEventPayload<ExtArgs>[];
        imports: Prisma.$ImportedArtifactPayload<ExtArgs>[];
        reservations: Prisma.$UserReservationPayload<ExtArgs>[];
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: string;
        phone: string | null;
        email: string | null;
        passwordHash: string;
        nickname: string | null;
        createdAt: Date;
        updatedAt: Date;
    }, ExtArgs["result"]["user"]>;
    composites: {};
};
export type UserGetPayload<S extends boolean | null | undefined | UserDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$UserPayload, S>;
export type UserCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<UserFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: UserCountAggregateInputType | true;
};
export interface UserDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['User'];
        meta: {
            name: 'User';
        };
    };
    findUnique<T extends UserFindUniqueArgs>(args: Prisma.SelectSubset<T, UserFindUniqueArgs<ExtArgs>>): Prisma.Prisma__UserClient<runtime.Types.Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends UserFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, UserFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__UserClient<runtime.Types.Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends UserFindFirstArgs>(args?: Prisma.SelectSubset<T, UserFindFirstArgs<ExtArgs>>): Prisma.Prisma__UserClient<runtime.Types.Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends UserFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, UserFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__UserClient<runtime.Types.Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends UserFindManyArgs>(args?: Prisma.SelectSubset<T, UserFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends UserCreateArgs>(args: Prisma.SelectSubset<T, UserCreateArgs<ExtArgs>>): Prisma.Prisma__UserClient<runtime.Types.Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends UserCreateManyArgs>(args?: Prisma.SelectSubset<T, UserCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    createManyAndReturn<T extends UserCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, UserCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    delete<T extends UserDeleteArgs>(args: Prisma.SelectSubset<T, UserDeleteArgs<ExtArgs>>): Prisma.Prisma__UserClient<runtime.Types.Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends UserUpdateArgs>(args: Prisma.SelectSubset<T, UserUpdateArgs<ExtArgs>>): Prisma.Prisma__UserClient<runtime.Types.Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends UserDeleteManyArgs>(args?: Prisma.SelectSubset<T, UserDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends UserUpdateManyArgs>(args: Prisma.SelectSubset<T, UserUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateManyAndReturn<T extends UserUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, UserUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    upsert<T extends UserUpsertArgs>(args: Prisma.SelectSubset<T, UserUpsertArgs<ExtArgs>>): Prisma.Prisma__UserClient<runtime.Types.Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends UserCountArgs>(args?: Prisma.Subset<T, UserCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], UserCountAggregateOutputType> : number>;
    aggregate<T extends UserAggregateArgs>(args: Prisma.Subset<T, UserAggregateArgs>): Prisma.PrismaPromise<GetUserAggregateType<T>>;
    groupBy<T extends UserGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: UserGroupByArgs['orderBy'];
    } : {
        orderBy?: UserGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, UserGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: UserFieldRefs;
}
export interface Prisma__UserClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    profile<T extends Prisma.User$profileArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.User$profileArgs<ExtArgs>>): Prisma.Prisma__UserProfileClient<runtime.Types.Result.GetResult<Prisma.$UserProfilePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    plans<T extends Prisma.User$plansArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.User$plansArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$PlanPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    events<T extends Prisma.User$eventsArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.User$eventsArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$ProgressEventPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    imports<T extends Prisma.User$importsArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.User$importsArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$ImportedArtifactPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    reservations<T extends Prisma.User$reservationsArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.User$reservationsArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$UserReservationPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface UserFieldRefs {
    readonly id: Prisma.FieldRef<"User", 'String'>;
    readonly phone: Prisma.FieldRef<"User", 'String'>;
    readonly email: Prisma.FieldRef<"User", 'String'>;
    readonly passwordHash: Prisma.FieldRef<"User", 'String'>;
    readonly nickname: Prisma.FieldRef<"User", 'String'>;
    readonly createdAt: Prisma.FieldRef<"User", 'DateTime'>;
    readonly updatedAt: Prisma.FieldRef<"User", 'DateTime'>;
}
export type UserFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.UserSelect<ExtArgs> | null;
    omit?: Prisma.UserOmit<ExtArgs> | null;
    include?: Prisma.UserInclude<ExtArgs> | null;
    where: Prisma.UserWhereUniqueInput;
};
export type UserFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.UserSelect<ExtArgs> | null;
    omit?: Prisma.UserOmit<ExtArgs> | null;
    include?: Prisma.UserInclude<ExtArgs> | null;
    where: Prisma.UserWhereUniqueInput;
};
export type UserFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.UserSelect<ExtArgs> | null;
    omit?: Prisma.UserOmit<ExtArgs> | null;
    include?: Prisma.UserInclude<ExtArgs> | null;
    where?: Prisma.UserWhereInput;
    orderBy?: Prisma.UserOrderByWithRelationInput | Prisma.UserOrderByWithRelationInput[];
    cursor?: Prisma.UserWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.UserScalarFieldEnum | Prisma.UserScalarFieldEnum[];
};
export type UserFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.UserSelect<ExtArgs> | null;
    omit?: Prisma.UserOmit<ExtArgs> | null;
    include?: Prisma.UserInclude<ExtArgs> | null;
    where?: Prisma.UserWhereInput;
    orderBy?: Prisma.UserOrderByWithRelationInput | Prisma.UserOrderByWithRelationInput[];
    cursor?: Prisma.UserWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.UserScalarFieldEnum | Prisma.UserScalarFieldEnum[];
};
export type UserFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.UserSelect<ExtArgs> | null;
    omit?: Prisma.UserOmit<ExtArgs> | null;
    include?: Prisma.UserInclude<ExtArgs> | null;
    where?: Prisma.UserWhereInput;
    orderBy?: Prisma.UserOrderByWithRelationInput | Prisma.UserOrderByWithRelationInput[];
    cursor?: Prisma.UserWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.UserScalarFieldEnum | Prisma.UserScalarFieldEnum[];
};
export type UserCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.UserSelect<ExtArgs> | null;
    omit?: Prisma.UserOmit<ExtArgs> | null;
    include?: Prisma.UserInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.UserCreateInput, Prisma.UserUncheckedCreateInput>;
};
export type UserCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.UserCreateManyInput | Prisma.UserCreateManyInput[];
};
export type UserCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.UserSelectCreateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.UserOmit<ExtArgs> | null;
    data: Prisma.UserCreateManyInput | Prisma.UserCreateManyInput[];
};
export type UserUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.UserSelect<ExtArgs> | null;
    omit?: Prisma.UserOmit<ExtArgs> | null;
    include?: Prisma.UserInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.UserUpdateInput, Prisma.UserUncheckedUpdateInput>;
    where: Prisma.UserWhereUniqueInput;
};
export type UserUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.UserUpdateManyMutationInput, Prisma.UserUncheckedUpdateManyInput>;
    where?: Prisma.UserWhereInput;
    limit?: number;
};
export type UserUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.UserSelectUpdateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.UserOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.UserUpdateManyMutationInput, Prisma.UserUncheckedUpdateManyInput>;
    where?: Prisma.UserWhereInput;
    limit?: number;
};
export type UserUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.UserSelect<ExtArgs> | null;
    omit?: Prisma.UserOmit<ExtArgs> | null;
    include?: Prisma.UserInclude<ExtArgs> | null;
    where: Prisma.UserWhereUniqueInput;
    create: Prisma.XOR<Prisma.UserCreateInput, Prisma.UserUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.UserUpdateInput, Prisma.UserUncheckedUpdateInput>;
};
export type UserDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.UserSelect<ExtArgs> | null;
    omit?: Prisma.UserOmit<ExtArgs> | null;
    include?: Prisma.UserInclude<ExtArgs> | null;
    where: Prisma.UserWhereUniqueInput;
};
export type UserDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.UserWhereInput;
    limit?: number;
};
export type User$profileArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.UserProfileSelect<ExtArgs> | null;
    omit?: Prisma.UserProfileOmit<ExtArgs> | null;
    include?: Prisma.UserProfileInclude<ExtArgs> | null;
    where?: Prisma.UserProfileWhereInput;
};
export type User$plansArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type User$eventsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type User$importsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ImportedArtifactSelect<ExtArgs> | null;
    omit?: Prisma.ImportedArtifactOmit<ExtArgs> | null;
    include?: Prisma.ImportedArtifactInclude<ExtArgs> | null;
    where?: Prisma.ImportedArtifactWhereInput;
    orderBy?: Prisma.ImportedArtifactOrderByWithRelationInput | Prisma.ImportedArtifactOrderByWithRelationInput[];
    cursor?: Prisma.ImportedArtifactWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.ImportedArtifactScalarFieldEnum | Prisma.ImportedArtifactScalarFieldEnum[];
};
export type User$reservationsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type UserDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.UserSelect<ExtArgs> | null;
    omit?: Prisma.UserOmit<ExtArgs> | null;
    include?: Prisma.UserInclude<ExtArgs> | null;
};
