import { UserTypeCode } from '../enums/UserTypeCode';
import { AccountRoleCode } from '../enums/AccountRoleCode';
export declare class UserRegistration {
    name: string;
    email: string;
    mobile: string;
    defaultAccount: string;
    role: AccountRoleCode;
    type: UserTypeCode;
    tempPassword: string;
    changePassword: boolean;
    verifyByEmail: boolean;
    constructor(name?: string, email?: string, mobile?: string, defaultAccount?: string, role?: AccountRoleCode, type?: UserTypeCode, tempPassword?: string, changePassword?: boolean, verifyByEmail?: boolean);
}
