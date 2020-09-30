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
     * Get cluster id (for licensing)
     * @Return: ActionResponse (cluster id is in the key)
     */
    SysSystemService.prototype.getClusterId = function () {
        return this.rest.get(this.baseUrl + "/cluster/id");
    };
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
     * Filter parameter values: empty = backup all, config = backup configuration only, users = backup users only, <accountId> = backup account data
     * @Return: StreamingOutput of the content (zip)
     */
    SysSystemService.prototype.backupSystem = function (filter) {
        var _a;
        var params = new Array();
        if (filter != null) {
            params.push("filter=" + filter);
        }
        return (_a = this.rest).download.apply(_a, __spread(["sys-system", this.baseUrl + "/backup"], params));
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3lzU3lzdGVtU2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BhZ2VudHZpL25nLWNvcmUtbGliLyIsInNvdXJjZXMiOlsibGliL3NlcnZpY2VzL3N5c1N5c3RlbVNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ25ELE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSx1QkFBdUIsQ0FBQztBQUNqRCxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sY0FBYyxDQUFDOzs7O0FBSTFDOztHQUVHO0FBQ0g7SUFNRTs7T0FFRztJQUNILDBCQUFzQyxNQUFrQixFQUFVLElBQWM7UUFBMUMsV0FBTSxHQUFOLE1BQU0sQ0FBWTtRQUFVLFNBQUksR0FBSixJQUFJLENBQVU7UUFOaEYsaUJBQWlCO1FBQ1QsWUFBTyxHQUFHLGFBQWEsQ0FBQztRQU05QixJQUFJLENBQUMsT0FBTyxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUMsR0FBRyxHQUFHLElBQUksQ0FBQyxPQUFPLENBQUM7SUFDaEQsQ0FBQztJQUdEOzs7T0FHRztJQUNILHVDQUFZLEdBQVo7UUFDRSxPQUFPLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFJLElBQUksQ0FBQyxPQUFPLGdCQUFhLENBQUMsQ0FBQztJQUNyRCxDQUFDO0lBRUQ7OztPQUdHO0lBQ0gscUNBQVUsR0FBVjtRQUNFLE9BQU8sSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUksSUFBSSxDQUFDLE9BQU8sYUFBVSxDQUFDLENBQUM7SUFDbEQsQ0FBQztJQUVEOzs7T0FHRztJQUNILHdDQUFhLEdBQWI7UUFDRSxPQUFPLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFJLElBQUksQ0FBQyxPQUFPLGFBQVUsRUFBRSxJQUFJLENBQUMsQ0FBQztJQUN6RCxDQUFDO0lBRUQ7OztPQUdHO0lBQ0gsMkNBQWdCLEdBQWhCO1FBQ0UsT0FBTyxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBSSxJQUFJLENBQUMsT0FBTyxhQUFVLENBQUMsQ0FBQztJQUNsRCxDQUFDO0lBRUQ7OztPQUdHO0lBQ0gsNENBQWlCLEdBQWpCLFVBQWtCLFNBQWtCLEVBQUUsUUFBaUI7O1FBQ3JELElBQU0sTUFBTSxHQUFHLElBQUksS0FBSyxFQUFFLENBQUM7UUFDM0IsSUFBSSxTQUFTLElBQUksSUFBSSxFQUFFO1lBQUUsTUFBTSxDQUFDLElBQUksQ0FBQyxlQUFhLFNBQVcsQ0FBQyxDQUFDO1NBQUU7UUFDakUsSUFBSSxRQUFRLElBQUksSUFBSSxFQUFFO1lBQUUsTUFBTSxDQUFDLElBQUksQ0FBQyxjQUFZLFFBQVUsQ0FBQyxDQUFDO1NBQUU7UUFFaEUsT0FBTyxDQUFBLEtBQUEsSUFBSSxDQUFDLElBQUksQ0FBQSxDQUFDLFFBQVEscUJBQUMsWUFBWSxFQUFJLElBQUksQ0FBQyxPQUFPLHFCQUFrQixHQUFLLE1BQU0sR0FBRTtJQUNyRixDQUFDO0lBRUQ7OztPQUdHO0lBQ0gsNENBQWlCLEdBQWpCO1FBQ0UsT0FBTyxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBSSxJQUFJLENBQUMsT0FBTyxxQkFBa0IsRUFBRSxJQUFJLENBQUMsQ0FBQztJQUNqRSxDQUFDO0lBRUQ7OztPQUdHO0lBQ0gsK0NBQW9CLEdBQXBCO1FBQ0UsT0FBTyxJQUFJLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxZQUFZLEVBQUksSUFBSSxDQUFDLE9BQU8sMkJBQXdCLENBQUMsQ0FBQztJQUNsRixDQUFDO0lBRUQ7OztPQUdHO0lBQ0gsK0NBQW9CLEdBQXBCO1FBQ0UsT0FBTyxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBSSxJQUFJLENBQUMsT0FBTywyQkFBd0IsRUFBRSxJQUFJLENBQUMsQ0FBQztJQUN2RSxDQUFDO0lBRUQ7Ozs7T0FJRztJQUNILHVDQUFZLEdBQVosVUFBYSxNQUFlOztRQUMxQixJQUFNLE1BQU0sR0FBRyxJQUFJLEtBQUssRUFBRSxDQUFDO1FBQzNCLElBQUksTUFBTSxJQUFJLElBQUksRUFBRTtZQUFFLE1BQU0sQ0FBQyxJQUFJLENBQUMsWUFBVSxNQUFRLENBQUMsQ0FBQztTQUFFO1FBRTFELE9BQU8sQ0FBQSxLQUFBLElBQUksQ0FBQyxJQUFJLENBQUEsQ0FBQyxRQUFRLHFCQUFDLFlBQVksRUFBSSxJQUFJLENBQUMsT0FBTyxZQUFTLEdBQUssTUFBTSxHQUFFO0lBQzVFLENBQUM7SUFFRDs7O09BR0c7SUFDSCx3Q0FBYSxHQUFiO1FBQ0UsT0FBTyxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBSSxJQUFJLENBQUMsT0FBTyxhQUFVLEVBQUUsSUFBSSxDQUFDLENBQUM7SUFDekQsQ0FBQzt1R0FuR1UsZ0JBQWdCLGNBUVAsUUFBUTsrRUFSakIsZ0JBQWdCLFdBQWhCLGdCQUFnQjsyQkFWN0I7Q0ErR0MsQUF0R0QsSUFzR0M7U0FyR1ksZ0JBQWdCO2tEQUFoQixnQkFBZ0I7Y0FENUIsVUFBVTs7c0JBU0ksTUFBTTt1QkFBQyxRQUFRIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSwgSW5qZWN0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBSZXN0VXRpbCB9IGZyb20gJy4uLy4uL3V0aWxzL3Jlc3QtdXRpbCc7XG5pbXBvcnQgeyBDb3JlQ29uZmlnIH0gZnJvbSAnLi4vLi4vY29uZmlnJztcblxuXG5cbi8qKlxuICogTGlzdCBvZiBnZW5lcmFsIHN5c3RlbSBjb25maWd1cmF0aW9uIGFjdGlvbnMgZm9yIHN5c3RlbSBhZG1pbmlzdHJhdG9yIG9ubHkgXG4gKi9cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBTeXNTeXN0ZW1TZXJ2aWNlIHtcblxuICAvLyBVUkwgdG8gd2ViIGFwaVxuICBwcml2YXRlIGJhc2VVcmwgPSAnL3N5cy9zeXN0ZW0nO1xuXG4gIC8qKlxuICAgKiBDbGFzcyBjb25zdHJ1Y3RvclxuICAgKi9cbiAgY29uc3RydWN0b3IoQEluamVjdCgnY29uZmlnJykgcHJpdmF0ZSBjb25maWc6IENvcmVDb25maWcsIHByaXZhdGUgcmVzdDogUmVzdFV0aWwpIHtcbiAgICB0aGlzLmJhc2VVcmwgPSB0aGlzLmNvbmZpZy5hcGkgKyB0aGlzLmJhc2VVcmw7XG4gIH1cblxuXG4gIC8qKlxuICAgKiBHZXQgY2x1c3RlciBpZCAoZm9yIGxpY2Vuc2luZylcbiAgICogQFJldHVybjogQWN0aW9uUmVzcG9uc2UgKGNsdXN0ZXIgaWQgaXMgaW4gdGhlIGtleSlcbiAgICovXG4gIGdldENsdXN0ZXJJZCgpIHtcbiAgICByZXR1cm4gdGhpcy5yZXN0LmdldChgJHt0aGlzLmJhc2VVcmx9L2NsdXN0ZXIvaWRgKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBHZXQgc3lzdGVtIGxpY2Vuc2VcbiAgICogQFJldHVybjogRW50aXR5UmVzcG9uc2U8TGljZW5zZT5cbiAgICovXG4gIGdldExpY2Vuc2UoKSB7XG4gICAgcmV0dXJuIHRoaXMucmVzdC5nZXQoYCR7dGhpcy5iYXNlVXJsfS9saWNlbnNlYCk7XG4gIH1cblxuICAvKipcbiAgICogSW1wb3J0IGxpY2Vuc2UgZGF0YSBmcm9tIGZpbGVcbiAgICogQFJldHVybjogQWN0aW9uUmVzcG9uc2VcbiAgICovXG4gIGltcG9ydExpY2Vuc2UoKSB7XG4gICAgcmV0dXJuIHRoaXMucmVzdC5wb3N0KGAke3RoaXMuYmFzZVVybH0vbGljZW5zZWAsIG51bGwpO1xuICB9XG5cbiAgLyoqXG4gICAqIEdldCBzeXN0ZW0gdmVyc2lvblxuICAgKiBAUmV0dXJuOiBBY3Rpb25SZXNwb25zZVxuICAgKi9cbiAgZ2V0U3lzdGVtVmVyc2lvbigpIHtcbiAgICByZXR1cm4gdGhpcy5yZXN0LmdldChgJHt0aGlzLmJhc2VVcmx9L2xpY2Vuc2VgKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBFeHBvcnQgYWNjb3VudCBjb25maWd1cmF0aW9uIGRhdGFcbiAgICogQFJldHVybjogU3RyZWFtaW5nT3V0cHV0IG9mIHRoZSBjb250ZW50IChnemlwKVxuICAgKi9cbiAgZXhwb3J0QWNjb3VudERhdGEoYWNjb3VudElkPzogc3RyaW5nLCBwYXNzd29yZD86IHN0cmluZykge1xuICAgIGNvbnN0IHBhcmFtcyA9IG5ldyBBcnJheSgpO1x0XHRcbiAgICBpZiAoYWNjb3VudElkICE9IG51bGwpIHsgcGFyYW1zLnB1c2goYGFjY291bnRJZD0ke2FjY291bnRJZH1gKTsgfVxuICAgIGlmIChwYXNzd29yZCAhPSBudWxsKSB7IHBhcmFtcy5wdXNoKGBwYXNzd29yZD0ke3Bhc3N3b3JkfWApOyB9XG5cblx0XHRyZXR1cm4gdGhpcy5yZXN0LmRvd25sb2FkKGBzeXMtc3lzdGVtYCxgJHt0aGlzLmJhc2VVcmx9L2FjY291bnRzL2V4cG9ydGAsIC4uLnBhcmFtcyk7XG4gIH1cblxuICAvKipcbiAgICogSW1wb3J0IGFjY291bnQgY29uZmlndXJhdGlvbiBkYXRhIGZyb20gYnl0ZSBhcnJheSAoemlwIGNvbnRlbnQpXG4gICAqIEBSZXR1cm46IEFjdGlvblJlc3BvbnNlXG4gICAqL1xuICBpbXBvcnRBY2NvdW50RGF0YSgpIHtcbiAgICByZXR1cm4gdGhpcy5yZXN0LnBvc3QoYCR7dGhpcy5iYXNlVXJsfS9hY2NvdW50cy9pbXBvcnRgLCBudWxsKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBFeHBvcnQgU1cgcGFja2FnZSBjb25maWd1cmF0aW9ucyBkYXRhXG4gICAqIEBSZXR1cm46IFN0cmVhbWluZ091dHB1dCBvZiB0aGUgY29udGVudCAoemlwKVxuICAgKi9cbiAgZXhwb3J0Q29uZmlndXJhdGlvbnMoKSB7XG4gICAgcmV0dXJuIHRoaXMucmVzdC5kb3dubG9hZChgc3lzLXN5c3RlbWAsYCR7dGhpcy5iYXNlVXJsfS9jb25maWd1cmF0aW9ucy9leHBvcnRgKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBJbXBvcnQgU1cgcGFja2FnZSBjb25maWd1cmF0aW9ucyBkYXRhIGZyb20gYnl0ZSBhcnJheSAoemlwIGNvbnRlbnQpXG4gICAqIEBSZXR1cm46IEFjdGlvblJlc3BvbnNlXG4gICAqL1xuICBpbXBvcnRDb25maWd1cmF0aW9ucygpIHtcbiAgICByZXR1cm4gdGhpcy5yZXN0LnBvc3QoYCR7dGhpcy5iYXNlVXJsfS9jb25maWd1cmF0aW9ucy9pbXBvcnRgLCBudWxsKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBCYWNrdXAgZW50aXJlIHN5c3RlbSAoY29uZmlndXJhdGlvbnMsIHVzZXJzIGFuZCBhY2NvdW50cylcbiAgICogRmlsdGVyIHBhcmFtZXRlciB2YWx1ZXM6IGVtcHR5ID0gYmFja3VwIGFsbCwgY29uZmlnID0gYmFja3VwIGNvbmZpZ3VyYXRpb24gb25seSwgdXNlcnMgPSBiYWNrdXAgdXNlcnMgb25seSwgPGFjY291bnRJZD4gPSBiYWNrdXAgYWNjb3VudCBkYXRhXG4gICAqIEBSZXR1cm46IFN0cmVhbWluZ091dHB1dCBvZiB0aGUgY29udGVudCAoemlwKVxuICAgKi9cbiAgYmFja3VwU3lzdGVtKGZpbHRlcj86IHN0cmluZykge1xuICAgIGNvbnN0IHBhcmFtcyA9IG5ldyBBcnJheSgpO1x0XHRcbiAgICBpZiAoZmlsdGVyICE9IG51bGwpIHsgcGFyYW1zLnB1c2goYGZpbHRlcj0ke2ZpbHRlcn1gKTsgfVxuXG5cdFx0cmV0dXJuIHRoaXMucmVzdC5kb3dubG9hZChgc3lzLXN5c3RlbWAsYCR7dGhpcy5iYXNlVXJsfS9iYWNrdXBgLCAuLi5wYXJhbXMpO1xuICB9XG5cbiAgLyoqXG4gICAqIFJlc3RvcmUgZW50aXJlIHN5c3RlbSAoemlwIGNvbnRlbnQpXG4gICAqIEBSZXR1cm46IEFjdGlvblJlc3BvbnNlXG4gICAqL1xuICByZXN0b3JlU3lzdGVtKCkge1xuICAgIHJldHVybiB0aGlzLnJlc3QucG9zdChgJHt0aGlzLmJhc2VVcmx9L3Jlc3RvcmVgLCBudWxsKTtcbiAgfVxuXG59XG4iXX0=