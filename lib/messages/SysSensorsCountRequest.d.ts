import { SensorTypeCode } from '../enums/SensorTypeCode';
import { SensorStatusCode } from '../enums/SensorStatusCode';
import { StreamTypeCode } from '../enums/StreamTypeCode';
export declare class SysSensorsCountRequest {
    accountId: string;
    folderId: string;
    subFolders: boolean;
    sensorType: SensorTypeCode;
    status: SensorStatusCode;
    streamType: StreamTypeCode;
    constructor(accountId?: string, folderId?: string, subFolders?: boolean, sensorType?: SensorTypeCode, status?: SensorStatusCode, streamType?: StreamTypeCode);
}
