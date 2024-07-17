import { Group } from '../entities/Group';
import { EntityResponse } from '../messages/EntityResponse';
export declare class EntityResponseOfGroup extends EntityResponse {
    entity: Group;
    code: number;
    error: string;
}
