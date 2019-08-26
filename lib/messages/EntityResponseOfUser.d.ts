import { User } from '../entities/User';
import { EntityResponse } from '../messages/EntityResponse';
export declare class EntityResponseOfUser extends EntityResponse {
    entity: User;
    code: number;
    error: string;
}
