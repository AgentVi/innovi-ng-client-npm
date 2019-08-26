/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable, Inject } from '@angular/core';
import { RestUtil } from '../../utils/rest-util';
/**
 * Services for reports definition actions
 * \@RequestHeader X-API-KEY The key to identify the application (portal)
 * \@RequestHeader X-ACCESS-TOKEN The token to identify the logged-in user
 * \@ResourceGroup User Actions
 */
export class ReportsService {
    /**
     * Class constructor
     * @param {?} config
     * @param {?} rest
     */
    constructor(config, rest) {
        this.config = config;
        this.rest = rest;
        // URL to web api
        this.baseUrl = '/reports';
        this.baseUrl = this.config.api + this.baseUrl;
    }
    /**
     * Create new report definition
     * \@Return: EntityResponse<ReportDefinition>
     * @param {?=} body
     * @return {?}
     */
    create(body) {
        return this.rest.post(`${this.baseUrl}/`, JSON.stringify(body));
    }
    /**
     * Update report definition
     * \@Return: EntityResponse<ReportDefinition>
     * @param {?=} id
     * @param {?=} body
     * @return {?}
     */
    update(id, body) {
        return this.rest.put(`${this.baseUrl}/${id}`, JSON.stringify(body));
    }
    /**
     * Delete report definition from the system
     * \@Return: ActionResponse
     * @param {?=} id
     * @return {?}
     */
    delete(id) {
        return this.rest.delete(`${this.baseUrl}/${id}`);
    }
    /**
     * Get single report definition by id
     * \@Return: EntityResponse<ReportDefinition>
     * @param {?=} id
     * @return {?}
     */
    get(id) {
        return this.rest.get(`${this.baseUrl}/${id}`);
    }
    /**
     * Get multiple report definitions by list of ids
     * \@Return: EntitiesResponse<ReportDefinition>
     * @param {?=} id
     * @return {?}
     */
    list(id) {
        /** @type {?} */
        const params = new Array();
        if (id != null) {
            params.push(`id=${id}`);
        }
        return this.rest.get(`${this.baseUrl}/list`, ...params);
    }
    /**
     * Find report definitions by filters
     * \@Return: QueryResponse<ReportDefinition>
     * @param {?=} search
     * @return {?}
     */
    find(search) {
        /** @type {?} */
        const params = new Array();
        if (search != null) {
            params.push(`search=${search}`);
        }
        return this.rest.get(`${this.baseUrl}/`, ...params);
    }
}
ReportsService.decorators = [
    { type: Injectable }
];
/** @nocollapse */
ReportsService.ctorParameters = () => [
    { type: undefined, decorators: [{ type: Inject, args: ['config',] }] },
    { type: RestUtil }
];
if (false) {
    /**
     * @type {?}
     * @private
     */
    ReportsService.prototype.baseUrl;
    /**
     * @type {?}
     * @private
     */
    ReportsService.prototype.config;
    /**
     * @type {?}
     * @private
     */
    ReportsService.prototype.rest;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmVwb3J0c1NlcnZpY2UuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AYWdlbnR2aS9uZy1jb3JlLWxpYi8iLCJzb3VyY2VzIjpbImxpYi9zZXJ2aWNlcy9yZXBvcnRzU2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDbkQsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLHVCQUF1QixDQUFDOzs7Ozs7O0FBYWpELE1BQU0sT0FBTyxjQUFjOzs7Ozs7SUFRekIsWUFBc0MsTUFBa0IsRUFBVSxJQUFjO1FBQTFDLFdBQU0sR0FBTixNQUFNLENBQVk7UUFBVSxTQUFJLEdBQUosSUFBSSxDQUFVOztRQUx4RSxZQUFPLEdBQUcsVUFBVSxDQUFDO1FBTTNCLElBQUksQ0FBQyxPQUFPLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxHQUFHLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQztJQUNoRCxDQUFDOzs7Ozs7O0lBT0QsTUFBTSxDQUFDLElBQXVCO1FBQzVCLE9BQU8sSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxJQUFJLENBQUMsT0FBTyxHQUFHLEVBQUUsSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDO0lBQ2xFLENBQUM7Ozs7Ozs7O0lBTUQsTUFBTSxDQUFDLEVBQVcsRUFBRSxJQUF1QjtRQUN6QyxPQUFPLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLEdBQUcsSUFBSSxDQUFDLE9BQU8sSUFBSSxFQUFFLEVBQUUsRUFBRSxJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUM7SUFDdEUsQ0FBQzs7Ozs7OztJQU1ELE1BQU0sQ0FBQyxFQUFXO1FBQ2hCLE9BQU8sSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsR0FBRyxJQUFJLENBQUMsT0FBTyxJQUFJLEVBQUUsRUFBRSxDQUFDLENBQUM7SUFDbkQsQ0FBQzs7Ozs7OztJQU1ELEdBQUcsQ0FBQyxFQUFXO1FBQ2IsT0FBTyxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxHQUFHLElBQUksQ0FBQyxPQUFPLElBQUksRUFBRSxFQUFFLENBQUMsQ0FBQztJQUNoRCxDQUFDOzs7Ozs7O0lBTUQsSUFBSSxDQUFDLEVBQVc7O2NBQ1IsTUFBTSxHQUFHLElBQUksS0FBSyxFQUFFO1FBQzFCLElBQUksRUFBRSxJQUFJLElBQUksRUFBRTtZQUFFLE1BQU0sQ0FBQyxJQUFJLENBQUMsTUFBTSxFQUFFLEVBQUUsQ0FBQyxDQUFDO1NBQUU7UUFFOUMsT0FBTyxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxHQUFHLElBQUksQ0FBQyxPQUFPLE9BQU8sRUFBRSxHQUFHLE1BQU0sQ0FBQyxDQUFDO0lBQ3hELENBQUM7Ozs7Ozs7SUFNRCxJQUFJLENBQUMsTUFBZTs7Y0FDWixNQUFNLEdBQUcsSUFBSSxLQUFLLEVBQUU7UUFDMUIsSUFBSSxNQUFNLElBQUksSUFBSSxFQUFFO1lBQUUsTUFBTSxDQUFDLElBQUksQ0FBQyxVQUFVLE1BQU0sRUFBRSxDQUFDLENBQUM7U0FBRTtRQUUxRCxPQUFPLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLEdBQUcsSUFBSSxDQUFDLE9BQU8sR0FBRyxFQUFFLEdBQUcsTUFBTSxDQUFDLENBQUM7SUFDcEQsQ0FBQzs7O1lBbEVGLFVBQVU7Ozs7NENBU0ksTUFBTSxTQUFDLFFBQVE7WUFyQnJCLFFBQVE7Ozs7Ozs7SUFnQmYsaUNBQTZCOzs7OztJQUtqQixnQ0FBNEM7Ozs7O0lBQUUsOEJBQXNCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSwgSW5qZWN0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBSZXN0VXRpbCB9IGZyb20gJy4uLy4uL3V0aWxzL3Jlc3QtdXRpbCc7XG5pbXBvcnQgeyBDb3JlQ29uZmlnIH0gZnJvbSAnLi4vLi4vY29yZS1saWIubW9kdWxlJztcblxuaW1wb3J0IHsgUmVwb3J0RGVmaW5pdGlvbiB9IGZyb20gJy4uL2VudGl0aWVzL1JlcG9ydERlZmluaXRpb24nO1xuXG5cbi8qKlxuICogU2VydmljZXMgZm9yIHJlcG9ydHMgZGVmaW5pdGlvbiBhY3Rpb25zXG4gKiBAUmVxdWVzdEhlYWRlciBYLUFQSS1LRVkgVGhlIGtleSB0byBpZGVudGlmeSB0aGUgYXBwbGljYXRpb24gKHBvcnRhbClcbiAqIEBSZXF1ZXN0SGVhZGVyIFgtQUNDRVNTLVRPS0VOIFRoZSB0b2tlbiB0byBpZGVudGlmeSB0aGUgbG9nZ2VkLWluIHVzZXJcbiAqIEBSZXNvdXJjZUdyb3VwIFVzZXIgQWN0aW9ucyBcbiAqL1xuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIFJlcG9ydHNTZXJ2aWNlIHtcblxuICAvLyBVUkwgdG8gd2ViIGFwaVxuICBwcml2YXRlIGJhc2VVcmwgPSAnL3JlcG9ydHMnO1xuXG4gIC8qKlxuICAgKiBDbGFzcyBjb25zdHJ1Y3RvclxuICAgKi9cbiAgY29uc3RydWN0b3IoQEluamVjdCgnY29uZmlnJykgcHJpdmF0ZSBjb25maWc6IENvcmVDb25maWcsIHByaXZhdGUgcmVzdDogUmVzdFV0aWwpIHtcbiAgICB0aGlzLmJhc2VVcmwgPSB0aGlzLmNvbmZpZy5hcGkgKyB0aGlzLmJhc2VVcmw7XG4gIH1cblxuXG4gIC8qKlxuICAgKiBDcmVhdGUgbmV3IHJlcG9ydCBkZWZpbml0aW9uXG4gICAqIEBSZXR1cm46IEVudGl0eVJlc3BvbnNlPFJlcG9ydERlZmluaXRpb24+XG4gICAqL1xuICBjcmVhdGUoYm9keT86IFJlcG9ydERlZmluaXRpb24pIHtcbiAgICByZXR1cm4gdGhpcy5yZXN0LnBvc3QoYCR7dGhpcy5iYXNlVXJsfS9gLCBKU09OLnN0cmluZ2lmeShib2R5KSk7XG4gIH1cblxuICAvKipcbiAgICogVXBkYXRlIHJlcG9ydCBkZWZpbml0aW9uXG4gICAqIEBSZXR1cm46IEVudGl0eVJlc3BvbnNlPFJlcG9ydERlZmluaXRpb24+XG4gICAqL1xuICB1cGRhdGUoaWQ/OiBzdHJpbmcsIGJvZHk/OiBSZXBvcnREZWZpbml0aW9uKSB7XG4gICAgcmV0dXJuIHRoaXMucmVzdC5wdXQoYCR7dGhpcy5iYXNlVXJsfS8ke2lkfWAsIEpTT04uc3RyaW5naWZ5KGJvZHkpKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBEZWxldGUgcmVwb3J0IGRlZmluaXRpb24gZnJvbSB0aGUgc3lzdGVtXG4gICAqIEBSZXR1cm46IEFjdGlvblJlc3BvbnNlXG4gICAqL1xuICBkZWxldGUoaWQ/OiBzdHJpbmcpIHtcbiAgICByZXR1cm4gdGhpcy5yZXN0LmRlbGV0ZShgJHt0aGlzLmJhc2VVcmx9LyR7aWR9YCk7XG4gIH1cblxuICAvKipcbiAgICogR2V0IHNpbmdsZSByZXBvcnQgZGVmaW5pdGlvbiBieSBpZFxuICAgKiBAUmV0dXJuOiBFbnRpdHlSZXNwb25zZTxSZXBvcnREZWZpbml0aW9uPlxuICAgKi9cbiAgZ2V0KGlkPzogc3RyaW5nKSB7XG4gICAgcmV0dXJuIHRoaXMucmVzdC5nZXQoYCR7dGhpcy5iYXNlVXJsfS8ke2lkfWApO1xuICB9XG5cbiAgLyoqXG4gICAqIEdldCBtdWx0aXBsZSByZXBvcnQgZGVmaW5pdGlvbnMgYnkgbGlzdCBvZiBpZHNcbiAgICogQFJldHVybjogRW50aXRpZXNSZXNwb25zZTxSZXBvcnREZWZpbml0aW9uPlxuICAgKi9cbiAgbGlzdChpZD86IHN0cmluZykge1xuICAgIGNvbnN0IHBhcmFtcyA9IG5ldyBBcnJheSgpO1x0XHRcbiAgICBpZiAoaWQgIT0gbnVsbCkgeyBwYXJhbXMucHVzaChgaWQ9JHtpZH1gKTsgfVxuXG5cdFx0cmV0dXJuIHRoaXMucmVzdC5nZXQoYCR7dGhpcy5iYXNlVXJsfS9saXN0YCwgLi4ucGFyYW1zKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBGaW5kIHJlcG9ydCBkZWZpbml0aW9ucyBieSBmaWx0ZXJzXG4gICAqIEBSZXR1cm46IFF1ZXJ5UmVzcG9uc2U8UmVwb3J0RGVmaW5pdGlvbj5cbiAgICovXG4gIGZpbmQoc2VhcmNoPzogc3RyaW5nKSB7XG4gICAgY29uc3QgcGFyYW1zID0gbmV3IEFycmF5KCk7XHRcdFxuICAgIGlmIChzZWFyY2ggIT0gbnVsbCkgeyBwYXJhbXMucHVzaChgc2VhcmNoPSR7c2VhcmNofWApOyB9XG5cblx0XHRyZXR1cm4gdGhpcy5yZXN0LmdldChgJHt0aGlzLmJhc2VVcmx9L2AsIC4uLnBhcmFtcyk7XG4gIH1cblxufVxuIl19