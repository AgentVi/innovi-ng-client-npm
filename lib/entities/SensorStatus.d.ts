import { SensorStatusCode } from '../enums/SensorStatusCode';
import { BaseEntity } from '../entities/BaseEntity';
import { SensorStatusMask } from '../enums/SensorStatusMask';
export declare class SensorStatus extends BaseEntity {
    sensorId: string;
    accountId: string;
    mask: SensorStatusMask;
    status: SensorStatusCode;
    id: string;
    _type: string;
    createdOn: number;
    updatedOn: number;
}
