import { RestUtil } from '../../utils/rest-util';
import { CoreConfig } from '../../config';
import { FeaturesGroup } from '../entities/FeaturesGroup';
/**
 * Features groups services for system administrator only
 * @RequestHeader X-API-KEY The key to identify the application (portal)
 * @RequestHeader X-ACCESS-TOKEN The token to identify the logged-in user
 */
export declare class SysFeaturesGroupsService {
    private config;
    private rest;
    private baseUrl;
    /**
     * Class constructor
     */
    constructor(config: CoreConfig, rest: RestUtil);
    /**
     * Create new features group
     * @Return: EntityResponse<FeaturesGroup>
     */
    create(body?: FeaturesGroup): import("rxjs").Observable<any>;
    /**
     * Update features group
     * @Return: EntityResponse<FeaturesGroup>
     */
    update(id?: string, body?: FeaturesGroup): import("rxjs").Observable<any>;
    /**
     * Delete Feature from the system
     * @Return: ActionResponse
     */
    delete(id?: string): import("rxjs").Observable<any>;
    /**
     * Get single features group by id
     * @Return: EntityResponse<FeaturesGroup>
     */
    get(id?: string): import("rxjs").Observable<any>;
    /**
     * Find features groups by filters
     * @Return: QueryResponse<FeaturesGroup>
     */
    find(search?: string, sort?: string): import("rxjs").Observable<any>;
}
