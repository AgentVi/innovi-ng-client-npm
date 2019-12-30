import { RestUtil } from '../../utils/rest-util';
import { CoreConfig } from '../../config';
import { AccountTypeCode } from '../enums/AccountTypeCode';
import { AccountStatusCode } from '../enums/AccountStatusCode';
import { Coordinate } from '../common/Coordinate';
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
     * Change account geo-area (polygon)
     * @Return: EntityResponse<Account>
     */
    changeGeoArea(id?: string, body?: Coordinate[]): import("rxjs").Observable<any>;
    /**
     * Change account geo-location (center)
     * @Return: EntityResponse<Account> The changed account
     */
    changeGeoLocation(id?: string, body?: Coordinate): import("rxjs").Observable<any>;
    /**
     * Get default geo location
     * @Return: EntityResponse<Coordinate> The account location
     */
    getDefaultLocation(id?: string): import("rxjs").Observable<any>;
    /**
     * Get aggregated summary report of total number of sensors and devices with error / warning status
     * @Return: EntitiesResponse<DistributionOfLong> The list of health status distribution
     */
    getAccountHealthSummary(id?: string): import("rxjs").Observable<any>;
}
