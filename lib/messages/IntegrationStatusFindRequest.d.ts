import { EntityTypeCode } from '../enums/EntityTypeCode';
export declare class IntegrationStatusFindRequest {
    source: EntityTypeCode;
    entityId: string;
    integrationTargetId: string;
    integrationActionId: string;
    from: number;
    to: number;
    sort: string;
    page: number;
    pageSize: number;
    constructor(source?: EntityTypeCode, entityId?: string, integrationTargetId?: string, integrationActionId?: string, from?: number, to?: number, sort?: string, page?: number, pageSize?: number);
}
