import { Injectable, Inject } from '@angular/core';
import { RestUtil } from '../../utils/rest-util';
import { CoreConfig } from '../../config';
import * as i0 from "@angular/core";
import * as i1 from "../../utils/rest-util";
import * as i2 from "../../config";
/**
 * List of general system configuration actions for system administrator only
 */
export class SysSystemService {
    /**
     * Class constructor
     */
    constructor(config, rest) {
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
    getSystemVersion() {
        return this.rest.get(`${this.baseUrl}/license`);
    }
    /**
     * Export account configuration data
     * @Return: StreamingOutput of the content (gzip)
     */
    exportAccountData(accountId, password, fileName, mimeType) {
        const params = new Array();
        if (accountId != null) {
            params.push(`accountId=${accountId}`);
        }
        if (password != null) {
            params.push(`password=${password}`);
        }
        return this.rest.download(`sys-system`, `${this.baseUrl}/accounts/export`, ...params);
    }
    /**
     * Import account configuration data from byte array (zip content)
     * @Return: ActionResponse
     */
    importAccountData(password, zipFile) {
        const params = new Array();
        if (password != null) {
            params.push(`password=${password}`);
        }
        return this.rest.upload(zipFile, `${this.baseUrl}/accounts/import`, ...params);
    }
    /**
     * Export SW package configurations data
     * @Return: StreamingOutput of the content (zip)
     */
    exportConfigurations(fileName, mimeType) {
        return this.rest.download(`sys-system`, `${this.baseUrl}/configurations/export`);
    }
    /**
     * Import SW package configurations data from byte array (zip content)
     * @Return: ActionResponse
     */
    importConfigurations(zipFile) {
        return this.rest.upload(zipFile, `${this.baseUrl}/configurations/import`);
    }
    /**
     * Backup entire system (configurations, users and accounts)
     * Filter parameter values: empty = backup all, config = backup configuration only, users = backup users only, <accountId> = backup account data
     * @Return: StreamingOutput of the content (zip)
     */
    backupSystem(filter, fileName, mimeType) {
        const params = new Array();
        if (filter != null) {
            params.push(`filter=${filter}`);
        }
        return this.rest.download(`sys-system`, `${this.baseUrl}/backup`, ...params);
    }
    /**
     * Restore entire system (zip content)
     * @Return: ActionResponse
     */
    restoreSystem(zipFile) {
        return this.rest.upload(zipFile, `${this.baseUrl}/restore`);
    }
    /**
     * Publish message to all services to change their log level
     * @Return: ActionResponse
     */
    setLogLevel(level) {
        return this.rest.put(`${this.baseUrl}/log-level`, null);
    }
}
/** @nocollapse */ SysSystemService.ɵfac = function SysSystemService_Factory(t) { return new (t || SysSystemService)(i0.ɵɵinject('config'), i0.ɵɵinject(i1.RestUtil)); };
/** @nocollapse */ SysSystemService.ɵprov = i0.ɵɵdefineInjectable({ token: SysSystemService, factory: SysSystemService.ɵfac });
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(SysSystemService, [{
        type: Injectable
    }], function () { return [{ type: i2.CoreConfig, decorators: [{
                type: Inject,
                args: ['config']
            }] }, { type: i1.RestUtil }]; }, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3lzU3lzdGVtU2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiIuLi8uLi8uLi9wcm9qZWN0cy9uZy1jb3JlLWxpYi9zcmMvIiwic291cmNlcyI6WyJsaWIvc2VydmljZXMvc3lzU3lzdGVtU2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUNuRCxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sdUJBQXVCLENBQUM7QUFDakQsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGNBQWMsQ0FBQzs7OztBQUkxQzs7R0FFRztBQUVILE1BQU0sT0FBTyxnQkFBZ0I7SUFLM0I7O09BRUc7SUFDSCxZQUFzQyxNQUFrQixFQUFVLElBQWM7UUFBMUMsV0FBTSxHQUFOLE1BQU0sQ0FBWTtRQUFVLFNBQUksR0FBSixJQUFJLENBQVU7UUFOaEYsaUJBQWlCO1FBQ1QsWUFBTyxHQUFHLGFBQWEsQ0FBQztRQU05QixJQUFJLENBQUMsT0FBTyxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUMsR0FBRyxHQUFHLElBQUksQ0FBQyxPQUFPLENBQUM7SUFDaEQsQ0FBQztJQUdEOzs7T0FHRztJQUNILGdCQUFnQjtRQUNkLE9BQU8sSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsR0FBRyxJQUFJLENBQUMsT0FBTyxVQUFVLENBQUMsQ0FBQztJQUNsRCxDQUFDO0lBRUQ7OztPQUdHO0lBQ0gsaUJBQWlCLENBQUMsU0FBa0IsRUFBRSxRQUFpQixFQUFFLFFBQWlCLEVBQUUsUUFBaUI7UUFDM0YsTUFBTSxNQUFNLEdBQUcsSUFBSSxLQUFLLEVBQUUsQ0FBQztRQUMzQixJQUFJLFNBQVMsSUFBSSxJQUFJLEVBQUU7WUFBRSxNQUFNLENBQUMsSUFBSSxDQUFDLGFBQWEsU0FBUyxFQUFFLENBQUMsQ0FBQztTQUFFO1FBQ2pFLElBQUksUUFBUSxJQUFJLElBQUksRUFBRTtZQUFFLE1BQU0sQ0FBQyxJQUFJLENBQUMsWUFBWSxRQUFRLEVBQUUsQ0FBQyxDQUFDO1NBQUU7UUFFaEUsT0FBTyxJQUFJLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxZQUFZLEVBQUMsR0FBRyxJQUFJLENBQUMsT0FBTyxrQkFBa0IsRUFBRSxHQUFHLE1BQU0sQ0FBQyxDQUFDO0lBQ3JGLENBQUM7SUFFRDs7O09BR0c7SUFDSCxpQkFBaUIsQ0FBQyxRQUFpQixFQUFFLE9BQWM7UUFDakQsTUFBTSxNQUFNLEdBQUcsSUFBSSxLQUFLLEVBQUUsQ0FBQztRQUMzQixJQUFJLFFBQVEsSUFBSSxJQUFJLEVBQUU7WUFBRSxNQUFNLENBQUMsSUFBSSxDQUFDLFlBQVksUUFBUSxFQUFFLENBQUMsQ0FBQztTQUFFO1FBRWhFLE9BQU8sSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsT0FBTyxFQUFDLEdBQUcsSUFBSSxDQUFDLE9BQU8sa0JBQWtCLEVBQUUsR0FBRyxNQUFNLENBQUMsQ0FBQztJQUM5RSxDQUFDO0lBRUQ7OztPQUdHO0lBQ0gsb0JBQW9CLENBQUMsUUFBaUIsRUFBRSxRQUFpQjtRQUN2RCxPQUFPLElBQUksQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLFlBQVksRUFBQyxHQUFHLElBQUksQ0FBQyxPQUFPLHdCQUF3QixDQUFDLENBQUM7SUFDbEYsQ0FBQztJQUVEOzs7T0FHRztJQUNILG9CQUFvQixDQUFDLE9BQWM7UUFDakMsT0FBTyxJQUFJLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxPQUFPLEVBQUMsR0FBRyxJQUFJLENBQUMsT0FBTyx3QkFBd0IsQ0FBQyxDQUFDO0lBQzNFLENBQUM7SUFFRDs7OztPQUlHO0lBQ0gsWUFBWSxDQUFDLE1BQWUsRUFBRSxRQUFpQixFQUFFLFFBQWlCO1FBQ2hFLE1BQU0sTUFBTSxHQUFHLElBQUksS0FBSyxFQUFFLENBQUM7UUFDM0IsSUFBSSxNQUFNLElBQUksSUFBSSxFQUFFO1lBQUUsTUFBTSxDQUFDLElBQUksQ0FBQyxVQUFVLE1BQU0sRUFBRSxDQUFDLENBQUM7U0FBRTtRQUUxRCxPQUFPLElBQUksQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLFlBQVksRUFBQyxHQUFHLElBQUksQ0FBQyxPQUFPLFNBQVMsRUFBRSxHQUFHLE1BQU0sQ0FBQyxDQUFDO0lBQzVFLENBQUM7SUFFRDs7O09BR0c7SUFDSCxhQUFhLENBQUMsT0FBYztRQUMxQixPQUFPLElBQUksQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLE9BQU8sRUFBQyxHQUFHLElBQUksQ0FBQyxPQUFPLFVBQVUsQ0FBQyxDQUFDO0lBQzdELENBQUM7SUFFRDs7O09BR0c7SUFDSCxXQUFXLENBQUMsS0FBYztRQUN4QixPQUFPLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLEdBQUcsSUFBSSxDQUFDLE9BQU8sWUFBWSxFQUFFLElBQUksQ0FBQyxDQUFDO0lBQzFELENBQUM7O21HQXRGVSxnQkFBZ0IsY0FRUCxRQUFROzJFQVJqQixnQkFBZ0IsV0FBaEIsZ0JBQWdCO2tEQUFoQixnQkFBZ0I7Y0FENUIsVUFBVTs7c0JBU0ksTUFBTTt1QkFBQyxRQUFRIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSwgSW5qZWN0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBSZXN0VXRpbCB9IGZyb20gJy4uLy4uL3V0aWxzL3Jlc3QtdXRpbCc7XG5pbXBvcnQgeyBDb3JlQ29uZmlnIH0gZnJvbSAnLi4vLi4vY29uZmlnJztcblxuXG5cbi8qKlxuICogTGlzdCBvZiBnZW5lcmFsIHN5c3RlbSBjb25maWd1cmF0aW9uIGFjdGlvbnMgZm9yIHN5c3RlbSBhZG1pbmlzdHJhdG9yIG9ubHkgXG4gKi9cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBTeXNTeXN0ZW1TZXJ2aWNlIHtcblxuICAvLyBVUkwgdG8gd2ViIGFwaVxuICBwcml2YXRlIGJhc2VVcmwgPSAnL3N5cy9zeXN0ZW0nO1xuXG4gIC8qKlxuICAgKiBDbGFzcyBjb25zdHJ1Y3RvclxuICAgKi9cbiAgY29uc3RydWN0b3IoQEluamVjdCgnY29uZmlnJykgcHJpdmF0ZSBjb25maWc6IENvcmVDb25maWcsIHByaXZhdGUgcmVzdDogUmVzdFV0aWwpIHtcbiAgICB0aGlzLmJhc2VVcmwgPSB0aGlzLmNvbmZpZy5hcGkgKyB0aGlzLmJhc2VVcmw7XG4gIH1cblxuXG4gIC8qKlxuICAgKiBHZXQgc3lzdGVtIHZlcnNpb25cbiAgICogQFJldHVybjogQWN0aW9uUmVzcG9uc2VcbiAgICovXG4gIGdldFN5c3RlbVZlcnNpb24oKSB7XG4gICAgcmV0dXJuIHRoaXMucmVzdC5nZXQoYCR7dGhpcy5iYXNlVXJsfS9saWNlbnNlYCk7XG4gIH1cblxuICAvKipcbiAgICogRXhwb3J0IGFjY291bnQgY29uZmlndXJhdGlvbiBkYXRhXG4gICAqIEBSZXR1cm46IFN0cmVhbWluZ091dHB1dCBvZiB0aGUgY29udGVudCAoZ3ppcClcbiAgICovXG4gIGV4cG9ydEFjY291bnREYXRhKGFjY291bnRJZD86IHN0cmluZywgcGFzc3dvcmQ/OiBzdHJpbmcsIGZpbGVOYW1lPzogc3RyaW5nLCBtaW1lVHlwZT86IHN0cmluZykge1xuICAgIGNvbnN0IHBhcmFtcyA9IG5ldyBBcnJheSgpO1x0XHRcbiAgICBpZiAoYWNjb3VudElkICE9IG51bGwpIHsgcGFyYW1zLnB1c2goYGFjY291bnRJZD0ke2FjY291bnRJZH1gKTsgfVxuICAgIGlmIChwYXNzd29yZCAhPSBudWxsKSB7IHBhcmFtcy5wdXNoKGBwYXNzd29yZD0ke3Bhc3N3b3JkfWApOyB9XG5cblx0XHRyZXR1cm4gdGhpcy5yZXN0LmRvd25sb2FkKGBzeXMtc3lzdGVtYCxgJHt0aGlzLmJhc2VVcmx9L2FjY291bnRzL2V4cG9ydGAsIC4uLnBhcmFtcyk7XG4gIH1cblxuICAvKipcbiAgICogSW1wb3J0IGFjY291bnQgY29uZmlndXJhdGlvbiBkYXRhIGZyb20gYnl0ZSBhcnJheSAoemlwIGNvbnRlbnQpXG4gICAqIEBSZXR1cm46IEFjdGlvblJlc3BvbnNlXG4gICAqL1xuICBpbXBvcnRBY2NvdW50RGF0YShwYXNzd29yZD86IHN0cmluZywgemlwRmlsZT86IEZpbGUpIHtcbiAgICBjb25zdCBwYXJhbXMgPSBuZXcgQXJyYXkoKTtcdFx0XG4gICAgaWYgKHBhc3N3b3JkICE9IG51bGwpIHsgcGFyYW1zLnB1c2goYHBhc3N3b3JkPSR7cGFzc3dvcmR9YCk7IH1cblxuXHRcdHJldHVybiB0aGlzLnJlc3QudXBsb2FkKHppcEZpbGUsYCR7dGhpcy5iYXNlVXJsfS9hY2NvdW50cy9pbXBvcnRgLCAuLi5wYXJhbXMpO1xuICB9XG5cbiAgLyoqXG4gICAqIEV4cG9ydCBTVyBwYWNrYWdlIGNvbmZpZ3VyYXRpb25zIGRhdGFcbiAgICogQFJldHVybjogU3RyZWFtaW5nT3V0cHV0IG9mIHRoZSBjb250ZW50ICh6aXApXG4gICAqL1xuICBleHBvcnRDb25maWd1cmF0aW9ucyhmaWxlTmFtZT86IHN0cmluZywgbWltZVR5cGU/OiBzdHJpbmcpIHtcbiAgICByZXR1cm4gdGhpcy5yZXN0LmRvd25sb2FkKGBzeXMtc3lzdGVtYCxgJHt0aGlzLmJhc2VVcmx9L2NvbmZpZ3VyYXRpb25zL2V4cG9ydGApO1xuICB9XG5cbiAgLyoqXG4gICAqIEltcG9ydCBTVyBwYWNrYWdlIGNvbmZpZ3VyYXRpb25zIGRhdGEgZnJvbSBieXRlIGFycmF5ICh6aXAgY29udGVudClcbiAgICogQFJldHVybjogQWN0aW9uUmVzcG9uc2VcbiAgICovXG4gIGltcG9ydENvbmZpZ3VyYXRpb25zKHppcEZpbGU/OiBGaWxlKSB7XG4gICAgcmV0dXJuIHRoaXMucmVzdC51cGxvYWQoemlwRmlsZSxgJHt0aGlzLmJhc2VVcmx9L2NvbmZpZ3VyYXRpb25zL2ltcG9ydGApO1xuICB9XG5cbiAgLyoqXG4gICAqIEJhY2t1cCBlbnRpcmUgc3lzdGVtIChjb25maWd1cmF0aW9ucywgdXNlcnMgYW5kIGFjY291bnRzKVxuICAgKiBGaWx0ZXIgcGFyYW1ldGVyIHZhbHVlczogZW1wdHkgPSBiYWNrdXAgYWxsLCBjb25maWcgPSBiYWNrdXAgY29uZmlndXJhdGlvbiBvbmx5LCB1c2VycyA9IGJhY2t1cCB1c2VycyBvbmx5LCA8YWNjb3VudElkPiA9IGJhY2t1cCBhY2NvdW50IGRhdGFcbiAgICogQFJldHVybjogU3RyZWFtaW5nT3V0cHV0IG9mIHRoZSBjb250ZW50ICh6aXApXG4gICAqL1xuICBiYWNrdXBTeXN0ZW0oZmlsdGVyPzogc3RyaW5nLCBmaWxlTmFtZT86IHN0cmluZywgbWltZVR5cGU/OiBzdHJpbmcpIHtcbiAgICBjb25zdCBwYXJhbXMgPSBuZXcgQXJyYXkoKTtcdFx0XG4gICAgaWYgKGZpbHRlciAhPSBudWxsKSB7IHBhcmFtcy5wdXNoKGBmaWx0ZXI9JHtmaWx0ZXJ9YCk7IH1cblxuXHRcdHJldHVybiB0aGlzLnJlc3QuZG93bmxvYWQoYHN5cy1zeXN0ZW1gLGAke3RoaXMuYmFzZVVybH0vYmFja3VwYCwgLi4ucGFyYW1zKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBSZXN0b3JlIGVudGlyZSBzeXN0ZW0gKHppcCBjb250ZW50KVxuICAgKiBAUmV0dXJuOiBBY3Rpb25SZXNwb25zZVxuICAgKi9cbiAgcmVzdG9yZVN5c3RlbSh6aXBGaWxlPzogRmlsZSkge1xuICAgIHJldHVybiB0aGlzLnJlc3QudXBsb2FkKHppcEZpbGUsYCR7dGhpcy5iYXNlVXJsfS9yZXN0b3JlYCk7XG4gIH1cblxuICAvKipcbiAgICogUHVibGlzaCBtZXNzYWdlIHRvIGFsbCBzZXJ2aWNlcyB0byBjaGFuZ2UgdGhlaXIgbG9nIGxldmVsXG4gICAqIEBSZXR1cm46IEFjdGlvblJlc3BvbnNlXG4gICAqL1xuICBzZXRMb2dMZXZlbChsZXZlbD86IHN0cmluZykge1xuICAgIHJldHVybiB0aGlzLnJlc3QucHV0KGAke3RoaXMuYmFzZVVybH0vbG9nLWxldmVsYCwgbnVsbCk7XG4gIH1cblxufVxuIl19