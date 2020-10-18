import { ObjectTypeCode } from '../enums/ObjectTypeCode';
export declare class SearchEventExportRequest {
    sessionId: string;
    sensorId: string[];
    objectType: ObjectTypeCode[];
    from: number;
    to: number;
    sort: string;
    format: string;
    fields: string[];
    constructor(sessionId?: string, sensorId?: string[], objectType?: ObjectTypeCode[], from?: number, to?: number, sort?: string, format?: string, fields?: string[]);
}
