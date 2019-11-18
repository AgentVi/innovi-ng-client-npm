import { AccountRoleCode } from '../enums/AccountRoleCode';
import { BaseEntity } from '../entities/BaseEntity';
export declare class AuditLog extends BaseEntity {
    accountId: string;
    userId: string;
    userRole: AccountRoleCode;
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
}
