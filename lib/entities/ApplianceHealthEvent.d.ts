import { EntityTypeCode } from '../enums/EntityTypeCode';
import { IntegrationStatusCode } from '../enums/IntegrationStatusCode';
import { ApplianceStatusCode } from '../enums/ApplianceStatusCode';
import { BaseEntity } from '../entities/BaseEntity';
export declare class ApplianceHealthEvent extends BaseEntity {
    source: EntityTypeCode;
    accountId: string;
    startedOn: number;
    closedOn: number;
    integrationStatus: IntegrationStatusCode;
    applianceId: string;
    status: ApplianceStatusCode;
    state: number;
    id: string;
    _type: string;
    createdOn: number;
    updatedOn: number;
}
