import { VMSGatewayStatusCode } from '../enums/VMSGatewayStatusCode';
import { BaseEntity } from '../entities/BaseEntity';
export declare class VMSGateway extends BaseEntity {
    accountId: string;
    name: string;
    type: string;
    uri: string;
    status: VMSGatewayStatusCode;
    state: number;
    id: string;
    _type: string;
    createdOn: number;
    updatedOn: number;
}
