import { BaseEntity } from '../entities/BaseEntity';
import { ApplianceStatusCode } from '../enums/ApplianceStatusCode';
import { ApplianceCapabilities } from '../entities/ApplianceCapabilities';
import { Thresholds } from '../common/Thresholds';
export declare class Appliance extends BaseEntity {
    name: string;
    accountId: string;
    folderId: string;
    status: ApplianceStatusCode;
    state: number;
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
    path: string;
    healthThresholds: Thresholds;
    id: string;
    _type: string;
    createdOn: number;
    updatedOn: number;
}
