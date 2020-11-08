import { SensorStatusCode } from '../enums/SensorStatusCode';
import { BaseEntity } from '../entities/BaseEntity';
export declare class SensorStatus extends BaseEntity {
    sensorId: string;
    accountId: string;
    state: number;
    status: SensorStatusCode;
    codec: string;
    resolution: string;
    framerate: number;
    id: string;
    _type: string;
    createdOn: number;
    updatedOn: number;
}
