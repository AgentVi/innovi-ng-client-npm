/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable, Inject } from '@angular/core';
import { RestUtil } from '../../utils/rest-util';
import { CoreConfig } from '../../config';
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
        { type: CoreConfig, decorators: [{ type: Inject, args: ['config',] }] },
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaGVhbHRoQ2hlY2tTZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGFnZW50dmkvbmctY29yZS1saWIvIiwic291cmNlcyI6WyJsaWIvc2VydmljZXMvaGVhbHRoQ2hlY2tTZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUNuRCxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sdUJBQXVCLENBQUM7QUFDakQsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGNBQWMsQ0FBQzs7OztBQU8xQztJQU1FOztPQUVHO0lBQ0gsNEJBQXNDLE1BQWtCLEVBQVUsSUFBYztRQUExQyxXQUFNLEdBQU4sTUFBTSxDQUFZO1FBQVUsU0FBSSxHQUFKLElBQUksQ0FBVTs7UUFMeEUsWUFBTyxHQUFHLFNBQVMsQ0FBQztRQU0xQixJQUFJLENBQUMsT0FBTyxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUMsR0FBRyxHQUFHLElBQUksQ0FBQyxPQUFPLENBQUM7SUFDaEQsQ0FBQztJQUdEOzs7T0FHRzs7Ozs7O0lBQ0gsbUNBQU07Ozs7O0lBQU47UUFDRSxPQUFPLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLEtBQUcsSUFBSSxDQUFDLE9BQVMsQ0FBQyxDQUFDO0lBQzFDLENBQUM7O2dCQXBCRixVQUFVOzs7O2dCQVBGLFVBQVUsdUJBZ0JKLE1BQU0sU0FBQyxRQUFRO2dCQWpCckIsUUFBUTs7SUE4QmpCLHlCQUFDO0NBQUEsQUF0QkQsSUFzQkM7U0FyQlksa0JBQWtCOzs7Ozs7SUFHN0IscUNBQTRCOzs7OztJQUtoQixvQ0FBNEM7Ozs7O0lBQUUsa0NBQXNCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSwgSW5qZWN0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBSZXN0VXRpbCB9IGZyb20gJy4uLy4uL3V0aWxzL3Jlc3QtdXRpbCc7XG5pbXBvcnQgeyBDb3JlQ29uZmlnIH0gZnJvbSAnLi4vLi4vY29uZmlnJztcblxuXG5cbi8qKlxuICogSGVhbHRoIGNoZWNrIHNlcnZpY2UsIG5vIFgtQVBJLUtFWSBvciBYLUFDQ0VTUy1UT0tFTiBhcmUgcmVxdWlyZWQgXG4gKi9cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBIZWFsdGhDaGVja1NlcnZpY2Uge1xuXG4gIC8vIFVSTCB0byB3ZWIgYXBpXG4gIHByaXZhdGUgYmFzZVVybCA9ICcvaGVhbHRoJztcblxuICAvKipcbiAgICogQ2xhc3MgY29uc3RydWN0b3JcbiAgICovXG4gIGNvbnN0cnVjdG9yKEBJbmplY3QoJ2NvbmZpZycpIHByaXZhdGUgY29uZmlnOiBDb3JlQ29uZmlnLCBwcml2YXRlIHJlc3Q6IFJlc3RVdGlsKSB7XG4gICAgdGhpcy5iYXNlVXJsID0gdGhpcy5jb25maWcuYXBpICsgdGhpcy5iYXNlVXJsO1xuICB9XG5cblxuICAvKipcbiAgICogSGVhbHRoIGNoZWNrIHRvIHRlc3Qgc2VydmljZSBhdmFpbGFiaWxpdHlcbiAgICogQFJldHVybjogQWN0aW9uUmVzcG9uc2UgLSB3aXRoIHZlcnNpb24gaW5mb1xuICAgKi9cbiAgaGVhbHRoKCkge1xuICAgIHJldHVybiB0aGlzLnJlc3QuZ2V0KGAke3RoaXMuYmFzZVVybH1gKTtcbiAgfVxuXG59XG4iXX0=