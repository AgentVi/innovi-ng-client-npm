import { IntegrationStatusCode } from '../enums/IntegrationStatusCode';
import { ApplianceStatusCode } from '../enums/ApplianceStatusCode';
import { BaseEntity } from '../entities/BaseEntity';
import { EntityTypeCode } from '../enums/EntityTypeCode';
export declare class ApplianceHealthEvent extends BaseEntity {
    source: EntityTypeCode;
    accountId: string;
    startedOn: number;
    integrationStatus: IntegrationStatusCode;
    applianceId: string;
    extSensorId: string;
    status: ApplianceStatusCode;
    id: string;
    _type: string;
    createdOn: number;
    updatedOn: number;
}
