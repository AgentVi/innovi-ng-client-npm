import { RestUtil } from '../../utils/rest-util';
import { CoreConfig } from '../../config';
import { IntegrationTarget } from '../entities/IntegrationTarget';
/**
 * Services for integrations targets (templates)
 * @RequestHeader X-API-KEY The key to identify the application (portal)
 * @RequestHeader X-ACCESS-TOKEN The token to identify the logged-in user
 */
export declare class IntegrationsService {
    private config;
    private rest;
    private baseUrl;
    /**
     * Class constructor
     */
    constructor(config: CoreConfig, rest: RestUtil);
    /**
     * Create new integration target
     * @Return: EntityResponse<IntegrationTarget>
     */
    create(body?: IntegrationTarget): import("rxjs").Observable<any>;
    /**
     * Update integration target
     * @Return: EntityResponse<IntegrationTarget>
     */
    update(id?: string, body?: IntegrationTarget): import("rxjs").Observable<any>;
    /**
     * Delete integration target from the system
     * @Return: ActionResponse
     */
    delete(id?: string): import("rxjs").Observable<any>;
    /**
     * Get single integration target by id
     * @Return: EntityResponse<IntegrationTarget>
     */
    get(id?: string): import("rxjs").Observable<any>;
    /**
     * Get integration targets by list of ids
     * @Return: EntitiesResponse<IntegrationTarget>
     */
    list(id?: string[]): import("rxjs").Observable<any>;
    /**
     * Find integration targets by filters
     * @Return: EntitiesResponse<IntegrationTarget>
     */
    find(search?: string, type?: string): import("rxjs").Observable<any>;
}
