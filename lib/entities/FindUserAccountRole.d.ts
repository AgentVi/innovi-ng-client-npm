import { AccountRoleCode } from '../enums/AccountRoleCode';
export declare class FindUserAccountRole {
    accountId: string;
    accountName: string;
    role: AccountRoleCode;
    constructor(accountId?: string, accountName?: string, role?: AccountRoleCode);
}
