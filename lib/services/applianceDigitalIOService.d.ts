import { RestUtil } from '../../utils/rest-util';
import { CoreConfig } from '../../config';
import { DigitalIO } from '../entities/DigitalIO';
import * as i0 from "@angular/core";
/**
 * Services for digital IO actions actions
 * @RequestHeader X-API-KEY The key to identify the application (portal)
 * @RequestHeader X-ACCESS-TOKEN The token to identify the logged-in user
 */
export declare class ApplianceDigitalIOService {
    private config;
    private rest;
    private baseUrl;
    /**
     * Class constructor
     */
    constructor(config: CoreConfig, rest: RestUtil);
    /**
     * Create digital IO device configuration
     * @Return: EntityResponse<DigitalIO>
     */
    create(body?: DigitalIO): import("rxjs").Observable<any>;
    /**
     * Update digital IO device configuration
     * @Return: EntityResponse<DigitalIO>
     */
    update(body?: DigitalIO): import("rxjs").Observable<any>;
    /**
     * Delete digital IO device configuration
     * @Return: ActionResponse
     */
    delete(id?: string): import("rxjs").Observable<any>;
    /**
     * Get single digital IO device configuration
     * @Return: EntityResponse<DigitalIO>
     */
    get(id?: string): import("rxjs").Observable<any>;
    /**
     * Find digital IO device configurations
     * @Return: EntitiesResponse<DigitalIO>
     */
    find(applianceId?: string, search?: string): import("rxjs").Observable<any>;
    static ɵfac: i0.ɵɵFactoryDef<ApplianceDigitalIOService, never>;
    static ɵprov: i0.ɵɵInjectableDef<ApplianceDigitalIOService>;
}
