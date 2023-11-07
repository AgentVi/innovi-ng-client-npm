import { EntitiesResponse } from '../messages/EntitiesResponse';
import { Group } from '../entities/Group';
export declare class EntitiesResponseOfGroup extends EntitiesResponse {
    list: Group[];
    code: number;
    error: string;
}
