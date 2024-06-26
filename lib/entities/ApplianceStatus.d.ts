import { ApplianceStatusCode } from '../enums/ApplianceStatusCode';
import { BaseEntity } from '../entities/BaseEntity';
export declare class ApplianceStatus extends BaseEntity {
    applianceId: string;
    accountId: string;
    status: ApplianceStatusCode;
    state: number;
    duration: number;
    cpuAvg: number;
    cpuMax: number;
    ram: number;
    loadAvg: number;
    uploadSpeed: number;
    downloadSpeed: number;
    speedTestedOn: number;
    uptime: number;
    id: string;
    _type: string;
    createdOn: number;
    updatedOn: number;
    path: string;
}
