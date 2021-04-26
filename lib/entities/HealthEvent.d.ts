import { BaseEntity } from '../entities/BaseEntity';
import { EntityTypeCode } from '../enums/EntityTypeCode';
import { IntegrationStatusCode } from '../enums/IntegrationStatusCode';
export declare class HealthEvent extends BaseEntity {
    accountId: string;
    source: EntityTypeCode;
    entityId: string;
    entityExtId: string;
    entityName: string;
    startedOn: number;
    closedOn: number;
    status: number;
    state: number;
    integrationStatus: IntegrationStatusCode;
    id: string;
    _type: string;
    createdOn: number;
    updatedOn: number;
    path: string;
}
