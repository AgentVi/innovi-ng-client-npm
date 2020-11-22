import { RestUtil } from '../../utils/rest-util';
import { CoreConfig } from '../../config';
import { EntityTypeCode } from '../enums/EntityTypeCode';
import * as i0 from "@angular/core";
/**
 * Audit log queries for account administrator only
 * @RequestHeader X-API-KEY The key to identify the application (portal)
 * @RequestHeader X-ACCESS-TOKEN The token to identify the logged-in user
 */
export declare class SysAuditLogService {
    private config;
    private rest;
    private baseUrl;
    /**
     * Class constructor
     */
    constructor(config: CoreConfig, rest: RestUtil);
    /**
     * Find list of audit log entries and filter
     * @Return: QueryResponse<AuditLog>
     */
    find(accountId?: string, userId?: string, from?: number, to?: number, item?: string, itemType?: EntityTypeCode, sort?: string, page?: number, pageSize?: number): import("rxjs").Observable<any>;
    /**
     * Export list of audit log entries and filter
     * @Return: StreamContent
     */
    exportFormat(accountId?: string, userId?: string, from?: number, to?: number, item?: string, itemType?: EntityTypeCode, sort?: string, format?: string, fields?: string[]): import("rxjs").Subscription;
    /**
     * Get single audit log entry by id
     * @Return: EntityResponse<Appliance>
     */
    get(id?: string): import("rxjs").Observable<any>;
    static ɵfac: i0.ɵɵFactoryDef<SysAuditLogService, never>;
    static ɵprov: i0.ɵɵInjectableDef<SysAuditLogService>;
}
