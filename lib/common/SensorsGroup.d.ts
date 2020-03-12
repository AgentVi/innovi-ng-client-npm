import { SensorInfo } from '../common/SensorInfo';
export declare class SensorsGroup {
    accountId: string;
    folderId: string;
    applianceId: string;
    agentId: string;
    sensors: SensorInfo[];
    constructor(accountId?: string, folderId?: string, applianceId?: string, agentId?: string, sensors?: SensorInfo[]);
}
