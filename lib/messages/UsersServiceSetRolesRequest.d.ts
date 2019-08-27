import { AccountRoleCode } from '../enums/AccountRoleCode';
export declare class UsersServiceSetRolesRequest {
    id: string;
    roles: AccountRoleCode[];
    constructor(id?: string, roles?: AccountRoleCode[]);
}
