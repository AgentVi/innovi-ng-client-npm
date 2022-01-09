import { RestUtil } from '../../utils/rest-util';
import { CoreConfig } from '../../config';
import { SeverityTypeCode } from '../enums/SeverityTypeCode';
import { TimeUnitCode } from '../enums/TimeUnitCode';
import { Event } from '../entities/Event';
import { EventStatusCode } from '../enums/EventStatusCode';
import { ObjectTypeCode } from '../enums/ObjectTypeCode';
import { BehaviorTypeCode } from '../enums/BehaviorTypeCode';
import * as i0 from "@angular/core";
/**
 * Services for events actions
 * @RequestHeader X-API-KEY The key to identify the application (portal)
 * @RequestHeader X-ACCESS-TOKEN The token to identify the logged-in user
 */
export declare class EventsService {
    private config;
    private rest;
    private baseUrl;
    /**
     * Class constructor
     */
    constructor(config: CoreConfig, rest: RestUtil);
    /**
     * Create new event
     * @Return: EntityResponse<Event>
     */
    create(body?: Event): import("rxjs").Observable<any>;
    /**
     * Get a list of integration targets applicable for this event
     * @Return: EntitiesResponse<IntegrationAction>
     */
    getIntegrations(id?: string, sensorId?: string, folderId?: string): import("rxjs").Observable<any>;
    /**
     * Force manual event integrations
     * @Return: ActionResponse
     */
    invokeIntegrations(id?: string): import("rxjs").Observable<any>;
    /**
     * Change event workflow status
     * @Return: ActionResponse
     */
    changeStatus(id?: string, status?: EventStatusCode): import("rxjs").Observable<any>;
    /**
     * Change multiple events workflow status
     * @Return: ActionResponse
     */
    changeBulkStatuses(id?: string[], status?: EventStatusCode): import("rxjs").Observable<any>;
    /**
     * Get single event by id
     * @Return: EntityResponse<Event>
     */
    get(id?: string): import("rxjs").Observable<any>;
    /**
     * Get events by list of ids
     * @Return: EntitiesResponse<Event>
     */
    list(id?: string[]): import("rxjs").Observable<any>;
    /**
     * Find events by filters
     * @Return: QueryResponse<Event>
     */
    find(folderId?: string, subFolders?: boolean, sensorId?: string, applianceId?: string, objectType?: ObjectTypeCode[], behaviorType?: BehaviorTypeCode[], severity?: SeverityTypeCode[], status?: EventStatusCode[], rule?: string[], from?: number, to?: number, sort?: string, page?: number, pageSize?: number): import("rxjs").Observable<any>;
    /**
     * Export list of events and filter
     * @Return: StreamContent
     */
    exportFormat(folderId?: string, subFolders?: boolean, sensorId?: string, objectType?: ObjectTypeCode[], behaviorType?: BehaviorTypeCode[], severity?: SeverityTypeCode[], status?: EventStatusCode[], rule?: string[], from?: number, to?: number, sort?: string, format?: string, fields?: string[], fileName?: string): import("rxjs").Observable<import("@angular/common/http").HttpEvent<Blob>>;
    /**
     * Find events generated in area using spatial query
     * @Return: QueryResponse<Event>
     */
    findInArea(folderId?: string, sensorId?: string, objectType?: ObjectTypeCode[], behaviorType?: BehaviorTypeCode[], severity?: SeverityTypeCode[], status?: EventStatusCode[], rule?: string[], from?: number, to?: number, sort?: string, page?: number, pageSize?: number): import("rxjs").Observable<any>;
    /**
     * Get event image [response content type: image/jpeg]
     * @Return: StreamingOutput of the image
     */
    getEventImage(id?: string): import("rxjs").Observable<import("@angular/common/http").HttpEvent<Blob>>;
    /**
     * Get event clip [response content type: video/mp4]
     * @Return: StreamingOutput of the clip
     */
    getEventClip(id?: string): import("rxjs").Observable<import("@angular/common/http").HttpEvent<Blob>>;
    /**
     * Get events count overtime for all events in the system
     * @Return: EntityResponse<EventCountTimeSeries>
     */
    getEventsCountOvertime(folderId?: string, sensorId?: string, objectType?: ObjectTypeCode[], behaviorType?: BehaviorTypeCode[], severity?: SeverityTypeCode[], status?: EventStatusCode[], rule?: string[], from?: number, to?: number, interval?: TimeUnitCode, labelFormat?: string): import("rxjs").Observable<any>;
    /**
     * Get events distribution by status
     * @Return: EntityResponse<DistributionOfLong>
     */
    getEventsCountByStatus(folderId?: string, sensorId?: string, objectType?: ObjectTypeCode[], behaviorType?: BehaviorTypeCode[], severity?: SeverityTypeCode[], rule?: string[], from?: number, to?: number): import("rxjs").Observable<any>;
    /**
     * Get events distribution by object type
     * @Return: EntityResponse<DistributionOfLong>
     */
    getEventsCountByObject(folderId?: string, sensorId?: string, behaviorType?: BehaviorTypeCode[], severity?: SeverityTypeCode[], status?: EventStatusCode[], rule?: string[], from?: number, to?: number): import("rxjs").Observable<any>;
    /**
     * Get events distribution by behavior
     * @Return: EntityResponse<DistributionOfLong>
     */
    getEventsCountByBehavior(folderId?: string, sensorId?: string, objectType?: ObjectTypeCode[], severity?: SeverityTypeCode[], status?: EventStatusCode[], rule?: string[], from?: number, to?: number): import("rxjs").Observable<any>;
    /**
     * Direct link to download event image [response content type: image/jpeg]
     * This link is injected dynamically by the system to the ImagePath property of the event, the link includes time-limited token (valid for 12 hours) to identify the account and event
     * @Return: StreamingOutput of the image
     */
    downloadEventImage(imageToken?: string): import("rxjs").Observable<import("@angular/common/http").HttpEvent<Blob>>;
    /**
     * Direct link to download event clip [response content type: video/mp4]
     * This link is injected dynamically by the system to the ClipPath property of the event, the link includes time-limited token (valid for 12 hours) to identify the account and event
     * @Return: StreamingOutput of the clip
     */
    downloadEventClip(imageToken?: string): import("rxjs").Observable<import("@angular/common/http").HttpEvent<Blob>>;
    static ɵfac: i0.ɵɵFactoryDeclaration<EventsService, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<EventsService>;
}
