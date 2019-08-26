import { Rule } from '../entities/Rule';
import { EntityResponse } from '../messages/EntityResponse';
export declare class EntityResponseOfRule extends EntityResponse {
    entity: Rule;
    code: number;
    error: string;
}
