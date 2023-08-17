import { User } from '../entities/User';
export declare class UsersServiceUpdateRequest {
    id: string;
    body: User;
    constructor(id?: string, body?: User);
}
