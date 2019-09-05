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
        return this.rest.get(`${this.baseUrl}/export`);
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
     * \@Return: StreamingOutput of the content (gzip)
     * @param {?=} id
     * @return {?}
     */
    exportConfigurations(id) {
        return this.rest.get(`${this.baseUrl}/configurations/export`);
    }
    /**
     * Import SW package configurations data from byte array (zip content)
     * \@Return: ActionResponse
     * @return {?}
     */
    importConfigurations() {
        return this.rest.post(`${this.baseUrl}/configurations/import`, null);
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3lzU3lzdGVtU2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BhZ2VudHZpL25nLWNvcmUtbGliLyIsInNvdXJjZXMiOlsibGliL3NlcnZpY2VzL3N5c1N5c3RlbVNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ25ELE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSx1QkFBdUIsQ0FBQztBQUNqRCxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sY0FBYyxDQUFDOzs7O0FBUTFDLE1BQU0sT0FBTyxnQkFBZ0I7Ozs7OztJQVEzQixZQUFzQyxNQUFrQixFQUFVLElBQWM7UUFBMUMsV0FBTSxHQUFOLE1BQU0sQ0FBWTtRQUFVLFNBQUksR0FBSixJQUFJLENBQVU7O1FBTHhFLFlBQU8sR0FBRyxhQUFhLENBQUM7UUFNOUIsSUFBSSxDQUFDLE9BQU8sR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDLEdBQUcsR0FBRyxJQUFJLENBQUMsT0FBTyxDQUFDO0lBQ2hELENBQUM7Ozs7OztJQU9ELFVBQVU7UUFDUixPQUFPLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLEdBQUcsSUFBSSxDQUFDLE9BQU8sVUFBVSxDQUFDLENBQUM7SUFDbEQsQ0FBQzs7Ozs7O0lBTUQsYUFBYTtRQUNYLE9BQU8sSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxJQUFJLENBQUMsT0FBTyxVQUFVLEVBQUUsSUFBSSxDQUFDLENBQUM7SUFDekQsQ0FBQzs7Ozs7O0lBTUQsZ0JBQWdCO1FBQ2QsT0FBTyxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxHQUFHLElBQUksQ0FBQyxPQUFPLFVBQVUsQ0FBQyxDQUFDO0lBQ2xELENBQUM7Ozs7Ozs7SUFNRCxpQkFBaUIsQ0FBQyxFQUFXO1FBQzNCLE9BQU8sSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsR0FBRyxJQUFJLENBQUMsT0FBTyxTQUFTLENBQUMsQ0FBQztJQUNqRCxDQUFDOzs7Ozs7SUFNRCxpQkFBaUI7UUFDZixPQUFPLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsSUFBSSxDQUFDLE9BQU8sU0FBUyxFQUFFLElBQUksQ0FBQyxDQUFDO0lBQ3hELENBQUM7Ozs7Ozs7SUFNRCxvQkFBb0IsQ0FBQyxFQUFXO1FBQzlCLE9BQU8sSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsR0FBRyxJQUFJLENBQUMsT0FBTyx3QkFBd0IsQ0FBQyxDQUFDO0lBQ2hFLENBQUM7Ozs7OztJQU1ELG9CQUFvQjtRQUNsQixPQUFPLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsSUFBSSxDQUFDLE9BQU8sd0JBQXdCLEVBQUUsSUFBSSxDQUFDLENBQUM7SUFDdkUsQ0FBQzs7O1lBcEVGLFVBQVU7Ozs7WUFQRixVQUFVLHVCQWdCSixNQUFNLFNBQUMsUUFBUTtZQWpCckIsUUFBUTs7Ozs7OztJQVlmLG1DQUFnQzs7Ozs7SUFLcEIsa0NBQTRDOzs7OztJQUFFLGdDQUFzQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUsIEluamVjdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgUmVzdFV0aWwgfSBmcm9tICcuLi8uLi91dGlscy9yZXN0LXV0aWwnO1xuaW1wb3J0IHsgQ29yZUNvbmZpZyB9IGZyb20gJy4uLy4uL2NvbmZpZyc7XG5cblxuXG4vKipcbiAqIExpc3Qgb2YgZ2VuZXJhbCBzeXN0ZW0gY29uZmlndXJhdGlvbiBhY3Rpb25zIGZvciBzeXN0ZW0gYWRtaW5pc3RyYXRvciBvbmx5IFxuICovXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgU3lzU3lzdGVtU2VydmljZSB7XG5cbiAgLy8gVVJMIHRvIHdlYiBhcGlcbiAgcHJpdmF0ZSBiYXNlVXJsID0gJy9zeXMvc3lzdGVtJztcblxuICAvKipcbiAgICogQ2xhc3MgY29uc3RydWN0b3JcbiAgICovXG4gIGNvbnN0cnVjdG9yKEBJbmplY3QoJ2NvbmZpZycpIHByaXZhdGUgY29uZmlnOiBDb3JlQ29uZmlnLCBwcml2YXRlIHJlc3Q6IFJlc3RVdGlsKSB7XG4gICAgdGhpcy5iYXNlVXJsID0gdGhpcy5jb25maWcuYXBpICsgdGhpcy5iYXNlVXJsO1xuICB9XG5cblxuICAvKipcbiAgICogR2V0IHN5c3RlbSBsaWNlbnNlXG4gICAqIEBSZXR1cm46IEVudGl0eVJlc3BvbnNlPExpY2Vuc2U+XG4gICAqL1xuICBnZXRMaWNlbnNlKCkge1xuICAgIHJldHVybiB0aGlzLnJlc3QuZ2V0KGAke3RoaXMuYmFzZVVybH0vbGljZW5zZWApO1xuICB9XG5cbiAgLyoqXG4gICAqIEltcG9ydCBsaWNlbnNlIGRhdGEgZnJvbSBmaWxlXG4gICAqIEBSZXR1cm46IEFjdGlvblJlc3BvbnNlXG4gICAqL1xuICBpbXBvcnRMaWNlbnNlKCkge1xuICAgIHJldHVybiB0aGlzLnJlc3QucG9zdChgJHt0aGlzLmJhc2VVcmx9L2xpY2Vuc2VgLCBudWxsKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBHZXQgc3lzdGVtIHZlcnNpb25cbiAgICogQFJldHVybjogQWN0aW9uUmVzcG9uc2VcbiAgICovXG4gIGdldFN5c3RlbVZlcnNpb24oKSB7XG4gICAgcmV0dXJuIHRoaXMucmVzdC5nZXQoYCR7dGhpcy5iYXNlVXJsfS9saWNlbnNlYCk7XG4gIH1cblxuICAvKipcbiAgICogRXhwb3J0IGFjY291bnQgY29uZmlndXJhdGlvbiBkYXRhXG4gICAqIEBSZXR1cm46IFN0cmVhbWluZ091dHB1dCBvZiB0aGUgY29udGVudCAoZ3ppcClcbiAgICovXG4gIGV4cG9ydEFjY291bnREYXRhKGlkPzogc3RyaW5nKSB7XG4gICAgcmV0dXJuIHRoaXMucmVzdC5nZXQoYCR7dGhpcy5iYXNlVXJsfS9leHBvcnRgKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBJbXBvcnQgYWNjb3VudCBjb25maWd1cmF0aW9uIGRhdGEgZnJvbSBieXRlIGFycmF5ICh6aXAgY29udGVudClcbiAgICogQFJldHVybjogQWN0aW9uUmVzcG9uc2VcbiAgICovXG4gIGltcG9ydEFjY291bnREYXRhKCkge1xuICAgIHJldHVybiB0aGlzLnJlc3QucG9zdChgJHt0aGlzLmJhc2VVcmx9L2ltcG9ydGAsIG51bGwpO1xuICB9XG5cbiAgLyoqXG4gICAqIEV4cG9ydCBTVyBwYWNrYWdlIGNvbmZpZ3VyYXRpb25zIGRhdGFcbiAgICogQFJldHVybjogU3RyZWFtaW5nT3V0cHV0IG9mIHRoZSBjb250ZW50IChnemlwKVxuICAgKi9cbiAgZXhwb3J0Q29uZmlndXJhdGlvbnMoaWQ/OiBzdHJpbmcpIHtcbiAgICByZXR1cm4gdGhpcy5yZXN0LmdldChgJHt0aGlzLmJhc2VVcmx9L2NvbmZpZ3VyYXRpb25zL2V4cG9ydGApO1xuICB9XG5cbiAgLyoqXG4gICAqIEltcG9ydCBTVyBwYWNrYWdlIGNvbmZpZ3VyYXRpb25zIGRhdGEgZnJvbSBieXRlIGFycmF5ICh6aXAgY29udGVudClcbiAgICogQFJldHVybjogQWN0aW9uUmVzcG9uc2VcbiAgICovXG4gIGltcG9ydENvbmZpZ3VyYXRpb25zKCkge1xuICAgIHJldHVybiB0aGlzLnJlc3QucG9zdChgJHt0aGlzLmJhc2VVcmx9L2NvbmZpZ3VyYXRpb25zL2ltcG9ydGAsIG51bGwpO1xuICB9XG5cbn1cbiJdfQ==