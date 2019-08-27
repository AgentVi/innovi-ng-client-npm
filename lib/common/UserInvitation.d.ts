import { AccountRoleCode } from '../enums/AccountRoleCode';
export declare class UserInvitation {
    email: string;
    role: AccountRoleCode;
    constructor(email?: string, role?: AccountRoleCode);
}
