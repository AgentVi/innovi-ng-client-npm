import { RestUtil } from '../../utils/rest-util';
import { CoreConfig } from '../../core-lib.module';
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
}
