import { BaseEntity } from '../entities/BaseEntity';
import { SensorStatusMask } from '../enums/SensorStatusMask';
import { SensorStatusCode } from '../enums/SensorStatusCode';
export declare class SensorHealth extends BaseEntity {
    sensorId: string;
    mask: SensorStatusMask;
    status: SensorStatusCode;
    id: string;
    _type: string;
    createdOn: number;
    updatedOn: number;
}
