import { SensorTypeCode } from '../enums/SensorTypeCode';
import { SensorStatusCode } from '../enums/SensorStatusCode';
import { StreamTypeCode } from '../enums/StreamTypeCode';
export declare class SensorsServiceFindRequest {
    folderId: string;
    subFolders: boolean;
    search: string;
    type: SensorTypeCode;
    status: SensorStatusCode;
    stream: StreamTypeCode;
    sort: string;
    page: number;
    pageSize: number;
}
