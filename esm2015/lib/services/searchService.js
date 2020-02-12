/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable, Inject } from '@angular/core';
import { RestUtil } from '../../utils/rest-util';
import { CoreConfig } from '../../config';
/**
 * Services for metadata search actions
 * \@RequestHeader X-API-KEY The key to identify the application (portal)
 * \@RequestHeader X-ACCESS-TOKEN The token to identify the logged-in user
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
     * \@Return: EntityResponse<SearchStatus>
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
     * \@Return: EntityResponse<SearchStatus>
     * @param {?=} id
     * @return {?}
     */
    executeById(id) {
        return this.rest.get(`${this.baseUrl}/execute/${id}`);
    }
    /**
     * Get search session status
     * \@Return: EntityResponse<SearchStatus>
     * @param {?=} sessionId
     * @return {?}
     */
    getSearchStatus(sessionId) {
        return this.rest.get(`${this.baseUrl}/session/${sessionId}/status`);
    }
    /**
     * Cancel search session
     * \@Return: ActionResponse
     * @param {?=} sessionId
     * @return {?}
     */
    cancelSearchSession(sessionId) {
        return this.rest.delete(`${this.baseUrl}/session/${sessionId}`);
    }
    /**
     * Get single search event item by id and sessionId
     * \@Return: EntityResponse<SearchDefinition>
     * @param {?=} sessionId
     * @param {?=} id
     * @return {?}
     */
    getEvent(sessionId, id) {
        return this.rest.get(`${this.baseUrl}/session/${sessionId}/${id}`);
    }
    /**
     * Get search event image [response content type: image/jpeg]
     * \@Return: StreamingOutput of the image
     * @param {?=} sessionId
     * @param {?=} id
     * @return {?}
     */
    getEventImage(sessionId, id) {
        return this.rest.download(`search`, `${this.baseUrl}/session/${sessionId}/image/${id}`);
    }
    /**
     * Get multiple search events by list of ids
     * \@Return: EntitiesResponse<SearchDefinition>
     * @param {?=} sessionId
     * @param {?=} id
     * @return {?}
     */
    listEvents(sessionId, id) {
        /** @type {?} */
        const params = new Array();
        if (id != null) {
            params.push(`id=${id}`);
        }
        return this.rest.get(`${this.baseUrl}/session/${sessionId}/list`, ...params);
    }
    /**
     * Find list of search events by filter
     * \@Return: EntitiesResponse<SearchDefinition>
     * @param {?=} sessionId
     * @param {?=} sensorId
     * @param {?=} objectType
     * @param {?=} from
     * @param {?=} to
     * @param {?=} sort
     * @param {?=} page
     * @param {?=} pageSize
     * @return {?}
     */
    findEvents(sessionId, sensorId, objectType, from, to, sort, page, pageSize) {
        /** @type {?} */
        const params = new Array();
        if (sensorId != null) {
            params.push(`sensorId=${sensorId}`);
        }
        if (objectType != null) {
            params.push(`objectType=${objectType}`);
        }
        if (from != null) {
            params.push(`from=${from}`);
        }
        if (to != null) {
            params.push(`to=${to}`);
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
        return this.rest.get(`${this.baseUrl}/session/${sessionId}/find`, ...params);
    }
    /**
     * Export list of search events by filter
     * \@Return: StreamContent
     * @param {?=} sessionId
     * @param {?=} sensorId
     * @param {?=} objectType
     * @param {?=} from
     * @param {?=} to
     * @param {?=} sort
     * @param {?=} format
     * @param {?=} fields
     * @return {?}
     */
    exportEvents(sessionId, sensorId, objectType, from, to, sort, format, fields) {
        /** @type {?} */
        const params = new Array();
        if (sensorId != null) {
            params.push(`sensorId=${sensorId}`);
        }
        if (objectType != null) {
            params.push(`objectType=${objectType}`);
        }
        if (from != null) {
            params.push(`from=${from}`);
        }
        if (to != null) {
            params.push(`to=${to}`);
        }
        if (sort != null) {
            params.push(`sort=${sort}`);
        }
        if (format != null) {
            params.push(`format=${format}`);
        }
        if (fields != null) {
            params.push(`fields=${fields}`);
        }
        return this.rest.download(`search`, `${this.baseUrl}/session/${sessionId}/export`, ...params);
    }
    /**
     * Get events count overtime for all events in the system
     * \@Return: EntityResponse<EventCountTimeSeries>
     * @param {?=} sessionId
     * @param {?=} sensorId
     * @param {?=} objectType
     * @param {?=} from
     * @param {?=} to
     * @param {?=} interval
     * @param {?=} labelFormat
     * @return {?}
     */
    getEventsCountOvertime(sessionId, sensorId, objectType, from, to, interval, labelFormat) {
        /** @type {?} */
        const params = new Array();
        if (sensorId != null) {
            params.push(`sensorId=${sensorId}`);
        }
        if (objectType != null) {
            params.push(`objectType=${objectType}`);
        }
        if (from != null) {
            params.push(`from=${from}`);
        }
        if (to != null) {
            params.push(`to=${to}`);
        }
        if (interval != null) {
            params.push(`interval=${interval}`);
        }
        if (labelFormat != null) {
            params.push(`labelFormat=${labelFormat}`);
        }
        return this.rest.get(`${this.baseUrl}/session/${sessionId}/overtime`, ...params);
    }
}
SearchService.decorators = [
    { type: Injectable }
];
/** @nocollapse */
SearchService.ctorParameters = () => [
    { type: CoreConfig, decorators: [{ type: Inject, args: ['config',] }] },
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VhcmNoU2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BhZ2VudHZpL25nLWNvcmUtbGliLyIsInNvdXJjZXMiOlsibGliL3NlcnZpY2VzL3NlYXJjaFNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ25ELE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSx1QkFBdUIsQ0FBQztBQUNqRCxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sY0FBYyxDQUFDOzs7Ozs7QUFhMUMsTUFBTSxPQUFPLGFBQWE7Ozs7OztJQVF4QixZQUFzQyxNQUFrQixFQUFVLElBQWM7UUFBMUMsV0FBTSxHQUFOLE1BQU0sQ0FBWTtRQUFVLFNBQUksR0FBSixJQUFJLENBQVU7O1FBTHhFLFlBQU8sR0FBRyxTQUFTLENBQUM7UUFNMUIsSUFBSSxDQUFDLE9BQU8sR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDLEdBQUcsR0FBRyxJQUFJLENBQUMsT0FBTyxDQUFDO0lBQ2hELENBQUM7Ozs7Ozs7SUFPRCxNQUFNLENBQUMsSUFBdUI7UUFDNUIsT0FBTyxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLElBQUksQ0FBQyxPQUFPLEVBQUUsRUFBRSxPQUFPLElBQUksS0FBSyxRQUFRLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQ25HLENBQUM7Ozs7Ozs7O0lBTUQsTUFBTSxDQUFDLEVBQVcsRUFBRSxJQUF1QjtRQUN6QyxPQUFPLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLEdBQUcsSUFBSSxDQUFDLE9BQU8sSUFBSSxFQUFFLEVBQUUsRUFBRSxPQUFPLElBQUksS0FBSyxRQUFRLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLENB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SSxXQUFXLElBQUksSUFBSSxFQUFFO1lBQUUsTUFBTSxDQUFDLElBQUksQ0FBQyxlQUFlLFdBQVcsRUFBRSxDQUFDLENBQUM7U0FBRTtRQUV6RSxPQUFPLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLEdBQUcsSUFBSSxDQUFDLE9BQU8sWUFBWSxTQUFTLFdBQVcsRUFBRSxHQUFHLE1BQU0sQ0FBQyxDQUFDO0lBQ2pGLENBQUM7OztZQXBMRixVQUFVOzs7O1lBWkYsVUFBVSx1QkFxQkosTUFBTSxTQUFDLFFBQVE7WUF0QnJCLFFBQVE7Ozs7Ozs7SUFpQmYsZ0NBQTRCOzs7OztJQUtoQiwrQkFBNEM7Ozs7O0lBQUUsNkJBQXNCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSwgSW5qZWN0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBSZXN0VXRpbCB9IGZyb20gJy4uLy4uL3V0aWxzL3Jlc3QtdXRpbCc7XG5pbXBvcnQgeyBDb3JlQ29uZmlnIH0gZnJvbSAnLi4vLi4vY29uZmlnJztcblxuaW1wb3J0IHsgU2VhcmNoRGVmaW5pdGlvbiB9IGZyb20gJy4uL2VudGl0aWVzL1NlYXJjaERlZmluaXRpb24nO1xuaW1wb3J0IHsgT2JqZWN0VHlwZUNvZGUgfSBmcm9tICcuLi9lbnVtcy9PYmplY3RUeXBlQ29kZSc7XG5pbXBvcnQgeyBUaW1lVW5pdENvZGUgfSBmcm9tICcuLi9lbnVtcy9UaW1lVW5pdENvZGUnO1xuXG5cbi8qKlxuICogU2VydmljZXMgZm9yIG1ldGFkYXRhIHNlYXJjaCBhY3Rpb25zXG4gKiBAUmVxdWVzdEhlYWRlciBYLUFQSS1LRVkgVGhlIGtleSB0byBpZGVudGlmeSB0aGUgYXBwbGljYXRpb24gKHBvcnRhbClcbiAqIEBSZXF1ZXN0SGVhZGVyIFgtQUNDRVNTLVRPS0VOIFRoZSB0b2tlbiB0byBpZGVudGlmeSB0aGUgbG9nZ2VkLWluIHVzZXIgXG4gKi9cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBTZWFyY2hTZXJ2aWNlIHtcblxuICAvLyBVUkwgdG8gd2ViIGFwaVxuICBwcml2YXRlIGJhc2VVcmwgPSAnL3NlYXJjaCc7XG5cbiAgLyoqXG4gICAqIENsYXNzIGNvbnN0cnVjdG9yXG4gICAqL1xuICBjb25zdHJ1Y3RvcihASW5qZWN0KCdjb25maWcnKSBwcml2YXRlIGNvbmZpZzogQ29yZUNvbmZpZywgcHJpdmF0ZSByZXN0OiBSZXN0VXRpbCkge1xuICAgIHRoaXMuYmFzZVVybCA9IHRoaXMuY29uZmlnLmFwaSArIHRoaXMuYmFzZVVybDtcbiAgfVxuXG5cbiAgLyoqXG4gICAqIENyZWF0ZSBuZXcgc2VhcmNoIGRlZmluaXRpb25cbiAgICogQFJldHVybjogRW50aXR5UmVzcG9uc2U8U2VhcmNoRGVmaW5pdGlvbj5cbiAgICovXG4gIGNyZWF0ZShib2R5PzogU2VhcmNoRGVmaW5pdGlvbikge1xuICAgIHJldHVybiB0aGlzLnJlc3QucG9zdChgJHt0aGlzLmJhc2VVcmx9YCwgdHlwZW9mIGJvZHkgPT09ICdvYmplY3QnID8gSlNPTi5zdHJpbmdpZnkoYm9keSkgOiBib2R5KTtcbiAgfVxuXG4gIC8qKlxuICAgKiBVcGRhdGUgc2VhcmNoIGRlZmluaXRpb25cbiAgICogQFJldHVybjogRW50aXR5UmVzcG9uc2U8U2VhcmNoRGVmaW5pdGlvbj5cbiAgICovXG4gIHVwZGF0ZShpZD86IHN0cmluZywgYm9keT86IFNlYXJjaERlZmluaXRpb24pIHtcbiAgICByZXR1cm4gdGhpcy5yZXN0LnB1dChgJHt0aGlzLmJhc2VVcmx9LyR7aWR9YCwgdHlwZW9mIGJvZHkgPT09ICdvYmplY3QnID8gSlNPTi5zdHJpbmdpZnkoYm9keSkgOiBib2R5KTtcbiAgfVxuXG4gIC8qKlxuICAgKiBEZWxldGUgc2VhcmNoIGRlZmluaXRpb24gZnJvbSB0aGUgc3lzdGVtXG4gICAqIEBSZXR1cm46IEFjdGlvblJlc3BvbnNlXG4gICAqL1xuICBkZWxldGUoaWQ/OiBzdHJpbmcpIHtcbiAgICByZXR1cm4gdGhpcy5yZXN0LmRlbGV0ZShgJHt0aGlzLmJhc2VVcmx9LyR7aWR9YCk7XG4gIH1cblxuICAvKipcbiAgICogR2V0IHNpbmdsZSBzZWFyY2ggZGVmaW5pdGlvbiBieSBpZFxuICAgKiBAUmV0dXJuOiBFbnRpdHlSZXNwb25zZTxTZWFyY2hEZWZpbml0aW9uPlxuICAgKi9cbiAgZ2V0KGlkPzogc3RyaW5nKSB7XG4gICAgcmV0dXJuIHRoaXMucmVzdC5nZXQoYCR7dGhpcy5iYXNlVXJsfS8ke2lkfWApO1xuICB9XG5cbiAgLyoqXG4gICAqIEdldCBtdWx0aXBsZSBzZWFyY2ggZGVmaW5pdGlvbnMgYnkgbGlzdCBvZiBpZHNcbiAgICogQFJldHVybjogRW50aXRpZXNSZXNwb25zZTxTZWFyY2hEZWZpbml0aW9uPlxuICAgKi9cbiAgbGlzdChpZD86IHN0cmluZ1tdKSB7XG4gICAgY29uc3QgcGFyYW1zID0gbmV3IEFycmF5KCk7XHRcdFxuICAgIGlmIChpZCAhPSBudWxsKSB7IHBhcmFtcy5wdXNoKGBpZD0ke2lkfWApOyB9XG5cblx0XHRyZXR1cm4gdGhpcy5yZXN0LmdldChgJHt0aGlzLmJhc2VVcmx9L2xpc3RgLCAuLi5wYXJhbXMpO1xuICB9XG5cbiAgLyoqXG4gICAqIEZpbmQgc2VhcmNoIGRlZmluaXRpb25zIGJ5IGZpbHRlcnNcbiAgICogQFJldHVybjogUXVlcnlSZXNwb25zZTxTZWFyY2hEZWZpbml0aW9uPlxuICAgKi9cbiAgZmluZChzZWFyY2g/OiBzdHJpbmcsIHNvcnQ/OiBzdHJpbmcsIHBhZ2U/OiBudW1iZXIsIHBhZ2VTaXplPzogbnVtYmVyKSB7XG4gICAgY29uc3QgcGFyYW1zID0gbmV3IEFycmF5KCk7XHRcdFxuICAgIGlmIChzZWFyY2ggIT0gbnVsbCkgeyBwYXJhbXMucHVzaChgc2VhcmNoPSR7c2VhcmNofWApOyB9XG4gICAgaWYgKHNvcnQgIT0gbnVsbCkgeyBwYXJhbXMucHVzaChgc29ydD0ke3NvcnR9YCk7IH1cbiAgICBpZiAocGFnZSAhPSBudWxsKSB7IHBhcmFtcy5wdXNoKGBwYWdlPSR7cGFnZX1gKTsgfVxuICAgIGlmIChwYWdlU2l6ZSAhPSBudWxsKSB7IHBhcmFtcy5wdXNoKGBwYWdlU2l6ZT0ke3BhZ2VTaXplfWApOyB9XG5cblx0XHRyZXR1cm4gdGhpcy5yZXN0LmdldChgJHt0aGlzLmJhc2VVcmx9YCwgLi4ucGFyYW1zKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBQZXJmb3JtIG1ldGFkYXRhIHNlYXJjaCBieSB0aGUgc2VhcmNoIGRlZmluaXRpb25cbiAgICogQFJldHVybjogRW50aXR5UmVzcG9uc2U8U2VhcmNoU3RhdHVzPlxuICAgKiBTZWFyY2ggaW1hZ2Ugd2ViIHNvY2tldCAoL3dzL3NlYXJjaD9zZWFyY2g9c2VhcmNoSWQpIG11c3QgYmUgb3BlbiBiZWZvcmUgdGhpcyBtZXRob2QgaW52b2NhdGlvbi5cbiAgICogUGxlYXNlIHByb3ZpZGUgc2VhcmNoIGlkIHRvIHF1ZXJ5IGRlZmluaXRpb24gYW5kIHVzZSB0aGUgc2FtZSBpZCBmb3IgdGhlIHdlYiBzb2NrZXRcbiAgICovXG4gIGV4ZWN1dGUoYm9keT86IFNlYXJjaERlZmluaXRpb24pIHtcbiAgICByZXR1cm4gdGhpcy5yZXN0LnBvc3QoYCR7dGhpcy5iYXNlVXJsfS9leGVjdXRlYCwgdHlwZW9mIGJvZHkgPT09ICdvYmplY3QnID8gSlNPTi5zdHJpbmdpZnkoYm9keSkgOiBib2R5KTtcbiAgfVxuXG4gIC8qKlxuICAgKiBQZXJmb3JtIG1ldGFkYXRhIHNhdmVkIHNlYXJjaCBieSB0aGUgc2VhcmNoIGlkXG4gICAqIEBSZXR1cm46IEVudGl0eVJlc3BvbnNlPFNlYXJjaFN0YXR1cz5cbiAgICovXG4gIGV4ZWN1dGVCeUlkKGlkPzogc3RyaW5nKSB7XG4gICAgcmV0dXJuIHRoaXMucmVzdC5nZXQoYCR7dGhpcy5iYXNlVXJsfS9leGVjdXRlLyR7aWR9YCk7XG4gIH1cblxuICAvKipcbiAgICogR2V0IHNlYXJjaCBzZXNzaW9uIHN0YXR1c1xuICAgKiBAUmV0dXJuOiBFbnRpdHlSZXNwb25zZTxTZWFyY2hTdGF0dXM+XG4gICAqL1xuICBnZXRTZWFyY2hTdGF0dXMoc2Vzc2lvbklkPzogc3RyaW5nKSB7XG4gICAgcmV0dXJuIHRoaXMucmVzdC5nZXQoYCR7dGhpcy5iYXNlVXJsfS9zZXNzaW9uLyR7c2Vzc2lvbklkfS9zdGF0dXNgKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBDYW5jZWwgc2VhcmNoIHNlc3Npb25cbiAgICogQFJldHVybjogQWN0aW9uUmVzcG9uc2VcbiAgICovXG4gIGNhbmNlbFNlYXJjaFNlc3Npb24oc2Vzc2lvbklkPzogc3RyaW5nKSB7XG4gICAgcmV0dXJuIHRoaXMucmVzdC5kZWxldGUoYCR7dGhpcy5iYXNlVXJsfS9zZXNzaW9uLyR7c2Vzc2lvbklkfWApO1xuICB9XG5cbiAgLyoqXG4gICAqIEdldCBzaW5nbGUgc2VhcmNoIGV2ZW50IGl0ZW0gYnkgaWQgYW5kIHNlc3Npb25JZFxuICAgKiBAUmV0dXJuOiBFbnRpdHlSZXNwb25zZTxTZWFyY2hEZWZpbml0aW9uPlxuICAgKi9cbiAgZ2V0RXZlbnQoc2Vzc2lvbklkPzogc3RyaW5nLCBpZD86IHN0cmluZykge1xuICAgIHJldHVybiB0aGlzLnJlc3QuZ2V0KGAke3RoaXMuYmFzZVVybH0vc2Vzc2lvbi8ke3Nlc3Npb25JZH0vJHtpZH1gKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBHZXQgc2VhcmNoIGV2ZW50IGltYWdlIFtyZXNwb25zZSBjb250ZW50IHR5cGU6IGltYWdlL2pwZWddXG4gICAqIEBSZXR1cm46IFN0cmVhbWluZ091dHB1dCBvZiB0aGUgaW1hZ2VcbiAgICovXG4gIGdldEV2ZW50SW1hZ2Uoc2Vzc2lvbklkPzogc3RyaW5nLCBpZD86IHN0cmluZykge1xuICAgIHJldHVybiB0aGlzLnJlc3QuZG93bmxvYWQoYHNlYXJjaGAsYCR7dGhpcy5iYXNlVXJsfS9zZXNzaW9uLyR7c2Vzc2lvbklkfS9pbWFnZS8ke2lkfWApO1xuICB9XG5cbiAgLyoqXG4gICAqIEdldCBtdWx0aXBsZSBzZWFyY2ggZXZlbnRzIGJ5IGxpc3Qgb2YgaWRzXG4gICAqIEBSZXR1cm46IEVudGl0aWVzUmVzcG9uc2U8U2VhcmNoRGVmaW5pdGlvbj5cbiAgICovXG4gIGxpc3RFdmVudHMoc2Vzc2lvbklkPzogc3RyaW5nLCBpZD86IHN0cmluZ1tdKSB7XG4gICAgY29uc3QgcGFyYW1zID0gbmV3IEFycmF5KCk7XHRcdFxuICAgIGlmIChpZCAhPSBudWxsKSB7IHBhcmFtcy5wdXNoKGBpZD0ke2lkfWApOyB9XG5cblx0XHRyZXR1cm4gdGhpcy5yZXN0LmdldChgJHt0aGlzLmJhc2VVcmx9L3Nlc3Npb24vJHtzZXNzaW9uSWR9L2xpc3RgLCAuLi5wYXJhbXMpO1xuICB9XG5cbiAgLyoqXG4gICAqIEZpbmQgbGlzdCBvZiBzZWFyY2ggZXZlbnRzIGJ5IGZpbHRlclxuICAgKiBAUmV0dXJuOiBFbnRpdGllc1Jlc3BvbnNlPFNlYXJjaERlZmluaXRpb24+XG4gICAqL1xuICBmaW5kRXZlbnRzKHNlc3Npb25JZD86IHN0cmluZywgc2Vuc29ySWQ/OiBzdHJpbmdbXSwgb2JqZWN0VHlwZT86IE9iamVjdFR5cGVDb2RlW10sIGZyb20/OiBudW1iZXIsIHRvPzogbnVtYmVyLCBzb3J0Pzogc3RyaW5nLCBwYWdlPzogbnVtYmVyLCBwYWdlU2l6ZT86IG51bWJlcikge1xuICAgIGNvbnN0IHBhcmFtcyA9IG5ldyBBcnJheSgpO1x0XHRcbiAgICBpZiAoc2Vuc29ySWQgIT0gbnVsbCkgeyBwYXJhbXMucHVzaChgc2Vuc29ySWQ9JHtzZW5zb3JJZH1gKTsgfVxuICAgIGlmIChvYmplY3RUeXBlICE9IG51bGwpIHsgcGFyYW1zLnB1c2goYG9iamVjdFR5cGU9JHtvYmplY3RUeXBlfWApOyB9XG4gICAgaWYgKGZyb20gIT0gbnVsbCkgeyBwYXJhbXMucHVzaChgZnJvbT0ke2Zyb219YCk7IH1cbiAgICBpZiAodG8gIT0gbnVsbCkgeyBwYXJhbXMucHVzaChgdG89JHt0b31gKTsgfVxuICAgIGlmIChzb3J0ICE9IG51bGwpIHsgcGFyYW1zLnB1c2goYHNvcnQ9JHtzb3J0fWApOyB9XG4gICAgaWYgKHBhZ2UgIT0gbnVsbCkgeyBwYXJhbXMucHVzaChgcGFnZT0ke3BhZ2V9YCk7IH1cbiAgICBpZiAocGFnZVNpemUgIT0gbnVsbCkgeyBwYXJhbXMucHVzaChgcGFnZVNpemU9JHtwYWdlU2l6ZX1gKTsgfVxuXG5cdFx0cmV0dXJuIHRoaXMucmVzdC5nZXQoYCR7dGhpcy5iYXNlVXJsfS9zZXNzaW9uLyR7c2Vzc2lvbklkfS9maW5kYCwgLi4ucGFyYW1zKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBFeHBvcnQgbGlzdCBvZiBzZWFyY2ggZXZlbnRzIGJ5IGZpbHRlclxuICAgKiBAUmV0dXJuOiBTdHJlYW1Db250ZW50XG4gICAqL1xuICBleHBvcnRFdmVudHMoc2Vzc2lvbklkPzogc3RyaW5nLCBzZW5zb3JJZD86IHN0cmluZ1tdLCBvYmplY3RUeXBlPzogT2JqZWN0VHlwZUNvZGVbXSwgZnJvbT86IG51bWJlciwgdG8/OiBudW1iZXIsIHNvcnQ/OiBzdHJpbmcsIGZvcm1hdD86IHN0cmluZywgZmllbGRzPzogc3RyaW5nW10pIHtcbiAgICBjb25zdCBwYXJhbXMgPSBuZXcgQXJyYXkoKTtcdFx0XG4gICAgaWYgKHNlbnNvcklkICE9IG51bGwpIHsgcGFyYW1zLnB1c2goYHNlbnNvcklkPSR7c2Vuc29ySWR9YCk7IH1cbiAgICBpZiAob2JqZWN0VHlwZSAhPSBudWxsKSB7IHBhcmFtcy5wdXNoKGBvYmplY3RUeXBlPSR7b2JqZWN0VHlwZX1gKTsgfVxuICAgIGlmIChmcm9tICE9IG51bGwpIHsgcGFyYW1zLnB1c2goYGZyb209JHtmcm9tfWApOyB9XG4gICAgaWYgKHRvICE9IG51bGwpIHsgcGFyYW1zLnB1c2goYHRvPSR7dG99YCk7IH1cbiAgICBpZiAoc29ydCAhPSBudWxsKSB7IHBhcmFtcy5wdXNoKGBzb3J0PSR7c29ydH1gKTsgfVxuICAgIGlmIChmb3JtYXQgIT0gbnVsbCkgeyBwYXJhbXMucHVzaChgZm9ybWF0PSR7Zm9ybWF0fWApOyB9XG4gICAgaWYgKGZpZWxkcyAhPSBudWxsKSB7IHBhcmFtcy5wdXNoKGBmaWVsZHM9JHtmaWVsZHN9YCk7IH1cblxuXHRcdHJldHVybiB0aGlzLnJlc3QuZG93bmxvYWQoYHNlYXJjaGAsYCR7dGhpcy5iYXNlVXJsfS9zZXNzaW9uLyR7c2Vzc2lvbklkfS9leHBvcnRgLCAuLi5wYXJhbXMpO1xuICB9XG5cbiAgLyoqXG4gICAqIEdldCBldmVudHMgY291bnQgb3ZlcnRpbWUgZm9yIGFsbCBldmVudHMgaW4gdGhlIHN5c3RlbVxuICAgKiBAUmV0dXJuOiBFbnRpdHlSZXNwb25zZTxFdmVudENvdW50VGltZVNlcmllcz5cbiAgICovXG4gIGdldEV2ZW50c0NvdW50T3ZlcnRpbWUoc2Vzc2lvbklkPzogc3RyaW5nLCBzZW5zb3JJZD86IHN0cmluZ1tdLCBvYmplY3RUeXBlPzogT2JqZWN0VHlwZUNvZGVbXSwgZnJvbT86IG51bWJlciwgdG8/OiBudW1iZXIsIGludGVydmFsPzogVGltZVVuaXRDb2RlLCBsYWJlbEZvcm1hdD86IHN0cmluZykge1xuICAgIGNvbnN0IHBhcmFtcyA9IG5ldyBBcnJheSgpO1x0XHRcbiAgICBpZiAoc2Vuc29ySWQgIT0gbnVsbCkgeyBwYXJhbXMucHVzaChgc2Vuc29ySWQ9JHtzZW5zb3JJZH1gKTsgfVxuICAgIGlmIChvYmplY3RUeXBlICE9IG51bGwpIHsgcGFyYW1zLnB1c2goYG9iamVjdFR5cGU9JHtvYmplY3RUeXBlfWApOyB9XG4gICAgaWYgKGZyb20gIT0gbnVsbCkgeyBwYXJhbXMucHVzaChgZnJvbT0ke2Zyb219YCk7IH1cbiAgICBpZiAodG8gIT0gbnVsbCkgeyBwYXJhbXMucHVzaChgdG89JHt0b31gKTsgfVxuICAgIGlmIChpbnRlcnZhbCAhPSBudWxsKSB7IHBhcmFtcy5wdXNoKGBpbnRlcnZhbD0ke2ludGVydmFsfWApOyB9XG4gICAgaWYgKGxhYmVsRm9ybWF0ICE9IG51bGwpIHsgcGFyYW1zLnB1c2goYGxhYmVsRm9ybWF0PSR7bGFiZWxGb3JtYXR9YCk7IH1cblxuXHRcdHJldHVybiB0aGlzLnJlc3QuZ2V0KGAke3RoaXMuYmFzZVVybH0vc2Vzc2lvbi8ke3Nlc3Npb25JZH0vb3ZlcnRpbWVgLCAuLi5wYXJhbXMpO1xuICB9XG5cbn1cbiJdfQ==