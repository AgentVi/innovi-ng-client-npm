import { RestUtil } from '../../utils/rest-util';
import { CoreConfig } from '../../config';
import { ApplianceProfile } from '../entities/ApplianceProfile';
import * as i0 from "@angular/core";
/**
 * Services for custom appliance profiles actions
 * @RequestHeader X-API-KEY The key to identify the application (portal)
 * @RequestHeader X-ACCESS-TOKEN The token to identify the logged-in user
 */
export declare class ApplianceProfilesService {
    private config;
    private rest;
    private baseUrl;
    /**
     * Class constructor
     */
    constructor(config: CoreConfig, rest: RestUtil);
    /**
     * Create new custom appliance profile
     * @Return: EntityResponse<ApplianceProfile>
     */
    create(body?: ApplianceProfile): import("rxjs").Observable<any>;
    /**
     * Update custom appliance profile
     * @Return: EntityResponse<ApplianceProfile>
     */
    update(id?: string, body?: ApplianceProfile): import("rxjs").Observable<any>;
    /**
     * Update Bulk of custom appliance profiles
     * @Return: ActionResponse
     */
    updateBulk(body?: ApplianceProfile[]): import("rxjs").Observable<any>;
    /**
     * Delete custom appliance profile from the system
     * @Return: ActionResponse
     */
    delete(id?: string): import("rxjs").Observable<any>;
    /**
     * Get single profile by id
     * @Return: EntityResponse<ApplianceProfile>
     */
    get(id?: string): import("rxjs").Observable<any>;
    /**
     * Find calendars by filters
     * @Return: EntitiesResponse<ApplianceProfile>
     */
    find(search?: string): import("rxjs").Observable<any>;
    static ɵfac: i0.ɵɵFactoryDef<ApplianceProfilesService>;
    static ɵprov: i0.ɵɵInjectableDef<ApplianceProfilesService>;
}
