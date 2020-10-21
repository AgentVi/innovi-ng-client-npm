export declare class SysAuditLogServiceExportRequest {
    accountId: string;
    userId: string;
    from: number;
    to: number;
    item: string;
    itemType: string;
    sort: string;
    format: string;
    fields: string[];
    constructor(accountId?: string, userId?: string, from?: number, to?: number, item?: string, itemType?: string, sort?: string, format?: string, fields?: string[]);
}
