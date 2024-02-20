import { EntityTypeCode } from '../enums/EntityTypeCode';
import { OpenClosedStatusCode } from '../enums/OpenClosedStatusCode';
export declare class HealthEventFindRequest {
    folderId: string;
    from: number;
    to: number;
    source: EntityTypeCode[];
    openClosed: OpenClosedStatusCode[];
    entityId: string[];
    sort: string;
    page: number;
    pageSize: number;
    constructor(folderId?: string, from?: number, to?: number, source?: EntityTypeCode[], openClosed?: OpenClosedStatusCode[], entityId?: string[], sort?: string, page?: number, pageSize?: number);
}
