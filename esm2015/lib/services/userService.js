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
    /**
     * Mark the user who accepted the EULA agreement
     * @Return: ActionResponse
     */
    acceptEula() {
        return this.rest.put(`${this.baseUrl}/accept-eula`, null);
    }
}
/** @nocollapse */ UserService.ɵfac = function UserService_Factory(t) { return new (t || UserService)(i0.ɵɵinject('config'), i0.ɵɵinject(i1.RestUtil)); };
/** @nocollapse */ UserService.ɵprov = /** @pureOrBreakMyCode */ i0.ɵɵdefineInjectable({ token: UserService, factory: UserService.ɵfac });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(UserService, [{
        type: Injectable
    }], function () { return [{ type: i2.CoreConfig, decorators: [{
                type: Inject,
                args: ['config']
            }] }, { type: i1.RestUtil }]; }, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXNlclNlcnZpY2UuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9uZy1jb3JlLWxpYi9zcmMvbGliL3NlcnZpY2VzL3VzZXJTZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ25ELE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSx1QkFBdUIsQ0FBQztBQUNqRCxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sY0FBYyxDQUFDOzs7O0FBTzFDOztHQUVHO0FBRUgsTUFBTSxPQUFPLFdBQVc7SUFLdEI7O09BRUc7SUFDSCxZQUFzQyxNQUFrQixFQUFVLElBQWM7UUFBMUMsV0FBTSxHQUFOLE1BQU0sQ0FBWTtRQUFVLFNBQUksR0FBSixJQUFJLENBQVU7UUFOaEYsaUJBQWlCO1FBQ1QsWUFBTyxHQUFHLE9BQU8sQ0FBQztRQU14QixJQUFJLENBQUMsT0FBTyxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUMsR0FBRyxHQUFHLElBQUksQ0FBQyxPQUFPLENBQUM7SUFDaEQsQ0FBQztJQUdEOzs7O09BSUc7SUFDSCxLQUFLLENBQUMsSUFBa0I7UUFDdEIsT0FBTyxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLElBQUksQ0FBQyxPQUFPLFFBQVEsRUFBRSxPQUFPLElBQUksS0FBSyxRQUFRLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQ3pHLENBQUM7SUFFRDs7O09BR0c7SUFDSCxZQUFZO1FBQ1YsT0FBTyxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLElBQUksQ0FBQyxPQUFPLGdCQUFnQixFQUFFLElBQUksQ0FBQyxDQUFDO0lBQy9ELENBQUM7SUFFRDs7O09BR0c7SUFDSCxjQUFjLENBQUMs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QUUsSUFBSSxDQUFDLENBQUM7SUFDNUQsQ0FBQzs7eUZBdkdVLFdBQVcsY0FRRixRQUFRO2dHQVJqQixXQUFXLFdBQVgsV0FBVzt1RkFBWCxXQUFXO2NBRHZCLFVBQVU7O3NCQVNJLE1BQU07dUJBQUMsUUFBUSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUsIEluamVjdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgUmVzdFV0aWwgfSBmcm9tICcuLi8uLi91dGlscy9yZXN0LXV0aWwnO1xuaW1wb3J0IHsgQ29yZUNvbmZpZyB9IGZyb20gJy4uLy4uL2NvbmZpZyc7XG5cbmltcG9ydCB7IENoYW5nZVBhc3N3b3JkUmVxdWVzdCB9IGZyb20gJy4uL21lc3NhZ2VzL0NoYW5nZVBhc3N3b3JkUmVxdWVzdCc7XG5pbXBvcnQgeyBTd2l0Y2hBY2NvdW50UmVxdWVzdCB9IGZyb20gJy4uL21lc3NhZ2VzL1N3aXRjaEFjY291bnRSZXF1ZXN0JztcbmltcG9ydCB7IExvZ2luUGFyYW1zIH0gZnJvbSAnLi4vY29tbW9uL0xvZ2luUGFyYW1zJztcblxuXG4vKipcbiAqIFNlcnZpY2VzIGZvciB1c2VyIHJlZ2lzdHJhdGlvbiBhbmQgbG9naW4gXG4gKi9cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBVc2VyU2VydmljZSB7XG5cbiAgLy8gVVJMIHRvIHdlYiBhcGlcbiAgcHJpdmF0ZSBiYXNlVXJsID0gJy91c2VyJztcblxuICAvKipcbiAgICogQ2xhc3MgY29uc3RydWN0b3JcbiAgICovXG4gIGNvbnN0cnVjdG9yKEBJbmplY3QoJ2NvbmZpZycpIHByaXZhdGUgY29uZmlnOiBDb3JlQ29uZmlnLCBwcml2YXRlIHJlc3Q6IFJlc3RVdGlsKSB7XG4gICAgdGhpcy5iYXNlVXJsID0gdGhpcy5jb25maWcuYXBpICsgdGhpcy5iYXNlVXJsO1xuICB9XG5cblxuICAvKipcbiAgICogTG9naW4gdG8gdGhlIHN5c3RlbSB3aXRoIHVzZXIgZW1haWwgYW5kIHBhc3N3b3JkXG4gICAqIFRoZSByZXNwb25zZSBpbmNsdWRlcyBhY2Nlc3MgdG9rZW4gdmFsaWQgZm9yIDIwIG1pbnV0ZXMuIFRoZSBjbGllbnQgc2lkZSBzaG91bGQgcmVuZXcgdGhlIHRva2VuIGJlZm9yZSBleHBpcmF0aW9uIHVzaW5nIHJlZnJlc2gtdG9rZW4gbWV0aG9kXG4gICAqIEBSZXR1cm46IEVudGl0eVJlc3BvbnNlPExvZ2luRGF0YT5cbiAgICovXG4gIGxvZ2luKGJvZHk/OiBMb2dpblBhcmFtcykge1xuICAgIHJldHVybiB0aGlzLnJlc3QucG9zdChgJHt0aGlzLmJhc2VVcmx9L2xvZ2luYCwgdHlwZW9mIGJvZHkgPT09ICdvYmplY3QnID8gSlNPTi5zdHJpbmdpZnkoYm9keSkgOiBib2R5KTtcbiAgfVxuXG4gIC8qKlxuICAgKiBSZWZyZXNoIHRva2VuIChzZXQgbmV3IGV4cGlyYXRpb24gdGltZSkgYW5kIGFzc29jaWF0ZSB3aXRoIG5ldyBhY2NvdW50IGlmIHJlcXVpcmVkXG4gICAqIEBSZXR1cm46IEVudGl0eVJlc3BvbnNlPExvZ2luRGF0YT5cbiAgICovXG4gIHJlZnJlc2hUb2tlbigpIHtcbiAgICByZXR1cm4gdGhpcy5yZXN0LnBvc3QoYCR7dGhpcy5iYXNlVXJsfS9yZWZyZXNoLXRva2VuYCwgbnVsbCk7XG4gIH1cblxuICAvKipcbiAgICogVmVyaWZ5IHVzZXIgYnkgdGVtcG9yYXJ5IGxvZ2luIGtleVxuICAgKiBAUmV0dXJuOiBFbnRpdHlSZXNwb25zZTxVc2VyPlxuICAgKi9cbiAgdmVyaWZ5TG9naW5LZXkoa2V5Pzogc3RyaW5nKSB7XG4gICAgY29uc3QgcGFyYW1zID0gbmV3IEFycmF5KCk7XHRcdFxuICAgIGlmIChrZXkgIT0gbnVsbCkgeyBwYXJhbXMucHVzaChga2V5PSR7a2V5fWApOyB9XG5cblx0XHRyZXR1cm4gdGhpcy5yZXN0LmdldChgJHt0aGlzLmJhc2VVcmx9L2xvZ2luL3ZlcmlmeWAsIC4uLnBhcmFtcyk7XG4gIH1cblxuICAvKipcbiAgICogU2VuZCB2ZXJpZmljYXRpb24gY29kZSBieSBlbWFpbFxuICAgKiBAUmV0dXJuOiBBY3Rpb25SZXNwb25zZVxuICAgKi9cbiAgc2VuZFZlcmlmaWNhdGlvbkNvZGUoYm9keT86IHN0cmluZykge1xuICAgIHJldHVybiB0aGlzLnJlc3QucG9zdChgJHt0aGlzLmJhc2VVcmx9L3ZlcmlmeWAsIHR5cGVvZiBib2R5ID09PSAnb2JqZWN0JyA/IEpTT04uc3RyaW5naWZ5KGJvZHkpIDogYm9keSk7XG4gIH1cblxuICAvKipcbiAgICogVmFsaWRhdGUgdmVyaWZpY2F0aW9uIGNvZGUgYW5kIHJlc2V0IHBhc3N3b3JkXG4gICAqIEBSZXR1cm46IEFjdGlvblJlc3BvbnNlXG4gICAqL1xuICByZXNldFBhc3N3b3JkKGNvZGU/OiBzdHJpbmcpIHtcbiAgICByZXR1cm4gdGhpcy5yZXN0LnBvc3QoYCR7dGhpcy5iYXNlVXJsfS9yZXNldC1wYXNzd29yZGAsIHR5cGVvZiBjb2RlID09PSAnb2JqZWN0JyA/IEpTT04uc3RyaW5naWZ5KGNvZGUpIDogY29kZSk7XG4gIH1cblxuICAvKipcbiAgICogQ2hhbmdlIHBhc3N3b3JkXG4gICAqIEBSZXR1cm46IEFjdGlvblJlc3BvbnNlXG4gICAqL1xuICBjaGFuZ2VQYXNzd29yZChib2R5PzogQ2hhbmdlUGFzc3dvcmRSZXF1ZXN0KSB7XG4gICAgcmV0dXJuIHRoaXMucmVzdC5wb3N0KGAke3RoaXMuYmFzZVVybH0vY2hhbmdlLXBhc3N3b3JkYCwgdHlwZW9mIGJvZHkgPT09ICdvYmplY3QnID8gSlNPTi5zdHJpbmdpZnkoYm9keSkgOiBib2R5KTtcbiAgfVxuXG4gIC8qKlxuICAgKiBDaGVjayBpZiBwYXNzd29yZCB3YXMgdXNlZCBiZWZvcmUgKGFjY29yZGluZyB0byBwYXNzd29yZCBwb2xpY3kpXG4gICAqIEBSZXR1cm46IEFjdGlvblJlc3BvbnNlXG4gICAqL1xuICBjaGVja1VudXNlZFBhc3N3b3JkKGJvZHk/OiBzdHJpbmcpIHtcbiAgICByZXR1cm4gdGhpcy5yZXN0LnBvc3QoYCR7dGhpcy5iYXNlVXJsfS9jaGVjay1wYXNzd29yZGAsIHR5cGVvZiBib2R5ID09PSAnb2JqZWN0JyA/IEpTT04uc3RyaW5naWZ5KGJvZHkpIDogYm9keSk7XG4gIH1cblxuICAvKipcbiAgICogQ2hhbmdlIGN1cnJlbnQgdXNlciBuYW1lXG4gICAqIEBSZXR1cm46IEFjdGlvblJlc3BvbnNlXG4gICAqL1xuICBjaGFuZ2VOYW1lKGJvZHk/OiBzdHJpbmcpIHtcbiAgICByZXR1cm4gdGhpcy5yZXN0LnB1dChgJHt0aGlzLmJhc2VVcmx9L25hbWVgLCB0eXBlb2YgYm9keSA9PT0gJ29iamVjdCcgPyBKU09OLnN0cmluZ2lmeShib2R5KSA6IGJvZHkpO1xuICB9XG5cbiAgLyoqXG4gICAqIENoYW5nZSBjdXJyZW50IHVzZXIgbW9iaWxlXG4gICAqIEBSZXR1cm46IEFjdGlvblJlc3BvbnNlXG4gICAqL1xuICBjaGFuZ2VNb2JpbGUoYm9keT86IHN0cmluZykge1xuICAgIHJldHVybiB0aGlzLnJlc3QucHV0KGAke3RoaXMuYmFzZVVybH0vbW9iaWxlYCwgdHlwZW9mIGJvZHkgPT09ICdvYmplY3QnID8gSlNPTi5zdHJpbmdpZnkoYm9keSkgOiBib2R5KTtcbiAgfVxuXG4gIC8qKlxuICAgKiBSZWZyZXNoIHRva2VuIChzZXQgbmV3IGV4cGlyYXRpb24gdGltZSkgYW5kIGFzc29jaWF0ZSB3aXRoIG5ldyBhY2NvdW50IGlmIHJlcXVpcmVkXG4gICAqIEBSZXR1cm46IEVudGl0eVJlc3BvbnNlPFVzZXJBY2NvdW50SW5mbz5cbiAgICovXG4gIHN3aXRjaEFjY291bnQoYm9keT86IFN3aXRjaEFjY291bnRSZXF1ZXN0KSB7XG4gICAgcmV0dXJuIHRoaXMucmVzdC5wb3N0KGAke3RoaXMuYmFzZVVybH0vc3dpdGNoLWFjY291bnRgLCB0eXBlb2YgYm9keSA9PT0gJ29iamVjdCcgPyBKU09OLnN0cmluZ2lmeShib2R5KSA6IGJvZHkpO1xuICB9XG5cbiAgLyoqXG4gICAqIE1hcmsgdGhlIHVzZXIgd2hvIGFjY2VwdGVkIHRoZSBFVUxBIGFncmVlbWVudFxuICAgKiBAUmV0dXJuOiBBY3Rpb25SZXNwb25zZVxuICAgKi9cbiAgYWNjZXB0RXVsYSgpIHtcbiAgICByZXR1cm4gdGhpcy5yZXN0LnB1dChgJHt0aGlzLmJhc2VVcmx9L2FjY2VwdC1ldWxhYCwgbnVsbCk7XG4gIH1cblxufVxuIl19