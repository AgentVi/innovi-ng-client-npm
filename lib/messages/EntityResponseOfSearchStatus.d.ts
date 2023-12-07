import { SearchStatus } from '../common/SearchStatus';
import { EntityResponse } from '../messages/EntityResponse';
export declare class EntityResponseOfSearchStatus extends EntityResponse {
    entity: SearchStatus;
    code: number;
    error: string;
}
