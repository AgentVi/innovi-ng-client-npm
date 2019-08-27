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
        return this.rest.post(`${this.baseUrl}/`, JSON.stringify(body));
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ2VvU2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BhZ2VudHZpL25nLWNvcmUtbGliLyIsInNvdXJjZXMiOlsibGliL3NlcnZpY2VzL2dlb1NlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ25ELE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSx1QkFBdUIsQ0FBQzs7Ozs7OztBQWFqRCxNQUFNLE9BQU8sVUFBVTs7Ozs7O0lBUXJCLFlBQXNDLE1BQWtCLEVBQVUsSUFBYztRQUExQyxXQUFNLEdBQU4sTUFBTSxDQUFZO1FBQVUsU0FBSSxHQUFKLElBQUksQ0FBVTs7UUFMeEUsWUFBTyxHQUFHLE1BQU0sQ0FBQztRQU12QixJQUFJLENBQUMsT0FBTyxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUMsR0FBRyxHQUFHLElBQUksQ0FBQyxPQUFPLENBQUM7SUFDaEQsQ0FBQzs7Ozs7Ozs7Ozs7SUFXRCxZQUFZLENBQUMsSUFBdUI7UUFDbEMsT0FBTyxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLElBQUksQ0FBQyxPQUFPLEdBQUcsRUFBRSxJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUM7SUFDbEUsQ0FBQzs7O1lBeEJGLFVBQVU7Ozs7NENBU0ksTUFBTSxTQUFDLFFBQVE7WUFyQnJCLFFBQVE7Ozs7Ozs7SUFnQmYsNkJBQXlCOzs7OztJQUtiLDRCQUE0Qzs7Ozs7SUFBRSwwQkFBc0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlLCBJbmplY3QgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFJlc3RVdGlsIH0gZnJvbSAnLi4vLi4vdXRpbHMvcmVzdC11dGlsJztcbmltcG9ydCB7IENvcmVDb25maWcgfSBmcm9tICcuLi8uLi9jb3JlLWxpYi5tb2R1bGUnO1xuXG5pbXBvcnQgeyBHZW9Db250cm9sUG9pbnRzIH0gZnJvbSAnLi4vY29tbW9uL0dlb0NvbnRyb2xQb2ludHMnO1xuXG5cbi8qKlxuICogTGlzdCBvZiBHZW8tc3BhdGlhbCB1dGlsaXRpZXNcbiAqIEBSZXF1ZXN0SGVhZGVyIFgtQVBJLUtFWSBUaGUga2V5IHRvIGlkZW50aWZ5IHRoZSBhcHBsaWNhdGlvbiAocG9ydGFsKVxuICogQFJlcXVlc3RIZWFkZXIgWC1BQ0NFU1MtVE9LRU4gVGhlIHRva2VuIHRvIGlkZW50aWZ5IHRoZSBsb2dnZWQtaW4gdXNlclxuICogQFJlc291cmNlR3JvdXAgVXNlciBBY3Rpb25zIFxuICovXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgR2VvU2VydmljZSB7XG5cbiAgLy8gVVJMIHRvIHdlYiBhcGlcbiAgcHJpdmF0ZSBiYXNlVXJsID0gJy9nZW8nO1xuXG4gIC8qKlxuICAgKiBDbGFzcyBjb25zdHJ1Y3RvclxuICAgKi9cbiAgY29uc3RydWN0b3IoQEluamVjdCgnY29uZmlnJykgcHJpdmF0ZSBjb25maWc6IENvcmVDb25maWcsIHByaXZhdGUgcmVzdDogUmVzdFV0aWwpIHtcbiAgICB0aGlzLmJhc2VVcmwgPSB0aGlzLmNvbmZpZy5hcGkgKyB0aGlzLmJhc2VVcmw7XG4gIH1cblxuXG4gIC8qKlxuICAgKiBEaWdpdGl6ZSBzZW5zb3IgRk9WIG9uIFdHUy04NCBjb29yZGluYXRlIHN5c3RlbVxuICAgKiBFYWNoIEdlb0NvbnRyb2xQb2ludCBpbiB0aGUgbGlzdCBjb21wb3NlZCBvZiBwb2ludCBpbiB0aGUgRk9WIGFuZCBpdHMgcmVmZXJlbmNlZCBjb29yZGluYXRlLlxuICAgKiBUaGUgcG9pbnQgcmVwcmVzZW50cyB0aGUgeCx5IHZhbHVlcyBhIG5vcm1hbGl6ZWQgc2NhbGUgKGVhY2ggYXhpcyBpcyAwIC0gMTAwMClcbiAgICogVGhlIHJldHVybmVkIHZhbHVlIGlzIGEgR2VvUmVmZXJlbmNlIGRhdGEgc3RydWN0dXJlIGRlc2NyaWJlcyB0aGUgY29udG91cnMgb2YgdGhlXG4gICAqIEZPViBvbiB0aGUgaW1hZ2UgYW5kIHRoZSBtYXAgYW5kIFgsWSBmYWN0b3JzIGFuZCBvZmZzZXRzIGZvciB0cmFuc2Zvcm1hdGlvblxuICAgKiBAUmV0dXJuOiBFbnRpdHlSZXNwb25zZTxHZW9SZWZlcmVuY2VEYXRhPlxuICAgKi9cbiAgZ2VvUmVmZXJlbmNlKGJvZHk/OiBHZW9Db250cm9sUG9pbnRzKSB7XG4gICAgcmV0dXJuIHRoaXMucmVzdC5wb3N0KGAke3RoaXMuYmFzZVVybH0vYCwgSlNPTi5zdHJpbmdpZnkoYm9keSkpO1xuICB9XG5cbn1cbiJdfQ==