import { SensorStatusCode } from '../enums/SensorStatusCode';
import { StreamTypeCode } from '../enums/StreamTypeCode';
import { SensorTypeCode } from '../enums/SensorTypeCode';
export declare class SensorsServiceExportRequest {
    folderId: string;
    subFolders: boolean;
    search: string;
    type: SensorTypeCode[];
    status: SensorStatusCode[];
    stream: StreamTypeCode[];
    sort: string;
    format: string;
    fields: string[];
    fileName: string;
    constructor(folderId?: string, subFolders?: boolean, search?: string, type?: SensorTypeCode[], status?: SensorStatusCode[], stream?: StreamTypeCode[], sort?: string, format?: string, fields?: string[], fileName?: string);
}
