/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable, Inject } from '@angular/core';
import { RestUtil } from '../../utils/rest-util';
/**
 * Services for calendars (holidays) actions
 * \@RequestHeader X-API-KEY The key to identify the application (portal)
 * \@RequestHeader X-ACCESS-TOKEN The token to identify the logged-in user
 * \@ResourceGroup User Actions
 */
export class CalendarsService {
    /**
     * Class constructor
     * @param {?} config
     * @param {?} rest
     */
    constructor(config, rest) {
        this.config = config;
        this.rest = rest;
        // URL to web api
        this.baseUrl = '/calendars';
        this.baseUrl = this.config.api + this.baseUrl;
    }
    /**
     * Create new calendar
     * \@Return: EntityResponse<Calendar>
     * @param {?=} body
     * @return {?}
     */
    create(body) {
        return this.rest.post(`${this.baseUrl}/`, JSON.stringify(body));
    }
    /**
     * Update calendar
     * \@Return: EntityResponse<Calendar>
     * @param {?=} id
     * @param {?=} body
     * @return {?}
     */
    update(id, body) {
        return this.rest.put(`${this.baseUrl}/${id}`, JSON.stringify(body));
    }
    /**
     * Delete calendar from the system
     * \@Return: ActionResponse
     * @param {?=} id
     * @return {?}
     */
    delete(id) {
        return this.rest.delete(`${this.baseUrl}/${id}`);
    }
    /**
     * Get single calendar by id
     * \@Return: EntityResponse<Calendar>
     * @param {?=} id
     * @return {?}
     */
    get(id) {
        return this.rest.get(`${this.baseUrl}/${id}`);
    }
    /**
     * Get calendars by list of ids
     * \@Return: EntitiesResponse<Calendar>
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
     * Find calendars by filters
     * \@Return: QueryResponse<Calendar>
     * @param {?=} search
     * @param {?=} folderId
     * @param {?=} sort
     * @param {?=} page
     * @param {?=} pageSize
     * @return {?}
     */
    find(search, folderId, sort, page, pageSize) {
        /** @type {?} */
        const params = new Array();
        if (search != null) {
            params.push(`search=${search}`);
        }
        if (folderId != null) {
            params.push(`folderId=${folderId}`);
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
        return this.rest.get(`${this.baseUrl}/`, ...params);
    }
    /**
     * Find all calendars for a specified level in the folder hierarchy
     * This method returns all the calendars of the current folder and all parent folders
     * \@Return: EntitiesResponse<Calendar>
     * @param {?=} folderId
     * @return {?}
     */
    getFolderCalendars(folderId) {
        return this.rest.get(`${this.baseUrl}/folder/${folderId}`);
    }
}
CalendarsService.decorators = [
    { type: Injectable }
];
/** @nocollapse */
CalendarsService.ctorParameters = () => [
    { type: undefined, decorators: [{ type: Inject, args: ['config',] }] },
    { type: RestUtil }
];
if (false) {
    /**
     * @type {?}
     * @private
     */
    CalendarsService.prototype.baseUrl;
    /**
     * @type {?}
     * @private
     */
    CalendarsService.prototype.config;
    /**
     * @type {?}
     * @private
     */
    CalendarsService.prototype.rest;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2FsZW5kYXJzU2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BhZ2VudHZpL25nLWNvcmUtbGliLyIsInNvdXJjZXMiOlsibGliL3NlcnZpY2VzL2NhbGVuZGFyc1NlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ25ELE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSx1QkFBdUIsQ0FBQzs7Ozs7OztBQWFqRCxNQUFNLE9BQU8sZ0JBQWdCOzs7Ozs7SUFRM0IsWUFBc0MsTUFBa0IsRUFBVSxJQUFjO1FBQTFDLFdBQU0sR0FBTixNQUFNLENBQVk7UUFBVSxTQUFJLEdBQUosSUFBSSxDQUFVOztRQUx4RSxZQUFPLEdBQUcsWUFBWSxDQUFDO1FBTTdCLElBQUksQ0FBQyxPQUFPLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxHQUFHLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQztJQUNoRCxDQUFDOzs7Ozs7O0lBT0QsTUFBTSxDQUFDLElBQWU7UUFDcEIsT0FBTyxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLElBQUksQ0FBQyxPQUFPLEdBQUcsRUFBRSxJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUM7SUFDbEUsQ0FBQzs7Ozs7Ozs7SUFNRCxNQUFNLENBQUMsRUFBVyxFQUFFLElBQWU7UUFDakMsT0FBTyxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxHQUFHLElBQUksQ0FBQyxPQUFPLElBQUksRUFBRSxFQUFFLEVBQUUsSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDO0lBQ3RFLENBQUM7Ozs7Ozs7SUFNRCxNQUFNLENBQUMsRUFBVztRQUNoQixPQUFPLElBQUksQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLEdBQUcsSUFBSSxDQUFDLE9BQU8sSUFBSSxFQUFFLEVBQUUsQ0FBQyxDQUFDO0lBQ25ELENBQUM7Ozs7Ozs7SUFNRCxHQUFHLENBQUMsRUFBVztRQUNiLE9BQU8sSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsR0FBRyxJQUFJLENBQUMsT0FBTyxJQUFJLEVBQUUsRUFBRSxDQUFDLENBQUM7SUFDaEQsQ0FBQzs7Ozs7OztJQU1ELElBQUksQ0FBQyxFQUFXOztjQUNSLE1BQU0sR0FBRyxJQUFJLEtBQUssRUFBRTtRQUMxQixJQUFJLEVBQUUsSUFBSSxJQUFJLEVBQUU7WUFBRSxNQUFNLENBQUMsSUFBSSxDQUFDLE1BQU0sRUFBRSxFQUFFLENBQUMsQ0FBQztTQUFFO1FBRTlDLE9BQU8sSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsR0FBRyxJQUFJLENBQUMsT0FBTyxPQUFPLEVBQUUsR0FBRyxNQUFNLENBQUMsQ0FBQztJQUN4RCxDQUFDOzs7Ozs7Ozs7OztJQU1ELElBQUksQ0FBQyxNQUFlLEVBQUUsUUFBaUIsRUFBRSxJQUFhLEVBQUUsSUFBYSxFQUFFLFFBQWlCOztjQUNoRixNQUFNLEdBQUcsSUFBSSxLQUFLLEVBQUU7UUFDMUIsSUFBSSxNQUFNLElBQUksSUFBSSxFQUFFO1lBQUUsTUFBTSxDQUFDLElBQUksQ0FBQyxVQUFVLE1BQU0sRUFBRSxDQUFDLENBQUM7U0FBRTtRQUN4RCxJQUFJLFFBQVEsSUFBSSxJQUFJLEVBQUU7WUFBRSxNQUFNLENBQUMsSUFBSSxDQUFDLFlBQVksUUFBUSxFQUFFLENBQUMsQ0FBQztTQUFFO1FBQzlELElBQUksSUFBSSxJQUFJLElBQUksRUFBRTtZQUFFLE1BQU0sQ0FBQyxJQUFJLENBQUMsUUFBUSxJQUFJLEVBQUUsQ0FBQyxDQUFDO1NBQUU7UUFDbEQsSUFBSSxJQUFJLElBQUksSUFBSSxFQUFFO1lBQUUsTUFBTSxDQUFDLElBQUksQ0FBQyxRQUFRLElBQUksRUFBRSxDQUFDLENBQUM7U0FBRTtRQUNsRCxJQUFJLFFBQVEsSUFBSSxJQUFJLEVBQUU7WUFBRSxNQUFNLENBQUMsSUFBSSxDQUFDLFlBQVksUUFBUSxFQUFFLENBQUMsQ0FBQztTQUFFO1FBRWhFLE9BQU8sSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsR0FBRyxJQUFJLENBQUMsT0FBTyxHQUFHLEVBQUUsR0FBRyxNQUFNLENBQUMsQ0FBQztJQUNwRCxDQUFDOzs7Ozs7OztJQU9ELGtCQUFrQixDQUFDLFFBQWlCO1FBQ2xDLE9BQU8sSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsR0FBRyxJQUFJLENBQUMsT0FBTyxXQUFXLFFBQVEsRUFBRSxDQUFDLENBQUM7SUFDN0QsQ0FBQzs7O1lBL0VGLFVBQVU7Ozs7NENBU0ksTUFBTSxTQUFDLFFBQVE7WUFyQnJCLFFBQVE7Ozs7Ozs7SUFnQmYsbUNBQStCOzs7OztJQUtuQixrQ0FBNEM7Ozs7O0lBQUUsZ0NBQXNCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSwgSW5qZWN0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBSZXN0VXRpbCB9IGZyb20gJy4uLy4uL3V0aWxzL3Jlc3QtdXRpbCc7XG5pbXBvcnQgeyBDb3JlQ29uZmlnIH0gZnJvbSAnLi4vLi4vY29yZS1saWIubW9kdWxlJztcblxuaW1wb3J0IHsgQ2FsZW5kYXIgfSBmcm9tICcuLi9lbnRpdGllcy9DYWxlbmRhcic7XG5cblxuLyoqXG4gKiBTZXJ2aWNlcyBmb3IgY2FsZW5kYXJzIChob2xpZGF5cykgYWN0aW9uc1xuICogQFJlcXVlc3RIZWFkZXIgWC1BUEktS0VZIFRoZSBrZXkgdG8gaWRlbnRpZnkgdGhlIGFwcGxpY2F0aW9uIChwb3J0YWwpXG4gKiBAUmVxdWVzdEhlYWRlciBYLUFDQ0VTUy1UT0tFTiBUaGUgdG9rZW4gdG8gaWRlbnRpZnkgdGhlIGxvZ2dlZC1pbiB1c2VyXG4gKiBAUmVzb3VyY2VHcm91cCBVc2VyIEFjdGlvbnMgXG4gKi9cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBDYWxlbmRhcnNTZXJ2aWNlIHtcblxuICAvLyBVUkwgdG8gd2ViIGFwaVxuICBwcml2YXRlIGJhc2VVcmwgPSAnL2NhbGVuZGFycyc7XG5cbiAgLyoqXG4gICAqIENsYXNzIGNvbnN0cnVjdG9yXG4gICAqL1xuICBjb25zdHJ1Y3RvcihASW5qZWN0KCdjb25maWcnKSBwcml2YXRlIGNvbmZpZzogQ29yZUNvbmZpZywgcHJpdmF0ZSByZXN0OiBSZXN0VXRpbCkge1xuICAgIHRoaXMuYmFzZVVybCA9IHRoaXMuY29uZmlnLmFwaSArIHRoaXMuYmFzZVVybDtcbiAgfVxuXG5cbiAgLyoqXG4gICAqIENyZWF0ZSBuZXcgY2FsZW5kYXJcbiAgICogQFJldHVybjogRW50aXR5UmVzcG9uc2U8Q2FsZW5kYXI+XG4gICAqL1xuICBjcmVhdGUoYm9keT86IENhbGVuZGFyKSB7XG4gICAgcmV0dXJuIHRoaXMucmVzdC5wb3N0KGAke3RoaXMuYmFzZVVybH0vYCwgSlNPTi5zdHJpbmdpZnkoYm9keSkpO1xuICB9XG5cbiAgLyoqXG4gICAqIFVwZGF0ZSBjYWxlbmRhclxuICAgKiBAUmV0dXJuOiBFbnRpdHlSZXNwb25zZTxDYWxlbmRhcj5cbiAgICovXG4gIHVwZGF0ZShpZD86IHN0cmluZywgYm9keT86IENhbGVuZGFyKSB7XG4gICAgcmV0dXJuIHRoaXMucmVzdC5wdXQoYCR7dGhpcy5iYXNlVXJsfS8ke2lkfWAsIEpTT04uc3RyaW5naWZ5KGJvZHkpKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBEZWxldGUgY2FsZW5kYXIgZnJvbSB0aGUgc3lzdGVtXG4gICAqIEBSZXR1cm46IEFjdGlvblJlc3BvbnNlXG4gICAqL1xuICBkZWxldGUoaWQ/OiBzdHJpbmcpIHtcbiAgICByZXR1cm4gdGhpcy5yZXN0LmRlbGV0ZShgJHt0aGlzLmJhc2VVcmx9LyR7aWR9YCk7XG4gIH1cblxuICAvKipcbiAgICogR2V0IHNpbmdsZSBjYWxlbmRhciBieSBpZFxuICAgKiBAUmV0dXJuOiBFbnRpdHlSZXNwb25zZTxDYWxlbmRhcj5cbiAgICovXG4gIGdldChpZD86IHN0cmluZykge1xuICAgIHJldHVybiB0aGlzLnJlc3QuZ2V0KGAke3RoaXMuYmFzZVVybH0vJHtpZH1gKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBHZXQgY2FsZW5kYXJzIGJ5IGxpc3Qgb2YgaWRzXG4gICAqIEBSZXR1cm46IEVudGl0aWVzUmVzcG9uc2U8Q2FsZW5kYXI+XG4gICAqL1xuICBsaXN0KGlkPzogc3RyaW5nKSB7XG4gICAgY29uc3QgcGFyYW1zID0gbmV3IEFycmF5KCk7XHRcdFxuICAgIGlmIChpZCAhPSBudWxsKSB7IHBhcmFtcy5wdXNoKGBpZD0ke2lkfWApOyB9XG5cblx0XHRyZXR1cm4gdGhpcy5yZXN0LmdldChgJHt0aGlzLmJhc2VVcmx9L2xpc3RgLCAuLi5wYXJhbXMpO1xuICB9XG5cbiAgLyoqXG4gICAqIEZpbmQgY2FsZW5kYXJzIGJ5IGZpbHRlcnNcbiAgICogQFJldHVybjogUXVlcnlSZXNwb25zZTxDYWxlbmRhcj5cbiAgICovXG4gIGZpbmQoc2VhcmNoPzogc3RyaW5nLCBmb2xkZXJJZD86IHN0cmluZywgc29ydD86IHN0cmluZywgcGFnZT86IG51bWJlciwgcGFnZVNpemU/OiBudW1iZXIpIHtcbiAgICBjb25zdCBwYXJhbXMgPSBuZXcgQXJyYXkoKTtcdFx0XG4gICAgaWYgKHNlYXJjaCAhPSBudWxsKSB7IHBhcmFtcy5wdXNoKGBzZWFyY2g9JHtzZWFyY2h9YCk7IH1cbiAgICBpZiAoZm9sZGVySWQgIT0gbnVsbCkgeyBwYXJhbXMucHVzaChgZm9sZGVySWQ9JHtmb2xkZXJJZH1gKTsgfVxuICAgIGlmIChzb3J0ICE9IG51bGwpIHsgcGFyYW1zLnB1c2goYHNvcnQ9JHtzb3J0fWApOyB9XG4gICAgaWYgKHBhZ2UgIT0gbnVsbCkgeyBwYXJhbXMucHVzaChgcGFnZT0ke3BhZ2V9YCk7IH1cbiAgICBpZiAocGFnZVNpemUgIT0gbnVsbCkgeyBwYXJhbXMucHVzaChgcGFnZVNpemU9JHtwYWdlU2l6ZX1gKTsgfVxuXG5cdFx0cmV0dXJuIHRoaXMucmVzdC5nZXQoYCR7dGhpcy5iYXNlVXJsfS9gLCAuLi5wYXJhbXMpO1xuICB9XG5cbiAgLyoqXG4gICAqIEZpbmQgYWxsIGNhbGVuZGFycyBmb3IgYSBzcGVjaWZpZWQgbGV2ZWwgaW4gdGhlIGZvbGRlciBoaWVyYXJjaHlcbiAgICogVGhpcyBtZXRob2QgcmV0dXJucyBhbGwgdGhlIGNhbGVuZGFycyBvZiB0aGUgY3VycmVudCBmb2xkZXIgYW5kIGFsbCBwYXJlbnQgZm9sZGVyc1xuICAgKiBAUmV0dXJuOiBFbnRpdGllc1Jlc3BvbnNlPENhbGVuZGFyPlxuICAgKi9cbiAgZ2V0Rm9sZGVyQ2FsZW5kYXJzKGZvbGRlcklkPzogc3RyaW5nKSB7XG4gICAgcmV0dXJuIHRoaXMucmVzdC5nZXQoYCR7dGhpcy5iYXNlVXJsfS9mb2xkZXIvJHtmb2xkZXJJZH1gKTtcbiAgfVxuXG59XG4iXX0=