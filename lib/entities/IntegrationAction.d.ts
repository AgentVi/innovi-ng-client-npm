import { EntityTypeCode } from '../enums/EntityTypeCode';
import { ActionModeCode } from '../enums/ActionModeCode';
import { IntegrationActionFilter } from '../entities/IntegrationActionFilter';
import { BaseEntity } from '../entities/BaseEntity';
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
    mode: ActionModeCode;
    filter: IntegrationActionFilter;
    id: string;
    _type: string;
    createdOn: number;
    updatedOn: number;
    path: string;
}
