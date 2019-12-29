import { Agent } from '../entities/Agent';
import { EntityResponse } from '../messages/EntityResponse';
export declare class EntityResponseOfApplianceAgents extends EntityResponse {
    entity: Agent;
    code: number;
    error: string;
}
