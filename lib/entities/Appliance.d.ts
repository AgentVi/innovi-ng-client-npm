import { AgentStatusCode } from '../enums/AgentStatusCode';
import { ApplianceCapabilities } from '../entities/ApplianceCapabilities';
import { Thresholds } from '../common/Thresholds';
import { BaseEntity } from '../entities/BaseEntity';
import { ApplianceStatusCode } from '../enums/ApplianceStatusCode';
export declare class Appliance extends BaseEntity {
    name: string;
    accountId: string;
    folderId: string;
    status: ApplianceStatusCode;
    state: number;
    agentStatus: AgentStatusCode;
    agentState: number;
    statusReportedOn: number;
    pairingKey: string;
    deletedOn: number;
    reportedOn: number;
    machineId: string;
    configurationId: string;
    configurationVersionId: string;
    capabilities: ApplianceCapabilities;
    eventIntegrationId: string;
    metadataIntegrationId: string;
    deviceProfileId: string;
    healthThresholds: Thresholds;
    cpuAvg: number;
    ram: number;
    uptime: number;
    externalIds: string[];
    id: string;
    _type: string;
    createdOn: number;
    updatedOn: number;
    path: string;
}
