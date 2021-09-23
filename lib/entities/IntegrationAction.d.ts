import { BaseEntity } from '../entities/BaseEntity';
import { EntityTypeCode } from '../enums/EntityTypeCode';
export declare class IntegrationAction extends BaseEntity {
    accountId: string;
    folderId: string;
    name: string;
    targetId: string;
    entityType: EntityTypeCode;
    recipients: string[];
    subject: string;
    body: string;
    mimeType: string;
    enabled: boolean;
    filters: any;
    id: string;
    _type: string;
    createdOn: number;
    updatedOn: number;
    path: string;
}
