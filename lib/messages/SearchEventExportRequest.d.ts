import { ObjectTypeCode } from '../enums/ObjectTypeCode';
export declare class SearchEventExportRequest {
    id: string;
    sensorId: string[];
    objectType: ObjectTypeCode[];
    from: number;
    to: number;
    sort: string;
    format: string;
    fields: string[];
    constructor(id?: string, sensorId?: string[], objectType?: ObjectTypeCode[], from?: number, to?: number, sort?: string, format?: string, fields?: string[]);
}
