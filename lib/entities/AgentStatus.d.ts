import { BaseEntity } from '../entities/BaseEntity';
import { AgentStatusCode } from '../enums/AgentStatusCode';
export declare class AgentStatus extends BaseEntity {
    agentId: string;
    accountId: string;
    status: AgentStatusCode;
    latency: number;
    id: string;
    _type: string;
    createdOn: number;
    updatedOn: number;
}
