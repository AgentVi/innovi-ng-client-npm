import { Injectable, Inject } from '@angular/core';
import { RestUtil } from '../../utils/rest-util';
import { CoreConfig } from '../../config';
import * as i0 from "@angular/core";
import * as i1 from "../../utils/rest-util";
import * as i2 from "../../config";
/**
 * Services for user registration and login
 */
export class UserService {
    /**
     * Class constructor
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
     * @Return: EntityResponse<LoginData>
     */
    login(body) {
        return this.rest.post(`${this.baseUrl}/login`, typeof body === 'object' ? JSON.stringify(body) : body);
    }
    /**
     * Refresh token (set new expiration time) and associate with new account if required
     * @Return: EntityResponse<LoginData>
     */
    refreshToken() {
        return this.rest.post(`${this.baseUrl}/refresh-token`, null);
    }
    /**
     * Verify user by temporary login key
     * @Return: EntityResponse<User>
     */
    verifyLoginKey(key) {
        const params = new Array();
        if (key != null) {
            params.push(`key=${key}`);
        }
        return this.rest.get(`${this.baseUrl}/login/verify`, ...params);
    }
    /**
     * Send verification code by email
     * @Return: ActionResponse
     */
    sendVerificationCode(body) {
        return this.rest.post(`${this.baseUrl}/verify`, typeof body === 'object' ? JSON.stringify(body) : body);
    }
    /**
     * Validate verification code and reset password
     * @Return: ActionResponse
     */
    resetPassword(code) {
        return this.rest.post(`${this.baseUrl}/reset-password`, typeof code === 'object' ? JSON.stringify(code) : code);
    }
    /**
     * Change password
     * @Return: ActionResponse
     */
    changePassword(body) {
        return this.rest.post(`${this.baseUrl}/change-password`, typeof body === 'object' ? JSON.stringify(body) : body);
    }
    /**
     * Check if password was used before (according to password policy)
     * @Return: ActionResponse
     */
    checkUnusedPassword(body) {
        return this.rest.post(`${this.baseUrl}/check-password`, typeof body === 'object' ? JSON.stringify(body) : body);
    }
    /**
     * Change current user name
     * @Return: ActionResponse
     */
    changeName(body) {
        return this.rest.put(`${this.baseUrl}/name`, typeof body === 'object' ? JSON.stringify(body) : body);
    }
    /**
     * Change current user mobile
     * @Return: ActionResponse
     */
    changeMobile(body) {
        return this.rest.put(`${this.baseUrl}/mobile`, typeof body === 'object' ? JSON.stringify(body) : body);
    }
    /**
     * Refresh token (set new expiration time) and associate with new account if required
     * @Return: EntityResponse<UserAccountInfo>
     */
    switchAccount(body) {
        return this.rest.post(`${this.baseUrl}/switch-account`, typeof body === 'object' ? JSON.stringify(body) : body);
    }
}
/** @nocollapse */ UserService.ɵfac = function UserService_Factory(t) { return new (t || UserService)(i0.ɵɵinject('config'), i0.ɵɵinject(i1.RestUtil)); };
/** @nocollapse */ UserService.ɵprov = i0.ɵɵdefineInjectable({ token: UserService, factory: UserService.ɵfac });
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(UserService, [{
        type: Injectable
    }], function () { return [{ type: i2.CoreConfig, decorators: [{
                type: Inject,
                args: ['config']
            }] }, { type: i1.RestUtil }]; }, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXNlclNlcnZpY2UuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AYWdlbnR2aS9uZy1jb3JlLWxpYi8iLCJzb3VyY2VzIjpbImxpYi9zZXJ2aWNlcy91c2VyU2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUNuRCxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sdUJBQXVCLENBQUM7QUFDakQsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGNBQWMsQ0FBQzs7OztBQU8xQzs7R0FFRztBQUVILE1BQU0sT0FBTyxXQUFXO0lBS3RCOztPQUVHO0lBQ0gsWUFBc0MsTUFBa0IsRUFBVSxJQUFjO1FBQTFDLFdBQU0sR0FBTixNQUFNLENBQVk7UUFBVSxTQUFJLEdBQUosSUFBSSxDQUFVO1FBTmhGLGlCQUFpQjtRQUNULFlBQU8sR0FBRyxPQUFPLENBQUM7UUFNeEIsSUFBSSxDQUFDLE9BQU8sR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDLEdBQUcsR0FBRyxJQUFJLENBQUMsT0FBTyxDQUFDO0lBQ2hELENBQUM7SUFHRDs7OztPQUlHO0lBQ0gsS0FBSyxDQUFDLElBQWtCO1FBQ3RCLE9BQU8sSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxJQUFJLENBQUMsT0FBTyxRQUFRLEVBQUUsT0FBTyxJQUFJLEtBQUssUUFBUSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUN6RyxDQUFDO0lBRUQ7OztPQUdHO0lBQ0gsWUFBWTtRQUNWLE9BQU8sSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxJQUFJLENBQUMsT0FBTyxnQkFBZ0IsRUFBRSxJQUFJLENBQUMsQ0FBQztJQUMvRCxDQUFDO0lBRUQ7OztPQUdHO0lBQ0gsY0FBYyxDQUFDLEdBQVk7UUFDekIsTUFB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ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUsIEluamVjdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgUmVzdFV0aWwgfSBmcm9tICcuLi8uLi91dGlscy9yZXN0LXV0aWwnO1xuaW1wb3J0IHsgQ29yZUNvbmZpZyB9IGZyb20gJy4uLy4uL2NvbmZpZyc7XG5cbmltcG9ydCB7IExvZ2luUGFyYW1zIH0gZnJvbSAnLi4vY29tbW9uL0xvZ2luUGFyYW1zJztcbmltcG9ydCB7IENoYW5nZVBhc3N3b3JkUmVxdWVzdCB9IGZyb20gJy4uL21lc3NhZ2VzL0NoYW5nZVBhc3N3b3JkUmVxdWVzdCc7XG5pbXBvcnQgeyBUb2tlblJlcXVlc3QgfSBmcm9tICcuLi9tZXNzYWdlcy9Ub2tlblJlcXVlc3QnO1xuXG5cbi8qKlxuICogU2VydmljZXMgZm9yIHVzZXIgcmVnaXN0cmF0aW9uIGFuZCBsb2dpbiBcbiAqL1xuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIFVzZXJTZXJ2aWNlIHtcblxuICAvLyBVUkwgdG8gd2ViIGFwaVxuICBwcml2YXRlIGJhc2VVcmwgPSAnL3VzZXInO1xuXG4gIC8qKlxuICAgKiBDbGFzcyBjb25zdHJ1Y3RvclxuICAgKi9cbiAgY29uc3RydWN0b3IoQEluamVjdCgnY29uZmlnJykgcHJpdmF0ZSBjb25maWc6IENvcmVDb25maWcsIHByaXZhdGUgcmVzdDogUmVzdFV0aWwpIHtcbiAgICB0aGlzLmJhc2VVcmwgPSB0aGlzLmNvbmZpZy5hcGkgKyB0aGlzLmJhc2VVcmw7XG4gIH1cblxuXG4gIC8qKlxuICAgKiBMb2dpbiB0byB0aGUgc3lzdGVtIHdpdGggdXNlciBlbWFpbCBhbmQgcGFzc3dvcmRcbiAgICogVGhlIHJlc3BvbnNlIGluY2x1ZGVzIGFjY2VzcyB0b2tlbiB2YWxpZCBmb3IgMjAgbWludXRlcy4gVGhlIGNsaWVudCBzaWRlIHNob3VsZCByZW5ldyB0aGUgdG9rZW4gYmVmb3JlIGV4cGlyYXRpb24gdXNpbmcgcmVmcmVzaC10b2tlbiBtZXRob2RcbiAgICogQFJldHVybjogRW50aXR5UmVzcG9uc2U8TG9naW5EYXRhPlxuICAgKi9cbiAgbG9naW4oYm9keT86IExvZ2luUGFyYW1zKSB7XG4gICAgcmV0dXJuIHRoaXMucmVzdC5wb3N0KGAke3RoaXMuYmFzZVVybH0vbG9naW5gLCB0eXBlb2YgYm9keSA9PT0gJ29iamVjdCcgPyBKU09OLnN0cmluZ2lmeShib2R5KSA6IGJvZHkpO1xuICB9XG5cbiAgLyoqXG4gICAqIFJlZnJlc2ggdG9rZW4gKHNldCBuZXcgZXhwaXJhdGlvbiB0aW1lKSBhbmQgYXNzb2NpYXRlIHdpdGggbmV3IGFjY291bnQgaWYgcmVxdWlyZWRcbiAgICogQFJldHVybjogRW50aXR5UmVzcG9uc2U8TG9naW5EYXRhPlxuICAgKi9cbiAgcmVmcmVzaFRva2VuKCkge1xuICAgIHJldHVybiB0aGlzLnJlc3QucG9zdChgJHt0aGlzLmJhc2VVcmx9L3JlZnJlc2gtdG9rZW5gLCBudWxsKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBWZXJpZnkgdXNlciBieSB0ZW1wb3JhcnkgbG9naW4ga2V5XG4gICAqIEBSZXR1cm46IEVudGl0eVJlc3BvbnNlPFVzZXI+XG4gICAqL1xuICB2ZXJpZnlMb2dpbktleShrZXk/OiBzdHJpbmcpIHtcbiAgICBjb25zdCBwYXJhbXMgPSBuZXcgQXJyYXkoKTtcdFx0XG4gICAgaWYgKGtleSAhPSBudWxsKSB7IHBhcmFtcy5wdXNoKGBrZXk9JHtrZXl9YCk7IH1cblxuXHRcdHJldHVybiB0aGlzLnJlc3QuZ2V0KGAke3RoaXMuYmFzZVVybH0vbG9naW4vdmVyaWZ5YCwgLi4ucGFyYW1zKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBTZW5kIHZlcmlmaWNhdGlvbiBjb2RlIGJ5IGVtYWlsXG4gICAqIEBSZXR1cm46IEFjdGlvblJlc3BvbnNlXG4gICAqL1xuICBzZW5kVmVyaWZpY2F0aW9uQ29kZShib2R5Pzogc3RyaW5nKSB7XG4gICAgcmV0dXJuIHRoaXMucmVzdC5wb3N0KGAke3RoaXMuYmFzZVVybH0vdmVyaWZ5YCwgdHlwZW9mIGJvZHkgPT09ICdvYmplY3QnID8gSlNPTi5zdHJpbmdpZnkoYm9keSkgOiBib2R5KTtcbiAgfVxuXG4gIC8qKlxuICAgKiBWYWxpZGF0ZSB2ZXJpZmljYXRpb24gY29kZSBhbmQgcmVzZXQgcGFzc3dvcmRcbiAgICogQFJldHVybjogQWN0aW9uUmVzcG9uc2VcbiAgICovXG4gIHJlc2V0UGFzc3dvcmQoY29kZT86IHN0cmluZykge1xuICAgIHJldHVybiB0aGlzLnJlc3QucG9zdChgJHt0aGlzLmJhc2VVcmx9L3Jlc2V0LXBhc3N3b3JkYCwgdHlwZW9mIGNvZGUgPT09ICdvYmplY3QnID8gSlNPTi5zdHJpbmdpZnkoY29kZSkgOiBjb2RlKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBDaGFuZ2UgcGFzc3dvcmRcbiAgICogQFJldHVybjogQWN0aW9uUmVzcG9uc2VcbiAgICovXG4gIGNoYW5nZVBhc3N3b3JkKGJvZHk/OiBDaGFuZ2VQYXNzd29yZFJlcXVlc3QpIHtcbiAgICByZXR1cm4gdGhpcy5yZXN0LnBvc3QoYCR7dGhpcy5iYXNlVXJsfS9jaGFuZ2UtcGFzc3dvcmRgLCB0eXBlb2YgYm9keSA9PT0gJ29iamVjdCcgPyBKU09OLnN0cmluZ2lmeShib2R5KSA6IGJvZHkpO1xuICB9XG5cbiAgLyoqXG4gICAqIENoZWNrIGlmIHBhc3N3b3JkIHdhcyB1c2VkIGJlZm9yZSAoYWNjb3JkaW5nIHRvIHBhc3N3b3JkIHBvbGljeSlcbiAgICogQFJldHVybjogQWN0aW9uUmVzcG9uc2VcbiAgICovXG4gIGNoZWNrVW51c2VkUGFzc3dvcmQoYm9keT86IHN0cmluZykge1xuICAgIHJldHVybiB0aGlzLnJlc3QucG9zdChgJHt0aGlzLmJhc2VVcmx9L2NoZWNrLXBhc3N3b3JkYCwgdHlwZW9mIGJvZHkgPT09ICdvYmplY3QnID8gSlNPTi5zdHJpbmdpZnkoYm9keSkgOiBib2R5KTtcbiAgfVxuXG4gIC8qKlxuICAgKiBDaGFuZ2UgY3VycmVudCB1c2VyIG5hbWVcbiAgICogQFJldHVybjogQWN0aW9uUmVzcG9uc2VcbiAgICovXG4gIGNoYW5nZU5hbWUoYm9keT86IHN0cmluZykge1xuICAgIHJldHVybiB0aGlzLnJlc3QucHV0KGAke3RoaXMuYmFzZVVybH0vbmFtZWAsIHR5cGVvZiBib2R5ID09PSAnb2JqZWN0JyA/IEpTT04uc3RyaW5naWZ5KGJvZHkpIDogYm9keSk7XG4gIH1cblxuICAvKipcbiAgICogQ2hhbmdlIGN1cnJlbnQgdXNlciBtb2JpbGVcbiAgICogQFJldHVybjogQWN0aW9uUmVzcG9uc2VcbiAgICovXG4gIGNoYW5nZU1vYmlsZShib2R5Pzogc3RyaW5nKSB7XG4gICAgcmV0dXJuIHRoaXMucmVzdC5wdXQoYCR7dGhpcy5iYXNlVXJsfS9tb2JpbGVgLCB0eXBlb2YgYm9keSA9PT0gJ29iamVjdCcgPyBKU09OLnN0cmluZ2lmeShib2R5KSA6IGJvZHkpO1xuICB9XG5cbiAgLyoqXG4gICAqIFJlZnJlc2ggdG9rZW4gKHNldCBuZXcgZXhwaXJhdGlvbiB0aW1lKSBhbmQgYXNzb2NpYXRlIHdpdGggbmV3IGFjY291bnQgaWYgcmVxdWlyZWRcbiAgICogQFJldHVybjogRW50aXR5UmVzcG9uc2U8VXNlckFjY291bnRJbmZvPlxuICAgKi9cbiAgc3dpdGNoQWNjb3VudChib2R5PzogVG9rZW5SZXF1ZXN0KSB7XG4gICAgcmV0dXJuIHRoaXMucmVzdC5wb3N0KGAke3RoaXMuYmFzZVVybH0vc3dpdGNoLWFjY291bnRgLCB0eXBlb2YgYm9keSA9PT0gJ29iamVjdCcgPyBKU09OLnN0cmluZ2lmeShib2R5KSA6IGJvZHkpO1xuICB9XG5cbn1cbiJdfQ==