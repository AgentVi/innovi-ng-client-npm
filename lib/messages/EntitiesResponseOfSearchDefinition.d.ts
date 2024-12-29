import { EntitiesResponse } from '../messages/EntitiesResponse';
import { SearchDefinition } from '../entities/SearchDefinition';
export declare class EntitiesResponseOfSearchDefinition extends EntitiesResponse {
    list: SearchDefinition[];
    code: number;
    error: string;
}
