import { BaseEntity } from '../entities/BaseEntity';
export declare class ApplianceStatus extends BaseEntity {
    applianceId: string;
    cpuAvg: number;
    cpuMax: number;
    ram: number;
    loadAvg: number;
    id: string;
    _type: string;
    createdOn: number;
    updatedOn: number;
}
