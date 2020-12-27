import { __read, __spread } from "tslib";
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
var SysAccountsService = /** @class */ (function () {
    /**
     * Class constructor
     */
    function SysAccountsService(config, rest) {
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
    SysAccountsService.prototype.create = function (body) {
        return this.rest.post("" + this.baseUrl, typeof body === 'object' ? JSON.stringify(body) : body);
    };
    /**
     * Update existing account in the system
     * @Return: EntityResponse<Account>
     */
    SysAccountsService.prototype.update = function (id, body) {
        return this.rest.put(this.baseUrl + "/" + id, typeof body === 'object' ? JSON.stringify(body) : body);
    };
    /**
     * Update account name
     * @Return: EntityResponse<Account>
     */
    SysAccountsService.prototype.changeName = function (id, body) {
        return this.rest.put(this.baseUrl + "/" + id + "/name", typeof body === 'object' ? JSON.stringify(body) : body);
    };
    /**
     * Change account type
     * @Return: EntityResponse<User>
     */
    SysAccountsService.prototype.changeType = function (id, type) {
        return this.rest.put(this.baseUrl + "/" + id + "/type/" + type, null);
    };
    /**
     * Change account status
     * @Return: EntityResponse<Account>
     */
    SysAccountsService.prototype.changeStatus = function (id, status) {
        return this.rest.put(this.baseUrl + "/" + id + "/status/" + status, null);
    };
    /**
     * Change account groups
     * @Return: EntityResponse<Account>
     */
    SysAccountsService.prototype.changeGroups = function (id, groupId) {
        var _a;
        var params = new Array();
        if (groupId != null) {
            params.push("groupId=" + groupId);
        }
        return (_a = this.rest).put.apply(_a, __spread([this.baseUrl + "/" + id + "/groups/{groups}", null], params));
    };
    /**
     * Change account geo-location (center)
     * @Return: EntityResponse<Account> The changed account
     */
    SysAccountsService.prototype.changeGeoLocation = function (body) {
        return this.rest.put(this.baseUrl + "/{id}/geoLocation", typeof body === 'object' ? JSON.stringify(body) : body);
    };
    /**
     * Change account geo area
     * @Return: EntityResponse<Account> The changed account
     */
    SysAccountsService.prototype.changeGeoArea = function (body) {
        return this.rest.put(this.baseUrl + "/{id}/geoArea", typeof body === 'object' ? JSON.stringify(body) : body);
    };
    /**
     * Delete account from the system
     * The account is moved to DELETED mode and will be deleted after 90 days
     * Only account marked as SUSPENDED can be deleted
     * @Return: ActionResponse
     */
    SysAccountsService.prototype.delete = function (id) {
        return this.rest.delete(this.baseUrl + "/" + id);
    };
    /**
     * Delete account immediately without account status restrictions
     * @Return: ActionResponse
     */
    SysAccountsService.prototype.purge = function (id) {
        return this.rest.delete(this.baseUrl + "/purge/" + id);
    };
    /**
     * Reset account - remove all operational data older than the retention time in days (events, status, log ...) but leave configuration data
     * @Return: ActionResponse
     */
    SysAccountsService.prototype.reset = function (id, days) {
        return this.rest.delete(this.baseUrl + "/reset/" + id + "/days/" + days);
    };
    /**
     * Get single account by id
     * @Return: EntityResponse<Account>
     */
    SysAccountsService.prototype.get = function (id) {
        return this.rest.get(this.baseUrl + "/" + id);
    };
    /**
     * Get accounts by list of ids
     * @Return: EntitiesResponse<Account>
     */
    SysAccountsService.prototype.list = function (id) {
        var _a;
        var params = new Array();
        if (id != null) {
            params.push("id=" + id);
        }
        return (_a = this.rest).get.apply(_a, __spread([this.baseUrl + "/list"], params));
    };
    /**
     * Find list of accounts and filter
     * @Return: QueryResponse<Account>
     */
    SysAccountsService.prototype.find = function (search, type, status, sort, page, pageSize) {
        var _a;
        var params = new Array();
        if (search != null) {
            params.push("search=" + search);
        }
        if (type != null) {
            params.push("type=" + type);
        }
        if (status != null) {
            params.push("status=" + status);
        }
        if (sort != null) {
            params.push("sort=" + sort);
        }
        if (page != null) {
            params.push("page=" + page);
        }
        if (pageSize != null) {
            params.push("pageSize=" + pageSize);
        }
        return (_a = this.rest).get.apply(_a, __spread(["" + this.baseUrl], params));
    };
    /**
     * Get account hierarchy
     * @Return: EntityResponse<TreeNode>
     */
    SysAccountsService.prototype.tree = function (id, sensors, status, behaviorType) {
        var _a;
        var params = new Array();
        if (sensors != null) {
            params.push("sensors=" + sensors);
        }
        if (status != null) {
            params.push("status=" + status);
        }
        if (behaviorType != null) {
            params.push("behaviorType=" + behaviorType);
        }
        return (_a = this.rest).get.apply(_a, __spread([this.baseUrl + "/" + id + "/tree"], params));
    };
    /**
     * Find account folders
     * @Return: QueryResponse<Folder>
     */
    SysAccountsService.prototype.findFolders = function (id, parentId, search, sort, page, pageSize) {
        var _a;
        var params = new Array();
        if (parentId != null) {
            params.push("parentId=" + parentId);
        }
        if (search != null) {
            params.push("search=" + search);
        }
        if (sort != null) {
            params.push("sort=" + sort);
        }
        if (page != null) {
            params.push("page=" + page);
        }
        if (pageSize != null) {
            params.push("pageSize=" + pageSize);
        }
        return (_a = this.rest).get.apply(_a, __spread([this.baseUrl + "/" + id + "/folders"], params));
    };
    /**
     * Export list of accounts and filter
     * @Return: StreamContent
     */
    SysAccountsService.prototype.exportFormat = function (name, type, status, sort, format, fields) {
        var _a;
        var params = new Array();
        if (name != null) {
            params.push("name=" + name);
        }
        if (type != null) {
            params.push("type=" + type);
        }
        if (status != null) {
            params.push("status=" + status);
        }
        if (sort != null) {
            params.push("sort=" + sort);
        }
        if (format != null) {
            params.push("format=" + format);
        }
        if (fields != null) {
            params.push("fields=" + fields);
        }
        return (_a = this.rest).download.apply(_a, __spread(["sys-accounts", this.baseUrl + "/export"], params));
    };
    /**
     * Get account types statistics for all accounts in the system
     * @Return: EntitiesResponse<AccountTypeSummary>
     */
    SysAccountsService.prototype.getAccountTypeStatistics = function () {
        return this.rest.get(this.baseUrl + "/statistics/type");
    };
    /**
     * Get account monthly statistics for all accounts in the system
     * @Return: EntitiesResponse<AccountStatistics>
     */
    SysAccountsService.prototype.getAccountMonthStatistics = function (accountId, from, to) {
        var _a;
        var params = new Array();
        if (accountId != null) {
            params.push("accountId=" + accountId);
        }
        if (from != null) {
            params.push("from=" + from);
        }
        if (to != null) {
            params.push("to=" + to);
        }
        return (_a = this.rest).get.apply(_a, __spread([this.baseUrl + "/statistics/month"], params));
    };
    /**
     * Get accounts month report - current channels and devices per account compared to previous month
     * @Return: EntitiesResponse<AccountStatSummary>
     */
    SysAccountsService.prototype.getAccountsMonthReport = function () {
        return this.rest.get(this.baseUrl + "/statistics/month/report");
    };
    /**
     * Get default geo location
     * @Return: EntityResponse<Coordinate> The account location
     */
    SysAccountsService.prototype.getDefaultLocation = function (id) {
        return this.rest.get(this.baseUrl + "/" + id + "/geoLocation");
    };
    /**
     * Get account usage report (for billing)
     * List of sensor with total active time (minutes) and total of billable sensors
     * @Return: EntityResponse<UsageReport>
     */
    SysAccountsService.prototype.getUsageReport = function (id, year, month) {
        return this.rest.get(this.baseUrl + "/" + id + "/usage-report/" + year + "/" + month);
    };
    /** @nocollapse */ SysAccountsService.ɵfac = function SysAccountsService_Factory(t) { return new (t || SysAccountsService)(i0.ɵɵinject('config'), i0.ɵɵinject(i1.RestUtil)); };
    /** @nocollapse */ SysAccountsService.ɵprov = i0.ɵɵdefineInjectable({ token: SysAccountsService, factory: SysAccountsService.ɵfac });
    return SysAccountsService;
}());
export { SysAccountsService };
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(SysAccountsService, [{
        type: Injectable
    }], function () { return [{ type: i2.CoreConfig, decorators: [{
                type: Inject,
                args: ['config']
            }] }, { type: i1.RestUtil }]; }, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3lzQWNjb3VudHNTZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGFnZW50dmkvbmctY29yZS1saWIvIiwic291cmNlcyI6WyJsaWIvc2VydmljZXMvc3lzQWNjb3VudHNTZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUNuRCxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sdUJBQXVCLENBQUM7QUFDakQsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGNBQWMsQ0FBQzs7OztBQVUxQzs7OztHQUlHO0FBQ0g7SUFNRTs7T0FFRztJQUNILDRCQUFzQyxNQUFrQixFQUFVLElBQWM7UUFBMUMsV0FBTSxHQUFOLE1BQU0sQ0FBWTtRQUFVLFNBQUksR0FBSixJQUFJLENBQVU7UUFOaEYsaUJBQWlCO1FBQ1QsWUFBTyxHQUFHLGVBQWUsQ0FBQztRQU1oQyxJQUFJLENBQUMsT0FBTyxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUMsR0FBRyxHQUFHLElBQUksQ0FBQyxPQUFPLENBQUM7SUFDaEQsQ0FBQztJQUdEOzs7T0FHRztJQUNILG1DQUFNLEdBQU4sVUFBTyxJQUFjO1FBQ25CLE9BQU8sSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsS0FBRyxJQUFJLENBQUMsT0FBUyxFQUFFLE9BQU8sSUFBSSxLQUFLLFFBQVEsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDbkcsQ0FBQztJQUVEOzs7T0FHRztJQUNILG1DQUFNLEdBQU4sVUFBTyxFQUFXLEVBQUUsSUFBYztRQUNoQyxPQUFPLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFJLElBQUksQ0FBQyxPQUFPLFNBQUksRUFBSSxFQUFFLE9BQU8sSUFBSSxLQUFLLFFBQVEsQ0FBQyxDQUFDLENBQUMsSUFBSSxD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VUFBbUIsRUFBVztRQUM1QixPQUFPLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFJLElBQUksQ0FBQyxPQUFPLFNBQUksRUFBRSxpQkFBYyxDQUFDLENBQUM7SUFDNUQsQ0FBQztJQUVEOzs7O09BSUc7SUFDSCwyQ0FBYyxHQUFkLFVBQWUsRUFBVyxFQUFFLElBQWEsRUFBRSxLQUFjO1FBQ3ZELE9BQU8sSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUksSUFBSSxDQUFDLE9BQU8sU0FBSSxFQUFFLHNCQUFpQixJQUFJLFNBQUksS0FBTyxDQUFDLENBQUM7SUFDOUUsQ0FBQzsyR0FyT1Usa0JBQWtCLGNBUVQsUUFBUTtpRkFSakIsa0JBQWtCLFdBQWxCLGtCQUFrQjs2QkFsQi9CO0NBeVBDLEFBeE9ELElBd09DO1NBdk9ZLGtCQUFrQjtrREFBbEIsa0JBQWtCO2NBRDlCLFVBQVU7O3NCQVNJLE1BQU07dUJBQUMsUUFBUSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUsIEluamVjdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgUmVzdFV0aWwgfSBmcm9tICcuLi8uLi91dGlscy9yZXN0LXV0aWwnO1xuaW1wb3J0IHsgQ29yZUNvbmZpZyB9IGZyb20gJy4uLy4uL2NvbmZpZyc7XG5cbmltcG9ydCB7IEJlaGF2aW9yVHlwZUNvZGUgfSBmcm9tICcuLi9lbnVtcy9CZWhhdmlvclR5cGVDb2RlJztcbmltcG9ydCB7IEFjY291bnQgfSBmcm9tICcuLi9lbnRpdGllcy9BY2NvdW50JztcbmltcG9ydCB7IEFjY291bnRUeXBlQ29kZSB9IGZyb20gJy4uL2VudW1zL0FjY291bnRUeXBlQ29kZSc7XG5pbXBvcnQgeyBBY2NvdW50U3RhdHVzQ29kZSB9IGZyb20gJy4uL2VudW1zL0FjY291bnRTdGF0dXNDb2RlJztcbmltcG9ydCB7IENvb3JkaW5hdGUgfSBmcm9tICcuLi9jb21tb24vQ29vcmRpbmF0ZSc7XG5pbXBvcnQgeyBTZW5zb3JTdGF0dXNDb2RlIH0gZnJvbSAnLi4vZW51bXMvU2Vuc29yU3RhdHVzQ29kZSc7XG5cblxuLyoqXG4gKiBMaXN0IG9mIGFjY291bnQgcmVsYXRlZCBhY3Rpb25zIGZvciBzeXN0ZW0gYWRtaW5pc3RyYXRvciBvbmx5XG4gKiBAUmVxdWVzdEhlYWRlciBYLUFQSS1LRVkgVGhlIGtleSB0byBpZGVudGlmeSB0aGUgYXBwbGljYXRpb24gKGNvbnNvbGUpXG4gKiBAUmVxdWVzdEhlYWRlciBYLUFDQ0VTUy1UT0tFTiBUaGUgdG9rZW4gdG8gaWRlbnRpZnkgdGhlIGxvZ2dlZC1pbiB1c2VyIFxuICovXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgU3lzQWNjb3VudHNTZXJ2aWNlIHtcblxuICAvLyBVUkwgdG8gd2ViIGFwaVxuICBwcml2YXRlIGJhc2VVcmwgPSAnL3N5cy9hY2NvdW50cyc7XG5cbiAgLyoqXG4gICAqIENsYXNzIGNvbnN0cnVjdG9yXG4gICAqL1xuICBjb25zdHJ1Y3RvcihASW5qZWN0KCdjb25maWcnKSBwcml2YXRlIGNvbmZpZzogQ29yZUNvbmZpZywgcHJpdmF0ZSByZXN0OiBSZXN0VXRpbCkge1xuICAgIHRoaXMuYmFzZVVybCA9IHRoaXMuY29uZmlnLmFwaSArIHRoaXMuYmFzZVVybDtcbiAgfVxuXG5cbiAgLyoqXG4gICAqIENyZWF0ZSBuZXcgYWNjb3VudFxuICAgKiBAUmV0dXJuOiBFbnRpdHlSZXNwb25zZTxBY2NvdW50PlxuICAgKi9cbiAgY3JlYXRlKGJvZHk/OiBBY2NvdW50KSB7XG4gICAgcmV0dXJuIHRoaXMucmVzdC5wb3N0KGAke3RoaXMuYmFzZVVybH1gLCB0eXBlb2YgYm9keSA9PT0gJ29iamVjdCcgPyBKU09OLnN0cmluZ2lmeShib2R5KSA6IGJvZHkpO1xuICB9XG5cbiAgLyoqXG4gICAqIFVwZGF0ZSBleGlzdGluZyBhY2NvdW50IGluIHRoZSBzeXN0ZW1cbiAgICogQFJldHVybjogRW50aXR5UmVzcG9uc2U8QWNjb3VudD5cbiAgICovXG4gIHVwZGF0ZShpZD86IHN0cmluZywgYm9keT86IEFjY291bnQpIHtcbiAgICByZXR1cm4gdGhpcy5yZXN0LnB1dChgJHt0aGlzLmJhc2VVcmx9LyR7aWR9YCwgdHlwZW9mIGJvZHkgPT09ICdvYmplY3QnID8gSlNPTi5zdHJpbmdpZnkoYm9keSkgOiBib2R5KTtcbiAgfVxuXG4gIC8qKlxuICAgKiBVcGRhdGUgYWNjb3VudCBuYW1lXG4gICAqIEBSZXR1cm46IEVudGl0eVJlc3BvbnNlPEFjY291bnQ+XG4gICAqL1xuICBjaGFuZ2VOYW1lKGlkPzogc3RyaW5nLCBib2R5Pzogc3RyaW5nKSB7XG4gICAgcmV0dXJuIHRoaXMucmVzdC5wdXQoYCR7dGhpcy5iYXNlVXJsfS8ke2lkfS9uYW1lYCwgdHlwZW9mIGJvZHkgPT09ICdvYmplY3QnID8gSlNPTi5zdHJpbmdpZnkoYm9keSkgOiBib2R5KTtcbiAgfVxuXG4gIC8qKlxuICAgKiBDaGFuZ2UgYWNjb3VudCB0eXBlXG4gICAqIEBSZXR1cm46IEVudGl0eVJlc3BvbnNlPFVzZXI+XG4gICAqL1xuICBjaGFuZ2VUeXBlKGlkPzogc3RyaW5nLCB0eXBlPzogQWNjb3VudFR5cGVDb2RlKSB7XG4gICAgcmV0dXJuIHRoaXMucmVzdC5wdXQoYCR7dGhpcy5iYXNlVXJsfS8ke2lkfS90eXBlLyR7dHlwZX1gLCBudWxsKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBDaGFuZ2UgYWNjb3VudCBzdGF0dXNcbiAgICogQFJldHVybjogRW50aXR5UmVzcG9uc2U8QWNjb3VudD5cbiAgICovXG4gIGNoYW5nZVN0YXR1cyhpZD86IHN0cmluZywgc3RhdHVzPzogQWNjb3VudFN0YXR1c0NvZGUpIHtcbiAgICByZXR1cm4gdGhpcy5yZXN0LnB1dChgJHt0aGlzLmJhc2VVcmx9LyR7aWR9L3N0YXR1cy8ke3N0YXR1c31gLCBudWxsKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBDaGFuZ2UgYWNjb3VudCBncm91cHNcbiAgICogQFJldHVybjogRW50aXR5UmVzcG9uc2U8QWNjb3VudD5cbiAgICovXG4gIGNoYW5nZUdyb3VwcyhpZD86IHN0cmluZywgZ3JvdXBJZD86IHN0cmluZ1tdKSB7XG4gICAgY29uc3QgcGFyYW1zID0gbmV3IEFycmF5KCk7XHRcdFxuICAgIGlmIChncm91cElkICE9IG51bGwpIHsgcGFyYW1zLnB1c2goYGdyb3VwSWQ9JHtncm91cElkfWApOyB9XG5cblx0XHRyZXR1cm4gdGhpcy5yZXN0LnB1dChgJHt0aGlzLmJhc2VVcmx9LyR7aWR9L2dyb3Vwcy97Z3JvdXBzfWAsIG51bGwsIC4uLnBhcmFtcyk7XG4gIH1cblxuICAvKipcbiAgICogQ2hhbmdlIGFjY291bnQgZ2VvLWxvY2F0aW9uIChjZW50ZXIpXG4gICAqIEBSZXR1cm46IEVudGl0eVJlc3BvbnNlPEFjY291bnQ+IFRoZSBjaGFuZ2VkIGFjY291bnRcbiAgICovXG4gIGNoYW5nZUdlb0xvY2F0aW9uKGJvZHk/OiBDb29yZGluYXRlKSB7XG4gICAgcmV0dXJuIHRoaXMucmVzdC5wdXQoYCR7dGhpcy5iYXNlVXJsfS97aWR9L2dlb0xvY2F0aW9uYCwgdHlwZW9mIGJvZHkgPT09ICdvYmplY3QnID8gSlNPTi5zdHJpbmdpZnkoYm9keSkgOiBib2R5KTtcbiAgfVxuXG4gIC8qKlxuICAgKiBDaGFuZ2UgYWNjb3VudCBnZW8gYXJlYVxuICAgKiBAUmV0dXJuOiBFbnRpdHlSZXNwb25zZTxBY2NvdW50PiBUaGUgY2hhbmdlZCBhY2NvdW50XG4gICAqL1xuICBjaGFuZ2VHZW9BcmVhKGJvZHk/OiBDb29yZGluYXRlW10pIHtcbiAgICByZXR1cm4gdGhpcy5yZXN0LnB1dChgJHt0aGlzLmJhc2VVcmx9L3tpZH0vZ2VvQXJlYWAsIHR5cGVvZiBib2R5ID09PSAnb2JqZWN0JyA/IEpTT04uc3RyaW5naWZ5KGJvZHkpIDogYm9keSk7XG4gIH1cblxuICAvKipcbiAgICogRGVsZXRlIGFjY291bnQgZnJvbSB0aGUgc3lzdGVtXG4gICAqIFRoZSBhY2NvdW50IGlzIG1vdmVkIHRvIERFTEVURUQgbW9kZSBhbmQgd2lsbCBiZSBkZWxldGVkIGFmdGVyIDkwIGRheXNcbiAgICogT25seSBhY2NvdW50IG1hcmtlZCBhcyBTVVNQRU5ERUQgY2FuIGJlIGRlbGV0ZWRcbiAgICogQFJldHVybjogQWN0aW9uUmVzcG9uc2VcbiAgICovXG4gIGRlbGV0ZShpZD86IHN0cmluZykge1xuICAgIHJldHVybiB0aGlzLnJlc3QuZGVsZXRlKGAke3RoaXMuYmFzZVVybH0vJHtpZH1gKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBEZWxldGUgYWNjb3VudCBpbW1lZGlhdGVseSB3aXRob3V0IGFjY291bnQgc3RhdHVzIHJlc3RyaWN0aW9uc1xuICAgKiBAUmV0dXJuOiBBY3Rpb25SZXNwb25zZVxuICAgKi9cbiAgcHVyZ2UoaWQ/OiBzdHJpbmcpIHtcbiAgICByZXR1cm4gdGhpcy5yZXN0LmRlbGV0ZShgJHt0aGlzLmJhc2VVcmx9L3B1cmdlLyR7aWR9YCk7XG4gIH1cblxuICAvKipcbiAgICogUmVzZXQgYWNjb3VudCAtIHJlbW92ZSBhbGwgb3BlcmF0aW9uYWwgZGF0YSBvbGRlciB0aGFuIHRoZSByZXRlbnRpb24gdGltZSBpbiBkYXlzIChldmVudHMsIHN0YXR1cywgbG9nIC4uLikgYnV0IGxlYXZlIGNvbmZpZ3VyYXRpb24gZGF0YVxuICAgKiBAUmV0dXJuOiBBY3Rpb25SZXNwb25zZVxuICAgKi9cbiAgcmVzZXQoaWQ/OiBzdHJpbmcsIGRheXM/OiBudW1iZXIpIHtcbiAgICByZXR1cm4gdGhpcy5yZXN0LmRlbGV0ZShgJHt0aGlzLmJhc2VVcmx9L3Jlc2V0LyR7aWR9L2RheXMvJHtkYXlzfWApO1xuICB9XG5cbiAgLyoqXG4gICAqIEdldCBzaW5nbGUgYWNjb3VudCBieSBpZFxuICAgKiBAUmV0dXJuOiBFbnRpdHlSZXNwb25zZTxBY2NvdW50PlxuICAgKi9cbiAgZ2V0KGlkPzogc3RyaW5nKSB7XG4gICAgcmV0dXJuIHRoaXMucmVzdC5nZXQoYCR7dGhpcy5iYXNlVXJsfS8ke2lkfWApO1xuICB9XG5cbiAgLyoqXG4gICAqIEdldCBhY2NvdW50cyBieSBsaXN0IG9mIGlkc1xuICAgKiBAUmV0dXJuOiBFbnRpdGllc1Jlc3BvbnNlPEFjY291bnQ+XG4gICAqL1xuICBsaXN0KGlkPzogc3RyaW5nW10pIHtcbiAgICBjb25zdCBwYXJhbXMgPSBuZXcgQXJyYXkoKTtcdFx0XG4gICAgaWYgKGlkICE9IG51bGwpIHsgcGFyYW1zLnB1c2goYGlkPSR7aWR9YCk7IH1cblxuXHRcdHJldHVybiB0aGlzLnJlc3QuZ2V0KGAke3RoaXMuYmFzZVVybH0vbGlzdGAsIC4uLnBhcmFtcyk7XG4gIH1cblxuICAvKipcbiAgICogRmluZCBsaXN0IG9mIGFjY291bnRzIGFuZCBmaWx0ZXJcbiAgICogQFJldHVybjogUXVlcnlSZXNwb25zZTxBY2NvdW50PlxuICAgKi9cbiAgZmluZChzZWFyY2g/OiBzdHJpbmcsIHR5cGU/OiBBY2NvdW50VHlwZUNvZGVbXSwgc3RhdHVzPzogQWNjb3VudFN0YXR1c0NvZGVbXSwgc29ydD86IHN0cmluZywgcGFnZT86IG51bWJlciwgcGFnZVNpemU/OiBudW1iZXIpIHtcbiAgICBjb25zdCBwYXJhbXMgPSBuZXcgQXJyYXkoKTtcdFx0XG4gICAgaWYgKHNlYXJjaCAhPSBudWxsKSB7IHBhcmFtcy5wdXNoKGBzZWFyY2g9JHtzZWFyY2h9YCk7IH1cbiAgICBpZiAodHlwZSAhPSBudWxsKSB7IHBhcmFtcy5wdXNoKGB0eXBlPSR7dHlwZX1gKTsgfVxuICAgIGlmIChzdGF0dXMgIT0gbnVsbCkgeyBwYXJhbXMucHVzaChgc3RhdHVzPSR7c3RhdHVzfWApOyB9XG4gICAgaWYgKHNvcnQgIT0gbnVsbCkgeyBwYXJhbXMucHVzaChgc29ydD0ke3NvcnR9YCk7IH1cbiAgICBpZiAocGFnZSAhPSBudWxsKSB7IHBhcmFtcy5wdXNoKGBwYWdlPSR7cGFnZX1gKTsgfVxuICAgIGlmIChwYWdlU2l6ZSAhPSBudWxsKSB7IHBhcmFtcy5wdXNoKGBwYWdlU2l6ZT0ke3BhZ2VTaXplfWApOyB9XG5cblx0XHRyZXR1cm4gdGhpcy5yZXN0LmdldChgJHt0aGlzLmJhc2VVcmx9YCwgLi4ucGFyYW1zKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBHZXQgYWNjb3VudCBoaWVyYXJjaHlcbiAgICogQFJldHVybjogRW50aXR5UmVzcG9uc2U8VHJlZU5vZGU+XG4gICAqL1xuICB0cmVlKGlkPzogc3RyaW5nLCBzZW5zb3JzPzogYm9vbGVhbiwgc3RhdHVzPzogU2Vuc29yU3RhdHVzQ29kZVtdLCBiZWhhdmlvclR5cGU/OiBCZWhhdmlvclR5cGVDb2RlW10pIHtcbiAgICBjb25zdCBwYXJhbXMgPSBuZXcgQXJyYXkoKTtcdFx0XG4gICAgaWYgKHNlbnNvcnMgIT0gbnVsbCkgeyBwYXJhbXMucHVzaChgc2Vuc29ycz0ke3NlbnNvcnN9YCk7IH1cbiAgICBpZiAoc3RhdHVzICE9IG51bGwpIHsgcGFyYW1zLnB1c2goYHN0YXR1cz0ke3N0YXR1c31gKTsgfVxuICAgIGlmIChiZWhhdmlvclR5cGUgIT0gbnVsbCkgeyBwYXJhbXMucHVzaChgYmVoYXZpb3JUeXBlPSR7YmVoYXZpb3JUeXBlfWApOyB9XG5cblx0XHRyZXR1cm4gdGhpcy5yZXN0LmdldChgJHt0aGlzLmJhc2VVcmx9LyR7aWR9L3RyZWVgLCAuLi5wYXJhbXMpO1xuICB9XG5cbiAgLyoqXG4gICAqIEZpbmQgYWNjb3VudCBmb2xkZXJzXG4gICAqIEBSZXR1cm46IFF1ZXJ5UmVzcG9uc2U8Rm9sZGVyPlxuICAgKi9cbiAgZmluZEZvbGRlcnMoaWQ/OiBzdHJpbmcsIHBhcmVudElkPzogc3RyaW5nLCBzZWFyY2g/OiBzdHJpbmcsIHNvcnQ/OiBzdHJpbmcsIHBhZ2U/OiBudW1iZXIsIHBhZ2VTaXplPzogbnVtYmVyKSB7XG4gICAgY29uc3QgcGFyYW1zID0gbmV3IEFycmF5KCk7XHRcdFxuICAgIGlmIChwYXJlbnRJZCAhPSBudWxsKSB7IHBhcmFtcy5wdXNoKGBwYXJlbnRJZD0ke3BhcmVudElkfWApOyB9XG4gICAgaWYgKHNlYXJjaCAhPSBudWxsKSB7IHBhcmFtcy5wdXNoKGBzZWFyY2g9JHtzZWFyY2h9YCk7IH1cbiAgICBpZiAoc29ydCAhPSBudWxsKSB7IHBhcmFtcy5wdXNoKGBzb3J0PSR7c29ydH1gKTsgfVxuICAgIGlmIChwYWdlICE9IG51bGwpIHsgcGFyYW1zLnB1c2goYHBhZ2U9JHtwYWdlfWApOyB9XG4gICAgaWYgKHBhZ2VTaXplICE9IG51bGwpIHsgcGFyYW1zLnB1c2goYHBhZ2VTaXplPSR7cGFnZVNpemV9YCk7IH1cblxuXHRcdHJldHVybiB0aGlzLnJlc3QuZ2V0KGAke3RoaXMuYmFzZVVybH0vJHtpZH0vZm9sZGVyc2AsIC4uLnBhcmFtcyk7XG4gIH1cblxuICAvKipcbiAgICogRXhwb3J0IGxpc3Qgb2YgYWNjb3VudHMgYW5kIGZpbHRlclxuICAgKiBAUmV0dXJuOiBTdHJlYW1Db250ZW50XG4gICAqL1xuICBleHBvcnRGb3JtYXQobmFtZT86IHN0cmluZywgdHlwZT86IEFjY291bnRUeXBlQ29kZVtdLCBzdGF0dXM/OiBBY2NvdW50U3RhdHVzQ29kZVtdLCBzb3J0Pzogc3RyaW5nLCBmb3JtYXQ/OiBzdHJpbmcsIGZpZWxkcz86IHN0cmluZ1tdKSB7XG4gICAgY29uc3QgcGFyYW1zID0gbmV3IEFycmF5KCk7XHRcdFxuICAgIGlmIChuYW1lICE9IG51bGwpIHsgcGFyYW1zLnB1c2goYG5hbWU9JHtuYW1lfWApOyB9XG4gICAgaWYgKHR5cGUgIT0gbnVsbCkgeyBwYXJhbXMucHVzaChgdHlwZT0ke3R5cGV9YCk7IH1cbiAgICBpZiAoc3RhdHVzICE9IG51bGwpIHsgcGFyYW1zLnB1c2goYHN0YXR1cz0ke3N0YXR1c31gKTsgfVxuICAgIGlmIChzb3J0ICE9IG51bGwpIHsgcGFyYW1zLnB1c2goYHNvcnQ9JHtzb3J0fWApOyB9XG4gICAgaWYgKGZvcm1hdCAhPSBudWxsKSB7IHBhcmFtcy5wdXNoKGBmb3JtYXQ9JHtmb3JtYXR9YCk7IH1cbiAgICBpZiAoZmllbGRzICE9IG51bGwpIHsgcGFyYW1zLnB1c2goYGZpZWxkcz0ke2ZpZWxkc31gKTsgfVxuXG5cdFx0cmV0dXJuIHRoaXMucmVzdC5kb3dubG9hZChgc3lzLWFjY291bnRzYCxgJHt0aGlzLmJhc2VVcmx9L2V4cG9ydGAsIC4uLnBhcmFtcyk7XG4gIH1cblxuICAvKipcbiAgICogR2V0IGFjY291bnQgdHlwZXMgc3RhdGlzdGljcyBmb3IgYWxsIGFjY291bnRzIGluIHRoZSBzeXN0ZW1cbiAgICogQFJldHVybjogRW50aXRpZXNSZXNwb25zZTxBY2NvdW50VHlwZVN1bW1hcnk+XG4gICAqL1xuICBnZXRBY2NvdW50VHlwZVN0YXRpc3RpY3MoKSB7XG4gICAgcmV0dXJuIHRoaXMucmVzdC5nZXQoYCR7dGhpcy5iYXNlVXJsfS9zdGF0aXN0aWNzL3R5cGVgKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBHZXQgYWNjb3VudCBtb250aGx5IHN0YXRpc3RpY3MgZm9yIGFsbCBhY2NvdW50cyBpbiB0aGUgc3lzdGVtXG4gICAqIEBSZXR1cm46IEVudGl0aWVzUmVzcG9uc2U8QWNjb3VudFN0YXRpc3RpY3M+XG4gICAqL1xuICBnZXRBY2NvdW50TW9udGhTdGF0aXN0aWNzKGFjY291bnRJZD86IHN0cmluZ1tdLCBmcm9tPzogbnVtYmVyLCB0bz86IG51bWJlcikge1xuICAgIGNvbnN0IHBhcmFtcyA9IG5ldyBBcnJheSgpO1x0XHRcbiAgICBpZiAoYWNjb3VudElkICE9IG51bGwpIHsgcGFyYW1zLnB1c2goYGFjY291bnRJZD0ke2FjY291bnRJZH1gKTsgfVxuICAgIGlmIChmcm9tICE9IG51bGwpIHsgcGFyYW1zLnB1c2goYGZyb209JHtmcm9tfWApOyB9XG4gICAgaWYgKHRvICE9IG51bGwpIHsgcGFyYW1zLnB1c2goYHRvPSR7dG99YCk7IH1cblxuXHRcdHJldHVybiB0aGlzLnJlc3QuZ2V0KGAke3RoaXMuYmFzZVVybH0vc3RhdGlzdGljcy9tb250aGAsIC4uLnBhcmFtcyk7XG4gIH1cblxuICAvKipcbiAgICogR2V0IGFjY291bnRzIG1vbnRoIHJlcG9ydCAtIGN1cnJlbnQgY2hhbm5lbHMgYW5kIGRldmljZXMgcGVyIGFjY291bnQgY29tcGFyZWQgdG8gcHJldmlvdXMgbW9udGhcbiAgICogQFJldHVybjogRW50aXRpZXNSZXNwb25zZTxBY2NvdW50U3RhdFN1bW1hcnk+XG4gICAqL1xuICBnZXRBY2NvdW50c01vbnRoUmVwb3J0KCkge1xuICAgIHJldHVybiB0aGlzLnJlc3QuZ2V0KGAke3RoaXMuYmFzZVVybH0vc3RhdGlzdGljcy9tb250aC9yZXBvcnRgKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBHZXQgZGVmYXVsdCBnZW8gbG9jYXRpb25cbiAgICogQFJldHVybjogRW50aXR5UmVzcG9uc2U8Q29vcmRpbmF0ZT4gVGhlIGFjY291bnQgbG9jYXRpb25cbiAgICovXG4gIGdldERlZmF1bHRMb2NhdGlvbihpZD86IHN0cmluZykge1xuICAgIHJldHVybiB0aGlzLnJlc3QuZ2V0KGAke3RoaXMuYmFzZVVybH0vJHtpZH0vZ2VvTG9jYXRpb25gKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBHZXQgYWNjb3VudCB1c2FnZSByZXBvcnQgKGZvciBiaWxsaW5nKVxuICAgKiBMaXN0IG9mIHNlbnNvciB3aXRoIHRvdGFsIGFjdGl2ZSB0aW1lIChtaW51dGVzKSBhbmQgdG90YWwgb2YgYmlsbGFibGUgc2Vuc29yc1xuICAgKiBAUmV0dXJuOiBFbnRpdHlSZXNwb25zZTxVc2FnZVJlcG9ydD5cbiAgICovXG4gIGdldFVzYWdlUmVwb3J0KGlkPzogc3RyaW5nLCB5ZWFyPzogbnVtYmVyLCBtb250aD86IG51bWJlcikge1xuICAgIHJldHVybiB0aGlzLnJlc3QuZ2V0KGAke3RoaXMuYmFzZVVybH0vJHtpZH0vdXNhZ2UtcmVwb3J0LyR7eWVhcn0vJHttb250aH1gKTtcbiAgfVxuXG59XG4iXX0=