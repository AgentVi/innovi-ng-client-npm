import { BaseEntity } from '../entities/BaseEntity';
export declare class ApplianceLog extends BaseEntity {
    accountId: string;
    applianceId: string;
    containerId: string;
    containerName: string;
    containerTag: string;
    versionId: string;
    level: string;
    data: string;
    id: string;
    _type: string;
    createdOn: number;
    updatedOn: number;
}
