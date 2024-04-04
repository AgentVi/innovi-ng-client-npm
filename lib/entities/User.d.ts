import { UserTypeCode } from '../enums/UserTypeCode';
import { UserStatusCode } from '../enums/UserStatusCode';
import { BaseEntity } from '../entities/BaseEntity';
export declare class User extends BaseEntity {
    name: string;
    email: string;
    mobile: string;
    type: UserTypeCode;
    status: UserStatusCode;
    suspendedOn: number;
    lastSignIn: number;
    defaultAccount: string;
    description: string;
    acceptedEula: boolean;
    id: string;
    _type: string;
    createdOn: number;
    updatedOn: number;
    path: string;
}
