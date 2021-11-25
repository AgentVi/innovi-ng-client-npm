import { RestUtil } from '../../utils/rest-util';
import { CoreConfig } from '../../config';
import * as i0 from "@angular/core";
/**
 * Health check service, no X-API-KEY or X-ACCESS-TOKEN are required
 */
export declare class HealthCheckService {
    private config;
    private rest;
    private baseUrl;
    /**
     * Class constructor
     */
    constructor(config: CoreConfig, rest: RestUtil);
    /**
     * Health check to test service availability
     * @Return: ActionResponse - with version info
     */
    health(): import("rxjs").Observable<any>;
    static ɵfac: i0.ɵɵFactoryDeclaration<HealthCheckService, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<HealthCheckService>;
}
