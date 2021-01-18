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
    exportAccountData(accountId, password) {
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
    exportConfigurations() {
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
    backupSystem(filter) {
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3lzU3lzdGVtU2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiIuLi8uLi8uLi9wcm9qZWN0cy9uZy1jb3JlLWxpYi9zcmMvIiwic291cmNlcyI6WyJsaWIvc2VydmljZXMvc3lzU3lzdGVtU2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUNuRCxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sdUJBQXVCLENBQUM7QUFDakQsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGNBQWMsQ0FBQzs7OztBQUkxQzs7R0FFRztBQUVILE1BQU0sT0FBTyxnQkFBZ0I7SUFLM0I7O09BRUc7SUFDSCxZQUFzQyxNQUFrQixFQUFVLElBQWM7UUFBMUMsV0FBTSxHQUFOLE1BQU0sQ0FBWTtRQUFVLFNBQUksR0FBSixJQUFJLENBQVU7UUFOaEYsaUJBQWlCO1FBQ1QsWUFBTyxHQUFHLGFBQWEsQ0FBQztRQU05QixJQUFJLENBQUMsT0FBTyxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUMsR0FBRyxHQUFHLElBQUksQ0FBQyxPQUFPLENBQUM7SUFDaEQsQ0FBQztJQUdEOzs7T0FHRztJQUNILGdCQUFnQjtRQUNkLE9BQU8sSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsR0FBRyxJQUFJLENBQUMsT0FBTyxVQUFVLENBQUMsQ0FBQztJQUNsRCxDQUFDO0lBRUQ7OztPQUdHO0lBQ0gsaUJBQWlCLENBQUMsU0FBa0IsRUFBRSxRQUFpQjtRQUNyRCxNQUFNLE1BQU0sR0FBRyxJQUFJLEtBQUssRUFBRSxDQUFDO1FBQzNCLElBQUksU0FBUyxJQUFJLElBQUksRUFBRTtZQUFFLE1BQU0sQ0FBQyxJQUFJLENBQUMsYUFBYSxTQUFTLEVBQUUsQ0FBQyxDQUFDO1NBQUU7UUFDakUsSUFBSSxRQUFRLElBQUksSUFBSSxFQUFFO1lBQUUsTUFBTSxDQUFDLElBQUksQ0FBQyxZQUFZLFFBQVEsRUFBRSxDQUFDLENBQUM7U0FBRTtRQUVoRSxPQUFPLElBQUksQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLFlBQVksRUFBQyxHQUFHLElBQUksQ0FBQyxPQUFPLGtCQUFrQixFQUFFLEdBQUcsTUFBTSxDQUFDLENBQUM7SUFDckYsQ0FBQztJQUVEOzs7T0FHRztJQUNILGlCQUFpQixDQUFDLFFBQWlCLEVBQUUsT0FBYztRQUNqRCxNQUFNLE1BQU0sR0FBRyxJQUFJLEtBQUssRUFBRSxDQUFDO1FBQzNCLElBQUksUUFBUSxJQUFJLElBQUksRUFBRTtZQUFFLE1BQU0sQ0FBQyxJQUFJLENBQUMsWUFBWSxRQUFRLEVBQUUsQ0FBQyxDQUFDO1NBQUU7UUFFaEUsT0FBTyxJQUFJLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxPQUFPLEVBQUMsR0FBRyxJQUFJLENBQUMsT0FBTyxrQkFBa0IsRUFBRSxHQUFHLE1BQU0sQ0FBQyxDQUFDO0lBQzlFLENBQUM7SUFFRDs7O09BR0c7SUFDSCxvQkFBb0I7UUFDbEIsT0FBTyxJQUFJLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxZQUFZLEVBQUMsR0FBRyxJQUFJLENBQUMsT0FBTyx3QkFBd0IsQ0FBQyxDQUFDO0lBQ2xGLENBQUM7SUFFRDs7O09BR0c7SUFDSCxvQkFBb0IsQ0FBQyxPQUFjO1FBQ2pDLE9BQU8sSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsT0FBTyxFQUFDLEdBQUcsSUFBSSxDQUFDLE9BQU8sd0JBQXdCLENBQUMsQ0FBQztJQUMzRSxDQUFDO0lBRUQ7Ozs7T0FJRztJQUNILFlBQVksQ0FBQyxNQUFpQjtRQUM1QixNQUFNLE1BQU0sR0FBRyxJQUFJLEtBQUssRUFBRSxDQUFDO1FBQzNCLElBQUksTUFBTSxJQUFJLElBQUksRUFBRTtZQUFFLE1BQU0sQ0FBQyxJQUFJLENBQUMsVUFBVSxNQUFNLEVBQUUsQ0FBQyxDQUFDO1NBQUU7UUFFMUQsT0FBTyxJQUFJLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxZQUFZLEVBQUMsR0FBRyxJQUFJLENBQUMsT0FBTyxTQUFTLEVBQUUsR0FBRyxNQUFNLENBQUMsQ0FBQztJQUM1RSxDQUFDO0lBRUQ7OztPQUdHO0lBQ0gsYUFBYSxDQUFDLE9BQWM7UUFDMUIsT0FBTyxJQUFJLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxPQUFPLEVBQUMsR0FBRyxJQUFJLENBQUMsT0FBTyxVQUFVLENBQUMsQ0FBQztJQUM3RCxDQUFDO0lBRUQ7OztPQUdHO0lBQ0gsV0FBVyxDQUFDLEtBQWM7UUFDeEIsT0FBTyxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxHQUFHLElBQUksQ0FBQyxPQUFPLFlBQVksRUFBRSxJQUFJLENBQUMsQ0FBQztJQUMxRCxDQUFDOzttR0F0RlUsZ0JBQWdCLGNBUVAsUUFBUTsyRUFSakIsZ0JBQWdCLFdBQWhCLGdCQUFnQjtrREFBaEIsZ0JBQWdCO2NBRDVCLFVBQVU7O3NCQVNJLE1BQU07dUJBQUMsUUFBUSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUsIEluamVjdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgUmVzdFV0aWwgfSBmcm9tICcuLi8uLi91dGlscy9yZXN0LXV0aWwnO1xuaW1wb3J0IHsgQ29yZUNvbmZpZyB9IGZyb20gJy4uLy4uL2NvbmZpZyc7XG5cblxuXG4vKipcbiAqIExpc3Qgb2YgZ2VuZXJhbCBzeXN0ZW0gY29uZmlndXJhdGlvbiBhY3Rpb25zIGZvciBzeXN0ZW0gYWRtaW5pc3RyYXRvciBvbmx5IFxuICovXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgU3lzU3lzdGVtU2VydmljZSB7XG5cbiAgLy8gVVJMIHRvIHdlYiBhcGlcbiAgcHJpdmF0ZSBiYXNlVXJsID0gJy9zeXMvc3lzdGVtJztcblxuICAvKipcbiAgICogQ2xhc3MgY29uc3RydWN0b3JcbiAgICovXG4gIGNvbnN0cnVjdG9yKEBJbmplY3QoJ2NvbmZpZycpIHByaXZhdGUgY29uZmlnOiBDb3JlQ29uZmlnLCBwcml2YXRlIHJlc3Q6IFJlc3RVdGlsKSB7XG4gICAgdGhpcy5iYXNlVXJsID0gdGhpcy5jb25maWcuYXBpICsgdGhpcy5iYXNlVXJsO1xuICB9XG5cblxuICAvKipcbiAgICogR2V0IHN5c3RlbSB2ZXJzaW9uXG4gICAqIEBSZXR1cm46IEFjdGlvblJlc3BvbnNlXG4gICAqL1xuICBnZXRTeXN0ZW1WZXJzaW9uKCkge1xuICAgIHJldHVybiB0aGlzLnJlc3QuZ2V0KGAke3RoaXMuYmFzZVVybH0vbGljZW5zZWApO1xuICB9XG5cbiAgLyoqXG4gICAqIEV4cG9ydCBhY2NvdW50IGNvbmZpZ3VyYXRpb24gZGF0YVxuICAgKiBAUmV0dXJuOiBTdHJlYW1pbmdPdXRwdXQgb2YgdGhlIGNvbnRlbnQgKGd6aXApXG4gICAqL1xuICBleHBvcnRBY2NvdW50RGF0YShhY2NvdW50SWQ/OiBzdHJpbmcsIHBhc3N3b3JkPzogc3RyaW5nKSB7XG4gICAgY29uc3QgcGFyYW1zID0gbmV3IEFycmF5KCk7XHRcdFxuICAgIGlmIChhY2NvdW50SWQgIT0gbnVsbCkgeyBwYXJhbXMucHVzaChgYWNjb3VudElkPSR7YWNjb3VudElkfWApOyB9XG4gICAgaWYgKHBhc3N3b3JkICE9IG51bGwpIHsgcGFyYW1zLnB1c2goYHBhc3N3b3JkPSR7cGFzc3dvcmR9YCk7IH1cblxuXHRcdHJldHVybiB0aGlzLnJlc3QuZG93bmxvYWQoYHN5cy1zeXN0ZW1gLGAke3RoaXMuYmFzZVVybH0vYWNjb3VudHMvZXhwb3J0YCwgLi4ucGFyYW1zKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBJbXBvcnQgYWNjb3VudCBjb25maWd1cmF0aW9uIGRhdGEgZnJvbSBieXRlIGFycmF5ICh6aXAgY29udGVudClcbiAgICogQFJldHVybjogQWN0aW9uUmVzcG9uc2VcbiAgICovXG4gIGltcG9ydEFjY291bnREYXRhKHBhc3N3b3JkPzogc3RyaW5nLCB6aXBGaWxlPzogRmlsZSkge1xuICAgIGNvbnN0IHBhcmFtcyA9IG5ldyBBcnJheSgpO1x0XHRcbiAgICBpZiAocGFzc3dvcmQgIT0gbnVsbCkgeyBwYXJhbXMucHVzaChgcGFzc3dvcmQ9JHtwYXNzd29yZH1gKTsgfVxuXG5cdFx0cmV0dXJuIHRoaXMucmVzdC51cGxvYWQoemlwRmlsZSxgJHt0aGlzLmJhc2VVcmx9L2FjY291bnRzL2ltcG9ydGAsIC4uLnBhcmFtcyk7XG4gIH1cblxuICAvKipcbiAgICogRXhwb3J0IFNXIHBhY2thZ2UgY29uZmlndXJhdGlvbnMgZGF0YVxuICAgKiBAUmV0dXJuOiBTdHJlYW1pbmdPdXRwdXQgb2YgdGhlIGNvbnRlbnQgKHppcClcbiAgICovXG4gIGV4cG9ydENvbmZpZ3VyYXRpb25zKCkge1xuICAgIHJldHVybiB0aGlzLnJlc3QuZG93bmxvYWQoYHN5cy1zeXN0ZW1gLGAke3RoaXMuYmFzZVVybH0vY29uZmlndXJhdGlvbnMvZXhwb3J0YCk7XG4gIH1cblxuICAvKipcbiAgICogSW1wb3J0IFNXIHBhY2thZ2UgY29uZmlndXJhdGlvbnMgZGF0YSBmcm9tIGJ5dGUgYXJyYXkgKHppcCBjb250ZW50KVxuICAgKiBAUmV0dXJuOiBBY3Rpb25SZXNwb25zZVxuICAgKi9cbiAgaW1wb3J0Q29uZmlndXJhdGlvbnMoemlwRmlsZT86IEZpbGUpIHtcbiAgICByZXR1cm4gdGhpcy5yZXN0LnVwbG9hZCh6aXBGaWxlLGAke3RoaXMuYmFzZVVybH0vY29uZmlndXJhdGlvbnMvaW1wb3J0YCk7XG4gIH1cblxuICAvKipcbiAgICogQmFja3VwIGVudGlyZSBzeXN0ZW0gKGNvbmZpZ3VyYXRpb25zLCB1c2VycyBhbmQgYWNjb3VudHMpXG4gICAqIEZpbHRlciBwYXJhbWV0ZXIgdmFsdWVzOiBlbXB0eSA9IGJhY2t1cCBhbGwsIGNvbmZpZyA9IGJhY2t1cCBjb25maWd1cmF0aW9uIG9ubHksIHVzZXJzID0gYmFja3VwIHVzZXJzIG9ubHksIDxhY2NvdW50SWQ+ID0gYmFja3VwIGFjY291bnQgZGF0YVxuICAgKiBAUmV0dXJuOiBTdHJlYW1pbmdPdXRwdXQgb2YgdGhlIGNvbnRlbnQgKHppcClcbiAgICovXG4gIGJhY2t1cFN5c3RlbShmaWx0ZXI/OiBzdHJpbmdbXSkge1xuICAgIGNvbnN0IHBhcmFtcyA9IG5ldyBBcnJheSgpO1x0XHRcbiAgICBpZiAoZmlsdGVyICE9IG51bGwpIHsgcGFyYW1zLnB1c2goYGZpbHRlcj0ke2ZpbHRlcn1gKTsgfVxuXG5cdFx0cmV0dXJuIHRoaXMucmVzdC5kb3dubG9hZChgc3lzLXN5c3RlbWAsYCR7dGhpcy5iYXNlVXJsfS9iYWNrdXBgLCAuLi5wYXJhbXMpO1xuICB9XG5cbiAgLyoqXG4gICAqIFJlc3RvcmUgZW50aXJlIHN5c3RlbSAoemlwIGNvbnRlbnQpXG4gICAqIEBSZXR1cm46IEFjdGlvblJlc3BvbnNlXG4gICAqL1xuICByZXN0b3JlU3lzdGVtKHppcEZpbGU/OiBGaWxlKSB7XG4gICAgcmV0dXJuIHRoaXMucmVzdC51cGxvYWQoemlwRmlsZSxgJHt0aGlzLmJhc2VVcmx9L3Jlc3RvcmVgKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBQdWJsaXNoIG1lc3NhZ2UgdG8gYWxsIHNlcnZpY2VzIHRvIGNoYW5nZSB0aGVpciBsb2cgbGV2ZWxcbiAgICogQFJldHVybjogQWN0aW9uUmVzcG9uc2VcbiAgICovXG4gIHNldExvZ0xldmVsKGxldmVsPzogc3RyaW5nKSB7XG4gICAgcmV0dXJuIHRoaXMucmVzdC5wdXQoYCR7dGhpcy5iYXNlVXJsfS9sb2ctbGV2ZWxgLCBudWxsKTtcbiAgfVxuXG59XG4iXX0=