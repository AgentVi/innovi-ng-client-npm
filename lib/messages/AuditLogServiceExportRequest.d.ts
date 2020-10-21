export declare class AuditLogServiceExportRequest {
    userId: string;
    from: number;
    to: number;
    item: string;
    itemType: string;
    sort: string;
    format: string;
    fields: string[];
    constructor(userId?: string, from?: number, to?: number, item?: string, itemType?: string, sort?: string, format?: string, fields?: string[]);
}
