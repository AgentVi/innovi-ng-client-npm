import { SearchDefinition } from '../entities/SearchDefinition';
import { EntitiesResponse } from '../messages/EntitiesResponse';
export declare class EntitiesResponseOfSearchDefinition extends EntitiesResponse {
    list: SearchDefinition[];
    code: number;
    error: string;
}
