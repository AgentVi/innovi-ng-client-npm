import { UserTypeCode } from '../enums/UserTypeCode';
import { UserStatusCode } from '../enums/UserStatusCode';
import { AccountRole } from '../common/AccountRole';
import { BaseEntity } from '../entities/BaseEntity';
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
    acceptedEula: boolean;
    id: string;
    _type: string;
    createdOn: number;
    updatedOn: number;
    path: string;
}
