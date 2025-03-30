import { EntityResponse } from '../messages/EntityResponse';
import { SearchStatus } from '../common/SearchStatus';
export declare class EntityResponseOfSearchStatus extends EntityResponse {
    entity: SearchStatus;
    code: number;
    error: string;
}
