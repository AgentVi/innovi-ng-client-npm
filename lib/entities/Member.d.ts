import { UserStatusCode } from '../enums/UserStatusCode';
import { OriginTypeCode } from '../enums/OriginTypeCode';
import { BaseEntity } from '../entities/BaseEntity';
import { AccountRoleCode } from '../enums/AccountRoleCode';
import { UserTypeCode } from '../enums/UserTypeCode';
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
    originId: string;
    originType: OriginTypeCode;
    id: string;
    _type: string;
    createdOn: number;
    updatedOn: number;
    path: string;
}
