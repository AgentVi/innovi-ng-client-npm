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
        return this.rest.post("" + this.baseUrl, typeof body === 'object' ? JSON.stringify(body) : body);
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
        return this.rest.put(this.baseUrl + "/" + id, typeof body === 'object' ? JSON.stringify(body) : body);
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
        return this.rest.put(this.baseUrl + "/" + id + "/name", typeof body === 'object' ? JSON.stringify(body) : body);
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
        return this.rest.put(this.baseUrl + "/" + id + "/features", typeof body === 'object' ? JSON.stringify(body) : body);
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3lzRmVhdHVyZXNHcm91cHNTZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGFnZW50dmkvbmctY29yZS1saWIvIiwic291cmNlcyI6WyJsaWIvc2VydmljZXMvc3lzRmVhdHVyZXNHcm91cHNTZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDbkQsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLHVCQUF1QixDQUFDOzs7Ozs7QUFXakQ7SUFNRTs7T0FFRztJQUNILGtDQUFzQyxNQUFrQixFQUFVLElBQWM7UUFBMUMsV0FBTSxHQUFOLE1BQU0sQ0FBWTtRQUFVLFNBQUksR0FBSixJQUFJLENBQVU7O1FBTHhFLFlBQU8sR0FBRyxzQkFBc0IsQ0FBQztRQU12QyxJQUFJLENBQUMsT0FBTyxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUMsR0FBRyxHQUFHLElBQUksQ0FBQyxPQUFPLENBQUM7SUFDaEQsQ0FBQztJQUdEOzs7T0FHRzs7Ozs7OztJQUNILHlDQUFNOzs7Ozs7SUFBTixVQUFPLElBQW9CO1FBQ3pCLE9BQU8sSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsS0FBRyxJQUFJLENBQUMsT0FBUyxFQUFFLE9BQU8sSUFBSSxLQUFLLFFBQVEsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDbkcsQ0FBQztJQUVEOzs7T0FHRzs7Ozs7Ozs7SUFDSCx5Q0FBTTs7Ozs7OztJQUFOLFVBQU8sRUFBVyxFQUFFLElBQW9CO1FBQ3RDLE9BQU8sSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUksSUFBSSxDQUFDLE9BQU8sU0FBSSxFQUFJLEVBQUUsT0FBTyxJQUFJLEtBQUssUUFBUSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUN4RyxDQUFDO0lBRUQ7OztPQUdHOzs7Ozs7OztJQUNILDBDQUFPOzs7Ozs7O0lBQVAsVUFBUSxFQUFXLEVBQUUsSUFBYTtRQUNoQyxPQUFPLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFJLElBQUksQ0FBQyxPQUFPLFNBQUksRUFBRSxVQUFPLEVBQUUsT0FBTyxJQUFJLEtBQUssUUFBUSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUM3RyxDQUFDO0lBRUQ7OztPQUdHOzs7Ozs7OztJQUNILDhDQUFXOzs7Ozs7O0lBQVgsVUFBWSxFQUFXLEVBQUUsSUFBZTtRQUN0QyxPQUFPLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFJLElBQUksQ0FBQyxPQUFPLFNBQUksRUFBRSxjQUFXLEVBQUUsT0FBTyxJQUFJLEtBQUssUUFBUSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUNqSCxDQUFDO0lBRUQ7OztPQUdHOzs7Ozs7O0lBQ0gseUNBQU07Ozs7OztJQUFOLFVBQU8sRUFBVztRQUNoQixPQUFPLElBQUksQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFJLElBQUksQ0FBQyxPQUFPLFNBQUksRUFBSSxDQUFDLENBQUM7SUFDbkQsQ0FBQztJQUVEOzs7T0FHRzs7Ozs7OztJQUNILHNDQUFHOzs7Ozs7SUFBSCxVQUFJLEVBQVc7UUFDYixPQUFPLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFJLElBQUksQ0FBQyxPQUFPLFNBQUksRUFBSSxDQUFDLENBQUM7SUFDaEQsQ0FBQztJQUVEOzs7T0FHRzs7Ozs7Ozs7SUFDSCx1Q0FBSTs7Ozs7OztJQUFKLFVBQUssTUFBZSxFQUFFLElBQWE7OztZQUMzQixNQUFNLEdBQUcsSUFBSSxLQUFLLEVBQUU7UUFDMUIsSUFBSSxNQUFNLElBQUksSUFBSSxFQUFFO1lBQUUsTUFBTSxDQUFDLElBQUksQ0FBQyxZQUFVLE1BQVEsQ0FBQyxDQUFDO1NBQUU7UUFDeEQsSUFBSSxJQUFJLElBQUksSUFBSSxFQUFFO1lBQUUsTUFBTSxDQUFDLElBQUksQ0FBQyxVQUFRLElBQU0sQ0FBQyxDQUFDO1NBQUU7UUFFcEQsT0FBTyxDQUFBLEtBQUEsSUFBSSxDQUFDLElBQUksQ0FBQSxDQUFDLEdBQUcsNkJBQUMsS0FBRyxJQUFJLENBQUMsT0FBUyxHQUFLLE1BQU0sR0FBRTtJQUNuRCxDQUFDOztnQkF4RUYsVUFBVTs7OztnREFTSSxNQUFNLFNBQUMsUUFBUTtnQkFwQnJCLFFBQVE7O0lBcUZqQiwrQkFBQztDQUFBLEFBMUVELElBMEVDO1NBekVZLHdCQUF3Qjs7Ozs7O0lBR25DLDJDQUF5Qzs7Ozs7SUFLN0IsMENBQTRDOzs7OztJQUFFLHdDQUFzQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUsIEluamVjdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgUmVzdFV0aWwgfSBmcm9tICcuLi8uLi91dGlscy9yZXN0LXV0aWwnO1xuaW1wb3J0IHsgQ29yZUNvbmZpZyB9IGZyb20gJy4uLy4uL2NvcmUtY29uZmlnJztcblxuaW1wb3J0IHsgRmVhdHVyZXNHcm91cCB9IGZyb20gJy4uL2VudGl0aWVzL0ZlYXR1cmVzR3JvdXAnO1xuXG5cbi8qKlxuICogRmVhdHVyZXMgZ3JvdXBzIHNlcnZpY2VzIGZvciBzeXN0ZW0gYWRtaW5pc3RyYXRvciBvbmx5XG4gKiBAUmVxdWVzdEhlYWRlciBYLUFQSS1LRVkgVGhlIGtleSB0byBpZGVudGlmeSB0aGUgYXBwbGljYXRpb24gKHBvcnRhbClcbiAqIEBSZXF1ZXN0SGVhZGVyIFgtQUNDRVNTLVRPS0VOIFRoZSB0b2tlbiB0byBpZGVudGlmeSB0aGUgbG9nZ2VkLWluIHVzZXIgXG4gKi9cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBTeXNGZWF0dXJlc0dyb3Vwc1NlcnZpY2Uge1xuXG4gIC8vIFVSTCB0byB3ZWIgYXBpXG4gIHByaXZhdGUgYmFzZVVybCA9ICcvc3lzL2ZlYXR1cmVzL2dyb3Vwcyc7XG5cbiAgLyoqXG4gICAqIENsYXNzIGNvbnN0cnVjdG9yXG4gICAqL1xuICBjb25zdHJ1Y3RvcihASW5qZWN0KCdjb25maWcnKSBwcml2YXRlIGNvbmZpZzogQ29yZUNvbmZpZywgcHJpdmF0ZSByZXN0OiBSZXN0VXRpbCkge1xuICAgIHRoaXMuYmFzZVVybCA9IHRoaXMuY29uZmlnLmFwaSArIHRoaXMuYmFzZVVybDtcbiAgfVxuXG5cbiAgLyoqXG4gICAqIENyZWF0ZSBuZXcgZmVhdHVyZXMgZ3JvdXBcbiAgICogQFJldHVybjogRW50aXR5UmVzcG9uc2U8RmVhdHVyZXNHcm91cD5cbiAgICovXG4gIGNyZWF0ZShib2R5PzogRmVhdHVyZXNHcm91cCkge1xuICAgIHJldHVybiB0aGlzLnJlc3QucG9zdChgJHt0aGlzLmJhc2VVcmx9YCwgdHlwZW9mIGJvZHkgPT09ICdvYmplY3QnID8gSlNPTi5zdHJpbmdpZnkoYm9keSkgOiBib2R5KTtcbiAgfVxuXG4gIC8qKlxuICAgKiBVcGRhdGUgZmVhdHVyZXMgZ3JvdXBcbiAgICogQFJldHVybjogRW50aXR5UmVzcG9uc2U8RmVhdHVyZXNHcm91cD5cbiAgICovXG4gIHVwZGF0ZShpZD86IHN0cmluZywgYm9keT86IEZlYXR1cmVzR3JvdXApIHtcbiAgICByZXR1cm4gdGhpcy5yZXN0LnB1dChgJHt0aGlzLmJhc2VVcmx9LyR7aWR9YCwgdHlwZW9mIGJvZHkgPT09ICdvYmplY3QnID8gSlNPTi5zdHJpbmdpZnkoYm9keSkgOiBib2R5KTtcbiAgfVxuXG4gIC8qKlxuICAgKiBDaGFuZ2UgZmVhdHVyZXMgZ3JvdXAgbmFtZVxuICAgKiBAUmV0dXJuOiBFbnRpdHlSZXNwb25zZTxGZWF0dXJlc0dyb3VwPlxuICAgKi9cbiAgc2V0TmFtZShpZD86IHN0cmluZywgYm9keT86IHN0cmluZykge1xuICAgIHJldHVybiB0aGlzLnJlc3QucHV0KGAke3RoaXMuYmFzZVVybH0vJHtpZH0vbmFtZWAsIHR5cGVvZiBib2R5ID09PSAnb2JqZWN0JyA/IEpTT04uc3RyaW5naWZ5KGJvZHkpIDogYm9keSk7XG4gIH1cblxuICAvKipcbiAgICogQ2hhbmdlIGZlYXR1cmVzIGdyb3VwIGZlYXR1cmVzIGxpc3RcbiAgICogQFJldHVybjogRW50aXR5UmVzcG9uc2U8RmVhdHVyZXNHcm91cD5cbiAgICovXG4gIHNldEZlYXR1cmVzKGlkPzogc3RyaW5nLCBib2R5Pzogc3RyaW5nW10pIHtcbiAgICByZXR1cm4gdGhpcy5yZXN0LnB1dChgJHt0aGlzLmJhc2VVcmx9LyR7aWR9L2ZlYXR1cmVzYCwgdHlwZW9mIGJvZHkgPT09ICdvYmplY3QnID8gSlNPTi5zdHJpbmdpZnkoYm9keSkgOiBib2R5KTtcbiAgfVxuXG4gIC8qKlxuICAgKiBEZWxldGUgRmVhdHVyZSBmcm9tIHRoZSBzeXN0ZW1cbiAgICogQFJldHVybjogQWN0aW9uUmVzcG9uc2VcbiAgICovXG4gIGRlbGV0ZShpZD86IHN0cmluZykge1xuICAgIHJldHVybiB0aGlzLnJlc3QuZGVsZXRlKGAke3RoaXMuYmFzZVVybH0vJHtpZH1gKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBHZXQgc2luZ2xlIGZlYXR1cmVzIGdyb3VwIGJ5IGlkXG4gICAqIEBSZXR1cm46IEVudGl0eVJlc3BvbnNlPEZlYXR1cmVzR3JvdXA+XG4gICAqL1xuICBnZXQoaWQ/OiBzdHJpbmcpIHtcbiAgICByZXR1cm4gdGhpcy5yZXN0LmdldChgJHt0aGlzLmJhc2VVcmx9LyR7aWR9YCk7XG4gIH1cblxuICAvKipcbiAgICogRmluZCBmZWF0dXJlcyBncm91cHMgYnkgZmlsdGVyc1xuICAgKiBAUmV0dXJuOiBRdWVyeVJlc3BvbnNlPEZlYXR1cmVzR3JvdXA+XG4gICAqL1xuICBmaW5kKHNlYXJjaD86IHN0cmluZywgc29ydD86IHN0cmluZykge1xuICAgIGNvbnN0IHBhcmFtcyA9IG5ldyBBcnJheSgpO1x0XHRcbiAgICBpZiAoc2VhcmNoICE9IG51bGwpIHsgcGFyYW1zLnB1c2goYHNlYXJjaD0ke3NlYXJjaH1gKTsgfVxuICAgIGlmIChzb3J0ICE9IG51bGwpIHsgcGFyYW1zLnB1c2goYHNvcnQ9JHtzb3J0fWApOyB9XG5cblx0XHRyZXR1cm4gdGhpcy5yZXN0LmdldChgJHt0aGlzLmJhc2VVcmx9YCwgLi4ucGFyYW1zKTtcbiAgfVxuXG59XG4iXX0=