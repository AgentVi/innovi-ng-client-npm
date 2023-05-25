import { RestUtil } from '../../utils/rest-util';
import { CoreConfig } from '../../config';
import { SwitchAccountRequest } from '../messages/SwitchAccountRequest';
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
    switchAccount(body?: SwitchAccountRequest): import("rxjs").Observable<any>;
    /**
     * Mark the user who accepted the EULA agreement
     * @Return: ActionResponse
     */
    acceptEula(): import("rxjs").Observable<any>;
    static ɵfac: i0.ɵɵFactoryDeclaration<UserService, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<UserService>;
}
