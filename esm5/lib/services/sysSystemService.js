/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable, Inject } from '@angular/core';
import { RestUtil } from '../../utils/rest-util';
import { CoreConfig } from '../../config';
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
     * @param {?=} accountId
     * @return {?}
     */
    SysSystemService.prototype.exportAccountData = /**
     * Export account configuration data
     * \@Return: StreamingOutput of the content (gzip)
     * @param {?=} accountId
     * @return {?}
     */
    function (accountId) {
        return this.rest.download("sys-system", this.baseUrl + "/accounts/export");
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
        return this.rest.post(this.baseUrl + "/accounts/import", null);
    };
    /**
     * Export SW package configurations data
     * @Return: StreamingOutput of the content (zip)
     */
    /**
     * Export SW package configurations data
     * \@Return: StreamingOutput of the content (zip)
     * @return {?}
     */
    SysSystemService.prototype.exportConfigurations = /**
     * Export SW package configurations data
     * \@Return: StreamingOutput of the content (zip)
     * @return {?}
     */
    function () {
        return this.rest.download("sys-system", this.baseUrl + "/configurations/export");
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
    /**
     * Backup entire system (configurations, users and accounts)
     * @Return: StreamingOutput of the content (zip)
     */
    /**
     * Backup entire system (configurations, users and accounts)
     * \@Return: StreamingOutput of the content (zip)
     * @return {?}
     */
    SysSystemService.prototype.backupSystem = /**
     * Backup entire system (configurations, users and accounts)
     * \@Return: StreamingOutput of the content (zip)
     * @return {?}
     */
    function () {
        return this.rest.download("sys-system", this.baseUrl + "/backup");
    };
    /**
     * Restore entire system (zip content)
     * @Return: ActionResponse
     */
    /**
     * Restore entire system (zip content)
     * \@Return: ActionResponse
     * @return {?}
     */
    SysSystemService.prototype.restoreSystem = /**
     * Restore entire system (zip content)
     * \@Return: ActionResponse
     * @return {?}
     */
    function () {
        return this.rest.post(this.baseUrl + "/restore", null);
    };
    SysSystemService.decorators = [
        { type: Injectable }
    ];
    /** @nocollapse */
    SysSystemService.ctorParameters = function () { return [
        { type: CoreConfig, decorators: [{ type: Inject, args: ['config',] }] },
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3lzU3lzdGVtU2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BhZ2VudHZpL25nLWNvcmUtbGliLyIsInNvdXJjZXMiOlsibGliL3NlcnZpY2VzL3N5c1N5c3RlbVNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ25ELE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSx1QkFBdUIsQ0FBQztBQUNqRCxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sY0FBYyxDQUFDOzs7O0FBTzFDO0lBTUU7O09BRUc7SUFDSCwwQkFBc0MsTUFBa0IsRUFBVSxJQUFjO1FBQTFDLFdBQU0sR0FBTixNQUFNLENBQVk7UUFBVSxTQUFJLEdBQUosSUFBSSxDQUFVOztRQUx4RSxZQUFPLEdBQUcsYUFBYSxDQUFDO1FBTTlCLElBQUksQ0FBQyxPQUFPLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxHQUFHLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQztJQUNoRCxDQUFDO0lBR0Q7OztPQUdHOzs7Ozs7SUFDSCxxQ0FBVTs7Ozs7SUFBVjtRQUNFLE9BQU8sSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUksSUFBSSxDQUFDLE9BQU8sYUFBVSxDQUFDLENBQUM7SUFDbEQsQ0FBQztJQUVEOzs7T0FHRzs7Ozs7O0lBQ0gsd0NBQWE7Ozs7O0lBQWI7UUFDRSxPQUFPLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFJLElBQUksQ0FBQyxPQUFPLGFBQVUsRUFBRSxJQUFJLENBQUMsQ0FBQztJQUN6RCxDQUFDO0lBRUQ7OztPQUdHOzs7Ozs7SUFDSCwyQ0FBZ0I7Ozs7O0lBQWhCO1FBQ0UsT0FBTyxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBSSxJQUFJLENBQUMsT0FBTyxhQUFVLENBQUMsQ0FBQztJQUNsRCxDQUFDO0lBRUQ7OztPQUdHOzs7Ozs7O0lBQ0gsNENBQWlCOzs7Ozs7SUFBakIsVUFBa0IsU0FBa0I7UUFDbEMsT0FBTyxJQUFJLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxZQUFZLEVBQUksSUFBSSxDQUFDLE9BQU8scUJBQWtCLENBQUMsQ0FBQztJQUM1RSxDQUFDO0lBRUQ7OztPQUdHOzs7Ozs7SUFDSCw0Q0FBaUI7Ozs7O0lBQWpCO1FBQ0UsT0FBTyxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBSSxJQUFJLENBQUMsT0FBTyxxQkFBa0IsRUFBRSxJQUFJLENBQUMsQ0FBQztJQUNqRSxDQUFDO0lBRUQ7OztPQUdHOzs7Ozs7SUFDSCwrQ0FBb0I7Ozs7O0lBQXBCO1FBQ0UsT0FBTyxJQUFJLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxZQUFZLEVBQUksSUFBSSxDQUFDLE9BQU8sMkJBQXdCLENBQUMsQ0FBQztJQUNsRixDQUFDO0lBRUQ7OztPQUdHOzs7Ozs7SUFDSCwrQ0FBb0I7Ozs7O0lBQXBCO1FBQ0UsT0FBTyxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBSSxJQUFJLENBQUMsT0FBTywyQkFBd0IsRUFBRSxJQUFJLENBQUMsQ0FBQztJQUN2RSxDQUFDO0lBRUQ7OztPQUdHOzs7Ozs7SUFDSCx1Q0FBWTs7Ozs7SUFBWjtRQUNFLE9BQU8sSUFBSSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsWUFBWSxFQUFJLElBQUksQ0FBQyxPQUFPLFlBQVMsQ0FBQyxDQUFDO0lBQ25FLENBQUM7SUFFRDs7O09BR0c7Ozs7OztJQUNILHdDQUFhOzs7OztJQUFiO1FBQ0UsT0FBTyxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBSSxJQUFJLENBQUMsT0FBTyxhQUFVLEVBQUUsSUFBSSxDQUFDLENBQUM7SUFDekQsQ0FBQzs7Z0JBcEZGLFVBQVU7Ozs7Z0JBUEYsVUFBVSx1QkFnQkosTUFBTSxTQUFDLFFBQVE7Z0JBakJyQixRQUFROztJQThGakIsdUJBQUM7Q0FBQSxBQXRGRCxJQXNGQztTQXJGWSxnQkFBZ0I7Ozs7OztJQUczQixtQ0FBZ0M7Ozs7O0lBS3BCLGtDQUE0Qzs7Ozs7SUFBRSxnQ0FBc0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlLCBJbmplY3QgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFJlc3RVdGlsIH0gZnJvbSAnLi4vLi4vdXRpbHMvcmVzdC11dGlsJztcbmltcG9ydCB7IENvcmVDb25maWcgfSBmcm9tICcuLi8uLi9jb25maWcnO1xuXG5cblxuLyoqXG4gKiBMaXN0IG9mIGdlbmVyYWwgc3lzdGVtIGNvbmZpZ3VyYXRpb24gYWN0aW9ucyBmb3Igc3lzdGVtIGFkbWluaXN0cmF0b3Igb25seSBcbiAqL1xuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIFN5c1N5c3RlbVNlcnZpY2Uge1xuXG4gIC8vIFVSTCB0byB3ZWIgYXBpXG4gIHByaXZhdGUgYmFzZVVybCA9ICcvc3lzL3N5c3RlbSc7XG5cbiAgLyoqXG4gICAqIENsYXNzIGNvbnN0cnVjdG9yXG4gICAqL1xuICBjb25zdHJ1Y3RvcihASW5qZWN0KCdjb25maWcnKSBwcml2YXRlIGNvbmZpZzogQ29yZUNvbmZpZywgcHJpdmF0ZSByZXN0OiBSZXN0VXRpbCkge1xuICAgIHRoaXMuYmFzZVVybCA9IHRoaXMuY29uZmlnLmFwaSArIHRoaXMuYmFzZVVybDtcbiAgfVxuXG5cbiAgLyoqXG4gICAqIEdldCBzeXN0ZW0gbGljZW5zZVxuICAgKiBAUmV0dXJuOiBFbnRpdHlSZXNwb25zZTxMaWNlbnNlPlxuICAgKi9cbiAgZ2V0TGljZW5zZSgpIHtcbiAgICByZXR1cm4gdGhpcy5yZXN0LmdldChgJHt0aGlzLmJhc2VVcmx9L2xpY2Vuc2VgKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBJbXBvcnQgbGljZW5zZSBkYXRhIGZyb20gZmlsZVxuICAgKiBAUmV0dXJuOiBBY3Rpb25SZXNwb25zZVxuICAgKi9cbiAgaW1wb3J0TGljZW5zZSgpIHtcbiAgICByZXR1cm4gdGhpcy5yZXN0LnBvc3QoYCR7dGhpcy5iYXNlVXJsfS9saWNlbnNlYCwgbnVsbCk7XG4gIH1cblxuICAvKipcbiAgICogR2V0IHN5c3RlbSB2ZXJzaW9uXG4gICAqIEBSZXR1cm46IEFjdGlvblJlc3BvbnNlXG4gICAqL1xuICBnZXRTeXN0ZW1WZXJzaW9uKCkge1xuICAgIHJldHVybiB0aGlzLnJlc3QuZ2V0KGAke3RoaXMuYmFzZVVybH0vbGljZW5zZWApO1xuICB9XG5cbiAgLyoqXG4gICAqIEV4cG9ydCBhY2NvdW50IGNvbmZpZ3VyYXRpb24gZGF0YVxuICAgKiBAUmV0dXJuOiBTdHJlYW1pbmdPdXRwdXQgb2YgdGhlIGNvbnRlbnQgKGd6aXApXG4gICAqL1xuICBleHBvcnRBY2NvdW50RGF0YShhY2NvdW50SWQ/OiBzdHJpbmcpIHtcbiAgICByZXR1cm4gdGhpcy5yZXN0LmRvd25sb2FkKGBzeXMtc3lzdGVtYCxgJHt0aGlzLmJhc2VVcmx9L2FjY291bnRzL2V4cG9ydGApO1xuICB9XG5cbiAgLyoqXG4gICAqIEltcG9ydCBhY2NvdW50IGNvbmZpZ3VyYXRpb24gZGF0YSBmcm9tIGJ5dGUgYXJyYXkgKHppcCBjb250ZW50KVxuICAgKiBAUmV0dXJuOiBBY3Rpb25SZXNwb25zZVxuICAgKi9cbiAgaW1wb3J0QWNjb3VudERhdGEoKSB7XG4gICAgcmV0dXJuIHRoaXMucmVzdC5wb3N0KGAke3RoaXMuYmFzZVVybH0vYWNjb3VudHMvaW1wb3J0YCwgbnVsbCk7XG4gIH1cblxuICAvKipcbiAgICogRXhwb3J0IFNXIHBhY2thZ2UgY29uZmlndXJhdGlvbnMgZGF0YVxuICAgKiBAUmV0dXJuOiBTdHJlYW1pbmdPdXRwdXQgb2YgdGhlIGNvbnRlbnQgKHppcClcbiAgICovXG4gIGV4cG9ydENvbmZpZ3VyYXRpb25zKCkge1xuICAgIHJldHVybiB0aGlzLnJlc3QuZG93bmxvYWQoYHN5cy1zeXN0ZW1gLGAke3RoaXMuYmFzZVVybH0vY29uZmlndXJhdGlvbnMvZXhwb3J0YCk7XG4gIH1cblxuICAvKipcbiAgICogSW1wb3J0IFNXIHBhY2thZ2UgY29uZmlndXJhdGlvbnMgZGF0YSBmcm9tIGJ5dGUgYXJyYXkgKHppcCBjb250ZW50KVxuICAgKiBAUmV0dXJuOiBBY3Rpb25SZXNwb25zZVxuICAgKi9cbiAgaW1wb3J0Q29uZmlndXJhdGlvbnMoKSB7XG4gICAgcmV0dXJuIHRoaXMucmVzdC5wb3N0KGAke3RoaXMuYmFzZVVybH0vY29uZmlndXJhdGlvbnMvaW1wb3J0YCwgbnVsbCk7XG4gIH1cblxuICAvKipcbiAgICogQmFja3VwIGVudGlyZSBzeXN0ZW0gKGNvbmZpZ3VyYXRpb25zLCB1c2VycyBhbmQgYWNjb3VudHMpXG4gICAqIEBSZXR1cm46IFN0cmVhbWluZ091dHB1dCBvZiB0aGUgY29udGVudCAoemlwKVxuICAgKi9cbiAgYmFja3VwU3lzdGVtKCkge1xuICAgIHJldHVybiB0aGlzLnJlc3QuZG93bmxvYWQoYHN5cy1zeXN0ZW1gLGAke3RoaXMuYmFzZVVybH0vYmFja3VwYCk7XG4gIH1cblxuICAvKipcbiAgICogUmVzdG9yZSBlbnRpcmUgc3lzdGVtICh6aXAgY29udGVudClcbiAgICogQFJldHVybjogQWN0aW9uUmVzcG9uc2VcbiAgICovXG4gIHJlc3RvcmVTeXN0ZW0oKSB7XG4gICAgcmV0dXJuIHRoaXMucmVzdC5wb3N0KGAke3RoaXMuYmFzZVVybH0vcmVzdG9yZWAsIG51bGwpO1xuICB9XG5cbn1cbiJdfQ==