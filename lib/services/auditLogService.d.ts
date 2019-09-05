import { RestUtil } from '../../utils/rest-util';
import { CoreConfig } from '../../core-config';
/**
 * Audit log queries for account administrator only
 * @RequestHeader X-API-KEY The key to identify the application (portal)
 * @RequestHeader X-ACCESS-TOKEN The token to identify the logged-in user
 */
export declare class AuditLogService {
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
    find(userId?: string, from?: number, to?: number, itemType?: string, sort?: string, page?: number, pageSize?: number): import("rxjs").Observable<any>;
    /**
     * Get single audit log entry by id
     * @Return: EntityResponse<Appliance>
     */
    get(id?: string): import("rxjs").Observable<any>;
}
