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
        return this.rest.get("" + this.baseUrl);
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaGVhbHRoQ2hlY2tTZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGFnZW50dmkvbmctY29yZS1saWIvIiwic291cmNlcyI6WyJsaWIvc2VydmljZXMvaGVhbHRoQ2hlY2tTZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUNuRCxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sdUJBQXVCLENBQUM7Ozs7QUFRakQ7SUFNRTs7T0FFRztJQUNILDRCQUFzQyxNQUFrQixFQUFVLElBQWM7UUFBMUMsV0FBTSxHQUFOLE1BQU0sQ0FBWTtRQUFVLFNBQUksR0FBSixJQUFJLENBQVU7O1FBTHhFLFlBQU8sR0FBRyxTQUFTLENBQUM7UUFNMUIsSUFBSSxDQUFDLE9BQU8sR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDLEdBQUcsR0FBRyxJQUFJLENBQUMsT0FBTyxDQUFDO0lBQ2hELENBQUM7SUFHRDs7O09BR0c7Ozs7OztJQUNILG1DQUFNOzs7OztJQUFOO1FBQ0UsT0FBTyxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxLQUFHLElBQUksQ0FBQyxPQUFTLENBQUMsQ0FBQztJQUMxQyxDQUFDOztnQkFwQkYsVUFBVTs7OztnREFTSSxNQUFNLFNBQUMsUUFBUTtnQkFqQnJCLFFBQVE7O0lBOEJqQix5QkFBQztDQUFBLEFBdEJELElBc0JDO1NBckJZLGtCQUFrQjs7Ozs7O0lBRzdCLHFDQUE0Qjs7Ozs7SUFLaEIsb0NBQTRDOzs7OztJQUFFLGtDQUFzQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUsIEluamVjdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgUmVzdFV0aWwgfSBmcm9tICcuLi8uLi91dGlscy9yZXN0LXV0aWwnO1xuaW1wb3J0IHsgQ29yZUNvbmZpZyB9IGZyb20gJy4uLy4uL2NvcmUtY29uZmlnJztcblxuXG5cbi8qKlxuICogSGVhbHRoIGNoZWNrIHNlcnZpY2UsIG5vIFgtQVBJLUtFWSBvciBYLUFDQ0VTUy1UT0tFTiBhcmUgcmVxdWlyZWQgXG4gKi9cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBIZWFsdGhDaGVja1NlcnZpY2Uge1xuXG4gIC8vIFVSTCB0byB3ZWIgYXBpXG4gIHByaXZhdGUgYmFzZVVybCA9ICcvaGVhbHRoJztcblxuICAvKipcbiAgICogQ2xhc3MgY29uc3RydWN0b3JcbiAgICovXG4gIGNvbnN0cnVjdG9yKEBJbmplY3QoJ2NvbmZpZycpIHByaXZhdGUgY29uZmlnOiBDb3JlQ29uZmlnLCBwcml2YXRlIHJlc3Q6IFJlc3RVdGlsKSB7XG4gICAgdGhpcy5iYXNlVXJsID0gdGhpcy5jb25maWcuYXBpICsgdGhpcy5iYXNlVXJsO1xuICB9XG5cblxuICAvKipcbiAgICogSGVhbHRoIGNoZWNrIHRvIHRlc3Qgc2VydmljZSBhdmFpbGFiaWxpdHlcbiAgICogQFJldHVybjogQWN0aW9uUmVzcG9uc2UgLSB3aXRoIHZlcnNpb24gaW5mb1xuICAgKi9cbiAgaGVhbHRoKCkge1xuICAgIHJldHVybiB0aGlzLnJlc3QuZ2V0KGAke3RoaXMuYmFzZVVybH1gKTtcbiAgfVxuXG59XG4iXX0=