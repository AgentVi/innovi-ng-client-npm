/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Injectable, Inject } from '@angular/core';
import { RestUtil } from '../../utils/rest-util';
import { CoreConfig } from '../../config';
/**
 * List of account related actions for system administrator only
 * \@RequestHeader X-API-KEY The key to identify the application (console)
 * \@RequestHeader X-ACCESS-TOKEN The token to identify the logged-in user
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
    /**
     * Create new account
     * \@Return: EntityResponse<Account>
     * @param {?=} body
     * @return {?}
     */
    SysAccountsService.prototype.create = /**
     * Create new account
     * \@Return: EntityResponse<Account>
     * @param {?=} body
     * @return {?}
     */
    function (body) {
        return this.rest.post("" + this.baseUrl, typeof body === 'object' ? JSON.stringify(body) : body);
    };
    /**
     * Update existing account in the system
     * @Return: EntityResponse<Account>
     */
    /**
     * Update existing account in the system
     * \@Return: EntityResponse<Account>
     * @param {?=} id
     * @param {?=} body
     * @return {?}
     */
    SysAccountsService.prototype.update = /**
     * Update existing account in the system
     * \@Return: EntityResponse<Account>
     * @param {?=} id
     * @param {?=} body
     * @return {?}
     */
    function (id, body) {
        return this.rest.put(this.baseUrl + "/" + id, typeof body === 'object' ? JSON.stringify(body) : body);
    };
    /**
     * Update account name
     * @Return: EntityResponse<Account>
     */
    /**
     * Update account name
     * \@Return: EntityResponse<Account>
     * @param {?=} id
     * @param {?=} body
     * @return {?}
     */
    SysAccountsService.prototype.changeName = /**
     * Update account name
     * \@Return: EntityResponse<Account>
     * @param {?=} id
     * @param {?=} body
     * @return {?}
     */
    function (id, body) {
        return this.rest.put(this.baseUrl + "/" + id + "/name", typeof body === 'object' ? JSON.stringify(body) : body);
    };
    /**
     * Change account type
     * @Return: EntityResponse<User>
     */
    /**
     * Change account type
     * \@Return: EntityResponse<User>
     * @param {?=} id
     * @param {?=} type
     * @return {?}
     */
    SysAccountsService.prototype.changeType = /**
     * Change account type
     * \@Return: EntityResponse<User>
     * @param {?=} id
     * @param {?=} type
     * @return {?}
     */
    function (id, type) {
        return this.rest.put(this.baseUrl + "/" + id + "/type/" + type, null);
    };
    /**
     * Change account status
     * @Return: EntityResponse<Account>
     */
    /**
     * Change account status
     * \@Return: EntityResponse<Account>
     * @param {?=} id
     * @param {?=} status
     * @return {?}
     */
    SysAccountsService.prototype.changeStatus = /**
     * Change account status
     * \@Return: EntityResponse<Account>
     * @param {?=} id
     * @param {?=} status
     * @return {?}
     */
    function (id, status) {
        return this.rest.put(this.baseUrl + "/" + id + "/status/" + status, null);
    };
    /**
     * Change account groups
     * @Return: EntityResponse<Account>
     */
    /**
     * Change account groups
     * \@Return: EntityResponse<Account>
     * @param {?=} id
     * @param {?=} groupId
     * @return {?}
     */
    SysAccountsService.prototype.changeGroups = /**
     * Change account groups
     * \@Return: EntityResponse<Account>
     * @param {?=} id
     * @param {?=} groupId
     * @return {?}
     */
    function (id, groupId) {
        var _a;
        /** @type {?} */
        var params = new Array();
        if (groupId != null) {
            params.push("groupId=" + groupId);
        }
        return (_a = this.rest).put.apply(_a, tslib_1.__spread([this.baseUrl + "/" + id + "/groups/{groups}", null], params));
    };
    /**
     * Change account geo-location (center)
     * @Return: EntityResponse<Account> The changed account
     */
    /**
     * Change account geo-location (center)
     * \@Return: EntityResponse<Account> The changed account
     * @param {?=} body
     * @return {?}
     */
    SysAccountsService.prototype.changeGeoLocation = /**
     * Change account geo-location (center)
     * \@Return: EntityResponse<Account> The changed account
     * @param {?=} body
     * @return {?}
     */
    function (body) {
        return this.rest.put(this.baseUrl + "/{id}/geoLocation", typeof body === 'object' ? JSON.stringify(body) : body);
    };
    /**
     * Change account geo area
     * @Return: EntityResponse<Account> The changed account
     */
    /**
     * Change account geo area
     * \@Return: EntityResponse<Account> The changed account
     * @param {?=} body
     * @return {?}
     */
    SysAccountsService.prototype.changeGeoArea = /**
     * Change account geo area
     * \@Return: EntityResponse<Account> The changed account
     * @param {?=} body
     * @return {?}
     */
    function (body) {
        return this.rest.put(this.baseUrl + "/{id}/geoArea", typeof body === 'object' ? JSON.stringify(body) : body);
    };
    /**
     * Delete account from the system
     * The account is moved to DELETED mode and will be deleted after 90 days
     * Only account marked as SUSPENDED can be deleted
     * @Return: ActionResponse
     */
    /**
     * Delete account from the system
     * The account is moved to DELETED mode and will be deleted after 90 days
     * Only account marked as SUSPENDED can be deleted
     * \@Return: ActionResponse
     * @param {?=} id
     * @return {?}
     */
    SysAccountsService.prototype.delete = /**
     * Delete account from the system
     * The account is moved to DELETED mode and will be deleted after 90 days
     * Only account marked as SUSPENDED can be deleted
     * \@Return: ActionResponse
     * @param {?=} id
     * @return {?}
     */
    function (id) {
        return this.rest.delete(this.baseUrl + "/" + id);
    };
    /**
     * Delete account immediately without account status restrictions
     * @Return: ActionResponse
     */
    /**
     * Delete account immediately without account status restrictions
     * \@Return: ActionResponse
     * @param {?=} id
     * @return {?}
     */
    SysAccountsService.prototype.purge = /**
     * Delete account immediately without account status restrictions
     * \@Return: ActionResponse
     * @param {?=} id
     * @return {?}
     */
    function (id) {
        return this.rest.delete(this.baseUrl + "/purge/" + id);
    };
    /**
     * Reset account - remove all operational data older than the retention time in days (events, status, log ...) but leave configuration data
     * @Return: ActionResponse
     */
    /**
     * Reset account - remove all operational data older than the retention time in days (events, status, log ...) but leave configuration data
     * \@Return: ActionResponse
     * @param {?=} id
     * @param {?=} days
     * @return {?}
     */
    SysAccountsService.prototype.reset = /**
     * Reset account - remove all operational data older than the retention time in days (events, status, log ...) but leave configuration data
     * \@Return: ActionResponse
     * @param {?=} id
     * @param {?=} days
     * @return {?}
     */
    function (id, days) {
        return this.rest.delete(this.baseUrl + "/reset/" + id + "/days/" + days);
    };
    /**
     * Get single account by id
     * @Return: EntityResponse<Account>
     */
    /**
     * Get single account by id
     * \@Return: EntityResponse<Account>
     * @param {?=} id
     * @return {?}
     */
    SysAccountsService.prototype.get = /**
     * Get single account by id
     * \@Return: EntityResponse<Account>
     * @param {?=} id
     * @return {?}
     */
    function (id) {
        return this.rest.get(this.baseUrl + "/" + id);
    };
    /**
     * Get accounts by list of ids
     * @Return: EntitiesResponse<Account>
     */
    /**
     * Get accounts by list of ids
     * \@Return: EntitiesResponse<Account>
     * @param {?=} id
     * @return {?}
     */
    SysAccountsService.prototype.list = /**
     * Get accounts by list of ids
     * \@Return: EntitiesResponse<Account>
     * @param {?=} id
     * @return {?}
     */
    function (id) {
        var _a;
        /** @type {?} */
        var params = new Array();
        if (id != null) {
            params.push("id=" + id);
        }
        return (_a = this.rest).get.apply(_a, tslib_1.__spread([this.baseUrl + "/list"], params));
    };
    /**
     * Find list of accounts and filter
     * @Return: QueryResponse<Account>
     */
    /**
     * Find list of accounts and filter
     * \@Return: QueryResponse<Account>
     * @param {?=} search
     * @param {?=} type
     * @param {?=} status
     * @param {?=} sort
     * @param {?=} page
     * @param {?=} pageSize
     * @return {?}
     */
    SysAccountsService.prototype.find = /**
     * Find list of accounts and filter
     * \@Return: QueryResponse<Account>
     * @param {?=} search
     * @param {?=} type
     * @param {?=} status
     * @param {?=} sort
     * @param {?=} page
     * @param {?=} pageSize
     * @return {?}
     */
    function (search, type, status, sort, page, pageSize) {
        var _a;
        /** @type {?} */
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
        return (_a = this.rest).get.apply(_a, tslib_1.__spread(["" + this.baseUrl], params));
    };
    /**
     * Get account hierarchy
     * @Return: EntityResponse<TreeNode>
     */
    /**
     * Get account hierarchy
     * \@Return: EntityResponse<TreeNode>
     * @param {?=} id
     * @param {?=} sensors
     * @return {?}
     */
    SysAccountsService.prototype.tree = /**
     * Get account hierarchy
     * \@Return: EntityResponse<TreeNode>
     * @param {?=} id
     * @param {?=} sensors
     * @return {?}
     */
    function (id, sensors) {
        var _a;
        /** @type {?} */
        var params = new Array();
        if (sensors != null) {
            params.push("sensors=" + sensors);
        }
        return (_a = this.rest).get.apply(_a, tslib_1.__spread([this.baseUrl + "/" + id + "/tree"], params));
    };
    /**
     * Find account folders
     * @Return: QueryResponse<Folder>
     */
    /**
     * Find account folders
     * \@Return: QueryResponse<Folder>
     * @param {?=} id
     * @param {?=} parentId
     * @param {?=} search
     * @param {?=} sort
     * @param {?=} page
     * @param {?=} pageSize
     * @return {?}
     */
    SysAccountsService.prototype.findFolders = /**
     * Find account folders
     * \@Return: QueryResponse<Folder>
     * @param {?=} id
     * @param {?=} parentId
     * @param {?=} search
     * @param {?=} sort
     * @param {?=} page
     * @param {?=} pageSize
     * @return {?}
     */
    function (id, parentId, search, sort, page, pageSize) {
        var _a;
        /** @type {?} */
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
        return (_a = this.rest).get.apply(_a, tslib_1.__spread([this.baseUrl + "/" + id + "/folders"], params));
    };
    /**
     * Export list of accounts and filter
     * @Return: StreamContent
     */
    /**
     * Export list of accounts and filter
     * \@Return: StreamContent
     * @param {?=} name
     * @param {?=} type
     * @param {?=} status
     * @param {?=} sort
     * @param {?=} format
     * @param {?=} fields
     * @return {?}
     */
    SysAccountsService.prototype.exportFormat = /**
     * Export list of accounts and filter
     * \@Return: StreamContent
     * @param {?=} name
     * @param {?=} type
     * @param {?=} status
     * @param {?=} sort
     * @param {?=} format
     * @param {?=} fields
     * @return {?}
     */
    function (name, type, status, sort, format, fields) {
        var _a;
        /** @type {?} */
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
        return (_a = this.rest).download.apply(_a, tslib_1.__spread(["sys-accounts", this.baseUrl + "/export"], params));
    };
    /**
     * Get account types statistics for all accounts in the system
     * @Return: EntitiesResponse<AccountTypeSummary>
     */
    /**
     * Get account types statistics for all accounts in the system
     * \@Return: EntitiesResponse<AccountTypeSummary>
     * @return {?}
     */
    SysAccountsService.prototype.getAccountTypeStatistics = /**
     * Get account types statistics for all accounts in the system
     * \@Return: EntitiesResponse<AccountTypeSummary>
     * @return {?}
     */
    function () {
        return this.rest.get(this.baseUrl + "/statistics/type");
    };
    /**
     * Get account monthly statistics for all accounts in the system
     * @Return: EntitiesResponse<AccountStatistics>
     */
    /**
     * Get account monthly statistics for all accounts in the system
     * \@Return: EntitiesResponse<AccountStatistics>
     * @param {?=} accountId
     * @param {?=} from
     * @param {?=} to
     * @return {?}
     */
    SysAccountsService.prototype.getAccountMonthStatistics = /**
     * Get account monthly statistics for all accounts in the system
     * \@Return: EntitiesResponse<AccountStatistics>
     * @param {?=} accountId
     * @param {?=} from
     * @param {?=} to
     * @return {?}
     */
    function (accountId, from, to) {
        var _a;
        /** @type {?} */
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
        return (_a = this.rest).get.apply(_a, tslib_1.__spread([this.baseUrl + "/statistics/month"], params));
    };
    /**
     * Get accounts month report - current channels and devices per account compared to previous month
     * @Return: EntitiesResponse<AccountStatSummary>
     */
    /**
     * Get accounts month report - current channels and devices per account compared to previous month
     * \@Return: EntitiesResponse<AccountStatSummary>
     * @return {?}
     */
    SysAccountsService.prototype.getAccountsMonthReport = /**
     * Get accounts month report - current channels and devices per account compared to previous month
     * \@Return: EntitiesResponse<AccountStatSummary>
     * @return {?}
     */
    function () {
        return this.rest.get(this.baseUrl + "/statistics/month/report");
    };
    SysAccountsService.decorators = [
        { type: Injectable }
    ];
    /** @nocollapse */
    SysAccountsService.ctorParameters = function () { return [
        { type: CoreConfig, decorators: [{ type: Inject, args: ['config',] }] },
        { type: RestUtil }
    ]; };
    return SysAccountsService;
}());
export { SysAccountsService };
if (false) {
    /**
     * @type {?}
     * @private
     */
    SysAccountsService.prototype.baseUrl;
    /**
     * @type {?}
     * @private
     */
    SysAccountsService.prototype.config;
    /**
     * @type {?}
     * @private
     */
    SysAccountsService.prototype.rest;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3lzQWNjb3VudHNTZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGFnZW50dmkvbmctY29yZS1saWIvIiwic291cmNlcyI6WyJsaWIvc2VydmljZXMvc3lzQWNjb3VudHNTZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDbkQsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLHVCQUF1QixDQUFDO0FBQ2pELE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxjQUFjLENBQUM7Ozs7OztBQWExQztJQU1FOztPQUVHO0lBQ0gsNEJBQXNDLE1BQWtCLEVBQVUsSUFBYztRQUExQyxXQUFNLEdBQU4sTUFBTSxDQUFZO1FBQVUsU0FBSSxHQUFKLElBQUksQ0FBVTs7UUFMeEUsWUFBTyxHQUFHLGVBQWUsQ0FBQztRQU1oQyxJQUFJLENBQUMsT0FBTyxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUMsR0FBRyxHQUFHLElBQUksQ0FBQyxPQUFPLENBQUM7SUFDaEQsQ0FBQztJQUdEOzs7T0FHRzs7Ozs7OztJQUNILG1DQUFNOzs7Ozs7SUFBTixVQUFPLElBQWM7UUFDbkIsT0FBTyxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxLQUFHLElBQUksQ0FBQyxPQUFTLEVBQUUsT0FBTyxJQUFJLEtBQUssUUFBUSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUNuRyxDQUFDO0lBRUQ7OztPQUdHOzs7Ozs7OztJQUNILG1DQUFNOzs7Ozs7O0lBQU4sVUFBTyxFQUFXLEVBQUUsSUFBYztRQUNoQyxPQUFPLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFJLElBQUksQ0FBQyxPQUFPLFNBQUksRUFBSSxFQUFFLE9BQU8sSUFBSSxLQUFLLFFBQVEsQ0FBQyxDQUFDLENBQUMs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c0JKLE1BQU0sU0FBQyxRQUFRO2dCQXZCckIsUUFBUTs7SUFtT2pCLHlCQUFDO0NBQUEsQUFyTkQsSUFxTkM7U0FwTlksa0JBQWtCOzs7Ozs7SUFHN0IscUNBQWtDOzs7OztJQUt0QixvQ0FBNEM7Ozs7O0lBQUUsa0NBQXNCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSwgSW5qZWN0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBSZXN0VXRpbCB9IGZyb20gJy4uLy4uL3V0aWxzL3Jlc3QtdXRpbCc7XG5pbXBvcnQgeyBDb3JlQ29uZmlnIH0gZnJvbSAnLi4vLi4vY29uZmlnJztcblxuaW1wb3J0IHsgQWNjb3VudCB9IGZyb20gJy4uL2VudGl0aWVzL0FjY291bnQnO1xuaW1wb3J0IHsgQWNjb3VudFR5cGVDb2RlIH0gZnJvbSAnLi4vZW51bXMvQWNjb3VudFR5cGVDb2RlJztcbmltcG9ydCB7IEFjY291bnRTdGF0dXNDb2RlIH0gZnJvbSAnLi4vZW51bXMvQWNjb3VudFN0YXR1c0NvZGUnO1xuaW1wb3J0IHsgQ29vcmRpbmF0ZSB9IGZyb20gJy4uL2NvbW1vbi9Db29yZGluYXRlJztcblxuXG4vKipcbiAqIExpc3Qgb2YgYWNjb3VudCByZWxhdGVkIGFjdGlvbnMgZm9yIHN5c3RlbSBhZG1pbmlzdHJhdG9yIG9ubHlcbiAqIEBSZXF1ZXN0SGVhZGVyIFgtQVBJLUtFWSBUaGUga2V5IHRvIGlkZW50aWZ5IHRoZSBhcHBsaWNhdGlvbiAoY29uc29sZSlcbiAqIEBSZXF1ZXN0SGVhZGVyIFgtQUNDRVNTLVRPS0VOIFRoZSB0b2tlbiB0byBpZGVudGlmeSB0aGUgbG9nZ2VkLWluIHVzZXIgXG4gKi9cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBTeXNBY2NvdW50c1NlcnZpY2Uge1xuXG4gIC8vIFVSTCB0byB3ZWIgYXBpXG4gIHByaXZhdGUgYmFzZVVybCA9ICcvc3lzL2FjY291bnRzJztcblxuICAvKipcbiAgICogQ2xhc3MgY29uc3RydWN0b3JcbiAgICovXG4gIGNvbnN0cnVjdG9yKEBJbmplY3QoJ2NvbmZpZycpIHByaXZhdGUgY29uZmlnOiBDb3JlQ29uZmlnLCBwcml2YXRlIHJlc3Q6IFJlc3RVdGlsKSB7XG4gICAgdGhpcy5iYXNlVXJsID0gdGhpcy5jb25maWcuYXBpICsgdGhpcy5iYXNlVXJsO1xuICB9XG5cblxuICAvKipcbiAgICogQ3JlYXRlIG5ldyBhY2NvdW50XG4gICAqIEBSZXR1cm46IEVudGl0eVJlc3BvbnNlPEFjY291bnQ+XG4gICAqL1xuICBjcmVhdGUoYm9keT86IEFjY291bnQpIHtcbiAgICByZXR1cm4gdGhpcy5yZXN0LnBvc3QoYCR7dGhpcy5iYXNlVXJsfWAsIHR5cGVvZiBib2R5ID09PSAnb2JqZWN0JyA/IEpTT04uc3RyaW5naWZ5KGJvZHkpIDogYm9keSk7XG4gIH1cblxuICAvKipcbiAgICogVXBkYXRlIGV4aXN0aW5nIGFjY291bnQgaW4gdGhlIHN5c3RlbVxuICAgKiBAUmV0dXJuOiBFbnRpdHlSZXNwb25zZTxBY2NvdW50PlxuICAgKi9cbiAgdXBkYXRlKGlkPzogc3RyaW5nLCBib2R5PzogQWNjb3VudCkge1xuICAgIHJldHVybiB0aGlzLnJlc3QucHV0KGAke3RoaXMuYmFzZVVybH0vJHtpZH1gLCB0eXBlb2YgYm9keSA9PT0gJ29iamVjdCcgPyBKU09OLnN0cmluZ2lmeShib2R5KSA6IGJvZHkpO1xuICB9XG5cbiAgLyoqXG4gICAqIFVwZGF0ZSBhY2NvdW50IG5hbWVcbiAgICogQFJldHVybjogRW50aXR5UmVzcG9uc2U8QWNjb3VudD5cbiAgICovXG4gIGNoYW5nZU5hbWUoaWQ/OiBzdHJpbmcsIGJvZHk/OiBzdHJpbmcpIHtcbiAgICByZXR1cm4gdGhpcy5yZXN0LnB1dChgJHt0aGlzLmJhc2VVcmx9LyR7aWR9L25hbWVgLCB0eXBlb2YgYm9keSA9PT0gJ29iamVjdCcgPyBKU09OLnN0cmluZ2lmeShib2R5KSA6IGJvZHkpO1xuICB9XG5cbiAgLyoqXG4gICAqIENoYW5nZSBhY2NvdW50IHR5cGVcbiAgICogQFJldHVybjogRW50aXR5UmVzcG9uc2U8VXNlcj5cbiAgICovXG4gIGNoYW5nZVR5cGUoaWQ/OiBzdHJpbmcsIHR5cGU/OiBBY2NvdW50VHlwZUNvZGUpIHtcbiAgICByZXR1cm4gdGhpcy5yZXN0LnB1dChgJHt0aGlzLmJhc2VVcmx9LyR7aWR9L3R5cGUvJHt0eXBlfWAsIG51bGwpO1xuICB9XG5cbiAgLyoqXG4gICAqIENoYW5nZSBhY2NvdW50IHN0YXR1c1xuICAgKiBAUmV0dXJuOiBFbnRpdHlSZXNwb25zZTxBY2NvdW50PlxuICAgKi9cbiAgY2hhbmdlU3RhdHVzKGlkPzogc3RyaW5nLCBzdGF0dXM/OiBBY2NvdW50U3RhdHVzQ29kZSkge1xuICAgIHJldHVybiB0aGlzLnJlc3QucHV0KGAke3RoaXMuYmFzZVVybH0vJHtpZH0vc3RhdHVzLyR7c3RhdHVzfWAsIG51bGwpO1xuICB9XG5cbiAgLyoqXG4gICAqIENoYW5nZSBhY2NvdW50IGdyb3Vwc1xuICAgKiBAUmV0dXJuOiBFbnRpdHlSZXNwb25zZTxBY2NvdW50PlxuICAgKi9cbiAgY2hhbmdlR3JvdXBzKGlkPzogc3RyaW5nLCBncm91cElkPzogc3RyaW5nW10pIHtcbiAgICBjb25zdCBwYXJhbXMgPSBuZXcgQXJyYXkoKTtcdFx0XG4gICAgaWYgKGdyb3VwSWQgIT0gbnVsbCkgeyBwYXJhbXMucHVzaChgZ3JvdXBJZD0ke2dyb3VwSWR9YCk7IH1cblxuXHRcdHJldHVybiB0aGlzLnJlc3QucHV0KGAke3RoaXMuYmFzZVVybH0vJHtpZH0vZ3JvdXBzL3tncm91cHN9YCwgbnVsbCwgLi4ucGFyYW1zKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBDaGFuZ2UgYWNjb3VudCBnZW8tbG9jYXRpb24gKGNlbnRlcilcbiAgICogQFJldHVybjogRW50aXR5UmVzcG9uc2U8QWNjb3VudD4gVGhlIGNoYW5nZWQgYWNjb3VudFxuICAgKi9cbiAgY2hhbmdlR2VvTG9jYXRpb24oYm9keT86IENvb3JkaW5hdGUpIHtcbiAgICByZXR1cm4gdGhpcy5yZXN0LnB1dChgJHt0aGlzLmJhc2VVcmx9L3tpZH0vZ2VvTG9jYXRpb25gLCB0eXBlb2YgYm9keSA9PT0gJ29iamVjdCcgPyBKU09OLnN0cmluZ2lmeShib2R5KSA6IGJvZHkpO1xuICB9XG5cbiAgLyoqXG4gICAqIENoYW5nZSBhY2NvdW50IGdlbyBhcmVhXG4gICAqIEBSZXR1cm46IEVudGl0eVJlc3BvbnNlPEFjY291bnQ+IFRoZSBjaGFuZ2VkIGFjY291bnRcbiAgICovXG4gIGNoYW5nZUdlb0FyZWEoYm9keT86IENvb3JkaW5hdGVbXSkge1xuICAgIHJldHVybiB0aGlzLnJlc3QucHV0KGAke3RoaXMuYmFzZVVybH0ve2lkfS9nZW9BcmVhYCwgdHlwZW9mIGJvZHkgPT09ICdvYmplY3QnID8gSlNPTi5zdHJpbmdpZnkoYm9keSkgOiBib2R5KTtcbiAgfVxuXG4gIC8qKlxuICAgKiBEZWxldGUgYWNjb3VudCBmcm9tIHRoZSBzeXN0ZW1cbiAgICogVGhlIGFjY291bnQgaXMgbW92ZWQgdG8gREVMRVRFRCBtb2RlIGFuZCB3aWxsIGJlIGRlbGV0ZWQgYWZ0ZXIgOTAgZGF5c1xuICAgKiBPbmx5IGFjY291bnQgbWFya2VkIGFzIFNVU1BFTkRFRCBjYW4gYmUgZGVsZXRlZFxuICAgKiBAUmV0dXJuOiBBY3Rpb25SZXNwb25zZVxuICAgKi9cbiAgZGVsZXRlKGlkPzogc3RyaW5nKSB7XG4gICAgcmV0dXJuIHRoaXMucmVzdC5kZWxldGUoYCR7dGhpcy5iYXNlVXJsfS8ke2lkfWApO1xuICB9XG5cbiAgLyoqXG4gICAqIERlbGV0ZSBhY2NvdW50IGltbWVkaWF0ZWx5IHdpdGhvdXQgYWNjb3VudCBzdGF0dXMgcmVzdHJpY3Rpb25zXG4gICAqIEBSZXR1cm46IEFjdGlvblJlc3BvbnNlXG4gICAqL1xuICBwdXJnZShpZD86IHN0cmluZykge1xuICAgIHJldHVybiB0aGlzLnJlc3QuZGVsZXRlKGAke3RoaXMuYmFzZVVybH0vcHVyZ2UvJHtpZH1gKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBSZXNldCBhY2NvdW50IC0gcmVtb3ZlIGFsbCBvcGVyYXRpb25hbCBkYXRhIG9sZGVyIHRoYW4gdGhlIHJldGVudGlvbiB0aW1lIGluIGRheXMgKGV2ZW50cywgc3RhdHVzLCBsb2cgLi4uKSBidXQgbGVhdmUgY29uZmlndXJhdGlvbiBkYXRhXG4gICAqIEBSZXR1cm46IEFjdGlvblJlc3BvbnNlXG4gICAqL1xuICByZXNldChpZD86IHN0cmluZywgZGF5cz86IG51bWJlcikge1xuICAgIHJldHVybiB0aGlzLnJlc3QuZGVsZXRlKGAke3RoaXMuYmFzZVVybH0vcmVzZXQvJHtpZH0vZGF5cy8ke2RheXN9YCk7XG4gIH1cblxuICAvKipcbiAgICogR2V0IHNpbmdsZSBhY2NvdW50IGJ5IGlkXG4gICAqIEBSZXR1cm46IEVudGl0eVJlc3BvbnNlPEFjY291bnQ+XG4gICAqL1xuICBnZXQoaWQ/OiBzdHJpbmcpIHtcbiAgICByZXR1cm4gdGhpcy5yZXN0LmdldChgJHt0aGlzLmJhc2VVcmx9LyR7aWR9YCk7XG4gIH1cblxuICAvKipcbiAgICogR2V0IGFjY291bnRzIGJ5IGxpc3Qgb2YgaWRzXG4gICAqIEBSZXR1cm46IEVudGl0aWVzUmVzcG9uc2U8QWNjb3VudD5cbiAgICovXG4gIGxpc3QoaWQ/OiBzdHJpbmdbXSkge1xuICAgIGNvbnN0IHBhcmFtcyA9IG5ldyBBcnJheSgpO1x0XHRcbiAgICBpZiAoaWQgIT0gbnVsbCkgeyBwYXJhbXMucHVzaChgaWQ9JHtpZH1gKTsgfVxuXG5cdFx0cmV0dXJuIHRoaXMucmVzdC5nZXQoYCR7dGhpcy5iYXNlVXJsfS9saXN0YCwgLi4ucGFyYW1zKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBGaW5kIGxpc3Qgb2YgYWNjb3VudHMgYW5kIGZpbHRlclxuICAgKiBAUmV0dXJuOiBRdWVyeVJlc3BvbnNlPEFjY291bnQ+XG4gICAqL1xuICBmaW5kKHNlYXJjaD86IHN0cmluZywgdHlwZT86IEFjY291bnRUeXBlQ29kZVtdLCBzdGF0dXM/OiBBY2NvdW50U3RhdHVzQ29kZVtdLCBzb3J0Pzogc3RyaW5nLCBwYWdlPzogbnVtYmVyLCBwYWdlU2l6ZT86IG51bWJlcikge1xuICAgIGNvbnN0IHBhcmFtcyA9IG5ldyBBcnJheSgpO1x0XHRcbiAgICBpZiAoc2VhcmNoICE9IG51bGwpIHsgcGFyYW1zLnB1c2goYHNlYXJjaD0ke3NlYXJjaH1gKTsgfVxuICAgIGlmICh0eXBlICE9IG51bGwpIHsgcGFyYW1zLnB1c2goYHR5cGU9JHt0eXBlfWApOyB9XG4gICAgaWYgKHN0YXR1cyAhPSBudWxsKSB7IHBhcmFtcy5wdXNoKGBzdGF0dXM9JHtzdGF0dXN9YCk7IH1cbiAgICBpZiAoc29ydCAhPSBudWxsKSB7IHBhcmFtcy5wdXNoKGBzb3J0PSR7c29ydH1gKTsgfVxuICAgIGlmIChwYWdlICE9IG51bGwpIHsgcGFyYW1zLnB1c2goYHBhZ2U9JHtwYWdlfWApOyB9XG4gICAgaWYgKHBhZ2VTaXplICE9IG51bGwpIHsgcGFyYW1zLnB1c2goYHBhZ2VTaXplPSR7cGFnZVNpemV9YCk7IH1cblxuXHRcdHJldHVybiB0aGlzLnJlc3QuZ2V0KGAke3RoaXMuYmFzZVVybH1gLCAuLi5wYXJhbXMpO1xuICB9XG5cbiAgLyoqXG4gICAqIEdldCBhY2NvdW50IGhpZXJhcmNoeVxuICAgKiBAUmV0dXJuOiBFbnRpdHlSZXNwb25zZTxUcmVlTm9kZT5cbiAgICovXG4gIHRyZWUoaWQ/OiBzdHJpbmcsIHNlbnNvcnM/OiBib29sZWFuKSB7XG4gICAgY29uc3QgcGFyYW1zID0gbmV3IEFycmF5KCk7XHRcdFxuICAgIGlmIChzZW5zb3JzICE9IG51bGwpIHsgcGFyYW1zLnB1c2goYHNlbnNvcnM9JHtzZW5zb3JzfWApOyB9XG5cblx0XHRyZXR1cm4gdGhpcy5yZXN0LmdldChgJHt0aGlzLmJhc2VVcmx9LyR7aWR9L3RyZWVgLCAuLi5wYXJhbXMpO1xuICB9XG5cbiAgLyoqXG4gICAqIEZpbmQgYWNjb3VudCBmb2xkZXJzXG4gICAqIEBSZXR1cm46IFF1ZXJ5UmVzcG9uc2U8Rm9sZGVyPlxuICAgKi9cbiAgZmluZEZvbGRlcnMoaWQ/OiBzdHJpbmcsIHBhcmVudElkPzogc3RyaW5nLCBzZWFyY2g/OiBzdHJpbmcsIHNvcnQ/OiBzdHJpbmcsIHBhZ2U/OiBudW1iZXIsIHBhZ2VTaXplPzogbnVtYmVyKSB7XG4gICAgY29uc3QgcGFyYW1zID0gbmV3IEFycmF5KCk7XHRcdFxuICAgIGlmIChwYXJlbnRJZCAhPSBudWxsKSB7IHBhcmFtcy5wdXNoKGBwYXJlbnRJZD0ke3BhcmVudElkfWApOyB9XG4gICAgaWYgKHNlYXJjaCAhPSBudWxsKSB7IHBhcmFtcy5wdXNoKGBzZWFyY2g9JHtzZWFyY2h9YCk7IH1cbiAgICBpZiAoc29ydCAhPSBudWxsKSB7IHBhcmFtcy5wdXNoKGBzb3J0PSR7c29ydH1gKTsgfVxuICAgIGlmIChwYWdlICE9IG51bGwpIHsgcGFyYW1zLnB1c2goYHBhZ2U9JHtwYWdlfWApOyB9XG4gICAgaWYgKHBhZ2VTaXplICE9IG51bGwpIHsgcGFyYW1zLnB1c2goYHBhZ2VTaXplPSR7cGFnZVNpemV9YCk7IH1cblxuXHRcdHJldHVybiB0aGlzLnJlc3QuZ2V0KGAke3RoaXMuYmFzZVVybH0vJHtpZH0vZm9sZGVyc2AsIC4uLnBhcmFtcyk7XG4gIH1cblxuICAvKipcbiAgICogRXhwb3J0IGxpc3Qgb2YgYWNjb3VudHMgYW5kIGZpbHRlclxuICAgKiBAUmV0dXJuOiBTdHJlYW1Db250ZW50XG4gICAqL1xuICBleHBvcnRGb3JtYXQobmFtZT86IHN0cmluZywgdHlwZT86IEFjY291bnRUeXBlQ29kZVtdLCBzdGF0dXM/OiBBY2NvdW50U3RhdHVzQ29kZVtdLCBzb3J0Pzogc3RyaW5nLCBmb3JtYXQ/OiBzdHJpbmcsIGZpZWxkcz86IHN0cmluZ1tdKSB7XG4gICAgY29uc3QgcGFyYW1zID0gbmV3IEFycmF5KCk7XHRcdFxuICAgIGlmIChuYW1lICE9IG51bGwpIHsgcGFyYW1zLnB1c2goYG5hbWU9JHtuYW1lfWApOyB9XG4gICAgaWYgKHR5cGUgIT0gbnVsbCkgeyBwYXJhbXMucHVzaChgdHlwZT0ke3R5cGV9YCk7IH1cbiAgICBpZiAoc3RhdHVzICE9IG51bGwpIHsgcGFyYW1zLnB1c2goYHN0YXR1cz0ke3N0YXR1c31gKTsgfVxuICAgIGlmIChzb3J0ICE9IG51bGwpIHsgcGFyYW1zLnB1c2goYHNvcnQ9JHtzb3J0fWApOyB9XG4gICAgaWYgKGZvcm1hdCAhPSBudWxsKSB7IHBhcmFtcy5wdXNoKGBmb3JtYXQ9JHtmb3JtYXR9YCk7IH1cbiAgICBpZiAoZmllbGRzICE9IG51bGwpIHsgcGFyYW1zLnB1c2goYGZpZWxkcz0ke2ZpZWxkc31gKTsgfVxuXG5cdFx0cmV0dXJuIHRoaXMucmVzdC5kb3dubG9hZChgc3lzLWFjY291bnRzYCxgJHt0aGlzLmJhc2VVcmx9L2V4cG9ydGAsIC4uLnBhcmFtcyk7XG4gIH1cblxuICAvKipcbiAgICogR2V0IGFjY291bnQgdHlwZXMgc3RhdGlzdGljcyBmb3IgYWxsIGFjY291bnRzIGluIHRoZSBzeXN0ZW1cbiAgICogQFJldHVybjogRW50aXRpZXNSZXNwb25zZTxBY2NvdW50VHlwZVN1bW1hcnk+XG4gICAqL1xuICBnZXRBY2NvdW50VHlwZVN0YXRpc3RpY3MoKSB7XG4gICAgcmV0dXJuIHRoaXMucmVzdC5nZXQoYCR7dGhpcy5iYXNlVXJsfS9zdGF0aXN0aWNzL3R5cGVgKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBHZXQgYWNjb3VudCBtb250aGx5IHN0YXRpc3RpY3MgZm9yIGFsbCBhY2NvdW50cyBpbiB0aGUgc3lzdGVtXG4gICAqIEBSZXR1cm46IEVudGl0aWVzUmVzcG9uc2U8QWNjb3VudFN0YXRpc3RpY3M+XG4gICAqL1xuICBnZXRBY2NvdW50TW9udGhTdGF0aXN0aWNzKGFjY291bnRJZD86IHN0cmluZ1tdLCBmcm9tPzogbnVtYmVyLCB0bz86IG51bWJlcikge1xuICAgIGNvbnN0IHBhcmFtcyA9IG5ldyBBcnJheSgpO1x0XHRcbiAgICBpZiAoYWNjb3VudElkICE9IG51bGwpIHsgcGFyYW1zLnB1c2goYGFjY291bnRJZD0ke2FjY291bnRJZH1gKTsgfVxuICAgIGlmIChmcm9tICE9IG51bGwpIHsgcGFyYW1zLnB1c2goYGZyb209JHtmcm9tfWApOyB9XG4gICAgaWYgKHRvICE9IG51bGwpIHsgcGFyYW1zLnB1c2goYHRvPSR7dG99YCk7IH1cblxuXHRcdHJldHVybiB0aGlzLnJlc3QuZ2V0KGAke3RoaXMuYmFzZVVybH0vc3RhdGlzdGljcy9tb250aGAsIC4uLnBhcmFtcyk7XG4gIH1cblxuICAvKipcbiAgICogR2V0IGFjY291bnRzIG1vbnRoIHJlcG9ydCAtIGN1cnJlbnQgY2hhbm5lbHMgYW5kIGRldmljZXMgcGVyIGFjY291bnQgY29tcGFyZWQgdG8gcHJldmlvdXMgbW9udGhcbiAgICogQFJldHVybjogRW50aXRpZXNSZXNwb25zZTxBY2NvdW50U3RhdFN1bW1hcnk+XG4gICAqL1xuICBnZXRBY2NvdW50c01vbnRoUmVwb3J0KCkge1xuICAgIHJldHVybiB0aGlzLnJlc3QuZ2V0KGAke3RoaXMuYmFzZVVybH0vc3RhdGlzdGljcy9tb250aC9yZXBvcnRgKTtcbiAgfVxuXG59XG4iXX0=