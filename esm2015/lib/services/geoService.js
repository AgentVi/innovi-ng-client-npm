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
     * The point represents the x,y values a normalized scale (each axis is 0 - 10000)
     * The returned value is a GeoReference data structure describes the contours of the
     * FOV on the image and the map and X,Y factors and offsets for transformation
     * \@Return: EntityResponse<GeoReferenceData>
     * @param {?=} body
     * @return {?}
     */
    geoReference(body) {
        return this.rest.post(`${this.baseUrl}`, typeof body === 'object' ? JSON.stringify(body) : body);
    }
    /**
     * Test transformation, provide the transformation coefficients matrix and a list of arbitrary points and return
     * GeoReferenceData with the transformed coordinates (the number of coordinates is equal to the number of points)
     * \@Return: EntityResponse<GeoReferenceData>
     * @param {?=} body
     * @return {?}
     */
    transform(body) {
        return this.rest.post(`${this.baseUrl}/transform`, typeof body === 'object' ? JSON.stringify(body) : body);
    }
}
GeoService.decorators = [
    { type: Injectable }
];
/** @nocollapse */
GeoService.ctorParameters = () => [
    { type: CoreConfig, decorators: [{ type: Inject, args: ['config',] }] },
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ2VvU2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BhZ2VudHZpL25nLWNvcmUtbGliLyIsInNvdXJjZXMiOlsibGliL3NlcnZpY2VzL2dlb1NlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ25ELE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSx1QkFBdUIsQ0FBQztBQUNqRCxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sY0FBYyxDQUFDOzs7Ozs7QUFZMUMsTUFBTSxPQUFPLFVBQVU7Ozs7OztJQVFyQixZQUFzQyxNQUFrQixFQUFVLElBQWM7UUFBMUMsV0FBTSxHQUFOLE1BQU0sQ0FBWTtRQUFVLFNBQUksR0FBSixJQUFJLENBQVU7O1FBTHhFLFlBQU8sR0FBRyxNQUFNLENBQUM7UUFNdkIsSUFBSSxDQUFDLE9BQU8sR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDLEdBQUcsR0FBRyxJQUFJLENBQUMsT0FBTyxDQUFDO0lBQ2hELENBQUM7Ozs7Ozs7Ozs7O0lBV0QsWUFBWSxDQUFDLElBQXVCO1FBQ2xDLE9BQU8sSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxJQUFJLENBQUMsT0FBTyxFQUFFLEVBQUUsT0FBTyxJQUFJLEtBQUssUUFBUSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUNuRyxDQUFDOzs7Ozs7OztJQU9ELFNBQVMsQ0FBQyxJQUF1QjtRQUMvQixPQUFPLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsSUFBSSxDQUFDLE9BQU8sWUFBWSxFQUFFLE9BQU8sSUFBSSxLQUFLLFFBQVEsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDN0csQ0FBQzs7O1lBakNGLFVBQVU7Ozs7WUFYRixVQUFVLHVCQW9CSixNQUFNLFNBQUMsUUFBUTtZQXJCckIsUUFBUTs7Ozs7OztJQWdCZiw2QkFBeUI7Ozs7O0lBS2IsNEJBQTRDOzs7OztJQUFFLDBCQUFzQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUsIEluamVjdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgUmVzdFV0aWwgfSBmcm9tICcuLi8uLi91dGlscy9yZXN0LXV0aWwnO1xuaW1wb3J0IHsgQ29yZUNvbmZpZyB9IGZyb20gJy4uLy4uL2NvbmZpZyc7XG5cbmltcG9ydCB7IEdlb1JlZmVyZW5jZVRlc3QgfSBmcm9tICcuLi9jb21tb24vR2VvUmVmZXJlbmNlVGVzdCc7XG5pbXBvcnQgeyBHZW9Db250cm9sUG9pbnRzIH0gZnJvbSAnLi4vY29tbW9uL0dlb0NvbnRyb2xQb2ludHMnO1xuXG5cbi8qKlxuICogTGlzdCBvZiBHZW8tc3BhdGlhbCB1dGlsaXRpZXNcbiAqIEBSZXF1ZXN0SGVhZGVyIFgtQVBJLUtFWSBUaGUga2V5IHRvIGlkZW50aWZ5IHRoZSBhcHBsaWNhdGlvbiAocG9ydGFsKVxuICogQFJlcXVlc3RIZWFkZXIgWC1BQ0NFU1MtVE9LRU4gVGhlIHRva2VuIHRvIGlkZW50aWZ5IHRoZSBsb2dnZWQtaW4gdXNlciBcbiAqL1xuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIEdlb1NlcnZpY2Uge1xuXG4gIC8vIFVSTCB0byB3ZWIgYXBpXG4gIHByaXZhdGUgYmFzZVVybCA9ICcvZ2VvJztcblxuICAvKipcbiAgICogQ2xhc3MgY29uc3RydWN0b3JcbiAgICovXG4gIGNvbnN0cnVjdG9yKEBJbmplY3QoJ2NvbmZpZycpIHByaXZhdGUgY29uZmlnOiBDb3JlQ29uZmlnLCBwcml2YXRlIHJlc3Q6IFJlc3RVdGlsKSB7XG4gICAgdGhpcy5iYXNlVXJsID0gdGhpcy5jb25maWcuYXBpICsgdGhpcy5iYXNlVXJsO1xuICB9XG5cblxuICAvKipcbiAgICogRGlnaXRpemUgc2Vuc29yIEZPViBvbiBXR1MtODQgY29vcmRpbmF0ZSBzeXN0ZW1cbiAgICogRWFjaCBHZW9Db250cm9sUG9pbnQgaW4gdGhlIGxpc3QgY29tcG9zZWQgb2YgcG9pbnQgaW4gdGhlIEZPViBhbmQgaXRzIHJlZmVyZW5jZWQgY29vcmRpbmF0ZS5cbiAgICogVGhlIHBvaW50IHJlcHJlc2VudHMgdGhlIHgseSB2YWx1ZXMgYSBub3JtYWxpemVkIHNjYWxlIChlYWNoIGF4aXMgaXMgMCAtIDEwMDAwKVxuICAgKiBUaGUgcmV0dXJuZWQgdmFsdWUgaXMgYSBHZW9SZWZlcmVuY2UgZGF0YSBzdHJ1Y3R1cmUgZGVzY3JpYmVzIHRoZSBjb250b3VycyBvZiB0aGVcbiAgICogRk9WIG9uIHRoZSBpbWFnZSBhbmQgdGhlIG1hcCBhbmQgWCxZIGZhY3RvcnMgYW5kIG9mZnNldHMgZm9yIHRyYW5zZm9ybWF0aW9uXG4gICAqIEBSZXR1cm46IEVudGl0eVJlc3BvbnNlPEdlb1JlZmVyZW5jZURhdGE+XG4gICAqL1xuICBnZW9SZWZlcmVuY2UoYm9keT86IEdlb0NvbnRyb2xQb2ludHMpIHtcbiAgICByZXR1cm4gdGhpcy5yZXN0LnBvc3QoYCR7dGhpcy5iYXNlVXJsfWAsIHR5cGVvZiBib2R5ID09PSAnb2JqZWN0JyA/IEpTT04uc3RyaW5naWZ5KGJvZHkpIDogYm9keSk7XG4gIH1cblxuICAvKipcbiAgICogVGVzdCB0cmFuc2Zvcm1hdGlvbiwgcHJvdmlkZSB0aGUgdHJhbnNmb3JtYXRpb24gY29lZmZpY2llbnRzIG1hdHJpeCBhbmQgYSBsaXN0IG9mIGFyYml0cmFyeSBwb2ludHMgYW5kIHJldHVyblxuICAgKiBHZW9SZWZlcmVuY2VEYXRhIHdpdGggdGhlIHRyYW5zZm9ybWVkIGNvb3JkaW5hdGVzICh0aGUgbnVtYmVyIG9mIGNvb3JkaW5hdGVzIGlzIGVxdWFsIHRvIHRoZSBudW1iZXIgb2YgcG9pbnRzKVxuICAgKiBAUmV0dXJuOiBFbnRpdHlSZXNwb25zZTxHZW9SZWZlcmVuY2VEYXRhPlxuICAgKi9cbiAgdHJhbnNmb3JtKGJvZHk/OiBHZW9SZWZlcmVuY2VUZXN0KSB7XG4gICAgcmV0dXJuIHRoaXMucmVzdC5wb3N0KGAke3RoaXMuYmFzZVVybH0vdHJhbnNmb3JtYCwgdHlwZW9mIGJvZHkgPT09ICdvYmplY3QnID8gSlNPTi5zdHJpbmdpZnkoYm9keSkgOiBib2R5KTtcbiAgfVxuXG59XG4iXX0=