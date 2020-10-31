import { RestUtil } from '../../utils/rest-util';
import { CoreConfig } from '../../config';
import { Account } from '../entities/Account';
import { Coordinate } from '../common/Coordinate';
import { HealthThresholds } from '../common/HealthThresholds';
import { SensorStatusCode } from '../enums/SensorStatusCode';
import { BehaviorTypeCode } from '../enums/BehaviorTypeCode';
import { AccountTypeCode } from '../enums/AccountTypeCode';
import { AccountStatusCode } from '../enums/AccountStatusCode';
import * as i0 from "@angular/core";
/**
 * List of account related actions
 */
export declare class AccountsService {
    private config;
    private rest;
    private baseUrl;
    /**
     * Class constructor
     */
    constructor(config: CoreConfig, rest: RestUtil);
    /**
     * Find list of accounts and filter
     * @Return: QueryResponse<Account>
     */
    find(search?: string, type?: AccountTypeCode[], status?: AccountStatusCode[], sort?: string, page?: number, pageSize?: number): import("rxjs").Observable<any>;
    /**
     * Export list of accounts and filter
     * @Return: StreamContent
     */
    exportFormat(name?: string, type?: AccountTypeCode[], status?: AccountStatusCode[], sort?: string, format?: string, fields?: string[]): import("rxjs").Subscription;
    /**
     * Get single account by id
     * @Return: EntityResponse<Account>
     */
    get(id?: string): import("rxjs").Observable<any>;
    /**
     * Update existing account in the system (only with user-enabled fields)
     * @Return: EntityResponse<Account>
     */
    update(id?: string, body?: Account): import("rxjs").Observable<any>;
    /**
     * Change account geo-area (polygon)
     * @Return: EntityResponse<Account>
     */
    changeGeoArea(body?: Coordinate[]): import("rxjs").Observable<any>;
    /**
     * Change account geo-location (center)
     * @Return: EntityResponse<Account>
     */
    changeGeoLocation(body?: Coordinate): import("rxjs").Observable<any>;
    /**
     * Change account health thresholds
     * @Return: EntityResponse<Account>
     */
    changeHealthThresholds(body?: HealthThresholds): import("rxjs").Observable<any>;
    /**
     * Change account timezone
     * @Return: EntityResponse<Account>
     */
    changeTimezone(body?: string): import("rxjs").Observable<any>;
    /**
     * Get default geo location
     * @Return: EntityResponse<Coordinate> The account location
     */
    getDefaultLocation(): import("rxjs").Observable<any>;
    /**
     * Get aggregated summary report of total number of sensors and devices with error / warning status
     * @Return: EntitiesResponse<DistributionOfLong> The list of health status distribution
     */
    getAccountHealthSummary(): import("rxjs").Observable<any>;
    /**
     * Get account logical tree hierarchy (account -> folders -> sensors) - starting from the account level as root
     * A logical tree is a representation of cameras-folders hierarchy as defined by the user
     * @Return: EntityResponse<TreeNode>
     */
    getLogicalTree(status?: SensorStatusCode[], behaviorType?: BehaviorTypeCode[]): import("rxjs").Observable<any>;
    /**
     * Get account physical tree hierarchy (account -> folders -> devices -> sensors) - starting from the account level as root
     * A Physical tree is a representation of cameras-devices-folders hierarchy as defined by the network topology
     * @Return: EntityResponse<TreeNode>
     */
    getPhysicalTree(): import("rxjs").Observable<any>;
    static ɵfac: i0.ɵɵFactoryDef<AccountsService, never>;
    static ɵprov: i0.ɵɵInjectableDef<AccountsService>;
}
