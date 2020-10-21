export declare class SysAuditLogServiceFindRequest {
    accountId: string;
    userId: string;
    from: number;
    to: number;
    item: string;
    itemType: string;
    sort: string;
    page: number;
    pageSize: number;
    constructor(accountId?: string, userId?: string, from?: number, to?: number, item?: string, itemType?: string, sort?: string, page?: number, pageSize?: number);
}
