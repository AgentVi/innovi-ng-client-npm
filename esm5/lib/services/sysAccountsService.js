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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3lzQWNjb3VudHNTZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGFnZW50dmkvbmctY29yZS1saWIvIiwic291cmNlcyI6WyJsaWIvc2VydmljZXMvc3lzQWNjb3VudHNTZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDbkQsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLHVCQUF1QixDQUFDOzs7Ozs7QUFjakQ7SUFNRTs7T0FFRztJQUNILDRCQUFzQyxNQUFrQixFQUFVLElBQWM7UUFBMUMsV0FBTSxHQUFOLE1BQU0sQ0FBWTtRQUFVLFNBQUksR0FBSixJQUFJLENBQVU7O1FBTHhFLFlBQU8sR0FBRyxlQUFlLENBQUM7UUFNaEMsSUFBSSxDQUFDLE9BQU8sR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDLEdBQUcsR0FBRyxJQUFJLENBQUMsT0FBTyxDQUFDO0lBQ2hELENBQUM7SUFHRDs7O09BR0c7Ozs7Ozs7SUFDSCxtQ0FBTTs7Ozs7O0lBQU4sVUFBTyxJQUFjO1FBQ25CLE9BQU8sSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUksSUFBSSxDQUFDLE9BQU8sTUFBRyxFQUFFLElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQztJQUNsRSxDQUFDO0lBRUQ7OztPQUdHOzs7Ozs7OztJQUNILG1DQUFNOzs7Ozs7O0lBQU4sVUFBTyxFQUFXLEVBQUUsSUFBYztRQUNoQyxPQUFPLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFJLElBQUksQ0FBQyxPQUFPLFNBQUksRUFBSSxFQUFFLElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQztJQUN2RSxDQUFDO0lBRUQ7OztPQUdHOzs7Ozs7OztJQUNILHVDQUFVOzs7Ozs7O0lBQVYsVUFBVyxFQUFXLEVBQUUsSUFBYTtRQUNuQyxPQUFPLElBQUksQ0FB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Ozs7SUFDSCxxREFBd0I7Ozs7O0lBQXhCO1FBQ0UsT0FBTyxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBSSxJQUFJLENBQUMsT0FBTyxxQkFBa0IsQ0FBQyxDQUFDO0lBQzFELENBQUM7O2dCQXBKRixVQUFVOzs7O2dEQVNJLE1BQU0sU0FBQyxRQUFRO2dCQXZCckIsUUFBUTs7SUFvS2pCLHlCQUFDO0NBQUEsQUF0SkQsSUFzSkM7U0FySlksa0JBQWtCOzs7Ozs7SUFHN0IscUNBQWtDOzs7OztJQUt0QixvQ0FBNEM7Ozs7O0lBQUUsa0NBQXNCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSwgSW5qZWN0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBSZXN0VXRpbCB9IGZyb20gJy4uLy4uL3V0aWxzL3Jlc3QtdXRpbCc7XG5pbXBvcnQgeyBDb3JlQ29uZmlnIH0gZnJvbSAnLi4vLi4vY29yZS1saWIubW9kdWxlJztcblxuaW1wb3J0IHsgQ29vcmRpbmF0ZSB9IGZyb20gJy4uL2NvbW1vbi9Db29yZGluYXRlJztcbmltcG9ydCB7IEFjY291bnQgfSBmcm9tICcuLi9lbnRpdGllcy9BY2NvdW50JztcbmltcG9ydCB7IEFjY291bnRUeXBlQ29kZSB9IGZyb20gJy4uL2VudW1zL0FjY291bnRUeXBlQ29kZSc7XG5pbXBvcnQgeyBBY2NvdW50U3RhdHVzQ29kZSB9IGZyb20gJy4uL2VudW1zL0FjY291bnRTdGF0dXNDb2RlJztcblxuXG4vKipcbiAqIExpc3Qgb2YgYWNjb3VudCByZWxhdGVkIGFjdGlvbnMgZm9yIHN5c3RlbSBhZG1pbmlzdHJhdG9yIG9ubHlcbiAqIEBSZXF1ZXN0SGVhZGVyIFgtQVBJLUtFWSBUaGUga2V5IHRvIGlkZW50aWZ5IHRoZSBhcHBsaWNhdGlvbiAoY29uc29sZSlcbiAqIEBSZXF1ZXN0SGVhZGVyIFgtQUNDRVNTLVRPS0VOIFRoZSB0b2tlbiB0byBpZGVudGlmeSB0aGUgbG9nZ2VkLWluIHVzZXIgXG4gKi9cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBTeXNBY2NvdW50c1NlcnZpY2Uge1xuXG4gIC8vIFVSTCB0byB3ZWIgYXBpXG4gIHByaXZhdGUgYmFzZVVybCA9ICcvc3lzL2FjY291bnRzJztcblxuICAvKipcbiAgICogQ2xhc3MgY29uc3RydWN0b3JcbiAgICovXG4gIGNvbnN0cnVjdG9yKEBJbmplY3QoJ2NvbmZpZycpIHByaXZhdGUgY29uZmlnOiBDb3JlQ29uZmlnLCBwcml2YXRlIHJlc3Q6IFJlc3RVdGlsKSB7XG4gICAgdGhpcy5iYXNlVXJsID0gdGhpcy5jb25maWcuYXBpICsgdGhpcy5iYXNlVXJsO1xuICB9XG5cblxuICAvKipcbiAgICogQ3JlYXRlIG5ldyBhY2NvdW50XG4gICAqIEBSZXR1cm46IEVudGl0eVJlc3BvbnNlPEFjY291bnQ+XG4gICAqL1xuICBjcmVhdGUoYm9keT86IEFjY291bnQpIHtcbiAgICByZXR1cm4gdGhpcy5yZXN0LnBvc3QoYCR7dGhpcy5iYXNlVXJsfS9gLCBKU09OLnN0cmluZ2lmeShib2R5KSk7XG4gIH1cblxuICAvKipcbiAgICogVXBkYXRlIGV4aXN0aW5nIGFjY291bnQgaW4gdGhlIHN5c3RlbVxuICAgKiBAUmV0dXJuOiBFbnRpdHlSZXNwb25zZTxBY2NvdW50PlxuICAgKi9cbiAgdXBkYXRlKGlkPzogc3RyaW5nLCBib2R5PzogQWNjb3VudCkge1xuICAgIHJldHVybiB0aGlzLnJlc3QucG9zdChgJHt0aGlzLmJhc2VVcmx9LyR7aWR9YCwgSlNPTi5zdHJpbmdpZnkoYm9keSkpO1xuICB9XG5cbiAgLyoqXG4gICAqIFVwZGF0ZSBhY2NvdW50IG5hbWVcbiAgICogQFJldHVybjogRW50aXR5UmVzcG9uc2U8QWNjb3VudD5cbiAgICovXG4gIGNoYW5nZU5hbWUoaWQ/OiBzdHJpbmcsIGJvZHk/OiBzdHJpbmcpIHtcbiAgICByZXR1cm4gdGhpcy5yZXN0LnB1dChgJHt0aGlzLmJhc2VVcmx9LyR7aWR9L25hbWVgLCBKU09OLnN0cmluZ2lmeShib2R5KSk7XG4gIH1cblxuICAvKipcbiAgICogQ2hhbmdlIGFjY291bnQgdHlwZVxuICAgKiBAUmV0dXJuOiBFbnRpdHlSZXNwb25zZTxVc2VyPlxuICAgKi9cbiAgY2hhbmdlVHlwZShpZD86IHN0cmluZywgdHlwZT86IEFjY291bnRUeXBlQ29kZSkge1xuICAgIHJldHVybiB0aGlzLnJlc3QucHV0KGAke3RoaXMuYmFzZVVybH0vJHtpZH0vdHlwZS8ke3R5cGV9YCwgbnVsbCk7XG4gIH1cblxuICAvKipcbiAgICogQ2hhbmdlIGFjY291bnQgc3RhdHVzXG4gICAqIEBSZXR1cm46IEVudGl0eVJlc3BvbnNlPEFjY291bnQ+XG4gICAqL1xuICBjaGFuZ2VTdGF0dXMoaWQ/OiBzdHJpbmcsIHN0YXR1cz86IEFjY291bnRTdGF0dXNDb2RlKSB7XG4gICAgcmV0dXJuIHRoaXMucmVzdC5wdXQoYCR7dGhpcy5iYXNlVXJsfS8ke2lkfS9zdGF0dXMvJHtzdGF0dXN9YCwgbnVsbCk7XG4gIH1cblxuICAvKipcbiAgICogQ2hhbmdlIGFjY291bnQgZ3JvdXBzXG4gICAqIEBSZXR1cm46IEVudGl0eVJlc3BvbnNlPEFjY291bnQ+XG4gICAqL1xuICBjaGFuZ2VHcm91cHMoaWQ/OiBzdHJpbmcsIGdyb3VwSWQ/OiBzdHJpbmcpIHtcbiAgICBjb25zdCBwYXJhbXMgPSBuZXcgQXJyYXkoKTtcdFx0XG4gICAgaWYgKGdyb3VwSWQgIT0gbnVsbCkgeyBwYXJhbXMucHVzaChgZ3JvdXBJZD0ke2dyb3VwSWR9YCk7IH1cblxuXHRcdHJldHVybiB0aGlzLnJlc3QucHV0KGAke3RoaXMuYmFzZVVybH0vJHtpZH0vZ3JvdXBzL3tncm91cHN9YCwgbnVsbCwgLi4ucGFyYW1zKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBDaGFuZ2UgYWNjb3VudCBnZW8tbG9jYXRpb24gKGNlbnRlcilcbiAgICogQFJldHVybjogRW50aXR5UmVzcG9uc2U8QWNjb3VudD4gVGhlIGNoYW5nZWQgYWNjb3VudFxuICAgKi9cbiAgY2hhbmdlR2VvTG9jYXRpb24oaWQ/OiBzdHJpbmcsIGJvZHk/OiBDb29yZGluYXRlKSB7XG4gICAgcmV0dXJuIHRoaXMucmVzdC5wdXQoYCR7dGhpcy5iYXNlVXJsfS8ke2lkfS9nZW9Mb2NhdGlvbmAsIEpTT04uc3RyaW5naWZ5KGJvZHkpKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBDaGFuZ2UgYWNjb3VudCBnZW8gYXJlYVxuICAgKiBAUmV0dXJuOiBFbnRpdHlSZXNwb25zZTxBY2NvdW50PiBUaGUgY2hhbmdlZCBhY2NvdW50XG4gICAqL1xuICBjaGFuZ2VHZW9BcmVhKGlkPzogc3RyaW5nLCBib2R5PzogQ29vcmRpbmF0ZVtdKSB7XG4gICAgcmV0dXJuIHRoaXMucmVzdC5wdXQoYCR7dGhpcy5iYXNlVXJsfS8ke2lkfS9nZW9BcmVhYCwgSlNPTi5zdHJpbmdpZnkoYm9keSkpO1xuICB9XG5cbiAgLyoqXG4gICAqIEdldCBkZWZhdWx0IGdlbyBsb2NhdGlvblxuICAgKiBAUmV0dXJuOiBFbnRpdHlSZXNwb25zZTxDb29yZGluYXRlPiBUaGUgYWNjb3VudCBsb2NhdGlvblxuICAgKi9cbiAgZ2V0RGVmYXVsdExvY2F0aW9uKGlkPzogc3RyaW5nKSB7XG4gICAgcmV0dXJuIHRoaXMucmVzdC5nZXQoYCR7dGhpcy5iYXNlVXJsfS8ke2lkfS9nZW9Mb2NhdGlvbmApO1xuICB9XG5cbiAgLyoqXG4gICAqIERlbGV0ZSBhY2NvdW50IGZyb20gdGhlIHN5c3RlbVxuICAgKiBUaGUgYWNjb3VudCBpcyBtb3ZlZCB0byBERUxFVEVEIG1vZGUgYW5kIHdpbGwgYmUgZGVsZXRlZCBhZnRlciA5MCBkYXlzXG4gICAqIE9ubHkgYWNjb3VudCBtYXJrZWQgYXMgU1VTUEVOREVEIGNhbiBiZSBkZWxldGVkXG4gICAqIEBSZXR1cm46IEFjdGlvblJlc3BvbnNlXG4gICAqL1xuICBkZWxldGUoaWQ/OiBzdHJpbmcpIHtcbiAgICByZXR1cm4gdGhpcy5yZXN0LmRlbGV0ZShgJHt0aGlzLmJhc2VVcmx9LyR7aWR9YCk7XG4gIH1cblxuICAvKipcbiAgICogRGVsZXRlIGFjY291bnQgaW1tZWRpYXRlbHkgd2l0aG91dCBhY2NvdW50IHN0YXR1cyByZXN0cmljdGlvbnNcbiAgICogQFJldHVybjogQWN0aW9uUmVzcG9uc2VcbiAgICovXG4gIHB1cmdlKGlkPzogc3RyaW5nKSB7XG4gICAgcmV0dXJuIHRoaXMucmVzdC5kZWxldGUoYCR7dGhpcy5iYXNlVXJsfS9wdXJnZS8ke2lkfWApO1xuICB9XG5cbiAgLyoqXG4gICAqIEdldCBzaW5nbGUgYWNjb3VudCBieSBpZFxuICAgKiBAUmV0dXJuOiBFbnRpdHlSZXNwb25zZTxBY2NvdW50PlxuICAgKi9cbiAgZ2V0KGlkPzogc3RyaW5nKSB7XG4gICAgcmV0dXJuIHRoaXMucmVzdC5nZXQoYCR7dGhpcy5iYXNlVXJsfS8ke2lkfWApO1xuICB9XG5cbiAgLyoqXG4gICAqIEdldCBhY2NvdW50cyBieSBsaXN0IG9mIGlkc1xuICAgKiBAUmV0dXJuOiBFbnRpdGllc1Jlc3BvbnNlPEFjY291bnQ+XG4gICAqL1xuICBsaXN0KGlkPzogc3RyaW5nKSB7XG4gICAgY29uc3QgcGFyYW1zID0gbmV3IEFycmF5KCk7XHRcdFxuICAgIGlmIChpZCAhPSBudWxsKSB7IHBhcmFtcy5wdXNoKGBpZD0ke2lkfWApOyB9XG5cblx0XHRyZXR1cm4gdGhpcy5yZXN0LmdldChgJHt0aGlzLmJhc2VVcmx9L2xpc3RgLCAuLi5wYXJhbXMpO1xuICB9XG5cbiAgLyoqXG4gICAqIEZpbmQgbGlzdCBvZiBhY2NvdW50cyBhbmQgZmlsdGVyXG4gICAqIEBSZXR1cm46IFF1ZXJ5UmVzcG9uc2U8QWNjb3VudD5cbiAgICovXG4gIGZpbmQoc2VhcmNoPzogc3RyaW5nLCB0eXBlPzogQWNjb3VudFR5cGVDb2RlLCBzdGF0dXM/OiBBY2NvdW50U3RhdHVzQ29kZSwgc29ydD86IHN0cmluZywgcGFnZT86IG51bWJlciwgcGFnZVNpemU/OiBudW1iZXIpIHtcbiAgICBjb25zdCBwYXJhbXMgPSBuZXcgQXJyYXkoKTtcdFx0XG4gICAgaWYgKHNlYXJjaCAhPSBudWxsKSB7IHBhcmFtcy5wdXNoKGBzZWFyY2g9JHtzZWFyY2h9YCk7IH1cbiAgICBpZiAodHlwZSAhPSBudWxsKSB7IHBhcmFtcy5wdXNoKGB0eXBlPSR7dHlwZX1gKTsgfVxuICAgIGlmIChzdGF0dXMgIT0gbnVsbCkgeyBwYXJhbXMucHVzaChgc3RhdHVzPSR7c3RhdHVzfWApOyB9XG4gICAgaWYgKHNvcnQgIT0gbnVsbCkgeyBwYXJhbXMucHVzaChgc29ydD0ke3NvcnR9YCk7IH1cbiAgICBpZiAocGFnZSAhPSBudWxsKSB7IHBhcmFtcy5wdXNoKGBwYWdlPSR7cGFnZX1gKTsgfVxuICAgIGlmIChwYWdlU2l6ZSAhPSBudWxsKSB7IHBhcmFtcy5wdXNoKGBwYWdlU2l6ZT0ke3BhZ2VTaXplfWApOyB9XG5cblx0XHRyZXR1cm4gdGhpcy5yZXN0LmdldChgJHt0aGlzLmJhc2VVcmx9L2AsIC4uLnBhcmFtcyk7XG4gIH1cblxuICAvKipcbiAgICogR2V0IGFjY291bnQgdHlwZXMgc3RhdGlzdGljcyBmb3IgYWxsIGFjY291bnRzIGluIHRoZSBzeXN0ZW1cbiAgICogQFJldHVybjogRW50aXRpZXNSZXNwb25zZTxBY2NvdW50VHlwZVN1bW1hcnk+XG4gICAqL1xuICBnZXRBY2NvdW50VHlwZVN0YXRpc3RpY3MoKSB7XG4gICAgcmV0dXJuIHRoaXMucmVzdC5nZXQoYCR7dGhpcy5iYXNlVXJsfS9zdGF0aXN0aWNzL3R5cGVgKTtcbiAgfVxuXG59XG4iXX0=