import { UserStatusCode } from '../enums/UserStatusCode';
import { AccountRole } from '../common/AccountRole';
import { Group } from '../entities/Group';
import { UserTypeCode } from '../enums/UserTypeCode';
export declare class LoginData {
    accessToken: string;
    accountRole: AccountRole;
    groups: Group[];
    userId: string;
    userName: string;
    userEmail: string;
    userType: UserTypeCode;
    userStatus: UserStatusCode;
    changePassword: boolean;
    acceptedEula: boolean;
    constructor(accessToken?: string, accountRole?: AccountRole, groups?: Group[], userId?: string, userName?: string, userEmail?: string, userType?: UserTypeCode, userStatus?: UserStatusCode, changePassword?: boolean, acceptedEula?: boolean);
}
