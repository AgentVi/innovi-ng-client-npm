import { BaseEntity } from '../entities/BaseEntity';
import { IntegrationActionFilter } from '../entities/IntegrationActionFilter';
export declare class IntegrationAction extends BaseEntity {
    accountId: string;
    folderId: string;
    name: string;
    targetId: string;
    recipients: string[];
    subject: string;
    body: string;
    mimeType: string;
    enabled: boolean;
    filter: IntegrationActionFilter;
    id: string;
    _type: string;
    createdOn: number;
    updatedOn: number;
}
