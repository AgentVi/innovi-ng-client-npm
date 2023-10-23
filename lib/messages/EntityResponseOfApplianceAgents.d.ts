import { EntityResponse } from '../messages/EntityResponse';
import { Agent } from '../entities/Agent';
export declare class EntityResponseOfApplianceAgents extends EntityResponse {
    entity: Agent;
    code: number;
    error: string;
}
