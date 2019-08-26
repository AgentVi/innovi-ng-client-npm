/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable, Inject } from '@angular/core';
import { RestUtil } from '../../utils/rest-util';
/**
 * Health check service, no X-API-KEY or X-ACCESS-TOKEN are required
 */
var HealthCheckService = /** @class */ (function () {
    /**
     * Class constructor
     */
    function HealthCheckService(config, rest) {
        this.config = config;
        this.rest = rest;
        // URL to web api
        this.baseUrl = '/health';
        this.baseUrl = this.config.api + this.baseUrl;
    }
    /**
     * Health check to test service availability
     * @Return: ActionResponse - with version info
     */
    /**
     * Health check to test service availability
     * \@Return: ActionResponse - with version info
     * @return {?}
     */
    HealthCheckService.prototype.health = /**
     * Health check to test service availability
     * \@Return: ActionResponse - with version info
     * @return {?}
     */
    function () {
        return this.rest.get(this.baseUrl + "/");
    };
    HealthCheckService.decorators = [
        { type: Injectable }
    ];
    /** @nocollapse */
    HealthCheckService.ctorParameters = function () { return [
        { type: undefined, decorators: [{ type: Inject, args: ['config',] }] },
        { type: RestUtil }
    ]; };
    return HealthCheckService;
}());
export { HealthCheckService };
if (false) {
    /**
     * @type {?}
     * @private
     */
    HealthCheckService.prototype.baseUrl;
    /**
     * @type {?}
     * @private
     */
    HealthCheckService.prototype.config;
    /**
     * @type {?}
     * @private
     */
    HealthCheckService.prototype.rest;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaGVhbHRoQ2hlY2tTZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGFnZW50dmkvbmctY29yZS1saWIvIiwic291cmNlcyI6WyJsaWIvc2VydmljZXMvaGVhbHRoQ2hlY2tTZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUNuRCxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sdUJBQXVCLENBQUM7Ozs7QUFRakQ7SUFNRTs7T0FFRztJQUNILDRCQUFzQyxNQUFrQixFQUFVLElBQWM7UUFBMUMsV0FBTSxHQUFOLE1BQU0sQ0FBWTtRQUFVLFNBQUksR0FBSixJQUFJLENBQVU7O1FBTHhFLFlBQU8sR0FBRyxTQUFTLENBQUM7UUFNMUIsSUFBSSxDQUFDLE9BQU8sR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDLEdBQUcsR0FBRyxJQUFJLENBQUMsT0FBTyxDQUFDO0lBQ2hELENBQUM7SUFHRDs7O09BR0c7Ozs7OztJQUNILG1DQUFNOzs7OztJQUFOO1FBQ0UsT0FBTyxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBSSxJQUFJLENBQUMsT0FBTyxNQUFHLENBQUMsQ0FBQztJQUMzQyxDQUFDOztnQkFwQkYsVUFBVTs7OztnREFTSSxNQUFNLFNBQUMsUUFBUTtnQkFqQnJCLFFBQVE7O0lBOEJqQix5QkFBQztDQUFBLEFBdEJELElBc0JDO1NBckJZLGtCQUFrQjs7Ozs7O0lBRzdCLHFDQUE0Qjs7Ozs7SUFLaEIsb0NBQTRDOzs7OztJQUFFLGtDQUFzQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUsIEluamVjdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgUmVzdFV0aWwgfSBmcm9tICcuLi8uLi91dGlscy9yZXN0LXV0aWwnO1xuaW1wb3J0IHsgQ29yZUNvbmZpZyB9IGZyb20gJy4uLy4uL2NvcmUtbGliLm1vZHVsZSc7XG5cblxuXG4vKipcbiAqIEhlYWx0aCBjaGVjayBzZXJ2aWNlLCBubyBYLUFQSS1LRVkgb3IgWC1BQ0NFU1MtVE9LRU4gYXJlIHJlcXVpcmVkIFxuICovXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgSGVhbHRoQ2hlY2tTZXJ2aWNlIHtcblxuICAvLyBVUkwgdG8gd2ViIGFwaVxuICBwcml2YXRlIGJhc2VVcmwgPSAnL2hlYWx0aCc7XG5cbiAgLyoqXG4gICAqIENsYXNzIGNvbnN0cnVjdG9yXG4gICAqL1xuICBjb25zdHJ1Y3RvcihASW5qZWN0KCdjb25maWcnKSBwcml2YXRlIGNvbmZpZzogQ29yZUNvbmZpZywgcHJpdmF0ZSByZXN0OiBSZXN0VXRpbCkge1xuICAgIHRoaXMuYmFzZVVybCA9IHRoaXMuY29uZmlnLmFwaSArIHRoaXMuYmFzZVVybDtcbiAgfVxuXG5cbiAgLyoqXG4gICAqIEhlYWx0aCBjaGVjayB0byB0ZXN0IHNlcnZpY2UgYXZhaWxhYmlsaXR5XG4gICAqIEBSZXR1cm46IEFjdGlvblJlc3BvbnNlIC0gd2l0aCB2ZXJzaW9uIGluZm9cbiAgICovXG4gIGhlYWx0aCgpIHtcbiAgICByZXR1cm4gdGhpcy5yZXN0LmdldChgJHt0aGlzLmJhc2VVcmx9L2ApO1xuICB9XG5cbn1cbiJdfQ==