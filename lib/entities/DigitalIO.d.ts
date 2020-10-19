import { PortMapping } from '../entities/PortMapping';
import { BaseEntity } from '../entities/BaseEntity';
import { DigitalIOStatusCode } from '../enums/DigitalIOStatusCode';
export declare class DigitalIO extends BaseEntity {
    accountId: string;
    applianceId: string;
    name: string;
    deviceType: string;
    deviceUri: string;
    status: DigitalIOStatusCode;
    portMapping: PortMapping[];
    id: string;
    _type: string;
    createdOn: number;
    updatedOn: number;
}
