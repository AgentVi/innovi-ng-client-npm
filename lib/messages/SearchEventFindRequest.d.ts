import { ObjectTypeCode } from '../enums/ObjectTypeCode';
import { LevelTypeCode } from '../enums/LevelTypeCode';
export declare class SearchEventFindRequest {
    sessionId: string;
    sensorId: string[];
    objectType: ObjectTypeCode[];
    tolerance: LevelTypeCode;
    from: number;
    to: number;
    sort: string;
    page: number;
    pageSize: number;
    constructor(sessionId?: string, sensorId?: string[], objectType?: ObjectTypeCode[], tolerance?: LevelTypeCode, from?: number, to?: number, sort?: string, page?: number, pageSize?: number);
}
