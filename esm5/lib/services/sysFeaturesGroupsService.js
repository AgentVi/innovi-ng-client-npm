/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Injectable, Inject } from '@angular/core';
import { RestUtil } from '../../utils/rest-util';
/**
 * Features groups services for system administrator only
 * \@RequestHeader X-API-KEY The key to identify the application (portal)
 * \@RequestHeader X-ACCESS-TOKEN The token to identify the logged-in user
 * \@ResourceGroup System Administrator
 */
var SysFeaturesGroupsService = /** @class */ (function () {
    /**
     * Class constructor
     */
    function SysFeaturesGroupsService(config, rest) {
        this.config = config;
        this.rest = rest;
        // URL to web api
        this.baseUrl = '/sys/features/groups';
        this.baseUrl = this.config.api + this.baseUrl;
    }
    /**
     * Create new features group
     * @Return: EntityResponse<FeaturesGroup>
     */
    /**
     * Create new features group
     * \@Return: EntityResponse<FeaturesGroup>
     * @param {?=} body
     * @return {?}
     */
    SysFeaturesGroupsService.prototype.create = /**
     * Create new features group
     * \@Return: EntityResponse<FeaturesGroup>
     * @param {?=} body
     * @return {?}
     */
    function (body) {
        return this.rest.post("" + this.baseUrl, JSON.stringify(body));
    };
    /**
     * Update features group
     * @Return: EntityResponse<FeaturesGroup>
     */
    /**
     * Update features group
     * \@Return: EntityResponse<FeaturesGroup>
     * @param {?=} id
     * @param {?=} body
     * @return {?}
     */
    SysFeaturesGroupsService.prototype.update = /**
     * Update features group
     * \@Return: EntityResponse<FeaturesGroup>
     * @param {?=} id
     * @param {?=} body
     * @return {?}
     */
    function (id, body) {
        return this.rest.put(this.baseUrl + "/" + id, JSON.stringify(body));
    };
    /**
     * Change features group name
     * @Return: EntityResponse<FeaturesGroup>
     */
    /**
     * Change features group name
     * \@Return: EntityResponse<FeaturesGroup>
     * @param {?=} id
     * @param {?=} body
     * @return {?}
     */
    SysFeaturesGroupsService.prototype.setName = /**
     * Change features group name
     * \@Return: EntityResponse<FeaturesGroup>
     * @param {?=} id
     * @param {?=} body
     * @return {?}
     */
    function (id, body) {
        return this.rest.put(this.baseUrl + "/" + id + "/name", JSON.stringify(body));
    };
    /**
     * Change features group features list
     * @Return: EntityResponse<FeaturesGroup>
     */
    /**
     * Change features group features list
     * \@Return: EntityResponse<FeaturesGroup>
     * @param {?=} id
     * @param {?=} body
     * @return {?}
     */
    SysFeaturesGroupsService.prototype.setFeatures = /**
     * Change features group features list
     * \@Return: EntityResponse<FeaturesGroup>
     * @param {?=} id
     * @param {?=} body
     * @return {?}
     */
    function (id, body) {
        return this.rest.put(this.baseUrl + "/" + id + "/features", JSON.stringify(body));
    };
    /**
     * Delete Feature from the system
     * @Return: ActionResponse
     */
    /**
     * Delete Feature from the system
     * \@Return: ActionResponse
     * @param {?=} id
     * @return {?}
     */
    SysFeaturesGroupsService.prototype.delete = /**
     * Delete Feature from the system
     * \@Return: ActionResponse
     * @param {?=} id
     * @return {?}
     */
    function (id) {
        return this.rest.delete(this.baseUrl + "/" + id);
    };
    /**
     * Get single features group by id
     * @Return: EntityResponse<FeaturesGroup>
     */
    /**
     * Get single features group by id
     * \@Return: EntityResponse<FeaturesGroup>
     * @param {?=} id
     * @return {?}
     */
    SysFeaturesGroupsService.prototype.get = /**
     * Get single features group by id
     * \@Return: EntityResponse<FeaturesGroup>
     * @param {?=} id
     * @return {?}
     */
    function (id) {
        return this.rest.get(this.baseUrl + "/" + id);
    };
    /**
     * Find features groups by filters
     * @Return: QueryResponse<FeaturesGroup>
     */
    /**
     * Find features groups by filters
     * \@Return: QueryResponse<FeaturesGroup>
     * @param {?=} search
     * @param {?=} sort
     * @return {?}
     */
    SysFeaturesGroupsService.prototype.find = /**
     * Find features groups by filters
     * \@Return: QueryResponse<FeaturesGroup>
     * @param {?=} search
     * @param {?=} sort
     * @return {?}
     */
    function (search, sort) {
        var _a;
        /** @type {?} */
        var params = new Array();
        if (search != null) {
            params.push("search=" + search);
        }
        if (sort != null) {
            params.push("sort=" + sort);
        }
        return (_a = this.rest).get.apply(_a, tslib_1.__spread(["" + this.baseUrl], params));
    };
    SysFeaturesGroupsService.decorators = [
        { type: Injectable }
    ];
    /** @nocollapse */
    SysFeaturesGroupsService.ctorParameters = function () { return [
        { type: undefined, decorators: [{ type: Inject, args: ['config',] }] },
        { type: RestUtil }
    ]; };
    return SysFeaturesGroupsService;
}());
export { SysFeaturesGroupsService };
if (false) {
    /**
     * @type {?}
     * @private
     */
    SysFeaturesGroupsService.prototype.baseUrl;
    /**
     * @type {?}
     * @private
     */
    SysFeaturesGroupsService.prototype.config;
    /**
     * @type {?}
     * @private
     */
    SysFeaturesGroupsService.prototype.rest;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3lzRmVhdHVyZXNHcm91cHNTZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGFnZW50dmkvbmctY29yZS1saWIvIiwic291cmNlcyI6WyJsaWIvc2VydmljZXMvc3lzRmVhdHVyZXNHcm91cHNTZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDbkQsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLHVCQUF1QixDQUFDOzs7Ozs7O0FBWWpEO0lBTUU7O09BRUc7SUFDSCxrQ0FBc0MsTUFBa0IsRUFBVSxJQUFjO1FBQTFDLFdBQU0sR0FBTixNQUFNLENBQVk7UUFBVSxTQUFJLEdBQUosSUFBSSxDQUFVOztRQUx4RSxZQUFPLEdBQUcsc0JBQXNCLENBQUM7UUFNdkMsSUFBSSxDQUFDLE9BQU8sR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDLEdBQUcsR0FBRyxJQUFJLENBQUMsT0FBTyxDQUFDO0lBQ2hELENBQUM7SUFHRDs7O09BR0c7Ozs7Ozs7SUFDSCx5Q0FBTTs7Ozs7O0lBQU4sVUFBTyxJQUFvQjtRQUN6QixPQUFPLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEtBQUcsSUFBSSxDQUFDLE9BQVMsRUFBRSxJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUM7SUFDakUsQ0FBQztJQUVEOzs7T0FHRzs7Ozs7Ozs7SUFDSCx5Q0FBTTs7Ozs7OztJQUFOLFVBQU8sRUFBVyxFQUFFLElBQW9CO1FBQ3RDLE9BQU8sSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUksSUFBSSxDQUFDLE9BQU8sU0FBSSxFQUFJLEVBQUUsSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDO0lBQ3RFLENBQUM7SUFFRDs7O09BR0c7Ozs7Ozs7O0lBQ0gsMENBQU87Ozs7Ozs7SUFBUCxVQUFRLEVBQVcsRUFBRSxJQUFhO1FBQ2hDLE9BQU8sSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUksSUFBSSxDQUFDLE9BQU8sU0FBSSxFQUFFLFVBQU8sRUFBRSxJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUM7SUFDM0UsQ0FBQztJQUVEOzs7T0FHRzs7Ozs7Ozs7SUFDSCw4Q0FBVzs7Ozs7OztJQUFYLFVBQVksRUFBVyxFQUFFLElBQWU7UUFDdEMsT0FBTyxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBSSxJQUFJLENBQUMsT0FBTyxTQUFJLEVBQUUsY0FBVyxFQUFFLElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQztJQUMvRSxDQUFDO0lBRUQ7OztPQUdHOzs7Ozs7O0lBQ0gseUNBQU07Ozs7OztJQUFOLFVBQU8sRUFBVztRQUNoQixPQUFPLElBQUksQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFJLElBQUksQ0FBQyxPQUFPLFNBQUksRUFBSSxDQUFDLENBQUM7SUFDbkQsQ0FBQztJQUVEOzs7T0FHRzs7Ozs7OztJQUNILHNDQUFHOzs7Ozs7SUFBSCxVQUFJLEVBQVc7UUFDYixPQUFPLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFJLElBQUksQ0FBQyxPQUFPLFNBQUksRUFBSSxDQUFDLENBQUM7SUFDaEQsQ0FBQztJQUVEOzs7T0FHRzs7Ozs7Ozs7SUFDSCx1Q0FBSTs7Ozs7OztJQUFKLFVBQUssTUFBZSxFQUFFLElBQWE7OztZQUMzQixNQUFNLEdBQUcsSUFBSSxLQUFLLEVBQUU7UUFDMUIsSUFBSSxNQUFNLElBQUksSUFBSSxFQUFFO1lBQUUsTUFBTSxDQUFDLElBQUksQ0FBQyxZQUFVLE1BQVEsQ0FBQyxDQUFDO1NBQUU7UUFDeEQsSUFBSSxJQUFJLElBQUksSUFBSSxFQUFFO1lBQUUsTUFBTSxDQUFDLElBQUksQ0FBQyxVQUFRLElBQU0sQ0FBQyxDQUFDO1NBQUU7UUFFcEQsT0FBTyxDQUFBLEtBQUEsSUFBSSxDQUFDLElBQUksQ0FBQSxDQUFDLEdBQUcsNkJBQUMsS0FBRyxJQUFJLENBQUMsT0FBUyxHQUFLLE1BQU0sR0FBRTtJQUNuRCxDQUFDOztnQkF4RUYsVUFBVTs7OztnREFTSSxNQUFNLFNBQUMsUUFBUTtnQkFyQnJCLFFBQVE7O0lBc0ZqQiwrQkFBQztDQUFBLEFBMUVELElBMEVDO1NBekVZLHdCQUF3Qjs7Ozs7O0lBR25DLDJDQUF5Qzs7Ozs7SUFLN0IsMENBQTRDOzs7OztJQUFFLHdDQUFzQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUsIEluamVjdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgUmVzdFV0aWwgfSBmcm9tICcuLi8uLi91dGlscy9yZXN0LXV0aWwnO1xuaW1wb3J0IHsgQ29yZUNvbmZpZyB9IGZyb20gJy4uLy4uL2NvcmUtbGliLm1vZHVsZSc7XG5cbmltcG9ydCB7IEZlYXR1cmVzR3JvdXAgfSBmcm9tICcuLi9lbnRpdGllcy9GZWF0dXJlc0dyb3VwJztcblxuXG4vKipcbiAqIEZlYXR1cmVzIGdyb3VwcyBzZXJ2aWNlcyBmb3Igc3lzdGVtIGFkbWluaXN0cmF0b3Igb25seVxuICogQFJlcXVlc3RIZWFkZXIgWC1BUEktS0VZIFRoZSBrZXkgdG8gaWRlbnRpZnkgdGhlIGFwcGxpY2F0aW9uIChwb3J0YWwpXG4gKiBAUmVxdWVzdEhlYWRlciBYLUFDQ0VTUy1UT0tFTiBUaGUgdG9rZW4gdG8gaWRlbnRpZnkgdGhlIGxvZ2dlZC1pbiB1c2VyXG4gKiBAUmVzb3VyY2VHcm91cCBTeXN0ZW0gQWRtaW5pc3RyYXRvciBcbiAqL1xuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIFN5c0ZlYXR1cmVzR3JvdXBzU2VydmljZSB7XG5cbiAgLy8gVVJMIHRvIHdlYiBhcGlcbiAgcHJpdmF0ZSBiYXNlVXJsID0gJy9zeXMvZmVhdHVyZXMvZ3JvdXBzJztcblxuICAvKipcbiAgICogQ2xhc3MgY29uc3RydWN0b3JcbiAgICovXG4gIGNvbnN0cnVjdG9yKEBJbmplY3QoJ2NvbmZpZycpIHByaXZhdGUgY29uZmlnOiBDb3JlQ29uZmlnLCBwcml2YXRlIHJlc3Q6IFJlc3RVdGlsKSB7XG4gICAgdGhpcy5iYXNlVXJsID0gdGhpcy5jb25maWcuYXBpICsgdGhpcy5iYXNlVXJsO1xuICB9XG5cblxuICAvKipcbiAgICogQ3JlYXRlIG5ldyBmZWF0dXJlcyBncm91cFxuICAgKiBAUmV0dXJuOiBFbnRpdHlSZXNwb25zZTxGZWF0dXJlc0dyb3VwPlxuICAgKi9cbiAgY3JlYXRlKGJvZHk/OiBGZWF0dXJlc0dyb3VwKSB7XG4gICAgcmV0dXJuIHRoaXMucmVzdC5wb3N0KGAke3RoaXMuYmFzZVVybH1gLCBKU09OLnN0cmluZ2lmeShib2R5KSk7XG4gIH1cblxuICAvKipcbiAgICogVXBkYXRlIGZlYXR1cmVzIGdyb3VwXG4gICAqIEBSZXR1cm46IEVudGl0eVJlc3BvbnNlPEZlYXR1cmVzR3JvdXA+XG4gICAqL1xuICB1cGRhdGUoaWQ/OiBzdHJpbmcsIGJvZHk/OiBGZWF0dXJlc0dyb3VwKSB7XG4gICAgcmV0dXJuIHRoaXMucmVzdC5wdXQoYCR7dGhpcy5iYXNlVXJsfS8ke2lkfWAsIEpTT04uc3RyaW5naWZ5KGJvZHkpKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBDaGFuZ2UgZmVhdHVyZXMgZ3JvdXAgbmFtZVxuICAgKiBAUmV0dXJuOiBFbnRpdHlSZXNwb25zZTxGZWF0dXJlc0dyb3VwPlxuICAgKi9cbiAgc2V0TmFtZShpZD86IHN0cmluZywgYm9keT86IHN0cmluZykge1xuICAgIHJldHVybiB0aGlzLnJlc3QucHV0KGAke3RoaXMuYmFzZVVybH0vJHtpZH0vbmFtZWAsIEpTT04uc3RyaW5naWZ5KGJvZHkpKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBDaGFuZ2UgZmVhdHVyZXMgZ3JvdXAgZmVhdHVyZXMgbGlzdFxuICAgKiBAUmV0dXJuOiBFbnRpdHlSZXNwb25zZTxGZWF0dXJlc0dyb3VwPlxuICAgKi9cbiAgc2V0RmVhdHVyZXMoaWQ/OiBzdHJpbmcsIGJvZHk/OiBzdHJpbmdbXSkge1xuICAgIHJldHVybiB0aGlzLnJlc3QucHV0KGAke3RoaXMuYmFzZVVybH0vJHtpZH0vZmVhdHVyZXNgLCBKU09OLnN0cmluZ2lmeShib2R5KSk7XG4gIH1cblxuICAvKipcbiAgICogRGVsZXRlIEZlYXR1cmUgZnJvbSB0aGUgc3lzdGVtXG4gICAqIEBSZXR1cm46IEFjdGlvblJlc3BvbnNlXG4gICAqL1xuICBkZWxldGUoaWQ/OiBzdHJpbmcpIHtcbiAgICByZXR1cm4gdGhpcy5yZXN0LmRlbGV0ZShgJHt0aGlzLmJhc2VVcmx9LyR7aWR9YCk7XG4gIH1cblxuICAvKipcbiAgICogR2V0IHNpbmdsZSBmZWF0dXJlcyBncm91cCBieSBpZFxuICAgKiBAUmV0dXJuOiBFbnRpdHlSZXNwb25zZTxGZWF0dXJlc0dyb3VwPlxuICAgKi9cbiAgZ2V0KGlkPzogc3RyaW5nKSB7XG4gICAgcmV0dXJuIHRoaXMucmVzdC5nZXQoYCR7dGhpcy5iYXNlVXJsfS8ke2lkfWApO1xuICB9XG5cbiAgLyoqXG4gICAqIEZpbmQgZmVhdHVyZXMgZ3JvdXBzIGJ5IGZpbHRlcnNcbiAgICogQFJldHVybjogUXVlcnlSZXNwb25zZTxGZWF0dXJlc0dyb3VwPlxuICAgKi9cbiAgZmluZChzZWFyY2g/OiBzdHJpbmcsIHNvcnQ/OiBzdHJpbmcpIHtcbiAgICBjb25zdCBwYXJhbXMgPSBuZXcgQXJyYXkoKTtcdFx0XG4gICAgaWYgKHNlYXJjaCAhPSBudWxsKSB7IHBhcmFtcy5wdXNoKGBzZWFyY2g9JHtzZWFyY2h9YCk7IH1cbiAgICBpZiAoc29ydCAhPSBudWxsKSB7IHBhcmFtcy5wdXNoKGBzb3J0PSR7c29ydH1gKTsgfVxuXG5cdFx0cmV0dXJuIHRoaXMucmVzdC5nZXQoYCR7dGhpcy5iYXNlVXJsfWAsIC4uLnBhcmFtcyk7XG4gIH1cblxufVxuIl19