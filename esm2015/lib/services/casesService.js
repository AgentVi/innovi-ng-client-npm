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
    addSearchEvents(id, sessionId, eventId, description) {
        const params = new Array();
        if (eventId != null) {
            params.push(`eventId=${eventId}`);
        }
        return this.rest.post(`${this.baseUrl}/${id}/sessions/${sessionId}/events`, typeof description === 'object' ? JSON.stringify(description) : description, ...params);
    }
    /**
     * Update event description
     * @Return: EntityResponse<CaseInfo>
     */
    updateEventDescription(id, eventId, description) {
        const params = new Array();
        if (eventId != null) {
            params.push(`eventId=${eventId}`);
        }
        return this.rest.put(`${this.baseUrl}/${id}/events/{eventId}/description`, typeof description === 'object' ? JSON.stringify(description) : description, ...params);
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
     * @Return: EntityResponse<TimestampedCropsData>
     */
    getEventObjectCropsData(id, eventId) {
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2FzZXNTZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6Ii4uLy4uLy4uL3Byb2plY3RzL25nLWNvcmUtbGliL3NyYy8iLCJzb3VyY2VzIjpbImxpYi9zZXJ2aWNlcy9jYXNlc1NlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDbkQsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLHVCQUF1QixDQUFDO0FBQ2pELE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxjQUFjLENBQUM7Ozs7QUFLMUM7Ozs7R0FJRztBQUVILE1BQU0sT0FBTyxZQUFZO0lBS3ZCOztPQUVHO0lBQ0gsWUFBc0MsTUFBa0IsRUFBVSxJQUFjO1FBQTFDLFdBQU0sR0FBTixNQUFNLENBQVk7UUFBVSxTQUFJLEdBQUosSUFBSSxDQUFVO1FBTmhGLGlCQUFpQjtRQUNULFlBQU8sR0FBRyxRQUFRLENBQUM7UUFNekIsSUFBSSxDQUFDLE9BQU8sR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDLEdBQUcsR0FBRyxJQUFJLENBQUMsT0FBTyxDQUFDO0lBQ2hELENBQUM7SUFHRDs7O09BR0c7SUFDSCxNQUFNLENBQUMsSUFBZTtRQUNwQixPQUFPLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsSUFBSSxDQUFDLE9BQU8sRUFBRSxFQUFFLE9BQU8sSUFBSSxLQUFLLFFBQVEsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDbkcsQ0FBQztJQUVEOzs7T0FHRztJQUNILE1BQU0sQ0FBQyxJQUFlO1FBQ3BCLE9BQU8sSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsR0FBRyxJQUFJLENBQUMsT0FBTyxFQUFFLEVBQUUsT0FBTyxJQUFJLEtBQUssUUFBUSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsU0FB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QVcsT0FBTyxFQUFFLENBQUMsQ0FBQztTQUFFO1FBRTdELE9BQU8sSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsR0FBRyxJQUFJLENBQUMsT0FBTyxJQUFJLEVBQUUsU0FBUyxFQUFFLEdBQUcsTUFBTSxDQUFDLENBQUM7SUFDbkUsQ0FBQztJQUVEOzs7T0FHRztJQUNILHVCQUF1QixDQUFDLEVBQVcsRUFBRSxPQUFnQjtRQUNuRCxPQUFPLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLEdBQUcsSUFBSSxDQUFDLE9BQU8sSUFBSSxFQUFFLFdBQVcsT0FBTyxFQUFFLENBQUMsQ0FBQztJQUNsRSxDQUFDO0lBRUQ7OztPQUdHO0lBQ0gsc0JBQXNCLENBQUMsRUFBVyxFQUFFLE9BQWdCO1FBQ2xELE9BQU8sSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsR0FBRyxJQUFJLENBQUMsT0FBTyxJQUFJLEVBQUUsVUFBVSxPQUFPLEVBQUUsQ0FBQyxDQUFDO0lBQ2pFLENBQUM7OzJGQTFHVSxZQUFZLGNBUUgsUUFBUTt1RUFSakIsWUFBWSxXQUFaLFlBQVk7a0RBQVosWUFBWTtjQUR4QixVQUFVOztzQkFTSSxNQUFNO3VCQUFDLFFBQVEiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlLCBJbmplY3QgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFJlc3RVdGlsIH0gZnJvbSAnLi4vLi4vdXRpbHMvcmVzdC11dGlsJztcbmltcG9ydCB7IENvcmVDb25maWcgfSBmcm9tICcuLi8uLi9jb25maWcnO1xuXG5pbXBvcnQgeyBDYXNlSW5mbyB9IGZyb20gJy4uL2VudGl0aWVzL0Nhc2VJbmZvJztcblxuXG4vKipcbiAqIFNlcnZpY2VzIGZvciBjYXNlIG1hbmFnZW1lbnQgYWN0aW9uc1xuICogQFJlcXVlc3RIZWFkZXIgWC1BUEktS0VZIFRoZSBrZXkgdG8gaWRlbnRpZnkgdGhlIGFwcGxpY2F0aW9uIChwb3J0YWwpXG4gKiBAUmVxdWVzdEhlYWRlciBYLUFDQ0VTUy1UT0tFTiBUaGUgdG9rZW4gdG8gaWRlbnRpZnkgdGhlIGxvZ2dlZC1pbiB1c2VyIFxuICovXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgQ2FzZXNTZXJ2aWNlIHtcblxuICAvLyBVUkwgdG8gd2ViIGFwaVxuICBwcml2YXRlIGJhc2VVcmwgPSAnL2Nhc2VzJztcblxuICAvKipcbiAgICogQ2xhc3MgY29uc3RydWN0b3JcbiAgICovXG4gIGNvbnN0cnVjdG9yKEBJbmplY3QoJ2NvbmZpZycpIHByaXZhdGUgY29uZmlnOiBDb3JlQ29uZmlnLCBwcml2YXRlIHJlc3Q6IFJlc3RVdGlsKSB7XG4gICAgdGhpcy5iYXNlVXJsID0gdGhpcy5jb25maWcuYXBpICsgdGhpcy5iYXNlVXJsO1xuICB9XG5cblxuICAvKipcbiAgICogQ3JlYXRlIG5ldyBjYXNlXG4gICAqIEBSZXR1cm46IEVudGl0eVJlc3BvbnNlPENhc2VJbmZvPlxuICAgKi9cbiAgY3JlYXRlKGJvZHk/OiBDYXNlSW5mbykge1xuICAgIHJldHVybiB0aGlzLnJlc3QucG9zdChgJHt0aGlzLmJhc2VVcmx9YCwgdHlwZW9mIGJvZHkgPT09ICdvYmplY3QnID8gSlNPTi5zdHJpbmdpZnkoYm9keSkgOiBib2R5KTtcbiAgfVxuXG4gIC8qKlxuICAgKiBVcGRhdGUgY2FzZVxuICAgKiBAUmV0dXJuOiBFbnRpdHlSZXNwb25zZTxDYXNlSW5mbz5cbiAgICovXG4gIHVwZGF0ZShib2R5PzogQ2FzZUluZm8pIHtcbiAgICByZXR1cm4gdGhpcy5yZXN0LnB1dChgJHt0aGlzLmJhc2VVcmx9YCwgdHlwZW9mIGJvZHkgPT09ICdvYmplY3QnID8gSlNPTi5zdHJpbmdpZnkoYm9keSkgOiBib2R5KTtcbiAgfVxuXG4gIC8qKlxuICAgKiBEZWxldGUgY2FzZSBmcm9tIHRoZSBzeXN0ZW1cbiAgICogQFJldHVybjogQWN0aW9uUmVzcG9uc2VcbiAgICovXG4gIGRlbGV0ZShpZD86IHN0cmluZykge1xuICAgIHJldHVybiB0aGlzLnJlc3QuZGVsZXRlKGAke3RoaXMuYmFzZVVybH0vJHtpZH1gKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBHZXQgc2luZ2xlIGNhc2UgYnkgaWRcbiAgICogQFJldHVybjogRW50aXR5UmVzcG9uc2U8Q2FzZUluZm8+XG4gICAqL1xuICBnZXQoaWQ/OiBzdHJpbmcpIHtcbiAgICByZXR1cm4gdGhpcy5yZXN0LmdldChgJHt0aGlzLmJhc2VVcmx9LyR7aWR9YCk7XG4gIH1cblxuICAvKipcbiAgICogRmluZCBsaXN0IG9mIGFsbCBwdWJsaWMgY2FzZXMgYW5kIHVzZXIgb3duZWQgcHJpdmF0ZSBjYXNlc1xuICAgKiBAUmV0dXJuOiBRdWVyeVJlc3BvbnNlPENhc2VJbmZvPlxuICAgKi9cbiAgZmluZChzZWFyY2g/OiBzdHJpbmcsIHNvcnQ/OiBzdHJpbmcsIHBhZ2U/OiBudW1iZXIsIHBhZ2VTaXplPzogbnVtYmVyKSB7XG4gICAgY29uc3QgcGFyYW1zID0gbmV3IEFycmF5KCk7XHRcdFxuICAgIGlmIChzZWFyY2ggIT0gbnVsbCkgeyBwYXJhbXMucHVzaChgc2VhcmNoPSR7c2VhcmNofWApOyB9XG4gICAgaWYgKHNvcnQgIT0gbnVsbCkgeyBwYXJhbXMucHVzaChgc29ydD0ke3NvcnR9YCk7IH1cbiAgICBpZiAocGFnZSAhPSBudWxsKSB7IHBhcmFtcy5wdXNoKGBwYWdlPSR7cGFnZX1gKTsgfVxuICAgIGlmIChwYWdlU2l6ZSAhPSBudWxsKSB7IHBhcmFtcy5wdXNoKGBwYWdlU2l6ZT0ke3BhZ2VTaXplfWApOyB9XG5cblx0XHRyZXR1cm4gdGhpcy5yZXN0LmdldChgJHt0aGlzLmJhc2VVcmx9YCwgLi4ucGFyYW1zKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBBZGQgYnVsayBvZiBzZWFyY2ggZXZlbnRzIHRvIHRoZSBjYXNlXG4gICAqIEBSZXR1cm46IEVudGl0eVJlc3BvbnNlPENhc2VJbmZvPlxuICAgKi9cbiAgYWRkU2VhcmNoRXZlbnRzKGlkPzogc3RyaW5nLCBzZXNzaW9uSWQ/OiBzdHJpbmcsIGV2ZW50SWQ/OiBzdHJpbmdbXSwgZGVzY3JpcHRpb24/OiBzdHJpbmcpIHtcbiAgICBjb25zdCBwYXJhbXMgPSBuZXcgQXJyYXkoKTtcdFx0XG4gICAgaWYgKGV2ZW50SWQgIT0gbnVsbCkgeyBwYXJhbXMucHVzaChgZXZlbnRJZD0ke2V2ZW50SWR9YCk7IH1cblxuXHRcdHJldHVybiB0aGlzLnJlc3QucG9zdChgJHt0aGlzLmJhc2VVcmx9LyR7aWR9L3Nlc3Npb25zLyR7c2Vzc2lvbklkfS9ldmVudHNgLCB0eXBlb2YgZGVzY3JpcHRpb24gPT09ICdvYmplY3QnID8gSlNPTi5zdHJpbmdpZnkoZGVzY3JpcHRpb24pIDogZGVzY3JpcHRpb24sIC4uLnBhcmFtcyk7XG4gIH1cblxuICAvKipcbiAgICogVXBkYXRlIGV2ZW50IGRlc2NyaXB0aW9uXG4gICAqIEBSZXR1cm46IEVudGl0eVJlc3BvbnNlPENhc2VJbmZvPlxuICAgKi9cbiAgdXBkYXRlRXZlbnREZXNjcmlwdGlvbihpZD86IHN0cmluZywgZXZlbnRJZD86IHN0cmluZywgZGVzY3JpcHRpb24/OiBzdHJpbmcpIHtcbiAgICBjb25zdCBwYXJhbXMgPSBuZXcgQXJyYXkoKTtcdFx0XG4gICAgaWYgKGV2ZW50SWQgIT0gbnVsbCkgeyBwYXJhbXMucHVzaChgZXZlbnRJZD0ke2V2ZW50SWR9YCk7IH1cblxuXHRcdHJldHVybiB0aGlzLnJlc3QucHV0KGAke3RoaXMuYmFzZVVybH0vJHtpZH0vZXZlbnRzL3tldmVudElkfS9kZXNjcmlwdGlvbmAsIHR5cGVvZiBkZXNjcmlwdGlvbiA9PT0gJ29iamVjdCcgPyBKU09OLnN0cmluZ2lmeShkZXNjcmlwdGlvbikgOiBkZXNjcmlwdGlvbiwgLi4ucGFyYW1zKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBSZW1vdmUgYnVsayBvZiBzZWFyY2ggZXZlbnRzIGZyb20gdGhlIGNhc2VcbiAgICogQFJldHVybjogRW50aXR5UmVzcG9uc2U8Q2FzZUluZm8+XG4gICAqL1xuICByZW1vdmVTZWFyY2hFdmVudHMoaWQ/OiBzdHJpbmcsIGV2ZW50SWQ/OiBzdHJpbmdbXSkge1xuICAgIGNvbnN0IHBhcmFtcyA9IG5ldyBBcnJheSgpO1x0XHRcbiAgICBpZiAoZXZlbnRJZCAhPSBudWxsKSB7IHBhcmFtcy5wdXNoKGBldmVudElkPSR7ZXZlbnRJZH1gKTsgfVxuXG5cdFx0cmV0dXJuIHRoaXMucmVzdC5kZWxldGUoYCR7dGhpcy5iYXNlVXJsfS8ke2lkfS9ldmVudHNgLCAuLi5wYXJhbXMpO1xuICB9XG5cbiAgLyoqXG4gICAqIEdldCBhbGwgdGltZXN0YW1wZWQgb2JqZWN0cyBvZiB0aGUgcHJvdmlkZWQgY2FzZSBldmVudFxuICAgKiBAUmV0dXJuOiBFbnRpdHlSZXNwb25zZTxUaW1lc3RhbXBlZENyb3BzRGF0YT5cbiAgICovXG4gIGdldEV2ZW50T2JqZWN0Q3JvcHNEYXRhKGlkPzogc3RyaW5nLCBldmVudElkPzogc3RyaW5nKSB7XG4gICAgcmV0dXJuIHRoaXMucmVzdC5nZXQoYCR7dGhpcy5iYXNlVXJsfS8ke2lkfS9ldmVudHMvJHtldmVudElkfWApO1xuICB9XG5cbiAgLyoqXG4gICAqIEdldCBzaW5nbGUgdGltZXN0YW1wZWQgb2JqZWN0IG9mIHRoZSBwcm92aWRlZCBjYXNlIGV2ZW50XG4gICAqIEBSZXR1cm46IEVudGl0eVJlc3BvbnNlPFRpbWVzdGFtcGVkQ3JvcD5cbiAgICovXG4gIGdldE1haW5FdmVudE9iamVjdENyb3AoaWQ/OiBzdHJpbmcsIGV2ZW50SWQ/OiBzdHJpbmcpIHtcbiAgICByZXR1cm4gdGhpcy5yZXN0LmdldChgJHt0aGlzLmJhc2VVcmx9LyR7aWR9L2V2ZW50LyR7ZXZlbnRJZH1gKTtcbiAgfVxuXG59XG4iXX0=