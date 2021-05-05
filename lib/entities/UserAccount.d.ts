import { AccountRoleCode } from '../enums/AccountRoleCode';
import { BaseEntity } from '../entities/BaseEntity';
export declare class UserAccount extends BaseEntity {
    userId: string;
    accountId: string;
    role: AccountRoleCode;
    groups: string[];
    id: string;
    _type: string;
    createdOn: number;
    updatedOn: number;
    path: string;
}
