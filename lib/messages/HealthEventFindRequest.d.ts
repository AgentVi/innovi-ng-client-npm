import { EntityTypeCode } from '../enums/EntityTypeCode';
export declare class HealthEventFindRequest {
    folderId: string;
    from: number;
    to: number;
    source: EntityTypeCode;
    entityId: string[];
    sort: string;
    page: number;
    pageSize: number;
    constructor(folderId?: string, from?: number, to?: number, source?: EntityTypeCode, entityId?: string[], sort?: string, page?: number, pageSize?: number);
}
