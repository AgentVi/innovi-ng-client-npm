import { Group } from '../entities/Group';
import { EntitiesResponse } from '../messages/EntitiesResponse';
export declare class EntitiesResponseOfGroup extends EntitiesResponse {
    list: Group[];
    code: number;
    error: string;
}
