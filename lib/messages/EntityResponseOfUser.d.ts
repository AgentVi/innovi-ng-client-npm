import { EntityResponse } from '../messages/EntityResponse';
import { User } from '../entities/User';
export declare class EntityResponseOfUser extends EntityResponse {
    entity: User;
    code: number;
    error: string;
}
