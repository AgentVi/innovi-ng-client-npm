import { SensorStatusCode } from '../enums/SensorStatusCode';
import { StreamTypeCode } from '../enums/StreamTypeCode';
import { SensorTypeCode } from '../enums/SensorTypeCode';
export declare class SysSensorsCountRequest {
    accountId: string;
    folderId: string;
    subFolders: boolean;
    sensorType: SensorTypeCode;
    status: SensorStatusCode;
    streamType: StreamTypeCode;
    constructor(accountId?: string, folderId?: string, subFolders?: boolean, sensorType?: SensorTypeCode, status?: SensorStatusCode, streamType?: StreamTypeCode);
}
