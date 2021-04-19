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
    tree(id, sensors, status, behaviorType) {
        const params = new Array();
        if (sensors != null) {
            params.push(`sensors=${sensors}`);
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
}
/** @nocollapse */ SysAccountsService.ɵfac = function SysAccountsService_Factory(t) { return new (t || SysAccountsService)(i0.ɵɵinject('config'), i0.ɵɵinject(i1.RestUtil)); };
/** @nocollapse */ SysAccountsService.ɵprov = i0.ɵɵdefineInjectable({ token: SysAccountsService, factory: SysAccountsService.ɵfac });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(SysAccountsService, [{
        type: Injectable
    }], function () { return [{ type: i2.CoreConfig, decorators: [{
                type: Inject,
                args: ['config']
            }] }, { type: i1.RestUtil }]; }, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3lzQWNjb3VudHNTZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvbmctY29yZS1saWIvc3JjL2xpYi9zZXJ2aWNlcy9zeXNBY2NvdW50c1NlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDbkQsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLHVCQUF1QixDQUFDO0FBQ2pELE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxjQUFjLENBQUM7Ozs7QUFVMUM7Ozs7R0FJRztBQUVILE1BQU0sT0FBTyxrQkFBa0I7SUFLN0I7O09BRUc7SUFDSCxZQUFzQyxNQUFrQixFQUFVLElBQWM7UUFBMUMsV0FBTSxHQUFOLE1BQU0sQ0FBWTtRQUFVLFNBQUksR0FBSixJQUFJLENBQVU7UUFOaEYsaUJBQWlCO1FBQ1QsWUFBTyxHQUFHLGVBQWUsQ0FBQztRQU1oQyxJQUFJLENBQUMsT0FBTyxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUMsR0FBRyxHQUFHLElBQUksQ0FBQyxPQUFPLENBQUM7SUFDaEQsQ0FBQztJQUdEOzs7T0FHRztJQUNILE1BQU0sQ0FBQyxJQUFjO1FBQ25CLE9BQU8sSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxJQUFJLENBQUMsT0FBTyxFQUFFLEVBQUUsT0FBTyxJQUFJLEtBQUssUUFBUSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUNuRyxDQUFDO0lBRUQ7OztPQUdHO0lBQ0gsTUFBTSxDQUFDLEVBQVcsRUFBRSxJQUFjO1FBQ2hDLE9BQU8sSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsR0FBRyxJQUFJLENBQUMsT0FBTyxJQUFJLEVBQUUsRUFBRSxFQUFFLE9BQU8sSUFB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d0IsSUFBSSxJQUFJLEtBQUssRUFBRSxFQUFFLEdBQUcsTUFBTSxDQUFDLENBQUM7SUFDbEgsQ0FBQzs7dUdBMVFVLGtCQUFrQixjQVFULFFBQVE7NkVBUmpCLGtCQUFrQixXQUFsQixrQkFBa0I7dUZBQWxCLGtCQUFrQjtjQUQ5QixVQUFVOztzQkFTSSxNQUFNO3VCQUFDLFFBQVEiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlLCBJbmplY3QgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFJlc3RVdGlsIH0gZnJvbSAnLi4vLi4vdXRpbHMvcmVzdC11dGlsJztcbmltcG9ydCB7IENvcmVDb25maWcgfSBmcm9tICcuLi8uLi9jb25maWcnO1xuXG5pbXBvcnQgeyBBY2NvdW50VHlwZUNvZGUgfSBmcm9tICcuLi9lbnVtcy9BY2NvdW50VHlwZUNvZGUnO1xuaW1wb3J0IHsgQWNjb3VudFN0YXR1c0NvZGUgfSBmcm9tICcuLi9lbnVtcy9BY2NvdW50U3RhdHVzQ29kZSc7XG5pbXBvcnQgeyBDb29yZGluYXRlIH0gZnJvbSAnLi4vY29tbW9uL0Nvb3JkaW5hdGUnO1xuaW1wb3J0IHsgU2Vuc29yU3RhdHVzQ29kZSB9IGZyb20gJy4uL2VudW1zL1NlbnNvclN0YXR1c0NvZGUnO1xuaW1wb3J0IHsgQmVoYXZpb3JUeXBlQ29kZSB9IGZyb20gJy4uL2VudW1zL0JlaGF2aW9yVHlwZUNvZGUnO1xuaW1wb3J0IHsgQWNjb3VudCB9IGZyb20gJy4uL2VudGl0aWVzL0FjY291bnQnO1xuXG5cbi8qKlxuICogTGlzdCBvZiBhY2NvdW50IHJlbGF0ZWQgYWN0aW9ucyBmb3Igc3lzdGVtIGFkbWluaXN0cmF0b3Igb25seVxuICogQFJlcXVlc3RIZWFkZXIgWC1BUEktS0VZIFRoZSBrZXkgdG8gaWRlbnRpZnkgdGhlIGFwcGxpY2F0aW9uIChjb25zb2xlKVxuICogQFJlcXVlc3RIZWFkZXIgWC1BQ0NFU1MtVE9LRU4gVGhlIHRva2VuIHRvIGlkZW50aWZ5IHRoZSBsb2dnZWQtaW4gdXNlciBcbiAqL1xuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIFN5c0FjY291bnRzU2VydmljZSB7XG5cbiAgLy8gVVJMIHRvIHdlYiBhcGlcbiAgcHJpdmF0ZSBiYXNlVXJsID0gJy9zeXMvYWNjb3VudHMnO1xuXG4gIC8qKlxuICAgKiBDbGFzcyBjb25zdHJ1Y3RvclxuICAgKi9cbiAgY29uc3RydWN0b3IoQEluamVjdCgnY29uZmlnJykgcHJpdmF0ZSBjb25maWc6IENvcmVDb25maWcsIHByaXZhdGUgcmVzdDogUmVzdFV0aWwpIHtcbiAgICB0aGlzLmJhc2VVcmwgPSB0aGlzLmNvbmZpZy5hcGkgKyB0aGlzLmJhc2VVcmw7XG4gIH1cblxuXG4gIC8qKlxuICAgKiBDcmVhdGUgbmV3IGFjY291bnRcbiAgICogQFJldHVybjogRW50aXR5UmVzcG9uc2U8QWNjb3VudD5cbiAgICovXG4gIGNyZWF0ZShib2R5PzogQWNjb3VudCkge1xuICAgIHJldHVybiB0aGlzLnJlc3QucG9zdChgJHt0aGlzLmJhc2VVcmx9YCwgdHlwZW9mIGJvZHkgPT09ICdvYmplY3QnID8gSlNPTi5zdHJpbmdpZnkoYm9keSkgOiBib2R5KTtcbiAgfVxuXG4gIC8qKlxuICAgKiBVcGRhdGUgZXhpc3RpbmcgYWNjb3VudCBpbiB0aGUgc3lzdGVtXG4gICAqIEBSZXR1cm46IEVudGl0eVJlc3BvbnNlPEFjY291bnQ+XG4gICAqL1xuICB1cGRhdGUoaWQ/OiBzdHJpbmcsIGJvZHk/OiBBY2NvdW50KSB7XG4gICAgcmV0dXJuIHRoaXMucmVzdC5wdXQoYCR7dGhpcy5iYXNlVXJsfS8ke2lkfWAsIHR5cGVvZiBib2R5ID09PSAnb2JqZWN0JyA/IEpTT04uc3RyaW5naWZ5KGJvZHkpIDogYm9keSk7XG4gIH1cblxuICAvKipcbiAgICogVXBkYXRlIGFjY291bnQgbmFtZVxuICAgKiBAUmV0dXJuOiBFbnRpdHlSZXNwb25zZTxBY2NvdW50PlxuICAgKi9cbiAgY2hhbmdlTmFtZShpZD86IHN0cmluZywgYm9keT86IHN0cmluZykge1xuICAgIHJldHVybiB0aGlzLnJlc3QucHV0KGAke3RoaXMuYmFzZVVybH0vJHtpZH0vbmFtZWAsIHR5cGVvZiBib2R5ID09PSAnb2JqZWN0JyA/IEpTT04uc3RyaW5naWZ5KGJvZHkpIDogYm9keSk7XG4gIH1cblxuICAvKipcbiAgICogQ2hhbmdlIGFjY291bnQgdHlwZVxuICAgKiBAUmV0dXJuOiBFbnRpdHlSZXNwb25zZTxVc2VyPlxuICAgKi9cbiAgY2hhbmdlVHlwZShpZD86IHN0cmluZywgdHlwZT86IEFjY291bnRUeXBlQ29kZSkge1xuICAgIHJldHVybiB0aGlzLnJlc3QucHV0KGAke3RoaXMuYmFzZVVybH0vJHtpZH0vdHlwZS8ke3R5cGV9YCwgbnVsbCk7XG4gIH1cblxuICAvKipcbiAgICogQ2hhbmdlIGFjY291bnQgc3RhdHVzXG4gICAqIEBSZXR1cm46IEVudGl0eVJlc3BvbnNlPEFjY291bnQ+XG4gICAqL1xuICBjaGFuZ2VTdGF0dXMoaWQ/OiBzdHJpbmcsIHN0YXR1cz86IEFjY291bnRTdGF0dXNDb2RlKSB7XG4gICAgcmV0dXJuIHRoaXMucmVzdC5wdXQoYCR7dGhpcy5iYXNlVXJsfS8ke2lkfS9zdGF0dXMvJHtzdGF0dXN9YCwgbnVsbCk7XG4gIH1cblxuICAvKipcbiAgICogQ2hhbmdlIGFjY291bnQgZ3JvdXBzXG4gICAqIEBSZXR1cm46IEVudGl0eVJlc3BvbnNlPEFjY291bnQ+XG4gICAqL1xuICBjaGFuZ2VHcm91cHMoaWQ/OiBzdHJpbmcsIGdyb3VwSWQ/OiBzdHJpbmdbXSkge1xuICAgIGNvbnN0IHBhcmFtcyA9IG5ldyBBcnJheSgpO1x0XHRcbiAgICBpZiAoZ3JvdXBJZCAhPSBudWxsKSB7IHBhcmFtcy5wdXNoKGBncm91cElkPSR7Z3JvdXBJZH1gKTsgfVxuXG5cdFx0cmV0dXJuIHRoaXMucmVzdC5wdXQoYCR7dGhpcy5iYXNlVXJsfS8ke2lkfS9ncm91cHMve2dyb3Vwc31gLCBudWxsLCAuLi5wYXJhbXMpO1xuICB9XG5cbiAgLyoqXG4gICAqIENoYW5nZSBhY2NvdW50IGdlby1sb2NhdGlvbiAoY2VudGVyKVxuICAgKiBAUmV0dXJuOiBFbnRpdHlSZXNwb25zZTxBY2NvdW50PiBUaGUgY2hhbmdlZCBhY2NvdW50XG4gICAqL1xuICBjaGFuZ2VHZW9Mb2NhdGlvbihib2R5PzogQ29vcmRpbmF0ZSkge1xuICAgIHJldHVybiB0aGlzLnJlc3QucHV0KGAke3RoaXMuYmFzZVVybH0ve2lkfS9nZW9Mb2NhdGlvbmAsIHR5cGVvZiBib2R5ID09PSAnb2JqZWN0JyA/IEpTT04uc3RyaW5naWZ5KGJvZHkpIDogYm9keSk7XG4gIH1cblxuICAvKipcbiAgICogQ2hhbmdlIGFjY291bnQgZ2VvIGFyZWFcbiAgICogQFJldHVybjogRW50aXR5UmVzcG9uc2U8QWNjb3VudD4gVGhlIGNoYW5nZWQgYWNjb3VudFxuICAgKi9cbiAgY2hhbmdlR2VvQXJlYShib2R5PzogQ29vcmRpbmF0ZVtdKSB7XG4gICAgcmV0dXJuIHRoaXMucmVzdC5wdXQoYCR7dGhpcy5iYXNlVXJsfS97aWR9L2dlb0FyZWFgLCB0eXBlb2YgYm9keSA9PT0gJ29iamVjdCcgPyBKU09OLnN0cmluZ2lmeShib2R5KSA6IGJvZHkpO1xuICB9XG5cbiAgLyoqXG4gICAqIERlbGV0ZSBhY2NvdW50IGZyb20gdGhlIHN5c3RlbVxuICAgKiBUaGUgYWNjb3VudCBpcyBtb3ZlZCB0byBERUxFVEVEIG1vZGUgYW5kIHdpbGwgYmUgZGVsZXRlZCBhZnRlciA5MCBkYXlzXG4gICAqIE9ubHkgYWNjb3VudCBtYXJrZWQgYXMgU1VTUEVOREVEIGNhbiBiZSBkZWxldGVkXG4gICAqIEBSZXR1cm46IEFjdGlvblJlc3BvbnNlXG4gICAqL1xuICBkZWxldGUoaWQ/OiBzdHJpbmcpIHtcbiAgICByZXR1cm4gdGhpcy5yZXN0LmRlbGV0ZShgJHt0aGlzLmJhc2VVcmx9LyR7aWR9YCk7XG4gIH1cblxuICAvKipcbiAgICogRGVsZXRlIGFjY291bnQgaW1tZWRpYXRlbHkgd2l0aG91dCBhY2NvdW50IHN0YXR1cyByZXN0cmljdGlvbnNcbiAgICogQFJldHVybjogQWN0aW9uUmVzcG9uc2VcbiAgICovXG4gIHB1cmdlKGlkPzogc3RyaW5nKSB7XG4gICAgcmV0dXJuIHRoaXMucmVzdC5kZWxldGUoYCR7dGhpcy5iYXNlVXJsfS9wdXJnZS8ke2lkfWApO1xuICB9XG5cbiAgLyoqXG4gICAqIFJlc2V0IGFjY291bnQgLSByZW1vdmUgYWxsIG9wZXJhdGlvbmFsIGRhdGEgb2xkZXIgdGhhbiB0aGUgcmV0ZW50aW9uIHRpbWUgaW4gZGF5cyAoZXZlbnRzLCBzdGF0dXMsIGxvZyAuLi4pIGJ1dCBsZWF2ZSBjb25maWd1cmF0aW9uIGRhdGFcbiAgICogQFJldHVybjogQWN0aW9uUmVzcG9uc2VcbiAgICovXG4gIHJlc2V0KGlkPzogc3RyaW5nLCBkYXlzPzogbnVtYmVyKSB7XG4gICAgcmV0dXJuIHRoaXMucmVzdC5kZWxldGUoYCR7dGhpcy5iYXNlVXJsfS9yZXNldC8ke2lkfS9kYXlzLyR7ZGF5c31gKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBHZXQgc2luZ2xlIGFjY291bnQgYnkgaWRcbiAgICogQFJldHVybjogRW50aXR5UmVzcG9uc2U8QWNjb3VudD5cbiAgICovXG4gIGdldChpZD86IHN0cmluZykge1xuICAgIHJldHVybiB0aGlzLnJlc3QuZ2V0KGAke3RoaXMuYmFzZVVybH0vJHtpZH1gKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBHZXQgYWNjb3VudHMgYnkgbGlzdCBvZiBpZHNcbiAgICogQFJldHVybjogRW50aXRpZXNSZXNwb25zZTxBY2NvdW50PlxuICAgKi9cbiAgbGlzdChpZD86IHN0cmluZ1tdKSB7XG4gICAgY29uc3QgcGFyYW1zID0gbmV3IEFycmF5KCk7XHRcdFxuICAgIGlmIChpZCAhPSBudWxsKSB7IHBhcmFtcy5wdXNoKGBpZD0ke2lkfWApOyB9XG5cblx0XHRyZXR1cm4gdGhpcy5yZXN0LmdldChgJHt0aGlzLmJhc2VVcmx9L2xpc3RgLCAuLi5wYXJhbXMpO1xuICB9XG5cbiAgLyoqXG4gICAqIEZpbmQgbGlzdCBvZiBhY2NvdW50cyBhbmQgZmlsdGVyXG4gICAqIEBSZXR1cm46IFF1ZXJ5UmVzcG9uc2U8QWNjb3VudD5cbiAgICovXG4gIGZpbmQoc2VhcmNoPzogc3RyaW5nLCB0eXBlPzogQWNjb3VudFR5cGVDb2RlW10sIHN0YXR1cz86IEFjY291bnRTdGF0dXNDb2RlW10sIHNvcnQ/OiBzdHJpbmcsIHBhZ2U/OiBudW1iZXIsIHBhZ2VTaXplPzogbnVtYmVyKSB7XG4gICAgY29uc3QgcGFyYW1zID0gbmV3IEFycmF5KCk7XHRcdFxuICAgIGlmIChzZWFyY2ggIT0gbnVsbCkgeyBwYXJhbXMucHVzaChgc2VhcmNoPSR7c2VhcmNofWApOyB9XG4gICAgaWYgKHR5cGUgIT0gbnVsbCkgeyBwYXJhbXMucHVzaChgdHlwZT0ke3R5cGV9YCk7IH1cbiAgICBpZiAoc3RhdHVzICE9IG51bGwpIHsgcGFyYW1zLnB1c2goYHN0YXR1cz0ke3N0YXR1c31gKTsgfVxuICAgIGlmIChzb3J0ICE9IG51bGwpIHsgcGFyYW1zLnB1c2goYHNvcnQ9JHtzb3J0fWApOyB9XG4gICAgaWYgKHBhZ2UgIT0gbnVsbCkgeyBwYXJhbXMucHVzaChgcGFnZT0ke3BhZ2V9YCk7IH1cbiAgICBpZiAocGFnZVNpemUgIT0gbnVsbCkgeyBwYXJhbXMucHVzaChgcGFnZVNpemU9JHtwYWdlU2l6ZX1gKTsgfVxuXG5cdFx0cmV0dXJuIHRoaXMucmVzdC5nZXQoYCR7dGhpcy5iYXNlVXJsfWAsIC4uLnBhcmFtcyk7XG4gIH1cblxuICAvKipcbiAgICogRmluZCBsaXN0IG9mIGFjY291bnRzIGFuZCBmaWx0ZXIgYnV0IHJlcGxhY2UgZ3JvdXAgSWRzIHdpdGggZ3JvdXAgbmFtZXNcbiAgICogQFJldHVybjogUXVlcnlSZXNwb25zZTxBY2NvdW50PlxuICAgKi9cbiAgcmVwb3J0KHNlYXJjaD86IHN0cmluZywgdHlwZT86IEFjY291bnRUeXBlQ29kZVtdLCBzdGF0dXM/OiBBY2NvdW50U3RhdHVzQ29kZVtdLCBzb3J0Pzogc3RyaW5nLCBwYWdlPzogbnVtYmVyLCBwYWdlU2l6ZT86IG51bWJlcikge1xuICAgIGNvbnN0IHBhcmFtcyA9IG5ldyBBcnJheSgpO1x0XHRcbiAgICBpZiAoc2VhcmNoICE9IG51bGwpIHsgcGFyYW1zLnB1c2goYHNlYXJjaD0ke3NlYXJjaH1gKTsgfVxuICAgIGlmICh0eXBlICE9IG51bGwpIHsgcGFyYW1zLnB1c2goYHR5cGU9JHt0eXBlfWApOyB9XG4gICAgaWYgKHN0YXR1cyAhPSBudWxsKSB7IHBhcmFtcy5wdXNoKGBzdGF0dXM9JHtzdGF0dXN9YCk7IH1cbiAgICBpZiAoc29ydCAhPSBudWxsKSB7IHBhcmFtcy5wdXNoKGBzb3J0PSR7c29ydH1gKTsgfVxuICAgIGlmIChwYWdlICE9IG51bGwpIHsgcGFyYW1zLnB1c2goYHBhZ2U9JHtwYWdlfWApOyB9XG4gICAgaWYgKHBhZ2VTaXplICE9IG51bGwpIHsgcGFyYW1zLnB1c2goYHBhZ2VTaXplPSR7cGFnZVNpemV9YCk7IH1cblxuXHRcdHJldHVybiB0aGlzLnJlc3QuZ2V0KGAke3RoaXMuYmFzZVVybH0vcmVwb3J0YCwgLi4ucGFyYW1zKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBHZXQgYWNjb3VudCBoaWVyYXJjaHlcbiAgICogQFJldHVybjogRW50aXR5UmVzcG9uc2U8VHJlZU5vZGU+XG4gICAqL1xuICB0cmVlKGlkPzogc3RyaW5nLCBzZW5zb3JzPzogYm9vbGVhbiwgc3RhdHVzPzogU2Vuc29yU3RhdHVzQ29kZVtdLCBiZWhhdmlvclR5cGU/OiBCZWhhdmlvclR5cGVDb2RlW10pIHtcbiAgICBjb25zdCBwYXJhbXMgPSBuZXcgQXJyYXkoKTtcdFx0XG4gICAgaWYgKHNlbnNvcnMgIT0gbnVsbCkgeyBwYXJhbXMucHVzaChgc2Vuc29ycz0ke3NlbnNvcnN9YCk7IH1cbiAgICBpZiAoc3RhdHVzICE9IG51bGwpIHsgcGFyYW1zLnB1c2goYHN0YXR1cz0ke3N0YXR1c31gKTsgfVxuICAgIGlmIChiZWhhdmlvclR5cGUgIT0gbnVsbCkgeyBwYXJhbXMucHVzaChgYmVoYXZpb3JUeXBlPSR7YmVoYXZpb3JUeXBlfWApOyB9XG5cblx0XHRyZXR1cm4gdGhpcy5yZXN0LmdldChgJHt0aGlzLmJhc2VVcmx9LyR7aWR9L3RyZWVgLCAuLi5wYXJhbXMpO1xuICB9XG5cbiAgLyoqXG4gICAqIEZpbmQgYWNjb3VudCBmb2xkZXJzXG4gICAqIEBSZXR1cm46IFF1ZXJ5UmVzcG9uc2U8Rm9sZGVyPlxuICAgKi9cbiAgZmluZEZvbGRlcnMoaWQ/OiBzdHJpbmcsIHBhcmVudElkPzogc3RyaW5nLCBzZWFyY2g/OiBzdHJpbmcsIHNvcnQ/OiBzdHJpbmcsIHBhZ2U/OiBudW1iZXIsIHBhZ2VTaXplPzogbnVtYmVyKSB7XG4gICAgY29uc3QgcGFyYW1zID0gbmV3IEFycmF5KCk7XHRcdFxuICAgIGlmIChwYXJlbnRJZCAhPSBudWxsKSB7IHBhcmFtcy5wdXNoKGBwYXJlbnRJZD0ke3BhcmVudElkfWApOyB9XG4gICAgaWYgKHNlYXJjaCAhPSBudWxsKSB7IHBhcmFtcy5wdXNoKGBzZWFyY2g9JHtzZWFyY2h9YCk7IH1cbiAgICBpZiAoc29ydCAhPSBudWxsKSB7IHBhcmFtcy5wdXNoKGBzb3J0PSR7c29ydH1gKTsgfVxuICAgIGlmIChwYWdlICE9IG51bGwpIHsgcGFyYW1zLnB1c2goYHBhZ2U9JHtwYWdlfWApOyB9XG4gICAgaWYgKHBhZ2VTaXplICE9IG51bGwpIHsgcGFyYW1zLnB1c2goYHBhZ2VTaXplPSR7cGFnZVNpemV9YCk7IH1cblxuXHRcdHJldHVybiB0aGlzLnJlc3QuZ2V0KGAke3RoaXMuYmFzZVVybH0vJHtpZH0vZm9sZGVyc2AsIC4uLnBhcmFtcyk7XG4gIH1cblxuICAvKipcbiAgICogRXhwb3J0IGxpc3Qgb2YgYWNjb3VudHMgYW5kIGZpbHRlclxuICAgKiBAUmV0dXJuOiBTdHJlYW1Db250ZW50XG4gICAqL1xuICBleHBvcnRGb3JtYXQobmFtZT86IHN0cmluZywgdHlwZT86IEFjY291bnRUeXBlQ29kZVtdLCBzdGF0dXM/OiBBY2NvdW50U3RhdHVzQ29kZVtdLCBzb3J0Pzogc3RyaW5nLCBmb3JtYXQ/OiBzdHJpbmcsIGZpZWxkcz86IHN0cmluZ1tdLCBmaWxlTmFtZT86IHN0cmluZykge1xuICAgIGNvbnN0IHBhcmFtcyA9IG5ldyBBcnJheSgpO1x0XHRcbiAgICBpZiAobmFtZSAhPSBudWxsKSB7IHBhcmFtcy5wdXNoKGBuYW1lPSR7bmFtZX1gKTsgfVxuICAgIGlmICh0eXBlICE9IG51bGwpIHsgcGFyYW1zLnB1c2goYHR5cGU9JHt0eXBlfWApOyB9XG4gICAgaWYgKHN0YXR1cyAhPSBudWxsKSB7IHBhcmFtcy5wdXNoKGBzdGF0dXM9JHtzdGF0dXN9YCk7IH1cbiAgICBpZiAoc29ydCAhPSBudWxsKSB7IHBhcmFtcy5wdXNoKGBzb3J0PSR7c29ydH1gKTsgfVxuICAgIGlmIChmb3JtYXQgIT0gbnVsbCkgeyBwYXJhbXMucHVzaChgZm9ybWF0PSR7Zm9ybWF0fWApOyB9XG4gICAgaWYgKGZpZWxkcyAhPSBudWxsKSB7IHBhcmFtcy5wdXNoKGBmaWVsZHM9JHtmaWVsZHN9YCk7IH1cbiAgICBpZiAoZmlsZU5hbWUgIT0gbnVsbCkgeyBwYXJhbXMucHVzaChgZmlsZU5hbWU9JHtmaWxlTmFtZX1gKTsgfVxuXG5cdFx0cmV0dXJuIHRoaXMucmVzdC5kb3dubG9hZChgc3lzLWFjY291bnRzYCxgJHt0aGlzLmJhc2VVcmx9L2V4cG9ydGAsIC4uLnBhcmFtcyk7XG4gIH1cblxuICAvKipcbiAgICogR2V0IGFjY291bnQgdHlwZXMgc3RhdGlzdGljcyBmb3IgYWxsIGFjY291bnRzIGluIHRoZSBzeXN0ZW1cbiAgICogQFJldHVybjogRW50aXRpZXNSZXNwb25zZTxBY2NvdW50VHlwZVN1bW1hcnk+XG4gICAqL1xuICBnZXRBY2NvdW50VHlwZVN0YXRpc3RpY3MoKSB7XG4gICAgcmV0dXJuIHRoaXMucmVzdC5nZXQoYCR7dGhpcy5iYXNlVXJsfS9zdGF0aXN0aWNzL3R5cGVgKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBHZXQgYWNjb3VudCBtb250aGx5IHN0YXRpc3RpY3MgZm9yIGFsbCBhY2NvdW50cyBpbiB0aGUgc3lzdGVtXG4gICAqIEBSZXR1cm46IEVudGl0aWVzUmVzcG9uc2U8QWNjb3VudFN0YXRpc3RpY3M+XG4gICAqL1xuICBnZXRBY2NvdW50TW9udGhTdGF0aXN0aWNzKGFjY291bnRJZD86IHN0cmluZ1tdLCBmcm9tPzogbnVtYmVyLCB0bz86IG51bWJlcikge1xuICAgIGNvbnN0IHBhcmFtcyA9IG5ldyBBcnJheSgpO1x0XHRcbiAgICBpZiAoYWNjb3VudElkICE9IG51bGwpIHsgcGFyYW1zLnB1c2goYGFjY291bnRJZD0ke2FjY291bnRJZH1gKTsgfVxuICAgIGlmIChmcm9tICE9IG51bGwpIHsgcGFyYW1zLnB1c2goYGZyb209JHtmcm9tfWApOyB9XG4gICAgaWYgKHRvICE9IG51bGwpIHsgcGFyYW1zLnB1c2goYHRvPSR7dG99YCk7IH1cblxuXHRcdHJldHVybiB0aGlzLnJlc3QuZ2V0KGAke3RoaXMuYmFzZVVybH0vc3RhdGlzdGljcy9tb250aGAsIC4uLnBhcmFtcyk7XG4gIH1cblxuICAvKipcbiAgICogR2V0IGFjY291bnRzIG1vbnRoIHJlcG9ydCAtIGN1cnJlbnQgY2hhbm5lbHMgYW5kIGRldmljZXMgcGVyIGFjY291bnQgY29tcGFyZWQgdG8gcHJldmlvdXMgbW9udGhcbiAgICogQFJldHVybjogRW50aXRpZXNSZXNwb25zZTxBY2NvdW50U3RhdFN1bW1hcnk+XG4gICAqL1xuICBnZXRBY2NvdW50c01vbnRoUmVwb3J0KCkge1xuICAgIHJldHVybiB0aGlzLnJlc3QuZ2V0KGAke3RoaXMuYmFzZVVybH0vc3RhdGlzdGljcy9tb250aC9yZXBvcnRgKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBHZXQgZGVmYXVsdCBnZW8gbG9jYXRpb25cbiAgICogQFJldHVybjogRW50aXR5UmVzcG9uc2U8Q29vcmRpbmF0ZT4gVGhlIGFjY291bnQgbG9jYXRpb25cbiAgICovXG4gIGdldERlZmF1bHRMb2NhdGlvbihpZD86IHN0cmluZykge1xuICAgIHJldHVybiB0aGlzLnJlc3QuZ2V0KGAke3RoaXMuYmFzZVVybH0vJHtpZH0vZ2VvTG9jYXRpb25gKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBHZXQgYWNjb3VudCB1c2FnZSByZXBvcnQgKGZvciBiaWxsaW5nKVxuICAgKiBMaXN0IG9mIHNlbnNvciB3aXRoIHRvdGFsIGFjdGl2ZSB0aW1lIChtaW51dGVzKSBhbmQgdG90YWwgb2YgYmlsbGFibGUgc2Vuc29yc1xuICAgKiBAUmV0dXJuOiBFbnRpdHlSZXNwb25zZTxVc2FnZVJlcG9ydD5cbiAgICovXG4gIGdldFVzYWdlUmVwb3J0KGlkPzogc3RyaW5nLCB5ZWFyPzogbnVtYmVyLCBtb250aD86IG51bWJlcikge1xuICAgIHJldHVybiB0aGlzLnJlc3QuZ2V0KGAke3RoaXMuYmFzZVVybH0vJHtpZH0vdXNhZ2UtcmVwb3J0LyR7eWVhcn0vJHttb250aH1gKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBHZXQgc2Vuc29yIHVzYWdlIHJlcG9ydCAoZm9yIGJpbGxpbmcpXG4gICAqIEBSZXR1cm46IEVudGl0eVJlc3BvbnNlPFRpbWVEYXRhU2VyaWVzPFNlbnNvclN0YXR1c0NvZGU+PlxuICAgKi9cbiAgZ2V0U2Vuc29yVXNhZ2VSZXBvcnQoaWQ/OiBzdHJpbmcsIHNlbnNvcklkPzogc3RyaW5nLCB5ZWFyPzogbnVtYmVyLCBtb250aD86IG51bWJlcikge1xuICAgIHJldHVybiB0aGlzLnJlc3QuZ2V0KGAke3RoaXMuYmFzZVVybH0vJHtpZH0vc2Vuc29yLXVzYWdlLXJlcG9ydC8ke3NlbnNvcklkfS8ke3llYXJ9LyR7bW9udGh9YCk7XG4gIH1cblxuICAvKipcbiAgICogRXhwb3J0IGFjY291bnQgdXNhZ2UgcmVwb3J0IHRvIGEgZmlsZSAoZm9yIGJpbGxpbmcpXG4gICAqIEBSZXR1cm46IFN0cmVhbUNvbnRlbnRcbiAgICovXG4gIGV4cG9ydFVzYWdlUmVwb3J0KGlkPzogc3RyaW5nLCB5ZWFyPzogbnVtYmVyLCBtb250aD86IG51bWJlciwgZm9ybWF0Pzogc3RyaW5nLCBmaWxlTmFtZT86IHN0cmluZykge1xuICAgIGNvbnN0IHBhcmFtcyA9IG5ldyBBcnJheSgpO1x0XHRcbiAgICBpZiAoZm9ybWF0ICE9IG51bGwpIHsgcGFyYW1zLnB1c2goYGZvcm1hdD0ke2Zvcm1hdH1gKTsgfVxuICAgIGlmIChmaWxlTmFtZSAhPSBudWxsKSB7IHBhcmFtcy5wdXNoKGBmaWxlTmFtZT0ke2ZpbGVOYW1lfWApOyB9XG5cblx0XHRyZXR1cm4gdGhpcy5yZXN0LmRvd25sb2FkKGBzeXMtYWNjb3VudHNgLGAke3RoaXMuYmFzZVVybH0vJHtpZH0vZXhwb3J0LXVzYWdlLXJlcG9ydC8ke3llYXJ9LyR7bW9udGh9YCwgLi4ucGFyYW1zKTtcbiAgfVxuXG59XG4iXX0=