import { EntityTypeCode } from '../enums/EntityTypeCode';
export declare class SysAuditLogServiceFindRequest {
    accountId: string;
    userId: string;
    from: number;
    to: number;
    item: string;
    itemType: EntityTypeCode[];
    sort: string;
    page: number;
    pageSize: number;
    constructor(accountId?: string, userId?: string, from?: number, to?: number, item?: string, itemType?: EntityTypeCode[], sort?: string, page?: number, pageSize?: number);
}
