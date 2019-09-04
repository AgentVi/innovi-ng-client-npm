import { RestUtil } from '../../utils/rest-util';
import { CoreConfig } from '../../core-lib.module';
import { SearchDefinition } from '../entities/SearchDefinition';
/**
 * Services for metadata search actions
 * @RequestHeader X-API-KEY The key to identify the application (portal)
 * @RequestHeader X-ACCESS-TOKEN The token to identify the logged-in user
 */
export declare class SearchService {
    private config;
    private rest;
    private baseUrl;
    /**
     * Class constructor
     */
    constructor(config: CoreConfig, rest: RestUtil);
    /**
     * Create new search definition
     * @Return: EntityResponse<SearchDefinition>
     */
    create(body?: SearchDefinition): import("rxjs").Observable<any>;
    /**
     * Update search definition
     * @Return: EntityResponse<SearchDefinition>
     */
    update(id?: string, body?: SearchDefinition): import("rxjs").Observable<any>;
    /**
     * Delete search definition from the system
     * @Return: ActionResponse
     */
    delete(id?: string): import("rxjs").Observable<any>;
    /**
     * Get single search definition by id
     * @Return: EntityResponse<SearchDefinition>
     */
    get(id?: string): import("rxjs").Observable<any>;
    /**
     * Get multiple search definitions by list of ids
     * @Return: EntitiesResponse<SearchDefinition>
     */
    list(id?: string): import("rxjs").Observable<any>;
    /**
     * Find search definitions by filters
     * @Return: QueryResponse<SearchDefinition>
     */
    find(search?: string, sort?: string, page?: number, pageSize?: number): import("rxjs").Observable<any>;
    /**
     * Perform metadata search by the search definition
     * @Return: QueryResponse<ObjectInfo> - list of detected objects
     * Search image web socket (/ws/search?search=searchId) must be open before this method invocation.
     * Please provide search id to query definition and use the same id for the web socket
     */
    execute(body?: SearchDefinition): import("rxjs").Observable<any>;
    /**
     * Perform metadata saved search by the search id
     * @Return: QueryResponse<ObjectInfo> - list of detected objects
     */
    executeById(id?: string): import("rxjs").Observable<any>;
}
