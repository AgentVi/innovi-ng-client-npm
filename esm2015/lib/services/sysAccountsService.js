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
    exportFormat(name, type, status, sort, format, fields, fileName, mimeType) {
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
     * Export account usage report to a file (for billing)
     * @Return: StreamContent
     */
    exportUsageReport(id, year, month, format, fileName, mimeType) {
        const params = new Array();
        if (format != null) {
            params.push(`format=${format}`);
        }
        return this.rest.download(`sys-accounts`, `${this.baseUrl}/${id}/export-usage-report/${year}/${month}`, ...params);
    }
}
/** @nocollapse */ SysAccountsService.ɵfac = function SysAccountsService_Factory(t) { return new (t || SysAccountsService)(i0.ɵɵinject('config'), i0.ɵɵinject(i1.RestUtil)); };
/** @nocollapse */ SysAccountsService.ɵprov = i0.ɵɵdefineInjectable({ token: SysAccountsService, factory: SysAccountsService.ɵfac });
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(SysAccountsService, [{
        type: Injectable
    }], function () { return [{ type: i2.CoreConfig, decorators: [{
                type: Inject,
                args: ['config']
            }] }, { type: i1.RestUtil }]; }, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3lzQWNjb3VudHNTZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6Ii4uLy4uLy4uL3Byb2plY3RzL25nLWNvcmUtbGliL3NyYy8iLCJzb3VyY2VzIjpbImxpYi9zZXJ2aWNlcy9zeXNBY2NvdW50c1NlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDbkQsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLHVCQUF1QixDQUFDO0FBQ2pELE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxjQUFjLENBQUM7Ozs7QUFVMUM7Ozs7R0FJRztBQUVILE1BQU0sT0FBTyxrQkFBa0I7SUFLN0I7O09BRUc7SUFDSCxZQUFzQyxNQUFrQixFQUFVLElBQWM7UUFBMUMsV0FBTSxHQUFOLE1BQU0sQ0FBWTtRQUFVLFNBQUksR0FBSixJQUFJLENBQVU7UUFOaEYsaUJBQWlCO1FBQ1QsWUFBTyxHQUFHLGVBQWUsQ0FBQztRQU1oQyxJQUFJLENBQUMsT0FBTyxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUMsR0FBRyxHQUFHLElBQUksQ0FBQyxPQUFPLENBQUM7SUFDaEQsQ0FBQztJQUdEOzs7T0FHRztJQUNILE1BQU0sQ0FBQyxJQUFjO1FBQ25CLE9BQU8sSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxJQUFJLENBQUMsT0FBTyxFQUFFLEVBQUUsT0FBTyxJQUFJLEtBQUssUUFBUSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUNuRyxDQUFDO0lBRUQ7OztPQUdHO0lBQ0gsTUFBTSxDQUFDLEVBQVcsRUFBRSxJQUFjO1FBQ2hDLE9BQU8sSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsR0FBRyxJQUFJLENBQUMsT0FBTyxJQUFJLEVBQUUsRUFBRSxFQUFFLE9BQU8sSUFBSSxLQUFL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YWJsZSwgSW5qZWN0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBSZXN0VXRpbCB9IGZyb20gJy4uLy4uL3V0aWxzL3Jlc3QtdXRpbCc7XG5pbXBvcnQgeyBDb3JlQ29uZmlnIH0gZnJvbSAnLi4vLi4vY29uZmlnJztcblxuaW1wb3J0IHsgQWNjb3VudCB9IGZyb20gJy4uL2VudGl0aWVzL0FjY291bnQnO1xuaW1wb3J0IHsgQWNjb3VudFR5cGVDb2RlIH0gZnJvbSAnLi4vZW51bXMvQWNjb3VudFR5cGVDb2RlJztcbmltcG9ydCB7IEFjY291bnRTdGF0dXNDb2RlIH0gZnJvbSAnLi4vZW51bXMvQWNjb3VudFN0YXR1c0NvZGUnO1xuaW1wb3J0IHsgQ29vcmRpbmF0ZSB9IGZyb20gJy4uL2NvbW1vbi9Db29yZGluYXRlJztcbmltcG9ydCB7IFNlbnNvclN0YXR1c0NvZGUgfSBmcm9tICcuLi9lbnVtcy9TZW5zb3JTdGF0dXNDb2RlJztcbmltcG9ydCB7IEJlaGF2aW9yVHlwZUNvZGUgfSBmcm9tICcuLi9lbnVtcy9CZWhhdmlvclR5cGVDb2RlJztcblxuXG4vKipcbiAqIExpc3Qgb2YgYWNjb3VudCByZWxhdGVkIGFjdGlvbnMgZm9yIHN5c3RlbSBhZG1pbmlzdHJhdG9yIG9ubHlcbiAqIEBSZXF1ZXN0SGVhZGVyIFgtQVBJLUtFWSBUaGUga2V5IHRvIGlkZW50aWZ5IHRoZSBhcHBsaWNhdGlvbiAoY29uc29sZSlcbiAqIEBSZXF1ZXN0SGVhZGVyIFgtQUNDRVNTLVRPS0VOIFRoZSB0b2tlbiB0byBpZGVudGlmeSB0aGUgbG9nZ2VkLWluIHVzZXIgXG4gKi9cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBTeXNBY2NvdW50c1NlcnZpY2Uge1xuXG4gIC8vIFVSTCB0byB3ZWIgYXBpXG4gIHByaXZhdGUgYmFzZVVybCA9ICcvc3lzL2FjY291bnRzJztcblxuICAvKipcbiAgICogQ2xhc3MgY29uc3RydWN0b3JcbiAgICovXG4gIGNvbnN0cnVjdG9yKEBJbmplY3QoJ2NvbmZpZycpIHByaXZhdGUgY29uZmlnOiBDb3JlQ29uZmlnLCBwcml2YXRlIHJlc3Q6IFJlc3RVdGlsKSB7XG4gICAgdGhpcy5iYXNlVXJsID0gdGhpcy5jb25maWcuYXBpICsgdGhpcy5iYXNlVXJsO1xuICB9XG5cblxuICAvKipcbiAgICogQ3JlYXRlIG5ldyBhY2NvdW50XG4gICAqIEBSZXR1cm46IEVudGl0eVJlc3BvbnNlPEFjY291bnQ+XG4gICAqL1xuICBjcmVhdGUoYm9keT86IEFjY291bnQpIHtcbiAgICByZXR1cm4gdGhpcy5yZXN0LnBvc3QoYCR7dGhpcy5iYXNlVXJsfWAsIHR5cGVvZiBib2R5ID09PSAnb2JqZWN0JyA/IEpTT04uc3RyaW5naWZ5KGJvZHkpIDogYm9keSk7XG4gIH1cblxuICAvKipcbiAgICogVXBkYXRlIGV4aXN0aW5nIGFjY291bnQgaW4gdGhlIHN5c3RlbVxuICAgKiBAUmV0dXJuOiBFbnRpdHlSZXNwb25zZTxBY2NvdW50PlxuICAgKi9cbiAgdXBkYXRlKGlkPzogc3RyaW5nLCBib2R5PzogQWNjb3VudCkge1xuICAgIHJldHVybiB0aGlzLnJlc3QucHV0KGAke3RoaXMuYmFzZVVybH0vJHtpZH1gLCB0eXBlb2YgYm9keSA9PT0gJ29iamVjdCcgPyBKU09OLnN0cmluZ2lmeShib2R5KSA6IGJvZHkpO1xuICB9XG5cbiAgLyoqXG4gICAqIFVwZGF0ZSBhY2NvdW50IG5hbWVcbiAgICogQFJldHVybjogRW50aXR5UmVzcG9uc2U8QWNjb3VudD5cbiAgICovXG4gIGNoYW5nZU5hbWUoaWQ/OiBzdHJpbmcsIGJvZHk/OiBzdHJpbmcpIHtcbiAgICByZXR1cm4gdGhpcy5yZXN0LnB1dChgJHt0aGlzLmJhc2VVcmx9LyR7aWR9L25hbWVgLCB0eXBlb2YgYm9keSA9PT0gJ29iamVjdCcgPyBKU09OLnN0cmluZ2lmeShib2R5KSA6IGJvZHkpO1xuICB9XG5cbiAgLyoqXG4gICAqIENoYW5nZSBhY2NvdW50IHR5cGVcbiAgICogQFJldHVybjogRW50aXR5UmVzcG9uc2U8VXNlcj5cbiAgICovXG4gIGNoYW5nZVR5cGUoaWQ/OiBzdHJpbmcsIHR5cGU/OiBBY2NvdW50VHlwZUNvZGUpIHtcbiAgICByZXR1cm4gdGhpcy5yZXN0LnB1dChgJHt0aGlzLmJhc2VVcmx9LyR7aWR9L3R5cGUvJHt0eXBlfWAsIG51bGwpO1xuICB9XG5cbiAgLyoqXG4gICAqIENoYW5nZSBhY2NvdW50IHN0YXR1c1xuICAgKiBAUmV0dXJuOiBFbnRpdHlSZXNwb25zZTxBY2NvdW50PlxuICAgKi9cbiAgY2hhbmdlU3RhdHVzKGlkPzogc3RyaW5nLCBzdGF0dXM/OiBBY2NvdW50U3RhdHVzQ29kZSkge1xuICAgIHJldHVybiB0aGlzLnJlc3QucHV0KGAke3RoaXMuYmFzZVVybH0vJHtpZH0vc3RhdHVzLyR7c3RhdHVzfWAsIG51bGwpO1xuICB9XG5cbiAgLyoqXG4gICAqIENoYW5nZSBhY2NvdW50IGdyb3Vwc1xuICAgKiBAUmV0dXJuOiBFbnRpdHlSZXNwb25zZTxBY2NvdW50PlxuICAgKi9cbiAgY2hhbmdlR3JvdXBzKGlkPzogc3RyaW5nLCBncm91cElkPzogc3RyaW5nW10pIHtcbiAgICBjb25zdCBwYXJhbXMgPSBuZXcgQXJyYXkoKTtcdFx0XG4gICAgaWYgKGdyb3VwSWQgIT0gbnVsbCkgeyBwYXJhbXMucHVzaChgZ3JvdXBJZD0ke2dyb3VwSWR9YCk7IH1cblxuXHRcdHJldHVybiB0aGlzLnJlc3QucHV0KGAke3RoaXMuYmFzZVVybH0vJHtpZH0vZ3JvdXBzL3tncm91cHN9YCwgbnVsbCwgLi4ucGFyYW1zKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBDaGFuZ2UgYWNjb3VudCBnZW8tbG9jYXRpb24gKGNlbnRlcilcbiAgICogQFJldHVybjogRW50aXR5UmVzcG9uc2U8QWNjb3VudD4gVGhlIGNoYW5nZWQgYWNjb3VudFxuICAgKi9cbiAgY2hhbmdlR2VvTG9jYXRpb24oYm9keT86IENvb3JkaW5hdGUpIHtcbiAgICByZXR1cm4gdGhpcy5yZXN0LnB1dChgJHt0aGlzLmJhc2VVcmx9L3tpZH0vZ2VvTG9jYXRpb25gLCB0eXBlb2YgYm9keSA9PT0gJ29iamVjdCcgPyBKU09OLnN0cmluZ2lmeShib2R5KSA6IGJvZHkpO1xuICB9XG5cbiAgLyoqXG4gICAqIENoYW5nZSBhY2NvdW50IGdlbyBhcmVhXG4gICAqIEBSZXR1cm46IEVudGl0eVJlc3BvbnNlPEFjY291bnQ+IFRoZSBjaGFuZ2VkIGFjY291bnRcbiAgICovXG4gIGNoYW5nZUdlb0FyZWEoYm9keT86IENvb3JkaW5hdGVbXSkge1xuICAgIHJldHVybiB0aGlzLnJlc3QucHV0KGAke3RoaXMuYmFzZVVybH0ve2lkfS9nZW9BcmVhYCwgdHlwZW9mIGJvZHkgPT09ICdvYmplY3QnID8gSlNPTi5zdHJpbmdpZnkoYm9keSkgOiBib2R5KTtcbiAgfVxuXG4gIC8qKlxuICAgKiBEZWxldGUgYWNjb3VudCBmcm9tIHRoZSBzeXN0ZW1cbiAgICogVGhlIGFjY291bnQgaXMgbW92ZWQgdG8gREVMRVRFRCBtb2RlIGFuZCB3aWxsIGJlIGRlbGV0ZWQgYWZ0ZXIgOTAgZGF5c1xuICAgKiBPbmx5IGFjY291bnQgbWFya2VkIGFzIFNVU1BFTkRFRCBjYW4gYmUgZGVsZXRlZFxuICAgKiBAUmV0dXJuOiBBY3Rpb25SZXNwb25zZVxuICAgKi9cbiAgZGVsZXRlKGlkPzogc3RyaW5nKSB7XG4gICAgcmV0dXJuIHRoaXMucmVzdC5kZWxldGUoYCR7dGhpcy5iYXNlVXJsfS8ke2lkfWApO1xuICB9XG5cbiAgLyoqXG4gICAqIERlbGV0ZSBhY2NvdW50IGltbWVkaWF0ZWx5IHdpdGhvdXQgYWNjb3VudCBzdGF0dXMgcmVzdHJpY3Rpb25zXG4gICAqIEBSZXR1cm46IEFjdGlvblJlc3BvbnNlXG4gICAqL1xuICBwdXJnZShpZD86IHN0cmluZykge1xuICAgIHJldHVybiB0aGlzLnJlc3QuZGVsZXRlKGAke3RoaXMuYmFzZVVybH0vcHVyZ2UvJHtpZH1gKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBSZXNldCBhY2NvdW50IC0gcmVtb3ZlIGFsbCBvcGVyYXRpb25hbCBkYXRhIG9sZGVyIHRoYW4gdGhlIHJldGVudGlvbiB0aW1lIGluIGRheXMgKGV2ZW50cywgc3RhdHVzLCBsb2cgLi4uKSBidXQgbGVhdmUgY29uZmlndXJhdGlvbiBkYXRhXG4gICAqIEBSZXR1cm46IEFjdGlvblJlc3BvbnNlXG4gICAqL1xuICByZXNldChpZD86IHN0cmluZywgZGF5cz86IG51bWJlcikge1xuICAgIHJldHVybiB0aGlzLnJlc3QuZGVsZXRlKGAke3RoaXMuYmFzZVVybH0vcmVzZXQvJHtpZH0vZGF5cy8ke2RheXN9YCk7XG4gIH1cblxuICAvKipcbiAgICogR2V0IHNpbmdsZSBhY2NvdW50IGJ5IGlkXG4gICAqIEBSZXR1cm46IEVudGl0eVJlc3BvbnNlPEFjY291bnQ+XG4gICAqL1xuICBnZXQoaWQ/OiBzdHJpbmcpIHtcbiAgICByZXR1cm4gdGhpcy5yZXN0LmdldChgJHt0aGlzLmJhc2VVcmx9LyR7aWR9YCk7XG4gIH1cblxuICAvKipcbiAgICogR2V0IGFjY291bnRzIGJ5IGxpc3Qgb2YgaWRzXG4gICAqIEBSZXR1cm46IEVudGl0aWVzUmVzcG9uc2U8QWNjb3VudD5cbiAgICovXG4gIGxpc3QoaWQ/OiBzdHJpbmdbXSkge1xuICAgIGNvbnN0IHBhcmFtcyA9IG5ldyBBcnJheSgpO1x0XHRcbiAgICBpZiAoaWQgIT0gbnVsbCkgeyBwYXJhbXMucHVzaChgaWQ9JHtpZH1gKTsgfVxuXG5cdFx0cmV0dXJuIHRoaXMucmVzdC5nZXQoYCR7dGhpcy5iYXNlVXJsfS9saXN0YCwgLi4ucGFyYW1zKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBGaW5kIGxpc3Qgb2YgYWNjb3VudHMgYW5kIGZpbHRlclxuICAgKiBAUmV0dXJuOiBRdWVyeVJlc3BvbnNlPEFjY291bnQ+XG4gICAqL1xuICBmaW5kKHNlYXJjaD86IHN0cmluZywgdHlwZT86IEFjY291bnRUeXBlQ29kZVtdLCBzdGF0dXM/OiBBY2NvdW50U3RhdHVzQ29kZVtdLCBzb3J0Pzogc3RyaW5nLCBwYWdlPzogbnVtYmVyLCBwYWdlU2l6ZT86IG51bWJlcikge1xuICAgIGNvbnN0IHBhcmFtcyA9IG5ldyBBcnJheSgpO1x0XHRcbiAgICBpZiAoc2VhcmNoICE9IG51bGwpIHsgcGFyYW1zLnB1c2goYHNlYXJjaD0ke3NlYXJjaH1gKTsgfVxuICAgIGlmICh0eXBlICE9IG51bGwpIHsgcGFyYW1zLnB1c2goYHR5cGU9JHt0eXBlfWApOyB9XG4gICAgaWYgKHN0YXR1cyAhPSBudWxsKSB7IHBhcmFtcy5wdXNoKGBzdGF0dXM9JHtzdGF0dXN9YCk7IH1cbiAgICBpZiAoc29ydCAhPSBudWxsKSB7IHBhcmFtcy5wdXNoKGBzb3J0PSR7c29ydH1gKTsgfVxuICAgIGlmIChwYWdlICE9IG51bGwpIHsgcGFyYW1zLnB1c2goYHBhZ2U9JHtwYWdlfWApOyB9XG4gICAgaWYgKHBhZ2VTaXplICE9IG51bGwpIHsgcGFyYW1zLnB1c2goYHBhZ2VTaXplPSR7cGFnZVNpemV9YCk7IH1cblxuXHRcdHJldHVybiB0aGlzLnJlc3QuZ2V0KGAke3RoaXMuYmFzZVVybH1gLCAuLi5wYXJhbXMpO1xuICB9XG5cbiAgLyoqXG4gICAqIEdldCBhY2NvdW50IGhpZXJhcmNoeVxuICAgKiBAUmV0dXJuOiBFbnRpdHlSZXNwb25zZTxUcmVlTm9kZT5cbiAgICovXG4gIHRyZWUoaWQ/OiBzdHJpbmcsIHNlbnNvcnM/OiBib29sZWFuLCBzdGF0dXM/OiBTZW5zb3JTdGF0dXNDb2RlW10sIGJlaGF2aW9yVHlwZT86IEJlaGF2aW9yVHlwZUNvZGVbXSkge1xuICAgIGNvbnN0IHBhcmFtcyA9IG5ldyBBcnJheSgpO1x0XHRcbiAgICBpZiAoc2Vuc29ycyAhPSBudWxsKSB7IHBhcmFtcy5wdXNoKGBzZW5zb3JzPSR7c2Vuc29yc31gKTsgfVxuICAgIGlmIChzdGF0dXMgIT0gbnVsbCkgeyBwYXJhbXMucHVzaChgc3RhdHVzPSR7c3RhdHVzfWApOyB9XG4gICAgaWYgKGJlaGF2aW9yVHlwZSAhPSBudWxsKSB7IHBhcmFtcy5wdXNoKGBiZWhhdmlvclR5cGU9JHtiZWhhdmlvclR5cGV9YCk7IH1cblxuXHRcdHJldHVybiB0aGlzLnJlc3QuZ2V0KGAke3RoaXMuYmFzZVVybH0vJHtpZH0vdHJlZWAsIC4uLnBhcmFtcyk7XG4gIH1cblxuICAvKipcbiAgICogRmluZCBhY2NvdW50IGZvbGRlcnNcbiAgICogQFJldHVybjogUXVlcnlSZXNwb25zZTxGb2xkZXI+XG4gICAqL1xuICBmaW5kRm9sZGVycyhpZD86IHN0cmluZywgcGFyZW50SWQ/OiBzdHJpbmcsIHNlYXJjaD86IHN0cmluZywgc29ydD86IHN0cmluZywgcGFnZT86IG51bWJlciwgcGFnZVNpemU/OiBudW1iZXIpIHtcbiAgICBjb25zdCBwYXJhbXMgPSBuZXcgQXJyYXkoKTtcdFx0XG4gICAgaWYgKHBhcmVudElkICE9IG51bGwpIHsgcGFyYW1zLnB1c2goYHBhcmVudElkPSR7cGFyZW50SWR9YCk7IH1cbiAgICBpZiAoc2VhcmNoICE9IG51bGwpIHsgcGFyYW1zLnB1c2goYHNlYXJjaD0ke3NlYXJjaH1gKTsgfVxuICAgIGlmIChzb3J0ICE9IG51bGwpIHsgcGFyYW1zLnB1c2goYHNvcnQ9JHtzb3J0fWApOyB9XG4gICAgaWYgKHBhZ2UgIT0gbnVsbCkgeyBwYXJhbXMucHVzaChgcGFnZT0ke3BhZ2V9YCk7IH1cbiAgICBpZiAocGFnZVNpemUgIT0gbnVsbCkgeyBwYXJhbXMucHVzaChgcGFnZVNpemU9JHtwYWdlU2l6ZX1gKTsgfVxuXG5cdFx0cmV0dXJuIHRoaXMucmVzdC5nZXQoYCR7dGhpcy5iYXNlVXJsfS8ke2lkfS9mb2xkZXJzYCwgLi4ucGFyYW1zKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBFeHBvcnQgbGlzdCBvZiBhY2NvdW50cyBhbmQgZmlsdGVyXG4gICAqIEBSZXR1cm46IFN0cmVhbUNvbnRlbnRcbiAgICovXG4gIGV4cG9ydEZvcm1hdChuYW1lPzogc3RyaW5nLCB0eXBlPzogQWNjb3VudFR5cGVDb2RlW10sIHN0YXR1cz86IEFjY291bnRTdGF0dXNDb2RlW10sIHNvcnQ/OiBzdHJpbmcsIGZvcm1hdD86IHN0cmluZywgZmllbGRzPzogc3RyaW5nW10sIGZpbGVOYW1lPzogc3RyaW5nLCBtaW1lVHlwZT86IHN0cmluZykge1xuICAgIGNvbnN0IHBhcmFtcyA9IG5ldyBBcnJheSgpO1x0XHRcbiAgICBpZiAobmFtZSAhPSBudWxsKSB7IHBhcmFtcy5wdXNoKGBuYW1lPSR7bmFtZX1gKTsgfVxuICAgIGlmICh0eXBlICE9IG51bGwpIHsgcGFyYW1zLnB1c2goYHR5cGU9JHt0eXBlfWApOyB9XG4gICAgaWYgKHN0YXR1cyAhPSBudWxsKSB7IHBhcmFtcy5wdXNoKGBzdGF0dXM9JHtzdGF0dXN9YCk7IH1cbiAgICBpZiAoc29ydCAhPSBudWxsKSB7IHBhcmFtcy5wdXNoKGBzb3J0PSR7c29ydH1gKTsgfVxuICAgIGlmIChmb3JtYXQgIT0gbnVsbCkgeyBwYXJhbXMucHVzaChgZm9ybWF0PSR7Zm9ybWF0fWApOyB9XG4gICAgaWYgKGZpZWxkcyAhPSBudWxsKSB7IHBhcmFtcy5wdXNoKGBmaWVsZHM9JHtmaWVsZHN9YCk7IH1cblxuXHRcdHJldHVybiB0aGlzLnJlc3QuZG93bmxvYWQoYHN5cy1hY2NvdW50c2AsYCR7dGhpcy5iYXNlVXJsfS9leHBvcnRgLCAuLi5wYXJhbXMpO1xuICB9XG5cbiAgLyoqXG4gICAqIEdldCBhY2NvdW50IHR5cGVzIHN0YXRpc3RpY3MgZm9yIGFsbCBhY2NvdW50cyBpbiB0aGUgc3lzdGVtXG4gICAqIEBSZXR1cm46IEVudGl0aWVzUmVzcG9uc2U8QWNjb3VudFR5cGVTdW1tYXJ5PlxuICAgKi9cbiAgZ2V0QWNjb3VudFR5cGVTdGF0aXN0aWNzKCkge1xuICAgIHJldHVybiB0aGlzLnJlc3QuZ2V0KGAke3RoaXMuYmFzZVVybH0vc3RhdGlzdGljcy90eXBlYCk7XG4gIH1cblxuICAvKipcbiAgICogR2V0IGFjY291bnQgbW9udGhseSBzdGF0aXN0aWNzIGZvciBhbGwgYWNjb3VudHMgaW4gdGhlIHN5c3RlbVxuICAgKiBAUmV0dXJuOiBFbnRpdGllc1Jlc3BvbnNlPEFjY291bnRTdGF0aXN0aWNzPlxuICAgKi9cbiAgZ2V0QWNjb3VudE1vbnRoU3RhdGlzdGljcyhhY2NvdW50SWQ/OiBzdHJpbmdbXSwgZnJvbT86IG51bWJlciwgdG8/OiBudW1iZXIpIHtcbiAgICBjb25zdCBwYXJhbXMgPSBuZXcgQXJyYXkoKTtcdFx0XG4gICAgaWYgKGFjY291bnRJZCAhPSBudWxsKSB7IHBhcmFtcy5wdXNoKGBhY2NvdW50SWQ9JHthY2NvdW50SWR9YCk7IH1cbiAgICBpZiAoZnJvbSAhPSBudWxsKSB7IHBhcmFtcy5wdXNoKGBmcm9tPSR7ZnJvbX1gKTsgfVxuICAgIGlmICh0byAhPSBudWxsKSB7IHBhcmFtcy5wdXNoKGB0bz0ke3RvfWApOyB9XG5cblx0XHRyZXR1cm4gdGhpcy5yZXN0LmdldChgJHt0aGlzLmJhc2VVcmx9L3N0YXRpc3RpY3MvbW9udGhgLCAuLi5wYXJhbXMpO1xuICB9XG5cbiAgLyoqXG4gICAqIEdldCBhY2NvdW50cyBtb250aCByZXBvcnQgLSBjdXJyZW50IGNoYW5uZWxzIGFuZCBkZXZpY2VzIHBlciBhY2NvdW50IGNvbXBhcmVkIHRvIHByZXZpb3VzIG1vbnRoXG4gICAqIEBSZXR1cm46IEVudGl0aWVzUmVzcG9uc2U8QWNjb3VudFN0YXRTdW1tYXJ5PlxuICAgKi9cbiAgZ2V0QWNjb3VudHNNb250aFJlcG9ydCgpIHtcbiAgICByZXR1cm4gdGhpcy5yZXN0LmdldChgJHt0aGlzLmJhc2VVcmx9L3N0YXRpc3RpY3MvbW9udGgvcmVwb3J0YCk7XG4gIH1cblxuICAvKipcbiAgICogR2V0IGRlZmF1bHQgZ2VvIGxvY2F0aW9uXG4gICAqIEBSZXR1cm46IEVudGl0eVJlc3BvbnNlPENvb3JkaW5hdGU+IFRoZSBhY2NvdW50IGxvY2F0aW9uXG4gICAqL1xuICBnZXREZWZhdWx0TG9jYXRpb24oaWQ/OiBzdHJpbmcpIHtcbiAgICByZXR1cm4gdGhpcy5yZXN0LmdldChgJHt0aGlzLmJhc2VVcmx9LyR7aWR9L2dlb0xvY2F0aW9uYCk7XG4gIH1cblxuICAvKipcbiAgICogR2V0IGFjY291bnQgdXNhZ2UgcmVwb3J0IChmb3IgYmlsbGluZylcbiAgICogTGlzdCBvZiBzZW5zb3Igd2l0aCB0b3RhbCBhY3RpdmUgdGltZSAobWludXRlcykgYW5kIHRvdGFsIG9mIGJpbGxhYmxlIHNlbnNvcnNcbiAgICogQFJldHVybjogRW50aXR5UmVzcG9uc2U8VXNhZ2VSZXBvcnQ+XG4gICAqL1xuICBnZXRVc2FnZVJlcG9ydChpZD86IHN0cmluZywgeWVhcj86IG51bWJlciwgbW9udGg/OiBudW1iZXIpIHtcbiAgICByZXR1cm4gdGhpcy5yZXN0LmdldChgJHt0aGlzLmJhc2VVcmx9LyR7aWR9L3VzYWdlLXJlcG9ydC8ke3llYXJ9LyR7bW9udGh9YCk7XG4gIH1cblxuICAvKipcbiAgICogRXhwb3J0IGFjY291bnQgdXNhZ2UgcmVwb3J0IHRvIGEgZmlsZSAoZm9yIGJpbGxpbmcpXG4gICAqIEBSZXR1cm46IFN0cmVhbUNvbnRlbnRcbiAgICovXG4gIGV4cG9ydFVzYWdlUmVwb3J0KGlkPzogc3RyaW5nLCB5ZWFyPzogbnVtYmVyLCBtb250aD86IG51bWJlciwgZm9ybWF0Pzogc3RyaW5nLCBmaWxlTmFtZT86IHN0cmluZywgbWltZVR5cGU/OiBzdHJpbmcpIHtcbiAgICBjb25zdCBwYXJhbXMgPSBuZXcgQXJyYXkoKTtcdFx0XG4gICAgaWYgKGZvcm1hdCAhPSBudWxsKSB7IHBhcmFtcy5wdXNoKGBmb3JtYXQ9JHtmb3JtYXR9YCk7IH1cblxuXHRcdHJldHVybiB0aGlzLnJlc3QuZG93bmxvYWQoYHN5cy1hY2NvdW50c2AsYCR7dGhpcy5iYXNlVXJsfS8ke2lkfS9leHBvcnQtdXNhZ2UtcmVwb3J0LyR7eWVhcn0vJHttb250aH1gLCAuLi5wYXJhbXMpO1xuICB9XG5cbn1cbiJdfQ==