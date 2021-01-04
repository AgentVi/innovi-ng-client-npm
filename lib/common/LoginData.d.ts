import { UserStatusCode } from '../enums/UserStatusCode';
import { AccountRole } from '../common/AccountRole';
import { UserTypeCode } from '../enums/UserTypeCode';
export declare class LoginData {
    accessToken: string;
    accountRole: AccountRole;
    userId: string;
    userName: string;
    userEmail: string;
    userType: UserTypeCode;
    userStatus: UserStatusCode;
    changePassword: boolean;
    constructor(accessToken?: string, accountRole?: AccountRole, userId?: string, userName?: string, userEmail?: string, userType?: UserTypeCode, userStatus?: UserStatusCode, changePassword?: boolean);
}
