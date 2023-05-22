import { POIMinimalResponse } from '../messages/POIMinimalResponse';
export declare class StaticWatchlistWithPOIs {
    iD: string;
    name: string;
    type: string;
    totalPOIs: number;
    pOIs: POIMinimalResponse[];
    constructor(iD?: string, name?: string, type?: string, totalPOIs?: number, pOIs?: POIMinimalResponse[]);
}
