import { RestUtil } from '../../utils/rest-util';
import { CoreConfig } from '../../config';
import { AccountRoleCode } from '../enums/AccountRoleCode';
import { UserStatusCode } from '../enums/UserStatusCode';
import { UserInvitation } from '../common/UserInvitation';
import { User } from '../entities/User';
import { UserTypeCode } from '../enums/UserTypeCode';
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
     * The response includes access token valid for 20 minutes. The client side should renew the token before expiration using refresh-token method
     * @Return: ActionResponse
     */
    invite(body?: UserInvitation): import("rxjs").Observable<any>;
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
     * Change user role
     * @Return: EntityResponse<User>
     */
    changeRole(id?: string, role?: AccountRoleCode): import("rxjs").Observable<any>;
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
    find(search?: string, type?: UserTypeCode[], status?: UserStatusCode[], sort?: string, page?: number, pageSize?: number): import("rxjs").Observable<any>;
}
