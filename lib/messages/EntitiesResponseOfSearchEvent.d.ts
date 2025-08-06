import { EntitiesResponse } from '../messages/EntitiesResponse';
import { SearchEvent } from '../entities/SearchEvent';
export declare class EntitiesResponseOfSearchEvent extends EntitiesResponse {
    list: SearchEvent[];
    code: number;
    error: string;
}
