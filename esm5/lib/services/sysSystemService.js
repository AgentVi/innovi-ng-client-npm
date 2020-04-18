import { __read, __spread } from "tslib";
import { Injectable, Inject } from '@angular/core';
import { RestUtil } from '../../utils/rest-util';
import { CoreConfig } from '../../config';
import * as i0 from "@angular/core";
import * as i1 from "../../utils/rest-util";
import * as i2 from "../../config";
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
    SysSystemService.prototype.getLicense = function () {
        return this.rest.get(this.baseUrl + "/license");
    };
    /**
     * Import license data from file
     * @Return: ActionResponse
     */
    SysSystemService.prototype.importLicense = function () {
        return this.rest.post(this.baseUrl + "/license", null);
    };
    /**
     * Get system version
     * @Return: ActionResponse
     */
    SysSystemService.prototype.getSystemVersion = function () {
        return this.rest.get(this.baseUrl + "/license");
    };
    /**
     * Export account configuration data
     * @Return: StreamingOutput of the content (gzip)
     */
    SysSystemService.prototype.exportAccountData = function (accountId, password) {
        var _a;
        var params = new Array();
        if (accountId != null) {
            params.push("accountId=" + accountId);
        }
        if (password != null) {
            params.push("password=" + password);
        }
        return (_a = this.rest).download.apply(_a, __spread(["sys-system", this.baseUrl + "/accounts/export"], params));
    };
    /**
     * Import account configuration data from byte array (zip content)
     * @Return: ActionResponse
     */
    SysSystemService.prototype.importAccountData = function () {
        return this.rest.post(this.baseUrl + "/accounts/import", null);
    };
    /**
     * Export SW package configurations data
     * @Return: StreamingOutput of the content (zip)
     */
    SysSystemService.prototype.exportConfigurations = function () {
        return this.rest.download("sys-system", this.baseUrl + "/configurations/export");
    };
    /**
     * Import SW package configurations data from byte array (zip content)
     * @Return: ActionResponse
     */
    SysSystemService.prototype.importConfigurations = function () {
        return this.rest.post(this.baseUrl + "/configurations/import", null);
    };
    /**
     * Backup entire system (configurations, users and accounts)
     * @Return: StreamingOutput of the content (zip)
     */
    SysSystemService.prototype.backupSystem = function () {
        return this.rest.download("sys-system", this.baseUrl + "/backup");
    };
    /**
     * Restore entire system (zip content)
     * @Return: ActionResponse
     */
    SysSystemService.prototype.restoreSystem = function () {
        return this.rest.post(this.baseUrl + "/restore", null);
    };
    /** @nocollapse */ SysSystemService.ɵfac = function SysSystemService_Factory(t) { return new (t || SysSystemService)(i0.ɵɵinject('config'), i0.ɵɵinject(i1.RestUtil)); };
    /** @nocollapse */ SysSystemService.ɵprov = i0.ɵɵdefineInjectable({ token: SysSystemService, factory: SysSystemService.ɵfac });
    return SysSystemService;
}());
export { SysSystemService };
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(SysSystemService, [{
        type: Injectable
    }], function () { return [{ type: i2.CoreConfig, decorators: [{
                type: Inject,
                args: ['config']
            }] }, { type: i1.RestUtil }]; }, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3lzU3lzdGVtU2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BhZ2VudHZpL25nLWNvcmUtbGliLyIsInNvdXJjZXMiOlsibGliL3NlcnZpY2VzL3N5c1N5c3RlbVNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ25ELE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSx1QkFBdUIsQ0FBQztBQUNqRCxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sY0FBYyxDQUFDOzs7O0FBSTFDOztHQUVHO0FBQ0g7SUFNRTs7T0FFRztJQUNILDBCQUFzQyxNQUFrQixFQUFVLElBQWM7UUFBMUMsV0FBTSxHQUFOLE1BQU0sQ0FBWTtRQUFVLFNBQUksR0FBSixJQUFJLENBQVU7UUFOaEYsaUJBQWlCO1FBQ1QsWUFBTyxHQUFHLGFBQWEsQ0FBQztRQU05QixJQUFJLENBQUMsT0FBTyxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUMsR0FBRyxHQUFHLElBQUksQ0FBQyxPQUFPLENBQUM7SUFDaEQsQ0FBQztJQUdEOzs7T0FHRztJQUNILHFDQUFVLEdBQVY7UUFDRSxPQUFPLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFJLElBQUksQ0FBQyxPQUFPLGFBQVUsQ0FBQyxDQUFDO0lBQ2xELENBQUM7SUFFRDs7O09BR0c7SUFDSCx3Q0FBYSxHQUFiO1FBQ0UsT0FBTyxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBSSxJQUFJLENBQUMsT0FBTyxhQUFVLEVBQUUsSUFBSSxDQUFDLENBQUM7SUFDekQsQ0FBQztJQUVEOzs7T0FHRztJQUNILDJDQUFnQixHQUFoQjtRQUNFLE9BQU8sSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUksSUFBSSxDQUFDLE9BQU8sYUFBVSxDQUFDLENBQUM7SUFDbEQsQ0FBQztJQUVEOzs7T0FHRztJQUNILDRDQUFpQixHQUFqQixVQUFrQixTQUFrQixFQUFFLFFBQWlCOztRQUNyRCxJQUFNLE1BQU0sR0FBRyxJQUFJLEtBQUssRUFBRSxDQUFDO1FBQzNCLElBQUksU0FBUyxJQUFJLElBQUksRUFBRTtZQUFFLE1BQU0sQ0FBQyxJQUFJLENBQUMsZUFBYSxTQUFXLENBQUMsQ0FBQztTQUFFO1FBQ2pFLElBQUksUUFBUSxJQUFJLElBQUksRUFBRTtZQUFFLE1BQU0sQ0FBQyxJQUFJLENBQUMsY0FBWSxRQUFVLENBQUMsQ0FBQztTQUFFO1FBRWhFLE9BQU8sQ0FBQSxLQUFBLElBQUksQ0FBQyxJQUFJLENBQUEsQ0FBQyxRQUFRLHFCQUFDLFlBQVksRUFBSSxJQUFJLENBQUMsT0FBTyxxQkFBa0IsR0FBSyxNQUFNLEdBQUU7SUFDckYsQ0FBQztJQUVEOzs7T0FHRztJQUNILDRDQUFpQixHQUFqQjtRQUNFLE9BQU8sSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUksSUFBSSxDQUFDLE9BQU8scUJBQWtCLEVBQUUsSUFBSSxDQUFDLENBQUM7SUFDakUsQ0FBQztJQUVEOzs7T0FHRztJQUNILCtDQUFvQixHQUFwQjtRQUNFLE9BQU8sSUFBSSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsWUFBWSxFQUFJLElBQUksQ0FBQyxPQUFPLDJCQUF3QixDQUFDLENBQUM7SUFDbEYsQ0FBQztJQUVEOzs7T0FHRztJQUNILCtDQUFvQixHQUFwQjtRQUNFLE9BQU8sSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUksSUFBSSxDQUFDLE9BQU8sMkJBQXdCLEVBQUUsSUFBSSxDQUFDLENBQUM7SUFDdkUsQ0FBQztJQUVEOzs7T0FHRztJQUNILHVDQUFZLEdBQVo7UUFDRSxPQUFPLElBQUksQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLFlBQVksRUFBSSxJQUFJLENBQUMsT0FBTyxZQUFTLENBQUMsQ0FBQztJQUNuRSxDQUFDO0lBRUQ7OztPQUdHO0lBQ0gsd0NBQWEsR0FBYjtRQUNFLE9BQU8sSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUksSUFBSSxDQUFDLE9BQU8sYUFBVSxFQUFFLElBQUksQ0FBQyxDQUFDO0lBQ3pELENBQUM7dUdBdkZVLGdCQUFnQixjQVFQLFFBQVE7K0VBUmpCLGdCQUFnQixXQUFoQixnQkFBZ0I7MkJBVjdCO0NBbUdDLEFBMUZELElBMEZDO1NBekZZLGdCQUFnQjtrREFBaEIsZ0JBQWdCO2NBRDVCLFVBQVU7O3NCQVNJLE1BQU07dUJBQUMsUUFBUSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUsIEluamVjdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgUmVzdFV0aWwgfSBmcm9tICcuLi8uLi91dGlscy9yZXN0LXV0aWwnO1xuaW1wb3J0IHsgQ29yZUNvbmZpZyB9IGZyb20gJy4uLy4uL2NvbmZpZyc7XG5cblxuXG4vKipcbiAqIExpc3Qgb2YgZ2VuZXJhbCBzeXN0ZW0gY29uZmlndXJhdGlvbiBhY3Rpb25zIGZvciBzeXN0ZW0gYWRtaW5pc3RyYXRvciBvbmx5IFxuICovXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgU3lzU3lzdGVtU2VydmljZSB7XG5cbiAgLy8gVVJMIHRvIHdlYiBhcGlcbiAgcHJpdmF0ZSBiYXNlVXJsID0gJy9zeXMvc3lzdGVtJztcblxuICAvKipcbiAgICogQ2xhc3MgY29uc3RydWN0b3JcbiAgICovXG4gIGNvbnN0cnVjdG9yKEBJbmplY3QoJ2NvbmZpZycpIHByaXZhdGUgY29uZmlnOiBDb3JlQ29uZmlnLCBwcml2YXRlIHJlc3Q6IFJlc3RVdGlsKSB7XG4gICAgdGhpcy5iYXNlVXJsID0gdGhpcy5jb25maWcuYXBpICsgdGhpcy5iYXNlVXJsO1xuICB9XG5cblxuICAvKipcbiAgICogR2V0IHN5c3RlbSBsaWNlbnNlXG4gICAqIEBSZXR1cm46IEVudGl0eVJlc3BvbnNlPExpY2Vuc2U+XG4gICAqL1xuICBnZXRMaWNlbnNlKCkge1xuICAgIHJldHVybiB0aGlzLnJlc3QuZ2V0KGAke3RoaXMuYmFzZVVybH0vbGljZW5zZWApO1xuICB9XG5cbiAgLyoqXG4gICAqIEltcG9ydCBsaWNlbnNlIGRhdGEgZnJvbSBmaWxlXG4gICAqIEBSZXR1cm46IEFjdGlvblJlc3BvbnNlXG4gICAqL1xuICBpbXBvcnRMaWNlbnNlKCkge1xuICAgIHJldHVybiB0aGlzLnJlc3QucG9zdChgJHt0aGlzLmJhc2VVcmx9L2xpY2Vuc2VgLCBudWxsKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBHZXQgc3lzdGVtIHZlcnNpb25cbiAgICogQFJldHVybjogQWN0aW9uUmVzcG9uc2VcbiAgICovXG4gIGdldFN5c3RlbVZlcnNpb24oKSB7XG4gICAgcmV0dXJuIHRoaXMucmVzdC5nZXQoYCR7dGhpcy5iYXNlVXJsfS9saWNlbnNlYCk7XG4gIH1cblxuICAvKipcbiAgICogRXhwb3J0IGFjY291bnQgY29uZmlndXJhdGlvbiBkYXRhXG4gICAqIEBSZXR1cm46IFN0cmVhbWluZ091dHB1dCBvZiB0aGUgY29udGVudCAoZ3ppcClcbiAgICovXG4gIGV4cG9ydEFjY291bnREYXRhKGFjY291bnRJZD86IHN0cmluZywgcGFzc3dvcmQ/OiBzdHJpbmcpIHtcbiAgICBjb25zdCBwYXJhbXMgPSBuZXcgQXJyYXkoKTtcdFx0XG4gICAgaWYgKGFjY291bnRJZCAhPSBudWxsKSB7IHBhcmFtcy5wdXNoKGBhY2NvdW50SWQ9JHthY2NvdW50SWR9YCk7IH1cbiAgICBpZiAocGFzc3dvcmQgIT0gbnVsbCkgeyBwYXJhbXMucHVzaChgcGFzc3dvcmQ9JHtwYXNzd29yZH1gKTsgfVxuXG5cdFx0cmV0dXJuIHRoaXMucmVzdC5kb3dubG9hZChgc3lzLXN5c3RlbWAsYCR7dGhpcy5iYXNlVXJsfS9hY2NvdW50cy9leHBvcnRgLCAuLi5wYXJhbXMpO1xuICB9XG5cbiAgLyoqXG4gICAqIEltcG9ydCBhY2NvdW50IGNvbmZpZ3VyYXRpb24gZGF0YSBmcm9tIGJ5dGUgYXJyYXkgKHppcCBjb250ZW50KVxuICAgKiBAUmV0dXJuOiBBY3Rpb25SZXNwb25zZVxuICAgKi9cbiAgaW1wb3J0QWNjb3VudERhdGEoKSB7XG4gICAgcmV0dXJuIHRoaXMucmVzdC5wb3N0KGAke3RoaXMuYmFzZVVybH0vYWNjb3VudHMvaW1wb3J0YCwgbnVsbCk7XG4gIH1cblxuICAvKipcbiAgICogRXhwb3J0IFNXIHBhY2thZ2UgY29uZmlndXJhdGlvbnMgZGF0YVxuICAgKiBAUmV0dXJuOiBTdHJlYW1pbmdPdXRwdXQgb2YgdGhlIGNvbnRlbnQgKHppcClcbiAgICovXG4gIGV4cG9ydENvbmZpZ3VyYXRpb25zKCkge1xuICAgIHJldHVybiB0aGlzLnJlc3QuZG93bmxvYWQoYHN5cy1zeXN0ZW1gLGAke3RoaXMuYmFzZVVybH0vY29uZmlndXJhdGlvbnMvZXhwb3J0YCk7XG4gIH1cblxuICAvKipcbiAgICogSW1wb3J0IFNXIHBhY2thZ2UgY29uZmlndXJhdGlvbnMgZGF0YSBmcm9tIGJ5dGUgYXJyYXkgKHppcCBjb250ZW50KVxuICAgKiBAUmV0dXJuOiBBY3Rpb25SZXNwb25zZVxuICAgKi9cbiAgaW1wb3J0Q29uZmlndXJhdGlvbnMoKSB7XG4gICAgcmV0dXJuIHRoaXMucmVzdC5wb3N0KGAke3RoaXMuYmFzZVVybH0vY29uZmlndXJhdGlvbnMvaW1wb3J0YCwgbnVsbCk7XG4gIH1cblxuICAvKipcbiAgICogQmFja3VwIGVudGlyZSBzeXN0ZW0gKGNvbmZpZ3VyYXRpb25zLCB1c2VycyBhbmQgYWNjb3VudHMpXG4gICAqIEBSZXR1cm46IFN0cmVhbWluZ091dHB1dCBvZiB0aGUgY29udGVudCAoemlwKVxuICAgKi9cbiAgYmFja3VwU3lzdGVtKCkge1xuICAgIHJldHVybiB0aGlzLnJlc3QuZG93bmxvYWQoYHN5cy1zeXN0ZW1gLGAke3RoaXMuYmFzZVVybH0vYmFja3VwYCk7XG4gIH1cblxuICAvKipcbiAgICogUmVzdG9yZSBlbnRpcmUgc3lzdGVtICh6aXAgY29udGVudClcbiAgICogQFJldHVybjogQWN0aW9uUmVzcG9uc2VcbiAgICovXG4gIHJlc3RvcmVTeXN0ZW0oKSB7XG4gICAgcmV0dXJuIHRoaXMucmVzdC5wb3N0KGAke3RoaXMuYmFzZVVybH0vcmVzdG9yZWAsIG51bGwpO1xuICB9XG5cbn1cbiJdfQ==