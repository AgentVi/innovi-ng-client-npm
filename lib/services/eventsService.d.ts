import { RestUtil } from '../../utils/rest-util';
import { CoreConfig } from '../../config';
import { ObjectTypeCode } from '../enums/ObjectTypeCode';
import { BehaviorTypeCode } from '../enums/BehaviorTypeCode';
import { SeverityTypeCode } from '../enums/SeverityTypeCode';
import { TimeUnitCode } from '../enums/TimeUnitCode';
import { Event } from '../entities/Event';
import { EventStatusCode } from '../enums/EventStatusCode';
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
     * Change event workflow status
     * @Return: EntityResponse<Event>
     */
    changeStatus(id?: string, status?: EventStatusCode): import("rxjs").Observable<any>;
    /**
     * Set event image path
     * @Return: EntityResponse<Event>
     */
    setImagePath(id?: string, body?: string): import("rxjs").Observable<any>;
    /**
     * Set event clip path
     * @Return: EntityResponse<Event>
     */
    setClipPath(id?: string, body?: string): import("rxjs").Observable<any>;
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
    find(folderId?: string, subFolders?: boolean, sensorId?: string, objectType?: ObjectTypeCode[], behaviorType?: BehaviorTypeCode[], severity?: SeverityTypeCode[], status?: EventStatusCode[], rule?: string[], from?: number, to?: number, sort?: string, page?: number, pageSize?: number): import("rxjs").Observable<any>;
    /**
     * Export list of events and filter
     * @Return: StreamContent
     */
    exportFormat(folderId?: string, subFolders?: boolean, sensorId?: string, objectType?: ObjectTypeCode[], behaviorType?: BehaviorTypeCode[], severity?: SeverityTypeCode[], status?: EventStatusCode[], rule?: string[], from?: number, to?: number, sort?: string, format?: string, fields?: string[]): import("rxjs").Subscription;
    /**
     * Find events generated in area using spatial query
     * @Return: QueryResponse<Event>
     */
    findInArea(folderId?: string, sensorId?: string, objectType?: ObjectTypeCode[], behaviorType?: BehaviorTypeCode[], severity?: SeverityTypeCode[], status?: EventStatusCode[], rule?: string[], from?: number, to?: number, sort?: string, page?: number, pageSize?: number): import("rxjs").Observable<any>;
    /**
     * Get event image [response content type: image/jpeg]
     * @Return: StreamingOutput of the image
     */
    getEventImage(id?: string): import("rxjs").Subscription;
    /**
     * Get event clip [response content type: video/mp4]
     * @Return: StreamingOutput of the clip
     */
    getEventClip(id?: string): import("rxjs").Subscription;
    /**
     * Get events count overtime for all events in the system
     * @Return: EntityResponse<EventCountTimeSeries>
     */
    getEventsCountOvertime(folderId?: string, sensorId?: string, objectType?: ObjectTypeCode[], behaviorType?: BehaviorTypeCode[], severity?: SeverityTypeCode[], status?: EventStatusCode[], rule?: string[], from?: number, to?: number, interval?: TimeUnitCode, labelFormat?: string): import("rxjs").Observable<any>;
    static ɵfac: i0.ɵɵFactoryDef<EventsService, never>;
    static ɵprov: i0.ɵɵInjectableDef<EventsService>;
}
