import { Injectable, Inject } from '@angular/core';
import { RestUtil } from '../../utils/rest-util';
import { CoreConfig } from '../../config';
import * as i0 from "@angular/core";
import * as i1 from "../../utils/rest-util";
import * as i2 from "../../config";
/**
 * List of license related actions
 * @RequestHeader X-API-KEY The key to identify the application (portal)
 * @RequestHeader X-ACCESS-TOKEN The token to identify the logged-in user
 */
var LicensesService = /** @class */ (function () {
    /**
     * Class constructor
     */
    function LicensesService(config, rest) {
        this.config = config;
        this.rest = rest;
        // URL to web api
        this.baseUrl = '/licenses';
        this.baseUrl = this.config.api + this.baseUrl;
    }
    /**
     * Get cluster id
     * @Return: ActionResponse
     */
    LicensesService.prototype.getClusterId = function () {
        return this.rest.get(this.baseUrl + "/cluster/id");
    };
    /**
     * Get active license (combined license from all licenses)
     * @Return: EntityResponse<License>
     */
    LicensesService.prototype.getActive = function () {
        return this.rest.get(this.baseUrl + "/active");
    };
    /**
     * Get single license by Id
     * @Return: EntityResponse<License>
     */
    LicensesService.prototype.get = function (id) {
        return this.rest.get(this.baseUrl + "/" + id);
    };
    /**
     * Delete license from the system
     * @Return: ActionResponse
     */
    LicensesService.prototype.delete = function (id) {
        return this.rest.delete(this.baseUrl + "/" + id);
    };
    /**
     * Get all licenses
     * @Return: EntitiesResponse<License>
     */
    LicensesService.prototype.getAll = function () {
        return this.rest.get("" + this.baseUrl);
    };
    /**
     * Import license data from file
     * @Return: ActionResponse
     */
    LicensesService.prototype.import = function (licenseFile) {
        return this.rest.upload(licenseFile, this.baseUrl + "/import");
    };
    /** @nocollapse */ LicensesService.ɵfac = function LicensesService_Factory(t) { return new (t || LicensesService)(i0.ɵɵinject('config'), i0.ɵɵinject(i1.RestUtil)); };
    /** @nocollapse */ LicensesService.ɵprov = i0.ɵɵdefineInjectable({ token: LicensesService, factory: LicensesService.ɵfac });
    return LicensesService;
}());
export { LicensesService };
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(LicensesService, [{
        type: Injectable
    }], function () { return [{ type: i2.CoreConfig, decorators: [{
                type: Inject,
                args: ['config']
            }] }, { type: i1.RestUtil }]; }, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGljZW5zZXNTZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGFnZW50dmkvbmctY29yZS1saWIvIiwic291cmNlcyI6WyJsaWIvc2VydmljZXMvbGljZW5zZXNTZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ25ELE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSx1QkFBdUIsQ0FBQztBQUNqRCxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sY0FBYyxDQUFDOzs7O0FBSTFDOzs7O0dBSUc7QUFDSDtJQU1FOztPQUVHO0lBQ0gseUJBQXNDLE1BQWtCLEVBQVUsSUFBYztRQUExQyxXQUFNLEdBQU4sTUFBTSxDQUFZO1FBQVUsU0FBSSxHQUFKLElBQUksQ0FBVTtRQU5oRixpQkFBaUI7UUFDVCxZQUFPLEdBQUcsV0FBVyxDQUFDO1FBTTVCLElBQUksQ0FBQyxPQUFPLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxHQUFHLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQztJQUNoRCxDQUFDO0lBR0Q7OztPQUdHO0lBQ0gsc0NBQVksR0FBWjtRQUNFLE9BQU8sSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUksSUFBSSxDQUFDLE9BQU8sZ0JBQWEsQ0FBQyxDQUFDO0lBQ3JELENBQUM7SUFFRDs7O09BR0c7SUFDSCxtQ0FBUyxHQUFUO1FBQ0UsT0FBTyxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBSSxJQUFJLENBQUMsT0FBTyxZQUFTLENBQUMsQ0FBQztJQUNqRCxDQUFDO0lBRUQ7OztPQUdHO0lBQ0gsNkJBQUcsR0FBSCxVQUFJLEVBQVc7UUFDYixPQUFPLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFJLElBQUksQ0FBQyxPQUFPLFNBQUksRUFBSSxDQUFDLENBQUM7SUFDaEQsQ0FBQztJQUVEOzs7T0FHRztJQUNILGdDQUFNLEdBQU4sVUFBTyxFQUFXO1FBQ2hCLE9BQU8sSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUksSUFBSSxDQUFDLE9BQU8sU0FBSSxFQUFJLENBQUMsQ0FBQztJQUNuRCxDQUFDO0lBRUQ7OztPQUdHO0lBQ0gsZ0NBQU0sR0FBTjtRQUNFLE9BQU8sSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsS0FBRyxJQUFJLENBQUMsT0FBUyxDQUFDLENBQUM7SUFDMUMsQ0FBQztJQUVEOzs7T0FHRztJQUNILGdDQUFNLEdBQU4sVUFBTyxXQUFrQjtRQUN2QixPQUFPLElBQUksQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLFdBQVcsRUFBSSxJQUFJLENBQUMsT0FBTyxZQUFTLENBQUMsQ0FBQztJQUNoRSxDQUFDO3FHQTNEVSxlQUFlLGNBUU4sUUFBUTs4RUFSakIsZUFBZSxXQUFmLGVBQWU7MEJBWjVCO0NBeUVDLEFBOURELElBOERDO1NBN0RZLGVBQWU7a0RBQWYsZUFBZTtjQUQzQixVQUFVOztzQkFTSSxNQUFNO3VCQUFDLFFBQVEiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlLCBJbmplY3QgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFJlc3RVdGlsIH0gZnJvbSAnLi4vLi4vdXRpbHMvcmVzdC11dGlsJztcbmltcG9ydCB7IENvcmVDb25maWcgfSBmcm9tICcuLi8uLi9jb25maWcnO1xuXG5cblxuLyoqXG4gKiBMaXN0IG9mIGxpY2Vuc2UgcmVsYXRlZCBhY3Rpb25zXG4gKiBAUmVxdWVzdEhlYWRlciBYLUFQSS1LRVkgVGhlIGtleSB0byBpZGVudGlmeSB0aGUgYXBwbGljYXRpb24gKHBvcnRhbClcbiAqIEBSZXF1ZXN0SGVhZGVyIFgtQUNDRVNTLVRPS0VOIFRoZSB0b2tlbiB0byBpZGVudGlmeSB0aGUgbG9nZ2VkLWluIHVzZXIgXG4gKi9cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBMaWNlbnNlc1NlcnZpY2Uge1xuXG4gIC8vIFVSTCB0byB3ZWIgYXBpXG4gIHByaXZhdGUgYmFzZVVybCA9ICcvbGljZW5zZXMnO1xuXG4gIC8qKlxuICAgKiBDbGFzcyBjb25zdHJ1Y3RvclxuICAgKi9cbiAgY29uc3RydWN0b3IoQEluamVjdCgnY29uZmlnJykgcHJpdmF0ZSBjb25maWc6IENvcmVDb25maWcsIHByaXZhdGUgcmVzdDogUmVzdFV0aWwpIHtcbiAgICB0aGlzLmJhc2VVcmwgPSB0aGlzLmNvbmZpZy5hcGkgKyB0aGlzLmJhc2VVcmw7XG4gIH1cblxuXG4gIC8qKlxuICAgKiBHZXQgY2x1c3RlciBpZFxuICAgKiBAUmV0dXJuOiBBY3Rpb25SZXNwb25zZVxuICAgKi9cbiAgZ2V0Q2x1c3RlcklkKCkge1xuICAgIHJldHVybiB0aGlzLnJlc3QuZ2V0KGAke3RoaXMuYmFzZVVybH0vY2x1c3Rlci9pZGApO1xuICB9XG5cbiAgLyoqXG4gICAqIEdldCBhY3RpdmUgbGljZW5zZSAoY29tYmluZWQgbGljZW5zZSBmcm9tIGFsbCBsaWNlbnNlcylcbiAgICogQFJldHVybjogRW50aXR5UmVzcG9uc2U8TGljZW5zZT5cbiAgICovXG4gIGdldEFjdGl2ZSgpIHtcbiAgICByZXR1cm4gdGhpcy5yZXN0LmdldChgJHt0aGlzLmJhc2VVcmx9L2FjdGl2ZWApO1xuICB9XG5cbiAgLyoqXG4gICAqIEdldCBzaW5nbGUgbGljZW5zZSBieSBJZFxuICAgKiBAUmV0dXJuOiBFbnRpdHlSZXNwb25zZTxMaWNlbnNlPlxuICAgKi9cbiAgZ2V0KGlkPzogc3RyaW5nKSB7XG4gICAgcmV0dXJuIHRoaXMucmVzdC5nZXQoYCR7dGhpcy5iYXNlVXJsfS8ke2lkfWApO1xuICB9XG5cbiAgLyoqXG4gICAqIERlbGV0ZSBsaWNlbnNlIGZyb20gdGhlIHN5c3RlbVxuICAgKiBAUmV0dXJuOiBBY3Rpb25SZXNwb25zZVxuICAgKi9cbiAgZGVsZXRlKGlkPzogc3RyaW5nKSB7XG4gICAgcmV0dXJuIHRoaXMucmVzdC5kZWxldGUoYCR7dGhpcy5iYXNlVXJsfS8ke2lkfWApO1xuICB9XG5cbiAgLyoqXG4gICAqIEdldCBhbGwgbGljZW5zZXNcbiAgICogQFJldHVybjogRW50aXRpZXNSZXNwb25zZTxMaWNlbnNlPlxuICAgKi9cbiAgZ2V0QWxsKCkge1xuICAgIHJldHVybiB0aGlzLnJlc3QuZ2V0KGAke3RoaXMuYmFzZVVybH1gKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBJbXBvcnQgbGljZW5zZSBkYXRhIGZyb20gZmlsZVxuICAgKiBAUmV0dXJuOiBBY3Rpb25SZXNwb25zZVxuICAgKi9cbiAgaW1wb3J0KGxpY2Vuc2VGaWxlPzogRmlsZSkge1xuICAgIHJldHVybiB0aGlzLnJlc3QudXBsb2FkKGxpY2Vuc2VGaWxlLGAke3RoaXMuYmFzZVVybH0vaW1wb3J0YCk7XG4gIH1cblxufVxuIl19