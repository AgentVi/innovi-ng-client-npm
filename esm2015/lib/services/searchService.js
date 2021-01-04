import { Injectable, Inject } from '@angular/core';
import { RestUtil } from '../../utils/rest-util';
import { CoreConfig } from '../../config';
import * as i0 from "@angular/core";
import * as i1 from "../../utils/rest-util";
import * as i2 from "../../config";
/**
 * Services for metadata search actions
 * @RequestHeader X-API-KEY The key to identify the application (portal)
 * @RequestHeader X-ACCESS-TOKEN The token to identify the logged-in user
 */
export class SearchService {
    /**
     * Class constructor
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
     * @Return: EntityResponse<SearchDefinition>
     */
    create(body) {
        return this.rest.post(`${this.baseUrl}`, typeof body === 'object' ? JSON.stringify(body) : body);
    }
    /**
     * Update search definition
     * @Return: EntityResponse<SearchDefinition>
     */
    update(id, body) {
        return this.rest.put(`${this.baseUrl}/${id}`, typeof body === 'object' ? JSON.stringify(body) : body);
    }
    /**
     * Delete search definition from the system
     * @Return: ActionResponse
     */
    delete(id) {
        return this.rest.delete(`${this.baseUrl}/${id}`);
    }
    /**
     * Get single search definition by id
     * @Return: EntityResponse<SearchDefinition>
     */
    get(id) {
        return this.rest.get(`${this.baseUrl}/${id}`);
    }
    /**
     * Get multiple search definitions by list of ids
     * @Return: EntitiesResponse<SearchDefinition>
     */
    list(id) {
        const params = new Array();
        if (id != null) {
            params.push(`id=${id}`);
        }
        return this.rest.get(`${this.baseUrl}/list`, ...params);
    }
    /**
     * Find search definitions by filters
     * @Return: QueryResponse<SearchDefinition>
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
     * Perform metadata search by the search definition
     * @Return: EntityResponse<SearchStatus>
     * Search image web socket (/ws/search?search=searchId) must be open before this method invocation.
     * Please provide search id to query definition and use the same id for the web socket
     */
    execute(body) {
        return this.rest.post(`${this.baseUrl}/execute`, typeof body === 'object' ? JSON.stringify(body) : body);
    }
    /**
     * Perform metadata saved search by the search id
     * @Return: EntityResponse<SearchStatus>
     */
    executeById(id) {
        return this.rest.get(`${this.baseUrl}/execute/${id}`);
    }
    /**
     * Get search session status
     * @Return: EntityResponse<SearchStatus>
     */
    getSearchStatus(sessionId) {
        return this.rest.get(`${this.baseUrl}/sessions/${sessionId}/status`);
    }
    /**
     * Cancel search session and drop results
     * @Return: ActionResponse
     */
    cancelSearchSession(sessionId) {
        return this.rest.delete(`${this.baseUrl}/sessions/${sessionId}`);
    }
    /**
     * Stop search session
     * @Return: ActionResponse
     */
    stopSearchSession(sessionId) {
        return this.rest.post(`${this.baseUrl}/sessions/${sessionId}/stop`, null);
    }
    /**
     * Get single search event item by id and sessionId
     * @Return: EntityResponse<SearchDefinition>
     */
    getEvent(sessionId, eventId) {
        return this.rest.get(`${this.baseUrl}/sessions/${sessionId}/event/${eventId}`);
    }
    /**
     * Get search event image [response content type: image/jpeg]
     * @Return: StreamingOutput of the image
     */
    getEventImage(sessionId, eventId, fileName, mimeType) {
        return this.rest.download(`search`, `${this.baseUrl}/sessions/${sessionId}/image/${eventId}`);
    }
    /**
     * Get multiple search events by list of ids
     * @Return: EntitiesResponse<SearchDefinition>
     */
    listEvents(sessionId, eventId) {
        const params = new Array();
        if (eventId != null) {
            params.push(`eventId=${eventId}`);
        }
        return this.rest.get(`${this.baseUrl}/sessions/${sessionId}/list`, ...params);
    }
    /**
     * Find list of search events by filter
     * @Return: QueryResponse<SearchDefinition>
     */
    findEvents(sessionId, sensorId, objectType, from, to, sort, page, pageSize) {
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
        return this.rest.get(`${this.baseUrl}/sessions/${sessionId}/find`, ...params);
    }
    /**
     * Get total search events count by filter
     * @Return: QueryResponse<SearchDefinition> entities list is null
     */
    totalEvents(sessionId, sensorId, objectType, from, to, sort, page, pageSize) {
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
        return this.rest.get(`${this.baseUrl}/sessions/${sessionId}/total`, ...params);
    }
    /**
     * Export list of search events by filter
     * @Return: StreamContent
     */
    exportEvents(sessionId, sensorId, objectType, from, to, sort, format, fields, fileName, mimeType) {
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
        return this.rest.download(`search`, `${this.baseUrl}/sessions/${sessionId}/export`, ...params);
    }
    /**
     * Get events count overtime for all events in the system
     * @Return: EntityResponse<EventCountTimeSeries>
     */
    getEventsCountOvertime(sessionId, sensorId, objectType, from, to, interval, labelFormat) {
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
        return this.rest.get(`${this.baseUrl}/sessions/${sessionId}/overtime`, ...params);
    }
    /**
     * Get search event object crops (for animation)
     * @Return: EntityResponse<TimestampedCrops>
     */
    getEventObjectCrops(sessionId, eventId) {
        return this.rest.get(`${this.baseUrl}/sessions/${sessionId}/events/${eventId}/crops`);
    }
}
/** @nocollapse */ SearchService.ɵfac = function SearchService_Factory(t) { return new (t || SearchService)(i0.ɵɵinject('config'), i0.ɵɵinject(i1.RestUtil)); };
/** @nocollapse */ SearchService.ɵprov = i0.ɵɵdefineInjectable({ token: SearchService, factory: SearchService.ɵfac });
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(SearchService, [{
        type: Injectable
    }], function () { return [{ type: i2.CoreConfig, decorators: [{
                type: Inject,
                args: ['config']
            }] }, { type: i1.RestUtil }]; }, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VhcmNoU2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiIuLi8uLi8uLi9wcm9qZWN0cy9uZy1jb3JlLWxpYi9zcmMvIiwic291cmNlcyI6WyJsaWIvc2VydmljZXMvc2VhcmNoU2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUNuRCxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sdUJBQXVCLENBQUM7QUFDakQsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGNBQWMsQ0FBQzs7OztBQU8xQzs7OztHQUlHO0FBRUgsTUFBTSxPQUFPLGFBQWE7SUFLeEI7O09BRUc7SUFDSCxZQUFzQyxNQUFrQixFQUFVLElBQWM7UUFBMUMsV0FBTSxHQUFOLE1BQU0sQ0FBWTtRQUFVLFNBQUksR0FBSixJQUFJLENBQVU7UUFOaEYsaUJBQWlCO1FBQ1QsWUFBTyxHQUFHLFNBQVMsQ0FBQztRQU0xQixJQUFJLENBQUMsT0FBTyxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUMsR0FBRyxHQUFHLElBQUksQ0FBQyxPQUFPLENBQUM7SUFDaEQsQ0FBQztJQUdEOzs7T0FHRztJQUNILE1BQU0sQ0FBQyxJQUF1QjtRQUM1QixPQUFPLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsSUFBSSxDQUFDLE9BQU8sRUFBRSxFQUFFLE9BQU8sSUFBSSxLQUFLLFFBQVEsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDbkcsQ0FBQztJQUVEOzs7T0FHRztJQUNILE1BQU0sQ0FBQyxFQUFXLEVBQUUsSUFBdUI7UUFDekMsT0FBTyxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxHQUFHLElBQUksQ0FBQyxPQUFPLElBQUksRUFBRSxFQUFFLEVBQUUsT0FBTyxJQUFJLEtBQUssUUFBUSxDQUFD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QUFJLENBQUMsY0FBYyxVQUFVLEVBQUUsQ0FBQyxDQUFDO1NBQUU7UUFDcEUsSUFBSSxJQUFJLElBQUksSUFBSSxFQUFFO1lBQUUsTUFBTSxDQUFDLElBQUksQ0FBQyxRQUFRLElBQUksRUFBRSxDQUFDLENBQUM7U0FBRTtRQUNsRCxJQUFJLEVBQUUsSUFBSSxJQUFJLEVBQUU7WUFBRSxNQUFNLENBQUMsSUFBSSxDQUFDLE1BQU0sRUFBRSxFQUFFLENBQUMsQ0FBQztTQUFFO1FBQzVDLElBQUksUUFBUSxJQUFJLElBQUksRUFBRTtZQUFFLE1BQU0sQ0FBQyxJQUFJLENBQUMsWUFBWSxRQUFRLEVBQUUsQ0FBQyxDQUFDO1NBQUU7UUFDOUQsSUFBSSxXQUFXLElBQUksSUFBSSxFQUFFO1lBQUUsTUFBTSxDQUFDLElBQUksQ0FBQyxlQUFlLFdBQVcsRUFBRSxDQUFDLENBQUM7U0FBRTtRQUV6RSxPQUFPLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLEdBQUcsSUFBSSxDQUFDLE9BQU8sYUFBYSxTQUFTLFdBQVcsRUFBRSxHQUFHLE1BQU0sQ0FBQyxDQUFDO0lBQ2xGLENBQUM7SUFFRDs7O09BR0c7SUFDSCxtQkFBbUIsQ0FBQyxTQUFrQixFQUFFLE9BQWdCO1FBQ3RELE9BQU8sSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsR0FBRyxJQUFJLENBQUMsT0FBTyxhQUFhLFNBQVMsV0FBVyxPQUFPLFFBQVEsQ0FBQyxDQUFDO0lBQ3hGLENBQUM7OzZGQXBOVSxhQUFhLGNBUUosUUFBUTt3RUFSakIsYUFBYSxXQUFiLGFBQWE7a0RBQWIsYUFBYTtjQUR6QixVQUFVOztzQkFTSSxNQUFNO3VCQUFDLFFBQVEiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlLCBJbmplY3QgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFJlc3RVdGlsIH0gZnJvbSAnLi4vLi4vdXRpbHMvcmVzdC11dGlsJztcbmltcG9ydCB7IENvcmVDb25maWcgfSBmcm9tICcuLi8uLi9jb25maWcnO1xuXG5pbXBvcnQgeyBTZWFyY2hEZWZpbml0aW9uIH0gZnJvbSAnLi4vZW50aXRpZXMvU2VhcmNoRGVmaW5pdGlvbic7XG5pbXBvcnQgeyBPYmplY3RUeXBlQ29kZSB9IGZyb20gJy4uL2VudW1zL09iamVjdFR5cGVDb2RlJztcbmltcG9ydCB7IFRpbWVVbml0Q29kZSB9IGZyb20gJy4uL2VudW1zL1RpbWVVbml0Q29kZSc7XG5cblxuLyoqXG4gKiBTZXJ2aWNlcyBmb3IgbWV0YWRhdGEgc2VhcmNoIGFjdGlvbnNcbiAqIEBSZXF1ZXN0SGVhZGVyIFgtQVBJLUtFWSBUaGUga2V5IHRvIGlkZW50aWZ5IHRoZSBhcHBsaWNhdGlvbiAocG9ydGFsKVxuICogQFJlcXVlc3RIZWFkZXIgWC1BQ0NFU1MtVE9LRU4gVGhlIHRva2VuIHRvIGlkZW50aWZ5IHRoZSBsb2dnZWQtaW4gdXNlciBcbiAqL1xuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIFNlYXJjaFNlcnZpY2Uge1xuXG4gIC8vIFVSTCB0byB3ZWIgYXBpXG4gIHByaXZhdGUgYmFzZVVybCA9ICcvc2VhcmNoJztcblxuICAvKipcbiAgICogQ2xhc3MgY29uc3RydWN0b3JcbiAgICovXG4gIGNvbnN0cnVjdG9yKEBJbmplY3QoJ2NvbmZpZycpIHByaXZhdGUgY29uZmlnOiBDb3JlQ29uZmlnLCBwcml2YXRlIHJlc3Q6IFJlc3RVdGlsKSB7XG4gICAgdGhpcy5iYXNlVXJsID0gdGhpcy5jb25maWcuYXBpICsgdGhpcy5iYXNlVXJsO1xuICB9XG5cblxuICAvKipcbiAgICogQ3JlYXRlIG5ldyBzZWFyY2ggZGVmaW5pdGlvblxuICAgKiBAUmV0dXJuOiBFbnRpdHlSZXNwb25zZTxTZWFyY2hEZWZpbml0aW9uPlxuICAgKi9cbiAgY3JlYXRlKGJvZHk/OiBTZWFyY2hEZWZpbml0aW9uKSB7XG4gICAgcmV0dXJuIHRoaXMucmVzdC5wb3N0KGAke3RoaXMuYmFzZVVybH1gLCB0eXBlb2YgYm9keSA9PT0gJ29iamVjdCcgPyBKU09OLnN0cmluZ2lmeShib2R5KSA6IGJvZHkpO1xuICB9XG5cbiAgLyoqXG4gICAqIFVwZGF0ZSBzZWFyY2ggZGVmaW5pdGlvblxuICAgKiBAUmV0dXJuOiBFbnRpdHlSZXNwb25zZTxTZWFyY2hEZWZpbml0aW9uPlxuICAgKi9cbiAgdXBkYXRlKGlkPzogc3RyaW5nLCBib2R5PzogU2VhcmNoRGVmaW5pdGlvbikge1xuICAgIHJldHVybiB0aGlzLnJlc3QucHV0KGAke3RoaXMuYmFzZVVybH0vJHtpZH1gLCB0eXBlb2YgYm9keSA9PT0gJ29iamVjdCcgPyBKU09OLnN0cmluZ2lmeShib2R5KSA6IGJvZHkpO1xuICB9XG5cbiAgLyoqXG4gICAqIERlbGV0ZSBzZWFyY2ggZGVmaW5pdGlvbiBmcm9tIHRoZSBzeXN0ZW1cbiAgICogQFJldHVybjogQWN0aW9uUmVzcG9uc2VcbiAgICovXG4gIGRlbGV0ZShpZD86IHN0cmluZykge1xuICAgIHJldHVybiB0aGlzLnJlc3QuZGVsZXRlKGAke3RoaXMuYmFzZVVybH0vJHtpZH1gKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBHZXQgc2luZ2xlIHNlYXJjaCBkZWZpbml0aW9uIGJ5IGlkXG4gICAqIEBSZXR1cm46IEVudGl0eVJlc3BvbnNlPFNlYXJjaERlZmluaXRpb24+XG4gICAqL1xuICBnZXQoaWQ/OiBzdHJpbmcpIHtcbiAgICByZXR1cm4gdGhpcy5yZXN0LmdldChgJHt0aGlzLmJhc2VVcmx9LyR7aWR9YCk7XG4gIH1cblxuICAvKipcbiAgICogR2V0IG11bHRpcGxlIHNlYXJjaCBkZWZpbml0aW9ucyBieSBsaXN0IG9mIGlkc1xuICAgKiBAUmV0dXJuOiBFbnRpdGllc1Jlc3BvbnNlPFNlYXJjaERlZmluaXRpb24+XG4gICAqL1xuICBsaXN0KGlkPzogc3RyaW5nW10pIHtcbiAgICBjb25zdCBwYXJhbXMgPSBuZXcgQXJyYXkoKTtcdFx0XG4gICAgaWYgKGlkICE9IG51bGwpIHsgcGFyYW1zLnB1c2goYGlkPSR7aWR9YCk7IH1cblxuXHRcdHJldHVybiB0aGlzLnJlc3QuZ2V0KGAke3RoaXMuYmFzZVVybH0vbGlzdGAsIC4uLnBhcmFtcyk7XG4gIH1cblxuICAvKipcbiAgICogRmluZCBzZWFyY2ggZGVmaW5pdGlvbnMgYnkgZmlsdGVyc1xuICAgKiBAUmV0dXJuOiBRdWVyeVJlc3BvbnNlPFNlYXJjaERlZmluaXRpb24+XG4gICAqL1xuICBmaW5kKHNlYXJjaD86IHN0cmluZywgc29ydD86IHN0cmluZywgcGFnZT86IG51bWJlciwgcGFnZVNpemU/OiBudW1iZXIpIHtcbiAgICBjb25zdCBwYXJhbXMgPSBuZXcgQXJyYXkoKTtcdFx0XG4gICAgaWYgKHNlYXJjaCAhPSBudWxsKSB7IHBhcmFtcy5wdXNoKGBzZWFyY2g9JHtzZWFyY2h9YCk7IH1cbiAgICBpZiAoc29ydCAhPSBudWxsKSB7IHBhcmFtcy5wdXNoKGBzb3J0PSR7c29ydH1gKTsgfVxuICAgIGlmIChwYWdlICE9IG51bGwpIHsgcGFyYW1zLnB1c2goYHBhZ2U9JHtwYWdlfWApOyB9XG4gICAgaWYgKHBhZ2VTaXplICE9IG51bGwpIHsgcGFyYW1zLnB1c2goYHBhZ2VTaXplPSR7cGFnZVNpemV9YCk7IH1cblxuXHRcdHJldHVybiB0aGlzLnJlc3QuZ2V0KGAke3RoaXMuYmFzZVVybH1gLCAuLi5wYXJhbXMpO1xuICB9XG5cbiAgLyoqXG4gICAqIFBlcmZvcm0gbWV0YWRhdGEgc2VhcmNoIGJ5IHRoZSBzZWFyY2ggZGVmaW5pdGlvblxuICAgKiBAUmV0dXJuOiBFbnRpdHlSZXNwb25zZTxTZWFyY2hTdGF0dXM+XG4gICAqIFNlYXJjaCBpbWFnZSB3ZWIgc29ja2V0ICgvd3Mvc2VhcmNoP3NlYXJjaD1zZWFyY2hJZCkgbXVzdCBiZSBvcGVuIGJlZm9yZSB0aGlzIG1ldGhvZCBpbnZvY2F0aW9uLlxuICAgKiBQbGVhc2UgcHJvdmlkZSBzZWFyY2ggaWQgdG8gcXVlcnkgZGVmaW5pdGlvbiBhbmQgdXNlIHRoZSBzYW1lIGlkIGZvciB0aGUgd2ViIHNvY2tldFxuICAgKi9cbiAgZXhlY3V0ZShib2R5PzogU2VhcmNoRGVmaW5pdGlvbikge1xuICAgIHJldHVybiB0aGlzLnJlc3QucG9zdChgJHt0aGlzLmJhc2VVcmx9L2V4ZWN1dGVgLCB0eXBlb2YgYm9keSA9PT0gJ29iamVjdCcgPyBKU09OLnN0cmluZ2lmeShib2R5KSA6IGJvZHkpO1xuICB9XG5cbiAgLyoqXG4gICAqIFBlcmZvcm0gbWV0YWRhdGEgc2F2ZWQgc2VhcmNoIGJ5IHRoZSBzZWFyY2ggaWRcbiAgICogQFJldHVybjogRW50aXR5UmVzcG9uc2U8U2VhcmNoU3RhdHVzPlxuICAgKi9cbiAgZXhlY3V0ZUJ5SWQoaWQ/OiBzdHJpbmcpIHtcbiAgICByZXR1cm4gdGhpcy5yZXN0LmdldChgJHt0aGlzLmJhc2VVcmx9L2V4ZWN1dGUvJHtpZH1gKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBHZXQgc2VhcmNoIHNlc3Npb24gc3RhdHVzXG4gICAqIEBSZXR1cm46IEVudGl0eVJlc3BvbnNlPFNlYXJjaFN0YXR1cz5cbiAgICovXG4gIGdldFNlYXJjaFN0YXR1cyhzZXNzaW9uSWQ/OiBzdHJpbmcpIHtcbiAgICByZXR1cm4gdGhpcy5yZXN0LmdldChgJHt0aGlzLmJhc2VVcmx9L3Nlc3Npb25zLyR7c2Vzc2lvbklkfS9zdGF0dXNgKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBDYW5jZWwgc2VhcmNoIHNlc3Npb24gYW5kIGRyb3AgcmVzdWx0c1xuICAgKiBAUmV0dXJuOiBBY3Rpb25SZXNwb25zZVxuICAgKi9cbiAgY2FuY2VsU2VhcmNoU2Vzc2lvbihzZXNzaW9uSWQ/OiBzdHJpbmcpIHtcbiAgICByZXR1cm4gdGhpcy5yZXN0LmRlbGV0ZShgJHt0aGlzLmJhc2VVcmx9L3Nlc3Npb25zLyR7c2Vzc2lvbklkfWApO1xuICB9XG5cbiAgLyoqXG4gICAqIFN0b3Agc2VhcmNoIHNlc3Npb25cbiAgICogQFJldHVybjogQWN0aW9uUmVzcG9uc2VcbiAgICovXG4gIHN0b3BTZWFyY2hTZXNzaW9uKHNlc3Npb25JZD86IHN0cmluZykge1xuICAgIHJldHVybiB0aGlzLnJlc3QucG9zdChgJHt0aGlzLmJhc2VVcmx9L3Nlc3Npb25zLyR7c2Vzc2lvbklkfS9zdG9wYCwgbnVsbCk7XG4gIH1cblxuICAvKipcbiAgICogR2V0IHNpbmdsZSBzZWFyY2ggZXZlbnQgaXRlbSBieSBpZCBhbmQgc2Vzc2lvbklkXG4gICAqIEBSZXR1cm46IEVudGl0eVJlc3BvbnNlPFNlYXJjaERlZmluaXRpb24+XG4gICAqL1xuICBnZXRFdmVudChzZXNzaW9uSWQ/OiBzdHJpbmcsIGV2ZW50SWQ/OiBzdHJpbmcpIHtcbiAgICByZXR1cm4gdGhpcy5yZXN0LmdldChgJHt0aGlzLmJhc2VVcmx9L3Nlc3Npb25zLyR7c2Vzc2lvbklkfS9ldmVudC8ke2V2ZW50SWR9YCk7XG4gIH1cblxuICAvKipcbiAgICogR2V0IHNlYXJjaCBldmVudCBpbWFnZSBbcmVzcG9uc2UgY29udGVudCB0eXBlOiBpbWFnZS9qcGVnXVxuICAgKiBAUmV0dXJuOiBTdHJlYW1pbmdPdXRwdXQgb2YgdGhlIGltYWdlXG4gICAqL1xuICBnZXRFdmVudEltYWdlKHNlc3Npb25JZD86IHN0cmluZywgZXZlbnRJZD86IHN0cmluZywgZmlsZU5hbWU/OiBzdHJpbmcsIG1pbWVUeXBlPzogc3RyaW5nKSB7XG4gICAgcmV0dXJuIHRoaXMucmVzdC5kb3dubG9hZChgc2VhcmNoYCxgJHt0aGlzLmJhc2VVcmx9L3Nlc3Npb25zLyR7c2Vzc2lvbklkfS9pbWFnZS8ke2V2ZW50SWR9YCk7XG4gIH1cblxuICAvKipcbiAgICogR2V0IG11bHRpcGxlIHNlYXJjaCBldmVudHMgYnkgbGlzdCBvZiBpZHNcbiAgICogQFJldHVybjogRW50aXRpZXNSZXNwb25zZTxTZWFyY2hEZWZpbml0aW9uPlxuICAgKi9cbiAgbGlzdEV2ZW50cyhzZXNzaW9uSWQ/OiBzdHJpbmcsIGV2ZW50SWQ/OiBzdHJpbmdbXSkge1xuICAgIGNvbnN0IHBhcmFtcyA9IG5ldyBBcnJheSgpO1x0XHRcbiAgICBpZiAoZXZlbnRJZCAhPSBudWxsKSB7IHBhcmFtcy5wdXNoKGBldmVudElkPSR7ZXZlbnRJZH1gKTsgfVxuXG5cdFx0cmV0dXJuIHRoaXMucmVzdC5nZXQoYCR7dGhpcy5iYXNlVXJsfS9zZXNzaW9ucy8ke3Nlc3Npb25JZH0vbGlzdGAsIC4uLnBhcmFtcyk7XG4gIH1cblxuICAvKipcbiAgICogRmluZCBsaXN0IG9mIHNlYXJjaCBldmVudHMgYnkgZmlsdGVyXG4gICAqIEBSZXR1cm46IFF1ZXJ5UmVzcG9uc2U8U2VhcmNoRGVmaW5pdGlvbj5cbiAgICovXG4gIGZpbmRFdmVudHMoc2Vzc2lvbklkPzogc3RyaW5nLCBzZW5zb3JJZD86IHN0cmluZ1tdLCBvYmplY3RUeXBlPzogT2JqZWN0VHlwZUNvZGVbXSwgZnJvbT86IG51bWJlciwgdG8/OiBudW1iZXIsIHNvcnQ/OiBzdHJpbmcsIHBhZ2U/OiBudW1iZXIsIHBhZ2VTaXplPzogbnVtYmVyKSB7XG4gICAgY29uc3QgcGFyYW1zID0gbmV3IEFycmF5KCk7XHRcdFxuICAgIGlmIChzZW5zb3JJZCAhPSBudWxsKSB7IHBhcmFtcy5wdXNoKGBzZW5zb3JJZD0ke3NlbnNvcklkfWApOyB9XG4gICAgaWYgKG9iamVjdFR5cGUgIT0gbnVsbCkgeyBwYXJhbXMucHVzaChgb2JqZWN0VHlwZT0ke29iamVjdFR5cGV9YCk7IH1cbiAgICBpZiAoZnJvbSAhPSBudWxsKSB7IHBhcmFtcy5wdXNoKGBmcm9tPSR7ZnJvbX1gKTsgfVxuICAgIGlmICh0byAhPSBudWxsKSB7IHBhcmFtcy5wdXNoKGB0bz0ke3RvfWApOyB9XG4gICAgaWYgKHNvcnQgIT0gbnVsbCkgeyBwYXJhbXMucHVzaChgc29ydD0ke3NvcnR9YCk7IH1cbiAgICBpZiAocGFnZSAhPSBudWxsKSB7IHBhcmFtcy5wdXNoKGBwYWdlPSR7cGFnZX1gKTsgfVxuICAgIGlmIChwYWdlU2l6ZSAhPSBudWxsKSB7IHBhcmFtcy5wdXNoKGBwYWdlU2l6ZT0ke3BhZ2VTaXplfWApOyB9XG5cblx0XHRyZXR1cm4gdGhpcy5yZXN0LmdldChgJHt0aGlzLmJhc2VVcmx9L3Nlc3Npb25zLyR7c2Vzc2lvbklkfS9maW5kYCwgLi4ucGFyYW1zKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBHZXQgdG90YWwgc2VhcmNoIGV2ZW50cyBjb3VudCBieSBmaWx0ZXJcbiAgICogQFJldHVybjogUXVlcnlSZXNwb25zZTxTZWFyY2hEZWZpbml0aW9uPiBlbnRpdGllcyBsaXN0IGlzIG51bGxcbiAgICovXG4gIHRvdGFsRXZlbnRzKHNlc3Npb25JZD86IHN0cmluZywgc2Vuc29ySWQ/OiBzdHJpbmdbXSwgb2JqZWN0VHlwZT86IE9iamVjdFR5cGVDb2RlW10sIGZyb20/OiBudW1iZXIsIHRvPzogbnVtYmVyLCBzb3J0Pzogc3RyaW5nLCBwYWdlPzogbnVtYmVyLCBwYWdlU2l6ZT86IG51bWJlcikge1xuICAgIGNvbnN0IHBhcmFtcyA9IG5ldyBBcnJheSgpO1x0XHRcbiAgICBpZiAoc2Vuc29ySWQgIT0gbnVsbCkgeyBwYXJhbXMucHVzaChgc2Vuc29ySWQ9JHtzZW5zb3JJZH1gKTsgfVxuICAgIGlmIChvYmplY3RUeXBlICE9IG51bGwpIHsgcGFyYW1zLnB1c2goYG9iamVjdFR5cGU9JHtvYmplY3RUeXBlfWApOyB9XG4gICAgaWYgKGZyb20gIT0gbnVsbCkgeyBwYXJhbXMucHVzaChgZnJvbT0ke2Zyb219YCk7IH1cbiAgICBpZiAodG8gIT0gbnVsbCkgeyBwYXJhbXMucHVzaChgdG89JHt0b31gKTsgfVxuICAgIGlmIChzb3J0ICE9IG51bGwpIHsgcGFyYW1zLnB1c2goYHNvcnQ9JHtzb3J0fWApOyB9XG4gICAgaWYgKHBhZ2UgIT0gbnVsbCkgeyBwYXJhbXMucHVzaChgcGFnZT0ke3BhZ2V9YCk7IH1cbiAgICBpZiAocGFnZVNpemUgIT0gbnVsbCkgeyBwYXJhbXMucHVzaChgcGFnZVNpemU9JHtwYWdlU2l6ZX1gKTsgfVxuXG5cdFx0cmV0dXJuIHRoaXMucmVzdC5nZXQoYCR7dGhpcy5iYXNlVXJsfS9zZXNzaW9ucy8ke3Nlc3Npb25JZH0vdG90YWxgLCAuLi5wYXJhbXMpO1xuICB9XG5cbiAgLyoqXG4gICAqIEV4cG9ydCBsaXN0IG9mIHNlYXJjaCBldmVudHMgYnkgZmlsdGVyXG4gICAqIEBSZXR1cm46IFN0cmVhbUNvbnRlbnRcbiAgICovXG4gIGV4cG9ydEV2ZW50cyhzZXNzaW9uSWQ/OiBzdHJpbmcsIHNlbnNvcklkPzogc3RyaW5nW10sIG9iamVjdFR5cGU/OiBPYmplY3RUeXBlQ29kZVtdLCBmcm9tPzogbnVtYmVyLCB0bz86IG51bWJlciwgc29ydD86IHN0cmluZywgZm9ybWF0Pzogc3RyaW5nLCBmaWVsZHM/OiBzdHJpbmdbXSwgZmlsZU5hbWU/OiBzdHJpbmcsIG1pbWVUeXBlPzogc3RyaW5nKSB7XG4gICAgY29uc3QgcGFyYW1zID0gbmV3IEFycmF5KCk7XHRcdFxuICAgIGlmIChzZW5zb3JJZCAhPSBudWxsKSB7IHBhcmFtcy5wdXNoKGBzZW5zb3JJZD0ke3NlbnNvcklkfWApOyB9XG4gICAgaWYgKG9iamVjdFR5cGUgIT0gbnVsbCkgeyBwYXJhbXMucHVzaChgb2JqZWN0VHlwZT0ke29iamVjdFR5cGV9YCk7IH1cbiAgICBpZiAoZnJvbSAhPSBudWxsKSB7IHBhcmFtcy5wdXNoKGBmcm9tPSR7ZnJvbX1gKTsgfVxuICAgIGlmICh0byAhPSBudWxsKSB7IHBhcmFtcy5wdXNoKGB0bz0ke3RvfWApOyB9XG4gICAgaWYgKHNvcnQgIT0gbnVsbCkgeyBwYXJhbXMucHVzaChgc29ydD0ke3NvcnR9YCk7IH1cbiAgICBpZiAoZm9ybWF0ICE9IG51bGwpIHsgcGFyYW1zLnB1c2goYGZvcm1hdD0ke2Zvcm1hdH1gKTsgfVxuICAgIGlmIChmaWVsZHMgIT0gbnVsbCkgeyBwYXJhbXMucHVzaChgZmllbGRzPSR7ZmllbGRzfWApOyB9XG5cblx0XHRyZXR1cm4gdGhpcy5yZXN0LmRvd25sb2FkKGBzZWFyY2hgLGAke3RoaXMuYmFzZVVybH0vc2Vzc2lvbnMvJHtzZXNzaW9uSWR9L2V4cG9ydGAsIC4uLnBhcmFtcyk7XG4gIH1cblxuICAvKipcbiAgICogR2V0IGV2ZW50cyBjb3VudCBvdmVydGltZSBmb3IgYWxsIGV2ZW50cyBpbiB0aGUgc3lzdGVtXG4gICAqIEBSZXR1cm46IEVudGl0eVJlc3BvbnNlPEV2ZW50Q291bnRUaW1lU2VyaWVzPlxuICAgKi9cbiAgZ2V0RXZlbnRzQ291bnRPdmVydGltZShzZXNzaW9uSWQ/OiBzdHJpbmcsIHNlbnNvcklkPzogc3RyaW5nW10sIG9iamVjdFR5cGU/OiBPYmplY3RUeXBlQ29kZVtdLCBmcm9tPzogbnVtYmVyLCB0bz86IG51bWJlciwgaW50ZXJ2YWw/OiBUaW1lVW5pdENvZGUsIGxhYmVsRm9ybWF0Pzogc3RyaW5nKSB7XG4gICAgY29uc3QgcGFyYW1zID0gbmV3IEFycmF5KCk7XHRcdFxuICAgIGlmIChzZW5zb3JJZCAhPSBudWxsKSB7IHBhcmFtcy5wdXNoKGBzZW5zb3JJZD0ke3NlbnNvcklkfWApOyB9XG4gICAgaWYgKG9iamVjdFR5cGUgIT0gbnVsbCkgeyBwYXJhbXMucHVzaChgb2JqZWN0VHlwZT0ke29iamVjdFR5cGV9YCk7IH1cbiAgICBpZiAoZnJvbSAhPSBudWxsKSB7IHBhcmFtcy5wdXNoKGBmcm9tPSR7ZnJvbX1gKTsgfVxuICAgIGlmICh0byAhPSBudWxsKSB7IHBhcmFtcy5wdXNoKGB0bz0ke3RvfWApOyB9XG4gICAgaWYgKGludGVydmFsICE9IG51bGwpIHsgcGFyYW1zLnB1c2goYGludGVydmFsPSR7aW50ZXJ2YWx9YCk7IH1cbiAgICBpZiAobGFiZWxGb3JtYXQgIT0gbnVsbCkgeyBwYXJhbXMucHVzaChgbGFiZWxGb3JtYXQ9JHtsYWJlbEZvcm1hdH1gKTsgfVxuXG5cdFx0cmV0dXJuIHRoaXMucmVzdC5nZXQoYCR7dGhpcy5iYXNlVXJsfS9zZXNzaW9ucy8ke3Nlc3Npb25JZH0vb3ZlcnRpbWVgLCAuLi5wYXJhbXMpO1xuICB9XG5cbiAgLyoqXG4gICAqIEdldCBzZWFyY2ggZXZlbnQgb2JqZWN0IGNyb3BzIChmb3IgYW5pbWF0aW9uKVxuICAgKiBAUmV0dXJuOiBFbnRpdHlSZXNwb25zZTxUaW1lc3RhbXBlZENyb3BzPlxuICAgKi9cbiAgZ2V0RXZlbnRPYmplY3RDcm9wcyhzZXNzaW9uSWQ/OiBzdHJpbmcsIGV2ZW50SWQ/OiBzdHJpbmcpIHtcbiAgICByZXR1cm4gdGhpcy5yZXN0LmdldChgJHt0aGlzLmJhc2VVcmx9L3Nlc3Npb25zLyR7c2Vzc2lvbklkfS9ldmVudHMvJHtldmVudElkfS9jcm9wc2ApO1xuICB9XG5cbn1cbiJdfQ==