import { Injectable, Inject } from '@angular/core';
import { RestUtil } from '../../utils/rest-util';
import { CoreConfig } from '../../config';
import * as i0 from "@angular/core";
import * as i1 from "../../utils/rest-util";
import * as i2 from "../../config";
/**
 * Services for case management actions
 * @RequestHeader X-API-KEY The key to identify the application (portal)
 * @RequestHeader X-ACCESS-TOKEN The token to identify the logged-in user
 */
export class CasesService {
    /**
     * Class constructor
     */
    constructor(config, rest) {
        this.config = config;
        this.rest = rest;
        // URL to web api
        this.baseUrl = '/cases';
        this.baseUrl = this.config.api + this.baseUrl;
    }
    /**
     * Create new case
     * @Return: EntityResponse<CaseInfo>
     */
    create(body) {
        return this.rest.post(`${this.baseUrl}`, typeof body === 'object' ? JSON.stringify(body) : body);
    }
    /**
     * Update case
     * @Return: EntityResponse<CaseInfo>
     */
    update(body) {
        return this.rest.put(`${this.baseUrl}`, typeof body === 'object' ? JSON.stringify(body) : body);
    }
    /**
     * Delete case from the system
     * @Return: ActionResponse
     */
    delete(id) {
        return this.rest.delete(`${this.baseUrl}/${id}`);
    }
    /**
     * Get single case by id
     * @Return: EntityResponse<CaseInfo>
     */
    get(id) {
        return this.rest.get(`${this.baseUrl}/${id}`);
    }
    /**
     * Find list of all public cases and user owned private cases
     * @Return: QueryResponse<CaseInfo>
     */
    find(search, sort, page, pageSize) {
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
     * Add bulk of search events to the case
     * @Return: EntityResponse<CaseInfo>
     */
    addSearchEvents(id, sessionId, eventId) {
        const params = new Array();
        if (eventId != null) {
            params.push(`eventId=${eventId}`);
        }
        return this.rest.post(`${this.baseUrl}/${id}/sessions/${sessionId}/events`, null, ...params);
    }
    /**
     * Remove bulk of search events from the case
     * @Return: EntityResponse<CaseInfo>
     */
    removeSearchEvents(id, eventId) {
        const params = new Array();
        if (eventId != null) {
            params.push(`eventId=${eventId}`);
        }
        return this.rest.delete(`${this.baseUrl}/${id}/events`, ...params);
    }
    /**
     * Get all timestamped objects of the provided case event
     * @Return: EntityResponse<TimestampedCrop>
     */
    getEventObjectCrops(id, eventId) {
        return this.rest.get(`${this.baseUrl}/${id}/events/${eventId}`);
    }
    /**
     * Get single timestamped object of the provided case event
     * @Return: EntityResponse<TimestampedCrop>
     */
    getMainEventObjectCrop(id, eventId) {
        return this.rest.get(`${this.baseUrl}/${id}/event/${eventId}`);
    }
}
/** @nocollapse */ CasesService.ɵfac = function CasesService_Factory(t) { return new (t || CasesService)(i0.ɵɵinject('config'), i0.ɵɵinject(i1.RestUtil)); };
/** @nocollapse */ CasesService.ɵprov = i0.ɵɵdefineInjectable({ token: CasesService, factory: CasesService.ɵfac });
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(CasesService, [{
        type: Injectable
    }], function () { return [{ type: i2.CoreConfig, decorators: [{
                type: Inject,
                args: ['config']
            }] }, { type: i1.RestUtil }]; }, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2FzZXNTZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6Ii4uLy4uLy4uL3Byb2plY3RzL25nLWNvcmUtbGliL3NyYy8iLCJzb3VyY2VzIjpbImxpYi9zZXJ2aWNlcy9jYXNlc1NlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDbkQsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLHVCQUF1QixDQUFDO0FBQ2pELE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxjQUFjLENBQUM7Ozs7QUFLMUM7Ozs7R0FJRztBQUVILE1BQU0sT0FBTyxZQUFZO0lBS3ZCOztPQUVHO0lBQ0gsWUFBc0MsTUFBa0IsRUFBVSxJQUFjO1FBQTFDLFdBQU0sR0FBTixNQUFNLENBQVk7UUFBVSxTQUFJLEdBQUosSUFBSSxDQUFVO1FBTmhGLGlCQUFpQjtRQUNULFlBQU8sR0FBRyxRQUFRLENBQUM7UUFNekIsSUFBSSxDQUFDLE9BQU8sR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDLEdBQUcsR0FBRyxJQUFJLENBQUMsT0FBTyxDQUFDO0lBQ2hELENBQUM7SUFHRDs7O09BR0c7SUFDSCxNQUFNLENBQUMsSUFBZTtRQUNwQixPQUFPLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsSUFBSSxDQUFDLE9BQU8sRUFBRSxFQUFFLE9BQU8sSUFBSSxLQUFLLFFBQVEsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDbkcsQ0FBQztJQUVEOzs7T0FHRztJQUNILE1BQU0sQ0FBQyxJQUFlO1FBQ3BCLE9BQU8sSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsR0FBRyxJQUFJLENBQUMsT0FBTyxFQUFFLEVBQUUsT0FBTyxJQUFJLEtBQUssUUFBUSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsU0FB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LFdBQVosWUFBWTtrREFBWixZQUFZO2NBRHhCLFVBQVU7O3NCQVNJLE1BQU07dUJBQUMsUUFBUSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUsIEluamVjdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgUmVzdFV0aWwgfSBmcm9tICcuLi8uLi91dGlscy9yZXN0LXV0aWwnO1xuaW1wb3J0IHsgQ29yZUNvbmZpZyB9IGZyb20gJy4uLy4uL2NvbmZpZyc7XG5cbmltcG9ydCB7IENhc2VJbmZvIH0gZnJvbSAnLi4vZW50aXRpZXMvQ2FzZUluZm8nO1xuXG5cbi8qKlxuICogU2VydmljZXMgZm9yIGNhc2UgbWFuYWdlbWVudCBhY3Rpb25zXG4gKiBAUmVxdWVzdEhlYWRlciBYLUFQSS1LRVkgVGhlIGtleSB0byBpZGVudGlmeSB0aGUgYXBwbGljYXRpb24gKHBvcnRhbClcbiAqIEBSZXF1ZXN0SGVhZGVyIFgtQUNDRVNTLVRPS0VOIFRoZSB0b2tlbiB0byBpZGVudGlmeSB0aGUgbG9nZ2VkLWluIHVzZXIgXG4gKi9cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBDYXNlc1NlcnZpY2Uge1xuXG4gIC8vIFVSTCB0byB3ZWIgYXBpXG4gIHByaXZhdGUgYmFzZVVybCA9ICcvY2FzZXMnO1xuXG4gIC8qKlxuICAgKiBDbGFzcyBjb25zdHJ1Y3RvclxuICAgKi9cbiAgY29uc3RydWN0b3IoQEluamVjdCgnY29uZmlnJykgcHJpdmF0ZSBjb25maWc6IENvcmVDb25maWcsIHByaXZhdGUgcmVzdDogUmVzdFV0aWwpIHtcbiAgICB0aGlzLmJhc2VVcmwgPSB0aGlzLmNvbmZpZy5hcGkgKyB0aGlzLmJhc2VVcmw7XG4gIH1cblxuXG4gIC8qKlxuICAgKiBDcmVhdGUgbmV3IGNhc2VcbiAgICogQFJldHVybjogRW50aXR5UmVzcG9uc2U8Q2FzZUluZm8+XG4gICAqL1xuICBjcmVhdGUoYm9keT86IENhc2VJbmZvKSB7XG4gICAgcmV0dXJuIHRoaXMucmVzdC5wb3N0KGAke3RoaXMuYmFzZVVybH1gLCB0eXBlb2YgYm9keSA9PT0gJ29iamVjdCcgPyBKU09OLnN0cmluZ2lmeShib2R5KSA6IGJvZHkpO1xuICB9XG5cbiAgLyoqXG4gICAqIFVwZGF0ZSBjYXNlXG4gICAqIEBSZXR1cm46IEVudGl0eVJlc3BvbnNlPENhc2VJbmZvPlxuICAgKi9cbiAgdXBkYXRlKGJvZHk/OiBDYXNlSW5mbykge1xuICAgIHJldHVybiB0aGlzLnJlc3QucHV0KGAke3RoaXMuYmFzZVVybH1gLCB0eXBlb2YgYm9keSA9PT0gJ29iamVjdCcgPyBKU09OLnN0cmluZ2lmeShib2R5KSA6IGJvZHkpO1xuICB9XG5cbiAgLyoqXG4gICAqIERlbGV0ZSBjYXNlIGZyb20gdGhlIHN5c3RlbVxuICAgKiBAUmV0dXJuOiBBY3Rpb25SZXNwb25zZVxuICAgKi9cbiAgZGVsZXRlKGlkPzogc3RyaW5nKSB7XG4gICAgcmV0dXJuIHRoaXMucmVzdC5kZWxldGUoYCR7dGhpcy5iYXNlVXJsfS8ke2lkfWApO1xuICB9XG5cbiAgLyoqXG4gICAqIEdldCBzaW5nbGUgY2FzZSBieSBpZFxuICAgKiBAUmV0dXJuOiBFbnRpdHlSZXNwb25zZTxDYXNlSW5mbz5cbiAgICovXG4gIGdldChpZD86IHN0cmluZykge1xuICAgIHJldHVybiB0aGlzLnJlc3QuZ2V0KGAke3RoaXMuYmFzZVVybH0vJHtpZH1gKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBGaW5kIGxpc3Qgb2YgYWxsIHB1YmxpYyBjYXNlcyBhbmQgdXNlciBvd25lZCBwcml2YXRlIGNhc2VzXG4gICAqIEBSZXR1cm46IFF1ZXJ5UmVzcG9uc2U8Q2FzZUluZm8+XG4gICAqL1xuICBmaW5kKHNlYXJjaD86IHN0cmluZywgc29ydD86IHN0cmluZywgcGFnZT86IG51bWJlciwgcGFnZVNpemU/OiBudW1iZXIpIHtcbiAgICBjb25zdCBwYXJhbXMgPSBuZXcgQXJyYXkoKTtcdFx0XG4gICAgaWYgKHNlYXJjaCAhPSBudWxsKSB7IHBhcmFtcy5wdXNoKGBzZWFyY2g9JHtzZWFyY2h9YCk7IH1cbiAgICBpZiAoc29ydCAhPSBudWxsKSB7IHBhcmFtcy5wdXNoKGBzb3J0PSR7c29ydH1gKTsgfVxuICAgIGlmIChwYWdlICE9IG51bGwpIHsgcGFyYW1zLnB1c2goYHBhZ2U9JHtwYWdlfWApOyB9XG4gICAgaWYgKHBhZ2VTaXplICE9IG51bGwpIHsgcGFyYW1zLnB1c2goYHBhZ2VTaXplPSR7cGFnZVNpemV9YCk7IH1cblxuXHRcdHJldHVybiB0aGlzLnJlc3QuZ2V0KGAke3RoaXMuYmFzZVVybH1gLCAuLi5wYXJhbXMpO1xuICB9XG5cbiAgLyoqXG4gICAqIEFkZCBidWxrIG9mIHNlYXJjaCBldmVudHMgdG8gdGhlIGNhc2VcbiAgICogQFJldHVybjogRW50aXR5UmVzcG9uc2U8Q2FzZUluZm8+XG4gICAqL1xuICBhZGRTZWFyY2hFdmVudHMoaWQ/OiBzdHJpbmcsIHNlc3Npb25JZD86IHN0cmluZywgZXZlbnRJZD86IHN0cmluZ1tdKSB7XG4gICAgY29uc3QgcGFyYW1zID0gbmV3IEFycmF5KCk7XHRcdFxuICAgIGlmIChldmVudElkICE9IG51bGwpIHsgcGFyYW1zLnB1c2goYGV2ZW50SWQ9JHtldmVudElkfWApOyB9XG5cblx0XHRyZXR1cm4gdGhpcy5yZXN0LnBvc3QoYCR7dGhpcy5iYXNlVXJsfS8ke2lkfS9zZXNzaW9ucy8ke3Nlc3Npb25JZH0vZXZlbnRzYCwgbnVsbCwgLi4ucGFyYW1zKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBSZW1vdmUgYnVsayBvZiBzZWFyY2ggZXZlbnRzIGZyb20gdGhlIGNhc2VcbiAgICogQFJldHVybjogRW50aXR5UmVzcG9uc2U8Q2FzZUluZm8+XG4gICAqL1xuICByZW1vdmVTZWFyY2hFdmVudHMoaWQ/OiBzdHJpbmcsIGV2ZW50SWQ/OiBzdHJpbmdbXSkge1xuICAgIGNvbnN0IHBhcmFtcyA9IG5ldyBBcnJheSgpO1x0XHRcbiAgICBpZiAoZXZlbnRJZCAhPSBudWxsKSB7IHBhcmFtcy5wdXNoKGBldmVudElkPSR7ZXZlbnRJZH1gKTsgfVxuXG5cdFx0cmV0dXJuIHRoaXMucmVzdC5kZWxldGUoYCR7dGhpcy5iYXNlVXJsfS8ke2lkfS9ldmVudHNgLCAuLi5wYXJhbXMpO1xuICB9XG5cbiAgLyoqXG4gICAqIEdldCBhbGwgdGltZXN0YW1wZWQgb2JqZWN0cyBvZiB0aGUgcHJvdmlkZWQgY2FzZSBldmVudFxuICAgKiBAUmV0dXJuOiBFbnRpdHlSZXNwb25zZTxUaW1lc3RhbXBlZENyb3A+XG4gICAqL1xuICBnZXRFdmVudE9iamVjdENyb3BzKGlkPzogc3RyaW5nLCBldmVudElkPzogc3RyaW5nKSB7XG4gICAgcmV0dXJuIHRoaXMucmVzdC5nZXQoYCR7dGhpcy5iYXNlVXJsfS8ke2lkfS9ldmVudHMvJHtldmVudElkfWApO1xuICB9XG5cbiAgLyoqXG4gICAqIEdldCBzaW5nbGUgdGltZXN0YW1wZWQgb2JqZWN0IG9mIHRoZSBwcm92aWRlZCBjYXNlIGV2ZW50XG4gICAqIEBSZXR1cm46IEVudGl0eVJlc3BvbnNlPFRpbWVzdGFtcGVkQ3JvcD5cbiAgICovXG4gIGdldE1haW5FdmVudE9iamVjdENyb3AoaWQ/OiBzdHJpbmcsIGV2ZW50SWQ/OiBzdHJpbmcpIHtcbiAgICByZXR1cm4gdGhpcy5yZXN0LmdldChgJHt0aGlzLmJhc2VVcmx9LyR7aWR9L2V2ZW50LyR7ZXZlbnRJZH1gKTtcbiAgfVxuXG59XG4iXX0=