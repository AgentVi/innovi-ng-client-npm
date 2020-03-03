import { RestUtil } from '../../utils/rest-util';
import { CoreConfig } from '../../config';
import { Schedule } from '../entities/Schedule';
import * as i0 from "@angular/core";
/**
 * Services for schedules actions
 * @RequestHeader X-API-KEY The key to identify the application (portal)
 * @RequestHeader X-ACCESS-TOKEN The token to identify the logged-in user
 */
export declare class SchedulesService {
    private config;
    private rest;
    private baseUrl;
    /**
     * Class constructor
     */
    constructor(config: CoreConfig, rest: RestUtil);
    /**
     * Create new schedule
     * @Return: EntityResponse<Schedule>
     */
    create(body?: Schedule): import("rxjs").Observable<any>;
    /**
     * Update schedule
     * @Return: EntityResponse<Schedule>
     */
    update(id?: string, body?: Schedule): import("rxjs").Observable<any>;
    /**
     * Delete schedule from the system
     * @Return: ActionResponse
     */
    delete(id?: string): import("rxjs").Observable<any>;
    /**
     * Get single schedule by id
     * @Return: EntityResponse<Schedule>
     */
    get(id?: string): import("rxjs").Observable<any>;
    /**
     * Get schedules by list of ids
     * @Return: EntitiesResponse<Schedule>
     */
    list(id?: string[]): import("rxjs").Observable<any>;
    /**
     * Find schedule by filters
     * @Return: QueryResponse<Schedule>
     */
    find(search?: string, folderId?: string, sort?: string, page?: number, pageSize?: number): import("rxjs").Observable<any>;
    /**
     * Find all schedules for a specified level in the folder hierarchy
     * This method returns all the schedules of the current folder and all parent folders
     * @Return: EntitiesResponse<Schedule>
     */
    getFolderSchedules(folderId?: string): import("rxjs").Observable<any>;
    static ɵfac: i0.ɵɵFactoryDef<SchedulesService>;
    static ɵprov: i0.ɵɵInjectableDef<SchedulesService>;
}
