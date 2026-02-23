import { SearchEvent } from '../entities/SearchEvent';
import { EntitiesResponse } from '../messages/EntitiesResponse';
export declare class EntitiesResponseOfSearchEvent extends EntitiesResponse {
    list: SearchEvent[];
    code: number;
    error: string;
}
