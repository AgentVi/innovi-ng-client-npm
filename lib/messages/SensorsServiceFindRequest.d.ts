import { StreamTypeCode } from '../enums/StreamTypeCode';
import { SensorTypeCode } from '../enums/SensorTypeCode';
import { SensorStatusCode } from '../enums/SensorStatusCode';
export declare class SensorsServiceFindRequest {
    folderId: string;
    subFolders: boolean;
    applianceId: string;
    physical: boolean;
    search: string;
    type: SensorTypeCode[];
    status: SensorStatusCode[];
    stream: StreamTypeCode[];
    sort: string;
    page: number;
    pageSize: number;
    constructor(folderId?: string, subFolders?: boolean, applianceId?: string, physical?: boolean, search?: string, type?: SensorTypeCode[], status?: SensorStatusCode[], stream?: StreamTypeCode[], sort?: string, page?: number, pageSize?: number);
}
