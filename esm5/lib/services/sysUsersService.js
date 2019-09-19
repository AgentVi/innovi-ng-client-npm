/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Injectable, Inject } from '@angular/core';
import { RestUtil } from '../../utils/rest-util';
import { CoreConfig } from '../../config';
/**
 * List of all user related actions for account administrator only
 * \@RequestHeader X-API-KEY The key to identify the application (console)
 * \@RequestHeader X-ACCESS-TOKEN The token to identify the logged-in user
 */
var SysUsersService = /** @class */ (function () {
    /**
     * Class constructor
     */
    function SysUsersService(config, rest) {
        this.config = config;
        this.rest = rest;
        // URL to web api
        this.baseUrl = '/sys/users';
        this.baseUrl = this.config.api + this.baseUrl;
    }
    /**
     * Send invitation to a new user for the current account
     * The response includes access token valid for 20 minutes. The client side should renew the token before expiration using refresh-token method
     * @Return: ActionResponse
     */
    /**
     * Send invitation to a new user for the current account
     * The response includes access token valid for 20 minutes. The client side should renew the token before expiration using refresh-token method
     * \@Return: ActionResponse
     * @param {?=} body
     * @return {?}
     */
    SysUsersService.prototype.create = /**
     * Send invitation to a new user for the current account
     * The response includes access token valid for 20 minutes. The client side should renew the token before expiration using refresh-token method
     * \@Return: ActionResponse
     * @param {?=} body
     * @return {?}
     */
    function (body) {
        return this.rest.post(this.baseUrl + "/invite", typeof body === 'object' ? JSON.stringify(body) : body);
    };
    /**
     * Update user
     * @Return: EntityResponse<User>
     */
    /**
     * Update user
     * \@Return: EntityResponse<User>
     * @param {?=} id
     * @param {?=} body
     * @return {?}
     */
    SysUsersService.prototype.update = /**
     * Update user
     * \@Return: EntityResponse<User>
     * @param {?=} id
     * @param {?=} body
     * @return {?}
     */
    function (id, body) {
        return this.rest.put(this.baseUrl + "/" + id, typeof body === 'object' ? JSON.stringify(body) : body);
    };
    /**
     * Change user name
     * @Return: EntityResponse<User>
     */
    /**
     * Change user name
     * \@Return: EntityResponse<User>
     * @param {?=} id
     * @param {?=} body
     * @return {?}
     */
    SysUsersService.prototype.changeName = /**
     * Change user name
     * \@Return: EntityResponse<User>
     * @param {?=} id
     * @param {?=} body
     * @return {?}
     */
    function (id, body) {
        return this.rest.put(this.baseUrl + "/" + id + "/name", typeof body === 'object' ? JSON.stringify(body) : body);
    };
    /**
     * Change user mobile
     * @Return: EntityResponse<User>
     */
    /**
     * Change user mobile
     * \@Return: EntityResponse<User>
     * @param {?=} id
     * @param {?=} body
     * @return {?}
     */
    SysUsersService.prototype.changeMobile = /**
     * Change user mobile
     * \@Return: EntityResponse<User>
     * @param {?=} id
     * @param {?=} body
     * @return {?}
     */
    function (id, body) {
        return this.rest.put(this.baseUrl + "/" + id + "/mobile", typeof body === 'object' ? JSON.stringify(body) : body);
    };
    /**
     * Change user type
     * @Return: EntityResponse<User>
     */
    /**
     * Change user type
     * \@Return: EntityResponse<User>
     * @param {?=} id
     * @param {?=} type
     * @return {?}
     */
    SysUsersService.prototype.changeType = /**
     * Change user type
     * \@Return: EntityResponse<User>
     * @param {?=} id
     * @param {?=} type
     * @return {?}
     */
    function (id, type) {
        return this.rest.put(this.baseUrl + "/" + id + "/type/" + type, null);
    };
    /**
     * Change user status
     * @Return: EntityResponse<User>
     */
    /**
     * Change user status
     * \@Return: EntityResponse<User>
     * @param {?=} id
     * @param {?=} status
     * @return {?}
     */
    SysUsersService.prototype.changeStatus = /**
     * Change user status
     * \@Return: EntityResponse<User>
     * @param {?=} id
     * @param {?=} status
     * @return {?}
     */
    function (id, status) {
        return this.rest.put(this.baseUrl + "/" + id + "/status/" + status, null);
    };
    /**
     * Change user default account
     * @Return: EntityResponse<User>
     */
    /**
     * Change user default account
     * \@Return: EntityResponse<User>
     * @param {?=} id
     * @param {?=} accountId
     * @return {?}
     */
    SysUsersService.prototype.changeDefaultAccount = /**
     * Change user default account
     * \@Return: EntityResponse<User>
     * @param {?=} id
     * @param {?=} accountId
     * @return {?}
     */
    function (id, accountId) {
        return this.rest.put(this.baseUrl + "/" + id + "/defaultAccount/" + accountId, null);
    };
    /**
     * Set user roles in his accounts (override previous roles)
     * @Return: EntityResponse<User>
     */
    /**
     * Set user roles in his accounts (override previous roles)
     * \@Return: EntityResponse<User>
     * @param {?=} id
     * @param {?=} roles
     * @return {?}
     */
    SysUsersService.prototype.setRoles = /**
     * Set user roles in his accounts (override previous roles)
     * \@Return: EntityResponse<User>
     * @param {?=} id
     * @param {?=} roles
     * @return {?}
     */
    function (id, roles) {
        return this.rest.post(this.baseUrl + "/" + id + "/roles/", typeof roles === 'object' ? JSON.stringify(roles) : roles);
    };
    /**
     * Update user roles in his accounts (merge with existing roles)
     * @Return: EntityResponse<User>
     */
    /**
     * Update user roles in his accounts (merge with existing roles)
     * \@Return: EntityResponse<User>
     * @param {?=} id
     * @param {?=} roles
     * @return {?}
     */
    SysUsersService.prototype.mergeRoles = /**
     * Update user roles in his accounts (merge with existing roles)
     * \@Return: EntityResponse<User>
     * @param {?=} id
     * @param {?=} roles
     * @return {?}
     */
    function (id, roles) {
        return this.rest.put(this.baseUrl + "/" + id + "/roles/", typeof roles === 'object' ? JSON.stringify(roles) : roles);
    };
    /**
     * Delete user from the system
     * @Return: ActionResponse
     */
    /**
     * Delete user from the system
     * \@Return: ActionResponse
     * @param {?=} id
     * @return {?}
     */
    SysUsersService.prototype.delete = /**
     * Delete user from the system
     * \@Return: ActionResponse
     * @param {?=} id
     * @return {?}
     */
    function (id) {
        return this.rest.delete(this.baseUrl + "/" + id);
    };
    /**
     * Get single user by Id
     * @Return: EntityResponse<User>
     */
    /**
     * Get single user by Id
     * \@Return: EntityResponse<User>
     * @param {?=} id
     * @return {?}
     */
    SysUsersService.prototype.get = /**
     * Get single user by Id
     * \@Return: EntityResponse<User>
     * @param {?=} id
     * @return {?}
     */
    function (id) {
        return this.rest.get(this.baseUrl + "/" + id);
    };
    /**
     * Find list of users by filter
     * @Return: QueryResponse<User>
     */
    /**
     * Find list of users by filter
     * \@Return: QueryResponse<User>
     * @param {?=} search
     * @param {?=} type
     * @param {?=} status
     * @param {?=} sort
     * @param {?=} page
     * @param {?=} pageSize
     * @return {?}
     */
    SysUsersService.prototype.find = /**
     * Find list of users by filter
     * \@Return: QueryResponse<User>
     * @param {?=} search
     * @param {?=} type
     * @param {?=} status
     * @param {?=} sort
     * @param {?=} page
     * @param {?=} pageSize
     * @return {?}
     */
    function (search, type, status, sort, page, pageSize) {
        var _a;
        /** @type {?} */
        var params = new Array();
        if (search != null) {
            params.push("search=" + search);
        }
        if (type != null) {
            params.push("type=" + type);
        }
        if (status != null) {
            params.push("status=" + status);
        }
        if (sort != null) {
            params.push("sort=" + sort);
        }
        if (page != null) {
            params.push("page=" + page);
        }
        if (pageSize != null) {
            params.push("pageSize=" + pageSize);
        }
        return (_a = this.rest).get.apply(_a, tslib_1.__spread(["" + this.baseUrl], params));
    };
    SysUsersService.decorators = [
        { type: Injectable }
    ];
    /** @nocollapse */
    SysUsersService.ctorParameters = function () { return [
        { type: CoreConfig, decorators: [{ type: Inject, args: ['config',] }] },
        { type: RestUtil }
    ]; };
    return SysUsersService;
}());
export { SysUsersService };
if (false) {
    /**
     * @type {?}
     * @private
     */
    SysUsersService.prototype.baseUrl;
    /**
     * @type {?}
     * @private
     */
    SysUsersService.prototype.config;
    /**
     * @type {?}
     * @private
     */
    SysUsersService.prototype.rest;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3lzVXNlcnNTZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGFnZW50dmkvbmctY29yZS1saWIvIiwic291cmNlcyI6WyJsaWIvc2VydmljZXMvc3lzVXNlcnNTZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDbkQsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLHVCQUF1QixDQUFDO0FBQ2pELE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxjQUFjLENBQUM7Ozs7OztBQWMxQztJQU1FOztPQUVHO0lBQ0gseUJBQXNDLE1BQWtCLEVBQVUsSUFBYztRQUExQyxXQUFNLEdBQU4sTUFBTSxDQUFZO1FBQVUsU0FBSSxHQUFKLElBQUksQ0FBVTs7UUFMeEUsWUFBTyxHQUFHLFlBQVksQ0FBQztRQU03QixJQUFJLENBQUMsT0FBTyxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUMsR0FBRyxHQUFHLElBQUksQ0FBQyxPQUFPLENBQUM7SUFDaEQsQ0FBQztJQUdEOzs7O09BSUc7Ozs7Ozs7O0lBQ0gsZ0NBQU07Ozs7Ozs7SUFBTixVQUFPLElBQXFCO1FBQzFCLE9BQU8sSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUksSUFBSSxDQUFDLE9BQU8sWUFBUyxFQUFFLE9BQU8sSUFBSSxLQUFLLFFBQVEsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDMUcsQ0FBQztJQUVEOzs7T0FHRzs7Ozs7Ozs7SUFDSCxnQ0FBTTs7Ozs7OztJQUFOLFVBQU8sRUFBVyxFQUFFLElBQVc7UUFDN0IsT0FBTyxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBSSxJQUFJLENBQUMsT0FBTyxTQUFJLEVBQUksRUFBRSxPQUFPLElBQUksS0FBSyxRQUFRLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQ3hHLENBQUM7SUFFRDs7O09BR0c7Ozs7Ozs7O0lBQ0gsb0NBQVU7Ozs7Ozs7SUFBVixVQUFXLEVBQVcsRUFBRSxJQUFhO1FBQ25DLE9BQU8sSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUksSUFBSSxDQUFDLE9BQU8sU0FBSSxFQUFFLFVBQU8sRUFBRSxPQUFPLElBQUksS0FBSyxRQUFRLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQzdHLENBQUM7SUFFRDs7O09BR0c7Ozs7Ozs7O0lBQ0gsc0NBQVk7Ozs7Ozs7SUFBWixVQUFhLEVBQVcsRUFBRSxJQUFhO1FBQ3JDLE9BQU8sSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUksSUFBSSxDQUFDLE9BQU8sU0FBSSxFQUFFLFlBQVMsRUFBRSxPQUFPLElBQUksS0FBSyxRQUFRLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQy9HLENBQUM7SUFFRDs7O09BR0c7Ozs7Ozs7O0lBQ0gsb0NBQVU7Ozs7Ozs7SUFBVixVQUFXLEVBQVcsRUFBRSxJQUFtQjtRQUN6QyxPQUFPLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFJLElBQUksQ0FBQyxPQUFPLFNBQUksRUFBRSxjQUFTLElBQU0sRUFBRSxJQUFJLENBQUMsQ0FBQztJQUNuRSxDQUFDO0lBRUQ7OztPQUdHOzs7Ozs7OztJQUNILHNDQUFZOzs7Ozs7O0lBQVosVUFBYSxFQUFXLEVBQUUsTUFBdUI7UUFDL0MsT0FBTyxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBSSxJQUFJLENBQUMsT0FBTyxTQUFJLEVBQUUsZ0JBQVcsTUFBUSxFQUFFLElBQUksQ0FBQyxDQUFDO0lBQ3ZFLENBQUM7SUFFRDs7O09BR0c7Ozs7Ozs7O0lBQ0gsOENBQW9COzs7Ozs7O0lBQXBCLFVBQXFCLEVBQVcsRUFBRSxTQUFrQjtRQUNsRCxPQUFPLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFJLElBQUksQ0FBQyxPQUFPLFNBQUksRUFBRSx3QkFBbUIsU0FBVyxFQUFFLElBQUksQ0FBQyxDQUFDO0lBQ2xGLENBQUM7SUFFRDs7O09BR0c7Ozs7Ozs7O0lBQ0gsa0NBQVE7Ozs7Ozs7SUFBUixVQUFTLEVBQVcsRUFBRSxLQUF5QjtRQUM3QyxPQUFPLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFJLElBQUksQ0FBQyxPQUFPLFNBQUksRUFBRSxZQUFTLEVBQUUsT0FBTyxLQUFLLEtBQUssUUFBUSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUNuSCxDQUFDO0lBRUQ7OztPQUdHOzs7Ozs7OztJQUNILG9DQUFVOzs7Ozs7O0lBQVYsVUFBVyxFQUFXLEVBQUUsS0FBeUI7UUFDL0MsT0FBTyxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBSSxJQUFJLENBQUMsT0FBTyxTQUFJLEVBQUUsWUFBUyxFQUFFLE9BQU8sS0FBSyxLQUFLLFFBQVEsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUM7SUFDbEgsQ0FBQztJQUVEOzs7T0FHRzs7Ozs7OztJQUNILGdDQUFNOzs7Ozs7SUFBTixVQUFPLEVBQVc7UUFDaEIsT0FBTyxJQUFJLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBSSxJQUFJLENBQUMsT0FBTyxTQUFJLEVBQUksQ0FBQyxDQUFDO0lBQ25ELENBQUM7SUFFRDs7O09BR0c7Ozs7Ozs7SUFDSCw2QkFBRzs7Ozs7O0lBQUgsVUFBSSxFQUFXO1FBQ2IsT0FBTyxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBSSxJQUFJLENBQUMsT0FBTyxTQUFJLEVBQUksQ0FBQyxDQUFDO0lBQ2hELENBQUM7SUFFRDs7O09BR0c7Ozs7Ozs7Ozs7OztJQUNILDhCQUFJOzs7Ozs7Ozs7OztJQUFKLFVBQUssTUFBZSxFQUFFLElBQXFCLEVBQUUsTUFBeUIsRUFBRSxJQUFhLEVBQUUsSUFBYSxFQUFFLFFBQWlCOzs7WUFDL0csTUFBTSxHQUFHLElBQUksS0FBSyxFQUFFO1FBQzFCLElBQUksTUFBTSxJQUFJLElBQUksRUFBRTtZQUFFLE1BQU0sQ0FBQyxJQUFJLENBQUMsWUFBVSxNQUFRLENBQUMsQ0FBQztTQUFFO1FBQ3hELElBQUksSUFBSSxJQUFJLElBQUksRUFBRTtZQUFFLE1BQU0sQ0FBQyxJQUFJLENBQUMsVUFBUSxJQUFNLENBQUMsQ0FBQztTQUFFO1FBQ2xELElBQUksTUFBTSxJQUFJLElBQUksRUFBRTtZQUFFLE1BQU0sQ0FBQyxJQUFJLENBQUMsWUFBVSxNQUFRLENBQUMsQ0FBQztTQUFFO1FBQ3hELElBQUksSUFBSSxJQUFJLElBQUksRUFBRTtZQUFFLE1BQU0sQ0FBQyxJQUFJLENBQUMsVUFBUSxJQUFNLENBQUMsQ0FBQztTQUFFO1FBQ2xELElBQUksSUFBSSxJQUFJLElBQUksRUFBRTtZQUFFLE1BQU0sQ0FBQyxJQUFJLENBQUMsVUFBUSxJQUFNLENBQUMsQ0FBQztTQUFFO1FBQ2xELElBQUksUUFBUSxJQUFJLElBQUksRUFBRTtZQUFFLE1BQU0sQ0FBQyxJQUFJLENBQUMsY0FBWSxRQUFVLENBQUMsQ0FBQztTQUFFO1FBRWhFLE9BQU8sQ0FBQSxLQUFBLElBQUksQ0FBQyxJQUFJLENBQUEsQ0FBQyxHQUFHLDZCQUFDLEtBQUcsSUFBSSxDQUFDLE9BQVMsR0FBSyxNQUFNLEdBQUU7SUFDbkQsQ0FBQzs7Z0JBckhGLFVBQVU7Ozs7Z0JBZEYsVUFBVSx1QkF1QkosTUFBTSxTQUFDLFFBQVE7Z0JBeEJyQixRQUFROztJQXNJakIsc0JBQUM7Q0FBQSxBQXZIRCxJQXVIQztTQXRIWSxlQUFlOzs7Ozs7SUFHMUIsa0NBQStCOzs7OztJQUtuQixpQ0FBNEM7Ozs7O0lBQUUsK0JBQXNCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSwgSW5qZWN0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBSZXN0VXRpbCB9IGZyb20gJy4uLy4uL3V0aWxzL3Jlc3QtdXRpbCc7XG5pbXBvcnQgeyBDb3JlQ29uZmlnIH0gZnJvbSAnLi4vLi4vY29uZmlnJztcblxuaW1wb3J0IHsgVXNlclN0YXR1c0NvZGUgfSBmcm9tICcuLi9lbnVtcy9Vc2VyU3RhdHVzQ29kZSc7XG5pbXBvcnQgeyBBY2NvdW50Um9sZUNvZGUgfSBmcm9tICcuLi9lbnVtcy9BY2NvdW50Um9sZUNvZGUnO1xuaW1wb3J0IHsgVXNlckludml0YXRpb24gfSBmcm9tICcuLi9jb21tb24vVXNlckludml0YXRpb24nO1xuaW1wb3J0IHsgVXNlciB9IGZyb20gJy4uL2VudGl0aWVzL1VzZXInO1xuaW1wb3J0IHsgVXNlclR5cGVDb2RlIH0gZnJvbSAnLi4vZW51bXMvVXNlclR5cGVDb2RlJztcblxuXG4vKipcbiAqIExpc3Qgb2YgYWxsIHVzZXIgcmVsYXRlZCBhY3Rpb25zIGZvciBhY2NvdW50IGFkbWluaXN0cmF0b3Igb25seVxuICogQFJlcXVlc3RIZWFkZXIgWC1BUEktS0VZIFRoZSBrZXkgdG8gaWRlbnRpZnkgdGhlIGFwcGxpY2F0aW9uIChjb25zb2xlKVxuICogQFJlcXVlc3RIZWFkZXIgWC1BQ0NFU1MtVE9LRU4gVGhlIHRva2VuIHRvIGlkZW50aWZ5IHRoZSBsb2dnZWQtaW4gdXNlciBcbiAqL1xuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIFN5c1VzZXJzU2VydmljZSB7XG5cbiAgLy8gVVJMIHRvIHdlYiBhcGlcbiAgcHJpdmF0ZSBiYXNlVXJsID0gJy9zeXMvdXNlcnMnO1xuXG4gIC8qKlxuICAgKiBDbGFzcyBjb25zdHJ1Y3RvclxuICAgKi9cbiAgY29uc3RydWN0b3IoQEluamVjdCgnY29uZmlnJykgcHJpdmF0ZSBjb25maWc6IENvcmVDb25maWcsIHByaXZhdGUgcmVzdDogUmVzdFV0aWwpIHtcbiAgICB0aGlzLmJhc2VVcmwgPSB0aGlzLmNvbmZpZy5hcGkgKyB0aGlzLmJhc2VVcmw7XG4gIH1cblxuXG4gIC8qKlxuICAgKiBTZW5kIGludml0YXRpb24gdG8gYSBuZXcgdXNlciBmb3IgdGhlIGN1cnJlbnQgYWNjb3VudFxuICAgKiBUaGUgcmVzcG9uc2UgaW5jbHVkZXMgYWNjZXNzIHRva2VuIHZhbGlkIGZvciAyMCBtaW51dGVzLiBUaGUgY2xpZW50IHNpZGUgc2hvdWxkIHJlbmV3IHRoZSB0b2tlbiBiZWZvcmUgZXhwaXJhdGlvbiB1c2luZyByZWZyZXNoLXRva2VuIG1ldGhvZFxuICAgKiBAUmV0dXJuOiBBY3Rpb25SZXNwb25zZVxuICAgKi9cbiAgY3JlYXRlKGJvZHk/OiBVc2VySW52aXRhdGlvbikge1xuICAgIHJldHVybiB0aGlzLnJlc3QucG9zdChgJHt0aGlzLmJhc2VVcmx9L2ludml0ZWAsIHR5cGVvZiBib2R5ID09PSAnb2JqZWN0JyA/IEpTT04uc3RyaW5naWZ5KGJvZHkpIDogYm9keSk7XG4gIH1cblxuICAvKipcbiAgICogVXBkYXRlIHVzZXJcbiAgICogQFJldHVybjogRW50aXR5UmVzcG9uc2U8VXNlcj5cbiAgICovXG4gIHVwZGF0ZShpZD86IHN0cmluZywgYm9keT86IFVzZXIpIHtcbiAgICByZXR1cm4gdGhpcy5yZXN0LnB1dChgJHt0aGlzLmJhc2VVcmx9LyR7aWR9YCwgdHlwZW9mIGJvZHkgPT09ICdvYmplY3QnID8gSlNPTi5zdHJpbmdpZnkoYm9keSkgOiBib2R5KTtcbiAgfVxuXG4gIC8qKlxuICAgKiBDaGFuZ2UgdXNlciBuYW1lXG4gICAqIEBSZXR1cm46IEVudGl0eVJlc3BvbnNlPFVzZXI+XG4gICAqL1xuICBjaGFuZ2VOYW1lKGlkPzogc3RyaW5nLCBib2R5Pzogc3RyaW5nKSB7XG4gICAgcmV0dXJuIHRoaXMucmVzdC5wdXQoYCR7dGhpcy5iYXNlVXJsfS8ke2lkfS9uYW1lYCwgdHlwZW9mIGJvZHkgPT09ICdvYmplY3QnID8gSlNPTi5zdHJpbmdpZnkoYm9keSkgOiBib2R5KTtcbiAgfVxuXG4gIC8qKlxuICAgKiBDaGFuZ2UgdXNlciBtb2JpbGVcbiAgICogQFJldHVybjogRW50aXR5UmVzcG9uc2U8VXNlcj5cbiAgICovXG4gIGNoYW5nZU1vYmlsZShpZD86IHN0cmluZywgYm9keT86IHN0cmluZykge1xuICAgIHJldHVybiB0aGlzLnJlc3QucHV0KGAke3RoaXMuYmFzZVVybH0vJHtpZH0vbW9iaWxlYCwgdHlwZW9mIGJvZHkgPT09ICdvYmplY3QnID8gSlNPTi5zdHJpbmdpZnkoYm9keSkgOiBib2R5KTtcbiAgfVxuXG4gIC8qKlxuICAgKiBDaGFuZ2UgdXNlciB0eXBlXG4gICAqIEBSZXR1cm46IEVudGl0eVJlc3BvbnNlPFVzZXI+XG4gICAqL1xuICBjaGFuZ2VUeXBlKGlkPzogc3RyaW5nLCB0eXBlPzogVXNlclR5cGVDb2RlKSB7XG4gICAgcmV0dXJuIHRoaXMucmVzdC5wdXQoYCR7dGhpcy5iYXNlVXJsfS8ke2lkfS90eXBlLyR7dHlwZX1gLCBudWxsKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBDaGFuZ2UgdXNlciBzdGF0dXNcbiAgICogQFJldHVybjogRW50aXR5UmVzcG9uc2U8VXNlcj5cbiAgICovXG4gIGNoYW5nZVN0YXR1cyhpZD86IHN0cmluZywgc3RhdHVzPzogVXNlclN0YXR1c0NvZGUpIHtcbiAgICByZXR1cm4gdGhpcy5yZXN0LnB1dChgJHt0aGlzLmJhc2VVcmx9LyR7aWR9L3N0YXR1cy8ke3N0YXR1c31gLCBudWxsKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBDaGFuZ2UgdXNlciBkZWZhdWx0IGFjY291bnRcbiAgICogQFJldHVybjogRW50aXR5UmVzcG9uc2U8VXNlcj5cbiAgICovXG4gIGNoYW5nZURlZmF1bHRBY2NvdW50KGlkPzogc3RyaW5nLCBhY2NvdW50SWQ/OiBzdHJpbmcpIHtcbiAgICByZXR1cm4gdGhpcy5yZXN0LnB1dChgJHt0aGlzLmJhc2VVcmx9LyR7aWR9L2RlZmF1bHRBY2NvdW50LyR7YWNjb3VudElkfWAsIG51bGwpO1xuICB9XG5cbiAgLyoqXG4gICAqIFNldCB1c2VyIHJvbGVzIGluIGhpcyBhY2NvdW50cyAob3ZlcnJpZGUgcHJldmlvdXMgcm9sZXMpXG4gICAqIEBSZXR1cm46IEVudGl0eVJlc3BvbnNlPFVzZXI+XG4gICAqL1xuICBzZXRSb2xlcyhpZD86IHN0cmluZywgcm9sZXM/OiBBY2NvdW50Um9sZUNvZGVbXSkge1xuICAgIHJldHVybiB0aGlzLnJlc3QucG9zdChgJHt0aGlzLmJhc2VVcmx9LyR7aWR9L3JvbGVzL2AsIHR5cGVvZiByb2xlcyA9PT0gJ29iamVjdCcgPyBKU09OLnN0cmluZ2lmeShyb2xlcykgOiByb2xlcyk7XG4gIH1cblxuICAvKipcbiAgICogVXBkYXRlIHVzZXIgcm9sZXMgaW4gaGlzIGFjY291bnRzIChtZXJnZSB3aXRoIGV4aXN0aW5nIHJvbGVzKVxuICAgKiBAUmV0dXJuOiBFbnRpdHlSZXNwb25zZTxVc2VyPlxuICAgKi9cbiAgbWVyZ2VSb2xlcyhpZD86IHN0cmluZywgcm9sZXM/OiBBY2NvdW50Um9sZUNvZGVbXSkge1xuICAgIHJldHVybiB0aGlzLnJlc3QucHV0KGAke3RoaXMuYmFzZVVybH0vJHtpZH0vcm9sZXMvYCwgdHlwZW9mIHJvbGVzID09PSAnb2JqZWN0JyA/IEpTT04uc3RyaW5naWZ5KHJvbGVzKSA6IHJvbGVzKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBEZWxldGUgdXNlciBmcm9tIHRoZSBzeXN0ZW1cbiAgICogQFJldHVybjogQWN0aW9uUmVzcG9uc2VcbiAgICovXG4gIGRlbGV0ZShpZD86IHN0cmluZykge1xuICAgIHJldHVybiB0aGlzLnJlc3QuZGVsZXRlKGAke3RoaXMuYmFzZVVybH0vJHtpZH1gKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBHZXQgc2luZ2xlIHVzZXIgYnkgSWRcbiAgICogQFJldHVybjogRW50aXR5UmVzcG9uc2U8VXNlcj5cbiAgICovXG4gIGdldChpZD86IHN0cmluZykge1xuICAgIHJldHVybiB0aGlzLnJlc3QuZ2V0KGAke3RoaXMuYmFzZVVybH0vJHtpZH1gKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBGaW5kIGxpc3Qgb2YgdXNlcnMgYnkgZmlsdGVyXG4gICAqIEBSZXR1cm46IFF1ZXJ5UmVzcG9uc2U8VXNlcj5cbiAgICovXG4gIGZpbmQoc2VhcmNoPzogc3RyaW5nLCB0eXBlPzogVXNlclR5cGVDb2RlW10sIHN0YXR1cz86IFVzZXJTdGF0dXNDb2RlW10sIHNvcnQ/OiBzdHJpbmcsIHBhZ2U/OiBudW1iZXIsIHBhZ2VTaXplPzogbnVtYmVyKSB7XG4gICAgY29uc3QgcGFyYW1zID0gbmV3IEFycmF5KCk7XHRcdFxuICAgIGlmIChzZWFyY2ggIT0gbnVsbCkgeyBwYXJhbXMucHVzaChgc2VhcmNoPSR7c2VhcmNofWApOyB9XG4gICAgaWYgKHR5cGUgIT0gbnVsbCkgeyBwYXJhbXMucHVzaChgdHlwZT0ke3R5cGV9YCk7IH1cbiAgICBpZiAoc3RhdHVzICE9IG51bGwpIHsgcGFyYW1zLnB1c2goYHN0YXR1cz0ke3N0YXR1c31gKTsgfVxuICAgIGlmIChzb3J0ICE9IG51bGwpIHsgcGFyYW1zLnB1c2goYHNvcnQ9JHtzb3J0fWApOyB9XG4gICAgaWYgKHBhZ2UgIT0gbnVsbCkgeyBwYXJhbXMucHVzaChgcGFnZT0ke3BhZ2V9YCk7IH1cbiAgICBpZiAocGFnZVNpemUgIT0gbnVsbCkgeyBwYXJhbXMucHVzaChgcGFnZVNpemU9JHtwYWdlU2l6ZX1gKTsgfVxuXG5cdFx0cmV0dXJuIHRoaXMucmVzdC5nZXQoYCR7dGhpcy5iYXNlVXJsfWAsIC4uLnBhcmFtcyk7XG4gIH1cblxufVxuIl19