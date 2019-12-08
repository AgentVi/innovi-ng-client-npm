import { Agent } from '../entities/Agent';
import { EntitiesResponse } from '../messages/EntitiesResponse';
export declare class EntityResponseOfApplianceAgents extends EntitiesResponse {
    entity: Agent;
    code: number;
    error: string;
}
