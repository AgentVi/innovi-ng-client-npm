import { BaseEntity } from '../entities/BaseEntity';
import { SensorStatusCode } from '../enums/SensorStatusCode';
export declare class SensorStatus extends BaseEntity {
    sensorId: string;
    accountId: string;
    state: number;
    status: SensorStatusCode;
    codec: string;
    resolution: string;
    framerate: number;
    recordingStartTime: number;
    recordingEndTime: number;
    usedStorageMB: number;
    id: string;
    _type: string;
    createdOn: number;
    updatedOn: number;
    path: string;
}
