import { BaseEntity } from '../entities/BaseEntity';
export declare class Preset extends BaseEntity {
    accountId: string;
    sensorId: string;
    presetNum: number;
    refImageUrl: string;
    calibration: any;
    id: string;
    _type: string;
    createdOn: number;
    updatedOn: number;
    path: string;
}
