/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Injectable, Inject } from '@angular/core';
import { RestUtil } from '../../utils/rest-util';
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
        return this.rest.post(this.baseUrl + "/", JSON.stringify(body));
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
        return this.rest.post(this.baseUrl + "/" + id, JSON.stringify(body));
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
        return this.rest.put(this.baseUrl + "/" + id + "/name", JSON.stringify(body));
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
     * @param {?=} type
     * @return {?}
     */
    SysAccountsService.prototype.changeStatus = /**
     * Change account status
     * \@Return: EntityResponse<Account>
     * @param {?=} id
     * @param {?=} type
     * @return {?}
     */
    function (id, type) {
        return this.rest.put(this.baseUrl + "/" + id + "/status/{status}", null);
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
     * @param {?=} id
     * @param {?=} body
     * @return {?}
     */
    SysAccountsService.prototype.changeGeoLocation = /**
     * Change account geo-location (center)
     * \@Return: EntityResponse<Account> The changed account
     * @param {?=} id
     * @param {?=} body
     * @return {?}
     */
    function (id, body) {
        return this.rest.put(this.baseUrl + "/" + id + "/geoLocation", JSON.stringify(body));
    };
    /**
     * Change account geo area
     * @Return: EntityResponse<Account> The changed account
     */
    /**
     * Change account geo area
     * \@Return: EntityResponse<Account> The changed account
     * @param {?=} id
     * @param {?=} body
     * @return {?}
     */
    SysAccountsService.prototype.changeGeoArea = /**
     * Change account geo area
     * \@Return: EntityResponse<Account> The changed account
     * @param {?=} id
     * @param {?=} body
     * @return {?}
     */
    function (id, body) {
        return this.rest.put(this.baseUrl + "/" + id + "/geoArea", JSON.stringify(body));
    };
    /**
     * Get default geo location
     * @Return: EntityResponse<Coordinate> The account location
     */
    /**
     * Get default geo location
     * \@Return: EntityResponse<Coordinate> The account location
     * @param {?=} id
     * @return {?}
     */
    SysAccountsService.prototype.getDefaultLocation = /**
     * Get default geo location
     * \@Return: EntityResponse<Coordinate> The account location
     * @param {?=} id
     * @return {?}
     */
    function (id) {
        return this.rest.get(this.baseUrl + "/" + id + "/geoLocation");
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
        return (_a = this.rest).get.apply(_a, tslib_1.__spread([this.baseUrl + "/"], params));
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
    SysAccountsService.decorators = [
        { type: Injectable }
    ];
    /** @nocollapse */
    SysAccountsService.ctorParameters = function () { return [
        { type: undefined, decorators: [{ type: Inject, args: ['config',] }] },
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3lzQWNjb3VudHNTZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGFnZW50dmkvbmctY29yZS1saWIvIiwic291cmNlcyI6WyJsaWIvc2VydmljZXMvc3lzQWNjb3VudHNTZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDbkQsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLHVCQUF1QixDQUFDOzs7Ozs7QUFjakQ7SUFNRTs7T0FFRztJQUNILDRCQUFzQyxNQUFrQixFQUFVLElBQWM7UUFBMUMsV0FBTSxHQUFOLE1BQU0sQ0FBWTtRQUFVLFNBQUksR0FBSixJQUFJLENBQVU7O1FBTHhFLFlBQU8sR0FBRyxlQUFlLENBQUM7UUFNaEMsSUFBSSxDQUFDLE9BQU8sR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDLEdBQUcsR0FBRyxJQUFJLENBQUMsT0FBTyxDQUFDO0lBQ2hELENBQUM7SUFHRDs7O09BR0c7Ozs7Ozs7SUFDSCxtQ0FBTTs7Ozs7O0lBQU4sVUFBTyxJQUFjO1FBQ25CLE9BQU8sSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUksSUFBSSxDQUFDLE9BQU8sTUFBRyxFQUFFLElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQztJQUNsRSxDQUFDO0lBRUQ7OztPQUdHOzs7Ozs7OztJQUNILG1DQUFNOzs7Ozs7O0lBQU4sVUFBTyxFQUFXLEVBQUUsSUFBYztRQUNoQyxPQUFPLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFJLElBQUksQ0FBQyxPQUFPLFNBQUksRUFBSSxFQUFFLElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQztJQUN2RSxDQUFDO0lBRUQ7OztPQUdHOzs7Ozs7OztJQUNILHVDQUFVOzs7Ozs7O0lBQVYsVUFBVyxFQUFXLEVBQUUsSUFBYTtRQUNuQyxPQUFPLElBQUksQ0FB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QUNILHFEQUF3Qjs7Ozs7SUFBeEI7UUFDRSxPQUFPLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFJLElBQUksQ0FBQyxPQUFPLHFCQUFrQixDQUFDLENBQUM7SUFDMUQsQ0FBQzs7Z0JBcEpGLFVBQVU7Ozs7Z0RBU0ksTUFBTSxTQUFDLFFBQVE7Z0JBdkJyQixRQUFROztJQW9LakIseUJBQUM7Q0FBQSxBQXRKRCxJQXNKQztTQXJKWSxrQkFBa0I7Ozs7OztJQUc3QixxQ0FBa0M7Ozs7O0lBS3RCLG9DQUE0Qzs7Ozs7SUFBRSxrQ0FBc0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlLCBJbmplY3QgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFJlc3RVdGlsIH0gZnJvbSAnLi4vLi4vdXRpbHMvcmVzdC11dGlsJztcbmltcG9ydCB7IENvcmVDb25maWcgfSBmcm9tICcuLi8uLi9jb3JlLWxpYi5tb2R1bGUnO1xuXG5pbXBvcnQgeyBBY2NvdW50IH0gZnJvbSAnLi4vZW50aXRpZXMvQWNjb3VudCc7XG5pbXBvcnQgeyBBY2NvdW50VHlwZUNvZGUgfSBmcm9tICcuLi9lbnVtcy9BY2NvdW50VHlwZUNvZGUnO1xuaW1wb3J0IHsgQWNjb3VudFN0YXR1c0NvZGUgfSBmcm9tICcuLi9lbnVtcy9BY2NvdW50U3RhdHVzQ29kZSc7XG5pbXBvcnQgeyBDb29yZGluYXRlIH0gZnJvbSAnLi4vY29tbW9uL0Nvb3JkaW5hdGUnO1xuXG5cbi8qKlxuICogTGlzdCBvZiBhY2NvdW50IHJlbGF0ZWQgYWN0aW9ucyBmb3Igc3lzdGVtIGFkbWluaXN0cmF0b3Igb25seVxuICogQFJlcXVlc3RIZWFkZXIgWC1BUEktS0VZIFRoZSBrZXkgdG8gaWRlbnRpZnkgdGhlIGFwcGxpY2F0aW9uIChjb25zb2xlKVxuICogQFJlcXVlc3RIZWFkZXIgWC1BQ0NFU1MtVE9LRU4gVGhlIHRva2VuIHRvIGlkZW50aWZ5IHRoZSBsb2dnZWQtaW4gdXNlciBcbiAqL1xuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIFN5c0FjY291bnRzU2VydmljZSB7XG5cbiAgLy8gVVJMIHRvIHdlYiBhcGlcbiAgcHJpdmF0ZSBiYXNlVXJsID0gJy9zeXMvYWNjb3VudHMnO1xuXG4gIC8qKlxuICAgKiBDbGFzcyBjb25zdHJ1Y3RvclxuICAgKi9cbiAgY29uc3RydWN0b3IoQEluamVjdCgnY29uZmlnJykgcHJpdmF0ZSBjb25maWc6IENvcmVDb25maWcsIHByaXZhdGUgcmVzdDogUmVzdFV0aWwpIHtcbiAgICB0aGlzLmJhc2VVcmwgPSB0aGlzLmNvbmZpZy5hcGkgKyB0aGlzLmJhc2VVcmw7XG4gIH1cblxuXG4gIC8qKlxuICAgKiBDcmVhdGUgbmV3IGFjY291bnRcbiAgICogQFJldHVybjogRW50aXR5UmVzcG9uc2U8QWNjb3VudD5cbiAgICovXG4gIGNyZWF0ZShib2R5PzogQWNjb3VudCkge1xuICAgIHJldHVybiB0aGlzLnJlc3QucG9zdChgJHt0aGlzLmJhc2VVcmx9L2AsIEpTT04uc3RyaW5naWZ5KGJvZHkpKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBVcGRhdGUgZXhpc3RpbmcgYWNjb3VudCBpbiB0aGUgc3lzdGVtXG4gICAqIEBSZXR1cm46IEVudGl0eVJlc3BvbnNlPEFjY291bnQ+XG4gICAqL1xuICB1cGRhdGUoaWQ/OiBzdHJpbmcsIGJvZHk/OiBBY2NvdW50KSB7XG4gICAgcmV0dXJuIHRoaXMucmVzdC5wb3N0KGAke3RoaXMuYmFzZVVybH0vJHtpZH1gLCBKU09OLnN0cmluZ2lmeShib2R5KSk7XG4gIH1cblxuICAvKipcbiAgICogVXBkYXRlIGFjY291bnQgbmFtZVxuICAgKiBAUmV0dXJuOiBFbnRpdHlSZXNwb25zZTxBY2NvdW50PlxuICAgKi9cbiAgY2hhbmdlTmFtZShpZD86IHN0cmluZywgYm9keT86IHN0cmluZykge1xuICAgIHJldHVybiB0aGlzLnJlc3QucHV0KGAke3RoaXMuYmFzZVVybH0vJHtpZH0vbmFtZWAsIEpTT04uc3RyaW5naWZ5KGJvZHkpKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBDaGFuZ2UgYWNjb3VudCB0eXBlXG4gICAqIEBSZXR1cm46IEVudGl0eVJlc3BvbnNlPFVzZXI+XG4gICAqL1xuICBjaGFuZ2VUeXBlKGlkPzogc3RyaW5nLCB0eXBlPzogQWNjb3VudFR5cGVDb2RlKSB7XG4gICAgcmV0dXJuIHRoaXMucmVzdC5wdXQoYCR7dGhpcy5iYXNlVXJsfS8ke2lkfS90eXBlLyR7dHlwZX1gLCBudWxsKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBDaGFuZ2UgYWNjb3VudCBzdGF0dXNcbiAgICogQFJldHVybjogRW50aXR5UmVzcG9uc2U8QWNjb3VudD5cbiAgICovXG4gIGNoYW5nZVN0YXR1cyhpZD86IHN0cmluZywgdHlwZT86IEFjY291bnRTdGF0dXNDb2RlKSB7XG4gICAgcmV0dXJuIHRoaXMucmVzdC5wdXQoYCR7dGhpcy5iYXNlVXJsfS8ke2lkfS9zdGF0dXMve3N0YXR1c31gLCBudWxsKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBDaGFuZ2UgYWNjb3VudCBncm91cHNcbiAgICogQFJldHVybjogRW50aXR5UmVzcG9uc2U8QWNjb3VudD5cbiAgICovXG4gIGNoYW5nZUdyb3VwcyhpZD86IHN0cmluZywgZ3JvdXBJZD86IHN0cmluZykge1xuICAgIGNvbnN0IHBhcmFtcyA9IG5ldyBBcnJheSgpO1x0XHRcbiAgICBpZiAoZ3JvdXBJZCAhPSBudWxsKSB7IHBhcmFtcy5wdXNoKGBncm91cElkPSR7Z3JvdXBJZH1gKTsgfVxuXG5cdFx0cmV0dXJuIHRoaXMucmVzdC5wdXQoYCR7dGhpcy5iYXNlVXJsfS8ke2lkfS9ncm91cHMve2dyb3Vwc31gLCBudWxsLCAuLi5wYXJhbXMpO1xuICB9XG5cbiAgLyoqXG4gICAqIENoYW5nZSBhY2NvdW50IGdlby1sb2NhdGlvbiAoY2VudGVyKVxuICAgKiBAUmV0dXJuOiBFbnRpdHlSZXNwb25zZTxBY2NvdW50PiBUaGUgY2hhbmdlZCBhY2NvdW50XG4gICAqL1xuICBjaGFuZ2VHZW9Mb2NhdGlvbihpZD86IHN0cmluZywgYm9keT86IENvb3JkaW5hdGUpIHtcbiAgICByZXR1cm4gdGhpcy5yZXN0LnB1dChgJHt0aGlzLmJhc2VVcmx9LyR7aWR9L2dlb0xvY2F0aW9uYCwgSlNPTi5zdHJpbmdpZnkoYm9keSkpO1xuICB9XG5cbiAgLyoqXG4gICAqIENoYW5nZSBhY2NvdW50IGdlbyBhcmVhXG4gICAqIEBSZXR1cm46IEVudGl0eVJlc3BvbnNlPEFjY291bnQ+IFRoZSBjaGFuZ2VkIGFjY291bnRcbiAgICovXG4gIGNoYW5nZUdlb0FyZWEoaWQ/OiBzdHJpbmcsIGJvZHk/OiBDb29yZGluYXRlKSB7XG4gICAgcmV0dXJuIHRoaXMucmVzdC5wdXQoYCR7dGhpcy5iYXNlVXJsfS8ke2lkfS9nZW9BcmVhYCwgSlNPTi5zdHJpbmdpZnkoYm9keSkpO1xuICB9XG5cbiAgLyoqXG4gICAqIEdldCBkZWZhdWx0IGdlbyBsb2NhdGlvblxuICAgKiBAUmV0dXJuOiBFbnRpdHlSZXNwb25zZTxDb29yZGluYXRlPiBUaGUgYWNjb3VudCBsb2NhdGlvblxuICAgKi9cbiAgZ2V0RGVmYXVsdExvY2F0aW9uKGlkPzogc3RyaW5nKSB7XG4gICAgcmV0dXJuIHRoaXMucmVzdC5nZXQoYCR7dGhpcy5iYXNlVXJsfS8ke2lkfS9nZW9Mb2NhdGlvbmApO1xuICB9XG5cbiAgLyoqXG4gICAqIERlbGV0ZSBhY2NvdW50IGZyb20gdGhlIHN5c3RlbVxuICAgKiBUaGUgYWNjb3VudCBpcyBtb3ZlZCB0byBERUxFVEVEIG1vZGUgYW5kIHdpbGwgYmUgZGVsZXRlZCBhZnRlciA5MCBkYXlzXG4gICAqIE9ubHkgYWNjb3VudCBtYXJrZWQgYXMgU1VTUEVOREVEIGNhbiBiZSBkZWxldGVkXG4gICAqIEBSZXR1cm46IEFjdGlvblJlc3BvbnNlXG4gICAqL1xuICBkZWxldGUoaWQ/OiBzdHJpbmcpIHtcbiAgICByZXR1cm4gdGhpcy5yZXN0LmRlbGV0ZShgJHt0aGlzLmJhc2VVcmx9LyR7aWR9YCk7XG4gIH1cblxuICAvKipcbiAgICogRGVsZXRlIGFjY291bnQgaW1tZWRpYXRlbHkgd2l0aG91dCBhY2NvdW50IHN0YXR1cyByZXN0cmljdGlvbnNcbiAgICogQFJldHVybjogQWN0aW9uUmVzcG9uc2VcbiAgICovXG4gIHB1cmdlKGlkPzogc3RyaW5nKSB7XG4gICAgcmV0dXJuIHRoaXMucmVzdC5kZWxldGUoYCR7dGhpcy5iYXNlVXJsfS9wdXJnZS8ke2lkfWApO1xuICB9XG5cbiAgLyoqXG4gICAqIEdldCBzaW5nbGUgYWNjb3VudCBieSBpZFxuICAgKiBAUmV0dXJuOiBFbnRpdHlSZXNwb25zZTxBY2NvdW50PlxuICAgKi9cbiAgZ2V0KGlkPzogc3RyaW5nKSB7XG4gICAgcmV0dXJuIHRoaXMucmVzdC5nZXQoYCR7dGhpcy5iYXNlVXJsfS8ke2lkfWApO1xuICB9XG5cbiAgLyoqXG4gICAqIEdldCBhY2NvdW50cyBieSBsaXN0IG9mIGlkc1xuICAgKiBAUmV0dXJuOiBFbnRpdGllc1Jlc3BvbnNlPEFjY291bnQ+XG4gICAqL1xuICBsaXN0KGlkPzogc3RyaW5nKSB7XG4gICAgY29uc3QgcGFyYW1zID0gbmV3IEFycmF5KCk7XHRcdFxuICAgIGlmIChpZCAhPSBudWxsKSB7IHBhcmFtcy5wdXNoKGBpZD0ke2lkfWApOyB9XG5cblx0XHRyZXR1cm4gdGhpcy5yZXN0LmdldChgJHt0aGlzLmJhc2VVcmx9L2xpc3RgLCAuLi5wYXJhbXMpO1xuICB9XG5cbiAgLyoqXG4gICAqIEZpbmQgbGlzdCBvZiBhY2NvdW50cyBhbmQgZmlsdGVyXG4gICAqIEBSZXR1cm46IFF1ZXJ5UmVzcG9uc2U8QWNjb3VudD5cbiAgICovXG4gIGZpbmQoc2VhcmNoPzogc3RyaW5nLCB0eXBlPzogQWNjb3VudFR5cGVDb2RlLCBzdGF0dXM/OiBBY2NvdW50U3RhdHVzQ29kZSwgc29ydD86IHN0cmluZywgcGFnZT86IG51bWJlciwgcGFnZVNpemU/OiBudW1iZXIpIHtcbiAgICBjb25zdCBwYXJhbXMgPSBuZXcgQXJyYXkoKTtcdFx0XG4gICAgaWYgKHNlYXJjaCAhPSBudWxsKSB7IHBhcmFtcy5wdXNoKGBzZWFyY2g9JHtzZWFyY2h9YCk7IH1cbiAgICBpZiAodHlwZSAhPSBudWxsKSB7IHBhcmFtcy5wdXNoKGB0eXBlPSR7dHlwZX1gKTsgfVxuICAgIGlmIChzdGF0dXMgIT0gbnVsbCkgeyBwYXJhbXMucHVzaChgc3RhdHVzPSR7c3RhdHVzfWApOyB9XG4gICAgaWYgKHNvcnQgIT0gbnVsbCkgeyBwYXJhbXMucHVzaChgc29ydD0ke3NvcnR9YCk7IH1cbiAgICBpZiAocGFnZSAhPSBudWxsKSB7IHBhcmFtcy5wdXNoKGBwYWdlPSR7cGFnZX1gKTsgfVxuICAgIGlmIChwYWdlU2l6ZSAhPSBudWxsKSB7IHBhcmFtcy5wdXNoKGBwYWdlU2l6ZT0ke3BhZ2VTaXplfWApOyB9XG5cblx0XHRyZXR1cm4gdGhpcy5yZXN0LmdldChgJHt0aGlzLmJhc2VVcmx9L2AsIC4uLnBhcmFtcyk7XG4gIH1cblxuICAvKipcbiAgICogR2V0IGFjY291bnQgdHlwZXMgc3RhdGlzdGljcyBmb3IgYWxsIGFjY291bnRzIGluIHRoZSBzeXN0ZW1cbiAgICogQFJldHVybjogRW50aXRpZXNSZXNwb25zZTxBY2NvdW50VHlwZVN1bW1hcnk+XG4gICAqL1xuICBnZXRBY2NvdW50VHlwZVN0YXRpc3RpY3MoKSB7XG4gICAgcmV0dXJuIHRoaXMucmVzdC5nZXQoYCR7dGhpcy5iYXNlVXJsfS9zdGF0aXN0aWNzL3R5cGVgKTtcbiAgfVxuXG59XG4iXX0=