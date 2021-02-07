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
     * Get system version
     * @Return: ActionResponse
     */
    getSystemVersion(): import("rxjs").Observable<any>;
    /**
     * Export account configuration data
     * @Return: StreamingOutput of the content (gzip)
     */
    exportAccountData(accountId?: string, password?: string): import("rxjs").Observable<import("@angular/common/http").HttpEvent<Blob>>;
    /**
     * Import account configuration data from byte array (zip content)
     * @Return: ActionResponse
     */
    importAccountData(password?: string, zipFile?: File): import("rxjs").Observable<import("@angular/common/http").HttpEvent<unknown>>;
    /**
     * Export SW package configurations data
     * @Return: StreamingOutput of the content (zip)
     */
    exportConfigurations(): import("rxjs").Observable<import("@angular/common/http").HttpEvent<Blob>>;
    /**
     * Import SW package configurations data from byte array (zip content)
     * @Return: ActionResponse
     */
    importConfigurations(zipFile?: File): import("rxjs").Observable<import("@angular/common/http").HttpEvent<unknown>>;
    /**
     * Backup entire system (configurations, users and accounts)
     * Filter parameter values: empty = backup all, config = backup configuration only, users = backup users only, <accountId> = backup account data
     * @Return: StreamContent
     */
    backupSystem(filter?: string[], fileName?: string): import("rxjs").Observable<import("@angular/common/http").HttpEvent<Blob>>;
    /**
     * Restore entire system (zip content)
     * @Return: ActionResponse
     */
    restoreSystem(zipFile?: File): import("rxjs").Observable<import("@angular/common/http").HttpEvent<unknown>>;
    /**
     * Publish message to all services to change their log level
     * @Return: ActionResponse
     */
    setLogLevel(level?: string): import("rxjs").Observable<any>;
    static ɵfac: i0.ɵɵFactoryDef<SysSystemService, never>;
    static ɵprov: i0.ɵɵInjectableDef<SysSystemService>;
}
