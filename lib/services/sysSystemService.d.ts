import { RestUtil } from '../../utils/rest-util';
import { CoreConfig } from '../../core-config';
/**
 * List of general system configuration actions for system administrator only
 */
export declare class SysSystemService {
    private config;
    private rest;
    private baseUrl;
    /**
     * Class constructor
     */
    constructor(config: CoreConfig, rest: RestUtil);
    /**
     * Get system license
     * @Return: EntityResponse<License>
     */
    getLicense(): import("rxjs").Observable<any>;
    /**
     * Import license data from file
     * @Return: ActionResponse
     */
    importLicense(): import("rxjs").Observable<any>;
    /**
     * Get system version
     * @Return: ActionResponse
     */
    getSystemVersion(): import("rxjs").Observable<any>;
    /**
     * Export account configuration data
     * @Return: StreamingOutput of the content (gzip)
     */
    exportAccountData(id?: string): import("rxjs").Observable<any>;
    /**
     * Import account configuration data from byte array (zip content)
     * @Return: ActionResponse
     */
    importAccountData(): import("rxjs").Observable<any>;
    /**
     * Export SW package configurations data
     * @Return: StreamingOutput of the content (gzip)
     */
    exportConfigurations(id?: string): import("rxjs").Observable<any>;
    /**
     * Import SW package configurations data from byte array (zip content)
     * @Return: ActionResponse
     */
    importConfigurations(): import("rxjs").Observable<any>;
}
