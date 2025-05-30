import { UserTypeCode } from '../enums/UserTypeCode';
import { AccountRole } from '../common/AccountRole';
export declare class UserRegistration {
    name: string;
    email: string;
    mobile: string;
    defaultAccount: string;
    accountRoles: AccountRole[];
    type: UserTypeCode;
    verifyByEmail: boolean;
    description: string;
    constructor(name?: string, email?: string, mobile?: string, defaultAccount?: string, accountRoles?: AccountRole[], type?: UserTypeCode, verifyByEmail?: boolean, description?: string);
}
