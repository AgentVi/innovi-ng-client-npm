import { BaseEntity } from '../entities/BaseEntity';
export declare class PoiPicture extends BaseEntity {
    displayName: string;
    poiWatchlists: string[];
    expirationTime: number;
    displayImg: string;
    id: string;
    _type: string;
    createdOn: number;
    updatedOn: number;
    path: string;
}
