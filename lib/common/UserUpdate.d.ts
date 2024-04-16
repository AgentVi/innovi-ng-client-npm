import { UserStatusCode } from '../enums/UserStatusCode';
import { AccountRole } from '../common/AccountRole';
import { UserTypeCode } from '../enums/UserTypeCode';
export declare class UserUpdate {
    id: string;
    name: string;
    mobile: string;
    type: UserTypeCode;
    defaultAccount: string;
    description: string;
    status: UserStatusCode;
    accountRoles: AccountRole[];
    constructor(id?: string, name?: string, mobile?: string, type?: UserTypeCode, defaultAccount?: string, description?: string, status?: UserStatusCode, accountRoles?: AccountRole[]);
}
