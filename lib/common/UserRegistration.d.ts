import { AccountRoleCode } from '../enums/AccountRoleCode';
import { UserTypeCode } from '../enums/UserTypeCode';
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
}
