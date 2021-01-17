import { EntitiesResponse } from '../messages/EntitiesResponse';
import { Agent } from '../entities/Agent';
export declare class EntitiesResponseOfApplianceAgents extends EntitiesResponse {
    list: Agent[];
    code: number;
    error: string;
}
