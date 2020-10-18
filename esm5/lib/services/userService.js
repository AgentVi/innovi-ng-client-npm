import { __read, __spread } from "tslib";
import { Injectable, Inject } from '@angular/core';
import { RestUtil } from '../../utils/rest-util';
import { CoreConfig } from '../../config';
import * as i0 from "@angular/core";
import * as i1 from "../../utils/rest-util";
import * as i2 from "../../config";
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
    UserService.prototype.login = function (body) {
        return this.rest.post(this.baseUrl + "/login", typeof body === 'object' ? JSON.stringify(body) : body);
    };
    /**
     * Refresh token (set new expiration time) and associate with new account if required
     * @Return: EntityResponse<LoginData>
     */
    UserService.prototype.refreshToken = function () {
        return this.rest.post(this.baseUrl + "/refresh-token", null);
    };
    /**
     * Verify user by temporary login key
     * @Return: EntityResponse<User>
     */
    UserService.prototype.verifyLoginKey = function (key) {
        var _a;
        var params = new Array();
        if (key != null) {
            params.push("key=" + key);
        }
        return (_a = this.rest).get.apply(_a, __spread([this.baseUrl + "/login/verify"], params));
    };
    /**
     * Send verification code by email
     * @Return: ActionResponse
     */
    UserService.prototype.sendVerificationCode = function (body) {
        return this.rest.post(this.baseUrl + "/verify", typeof body === 'object' ? JSON.stringify(body) : body);
    };
    /**
     * Validate verification code and reset password
     * @Return: ActionResponse
     */
    UserService.prototype.resetPassword = function (code) {
        return this.rest.post(this.baseUrl + "/reset-password", typeof code === 'object' ? JSON.stringify(code) : code);
    };
    /**
     * Change password
     * @Return: ActionResponse
     */
    UserService.prototype.changePassword = function (body) {
        return this.rest.post(this.baseUrl + "/change-password", typeof body === 'object' ? JSON.stringify(body) : body);
    };
    /**
     * Check if password was used before (according to password policy)
     * @Return: ActionResponse
     */
    UserService.prototype.checkUnusedPassword = function (body) {
        return this.rest.post(this.baseUrl + "/check-password", typeof body === 'object' ? JSON.stringify(body) : body);
    };
    /**
     * Change current user name
     * @Return: ActionResponse
     */
    UserService.prototype.changeName = function (body) {
        return this.rest.put(this.baseUrl + "/name", typeof body === 'object' ? JSON.stringify(body) : body);
    };
    /**
     * Change current user mobile
     * @Return: ActionResponse
     */
    UserService.prototype.changeMobile = function (body) {
        return this.rest.put(this.baseUrl + "/mobile", typeof body === 'object' ? JSON.stringify(body) : body);
    };
    /**
     * Refresh token (set new expiration time) and associate with new account if required
     * @Return: EntityResponse<UserAccountInfo>
     */
    UserService.prototype.switchAccount = function (body) {
        return this.rest.post(this.baseUrl + "/switch-account", typeof body === 'object' ? JSON.stringify(body) : body);
    };
    /** @nocollapse */ UserService.ɵfac = function UserService_Factory(t) { return new (t || UserService)(i0.ɵɵinject('config'), i0.ɵɵinject(i1.RestUtil)); };
    /** @nocollapse */ UserService.ɵprov = i0.ɵɵdefineInjectable({ token: UserService, factory: UserService.ɵfac });
    return UserService;
}());
export { UserService };
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(UserService, [{
        type: Injectable
    }], function () { return [{ type: i2.CoreConfig, decorators: [{
                type: Inject,
                args: ['config']
            }] }, { type: i1.RestUtil }]; }, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXNlclNlcnZpY2UuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AYWdlbnR2aS9uZy1jb3JlLWxpYi8iLCJzb3VyY2VzIjpbImxpYi9zZXJ2aWNlcy91c2VyU2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDbkQsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLHVCQUF1QixDQUFDO0FBQ2pELE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxjQUFjLENBQUM7Ozs7QUFPMUM7O0dBRUc7QUFDSDtJQU1FOztPQUVHO0lBQ0gscUJBQXNDLE1BQWtCLEVBQVUsSUFBYztRQUExQyxXQUFNLEdBQU4sTUFBTSxDQUFZO1FBQVUsU0FBSSxHQUFKLElBQUksQ0FBVTtRQU5oRixpQkFBaUI7UUFDVCxZQUFPLEdBQUcsT0FBTyxDQUFDO1FBTXhCLElBQUksQ0FBQyxPQUFPLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxHQUFHLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQztJQUNoRCxDQUFDO0lBR0Q7Ozs7T0FJRztJQUNILDJCQUFLLEdBQUwsVUFBTSxJQUFrQjtRQUN0QixPQUFPLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFJLElBQUksQ0FBQyxPQUFPLFdBQVEsRUFBRSxPQUFPLElBQUksS0FBSyxRQUFRLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQ3pHLENBQUM7SUFFRDs7O09BR0c7SUFDSCxrQ0FBWSxHQUFaO1FBQ0UsT0FBTyxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBSSxJQUFJLENBQUMsT0FBTyxtQkFBZ0IsRUFBRSxJQUFJLENBQUMsQ0FBQztJQUMvRCxDQUFDO0lBRUQ7OztPQUdHO0lBQ0gsb0NBQWMsR0FBZCxVQUFlLEdBQVk7O1FBQ3pCLElBQU0sTUFB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O3NCQVNJLE1BQU07dUJBQUMsUUFBUSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUsIEluamVjdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgUmVzdFV0aWwgfSBmcm9tICcuLi8uLi91dGlscy9yZXN0LXV0aWwnO1xuaW1wb3J0IHsgQ29yZUNvbmZpZyB9IGZyb20gJy4uLy4uL2NvbmZpZyc7XG5cbmltcG9ydCB7IExvZ2luUGFyYW1zIH0gZnJvbSAnLi4vY29tbW9uL0xvZ2luUGFyYW1zJztcbmltcG9ydCB7IENoYW5nZVBhc3N3b3JkUmVxdWVzdCB9IGZyb20gJy4uL21lc3NhZ2VzL0NoYW5nZVBhc3N3b3JkUmVxdWVzdCc7XG5pbXBvcnQgeyBUb2tlblJlcXVlc3QgfSBmcm9tICcuLi9tZXNzYWdlcy9Ub2tlblJlcXVlc3QnO1xuXG5cbi8qKlxuICogU2VydmljZXMgZm9yIHVzZXIgcmVnaXN0cmF0aW9uIGFuZCBsb2dpbiBcbiAqL1xuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIFVzZXJTZXJ2aWNlIHtcblxuICAvLyBVUkwgdG8gd2ViIGFwaVxuICBwcml2YXRlIGJhc2VVcmwgPSAnL3VzZXInO1xuXG4gIC8qKlxuICAgKiBDbGFzcyBjb25zdHJ1Y3RvclxuICAgKi9cbiAgY29uc3RydWN0b3IoQEluamVjdCgnY29uZmlnJykgcHJpdmF0ZSBjb25maWc6IENvcmVDb25maWcsIHByaXZhdGUgcmVzdDogUmVzdFV0aWwpIHtcbiAgICB0aGlzLmJhc2VVcmwgPSB0aGlzLmNvbmZpZy5hcGkgKyB0aGlzLmJhc2VVcmw7XG4gIH1cblxuXG4gIC8qKlxuICAgKiBMb2dpbiB0byB0aGUgc3lzdGVtIHdpdGggdXNlciBlbWFpbCBhbmQgcGFzc3dvcmRcbiAgICogVGhlIHJlc3BvbnNlIGluY2x1ZGVzIGFjY2VzcyB0b2tlbiB2YWxpZCBmb3IgMjAgbWludXRlcy4gVGhlIGNsaWVudCBzaWRlIHNob3VsZCByZW5ldyB0aGUgdG9rZW4gYmVmb3JlIGV4cGlyYXRpb24gdXNpbmcgcmVmcmVzaC10b2tlbiBtZXRob2RcbiAgICogQFJldHVybjogRW50aXR5UmVzcG9uc2U8TG9naW5EYXRhPlxuICAgKi9cbiAgbG9naW4oYm9keT86IExvZ2luUGFyYW1zKSB7XG4gICAgcmV0dXJuIHRoaXMucmVzdC5wb3N0KGAke3RoaXMuYmFzZVVybH0vbG9naW5gLCB0eXBlb2YgYm9keSA9PT0gJ29iamVjdCcgPyBKU09OLnN0cmluZ2lmeShib2R5KSA6IGJvZHkpO1xuICB9XG5cbiAgLyoqXG4gICAqIFJlZnJlc2ggdG9rZW4gKHNldCBuZXcgZXhwaXJhdGlvbiB0aW1lKSBhbmQgYXNzb2NpYXRlIHdpdGggbmV3IGFjY291bnQgaWYgcmVxdWlyZWRcbiAgICogQFJldHVybjogRW50aXR5UmVzcG9uc2U8TG9naW5EYXRhPlxuICAgKi9cbiAgcmVmcmVzaFRva2VuKCkge1xuICAgIHJldHVybiB0aGlzLnJlc3QucG9zdChgJHt0aGlzLmJhc2VVcmx9L3JlZnJlc2gtdG9rZW5gLCBudWxsKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBWZXJpZnkgdXNlciBieSB0ZW1wb3JhcnkgbG9naW4ga2V5XG4gICAqIEBSZXR1cm46IEVudGl0eVJlc3BvbnNlPFVzZXI+XG4gICAqL1xuICB2ZXJpZnlMb2dpbktleShrZXk/OiBzdHJpbmcpIHtcbiAgICBjb25zdCBwYXJhbXMgPSBuZXcgQXJyYXkoKTtcdFx0XG4gICAgaWYgKGtleSAhPSBudWxsKSB7IHBhcmFtcy5wdXNoKGBrZXk9JHtrZXl9YCk7IH1cblxuXHRcdHJldHVybiB0aGlzLnJlc3QuZ2V0KGAke3RoaXMuYmFzZVVybH0vbG9naW4vdmVyaWZ5YCwgLi4ucGFyYW1zKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBTZW5kIHZlcmlmaWNhdGlvbiBjb2RlIGJ5IGVtYWlsXG4gICAqIEBSZXR1cm46IEFjdGlvblJlc3BvbnNlXG4gICAqL1xuICBzZW5kVmVyaWZpY2F0aW9uQ29kZShib2R5Pzogc3RyaW5nKSB7XG4gICAgcmV0dXJuIHRoaXMucmVzdC5wb3N0KGAke3RoaXMuYmFzZVVybH0vdmVyaWZ5YCwgdHlwZW9mIGJvZHkgPT09ICdvYmplY3QnID8gSlNPTi5zdHJpbmdpZnkoYm9keSkgOiBib2R5KTtcbiAgfVxuXG4gIC8qKlxuICAgKiBWYWxpZGF0ZSB2ZXJpZmljYXRpb24gY29kZSBhbmQgcmVzZXQgcGFzc3dvcmRcbiAgICogQFJldHVybjogQWN0aW9uUmVzcG9uc2VcbiAgICovXG4gIHJlc2V0UGFzc3dvcmQoY29kZT86IHN0cmluZykge1xuICAgIHJldHVybiB0aGlzLnJlc3QucG9zdChgJHt0aGlzLmJhc2VVcmx9L3Jlc2V0LXBhc3N3b3JkYCwgdHlwZW9mIGNvZGUgPT09ICdvYmplY3QnID8gSlNPTi5zdHJpbmdpZnkoY29kZSkgOiBjb2RlKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBDaGFuZ2UgcGFzc3dvcmRcbiAgICogQFJldHVybjogQWN0aW9uUmVzcG9uc2VcbiAgICovXG4gIGNoYW5nZVBhc3N3b3JkKGJvZHk/OiBDaGFuZ2VQYXNzd29yZFJlcXVlc3QpIHtcbiAgICByZXR1cm4gdGhpcy5yZXN0LnBvc3QoYCR7dGhpcy5iYXNlVXJsfS9jaGFuZ2UtcGFzc3dvcmRgLCB0eXBlb2YgYm9keSA9PT0gJ29iamVjdCcgPyBKU09OLnN0cmluZ2lmeShib2R5KSA6IGJvZHkpO1xuICB9XG5cbiAgLyoqXG4gICAqIENoZWNrIGlmIHBhc3N3b3JkIHdhcyB1c2VkIGJlZm9yZSAoYWNjb3JkaW5nIHRvIHBhc3N3b3JkIHBvbGljeSlcbiAgICogQFJldHVybjogQWN0aW9uUmVzcG9uc2VcbiAgICovXG4gIGNoZWNrVW51c2VkUGFzc3dvcmQoYm9keT86IHN0cmluZykge1xuICAgIHJldHVybiB0aGlzLnJlc3QucG9zdChgJHt0aGlzLmJhc2VVcmx9L2NoZWNrLXBhc3N3b3JkYCwgdHlwZW9mIGJvZHkgPT09ICdvYmplY3QnID8gSlNPTi5zdHJpbmdpZnkoYm9keSkgOiBib2R5KTtcbiAgfVxuXG4gIC8qKlxuICAgKiBDaGFuZ2UgY3VycmVudCB1c2VyIG5hbWVcbiAgICogQFJldHVybjogQWN0aW9uUmVzcG9uc2VcbiAgICovXG4gIGNoYW5nZU5hbWUoYm9keT86IHN0cmluZykge1xuICAgIHJldHVybiB0aGlzLnJlc3QucHV0KGAke3RoaXMuYmFzZVVybH0vbmFtZWAsIHR5cGVvZiBib2R5ID09PSAnb2JqZWN0JyA/IEpTT04uc3RyaW5naWZ5KGJvZHkpIDogYm9keSk7XG4gIH1cblxuICAvKipcbiAgICogQ2hhbmdlIGN1cnJlbnQgdXNlciBtb2JpbGVcbiAgICogQFJldHVybjogQWN0aW9uUmVzcG9uc2VcbiAgICovXG4gIGNoYW5nZU1vYmlsZShib2R5Pzogc3RyaW5nKSB7XG4gICAgcmV0dXJuIHRoaXMucmVzdC5wdXQoYCR7dGhpcy5iYXNlVXJsfS9tb2JpbGVgLCB0eXBlb2YgYm9keSA9PT0gJ29iamVjdCcgPyBKU09OLnN0cmluZ2lmeShib2R5KSA6IGJvZHkpO1xuICB9XG5cbiAgLyoqXG4gICAqIFJlZnJlc2ggdG9rZW4gKHNldCBuZXcgZXhwaXJhdGlvbiB0aW1lKSBhbmQgYXNzb2NpYXRlIHdpdGggbmV3IGFjY291bnQgaWYgcmVxdWlyZWRcbiAgICogQFJldHVybjogRW50aXR5UmVzcG9uc2U8VXNlckFjY291bnRJbmZvPlxuICAgKi9cbiAgc3dpdGNoQWNjb3VudChib2R5PzogVG9rZW5SZXF1ZXN0KSB7XG4gICAgcmV0dXJuIHRoaXMucmVzdC5wb3N0KGAke3RoaXMuYmFzZVVybH0vc3dpdGNoLWFjY291bnRgLCB0eXBlb2YgYm9keSA9PT0gJ29iamVjdCcgPyBKU09OLnN0cmluZ2lmeShib2R5KSA6IGJvZHkpO1xuICB9XG5cbn1cbiJdfQ==