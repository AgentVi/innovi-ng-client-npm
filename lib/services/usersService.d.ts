import { RestUtil } from '../../utils/rest-util';
import { CoreConfig } from '../../config';
import { UserInvitation } from '../common/UserInvitation';
import { UserRegistration } from '../common/UserRegistration';
import { ServiceAccountRegistration } from '../common/ServiceAccountRegistration';
import { User } from '../entities/User';
import { UserTypeCode } from '../enums/UserTypeCode';
import { UserStatusCode } from '../enums/UserStatusCode';
import * as i0 from "@angular/core";
/**
 * List of all user related actions for account administrator only
 */
export declare class UsersService {
    private config;
    private rest;
    private baseUrl;
    /**
     * Class constructor
     */
    constructor(config: CoreConfig, rest: RestUtil);
    /**
     * Send invitation to a new user for the current account
     * @Return: ActionResponse
     */
    invite(body?: UserInvitation): import("rxjs").Observable<any>;
    /**
     * Register user for the account, it a user already exists, an invitation to the new account will be sent
     * @Return: EntityResponse<User>
     */
    register(body?: UserRegistration): import("rxjs").Observable<any>;
    /**
     * Create service account
     * @Return: ActionResponse
     */
    registerServiceAccount(body?: ServiceAccountRegistration): import("rxjs").Observable<any>;
    /**
     * Resend invitation to an existing user for the current account
     * @Return: ActionResponse
     */
    reInvite(id?: string): import("rxjs").Observable<any>;
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
     * Delete user from the system
     * The user will be removed from the account, if no accounts associated with the user, it will be deleted
     * @Return: ActionResponse
     */
    delete(id?: string): import("rxjs").Observable<any>;
    /**
     * Get single user by id
     * @Return: EntityResponse<User>
     */
    get(id?: string): import("rxjs").Observable<any>;
    /**
     * Get single user by email
     * @Return: EntityResponse<User>
     */
    getByEmail(email?: string): import("rxjs").Observable<any>;
    /**
     * Find list of users and filter the list
     * System user will see all users, Account system will see all users of the account, registered user will get an error.
     * @Return: QueryResponse<User>
     */
    find(accountId?: string, search?: string, type?: UserTypeCode[], status?: UserStatusCode[], sort?: string, page?: number, pageSize?: number): import("rxjs").Observable<any>;
    /**
     * Export list of users and filter
     * @Return: StreamContent
     */
    exportFormat(search?: string, type?: UserTypeCode[], status?: UserStatusCode[], sort?: string, format?: string, fields?: string[], fileName?: string): import("rxjs").Subscription;
    /**
     * Get access token for user
     * @Return: ActionResponse
     */
    getUserToken(id?: string, exp?: number): import("rxjs").Observable<any>;
    static ɵfac: i0.ɵɵFactoryDef<UsersService, never>;
    static ɵprov: i0.ɵɵInjectableDef<UsersService>;
}
