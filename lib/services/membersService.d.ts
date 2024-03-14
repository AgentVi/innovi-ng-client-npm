import { RestUtil } from '../../utils/rest-util';
import { CoreConfig } from '../../config';
import { UserInvitation } from '../common/UserInvitation';
import { MemberRegistration } from '../common/MemberRegistration';
import { ServiceAccountRegistration } from '../common/ServiceAccountRegistration';
import { Member } from '../entities/Member';
import { UserTypeCode } from '../enums/UserTypeCode';
import { UserStatusCode } from '../enums/UserStatusCode';
import * as i0 from "@angular/core";
/**
 * List of all account members related actions for account administrator only
 */
export declare class MembersService {
    private config;
    private rest;
    private baseUrl;
    /**
     * Class constructor
     */
    constructor(config: CoreConfig, rest: RestUtil);
    /**
     * Send invitation to a new member for the current account
     * @Return: ActionResponse
     */
    invite(body?: UserInvitation): import("rxjs").Observable<any>;
    /**
     * Register user for the account, it a user already exists, an invitation to the new account will be sent
     * @Return: EntityResponse<Member>
     */
    register(body?: MemberRegistration): import("rxjs").Observable<any>;
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
     * Update member
     * @Return: EntityResponse<Member>
     */
    update(id?: string, body?: Member): import("rxjs").Observable<any>;
    /**
     * Delete member from the account
     * The user will be removed from the account, if no accounts associated with the member, it will be deleted
     * @Return: ActionResponse
     */
    delete(id?: string): import("rxjs").Observable<any>;
    /**
     * Get single member by id
     * @Return: EntityResponse<Member>
     */
    get(id?: string): import("rxjs").Observable<any>;
    /**
     * Get single member by email
     * @Return: EntityResponse<Member>
     */
    getByEmail(email?: string): import("rxjs").Observable<any>;
    /**
     * Find list of members and filter the list
     * System user will see all users, Account system will see all users of the account, registered user will get an error.
     * @Return: QueryResponse<Member>
     */
    find(search?: string, type?: UserTypeCode[], status?: UserStatusCode[], group?: string, sort?: string, page?: number, pageSize?: number): import("rxjs").Observable<any>;
    /**
     * Export list of members and filter
     * @Return: StreamContent
     */
    exportFormat(search?: string, type?: UserTypeCode[], status?: UserStatusCode[], sort?: string, format?: string, fields?: string[], fileName?: string): import("rxjs").Observable<import("@angular/common/http").HttpEvent<Blob>>;
    /**
     * Get access token for member
     * @Return: ActionResponse
     */
    getUserToken(id?: string, exp?: number): import("rxjs").Observable<any>;
    static ɵfac: i0.ɵɵFactoryDeclaration<MembersService, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<MembersService>;
}
