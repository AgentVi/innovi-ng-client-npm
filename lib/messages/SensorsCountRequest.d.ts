import { SensorStatusCode } from '../enums/SensorStatusCode';
import { StreamTypeCode } from '../enums/StreamTypeCode';
import { SensorTypeCode } from '../enums/SensorTypeCode';
export declare class SensorsCountRequest {
    folderId: string;
    subFolders: boolean;
    sensorType: SensorTypeCode;
    status: SensorStatusCode;
    streamType: StreamTypeCode;
    constructor(folderId?: string, subFolders?: boolean, sensorType?: SensorTypeCode, status?: SensorStatusCode, streamType?: StreamTypeCode);
}
