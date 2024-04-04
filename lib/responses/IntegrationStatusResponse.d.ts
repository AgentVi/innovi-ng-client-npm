import { BaseEntity } from '../entities/BaseEntity';
import { EntityTypeCode } from '../enums/EntityTypeCode';
import { IntegrationTypeCode } from '../enums/IntegrationTypeCode';
export declare class IntegrationStatusResponse extends BaseEntity {
    source: EntityTypeCode;
    accountId: string;
    entityId: string;
    integrationTargetId: string;
    integrationTargetName: string;
    integrationTargetType: IntegrationTypeCode;
    integrationActionId: string;
    integrationActionName: string;
    numberOfAttempts: number;
    sent: boolean;
    message: string;
    id: string;
    _type: string;
    createdOn: number;
    updatedOn: number;
    path: string;
}
