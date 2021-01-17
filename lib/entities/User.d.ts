import { UserStatusCode } from '../enums/UserStatusCode';
import { AccountRole } from '../common/AccountRole';
import { BaseEntity } from '../entities/BaseEntity';
import { UserTypeCode } from '../enums/UserTypeCode';
export declare class User extends BaseEntity {
    name: string;
    email: string;
    mobile: string;
    salt: string;
    hash: string;
    type: UserTypeCode;
    status: UserStatusCode;
    suspendedOn: number;
    signInAttempts: number;
    lastSignIn: number;
    lastFailedSignIn: number;
    changePassword: boolean;
    passwordChangedOn: number;
    accountRoles: AccountRole[];
    defaultAccount: string;
    description: string;
    id: string;
    _type: string;
    createdOn: number;
    updatedOn: number;
    path: string;
}
