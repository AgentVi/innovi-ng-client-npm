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
    SysSystemService.prototype.importAccountData = function (password, zipFile) {
        var _a;
        var params = new Array();
        if (password != null) {
            params.push("password=" + password);
        }
        return (_a = this.rest).upload.apply(_a, __spread([zipFile, this.baseUrl + "/accounts/import"], params));
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
    SysSystemService.prototype.importConfigurations = function (zipFile) {
        return this.rest.upload(zipFile, this.baseUrl + "/configurations/import");
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
    SysSystemService.prototype.restoreSystem = function (zipFile) {
        return this.rest.upload(zipFile, this.baseUrl + "/restore");
    };
    /**
     * Publish message to all services to change their log level
     * @Return: ActionResponse
     */
    SysSystemService.prototype.setLogLevel = function (level) {
        return this.rest.put(this.baseUrl + "/log-level", null);
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3lzU3lzdGVtU2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BhZ2VudHZpL25nLWNvcmUtbGliLyIsInNvdXJjZXMiOlsibGliL3NlcnZpY2VzL3N5c1N5c3RlbVNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ25ELE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSx1QkFBdUIsQ0FBQztBQUNqRCxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sY0FBYyxDQUFDOzs7O0FBSTFDOztHQUVHO0FBQ0g7SUFNRTs7T0FFRztJQUNILDBCQUFzQyxNQUFrQixFQUFVLElBQWM7UUFBMUMsV0FBTSxHQUFOLE1BQU0sQ0FBWTtRQUFVLFNBQUksR0FBSixJQUFJLENBQVU7UUFOaEYsaUJBQWlCO1FBQ1QsWUFBTyxHQUFHLGFBQWEsQ0FBQztRQU05QixJQUFJLENBQUMsT0FBTyxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUMsR0FBRyxHQUFHLElBQUksQ0FBQyxPQUFPLENBQUM7SUFDaEQsQ0FBQztJQUdEOzs7T0FHRztJQUNILDJDQUFnQixHQUFoQjtRQUNFLE9BQU8sSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUksSUFBSSxDQUFDLE9BQU8sYUFBVSxDQUFDLENBQUM7SUFDbEQsQ0FBQztJQUVEOzs7T0FHRztJQUNILDRDQUFpQixHQUFqQixVQUFrQixTQUFrQixFQUFFLFFBQWlCOztRQUNyRCxJQUFNLE1BQU0sR0FBRyxJQUFJLEtBQUssRUFBRSxDQUFDO1FBQzNCLElBQUksU0FBUyxJQUFJLElBQUksRUFBRTtZQUFFLE1BQU0sQ0FBQyxJQUFJLENBQUMsZUFBYSxTQUFXLENBQUMsQ0FBQztTQUFFO1FBQ2pFLElBQUksUUFBUSxJQUFJLElBQUksRUFBRTtZQUFFLE1BQU0sQ0FBQyxJQUFJLENBQUMsY0FBWSxRQUFVLENBQUMsQ0FBQztTQUFFO1FBRWhFLE9BQU8sQ0FBQSxLQUFBLElBQUksQ0FBQyxJQUFJLENBQUEsQ0FBQyxRQUFRLHFCQUFDLFlBQVksRUFBSSxJQUFJLENBQUMsT0FBTyxxQkFBa0IsR0FBSyxNQUFNLEdBQUU7SUFDckYsQ0FBQztJQUVEOzs7T0FHRztJQUNILDRDQUFpQixHQUFqQixVQUFrQixRQUFpQixFQUFFLE9BQWM7O1FBQ2pELElBQU0sTUFBTSxHQUFHLElBQUksS0FBSyxFQUFFLENBQUM7UUFDM0IsSUFBSSxRQUFRLElBQUksSUFBSSxFQUFFO1lBQUUsTUFBTSxDQUFDLElBQUksQ0FBQyxjQUFZLFFBQVUsQ0FBQyxDQUFDO1NBQUU7UUFFaEUsT0FBTyxDQUFBLEtBQUEsSUFBSSxDQUFDLElBQUksQ0FBQSxDQUFDLE1BQU0scUJBQUMsT0FBTyxFQUFJLElBQUksQ0FBQyxPQUFPLHFCQUFrQixHQUFLLE1BQU0sR0FBRTtJQUM5RSxDQUFDO0lBRUQ7OztPQUdHO0lBQ0gsK0NBQW9CLEdBQXBCO1FBQ0UsT0FBTyxJQUFJLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxZQUFZLEVBQUksSUFBSSxDQUFDLE9BQU8sMkJBQXdCLENBQUMsQ0FBQztJQUNsRixDQUFDO0lBRUQ7OztPQUdHO0lBQ0gsK0NBQW9CLEdBQXBCLFVBQXFCLE9BQWM7UUFDakMsT0FBTyxJQUFJLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxPQUFPLEVBQUksSUFBSSxDQUFDLE9BQU8sMkJBQXdCLENBQUMsQ0FBQztJQUMzRSxDQUFDO0lBRUQ7Ozs7T0FJRztJQUNILHVDQUFZLEdBQVosVUFBYSxNQUFlOztRQUMxQixJQUFNLE1BQU0sR0FBRyxJQUFJLEtBQUssRUFBRSxDQUFDO1FBQzNCLElBQUksTUFBTSxJQUFJLElBQUksRUFBRTtZQUFFLE1BQU0sQ0FBQyxJQUFJLENBQUMsWUFBVSxNQUFRLENBQUMsQ0FBQztTQUFFO1FBRTFELE9BQU8sQ0FBQSxLQUFBLElBQUksQ0FBQyxJQUFJLENBQUEsQ0FBQyxRQUFRLHFCQUFDLFlBQVksRUFBSSxJQUFJLENBQUMsT0FBTyxZQUFTLEdBQUssTUFBTSxHQUFFO0lBQzVFLENBQUM7SUFFRDs7O09BR0c7SUFDSCx3Q0FBYSxHQUFiLFVBQWMsT0FBYztRQUMxQixPQUFPLElBQUksQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLE9BQU8sRUFBSSxJQUFJLENBQUMsT0FBTyxhQUFVLENBQUMsQ0FBQztJQUM3RCxDQUFDO0lBRUQ7OztPQUdHO0lBQ0gsc0NBQVcsR0FBWCxVQUFZLEtBQWM7UUFDeEIsT0FBTyxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBSSxJQUFJLENBQUMsT0FBTyxlQUFZLEVBQUUsSUFBSSxDQUFDLENBQUM7SUFDMUQsQ0FBQzt1R0F0RlUsZ0JBQWdCLGNBUVAsUUFBUTsrRUFSakIsZ0JBQWdCLFdBQWhCLGdCQUFnQjsyQkFWN0I7Q0FrR0MsQUF6RkQsSUF5RkM7U0F4RlksZ0JBQWdCO2tEQUFoQixnQkFBZ0I7Y0FENUIsVUFBVTs7c0JBU0ksTUFBTTt1QkFBQyxRQUFRIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSwgSW5qZWN0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBSZXN0VXRpbCB9IGZyb20gJy4uLy4uL3V0aWxzL3Jlc3QtdXRpbCc7XG5pbXBvcnQgeyBDb3JlQ29uZmlnIH0gZnJvbSAnLi4vLi4vY29uZmlnJztcblxuXG5cbi8qKlxuICogTGlzdCBvZiBnZW5lcmFsIHN5c3RlbSBjb25maWd1cmF0aW9uIGFjdGlvbnMgZm9yIHN5c3RlbSBhZG1pbmlzdHJhdG9yIG9ubHkgXG4gKi9cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBTeXNTeXN0ZW1TZXJ2aWNlIHtcblxuICAvLyBVUkwgdG8gd2ViIGFwaVxuICBwcml2YXRlIGJhc2VVcmwgPSAnL3N5cy9zeXN0ZW0nO1xuXG4gIC8qKlxuICAgKiBDbGFzcyBjb25zdHJ1Y3RvclxuICAgKi9cbiAgY29uc3RydWN0b3IoQEluamVjdCgnY29uZmlnJykgcHJpdmF0ZSBjb25maWc6IENvcmVDb25maWcsIHByaXZhdGUgcmVzdDogUmVzdFV0aWwpIHtcbiAgICB0aGlzLmJhc2VVcmwgPSB0aGlzLmNvbmZpZy5hcGkgKyB0aGlzLmJhc2VVcmw7XG4gIH1cblxuXG4gIC8qKlxuICAgKiBHZXQgc3lzdGVtIHZlcnNpb25cbiAgICogQFJldHVybjogQWN0aW9uUmVzcG9uc2VcbiAgICovXG4gIGdldFN5c3RlbVZlcnNpb24oKSB7XG4gICAgcmV0dXJuIHRoaXMucmVzdC5nZXQoYCR7dGhpcy5iYXNlVXJsfS9saWNlbnNlYCk7XG4gIH1cblxuICAvKipcbiAgICogRXhwb3J0IGFjY291bnQgY29uZmlndXJhdGlvbiBkYXRhXG4gICAqIEBSZXR1cm46IFN0cmVhbWluZ091dHB1dCBvZiB0aGUgY29udGVudCAoZ3ppcClcbiAgICovXG4gIGV4cG9ydEFjY291bnREYXRhKGFjY291bnRJZD86IHN0cmluZywgcGFzc3dvcmQ/OiBzdHJpbmcpIHtcbiAgICBjb25zdCBwYXJhbXMgPSBuZXcgQXJyYXkoKTtcdFx0XG4gICAgaWYgKGFjY291bnRJZCAhPSBudWxsKSB7IHBhcmFtcy5wdXNoKGBhY2NvdW50SWQ9JHthY2NvdW50SWR9YCk7IH1cbiAgICBpZiAocGFzc3dvcmQgIT0gbnVsbCkgeyBwYXJhbXMucHVzaChgcGFzc3dvcmQ9JHtwYXNzd29yZH1gKTsgfVxuXG5cdFx0cmV0dXJuIHRoaXMucmVzdC5kb3dubG9hZChgc3lzLXN5c3RlbWAsYCR7dGhpcy5iYXNlVXJsfS9hY2NvdW50cy9leHBvcnRgLCAuLi5wYXJhbXMpO1xuICB9XG5cbiAgLyoqXG4gICAqIEltcG9ydCBhY2NvdW50IGNvbmZpZ3VyYXRpb24gZGF0YSBmcm9tIGJ5dGUgYXJyYXkgKHppcCBjb250ZW50KVxuICAgKiBAUmV0dXJuOiBBY3Rpb25SZXNwb25zZVxuICAgKi9cbiAgaW1wb3J0QWNjb3VudERhdGEocGFzc3dvcmQ/OiBzdHJpbmcsIHppcEZpbGU/OiBGaWxlKSB7XG4gICAgY29uc3QgcGFyYW1zID0gbmV3IEFycmF5KCk7XHRcdFxuICAgIGlmIChwYXNzd29yZCAhPSBudWxsKSB7IHBhcmFtcy5wdXNoKGBwYXNzd29yZD0ke3Bhc3N3b3JkfWApOyB9XG5cblx0XHRyZXR1cm4gdGhpcy5yZXN0LnVwbG9hZCh6aXBGaWxlLGAke3RoaXMuYmFzZVVybH0vYWNjb3VudHMvaW1wb3J0YCwgLi4ucGFyYW1zKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBFeHBvcnQgU1cgcGFja2FnZSBjb25maWd1cmF0aW9ucyBkYXRhXG4gICAqIEBSZXR1cm46IFN0cmVhbWluZ091dHB1dCBvZiB0aGUgY29udGVudCAoemlwKVxuICAgKi9cbiAgZXhwb3J0Q29uZmlndXJhdGlvbnMoKSB7XG4gICAgcmV0dXJuIHRoaXMucmVzdC5kb3dubG9hZChgc3lzLXN5c3RlbWAsYCR7dGhpcy5iYXNlVXJsfS9jb25maWd1cmF0aW9ucy9leHBvcnRgKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBJbXBvcnQgU1cgcGFja2FnZSBjb25maWd1cmF0aW9ucyBkYXRhIGZyb20gYnl0ZSBhcnJheSAoemlwIGNvbnRlbnQpXG4gICAqIEBSZXR1cm46IEFjdGlvblJlc3BvbnNlXG4gICAqL1xuICBpbXBvcnRDb25maWd1cmF0aW9ucyh6aXBGaWxlPzogRmlsZSkge1xuICAgIHJldHVybiB0aGlzLnJlc3QudXBsb2FkKHppcEZpbGUsYCR7dGhpcy5iYXNlVXJsfS9jb25maWd1cmF0aW9ucy9pbXBvcnRgKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBCYWNrdXAgZW50aXJlIHN5c3RlbSAoY29uZmlndXJhdGlvbnMsIHVzZXJzIGFuZCBhY2NvdW50cylcbiAgICogRmlsdGVyIHBhcmFtZXRlciB2YWx1ZXM6IGVtcHR5ID0gYmFja3VwIGFsbCwgY29uZmlnID0gYmFja3VwIGNvbmZpZ3VyYXRpb24gb25seSwgdXNlcnMgPSBiYWNrdXAgdXNlcnMgb25seSwgPGFjY291bnRJZD4gPSBiYWNrdXAgYWNjb3VudCBkYXRhXG4gICAqIEBSZXR1cm46IFN0cmVhbWluZ091dHB1dCBvZiB0aGUgY29udGVudCAoemlwKVxuICAgKi9cbiAgYmFja3VwU3lzdGVtKGZpbHRlcj86IHN0cmluZykge1xuICAgIGNvbnN0IHBhcmFtcyA9IG5ldyBBcnJheSgpO1x0XHRcbiAgICBpZiAoZmlsdGVyICE9IG51bGwpIHsgcGFyYW1zLnB1c2goYGZpbHRlcj0ke2ZpbHRlcn1gKTsgfVxuXG5cdFx0cmV0dXJuIHRoaXMucmVzdC5kb3dubG9hZChgc3lzLXN5c3RlbWAsYCR7dGhpcy5iYXNlVXJsfS9iYWNrdXBgLCAuLi5wYXJhbXMpO1xuICB9XG5cbiAgLyoqXG4gICAqIFJlc3RvcmUgZW50aXJlIHN5c3RlbSAoemlwIGNvbnRlbnQpXG4gICAqIEBSZXR1cm46IEFjdGlvblJlc3BvbnNlXG4gICAqL1xuICByZXN0b3JlU3lzdGVtKHppcEZpbGU/OiBGaWxlKSB7XG4gICAgcmV0dXJuIHRoaXMucmVzdC51cGxvYWQoemlwRmlsZSxgJHt0aGlzLmJhc2VVcmx9L3Jlc3RvcmVgKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBQdWJsaXNoIG1lc3NhZ2UgdG8gYWxsIHNlcnZpY2VzIHRvIGNoYW5nZSB0aGVpciBsb2cgbGV2ZWxcbiAgICogQFJldHVybjogQWN0aW9uUmVzcG9uc2VcbiAgICovXG4gIHNldExvZ0xldmVsKGxldmVsPzogc3RyaW5nKSB7XG4gICAgcmV0dXJuIHRoaXMucmVzdC5wdXQoYCR7dGhpcy5iYXNlVXJsfS9sb2ctbGV2ZWxgLCBudWxsKTtcbiAgfVxuXG59XG4iXX0=