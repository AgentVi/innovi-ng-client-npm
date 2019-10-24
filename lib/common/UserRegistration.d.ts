import { AccountRole } from '../common/AccountRole';
import { UserTypeCode } from '../enums/UserTypeCode';
export declare class UserRegistration {
    name: string;
    email: string;
    mobile: string;
    defaultAccount: string;
    accountRoles: AccountRole[];
    type: UserTypeCode;
    tempPassword: string;
    changePassword: boolean;
    verifyByEmail: boolean;
    description: string;
    constructor(name?: string, email?: string, mobile?: string, defaultAccount?: string, accountRoles?: AccountRole[], type?: UserTypeCode, tempPassword?: string, changePassword?: boolean, verifyByEmail?: boolean, description?: string);
}
