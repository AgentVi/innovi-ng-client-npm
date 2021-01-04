import { EntityTypeCode } from '../enums/EntityTypeCode';
export declare class SysAuditLogServiceExportRequest {
    accountId: string;
    userId: string;
    from: number;
    to: number;
    item: string;
    itemType: EntityTypeCode;
    sort: string;
    format: string;
    fields: string[];
    fileName: string;
    constructor(accountId?: string, userId?: string, from?: number, to?: number, item?: string, itemType?: EntityTypeCode, sort?: string, format?: string, fields?: string[], fileName?: string);
}
