import { ObjectTypeCode } from '../enums/ObjectTypeCode';
export declare class SearchEventFindRequest {
    id: string;
    sensorId: string[];
    objectType: ObjectTypeCode[];
    from: number;
    to: number;
    sort: string;
    page: number;
    pageSize: number;
    constructor(id?: string, sensorId?: string[], objectType?: ObjectTypeCode[], from?: number, to?: number, sort?: string, page?: number, pageSize?: number);
}
