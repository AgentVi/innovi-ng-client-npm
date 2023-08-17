import { AccountRoleCode } from '../enums/AccountRoleCode';
export declare class MemberRegistration {
    accountId: string;
    name: string;
    email: string;
    mobile: string;
    role: AccountRoleCode;
    groups: string[];
    tempPassword: string;
    changePassword: boolean;
    verifyByEmail: boolean;
    description: string;
    constructor(accountId?: string, name?: string, email?: string, mobile?: string, role?: AccountRoleCode, groups?: string[], tempPassword?: string, changePassword?: boolean, verifyByEmail?: boolean, description?: string);
}
