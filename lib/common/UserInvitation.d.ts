import { AccountRoleCode } from '../enums/AccountRoleCode';
export declare class UserInvitation {
    email: string;
    role: AccountRoleCode;
    groups: string[];
    constructor(email?: string, role?: AccountRoleCode, groups?: string[]);
}
