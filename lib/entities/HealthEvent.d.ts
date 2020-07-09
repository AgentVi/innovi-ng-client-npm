import { BaseEntity } from '../entities/BaseEntity';
import { EntityTypeCode } from '../enums/EntityTypeCode';
import { IntegrationStatusCode } from '../enums/IntegrationStatusCode';
export declare class HealthEvent extends BaseEntity {
    source: EntityTypeCode;
    accountId: string;
    startedOn: number;
    integrationStatus: IntegrationStatusCode;
    id: string;
    _type: string;
    createdOn: number;
    updatedOn: number;
}
