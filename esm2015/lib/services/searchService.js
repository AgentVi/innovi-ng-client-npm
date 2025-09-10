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
     * Perform metadata search by the similarity for another object
     * @Return: EntityResponse<SearchStatus>
     */
    searchForSimilar(body) {
        return this.rest.post(`${this.baseUrl}/similar`, typeof body === 'object' ? JSON.stringify(body) : body);
    }
    /**
     * Get search session status
     * @Return: EntityResponse<SearchStatus>
     */
    getSearchStatus(sessionId, isPromptSearch) {
        const params = new Array();
        if (isPromptSearch != null) {
            params.push(`isPromptSearch=${isPromptSearch}`);
        }
        return this.rest.get(`${this.baseUrl}/sessions/${sessionId}/status`, ...params);
    }
    /**
     * Cancel search session and drop results
     * @Return: ActionResponse
     */
    cancelSearchSession(sessionId, isPromptSearch) {
        const params = new Array();
        if (isPromptSearch != null) {
            params.push(`isPromptSearch=${isPromptSearch}`);
        }
        return this.rest.delete(`${this.baseUrl}/sessions/${sessionId}`, ...params);
    }
    /**
     * Stop search session
     * @Return: ActionResponse
     */
    stopSearchSession(sessionId, isPromptSearch) {
        const params = new Array();
        if (isPromptSearch != null) {
            params.push(`isPromptSearch=${isPromptSearch}`);
        }
        return this.rest.post(`${this.baseUrl}/sessions/${sessionId}/stop`, null, ...params);
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
    getEventImage(sessionId, eventId) {
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
     * Find list of search events by filter. Notice that this does not create anything, but the POST verb allow for the query parameters to be passed in the body.
     * @Return: QueryResponse<SearchDefinition>
     */
    findEvents(sessionId, body) {
        return this.rest.post(`${this.baseUrl}/sessions/${sessionId}/find`, typeof body === 'object' ? JSON.stringify(body) : body);
    }
    /**
     * Find list of sensor Ids related to the search results
     * @Return: EntitiesResponse<StringIntValue>
     */
    findSensorsIds(sessionId, isPromptSearch) {
        const params = new Array();
        if (isPromptSearch != null) {
            params.push(`isPromptSearch=${isPromptSearch}`);
        }
        return this.rest.get(`${this.baseUrl}/sessions/${sessionId}/sensorsIds`, ...params);
    }
    /**
     * Get total search events count by filter. Notice that this does not create anything, but the POST verb allow for the query parameters to be passed in the body.
     * @Return: QueryResponse<SearchDefinition> entities list is null
     */
    totalEvents(sessionId, body) {
        return this.rest.post(`${this.baseUrl}/sessions/${sessionId}/total`, typeof body === 'object' ? JSON.stringify(body) : body);
    }
    /**
     * Export list of search events by filter. Notice that this does not create anything, but the POST verb allow for the query parameters to be passed in the body.
     * @Return: StreamContent
     */
    exportEvents(sessionId, format, fields, fileName, body) {
        const params = new Array();
        if (format != null) {
            params.push(`format=${format}`);
        }
        if (fields != null) {
            params.push(`fields=${fields}`);
        }
        if (fileName != null) {
            params.push(`fileName=${fileName}`);
        }
        return this.rest.download(`search`, `${this.baseUrl}/sessions/${sessionId}/export`, typeof body === 'object' ? JSON.stringify(body) : body, ...params);
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
     * @Return: EntityResponse<TimestampedCropsData>
     */
    getEventObjectCropsData(sessionId, eventId) {
        return this.rest.get(`${this.baseUrl}/sessions/${sessionId}/events/${eventId}/crops`);
    }
    /**
     * Find objects paths aggregation for sensor FOV (for path visualizer)
     * @Return: EntityResponse<SensorPaths>
     */
    getSensorPaths(sessionId, sensorId, from, to, objectType, points) {
        const params = new Array();
        if (from != null) {
            params.push(`from=${from}`);
        }
        if (to != null) {
            params.push(`to=${to}`);
        }
        if (objectType != null) {
            params.push(`objectType=${objectType}`);
        }
        if (points != null) {
            params.push(`points=${points}`);
        }
        return this.rest.get(`${this.baseUrl}/sessions/${sessionId}/sensor-paths/${sensorId}`, ...params);
    }
    /**
     * Get all search events related to the path
     * @Return: QueryResponse<SearchEvent>
     */
    getSensorPathEvents(sessionId, sensorId, pathId, page, pageSize) {
        const params = new Array();
        if (page != null) {
            params.push(`page=${page}`);
        }
        if (pageSize != null) {
            params.push(`pageSize=${pageSize}`);
        }
        return this.rest.get(`${this.baseUrl}/sessions/${sessionId}/sensor-paths/${sensorId}/${pathId}/events`, ...params);
    }
    /**
     * Find objects heatmap for sensor FOV (for path visualizer)
     * @Return: EntityResponse<SensorPaths>
     */
    getSensorHeatmap(sessionId, sensorId, from, to, objectType, dim) {
        const params = new Array();
        if (from != null) {
            params.push(`from=${from}`);
        }
        if (to != null) {
            params.push(`to=${to}`);
        }
        if (objectType != null) {
            params.push(`objectType=${objectType}`);
        }
        if (dim != null) {
            params.push(`dim=${dim}`);
        }
        return this.rest.get(`${this.baseUrl}/sessions/${sessionId}/sensor-heatmap/${sensorId}`, ...params);
    }
    /**
     * Get all search events related to the heatmap
     * @Return: QueryResponse<SearchEvent>
     */
    getSensorHeatmapEvents(sessionId, sensorId, row, col, page, pageSize) {
        const params = new Array();
        if (row != null) {
            params.push(`row=${row}`);
        }
        if (col != null) {
            params.push(`col=${col}`);
        }
        if (page != null) {
            params.push(`page=${page}`);
        }
        if (pageSize != null) {
            params.push(`pageSize=${pageSize}`);
        }
        return this.rest.get(`${this.baseUrl}/sessions/${sessionId}/sensor-heatmap/${sensorId}/events`, ...params);
    }
    /**
     * Get single POI (Point of Interest) by sensorId and objectId
     * @Return EntityResponse<Poi>
     */
    getPoi(sensorId, objectId) {
        return this.rest.get(`${this.baseUrl}/poi/${sensorId}/${objectId}`);
    }
    /**
     * Get single unrecognized POI by poiId
     * @Return EntityResponse<PoiUnrecognized>
     */
    getPoiUnrecognized(poiId) {
        return this.rest.get(`${this.baseUrl}/poi-unrecognized/${poiId}`);
    }
}
/** @nocollapse */ SearchService.ɵfac = function SearchService_Factory(t) { return new (t || SearchService)(i0.ɵɵinject('config'), i0.ɵɵinject(i1.RestUtil)); };
/** @nocollapse */ SearchService.ɵprov = /** @pureOrBreakMyCode */ i0.ɵɵdefineInjectable({ token: SearchService, factory: SearchService.ɵfac });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(SearchService, [{
        type: Injectable
    }], function () { return [{ type: i2.CoreConfig, decorators: [{
                type: Inject,
                args: ['config']
            }] }, { type: i1.RestUtil }]; }, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VhcmNoU2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL25nLWNvcmUtbGliL3NyYy9saWIvc2VydmljZXMvc2VhcmNoU2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUNuRCxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sdUJBQXVCLENBQUM7QUFDakQsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGNBQWMsQ0FBQzs7OztBQVExQzs7OztHQUlHO0FBRUgsTUFBTSxPQUFPLGFBQWE7SUFLeEI7O09BRUc7SUFDSCxZQUFzQyxNQUFrQixFQUFVLElBQWM7UUFBMUMsV0FBTSxHQUFOLE1BQU0sQ0FBWTtRQUFVLFNBQUksR0FBSixJQUFJLENBQVU7UUFOaEYsaUJBQWlCO1FBQ1QsWUFBTyxHQUFHLFNBQVMsQ0FBQztRQU0xQixJQUFJLENBQUMsT0FBTyxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUMsR0FBRyxHQUFHLElBQUksQ0FBQyxPQUFPLENBQUM7SUFDaEQsQ0FBQztJQUdEOzs7T0FHRztJQUNILE1BQU0sQ0FBQyxJQUF1QjtRQUM1QixPQUFPLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsSUFBSSxDQUFDLE9BQU8sRUFBRSxFQUFFLE9BQU8sSUFBSSxLQUFLLFFBQVEsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDbkcsQ0FBQztJQUVEOzs7T0FHRztJQUNILE1BQU0sQ0FBQyxFQUFXLEVBQUUsSUFBdUI7UUFDekMsT0FBTyxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxHQUFHLElBQUksQ0FBQyxPQUFPLElBQUksRUFBRSxFQUFFLEVBQUUsT0FBTyxJQUFJLEtBQUssUUFB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QUFFLE1BQU0sQ0FBQyxJQUFJLENBQUMsT0FBTyxHQUFHLEVBQUUsQ0FBQyxDQUFDO1NBQUU7UUFDL0MsSUFBSSxHQUFHLElBQUksSUFBSSxFQUFFO1lBQUUsTUFBTSxDQUFDLElBQUksQ0FBQyxPQUFPLEdBQUcsRUFBRSxDQUFDLENBQUM7U0FBRTtRQUMvQyxJQUFJLElBQUksSUFBSSxJQUFJLEVBQUU7WUFBRSxNQUFNLENBQUMsSUFBSSxDQUFDLFFBQVEsSUFBSSxFQUFFLENBQUMsQ0FBQztTQUFFO1FBQ2xELElBQUksUUFBUSxJQUFJLElBQUksRUFBRTtZQUFFLE1BQU0sQ0FBQyxJQUFJLENBQUMsWUFBWSxRQUFRLEVBQUUsQ0FBQyxDQUFDO1NBQUU7UUFFaEUsT0FBTyxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxHQUFHLElBQUksQ0FBQyxPQUFPLGFBQWEsU0FBUyxtQkFBbUIsUUFBUSxTQUFTLEVBQUUsR0FBRyxNQUFNLENBQUMsQ0FBQztJQUMzRyxDQUFDO0lBRUQ7OztPQUdHO0lBQ0gsTUFBTSxDQUFDLFFBQWlCLEVBQUUsUUFBaUI7UUFDekMsT0FBTyxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxHQUFHLElBQUksQ0FBQyxPQUFPLFFBQVEsUUFBUSxJQUFJLFFBQVEsRUFBRSxDQUFDLENBQUM7SUFDdEUsQ0FBQztJQUVEOzs7T0FHRztJQUNILGtCQUFrQixDQUFDLEtBQWM7UUFDL0IsT0FBTyxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxHQUFHLElBQUksQ0FBQyxPQUFPLHFCQUFxQixLQUFLLEVBQUUsQ0FBQyxDQUFDO0lBQ3BFLENBQUM7OzZGQTlSVSxhQUFhLGNBUUosUUFBUTtrR0FSakIsYUFBYSxXQUFiLGFBQWE7dUZBQWIsYUFBYTtjQUR6QixVQUFVOztzQkFTSSxNQUFNO3VCQUFDLFFBQVEiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlLCBJbmplY3QgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFJlc3RVdGlsIH0gZnJvbSAnLi4vLi4vdXRpbHMvcmVzdC11dGlsJztcbmltcG9ydCB7IENvcmVDb25maWcgfSBmcm9tICcuLi8uLi9jb25maWcnO1xuXG5pbXBvcnQgeyBTZWFyY2hEZWZpbml0aW9uIH0gZnJvbSAnLi4vZW50aXRpZXMvU2VhcmNoRGVmaW5pdGlvbic7XG5pbXBvcnQgeyBTZWFyY2hFdmVudEZpbmRSZXF1ZXN0Qm9keSB9IGZyb20gJy4uL21lc3NhZ2VzL1NlYXJjaEV2ZW50RmluZFJlcXVlc3RCb2R5JztcbmltcG9ydCB7IE9iamVjdFR5cGVDb2RlIH0gZnJvbSAnLi4vZW51bXMvT2JqZWN0VHlwZUNvZGUnO1xuaW1wb3J0IHsgVGltZVVuaXRDb2RlIH0gZnJvbSAnLi4vZW51bXMvVGltZVVuaXRDb2RlJztcblxuXG4vKipcbiAqIFNlcnZpY2VzIGZvciBtZXRhZGF0YSBzZWFyY2ggYWN0aW9uc1xuICogQFJlcXVlc3RIZWFkZXIgWC1BUEktS0VZIFRoZSBrZXkgdG8gaWRlbnRpZnkgdGhlIGFwcGxpY2F0aW9uIChwb3J0YWwpXG4gKiBAUmVxdWVzdEhlYWRlciBYLUFDQ0VTUy1UT0tFTiBUaGUgdG9rZW4gdG8gaWRlbnRpZnkgdGhlIGxvZ2dlZC1pbiB1c2VyIFxuICovXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgU2VhcmNoU2VydmljZSB7XG5cbiAgLy8gVVJMIHRvIHdlYiBhcGlcbiAgcHJpdmF0ZSBiYXNlVXJsID0gJy9zZWFyY2gnO1xuXG4gIC8qKlxuICAgKiBDbGFzcyBjb25zdHJ1Y3RvclxuICAgKi9cbiAgY29uc3RydWN0b3IoQEluamVjdCgnY29uZmlnJykgcHJpdmF0ZSBjb25maWc6IENvcmVDb25maWcsIHByaXZhdGUgcmVzdDogUmVzdFV0aWwpIHtcbiAgICB0aGlzLmJhc2VVcmwgPSB0aGlzLmNvbmZpZy5hcGkgKyB0aGlzLmJhc2VVcmw7XG4gIH1cblxuXG4gIC8qKlxuICAgKiBDcmVhdGUgbmV3IHNlYXJjaCBkZWZpbml0aW9uXG4gICAqIEBSZXR1cm46IEVudGl0eVJlc3BvbnNlPFNlYXJjaERlZmluaXRpb24+XG4gICAqL1xuICBjcmVhdGUoYm9keT86IFNlYXJjaERlZmluaXRpb24pIHtcbiAgICByZXR1cm4gdGhpcy5yZXN0LnBvc3QoYCR7dGhpcy5iYXNlVXJsfWAsIHR5cGVvZiBib2R5ID09PSAnb2JqZWN0JyA/IEpTT04uc3RyaW5naWZ5KGJvZHkpIDogYm9keSk7XG4gIH1cblxuICAvKipcbiAgICogVXBkYXRlIHNlYXJjaCBkZWZpbml0aW9uXG4gICAqIEBSZXR1cm46IEVudGl0eVJlc3BvbnNlPFNlYXJjaERlZmluaXRpb24+XG4gICAqL1xuICB1cGRhdGUoaWQ/OiBzdHJpbmcsIGJvZHk/OiBTZWFyY2hEZWZpbml0aW9uKSB7XG4gICAgcmV0dXJuIHRoaXMucmVzdC5wdXQoYCR7dGhpcy5iYXNlVXJsfS8ke2lkfWAsIHR5cGVvZiBib2R5ID09PSAnb2JqZWN0JyA/IEpTT04uc3RyaW5naWZ5KGJvZHkpIDogYm9keSk7XG4gIH1cblxuICAvKipcbiAgICogRGVsZXRlIHNlYXJjaCBkZWZpbml0aW9uIGZyb20gdGhlIHN5c3RlbVxuICAgKiBAUmV0dXJuOiBBY3Rpb25SZXNwb25zZVxuICAgKi9cbiAgZGVsZXRlKGlkPzogc3RyaW5nKSB7XG4gICAgcmV0dXJuIHRoaXMucmVzdC5kZWxldGUoYCR7dGhpcy5iYXNlVXJsfS8ke2lkfWApO1xuICB9XG5cbiAgLyoqXG4gICAqIEdldCBzaW5nbGUgc2VhcmNoIGRlZmluaXRpb24gYnkgaWRcbiAgICogQFJldHVybjogRW50aXR5UmVzcG9uc2U8U2VhcmNoRGVmaW5pdGlvbj5cbiAgICovXG4gIGdldChpZD86IHN0cmluZykge1xuICAgIHJldHVybiB0aGlzLnJlc3QuZ2V0KGAke3RoaXMuYmFzZVVybH0vJHtpZH1gKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBHZXQgbXVsdGlwbGUgc2VhcmNoIGRlZmluaXRpb25zIGJ5IGxpc3Qgb2YgaWRzXG4gICAqIEBSZXR1cm46IEVudGl0aWVzUmVzcG9uc2U8U2VhcmNoRGVmaW5pdGlvbj5cbiAgICovXG4gIGxpc3QoaWQ/OiBzdHJpbmdbXSkge1xuICAgIGNvbnN0IHBhcmFtcyA9IG5ldyBBcnJheSgpO1x0XHRcbiAgICBpZiAoaWQgIT0gbnVsbCkgeyBwYXJhbXMucHVzaChgaWQ9JHtpZH1gKTsgfVxuXG5cdFx0cmV0dXJuIHRoaXMucmVzdC5nZXQoYCR7dGhpcy5iYXNlVXJsfS9saXN0YCwgLi4ucGFyYW1zKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBGaW5kIHNlYXJjaCBkZWZpbml0aW9ucyBieSBmaWx0ZXJzXG4gICAqIEBSZXR1cm46IFF1ZXJ5UmVzcG9uc2U8U2VhcmNoRGVmaW5pdGlvbj5cbiAgICovXG4gIGZpbmQoc2VhcmNoPzogc3RyaW5nLCBzb3J0Pzogc3RyaW5nLCBwYWdlPzogbnVtYmVyLCBwYWdlU2l6ZT86IG51bWJlcikge1xuICAgIGNvbnN0IHBhcmFtcyA9IG5ldyBBcnJheSgpO1x0XHRcbiAgICBpZiAoc2VhcmNoICE9IG51bGwpIHsgcGFyYW1zLnB1c2goYHNlYXJjaD0ke3NlYXJjaH1gKTsgfVxuICAgIGlmIChzb3J0ICE9IG51bGwpIHsgcGFyYW1zLnB1c2goYHNvcnQ9JHtzb3J0fWApOyB9XG4gICAgaWYgKHBhZ2UgIT0gbnVsbCkgeyBwYXJhbXMucHVzaChgcGFnZT0ke3BhZ2V9YCk7IH1cbiAgICBpZiAocGFnZVNpemUgIT0gbnVsbCkgeyBwYXJhbXMucHVzaChgcGFnZVNpemU9JHtwYWdlU2l6ZX1gKTsgfVxuXG5cdFx0cmV0dXJuIHRoaXMucmVzdC5nZXQoYCR7dGhpcy5iYXNlVXJsfWAsIC4uLnBhcmFtcyk7XG4gIH1cblxuICAvKipcbiAgICogUGVyZm9ybSBtZXRhZGF0YSBzZWFyY2ggYnkgdGhlIHNlYXJjaCBkZWZpbml0aW9uXG4gICAqIEBSZXR1cm46IEVudGl0eVJlc3BvbnNlPFNlYXJjaFN0YXR1cz5cbiAgICovXG4gIGV4ZWN1dGUoYm9keT86IFNlYXJjaERlZmluaXRpb24pIHtcbiAgICByZXR1cm4gdGhpcy5yZXN0LnBvc3QoYCR7dGhpcy5iYXNlVXJsfS9leGVjdXRlYCwgdHlwZW9mIGJvZHkgPT09ICdvYmplY3QnID8gSlNPTi5zdHJpbmdpZnkoYm9keSkgOiBib2R5KTtcbiAgfVxuXG4gIC8qKlxuICAgKiBQZXJmb3JtIG1ldGFkYXRhIHNhdmVkIHNlYXJjaCBieSB0aGUgc2VhcmNoIGlkXG4gICAqIEBSZXR1cm46IEVudGl0eVJlc3BvbnNlPFNlYXJjaFN0YXR1cz5cbiAgICovXG4gIGV4ZWN1dGVCeUlkKGlkPzogc3RyaW5nKSB7XG4gICAgcmV0dXJuIHRoaXMucmVzdC5nZXQoYCR7dGhpcy5iYXNlVXJsfS9leGVjdXRlLyR7aWR9YCk7XG4gIH1cblxuICAvKipcbiAgICogUGVyZm9ybSBtZXRhZGF0YSBzZWFyY2ggYnkgdGhlIHNpbWlsYXJpdHkgZm9yIGFub3RoZXIgb2JqZWN0XG4gICAqIEBSZXR1cm46IEVudGl0eVJlc3BvbnNlPFNlYXJjaFN0YXR1cz5cbiAgICovXG4gIHNlYXJjaEZvclNpbWlsYXIoYm9keT86IFNlYXJjaERlZmluaXRpb24pIHtcbiAgICByZXR1cm4gdGhpcy5yZXN0LnBvc3QoYCR7dGhpcy5iYXNlVXJsfS9zaW1pbGFyYCwgdHlwZW9mIGJvZHkgPT09ICdvYmplY3QnID8gSlNPTi5zdHJpbmdpZnkoYm9keSkgOiBib2R5KTtcbiAgfVxuXG4gIC8qKlxuICAgKiBHZXQgc2VhcmNoIHNlc3Npb24gc3RhdHVzXG4gICAqIEBSZXR1cm46IEVudGl0eVJlc3BvbnNlPFNlYXJjaFN0YXR1cz5cbiAgICovXG4gIGdldFNlYXJjaFN0YXR1cyhzZXNzaW9uSWQ/OiBzdHJpbmcsIGlzUHJvbXB0U2VhcmNoPzogYm9vbGVhbikge1xuICAgIGNvbnN0IHBhcmFtcyA9IG5ldyBBcnJheSgpO1x0XHRcbiAgICBpZiAoaXNQcm9tcHRTZWFyY2ggIT0gbnVsbCkgeyBwYXJhbXMucHVzaChgaXNQcm9tcHRTZWFyY2g9JHtpc1Byb21wdFNlYXJjaH1gKTsgfVxuXG5cdFx0cmV0dXJuIHRoaXMucmVzdC5nZXQoYCR7dGhpcy5iYXNlVXJsfS9zZXNzaW9ucy8ke3Nlc3Npb25JZH0vc3RhdHVzYCwgLi4ucGFyYW1zKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBDYW5jZWwgc2VhcmNoIHNlc3Npb24gYW5kIGRyb3AgcmVzdWx0c1xuICAgKiBAUmV0dXJuOiBBY3Rpb25SZXNwb25zZVxuICAgKi9cbiAgY2FuY2VsU2VhcmNoU2Vzc2lvbihzZXNzaW9uSWQ/OiBzdHJpbmcsIGlzUHJvbXB0U2VhcmNoPzogYm9vbGVhbikge1xuICAgIGNvbnN0IHBhcmFtcyA9IG5ldyBBcnJheSgpO1x0XHRcbiAgICBpZiAoaXNQcm9tcHRTZWFyY2ggIT0gbnVsbCkgeyBwYXJhbXMucHVzaChgaXNQcm9tcHRTZWFyY2g9JHtpc1Byb21wdFNlYXJjaH1gKTsgfVxuXG5cdFx0cmV0dXJuIHRoaXMucmVzdC5kZWxldGUoYCR7dGhpcy5iYXNlVXJsfS9zZXNzaW9ucy8ke3Nlc3Npb25JZH1gLCAuLi5wYXJhbXMpO1xuICB9XG5cbiAgLyoqXG4gICAqIFN0b3Agc2VhcmNoIHNlc3Npb25cbiAgICogQFJldHVybjogQWN0aW9uUmVzcG9uc2VcbiAgICovXG4gIHN0b3BTZWFyY2hTZXNzaW9uKHNlc3Npb25JZD86IHN0cmluZywgaXNQcm9tcHRTZWFyY2g/OiBib29sZWFuKSB7XG4gICAgY29uc3QgcGFyYW1zID0gbmV3IEFycmF5KCk7XHRcdFxuICAgIGlmIChpc1Byb21wdFNlYXJjaCAhPSBudWxsKSB7IHBhcmFtcy5wdXNoKGBpc1Byb21wdFNlYXJjaD0ke2lzUHJvbXB0U2VhcmNofWApOyB9XG5cblx0XHRyZXR1cm4gdGhpcy5yZXN0LnBvc3QoYCR7dGhpcy5iYXNlVXJsfS9zZXNzaW9ucy8ke3Nlc3Npb25JZH0vc3RvcGAsIG51bGwsIC4uLnBhcmFtcyk7XG4gIH1cblxuICAvKipcbiAgICogR2V0IHNpbmdsZSBzZWFyY2ggZXZlbnQgaXRlbSBieSBpZCBhbmQgc2Vzc2lvbklkXG4gICAqIEBSZXR1cm46IEVudGl0eVJlc3BvbnNlPFNlYXJjaERlZmluaXRpb24+XG4gICAqL1xuICBnZXRFdmVudChzZXNzaW9uSWQ/OiBzdHJpbmcsIGV2ZW50SWQ/OiBzdHJpbmcpIHtcbiAgICByZXR1cm4gdGhpcy5yZXN0LmdldChgJHt0aGlzLmJhc2VVcmx9L3Nlc3Npb25zLyR7c2Vzc2lvbklkfS9ldmVudC8ke2V2ZW50SWR9YCk7XG4gIH1cblxuICAvKipcbiAgICogR2V0IHNlYXJjaCBldmVudCBpbWFnZSBbcmVzcG9uc2UgY29udGVudCB0eXBlOiBpbWFnZS9qcGVnXVxuICAgKiBAUmV0dXJuOiBTdHJlYW1pbmdPdXRwdXQgb2YgdGhlIGltYWdlXG4gICAqL1xuICBnZXRFdmVudEltYWdlKHNlc3Npb25JZD86IHN0cmluZywgZXZlbnRJZD86IHN0cmluZykge1xuICAgIHJldHVybiB0aGlzLnJlc3QuZG93bmxvYWQoYHNlYXJjaGAsYCR7dGhpcy5iYXNlVXJsfS9zZXNzaW9ucy8ke3Nlc3Npb25JZH0vaW1hZ2UvJHtldmVudElkfWApO1xuICB9XG5cbiAgLyoqXG4gICAqIEdldCBtdWx0aXBsZSBzZWFyY2ggZXZlbnRzIGJ5IGxpc3Qgb2YgaWRzXG4gICAqIEBSZXR1cm46IEVudGl0aWVzUmVzcG9uc2U8U2VhcmNoRGVmaW5pdGlvbj5cbiAgICovXG4gIGxpc3RFdmVudHMoc2Vzc2lvbklkPzogc3RyaW5nLCBldmVudElkPzogc3RyaW5nW10pIHtcbiAgICBjb25zdCBwYXJhbXMgPSBuZXcgQXJyYXkoKTtcdFx0XG4gICAgaWYgKGV2ZW50SWQgIT0gbnVsbCkgeyBwYXJhbXMucHVzaChgZXZlbnRJZD0ke2V2ZW50SWR9YCk7IH1cblxuXHRcdHJldHVybiB0aGlzLnJlc3QuZ2V0KGAke3RoaXMuYmFzZVVybH0vc2Vzc2lvbnMvJHtzZXNzaW9uSWR9L2xpc3RgLCAuLi5wYXJhbXMpO1xuICB9XG5cbiAgLyoqXG4gICAqIEZpbmQgbGlzdCBvZiBzZWFyY2ggZXZlbnRzIGJ5IGZpbHRlci4gTm90aWNlIHRoYXQgdGhpcyBkb2VzIG5vdCBjcmVhdGUgYW55dGhpbmcsIGJ1dCB0aGUgUE9TVCB2ZXJiIGFsbG93IGZvciB0aGUgcXVlcnkgcGFyYW1ldGVycyB0byBiZSBwYXNzZWQgaW4gdGhlIGJvZHkuXG4gICAqIEBSZXR1cm46IFF1ZXJ5UmVzcG9uc2U8U2VhcmNoRGVmaW5pdGlvbj5cbiAgICovXG4gIGZpbmRFdmVudHMoc2Vzc2lvbklkPzogc3RyaW5nLCBib2R5PzogU2VhcmNoRXZlbnRGaW5kUmVxdWVzdEJvZHkpIHtcbiAgICByZXR1cm4gdGhpcy5yZXN0LnBvc3QoYCR7dGhpcy5iYXNlVXJsfS9zZXNzaW9ucy8ke3Nlc3Npb25JZH0vZmluZGAsIHR5cGVvZiBib2R5ID09PSAnb2JqZWN0JyA/IEpTT04uc3RyaW5naWZ5KGJvZHkpIDogYm9keSk7XG4gIH1cblxuICAvKipcbiAgICogRmluZCBsaXN0IG9mIHNlbnNvciBJZHMgcmVsYXRlZCB0byB0aGUgc2VhcmNoIHJlc3VsdHNcbiAgICogQFJldHVybjogRW50aXRpZXNSZXNwb25zZTxTdHJpbmdJbnRWYWx1ZT5cbiAgICovXG4gIGZpbmRTZW5zb3JzSWRzKHNlc3Npb25JZD86IHN0cmluZywgaXNQcm9tcHRTZWFyY2g/OiBib29sZWFuKSB7XG4gICAgY29uc3QgcGFyYW1zID0gbmV3IEFycmF5KCk7XHRcdFxuICAgIGlmIChpc1Byb21wdFNlYXJjaCAhPSBudWxsKSB7IHBhcmFtcy5wdXNoKGBpc1Byb21wdFNlYXJjaD0ke2lzUHJvbXB0U2VhcmNofWApOyB9XG5cblx0XHRyZXR1cm4gdGhpcy5yZXN0LmdldChgJHt0aGlzLmJhc2VVcmx9L3Nlc3Npb25zLyR7c2Vzc2lvbklkfS9zZW5zb3JzSWRzYCwgLi4ucGFyYW1zKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBHZXQgdG90YWwgc2VhcmNoIGV2ZW50cyBjb3VudCBieSBmaWx0ZXIuIE5vdGljZSB0aGF0IHRoaXMgZG9lcyBub3QgY3JlYXRlIGFueXRoaW5nLCBidXQgdGhlIFBPU1QgdmVyYiBhbGxvdyBmb3IgdGhlIHF1ZXJ5IHBhcmFtZXRlcnMgdG8gYmUgcGFzc2VkIGluIHRoZSBib2R5LlxuICAgKiBAUmV0dXJuOiBRdWVyeVJlc3BvbnNlPFNlYXJjaERlZmluaXRpb24+IGVudGl0aWVzIGxpc3QgaXMgbnVsbFxuICAgKi9cbiAgdG90YWxFdmVudHMoc2Vzc2lvbklkPzogc3RyaW5nLCBib2R5PzogU2VhcmNoRXZlbnRGaW5kUmVxdWVzdEJvZHkpIHtcbiAgICByZXR1cm4gdGhpcy5yZXN0LnBvc3QoYCR7dGhpcy5iYXNlVXJsfS9zZXNzaW9ucy8ke3Nlc3Npb25JZH0vdG90YWxgLCB0eXBlb2YgYm9keSA9PT0gJ29iamVjdCcgPyBKU09OLnN0cmluZ2lmeShib2R5KSA6IGJvZHkpO1xuICB9XG5cbiAgLyoqXG4gICAqIEV4cG9ydCBsaXN0IG9mIHNlYXJjaCBldmVudHMgYnkgZmlsdGVyLiBOb3RpY2UgdGhhdCB0aGlzIGRvZXMgbm90IGNyZWF0ZSBhbnl0aGluZywgYnV0IHRoZSBQT1NUIHZlcmIgYWxsb3cgZm9yIHRoZSBxdWVyeSBwYXJhbWV0ZXJzIHRvIGJlIHBhc3NlZCBpbiB0aGUgYm9keS5cbiAgICogQFJldHVybjogU3RyZWFtQ29udGVudFxuICAgKi9cbiAgZXhwb3J0RXZlbnRzKHNlc3Npb25JZD86IHN0cmluZywgZm9ybWF0Pzogc3RyaW5nLCBmaWVsZHM/OiBzdHJpbmdbXSwgZmlsZU5hbWU/OiBzdHJpbmcsIGJvZHk/OiBTZWFyY2hFdmVudEZpbmRSZXF1ZXN0Qm9keSkge1xuICAgIGNvbnN0IHBhcmFtcyA9IG5ldyBBcnJheSgpO1x0XHRcbiAgICBpZiAoZm9ybWF0ICE9IG51bGwpIHsgcGFyYW1zLnB1c2goYGZvcm1hdD0ke2Zvcm1hdH1gKTsgfVxuICAgIGlmIChmaWVsZHMgIT0gbnVsbCkgeyBwYXJhbXMucHVzaChgZmllbGRzPSR7ZmllbGRzfWApOyB9XG4gICAgaWYgKGZpbGVOYW1lICE9IG51bGwpIHsgcGFyYW1zLnB1c2goYGZpbGVOYW1lPSR7ZmlsZU5hbWV9YCk7IH1cblxuXHRcdHJldHVybiB0aGlzLnJlc3QuZG93bmxvYWQoYHNlYXJjaGAsYCR7dGhpcy5iYXNlVXJsfS9zZXNzaW9ucy8ke3Nlc3Npb25JZH0vZXhwb3J0YCwgdHlwZW9mIGJvZHkgPT09ICdvYmplY3QnID8gSlNPTi5zdHJpbmdpZnkoYm9keSkgOiBib2R5LCAuLi5wYXJhbXMpO1xuICB9XG5cbiAgLyoqXG4gICAqIEdldCBldmVudHMgY291bnQgb3ZlcnRpbWUgZm9yIGFsbCBldmVudHMgaW4gdGhlIHN5c3RlbVxuICAgKiBAUmV0dXJuOiBFbnRpdHlSZXNwb25zZTxFdmVudENvdW50VGltZVNlcmllcz5cbiAgICovXG4gIGdldEV2ZW50c0NvdW50T3ZlcnRpbWUoc2Vzc2lvbklkPzogc3RyaW5nLCBzZW5zb3JJZD86IHN0cmluZ1tdLCBvYmplY3RUeXBlPzogT2JqZWN0VHlwZUNvZGVbXSwgZnJvbT86IG51bWJlciwgdG8/OiBudW1iZXIsIGludGVydmFsPzogVGltZVVuaXRDb2RlLCBsYWJlbEZvcm1hdD86IHN0cmluZykge1xuICAgIGNvbnN0IHBhcmFtcyA9IG5ldyBBcnJheSgpO1x0XHRcbiAgICBpZiAoc2Vuc29ySWQgIT0gbnVsbCkgeyBwYXJhbXMucHVzaChgc2Vuc29ySWQ9JHtzZW5zb3JJZH1gKTsgfVxuICAgIGlmIChvYmplY3RUeXBlICE9IG51bGwpIHsgcGFyYW1zLnB1c2goYG9iamVjdFR5cGU9JHtvYmplY3RUeXBlfWApOyB9XG4gICAgaWYgKGZyb20gIT0gbnVsbCkgeyBwYXJhbXMucHVzaChgZnJvbT0ke2Zyb219YCk7IH1cbiAgICBpZiAodG8gIT0gbnVsbCkgeyBwYXJhbXMucHVzaChgdG89JHt0b31gKTsgfVxuICAgIGlmIChpbnRlcnZhbCAhPSBudWxsKSB7IHBhcmFtcy5wdXNoKGBpbnRlcnZhbD0ke2ludGVydmFsfWApOyB9XG4gICAgaWYgKGxhYmVsRm9ybWF0ICE9IG51bGwpIHsgcGFyYW1zLnB1c2goYGxhYmVsRm9ybWF0PSR7bGFiZWxGb3JtYXR9YCk7IH1cblxuXHRcdHJldHVybiB0aGlzLnJlc3QuZ2V0KGAke3RoaXMuYmFzZVVybH0vc2Vzc2lvbnMvJHtzZXNzaW9uSWR9L292ZXJ0aW1lYCwgLi4ucGFyYW1zKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBHZXQgc2VhcmNoIGV2ZW50IG9iamVjdCBjcm9wcyAoZm9yIGFuaW1hdGlvbilcbiAgICogQFJldHVybjogRW50aXR5UmVzcG9uc2U8VGltZXN0YW1wZWRDcm9wc0RhdGE+XG4gICAqL1xuICBnZXRFdmVudE9iamVjdENyb3BzRGF0YShzZXNzaW9uSWQ/OiBzdHJpbmcsIGV2ZW50SWQ/OiBzdHJpbmcpIHtcbiAgICByZXR1cm4gdGhpcy5yZXN0LmdldChgJHt0aGlzLmJhc2VVcmx9L3Nlc3Npb25zLyR7c2Vzc2lvbklkfS9ldmVudHMvJHtldmVudElkfS9jcm9wc2ApO1xuICB9XG5cbiAgLyoqXG4gICAqIEZpbmQgb2JqZWN0cyBwYXRocyBhZ2dyZWdhdGlvbiBmb3Igc2Vuc29yIEZPViAoZm9yIHBhdGggdmlzdWFsaXplcilcbiAgICogQFJldHVybjogRW50aXR5UmVzcG9uc2U8U2Vuc29yUGF0aHM+XG4gICAqL1xuICBnZXRTZW5zb3JQYXRocyhzZXNzaW9uSWQ/OiBzdHJpbmcsIHNlbnNvcklkPzogc3RyaW5nLCBmcm9tPzogbnVtYmVyLCB0bz86IG51bWJlciwgb2JqZWN0VHlwZT86IE9iamVjdFR5cGVDb2RlW10sIHBvaW50cz86IG51bWJlcikge1xuICAgIGNvbnN0IHBhcmFtcyA9IG5ldyBBcnJheSgpO1x0XHRcbiAgICBpZiAoZnJvbSAhPSBudWxsKSB7IHBhcmFtcy5wdXNoKGBmcm9tPSR7ZnJvbX1gKTsgfVxuICAgIGlmICh0byAhPSBudWxsKSB7IHBhcmFtcy5wdXNoKGB0bz0ke3RvfWApOyB9XG4gICAgaWYgKG9iamVjdFR5cGUgIT0gbnVsbCkgeyBwYXJhbXMucHVzaChgb2JqZWN0VHlwZT0ke29iamVjdFR5cGV9YCk7IH1cbiAgICBpZiAocG9pbnRzICE9IG51bGwpIHsgcGFyYW1zLnB1c2goYHBvaW50cz0ke3BvaW50c31gKTsgfVxuXG5cdFx0cmV0dXJuIHRoaXMucmVzdC5nZXQoYCR7dGhpcy5iYXNlVXJsfS9zZXNzaW9ucy8ke3Nlc3Npb25JZH0vc2Vuc29yLXBhdGhzLyR7c2Vuc29ySWR9YCwgLi4ucGFyYW1zKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBHZXQgYWxsIHNlYXJjaCBldmVudHMgcmVsYXRlZCB0byB0aGUgcGF0aFxuICAgKiBAUmV0dXJuOiBRdWVyeVJlc3BvbnNlPFNlYXJjaEV2ZW50PlxuICAgKi9cbiAgZ2V0U2Vuc29yUGF0aEV2ZW50cyhzZXNzaW9uSWQ/OiBzdHJpbmcsIHNlbnNvcklkPzogc3RyaW5nLCBwYXRoSWQ/OiBudW1iZXIsIHBhZ2U/OiBudW1iZXIsIHBhZ2VTaXplPzogbnVtYmVyKSB7XG4gICAgY29uc3QgcGFyYW1zID0gbmV3IEFycmF5KCk7XHRcdFxuICAgIGlmIChwYWdlICE9IG51bGwpIHsgcGFyYW1zLnB1c2goYHBhZ2U9JHtwYWdlfWApOyB9XG4gICAgaWYgKHBhZ2VTaXplICE9IG51bGwpIHsgcGFyYW1zLnB1c2goYHBhZ2VTaXplPSR7cGFnZVNpemV9YCk7IH1cblxuXHRcdHJldHVybiB0aGlzLnJlc3QuZ2V0KGAke3RoaXMuYmFzZVVybH0vc2Vzc2lvbnMvJHtzZXNzaW9uSWR9L3NlbnNvci1wYXRocy8ke3NlbnNvcklkfS8ke3BhdGhJZH0vZXZlbnRzYCwgLi4ucGFyYW1zKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBGaW5kIG9iamVjdHMgaGVhdG1hcCBmb3Igc2Vuc29yIEZPViAoZm9yIHBhdGggdmlzdWFsaXplcilcbiAgICogQFJldHVybjogRW50aXR5UmVzcG9uc2U8U2Vuc29yUGF0aHM+XG4gICAqL1xuICBnZXRTZW5zb3JIZWF0bWFwKHNlc3Npb25JZD86IHN0cmluZywgc2Vuc29ySWQ/OiBzdHJpbmcsIGZyb20/OiBudW1iZXIsIHRvPzogbnVtYmVyLCBvYmplY3RUeXBlPzogT2JqZWN0VHlwZUNvZGVbXSwgZGltPzogbnVtYmVyKSB7XG4gICAgY29uc3QgcGFyYW1zID0gbmV3IEFycmF5KCk7XHRcdFxuICAgIGlmIChmcm9tICE9IG51bGwpIHsgcGFyYW1zLnB1c2goYGZyb209JHtmcm9tfWApOyB9XG4gICAgaWYgKHRvICE9IG51bGwpIHsgcGFyYW1zLnB1c2goYHRvPSR7dG99YCk7IH1cbiAgICBpZiAob2JqZWN0VHlwZSAhPSBudWxsKSB7IHBhcmFtcy5wdXNoKGBvYmplY3RUeXBlPSR7b2JqZWN0VHlwZX1gKTsgfVxuICAgIGlmIChkaW0gIT0gbnVsbCkgeyBwYXJhbXMucHVzaChgZGltPSR7ZGltfWApOyB9XG5cblx0XHRyZXR1cm4gdGhpcy5yZXN0LmdldChgJHt0aGlzLmJhc2VVcmx9L3Nlc3Npb25zLyR7c2Vzc2lvbklkfS9zZW5zb3ItaGVhdG1hcC8ke3NlbnNvcklkfWAsIC4uLnBhcmFtcyk7XG4gIH1cblxuICAvKipcbiAgICogR2V0IGFsbCBzZWFyY2ggZXZlbnRzIHJlbGF0ZWQgdG8gdGhlIGhlYXRtYXBcbiAgICogQFJldHVybjogUXVlcnlSZXNwb25zZTxTZWFyY2hFdmVudD5cbiAgICovXG4gIGdldFNlbnNvckhlYXRtYXBFdmVudHMoc2Vzc2lvbklkPzogc3RyaW5nLCBzZW5zb3JJZD86IHN0cmluZywgcm93PzogbnVtYmVyLCBjb2w/OiBudW1iZXIsIHBhZ2U/OiBudW1iZXIsIHBhZ2VTaXplPzogbnVtYmVyKSB7XG4gICAgY29uc3QgcGFyYW1zID0gbmV3IEFycmF5KCk7XHRcdFxuICAgIGlmIChyb3cgIT0gbnVsbCkgeyBwYXJhbXMucHVzaChgcm93PSR7cm93fWApOyB9XG4gICAgaWYgKGNvbCAhPSBudWxsKSB7IHBhcmFtcy5wdXNoKGBjb2w9JHtjb2x9YCk7IH1cbiAgICBpZiAocGFnZSAhPSBudWxsKSB7IHBhcmFtcy5wdXNoKGBwYWdlPSR7cGFnZX1gKTsgfVxuICAgIGlmIChwYWdlU2l6ZSAhPSBudWxsKSB7IHBhcmFtcy5wdXNoKGBwYWdlU2l6ZT0ke3BhZ2VTaXplfWApOyB9XG5cblx0XHRyZXR1cm4gdGhpcy5yZXN0LmdldChgJHt0aGlzLmJhc2VVcmx9L3Nlc3Npb25zLyR7c2Vzc2lvbklkfS9zZW5zb3ItaGVhdG1hcC8ke3NlbnNvcklkfS9ldmVudHNgLCAuLi5wYXJhbXMpO1xuICB9XG5cbiAgLyoqXG4gICAqIEdldCBzaW5nbGUgUE9JIChQb2ludCBvZiBJbnRlcmVzdCkgYnkgc2Vuc29ySWQgYW5kIG9iamVjdElkXG4gICAqIEBSZXR1cm4gRW50aXR5UmVzcG9uc2U8UG9pPlxuICAgKi9cbiAgZ2V0UG9pKHNlbnNvcklkPzogc3RyaW5nLCBvYmplY3RJZD86IHN0cmluZykge1xuICAgIHJldHVybiB0aGlzLnJlc3QuZ2V0KGAke3RoaXMuYmFzZVVybH0vcG9pLyR7c2Vuc29ySWR9LyR7b2JqZWN0SWR9YCk7XG4gIH1cblxuICAvKipcbiAgICogR2V0IHNpbmdsZSB1bnJlY29nbml6ZWQgUE9JIGJ5IHBvaUlkXG4gICAqIEBSZXR1cm4gRW50aXR5UmVzcG9uc2U8UG9pVW5yZWNvZ25pemVkPlxuICAgKi9cbiAgZ2V0UG9pVW5yZWNvZ25pemVkKHBvaUlkPzogc3RyaW5nKSB7XG4gICAgcmV0dXJuIHRoaXMucmVzdC5nZXQoYCR7dGhpcy5iYXNlVXJsfS9wb2ktdW5yZWNvZ25pemVkLyR7cG9pSWR9YCk7XG4gIH1cblxufVxuIl19