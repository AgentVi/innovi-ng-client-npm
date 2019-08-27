import { AccountRoleCode } from '../enums/AccountRoleCode';
export declare class UsersServiceChangeRoleRequest {
    id: string;
    role: AccountRoleCode;
    constructor(id?: string, role?: AccountRoleCode);
}
