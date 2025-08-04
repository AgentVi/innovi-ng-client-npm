import { RestUtil } from '../../utils/rest-util';
import { CoreConfig } from '../../config';
import { SearchEventFindRequestBody } from '../messages/SearchEventFindRequestBody';
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
     */
    execute(body?: SearchDefinition): import("rxjs").Observable<any>;
    /**
     * Perform metadata saved search by the search id
     * @Return: EntityResponse<SearchStatus>
     */
    executeById(id?: string): import("rxjs").Observable<any>;
    /**
     * Perform metadata search by the similarity for another object
     * @Return: EntityResponse<SearchStatus>
     */
    searchForSimilar(body?: SearchDefinition): import("rxjs").Observable<any>;
    /**
     * Get search session status
     * @Return: EntityResponse<SearchStatus>
     */
    getSearchStatus(sessionId?: string): import("rxjs").Observable<any>;
    /**
     * Cancel search session and drop results
     * @Return: ActionResponse
     */
    cancelSearchSession(sessionId?: string): import("rxjs").Observable<any>;
    /**
     * Stop search session
     * @Return: ActionResponse
     */
    stopSearchSession(sessionId?: string): import("rxjs").Observable<any>;
    /**
     * Get single search event item by id and sessionId
     * @Return: EntityResponse<SearchDefinition>
     */
    getEvent(sessionId?: string, eventId?: string): import("rxjs").Observable<any>;
    /**
     * Get search event image [response content type: image/jpeg]
     * @Return: StreamingOutput of the image
     */
    getEventImage(sessionId?: string, eventId?: string): import("rxjs").Observable<import("@angular/common/http").HttpEvent<Blob>>;
    /**
     * Get multiple search events by list of ids
     * @Return: EntitiesResponse<SearchDefinition>
     */
    listEvents(sessionId?: string, eventId?: string[]): import("rxjs").Observable<any>;
    /**
     * Find list of search events by filter. Notice that this does not create anything, but the POST verb allow for the query parameters to be passed in the body.
     * @Return: QueryResponse<SearchDefinition>
     */
    findEvents(sessionId?: string, body?: SearchEventFindRequestBody): import("rxjs").Observable<any>;
    /**
     * Find list of sensor Ids related to the search results
     * @Return: EntitiesResponse<StringIntValue>
     */
    findSensorsIds(sessionId?: string): import("rxjs").Observable<any>;
    /**
     * Get total search events count by filter. Notice that this does not create anything, but the POST verb allow for the query parameters to be passed in the body.
     * @Return: QueryResponse<SearchDefinition> entities list is null
     */
    totalEvents(sessionId?: string, body?: SearchEventFindRequestBody): import("rxjs").Observable<any>;
    /**
     * Export list of search events by filter. Notice that this does not create anything, but the POST verb allow for the query parameters to be passed in the body.
     * @Return: StreamContent
     */
    exportEvents(sessionId?: string, format?: string, fields?: string[], fileName?: string, body?: SearchEventFindRequestBody): import("rxjs").Observable<import("@angular/common/http").HttpEvent<Blob>>;
    /**
     * Get events count overtime for all events in the system
     * @Return: EntityResponse<EventCountTimeSeries>
     */
    getEventsCountOvertime(sessionId?: string, sensorId?: string[], objectType?: ObjectTypeCode[], from?: number, to?: number, interval?: TimeUnitCode, labelFormat?: string): import("rxjs").Observable<any>;
    /**
     * Get search event object crops (for animation)
     * @Return: EntityResponse<TimestampedCropsData>
     */
    getEventObjectCropsData(sessionId?: string, eventId?: string): import("rxjs").Observable<any>;
    /**
     * Find objects paths aggregation for sensor FOV (for path visualizer)
     * @Return: EntityResponse<SensorPaths>
     */
    getSensorPaths(sessionId?: string, sensorId?: string, from?: number, to?: number, objectType?: ObjectTypeCode[], points?: number): import("rxjs").Observable<any>;
    /**
     * Get all search events related to the path
     * @Return: QueryResponse<SearchEvent>
     */
    getSensorPathEvents(sessionId?: string, sensorId?: string, pathId?: number, page?: number, pageSize?: number): import("rxjs").Observable<any>;
    /**
     * Find objects heatmap for sensor FOV (for path visualizer)
     * @Return: EntityResponse<SensorPaths>
     */
    getSensorHeatmap(sessionId?: string, sensorId?: string, from?: number, to?: number, objectType?: ObjectTypeCode[], dim?: number): import("rxjs").Observable<any>;
    /**
     * Get all search events related to the heatmap
     * @Return: QueryResponse<SearchEvent>
     */
    getSensorHeatmapEvents(sessionId?: string, sensorId?: string, row?: number, col?: number, page?: number, pageSize?: number): import("rxjs").Observable<any>;
    /**
     * Get POI (Point of Interest) by arrays of sensorIds and objectIds
     * @Return EntitiesResponse<Poi>
     */
    getPoi(sensorIds?: string[], objectIds?: string[]): import("rxjs").Observable<any>;
    /**
     * Get single POI picture by poiId to retrieve display image
     * @Return EntityResponse<PoiPicture>
     */
    getPoiPicture(poiId?: string): import("rxjs").Observable<any>;
    static ɵfac: i0.ɵɵFactoryDeclaration<SearchService, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<SearchService>;
}
