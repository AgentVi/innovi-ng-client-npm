import { EntityTypeCode } from '../enums/EntityTypeCode';
export declare class AuditLogServiceExportRequest {
    userId: string;
    from: number;
    to: number;
    item: string;
    itemType: EntityTypeCode;
    sort: string;
    format: string;
    fields: string[];
    fileName: string;
    constructor(userId?: string, from?: number, to?: number, item?: string, itemType?: EntityTypeCode, sort?: string, format?: string, fields?: string[], fileName?: string);
}
