import { BaseEntity } from '../entities/BaseEntity';
import { EntityTypeCode } from '../enums/EntityTypeCode';
import { IntegrationStatusCode } from '../enums/IntegrationStatusCode';
import { AgentStatusCode } from '../enums/AgentStatusCode';
export declare class AgentHealthEvent extends BaseEntity {
    source: EntityTypeCode;
    accountId: string;
    startedOn: number;
    closedOn: number;
    integrationStatus: IntegrationStatusCode;
    agentId: string;
    status: AgentStatusCode;
    state: number;
    id: string;
    _type: string;
    createdOn: number;
    updatedOn: number;
}
