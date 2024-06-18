import { Permission } from '../common/Permission';
import { UserTypeCode } from '../enums/UserTypeCode';
import { UserStatusCode } from '../enums/UserStatusCode';
import { PlatformTypeCode } from '../enums/PlatformTypeCode';
import { AccountRole } from '../common/AccountRole';
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
    platformType: PlatformTypeCode;
    constructor(accessToken?: string, accountRole?: AccountRole, permissions?: Permission[], userId?: string, userName?: string, userEmail?: string, userType?: UserTypeCode, userStatus?: UserStatusCode, changePassword?: boolean, acceptedEula?: boolean, platformType?: PlatformTypeCode);
}
