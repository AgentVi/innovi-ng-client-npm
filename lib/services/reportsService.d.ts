import { RestUtil } from '../../utils/rest-util';
import { CoreConfig } from '../../core-lib.module';
import { ReportDefinition } from '../entities/ReportDefinition';
/**
 * Services for reports definition actions
 * @RequestHeader X-API-KEY The key to identify the application (portal)
 * @RequestHeader X-ACCESS-TOKEN The token to identify the logged-in user
 */
export declare class ReportsService {
    private config;
    private rest;
    private baseUrl;
    /**
     * Class constructor
     */
    constructor(config: CoreConfig, rest: RestUtil);
    /**
     * Create new report definition
     * @Return: EntityResponse<ReportDefinition>
     */
    create(body?: ReportDefinition): import("rxjs").Observable<any>;
    /**
     * Update report definition
     * @Return: EntityResponse<ReportDefinition>
     */
    update(id?: string, body?: ReportDefinition): import("rxjs").Observable<any>;
    /**
     * Delete report definition from the system
     * @Return: ActionResponse
     */
    delete(id?: string): import("rxjs").Observable<any>;
    /**
     * Get single report definition by id
     * @Return: EntityResponse<ReportDefinition>
     */
    get(id?: string): import("rxjs").Observable<any>;
    /**
     * Get multiple report definitions by list of ids
     * @Return: EntitiesResponse<ReportDefinition>
     */
    list(id?: string[]): import("rxjs").Observable<any>;
    /**
     * Find report definitions by filters
     * @Return: QueryResponse<ReportDefinition>
     */
    find(search?: string): import("rxjs").Observable<any>;
}
