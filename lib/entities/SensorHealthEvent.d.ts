import { SensorStatusCode } from '../enums/SensorStatusCode';
import { BaseEntity } from '../entities/BaseEntity';
import { EntityTypeCode } from '../enums/EntityTypeCode';
import { IntegrationStatusCode } from '../enums/IntegrationStatusCode';
export declare class SensorHealthEvent extends BaseEntity {
    source: EntityTypeCode;
    accountId: string;
    startedOn: number;
    integrationStatus: IntegrationStatusCode;
    sensorId: string;
    extSensorId: string;
    status: SensorStatusCode;
    state: number;
    id: string;
    _type: string;
    createdOn: number;
    updatedOn: number;
}
