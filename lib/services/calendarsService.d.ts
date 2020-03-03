import { RestUtil } from '../../utils/rest-util';
import { CoreConfig } from '../../config';
import { Calendar } from '../entities/Calendar';
import * as i0 from "@angular/core";
/**
 * Services for calendars (holidays) actions
 * @RequestHeader X-API-KEY The key to identify the application (portal)
 * @RequestHeader X-ACCESS-TOKEN The token to identify the logged-in user
 */
export declare class CalendarsService {
    private config;
    private rest;
    private baseUrl;
    /**
     * Class constructor
     */
    constructor(config: CoreConfig, rest: RestUtil);
    /**
     * Create new calendar
     * @Return: EntityResponse<Calendar>
     */
    create(body?: Calendar): import("rxjs").Observable<any>;
    /**
     * Update calendar
     * @Return: EntityResponse<Calendar>
     */
    update(id?: string, body?: Calendar): import("rxjs").Observable<any>;
    /**
     * Delete calendar from the system
     * @Return: ActionResponse
     */
    delete(id?: string): import("rxjs").Observable<any>;
    /**
     * Get single calendar by id
     * @Return: EntityResponse<Calendar>
     */
    get(id?: string): import("rxjs").Observable<any>;
    /**
     * Get calendars by list of ids
     * @Return: EntitiesResponse<Calendar>
     */
    list(id?: string[]): import("rxjs").Observable<any>;
    /**
     * Find calendars by filters
     * @Return: QueryResponse<Calendar>
     */
    find(search?: string, folderId?: string, sort?: string, page?: number, pageSize?: number): import("rxjs").Observable<any>;
    /**
     * Find all calendars for a specified level in the folder hierarchy
     * This method returns all the calendars of the current folder and all parent folders
     * @Return: EntitiesResponse<Calendar>
     */
    getFolderCalendars(folderId?: string): import("rxjs").Observable<any>;
    /**
     * Import calendar from outlook CSV, ICS or iCal file
     * @Return: ActionResponse
     */
    import(folderId?: string): import("rxjs").Observable<any>;
    /**
     * Import calendar from Url (ICS or iCal formats)
     * @Return: ActionResponse
     */
    importUrl(folderId?: string, body?: string): import("rxjs").Observable<any>;
    static ɵfac: i0.ɵɵFactoryDef<CalendarsService>;
    static ɵprov: i0.ɵɵInjectableDef<CalendarsService>;
}
