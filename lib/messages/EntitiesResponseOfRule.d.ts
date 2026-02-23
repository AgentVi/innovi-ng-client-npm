import { EntitiesResponse } from '../messages/EntitiesResponse';
import { Rule } from '../entities/Rule';
export declare class EntitiesResponseOfRule extends EntitiesResponse {
    list: Rule[];
    code: number;
    error: string;
}
