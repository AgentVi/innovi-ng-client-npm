export declare class AuditLogServiceFindRequest {
    userId: string;
    from: number;
    to: number;
    itemType: string;
    sort: string;
    page: number;
    pageSize: number;
    format: string;
    fields: string[];
    constructor(userId?: string, from?: number, to?: number, itemType?: string, sort?: string, page?: number, pageSize?: number, format?: string, fields?: string[]);
}
