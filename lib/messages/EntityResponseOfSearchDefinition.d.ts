import { EntityResponse } from '../messages/EntityResponse';
import { SearchDefinition } from '../entities/SearchDefinition';
export declare class EntityResponseOfSearchDefinition extends EntityResponse {
    entity: SearchDefinition;
    code: number;
    error: string;
}
