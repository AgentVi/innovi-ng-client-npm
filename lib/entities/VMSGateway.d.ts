import { BaseEntity } from '../entities/BaseEntity';
import { VMSGatewayStatusCode } from '../enums/VMSGatewayStatusCode';
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
    path: string;
}
