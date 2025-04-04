import { SensorStatusCode } from '../enums/SensorStatusCode';
import { StreamTypeCode } from '../enums/StreamTypeCode';
import { SensorTypeCode } from '../enums/SensorTypeCode';
export declare class AppliancesServiceFindSensorsRequest {
    id: string;
    search: string;
    type: SensorTypeCode[];
    status: SensorStatusCode[];
    stream: StreamTypeCode[];
    sort: string;
    page: number;
    pageSize: number;
    format: string;
    fields: string[];
    fileName: string;
    constructor(id?: string, search?: string, type?: SensorTypeCode[], status?: SensorStatusCode[], stream?: StreamTypeCode[], sort?: string, page?: number, pageSize?: number, format?: string, fields?: string[], fileName?: string);
}
