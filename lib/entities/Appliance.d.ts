import { BaseEntity } from '../entities/BaseEntity';
import { ApplianceStatusCode } from '../enums/ApplianceStatusCode';
import { ApplianceCapabilities } from '../entities/ApplianceCapabilities';
import { AgentIntegration } from '../entities/AgentIntegration';
export declare class Appliance extends BaseEntity {
    name: string;
    accountId: string;
    folderId: string;
    status: ApplianceStatusCode;
    statusReportedOn: number;
    pairingKey: string;
    deletedOn: number;
    reportedOn: number;
    machineId: string;
    configurationId: string;
    configurationVersionId: string;
    capabilities: ApplianceCapabilities;
    integrations: AgentIntegration[];
    id: string;
    _type: string;
    createdOn: number;
    updatedOn: number;
}
