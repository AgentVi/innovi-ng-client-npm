import { RestUtil } from '../../utils/rest-util';
import { CoreConfig } from '../../core-config';
import { ScheduledReport } from '../entities/ScheduledReport';
/**
 * Services for scheduled reports definition actions
 * @RequestHeader X-API-KEY The key to identify the application (portal)
 * @RequestHeader X-ACCESS-TOKEN The token to identify the logged-in user
 */
export declare class ScheduledReportsService {
    private config;
    private rest;
    private baseUrl;
    /**
     * Class constructor
     */
    constructor(config: CoreConfig, rest: RestUtil);
    /**
     * Create new scheduled report definition
     * @Return: EntityResponse<ScheduledReport>
     */
    create(body?: ScheduledReport): import("rxjs").Observable<any>;
    /**
     * Update scheduled report definition
     * @Return: EntityResponse<ScheduledReport>
     */
    update(id?: string, body?: ScheduledReport): import("rxjs").Observable<any>;
    /**
     * Delete scheduled report definition from the system
     * @Return: ActionResponse
     */
    delete(id?: string): import("rxjs").Observable<any>;
    /**
     * Get single scheduled report definition by id
     * @Return: EntityResponse<ScheduledReport>
     */
    get(id?: string): import("rxjs").Observable<any>;
    /**
     * Get multiple scheduled report definitions by list of ids
     * @Return: EntitiesResponse<ScheduledReport>
     */
    list(id?: string[]): import("rxjs").Observable<any>;
    /**
     * Find scheduled report definitions by filters
     * @Return: QueryResponse<ScheduledReport>
     */
    find(search?: string): import("rxjs").Observable<any>;
}
