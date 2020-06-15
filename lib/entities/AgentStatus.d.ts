import { AgentStatusCode } from '../enums/AgentStatusCode';
import { BaseEntity } from '../entities/BaseEntity';
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
