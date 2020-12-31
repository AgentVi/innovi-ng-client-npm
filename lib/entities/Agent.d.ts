import { AgentStatusCode } from '../enums/AgentStatusCode';
import { BaseEntity } from '../entities/BaseEntity';
export declare class Agent extends BaseEntity {
    accountId: string;
    applianceId: string;
    status: AgentStatusCode;
    state: number;
    id: string;
    _type: string;
    createdOn: number;
    updatedOn: number;
    path: string;
}
