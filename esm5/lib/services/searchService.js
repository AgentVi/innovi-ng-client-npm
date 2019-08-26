/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Injectable, Inject } from '@angular/core';
import { RestUtil } from '../../utils/rest-util';
/**
 * Services for metadata search actions
 * \@RequestHeader X-API-KEY The key to identify the application (portal)
 * \@RequestHeader X-ACCESS-TOKEN The token to identify the logged-in user
 * \@ResourceGroup User Actions
 */
var SearchService = /** @class */ (function () {
    /**
     * Class constructor
     */
    function SearchService(config, rest) {
        this.config = config;
        this.rest = rest;
        // URL to web api
        this.baseUrl = '/search';
        this.baseUrl = this.config.api + this.baseUrl;
    }
    /**
     * Create new search definition
     * @Return: EntityResponse<SearchDefinition>
     */
    /**
     * Create new search definition
     * \@Return: EntityResponse<SearchDefinition>
     * @param {?=} body
     * @return {?}
     */
    SearchService.prototype.create = /**
     * Create new search definition
     * \@Return: EntityResponse<SearchDefinition>
     * @param {?=} body
     * @return {?}
     */
    function (body) {
        return this.rest.post(this.baseUrl + "/", JSON.stringify(body));
    };
    /**
     * Update search definition
     * @Return: EntityResponse<SearchDefinition>
     */
    /**
     * Update search definition
     * \@Return: EntityResponse<SearchDefinition>
     * @param {?=} id
     * @param {?=} body
     * @return {?}
     */
    SearchService.prototype.update = /**
     * Update search definition
     * \@Return: EntityResponse<SearchDefinition>
     * @param {?=} id
     * @param {?=} body
     * @return {?}
     */
    function (id, body) {
        return this.rest.put(this.baseUrl + "/" + id, JSON.stringify(body));
    };
    /**
     * Delete search definition from the system
     * @Return: ActionResponse
     */
    /**
     * Delete search definition from the system
     * \@Return: ActionResponse
     * @param {?=} id
     * @return {?}
     */
    SearchService.prototype.delete = /**
     * Delete search definition from the system
     * \@Return: ActionResponse
     * @param {?=} id
     * @return {?}
     */
    function (id) {
        return this.rest.delete(this.baseUrl + "/" + id);
    };
    /**
     * Get single search definition by id
     * @Return: EntityResponse<SearchDefinition>
     */
    /**
     * Get single search definition by id
     * \@Return: EntityResponse<SearchDefinition>
     * @param {?=} id
     * @return {?}
     */
    SearchService.prototype.get = /**
     * Get single search definition by id
     * \@Return: EntityResponse<SearchDefinition>
     * @param {?=} id
     * @return {?}
     */
    function (id) {
        return this.rest.get(this.baseUrl + "/" + id);
    };
    /**
     * Get multiple search definitions by list of ids
     * @Return: EntitiesResponse<SearchDefinition>
     */
    /**
     * Get multiple search definitions by list of ids
     * \@Return: EntitiesResponse<SearchDefinition>
     * @param {?=} id
     * @return {?}
     */
    SearchService.prototype.list = /**
     * Get multiple search definitions by list of ids
     * \@Return: EntitiesResponse<SearchDefinition>
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
     * Find search definitions by filters
     * @Return: QueryResponse<SearchDefinition>
     */
    /**
     * Find search definitions by filters
     * \@Return: QueryResponse<SearchDefinition>
     * @param {?=} search
     * @param {?=} sort
     * @param {?=} page
     * @param {?=} pageSize
     * @return {?}
     */
    SearchService.prototype.find = /**
     * Find search definitions by filters
     * \@Return: QueryResponse<SearchDefinition>
     * @param {?=} search
     * @param {?=} sort
     * @param {?=} page
     * @param {?=} pageSize
     * @return {?}
     */
    function (search, sort, page, pageSize) {
        var _a;
        /** @type {?} */
        var params = new Array();
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
        return (_a = this.rest).get.apply(_a, tslib_1.__spread([this.baseUrl + "/"], params));
    };
    /**
     * Perform metadata search by the search definition
     * @Return: QueryResponse<ObjectInfo> - list of detected objects
     * Search image web socket (/ws/search?search=searchId) must be open before this method invocation.
     * Please provide search id to query definition and use the same id for the web socket
     */
    /**
     * Perform metadata search by the search definition
     * \@Return: QueryResponse<ObjectInfo> - list of detected objects
     * Search image web socket (/ws/search?search=searchId) must be open before this method invocation.
     * Please provide search id to query definition and use the same id for the web socket
     * @param {?=} body
     * @return {?}
     */
    SearchService.prototype.execute = /**
     * Perform metadata search by the search definition
     * \@Return: QueryResponse<ObjectInfo> - list of detected objects
     * Search image web socket (/ws/search?search=searchId) must be open before this method invocation.
     * Please provide search id to query definition and use the same id for the web socket
     * @param {?=} body
     * @return {?}
     */
    function (body) {
        return this.rest.post(this.baseUrl + "/execute", JSON.stringify(body));
    };
    /**
     * Perform metadata saved search by the search id
     * @Return: QueryResponse<ObjectInfo> - list of detected objects
     */
    /**
     * Perform metadata saved search by the search id
     * \@Return: QueryResponse<ObjectInfo> - list of detected objects
     * @param {?=} id
     * @return {?}
     */
    SearchService.prototype.executeById = /**
     * Perform metadata saved search by the search id
     * \@Return: QueryResponse<ObjectInfo> - list of detected objects
     * @param {?=} id
     * @return {?}
     */
    function (id) {
        return this.rest.get(this.baseUrl + "/execute/" + id);
    };
    SearchService.decorators = [
        { type: Injectable }
    ];
    /** @nocollapse */
    SearchService.ctorParameters = function () { return [
        { type: undefined, decorators: [{ type: Inject, args: ['config',] }] },
        { type: RestUtil }
    ]; };
    return SearchService;
}());
export { SearchService };
if (false) {
    /**
     * @type {?}
     * @private
     */
    SearchService.prototype.baseUrl;
    /**
     * @type {?}
     * @private
     */
    SearchService.prototype.config;
    /**
     * @type {?}
     * @private
     */
    SearchService.prototype.rest;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VhcmNoU2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BhZ2VudHZpL25nLWNvcmUtbGliLyIsInNvdXJjZXMiOlsibGliL3NlcnZpY2VzL3NlYXJjaFNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUNuRCxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sdUJBQXVCLENBQUM7Ozs7Ozs7QUFZakQ7SUFNRTs7T0FFRztJQUNILHVCQUFzQyxNQUFrQixFQUFVLElBQWM7UUFBMUMsV0FBTSxHQUFOLE1BQU0sQ0FBWTtRQUFVLFNBQUksR0FBSixJQUFJLENBQVU7O1FBTHhFLFlBQU8sR0FBRyxTQUFTLENBQUM7UUFNMUIsSUFBSSxDQUFDLE9BQU8sR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDLEdBQUcsR0FBRyxJQUFJLENBQUMsT0FBTyxDQUFDO0lBQ2hELENBQUM7SUFHRDs7O09BR0c7Ozs7Ozs7SUFDSCw4QkFBTTs7Ozs7O0lBQU4sVUFBTyxJQUF1QjtRQUM1QixPQUFPLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFJLElBQUksQ0FBQyxPQUFPLE1BQUcsRUFBRSxJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUM7SUFDbEUsQ0FBQztJQUVEOzs7T0FHRzs7Ozs7Ozs7SUFDSCw4QkFBTTs7Ozs7OztJQUFOLFVBQU8sRUFBVyxFQUFFLElBQXVCO1FBQ3pDLE9BQU8sSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUksSUFBSSxDQUFDLE9BQU8sU0FBSSxFQUFJLEVBQUUsSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDO0lBQ3RFLENBQUM7SUFFRDs7O09BR0c7Ozs7Ozs7SUFDSCw4QkFBTTs7Ozs7O0lBQU4sVUFBTyxFQUFXO1FBQ2hCLE9BQU8sSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUksSUFBSSxDQUFDLE9BQU8sU0FBSSxFQUFJLENBQUMsQ0FBQztJQUNuRCxDQUFDO0lBRUQ7OztPQUdHOzs7Ozs7O0lBQ0gsMkJBQUc7Ozs7OztJQUFILFVBQUksRUFBVztRQUNiLE9BQU8sSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUksSUFBSSxDQUFDLE9BQU8sU0FBSSxFQUFJLENBQUMsQ0FBQztJQUNoRCxDQUFDO0lBRUQ7OztPQUdHOzs7Ozs7O0lBQ0gsNEJBQUk7Ozs7OztJQUFKLFVBQUssRUFBVzs7O1lBQ1IsTUFBTSxHQUFHLElBQUksS0FBSyxFQUFFO1FBQzFCLElBQUksRUFBRSxJQUFJLElBQUksRUFBRTtZQUFFLE1BQU0sQ0FBQyxJQUFJLENBQUMsUUFBTSxFQUFJLENBQUMsQ0FBQztTQUFFO1FBRTlDLE9BQU8sQ0FBQSxLQUFBLElBQUksQ0FBQyxJQUFJLENBQUEsQ0FBQyxHQUFHLDZCQUFJLElBQUksQ0FBQyxPQUFPLFVBQU8sR0FBSyxNQUFNLEdBQUU7SUFDeEQsQ0FBQztJQUVEOzs7T0FHRzs7Ozs7Ozs7OztJQUNILDRCQUFJOzs7Ozs7Ozs7SUFBSixVQUFLLE1BQWUsRUFBRSxJQUFhLEVBQUUsSUFBYSxFQUFFLFFBQWlCOzs7WUFDN0QsTUFBTSxHQUFHLElBQUksS0FBSyxFQUFFO1FBQzFCLElBQUksTUFBTSxJQUFJLElBQUksRUFBRTtZQUFFLE1BQU0sQ0FBQyxJQUFJLENBQUMsWUFBVSxNQUFRLENBQUMsQ0FBQztTQUFFO1FBQ3hELElBQUksSUFBSSxJQUFJLElBQUksRUFBRTtZQUFFLE1BQU0sQ0FBQyxJQUFJLENBQUMsVUFBUSxJQUFNLENBQUMsQ0FBQztTQUFFO1FBQ2xELElBQUksSUFBSSxJQUFJLElBQUksRUFBRTtZQUFFLE1BQU0sQ0FBQyxJQUFJLENBQUMsVUFBUSxJQUFNLENBQUMsQ0FBQztTQUFFO1FBQ2xELElBQUksUUFBUSxJQUFJLElBQUksRUFBRTtZQUFFLE1BQU0sQ0FBQyxJQUFJLENBQUMsY0FBWSxRQUFVLENBQUMsQ0FBQztTQUFFO1FBRWhFLE9BQU8sQ0FBQSxLQUFBLElBQUksQ0FBQyxJQUFJLENBQUEsQ0FBQyxHQUFHLDZCQUFJLElBQUksQ0FBQyxPQUFPLE1BQUcsR0FBSyxNQUFNLEdBQUU7SUFDcEQsQ0FBQztJQUVEOzs7OztPQUtHOzs7Ozs7Ozs7SUFDSCwrQkFBTzs7Ozs7Ozs7SUFBUCxVQUFRLElBQXVCO1FBQzdCLE9BQU8sSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUksSUFBSSxDQUFDLE9BQU8sYUFBVSxFQUFFLElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQztJQUN6RSxDQUFDO0lBRUQ7OztPQUdHOzs7Ozs7O0lBQ0gsbUNBQVc7Ozs7OztJQUFYLFVBQVksRUFBVztRQUNyQixPQUFPLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFJLElBQUksQ0FBQyxPQUFPLGlCQUFZLEVBQUksQ0FBQyxDQUFDO0lBQ3hELENBQUM7O2dCQXZGRixVQUFVOzs7O2dEQVNJLE1BQU0sU0FBQyxRQUFRO2dCQXJCckIsUUFBUTs7SUFxR2pCLG9CQUFDO0NBQUEsQUF6RkQsSUF5RkM7U0F4RlksYUFBYTs7Ozs7O0lBR3hCLGdDQUE0Qjs7Ozs7SUFLaEIsK0JBQTRDOzs7OztJQUFFLDZCQUFzQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUsIEluamVjdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgUmVzdFV0aWwgfSBmcm9tICcuLi8uLi91dGlscy9yZXN0LXV0aWwnO1xuaW1wb3J0IHsgQ29yZUNvbmZpZyB9IGZyb20gJy4uLy4uL2NvcmUtbGliLm1vZHVsZSc7XG5cbmltcG9ydCB7IFNlYXJjaERlZmluaXRpb24gfSBmcm9tICcuLi9lbnRpdGllcy9TZWFyY2hEZWZpbml0aW9uJztcblxuXG4vKipcbiAqIFNlcnZpY2VzIGZvciBtZXRhZGF0YSBzZWFyY2ggYWN0aW9uc1xuICogQFJlcXVlc3RIZWFkZXIgWC1BUEktS0VZIFRoZSBrZXkgdG8gaWRlbnRpZnkgdGhlIGFwcGxpY2F0aW9uIChwb3J0YWwpXG4gKiBAUmVxdWVzdEhlYWRlciBYLUFDQ0VTUy1UT0tFTiBUaGUgdG9rZW4gdG8gaWRlbnRpZnkgdGhlIGxvZ2dlZC1pbiB1c2VyXG4gKiBAUmVzb3VyY2VHcm91cCBVc2VyIEFjdGlvbnMgXG4gKi9cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBTZWFyY2hTZXJ2aWNlIHtcblxuICAvLyBVUkwgdG8gd2ViIGFwaVxuICBwcml2YXRlIGJhc2VVcmwgPSAnL3NlYXJjaCc7XG5cbiAgLyoqXG4gICAqIENsYXNzIGNvbnN0cnVjdG9yXG4gICAqL1xuICBjb25zdHJ1Y3RvcihASW5qZWN0KCdjb25maWcnKSBwcml2YXRlIGNvbmZpZzogQ29yZUNvbmZpZywgcHJpdmF0ZSByZXN0OiBSZXN0VXRpbCkge1xuICAgIHRoaXMuYmFzZVVybCA9IHRoaXMuY29uZmlnLmFwaSArIHRoaXMuYmFzZVVybDtcbiAgfVxuXG5cbiAgLyoqXG4gICAqIENyZWF0ZSBuZXcgc2VhcmNoIGRlZmluaXRpb25cbiAgICogQFJldHVybjogRW50aXR5UmVzcG9uc2U8U2VhcmNoRGVmaW5pdGlvbj5cbiAgICovXG4gIGNyZWF0ZShib2R5PzogU2VhcmNoRGVmaW5pdGlvbikge1xuICAgIHJldHVybiB0aGlzLnJlc3QucG9zdChgJHt0aGlzLmJhc2VVcmx9L2AsIEpTT04uc3RyaW5naWZ5KGJvZHkpKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBVcGRhdGUgc2VhcmNoIGRlZmluaXRpb25cbiAgICogQFJldHVybjogRW50aXR5UmVzcG9uc2U8U2VhcmNoRGVmaW5pdGlvbj5cbiAgICovXG4gIHVwZGF0ZShpZD86IHN0cmluZywgYm9keT86IFNlYXJjaERlZmluaXRpb24pIHtcbiAgICByZXR1cm4gdGhpcy5yZXN0LnB1dChgJHt0aGlzLmJhc2VVcmx9LyR7aWR9YCwgSlNPTi5zdHJpbmdpZnkoYm9keSkpO1xuICB9XG5cbiAgLyoqXG4gICAqIERlbGV0ZSBzZWFyY2ggZGVmaW5pdGlvbiBmcm9tIHRoZSBzeXN0ZW1cbiAgICogQFJldHVybjogQWN0aW9uUmVzcG9uc2VcbiAgICovXG4gIGRlbGV0ZShpZD86IHN0cmluZykge1xuICAgIHJldHVybiB0aGlzLnJlc3QuZGVsZXRlKGAke3RoaXMuYmFzZVVybH0vJHtpZH1gKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBHZXQgc2luZ2xlIHNlYXJjaCBkZWZpbml0aW9uIGJ5IGlkXG4gICAqIEBSZXR1cm46IEVudGl0eVJlc3BvbnNlPFNlYXJjaERlZmluaXRpb24+XG4gICAqL1xuICBnZXQoaWQ/OiBzdHJpbmcpIHtcbiAgICByZXR1cm4gdGhpcy5yZXN0LmdldChgJHt0aGlzLmJhc2VVcmx9LyR7aWR9YCk7XG4gIH1cblxuICAvKipcbiAgICogR2V0IG11bHRpcGxlIHNlYXJjaCBkZWZpbml0aW9ucyBieSBsaXN0IG9mIGlkc1xuICAgKiBAUmV0dXJuOiBFbnRpdGllc1Jlc3BvbnNlPFNlYXJjaERlZmluaXRpb24+XG4gICAqL1xuICBsaXN0KGlkPzogc3RyaW5nKSB7XG4gICAgY29uc3QgcGFyYW1zID0gbmV3IEFycmF5KCk7XHRcdFxuICAgIGlmIChpZCAhPSBudWxsKSB7IHBhcmFtcy5wdXNoKGBpZD0ke2lkfWApOyB9XG5cblx0XHRyZXR1cm4gdGhpcy5yZXN0LmdldChgJHt0aGlzLmJhc2VVcmx9L2xpc3RgLCAuLi5wYXJhbXMpO1xuICB9XG5cbiAgLyoqXG4gICAqIEZpbmQgc2VhcmNoIGRlZmluaXRpb25zIGJ5IGZpbHRlcnNcbiAgICogQFJldHVybjogUXVlcnlSZXNwb25zZTxTZWFyY2hEZWZpbml0aW9uPlxuICAgKi9cbiAgZmluZChzZWFyY2g/OiBzdHJpbmcsIHNvcnQ/OiBzdHJpbmcsIHBhZ2U/OiBudW1iZXIsIHBhZ2VTaXplPzogbnVtYmVyKSB7XG4gICAgY29uc3QgcGFyYW1zID0gbmV3IEFycmF5KCk7XHRcdFxuICAgIGlmIChzZWFyY2ggIT0gbnVsbCkgeyBwYXJhbXMucHVzaChgc2VhcmNoPSR7c2VhcmNofWApOyB9XG4gICAgaWYgKHNvcnQgIT0gbnVsbCkgeyBwYXJhbXMucHVzaChgc29ydD0ke3NvcnR9YCk7IH1cbiAgICBpZiAocGFnZSAhPSBudWxsKSB7IHBhcmFtcy5wdXNoKGBwYWdlPSR7cGFnZX1gKTsgfVxuICAgIGlmIChwYWdlU2l6ZSAhPSBudWxsKSB7IHBhcmFtcy5wdXNoKGBwYWdlU2l6ZT0ke3BhZ2VTaXplfWApOyB9XG5cblx0XHRyZXR1cm4gdGhpcy5yZXN0LmdldChgJHt0aGlzLmJhc2VVcmx9L2AsIC4uLnBhcmFtcyk7XG4gIH1cblxuICAvKipcbiAgICogUGVyZm9ybSBtZXRhZGF0YSBzZWFyY2ggYnkgdGhlIHNlYXJjaCBkZWZpbml0aW9uXG4gICAqIEBSZXR1cm46IFF1ZXJ5UmVzcG9uc2U8T2JqZWN0SW5mbz4gLSBsaXN0IG9mIGRldGVjdGVkIG9iamVjdHNcbiAgICogU2VhcmNoIGltYWdlIHdlYiBzb2NrZXQgKC93cy9zZWFyY2g/c2VhcmNoPXNlYXJjaElkKSBtdXN0IGJlIG9wZW4gYmVmb3JlIHRoaXMgbWV0aG9kIGludm9jYXRpb24uXG4gICAqIFBsZWFzZSBwcm92aWRlIHNlYXJjaCBpZCB0byBxdWVyeSBkZWZpbml0aW9uIGFuZCB1c2UgdGhlIHNhbWUgaWQgZm9yIHRoZSB3ZWIgc29ja2V0XG4gICAqL1xuICBleGVjdXRlKGJvZHk/OiBTZWFyY2hEZWZpbml0aW9uKSB7XG4gICAgcmV0dXJuIHRoaXMucmVzdC5wb3N0KGAke3RoaXMuYmFzZVVybH0vZXhlY3V0ZWAsIEpTT04uc3RyaW5naWZ5KGJvZHkpKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBQZXJmb3JtIG1ldGFkYXRhIHNhdmVkIHNlYXJjaCBieSB0aGUgc2VhcmNoIGlkXG4gICAqIEBSZXR1cm46IFF1ZXJ5UmVzcG9uc2U8T2JqZWN0SW5mbz4gLSBsaXN0IG9mIGRldGVjdGVkIG9iamVjdHNcbiAgICovXG4gIGV4ZWN1dGVCeUlkKGlkPzogc3RyaW5nKSB7XG4gICAgcmV0dXJuIHRoaXMucmVzdC5nZXQoYCR7dGhpcy5iYXNlVXJsfS9leGVjdXRlLyR7aWR9YCk7XG4gIH1cblxufVxuIl19