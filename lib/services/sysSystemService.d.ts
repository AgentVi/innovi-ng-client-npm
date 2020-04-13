import { RestUtil } from '../../utils/rest-util';
import { CoreConfig } from '../../config';
import * as i0 from "@angular/core";
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
    exportAccountData(accountId?: string, password?: string): import("rxjs").Subscription;
    /**
     * Import account configuration data from byte array (zip content)
     * @Return: ActionResponse
     */
    importAccountData(): import("rxjs").Observable<any>;
    /**
     * Export SW package configurations data
     * @Return: StreamingOutput of the content (zip)
     */
    exportConfigurations(): import("rxjs").Subscription;
    /**
     * Import SW package configurations data from byte array (zip content)
     * @Return: ActionResponse
     */
    importConfigurations(): import("rxjs").Observable<any>;
    /**
     * Backup entire system (configurations, users and accounts)
     * @Return: StreamingOutput of the content (zip)
     */
    backupSystem(): import("rxjs").Subscription;
    /**
     * Restore entire system (zip content)
     * @Return: ActionResponse
     */
    restoreSystem(): import("rxjs").Observable<any>;
    static ɵfac: i0.ɵɵFactoryDef<SysSystemService, never>;
    static ɵprov: i0.ɵɵInjectableDef<SysSystemService>;
}
