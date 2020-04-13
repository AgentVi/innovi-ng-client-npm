import { RestUtil } from '../../utils/rest-util';
import { CoreConfig } from '../../config';
import { ObjectTypeCode } from '../enums/ObjectTypeCode';
import { TimeUnitCode } from '../enums/TimeUnitCode';
import { SearchDefinition } from '../entities/SearchDefinition';
import * as i0 from "@angular/core";
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
    list(id?: string[]): import("rxjs").Observable<any>;
    /**
     * Find search definitions by filters
     * @Return: QueryResponse<SearchDefinition>
     */
    find(search?: string, sort?: string, page?: number, pageSize?: number): import("rxjs").Observable<any>;
    /**
     * Perform metadata search by the search definition
     * @Return: EntityResponse<SearchStatus>
     * Search image web socket (/ws/search?search=searchId) must be open before this method invocation.
     * Please provide search id to query definition and use the same id for the web socket
     */
    execute(body?: SearchDefinition): import("rxjs").Observable<any>;
    /**
     * Perform metadata saved search by the search id
     * @Return: EntityResponse<SearchStatus>
     */
    executeById(id?: string): import("rxjs").Observable<any>;
    /**
     * Get search session status
     * @Return: EntityResponse<SearchStatus>
     */
    getSearchStatus(id?: string): import("rxjs").Observable<any>;
    /**
     * Cancel search session
     * @Return: ActionResponse
     */
    cancelSearchSession(id?: string): import("rxjs").Observable<any>;
    /**
     * Get single search event item by id and sessionId
     * @Return: EntityResponse<SearchDefinition>
     */
    getEvent(id?: string, eventId?: string): import("rxjs").Observable<any>;
    /**
     * Get search event image [response content type: image/jpeg]
     * @Return: StreamingOutput of the image
     */
    getEventImage(id?: string, eventId?: string): import("rxjs").Subscription;
    /**
     * Find list of search events by filter
     * @Return: QueryResponse<SearchDefinition>
     */
    findEvents(id?: string, sensorId?: string[], objectType?: ObjectTypeCode[], from?: number, to?: number, sort?: string, page?: number, pageSize?: number): import("rxjs").Observable<any>;
    /**
     * Get total search events count by filter
     * @Return: QueryResponse<SearchDefinition> entities list is null
     */
    totalEvents(id?: string, sensorId?: string[], objectType?: ObjectTypeCode[], from?: number, to?: number, sort?: string, page?: number, pageSize?: number): import("rxjs").Observable<any>;
    /**
     * Export list of search events by filter
     * @Return: StreamContent
     */
    exportEvents(id?: string, sensorId?: string[], objectType?: ObjectTypeCode[], from?: number, to?: number, sort?: string, format?: string, fields?: string[]): import("rxjs").Subscription;
    /**
     * Get events count overtime for all events in the system
     * @Return: EntityResponse<EventCountTimeSeries>
     */
    getEventsCountOvertime(id?: string, sensorId?: string[], objectType?: ObjectTypeCode[], from?: number, to?: number, interval?: TimeUnitCode, labelFormat?: string): import("rxjs").Observable<any>;
    static ɵfac: i0.ɵɵFactoryDef<SearchService>;
    static ɵprov: i0.ɵɵInjectableDef<SearchService>;
}
