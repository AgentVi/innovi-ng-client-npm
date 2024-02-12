import { EntityTypeCode } from '../enums/EntityTypeCode';
export declare class AuditLogServiceFindRequest {
    userId: string;
    from: number;
    to: number;
    item: string;
    itemType: EntityTypeCode;
    sort: string;
    page: number;
    pageSize: number;
    constructor(userId?: string, from?: number, to?: number, item?: string, itemType?: EntityTypeCode, sort?: string, page?: number, pageSize?: number);
}
