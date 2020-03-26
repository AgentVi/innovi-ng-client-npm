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
     * Update Bulk of API keys
     * @Return: ActionResponse
     */
    SysKeysService.prototype.updateBulk = function (body) {
        return this.rest.put(this.baseUrl + "/api-keys/bulk", typeof body === 'object' ? JSON.stringify(body) : body);
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3lzS2V5c1NlcnZpY2UuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AYWdlbnR2aS9uZy1jb3JlLWxpYi8iLCJzb3VyY2VzIjpbImxpYi9zZXJ2aWNlcy9zeXNLZXlzU2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDbkQsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLHVCQUF1QixDQUFDO0FBQ2pELE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxjQUFjLENBQUM7Ozs7QUFLMUM7Ozs7R0FJRztBQUNIO0lBTUU7O09BRUc7SUFDSCx3QkFBc0MsTUFBa0IsRUFBVSxJQUFjO1FBQTFDLFdBQU0sR0FBTixNQUFNLENBQVk7UUFBVSxTQUFJLEdBQUosSUFBSSxDQUFVO1FBTmhGLGlCQUFpQjtRQUNULFlBQU8sR0FBRyxXQUFXLENBQUM7UUFNNUIsSUFBSSxDQUFDLE9BQU8sR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDLEdBQUcsR0FBRyxJQUFJLENBQUMsT0FBTyxDQUFDO0lBQ2hELENBQUM7SUFHRDs7O09BR0c7SUFDSCwrQkFBTSxHQUFOLFVBQU8sSUFBYTtRQUNsQixPQUFPLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFJLElBQUksQ0FBQyxPQUFPLGNBQVcsRUFBRSxPQUFPLElBQUksS0FBSyxRQUFRLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQzVHLENBQUM7SUFFRDs7O09BR0c7SUFDSCwrQkFBTSxHQUFOLFVBQU8sSUFBYTtRQUNsQixPQUFPLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFJLElBQUksQ0FBQyxPQUFPLGNBQVcsRUFBRSxPQUFPLElBQUksS0FBSyxRQUFRLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFD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QUkscUJBQUksSUFBSSxDQUFDLE9BQU8sY0FBVyxFQUFFLElBQUksR0FBSyxNQUFNLEdBQUU7SUFDbkUsQ0FBQztJQUVEOzs7T0FHRztJQUNILHFDQUFZLEdBQVo7UUFDRSxPQUFPLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFJLElBQUksQ0FBQyxPQUFPLHdCQUFxQixDQUFDLENBQUM7SUFDN0QsQ0FBQztnRkFwSFUsY0FBYyxjQVFMLFFBQVE7MERBUmpCLGNBQWMsV0FBZCxjQUFjO3lCQWIzQjtDQW1JQyxBQXZIRCxJQXVIQztTQXRIWSxjQUFjO2tEQUFkLGNBQWM7Y0FEMUIsVUFBVTs7c0JBU0ksTUFBTTt1QkFBQyxRQUFRIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSwgSW5qZWN0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBSZXN0VXRpbCB9IGZyb20gJy4uLy4uL3V0aWxzL3Jlc3QtdXRpbCc7XG5pbXBvcnQgeyBDb3JlQ29uZmlnIH0gZnJvbSAnLi4vLi4vY29uZmlnJztcblxuaW1wb3J0IHsgQXBpS2V5IH0gZnJvbSAnLi4vZW50aXRpZXMvQXBpS2V5JztcblxuXG4vKipcbiAqIExpc3Qgb2YgYWxsIGtleSAoQVBJIGtleSArIFVzZXIgdG9rZW4pIHJlbGF0ZWQgYWN0aW9ucyBmb3Igc3lzdGVtIGFkbWluaXN0cmF0b3Igb25seVxuICogQFJlcXVlc3RIZWFkZXIgWC1BUEktS0VZIFRoZSBrZXkgdG8gaWRlbnRpZnkgdGhlIGFwcGxpY2F0aW9uIChwb3J0YWwpXG4gKiBAUmVxdWVzdEhlYWRlciBYLUFDQ0VTUy1UT0tFTiBUaGUgdG9rZW4gdG8gaWRlbnRpZnkgdGhlIGxvZ2dlZC1pbiB1c2VyIFxuICovXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgU3lzS2V5c1NlcnZpY2Uge1xuXG4gIC8vIFVSTCB0byB3ZWIgYXBpXG4gIHByaXZhdGUgYmFzZVVybCA9ICcvc3lzL2tleXMnO1xuXG4gIC8qKlxuICAgKiBDbGFzcyBjb25zdHJ1Y3RvclxuICAgKi9cbiAgY29uc3RydWN0b3IoQEluamVjdCgnY29uZmlnJykgcHJpdmF0ZSBjb25maWc6IENvcmVDb25maWcsIHByaXZhdGUgcmVzdDogUmVzdFV0aWwpIHtcbiAgICB0aGlzLmJhc2VVcmwgPSB0aGlzLmNvbmZpZy5hcGkgKyB0aGlzLmJhc2VVcmw7XG4gIH1cblxuXG4gIC8qKlxuICAgKiBDcmVhdGUgbmV3IEFQSSBrZXkgZm9yIHNwZWNpZmljIGFwcGxpY2F0aW9uIG5hbWVcbiAgICogQFJldHVybjogRW50aXR5UmVzcG9uc2U8QXBpS2V5PlxuICAgKi9cbiAgY3JlYXRlKGJvZHk/OiBBcGlLZXkpIHtcbiAgICByZXR1cm4gdGhpcy5yZXN0LnBvc3QoYCR7dGhpcy5iYXNlVXJsfS9hcGkta2V5c2AsIHR5cGVvZiBib2R5ID09PSAnb2JqZWN0JyA/IEpTT04uc3RyaW5naWZ5KGJvZHkpIDogYm9keSk7XG4gIH1cblxuICAvKipcbiAgICogVXBkYXRlIEFQSSBrZXkgZm9yIHNwZWNpZmljIGFwcGxpY2F0aW9uIG5hbWVcbiAgICogQFJldHVybjogRW50aXR5UmVzcG9uc2U8QXBpS2V5PlxuICAgKi9cbiAgdXBkYXRlKGJvZHk/OiBBcGlLZXkpIHtcbiAgICByZXR1cm4gdGhpcy5yZXN0LnB1dChgJHt0aGlzLmJhc2VVcmx9L2FwaS1rZXlzYCwgdHlwZW9mIGJvZHkgPT09ICdvYmplY3QnID8gSlNPTi5zdHJpbmdpZnkoYm9keSkgOiBib2R5KTtcbiAgfVxuXG4gIC8qKlxuICAgKiBVcGRhdGUgQnVsayBvZiBBUEkga2V5c1xuICAgKiBAUmV0dXJuOiBBY3Rpb25SZXNwb25zZVxuICAgKi9cbiAgdXBkYXRlQnVsayhib2R5PzogQXBpS2V5W10pIHtcbiAgICByZXR1cm4gdGhpcy5yZXN0LnB1dChgJHt0aGlzLmJhc2VVcmx9L2FwaS1rZXlzL2J1bGtgLCB0eXBlb2YgYm9keSA9PT0gJ29iamVjdCcgPyBKU09OLnN0cmluZ2lmeShib2R5KSA6IGJvZHkpO1xuICB9XG5cbiAgLyoqXG4gICAqIENoYW5nZSBBUEkgS2V5IHZlcnNpb24gKHJvdGF0ZSBrZXkpXG4gICAqIEBSZXR1cm46IEVudGl0eVJlc3BvbnNlPEFwaUtleT5cbiAgICovXG4gIHJvdGF0ZShpZD86IHN0cmluZykge1xuICAgIHJldHVybiB0aGlzLnJlc3QucHV0KGAke3RoaXMuYmFzZVVybH0vYXBpLWtleXMvJHtpZH0vcm90YXRlYCwgbnVsbCk7XG4gIH1cblxuICAvKipcbiAgICogRGVsZXRlIEFQSSBLZXlcbiAgICogQFJldHVybjogQWN0aW9uUmVzcG9uc2VcbiAgICovXG4gIGRlbGV0ZShpZD86IHN0cmluZykge1xuICAgIHJldHVybiB0aGlzLnJlc3QuZGVsZXRlKGAke3RoaXMuYmFzZVVybH0vYXBpLWtleXMvJHtpZH1gKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBHZXQgc2luZ2xlIEFQSSBLZXkgYnkgaWRcbiAgICogQFJldHVybjogRW50aXR5UmVzcG9uc2U8QXBpS2V5PlxuICAgKi9cbiAgZ2V0KGlkPzogc3RyaW5nKSB7XG4gICAgcmV0dXJuIHRoaXMucmVzdC5nZXQoYCR7dGhpcy5iYXNlVXJsfS9hcGkta2V5cy8ke2lkfWApO1xuICB9XG5cbiAgLyoqXG4gICAqIEdldCBsaXN0IG9mIGFsbCBrZXlzXG4gICAqIEBSZXR1cm46IEVudGl0aWVzUmVzcG9uc2U8QXBpS2V5PlxuICAgKi9cbiAgZ2V0QWxsKCkge1xuICAgIHJldHVybiB0aGlzLnJlc3QuZ2V0KGAke3RoaXMuYmFzZVVybH0vYXBpLWtleXNgKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBFbmFibGUga2V5XG4gICAqIEBSZXR1cm46IEVudGl0eVJlc3BvbnNlPEFwaUtleT5cbiAgICovXG4gIGVuYWJsZShpZD86IHN0cmluZykge1xuICAgIHJldHVybiB0aGlzLnJlc3QucHV0KGAke3RoaXMuYmFzZVVybH0vYXBpLWtleXMvJHtpZH0vZW5hYmxlYCwgbnVsbCk7XG4gIH1cblxuICAvKipcbiAgICogRGlzYWJsZSBrZXlcbiAgICogQFJldHVybjogRW50aXR5UmVzcG9uc2U8QXBpS2V5PlxuICAgKi9cbiAgZGlzYWJsZShpZD86IHN0cmluZykge1xuICAgIHJldHVybiB0aGlzLnJlc3QucHV0KGAke3RoaXMuYmFzZVVybH0vYXBpLWtleXMvJHtpZH0vZGlzYWJsZWAsIG51bGwpO1xuICB9XG5cbiAgLyoqXG4gICAqIENyZWF0ZSBhY2Nlc3MgdG9rZW4gZm9yIHRoZSB1c2VyIGluIHRoZSBzcGVjaWZpZWQgYWNjb3VudFxuICAgKiBAUmV0dXJuOiBBY3Rpb25SZXNwb25zZVxuICAgKi9cbiAgY3JlYXRlQWNjZXNzVG9rZW4oYWNjb3VudElkPzogc3RyaW5nLCB1c2VySWQ/OiBzdHJpbmcsIHR0bD86IG51bWJlcikge1xuICAgIGNvbnN0IHBhcmFtcyA9IG5ldyBBcnJheSgpO1x0XHRcbiAgICBpZiAoYWNjb3VudElkICE9IG51bGwpIHsgcGFyYW1zLnB1c2goYGFjY291bnRJZD0ke2FjY291bnRJZH1gKTsgfVxuICAgIGlmICh1c2VySWQgIT0gbnVsbCkgeyBwYXJhbXMucHVzaChgdXNlcklkPSR7dXNlcklkfWApOyB9XG4gICAgaWYgKHR0bCAhPSBudWxsKSB7IHBhcmFtcy5wdXNoKGB0dGw9JHt0dGx9YCk7IH1cblxuXHRcdHJldHVybiB0aGlzLnJlc3QucG9zdChgJHt0aGlzLmJhc2VVcmx9L3Rva2VuYCwgbnVsbCwgLi4ucGFyYW1zKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBDcmVhdGUgdGltZSBsaW1pdGVkIHBhc3N3b3JkIGZvciB1c2VyIHRvIGFjY2VzcyB0aGUgQVBJIGRvY3VtZW50YXRpb25cbiAgICogQFJldHVybjogQWN0aW9uUmVzcG9uc2VcbiAgICovXG4gIGNyZWF0ZVRpbWVkUGFzc3dvcmQoZGF5cz86IG51bWJlciwgdXNlcj86IHN0cmluZykge1xuICAgIGNvbnN0IHBhcmFtcyA9IG5ldyBBcnJheSgpO1x0XHRcbiAgICBpZiAoZGF5cyAhPSBudWxsKSB7IHBhcmFtcy5wdXNoKGBkYXlzPSR7ZGF5c31gKTsgfVxuICAgIGlmICh1c2VyICE9IG51bGwpIHsgcGFyYW1zLnB1c2goYHVzZXI9JHt1c2VyfWApOyB9XG5cblx0XHRyZXR1cm4gdGhpcy5yZXN0LnBvc3QoYCR7dGhpcy5iYXNlVXJsfS9wYXNzd29yZGAsIG51bGwsIC4uLnBhcmFtcyk7XG4gIH1cblxuICAvKipcbiAgICogR2V0IGxpc3Qgb2YgYWxsIHJlc291cmNlc1xuICAgKiBAUmV0dXJuOiBFbnRpdGllc1Jlc3BvbnNlPFN0cmluZ0tleVZhbHVlPlxuICAgKi9cbiAgZ2V0UmVzb3VyY2VzKCkge1xuICAgIHJldHVybiB0aGlzLnJlc3QuZ2V0KGAke3RoaXMuYmFzZVVybH0vYXBpLWtleXMvcmVzb3VyY2VzYCk7XG4gIH1cblxufVxuIl19