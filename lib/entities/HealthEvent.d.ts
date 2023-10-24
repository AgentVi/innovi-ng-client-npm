import { IntegrationStatusCode } from '../enums/IntegrationStatusCode';
import { BaseEntity } from '../entities/BaseEntity';
import { EntityTypeCode } from '../enums/EntityTypeCode';
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
    testEvent: boolean;
    id: string;
    _type: string;
    createdOn: number;
    updatedOn: number;
    path: string;
}
