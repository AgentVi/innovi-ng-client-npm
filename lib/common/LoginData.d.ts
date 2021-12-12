import { UserStatusCode } from '../enums/UserStatusCode';
import { AccountRole } from '../common/AccountRole';
import { Permission } from '../common/Permission';
import { UserTypeCode } from '../enums/UserTypeCode';
export declare class LoginData {
    accessToken: string;
    accountRole: AccountRole;
    permissions: Permission[];
    userId: string;
    userName: string;
    userEmail: string;
    userType: UserTypeCode;
    userStatus: UserStatusCode;
    changePassword: boolean;
    acceptedEula: boolean;
    constructor(accessToken?: string, accountRole?: AccountRole, permissions?: Permission[], userId?: string, userName?: string, userEmail?: string, userType?: UserTypeCode, userStatus?: UserStatusCode, changePassword?: boolean, acceptedEula?: boolean);
}
