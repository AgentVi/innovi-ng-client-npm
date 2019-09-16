/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Injectable, Inject } from '@angular/core';
import { RestUtil } from '../../utils/rest-util';
import { CoreConfig } from '../../config';
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
    /**
     * Get innoVi client configuration (map clients and other configurations)
     * @Return: EntityResponse<InnoviClientConfig>
     */
    /**
     * Get innoVi client configuration (map clients and other configurations)
     * \@Return: EntityResponse<InnoviClientConfig>
     * @return {?}
     */
    UserService.prototype.getConfig = /**
     * Get innoVi client configuration (map clients and other configurations)
     * \@Return: EntityResponse<InnoviClientConfig>
     * @return {?}
     */
    function () {
        return this.rest.get(this.baseUrl + "/config");
    };
    UserService.decorators = [
        { type: Injectable }
    ];
    /** @nocollapse */
    UserService.ctorParameters = function () { return [
        { type: CoreConfig, decorators: [{ type: Inject, args: ['config',] }] },
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXNlclNlcnZpY2UuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AYWdlbnR2aS9uZy1jb3JlLWxpYi8iLCJzb3VyY2VzIjpbImxpYi9zZXJ2aWNlcy91c2VyU2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ25ELE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSx1QkFBdUIsQ0FBQztBQUNqRCxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sY0FBYyxDQUFDOzs7O0FBVTFDO0lBTUU7O09BRUc7SUFDSCxxQkFBc0MsTUFBa0IsRUFBVSxJQUFjO1FBQTFDLFdBQU0sR0FBTixNQUFNLENBQVk7UUFBVSxTQUFJLEdBQUosSUFBSSxDQUFVOztRQUx4RSxZQUFPLEdBQUcsT0FBTyxDQUFDO1FBTXhCLElBQUksQ0FBQyxPQUFPLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxHQUFHLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQztJQUNoRCxDQUFDO0lBR0Q7Ozs7T0FJRzs7Ozs7Ozs7SUFDSCwyQkFBSzs7Ozs7OztJQUFMLFVBQU0sSUFBa0I7UUFDdEIsT0FBTyxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBSSxJQUFJLENBQUMsT0FBTyxXQUFRLEVBQUUsT0FBTyxJQUFJLEtBQUssUUFBUSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUN6RyxDQUFDO0lBRUQ7OztPQUdHOzs7Ozs7SUFDSCxrQ0FBWTs7Ozs7SUFBWjtRQUNFLE9BQU8sSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUksSUFBSSxDQUFDLE9BQU8sbUJBQWdCLEVBQUUsSUFBSSxDQUFDLENBQUM7SUFDL0QsQ0FBQztJQUVEOzs7T0FHRzs7Ozs7OztJQUNILG9DQUFjOzs7Ozs7SUFBZCxVQUFlLEdBQVk7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Q0gsK0JBQVM7Ozs7O0lBQVQ7UUFDRSxPQUFPLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFJLElBQUksQ0FBQyxPQUFPLFlBQVMsQ0FBQyxDQUFDO0lBQ2pELENBQUM7O2dCQXhHRixVQUFVOzs7O2dCQVZGLFVBQVUsdUJBbUJKLE1BQU0sU0FBQyxRQUFRO2dCQXBCckIsUUFBUTs7SUFxSGpCLGtCQUFDO0NBQUEsQUExR0QsSUEwR0M7U0F6R1ksV0FBVzs7Ozs7O0lBR3RCLDhCQUEwQjs7Ozs7SUFLZCw2QkFBNEM7Ozs7O0lBQUUsMkJBQXNCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSwgSW5qZWN0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBSZXN0VXRpbCB9IGZyb20gJy4uLy4uL3V0aWxzL3Jlc3QtdXRpbCc7XG5pbXBvcnQgeyBDb3JlQ29uZmlnIH0gZnJvbSAnLi4vLi4vY29uZmlnJztcblxuaW1wb3J0IHsgQ2hhbmdlUGFzc3dvcmRSZXF1ZXN0IH0gZnJvbSAnLi4vbWVzc2FnZXMvQ2hhbmdlUGFzc3dvcmRSZXF1ZXN0JztcbmltcG9ydCB7IFRva2VuUmVxdWVzdCB9IGZyb20gJy4uL21lc3NhZ2VzL1Rva2VuUmVxdWVzdCc7XG5pbXBvcnQgeyBMb2dpblBhcmFtcyB9IGZyb20gJy4uL2NvbW1vbi9Mb2dpblBhcmFtcyc7XG5cblxuLyoqXG4gKiBTZXJ2aWNlcyBmb3IgdXNlciByZWdpc3RyYXRpb24gYW5kIGxvZ2luIFxuICovXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgVXNlclNlcnZpY2Uge1xuXG4gIC8vIFVSTCB0byB3ZWIgYXBpXG4gIHByaXZhdGUgYmFzZVVybCA9ICcvdXNlcic7XG5cbiAgLyoqXG4gICAqIENsYXNzIGNvbnN0cnVjdG9yXG4gICAqL1xuICBjb25zdHJ1Y3RvcihASW5qZWN0KCdjb25maWcnKSBwcml2YXRlIGNvbmZpZzogQ29yZUNvbmZpZywgcHJpdmF0ZSByZXN0OiBSZXN0VXRpbCkge1xuICAgIHRoaXMuYmFzZVVybCA9IHRoaXMuY29uZmlnLmFwaSArIHRoaXMuYmFzZVVybDtcbiAgfVxuXG5cbiAgLyoqXG4gICAqIExvZ2luIHRvIHRoZSBzeXN0ZW0gd2l0aCB1c2VyIGVtYWlsIGFuZCBwYXNzd29yZFxuICAgKiBUaGUgcmVzcG9uc2UgaW5jbHVkZXMgYWNjZXNzIHRva2VuIHZhbGlkIGZvciAyMCBtaW51dGVzLiBUaGUgY2xpZW50IHNpZGUgc2hvdWxkIHJlbmV3IHRoZSB0b2tlbiBiZWZvcmUgZXhwaXJhdGlvbiB1c2luZyByZWZyZXNoLXRva2VuIG1ldGhvZFxuICAgKiBAUmV0dXJuOiBFbnRpdHlSZXNwb25zZTxMb2dpbkRhdGE+XG4gICAqL1xuICBsb2dpbihib2R5PzogTG9naW5QYXJhbXMpIHtcbiAgICByZXR1cm4gdGhpcy5yZXN0LnBvc3QoYCR7dGhpcy5iYXNlVXJsfS9sb2dpbmAsIHR5cGVvZiBib2R5ID09PSAnb2JqZWN0JyA/IEpTT04uc3RyaW5naWZ5KGJvZHkpIDogYm9keSk7XG4gIH1cblxuICAvKipcbiAgICogUmVmcmVzaCB0b2tlbiAoc2V0IG5ldyBleHBpcmF0aW9uIHRpbWUpIGFuZCBhc3NvY2lhdGUgd2l0aCBuZXcgYWNjb3VudCBpZiByZXF1aXJlZFxuICAgKiBAUmV0dXJuOiBFbnRpdHlSZXNwb25zZTxMb2dpbkRhdGE+XG4gICAqL1xuICByZWZyZXNoVG9rZW4oKSB7XG4gICAgcmV0dXJuIHRoaXMucmVzdC5wb3N0KGAke3RoaXMuYmFzZVVybH0vcmVmcmVzaC10b2tlbmAsIG51bGwpO1xuICB9XG5cbiAgLyoqXG4gICAqIFZlcmlmeSB1c2VyIGJ5IHRlbXBvcmFyeSBsb2dpbiBrZXlcbiAgICogQFJldHVybjogRW50aXR5UmVzcG9uc2U8VXNlcj5cbiAgICovXG4gIHZlcmlmeUxvZ2luS2V5KGtleT86IHN0cmluZykge1xuICAgIGNvbnN0IHBhcmFtcyA9IG5ldyBBcnJheSgpO1x0XHRcbiAgICBpZiAoa2V5ICE9IG51bGwpIHsgcGFyYW1zLnB1c2goYGtleT0ke2tleX1gKTsgfVxuXG5cdFx0cmV0dXJuIHRoaXMucmVzdC5nZXQoYCR7dGhpcy5iYXNlVXJsfS9sb2dpbi92ZXJpZnlgLCAuLi5wYXJhbXMpO1xuICB9XG5cbiAgLyoqXG4gICAqIFNlbmQgdmVyaWZpY2F0aW9uIGNvZGUgYnkgZW1haWxcbiAgICogQFJldHVybjogQWN0aW9uUmVzcG9uc2VcbiAgICovXG4gIHNlbmRWZXJpZmljYXRpb25Db2RlKGJvZHk/OiBzdHJpbmcpIHtcbiAgICByZXR1cm4gdGhpcy5yZXN0LnBvc3QoYCR7dGhpcy5iYXNlVXJsfS92ZXJpZnlgLCB0eXBlb2YgYm9keSA9PT0gJ29iamVjdCcgPyBKU09OLnN0cmluZ2lmeShib2R5KSA6IGJvZHkpO1xuICB9XG5cbiAgLyoqXG4gICAqIFZhbGlkYXRlIHZlcmlmaWNhdGlvbiBjb2RlIGFuZCByZXNldCBwYXNzd29yZFxuICAgKiBAUmV0dXJuOiBBY3Rpb25SZXNwb25zZVxuICAgKi9cbiAgcmVzZXRQYXNzd29yZChjb2RlPzogc3RyaW5nKSB7XG4gICAgcmV0dXJuIHRoaXMucmVzdC5wb3N0KGAke3RoaXMuYmFzZVVybH0vcmVzZXQtcGFzc3dvcmRgLCB0eXBlb2YgY29kZSA9PT0gJ29iamVjdCcgPyBKU09OLnN0cmluZ2lmeShjb2RlKSA6IGNvZGUpO1xuICB9XG5cbiAgLyoqXG4gICAqIENoYW5nZSBwYXNzd29yZFxuICAgKiBAUmV0dXJuOiBBY3Rpb25SZXNwb25zZVxuICAgKi9cbiAgY2hhbmdlUGFzc3dvcmQoYm9keT86IENoYW5nZVBhc3N3b3JkUmVxdWVzdCkge1xuICAgIHJldHVybiB0aGlzLnJlc3QucG9zdChgJHt0aGlzLmJhc2VVcmx9L2NoYW5nZS1wYXNzd29yZGAsIHR5cGVvZiBib2R5ID09PSAnb2JqZWN0JyA/IEpTT04uc3RyaW5naWZ5KGJvZHkpIDogYm9keSk7XG4gIH1cblxuICAvKipcbiAgICogQ2hlY2sgaWYgcGFzc3dvcmQgd2FzIHVzZWQgYmVmb3JlIChhY2NvcmRpbmcgdG8gcGFzc3dvcmQgcG9saWN5KVxuICAgKiBAUmV0dXJuOiBBY3Rpb25SZXNwb25zZVxuICAgKi9cbiAgY2hlY2tVbnVzZWRQYXNzd29yZChib2R5Pzogc3RyaW5nKSB7XG4gICAgcmV0dXJuIHRoaXMucmVzdC5wb3N0KGAke3RoaXMuYmFzZVVybH0vY2hlY2stcGFzc3dvcmRgLCB0eXBlb2YgYm9keSA9PT0gJ29iamVjdCcgPyBKU09OLnN0cmluZ2lmeShib2R5KSA6IGJvZHkpO1xuICB9XG5cbiAgLyoqXG4gICAqIENoYW5nZSBjdXJyZW50IHVzZXIgbmFtZVxuICAgKiBAUmV0dXJuOiBBY3Rpb25SZXNwb25zZVxuICAgKi9cbiAgY2hhbmdlTmFtZShib2R5Pzogc3RyaW5nKSB7XG4gICAgcmV0dXJuIHRoaXMucmVzdC5wdXQoYCR7dGhpcy5iYXNlVXJsfS9uYW1lYCwgdHlwZW9mIGJvZHkgPT09ICdvYmplY3QnID8gSlNPTi5zdHJpbmdpZnkoYm9keSkgOiBib2R5KTtcbiAgfVxuXG4gIC8qKlxuICAgKiBDaGFuZ2UgY3VycmVudCB1c2VyIG1vYmlsZVxuICAgKiBAUmV0dXJuOiBBY3Rpb25SZXNwb25zZVxuICAgKi9cbiAgY2hhbmdlTW9iaWxlKGJvZHk/OiBzdHJpbmcpIHtcbiAgICByZXR1cm4gdGhpcy5yZXN0LnB1dChgJHt0aGlzLmJhc2VVcmx9L21vYmlsZWAsIHR5cGVvZiBib2R5ID09PSAnb2JqZWN0JyA/IEpTT04uc3RyaW5naWZ5KGJvZHkpIDogYm9keSk7XG4gIH1cblxuICAvKipcbiAgICogUmVmcmVzaCB0b2tlbiAoc2V0IG5ldyBleHBpcmF0aW9uIHRpbWUpIGFuZCBhc3NvY2lhdGUgd2l0aCBuZXcgYWNjb3VudCBpZiByZXF1aXJlZFxuICAgKiBAUmV0dXJuOiBFbnRpdHlSZXNwb25zZTxVc2VyQWNjb3VudEluZm8+XG4gICAqL1xuICBzd2l0Y2hBY2NvdW50KGJvZHk/OiBUb2tlblJlcXVlc3QpIHtcbiAgICByZXR1cm4gdGhpcy5yZXN0LnBvc3QoYCR7dGhpcy5iYXNlVXJsfS9zd2l0Y2gtYWNjb3VudGAsIHR5cGVvZiBib2R5ID09PSAnb2JqZWN0JyA/IEpTT04uc3RyaW5naWZ5KGJvZHkpIDogYm9keSk7XG4gIH1cblxuICAvKipcbiAgICogR2V0IGlubm9WaSBjbGllbnQgY29uZmlndXJhdGlvbiAobWFwIGNsaWVudHMgYW5kIG90aGVyIGNvbmZpZ3VyYXRpb25zKVxuICAgKiBAUmV0dXJuOiBFbnRpdHlSZXNwb25zZTxJbm5vdmlDbGllbnRDb25maWc+XG4gICAqL1xuICBnZXRDb25maWcoKSB7XG4gICAgcmV0dXJuIHRoaXMucmVzdC5nZXQoYCR7dGhpcy5iYXNlVXJsfS9jb25maWdgKTtcbiAgfVxuXG59XG4iXX0=