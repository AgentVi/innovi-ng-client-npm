import { __read, __spread } from "tslib";
import { Injectable, Inject } from '@angular/core';
import { RestUtil } from '../../utils/rest-util';
import { CoreConfig } from '../../config';
import * as i0 from "@angular/core";
import * as i1 from "../../utils/rest-util";
import * as i2 from "../../config";
/**
 * List of all key (API key + User token) related actions for system administrator only
 * @RequestHeader X-API-KEY The key to identify the application (portal)
 * @RequestHeader X-ACCESS-TOKEN The token to identify the logged-in user
 */
var SysKeysService = /** @class */ (function () {
    /**
     * Class constructor
     */
    function SysKeysService(config, rest) {
        this.config = config;
        this.rest = rest;
        // URL to web api
        this.baseUrl = '/sys/keys';
        this.baseUrl = this.config.api + this.baseUrl;
    }
    /**
     * Create new API key for specific application name
     * @Return: EntityResponse<ApiKey>
     */
    SysKeysService.prototype.create = function (body) {
        return this.rest.post(this.baseUrl + "/api-keys", typeof body === 'object' ? JSON.stringify(body) : body);
    };
    /**
     * Update API key for specific application name
     * @Return: EntityResponse<ApiKey>
     */
    SysKeysService.prototype.update = function (body) {
        return this.rest.put(this.baseUrl + "/api-keys", typeof body === 'object' ? JSON.stringify(body) : body);
    };
    /**
     * Change API Key version (rotate key)
     * @Return: EntityResponse<ApiKey>
     */
    SysKeysService.prototype.rotate = function (id) {
        return this.rest.put(this.baseUrl + "/api-keys/" + id + "/rotate", null);
    };
    /**
     * Delete API Key
     * @Return: ActionResponse
     */
    SysKeysService.prototype.delete = function (id) {
        return this.rest.delete(this.baseUrl + "/api-keys/" + id);
    };
    /**
     * Get single API Key by id
     * @Return: EntityResponse<ApiKey>
     */
    SysKeysService.prototype.get = function (id) {
        return this.rest.get(this.baseUrl + "/api-keys/" + id);
    };
    /**
     * Get list of all keys
     * @Return: EntitiesResponse<ApiKey>
     */
    SysKeysService.prototype.getAll = function () {
        return this.rest.get(this.baseUrl + "/api-keys");
    };
    /**
     * Enable key
     * @Return: EntityResponse<ApiKey>
     */
    SysKeysService.prototype.enable = function (id) {
        return this.rest.put(this.baseUrl + "/api-keys/" + id + "/enable", null);
    };
    /**
     * Disable key
     * @Return: EntityResponse<ApiKey>
     */
    SysKeysService.prototype.disable = function (id) {
        return this.rest.put(this.baseUrl + "/api-keys/" + id + "/disable", null);
    };
    /**
     * Create access token for the user in the specified account
     * @Return: ActionResponse
     */
    SysKeysService.prototype.createAccessToken = function (accountId, userId, ttl) {
        var _a;
        var params = new Array();
        if (accountId != null) {
            params.push("accountId=" + accountId);
        }
        if (userId != null) {
            params.push("userId=" + userId);
        }
        if (ttl != null) {
            params.push("ttl=" + ttl);
        }
        return (_a = this.rest).post.apply(_a, __spread([this.baseUrl + "/token", null], params));
    };
    /**
     * Create time limited password for user to access the API documentation
     * @Return: ActionResponse
     */
    SysKeysService.prototype.createTimedPassword = function (days, user) {
        var _a;
        var params = new Array();
        if (days != null) {
            params.push("days=" + days);
        }
        if (user != null) {
            params.push("user=" + user);
        }
        return (_a = this.rest).post.apply(_a, __spread([this.baseUrl + "/password", null], params));
    };
    /**
     * Get list of all resources
     * @Return: EntitiesResponse<StringKeyValue>
     */
    SysKeysService.prototype.getResources = function () {
        return this.rest.get(this.baseUrl + "/api-keys/resources");
    };
    /** @nocollapse */ SysKeysService.ɵfac = function SysKeysService_Factory(t) { return new (t || SysKeysService)(i0.ɵɵinject('config'), i0.ɵɵinject(i1.RestUtil)); };
    /** @nocollapse */ SysKeysService.ɵprov = i0.ɵɵdefineInjectable({ token: SysKeysService, factory: SysKeysService.ɵfac });
    return SysKeysService;
}());
export { SysKeysService };
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(SysKeysService, [{
        type: Injectable
    }], function () { return [{ type: i2.CoreConfig, decorators: [{
                type: Inject,
                args: ['config']
            }] }, { type: i1.RestUtil }]; }, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3lzS2V5c1NlcnZpY2UuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AYWdlbnR2aS9uZy1jb3JlLWxpYi8iLCJzb3VyY2VzIjpbImxpYi9zZXJ2aWNlcy9zeXNLZXlzU2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDbkQsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLHVCQUF1QixDQUFDO0FBQ2pELE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxjQUFjLENBQUM7Ozs7QUFLMUM7Ozs7R0FJRztBQUNIO0lBTUU7O09BRUc7SUFDSCx3QkFBc0MsTUFBa0IsRUFBVSxJQUFjO1FBQTFDLFdBQU0sR0FBTixNQUFNLENBQVk7UUFBVSxTQUFJLEdBQUosSUFBSSxDQUFVO1FBTmhGLGlCQUFpQjtRQUNULFlBQU8sR0FBRyxXQUFXLENBQUM7UUFNNUIsSUFBSSxDQUFDLE9BQU8sR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDLEdBQUcsR0FBRyxJQUFJLENBQUMsT0FBTyxDQUFDO0lBQ2hELENBQUM7SUFHRDs7O09BR0c7SUFDSCwrQkFBTSxHQUFOLFVBQU8sSUFBYTtRQUNsQixPQUFPLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFJLElBQUksQ0FBQyxPQUFPLGNBQVcsRUFBRSxPQUFPLElBQUksS0FBSyxRQUFRLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQzVHLENBQUM7SUFFRDs7O09BR0c7SUFDSCwrQkFBTSxHQUFOLFVBQU8sSUFBYTtRQUNsQixPQUFPLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFJLElBQUksQ0FBQyxPQUFPLGNBQVcsRUFBRSxPQUFPLElBQUksS0FBSyxRQUFRLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFD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QWQsY0FBYzt5QkFiM0I7Q0EySEMsQUEvR0QsSUErR0M7U0E5R1ksY0FBYztrREFBZCxjQUFjO2NBRDFCLFVBQVU7O3NCQVNJLE1BQU07dUJBQUMsUUFBUSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUsIEluamVjdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgUmVzdFV0aWwgfSBmcm9tICcuLi8uLi91dGlscy9yZXN0LXV0aWwnO1xuaW1wb3J0IHsgQ29yZUNvbmZpZyB9IGZyb20gJy4uLy4uL2NvbmZpZyc7XG5cbmltcG9ydCB7IEFwaUtleSB9IGZyb20gJy4uL2VudGl0aWVzL0FwaUtleSc7XG5cblxuLyoqXG4gKiBMaXN0IG9mIGFsbCBrZXkgKEFQSSBrZXkgKyBVc2VyIHRva2VuKSByZWxhdGVkIGFjdGlvbnMgZm9yIHN5c3RlbSBhZG1pbmlzdHJhdG9yIG9ubHlcbiAqIEBSZXF1ZXN0SGVhZGVyIFgtQVBJLUtFWSBUaGUga2V5IHRvIGlkZW50aWZ5IHRoZSBhcHBsaWNhdGlvbiAocG9ydGFsKVxuICogQFJlcXVlc3RIZWFkZXIgWC1BQ0NFU1MtVE9LRU4gVGhlIHRva2VuIHRvIGlkZW50aWZ5IHRoZSBsb2dnZWQtaW4gdXNlciBcbiAqL1xuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIFN5c0tleXNTZXJ2aWNlIHtcblxuICAvLyBVUkwgdG8gd2ViIGFwaVxuICBwcml2YXRlIGJhc2VVcmwgPSAnL3N5cy9rZXlzJztcblxuICAvKipcbiAgICogQ2xhc3MgY29uc3RydWN0b3JcbiAgICovXG4gIGNvbnN0cnVjdG9yKEBJbmplY3QoJ2NvbmZpZycpIHByaXZhdGUgY29uZmlnOiBDb3JlQ29uZmlnLCBwcml2YXRlIHJlc3Q6IFJlc3RVdGlsKSB7XG4gICAgdGhpcy5iYXNlVXJsID0gdGhpcy5jb25maWcuYXBpICsgdGhpcy5iYXNlVXJsO1xuICB9XG5cblxuICAvKipcbiAgICogQ3JlYXRlIG5ldyBBUEkga2V5IGZvciBzcGVjaWZpYyBhcHBsaWNhdGlvbiBuYW1lXG4gICAqIEBSZXR1cm46IEVudGl0eVJlc3BvbnNlPEFwaUtleT5cbiAgICovXG4gIGNyZWF0ZShib2R5PzogQXBpS2V5KSB7XG4gICAgcmV0dXJuIHRoaXMucmVzdC5wb3N0KGAke3RoaXMuYmFzZVVybH0vYXBpLWtleXNgLCB0eXBlb2YgYm9keSA9PT0gJ29iamVjdCcgPyBKU09OLnN0cmluZ2lmeShib2R5KSA6IGJvZHkpO1xuICB9XG5cbiAgLyoqXG4gICAqIFVwZGF0ZSBBUEkga2V5IGZvciBzcGVjaWZpYyBhcHBsaWNhdGlvbiBuYW1lXG4gICAqIEBSZXR1cm46IEVudGl0eVJlc3BvbnNlPEFwaUtleT5cbiAgICovXG4gIHVwZGF0ZShib2R5PzogQXBpS2V5KSB7XG4gICAgcmV0dXJuIHRoaXMucmVzdC5wdXQoYCR7dGhpcy5iYXNlVXJsfS9hcGkta2V5c2AsIHR5cGVvZiBib2R5ID09PSAnb2JqZWN0JyA/IEpTT04uc3RyaW5naWZ5KGJvZHkpIDogYm9keSk7XG4gIH1cblxuICAvKipcbiAgICogQ2hhbmdlIEFQSSBLZXkgdmVyc2lvbiAocm90YXRlIGtleSlcbiAgICogQFJldHVybjogRW50aXR5UmVzcG9uc2U8QXBpS2V5PlxuICAgKi9cbiAgcm90YXRlKGlkPzogc3RyaW5nKSB7XG4gICAgcmV0dXJuIHRoaXMucmVzdC5wdXQoYCR7dGhpcy5iYXNlVXJsfS9hcGkta2V5cy8ke2lkfS9yb3RhdGVgLCBudWxsKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBEZWxldGUgQVBJIEtleVxuICAgKiBAUmV0dXJuOiBBY3Rpb25SZXNwb25zZVxuICAgKi9cbiAgZGVsZXRlKGlkPzogc3RyaW5nKSB7XG4gICAgcmV0dXJuIHRoaXMucmVzdC5kZWxldGUoYCR7dGhpcy5iYXNlVXJsfS9hcGkta2V5cy8ke2lkfWApO1xuICB9XG5cbiAgLyoqXG4gICAqIEdldCBzaW5nbGUgQVBJIEtleSBieSBpZFxuICAgKiBAUmV0dXJuOiBFbnRpdHlSZXNwb25zZTxBcGlLZXk+XG4gICAqL1xuICBnZXQoaWQ/OiBzdHJpbmcpIHtcbiAgICByZXR1cm4gdGhpcy5yZXN0LmdldChgJHt0aGlzLmJhc2VVcmx9L2FwaS1rZXlzLyR7aWR9YCk7XG4gIH1cblxuICAvKipcbiAgICogR2V0IGxpc3Qgb2YgYWxsIGtleXNcbiAgICogQFJldHVybjogRW50aXRpZXNSZXNwb25zZTxBcGlLZXk+XG4gICAqL1xuICBnZXRBbGwoKSB7XG4gICAgcmV0dXJuIHRoaXMucmVzdC5nZXQoYCR7dGhpcy5iYXNlVXJsfS9hcGkta2V5c2ApO1xuICB9XG5cbiAgLyoqXG4gICAqIEVuYWJsZSBrZXlcbiAgICogQFJldHVybjogRW50aXR5UmVzcG9uc2U8QXBpS2V5PlxuICAgKi9cbiAgZW5hYmxlKGlkPzogc3RyaW5nKSB7XG4gICAgcmV0dXJuIHRoaXMucmVzdC5wdXQoYCR7dGhpcy5iYXNlVXJsfS9hcGkta2V5cy8ke2lkfS9lbmFibGVgLCBudWxsKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBEaXNhYmxlIGtleVxuICAgKiBAUmV0dXJuOiBFbnRpdHlSZXNwb25zZTxBcGlLZXk+XG4gICAqL1xuICBkaXNhYmxlKGlkPzogc3RyaW5nKSB7XG4gICAgcmV0dXJuIHRoaXMucmVzdC5wdXQoYCR7dGhpcy5iYXNlVXJsfS9hcGkta2V5cy8ke2lkfS9kaXNhYmxlYCwgbnVsbCk7XG4gIH1cblxuICAvKipcbiAgICogQ3JlYXRlIGFjY2VzcyB0b2tlbiBmb3IgdGhlIHVzZXIgaW4gdGhlIHNwZWNpZmllZCBhY2NvdW50XG4gICAqIEBSZXR1cm46IEFjdGlvblJlc3BvbnNlXG4gICAqL1xuICBjcmVhdGVBY2Nlc3NUb2tlbihhY2NvdW50SWQ/OiBzdHJpbmcsIHVzZXJJZD86IHN0cmluZywgdHRsPzogbnVtYmVyKSB7XG4gICAgY29uc3QgcGFyYW1zID0gbmV3IEFycmF5KCk7XHRcdFxuICAgIGlmIChhY2NvdW50SWQgIT0gbnVsbCkgeyBwYXJhbXMucHVzaChgYWNjb3VudElkPSR7YWNjb3VudElkfWApOyB9XG4gICAgaWYgKHVzZXJJZCAhPSBudWxsKSB7IHBhcmFtcy5wdXNoKGB1c2VySWQ9JHt1c2VySWR9YCk7IH1cbiAgICBpZiAodHRsICE9IG51bGwpIHsgcGFyYW1zLnB1c2goYHR0bD0ke3R0bH1gKTsgfVxuXG5cdFx0cmV0dXJuIHRoaXMucmVzdC5wb3N0KGAke3RoaXMuYmFzZVVybH0vdG9rZW5gLCBudWxsLCAuLi5wYXJhbXMpO1xuICB9XG5cbiAgLyoqXG4gICAqIENyZWF0ZSB0aW1lIGxpbWl0ZWQgcGFzc3dvcmQgZm9yIHVzZXIgdG8gYWNjZXNzIHRoZSBBUEkgZG9jdW1lbnRhdGlvblxuICAgKiBAUmV0dXJuOiBBY3Rpb25SZXNwb25zZVxuICAgKi9cbiAgY3JlYXRlVGltZWRQYXNzd29yZChkYXlzPzogbnVtYmVyLCB1c2VyPzogc3RyaW5nKSB7XG4gICAgY29uc3QgcGFyYW1zID0gbmV3IEFycmF5KCk7XHRcdFxuICAgIGlmIChkYXlzICE9IG51bGwpIHsgcGFyYW1zLnB1c2goYGRheXM9JHtkYXlzfWApOyB9XG4gICAgaWYgKHVzZXIgIT0gbnVsbCkgeyBwYXJhbXMucHVzaChgdXNlcj0ke3VzZXJ9YCk7IH1cblxuXHRcdHJldHVybiB0aGlzLnJlc3QucG9zdChgJHt0aGlzLmJhc2VVcmx9L3Bhc3N3b3JkYCwgbnVsbCwgLi4ucGFyYW1zKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBHZXQgbGlzdCBvZiBhbGwgcmVzb3VyY2VzXG4gICAqIEBSZXR1cm46IEVudGl0aWVzUmVzcG9uc2U8U3RyaW5nS2V5VmFsdWU+XG4gICAqL1xuICBnZXRSZXNvdXJjZXMoKSB7XG4gICAgcmV0dXJuIHRoaXMucmVzdC5nZXQoYCR7dGhpcy5iYXNlVXJsfS9hcGkta2V5cy9yZXNvdXJjZXNgKTtcbiAgfVxuXG59XG4iXX0=