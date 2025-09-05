import { UserTypeCode } from '../enums/UserTypeCode';
import { UserStatusCode } from '../enums/UserStatusCode';
import { PlatformTypeCode } from '../enums/PlatformTypeCode';
import { AccountRole } from '../common/AccountRole';
import { Permission } from '../common/Permission';
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
    acceptedPrivacyCompliance: boolean;
    platformType: PlatformTypeCode;
    constructor(accessToken?: string, accountRole?: AccountRole, permissions?: Permission[], userId?: string, userName?: string, userEmail?: string, userType?: UserTypeCode, userStatus?: UserStatusCode, changePassword?: boolean, acceptedEula?: boolean, acceptedPrivacyCompliance?: boolean, platformType?: PlatformTypeCode);
}
