/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable, Inject } from '@angular/core';
import { RestUtil } from '../../utils/rest-util';
/**
 * Services for user registration and login
 */
export class UserService {
    /**
     * Class constructor
     * @param {?} config
     * @param {?} rest
     */
    constructor(config, rest) {
        this.config = config;
        this.rest = rest;
        // URL to web api
        this.baseUrl = '/user';
        this.baseUrl = this.config.api + this.baseUrl;
    }
    /**
     * Login to the system with user email and password
     * The response includes access token valid for 20 minutes. The client side should renew the token before expiration using refresh-token method
     * \@Return: EntityResponse<LoginData>
     * @param {?=} body
     * @return {?}
     */
    login(body) {
        return this.rest.post(`${this.baseUrl}/login`, JSON.stringify(body));
    }
    /**
     * Refresh token (set new expiration time) and associate with new account if required
     * \@Return: EntityResponse<LoginData>
     * @return {?}
     */
    refreshToken() {
        return this.rest.post(`${this.baseUrl}/refresh-token`, null);
    }
    /**
     * Verify user by temporary login key
     * \@Return: EntityResponse<User>
     * @param {?=} key
     * @return {?}
     */
    verifyLoginKey(key) {
        /** @type {?} */
        const params = new Array();
        if (key != null) {
            params.push(`key=${key}`);
        }
        return this.rest.get(`${this.baseUrl}/login/verify`, ...params);
    }
    /**
     * Send verification code by email
     * \@Return: ActionResponse
     * @param {?=} body
     * @return {?}
     */
    sendVerificationCode(body) {
        return this.rest.post(`${this.baseUrl}/verify`, JSON.stringify(body));
    }
    /**
     * Validate verification code and reset password
     * \@Return: ActionResponse
     * @param {?=} code
     * @return {?}
     */
    resetPassword(code) {
        return this.rest.post(`${this.baseUrl}/reset-password`, JSON.stringify(code));
    }
    /**
     * Change password
     * \@Return: ActionResponse
     * @param {?=} body
     * @return {?}
     */
    changePassword(body) {
        return this.rest.post(`${this.baseUrl}/change-password`, JSON.stringify(body));
    }
    /**
     * Check if password was used before (according to password policy)
     * \@Return: ActionResponse
     * @param {?=} body
     * @return {?}
     */
    checkUnusedPassword(body) {
        return this.rest.post(`${this.baseUrl}/check-password`, JSON.stringify(body));
    }
    /**
     * Change current user name
     * \@Return: ActionResponse
     * @param {?=} body
     * @return {?}
     */
    changeName(body) {
        return this.rest.put(`${this.baseUrl}/name`, JSON.stringify(body));
    }
    /**
     * Change current user mobile
     * \@Return: ActionResponse
     * @param {?=} body
     * @return {?}
     */
    changeMobile(body) {
        return this.rest.put(`${this.baseUrl}/mobile`, JSON.stringify(body));
    }
    /**
     * Refresh token (set new expiration time) and associate with new account if required
     * \@Return: EntityResponse<UserAccountInfo>
     * @param {?=} body
     * @return {?}
     */
    switchAccount(body) {
        return this.rest.post(`${this.baseUrl}/switch-account`, JSON.stringify(body));
    }
}
UserService.decorators = [
    { type: Injectable }
];
/** @nocollapse */
UserService.ctorParameters = () => [
    { type: undefined, decorators: [{ type: Inject, args: ['config',] }] },
    { type: RestUtil }
];
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXNlclNlcnZpY2UuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AYWdlbnR2aS9uZy1jb3JlLWxpYi8iLCJzb3VyY2VzIjpbImxpYi9zZXJ2aWNlcy91c2VyU2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDbkQsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLHVCQUF1QixDQUFDOzs7O0FBWWpELE1BQU0sT0FBTyxXQUFXOzs7Ozs7SUFRdEIsWUFBc0MsTUFBa0IsRUFBVSxJQUFjO1FBQTFDLFdBQU0sR0FBTixNQUFNLENBQVk7UUFBVSxTQUFJLEdBQUosSUFBSSxDQUFVOztRQUx4RSxZQUFPLEdBQUcsT0FBTyxDQUFDO1FBTXhCLElBQUksQ0FBQyxPQUFPLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxHQUFHLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQztJQUNoRCxDQUFDOzs7Ozs7OztJQVFELEtBQUssQ0FBQyxJQUFrQjtRQUN0QixPQUFPLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsSUFBSSxDQUFDLE9BQU8sUUFBUSxFQUFFLElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQztJQUN2RSxDQUFDOzs7Ozs7SUFNRCxZQUFZO1FBQ1YsT0FBTyxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLElBQUksQ0FBQyxPQUFPLGdCQUFnQixFQUFFLElBQUksQ0FBQyxDQUFDO0lBQy9ELENBQUM7Ozs7Ozs7SUFNRCxjQUFjLENBQUMsR0FBWTs7Y0FDbkIsTUFBTSxHQUFHLElBQUksS0FBSyxFQUFFO1FBQzFCLElBQUksR0FBRyxJQUFJLElBQUksRUFBRTtZQUFFLE1BQU0sQ0FBQyxJQUFJLENBQUMsT0FBTyxHQUFHLEVBQUUsQ0FBQyxDQUFDO1NBQUU7UUFFakQsT0FBTyxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxHQUFHLElBQUksQ0FBQyxPQUFPLGVBQWUsRUFBRSxHQUFHLE1BQU0sQ0FBQyxDQUFDO0lBQ2hFLENBQUM7Ozs7Ozs7SUFNRCxvQkFBb0IsQ0FBQyxJQUFhO1FBQ2hDLE9BQU8sSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxJQUFJLENBQUMsT0FBTyxTQUFTLEVBQUUsSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDO0lBQ3hFLENBQUM7Ozs7Ozs7SUFNRCxhQUFhLENBQUMsSUFBYTtRQUN6QixPQUFPLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsSUFBSSxDQUFDLE9BQU8saUJBQWlCLEVBQUUsSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDO0lBQ2hGLENBQUM7Ozs7Ozs7SUFNRCxjQUFjLENBQUMsSUFBNEI7UUFDekMsT0FBTyxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLElBQUksQ0FBQyxPQUFPLGtCQUFrQixFQUFFLElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQztJQUNqRixDQUFDOzs7Ozs7O0lBTUQsbUJBQW1CLENBQUMsSUFBYTtRQUMvQixPQUFPLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsSUFBSSxDQUFDLE9BQU8saUJBQWlCLEVBQUUsSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDO0lBQ2hGLENBQUM7Ozs7Ozs7SUFNRCxVQUFVLENBQUMsSUFBYTtRQUN0QixPQUFPLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLEdBQUcsSUFBSSxDQUFDLE9BQU8sT0FBTyxFQUFFLElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQztJQUNyRSxDQUFDOzs7Ozs7O0lBTUQsWUFBWSxDQUFDLElBQWE7UUFDeEIsT0FBTyxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxHQUFHLElBQUksQ0FBQyxPQUFPLFNBQVMsRUFBRSxJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUM7SUFDdkUsQ0FBQzs7Ozs7OztJQU1ELGFBQWEsQ0FBQyxJQUFtQjtRQUMvQixPQUFPLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsSUFBSSxDQUFDLE9BQU8saUJBQWlCLEVBQUUsSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDO0lBQ2hGLENBQUM7OztZQWhHRixVQUFVOzs7OzRDQVNJLE1BQU0sU0FBQyxRQUFRO1lBcEJyQixRQUFROzs7Ozs7O0lBZWYsOEJBQTBCOzs7OztJQUtkLDZCQUE0Qzs7Ozs7SUFBRSwyQkFBc0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlLCBJbmplY3QgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFJlc3RVdGlsIH0gZnJvbSAnLi4vLi4vdXRpbHMvcmVzdC11dGlsJztcbmltcG9ydCB7IENvcmVDb25maWcgfSBmcm9tICcuLi8uLi9jb3JlLWxpYi5tb2R1bGUnO1xuXG5pbXBvcnQgeyBMb2dpblBhcmFtcyB9IGZyb20gJy4uL2NvbW1vbi9Mb2dpblBhcmFtcyc7XG5pbXBvcnQgeyBDaGFuZ2VQYXNzd29yZFJlcXVlc3QgfSBmcm9tICcuLi9tZXNzYWdlcy9DaGFuZ2VQYXNzd29yZFJlcXVlc3QnO1xuaW1wb3J0IHsgVG9rZW5SZXF1ZXN0IH0gZnJvbSAnLi4vbWVzc2FnZXMvVG9rZW5SZXF1ZXN0JztcblxuXG4vKipcbiAqIFNlcnZpY2VzIGZvciB1c2VyIHJlZ2lzdHJhdGlvbiBhbmQgbG9naW4gXG4gKi9cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBVc2VyU2VydmljZSB7XG5cbiAgLy8gVVJMIHRvIHdlYiBhcGlcbiAgcHJpdmF0ZSBiYXNlVXJsID0gJy91c2VyJztcblxuICAvKipcbiAgICogQ2xhc3MgY29uc3RydWN0b3JcbiAgICovXG4gIGNvbnN0cnVjdG9yKEBJbmplY3QoJ2NvbmZpZycpIHByaXZhdGUgY29uZmlnOiBDb3JlQ29uZmlnLCBwcml2YXRlIHJlc3Q6IFJlc3RVdGlsKSB7XG4gICAgdGhpcy5iYXNlVXJsID0gdGhpcy5jb25maWcuYXBpICsgdGhpcy5iYXNlVXJsO1xuICB9XG5cblxuICAvKipcbiAgICogTG9naW4gdG8gdGhlIHN5c3RlbSB3aXRoIHVzZXIgZW1haWwgYW5kIHBhc3N3b3JkXG4gICAqIFRoZSByZXNwb25zZSBpbmNsdWRlcyBhY2Nlc3MgdG9rZW4gdmFsaWQgZm9yIDIwIG1pbnV0ZXMuIFRoZSBjbGllbnQgc2lkZSBzaG91bGQgcmVuZXcgdGhlIHRva2VuIGJlZm9yZSBleHBpcmF0aW9uIHVzaW5nIHJlZnJlc2gtdG9rZW4gbWV0aG9kXG4gICAqIEBSZXR1cm46IEVudGl0eVJlc3BvbnNlPExvZ2luRGF0YT5cbiAgICovXG4gIGxvZ2luKGJvZHk/OiBMb2dpblBhcmFtcykge1xuICAgIHJldHVybiB0aGlzLnJlc3QucG9zdChgJHt0aGlzLmJhc2VVcmx9L2xvZ2luYCwgSlNPTi5zdHJpbmdpZnkoYm9keSkpO1xuICB9XG5cbiAgLyoqXG4gICAqIFJlZnJlc2ggdG9rZW4gKHNldCBuZXcgZXhwaXJhdGlvbiB0aW1lKSBhbmQgYXNzb2NpYXRlIHdpdGggbmV3IGFjY291bnQgaWYgcmVxdWlyZWRcbiAgICogQFJldHVybjogRW50aXR5UmVzcG9uc2U8TG9naW5EYXRhPlxuICAgKi9cbiAgcmVmcmVzaFRva2VuKCkge1xuICAgIHJldHVybiB0aGlzLnJlc3QucG9zdChgJHt0aGlzLmJhc2VVcmx9L3JlZnJlc2gtdG9rZW5gLCBudWxsKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBWZXJpZnkgdXNlciBieSB0ZW1wb3JhcnkgbG9naW4ga2V5XG4gICAqIEBSZXR1cm46IEVudGl0eVJlc3BvbnNlPFVzZXI+XG4gICAqL1xuICB2ZXJpZnlMb2dpbktleShrZXk/OiBzdHJpbmcpIHtcbiAgICBjb25zdCBwYXJhbXMgPSBuZXcgQXJyYXkoKTtcdFx0XG4gICAgaWYgKGtleSAhPSBudWxsKSB7IHBhcmFtcy5wdXNoKGBrZXk9JHtrZXl9YCk7IH1cblxuXHRcdHJldHVybiB0aGlzLnJlc3QuZ2V0KGAke3RoaXMuYmFzZVVybH0vbG9naW4vdmVyaWZ5YCwgLi4ucGFyYW1zKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBTZW5kIHZlcmlmaWNhdGlvbiBjb2RlIGJ5IGVtYWlsXG4gICAqIEBSZXR1cm46IEFjdGlvblJlc3BvbnNlXG4gICAqL1xuICBzZW5kVmVyaWZpY2F0aW9uQ29kZShib2R5Pzogc3RyaW5nKSB7XG4gICAgcmV0dXJuIHRoaXMucmVzdC5wb3N0KGAke3RoaXMuYmFzZVVybH0vdmVyaWZ5YCwgSlNPTi5zdHJpbmdpZnkoYm9keSkpO1xuICB9XG5cbiAgLyoqXG4gICAqIFZhbGlkYXRlIHZlcmlmaWNhdGlvbiBjb2RlIGFuZCByZXNldCBwYXNzd29yZFxuICAgKiBAUmV0dXJuOiBBY3Rpb25SZXNwb25zZVxuICAgKi9cbiAgcmVzZXRQYXNzd29yZChjb2RlPzogc3RyaW5nKSB7XG4gICAgcmV0dXJuIHRoaXMucmVzdC5wb3N0KGAke3RoaXMuYmFzZVVybH0vcmVzZXQtcGFzc3dvcmRgLCBKU09OLnN0cmluZ2lmeShjb2RlKSk7XG4gIH1cblxuICAvKipcbiAgICogQ2hhbmdlIHBhc3N3b3JkXG4gICAqIEBSZXR1cm46IEFjdGlvblJlc3BvbnNlXG4gICAqL1xuICBjaGFuZ2VQYXNzd29yZChib2R5PzogQ2hhbmdlUGFzc3dvcmRSZXF1ZXN0KSB7XG4gICAgcmV0dXJuIHRoaXMucmVzdC5wb3N0KGAke3RoaXMuYmFzZVVybH0vY2hhbmdlLXBhc3N3b3JkYCwgSlNPTi5zdHJpbmdpZnkoYm9keSkpO1xuICB9XG5cbiAgLyoqXG4gICAqIENoZWNrIGlmIHBhc3N3b3JkIHdhcyB1c2VkIGJlZm9yZSAoYWNjb3JkaW5nIHRvIHBhc3N3b3JkIHBvbGljeSlcbiAgICogQFJldHVybjogQWN0aW9uUmVzcG9uc2VcbiAgICovXG4gIGNoZWNrVW51c2VkUGFzc3dvcmQoYm9keT86IHN0cmluZykge1xuICAgIHJldHVybiB0aGlzLnJlc3QucG9zdChgJHt0aGlzLmJhc2VVcmx9L2NoZWNrLXBhc3N3b3JkYCwgSlNPTi5zdHJpbmdpZnkoYm9keSkpO1xuICB9XG5cbiAgLyoqXG4gICAqIENoYW5nZSBjdXJyZW50IHVzZXIgbmFtZVxuICAgKiBAUmV0dXJuOiBBY3Rpb25SZXNwb25zZVxuICAgKi9cbiAgY2hhbmdlTmFtZShib2R5Pzogc3RyaW5nKSB7XG4gICAgcmV0dXJuIHRoaXMucmVzdC5wdXQoYCR7dGhpcy5iYXNlVXJsfS9uYW1lYCwgSlNPTi5zdHJpbmdpZnkoYm9keSkpO1xuICB9XG5cbiAgLyoqXG4gICAqIENoYW5nZSBjdXJyZW50IHVzZXIgbW9iaWxlXG4gICAqIEBSZXR1cm46IEFjdGlvblJlc3BvbnNlXG4gICAqL1xuICBjaGFuZ2VNb2JpbGUoYm9keT86IHN0cmluZykge1xuICAgIHJldHVybiB0aGlzLnJlc3QucHV0KGAke3RoaXMuYmFzZVVybH0vbW9iaWxlYCwgSlNPTi5zdHJpbmdpZnkoYm9keSkpO1xuICB9XG5cbiAgLyoqXG4gICAqIFJlZnJlc2ggdG9rZW4gKHNldCBuZXcgZXhwaXJhdGlvbiB0aW1lKSBhbmQgYXNzb2NpYXRlIHdpdGggbmV3IGFjY291bnQgaWYgcmVxdWlyZWRcbiAgICogQFJldHVybjogRW50aXR5UmVzcG9uc2U8VXNlckFjY291bnRJbmZvPlxuICAgKi9cbiAgc3dpdGNoQWNjb3VudChib2R5PzogVG9rZW5SZXF1ZXN0KSB7XG4gICAgcmV0dXJuIHRoaXMucmVzdC5wb3N0KGAke3RoaXMuYmFzZVVybH0vc3dpdGNoLWFjY291bnRgLCBKU09OLnN0cmluZ2lmeShib2R5KSk7XG4gIH1cblxufVxuIl19