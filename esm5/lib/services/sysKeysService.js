/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable, Inject } from '@angular/core';
import { RestUtil } from '../../utils/rest-util';
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
    SysKeysService.decorators = [
        { type: Injectable }
    ];
    /** @nocollapse */
    SysKeysService.ctorParameters = function () { return [
        { type: undefined, decorators: [{ type: Inject, args: ['config',] }] },
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3lzS2V5c1NlcnZpY2UuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AYWdlbnR2aS9uZy1jb3JlLWxpYi8iLCJzb3VyY2VzIjpbImxpYi9zZXJ2aWNlcy9zeXNLZXlzU2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDbkQsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLHVCQUF1QixDQUFDOzs7Ozs7QUFXakQ7SUFNRTs7T0FFRztJQUNILHdCQUFzQyxNQUFrQixFQUFVLElBQWM7UUFBMUMsV0FBTSxHQUFOLE1BQU0sQ0FBWTtRQUFVLFNBQUksR0FBSixJQUFJLENBQVU7O1FBTHhFLFlBQU8sR0FBRyxXQUFXLENBQUM7UUFNNUIsSUFBSSxDQUFDLE9BQU8sR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDLEdBQUcsR0FBRyxJQUFJLENBQUMsT0FBTyxDQUFDO0lBQ2hELENBQUM7SUFHRDs7O09BR0c7Ozs7Ozs7SUFDSCwrQkFBTTs7Ozs7O0lBQU4sVUFBTyxJQUFhO1FBQ2xCLE9BQU8sSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUksSUFBSSxDQUFDLE9BQU8sY0FBVyxFQUFFLE9BQU8sSUFBSSxLQUFLLFFBQVEsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDNUcsQ0FBQztJQUVEOzs7T0FHRzs7Ozs7OztJQUNILCtCQUFNOzs7Ozs7SUFBTixVQUFPLEVBQVc7UUFDaEIsT0FBTyxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBSSxJQUFJLENBQUMsT0FBTyxrQkFBYSxFQUFFLFlBQVMsRUFBRSxJQUFJLENBQUMsQ0FBQztJQUN0RSxDQUFDO0lBRUQ7OztPQUdHOzs7Ozs7O0lBQ0gsK0JBQU07Ozs7OztJQUFOLFVBQU8sRUFBVztRQUNoQixPQUFPLElBQUksQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFJLElBQUksQ0FBQyxPQUFPLGtCQUFhLEVBQUksQ0FBQyxDQUFDO0lBQzVELENBQUM7SUFFRDs7O09BR0c7Ozs7Ozs7SUFDSCw0QkFBRzs7Ozs7O0lBQUgsVUFBSSxFQUFXO1FBQ2IsT0FBTyxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBSSxJQUFJLENBQUMsT0FBTyxrQkFBYSxFQUFJLENBQUMsQ0FBQztJQUN6RCxDQUFDO0lBRUQ7OztPQUdHOzs7Ozs7SUFDSCwrQkFBTTs7Ozs7SUFBTjtRQUNFLE9BQU8sSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUksSUFBSSxDQUFDLE9BQU8sY0FBVyxDQUFDLENBQUM7SUFDbkQsQ0FBQztJQUVEOzs7T0FHRzs7Ozs7OztJQUNILCtCQUFNOzs7Ozs7SUFBTixVQUFPLEVBQVc7UUFDaEIsT0FBTyxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBSSxJQUFJLENBQUMsT0FBTyxrQkFBYSxFQUFFLFlBQVMsRUFBRSxJQUFJLENBQUMsQ0FBQztJQUN0RSxDQUFDO0lBRUQ7OztPQUdHOzs7Ozs7O0lBQ0gsZ0NBQU87Ozs7OztJQUFQLFVBQVEsRUFBVztRQUNqQixPQUFPLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFJLElBQUksQ0FBQyxPQUFPLGtCQUFhLEVBQUUsYUFBVSxFQUFFLElBQUksQ0FBQyxDQUFDO0lBQ3ZFLENBQUM7O2dCQXBFRixVQUFVOzs7O2dEQVNJLE1BQU0sU0FBQyxRQUFRO2dCQXBCckIsUUFBUTs7SUFpRmpCLHFCQUFDO0NBQUEsQUF0RUQsSUFzRUM7U0FyRVksY0FBYzs7Ozs7O0lBR3pCLGlDQUE4Qjs7Ozs7SUFLbEIsZ0NBQTRDOzs7OztJQUFFLDhCQUFzQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUsIEluamVjdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgUmVzdFV0aWwgfSBmcm9tICcuLi8uLi91dGlscy9yZXN0LXV0aWwnO1xuaW1wb3J0IHsgQ29yZUNvbmZpZyB9IGZyb20gJy4uLy4uL2NvcmUtbGliLm1vZHVsZSc7XG5cbmltcG9ydCB7IEFwaUtleSB9IGZyb20gJy4uL2VudGl0aWVzL0FwaUtleSc7XG5cblxuLyoqXG4gKiBMaXN0IG9mIGFsbCBrZXkgKEFQSSBrZXkgKyBVc2VyIHRva2VuKSByZWxhdGVkIGFjdGlvbnMgZm9yIHN5c3RlbSBhZG1pbmlzdHJhdG9yIG9ubHlcbiAqIEBSZXF1ZXN0SGVhZGVyIFgtQVBJLUtFWSBUaGUga2V5IHRvIGlkZW50aWZ5IHRoZSBhcHBsaWNhdGlvbiAocG9ydGFsKVxuICogQFJlcXVlc3RIZWFkZXIgWC1BQ0NFU1MtVE9LRU4gVGhlIHRva2VuIHRvIGlkZW50aWZ5IHRoZSBsb2dnZWQtaW4gdXNlciBcbiAqL1xuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIFN5c0tleXNTZXJ2aWNlIHtcblxuICAvLyBVUkwgdG8gd2ViIGFwaVxuICBwcml2YXRlIGJhc2VVcmwgPSAnL3N5cy9rZXlzJztcblxuICAvKipcbiAgICogQ2xhc3MgY29uc3RydWN0b3JcbiAgICovXG4gIGNvbnN0cnVjdG9yKEBJbmplY3QoJ2NvbmZpZycpIHByaXZhdGUgY29uZmlnOiBDb3JlQ29uZmlnLCBwcml2YXRlIHJlc3Q6IFJlc3RVdGlsKSB7XG4gICAgdGhpcy5iYXNlVXJsID0gdGhpcy5jb25maWcuYXBpICsgdGhpcy5iYXNlVXJsO1xuICB9XG5cblxuICAvKipcbiAgICogQ3JlYXRlIG5ldyBBUEkga2V5IGZvciBzcGVjaWZpYyBhcHBsaWNhdGlvbiBuYW1lXG4gICAqIEBSZXR1cm46IEVudGl0eVJlc3BvbnNlPEFwaUtleT5cbiAgICovXG4gIGNyZWF0ZShib2R5PzogQXBpS2V5KSB7XG4gICAgcmV0dXJuIHRoaXMucmVzdC5wb3N0KGAke3RoaXMuYmFzZVVybH0vYXBpLWtleXNgLCB0eXBlb2YgYm9keSA9PT0gJ29iamVjdCcgPyBKU09OLnN0cmluZ2lmeShib2R5KSA6IGJvZHkpO1xuICB9XG5cbiAgLyoqXG4gICAqIENoYW5nZSBBUEkgS2V5IHZlcnNpb24gKHJvdGF0ZSBrZXkpXG4gICAqIEBSZXR1cm46IEVudGl0eVJlc3BvbnNlPEFwaUtleT5cbiAgICovXG4gIHJvdGF0ZShpZD86IHN0cmluZykge1xuICAgIHJldHVybiB0aGlzLnJlc3QucHV0KGAke3RoaXMuYmFzZVVybH0vYXBpLWtleXMvJHtpZH0vcm90YXRlYCwgbnVsbCk7XG4gIH1cblxuICAvKipcbiAgICogRGVsZXRlIEFQSSBLZXlcbiAgICogQFJldHVybjogQWN0aW9uUmVzcG9uc2VcbiAgICovXG4gIGRlbGV0ZShpZD86IHN0cmluZykge1xuICAgIHJldHVybiB0aGlzLnJlc3QuZGVsZXRlKGAke3RoaXMuYmFzZVVybH0vYXBpLWtleXMvJHtpZH1gKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBHZXQgc2luZ2xlIEFQSSBLZXkgYnkgaWRcbiAgICogQFJldHVybjogRW50aXR5UmVzcG9uc2U8QXBpS2V5PlxuICAgKi9cbiAgZ2V0KGlkPzogc3RyaW5nKSB7XG4gICAgcmV0dXJuIHRoaXMucmVzdC5nZXQoYCR7dGhpcy5iYXNlVXJsfS9hcGkta2V5cy8ke2lkfWApO1xuICB9XG5cbiAgLyoqXG4gICAqIEdldCBsaXN0IG9mIGFsbCBrZXlzXG4gICAqIEBSZXR1cm46IEVudGl0aWVzUmVzcG9uc2U8QXBpS2V5PlxuICAgKi9cbiAgZ2V0QWxsKCkge1xuICAgIHJldHVybiB0aGlzLnJlc3QuZ2V0KGAke3RoaXMuYmFzZVVybH0vYXBpLWtleXNgKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBFbmFibGUga2V5XG4gICAqIEBSZXR1cm46IEVudGl0eVJlc3BvbnNlPEFwaUtleT5cbiAgICovXG4gIGVuYWJsZShpZD86IHN0cmluZykge1xuICAgIHJldHVybiB0aGlzLnJlc3QucHV0KGAke3RoaXMuYmFzZVVybH0vYXBpLWtleXMvJHtpZH0vZW5hYmxlYCwgbnVsbCk7XG4gIH1cblxuICAvKipcbiAgICogRGlzYWJsZSBrZXlcbiAgICogQFJldHVybjogRW50aXR5UmVzcG9uc2U8QXBpS2V5PlxuICAgKi9cbiAgZGlzYWJsZShpZD86IHN0cmluZykge1xuICAgIHJldHVybiB0aGlzLnJlc3QucHV0KGAke3RoaXMuYmFzZVVybH0vYXBpLWtleXMvJHtpZH0vZGlzYWJsZWAsIG51bGwpO1xuICB9XG5cbn1cbiJdfQ==