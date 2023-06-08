import { AccountStatusCode } from '../enums/AccountStatusCode';
export declare class UserAccountInfoAccount {
    id: string;
    name: string;
    status: AccountStatusCode;
    sysAdminSupport: boolean;
    constructor(id?: string, name?: string, status?: AccountStatusCode, sysAdminSupport?: boolean);
}
