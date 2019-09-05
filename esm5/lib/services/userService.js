/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Injectable, Inject } from '@angular/core';
import { RestUtil } from '../../utils/rest-util';
/**
 * Services for user registration and login
 */
var UserService = /** @class */ (function () {
    /**
     * Class constructor
     */
    function UserService(config, rest) {
        this.config = config;
        this.rest = rest;
        // URL to web api
        this.baseUrl = '/user';
        this.baseUrl = this.config.api + this.baseUrl;
    }
    /**
     * Login to the system with user email and password
     * The response includes access token valid for 20 minutes. The client side should renew the token before expiration using refresh-token method
     * @Return: EntityResponse<LoginData>
     */
    /**
     * Login to the system with user email and password
     * The response includes access token valid for 20 minutes. The client side should renew the token before expiration using refresh-token method
     * \@Return: EntityResponse<LoginData>
     * @param {?=} body
     * @return {?}
     */
    UserService.prototype.login = /**
     * Login to the system with user email and password
     * The response includes access token valid for 20 minutes. The client side should renew the token before expiration using refresh-token method
     * \@Return: EntityResponse<LoginData>
     * @param {?=} body
     * @return {?}
     */
    function (body) {
        return this.rest.post(this.baseUrl + "/login", typeof body === 'object' ? JSON.stringify(body) : body);
    };
    /**
     * Refresh token (set new expiration time) and associate with new account if required
     * @Return: EntityResponse<LoginData>
     */
    /**
     * Refresh token (set new expiration time) and associate with new account if required
     * \@Return: EntityResponse<LoginData>
     * @return {?}
     */
    UserService.prototype.refreshToken = /**
     * Refresh token (set new expiration time) and associate with new account if required
     * \@Return: EntityResponse<LoginData>
     * @return {?}
     */
    function () {
        return this.rest.post(this.baseUrl + "/refresh-token", null);
    };
    /**
     * Verify user by temporary login key
     * @Return: EntityResponse<User>
     */
    /**
     * Verify user by temporary login key
     * \@Return: EntityResponse<User>
     * @param {?=} key
     * @return {?}
     */
    UserService.prototype.verifyLoginKey = /**
     * Verify user by temporary login key
     * \@Return: EntityResponse<User>
     * @param {?=} key
     * @return {?}
     */
    function (key) {
        var _a;
        /** @type {?} */
        var params = new Array();
        if (key != null) {
            params.push("key=" + key);
        }
        return (_a = this.rest).get.apply(_a, tslib_1.__spread([this.baseUrl + "/login/verify"], params));
    };
    /**
     * Send verification code by email
     * @Return: ActionResponse
     */
    /**
     * Send verification code by email
     * \@Return: ActionResponse
     * @param {?=} body
     * @return {?}
     */
    UserService.prototype.sendVerificationCode = /**
     * Send verification code by email
     * \@Return: ActionResponse
     * @param {?=} body
     * @return {?}
     */
    function (body) {
        return this.rest.post(this.baseUrl + "/verify", typeof body === 'object' ? JSON.stringify(body) : body);
    };
    /**
     * Validate verification code and reset password
     * @Return: ActionResponse
     */
    /**
     * Validate verification code and reset password
     * \@Return: ActionResponse
     * @param {?=} code
     * @return {?}
     */
    UserService.prototype.resetPassword = /**
     * Validate verification code and reset password
     * \@Return: ActionResponse
     * @param {?=} code
     * @return {?}
     */
    function (code) {
        return this.rest.post(this.baseUrl + "/reset-password", typeof code === 'object' ? JSON.stringify(code) : code);
    };
    /**
     * Change password
     * @Return: ActionResponse
     */
    /**
     * Change password
     * \@Return: ActionResponse
     * @param {?=} body
     * @return {?}
     */
    UserService.prototype.changePassword = /**
     * Change password
     * \@Return: ActionResponse
     * @param {?=} body
     * @return {?}
     */
    function (body) {
        return this.rest.post(this.baseUrl + "/change-password", typeof body === 'object' ? JSON.stringify(body) : body);
    };
    /**
     * Check if password was used before (according to password policy)
     * @Return: ActionResponse
     */
    /**
     * Check if password was used before (according to password policy)
     * \@Return: ActionResponse
     * @param {?=} body
     * @return {?}
     */
    UserService.prototype.checkUnusedPassword = /**
     * Check if password was used before (according to password policy)
     * \@Return: ActionResponse
     * @param {?=} body
     * @return {?}
     */
    function (body) {
        return this.rest.post(this.baseUrl + "/check-password", typeof body === 'object' ? JSON.stringify(body) : body);
    };
    /**
     * Change current user name
     * @Return: ActionResponse
     */
    /**
     * Change current user name
     * \@Return: ActionResponse
     * @param {?=} body
     * @return {?}
     */
    UserService.prototype.changeName = /**
     * Change current user name
     * \@Return: ActionResponse
     * @param {?=} body
     * @return {?}
     */
    function (body) {
        return this.rest.put(this.baseUrl + "/name", typeof body === 'object' ? JSON.stringify(body) : body);
    };
    /**
     * Change current user mobile
     * @Return: ActionResponse
     */
    /**
     * Change current user mobile
     * \@Return: ActionResponse
     * @param {?=} body
     * @return {?}
     */
    UserService.prototype.changeMobile = /**
     * Change current user mobile
     * \@Return: ActionResponse
     * @param {?=} body
     * @return {?}
     */
    function (body) {
        return this.rest.put(this.baseUrl + "/mobile", typeof body === 'object' ? JSON.stringify(body) : body);
    };
    /**
     * Refresh token (set new expiration time) and associate with new account if required
     * @Return: EntityResponse<UserAccountInfo>
     */
    /**
     * Refresh token (set new expiration time) and associate with new account if required
     * \@Return: EntityResponse<UserAccountInfo>
     * @param {?=} body
     * @return {?}
     */
    UserService.prototype.switchAccount = /**
     * Refresh token (set new expiration time) and associate with new account if required
     * \@Return: EntityResponse<UserAccountInfo>
     * @param {?=} body
     * @return {?}
     */
    function (body) {
        return this.rest.post(this.baseUrl + "/switch-account", typeof body === 'object' ? JSON.stringify(body) : body);
    };
    UserService.decorators = [
        { type: Injectable }
    ];
    /** @nocollapse */
    UserService.ctorParameters = function () { return [
        { type: undefined, decorators: [{ type: Inject, args: ['config',] }] },
        { type: RestUtil }
    ]; };
    return UserService;
}());
export { UserService };
if (false) {
    /**
     * @type {?}
     * @private
     */
    UserService.prototype.baseUrl;
    /**
     * @type {?}
     * @private
     */
    UserService.prototype.config;
    /**
     * @type {?}
     * @private
     */
    UserService.prototype.rest;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXNlclNlcnZpY2UuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AYWdlbnR2aS9uZy1jb3JlLWxpYi8iLCJzb3VyY2VzIjpbImxpYi9zZXJ2aWNlcy91c2VyU2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ25ELE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSx1QkFBdUIsQ0FBQzs7OztBQVdqRDtJQU1FOztPQUVHO0lBQ0gscUJBQXNDLE1BQWtCLEVBQVUsSUFBYztRQUExQyxXQUFNLEdBQU4sTUFBTSxDQUFZO1FBQVUsU0FBSSxHQUFKLElBQUksQ0FBVTs7UUFMeEUsWUFBTyxHQUFHLE9BQU8sQ0FBQztRQU14QixJQUFJLENBQUMsT0FBTyxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUMsR0FBRyxHQUFHLElBQUksQ0FBQyxPQUFPLENBQUM7SUFDaEQsQ0FBQztJQUdEOzs7O09BSUc7Ozs7Ozs7O0lBQ0gsMkJBQUs7Ozs7Ozs7SUFBTCxVQUFNLElBQWtCO1FBQ3RCLE9BQU8sSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUksSUFBSSxDQUFDLE9BQU8sV0FBUSxFQUFFLE9BQU8sSUFBSSxLQUFLLFFBQVEsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDekcsQ0FBQztJQUVEOzs7T0FHRzs7Ozs7O0lBQ0gsa0NBQVk7Ozs7O0lBQVo7UUFDRSxPQUFPLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFJLElBQUksQ0FBQyxPQUFPLG1CQUFnQixFQUFFLElBQUksQ0FBQyxDQUFDO0lBQy9ELENBQUM7SUFFRDs7O09BR0c7Ozs7Ozs7SUFDSCxvQ0FBYzs7Ozs7O0lBQWQsVUFBZSxHQUFZOzs7WUFDbkIsTUFBTSxHQUFHLElBQUksS0FBSyxFQUFFO1FBQzFCLElB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QUFDO0NBQUEsQUFsR0QsSUFrR0M7U0FqR1ksV0FBVzs7Ozs7O0lBR3RCLDhCQUEwQjs7Ozs7SUFLZCw2QkFBNEM7Ozs7O0lBQUUsMkJBQXNCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSwgSW5qZWN0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBSZXN0VXRpbCB9IGZyb20gJy4uLy4uL3V0aWxzL3Jlc3QtdXRpbCc7XG5pbXBvcnQgeyBDb3JlQ29uZmlnIH0gZnJvbSAnLi4vLi4vY29yZS1jb25maWcnO1xuXG5pbXBvcnQgeyBMb2dpblBhcmFtcyB9IGZyb20gJy4uL2NvbW1vbi9Mb2dpblBhcmFtcyc7XG5pbXBvcnQgeyBDaGFuZ2VQYXNzd29yZFJlcXVlc3QgfSBmcm9tICcuLi9tZXNzYWdlcy9DaGFuZ2VQYXNzd29yZFJlcXVlc3QnO1xuaW1wb3J0IHsgVG9rZW5SZXF1ZXN0IH0gZnJvbSAnLi4vbWVzc2FnZXMvVG9rZW5SZXF1ZXN0JztcblxuXG4vKipcbiAqIFNlcnZpY2VzIGZvciB1c2VyIHJlZ2lzdHJhdGlvbiBhbmQgbG9naW4gXG4gKi9cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBVc2VyU2VydmljZSB7XG5cbiAgLy8gVVJMIHRvIHdlYiBhcGlcbiAgcHJpdmF0ZSBiYXNlVXJsID0gJy91c2VyJztcblxuICAvKipcbiAgICogQ2xhc3MgY29uc3RydWN0b3JcbiAgICovXG4gIGNvbnN0cnVjdG9yKEBJbmplY3QoJ2NvbmZpZycpIHByaXZhdGUgY29uZmlnOiBDb3JlQ29uZmlnLCBwcml2YXRlIHJlc3Q6IFJlc3RVdGlsKSB7XG4gICAgdGhpcy5iYXNlVXJsID0gdGhpcy5jb25maWcuYXBpICsgdGhpcy5iYXNlVXJsO1xuICB9XG5cblxuICAvKipcbiAgICogTG9naW4gdG8gdGhlIHN5c3RlbSB3aXRoIHVzZXIgZW1haWwgYW5kIHBhc3N3b3JkXG4gICAqIFRoZSByZXNwb25zZSBpbmNsdWRlcyBhY2Nlc3MgdG9rZW4gdmFsaWQgZm9yIDIwIG1pbnV0ZXMuIFRoZSBjbGllbnQgc2lkZSBzaG91bGQgcmVuZXcgdGhlIHRva2VuIGJlZm9yZSBleHBpcmF0aW9uIHVzaW5nIHJlZnJlc2gtdG9rZW4gbWV0aG9kXG4gICAqIEBSZXR1cm46IEVudGl0eVJlc3BvbnNlPExvZ2luRGF0YT5cbiAgICovXG4gIGxvZ2luKGJvZHk/OiBMb2dpblBhcmFtcykge1xuICAgIHJldHVybiB0aGlzLnJlc3QucG9zdChgJHt0aGlzLmJhc2VVcmx9L2xvZ2luYCwgdHlwZW9mIGJvZHkgPT09ICdvYmplY3QnID8gSlNPTi5zdHJpbmdpZnkoYm9keSkgOiBib2R5KTtcbiAgfVxuXG4gIC8qKlxuICAgKiBSZWZyZXNoIHRva2VuIChzZXQgbmV3IGV4cGlyYXRpb24gdGltZSkgYW5kIGFzc29jaWF0ZSB3aXRoIG5ldyBhY2NvdW50IGlmIHJlcXVpcmVkXG4gICAqIEBSZXR1cm46IEVudGl0eVJlc3BvbnNlPExvZ2luRGF0YT5cbiAgICovXG4gIHJlZnJlc2hUb2tlbigpIHtcbiAgICByZXR1cm4gdGhpcy5yZXN0LnBvc3QoYCR7dGhpcy5iYXNlVXJsfS9yZWZyZXNoLXRva2VuYCwgbnVsbCk7XG4gIH1cblxuICAvKipcbiAgICogVmVyaWZ5IHVzZXIgYnkgdGVtcG9yYXJ5IGxvZ2luIGtleVxuICAgKiBAUmV0dXJuOiBFbnRpdHlSZXNwb25zZTxVc2VyPlxuICAgKi9cbiAgdmVyaWZ5TG9naW5LZXkoa2V5Pzogc3RyaW5nKSB7XG4gICAgY29uc3QgcGFyYW1zID0gbmV3IEFycmF5KCk7XHRcdFxuICAgIGlmIChrZXkgIT0gbnVsbCkgeyBwYXJhbXMucHVzaChga2V5PSR7a2V5fWApOyB9XG5cblx0XHRyZXR1cm4gdGhpcy5yZXN0LmdldChgJHt0aGlzLmJhc2VVcmx9L2xvZ2luL3ZlcmlmeWAsIC4uLnBhcmFtcyk7XG4gIH1cblxuICAvKipcbiAgICogU2VuZCB2ZXJpZmljYXRpb24gY29kZSBieSBlbWFpbFxuICAgKiBAUmV0dXJuOiBBY3Rpb25SZXNwb25zZVxuICAgKi9cbiAgc2VuZFZlcmlmaWNhdGlvbkNvZGUoYm9keT86IHN0cmluZykge1xuICAgIHJldHVybiB0aGlzLnJlc3QucG9zdChgJHt0aGlzLmJhc2VVcmx9L3ZlcmlmeWAsIHR5cGVvZiBib2R5ID09PSAnb2JqZWN0JyA/IEpTT04uc3RyaW5naWZ5KGJvZHkpIDogYm9keSk7XG4gIH1cblxuICAvKipcbiAgICogVmFsaWRhdGUgdmVyaWZpY2F0aW9uIGNvZGUgYW5kIHJlc2V0IHBhc3N3b3JkXG4gICAqIEBSZXR1cm46IEFjdGlvblJlc3BvbnNlXG4gICAqL1xuICByZXNldFBhc3N3b3JkKGNvZGU/OiBzdHJpbmcpIHtcbiAgICByZXR1cm4gdGhpcy5yZXN0LnBvc3QoYCR7dGhpcy5iYXNlVXJsfS9yZXNldC1wYXNzd29yZGAsIHR5cGVvZiBjb2RlID09PSAnb2JqZWN0JyA/IEpTT04uc3RyaW5naWZ5KGNvZGUpIDogY29kZSk7XG4gIH1cblxuICAvKipcbiAgICogQ2hhbmdlIHBhc3N3b3JkXG4gICAqIEBSZXR1cm46IEFjdGlvblJlc3BvbnNlXG4gICAqL1xuICBjaGFuZ2VQYXNzd29yZChib2R5PzogQ2hhbmdlUGFzc3dvcmRSZXF1ZXN0KSB7XG4gICAgcmV0dXJuIHRoaXMucmVzdC5wb3N0KGAke3RoaXMuYmFzZVVybH0vY2hhbmdlLXBhc3N3b3JkYCwgdHlwZW9mIGJvZHkgPT09ICdvYmplY3QnID8gSlNPTi5zdHJpbmdpZnkoYm9keSkgOiBib2R5KTtcbiAgfVxuXG4gIC8qKlxuICAgKiBDaGVjayBpZiBwYXNzd29yZCB3YXMgdXNlZCBiZWZvcmUgKGFjY29yZGluZyB0byBwYXNzd29yZCBwb2xpY3kpXG4gICAqIEBSZXR1cm46IEFjdGlvblJlc3BvbnNlXG4gICAqL1xuICBjaGVja1VudXNlZFBhc3N3b3JkKGJvZHk/OiBzdHJpbmcpIHtcbiAgICByZXR1cm4gdGhpcy5yZXN0LnBvc3QoYCR7dGhpcy5iYXNlVXJsfS9jaGVjay1wYXNzd29yZGAsIHR5cGVvZiBib2R5ID09PSAnb2JqZWN0JyA/IEpTT04uc3RyaW5naWZ5KGJvZHkpIDogYm9keSk7XG4gIH1cblxuICAvKipcbiAgICogQ2hhbmdlIGN1cnJlbnQgdXNlciBuYW1lXG4gICAqIEBSZXR1cm46IEFjdGlvblJlc3BvbnNlXG4gICAqL1xuICBjaGFuZ2VOYW1lKGJvZHk/OiBzdHJpbmcpIHtcbiAgICByZXR1cm4gdGhpcy5yZXN0LnB1dChgJHt0aGlzLmJhc2VVcmx9L25hbWVgLCB0eXBlb2YgYm9keSA9PT0gJ29iamVjdCcgPyBKU09OLnN0cmluZ2lmeShib2R5KSA6IGJvZHkpO1xuICB9XG5cbiAgLyoqXG4gICAqIENoYW5nZSBjdXJyZW50IHVzZXIgbW9iaWxlXG4gICAqIEBSZXR1cm46IEFjdGlvblJlc3BvbnNlXG4gICAqL1xuICBjaGFuZ2VNb2JpbGUoYm9keT86IHN0cmluZykge1xuICAgIHJldHVybiB0aGlzLnJlc3QucHV0KGAke3RoaXMuYmFzZVVybH0vbW9iaWxlYCwgdHlwZW9mIGJvZHkgPT09ICdvYmplY3QnID8gSlNPTi5zdHJpbmdpZnkoYm9keSkgOiBib2R5KTtcbiAgfVxuXG4gIC8qKlxuICAgKiBSZWZyZXNoIHRva2VuIChzZXQgbmV3IGV4cGlyYXRpb24gdGltZSkgYW5kIGFzc29jaWF0ZSB3aXRoIG5ldyBhY2NvdW50IGlmIHJlcXVpcmVkXG4gICAqIEBSZXR1cm46IEVudGl0eVJlc3BvbnNlPFVzZXJBY2NvdW50SW5mbz5cbiAgICovXG4gIHN3aXRjaEFjY291bnQoYm9keT86IFRva2VuUmVxdWVzdCkge1xuICAgIHJldHVybiB0aGlzLnJlc3QucG9zdChgJHt0aGlzLmJhc2VVcmx9L3N3aXRjaC1hY2NvdW50YCwgdHlwZW9mIGJvZHkgPT09ICdvYmplY3QnID8gSlNPTi5zdHJpbmdpZnkoYm9keSkgOiBib2R5KTtcbiAgfVxuXG59XG4iXX0=