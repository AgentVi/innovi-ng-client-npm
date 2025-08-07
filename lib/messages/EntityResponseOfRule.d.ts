import { EntityResponse } from '../messages/EntityResponse';
import { Rule } from '../entities/Rule';
export declare class EntityResponseOfRule extends EntityResponse {
    entity: Rule;
    code: number;
    error: string;
}
