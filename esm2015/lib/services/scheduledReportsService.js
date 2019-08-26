/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable, Inject } from '@angular/core';
import { RestUtil } from '../../utils/rest-util';
/**
 * Services for scheduled reports definition actions
 * \@RequestHeader X-API-KEY The key to identify the application (portal)
 * \@RequestHeader X-ACCESS-TOKEN The token to identify the logged-in user
 * \@ResourceGroup User Actions
 */
export class ScheduledReportsService {
    /**
     * Class constructor
     * @param {?} config
     * @param {?} rest
     */
    constructor(config, rest) {
        this.config = config;
        this.rest = rest;
        // URL to web api
        this.baseUrl = '/scheduled-reports';
        this.baseUrl = this.config.api + this.baseUrl;
    }
    /**
     * Create new scheduled report definition
     * \@Return: EntityResponse<ScheduledReport>
     * @param {?=} body
     * @return {?}
     */
    create(body) {
        return this.rest.post(`${this.baseUrl}/`, JSON.stringify(body));
    }
    /**
     * Update scheduled report definition
     * \@Return: EntityResponse<ScheduledReport>
     * @param {?=} id
     * @param {?=} body
     * @return {?}
     */
    update(id, body) {
        return this.rest.put(`${this.baseUrl}/${id}`, JSON.stringify(body));
    }
    /**
     * Delete scheduled report definition from the system
     * \@Return: ActionResponse
     * @param {?=} id
     * @return {?}
     */
    delete(id) {
        return this.rest.delete(`${this.baseUrl}/${id}`);
    }
    /**
     * Get single scheduled report definition by id
     * \@Return: EntityResponse<ScheduledReport>
     * @param {?=} id
     * @return {?}
     */
    get(id) {
        return this.rest.get(`${this.baseUrl}/${id}`);
    }
    /**
     * Get multiple scheduled report definitions by list of ids
     * \@Return: EntitiesResponse<ScheduledReport>
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
     * Find scheduled report definitions by filters
     * \@Return: QueryResponse<ScheduledReport>
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
ScheduledReportsService.decorators = [
    { type: Injectable }
];
/** @nocollapse */
ScheduledReportsService.ctorParameters = () => [
    { type: undefined, decorators: [{ type: Inject, args: ['config',] }] },
    { type: RestUtil }
];
if (false) {
    /**
     * @type {?}
     * @private
     */
    ScheduledReportsService.prototype.baseUrl;
    /**
     * @type {?}
     * @private
     */
    ScheduledReportsService.prototype.config;
    /**
     * @type {?}
     * @private
     */
    ScheduledReportsService.prototype.rest;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2NoZWR1bGVkUmVwb3J0c1NlcnZpY2UuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AYWdlbnR2aS9uZy1jb3JlLWxpYi8iLCJzb3VyY2VzIjpbImxpYi9zZXJ2aWNlcy9zY2hlZHVsZWRSZXBvcnRzU2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDbkQsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLHVCQUF1QixDQUFDOzs7Ozs7O0FBYWpELE1BQU0sT0FBTyx1QkFBdUI7Ozs7OztJQVFsQyxZQUFzQyxNQUFrQixFQUFVLElBQWM7UUFBMUMsV0FBTSxHQUFOLE1BQU0sQ0FBWTtRQUFVLFNBQUksR0FBSixJQUFJLENBQVU7O1FBTHhFLFlBQU8sR0FBRyxvQkFBb0IsQ0FBQztRQU1yQyxJQUFJLENBQUMsT0FBTyxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUMsR0FBRyxHQUFHLElBQUksQ0FBQyxPQUFPLENBQUM7SUFDaEQsQ0FBQzs7Ozs7OztJQU9ELE1BQU0sQ0FBQyxJQUFzQjtRQUMzQixPQUFPLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsSUFBSSxDQUFDLE9BQU8sR0FBRyxFQUFFLElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQztJQUNsRSxDQUFDOzs7Ozs7OztJQU1ELE1BQU0sQ0FBQyxFQUFXLEVBQUUsSUFBc0I7UUFDeEMsT0FBTyxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxHQUFHLElBQUksQ0FBQyxPQUFPLElBQUksRUFBRSxFQUFFLEVBQUUsSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDO0lBQ3RFLENBQUM7Ozs7Ozs7SUFNRCxNQUFNLENBQUMsRUFBVztRQUNoQixPQUFPLElBQUksQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLEdBQUcsSUFBSSxDQUFDLE9BQU8sSUFBSSxFQUFFLEVBQUUsQ0FBQyxDQUFDO0lBQ25ELENBQUM7Ozs7Ozs7SUFNRCxHQUFHLENBQUMsRUFBVztRQUNiLE9BQU8sSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsR0FBRyxJQUFJLENBQUMsT0FBTyxJQUFJLEVBQUUsRUFBRSxDQUFDLENBQUM7SUFDaEQsQ0FBQzs7Ozs7OztJQU1ELElBQUksQ0FBQyxFQUFXOztjQUNSLE1BQU0sR0FBRyxJQUFJLEtBQUssRUFBRTtRQUMxQixJQUFJLEVBQUUsSUFBSSxJQUFJLEVBQUU7WUFBRSxNQUFNLENBQUMsSUFBSSxDQUFDLE1BQU0sRUFBRSxFQUFFLENBQUMsQ0FBQztTQUFFO1FBRTlDLE9BQU8sSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsR0FBRyxJQUFJLENBQUMsT0FBTyxPQUFPLEVBQUUsR0FBRyxNQUFNLENBQUMsQ0FBQztJQUN4RCxDQUFDOzs7Ozs7O0lBTUQsSUFBSSxDQUFDLE1BQWU7O2NBQ1osTUFBTSxHQUFHLElBQUksS0FBSyxFQUFFO1FBQzFCLElBQUksTUFBTSxJQUFJLElBQUksRUFBRTtZQUFFLE1BQU0sQ0FBQyxJQUFJLENBQUMsVUFBVSxNQUFNLEVBQUUsQ0FBQyxDQUFDO1NBQUU7UUFFMUQsT0FBTyxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxHQUFHLElBQUksQ0FBQyxPQUFPLEdBQUcsRUFBRSxHQUFHLE1BQU0sQ0FBQyxDQUFDO0lBQ3BELENBQUM7OztZQWxFRixVQUFVOzs7OzRDQVNJLE1BQU0sU0FBQyxRQUFRO1lBckJyQixRQUFROzs7Ozs7O0lBZ0JmLDBDQUF1Qzs7Ozs7SUFLM0IseUNBQTRDOzs7OztJQUFFLHVDQUFzQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUsIEluamVjdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgUmVzdFV0aWwgfSBmcm9tICcuLi8uLi91dGlscy9yZXN0LXV0aWwnO1xuaW1wb3J0IHsgQ29yZUNvbmZpZyB9IGZyb20gJy4uLy4uL2NvcmUtbGliLm1vZHVsZSc7XG5cbmltcG9ydCB7IFNjaGVkdWxlZFJlcG9ydCB9IGZyb20gJy4uL2VudGl0aWVzL1NjaGVkdWxlZFJlcG9ydCc7XG5cblxuLyoqXG4gKiBTZXJ2aWNlcyBmb3Igc2NoZWR1bGVkIHJlcG9ydHMgZGVmaW5pdGlvbiBhY3Rpb25zXG4gKiBAUmVxdWVzdEhlYWRlciBYLUFQSS1LRVkgVGhlIGtleSB0byBpZGVudGlmeSB0aGUgYXBwbGljYXRpb24gKHBvcnRhbClcbiAqIEBSZXF1ZXN0SGVhZGVyIFgtQUNDRVNTLVRPS0VOIFRoZSB0b2tlbiB0byBpZGVudGlmeSB0aGUgbG9nZ2VkLWluIHVzZXJcbiAqIEBSZXNvdXJjZUdyb3VwIFVzZXIgQWN0aW9ucyBcbiAqL1xuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIFNjaGVkdWxlZFJlcG9ydHNTZXJ2aWNlIHtcblxuICAvLyBVUkwgdG8gd2ViIGFwaVxuICBwcml2YXRlIGJhc2VVcmwgPSAnL3NjaGVkdWxlZC1yZXBvcnRzJztcblxuICAvKipcbiAgICogQ2xhc3MgY29uc3RydWN0b3JcbiAgICovXG4gIGNvbnN0cnVjdG9yKEBJbmplY3QoJ2NvbmZpZycpIHByaXZhdGUgY29uZmlnOiBDb3JlQ29uZmlnLCBwcml2YXRlIHJlc3Q6IFJlc3RVdGlsKSB7XG4gICAgdGhpcy5iYXNlVXJsID0gdGhpcy5jb25maWcuYXBpICsgdGhpcy5iYXNlVXJsO1xuICB9XG5cblxuICAvKipcbiAgICogQ3JlYXRlIG5ldyBzY2hlZHVsZWQgcmVwb3J0IGRlZmluaXRpb25cbiAgICogQFJldHVybjogRW50aXR5UmVzcG9uc2U8U2NoZWR1bGVkUmVwb3J0PlxuICAgKi9cbiAgY3JlYXRlKGJvZHk/OiBTY2hlZHVsZWRSZXBvcnQpIHtcbiAgICByZXR1cm4gdGhpcy5yZXN0LnBvc3QoYCR7dGhpcy5iYXNlVXJsfS9gLCBKU09OLnN0cmluZ2lmeShib2R5KSk7XG4gIH1cblxuICAvKipcbiAgICogVXBkYXRlIHNjaGVkdWxlZCByZXBvcnQgZGVmaW5pdGlvblxuICAgKiBAUmV0dXJuOiBFbnRpdHlSZXNwb25zZTxTY2hlZHVsZWRSZXBvcnQ+XG4gICAqL1xuICB1cGRhdGUoaWQ/OiBzdHJpbmcsIGJvZHk/OiBTY2hlZHVsZWRSZXBvcnQpIHtcbiAgICByZXR1cm4gdGhpcy5yZXN0LnB1dChgJHt0aGlzLmJhc2VVcmx9LyR7aWR9YCwgSlNPTi5zdHJpbmdpZnkoYm9keSkpO1xuICB9XG5cbiAgLyoqXG4gICAqIERlbGV0ZSBzY2hlZHVsZWQgcmVwb3J0IGRlZmluaXRpb24gZnJvbSB0aGUgc3lzdGVtXG4gICAqIEBSZXR1cm46IEFjdGlvblJlc3BvbnNlXG4gICAqL1xuICBkZWxldGUoaWQ/OiBzdHJpbmcpIHtcbiAgICByZXR1cm4gdGhpcy5yZXN0LmRlbGV0ZShgJHt0aGlzLmJhc2VVcmx9LyR7aWR9YCk7XG4gIH1cblxuICAvKipcbiAgICogR2V0IHNpbmdsZSBzY2hlZHVsZWQgcmVwb3J0IGRlZmluaXRpb24gYnkgaWRcbiAgICogQFJldHVybjogRW50aXR5UmVzcG9uc2U8U2NoZWR1bGVkUmVwb3J0PlxuICAgKi9cbiAgZ2V0KGlkPzogc3RyaW5nKSB7XG4gICAgcmV0dXJuIHRoaXMucmVzdC5nZXQoYCR7dGhpcy5iYXNlVXJsfS8ke2lkfWApO1xuICB9XG5cbiAgLyoqXG4gICAqIEdldCBtdWx0aXBsZSBzY2hlZHVsZWQgcmVwb3J0IGRlZmluaXRpb25zIGJ5IGxpc3Qgb2YgaWRzXG4gICAqIEBSZXR1cm46IEVudGl0aWVzUmVzcG9uc2U8U2NoZWR1bGVkUmVwb3J0PlxuICAgKi9cbiAgbGlzdChpZD86IHN0cmluZykge1xuICAgIGNvbnN0IHBhcmFtcyA9IG5ldyBBcnJheSgpO1x0XHRcbiAgICBpZiAoaWQgIT0gbnVsbCkgeyBwYXJhbXMucHVzaChgaWQ9JHtpZH1gKTsgfVxuXG5cdFx0cmV0dXJuIHRoaXMucmVzdC5nZXQoYCR7dGhpcy5iYXNlVXJsfS9saXN0YCwgLi4ucGFyYW1zKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBGaW5kIHNjaGVkdWxlZCByZXBvcnQgZGVmaW5pdGlvbnMgYnkgZmlsdGVyc1xuICAgKiBAUmV0dXJuOiBRdWVyeVJlc3BvbnNlPFNjaGVkdWxlZFJlcG9ydD5cbiAgICovXG4gIGZpbmQoc2VhcmNoPzogc3RyaW5nKSB7XG4gICAgY29uc3QgcGFyYW1zID0gbmV3IEFycmF5KCk7XHRcdFxuICAgIGlmIChzZWFyY2ggIT0gbnVsbCkgeyBwYXJhbXMucHVzaChgc2VhcmNoPSR7c2VhcmNofWApOyB9XG5cblx0XHRyZXR1cm4gdGhpcy5yZXN0LmdldChgJHt0aGlzLmJhc2VVcmx9L2AsIC4uLnBhcmFtcyk7XG4gIH1cblxufVxuIl19