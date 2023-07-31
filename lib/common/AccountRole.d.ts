import { AccountRoleCode } from '../enums/AccountRoleCode';
export declare class AccountRole {
    accountId: string;
    role: AccountRoleCode;
    groups: string[];
    constructor(accountId?: string, role?: AccountRoleCode, groups?: string[]);
}
