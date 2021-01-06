import { BaseEntity } from '../entities/BaseEntity';
export declare class SensorUsage extends BaseEntity {
    accountId: string;
    sensorId: string;
    dayId: number;
    minutes: number;
    id: string;
    _type: string;
    createdOn: number;
    updatedOn: number;
    path: string;
}
