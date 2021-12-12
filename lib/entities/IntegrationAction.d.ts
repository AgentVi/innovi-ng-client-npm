import { ActionModeCode } from '../enums/ActionModeCode';
import { IntegrationActionFilter } from '../entities/IntegrationActionFilter';
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
    mode: ActionModeCode;
    filter: IntegrationActionFilter;
    id: string;
    _type: string;
    createdOn: number;
    updatedOn: number;
    path: string;
}
