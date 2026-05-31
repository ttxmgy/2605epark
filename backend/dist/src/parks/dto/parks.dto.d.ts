import { PoiType } from '@prisma/client';
export declare class CreateParkDto {
    name: string;
}
export declare class CreatePoiDto {
    type: PoiType;
    name: string;
    zone?: string;
    lat: number;
    lng: number;
}
