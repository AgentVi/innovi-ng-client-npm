import { Rule } from '../entities/Rule';
import { EntitiesResponse } from '../messages/EntitiesResponse';
export declare class EntitiesResponseOfRule extends EntitiesResponse {
    list: Rule[];
    code: number;
    error: string;
}
