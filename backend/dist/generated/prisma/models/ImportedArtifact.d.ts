import type * as runtime from "@prisma/client/runtime/client";
import type * as Prisma from "../internal/prismaNamespace.js";
export type ImportedArtifactModel = runtime.Types.Result.DefaultSelection<Prisma.$ImportedArtifactPayload>;
export type AggregateImportedArtifact = {
    _count: ImportedArtifactCountAggregateOutputType | null;
    _min: ImportedArtifactMinAggregateOutputType | null;
    _max: ImportedArtifactMaxAggregateOutputType | null;
};
export type ImportedArtifactMinAggregateOutputType = {
    id: string | null;
    userId: string | null;
    type: string | null;
    captureTime: string | null;
    rawPath: string | null;
    createdAt: Date | null;
};
export type ImportedArtifactMaxAggregateOutputType = {
    id: string | null;
    userId: string | null;
    type: string | null;
    captureTime: string | null;
    rawPath: string | null;
    createdAt: Date | null;
};
export type ImportedArtifactCountAggregateOutputType = {
    id: number;
    userId: number;
    type: number;
    captureTime: number;
    rawPath: number;
    parsed: number;
    createdAt: number;
    _all: number;
};
export type ImportedArtifactMinAggregateInputType = {
    id?: true;
    userId?: true;
    type?: true;
    captureTime?: true;
    rawPath?: true;
    createdAt?: true;
};
export type ImportedArtifactMaxAggregateInputType = {
    id?: true;
    userId?: true;
    type?: true;
    captureTime?: true;
    rawPath?: true;
    createdAt?: true;
};
export type ImportedArtifactCountAggregateInputType = {
    id?: true;
    userId?: true;
    type?: true;
    captureTime?: true;
    rawPath?: true;
    parsed?: true;
    createdAt?: true;
    _all?: true;
};
export type ImportedArtifactAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.ImportedArtifactWhereInput;
    orderBy?: Prisma.ImportedArtifactOrderByWithRelationInput | Prisma.ImportedArtifactOrderByWithRelationInput[];
    cursor?: Prisma.ImportedArtifactWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | ImportedArtifactCountAggregateInputType;
    _min?: ImportedArtifactMinAggregateInputType;
    _max?: ImportedArtifactMaxAggregateInputType;
};
export type GetImportedArtifactAggregateType<T extends ImportedArtifactAggregateArgs> = {
    [P in keyof T & keyof AggregateImportedArtifact]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateImportedArtifact[P]> : Prisma.GetScalarType<T[P], AggregateImportedArtifact[P]>;
};
export type ImportedArtifactGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.ImportedArtifactWhereInput;
    orderBy?: Prisma.ImportedArtifactOrderByWithAggregationInput | Prisma.ImportedArtifactOrderByWithAggregationInput[];
    by: Prisma.ImportedArtifactScalarFieldEnum[] | Prisma.ImportedArtifactScalarFieldEnum;
    having?: Prisma.ImportedArtifactScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: ImportedArtifactCountAggregateInputType | true;
    _min?: ImportedArtifactMinAggregateInputType;
    _max?: ImportedArtifactMaxAggregateInputType;
};
export type ImportedArtifactGroupByOutputType = {
    id: string;
    userId: string;
    type: string;
    captureTime: string | null;
    rawPath: string | null;
    parsed: runtime.JsonValue;
    createdAt: Date;
    _count: ImportedArtifactCountAggregateOutputType | null;
    _min: ImportedArtifactMinAggregateOutputType | null;
    _max: ImportedArtifactMaxAggregateOutputType | null;
};
export type GetImportedArtifactGroupByPayload<T extends ImportedArtifactGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<ImportedArtifactGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof ImportedArtifactGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], ImportedArtifactGroupByOutputType[P]> : Prisma.GetScalarType<T[P], ImportedArtifactGroupByOutputType[P]>;
}>>;
export type ImportedArtifactWhereInput = {
    AND?: Prisma.ImportedArtifactWhereInput | Prisma.ImportedArtifactWhereInput[];
    OR?: Prisma.ImportedArtifactWhereInput[];
    NOT?: Prisma.ImportedArtifactWhereInput | Prisma.ImportedArtifactWhereInput[];
    id?: Prisma.StringFilter<"ImportedArtifact"> | string;
    userId?: Prisma.StringFilter<"ImportedArtifact"> | string;
    type?: Prisma.StringFilter<"ImportedArtifact"> | string;
    captureTime?: Prisma.StringNullableFilter<"ImportedArtifact"> | string | null;
    rawPath?: Prisma.StringNullableFilter<"ImportedArtifact"> | string | null;
    parsed?: Prisma.JsonFilter<"ImportedArtifact">;
    createdAt?: Prisma.DateTimeFilter<"ImportedArtifact"> | Date | string;
    user?: Prisma.XOR<Prisma.UserScalarRelationFilter, Prisma.UserWhereInput>;
};
export type ImportedArtifactOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    userId?: Prisma.SortOrder;
    type?: Prisma.SortOrder;
    captureTime?: Prisma.SortOrderInput | Prisma.SortOrder;
    rawPath?: Prisma.SortOrderInput | Prisma.SortOrder;
    parsed?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    user?: Prisma.UserOrderByWithRelationInput;
};
export type ImportedArtifactWhereUniqueInput = Prisma.AtLeast<{
    id?: string;
    AND?: Prisma.ImportedArtifactWhereInput | Prisma.ImportedArtifactWhereInput[];
    OR?: Prisma.ImportedArtifactWhereInput[];
    NOT?: Prisma.ImportedArtifactWhereInput | Prisma.ImportedArtifactWhereInput[];
    userId?: Prisma.StringFilter<"ImportedArtifact"> | string;
    type?: Prisma.StringFilter<"ImportedArtifact"> | string;
    captureTime?: Prisma.StringNullableFilter<"ImportedArtifact"> | string | null;
    rawPath?: Prisma.StringNullableFilter<"ImportedArtifact"> | string | null;
    parsed?: Prisma.JsonFilter<"ImportedArtifact">;
    createdAt?: Prisma.DateTimeFilter<"ImportedArtifact"> | Date | string;
    user?: Prisma.XOR<Prisma.UserScalarRelationFilter, Prisma.UserWhereInput>;
}, "id">;
export type ImportedArtifactOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    userId?: Prisma.SortOrder;
    type?: Prisma.SortOrder;
    captureTime?: Prisma.SortOrderInput | Prisma.SortOrder;
    rawPath?: Prisma.SortOrderInput | Prisma.SortOrder;
    parsed?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    _count?: Prisma.ImportedArtifactCountOrderByAggregateInput;
    _max?: Prisma.ImportedArtifactMaxOrderByAggregateInput;
    _min?: Prisma.ImportedArtifactMinOrderByAggregateInput;
};
export type ImportedArtifactScalarWhereWithAggregatesInput = {
    AND?: Prisma.ImportedArtifactScalarWhereWithAggregatesInput | Prisma.ImportedArtifactScalarWhereWithAggregatesInput[];
    OR?: Prisma.ImportedArtifactScalarWhereWithAggregatesInput[];
    NOT?: Prisma.ImportedArtifactScalarWhereWithAggregatesInput | Prisma.ImportedArtifactScalarWhereWithAggregatesInput[];
    id?: Prisma.StringWithAggregatesFilter<"ImportedArtifact"> | string;
    userId?: Prisma.StringWithAggregatesFilter<"ImportedArtifact"> | string;
    type?: Prisma.StringWithAggregatesFilter<"ImportedArtifact"> | string;
    captureTime?: Prisma.StringNullableWithAggregatesFilter<"ImportedArtifact"> | string | null;
    rawPath?: Prisma.StringNullableWithAggregatesFilter<"ImportedArtifact"> | string | null;
    parsed?: Prisma.JsonWithAggregatesFilter<"ImportedArtifact">;
    createdAt?: Prisma.DateTimeWithAggregatesFilter<"ImportedArtifact"> | Date | string;
};
export type ImportedArtifactCreateInput = {
    id?: string;
    type: string;
    captureTime?: string | null;
    rawPath?: string | null;
    parsed: Prisma.JsonNullValueInput | runtime.InputJsonValue;
    createdAt?: Date | string;
    user: Prisma.UserCreateNestedOneWithoutImportsInput;
};
export type ImportedArtifactUncheckedCreateInput = {
    id?: string;
    userId: string;
    type: string;
    captureTime?: string | null;
    rawPath?: string | null;
    parsed: Prisma.JsonNullValueInput | runtime.InputJsonValue;
    createdAt?: Date | string;
};
export type ImportedArtifactUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    type?: Prisma.StringFieldUpdateOperationsInput | string;
    captureTime?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    rawPath?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    parsed?: Prisma.JsonNullValueInput | runtime.InputJsonValue;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    user?: Prisma.UserUpdateOneRequiredWithoutImportsNestedInput;
};
export type ImportedArtifactUncheckedUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    userId?: Prisma.StringFieldUpdateOperationsInput | string;
    type?: Prisma.StringFieldUpdateOperationsInput | string;
    captureTime?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    rawPath?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    parsed?: Prisma.JsonNullValueInput | runtime.InputJsonValue;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type ImportedArtifactCreateManyInput = {
    id?: string;
    userId: string;
    type: string;
    captureTime?: string | null;
    rawPath?: string | null;
    parsed: Prisma.JsonNullValueInput | runtime.InputJsonValue;
    createdAt?: Date | string;
};
export type ImportedArtifactUpdateManyMutationInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    type?: Prisma.StringFieldUpdateOperationsInput | string;
    captureTime?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    rawPath?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    parsed?: Prisma.JsonNullValueInput | runtime.InputJsonValue;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type ImportedArtifactUncheckedUpdateManyInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    userId?: Prisma.StringFieldUpdateOperationsInput | string;
    type?: Prisma.StringFieldUpdateOperationsInput | string;
    captureTime?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    rawPath?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    parsed?: Prisma.JsonNullValueInput | runtime.InputJsonValue;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type ImportedArtifactListRelationFilter = {
    every?: Prisma.ImportedArtifactWhereInput;
    some?: Prisma.ImportedArtifactWhereInput;
    none?: Prisma.ImportedArtifactWhereInput;
};
export type ImportedArtifactOrderByRelationAggregateInput = {
    _count?: Prisma.SortOrder;
};
export type ImportedArtifactCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    userId?: Prisma.SortOrder;
    type?: Prisma.SortOrder;
    captureTime?: Prisma.SortOrder;
    rawPath?: Prisma.SortOrder;
    parsed?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
};
export type ImportedArtifactMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    userId?: Prisma.SortOrder;
    type?: Prisma.SortOrder;
    captureTime?: Prisma.SortOrder;
    rawPath?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
};
export type ImportedArtifactMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    userId?: Prisma.SortOrder;
    type?: Prisma.SortOrder;
    captureTime?: Prisma.SortOrder;
    rawPath?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
};
export type ImportedArtifactCreateNestedManyWithoutUserInput = {
    create?: Prisma.XOR<Prisma.ImportedArtifactCreateWithoutUserInput, Prisma.ImportedArtifactUncheckedCreateWithoutUserInput> | Prisma.ImportedArtifactCreateWithoutUserInput[] | Prisma.ImportedArtifactUncheckedCreateWithoutUserInput[];
    connectOrCreate?: Prisma.ImportedArtifactCreateOrConnectWithoutUserInput | Prisma.ImportedArtifactCreateOrConnectWithoutUserInput[];
    createMany?: Prisma.ImportedArtifactCreateManyUserInputEnvelope;
    connect?: Prisma.ImportedArtifactWhereUniqueInput | Prisma.ImportedArtifactWhereUniqueInput[];
};
export type ImportedArtifactUncheckedCreateNestedManyWithoutUserInput = {
    create?: Prisma.XOR<Prisma.ImportedArtifactCreateWithoutUserInput, Prisma.ImportedArtifactUncheckedCreateWithoutUserInput> | Prisma.ImportedArtifactCreateWithoutUserInput[] | Prisma.ImportedArtifactUncheckedCreateWithoutUserInput[];
    connectOrCreate?: Prisma.ImportedArtifactCreateOrConnectWithoutUserInput | Prisma.ImportedArtifactCreateOrConnectWithoutUserInput[];
    createMany?: Prisma.ImportedArtifactCreateManyUserInputEnvelope;
    connect?: Prisma.ImportedArtifactWhereUniqueInput | Prisma.ImportedArtifactWhereUniqueInput[];
};
export type ImportedArtifactUpdateManyWithoutUserNestedInput = {
    create?: Prisma.XOR<Prisma.ImportedArtifactCreateWithoutUserInput, Prisma.ImportedArtifactUncheckedCreateWithoutUserInput> | Prisma.ImportedArtifactCreateWithoutUserInput[] | Prisma.ImportedArtifactUncheckedCreateWithoutUserInput[];
    connectOrCreate?: Prisma.ImportedArtifactCreateOrConnectWithoutUserInput | Prisma.ImportedArtifactCreateOrConnectWithoutUserInput[];
    upsert?: Prisma.ImportedArtifactUpsertWithWhereUniqueWithoutUserInput | Prisma.ImportedArtifactUpsertWithWhereUniqueWithoutUserInput[];
    createMany?: Prisma.ImportedArtifactCreateManyUserInputEnvelope;
    set?: Prisma.ImportedArtifactWhereUniqueInput | Prisma.ImportedArtifactWhereUniqueInput[];
    disconnect?: Prisma.ImportedArtifactWhereUniqueInput | Prisma.ImportedArtifactWhereUniqueInput[];
    delete?: Prisma.ImportedArtifactWhereUniqueInput | Prisma.ImportedArtifactWhereUniqueInput[];
    connect?: Prisma.ImportedArtifactWhereUniqueInput | Prisma.ImportedArtifactWhereUniqueInput[];
    update?: Prisma.ImportedArtifactUpdateWithWhereUniqueWithoutUserInput | Prisma.ImportedArtifactUpdateWithWhereUniqueWithoutUserInput[];
    updateMany?: Prisma.ImportedArtifactUpdateManyWithWhereWithoutUserInput | Prisma.ImportedArtifactUpdateManyWithWhereWithoutUserInput[];
    deleteMany?: Prisma.ImportedArtifactScalarWhereInput | Prisma.ImportedArtifactScalarWhereInput[];
};
export type ImportedArtifactUncheckedUpdateManyWithoutUserNestedInput = {
    create?: Prisma.XOR<Prisma.ImportedArtifactCreateWithoutUserInput, Prisma.ImportedArtifactUncheckedCreateWithoutUserInput> | Prisma.ImportedArtifactCreateWithoutUserInput[] | Prisma.ImportedArtifactUncheckedCreateWithoutUserInput[];
    connectOrCreate?: Prisma.ImportedArtifactCreateOrConnectWithoutUserInput | Prisma.ImportedArtifactCreateOrConnectWithoutUserInput[];
    upsert?: Prisma.ImportedArtifactUpsertWithWhereUniqueWithoutUserInput | Prisma.ImportedArtifactUpsertWithWhereUniqueWithoutUserInput[];
    createMany?: Prisma.ImportedArtifactCreateManyUserInputEnvelope;
    set?: Prisma.ImportedArtifactWhereUniqueInput | Prisma.ImportedArtifactWhereUniqueInput[];
    disconnect?: Prisma.ImportedArtifactWhereUniqueInput | Prisma.ImportedArtifactWhereUniqueInput[];
    delete?: Prisma.ImportedArtifactWhereUniqueInput | Prisma.ImportedArtifactWhereUniqueInput[];
    connect?: Prisma.ImportedArtifactWhereUniqueInput | Prisma.ImportedArtifactWhereUniqueInput[];
    update?: Prisma.ImportedArtifactUpdateWithWhereUniqueWithoutUserInput | Prisma.ImportedArtifactUpdateWithWhereUniqueWithoutUserInput[];
    updateMany?: Prisma.ImportedArtifactUpdateManyWithWhereWithoutUserInput | Prisma.ImportedArtifactUpdateManyWithWhereWithoutUserInput[];
    deleteMany?: Prisma.ImportedArtifactScalarWhereInput | Prisma.ImportedArtifactScalarWhereInput[];
};
export type ImportedArtifactCreateWithoutUserInput = {
    id?: string;
    type: string;
    captureTime?: string | null;
    rawPath?: string | null;
    parsed: Prisma.JsonNullValueInput | runtime.InputJsonValue;
    createdAt?: Date | string;
};
export type ImportedArtifactUncheckedCreateWithoutUserInput = {
    id?: string;
    type: string;
    captureTime?: string | null;
    rawPath?: string | null;
    parsed: Prisma.JsonNullValueInput | runtime.InputJsonValue;
    createdAt?: Date | string;
};
export type ImportedArtifactCreateOrConnectWithoutUserInput = {
    where: Prisma.ImportedArtifactWhereUniqueInput;
    create: Prisma.XOR<Prisma.ImportedArtifactCreateWithoutUserInput, Prisma.ImportedArtifactUncheckedCreateWithoutUserInput>;
};
export type ImportedArtifactCreateManyUserInputEnvelope = {
    data: Prisma.ImportedArtifactCreateManyUserInput | Prisma.ImportedArtifactCreateManyUserInput[];
};
export type ImportedArtifactUpsertWithWhereUniqueWithoutUserInput = {
    where: Prisma.ImportedArtifactWhereUniqueInput;
    update: Prisma.XOR<Prisma.ImportedArtifactUpdateWithoutUserInput, Prisma.ImportedArtifactUncheckedUpdateWithoutUserInput>;
    create: Prisma.XOR<Prisma.ImportedArtifactCreateWithoutUserInput, Prisma.ImportedArtifactUncheckedCreateWithoutUserInput>;
};
export type ImportedArtifactUpdateWithWhereUniqueWithoutUserInput = {
    where: Prisma.ImportedArtifactWhereUniqueInput;
    data: Prisma.XOR<Prisma.ImportedArtifactUpdateWithoutUserInput, Prisma.ImportedArtifactUncheckedUpdateWithoutUserInput>;
};
export type ImportedArtifactUpdateManyWithWhereWithoutUserInput = {
    where: Prisma.ImportedArtifactScalarWhereInput;
    data: Prisma.XOR<Prisma.ImportedArtifactUpdateManyMutationInput, Prisma.ImportedArtifactUncheckedUpdateManyWithoutUserInput>;
};
export type ImportedArtifactScalarWhereInput = {
    AND?: Prisma.ImportedArtifactScalarWhereInput | Prisma.ImportedArtifactScalarWhereInput[];
    OR?: Prisma.ImportedArtifactScalarWhereInput[];
    NOT?: Prisma.ImportedArtifactScalarWhereInput | Prisma.ImportedArtifactScalarWhereInput[];
    id?: Prisma.StringFilter<"ImportedArtifact"> | string;
    userId?: Prisma.StringFilter<"ImportedArtifact"> | string;
    type?: Prisma.StringFilter<"ImportedArtifact"> | string;
    captureTime?: Prisma.StringNullableFilter<"ImportedArtifact"> | string | null;
    rawPath?: Prisma.StringNullableFilter<"ImportedArtifact"> | string | null;
    parsed?: Prisma.JsonFilter<"ImportedArtifact">;
    createdAt?: Prisma.DateTimeFilter<"ImportedArtifact"> | Date | string;
};
export type ImportedArtifactCreateManyUserInput = {
    id?: string;
    type: string;
    captureTime?: string | null;
    rawPath?: string | null;
    parsed: Prisma.JsonNullValueInput | runtime.InputJsonValue;
    createdAt?: Date | string;
};
export type ImportedArtifactUpdateWithoutUserInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    type?: Prisma.StringFieldUpdateOperationsInput | string;
    captureTime?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    rawPath?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    parsed?: Prisma.JsonNullValueInput | runtime.InputJsonValue;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type ImportedArtifactUncheckedUpdateWithoutUserInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    type?: Prisma.StringFieldUpdateOperationsInput | string;
    captureTime?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    rawPath?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    parsed?: Prisma.JsonNullValueInput | runtime.InputJsonValue;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type ImportedArtifactUncheckedUpdateManyWithoutUserInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    type?: Prisma.StringFieldUpdateOperationsInput | string;
    captureTime?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    rawPath?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    parsed?: Prisma.JsonNullValueInput | runtime.InputJsonValue;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type ImportedArtifactSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    userId?: boolean;
    type?: boolean;
    captureTime?: boolean;
    rawPath?: boolean;
    parsed?: boolean;
    createdAt?: boolean;
    user?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["importedArtifact"]>;
export type ImportedArtifactSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    userId?: boolean;
    type?: boolean;
    captureTime?: boolean;
    rawPath?: boolean;
    parsed?: boolean;
    createdAt?: boolean;
    user?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["importedArtifact"]>;
export type ImportedArtifactSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    userId?: boolean;
    type?: boolean;
    captureTime?: boolean;
    rawPath?: boolean;
    parsed?: boolean;
    createdAt?: boolean;
    user?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["importedArtifact"]>;
export type ImportedArtifactSelectScalar = {
    id?: boolean;
    userId?: boolean;
    type?: boolean;
    captureTime?: boolean;
    rawPath?: boolean;
    parsed?: boolean;
    createdAt?: boolean;
};
export type ImportedArtifactOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "userId" | "type" | "captureTime" | "rawPath" | "parsed" | "createdAt", ExtArgs["result"]["importedArtifact"]>;
export type ImportedArtifactInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    user?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
};
export type ImportedArtifactIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    user?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
};
export type ImportedArtifactIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    user?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
};
export type $ImportedArtifactPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "ImportedArtifact";
    objects: {
        user: Prisma.$UserPayload<ExtArgs>;
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: string;
        userId: string;
        type: string;
        captureTime: string | null;
        rawPath: string | null;
        parsed: runtime.JsonValue;
        createdAt: Date;
    }, ExtArgs["result"]["importedArtifact"]>;
    composites: {};
};
export type ImportedArtifactGetPayload<S extends boolean | null | undefined | ImportedArtifactDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$ImportedArtifactPayload, S>;
export type ImportedArtifactCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<ImportedArtifactFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: ImportedArtifactCountAggregateInputType | true;
};
export interface ImportedArtifactDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['ImportedArtifact'];
        meta: {
            name: 'ImportedArtifact';
        };
    };
    findUnique<T extends ImportedArtifactFindUniqueArgs>(args: Prisma.SelectSubset<T, ImportedArtifactFindUniqueArgs<ExtArgs>>): Prisma.Prisma__ImportedArtifactClient<runtime.Types.Result.GetResult<Prisma.$ImportedArtifactPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends ImportedArtifactFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, ImportedArtifactFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__ImportedArtifactClient<runtime.Types.Result.GetResult<Prisma.$ImportedArtifactPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends ImportedArtifactFindFirstArgs>(args?: Prisma.SelectSubset<T, ImportedArtifactFindFirstArgs<ExtArgs>>): Prisma.Prisma__ImportedArtifactClient<runtime.Types.Result.GetResult<Prisma.$ImportedArtifactPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends ImportedArtifactFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, ImportedArtifactFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__ImportedArtifactClient<runtime.Types.Result.GetResult<Prisma.$ImportedArtifactPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends ImportedArtifactFindManyArgs>(args?: Prisma.SelectSubset<T, ImportedArtifactFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$ImportedArtifactPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends ImportedArtifactCreateArgs>(args: Prisma.SelectSubset<T, ImportedArtifactCreateArgs<ExtArgs>>): Prisma.Prisma__ImportedArtifactClient<runtime.Types.Result.GetResult<Prisma.$ImportedArtifactPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends ImportedArtifactCreateManyArgs>(args?: Prisma.SelectSubset<T, ImportedArtifactCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    createManyAndReturn<T extends ImportedArtifactCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, ImportedArtifactCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$ImportedArtifactPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    delete<T extends ImportedArtifactDeleteArgs>(args: Prisma.SelectSubset<T, ImportedArtifactDeleteArgs<ExtArgs>>): Prisma.Prisma__ImportedArtifactClient<runtime.Types.Result.GetResult<Prisma.$ImportedArtifactPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends ImportedArtifactUpdateArgs>(args: Prisma.SelectSubset<T, ImportedArtifactUpdateArgs<ExtArgs>>): Prisma.Prisma__ImportedArtifactClient<runtime.Types.Result.GetResult<Prisma.$ImportedArtifactPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends ImportedArtifactDeleteManyArgs>(args?: Prisma.SelectSubset<T, ImportedArtifactDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends ImportedArtifactUpdateManyArgs>(args: Prisma.SelectSubset<T, ImportedArtifactUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateManyAndReturn<T extends ImportedArtifactUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, ImportedArtifactUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$ImportedArtifactPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    upsert<T extends ImportedArtifactUpsertArgs>(args: Prisma.SelectSubset<T, ImportedArtifactUpsertArgs<ExtArgs>>): Prisma.Prisma__ImportedArtifactClient<runtime.Types.Result.GetResult<Prisma.$ImportedArtifactPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends ImportedArtifactCountArgs>(args?: Prisma.Subset<T, ImportedArtifactCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], ImportedArtifactCountAggregateOutputType> : number>;
    aggregate<T extends ImportedArtifactAggregateArgs>(args: Prisma.Subset<T, ImportedArtifactAggregateArgs>): Prisma.PrismaPromise<GetImportedArtifactAggregateType<T>>;
    groupBy<T extends ImportedArtifactGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: ImportedArtifactGroupByArgs['orderBy'];
    } : {
        orderBy?: ImportedArtifactGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, ImportedArtifactGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetImportedArtifactGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: ImportedArtifactFieldRefs;
}
export interface Prisma__ImportedArtifactClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    user<T extends Prisma.UserDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.UserDefaultArgs<ExtArgs>>): Prisma.Prisma__UserClient<runtime.Types.Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface ImportedArtifactFieldRefs {
    readonly id: Prisma.FieldRef<"ImportedArtifact", 'String'>;
    readonly userId: Prisma.FieldRef<"ImportedArtifact", 'String'>;
    readonly type: Prisma.FieldRef<"ImportedArtifact", 'String'>;
    readonly captureTime: Prisma.FieldRef<"ImportedArtifact", 'String'>;
    readonly rawPath: Prisma.FieldRef<"ImportedArtifact", 'String'>;
    readonly parsed: Prisma.FieldRef<"ImportedArtifact", 'Json'>;
    readonly createdAt: Prisma.FieldRef<"ImportedArtifact", 'DateTime'>;
}
export type ImportedArtifactFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ImportedArtifactSelect<ExtArgs> | null;
    omit?: Prisma.ImportedArtifactOmit<ExtArgs> | null;
    include?: Prisma.ImportedArtifactInclude<ExtArgs> | null;
    where: Prisma.ImportedArtifactWhereUniqueInput;
};
export type ImportedArtifactFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ImportedArtifactSelect<ExtArgs> | null;
    omit?: Prisma.ImportedArtifactOmit<ExtArgs> | null;
    include?: Prisma.ImportedArtifactInclude<ExtArgs> | null;
    where: Prisma.ImportedArtifactWhereUniqueInput;
};
export type ImportedArtifactFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type ImportedArtifactFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type ImportedArtifactFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type ImportedArtifactCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ImportedArtifactSelect<ExtArgs> | null;
    omit?: Prisma.ImportedArtifactOmit<ExtArgs> | null;
    include?: Prisma.ImportedArtifactInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.ImportedArtifactCreateInput, Prisma.ImportedArtifactUncheckedCreateInput>;
};
export type ImportedArtifactCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.ImportedArtifactCreateManyInput | Prisma.ImportedArtifactCreateManyInput[];
};
export type ImportedArtifactCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ImportedArtifactSelectCreateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.ImportedArtifactOmit<ExtArgs> | null;
    data: Prisma.ImportedArtifactCreateManyInput | Prisma.ImportedArtifactCreateManyInput[];
    include?: Prisma.ImportedArtifactIncludeCreateManyAndReturn<ExtArgs> | null;
};
export type ImportedArtifactUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ImportedArtifactSelect<ExtArgs> | null;
    omit?: Prisma.ImportedArtifactOmit<ExtArgs> | null;
    include?: Prisma.ImportedArtifactInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.ImportedArtifactUpdateInput, Prisma.ImportedArtifactUncheckedUpdateInput>;
    where: Prisma.ImportedArtifactWhereUniqueInput;
};
export type ImportedArtifactUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.ImportedArtifactUpdateManyMutationInput, Prisma.ImportedArtifactUncheckedUpdateManyInput>;
    where?: Prisma.ImportedArtifactWhereInput;
    limit?: number;
};
export type ImportedArtifactUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ImportedArtifactSelectUpdateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.ImportedArtifactOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.ImportedArtifactUpdateManyMutationInput, Prisma.ImportedArtifactUncheckedUpdateManyInput>;
    where?: Prisma.ImportedArtifactWhereInput;
    limit?: number;
    include?: Prisma.ImportedArtifactIncludeUpdateManyAndReturn<ExtArgs> | null;
};
export type ImportedArtifactUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ImportedArtifactSelect<ExtArgs> | null;
    omit?: Prisma.ImportedArtifactOmit<ExtArgs> | null;
    include?: Prisma.ImportedArtifactInclude<ExtArgs> | null;
    where: Prisma.ImportedArtifactWhereUniqueInput;
    create: Prisma.XOR<Prisma.ImportedArtifactCreateInput, Prisma.ImportedArtifactUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.ImportedArtifactUpdateInput, Prisma.ImportedArtifactUncheckedUpdateInput>;
};
export type ImportedArtifactDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ImportedArtifactSelect<ExtArgs> | null;
    omit?: Prisma.ImportedArtifactOmit<ExtArgs> | null;
    include?: Prisma.ImportedArtifactInclude<ExtArgs> | null;
    where: Prisma.ImportedArtifactWhereUniqueInput;
};
export type ImportedArtifactDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.ImportedArtifactWhereInput;
    limit?: number;
};
export type ImportedArtifactDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ImportedArtifactSelect<ExtArgs> | null;
    omit?: Prisma.ImportedArtifactOmit<ExtArgs> | null;
    include?: Prisma.ImportedArtifactInclude<ExtArgs> | null;
};
