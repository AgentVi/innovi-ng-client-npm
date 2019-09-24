import { RestUtil } from '../../utils/rest-util';
import { CoreConfig } from '../../config';
import { ApiKey } from '../entities/ApiKey';
/**
 * List of all key (API key + User token) related actions for system administrator only
 * @RequestHeader X-API-KEY The key to identify the application (portal)
 * @RequestHeader X-ACCESS-TOKEN The token to identify the logged-in user
 */
export declare class SysKeysService {
    private config;
    private rest;
    private baseUrl;
    /**
     * Class constructor
     */
    constructor(config: CoreConfig, rest: RestUtil);
    /**
     * Create new API key for specific application name
     * @Return: EntityResponse<ApiKey>
     */
    create(body?: ApiKey): import("rxjs").Observable<any>;
    /**
     * Change API Key version (rotate key)
     * @Return: EntityResponse<ApiKey>
     */
    rotate(id?: string): import("rxjs").Observable<any>;
    /**
     * Delete API Key
     * @Return: ActionResponse
     */
    delete(id?: string): import("rxjs").Observable<any>;
    /**
     * Get single API Key by id
     * @Return: EntityResponse<ApiKey>
     */
    get(id?: string): import("rxjs").Observable<any>;
    /**
     * Get list of all keys
     * @Return: EntitiesResponse<ApiKey>
     */
    getAll(): import("rxjs").Observable<any>;
    /**
     * Enable key
     * @Return: EntityResponse<ApiKey>
     */
    enable(id?: string): import("rxjs").Observable<any>;
    /**
     * Disable key
     * @Return: EntityResponse<ApiKey>
     */
    disable(id?: string): import("rxjs").Observable<any>;
    /**
     * Create access token for the user in the specified account
     * @Return: ActionResponse
     */
    createAccessToken(accountId?: string, userId?: string, ttl?: number): import("rxjs").Observable<any>;
    /**
     * Create time limited password for user to access the API documentation
     * @Return: ActionResponse
     */
    createTimedPassword(days?: number, user?: string): import("rxjs").Observable<any>;
}
