import { LevelTypeCode } from '../enums/LevelTypeCode';
export declare class SearchServiceSimilarRequest {
    objectId: number;
    sensorId: string;
    timestamp: number;
    from: number;
    to: number;
    similarity: LevelTypeCode;
    constructor(objectId?: number, sensorId?: string, timestamp?: number, from?: number, to?: number, similarity?: LevelTypeCode);
}
