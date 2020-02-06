import { SearchEvent } from '../entities/SearchEvent';
import { EntityResponse } from '../messages/EntityResponse';
export declare class EntityResponseOfSearchEvent extends EntityResponse {
    entity: SearchEvent;
    code: number;
    error: string;
}
