import { RestUtil } from '../../utils/rest-util';
import { CoreConfig } from '../../config';
import { ScheduledReport } from '../entities/ScheduledReport';
import * as i0 from "@angular/core";
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
    find(page?: number, pageSize?: number): import("rxjs").Observable<any>;
    static ɵfac: i0.ɵɵFactoryDeclaration<ScheduledReportsService, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<ScheduledReportsService>;
}
