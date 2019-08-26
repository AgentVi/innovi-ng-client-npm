import { SearchDefinition } from '../entities/SearchDefinition';
import { EntityResponse } from '../messages/EntityResponse';
export declare class EntityResponseOfSearchDefinition extends EntityResponse {
    entity: SearchDefinition;
    code: number;
    error: string;
}
