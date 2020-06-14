import { BaseEntity } from '../entities/BaseEntity';
import { EntityTypeCode } from '../enums/EntityTypeCode';
export declare class IntegrationStatus extends BaseEntity {
    source: EntityTypeCode;
    accountId: string;
    entityId: string;
    integrationActionId: string;
    tryNumber: number;
    error: string;
    success: boolean;
    id: string;
    _type: string;
    createdOn: number;
    updatedOn: number;
}
