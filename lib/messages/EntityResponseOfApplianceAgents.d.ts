import { EntitiesResponse } from '../messages/EntitiesResponse';
import { Agent } from '../entities/Agent';
export declare class EntityResponseOfApplianceAgents extends EntitiesResponse {
    entity: Agent;
    code: number;
    error: string;
}
