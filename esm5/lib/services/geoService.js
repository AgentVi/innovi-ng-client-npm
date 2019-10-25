/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable, Inject } from '@angular/core';
import { RestUtil } from '../../utils/rest-util';
import { CoreConfig } from '../../config';
/**
 * List of Geo-spatial utilities
 * \@RequestHeader X-API-KEY The key to identify the application (portal)
 * \@RequestHeader X-ACCESS-TOKEN The token to identify the logged-in user
 */
var GeoService = /** @class */ (function () {
    /**
     * Class constructor
     */
    function GeoService(config, rest) {
        this.config = config;
        this.rest = rest;
        // URL to web api
        this.baseUrl = '/geo';
        this.baseUrl = this.config.api + this.baseUrl;
    }
    /**
     * Digitize sensor FOV on WGS-84 coordinate system
     * Each GeoControlPoint in the list composed of point in the FOV and its referenced coordinate.
     * The point represents the x,y values a normalized scale (each axis is 0 - 10000)
     * The returned value is a GeoReference data structure describes the contours of the
     * FOV on the image and the map and X,Y factors and offsets for transformation
     * @Return: EntityResponse<GeoReferenceData>
     */
    /**
     * Digitize sensor FOV on WGS-84 coordinate system
     * Each GeoControlPoint in the list composed of point in the FOV and its referenced coordinate.
     * The point represents the x,y values a normalized scale (each axis is 0 - 10000)
     * The returned value is a GeoReference data structure describes the contours of the
     * FOV on the image and the map and X,Y factors and offsets for transformation
     * \@Return: EntityResponse<GeoReferenceData>
     * @param {?=} body
     * @return {?}
     */
    GeoService.prototype.geoReference = /**
     * Digitize sensor FOV on WGS-84 coordinate system
     * Each GeoControlPoint in the list composed of point in the FOV and its referenced coordinate.
     * The point represents the x,y values a normalized scale (each axis is 0 - 10000)
     * The returned value is a GeoReference data structure describes the contours of the
     * FOV on the image and the map and X,Y factors and offsets for transformation
     * \@Return: EntityResponse<GeoReferenceData>
     * @param {?=} body
     * @return {?}
     */
    function (body) {
        return this.rest.post("" + this.baseUrl, typeof body === 'object' ? JSON.stringify(body) : body);
    };
    /**
     * Test transformation, provide the transformation coefficients matrix and a list of arbitrary points and return
     * GeoReferenceData with the transformed coordinates (the number of coordinates is equal to the number of points)
     * @Return: EntityResponse<GeoReferenceData>
     */
    /**
     * Test transformation, provide the transformation coefficients matrix and a list of arbitrary points and return
     * GeoReferenceData with the transformed coordinates (the number of coordinates is equal to the number of points)
     * \@Return: EntityResponse<GeoReferenceData>
     * @param {?=} body
     * @return {?}
     */
    GeoService.prototype.transform = /**
     * Test transformation, provide the transformation coefficients matrix and a list of arbitrary points and return
     * GeoReferenceData with the transformed coordinates (the number of coordinates is equal to the number of points)
     * \@Return: EntityResponse<GeoReferenceData>
     * @param {?=} body
     * @return {?}
     */
    function (body) {
        return this.rest.post(this.baseUrl + "/transform", typeof body === 'object' ? JSON.stringify(body) : body);
    };
    GeoService.decorators = [
        { type: Injectable }
    ];
    /** @nocollapse */
    GeoService.ctorParameters = function () { return [
        { type: CoreConfig, decorators: [{ type: Inject, args: ['config',] }] },
        { type: RestUtil }
    ]; };
    return GeoService;
}());
export { GeoService };
if (false) {
    /**
     * @type {?}
     * @private
     */
    GeoService.prototype.baseUrl;
    /**
     * @type {?}
     * @private
     */
    GeoService.prototype.config;
    /**
     * @type {?}
     * @private
     */
    GeoService.prototype.rest;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ2VvU2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BhZ2VudHZpL25nLWNvcmUtbGliLyIsInNvdXJjZXMiOlsibGliL3NlcnZpY2VzL2dlb1NlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ25ELE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSx1QkFBdUIsQ0FBQztBQUNqRCxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sY0FBYyxDQUFDOzs7Ozs7QUFXMUM7SUFNRTs7T0FFRztJQUNILG9CQUFzQyxNQUFrQixFQUFVLElBQWM7UUFBMUMsV0FBTSxHQUFOLE1BQU0sQ0FBWTtRQUFVLFNBQUksR0FBSixJQUFJLENBQVU7O1FBTHhFLFlBQU8sR0FBRyxNQUFNLENBQUM7UUFNdkIsSUFBSSxDQUFDLE9BQU8sR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDLEdBQUcsR0FBRyxJQUFJLENBQUMsT0FBTyxDQUFDO0lBQ2hELENBQUM7SUFHRDs7Ozs7OztPQU9HOzs7Ozs7Ozs7OztJQUNILGlDQUFZOzs7Ozs7Ozs7O0lBQVosVUFBYSxJQUF1QjtRQUNsQyxPQUFPLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEtBQUcsSUFBSSxDQUFDLE9BQVMsRUFBRSxPQUFPLElBQUksS0FBSyxRQUFRLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQ25HLENBQUM7SUFFRDs7OztPQUlHOzs7Ozs7OztJQUNILDhCQUFTOzs7Ozs7O0lBQVQsVUFBVSxJQUF1QjtRQUMvQixPQUFPLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFJLElBQUksQ0FBQyxPQUFPLGVBQVksRUFBRSxPQUFPLElBQUksS0FBSyxRQUFRLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQzdHLENBQUM7O2dCQWpDRixVQUFVOzs7O2dCQVhGLFVBQVUsdUJBb0JKLE1BQU0sU0FBQyxRQUFRO2dCQXJCckIsUUFBUTs7SUErQ2pCLGlCQUFDO0NBQUEsQUFuQ0QsSUFtQ0M7U0FsQ1ksVUFBVTs7Ozs7O0lBR3JCLDZCQUF5Qjs7Ozs7SUFLYiw0QkFBNEM7Ozs7O0lBQUUsMEJBQXNCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSwgSW5qZWN0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBSZXN0VXRpbCB9IGZyb20gJy4uLy4uL3V0aWxzL3Jlc3QtdXRpbCc7XG5pbXBvcnQgeyBDb3JlQ29uZmlnIH0gZnJvbSAnLi4vLi4vY29uZmlnJztcblxuaW1wb3J0IHsgR2VvUmVmZXJlbmNlVGVzdCB9IGZyb20gJy4uL2NvbW1vbi9HZW9SZWZlcmVuY2VUZXN0JztcbmltcG9ydCB7IEdlb0NvbnRyb2xQb2ludHMgfSBmcm9tICcuLi9jb21tb24vR2VvQ29udHJvbFBvaW50cyc7XG5cblxuLyoqXG4gKiBMaXN0IG9mIEdlby1zcGF0aWFsIHV0aWxpdGllc1xuICogQFJlcXVlc3RIZWFkZXIgWC1BUEktS0VZIFRoZSBrZXkgdG8gaWRlbnRpZnkgdGhlIGFwcGxpY2F0aW9uIChwb3J0YWwpXG4gKiBAUmVxdWVzdEhlYWRlciBYLUFDQ0VTUy1UT0tFTiBUaGUgdG9rZW4gdG8gaWRlbnRpZnkgdGhlIGxvZ2dlZC1pbiB1c2VyIFxuICovXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgR2VvU2VydmljZSB7XG5cbiAgLy8gVVJMIHRvIHdlYiBhcGlcbiAgcHJpdmF0ZSBiYXNlVXJsID0gJy9nZW8nO1xuXG4gIC8qKlxuICAgKiBDbGFzcyBjb25zdHJ1Y3RvclxuICAgKi9cbiAgY29uc3RydWN0b3IoQEluamVjdCgnY29uZmlnJykgcHJpdmF0ZSBjb25maWc6IENvcmVDb25maWcsIHByaXZhdGUgcmVzdDogUmVzdFV0aWwpIHtcbiAgICB0aGlzLmJhc2VVcmwgPSB0aGlzLmNvbmZpZy5hcGkgKyB0aGlzLmJhc2VVcmw7XG4gIH1cblxuXG4gIC8qKlxuICAgKiBEaWdpdGl6ZSBzZW5zb3IgRk9WIG9uIFdHUy04NCBjb29yZGluYXRlIHN5c3RlbVxuICAgKiBFYWNoIEdlb0NvbnRyb2xQb2ludCBpbiB0aGUgbGlzdCBjb21wb3NlZCBvZiBwb2ludCBpbiB0aGUgRk9WIGFuZCBpdHMgcmVmZXJlbmNlZCBjb29yZGluYXRlLlxuICAgKiBUaGUgcG9pbnQgcmVwcmVzZW50cyB0aGUgeCx5IHZhbHVlcyBhIG5vcm1hbGl6ZWQgc2NhbGUgKGVhY2ggYXhpcyBpcyAwIC0gMTAwMDApXG4gICAqIFRoZSByZXR1cm5lZCB2YWx1ZSBpcyBhIEdlb1JlZmVyZW5jZSBkYXRhIHN0cnVjdHVyZSBkZXNjcmliZXMgdGhlIGNvbnRvdXJzIG9mIHRoZVxuICAgKiBGT1Ygb24gdGhlIGltYWdlIGFuZCB0aGUgbWFwIGFuZCBYLFkgZmFjdG9ycyBhbmQgb2Zmc2V0cyBmb3IgdHJhbnNmb3JtYXRpb25cbiAgICogQFJldHVybjogRW50aXR5UmVzcG9uc2U8R2VvUmVmZXJlbmNlRGF0YT5cbiAgICovXG4gIGdlb1JlZmVyZW5jZShib2R5PzogR2VvQ29udHJvbFBvaW50cykge1xuICAgIHJldHVybiB0aGlzLnJlc3QucG9zdChgJHt0aGlzLmJhc2VVcmx9YCwgdHlwZW9mIGJvZHkgPT09ICdvYmplY3QnID8gSlNPTi5zdHJpbmdpZnkoYm9keSkgOiBib2R5KTtcbiAgfVxuXG4gIC8qKlxuICAgKiBUZXN0IHRyYW5zZm9ybWF0aW9uLCBwcm92aWRlIHRoZSB0cmFuc2Zvcm1hdGlvbiBjb2VmZmljaWVudHMgbWF0cml4IGFuZCBhIGxpc3Qgb2YgYXJiaXRyYXJ5IHBvaW50cyBhbmQgcmV0dXJuXG4gICAqIEdlb1JlZmVyZW5jZURhdGEgd2l0aCB0aGUgdHJhbnNmb3JtZWQgY29vcmRpbmF0ZXMgKHRoZSBudW1iZXIgb2YgY29vcmRpbmF0ZXMgaXMgZXF1YWwgdG8gdGhlIG51bWJlciBvZiBwb2ludHMpXG4gICAqIEBSZXR1cm46IEVudGl0eVJlc3BvbnNlPEdlb1JlZmVyZW5jZURhdGE+XG4gICAqL1xuICB0cmFuc2Zvcm0oYm9keT86IEdlb1JlZmVyZW5jZVRlc3QpIHtcbiAgICByZXR1cm4gdGhpcy5yZXN0LnBvc3QoYCR7dGhpcy5iYXNlVXJsfS90cmFuc2Zvcm1gLCB0eXBlb2YgYm9keSA9PT0gJ29iamVjdCcgPyBKU09OLnN0cmluZ2lmeShib2R5KSA6IGJvZHkpO1xuICB9XG5cbn1cbiJdfQ==