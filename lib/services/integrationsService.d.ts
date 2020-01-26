import { RestUtil } from '../../utils/rest-util';
import { CoreConfig } from '../../config';
import { IntegrationTarget } from '../entities/IntegrationTarget';
import { IntegrationAction } from '../entities/IntegrationAction';
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
    /**
     * Create new integration action
     * @Return: EntityResponse<IntegrationAction>
     */
    createAction(body?: IntegrationAction): import("rxjs").Observable<any>;
    /**
     * Update integration action
     * @Return: EntityResponse<IntegrationAction>
     */
    updateAction(id?: string, body?: IntegrationAction): import("rxjs").Observable<any>;
    /**
     * Delete integration action from the system
     * @Return: ActionResponse
     */
    deleteAction(id?: string): import("rxjs").Observable<any>;
    /**
     * Get single integration action by id
     * @Return: EntityResponse<IntegrationAction>
     */
    getAction(id?: string): import("rxjs").Observable<any>;
    /**
     * Get integration actions by list of ids
     * @Return: EntitiesResponse<IntegrationAction>
     */
    listActions(id?: string[]): import("rxjs").Observable<any>;
    /**
     * Find integration actions by filters
     * @Return: EntitiesResponse<IntegrationAction>
     */
    findActions(search?: string): import("rxjs").Observable<any>;
    /**
     * Find all integration actions for a specified level in the folder hierarchy
     * @Return: EntitiesResponse<IntegrationAction>
     */
    getFolderActions(folderId?: string): import("rxjs").Observable<any>;
}
