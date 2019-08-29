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
 * \@ResourceGroup User Actions
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
        return this.rest.post("" + this.baseUrl, JSON.stringify(body));
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ2VvU2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BhZ2VudHZpL25nLWNvcmUtbGliLyIsInNvdXJjZXMiOlsibGliL3NlcnZpY2VzL2dlb1NlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ25ELE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSx1QkFBdUIsQ0FBQzs7Ozs7OztBQVlqRDtJQU1FOztPQUVHO0lBQ0gsb0JBQXNDLE1BQWtCLEVBQVUsSUFBYztRQUExQyxXQUFNLEdBQU4sTUFBTSxDQUFZO1FBQVUsU0FBSSxHQUFKLElBQUksQ0FBVTs7UUFMeEUsWUFBTyxHQUFHLE1BQU0sQ0FBQztRQU12QixJQUFJLENBQUMsT0FBTyxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUMsR0FBRyxHQUFHLElBQUksQ0FBQyxPQUFPLENBQUM7SUFDaEQsQ0FBQztJQUdEOzs7Ozs7O09BT0c7Ozs7Ozs7Ozs7O0lBQ0gsaUNBQVk7Ozs7Ozs7Ozs7SUFBWixVQUFhLElBQXVCO1FBQ2xDLE9BQU8sSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsS0FBRyxJQUFJLENBQUMsT0FBUyxFQUFFLElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQztJQUNqRSxDQUFDOztnQkF4QkYsVUFBVTs7OztnREFTSSxNQUFNLFNBQUMsUUFBUTtnQkFyQnJCLFFBQVE7O0lBc0NqQixpQkFBQztDQUFBLEFBMUJELElBMEJDO1NBekJZLFVBQVU7Ozs7OztJQUdyQiw2QkFBeUI7Ozs7O0lBS2IsNEJBQTRDOzs7OztJQUFFLDBCQUFzQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUsIEluamVjdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgUmVzdFV0aWwgfSBmcm9tICcuLi8uLi91dGlscy9yZXN0LXV0aWwnO1xuaW1wb3J0IHsgQ29yZUNvbmZpZyB9IGZyb20gJy4uLy4uL2NvcmUtbGliLm1vZHVsZSc7XG5cbmltcG9ydCB7IEdlb0NvbnRyb2xQb2ludHMgfSBmcm9tICcuLi9jb21tb24vR2VvQ29udHJvbFBvaW50cyc7XG5cblxuLyoqXG4gKiBMaXN0IG9mIEdlby1zcGF0aWFsIHV0aWxpdGllc1xuICogQFJlcXVlc3RIZWFkZXIgWC1BUEktS0VZIFRoZSBrZXkgdG8gaWRlbnRpZnkgdGhlIGFwcGxpY2F0aW9uIChwb3J0YWwpXG4gKiBAUmVxdWVzdEhlYWRlciBYLUFDQ0VTUy1UT0tFTiBUaGUgdG9rZW4gdG8gaWRlbnRpZnkgdGhlIGxvZ2dlZC1pbiB1c2VyXG4gKiBAUmVzb3VyY2VHcm91cCBVc2VyIEFjdGlvbnMgXG4gKi9cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBHZW9TZXJ2aWNlIHtcblxuICAvLyBVUkwgdG8gd2ViIGFwaVxuICBwcml2YXRlIGJhc2VVcmwgPSAnL2dlbyc7XG5cbiAgLyoqXG4gICAqIENsYXNzIGNvbnN0cnVjdG9yXG4gICAqL1xuICBjb25zdHJ1Y3RvcihASW5qZWN0KCdjb25maWcnKSBwcml2YXRlIGNvbmZpZzogQ29yZUNvbmZpZywgcHJpdmF0ZSByZXN0OiBSZXN0VXRpbCkge1xuICAgIHRoaXMuYmFzZVVybCA9IHRoaXMuY29uZmlnLmFwaSArIHRoaXMuYmFzZVVybDtcbiAgfVxuXG5cbiAgLyoqXG4gICAqIERpZ2l0aXplIHNlbnNvciBGT1Ygb24gV0dTLTg0IGNvb3JkaW5hdGUgc3lzdGVtXG4gICAqIEVhY2ggR2VvQ29udHJvbFBvaW50IGluIHRoZSBsaXN0IGNvbXBvc2VkIG9mIHBvaW50IGluIHRoZSBGT1YgYW5kIGl0cyByZWZlcmVuY2VkIGNvb3JkaW5hdGUuXG4gICAqIFRoZSBwb2ludCByZXByZXNlbnRzIHRoZSB4LHkgdmFsdWVzIGEgbm9ybWFsaXplZCBzY2FsZSAoZWFjaCBheGlzIGlzIDAgLSAxMDAwKVxuICAgKiBUaGUgcmV0dXJuZWQgdmFsdWUgaXMgYSBHZW9SZWZlcmVuY2UgZGF0YSBzdHJ1Y3R1cmUgZGVzY3JpYmVzIHRoZSBjb250b3VycyBvZiB0aGVcbiAgICogRk9WIG9uIHRoZSBpbWFnZSBhbmQgdGhlIG1hcCBhbmQgWCxZIGZhY3RvcnMgYW5kIG9mZnNldHMgZm9yIHRyYW5zZm9ybWF0aW9uXG4gICAqIEBSZXR1cm46IEVudGl0eVJlc3BvbnNlPEdlb1JlZmVyZW5jZURhdGE+XG4gICAqL1xuICBnZW9SZWZlcmVuY2UoYm9keT86IEdlb0NvbnRyb2xQb2ludHMpIHtcbiAgICByZXR1cm4gdGhpcy5yZXN0LnBvc3QoYCR7dGhpcy5iYXNlVXJsfWAsIEpTT04uc3RyaW5naWZ5KGJvZHkpKTtcbiAgfVxuXG59XG4iXX0=