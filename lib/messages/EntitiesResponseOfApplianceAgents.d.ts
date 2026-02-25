import { Agent } from '../entities/Agent';
import { EntitiesResponse } from '../messages/EntitiesResponse';
export declare class EntitiesResponseOfApplianceAgents extends EntitiesResponse {
    list: Agent[];
    code: number;
    error: string;
}
