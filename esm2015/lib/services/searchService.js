/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable, Inject } from '@angular/core';
import { RestUtil } from '../../utils/rest-util';
/**
 * Services for metadata search actions
 * \@RequestHeader X-API-KEY The key to identify the application (portal)
 * \@RequestHeader X-ACCESS-TOKEN The token to identify the logged-in user
 * \@ResourceGroup User Actions
 */
export class SearchService {
    /**
     * Class constructor
     * @param {?} config
     * @param {?} rest
     */
    constructor(config, rest) {
        this.config = config;
        this.rest = rest;
        // URL to web api
        this.baseUrl = '/search';
        this.baseUrl = this.config.api + this.baseUrl;
    }
    /**
     * Create new search definition
     * \@Return: EntityResponse<SearchDefinition>
     * @param {?=} body
     * @return {?}
     */
    create(body) {
        return this.rest.post(`${this.baseUrl}`, typeof body === 'object' ? JSON.stringify(body) : body);
    }
    /**
     * Update search definition
     * \@Return: EntityResponse<SearchDefinition>
     * @param {?=} id
     * @param {?=} body
     * @return {?}
     */
    update(id, body) {
        return this.rest.put(`${this.baseUrl}/${id}`, typeof body === 'object' ? JSON.stringify(body) : body);
    }
    /**
     * Delete search definition from the system
     * \@Return: ActionResponse
     * @param {?=} id
     * @return {?}
     */
    delete(id) {
        return this.rest.delete(`${this.baseUrl}/${id}`);
    }
    /**
     * Get single search definition by id
     * \@Return: EntityResponse<SearchDefinition>
     * @param {?=} id
     * @return {?}
     */
    get(id) {
        return this.rest.get(`${this.baseUrl}/${id}`);
    }
    /**
     * Get multiple search definitions by list of ids
     * \@Return: EntitiesResponse<SearchDefinition>
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
     * Find search definitions by filters
     * \@Return: QueryResponse<SearchDefinition>
     * @param {?=} search
     * @param {?=} sort
     * @param {?=} page
     * @param {?=} pageSize
     * @return {?}
     */
    find(search, sort, page, pageSize) {
        /** @type {?} */
        const params = new Array();
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
        return this.rest.get(`${this.baseUrl}`, ...params);
    }
    /**
     * Perform metadata search by the search definition
     * \@Return: QueryResponse<ObjectInfo> - list of detected objects
     * Search image web socket (/ws/search?search=searchId) must be open before this method invocation.
     * Please provide search id to query definition and use the same id for the web socket
     * @param {?=} body
     * @return {?}
     */
    execute(body) {
        return this.rest.post(`${this.baseUrl}/execute`, typeof body === 'object' ? JSON.stringify(body) : body);
    }
    /**
     * Perform metadata saved search by the search id
     * \@Return: QueryResponse<ObjectInfo> - list of detected objects
     * @param {?=} id
     * @return {?}
     */
    executeById(id) {
        return this.rest.get(`${this.baseUrl}/execute/${id}`);
    }
}
SearchService.decorators = [
    { type: Injectable }
];
/** @nocollapse */
SearchService.ctorParameters = () => [
    { type: undefined, decorators: [{ type: Inject, args: ['config',] }] },
    { type: RestUtil }
];
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VhcmNoU2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BhZ2VudHZpL25nLWNvcmUtbGliLyIsInNvdXJjZXMiOlsibGliL3NlcnZpY2VzL3NlYXJjaFNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ25ELE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSx1QkFBdUIsQ0FBQzs7Ozs7OztBQWFqRCxNQUFNLE9BQU8sYUFBYTs7Ozs7O0lBUXhCLFlBQXNDLE1BQWtCLEVBQVUsSUFBYztRQUExQyxXQUFNLEdBQU4sTUFBTSxDQUFZO1FBQVUsU0FBSSxHQUFKLElBQUksQ0FBVTs7UUFMeEUsWUFBTyxHQUFHLFNBQVMsQ0FBQztRQU0xQixJQUFJLENBQUMsT0FBTyxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUMsR0FBRyxHQUFHLElBQUksQ0FBQyxPQUFPLENBQUM7SUFDaEQsQ0FBQzs7Ozs7OztJQU9ELE1BQU0sQ0FBQyxJQUF1QjtRQUM1QixPQUFPLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsSUFBSSxDQUFDLE9BQU8sRUFBRSxFQUFFLE9BQU8sSUFBSSxLQUFLLFFBQVEsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDbkcsQ0FBQzs7Ozs7Ozs7SUFNRCxNQUFNLENBQUMsRUFBVyxFQUFFLElBQXVCO1FBQ3pDLE9BQU8sSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsR0FBRyxJQUFJLENBQUMsT0FBTyxJQUFJLEVBQUUsRUFBRSxFQUFFLE9BQU8sSUFBSSxLQUFLLFFBQVEsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDeEcsQ0FBQzs7Ozs7OztJQU1ELE1BQU0sQ0FBQyxFQUFXO1FBQ2hCLE9BQU8sSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsR0FBRyxJQUFJLENBQUMsT0FBTyxJQUFJLEVBQUUsRUFBRSxDQUFDLENBQUM7SUFDbkQsQ0FBQzs7Ozs7OztJQU1ELEdBQUcsQ0FBQyxFQUFXO1FBQ2IsT0FBTyxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxHQUFHLElBQUksQ0FBQyxPQUFPLElBQUksRUFBRSxFQUFFLENBQUMsQ0FBQztJQUNoRCxDQUFDOzs7Ozs7O0lBTUQsSUFBSSxDQUFDLEVBQVc7O2NBQ1IsTUFBTSxHQUFHLElBQUksS0FBSyxFQUFFO1FBQzFCLElBQUksRUFBRSxJQUFJLElBQUksRUFBRTtZQUFFLE1BQU0sQ0FBQyxJQUFJLENBQUMsTUFBTSxFQUFFLEVBQUUsQ0FBQyxDQUFDO1NBQUU7UUFFOUMsT0FBTyxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxHQUFHLElBQUksQ0FBQyxPQUFPLE9BQU8sRUFBRSxHQUFHLE1BQU0sQ0FBQyxDQUFDO0lBQ3hELENBQUM7Ozs7Ozs7Ozs7SUFNRCxJQUFJLENBQUMsTUFBZSxFQUFFLElBQWEsRUFBRSxJQUFhLEVBQUUsUUFBaUI7O2NBQzdELE1BQU0sR0FBRyxJQUFJLEtBQUssRUFBRTtRQUMxQixJQUFJLE1BQU0sSUFBSSxJQUFJLEVBQUU7WUFBRSxNQUFNLENBQUMsSUFBSSxDQUFDLFVBQVUsTUFBTSxFQUFFLENBQUMsQ0FBQztTQUFFO1FBQ3hELElBQUksSUFBSSxJQUFJLElBQUksRUFBRTtZQUFFLE1BQU0sQ0FBQyxJQUFJLENBQUMsUUFBUSxJQUFJLEVBQUUsQ0FBQyxDQUFDO1NBQUU7UUFDbEQsSUFBSSxJQUFJLElBQUksSUFBSSxFQUFFO1lBQUUsTUFBTSxDQUFDLElBQUksQ0FBQyxRQUFRLElBQUksRUFBRSxDQUFDLENBQUM7U0FBRTtRQUNsRCxJQUFJLFFBQVEsSUFBSSxJQUFJLEVBQUU7WUFBRSxNQUFNLENBQUMsSUFBSSxDQUFDLFlBQVksUUFBUSxFQUFFLENBQUMsQ0FBQztTQUFFO1FBRWhFLE9BQU8sSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsR0FBRyxJQUFJLENBQUMsT0FBTyxFQUFFLEVBQUUsR0FBRyxNQUFNLENBQUMsQ0FBQztJQUNuRCxDQUFDOzs7Ozs7Ozs7SUFRRCxPQUFPLENBQUMsSUFBdUI7UUFDN0IsT0FBTyxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLElBQUksQ0FBQyxPQUFPLFVBQVUsRUFBRSxPQUFPLElBQUksS0FBSyxRQUFRLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQzNHLENBQUM7Ozs7Ozs7SUFNRCxXQUFXLENBQUMsRUFBVztRQUNyQixPQUFPLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLEdBQUcsSUFBSSxDQUFDLE9BQU8sWUFBWSxFQUFFLEVBQUUsQ0FBQyxDQUFDO0lBQ3hELENBQUM7OztZQXZGRixVQUFVOzs7OzRDQVNJLE1BQU0sU0FBQyxRQUFRO1lBckJyQixRQUFROzs7Ozs7O0lBZ0JmLGdDQUE0Qjs7Ozs7SUFLaEIsK0JBQTRDOzs7OztJQUFFLDZCQUFzQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUsIEluamVjdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgUmVzdFV0aWwgfSBmcm9tICcuLi8uLi91dGlscy9yZXN0LXV0aWwnO1xuaW1wb3J0IHsgQ29yZUNvbmZpZyB9IGZyb20gJy4uLy4uL2NvcmUtbGliLm1vZHVsZSc7XG5cbmltcG9ydCB7IFNlYXJjaERlZmluaXRpb24gfSBmcm9tICcuLi9lbnRpdGllcy9TZWFyY2hEZWZpbml0aW9uJztcblxuXG4vKipcbiAqIFNlcnZpY2VzIGZvciBtZXRhZGF0YSBzZWFyY2ggYWN0aW9uc1xuICogQFJlcXVlc3RIZWFkZXIgWC1BUEktS0VZIFRoZSBrZXkgdG8gaWRlbnRpZnkgdGhlIGFwcGxpY2F0aW9uIChwb3J0YWwpXG4gKiBAUmVxdWVzdEhlYWRlciBYLUFDQ0VTUy1UT0tFTiBUaGUgdG9rZW4gdG8gaWRlbnRpZnkgdGhlIGxvZ2dlZC1pbiB1c2VyXG4gKiBAUmVzb3VyY2VHcm91cCBVc2VyIEFjdGlvbnMgXG4gKi9cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBTZWFyY2hTZXJ2aWNlIHtcblxuICAvLyBVUkwgdG8gd2ViIGFwaVxuICBwcml2YXRlIGJhc2VVcmwgPSAnL3NlYXJjaCc7XG5cbiAgLyoqXG4gICAqIENsYXNzIGNvbnN0cnVjdG9yXG4gICAqL1xuICBjb25zdHJ1Y3RvcihASW5qZWN0KCdjb25maWcnKSBwcml2YXRlIGNvbmZpZzogQ29yZUNvbmZpZywgcHJpdmF0ZSByZXN0OiBSZXN0VXRpbCkge1xuICAgIHRoaXMuYmFzZVVybCA9IHRoaXMuY29uZmlnLmFwaSArIHRoaXMuYmFzZVVybDtcbiAgfVxuXG5cbiAgLyoqXG4gICAqIENyZWF0ZSBuZXcgc2VhcmNoIGRlZmluaXRpb25cbiAgICogQFJldHVybjogRW50aXR5UmVzcG9uc2U8U2VhcmNoRGVmaW5pdGlvbj5cbiAgICovXG4gIGNyZWF0ZShib2R5PzogU2VhcmNoRGVmaW5pdGlvbikge1xuICAgIHJldHVybiB0aGlzLnJlc3QucG9zdChgJHt0aGlzLmJhc2VVcmx9YCwgdHlwZW9mIGJvZHkgPT09ICdvYmplY3QnID8gSlNPTi5zdHJpbmdpZnkoYm9keSkgOiBib2R5KTtcbiAgfVxuXG4gIC8qKlxuICAgKiBVcGRhdGUgc2VhcmNoIGRlZmluaXRpb25cbiAgICogQFJldHVybjogRW50aXR5UmVzcG9uc2U8U2VhcmNoRGVmaW5pdGlvbj5cbiAgICovXG4gIHVwZGF0ZShpZD86IHN0cmluZywgYm9keT86IFNlYXJjaERlZmluaXRpb24pIHtcbiAgICByZXR1cm4gdGhpcy5yZXN0LnB1dChgJHt0aGlzLmJhc2VVcmx9LyR7aWR9YCwgdHlwZW9mIGJvZHkgPT09ICdvYmplY3QnID8gSlNPTi5zdHJpbmdpZnkoYm9keSkgOiBib2R5KTtcbiAgfVxuXG4gIC8qKlxuICAgKiBEZWxldGUgc2VhcmNoIGRlZmluaXRpb24gZnJvbSB0aGUgc3lzdGVtXG4gICAqIEBSZXR1cm46IEFjdGlvblJlc3BvbnNlXG4gICAqL1xuICBkZWxldGUoaWQ/OiBzdHJpbmcpIHtcbiAgICByZXR1cm4gdGhpcy5yZXN0LmRlbGV0ZShgJHt0aGlzLmJhc2VVcmx9LyR7aWR9YCk7XG4gIH1cblxuICAvKipcbiAgICogR2V0IHNpbmdsZSBzZWFyY2ggZGVmaW5pdGlvbiBieSBpZFxuICAgKiBAUmV0dXJuOiBFbnRpdHlSZXNwb25zZTxTZWFyY2hEZWZpbml0aW9uPlxuICAgKi9cbiAgZ2V0KGlkPzogc3RyaW5nKSB7XG4gICAgcmV0dXJuIHRoaXMucmVzdC5nZXQoYCR7dGhpcy5iYXNlVXJsfS8ke2lkfWApO1xuICB9XG5cbiAgLyoqXG4gICAqIEdldCBtdWx0aXBsZSBzZWFyY2ggZGVmaW5pdGlvbnMgYnkgbGlzdCBvZiBpZHNcbiAgICogQFJldHVybjogRW50aXRpZXNSZXNwb25zZTxTZWFyY2hEZWZpbml0aW9uPlxuICAgKi9cbiAgbGlzdChpZD86IHN0cmluZykge1xuICAgIGNvbnN0IHBhcmFtcyA9IG5ldyBBcnJheSgpO1x0XHRcbiAgICBpZiAoaWQgIT0gbnVsbCkgeyBwYXJhbXMucHVzaChgaWQ9JHtpZH1gKTsgfVxuXG5cdFx0cmV0dXJuIHRoaXMucmVzdC5nZXQoYCR7dGhpcy5iYXNlVXJsfS9saXN0YCwgLi4ucGFyYW1zKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBGaW5kIHNlYXJjaCBkZWZpbml0aW9ucyBieSBmaWx0ZXJzXG4gICAqIEBSZXR1cm46IFF1ZXJ5UmVzcG9uc2U8U2VhcmNoRGVmaW5pdGlvbj5cbiAgICovXG4gIGZpbmQoc2VhcmNoPzogc3RyaW5nLCBzb3J0Pzogc3RyaW5nLCBwYWdlPzogbnVtYmVyLCBwYWdlU2l6ZT86IG51bWJlcikge1xuICAgIGNvbnN0IHBhcmFtcyA9IG5ldyBBcnJheSgpO1x0XHRcbiAgICBpZiAoc2VhcmNoICE9IG51bGwpIHsgcGFyYW1zLnB1c2goYHNlYXJjaD0ke3NlYXJjaH1gKTsgfVxuICAgIGlmIChzb3J0ICE9IG51bGwpIHsgcGFyYW1zLnB1c2goYHNvcnQ9JHtzb3J0fWApOyB9XG4gICAgaWYgKHBhZ2UgIT0gbnVsbCkgeyBwYXJhbXMucHVzaChgcGFnZT0ke3BhZ2V9YCk7IH1cbiAgICBpZiAocGFnZVNpemUgIT0gbnVsbCkgeyBwYXJhbXMucHVzaChgcGFnZVNpemU9JHtwYWdlU2l6ZX1gKTsgfVxuXG5cdFx0cmV0dXJuIHRoaXMucmVzdC5nZXQoYCR7dGhpcy5iYXNlVXJsfWAsIC4uLnBhcmFtcyk7XG4gIH1cblxuICAvKipcbiAgICogUGVyZm9ybSBtZXRhZGF0YSBzZWFyY2ggYnkgdGhlIHNlYXJjaCBkZWZpbml0aW9uXG4gICAqIEBSZXR1cm46IFF1ZXJ5UmVzcG9uc2U8T2JqZWN0SW5mbz4gLSBsaXN0IG9mIGRldGVjdGVkIG9iamVjdHNcbiAgICogU2VhcmNoIGltYWdlIHdlYiBzb2NrZXQgKC93cy9zZWFyY2g/c2VhcmNoPXNlYXJjaElkKSBtdXN0IGJlIG9wZW4gYmVmb3JlIHRoaXMgbWV0aG9kIGludm9jYXRpb24uXG4gICAqIFBsZWFzZSBwcm92aWRlIHNlYXJjaCBpZCB0byBxdWVyeSBkZWZpbml0aW9uIGFuZCB1c2UgdGhlIHNhbWUgaWQgZm9yIHRoZSB3ZWIgc29ja2V0XG4gICAqL1xuICBleGVjdXRlKGJvZHk/OiBTZWFyY2hEZWZpbml0aW9uKSB7XG4gICAgcmV0dXJuIHRoaXMucmVzdC5wb3N0KGAke3RoaXMuYmFzZVVybH0vZXhlY3V0ZWAsIHR5cGVvZiBib2R5ID09PSAnb2JqZWN0JyA/IEpTT04uc3RyaW5naWZ5KGJvZHkpIDogYm9keSk7XG4gIH1cblxuICAvKipcbiAgICogUGVyZm9ybSBtZXRhZGF0YSBzYXZlZCBzZWFyY2ggYnkgdGhlIHNlYXJjaCBpZFxuICAgKiBAUmV0dXJuOiBRdWVyeVJlc3BvbnNlPE9iamVjdEluZm8+IC0gbGlzdCBvZiBkZXRlY3RlZCBvYmplY3RzXG4gICAqL1xuICBleGVjdXRlQnlJZChpZD86IHN0cmluZykge1xuICAgIHJldHVybiB0aGlzLnJlc3QuZ2V0KGAke3RoaXMuYmFzZVVybH0vZXhlY3V0ZS8ke2lkfWApO1xuICB9XG5cbn1cbiJdfQ==