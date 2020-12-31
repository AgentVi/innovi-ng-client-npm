import { RestUtil } from '../../utils/rest-util';
import { CoreConfig } from '../../config';
import { CaseInfo } from '../entities/CaseInfo';
import * as i0 from "@angular/core";
/**
 * Services for case management actions
 * @RequestHeader X-API-KEY The key to identify the application (portal)
 * @RequestHeader X-ACCESS-TOKEN The token to identify the logged-in user
 */
export declare class CasesService {
    private config;
    private rest;
    private baseUrl;
    /**
     * Class constructor
     */
    constructor(config: CoreConfig, rest: RestUtil);
    /**
     * Create new case
     * @Return: EntityResponse<CaseInfo>
     */
    create(body?: CaseInfo): import("rxjs").Observable<any>;
    /**
     * Update case
     * @Return: EntityResponse<CaseInfo>
     */
    update(body?: CaseInfo): import("rxjs").Observable<any>;
    /**
     * Delete case from the system
     * @Return: ActionResponse
     */
    delete(id?: string): import("rxjs").Observable<any>;
    /**
     * Get single case by id
     * @Return: EntityResponse<CaseInfo>
     */
    get(id?: string): import("rxjs").Observable<any>;
    /**
     * Find list of all public cases and user owned private cases
     * @Return: QueryResponse<CaseInfo>
     */
    find(search?: string, sort?: string, page?: number, pageSize?: number): import("rxjs").Observable<any>;
    /**
     * Add bulk of search events to the case
     * @Return: EntityResponse<CaseInfo>
     */
    addSearchEvents(id?: string, sessionId?: string, eventId?: string[]): import("rxjs").Observable<any>;
    /**
     * Remove bulk of search events from the case
     * @Return: EntityResponse<CaseInfo>
     */
    removeSearchEvents(id?: string, eventId?: string[]): import("rxjs").Observable<any>;
    /**
     * Get all timestamped objects of the provided case event
     * @Return: EntityResponse<TimestampedCrop>
     */
    getEventObjects(id?: string, eventId?: string): import("rxjs").Observable<any>;
    /**
     * Get single timestamped object of the provided case event
     * @Return: EntityResponse<TimestampedCrop>
     */
    getEventObject(id?: string, eventId?: string): import("rxjs").Observable<any>;
    static ɵfac: i0.ɵɵFactoryDef<CasesService, never>;
    static ɵprov: i0.ɵɵInjectableDef<CasesService>;
}
