import { EntityTypeCode } from '../enums/EntityTypeCode';
import { IntegrationStatusCode } from '../enums/IntegrationStatusCode';
import { BaseEntity } from '../entities/BaseEntity';
export declare class HealthEvent extends BaseEntity {
    source: EntityTypeCode;
    accountId: string;
    startedOn: number;
    closedOn: number;
    integrationStatus: IntegrationStatusCode;
    id: string;
    _type: string;
    createdOn: number;
    updatedOn: number;
}
