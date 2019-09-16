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
 */
var UsersService = /** @class */ (function () {
    /**
     * Class constructor
     */
    function UsersService(config, rest) {
        this.config = config;
        this.rest = rest;
        // URL to web api
        this.baseUrl = '/users';
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
    UsersService.prototype.invite = /**
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
    UsersService.prototype.update = /**
     * Update user
     * \@Return: EntityResponse<User>
     * @param {?=} id
     * @param {?=} body
     * @return {?}
     */
    function (id, body) {
        return this.rest.post(this.baseUrl + "/" + id, typeof body === 'object' ? JSON.stringify(body) : body);
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
    UsersService.prototype.changeName = /**
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
    UsersService.prototype.changeMobile = /**
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
    UsersService.prototype.changeType = /**
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
     * Change user role
     * @Return: EntityResponse<User>
     */
    /**
     * Change user role
     * \@Return: EntityResponse<User>
     * @param {?=} id
     * @param {?=} role
     * @return {?}
     */
    UsersService.prototype.changeRole = /**
     * Change user role
     * \@Return: EntityResponse<User>
     * @param {?=} id
     * @param {?=} role
     * @return {?}
     */
    function (id, role) {
        return this.rest.put(this.baseUrl + "/" + id + "/role/" + role, null);
    };
    /**
     * Delete user from the system
     * The user will be removed from the account, if no accounts associated with the user, it will be deleted
     * @Return: ActionResponse
     */
    /**
     * Delete user from the system
     * The user will be removed from the account, if no accounts associated with the user, it will be deleted
     * \@Return: ActionResponse
     * @param {?=} id
     * @return {?}
     */
    UsersService.prototype.delete = /**
     * Delete user from the system
     * The user will be removed from the account, if no accounts associated with the user, it will be deleted
     * \@Return: ActionResponse
     * @param {?=} id
     * @return {?}
     */
    function (id) {
        return this.rest.delete(this.baseUrl + "/" + id);
    };
    /**
     * Get single user by id
     * @Return: EntityResponse<User>
     */
    /**
     * Get single user by id
     * \@Return: EntityResponse<User>
     * @param {?=} id
     * @return {?}
     */
    UsersService.prototype.get = /**
     * Get single user by id
     * \@Return: EntityResponse<User>
     * @param {?=} id
     * @return {?}
     */
    function (id) {
        return this.rest.get(this.baseUrl + "/" + id);
    };
    /**
     * Get single user by email
     * @Return: EntityResponse<User>
     */
    /**
     * Get single user by email
     * \@Return: EntityResponse<User>
     * @param {?=} email
     * @return {?}
     */
    UsersService.prototype.getByEmail = /**
     * Get single user by email
     * \@Return: EntityResponse<User>
     * @param {?=} email
     * @return {?}
     */
    function (email) {
        return this.rest.get(this.baseUrl + "/byEmail/" + email);
    };
    /**
     * Find list of users and filter the list
     * System user will see all users, Account system will see all users of the account, registered user will get an error.
     * @Return: QueryResponse<User>
     */
    /**
     * Find list of users and filter the list
     * System user will see all users, Account system will see all users of the account, registered user will get an error.
     * \@Return: QueryResponse<User>
     * @param {?=} search
     * @param {?=} type
     * @param {?=} status
     * @param {?=} sort
     * @param {?=} page
     * @param {?=} pageSize
     * @return {?}
     */
    UsersService.prototype.find = /**
     * Find list of users and filter the list
     * System user will see all users, Account system will see all users of the account, registered user will get an error.
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
    UsersService.decorators = [
        { type: Injectable }
    ];
    /** @nocollapse */
    UsersService.ctorParameters = function () { return [
        { type: CoreConfig, decorators: [{ type: Inject, args: ['config',] }] },
        { type: RestUtil }
    ]; };
    return UsersService;
}());
export { UsersService };
if (false) {
    /**
     * @type {?}
     * @private
     */
    UsersService.prototype.baseUrl;
    /**
     * @type {?}
     * @private
     */
    UsersService.prototype.config;
    /**
     * @type {?}
     * @private
     */
    UsersService.prototype.rest;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXNlcnNTZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGFnZW50dmkvbmctY29yZS1saWIvIiwic291cmNlcyI6WyJsaWIvc2VydmljZXMvdXNlcnNTZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDbkQsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLHVCQUF1QixDQUFDO0FBQ2pELE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxjQUFjLENBQUM7Ozs7QUFZMUM7SUFNRTs7T0FFRztJQUNILHNCQUFzQyxNQUFrQixFQUFVLElBQWM7UUFBMUMsV0FBTSxHQUFOLE1BQU0sQ0FBWTtRQUFVLFNBQUksR0FBSixJQUFJLENBQVU7O1FBTHhFLFlBQU8sR0FBRyxRQUFRLENBQUM7UUFNekIsSUFBSSxDQUFDLE9BQU8sR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDLEdBQUcsR0FBRyxJQUFJLENBQUMsT0FBTyxDQUFDO0lBQ2hELENBQUM7SUFHRDs7OztPQUlHOzs7Ozs7OztJQUNILDZCQUFNOzs7Ozs7O0lBQU4sVUFBTyxJQUFxQjtRQUMxQixPQUFPLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFJLElBQUksQ0FBQyxPQUFPLFlBQVMsRUFBRSxPQUFPLElBQUksS0FBSyxRQUFRLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQzFHLENBQUM7SUFFRDs7O09BR0c7Ozs7Ozs7O0lBQ0gsNkJBQU07Ozs7Ozs7SUFBTixVQUFPLEVBQVcsRUFBRSxJQUFXO1FBQzdCLE9BQU8sSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUksSUFBSSxDQUFDLE9BQU8sU0FBSSxFQUFJLEVBQUUsT0FBTyxJQUFJLEtBQUssUUFBUSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMs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QUFFLE1BQU0sQ0FBQyxJQUFJLENBQUMsVUFBUSxJQUFNLENBQUMsQ0FBQztTQUFFO1FBQ2xELElBQUksUUFBUSxJQUFJLElBQUksRUFBRTtZQUFFLE1BQU0sQ0FBQyxJQUFJLENBQUMsY0FBWSxRQUFVLENBQUMsQ0FBQztTQUFFO1FBRWhFLE9BQU8sQ0FBQSxLQUFBLElBQUksQ0FBQyxJQUFJLENBQUEsQ0FBQyxHQUFHLDZCQUFDLEtBQUcsSUFBSSxDQUFDLE9BQVMsR0FBSyxNQUFNLEdBQUU7SUFDbkQsQ0FBQzs7Z0JBdkdGLFVBQVU7Ozs7Z0JBWkYsVUFBVSx1QkFxQkosTUFBTSxTQUFDLFFBQVE7Z0JBdEJyQixRQUFROztJQXNIakIsbUJBQUM7Q0FBQSxBQXpHRCxJQXlHQztTQXhHWSxZQUFZOzs7Ozs7SUFHdkIsK0JBQTJCOzs7OztJQUtmLDhCQUE0Qzs7Ozs7SUFBRSw0QkFBc0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlLCBJbmplY3QgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFJlc3RVdGlsIH0gZnJvbSAnLi4vLi4vdXRpbHMvcmVzdC11dGlsJztcbmltcG9ydCB7IENvcmVDb25maWcgfSBmcm9tICcuLi8uLi9jb25maWcnO1xuXG5pbXBvcnQgeyBVc2VyU3RhdHVzQ29kZSB9IGZyb20gJy4uL2VudW1zL1VzZXJTdGF0dXNDb2RlJztcbmltcG9ydCB7IFVzZXJJbnZpdGF0aW9uIH0gZnJvbSAnLi4vY29tbW9uL1VzZXJJbnZpdGF0aW9uJztcbmltcG9ydCB7IFVzZXIgfSBmcm9tICcuLi9lbnRpdGllcy9Vc2VyJztcbmltcG9ydCB7IFVzZXJUeXBlQ29kZSB9IGZyb20gJy4uL2VudW1zL1VzZXJUeXBlQ29kZSc7XG5pbXBvcnQgeyBBY2NvdW50Um9sZUNvZGUgfSBmcm9tICcuLi9lbnVtcy9BY2NvdW50Um9sZUNvZGUnO1xuXG5cbi8qKlxuICogTGlzdCBvZiBhbGwgdXNlciByZWxhdGVkIGFjdGlvbnMgZm9yIGFjY291bnQgYWRtaW5pc3RyYXRvciBvbmx5IFxuICovXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgVXNlcnNTZXJ2aWNlIHtcblxuICAvLyBVUkwgdG8gd2ViIGFwaVxuICBwcml2YXRlIGJhc2VVcmwgPSAnL3VzZXJzJztcblxuICAvKipcbiAgICogQ2xhc3MgY29uc3RydWN0b3JcbiAgICovXG4gIGNvbnN0cnVjdG9yKEBJbmplY3QoJ2NvbmZpZycpIHByaXZhdGUgY29uZmlnOiBDb3JlQ29uZmlnLCBwcml2YXRlIHJlc3Q6IFJlc3RVdGlsKSB7XG4gICAgdGhpcy5iYXNlVXJsID0gdGhpcy5jb25maWcuYXBpICsgdGhpcy5iYXNlVXJsO1xuICB9XG5cblxuICAvKipcbiAgICogU2VuZCBpbnZpdGF0aW9uIHRvIGEgbmV3IHVzZXIgZm9yIHRoZSBjdXJyZW50IGFjY291bnRcbiAgICogVGhlIHJlc3BvbnNlIGluY2x1ZGVzIGFjY2VzcyB0b2tlbiB2YWxpZCBmb3IgMjAgbWludXRlcy4gVGhlIGNsaWVudCBzaWRlIHNob3VsZCByZW5ldyB0aGUgdG9rZW4gYmVmb3JlIGV4cGlyYXRpb24gdXNpbmcgcmVmcmVzaC10b2tlbiBtZXRob2RcbiAgICogQFJldHVybjogQWN0aW9uUmVzcG9uc2VcbiAgICovXG4gIGludml0ZShib2R5PzogVXNlckludml0YXRpb24pIHtcbiAgICByZXR1cm4gdGhpcy5yZXN0LnBvc3QoYCR7dGhpcy5iYXNlVXJsfS9pbnZpdGVgLCB0eXBlb2YgYm9keSA9PT0gJ29iamVjdCcgPyBKU09OLnN0cmluZ2lmeShib2R5KSA6IGJvZHkpO1xuICB9XG5cbiAgLyoqXG4gICAqIFVwZGF0ZSB1c2VyXG4gICAqIEBSZXR1cm46IEVudGl0eVJlc3BvbnNlPFVzZXI+XG4gICAqL1xuICB1cGRhdGUoaWQ/OiBzdHJpbmcsIGJvZHk/OiBVc2VyKSB7XG4gICAgcmV0dXJuIHRoaXMucmVzdC5wb3N0KGAke3RoaXMuYmFzZVVybH0vJHtpZH1gLCB0eXBlb2YgYm9keSA9PT0gJ29iamVjdCcgPyBKU09OLnN0cmluZ2lmeShib2R5KSA6IGJvZHkpO1xuICB9XG5cbiAgLyoqXG4gICAqIENoYW5nZSB1c2VyIG5hbWVcbiAgICogQFJldHVybjogRW50aXR5UmVzcG9uc2U8VXNlcj5cbiAgICovXG4gIGNoYW5nZU5hbWUoaWQ/OiBzdHJpbmcsIGJvZHk/OiBzdHJpbmcpIHtcbiAgICByZXR1cm4gdGhpcy5yZXN0LnB1dChgJHt0aGlzLmJhc2VVcmx9LyR7aWR9L25hbWVgLCB0eXBlb2YgYm9keSA9PT0gJ29iamVjdCcgPyBKU09OLnN0cmluZ2lmeShib2R5KSA6IGJvZHkpO1xuICB9XG5cbiAgLyoqXG4gICAqIENoYW5nZSB1c2VyIG1vYmlsZVxuICAgKiBAUmV0dXJuOiBFbnRpdHlSZXNwb25zZTxVc2VyPlxuICAgKi9cbiAgY2hhbmdlTW9iaWxlKGlkPzogc3RyaW5nLCBib2R5Pzogc3RyaW5nKSB7XG4gICAgcmV0dXJuIHRoaXMucmVzdC5wdXQoYCR7dGhpcy5iYXNlVXJsfS8ke2lkfS9tb2JpbGVgLCB0eXBlb2YgYm9keSA9PT0gJ29iamVjdCcgPyBKU09OLnN0cmluZ2lmeShib2R5KSA6IGJvZHkpO1xuICB9XG5cbiAgLyoqXG4gICAqIENoYW5nZSB1c2VyIHR5cGVcbiAgICogQFJldHVybjogRW50aXR5UmVzcG9uc2U8VXNlcj5cbiAgICovXG4gIGNoYW5nZVR5cGUoaWQ/OiBzdHJpbmcsIHR5cGU/OiBVc2VyVHlwZUNvZGUpIHtcbiAgICByZXR1cm4gdGhpcy5yZXN0LnB1dChgJHt0aGlzLmJhc2VVcmx9LyR7aWR9L3R5cGUvJHt0eXBlfWAsIG51bGwpO1xuICB9XG5cbiAgLyoqXG4gICAqIENoYW5nZSB1c2VyIHJvbGVcbiAgICogQFJldHVybjogRW50aXR5UmVzcG9uc2U8VXNlcj5cbiAgICovXG4gIGNoYW5nZVJvbGUoaWQ/OiBzdHJpbmcsIHJvbGU/OiBBY2NvdW50Um9sZUNvZGUpIHtcbiAgICByZXR1cm4gdGhpcy5yZXN0LnB1dChgJHt0aGlzLmJhc2VVcmx9LyR7aWR9L3JvbGUvJHtyb2xlfWAsIG51bGwpO1xuICB9XG5cbiAgLyoqXG4gICAqIERlbGV0ZSB1c2VyIGZyb20gdGhlIHN5c3RlbVxuICAgKiBUaGUgdXNlciB3aWxsIGJlIHJlbW92ZWQgZnJvbSB0aGUgYWNjb3VudCwgaWYgbm8gYWNjb3VudHMgYXNzb2NpYXRlZCB3aXRoIHRoZSB1c2VyLCBpdCB3aWxsIGJlIGRlbGV0ZWRcbiAgICogQFJldHVybjogQWN0aW9uUmVzcG9uc2VcbiAgICovXG4gIGRlbGV0ZShpZD86IHN0cmluZykge1xuICAgIHJldHVybiB0aGlzLnJlc3QuZGVsZXRlKGAke3RoaXMuYmFzZVVybH0vJHtpZH1gKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBHZXQgc2luZ2xlIHVzZXIgYnkgaWRcbiAgICogQFJldHVybjogRW50aXR5UmVzcG9uc2U8VXNlcj5cbiAgICovXG4gIGdldChpZD86IHN0cmluZykge1xuICAgIHJldHVybiB0aGlzLnJlc3QuZ2V0KGAke3RoaXMuYmFzZVVybH0vJHtpZH1gKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBHZXQgc2luZ2xlIHVzZXIgYnkgZW1haWxcbiAgICogQFJldHVybjogRW50aXR5UmVzcG9uc2U8VXNlcj5cbiAgICovXG4gIGdldEJ5RW1haWwoZW1haWw/OiBzdHJpbmcpIHtcbiAgICByZXR1cm4gdGhpcy5yZXN0LmdldChgJHt0aGlzLmJhc2VVcmx9L2J5RW1haWwvJHtlbWFpbH1gKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBGaW5kIGxpc3Qgb2YgdXNlcnMgYW5kIGZpbHRlciB0aGUgbGlzdFxuICAgKiBTeXN0ZW0gdXNlciB3aWxsIHNlZSBhbGwgdXNlcnMsIEFjY291bnQgc3lzdGVtIHdpbGwgc2VlIGFsbCB1c2VycyBvZiB0aGUgYWNjb3VudCwgcmVnaXN0ZXJlZCB1c2VyIHdpbGwgZ2V0IGFuIGVycm9yLlxuICAgKiBAUmV0dXJuOiBRdWVyeVJlc3BvbnNlPFVzZXI+XG4gICAqL1xuICBmaW5kKHNlYXJjaD86IHN0cmluZywgdHlwZT86IFVzZXJUeXBlQ29kZVtdLCBzdGF0dXM/OiBVc2VyU3RhdHVzQ29kZVtdLCBzb3J0Pzogc3RyaW5nLCBwYWdlPzogbnVtYmVyLCBwYWdlU2l6ZT86IG51bWJlcikge1xuICAgIGNvbnN0IHBhcmFtcyA9IG5ldyBBcnJheSgpO1x0XHRcbiAgICBpZiAoc2VhcmNoICE9IG51bGwpIHsgcGFyYW1zLnB1c2goYHNlYXJjaD0ke3NlYXJjaH1gKTsgfVxuICAgIGlmICh0eXBlICE9IG51bGwpIHsgcGFyYW1zLnB1c2goYHR5cGU9JHt0eXBlfWApOyB9XG4gICAgaWYgKHN0YXR1cyAhPSBudWxsKSB7IHBhcmFtcy5wdXNoKGBzdGF0dXM9JHtzdGF0dXN9YCk7IH1cbiAgICBpZiAoc29ydCAhPSBudWxsKSB7IHBhcmFtcy5wdXNoKGBzb3J0PSR7c29ydH1gKTsgfVxuICAgIGlmIChwYWdlICE9IG51bGwpIHsgcGFyYW1zLnB1c2goYHBhZ2U9JHtwYWdlfWApOyB9XG4gICAgaWYgKHBhZ2VTaXplICE9IG51bGwpIHsgcGFyYW1zLnB1c2goYHBhZ2VTaXplPSR7cGFnZVNpemV9YCk7IH1cblxuXHRcdHJldHVybiB0aGlzLnJlc3QuZ2V0KGAke3RoaXMuYmFzZVVybH1gLCAuLi5wYXJhbXMpO1xuICB9XG5cbn1cbiJdfQ==