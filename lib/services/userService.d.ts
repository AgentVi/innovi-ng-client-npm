import { RestUtil } from '../../utils/rest-util';
import { CoreConfig } from '../../config';
import { ChangePasswordRequest } from '../messages/ChangePasswordRequest';
import { TokenRequest } from '../messages/TokenRequest';
import { LoginParams } from '../common/LoginParams';
import * as i0 from "@angular/core";
/**
 * Services for user registration and login
 */
export declare class UserService {
    private config;
    private rest;
    private baseUrl;
    /**
     * Class constructor
     */
    constructor(config: CoreConfig, rest: RestUtil);
    /**
     * Login to the system with user email and password
     * The response includes access token valid for 20 minutes. The client side should renew the token before expiration using refresh-token method
     * @Return: EntityResponse<LoginData>
     */
    login(body?: LoginParams): import("rxjs").Observable<any>;
    /**
     * Refresh token (set new expiration time) and associate with new account if required
     * @Return: EntityResponse<LoginData>
     */
    refreshToken(): import("rxjs").Observable<any>;
    /**
     * Verify user by temporary login key
     * @Return: EntityResponse<User>
     */
    verifyLoginKey(key?: string): import("rxjs").Observable<any>;
    /**
     * Send verification code by email
     * @Return: ActionResponse
     */
    sendVerificationCode(body?: string): import("rxjs").Observable<any>;
    /**
     * Validate verification code and reset password
     * @Return: ActionResponse
     */
    resetPassword(code?: string): import("rxjs").Observable<any>;
    /**
     * Change password
     * @Return: ActionResponse
     */
    changePassword(body?: ChangePasswordRequest): import("rxjs").Observable<any>;
    /**
     * Check if password was used before (according to password policy)
     * @Return: ActionResponse
     */
    checkUnusedPassword(body?: string): import("rxjs").Observable<any>;
    /**
     * Change current user name
     * @Return: ActionResponse
     */
    changeName(body?: string): import("rxjs").Observable<any>;
    /**
     * Change current user mobile
     * @Return: ActionResponse
     */
    changeMobile(body?: string): import("rxjs").Observable<any>;
    /**
     * Refresh token (set new expiration time) and associate with new account if required
     * @Return: EntityResponse<UserAccountInfo>
     */
    switchAccount(body?: TokenRequest): import("rxjs").Observable<any>;
    static ɵfac: i0.ɵɵFactoryDef<UserService, never>;
    static ɵprov: i0.ɵɵInjectableDef<UserService>;
}
