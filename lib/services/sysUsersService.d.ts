import { RestUtil } from '../../utils/rest-util';
import { CoreConfig } from '../../config';
import { UserRegistration } from '../common/UserRegistration';
import { User } from '../entities/User';
import { UserTypeCode } from '../enums/UserTypeCode';
import { UserStatusCode } from '../enums/UserStatusCode';
import { AccountRoleCode } from '../enums/AccountRoleCode';
import * as i0 from "@angular/core";
/**
 * List of all user related actions for account administrator only
 * @RequestHeader X-API-KEY The key to identify the application (console)
 * @RequestHeader X-ACCESS-TOKEN The token to identify the logged-in user
 */
export declare class SysUsersService {
    private config;
    private rest;
    private baseUrl;
    /**
     * Class constructor
     */
    constructor(config: CoreConfig, rest: RestUtil);
    /**
     * Create a new user for the current account
     * The response includes access token valid for 20 minutes. The client side should renew the token before expiration using refresh-token method
     * @Return: ActionResponse
     */
    create(body?: UserRegistration): import("rxjs").Observable<any>;
    /**
     * Update user
     * @Return: EntityResponse<User>
     */
    update(id?: string, body?: User): import("rxjs").Observable<any>;
    /**
     * Change user name
     * @Return: EntityResponse<User>
     */
    changeName(id?: string, body?: string): import("rxjs").Observable<any>;
    /**
     * Change user mobile
     * @Return: EntityResponse<User>
     */
    changeMobile(id?: string, body?: string): import("rxjs").Observable<any>;
    /**
     * Change user type
     * @Return: EntityResponse<User>
     */
    changeType(id?: string, type?: UserTypeCode): import("rxjs").Observable<any>;
    /**
     * Change user status
     * @Return: EntityResponse<User>
     */
    changeStatus(id?: string, status?: UserStatusCode): import("rxjs").Observable<any>;
    /**
     * Change user default account
     * @Return: EntityResponse<User>
     */
    changeDefaultAccount(id?: string, accountId?: string): import("rxjs").Observable<any>;
    /**
     * Reset password for user, generate one-time temporary password
     * @Return: ActionResponse
     */
    resetPassword(id?: string): import("rxjs").Observable<any>;
    /**
     * Set user roles in his accounts (override previous roles)
     * @Return: EntityResponse<User>
     */
    setRoles(id?: string, roles?: AccountRoleCode[]): import("rxjs").Observable<any>;
    /**
     * Update user roles in his accounts (merge with existing roles)
     * @Return: EntityResponse<User>
     */
    mergeRoles(id?: string, roles?: AccountRoleCode[]): import("rxjs").Observable<any>;
    /**
     * Delete user from the system
     * @Return: ActionResponse
     */
    delete(id?: string): import("rxjs").Observable<any>;
    /**
     * Get single user by Id
     * @Return: EntityResponse<User>
     */
    get(id?: string): import("rxjs").Observable<any>;
    /**
     * Find list of users by filter
     * @Return: QueryResponse<User>
     */
    find(accountId?: string, search?: string, type?: UserTypeCode[], status?: UserStatusCode[], sort?: string, page?: number, pageSize?: number): import("rxjs").Observable<any>;
    /**
     * Export list of users and filter
     * @Return: StreamContent
     */
    exportFormat(search?: string, type?: UserTypeCode[], status?: UserStatusCode[], sort?: string, format?: string, fields?: string[], fileName?: string): import("rxjs").Observable<import("@angular/common/http").HttpEvent<Blob>>;
    /**
     * Aggregate users count distribution by type
     * @Return:  EntityResponse<DistributionOfLong>
     */
    getUsersCountByType(): import("rxjs").Observable<any>;
    /**
     * Aggregate users count distribution by status
     * @Return:  EntityResponse<DistributionOfLong>
     */
    getUsersCountByStatus(): import("rxjs").Observable<any>;
    /**
     * Get access token for user
     * @Return: ActionResponse
     */
    getUserToken(id?: string, exp?: number): import("rxjs").Observable<any>;
    static ɵfac: i0.ɵɵFactoryDeclaration<SysUsersService, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<SysUsersService>;
}
