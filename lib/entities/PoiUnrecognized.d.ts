import { BaseEntity } from '../entities/BaseEntity';
export declare class PoiUnrecognized extends BaseEntity {
    poiId: string;
    displayName: string;
    displayImg: string;
    poiWatchlists: string[];
    embedding: number[];
    score: number;
    age: number;
    gender: number;
    timestamp: number;
    createdAt: number;
    updatedAt: number;
    id: string;
    _type: string;
    createdOn: number;
    updatedOn: number;
    path: string;
}
