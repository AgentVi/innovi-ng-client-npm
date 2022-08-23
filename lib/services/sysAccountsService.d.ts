import { RestUtil } from '../../utils/rest-util';
import { CoreConfig } from '../../config';
import { Coordinate } from '../common/Coordinate';
import { SensorStatusCode } from '../enums/SensorStatusCode';
import { BehaviorTypeCode } from '../enums/BehaviorTypeCode';
import { Account } from '../entities/Account';
import { AccountTypeCode } from '../enums/AccountTypeCode';
import { AccountStatusCode } from '../enums/AccountStatusCode';
import * as i0 from "@angular/core";
/**
 * List of account related actions for system administrator only
 * @RequestHeader X-API-KEY The key to identify the application (console)
 * @RequestHeader X-ACCESS-TOKEN The token to identify the logged-in user
 */
export declare class SysAccountsService {
    private config;
    private rest;
    private baseUrl;
    /**
     * Class constructor
     */
    constructor(config: CoreConfig, rest: RestUtil);
    /**
     * Create new account
     * @Return: EntityResponse<Account>
     */
    create(body?: Account): import("rxjs").Observable<any>;
    /**
     * Update existing account in the system
     * @Return: EntityResponse<Account>
     */
    update(id?: string, body?: Account): import("rxjs").Observable<any>;
    /**
     * Update account name
     * @Return: EntityResponse<Account>
     */
    changeName(id?: string, body?: string): import("rxjs").Observable<any>;
    /**
     * Change account type
     * @Return: EntityResponse<User>
     */
    changeType(id?: string, type?: AccountTypeCode): import("rxjs").Observable<any>;
    /**
     * Change account status
     * @Return: EntityResponse<Account>
     */
    changeStatus(id?: string, status?: AccountStatusCode): import("rxjs").Observable<any>;
    /**
     * Change account groups
     * @Return: EntityResponse<Account>
     */
    changeGroups(id?: string, groupId?: string[]): import("rxjs").Observable<any>;
    /**
     * Change account geo-location (center)
     * @Return: EntityResponse<Account> The changed account
     */
    changeGeoLocation(body?: Coordinate): import("rxjs").Observable<any>;
    /**
     * Change account geo area
     * @Return: EntityResponse<Account> The changed account
     */
    changeGeoArea(body?: Coordinate[]): import("rxjs").Observable<any>;
    /**
     * Delete account from the system
     * The account is moved to DELETED mode and will be deleted after 90 days
     * Only account marked as SUSPENDED can be deleted
     * @Return: ActionResponse
     */
    delete(id?: string): import("rxjs").Observable<any>;
    /**
     * Delete account immediately without account status restrictions
     * @Return: ActionResponse
     */
    purge(id?: string): import("rxjs").Observable<any>;
    /**
     * Reset account - remove all operational data older than the retention time in days (events, status, log ...) but leave configuration data
     * @Return: ActionResponse
     */
    reset(id?: string, days?: number): import("rxjs").Observable<any>;
    /**
     * Get single account by id
     * @Return: EntityResponse<Account>
     */
    get(id?: string): import("rxjs").Observable<any>;
    /**
     * Get accounts by list of ids
     * @Return: EntitiesResponse<Account>
     */
    list(id?: string[]): import("rxjs").Observable<any>;
    /**
     * Find list of accounts and filter
     * @Return: QueryResponse<Account>
     */
    find(search?: string, type?: AccountTypeCode[], status?: AccountStatusCode[], sort?: string, page?: number, pageSize?: number): import("rxjs").Observable<any>;
    /**
     * Find list of accounts and filter but replace group Ids with group names
     * @Return: QueryResponse<Account>
     */
    report(search?: string, type?: AccountTypeCode[], status?: AccountStatusCode[], sort?: string, page?: number, pageSize?: number): import("rxjs").Observable<any>;
    /**
     * Get account hierarchy
     * @Return: EntityResponse<TreeNode>
     */
    tree(id?: string, includeSensors?: boolean, status?: SensorStatusCode[], behaviorType?: BehaviorTypeCode[]): import("rxjs").Observable<any>;
    /**
     * Find account folders
     * @Return: QueryResponse<Folder>
     */
    findFolders(id?: string, parentId?: string, search?: string, sort?: string, page?: number, pageSize?: number): import("rxjs").Observable<any>;
    /**
     * Export list of accounts and filter
     * @Return: StreamContent
     */
    exportFormat(name?: string, type?: AccountTypeCode[], status?: AccountStatusCode[], sort?: string, format?: string, fields?: string[], fileName?: string): import("rxjs").Observable<import("@angular/common/http").HttpEvent<Blob>>;
    /**
     * Get account types statistics for all accounts in the system
     * @Return: EntitiesResponse<AccountTypeSummary>
     */
    getAccountTypeStatistics(): import("rxjs").Observable<any>;
    /**
     * Get account monthly statistics for all accounts in the system
     * @Return: EntitiesResponse<AccountStatistics>
     */
    getAccountMonthStatistics(accountId?: string[], from?: number, to?: number): import("rxjs").Observable<any>;
    /**
     * Get accounts month report - current channels and devices per account compared to previous month
     * @Return: EntitiesResponse<AccountStatSummary>
     */
    getAccountsMonthReport(): import("rxjs").Observable<any>;
    /**
     * Get default geo location
     * @Return: EntityResponse<Coordinate> The account location
     */
    getDefaultLocation(id?: string): import("rxjs").Observable<any>;
    /**
     * Get account usage report (for billing)
     * List of sensor with total active time (minutes) and total of billable sensors
     * @Return: EntityResponse<UsageReport>
     */
    getUsageReport(id?: string, year?: number, month?: number): import("rxjs").Observable<any>;
    /**
     * Get sensor usage report (for billing)
     * @Return: EntityResponse<TimeDataSeries<SensorStatusCode>>
     */
    getSensorUsageReport(id?: string, sensorId?: string, year?: number, month?: number): import("rxjs").Observable<any>;
    /**
     * Export account usage report to a file (for billing)
     * @Return: StreamContent
     */
    exportUsageReport(id?: string, year?: number, month?: number, format?: string, fileName?: string): import("rxjs").Observable<import("@angular/common/http").HttpEvent<Blob>>;
    /**
     * Export all accounts usage report to a file (for operations)
     * @Return: StreamContent
     */
    exportAllAccountsUsageReport(year?: number, month?: number): import("rxjs").Observable<import("@angular/common/http").HttpEvent<Blob>>;
    static ɵfac: i0.ɵɵFactoryDeclaration<SysAccountsService, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<SysAccountsService>;
}
