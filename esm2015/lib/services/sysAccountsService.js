import { Injectable, Inject } from '@angular/core';
import { RestUtil } from '../../utils/rest-util';
import { CoreConfig } from '../../config';
import * as i0 from "@angular/core";
import * as i1 from "../../utils/rest-util";
import * as i2 from "../../config";
/**
 * List of account related actions for system administrator only
 * @RequestHeader X-API-KEY The key to identify the application (console)
 * @RequestHeader X-ACCESS-TOKEN The token to identify the logged-in user
 */
export class SysAccountsService {
    /**
     * Class constructor
     */
    constructor(config, rest) {
        this.config = config;
        this.rest = rest;
        // URL to web api
        this.baseUrl = '/sys/accounts';
        this.baseUrl = this.config.api + this.baseUrl;
    }
    /**
     * Create new account
     * @Return: EntityResponse<Account>
     */
    create(body) {
        return this.rest.post(`${this.baseUrl}`, typeof body === 'object' ? JSON.stringify(body) : body);
    }
    /**
     * Update existing account in the system
     * @Return: EntityResponse<Account>
     */
    update(id, body) {
        return this.rest.put(`${this.baseUrl}/${id}`, typeof body === 'object' ? JSON.stringify(body) : body);
    }
    /**
     * Update account name
     * @Return: EntityResponse<Account>
     */
    changeName(id, body) {
        return this.rest.put(`${this.baseUrl}/${id}/name`, typeof body === 'object' ? JSON.stringify(body) : body);
    }
    /**
     * Change account type
     * @Return: EntityResponse<User>
     */
    changeType(id, type) {
        return this.rest.put(`${this.baseUrl}/${id}/type/${type}`, null);
    }
    /**
     * Change account status
     * @Return: EntityResponse<Account>
     */
    changeStatus(id, status) {
        return this.rest.put(`${this.baseUrl}/${id}/status/${status}`, null);
    }
    /**
     * Change account groups
     * @Return: EntityResponse<Account>
     */
    changeGroups(id, groupId) {
        const params = new Array();
        if (groupId != null) {
            params.push(`groupId=${groupId}`);
        }
        return this.rest.put(`${this.baseUrl}/${id}/groups/{groups}`, null, ...params);
    }
    /**
     * Change account geo-location (center)
     * @Return: EntityResponse<Account> The changed account
     */
    changeGeoLocation(body) {
        return this.rest.put(`${this.baseUrl}/{id}/geoLocation`, typeof body === 'object' ? JSON.stringify(body) : body);
    }
    /**
     * Change account geo area
     * @Return: EntityResponse<Account> The changed account
     */
    changeGeoArea(body) {
        return this.rest.put(`${this.baseUrl}/{id}/geoArea`, typeof body === 'object' ? JSON.stringify(body) : body);
    }
    /**
     * Delete account from the system
     * The account is moved to DELETED mode and will be deleted after 90 days
     * Only account marked as SUSPENDED can be deleted
     * @Return: ActionResponse
     */
    delete(id) {
        return this.rest.delete(`${this.baseUrl}/${id}`);
    }
    /**
     * Delete account immediately without account status restrictions
     * @Return: ActionResponse
     */
    purge(id) {
        return this.rest.delete(`${this.baseUrl}/purge/${id}`);
    }
    /**
     * Reset account - remove all operational data older than the retention time in days (events, status, log ...) but leave configuration data
     * @Return: ActionResponse
     */
    reset(id, days) {
        return this.rest.delete(`${this.baseUrl}/reset/${id}/days/${days}`);
    }
    /**
     * Get single account by id
     * @Return: EntityResponse<Account>
     */
    get(id) {
        return this.rest.get(`${this.baseUrl}/${id}`);
    }
    /**
     * Get accounts by list of ids
     * @Return: EntitiesResponse<Account>
     */
    list(id) {
        const params = new Array();
        if (id != null) {
            params.push(`id=${id}`);
        }
        return this.rest.get(`${this.baseUrl}/list`, ...params);
    }
    /**
     * Find list of accounts and filter
     * @Return: QueryResponse<Account>
     */
    find(search, type, status, sort, page, pageSize) {
        const params = new Array();
        if (search != null) {
            params.push(`search=${search}`);
        }
        if (type != null) {
            params.push(`type=${type}`);
        }
        if (status != null) {
            params.push(`status=${status}`);
        }
        if (sort != null) {
            params.push(`sort=${sort}`);
        }
        if (page != null) {
            params.push(`page=${page}`);
        }
        if (pageSize != null) {
            params.push(`pageSize=${pageSize}`);
        }
        return this.rest.get(`${this.baseUrl}`, ...params);
    }
    /**
     * Find list of accounts and filter but replace group Ids with group names
     * @Return: QueryResponse<Account>
     */
    report(search, type, status, sort, page, pageSize) {
        const params = new Array();
        if (search != null) {
            params.push(`search=${search}`);
        }
        if (type != null) {
            params.push(`type=${type}`);
        }
        if (status != null) {
            params.push(`status=${status}`);
        }
        if (sort != null) {
            params.push(`sort=${sort}`);
        }
        if (page != null) {
            params.push(`page=${page}`);
        }
        if (pageSize != null) {
            params.push(`pageSize=${pageSize}`);
        }
        return this.rest.get(`${this.baseUrl}/report`, ...params);
    }
    /**
     * Get account hierarchy
     * @Return: EntityResponse<TreeNode>
     */
    tree(id, includeSensors, status, behaviorType) {
        const params = new Array();
        if (includeSensors != null) {
            params.push(`includeSensors=${includeSensors}`);
        }
        if (status != null) {
            params.push(`status=${status}`);
        }
        if (behaviorType != null) {
            params.push(`behaviorType=${behaviorType}`);
        }
        return this.rest.get(`${this.baseUrl}/${id}/tree`, ...params);
    }
    /**
     * Find account folders
     * @Return: QueryResponse<Folder>
     */
    findFolders(id, parentId, search, sort, page, pageSize) {
        const params = new Array();
        if (parentId != null) {
            params.push(`parentId=${parentId}`);
        }
        if (search != null) {
            params.push(`search=${search}`);
        }
        if (sort != null) {
            params.push(`sort=${sort}`);
        }
        if (page != null) {
            params.push(`page=${page}`);
        }
        if (pageSize != null) {
            params.push(`pageSize=${pageSize}`);
        }
        return this.rest.get(`${this.baseUrl}/${id}/folders`, ...params);
    }
    /**
     * Export list of accounts and filter
     * @Return: StreamContent
     */
    exportFormat(name, type, status, sort, format, fields, fileName) {
        const params = new Array();
        if (name != null) {
            params.push(`name=${name}`);
        }
        if (type != null) {
            params.push(`type=${type}`);
        }
        if (status != null) {
            params.push(`status=${status}`);
        }
        if (sort != null) {
            params.push(`sort=${sort}`);
        }
        if (format != null) {
            params.push(`format=${format}`);
        }
        if (fields != null) {
            params.push(`fields=${fields}`);
        }
        if (fileName != null) {
            params.push(`fileName=${fileName}`);
        }
        return this.rest.download(`sys-accounts`, `${this.baseUrl}/export`, ...params);
    }
    /**
     * Get account types statistics for all accounts in the system
     * @Return: EntitiesResponse<AccountTypeSummary>
     */
    getAccountTypeStatistics() {
        return this.rest.get(`${this.baseUrl}/statistics/type`);
    }
    /**
     * Get account monthly statistics for all accounts in the system
     * @Return: EntitiesResponse<AccountStatistics>
     */
    getAccountMonthStatistics(accountId, from, to) {
        const params = new Array();
        if (accountId != null) {
            params.push(`accountId=${accountId}`);
        }
        if (from != null) {
            params.push(`from=${from}`);
        }
        if (to != null) {
            params.push(`to=${to}`);
        }
        return this.rest.get(`${this.baseUrl}/statistics/month`, ...params);
    }
    /**
     * Get accounts month report - current channels and devices per account compared to previous month
     * @Return: EntitiesResponse<AccountStatSummary>
     */
    getAccountsMonthReport() {
        return this.rest.get(`${this.baseUrl}/statistics/month/report`);
    }
    /**
     * Get default geo location
     * @Return: EntityResponse<Coordinate> The account location
     */
    getDefaultLocation(id) {
        return this.rest.get(`${this.baseUrl}/${id}/geoLocation`);
    }
    /**
     * Get account usage report (for billing)
     * List of sensor with total active time (minutes) and total of billable sensors
     * @Return: EntityResponse<UsageReport>
     */
    getUsageReport(id, year, month) {
        return this.rest.get(`${this.baseUrl}/${id}/usage-report/${year}/${month}`);
    }
    /**
     * Get sensor usage report (for billing)
     * @Return: EntityResponse<TimeDataSeries<SensorStatusCode>>
     */
    getSensorUsageReport(id, sensorId, year, month) {
        return this.rest.get(`${this.baseUrl}/${id}/sensor-usage-report/${sensorId}/${year}/${month}`);
    }
    /**
     * Export account usage report to a file (for billing)
     * @Return: StreamContent
     */
    exportUsageReport(id, year, month, format, fileName) {
        const params = new Array();
        if (format != null) {
            params.push(`format=${format}`);
        }
        if (fileName != null) {
            params.push(`fileName=${fileName}`);
        }
        return this.rest.download(`sys-accounts`, `${this.baseUrl}/${id}/export-usage-report/${year}/${month}`, ...params);
    }
    /**
     * Export all accounts usage report to a file (for operations)
     * @Return: StreamContent
     */
    exportAllAccountsUsageReport(year, month) {
        return this.rest.download(`sys-accounts`, `${this.baseUrl}/export-usage-report/${year}/${month}`);
    }
}
/** @nocollapse */ SysAccountsService.ɵfac = function SysAccountsService_Factory(t) { return new (t || SysAccountsService)(i0.ɵɵinject('config'), i0.ɵɵinject(i1.RestUtil)); };
/** @nocollapse */ SysAccountsService.ɵprov = /** @pureOrBreakMyCode */ i0.ɵɵdefineInjectable({ token: SysAccountsService, factory: SysAccountsService.ɵfac });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(SysAccountsService, [{
        type: Injectable
    }], function () { return [{ type: i2.CoreConfig, decorators: [{
                type: Inject,
                args: ['config']
            }] }, { type: i1.RestUtil }]; }, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3lzQWNjb3VudHNTZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvbmctY29yZS1saWIvc3JjL2xpYi9zZXJ2aWNlcy9zeXNBY2NvdW50c1NlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDbkQsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLHVCQUF1QixDQUFDO0FBQ2pELE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxjQUFjLENBQUM7Ozs7QUFVMUM7Ozs7R0FJRztBQUVILE1BQU0sT0FBTyxrQkFBa0I7SUFLN0I7O09BRUc7SUFDSCxZQUFzQyxNQUFrQixFQUFVLElBQWM7UUFBMUMsV0FBTSxHQUFOLE1BQU0sQ0FBWTtRQUFVLFNBQUksR0FBSixJQUFJLENBQVU7UUFOaEYsaUJBQWlCO1FBQ1QsWUFBTyxHQUFHLGVBQWUsQ0FBQztRQU1oQyxJQUFJLENBQUMsT0FBTyxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUMsR0FBRyxHQUFHLElBQUksQ0FBQyxPQUFPLENBQUM7SUFDaEQsQ0FBQztJQUdEOzs7T0FHRztJQUNILE1BQU0sQ0FBQyxJQUFjO1FBQ25CLE9BQU8sSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxJQUFJLENBQUMsT0FBTyxFQUFFLEVBQUUsT0FBTyxJQUFJLEtBQUssUUFBUSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUNuRyxDQUFDO0lBRUQ7OztPQUdHO0lBQ0gsTUFBTSxDQUFDLEVBQVcsRUFBRSxJQUFjO1FBQ2hDLE9BQU8sSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsR0FBRyxJQUFJLENBQUMsT0FBTyxJQUFJLEVBQUUsRUFBRSxFQUFFLE9BQU8sSUFB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QUF3QixJQUFJLElBQUksS0FBSyxFQUFFLEVBQUUsR0FBRyxNQUFNLENBQUMsQ0FBQztJQUNsSCxDQUFDO0lBRUQ7OztPQUdHO0lBQ0gsNEJBQTRCLENBQUMsSUFBYSxFQUFFLEtBQWM7UUFDeEQsT0FBTyxJQUFJLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxjQUFjLEVBQUMsR0FBRyxJQUFJLENBQUMsT0FBTyx3QkFBd0IsSUFBSSxJQUFJLEtBQUssRUFBRSxDQUFDLENBQUM7SUFDbkcsQ0FBQzs7dUdBbFJVLGtCQUFrQixjQVFULFFBQVE7dUdBUmpCLGtCQUFrQixXQUFsQixrQkFBa0I7dUZBQWxCLGtCQUFrQjtjQUQ5QixVQUFVOztzQkFTSSxNQUFNO3VCQUFDLFFBQVEiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlLCBJbmplY3QgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFJlc3RVdGlsIH0gZnJvbSAnLi4vLi4vdXRpbHMvcmVzdC11dGlsJztcbmltcG9ydCB7IENvcmVDb25maWcgfSBmcm9tICcuLi8uLi9jb25maWcnO1xuXG5pbXBvcnQgeyBTZW5zb3JTdGF0dXNDb2RlIH0gZnJvbSAnLi4vZW51bXMvU2Vuc29yU3RhdHVzQ29kZSc7XG5pbXBvcnQgeyBCZWhhdmlvclR5cGVDb2RlIH0gZnJvbSAnLi4vZW51bXMvQmVoYXZpb3JUeXBlQ29kZSc7XG5pbXBvcnQgeyBBY2NvdW50IH0gZnJvbSAnLi4vZW50aXRpZXMvQWNjb3VudCc7XG5pbXBvcnQgeyBBY2NvdW50VHlwZUNvZGUgfSBmcm9tICcuLi9lbnVtcy9BY2NvdW50VHlwZUNvZGUnO1xuaW1wb3J0IHsgQWNjb3VudFN0YXR1c0NvZGUgfSBmcm9tICcuLi9lbnVtcy9BY2NvdW50U3RhdHVzQ29kZSc7XG5pbXBvcnQgeyBDb29yZGluYXRlIH0gZnJvbSAnLi4vY29tbW9uL0Nvb3JkaW5hdGUnO1xuXG5cbi8qKlxuICogTGlzdCBvZiBhY2NvdW50IHJlbGF0ZWQgYWN0aW9ucyBmb3Igc3lzdGVtIGFkbWluaXN0cmF0b3Igb25seVxuICogQFJlcXVlc3RIZWFkZXIgWC1BUEktS0VZIFRoZSBrZXkgdG8gaWRlbnRpZnkgdGhlIGFwcGxpY2F0aW9uIChjb25zb2xlKVxuICogQFJlcXVlc3RIZWFkZXIgWC1BQ0NFU1MtVE9LRU4gVGhlIHRva2VuIHRvIGlkZW50aWZ5IHRoZSBsb2dnZWQtaW4gdXNlciBcbiAqL1xuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIFN5c0FjY291bnRzU2VydmljZSB7XG5cbiAgLy8gVVJMIHRvIHdlYiBhcGlcbiAgcHJpdmF0ZSBiYXNlVXJsID0gJy9zeXMvYWNjb3VudHMnO1xuXG4gIC8qKlxuICAgKiBDbGFzcyBjb25zdHJ1Y3RvclxuICAgKi9cbiAgY29uc3RydWN0b3IoQEluamVjdCgnY29uZmlnJykgcHJpdmF0ZSBjb25maWc6IENvcmVDb25maWcsIHByaXZhdGUgcmVzdDogUmVzdFV0aWwpIHtcbiAgICB0aGlzLmJhc2VVcmwgPSB0aGlzLmNvbmZpZy5hcGkgKyB0aGlzLmJhc2VVcmw7XG4gIH1cblxuXG4gIC8qKlxuICAgKiBDcmVhdGUgbmV3IGFjY291bnRcbiAgICogQFJldHVybjogRW50aXR5UmVzcG9uc2U8QWNjb3VudD5cbiAgICovXG4gIGNyZWF0ZShib2R5PzogQWNjb3VudCkge1xuICAgIHJldHVybiB0aGlzLnJlc3QucG9zdChgJHt0aGlzLmJhc2VVcmx9YCwgdHlwZW9mIGJvZHkgPT09ICdvYmplY3QnID8gSlNPTi5zdHJpbmdpZnkoYm9keSkgOiBib2R5KTtcbiAgfVxuXG4gIC8qKlxuICAgKiBVcGRhdGUgZXhpc3RpbmcgYWNjb3VudCBpbiB0aGUgc3lzdGVtXG4gICAqIEBSZXR1cm46IEVudGl0eVJlc3BvbnNlPEFjY291bnQ+XG4gICAqL1xuICB1cGRhdGUoaWQ/OiBzdHJpbmcsIGJvZHk/OiBBY2NvdW50KSB7XG4gICAgcmV0dXJuIHRoaXMucmVzdC5wdXQoYCR7dGhpcy5iYXNlVXJsfS8ke2lkfWAsIHR5cGVvZiBib2R5ID09PSAnb2JqZWN0JyA/IEpTT04uc3RyaW5naWZ5KGJvZHkpIDogYm9keSk7XG4gIH1cblxuICAvKipcbiAgICogVXBkYXRlIGFjY291bnQgbmFtZVxuICAgKiBAUmV0dXJuOiBFbnRpdHlSZXNwb25zZTxBY2NvdW50PlxuICAgKi9cbiAgY2hhbmdlTmFtZShpZD86IHN0cmluZywgYm9keT86IHN0cmluZykge1xuICAgIHJldHVybiB0aGlzLnJlc3QucHV0KGAke3RoaXMuYmFzZVVybH0vJHtpZH0vbmFtZWAsIHR5cGVvZiBib2R5ID09PSAnb2JqZWN0JyA/IEpTT04uc3RyaW5naWZ5KGJvZHkpIDogYm9keSk7XG4gIH1cblxuICAvKipcbiAgICogQ2hhbmdlIGFjY291bnQgdHlwZVxuICAgKiBAUmV0dXJuOiBFbnRpdHlSZXNwb25zZTxVc2VyPlxuICAgKi9cbiAgY2hhbmdlVHlwZShpZD86IHN0cmluZywgdHlwZT86IEFjY291bnRUeXBlQ29kZSkge1xuICAgIHJldHVybiB0aGlzLnJlc3QucHV0KGAke3RoaXMuYmFzZVVybH0vJHtpZH0vdHlwZS8ke3R5cGV9YCwgbnVsbCk7XG4gIH1cblxuICAvKipcbiAgICogQ2hhbmdlIGFjY291bnQgc3RhdHVzXG4gICAqIEBSZXR1cm46IEVudGl0eVJlc3BvbnNlPEFjY291bnQ+XG4gICAqL1xuICBjaGFuZ2VTdGF0dXMoaWQ/OiBzdHJpbmcsIHN0YXR1cz86IEFjY291bnRTdGF0dXNDb2RlKSB7XG4gICAgcmV0dXJuIHRoaXMucmVzdC5wdXQoYCR7dGhpcy5iYXNlVXJsfS8ke2lkfS9zdGF0dXMvJHtzdGF0dXN9YCwgbnVsbCk7XG4gIH1cblxuICAvKipcbiAgICogQ2hhbmdlIGFjY291bnQgZ3JvdXBzXG4gICAqIEBSZXR1cm46IEVudGl0eVJlc3BvbnNlPEFjY291bnQ+XG4gICAqL1xuICBjaGFuZ2VHcm91cHMoaWQ/OiBzdHJpbmcsIGdyb3VwSWQ/OiBzdHJpbmdbXSkge1xuICAgIGNvbnN0IHBhcmFtcyA9IG5ldyBBcnJheSgpO1x0XHRcbiAgICBpZiAoZ3JvdXBJZCAhPSBudWxsKSB7IHBhcmFtcy5wdXNoKGBncm91cElkPSR7Z3JvdXBJZH1gKTsgfVxuXG5cdFx0cmV0dXJuIHRoaXMucmVzdC5wdXQoYCR7dGhpcy5iYXNlVXJsfS8ke2lkfS9ncm91cHMve2dyb3Vwc31gLCBudWxsLCAuLi5wYXJhbXMpO1xuICB9XG5cbiAgLyoqXG4gICAqIENoYW5nZSBhY2NvdW50IGdlby1sb2NhdGlvbiAoY2VudGVyKVxuICAgKiBAUmV0dXJuOiBFbnRpdHlSZXNwb25zZTxBY2NvdW50PiBUaGUgY2hhbmdlZCBhY2NvdW50XG4gICAqL1xuICBjaGFuZ2VHZW9Mb2NhdGlvbihib2R5PzogQ29vcmRpbmF0ZSkge1xuICAgIHJldHVybiB0aGlzLnJlc3QucHV0KGAke3RoaXMuYmFzZVVybH0ve2lkfS9nZW9Mb2NhdGlvbmAsIHR5cGVvZiBib2R5ID09PSAnb2JqZWN0JyA/IEpTT04uc3RyaW5naWZ5KGJvZHkpIDogYm9keSk7XG4gIH1cblxuICAvKipcbiAgICogQ2hhbmdlIGFjY291bnQgZ2VvIGFyZWFcbiAgICogQFJldHVybjogRW50aXR5UmVzcG9uc2U8QWNjb3VudD4gVGhlIGNoYW5nZWQgYWNjb3VudFxuICAgKi9cbiAgY2hhbmdlR2VvQXJlYShib2R5PzogQ29vcmRpbmF0ZVtdKSB7XG4gICAgcmV0dXJuIHRoaXMucmVzdC5wdXQoYCR7dGhpcy5iYXNlVXJsfS97aWR9L2dlb0FyZWFgLCB0eXBlb2YgYm9keSA9PT0gJ29iamVjdCcgPyBKU09OLnN0cmluZ2lmeShib2R5KSA6IGJvZHkpO1xuICB9XG5cbiAgLyoqXG4gICAqIERlbGV0ZSBhY2NvdW50IGZyb20gdGhlIHN5c3RlbVxuICAgKiBUaGUgYWNjb3VudCBpcyBtb3ZlZCB0byBERUxFVEVEIG1vZGUgYW5kIHdpbGwgYmUgZGVsZXRlZCBhZnRlciA5MCBkYXlzXG4gICAqIE9ubHkgYWNjb3VudCBtYXJrZWQgYXMgU1VTUEVOREVEIGNhbiBiZSBkZWxldGVkXG4gICAqIEBSZXR1cm46IEFjdGlvblJlc3BvbnNlXG4gICAqL1xuICBkZWxldGUoaWQ/OiBzdHJpbmcpIHtcbiAgICByZXR1cm4gdGhpcy5yZXN0LmRlbGV0ZShgJHt0aGlzLmJhc2VVcmx9LyR7aWR9YCk7XG4gIH1cblxuICAvKipcbiAgICogRGVsZXRlIGFjY291bnQgaW1tZWRpYXRlbHkgd2l0aG91dCBhY2NvdW50IHN0YXR1cyByZXN0cmljdGlvbnNcbiAgICogQFJldHVybjogQWN0aW9uUmVzcG9uc2VcbiAgICovXG4gIHB1cmdlKGlkPzogc3RyaW5nKSB7XG4gICAgcmV0dXJuIHRoaXMucmVzdC5kZWxldGUoYCR7dGhpcy5iYXNlVXJsfS9wdXJnZS8ke2lkfWApO1xuICB9XG5cbiAgLyoqXG4gICAqIFJlc2V0IGFjY291bnQgLSByZW1vdmUgYWxsIG9wZXJhdGlvbmFsIGRhdGEgb2xkZXIgdGhhbiB0aGUgcmV0ZW50aW9uIHRpbWUgaW4gZGF5cyAoZXZlbnRzLCBzdGF0dXMsIGxvZyAuLi4pIGJ1dCBsZWF2ZSBjb25maWd1cmF0aW9uIGRhdGFcbiAgICogQFJldHVybjogQWN0aW9uUmVzcG9uc2VcbiAgICovXG4gIHJlc2V0KGlkPzogc3RyaW5nLCBkYXlzPzogbnVtYmVyKSB7XG4gICAgcmV0dXJuIHRoaXMucmVzdC5kZWxldGUoYCR7dGhpcy5iYXNlVXJsfS9yZXNldC8ke2lkfS9kYXlzLyR7ZGF5c31gKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBHZXQgc2luZ2xlIGFjY291bnQgYnkgaWRcbiAgICogQFJldHVybjogRW50aXR5UmVzcG9uc2U8QWNjb3VudD5cbiAgICovXG4gIGdldChpZD86IHN0cmluZykge1xuICAgIHJldHVybiB0aGlzLnJlc3QuZ2V0KGAke3RoaXMuYmFzZVVybH0vJHtpZH1gKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBHZXQgYWNjb3VudHMgYnkgbGlzdCBvZiBpZHNcbiAgICogQFJldHVybjogRW50aXRpZXNSZXNwb25zZTxBY2NvdW50PlxuICAgKi9cbiAgbGlzdChpZD86IHN0cmluZ1tdKSB7XG4gICAgY29uc3QgcGFyYW1zID0gbmV3IEFycmF5KCk7XHRcdFxuICAgIGlmIChpZCAhPSBudWxsKSB7IHBhcmFtcy5wdXNoKGBpZD0ke2lkfWApOyB9XG5cblx0XHRyZXR1cm4gdGhpcy5yZXN0LmdldChgJHt0aGlzLmJhc2VVcmx9L2xpc3RgLCAuLi5wYXJhbXMpO1xuICB9XG5cbiAgLyoqXG4gICAqIEZpbmQgbGlzdCBvZiBhY2NvdW50cyBhbmQgZmlsdGVyXG4gICAqIEBSZXR1cm46IFF1ZXJ5UmVzcG9uc2U8QWNjb3VudD5cbiAgICovXG4gIGZpbmQoc2VhcmNoPzogc3RyaW5nLCB0eXBlPzogQWNjb3VudFR5cGVDb2RlW10sIHN0YXR1cz86IEFjY291bnRTdGF0dXNDb2RlW10sIHNvcnQ/OiBzdHJpbmcsIHBhZ2U/OiBudW1iZXIsIHBhZ2VTaXplPzogbnVtYmVyKSB7XG4gICAgY29uc3QgcGFyYW1zID0gbmV3IEFycmF5KCk7XHRcdFxuICAgIGlmIChzZWFyY2ggIT0gbnVsbCkgeyBwYXJhbXMucHVzaChgc2VhcmNoPSR7c2VhcmNofWApOyB9XG4gICAgaWYgKHR5cGUgIT0gbnVsbCkgeyBwYXJhbXMucHVzaChgdHlwZT0ke3R5cGV9YCk7IH1cbiAgICBpZiAoc3RhdHVzICE9IG51bGwpIHsgcGFyYW1zLnB1c2goYHN0YXR1cz0ke3N0YXR1c31gKTsgfVxuICAgIGlmIChzb3J0ICE9IG51bGwpIHsgcGFyYW1zLnB1c2goYHNvcnQ9JHtzb3J0fWApOyB9XG4gICAgaWYgKHBhZ2UgIT0gbnVsbCkgeyBwYXJhbXMucHVzaChgcGFnZT0ke3BhZ2V9YCk7IH1cbiAgICBpZiAocGFnZVNpemUgIT0gbnVsbCkgeyBwYXJhbXMucHVzaChgcGFnZVNpemU9JHtwYWdlU2l6ZX1gKTsgfVxuXG5cdFx0cmV0dXJuIHRoaXMucmVzdC5nZXQoYCR7dGhpcy5iYXNlVXJsfWAsIC4uLnBhcmFtcyk7XG4gIH1cblxuICAvKipcbiAgICogRmluZCBsaXN0IG9mIGFjY291bnRzIGFuZCBmaWx0ZXIgYnV0IHJlcGxhY2UgZ3JvdXAgSWRzIHdpdGggZ3JvdXAgbmFtZXNcbiAgICogQFJldHVybjogUXVlcnlSZXNwb25zZTxBY2NvdW50PlxuICAgKi9cbiAgcmVwb3J0KHNlYXJjaD86IHN0cmluZywgdHlwZT86IEFjY291bnRUeXBlQ29kZVtdLCBzdGF0dXM/OiBBY2NvdW50U3RhdHVzQ29kZVtdLCBzb3J0Pzogc3RyaW5nLCBwYWdlPzogbnVtYmVyLCBwYWdlU2l6ZT86IG51bWJlcikge1xuICAgIGNvbnN0IHBhcmFtcyA9IG5ldyBBcnJheSgpO1x0XHRcbiAgICBpZiAoc2VhcmNoICE9IG51bGwpIHsgcGFyYW1zLnB1c2goYHNlYXJjaD0ke3NlYXJjaH1gKTsgfVxuICAgIGlmICh0eXBlICE9IG51bGwpIHsgcGFyYW1zLnB1c2goYHR5cGU9JHt0eXBlfWApOyB9XG4gICAgaWYgKHN0YXR1cyAhPSBudWxsKSB7IHBhcmFtcy5wdXNoKGBzdGF0dXM9JHtzdGF0dXN9YCk7IH1cbiAgICBpZiAoc29ydCAhPSBudWxsKSB7IHBhcmFtcy5wdXNoKGBzb3J0PSR7c29ydH1gKTsgfVxuICAgIGlmIChwYWdlICE9IG51bGwpIHsgcGFyYW1zLnB1c2goYHBhZ2U9JHtwYWdlfWApOyB9XG4gICAgaWYgKHBhZ2VTaXplICE9IG51bGwpIHsgcGFyYW1zLnB1c2goYHBhZ2VTaXplPSR7cGFnZVNpemV9YCk7IH1cblxuXHRcdHJldHVybiB0aGlzLnJlc3QuZ2V0KGAke3RoaXMuYmFzZVVybH0vcmVwb3J0YCwgLi4ucGFyYW1zKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBHZXQgYWNjb3VudCBoaWVyYXJjaHlcbiAgICogQFJldHVybjogRW50aXR5UmVzcG9uc2U8VHJlZU5vZGU+XG4gICAqL1xuICB0cmVlKGlkPzogc3RyaW5nLCBpbmNsdWRlU2Vuc29ycz86IGJvb2xlYW4sIHN0YXR1cz86IFNlbnNvclN0YXR1c0NvZGVbXSwgYmVoYXZpb3JUeXBlPzogQmVoYXZpb3JUeXBlQ29kZVtdKSB7XG4gICAgY29uc3QgcGFyYW1zID0gbmV3IEFycmF5KCk7XHRcdFxuICAgIGlmIChpbmNsdWRlU2Vuc29ycyAhPSBudWxsKSB7IHBhcmFtcy5wdXNoKGBpbmNsdWRlU2Vuc29ycz0ke2luY2x1ZGVTZW5zb3JzfWApOyB9XG4gICAgaWYgKHN0YXR1cyAhPSBudWxsKSB7IHBhcmFtcy5wdXNoKGBzdGF0dXM9JHtzdGF0dXN9YCk7IH1cbiAgICBpZiAoYmVoYXZpb3JUeXBlICE9IG51bGwpIHsgcGFyYW1zLnB1c2goYGJlaGF2aW9yVHlwZT0ke2JlaGF2aW9yVHlwZX1gKTsgfVxuXG5cdFx0cmV0dXJuIHRoaXMucmVzdC5nZXQoYCR7dGhpcy5iYXNlVXJsfS8ke2lkfS90cmVlYCwgLi4ucGFyYW1zKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBGaW5kIGFjY291bnQgZm9sZGVyc1xuICAgKiBAUmV0dXJuOiBRdWVyeVJlc3BvbnNlPEZvbGRlcj5cbiAgICovXG4gIGZpbmRGb2xkZXJzKGlkPzogc3RyaW5nLCBwYXJlbnRJZD86IHN0cmluZywgc2VhcmNoPzogc3RyaW5nLCBzb3J0Pzogc3RyaW5nLCBwYWdlPzogbnVtYmVyLCBwYWdlU2l6ZT86IG51bWJlcikge1xuICAgIGNvbnN0IHBhcmFtcyA9IG5ldyBBcnJheSgpO1x0XHRcbiAgICBpZiAocGFyZW50SWQgIT0gbnVsbCkgeyBwYXJhbXMucHVzaChgcGFyZW50SWQ9JHtwYXJlbnRJZH1gKTsgfVxuICAgIGlmIChzZWFyY2ggIT0gbnVsbCkgeyBwYXJhbXMucHVzaChgc2VhcmNoPSR7c2VhcmNofWApOyB9XG4gICAgaWYgKHNvcnQgIT0gbnVsbCkgeyBwYXJhbXMucHVzaChgc29ydD0ke3NvcnR9YCk7IH1cbiAgICBpZiAocGFnZSAhPSBudWxsKSB7IHBhcmFtcy5wdXNoKGBwYWdlPSR7cGFnZX1gKTsgfVxuICAgIGlmIChwYWdlU2l6ZSAhPSBudWxsKSB7IHBhcmFtcy5wdXNoKGBwYWdlU2l6ZT0ke3BhZ2VTaXplfWApOyB9XG5cblx0XHRyZXR1cm4gdGhpcy5yZXN0LmdldChgJHt0aGlzLmJhc2VVcmx9LyR7aWR9L2ZvbGRlcnNgLCAuLi5wYXJhbXMpO1xuICB9XG5cbiAgLyoqXG4gICAqIEV4cG9ydCBsaXN0IG9mIGFjY291bnRzIGFuZCBmaWx0ZXJcbiAgICogQFJldHVybjogU3RyZWFtQ29udGVudFxuICAgKi9cbiAgZXhwb3J0Rm9ybWF0KG5hbWU/OiBzdHJpbmcsIHR5cGU/OiBBY2NvdW50VHlwZUNvZGVbXSwgc3RhdHVzPzogQWNjb3VudFN0YXR1c0NvZGVbXSwgc29ydD86IHN0cmluZywgZm9ybWF0Pzogc3RyaW5nLCBmaWVsZHM/OiBzdHJpbmdbXSwgZmlsZU5hbWU/OiBzdHJpbmcpIHtcbiAgICBjb25zdCBwYXJhbXMgPSBuZXcgQXJyYXkoKTtcdFx0XG4gICAgaWYgKG5hbWUgIT0gbnVsbCkgeyBwYXJhbXMucHVzaChgbmFtZT0ke25hbWV9YCk7IH1cbiAgICBpZiAodHlwZSAhPSBudWxsKSB7IHBhcmFtcy5wdXNoKGB0eXBlPSR7dHlwZX1gKTsgfVxuICAgIGlmIChzdGF0dXMgIT0gbnVsbCkgeyBwYXJhbXMucHVzaChgc3RhdHVzPSR7c3RhdHVzfWApOyB9XG4gICAgaWYgKHNvcnQgIT0gbnVsbCkgeyBwYXJhbXMucHVzaChgc29ydD0ke3NvcnR9YCk7IH1cbiAgICBpZiAoZm9ybWF0ICE9IG51bGwpIHsgcGFyYW1zLnB1c2goYGZvcm1hdD0ke2Zvcm1hdH1gKTsgfVxuICAgIGlmIChmaWVsZHMgIT0gbnVsbCkgeyBwYXJhbXMucHVzaChgZmllbGRzPSR7ZmllbGRzfWApOyB9XG4gICAgaWYgKGZpbGVOYW1lICE9IG51bGwpIHsgcGFyYW1zLnB1c2goYGZpbGVOYW1lPSR7ZmlsZU5hbWV9YCk7IH1cblxuXHRcdHJldHVybiB0aGlzLnJlc3QuZG93bmxvYWQoYHN5cy1hY2NvdW50c2AsYCR7dGhpcy5iYXNlVXJsfS9leHBvcnRgLCAuLi5wYXJhbXMpO1xuICB9XG5cbiAgLyoqXG4gICAqIEdldCBhY2NvdW50IHR5cGVzIHN0YXRpc3RpY3MgZm9yIGFsbCBhY2NvdW50cyBpbiB0aGUgc3lzdGVtXG4gICAqIEBSZXR1cm46IEVudGl0aWVzUmVzcG9uc2U8QWNjb3VudFR5cGVTdW1tYXJ5PlxuICAgKi9cbiAgZ2V0QWNjb3VudFR5cGVTdGF0aXN0aWNzKCkge1xuICAgIHJldHVybiB0aGlzLnJlc3QuZ2V0KGAke3RoaXMuYmFzZVVybH0vc3RhdGlzdGljcy90eXBlYCk7XG4gIH1cblxuICAvKipcbiAgICogR2V0IGFjY291bnQgbW9udGhseSBzdGF0aXN0aWNzIGZvciBhbGwgYWNjb3VudHMgaW4gdGhlIHN5c3RlbVxuICAgKiBAUmV0dXJuOiBFbnRpdGllc1Jlc3BvbnNlPEFjY291bnRTdGF0aXN0aWNzPlxuICAgKi9cbiAgZ2V0QWNjb3VudE1vbnRoU3RhdGlzdGljcyhhY2NvdW50SWQ/OiBzdHJpbmdbXSwgZnJvbT86IG51bWJlciwgdG8/OiBudW1iZXIpIHtcbiAgICBjb25zdCBwYXJhbXMgPSBuZXcgQXJyYXkoKTtcdFx0XG4gICAgaWYgKGFjY291bnRJZCAhPSBudWxsKSB7IHBhcmFtcy5wdXNoKGBhY2NvdW50SWQ9JHthY2NvdW50SWR9YCk7IH1cbiAgICBpZiAoZnJvbSAhPSBudWxsKSB7IHBhcmFtcy5wdXNoKGBmcm9tPSR7ZnJvbX1gKTsgfVxuICAgIGlmICh0byAhPSBudWxsKSB7IHBhcmFtcy5wdXNoKGB0bz0ke3RvfWApOyB9XG5cblx0XHRyZXR1cm4gdGhpcy5yZXN0LmdldChgJHt0aGlzLmJhc2VVcmx9L3N0YXRpc3RpY3MvbW9udGhgLCAuLi5wYXJhbXMpO1xuICB9XG5cbiAgLyoqXG4gICAqIEdldCBhY2NvdW50cyBtb250aCByZXBvcnQgLSBjdXJyZW50IGNoYW5uZWxzIGFuZCBkZXZpY2VzIHBlciBhY2NvdW50IGNvbXBhcmVkIHRvIHByZXZpb3VzIG1vbnRoXG4gICAqIEBSZXR1cm46IEVudGl0aWVzUmVzcG9uc2U8QWNjb3VudFN0YXRTdW1tYXJ5PlxuICAgKi9cbiAgZ2V0QWNjb3VudHNNb250aFJlcG9ydCgpIHtcbiAgICByZXR1cm4gdGhpcy5yZXN0LmdldChgJHt0aGlzLmJhc2VVcmx9L3N0YXRpc3RpY3MvbW9udGgvcmVwb3J0YCk7XG4gIH1cblxuICAvKipcbiAgICogR2V0IGRlZmF1bHQgZ2VvIGxvY2F0aW9uXG4gICAqIEBSZXR1cm46IEVudGl0eVJlc3BvbnNlPENvb3JkaW5hdGU+IFRoZSBhY2NvdW50IGxvY2F0aW9uXG4gICAqL1xuICBnZXREZWZhdWx0TG9jYXRpb24oaWQ/OiBzdHJpbmcpIHtcbiAgICByZXR1cm4gdGhpcy5yZXN0LmdldChgJHt0aGlzLmJhc2VVcmx9LyR7aWR9L2dlb0xvY2F0aW9uYCk7XG4gIH1cblxuICAvKipcbiAgICogR2V0IGFjY291bnQgdXNhZ2UgcmVwb3J0IChmb3IgYmlsbGluZylcbiAgICogTGlzdCBvZiBzZW5zb3Igd2l0aCB0b3RhbCBhY3RpdmUgdGltZSAobWludXRlcykgYW5kIHRvdGFsIG9mIGJpbGxhYmxlIHNlbnNvcnNcbiAgICogQFJldHVybjogRW50aXR5UmVzcG9uc2U8VXNhZ2VSZXBvcnQ+XG4gICAqL1xuICBnZXRVc2FnZVJlcG9ydChpZD86IHN0cmluZywgeWVhcj86IG51bWJlciwgbW9udGg/OiBudW1iZXIpIHtcbiAgICByZXR1cm4gdGhpcy5yZXN0LmdldChgJHt0aGlzLmJhc2VVcmx9LyR7aWR9L3VzYWdlLXJlcG9ydC8ke3llYXJ9LyR7bW9udGh9YCk7XG4gIH1cblxuICAvKipcbiAgICogR2V0IHNlbnNvciB1c2FnZSByZXBvcnQgKGZvciBiaWxsaW5nKVxuICAgKiBAUmV0dXJuOiBFbnRpdHlSZXNwb25zZTxUaW1lRGF0YVNlcmllczxTZW5zb3JTdGF0dXNDb2RlPj5cbiAgICovXG4gIGdldFNlbnNvclVzYWdlUmVwb3J0KGlkPzogc3RyaW5nLCBzZW5zb3JJZD86IHN0cmluZywgeWVhcj86IG51bWJlciwgbW9udGg/OiBudW1iZXIpIHtcbiAgICByZXR1cm4gdGhpcy5yZXN0LmdldChgJHt0aGlzLmJhc2VVcmx9LyR7aWR9L3NlbnNvci11c2FnZS1yZXBvcnQvJHtzZW5zb3JJZH0vJHt5ZWFyfS8ke21vbnRofWApO1xuICB9XG5cbiAgLyoqXG4gICAqIEV4cG9ydCBhY2NvdW50IHVzYWdlIHJlcG9ydCB0byBhIGZpbGUgKGZvciBiaWxsaW5nKVxuICAgKiBAUmV0dXJuOiBTdHJlYW1Db250ZW50XG4gICAqL1xuICBleHBvcnRVc2FnZVJlcG9ydChpZD86IHN0cmluZywgeWVhcj86IG51bWJlciwgbW9udGg/OiBudW1iZXIsIGZvcm1hdD86IHN0cmluZywgZmlsZU5hbWU/OiBzdHJpbmcpIHtcbiAgICBjb25zdCBwYXJhbXMgPSBuZXcgQXJyYXkoKTtcdFx0XG4gICAgaWYgKGZvcm1hdCAhPSBudWxsKSB7IHBhcmFtcy5wdXNoKGBmb3JtYXQ9JHtmb3JtYXR9YCk7IH1cbiAgICBpZiAoZmlsZU5hbWUgIT0gbnVsbCkgeyBwYXJhbXMucHVzaChgZmlsZU5hbWU9JHtmaWxlTmFtZX1gKTsgfVxuXG5cdFx0cmV0dXJuIHRoaXMucmVzdC5kb3dubG9hZChgc3lzLWFjY291bnRzYCxgJHt0aGlzLmJhc2VVcmx9LyR7aWR9L2V4cG9ydC11c2FnZS1yZXBvcnQvJHt5ZWFyfS8ke21vbnRofWAsIC4uLnBhcmFtcyk7XG4gIH1cblxuICAvKipcbiAgICogRXhwb3J0IGFsbCBhY2NvdW50cyB1c2FnZSByZXBvcnQgdG8gYSBmaWxlIChmb3Igb3BlcmF0aW9ucylcbiAgICogQFJldHVybjogU3RyZWFtQ29udGVudFxuICAgKi9cbiAgZXhwb3J0QWxsQWNjb3VudHNVc2FnZVJlcG9ydCh5ZWFyPzogbnVtYmVyLCBtb250aD86IG51bWJlcikge1xuICAgIHJldHVybiB0aGlzLnJlc3QuZG93bmxvYWQoYHN5cy1hY2NvdW50c2AsYCR7dGhpcy5iYXNlVXJsfS9leHBvcnQtdXNhZ2UtcmVwb3J0LyR7eWVhcn0vJHttb250aH1gKTtcbiAgfVxuXG59XG4iXX0=