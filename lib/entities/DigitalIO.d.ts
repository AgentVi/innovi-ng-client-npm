import { DigitalIOStatusCode } from '../enums/DigitalIOStatusCode';
import { PortMapping } from '../entities/PortMapping';
import { BaseEntity } from '../entities/BaseEntity';
export declare class DigitalIO extends BaseEntity {
    accountId: string;
    applianceId: string;
    name: string;
    type: string;
    uri: string;
    status: DigitalIOStatusCode;
    state: number;
    portMapping: PortMapping[];
    id: string;
    _type: string;
    createdOn: number;
    updatedOn: number;
}
