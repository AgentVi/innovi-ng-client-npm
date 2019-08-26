import { ApplianceStatusCode } from '../enums/ApplianceStatusCode';
import { ApplianceCapabilities } from '../entities/ApplianceCapabilities';
import { BaseEntity } from '../entities/BaseEntity';
export declare class Appliance extends BaseEntity {
    name: string;
    accountId: string;
    folderId: string;
    status: ApplianceStatusCode;
    pairingKey: string;
    deletedOn: number;
    reportedOn: number;
    machineId: string;
    configurationId: string;
    configurationVersionId: string;
    capabilities: ApplianceCapabilities;
    id: string;
    _type: string;
    createdOn: number;
    updatedOn: number;
}
