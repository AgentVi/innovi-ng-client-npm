import { RestUtil } from '../../utils/rest-util';
import { CoreConfig } from '../../config';
import { ObjectTypeCode } from '../enums/ObjectTypeCode';
import { BehaviorTypeCode } from '../enums/BehaviorTypeCode';
import { SeverityTypeCode } from '../enums/SeverityTypeCode';
import { TimeUnitCode } from '../enums/TimeUnitCode';
import * as i0 from "@angular/core";
/**
 * Services for event queries for system administrator only
 * @RequestHeader X-API-KEY The key to identify the application (portal)
 * @RequestHeader X-ACCESS-TOKEN The token to identify the logged-in user
 */
export declare class SysEventsService {
    private config;
    private rest;
    private baseUrl;
    /**
     * Class constructor
     */
    constructor(config: CoreConfig, rest: RestUtil);
    /**
     * Get single event by id
     * @Return: EntityResponse<Event>
     */
    get(id?: string, accountId?: string): import("rxjs").Observable<any>;
    /**
     * Find events by filters
     * @Return: QueryResponse<Event>
     */
    find(accountId?: string, folderId?: string, sensorId?: string, objectType?: ObjectTypeCode[], behaviorType?: BehaviorTypeCode[], severity?: SeverityTypeCode[], from?: number, to?: number, sort?: string, page?: number, pageSize?: number): import("rxjs").Observable<any>;
    /**
     * Get events count overtime for all events in the system
     * @Return: EntityResponse<EventCountTimeSeries>
     */
    getEventsCountOvertime(accountId?: string, folderId?: string, sensorId?: string, objectType?: ObjectTypeCode[], behaviorType?: BehaviorTypeCode[], severity?: SeverityTypeCode[], from?: number, to?: number, interval?: TimeUnitCode, format?: string): import("rxjs").Observable<any>;
    static ɵfac: i0.ɵɵFactoryDeclaration<SysEventsService, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<SysEventsService>;
}
