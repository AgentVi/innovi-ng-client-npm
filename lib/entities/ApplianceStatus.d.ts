import { BaseEntity } from '../entities/BaseEntity';
import { ApplianceStatusCode } from '../enums/ApplianceStatusCode';
export declare class ApplianceStatus extends BaseEntity {
    applianceId: string;
    accountId: string;
    status: ApplianceStatusCode;
    cpuAvg: number;
    cpuMax: number;
    ram: number;
    loadAvg: number;
    id: string;
    _type: string;
    createdOn: number;
    updatedOn: number;
}
