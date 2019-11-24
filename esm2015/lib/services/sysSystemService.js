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
export class SysSystemService {
    /**
     * Class constructor
     * @param {?} config
     * @param {?} rest
     */
    constructor(config, rest) {
        this.config = config;
        this.rest = rest;
        // URL to web api
        this.baseUrl = '/sys/system';
        this.baseUrl = this.config.api + this.baseUrl;
    }
    /**
     * Get system license
     * \@Return: EntityResponse<License>
     * @return {?}
     */
    getLicense() {
        return this.rest.get(`${this.baseUrl}/license`);
    }
    /**
     * Import license data from file
     * \@Return: ActionResponse
     * @return {?}
     */
    importLicense() {
        return this.rest.post(`${this.baseUrl}/license`, null);
    }
    /**
     * Get system version
     * \@Return: ActionResponse
     * @return {?}
     */
    getSystemVersion() {
        return this.rest.get(`${this.baseUrl}/license`);
    }
    /**
     * Export account configuration data
     * \@Return: StreamingOutput of the content (gzip)
     * @param {?=} id
     * @return {?}
     */
    exportAccountData(id) {
        return this.rest.download(`${this.baseUrl}/export`);
    }
    /**
     * Import account configuration data from byte array (zip content)
     * \@Return: ActionResponse
     * @return {?}
     */
    importAccountData() {
        return this.rest.post(`${this.baseUrl}/import`, null);
    }
    /**
     * Export SW package configurations data
     * \@Return: StreamingOutput of the content (zip)
     * @param {?=} id
     * @return {?}
     */
    exportConfigurations(id) {
        return this.rest.download(`${this.baseUrl}/configurations/export`);
    }
    /**
     * Import SW package configurations data from byte array (zip content)
     * \@Return: ActionResponse
     * @return {?}
     */
    importConfigurations() {
        return this.rest.post(`${this.baseUrl}/configurations/import`, null);
    }
    /**
     * Backup entire system (configurations, users and accounts)
     * \@Return: StreamingOutput of the content (zip)
     * @return {?}
     */
    backupSystem() {
        return this.rest.download(`${this.baseUrl}/backup`);
    }
    /**
     * Restore entire system (zip content)
     * \@Return: ActionResponse
     * @return {?}
     */
    restoreSystem() {
        return this.rest.post(`${this.baseUrl}/restore`, null);
    }
}
SysSystemService.decorators = [
    { type: Injectable }
];
/** @nocollapse */
SysSystemService.ctorParameters = () => [
    { type: CoreConfig, decorators: [{ type: Inject, args: ['config',] }] },
    { type: RestUtil }
];
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3lzU3lzdGVtU2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BhZ2VudHZpL25nLWNvcmUtbGliLyIsInNvdXJjZXMiOlsibGliL3NlcnZpY2VzL3N5c1N5c3RlbVNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ25ELE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSx1QkFBdUIsQ0FBQztBQUNqRCxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sY0FBYyxDQUFDOzs7O0FBUTFDLE1BQU0sT0FBTyxnQkFBZ0I7Ozs7OztJQVEzQixZQUFzQyxNQUFrQixFQUFVLElBQWM7UUFBMUMsV0FBTSxHQUFOLE1BQU0sQ0FBWTtRQUFVLFNBQUksR0FBSixJQUFJLENBQVU7O1FBTHhFLFlBQU8sR0FBRyxhQUFhLENBQUM7UUFNOUIsSUFBSSxDQUFDLE9BQU8sR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDLEdBQUcsR0FBRyxJQUFJLENBQUMsT0FBTyxDQUFDO0lBQ2hELENBQUM7Ozs7OztJQU9ELFVBQVU7UUFDUixPQUFPLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLEdBQUcsSUFBSSxDQUFDLE9BQU8sVUFBVSxDQUFDLENBQUM7SUFDbEQsQ0FBQzs7Ozs7O0lBTUQsYUFBYTtRQUNYLE9BQU8sSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxJQUFJLENBQUMsT0FBTyxVQUFVLEVBQUUsSUFBSSxDQUFDLENBQUM7SUFDekQsQ0FBQzs7Ozs7O0lBTUQsZ0JBQWdCO1FBQ2QsT0FBTyxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxHQUFHLElBQUksQ0FBQyxPQUFPLFVBQVUsQ0FBQyxDQUFDO0lBQ2xELENBQUM7Ozs7Ozs7SUFNRCxpQkFBaUIsQ0FBQyxFQUFXO1FBQzNCLE9BQU8sSUFBSSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsR0FBRyxJQUFJLENBQUMsT0FBTyxTQUFTLENBQUMsQ0FBQztJQUN0RCxDQUFDOzs7Ozs7SUFNRCxpQkFBaUI7UUFDZixPQUFPLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsSUFBSSxDQUFDLE9BQU8sU0FBUyxFQUFFLElBQUksQ0FBQyxDQUFDO0lBQ3hELENBQUM7Ozs7Ozs7SUFNRCxvQkFBb0IsQ0FBQyxFQUFXO1FBQzlCLE9BQU8sSUFBSSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsR0FBRyxJQUFJLENBQUMsT0FBTyx3QkFBd0IsQ0FBQyxDQUFDO0lBQ3JFLENBQUM7Ozs7OztJQU1ELG9CQUFvQjtRQUNsQixPQUFPLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsSUFBSSxDQUFDLE9BQU8sd0JBQXdCLEVBQUUsSUFBSSxDQUFDLENBQUM7SUFDdkUsQ0FBQzs7Ozs7O0lBTUQsWUFBWTtRQUNWLE9BQU8sSUFBSSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsR0FBRyxJQUFJLENBQUMsT0FBTyxTQUFTLENBQUMsQ0FBQztJQUN0RCxDQUFDOzs7Ozs7SUFNRCxhQUFhO1FBQ1gsT0FBTyxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLElBQUksQ0FBQyxPQUFPLFVBQVUsRUFBRSxJQUFJLENBQUMsQ0FBQztJQUN6RCxDQUFDOzs7WUFwRkYsVUFBVTs7OztZQVBGLFVBQVUsdUJBZ0JKLE1BQU0sU0FBQyxRQUFRO1lBakJyQixRQUFROzs7Ozs7O0lBWWYsbUNBQWdDOzs7OztJQUtwQixrQ0FBNEM7Ozs7O0lBQUUsZ0NBQXNCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSwgSW5qZWN0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBSZXN0VXRpbCB9IGZyb20gJy4uLy4uL3V0aWxzL3Jlc3QtdXRpbCc7XG5pbXBvcnQgeyBDb3JlQ29uZmlnIH0gZnJvbSAnLi4vLi4vY29uZmlnJztcblxuXG5cbi8qKlxuICogTGlzdCBvZiBnZW5lcmFsIHN5c3RlbSBjb25maWd1cmF0aW9uIGFjdGlvbnMgZm9yIHN5c3RlbSBhZG1pbmlzdHJhdG9yIG9ubHkgXG4gKi9cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBTeXNTeXN0ZW1TZXJ2aWNlIHtcblxuICAvLyBVUkwgdG8gd2ViIGFwaVxuICBwcml2YXRlIGJhc2VVcmwgPSAnL3N5cy9zeXN0ZW0nO1xuXG4gIC8qKlxuICAgKiBDbGFzcyBjb25zdHJ1Y3RvclxuICAgKi9cbiAgY29uc3RydWN0b3IoQEluamVjdCgnY29uZmlnJykgcHJpdmF0ZSBjb25maWc6IENvcmVDb25maWcsIHByaXZhdGUgcmVzdDogUmVzdFV0aWwpIHtcbiAgICB0aGlzLmJhc2VVcmwgPSB0aGlzLmNvbmZpZy5hcGkgKyB0aGlzLmJhc2VVcmw7XG4gIH1cblxuXG4gIC8qKlxuICAgKiBHZXQgc3lzdGVtIGxpY2Vuc2VcbiAgICogQFJldHVybjogRW50aXR5UmVzcG9uc2U8TGljZW5zZT5cbiAgICovXG4gIGdldExpY2Vuc2UoKSB7XG4gICAgcmV0dXJuIHRoaXMucmVzdC5nZXQoYCR7dGhpcy5iYXNlVXJsfS9saWNlbnNlYCk7XG4gIH1cblxuICAvKipcbiAgICogSW1wb3J0IGxpY2Vuc2UgZGF0YSBmcm9tIGZpbGVcbiAgICogQFJldHVybjogQWN0aW9uUmVzcG9uc2VcbiAgICovXG4gIGltcG9ydExpY2Vuc2UoKSB7XG4gICAgcmV0dXJuIHRoaXMucmVzdC5wb3N0KGAke3RoaXMuYmFzZVVybH0vbGljZW5zZWAsIG51bGwpO1xuICB9XG5cbiAgLyoqXG4gICAqIEdldCBzeXN0ZW0gdmVyc2lvblxuICAgKiBAUmV0dXJuOiBBY3Rpb25SZXNwb25zZVxuICAgKi9cbiAgZ2V0U3lzdGVtVmVyc2lvbigpIHtcbiAgICByZXR1cm4gdGhpcy5yZXN0LmdldChgJHt0aGlzLmJhc2VVcmx9L2xpY2Vuc2VgKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBFeHBvcnQgYWNjb3VudCBjb25maWd1cmF0aW9uIGRhdGFcbiAgICogQFJldHVybjogU3RyZWFtaW5nT3V0cHV0IG9mIHRoZSBjb250ZW50IChnemlwKVxuICAgKi9cbiAgZXhwb3J0QWNjb3VudERhdGEoaWQ/OiBzdHJpbmcpIHtcbiAgICByZXR1cm4gdGhpcy5yZXN0LmRvd25sb2FkKGAke3RoaXMuYmFzZVVybH0vZXhwb3J0YCk7XG4gIH1cblxuICAvKipcbiAgICogSW1wb3J0IGFjY291bnQgY29uZmlndXJhdGlvbiBkYXRhIGZyb20gYnl0ZSBhcnJheSAoemlwIGNvbnRlbnQpXG4gICAqIEBSZXR1cm46IEFjdGlvblJlc3BvbnNlXG4gICAqL1xuICBpbXBvcnRBY2NvdW50RGF0YSgpIHtcbiAgICByZXR1cm4gdGhpcy5yZXN0LnBvc3QoYCR7dGhpcy5iYXNlVXJsfS9pbXBvcnRgLCBudWxsKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBFeHBvcnQgU1cgcGFja2FnZSBjb25maWd1cmF0aW9ucyBkYXRhXG4gICAqIEBSZXR1cm46IFN0cmVhbWluZ091dHB1dCBvZiB0aGUgY29udGVudCAoemlwKVxuICAgKi9cbiAgZXhwb3J0Q29uZmlndXJhdGlvbnMoaWQ/OiBzdHJpbmcpIHtcbiAgICByZXR1cm4gdGhpcy5yZXN0LmRvd25sb2FkKGAke3RoaXMuYmFzZVVybH0vY29uZmlndXJhdGlvbnMvZXhwb3J0YCk7XG4gIH1cblxuICAvKipcbiAgICogSW1wb3J0IFNXIHBhY2thZ2UgY29uZmlndXJhdGlvbnMgZGF0YSBmcm9tIGJ5dGUgYXJyYXkgKHppcCBjb250ZW50KVxuICAgKiBAUmV0dXJuOiBBY3Rpb25SZXNwb25zZVxuICAgKi9cbiAgaW1wb3J0Q29uZmlndXJhdGlvbnMoKSB7XG4gICAgcmV0dXJuIHRoaXMucmVzdC5wb3N0KGAke3RoaXMuYmFzZVVybH0vY29uZmlndXJhdGlvbnMvaW1wb3J0YCwgbnVsbCk7XG4gIH1cblxuICAvKipcbiAgICogQmFja3VwIGVudGlyZSBzeXN0ZW0gKGNvbmZpZ3VyYXRpb25zLCB1c2VycyBhbmQgYWNjb3VudHMpXG4gICAqIEBSZXR1cm46IFN0cmVhbWluZ091dHB1dCBvZiB0aGUgY29udGVudCAoemlwKVxuICAgKi9cbiAgYmFja3VwU3lzdGVtKCkge1xuICAgIHJldHVybiB0aGlzLnJlc3QuZG93bmxvYWQoYCR7dGhpcy5iYXNlVXJsfS9iYWNrdXBgKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBSZXN0b3JlIGVudGlyZSBzeXN0ZW0gKHppcCBjb250ZW50KVxuICAgKiBAUmV0dXJuOiBBY3Rpb25SZXNwb25zZVxuICAgKi9cbiAgcmVzdG9yZVN5c3RlbSgpIHtcbiAgICByZXR1cm4gdGhpcy5yZXN0LnBvc3QoYCR7dGhpcy5iYXNlVXJsfS9yZXN0b3JlYCwgbnVsbCk7XG4gIH1cblxufVxuIl19