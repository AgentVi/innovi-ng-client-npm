import { Account } from '../entities/Account';
export declare class AccountsServiceUpdateRequest {
    id: string;
    body: Account;
    constructor(id?: string, body?: Account);
}
