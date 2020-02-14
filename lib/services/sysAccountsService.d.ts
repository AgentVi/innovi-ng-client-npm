import { RestUtil } from '../../utils/rest-util';
import { CoreConfig } from '../../config';
import { AccountTypeCode } from '../enums/AccountTypeCode';
import { AccountStatusCode } from '../enums/AccountStatusCode';
import { Coordinate } from '../common/Coordinate';
import { Account } from '../entities/Account';
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
     * Get account hierarchy
     * @Return: EntityResponse<TreeNode>
     */
    tree(id?: string, sensors?: boolean): import("rxjs").Observable<any>;
    /**
     * Find account folders
     * @Return: QueryResponse<Folder>
     */
    findFolders(id?: string, parentId?: string, search?: string, sort?: string, page?: number, pageSize?: number): import("rxjs").Observable<any>;
    /**
     * Export list of accounts and filter
     * @Return: StreamContent
     */
    exportFormat(name?: string, type?: AccountTypeCode[], status?: AccountStatusCode[], sort?: string, format?: string, fields?: string[]): import("rxjs").Subscription;
    /**
     * Get account types statistics for all accounts in the system
     * @Return: EntitiesResponse<AccountTypeSummary>
     */
    getAccountTypeStatistics(): import("rxjs").Observable<any>;
}
