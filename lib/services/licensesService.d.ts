import { RestUtil } from '../../utils/rest-util';
import { CoreConfig } from '../../config';
import * as i0 from "@angular/core";
/**
 * List of license related actions
 * @RequestHeader X-API-KEY The key to identify the application (portal)
 * @RequestHeader X-ACCESS-TOKEN The token to identify the logged-in user
 */
export declare class LicensesService {
    private config;
    private rest;
    private baseUrl;
    /**
     * Class constructor
     */
    constructor(config: CoreConfig, rest: RestUtil);
    /**
     * Get cluster id
     * @Return: ActionResponse
     */
    getClusterId(): import("rxjs").Observable<any>;
    /**
     * Get active license (combined license from all licenses)
     * @Return: EntityResponse<License>
     */
    getActive(): import("rxjs").Observable<any>;
    /**
     * Get single license by Id
     * @Return: EntityResponse<License>
     */
    get(id?: string): import("rxjs").Observable<any>;
    /**
     * Delete license from the system
     * @Return: ActionResponse
     */
    delete(id?: string): import("rxjs").Observable<any>;
    /**
     * Get all licenses
     * @Return: EntitiesResponse<License>
     */
    getAll(): import("rxjs").Observable<any>;
    /**
     * Import license data from file
     * @Return: ActionResponse
     */
    import(): import("rxjs").Observable<any>;
    static ɵfac: i0.ɵɵFactoryDef<LicensesService, never>;
    static ɵprov: i0.ɵɵInjectableDef<LicensesService>;
}
