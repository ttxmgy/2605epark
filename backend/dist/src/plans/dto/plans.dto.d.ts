import { GuideMode } from '@prisma/client';
export declare class LocationDto {
    lat: number;
    lng: number;
}
export declare class GeneratePlanDto {
    parkId: string;
    mode?: GuideMode;
    template?: string;
    location: LocationDto;
}
export declare class ReplanDto {
    planId: string;
    eventType: string;
    currentPoiId?: string;
    location: LocationDto;
    currentWaitMin?: number;
    lastWaitMin?: number;
}
