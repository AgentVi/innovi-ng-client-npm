/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable, Inject } from '@angular/core';
import { RestUtil } from '../../utils/rest-util';
/**
 * List of general system configuration actions for system administrator only
 */
var SysSystemService = /** @class */ (function () {
    /**
     * Class constructor
     */
    function SysSystemService(config, rest) {
        this.config = config;
        this.rest = rest;
        // URL to web api
        this.baseUrl = '/sys/system';
        this.baseUrl = this.config.api + this.baseUrl;
    }
    /**
     * Get system license
     * @Return: EntityResponse<License>
     */
    /**
     * Get system license
     * \@Return: EntityResponse<License>
     * @return {?}
     */
    SysSystemService.prototype.getLicense = /**
     * Get system license
     * \@Return: EntityResponse<License>
     * @return {?}
     */
    function () {
        return this.rest.get(this.baseUrl + "/license");
    };
    /**
     * Import license data from file
     * @Return: ActionResponse
     */
    /**
     * Import license data from file
     * \@Return: ActionResponse
     * @return {?}
     */
    SysSystemService.prototype.importLicense = /**
     * Import license data from file
     * \@Return: ActionResponse
     * @return {?}
     */
    function () {
        return this.rest.post(this.baseUrl + "/license", null);
    };
    /**
     * Get system version
     * @Return: ActionResponse
     */
    /**
     * Get system version
     * \@Return: ActionResponse
     * @return {?}
     */
    SysSystemService.prototype.getSystemVersion = /**
     * Get system version
     * \@Return: ActionResponse
     * @return {?}
     */
    function () {
        return this.rest.get(this.baseUrl + "/license");
    };
    /**
     * Export account configuration data
     * @Return: StreamingOutput of the content (gzip)
     */
    /**
     * Export account configuration data
     * \@Return: StreamingOutput of the content (gzip)
     * @param {?=} id
     * @return {?}
     */
    SysSystemService.prototype.exportAccountData = /**
     * Export account configuration data
     * \@Return: StreamingOutput of the content (gzip)
     * @param {?=} id
     * @return {?}
     */
    function (id) {
        return this.rest.get(this.baseUrl + "/export");
    };
    /**
     * Import account configuration data from byte array (zip content)
     * @Return: ActionResponse
     */
    /**
     * Import account configuration data from byte array (zip content)
     * \@Return: ActionResponse
     * @return {?}
     */
    SysSystemService.prototype.importAccountData = /**
     * Import account configuration data from byte array (zip content)
     * \@Return: ActionResponse
     * @return {?}
     */
    function () {
        return this.rest.post(this.baseUrl + "/import", null);
    };
    /**
     * Export SW package configurations data
     * @Return: StreamingOutput of the content (gzip)
     */
    /**
     * Export SW package configurations data
     * \@Return: StreamingOutput of the content (gzip)
     * @param {?=} id
     * @return {?}
     */
    SysSystemService.prototype.exportConfigurations = /**
     * Export SW package configurations data
     * \@Return: StreamingOutput of the content (gzip)
     * @param {?=} id
     * @return {?}
     */
    function (id) {
        return this.rest.get(this.baseUrl + "/configurations/export");
    };
    /**
     * Import SW package configurations data from byte array (zip content)
     * @Return: ActionResponse
     */
    /**
     * Import SW package configurations data from byte array (zip content)
     * \@Return: ActionResponse
     * @return {?}
     */
    SysSystemService.prototype.importConfigurations = /**
     * Import SW package configurations data from byte array (zip content)
     * \@Return: ActionResponse
     * @return {?}
     */
    function () {
        return this.rest.post(this.baseUrl + "/configurations/import", null);
    };
    SysSystemService.decorators = [
        { type: Injectable }
    ];
    /** @nocollapse */
    SysSystemService.ctorParameters = function () { return [
        { type: undefined, decorators: [{ type: Inject, args: ['config',] }] },
        { type: RestUtil }
    ]; };
    return SysSystemService;
}());
export { SysSystemService };
if (false) {
    /**
     * @type {?}
     * @private
     */
    SysSystemService.prototype.baseUrl;
    /**
     * @type {?}
     * @private
     */
    SysSystemService.prototype.config;
    /**
     * @type {?}
     * @private
     */
    SysSystemService.prototype.rest;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3lzU3lzdGVtU2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BhZ2VudHZpL25nLWNvcmUtbGliLyIsInNvdXJjZXMiOlsibGliL3NlcnZpY2VzL3N5c1N5c3RlbVNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ25ELE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSx1QkFBdUIsQ0FBQzs7OztBQVFqRDtJQU1FOztPQUVHO0lBQ0gsMEJBQXNDLE1BQWtCLEVBQVUsSUFBYztRQUExQyxXQUFNLEdBQU4sTUFBTSxDQUFZO1FBQVUsU0FBSSxHQUFKLElBQUksQ0FBVTs7UUFMeEUsWUFBTyxHQUFHLGFBQWEsQ0FBQztRQU05QixJQUFJLENBQUMsT0FBTyxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUMsR0FBRyxHQUFHLElBQUksQ0FBQyxPQUFPLENBQUM7SUFDaEQsQ0FBQztJQUdEOzs7T0FHRzs7Ozs7O0lBQ0gscUNBQVU7Ozs7O0lBQVY7UUFDRSxPQUFPLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFJLElBQUksQ0FBQyxPQUFPLGFBQVUsQ0FBQyxDQUFDO0lBQ2xELENBQUM7SUFFRDs7O09BR0c7Ozs7OztJQUNILHdDQUFhOzs7OztJQUFiO1FBQ0UsT0FBTyxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBSSxJQUFJLENBQUMsT0FBTyxhQUFVLEVBQUUsSUFBSSxDQUFDLENBQUM7SUFDekQsQ0FBQztJQUVEOzs7T0FHRzs7Ozs7O0lBQ0gsMkNBQWdCOzs7OztJQUFoQjtRQUNFLE9BQU8sSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUksSUFBSSxDQUFDLE9BQU8sYUFBVSxDQUFDLENBQUM7SUFDbEQsQ0FBQztJQUVEOzs7T0FHRzs7Ozs7OztJQUNILDRDQUFpQjs7Ozs7O0lBQWpCLFVBQWtCLEVBQVc7UUFDM0IsT0FBTyxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBSSxJQUFJLENBQUMsT0FBTyxZQUFTLENBQUMsQ0FBQztJQUNqRCxDQUFDO0lBRUQ7OztPQUdHOzs7Ozs7SUFDSCw0Q0FBaUI7Ozs7O0lBQWpCO1FBQ0UsT0FBTyxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBSSxJQUFJLENBQUMsT0FBTyxZQUFTLEVBQUUsSUFBSSxDQUFDLENBQUM7SUFDeEQsQ0FBQztJQUVEOzs7T0FHRzs7Ozs7OztJQUNILCtDQUFvQjs7Ozs7O0lBQXBCLFVBQXFCLEVBQVc7UUFDOUIsT0FBTyxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBSSxJQUFJLENBQUMsT0FBTywyQkFBd0IsQ0FBQyxDQUFDO0lBQ2hFLENBQUM7SUFFRDs7O09BR0c7Ozs7OztJQUNILCtDQUFvQjs7Ozs7SUFBcEI7UUFDRSxPQUFPLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFJLElBQUksQ0FBQyxPQUFPLDJCQUF3QixFQUFFLElBQUksQ0FBQyxDQUFDO0lBQ3ZFLENBQUM7O2dCQXBFRixVQUFVOzs7O2dEQVNJLE1BQU0sU0FBQyxRQUFRO2dCQWpCckIsUUFBUTs7SUE4RWpCLHVCQUFDO0NBQUEsQUF0RUQsSUFzRUM7U0FyRVksZ0JBQWdCOzs7Ozs7SUFHM0IsbUNBQWdDOzs7OztJQUtwQixrQ0FBNEM7Ozs7O0lBQUUsZ0NBQXNCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSwgSW5qZWN0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBSZXN0VXRpbCB9IGZyb20gJy4uLy4uL3V0aWxzL3Jlc3QtdXRpbCc7XG5pbXBvcnQgeyBDb3JlQ29uZmlnIH0gZnJvbSAnLi4vLi4vY29yZS1jb25maWcnO1xuXG5cblxuLyoqXG4gKiBMaXN0IG9mIGdlbmVyYWwgc3lzdGVtIGNvbmZpZ3VyYXRpb24gYWN0aW9ucyBmb3Igc3lzdGVtIGFkbWluaXN0cmF0b3Igb25seSBcbiAqL1xuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIFN5c1N5c3RlbVNlcnZpY2Uge1xuXG4gIC8vIFVSTCB0byB3ZWIgYXBpXG4gIHByaXZhdGUgYmFzZVVybCA9ICcvc3lzL3N5c3RlbSc7XG5cbiAgLyoqXG4gICAqIENsYXNzIGNvbnN0cnVjdG9yXG4gICAqL1xuICBjb25zdHJ1Y3RvcihASW5qZWN0KCdjb25maWcnKSBwcml2YXRlIGNvbmZpZzogQ29yZUNvbmZpZywgcHJpdmF0ZSByZXN0OiBSZXN0VXRpbCkge1xuICAgIHRoaXMuYmFzZVVybCA9IHRoaXMuY29uZmlnLmFwaSArIHRoaXMuYmFzZVVybDtcbiAgfVxuXG5cbiAgLyoqXG4gICAqIEdldCBzeXN0ZW0gbGljZW5zZVxuICAgKiBAUmV0dXJuOiBFbnRpdHlSZXNwb25zZTxMaWNlbnNlPlxuICAgKi9cbiAgZ2V0TGljZW5zZSgpIHtcbiAgICByZXR1cm4gdGhpcy5yZXN0LmdldChgJHt0aGlzLmJhc2VVcmx9L2xpY2Vuc2VgKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBJbXBvcnQgbGljZW5zZSBkYXRhIGZyb20gZmlsZVxuICAgKiBAUmV0dXJuOiBBY3Rpb25SZXNwb25zZVxuICAgKi9cbiAgaW1wb3J0TGljZW5zZSgpIHtcbiAgICByZXR1cm4gdGhpcy5yZXN0LnBvc3QoYCR7dGhpcy5iYXNlVXJsfS9saWNlbnNlYCwgbnVsbCk7XG4gIH1cblxuICAvKipcbiAgICogR2V0IHN5c3RlbSB2ZXJzaW9uXG4gICAqIEBSZXR1cm46IEFjdGlvblJlc3BvbnNlXG4gICAqL1xuICBnZXRTeXN0ZW1WZXJzaW9uKCkge1xuICAgIHJldHVybiB0aGlzLnJlc3QuZ2V0KGAke3RoaXMuYmFzZVVybH0vbGljZW5zZWApO1xuICB9XG5cbiAgLyoqXG4gICAqIEV4cG9ydCBhY2NvdW50IGNvbmZpZ3VyYXRpb24gZGF0YVxuICAgKiBAUmV0dXJuOiBTdHJlYW1pbmdPdXRwdXQgb2YgdGhlIGNvbnRlbnQgKGd6aXApXG4gICAqL1xuICBleHBvcnRBY2NvdW50RGF0YShpZD86IHN0cmluZykge1xuICAgIHJldHVybiB0aGlzLnJlc3QuZ2V0KGAke3RoaXMuYmFzZVVybH0vZXhwb3J0YCk7XG4gIH1cblxuICAvKipcbiAgICogSW1wb3J0IGFjY291bnQgY29uZmlndXJhdGlvbiBkYXRhIGZyb20gYnl0ZSBhcnJheSAoemlwIGNvbnRlbnQpXG4gICAqIEBSZXR1cm46IEFjdGlvblJlc3BvbnNlXG4gICAqL1xuICBpbXBvcnRBY2NvdW50RGF0YSgpIHtcbiAgICByZXR1cm4gdGhpcy5yZXN0LnBvc3QoYCR7dGhpcy5iYXNlVXJsfS9pbXBvcnRgLCBudWxsKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBFeHBvcnQgU1cgcGFja2FnZSBjb25maWd1cmF0aW9ucyBkYXRhXG4gICAqIEBSZXR1cm46IFN0cmVhbWluZ091dHB1dCBvZiB0aGUgY29udGVudCAoZ3ppcClcbiAgICovXG4gIGV4cG9ydENvbmZpZ3VyYXRpb25zKGlkPzogc3RyaW5nKSB7XG4gICAgcmV0dXJuIHRoaXMucmVzdC5nZXQoYCR7dGhpcy5iYXNlVXJsfS9jb25maWd1cmF0aW9ucy9leHBvcnRgKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBJbXBvcnQgU1cgcGFja2FnZSBjb25maWd1cmF0aW9ucyBkYXRhIGZyb20gYnl0ZSBhcnJheSAoemlwIGNvbnRlbnQpXG4gICAqIEBSZXR1cm46IEFjdGlvblJlc3BvbnNlXG4gICAqL1xuICBpbXBvcnRDb25maWd1cmF0aW9ucygpIHtcbiAgICByZXR1cm4gdGhpcy5yZXN0LnBvc3QoYCR7dGhpcy5iYXNlVXJsfS9jb25maWd1cmF0aW9ucy9pbXBvcnRgLCBudWxsKTtcbiAgfVxuXG59XG4iXX0=