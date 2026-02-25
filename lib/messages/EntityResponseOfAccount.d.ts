import { EntityResponse } from '../messages/EntityResponse';
import { Account } from '../entities/Account';
export declare class EntityResponseOfAccount extends EntityResponse {
    entity: Account;
    code: number;
    error: string;
}
