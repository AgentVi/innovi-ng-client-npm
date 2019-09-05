/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable, Inject } from '@angular/core';
import { RestUtil } from '../../utils/rest-util';
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
     * The point represents the x,y values a normalized scale (each axis is 0 - 1000)
     * The returned value is a GeoReference data structure describes the contours of the
     * FOV on the image and the map and X,Y factors and offsets for transformation
     * @Return: EntityResponse<GeoReferenceData>
     */
    /**
     * Digitize sensor FOV on WGS-84 coordinate system
     * Each GeoControlPoint in the list composed of point in the FOV and its referenced coordinate.
     * The point represents the x,y values a normalized scale (each axis is 0 - 1000)
     * The returned value is a GeoReference data structure describes the contours of the
     * FOV on the image and the map and X,Y factors and offsets for transformation
     * \@Return: EntityResponse<GeoReferenceData>
     * @param {?=} body
     * @return {?}
     */
    GeoService.prototype.geoReference = /**
     * Digitize sensor FOV on WGS-84 coordinate system
     * Each GeoControlPoint in the list composed of point in the FOV and its referenced coordinate.
     * The point represents the x,y values a normalized scale (each axis is 0 - 1000)
     * The returned value is a GeoReference data structure describes the contours of the
     * FOV on the image and the map and X,Y factors and offsets for transformation
     * \@Return: EntityResponse<GeoReferenceData>
     * @param {?=} body
     * @return {?}
     */
    function (body) {
        return this.rest.post("" + this.baseUrl, typeof body === 'object' ? JSON.stringify(body) : body);
    };
    GeoService.decorators = [
        { type: Injectable }
    ];
    /** @nocollapse */
    GeoService.ctorParameters = function () { return [
        { type: undefined, decorators: [{ type: Inject, args: ['config',] }] },
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ2VvU2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BhZ2VudHZpL25nLWNvcmUtbGliLyIsInNvdXJjZXMiOlsibGliL3NlcnZpY2VzL2dlb1NlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ25ELE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSx1QkFBdUIsQ0FBQzs7Ozs7O0FBV2pEO0lBTUU7O09BRUc7SUFDSCxvQkFBc0MsTUFBa0IsRUFBVSxJQUFjO1FBQTFDLFdBQU0sR0FBTixNQUFNLENBQVk7UUFBVSxTQUFJLEdBQUosSUFBSSxDQUFVOztRQUx4RSxZQUFPLEdBQUcsTUFBTSxDQUFDO1FBTXZCLElBQUksQ0FBQyxPQUFPLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxHQUFHLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQztJQUNoRCxDQUFDO0lBR0Q7Ozs7Ozs7T0FPRzs7Ozs7Ozs7Ozs7SUFDSCxpQ0FBWTs7Ozs7Ozs7OztJQUFaLFVBQWEsSUFBdUI7UUFDbEMsT0FBTyxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxLQUFHLElBQUksQ0FBQyxPQUFTLEVBQUUsT0FBTyxJQUFJLEtBQUssUUFBUSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUNuRyxDQUFDOztnQkF4QkYsVUFBVTs7OztnREFTSSxNQUFNLFNBQUMsUUFBUTtnQkFwQnJCLFFBQVE7O0lBcUNqQixpQkFBQztDQUFBLEFBMUJELElBMEJDO1NBekJZLFVBQVU7Ozs7OztJQUdyQiw2QkFBeUI7Ozs7O0lBS2IsNEJBQTRDOzs7OztJQUFFLDBCQUFzQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUsIEluamVjdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgUmVzdFV0aWwgfSBmcm9tICcuLi8uLi91dGlscy9yZXN0LXV0aWwnO1xuaW1wb3J0IHsgQ29yZUNvbmZpZyB9IGZyb20gJy4uLy4uL2NvcmUtY29uZmlnJztcblxuaW1wb3J0IHsgR2VvQ29udHJvbFBvaW50cyB9IGZyb20gJy4uL2NvbW1vbi9HZW9Db250cm9sUG9pbnRzJztcblxuXG4vKipcbiAqIExpc3Qgb2YgR2VvLXNwYXRpYWwgdXRpbGl0aWVzXG4gKiBAUmVxdWVzdEhlYWRlciBYLUFQSS1LRVkgVGhlIGtleSB0byBpZGVudGlmeSB0aGUgYXBwbGljYXRpb24gKHBvcnRhbClcbiAqIEBSZXF1ZXN0SGVhZGVyIFgtQUNDRVNTLVRPS0VOIFRoZSB0b2tlbiB0byBpZGVudGlmeSB0aGUgbG9nZ2VkLWluIHVzZXIgXG4gKi9cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBHZW9TZXJ2aWNlIHtcblxuICAvLyBVUkwgdG8gd2ViIGFwaVxuICBwcml2YXRlIGJhc2VVcmwgPSAnL2dlbyc7XG5cbiAgLyoqXG4gICAqIENsYXNzIGNvbnN0cnVjdG9yXG4gICAqL1xuICBjb25zdHJ1Y3RvcihASW5qZWN0KCdjb25maWcnKSBwcml2YXRlIGNvbmZpZzogQ29yZUNvbmZpZywgcHJpdmF0ZSByZXN0OiBSZXN0VXRpbCkge1xuICAgIHRoaXMuYmFzZVVybCA9IHRoaXMuY29uZmlnLmFwaSArIHRoaXMuYmFzZVVybDtcbiAgfVxuXG5cbiAgLyoqXG4gICAqIERpZ2l0aXplIHNlbnNvciBGT1Ygb24gV0dTLTg0IGNvb3JkaW5hdGUgc3lzdGVtXG4gICAqIEVhY2ggR2VvQ29udHJvbFBvaW50IGluIHRoZSBsaXN0IGNvbXBvc2VkIG9mIHBvaW50IGluIHRoZSBGT1YgYW5kIGl0cyByZWZlcmVuY2VkIGNvb3JkaW5hdGUuXG4gICAqIFRoZSBwb2ludCByZXByZXNlbnRzIHRoZSB4LHkgdmFsdWVzIGEgbm9ybWFsaXplZCBzY2FsZSAoZWFjaCBheGlzIGlzIDAgLSAxMDAwKVxuICAgKiBUaGUgcmV0dXJuZWQgdmFsdWUgaXMgYSBHZW9SZWZlcmVuY2UgZGF0YSBzdHJ1Y3R1cmUgZGVzY3JpYmVzIHRoZSBjb250b3VycyBvZiB0aGVcbiAgICogRk9WIG9uIHRoZSBpbWFnZSBhbmQgdGhlIG1hcCBhbmQgWCxZIGZhY3RvcnMgYW5kIG9mZnNldHMgZm9yIHRyYW5zZm9ybWF0aW9uXG4gICAqIEBSZXR1cm46IEVudGl0eVJlc3BvbnNlPEdlb1JlZmVyZW5jZURhdGE+XG4gICAqL1xuICBnZW9SZWZlcmVuY2UoYm9keT86IEdlb0NvbnRyb2xQb2ludHMpIHtcbiAgICByZXR1cm4gdGhpcy5yZXN0LnBvc3QoYCR7dGhpcy5iYXNlVXJsfWAsIHR5cGVvZiBib2R5ID09PSAnb2JqZWN0JyA/IEpTT04uc3RyaW5naWZ5KGJvZHkpIDogYm9keSk7XG4gIH1cblxufVxuIl19