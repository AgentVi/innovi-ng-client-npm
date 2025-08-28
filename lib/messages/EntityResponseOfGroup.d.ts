import { EntityResponse } from '../messages/EntityResponse';
import { Group } from '../entities/Group';
export declare class EntityResponseOfGroup extends EntityResponse {
    entity: Group;
    code: number;
    error: string;
}
