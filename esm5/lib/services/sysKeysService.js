/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Injectable, Inject } from '@angular/core';
import { RestUtil } from '../../utils/rest-util';
import { CoreConfig } from '../../config';
/**
 * List of all key (API key + User token) related actions for system administrator only
 * \@RequestHeader X-API-KEY The key to identify the application (portal)
 * \@RequestHeader X-ACCESS-TOKEN The token to identify the logged-in user
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
    /**
     * Create new API key for specific application name
     * \@Return: EntityResponse<ApiKey>
     * @param {?=} body
     * @return {?}
     */
    SysKeysService.prototype.create = /**
     * Create new API key for specific application name
     * \@Return: EntityResponse<ApiKey>
     * @param {?=} body
     * @return {?}
     */
    function (body) {
        return this.rest.post(this.baseUrl + "/api-keys", typeof body === 'object' ? JSON.stringify(body) : body);
    };
    /**
     * Change API Key version (rotate key)
     * @Return: EntityResponse<ApiKey>
     */
    /**
     * Change API Key version (rotate key)
     * \@Return: EntityResponse<ApiKey>
     * @param {?=} id
     * @return {?}
     */
    SysKeysService.prototype.rotate = /**
     * Change API Key version (rotate key)
     * \@Return: EntityResponse<ApiKey>
     * @param {?=} id
     * @return {?}
     */
    function (id) {
        return this.rest.put(this.baseUrl + "/api-keys/" + id + "/rotate", null);
    };
    /**
     * Delete API Key
     * @Return: ActionResponse
     */
    /**
     * Delete API Key
     * \@Return: ActionResponse
     * @param {?=} id
     * @return {?}
     */
    SysKeysService.prototype.delete = /**
     * Delete API Key
     * \@Return: ActionResponse
     * @param {?=} id
     * @return {?}
     */
    function (id) {
        return this.rest.delete(this.baseUrl + "/api-keys/" + id);
    };
    /**
     * Get single API Key by id
     * @Return: EntityResponse<ApiKey>
     */
    /**
     * Get single API Key by id
     * \@Return: EntityResponse<ApiKey>
     * @param {?=} id
     * @return {?}
     */
    SysKeysService.prototype.get = /**
     * Get single API Key by id
     * \@Return: EntityResponse<ApiKey>
     * @param {?=} id
     * @return {?}
     */
    function (id) {
        return this.rest.get(this.baseUrl + "/api-keys/" + id);
    };
    /**
     * Get list of all keys
     * @Return: EntitiesResponse<ApiKey>
     */
    /**
     * Get list of all keys
     * \@Return: EntitiesResponse<ApiKey>
     * @return {?}
     */
    SysKeysService.prototype.getAll = /**
     * Get list of all keys
     * \@Return: EntitiesResponse<ApiKey>
     * @return {?}
     */
    function () {
        return this.rest.get(this.baseUrl + "/api-keys");
    };
    /**
     * Enable key
     * @Return: EntityResponse<ApiKey>
     */
    /**
     * Enable key
     * \@Return: EntityResponse<ApiKey>
     * @param {?=} id
     * @return {?}
     */
    SysKeysService.prototype.enable = /**
     * Enable key
     * \@Return: EntityResponse<ApiKey>
     * @param {?=} id
     * @return {?}
     */
    function (id) {
        return this.rest.put(this.baseUrl + "/api-keys/" + id + "/enable", null);
    };
    /**
     * Disable key
     * @Return: EntityResponse<ApiKey>
     */
    /**
     * Disable key
     * \@Return: EntityResponse<ApiKey>
     * @param {?=} id
     * @return {?}
     */
    SysKeysService.prototype.disable = /**
     * Disable key
     * \@Return: EntityResponse<ApiKey>
     * @param {?=} id
     * @return {?}
     */
    function (id) {
        return this.rest.put(this.baseUrl + "/api-keys/" + id + "/disable", null);
    };
    /**
     * Create access token for the user in the specified account
     * @Return: ActionResponse
     */
    /**
     * Create access token for the user in the specified account
     * \@Return: ActionResponse
     * @param {?=} accountId
     * @param {?=} userId
     * @param {?=} ttl
     * @return {?}
     */
    SysKeysService.prototype.createAccessToken = /**
     * Create access token for the user in the specified account
     * \@Return: ActionResponse
     * @param {?=} accountId
     * @param {?=} userId
     * @param {?=} ttl
     * @return {?}
     */
    function (accountId, userId, ttl) {
        var _a;
        /** @type {?} */
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
        return (_a = this.rest).post.apply(_a, tslib_1.__spread([this.baseUrl + "/token", null], params));
    };
    /**
     * Create time limited password for user to access the API documentation
     * @Return: ActionResponse
     */
    /**
     * Create time limited password for user to access the API documentation
     * \@Return: ActionResponse
     * @param {?=} days
     * @param {?=} user
     * @return {?}
     */
    SysKeysService.prototype.createTimedPassword = /**
     * Create time limited password for user to access the API documentation
     * \@Return: ActionResponse
     * @param {?=} days
     * @param {?=} user
     * @return {?}
     */
    function (days, user) {
        var _a;
        /** @type {?} */
        var params = new Array();
        if (days != null) {
            params.push("days=" + days);
        }
        if (user != null) {
            params.push("user=" + user);
        }
        return (_a = this.rest).post.apply(_a, tslib_1.__spread([this.baseUrl + "/password", null], params));
    };
    SysKeysService.decorators = [
        { type: Injectable }
    ];
    /** @nocollapse */
    SysKeysService.ctorParameters = function () { return [
        { type: CoreConfig, decorators: [{ type: Inject, args: ['config',] }] },
        { type: RestUtil }
    ]; };
    return SysKeysService;
}());
export { SysKeysService };
if (false) {
    /**
     * @type {?}
     * @private
     */
    SysKeysService.prototype.baseUrl;
    /**
     * @type {?}
     * @private
     */
    SysKeysService.prototype.config;
    /**
     * @type {?}
     * @private
     */
    SysKeysService.prototype.rest;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3lzS2V5c1NlcnZpY2UuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AYWdlbnR2aS9uZy1jb3JlLWxpYi8iLCJzb3VyY2VzIjpbImxpYi9zZXJ2aWNlcy9zeXNLZXlzU2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ25ELE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSx1QkFBdUIsQ0FBQztBQUNqRCxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sY0FBYyxDQUFDOzs7Ozs7QUFVMUM7SUFNRTs7T0FFRztJQUNILHdCQUFzQyxNQUFrQixFQUFVLElBQWM7UUFBMUMsV0FBTSxHQUFOLE1BQU0sQ0FBWTtRQUFVLFNBQUksR0FBSixJQUFJLENBQVU7O1FBTHhFLFlBQU8sR0FBRyxXQUFXLENBQUM7UUFNNUIsSUFBSSxDQUFDLE9BQU8sR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDLEdBQUcsR0FBRyxJQUFJLENBQUMsT0FBTyxDQUFDO0lBQ2hELENBQUM7SUFHRDs7O09BR0c7Ozs7Ozs7SUFDSCwrQkFBTTs7Ozs7O0lBQU4sVUFBTyxJQUFhO1FBQ2xCLE9BQU8sSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUksSUFBSSxDQUFDLE9BQU8sY0FBVyxFQUFFLE9BQU8sSUFBSSxLQUFLLFFBQVEsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDNUcsQ0FBQztJQUVEOzs7T0FHRzs7Ozs7OztJQUNILCtCQUFNOzs7Ozs7SUFBTixVQUFPLEVBQVc7UUFDaEIsT0FBTyxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBSSxJQUFJLENBQUMsT0FBTyxrQkFBYSxFQUFFLFlBQVMsRUFBRSxJQUFJLENBQUMsQ0FBQztJQUN0RSxDQUFDO0lBRUQ7OztPQUdHOzs7Ozs7O0lBQ0gsK0JBQU07Ozs7OztJQUFOLFVBQU8sRUFBVztRQUNoQixPQUFPLElBQUksQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFJLElBQUksQ0FBQyxPQUFPLGtCQUFhLEVBQUksQ0FBQyxDQUFDO0lBQzVELENBQUM7SUFFRDs7O09BR0c7Ozs7Ozs7SUFDSCw0QkFBRzs7Ozs7O0lBQUgsVUFBSSxFQUFXO1FBQ2IsT0FBTyxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBSSxJQUFJLENBQUMsT0FBTyxrQkFBYSxFQUFJLENBQUMsQ0FBQztJQUN6RCxDQUFDO0lBRUQ7OztPQUdHOzs7Ozs7SUFDSCwrQkFBTTs7Ozs7SUFBTjtRQUNFLE9BQU8sSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUksSUFBSSxDQUFDLE9BQU8sY0FBVyxDQUFDLENBQUM7SUFDbkQsQ0FBQztJQUVEOzs7T0FHRzs7Ozs7OztJQUNILCtCQUFNOzs7Ozs7SUFBTixVQUFPLEVBQVc7UUFDaEIsT0FBTyxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBSSxJQUFJLENBQUMsT0FBTyxrQkFBYSxFQUFFLFlBQVMsRUFBRSxJQUFJLENBQUMsQ0FBQztJQUN0RSxDQUFDO0lBRUQ7OztPQUdHOzs7Ozs7O0lBQ0gsZ0NBQU87Ozs7OztJQUFQLFVBQVEsRUFBVztRQUNqQixPQUFPLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFJLElBQUksQ0FBQyxPQUFPLGtCQUFhLEVBQUUsYUFBVSxFQUFFLElBQUksQ0FBQyxDQUFDO0lBQ3ZFLENBQUM7SUFFRDs7O09BR0c7Ozs7Ozs7OztJQUNILDBDQUFpQjs7Ozs7Ozs7SUFBakIsVUFBa0IsU0FBa0IsRUFBRSxNQUFlLEVBQUUsR0FBWTs7O1lBQzNELE1BQU0sR0FBRyxJQUFJLEtBQUssRUFBRTtRQUMxQixJQUFJLFNBQVMsSUFBSSxJQUFJLEVBQUU7WUFBRSxNQUFNLENBQUMsSUFBSSxDQUFDLGVBQWEsU0FBVyxDQUFDLENBQUM7U0FBRTtRQUNqRSxJQUFJLE1BQU0sSUFBSSxJQUFJLEVBQUU7WUFBRSxNQUFNLENBQUMsSUFBSSxDQUFDLFlBQVUsTUFBUSxDQUFDLENBQUM7U0FBRTtRQUN4RCxJQUFJLEdBQUcsSUFBSSxJQUFJLEVBQUU7WUFBRSxNQUFNLENBQUMsSUFBSSxDQUFDLFNBQU8sR0FBSyxDQUFDLENBQUM7U0FBRTtRQUVqRCxPQUFPLENBQUEsS0FBQSxJQUFJLENBQUMsSUFBSSxDQUFBLENBQUMsSUFBSSw2QkFBSSxJQUFJLENBQUMsT0FBTyxXQUFRLEVBQUUsSUFBSSxHQUFLLE1BQU0sR0FBRTtJQUNoRSxDQUFDO0lBRUQ7OztPQUdHOzs7Ozs7OztJQUNILDRDQUFtQjs7Ozs7OztJQUFuQixVQUFvQixJQUFhLEVBQUUsSUFBYTs7O1lBQ3hDLE1BQU0sR0FBRyxJQUFJLEtBQUssRUFBRTtRQUMxQixJQUFJLElBQUksSUFBSSxJQUFJLEVBQUU7WUFBRSxNQUFNLENBQUMsSUFBSSxDQUFDLFVBQVEsSUFBTSxDQUFDLENBQUM7U0FBRTtRQUNsRCxJQUFJLElBQUksSUFBSSxJQUFJLEVBQUU7WUFBRSxNQUFNLENBQUMsSUFBSSxDQUFDLFVBQVEsSUFBTSxDQUFDLENBQUM7U0FBRTtRQUVwRCxPQUFPLENBQUEsS0FBQSxJQUFJLENBQUMsSUFBSSxDQUFBLENBQUMsSUFBSSw2QkFBSSxJQUFJLENBQUMsT0FBTyxjQUFXLEVBQUUsSUFBSSxHQUFLLE1BQU0sR0FBRTtJQUNuRSxDQUFDOztnQkE3RkYsVUFBVTs7OztnQkFWRixVQUFVLHVCQW1CSixNQUFNLFNBQUMsUUFBUTtnQkFwQnJCLFFBQVE7O0lBMEdqQixxQkFBQztDQUFBLEFBL0ZELElBK0ZDO1NBOUZZLGNBQWM7Ozs7OztJQUd6QixpQ0FBOEI7Ozs7O0lBS2xCLGdDQUE0Qzs7Ozs7SUFBRSw4QkFBc0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlLCBJbmplY3QgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFJlc3RVdGlsIH0gZnJvbSAnLi4vLi4vdXRpbHMvcmVzdC11dGlsJztcbmltcG9ydCB7IENvcmVDb25maWcgfSBmcm9tICcuLi8uLi9jb25maWcnO1xuXG5pbXBvcnQgeyBBcGlLZXkgfSBmcm9tICcuLi9lbnRpdGllcy9BcGlLZXknO1xuXG5cbi8qKlxuICogTGlzdCBvZiBhbGwga2V5IChBUEkga2V5ICsgVXNlciB0b2tlbikgcmVsYXRlZCBhY3Rpb25zIGZvciBzeXN0ZW0gYWRtaW5pc3RyYXRvciBvbmx5XG4gKiBAUmVxdWVzdEhlYWRlciBYLUFQSS1LRVkgVGhlIGtleSB0byBpZGVudGlmeSB0aGUgYXBwbGljYXRpb24gKHBvcnRhbClcbiAqIEBSZXF1ZXN0SGVhZGVyIFgtQUNDRVNTLVRPS0VOIFRoZSB0b2tlbiB0byBpZGVudGlmeSB0aGUgbG9nZ2VkLWluIHVzZXIgXG4gKi9cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBTeXNLZXlzU2VydmljZSB7XG5cbiAgLy8gVVJMIHRvIHdlYiBhcGlcbiAgcHJpdmF0ZSBiYXNlVXJsID0gJy9zeXMva2V5cyc7XG5cbiAgLyoqXG4gICAqIENsYXNzIGNvbnN0cnVjdG9yXG4gICAqL1xuICBjb25zdHJ1Y3RvcihASW5qZWN0KCdjb25maWcnKSBwcml2YXRlIGNvbmZpZzogQ29yZUNvbmZpZywgcHJpdmF0ZSByZXN0OiBSZXN0VXRpbCkge1xuICAgIHRoaXMuYmFzZVVybCA9IHRoaXMuY29uZmlnLmFwaSArIHRoaXMuYmFzZVVybDtcbiAgfVxuXG5cbiAgLyoqXG4gICAqIENyZWF0ZSBuZXcgQVBJIGtleSBmb3Igc3BlY2lmaWMgYXBwbGljYXRpb24gbmFtZVxuICAgKiBAUmV0dXJuOiBFbnRpdHlSZXNwb25zZTxBcGlLZXk+XG4gICAqL1xuICBjcmVhdGUoYm9keT86IEFwaUtleSkge1xuICAgIHJldHVybiB0aGlzLnJlc3QucG9zdChgJHt0aGlzLmJhc2VVcmx9L2FwaS1rZXlzYCwgdHlwZW9mIGJvZHkgPT09ICdvYmplY3QnID8gSlNPTi5zdHJpbmdpZnkoYm9keSkgOiBib2R5KTtcbiAgfVxuXG4gIC8qKlxuICAgKiBDaGFuZ2UgQVBJIEtleSB2ZXJzaW9uIChyb3RhdGUga2V5KVxuICAgKiBAUmV0dXJuOiBFbnRpdHlSZXNwb25zZTxBcGlLZXk+XG4gICAqL1xuICByb3RhdGUoaWQ/OiBzdHJpbmcpIHtcbiAgICByZXR1cm4gdGhpcy5yZXN0LnB1dChgJHt0aGlzLmJhc2VVcmx9L2FwaS1rZXlzLyR7aWR9L3JvdGF0ZWAsIG51bGwpO1xuICB9XG5cbiAgLyoqXG4gICAqIERlbGV0ZSBBUEkgS2V5XG4gICAqIEBSZXR1cm46IEFjdGlvblJlc3BvbnNlXG4gICAqL1xuICBkZWxldGUoaWQ/OiBzdHJpbmcpIHtcbiAgICByZXR1cm4gdGhpcy5yZXN0LmRlbGV0ZShgJHt0aGlzLmJhc2VVcmx9L2FwaS1rZXlzLyR7aWR9YCk7XG4gIH1cblxuICAvKipcbiAgICogR2V0IHNpbmdsZSBBUEkgS2V5IGJ5IGlkXG4gICAqIEBSZXR1cm46IEVudGl0eVJlc3BvbnNlPEFwaUtleT5cbiAgICovXG4gIGdldChpZD86IHN0cmluZykge1xuICAgIHJldHVybiB0aGlzLnJlc3QuZ2V0KGAke3RoaXMuYmFzZVVybH0vYXBpLWtleXMvJHtpZH1gKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBHZXQgbGlzdCBvZiBhbGwga2V5c1xuICAgKiBAUmV0dXJuOiBFbnRpdGllc1Jlc3BvbnNlPEFwaUtleT5cbiAgICovXG4gIGdldEFsbCgpIHtcbiAgICByZXR1cm4gdGhpcy5yZXN0LmdldChgJHt0aGlzLmJhc2VVcmx9L2FwaS1rZXlzYCk7XG4gIH1cblxuICAvKipcbiAgICogRW5hYmxlIGtleVxuICAgKiBAUmV0dXJuOiBFbnRpdHlSZXNwb25zZTxBcGlLZXk+XG4gICAqL1xuICBlbmFibGUoaWQ/OiBzdHJpbmcpIHtcbiAgICByZXR1cm4gdGhpcy5yZXN0LnB1dChgJHt0aGlzLmJhc2VVcmx9L2FwaS1rZXlzLyR7aWR9L2VuYWJsZWAsIG51bGwpO1xuICB9XG5cbiAgLyoqXG4gICAqIERpc2FibGUga2V5XG4gICAqIEBSZXR1cm46IEVudGl0eVJlc3BvbnNlPEFwaUtleT5cbiAgICovXG4gIGRpc2FibGUoaWQ/OiBzdHJpbmcpIHtcbiAgICByZXR1cm4gdGhpcy5yZXN0LnB1dChgJHt0aGlzLmJhc2VVcmx9L2FwaS1rZXlzLyR7aWR9L2Rpc2FibGVgLCBudWxsKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBDcmVhdGUgYWNjZXNzIHRva2VuIGZvciB0aGUgdXNlciBpbiB0aGUgc3BlY2lmaWVkIGFjY291bnRcbiAgICogQFJldHVybjogQWN0aW9uUmVzcG9uc2VcbiAgICovXG4gIGNyZWF0ZUFjY2Vzc1Rva2VuKGFjY291bnRJZD86IHN0cmluZywgdXNlcklkPzogc3RyaW5nLCB0dGw/OiBudW1iZXIpIHtcbiAgICBjb25zdCBwYXJhbXMgPSBuZXcgQXJyYXkoKTtcdFx0XG4gICAgaWYgKGFjY291bnRJZCAhPSBudWxsKSB7IHBhcmFtcy5wdXNoKGBhY2NvdW50SWQ9JHthY2NvdW50SWR9YCk7IH1cbiAgICBpZiAodXNlcklkICE9IG51bGwpIHsgcGFyYW1zLnB1c2goYHVzZXJJZD0ke3VzZXJJZH1gKTsgfVxuICAgIGlmICh0dGwgIT0gbnVsbCkgeyBwYXJhbXMucHVzaChgdHRsPSR7dHRsfWApOyB9XG5cblx0XHRyZXR1cm4gdGhpcy5yZXN0LnBvc3QoYCR7dGhpcy5iYXNlVXJsfS90b2tlbmAsIG51bGwsIC4uLnBhcmFtcyk7XG4gIH1cblxuICAvKipcbiAgICogQ3JlYXRlIHRpbWUgbGltaXRlZCBwYXNzd29yZCBmb3IgdXNlciB0byBhY2Nlc3MgdGhlIEFQSSBkb2N1bWVudGF0aW9uXG4gICAqIEBSZXR1cm46IEFjdGlvblJlc3BvbnNlXG4gICAqL1xuICBjcmVhdGVUaW1lZFBhc3N3b3JkKGRheXM/OiBudW1iZXIsIHVzZXI/OiBzdHJpbmcpIHtcbiAgICBjb25zdCBwYXJhbXMgPSBuZXcgQXJyYXkoKTtcdFx0XG4gICAgaWYgKGRheXMgIT0gbnVsbCkgeyBwYXJhbXMucHVzaChgZGF5cz0ke2RheXN9YCk7IH1cbiAgICBpZiAodXNlciAhPSBudWxsKSB7IHBhcmFtcy5wdXNoKGB1c2VyPSR7dXNlcn1gKTsgfVxuXG5cdFx0cmV0dXJuIHRoaXMucmVzdC5wb3N0KGAke3RoaXMuYmFzZVVybH0vcGFzc3dvcmRgLCBudWxsLCAuLi5wYXJhbXMpO1xuICB9XG5cbn1cbiJdfQ==