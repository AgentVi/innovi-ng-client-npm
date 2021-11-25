import { BaseEntity } from '../entities/BaseEntity';
import { ApplianceStatusCode } from '../enums/ApplianceStatusCode';
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
    uploadSpeed: string;
    downloadSpeed: string;
    speedTestedOn: number;
    uptime: number;
    id: string;
    _type: string;
    createdOn: number;
    updatedOn: number;
    path: string;
}
