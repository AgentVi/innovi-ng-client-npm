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
export class SysKeysService {
    /**
     * Class constructor
     * @param {?} config
     * @param {?} rest
     */
    constructor(config, rest) {
        this.config = config;
        this.rest = rest;
        // URL to web api
        this.baseUrl = '/sys/keys';
        this.baseUrl = this.config.api + this.baseUrl;
    }
    /**
     * Create new API key for specific application name
     * \@Return: EntityResponse<ApiKey>
     * @param {?=} body
     * @return {?}
     */
    create(body) {
        return this.rest.post(`${this.baseUrl}/api-keys`, typeof body === 'object' ? JSON.stringify(body) : body);
    }
    /**
     * Change API Key version (rotate key)
     * \@Return: EntityResponse<ApiKey>
     * @param {?=} id
     * @return {?}
     */
    rotate(id) {
        return this.rest.put(`${this.baseUrl}/api-keys/${id}/rotate`, null);
    }
    /**
     * Delete API Key
     * \@Return: ActionResponse
     * @param {?=} id
     * @return {?}
     */
    delete(id) {
        return this.rest.delete(`${this.baseUrl}/api-keys/${id}`);
    }
    /**
     * Get single API Key by id
     * \@Return: EntityResponse<ApiKey>
     * @param {?=} id
     * @return {?}
     */
    get(id) {
        return this.rest.get(`${this.baseUrl}/api-keys/${id}`);
    }
    /**
     * Get list of all keys
     * \@Return: EntitiesResponse<ApiKey>
     * @return {?}
     */
    getAll() {
        return this.rest.get(`${this.baseUrl}/api-keys`);
    }
    /**
     * Enable key
     * \@Return: EntityResponse<ApiKey>
     * @param {?=} id
     * @return {?}
     */
    enable(id) {
        return this.rest.put(`${this.baseUrl}/api-keys/${id}/enable`, null);
    }
    /**
     * Disable key
     * \@Return: EntityResponse<ApiKey>
     * @param {?=} id
     * @return {?}
     */
    disable(id) {
        return this.rest.put(`${this.baseUrl}/api-keys/${id}/disable`, null);
    }
}
SysKeysService.decorators = [
    { type: Injectable }
];
/** @nocollapse */
SysKeysService.ctorParameters = () => [
    { type: undefined, decorators: [{ type: Inject, args: ['config',] }] },
    { type: RestUtil }
];
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3lzS2V5c1NlcnZpY2UuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AYWdlbnR2aS9uZy1jb3JlLWxpYi8iLCJzb3VyY2VzIjpbImxpYi9zZXJ2aWNlcy9zeXNLZXlzU2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDbkQsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLHVCQUF1QixDQUFDOzs7Ozs7QUFZakQsTUFBTSxPQUFPLGNBQWM7Ozs7OztJQVF6QixZQUFzQyxNQUFrQixFQUFVLElBQWM7UUFBMUMsV0FBTSxHQUFOLE1BQU0sQ0FBWTtRQUFVLFNBQUksR0FBSixJQUFJLENBQVU7O1FBTHhFLFlBQU8sR0FBRyxXQUFXLENBQUM7UUFNNUIsSUFBSSxDQUFDLE9BQU8sR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDLEdBQUcsR0FBRyxJQUFJLENBQUMsT0FBTyxDQUFDO0lBQ2hELENBQUM7Ozs7Ozs7SUFPRCxNQUFNLENBQUMsSUFBYTtRQUNsQixPQUFPLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsSUFBSSxDQUFDLE9BQU8sV0FBVyxFQUFFLE9BQU8sSUFBSSxLQUFLLFFBQVEsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDNUcsQ0FBQzs7Ozs7OztJQU1ELE1BQU0sQ0FBQyxFQUFXO1FBQ2hCLE9BQU8sSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsR0FBRyxJQUFJLENBQUMsT0FBTyxhQUFhLEVBQUUsU0FBUyxFQUFFLElBQUksQ0FBQyxDQUFDO0lBQ3RFLENBQUM7Ozs7Ozs7SUFNRCxNQUFNLENBQUMsRUFBVztRQUNoQixPQUFPLElBQUksQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLEdBQUcsSUFBSSxDQUFDLE9BQU8sYUFBYSxFQUFFLEVBQUUsQ0FBQyxDQUFDO0lBQzVELENBQUM7Ozs7Ozs7SUFNRCxHQUFHLENBQUMsRUFBVztRQUNiLE9BQU8sSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsR0FBRyxJQUFJLENBQUMsT0FBTyxhQUFhLEVBQUUsRUFBRSxDQUFDLENBQUM7SUFDekQsQ0FBQzs7Ozs7O0lBTUQsTUFBTTtRQUNKLE9BQU8sSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsR0FBRyxJQUFJLENBQUMsT0FBTyxXQUFXLENBQUMsQ0FBQztJQUNuRCxDQUFDOzs7Ozs7O0lBTUQsTUFBTSxDQUFDLEVBQVc7UUFDaEIsT0FBTyxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxHQUFHLElBQUksQ0FBQyxPQUFPLGFBQWEsRUFBRSxTQUFTLEVBQUUsSUFBSSxDQUFDLENBQUM7SUFDdEUsQ0FBQzs7Ozs7OztJQU1ELE9BQU8sQ0FBQyxFQUFXO1FBQ2pCLE9BQU8sSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsR0FBRyxJQUFJLENBQUMsT0FBTyxhQUFhLEVBQUUsVUFBVSxFQUFFLElBQUksQ0FBQyxDQUFDO0lBQ3ZFLENBQUM7OztZQXBFRixVQUFVOzs7OzRDQVNJLE1BQU0sU0FBQyxRQUFRO1lBcEJyQixRQUFROzs7Ozs7O0lBZWYsaUNBQThCOzs7OztJQUtsQixnQ0FBNEM7Ozs7O0lBQUUsOEJBQXNCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSwgSW5qZWN0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBSZXN0VXRpbCB9IGZyb20gJy4uLy4uL3V0aWxzL3Jlc3QtdXRpbCc7XG5pbXBvcnQgeyBDb3JlQ29uZmlnIH0gZnJvbSAnLi4vLi4vY29yZS1saWIubW9kdWxlJztcblxuaW1wb3J0IHsgQXBpS2V5IH0gZnJvbSAnLi4vZW50aXRpZXMvQXBpS2V5JztcblxuXG4vKipcbiAqIExpc3Qgb2YgYWxsIGtleSAoQVBJIGtleSArIFVzZXIgdG9rZW4pIHJlbGF0ZWQgYWN0aW9ucyBmb3Igc3lzdGVtIGFkbWluaXN0cmF0b3Igb25seVxuICogQFJlcXVlc3RIZWFkZXIgWC1BUEktS0VZIFRoZSBrZXkgdG8gaWRlbnRpZnkgdGhlIGFwcGxpY2F0aW9uIChwb3J0YWwpXG4gKiBAUmVxdWVzdEhlYWRlciBYLUFDQ0VTUy1UT0tFTiBUaGUgdG9rZW4gdG8gaWRlbnRpZnkgdGhlIGxvZ2dlZC1pbiB1c2VyIFxuICovXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgU3lzS2V5c1NlcnZpY2Uge1xuXG4gIC8vIFVSTCB0byB3ZWIgYXBpXG4gIHByaXZhdGUgYmFzZVVybCA9ICcvc3lzL2tleXMnO1xuXG4gIC8qKlxuICAgKiBDbGFzcyBjb25zdHJ1Y3RvclxuICAgKi9cbiAgY29uc3RydWN0b3IoQEluamVjdCgnY29uZmlnJykgcHJpdmF0ZSBjb25maWc6IENvcmVDb25maWcsIHByaXZhdGUgcmVzdDogUmVzdFV0aWwpIHtcbiAgICB0aGlzLmJhc2VVcmwgPSB0aGlzLmNvbmZpZy5hcGkgKyB0aGlzLmJhc2VVcmw7XG4gIH1cblxuXG4gIC8qKlxuICAgKiBDcmVhdGUgbmV3IEFQSSBrZXkgZm9yIHNwZWNpZmljIGFwcGxpY2F0aW9uIG5hbWVcbiAgICogQFJldHVybjogRW50aXR5UmVzcG9uc2U8QXBpS2V5PlxuICAgKi9cbiAgY3JlYXRlKGJvZHk/OiBBcGlLZXkpIHtcbiAgICByZXR1cm4gdGhpcy5yZXN0LnBvc3QoYCR7dGhpcy5iYXNlVXJsfS9hcGkta2V5c2AsIHR5cGVvZiBib2R5ID09PSAnb2JqZWN0JyA/IEpTT04uc3RyaW5naWZ5KGJvZHkpIDogYm9keSk7XG4gIH1cblxuICAvKipcbiAgICogQ2hhbmdlIEFQSSBLZXkgdmVyc2lvbiAocm90YXRlIGtleSlcbiAgICogQFJldHVybjogRW50aXR5UmVzcG9uc2U8QXBpS2V5PlxuICAgKi9cbiAgcm90YXRlKGlkPzogc3RyaW5nKSB7XG4gICAgcmV0dXJuIHRoaXMucmVzdC5wdXQoYCR7dGhpcy5iYXNlVXJsfS9hcGkta2V5cy8ke2lkfS9yb3RhdGVgLCBudWxsKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBEZWxldGUgQVBJIEtleVxuICAgKiBAUmV0dXJuOiBBY3Rpb25SZXNwb25zZVxuICAgKi9cbiAgZGVsZXRlKGlkPzogc3RyaW5nKSB7XG4gICAgcmV0dXJuIHRoaXMucmVzdC5kZWxldGUoYCR7dGhpcy5iYXNlVXJsfS9hcGkta2V5cy8ke2lkfWApO1xuICB9XG5cbiAgLyoqXG4gICAqIEdldCBzaW5nbGUgQVBJIEtleSBieSBpZFxuICAgKiBAUmV0dXJuOiBFbnRpdHlSZXNwb25zZTxBcGlLZXk+XG4gICAqL1xuICBnZXQoaWQ/OiBzdHJpbmcpIHtcbiAgICByZXR1cm4gdGhpcy5yZXN0LmdldChgJHt0aGlzLmJhc2VVcmx9L2FwaS1rZXlzLyR7aWR9YCk7XG4gIH1cblxuICAvKipcbiAgICogR2V0IGxpc3Qgb2YgYWxsIGtleXNcbiAgICogQFJldHVybjogRW50aXRpZXNSZXNwb25zZTxBcGlLZXk+XG4gICAqL1xuICBnZXRBbGwoKSB7XG4gICAgcmV0dXJuIHRoaXMucmVzdC5nZXQoYCR7dGhpcy5iYXNlVXJsfS9hcGkta2V5c2ApO1xuICB9XG5cbiAgLyoqXG4gICAqIEVuYWJsZSBrZXlcbiAgICogQFJldHVybjogRW50aXR5UmVzcG9uc2U8QXBpS2V5PlxuICAgKi9cbiAgZW5hYmxlKGlkPzogc3RyaW5nKSB7XG4gICAgcmV0dXJuIHRoaXMucmVzdC5wdXQoYCR7dGhpcy5iYXNlVXJsfS9hcGkta2V5cy8ke2lkfS9lbmFibGVgLCBudWxsKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBEaXNhYmxlIGtleVxuICAgKiBAUmV0dXJuOiBFbnRpdHlSZXNwb25zZTxBcGlLZXk+XG4gICAqL1xuICBkaXNhYmxlKGlkPzogc3RyaW5nKSB7XG4gICAgcmV0dXJuIHRoaXMucmVzdC5wdXQoYCR7dGhpcy5iYXNlVXJsfS9hcGkta2V5cy8ke2lkfS9kaXNhYmxlYCwgbnVsbCk7XG4gIH1cblxufVxuIl19