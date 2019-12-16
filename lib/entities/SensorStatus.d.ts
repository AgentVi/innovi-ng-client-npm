import { SensorStatusCode } from '../enums/SensorStatusCode';
import { BaseEntity } from '../entities/BaseEntity';
export declare class SensorStatus extends BaseEntity {
    sensorId: string;
    accountId: string;
    mask: number;
    status: SensorStatusCode;
    id: string;
    _type: string;
    createdOn: number;
    updatedOn: number;
}
