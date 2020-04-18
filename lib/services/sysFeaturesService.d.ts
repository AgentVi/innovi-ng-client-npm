import { RestUtil } from '../../utils/rest-util';
import { CoreConfig } from '../../config';
import { Feature } from '../entities/Feature';
import * as i0 from "@angular/core";
/**
 * Features services for system administrator only
 * @RequestHeader X-API-KEY The key to identify the application (portal)
 * @RequestHeader X-ACCESS-TOKEN The token to identify the logged-in user
 */
export declare class SysFeaturesService {
    private config;
    private rest;
    private baseUrl;
    /**
     * Class constructor
     */
    constructor(config: CoreConfig, rest: RestUtil);
    /**
     * Create new Feature
     * @Return: EntityResponse<Feature>
     */
    create(body?: Feature): import("rxjs").Observable<any>;
    /**
     * Update Feature
     * @Return: EntityResponse<Feature>
     */
    update(id?: string, body?: Feature): import("rxjs").Observable<any>;
    /**
     * Delete Feature from the system
     * @Return: ActionResponse
     */
    delete(id?: string): import("rxjs").Observable<any>;
    /**
     * Get single feature by id
     * @Return: EntityResponse<Feature>
     */
    get(id?: string): import("rxjs").Observable<any>;
    /**
     * Find features by filters
     * @Return: QueryResponse<Feature>
     */
    find(search?: string, category?: string, sort?: string): import("rxjs").Observable<any>;
    static ɵfac: i0.ɵɵFactoryDef<SysFeaturesService, never>;
    static ɵprov: i0.ɵɵInjectableDef<SysFeaturesService>;
}
