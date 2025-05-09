import { BaseEntity } from '../entities/BaseEntity';
import { EntityTypeCode } from '../enums/EntityTypeCode';
export declare class IntegrationStatus extends BaseEntity {
    source: EntityTypeCode;
    accountId: string;
    entityId: string;
    integrationTargetId: string;
    integrationActionId: string;
    tryNumber: number;
    sent: boolean;
    result: string;
    id: string;
    _type: string;
    createdOn: number;
    updatedOn: number;
    path: string;
}
