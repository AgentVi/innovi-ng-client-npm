import { AccountRole } from '../common/AccountRole';
export declare class MemberRegistration {
    accountId: string;
    name: string;
    email: string;
    mobile: string;
    role: AccountRole;
    groups: string[];
    tempPassword: string;
    changePassword: boolean;
    verifyByEmail: boolean;
    description: string;
    constructor(accountId?: string, name?: string, email?: string, mobile?: string, role?: AccountRole, groups?: string[], tempPassword?: string, changePassword?: boolean, verifyByEmail?: boolean, description?: string);
}
