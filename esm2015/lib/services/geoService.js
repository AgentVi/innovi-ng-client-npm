import { Injectable, Inject } from '@angular/core';
import { RestUtil } from '../../utils/rest-util';
import { CoreConfig } from '../../config';
import * as i0 from "@angular/core";
import * as i1 from "../../utils/rest-util";
import * as i2 from "../../config";
/**
 * List of Geo-spatial utilities
 * @RequestHeader X-API-KEY The key to identify the application (portal)
 * @RequestHeader X-ACCESS-TOKEN The token to identify the logged-in user
 */
export class GeoService {
    /**
     * Class constructor
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
     * @Return: EntityResponse<GeoReferenceData>
     */
    geoReference(body) {
        return this.rest.post(`${this.baseUrl}`, typeof body === 'object' ? JSON.stringify(body) : body);
    }
    /**
     * Test transformation, provide the transformation coefficients matrix and a list of arbitrary points and return
     * GeoReferenceData with the transformed coordinates (the number of coordinates is equal to the number of points)
     * @Return: EntityResponse<GeoReferenceData>
     */
    transform(body) {
        return this.rest.post(`${this.baseUrl}/transform`, typeof body === 'object' ? JSON.stringify(body) : body);
    }
}
/** @nocollapse */ GeoService.ɵfac = function GeoService_Factory(t) { return new (t || GeoService)(i0.ɵɵinject('config'), i0.ɵɵinject(i1.RestUtil)); };
/** @nocollapse */ GeoService.ɵprov = i0.ɵɵdefineInjectable({ token: GeoService, factory: GeoService.ɵfac });
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(GeoService, [{
        type: Injectable
    }], function () { return [{ type: i2.CoreConfig, decorators: [{
                type: Inject,
                args: ['config']
            }] }, { type: i1.RestUtil }]; }, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ2VvU2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiIuLi8uLi8uLi9wcm9qZWN0cy9uZy1jb3JlLWxpYi9zcmMvIiwic291cmNlcyI6WyJsaWIvc2VydmljZXMvZ2VvU2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUNuRCxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sdUJBQXVCLENBQUM7QUFDakQsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGNBQWMsQ0FBQzs7OztBQU0xQzs7OztHQUlHO0FBRUgsTUFBTSxPQUFPLFVBQVU7SUFLckI7O09BRUc7SUFDSCxZQUFzQyxNQUFrQixFQUFVLElBQWM7UUFBMUMsV0FBTSxHQUFOLE1BQU0sQ0FBWTtRQUFVLFNBQUksR0FBSixJQUFJLENBQVU7UUFOaEYsaUJBQWlCO1FBQ1QsWUFBTyxHQUFHLE1BQU0sQ0FBQztRQU12QixJQUFJLENBQUMsT0FBTyxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUMsR0FBRyxHQUFHLElBQUksQ0FBQyxPQUFPLENBQUM7SUFDaEQsQ0FBQztJQUdEOzs7Ozs7O09BT0c7SUFDSCxZQUFZLENBQUMsSUFBdUI7UUFDbEMsT0FBTyxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLElBQUksQ0FBQyxPQUFPLEVBQUUsRUFBRSxPQUFPLElBQUksS0FBSyxRQUFRLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQ25HLENBQUM7SUFFRDs7OztPQUlHO0lBQ0gsU0FBUyxDQUFDLElBQXVCO1FBQy9CLE9BQU8sSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxJQUFJLENBQUMsT0FBTyxZQUFZLEVBQUUsT0FBTyxJQUFJLEtBQUssUUFBUSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUM3RyxDQUFDOzt1RkFoQ1UsVUFBVSxjQVFELFFBQVE7cUVBUmpCLFVBQVUsV0FBVixVQUFVO2tEQUFWLFVBQVU7Y0FEdEIsVUFBVTs7c0JBU0ksTUFBTTt1QkFBQyxRQUFRIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSwgSW5qZWN0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBSZXN0VXRpbCB9IGZyb20gJy4uLy4uL3V0aWxzL3Jlc3QtdXRpbCc7XG5pbXBvcnQgeyBDb3JlQ29uZmlnIH0gZnJvbSAnLi4vLi4vY29uZmlnJztcblxuaW1wb3J0IHsgR2VvUmVmZXJlbmNlVGVzdCB9IGZyb20gJy4uL2NvbW1vbi9HZW9SZWZlcmVuY2VUZXN0JztcbmltcG9ydCB7IEdlb0NvbnRyb2xQb2ludHMgfSBmcm9tICcuLi9jb21tb24vR2VvQ29udHJvbFBvaW50cyc7XG5cblxuLyoqXG4gKiBMaXN0IG9mIEdlby1zcGF0aWFsIHV0aWxpdGllc1xuICogQFJlcXVlc3RIZWFkZXIgWC1BUEktS0VZIFRoZSBrZXkgdG8gaWRlbnRpZnkgdGhlIGFwcGxpY2F0aW9uIChwb3J0YWwpXG4gKiBAUmVxdWVzdEhlYWRlciBYLUFDQ0VTUy1UT0tFTiBUaGUgdG9rZW4gdG8gaWRlbnRpZnkgdGhlIGxvZ2dlZC1pbiB1c2VyIFxuICovXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgR2VvU2VydmljZSB7XG5cbiAgLy8gVVJMIHRvIHdlYiBhcGlcbiAgcHJpdmF0ZSBiYXNlVXJsID0gJy9nZW8nO1xuXG4gIC8qKlxuICAgKiBDbGFzcyBjb25zdHJ1Y3RvclxuICAgKi9cbiAgY29uc3RydWN0b3IoQEluamVjdCgnY29uZmlnJykgcHJpdmF0ZSBjb25maWc6IENvcmVDb25maWcsIHByaXZhdGUgcmVzdDogUmVzdFV0aWwpIHtcbiAgICB0aGlzLmJhc2VVcmwgPSB0aGlzLmNvbmZpZy5hcGkgKyB0aGlzLmJhc2VVcmw7XG4gIH1cblxuXG4gIC8qKlxuICAgKiBEaWdpdGl6ZSBzZW5zb3IgRk9WIG9uIFdHUy04NCBjb29yZGluYXRlIHN5c3RlbVxuICAgKiBFYWNoIEdlb0NvbnRyb2xQb2ludCBpbiB0aGUgbGlzdCBjb21wb3NlZCBvZiBwb2ludCBpbiB0aGUgRk9WIGFuZCBpdHMgcmVmZXJlbmNlZCBjb29yZGluYXRlLlxuICAgKiBUaGUgcG9pbnQgcmVwcmVzZW50cyB0aGUgeCx5IHZhbHVlcyBhIG5vcm1hbGl6ZWQgc2NhbGUgKGVhY2ggYXhpcyBpcyAwIC0gMTAwMDApXG4gICAqIFRoZSByZXR1cm5lZCB2YWx1ZSBpcyBhIEdlb1JlZmVyZW5jZSBkYXRhIHN0cnVjdHVyZSBkZXNjcmliZXMgdGhlIGNvbnRvdXJzIG9mIHRoZVxuICAgKiBGT1Ygb24gdGhlIGltYWdlIGFuZCB0aGUgbWFwIGFuZCBYLFkgZmFjdG9ycyBhbmQgb2Zmc2V0cyBmb3IgdHJhbnNmb3JtYXRpb25cbiAgICogQFJldHVybjogRW50aXR5UmVzcG9uc2U8R2VvUmVmZXJlbmNlRGF0YT5cbiAgICovXG4gIGdlb1JlZmVyZW5jZShib2R5PzogR2VvQ29udHJvbFBvaW50cykge1xuICAgIHJldHVybiB0aGlzLnJlc3QucG9zdChgJHt0aGlzLmJhc2VVcmx9YCwgdHlwZW9mIGJvZHkgPT09ICdvYmplY3QnID8gSlNPTi5zdHJpbmdpZnkoYm9keSkgOiBib2R5KTtcbiAgfVxuXG4gIC8qKlxuICAgKiBUZXN0IHRyYW5zZm9ybWF0aW9uLCBwcm92aWRlIHRoZSB0cmFuc2Zvcm1hdGlvbiBjb2VmZmljaWVudHMgbWF0cml4IGFuZCBhIGxpc3Qgb2YgYXJiaXRyYXJ5IHBvaW50cyBhbmQgcmV0dXJuXG4gICAqIEdlb1JlZmVyZW5jZURhdGEgd2l0aCB0aGUgdHJhbnNmb3JtZWQgY29vcmRpbmF0ZXMgKHRoZSBudW1iZXIgb2YgY29vcmRpbmF0ZXMgaXMgZXF1YWwgdG8gdGhlIG51bWJlciBvZiBwb2ludHMpXG4gICAqIEBSZXR1cm46IEVudGl0eVJlc3BvbnNlPEdlb1JlZmVyZW5jZURhdGE+XG4gICAqL1xuICB0cmFuc2Zvcm0oYm9keT86IEdlb1JlZmVyZW5jZVRlc3QpIHtcbiAgICByZXR1cm4gdGhpcy5yZXN0LnBvc3QoYCR7dGhpcy5iYXNlVXJsfS90cmFuc2Zvcm1gLCB0eXBlb2YgYm9keSA9PT0gJ29iamVjdCcgPyBKU09OLnN0cmluZ2lmeShib2R5KSA6IGJvZHkpO1xuICB9XG5cbn1cbiJdfQ==