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
     * @Return: StreamingOutput of the content (zip)
     */
    /**
     * Export SW package configurations data
     * \@Return: StreamingOutput of the content (zip)
     * @param {?=} id
     * @return {?}
     */
    SysSystemService.prototype.exportConfigurations = /**
     * Export SW package configurations data
     * \@Return: StreamingOutput of the content (zip)
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
        return this.rest.get(this.baseUrl + "/backup");
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3lzU3lzdGVtU2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BhZ2VudHZpL25nLWNvcmUtbGliLyIsInNvdXJjZXMiOlsibGliL3NlcnZpY2VzL3N5c1N5c3RlbVNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ25ELE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSx1QkFBdUIsQ0FBQztBQUNqRCxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sY0FBYyxDQUFDOzs7O0FBTzFDO0lBTUU7O09BRUc7SUFDSCwwQkFBc0MsTUFBa0IsRUFBVSxJQUFjO1FBQTFDLFdBQU0sR0FBTixNQUFNLENBQVk7UUFBVSxTQUFJLEdBQUosSUFBSSxDQUFVOztRQUx4RSxZQUFPLEdBQUcsYUFBYSxDQUFDO1FBTTlCLElBQUksQ0FBQyxPQUFPLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxHQUFHLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQztJQUNoRCxDQUFDO0lBR0Q7OztPQUdHOzs7Ozs7SUFDSCxxQ0FBVTs7Ozs7SUFBVjtRQUNFLE9BQU8sSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUksSUFBSSxDQUFDLE9BQU8sYUFBVSxDQUFDLENBQUM7SUFDbEQsQ0FBQztJQUVEOzs7T0FHRzs7Ozs7O0lBQ0gsd0NBQWE7Ozs7O0lBQWI7UUFDRSxPQUFPLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFJLElBQUksQ0FBQyxPQUFPLGFBQVUsRUFBRSxJQUFJLENBQUMsQ0FBQztJQUN6RCxDQUFDO0lBRUQ7OztPQUdHOzs7Ozs7SUFDSCwyQ0FBZ0I7Ozs7O0lBQWhCO1FBQ0UsT0FBTyxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBSSxJQUFJLENBQUMsT0FBTyxhQUFVLENBQUMsQ0FBQztJQUNsRCxDQUFDO0lBRUQ7OztPQUdHOzs7Ozs7O0lBQ0gsNENBQWlCOzs7Ozs7SUFBakIsVUFBa0IsRUFBVztRQUMzQixPQUFPLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFJLElBQUksQ0FBQyxPQUFPLFlBQVMsQ0FBQyxDQUFDO0lBQ2pELENBQUM7SUFFRDs7O09BR0c7Ozs7OztJQUNILDRDQUFpQjs7Ozs7SUFBakI7UUFDRSxPQUFPLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFJLElBQUksQ0FBQyxPQUFPLFlBQVMsRUFBRSxJQUFJLENBQUMsQ0FBQztJQUN4RCxDQUFDO0lBRUQ7OztPQUdHOzs7Ozs7O0lBQ0gsK0NBQW9COzs7Ozs7SUFBcEIsVUFBcUIsRUFBVztRQUM5QixPQUFPLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFJLElBQUksQ0FBQyxPQUFPLDJCQUF3QixDQUFDLENBQUM7SUFDaEUsQ0FBQztJQUVEOzs7T0FHRzs7Ozs7O0lBQ0gsK0NBQW9COzs7OztJQUFwQjtRQUNFLE9BQU8sSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUksSUFBSSxDQUFDLE9BQU8sMkJBQXdCLEVBQUUsSUFBSSxDQUFDLENBQUM7SUFDdkUsQ0FBQztJQUVEOzs7T0FHRzs7Ozs7O0lBQ0gsdUNBQVk7Ozs7O0lBQVo7UUFDRSxPQUFPLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFJLElBQUksQ0FBQyxPQUFPLFlBQVMsQ0FBQyxDQUFDO0lBQ2pELENBQUM7SUFFRDs7O09BR0c7Ozs7OztJQUNILHdDQUFhOzs7OztJQUFiO1FBQ0UsT0FBTyxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBSSxJQUFJLENBQUMsT0FBTyxhQUFVLEVBQUUsSUFBSSxDQUFDLENBQUM7SUFDekQsQ0FBQzs7Z0JBcEZGLFVBQVU7Ozs7Z0JBUEYsVUFBVSx1QkFnQkosTUFBTSxTQUFDLFFBQVE7Z0JBakJyQixRQUFROztJQThGakIsdUJBQUM7Q0FBQSxBQXRGRCxJQXNGQztTQXJGWSxnQkFBZ0I7Ozs7OztJQUczQixtQ0FBZ0M7Ozs7O0lBS3BCLGtDQUE0Qzs7Ozs7SUFBRSxnQ0FBc0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlLCBJbmplY3QgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFJlc3RVdGlsIH0gZnJvbSAnLi4vLi4vdXRpbHMvcmVzdC11dGlsJztcbmltcG9ydCB7IENvcmVDb25maWcgfSBmcm9tICcuLi8uLi9jb25maWcnO1xuXG5cblxuLyoqXG4gKiBMaXN0IG9mIGdlbmVyYWwgc3lzdGVtIGNvbmZpZ3VyYXRpb24gYWN0aW9ucyBmb3Igc3lzdGVtIGFkbWluaXN0cmF0b3Igb25seSBcbiAqL1xuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIFN5c1N5c3RlbVNlcnZpY2Uge1xuXG4gIC8vIFVSTCB0byB3ZWIgYXBpXG4gIHByaXZhdGUgYmFzZVVybCA9ICcvc3lzL3N5c3RlbSc7XG5cbiAgLyoqXG4gICAqIENsYXNzIGNvbnN0cnVjdG9yXG4gICAqL1xuICBjb25zdHJ1Y3RvcihASW5qZWN0KCdjb25maWcnKSBwcml2YXRlIGNvbmZpZzogQ29yZUNvbmZpZywgcHJpdmF0ZSByZXN0OiBSZXN0VXRpbCkge1xuICAgIHRoaXMuYmFzZVVybCA9IHRoaXMuY29uZmlnLmFwaSArIHRoaXMuYmFzZVVybDtcbiAgfVxuXG5cbiAgLyoqXG4gICAqIEdldCBzeXN0ZW0gbGljZW5zZVxuICAgKiBAUmV0dXJuOiBFbnRpdHlSZXNwb25zZTxMaWNlbnNlPlxuICAgKi9cbiAgZ2V0TGljZW5zZSgpIHtcbiAgICByZXR1cm4gdGhpcy5yZXN0LmdldChgJHt0aGlzLmJhc2VVcmx9L2xpY2Vuc2VgKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBJbXBvcnQgbGljZW5zZSBkYXRhIGZyb20gZmlsZVxuICAgKiBAUmV0dXJuOiBBY3Rpb25SZXNwb25zZVxuICAgKi9cbiAgaW1wb3J0TGljZW5zZSgpIHtcbiAgICByZXR1cm4gdGhpcy5yZXN0LnBvc3QoYCR7dGhpcy5iYXNlVXJsfS9saWNlbnNlYCwgbnVsbCk7XG4gIH1cblxuICAvKipcbiAgICogR2V0IHN5c3RlbSB2ZXJzaW9uXG4gICAqIEBSZXR1cm46IEFjdGlvblJlc3BvbnNlXG4gICAqL1xuICBnZXRTeXN0ZW1WZXJzaW9uKCkge1xuICAgIHJldHVybiB0aGlzLnJlc3QuZ2V0KGAke3RoaXMuYmFzZVVybH0vbGljZW5zZWApO1xuICB9XG5cbiAgLyoqXG4gICAqIEV4cG9ydCBhY2NvdW50IGNvbmZpZ3VyYXRpb24gZGF0YVxuICAgKiBAUmV0dXJuOiBTdHJlYW1pbmdPdXRwdXQgb2YgdGhlIGNvbnRlbnQgKGd6aXApXG4gICAqL1xuICBleHBvcnRBY2NvdW50RGF0YShpZD86IHN0cmluZykge1xuICAgIHJldHVybiB0aGlzLnJlc3QuZ2V0KGAke3RoaXMuYmFzZVVybH0vZXhwb3J0YCk7XG4gIH1cblxuICAvKipcbiAgICogSW1wb3J0IGFjY291bnQgY29uZmlndXJhdGlvbiBkYXRhIGZyb20gYnl0ZSBhcnJheSAoemlwIGNvbnRlbnQpXG4gICAqIEBSZXR1cm46IEFjdGlvblJlc3BvbnNlXG4gICAqL1xuICBpbXBvcnRBY2NvdW50RGF0YSgpIHtcbiAgICByZXR1cm4gdGhpcy5yZXN0LnBvc3QoYCR7dGhpcy5iYXNlVXJsfS9pbXBvcnRgLCBudWxsKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBFeHBvcnQgU1cgcGFja2FnZSBjb25maWd1cmF0aW9ucyBkYXRhXG4gICAqIEBSZXR1cm46IFN0cmVhbWluZ091dHB1dCBvZiB0aGUgY29udGVudCAoemlwKVxuICAgKi9cbiAgZXhwb3J0Q29uZmlndXJhdGlvbnMoaWQ/OiBzdHJpbmcpIHtcbiAgICByZXR1cm4gdGhpcy5yZXN0LmdldChgJHt0aGlzLmJhc2VVcmx9L2NvbmZpZ3VyYXRpb25zL2V4cG9ydGApO1xuICB9XG5cbiAgLyoqXG4gICAqIEltcG9ydCBTVyBwYWNrYWdlIGNvbmZpZ3VyYXRpb25zIGRhdGEgZnJvbSBieXRlIGFycmF5ICh6aXAgY29udGVudClcbiAgICogQFJldHVybjogQWN0aW9uUmVzcG9uc2VcbiAgICovXG4gIGltcG9ydENvbmZpZ3VyYXRpb25zKCkge1xuICAgIHJldHVybiB0aGlzLnJlc3QucG9zdChgJHt0aGlzLmJhc2VVcmx9L2NvbmZpZ3VyYXRpb25zL2ltcG9ydGAsIG51bGwpO1xuICB9XG5cbiAgLyoqXG4gICAqIEJhY2t1cCBlbnRpcmUgc3lzdGVtIChjb25maWd1cmF0aW9ucywgdXNlcnMgYW5kIGFjY291bnRzKVxuICAgKiBAUmV0dXJuOiBTdHJlYW1pbmdPdXRwdXQgb2YgdGhlIGNvbnRlbnQgKHppcClcbiAgICovXG4gIGJhY2t1cFN5c3RlbSgpIHtcbiAgICByZXR1cm4gdGhpcy5yZXN0LmdldChgJHt0aGlzLmJhc2VVcmx9L2JhY2t1cGApO1xuICB9XG5cbiAgLyoqXG4gICAqIFJlc3RvcmUgZW50aXJlIHN5c3RlbSAoemlwIGNvbnRlbnQpXG4gICAqIEBSZXR1cm46IEFjdGlvblJlc3BvbnNlXG4gICAqL1xuICByZXN0b3JlU3lzdGVtKCkge1xuICAgIHJldHVybiB0aGlzLnJlc3QucG9zdChgJHt0aGlzLmJhc2VVcmx9L3Jlc3RvcmVgLCBudWxsKTtcbiAgfVxuXG59XG4iXX0=