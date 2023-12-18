import { UserTypeCode } from '../enums/UserTypeCode';
import { BaseEntity } from '../entities/BaseEntity';
import { AccountRoleCode } from '../enums/AccountRoleCode';
export declare class AuditLog extends BaseEntity {
    accountId: string;
    userId: string;
    userRole: AccountRoleCode;
    userType: UserTypeCode;
    userName: string;
    action: string;
    itemType: string;
    itemId: string;
    itemName: string;
    beforeChange: string;
    afterChange: string;
    id: string;
    _type: string;
    createdOn: number;
    updatedOn: number;
    path: string;
}
