import { ObjectTypeCode } from '../enums/ObjectTypeCode';
import { LevelTypeCode } from '../enums/LevelTypeCode';
export declare class SearchEventExportRequest {
    sessionId: string;
    sensorId: string[];
    objectType: ObjectTypeCode[];
    tolerance: LevelTypeCode;
    from: number;
    to: number;
    sort: string;
    format: string;
    fields: string[];
    fileName: string;
    constructor(sessionId?: string, sensorId?: string[], objectType?: ObjectTypeCode[], tolerance?: LevelTypeCode, from?: number, to?: number, sort?: string, format?: string, fields?: string[], fileName?: string);
}
