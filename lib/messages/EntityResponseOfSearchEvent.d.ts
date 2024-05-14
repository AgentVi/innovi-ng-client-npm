import { EntityResponse } from '../messages/EntityResponse';
import { SearchEvent } from '../entities/SearchEvent';
export declare class EntityResponseOfSearchEvent extends EntityResponse {
    entity: SearchEvent;
    code: number;
    error: string;
}
