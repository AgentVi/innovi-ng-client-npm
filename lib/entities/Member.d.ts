import { UserTypeCode } from '../enums/UserTypeCode';
import { UserStatusCode } from '../enums/UserStatusCode';
import { BaseEntity } from '../entities/BaseEntity';
import { AccountRoleCode } from '../enums/AccountRoleCode';
export declare class Member extends BaseEntity {
    userId: string;
    accountId: string;
    role: AccountRoleCode;
    groups: string[];
    name: string;
    description: string;
    email: string;
    mobile: string;
    type: UserTypeCode;
    status: UserStatusCode;
    id: string;
    _type: string;
    createdOn: number;
    updatedOn: number;
    path: string;
}
