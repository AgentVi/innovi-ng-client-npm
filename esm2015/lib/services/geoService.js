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
export class GeoService {
    /**
     * Class constructor
     * @param {?} config
     * @param {?} rest
     */
    constructor(config, rest) {
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
     * \@Return: EntityResponse<GeoReferenceData>
     * @param {?=} body
     * @return {?}
     */
    geoReference(body) {
        return this.rest.post(`${this.baseUrl}`, typeof body === 'object' ? JSON.stringify(body) : body);
    }
}
GeoService.decorators = [
    { type: Injectable }
];
/** @nocollapse */
GeoService.ctorParameters = () => [
    { type: undefined, decorators: [{ type: Inject, args: ['config',] }] },
    { type: RestUtil }
];
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ2VvU2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BhZ2VudHZpL25nLWNvcmUtbGliLyIsInNvdXJjZXMiOlsibGliL3NlcnZpY2VzL2dlb1NlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ25ELE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSx1QkFBdUIsQ0FBQzs7Ozs7O0FBWWpELE1BQU0sT0FBTyxVQUFVOzs7Ozs7SUFRckIsWUFBc0MsTUFBa0IsRUFBVSxJQUFjO1FBQTFDLFdBQU0sR0FBTixNQUFNLENBQVk7UUFBVSxTQUFJLEdBQUosSUFBSSxDQUFVOztRQUx4RSxZQUFPLEdBQUcsTUFBTSxDQUFDO1FBTXZCLElBQUksQ0FBQyxPQUFPLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxHQUFHLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQztJQUNoRCxDQUFDOzs7Ozs7Ozs7OztJQVdELFlBQVksQ0FBQyxJQUF1QjtRQUNsQyxPQUFPLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsSUFBSSxDQUFDLE9BQU8sRUFBRSxFQUFFLE9BQU8sSUFBSSxLQUFLLFFBQVEsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDbkcsQ0FBQzs7O1lBeEJGLFVBQVU7Ozs7NENBU0ksTUFBTSxTQUFDLFFBQVE7WUFwQnJCLFFBQVE7Ozs7Ozs7SUFlZiw2QkFBeUI7Ozs7O0lBS2IsNEJBQTRDOzs7OztJQUFFLDBCQUFzQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUsIEluamVjdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgUmVzdFV0aWwgfSBmcm9tICcuLi8uLi91dGlscy9yZXN0LXV0aWwnO1xuaW1wb3J0IHsgQ29yZUNvbmZpZyB9IGZyb20gJy4uLy4uL2NvcmUtbGliLm1vZHVsZSc7XG5cbmltcG9ydCB7IEdlb0NvbnRyb2xQb2ludHMgfSBmcm9tICcuLi9jb21tb24vR2VvQ29udHJvbFBvaW50cyc7XG5cblxuLyoqXG4gKiBMaXN0IG9mIEdlby1zcGF0aWFsIHV0aWxpdGllc1xuICogQFJlcXVlc3RIZWFkZXIgWC1BUEktS0VZIFRoZSBrZXkgdG8gaWRlbnRpZnkgdGhlIGFwcGxpY2F0aW9uIChwb3J0YWwpXG4gKiBAUmVxdWVzdEhlYWRlciBYLUFDQ0VTUy1UT0tFTiBUaGUgdG9rZW4gdG8gaWRlbnRpZnkgdGhlIGxvZ2dlZC1pbiB1c2VyIFxuICovXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgR2VvU2VydmljZSB7XG5cbiAgLy8gVVJMIHRvIHdlYiBhcGlcbiAgcHJpdmF0ZSBiYXNlVXJsID0gJy9nZW8nO1xuXG4gIC8qKlxuICAgKiBDbGFzcyBjb25zdHJ1Y3RvclxuICAgKi9cbiAgY29uc3RydWN0b3IoQEluamVjdCgnY29uZmlnJykgcHJpdmF0ZSBjb25maWc6IENvcmVDb25maWcsIHByaXZhdGUgcmVzdDogUmVzdFV0aWwpIHtcbiAgICB0aGlzLmJhc2VVcmwgPSB0aGlzLmNvbmZpZy5hcGkgKyB0aGlzLmJhc2VVcmw7XG4gIH1cblxuXG4gIC8qKlxuICAgKiBEaWdpdGl6ZSBzZW5zb3IgRk9WIG9uIFdHUy04NCBjb29yZGluYXRlIHN5c3RlbVxuICAgKiBFYWNoIEdlb0NvbnRyb2xQb2ludCBpbiB0aGUgbGlzdCBjb21wb3NlZCBvZiBwb2ludCBpbiB0aGUgRk9WIGFuZCBpdHMgcmVmZXJlbmNlZCBjb29yZGluYXRlLlxuICAgKiBUaGUgcG9pbnQgcmVwcmVzZW50cyB0aGUgeCx5IHZhbHVlcyBhIG5vcm1hbGl6ZWQgc2NhbGUgKGVhY2ggYXhpcyBpcyAwIC0gMTAwMClcbiAgICogVGhlIHJldHVybmVkIHZhbHVlIGlzIGEgR2VvUmVmZXJlbmNlIGRhdGEgc3RydWN0dXJlIGRlc2NyaWJlcyB0aGUgY29udG91cnMgb2YgdGhlXG4gICAqIEZPViBvbiB0aGUgaW1hZ2UgYW5kIHRoZSBtYXAgYW5kIFgsWSBmYWN0b3JzIGFuZCBvZmZzZXRzIGZvciB0cmFuc2Zvcm1hdGlvblxuICAgKiBAUmV0dXJuOiBFbnRpdHlSZXNwb25zZTxHZW9SZWZlcmVuY2VEYXRhPlxuICAgKi9cbiAgZ2VvUmVmZXJlbmNlKGJvZHk/OiBHZW9Db250cm9sUG9pbnRzKSB7XG4gICAgcmV0dXJuIHRoaXMucmVzdC5wb3N0KGAke3RoaXMuYmFzZVVybH1gLCB0eXBlb2YgYm9keSA9PT0gJ29iamVjdCcgPyBKU09OLnN0cmluZ2lmeShib2R5KSA6IGJvZHkpO1xuICB9XG5cbn1cbiJdfQ==