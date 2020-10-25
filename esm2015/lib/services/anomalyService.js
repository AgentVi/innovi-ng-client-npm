import { Injectable, Inject } from '@angular/core';
import { RestUtil } from '../../utils/rest-util';
import { CoreConfig } from '../../config';
import * as i0 from "@angular/core";
import * as i1 from "../../utils/rest-util";
import * as i2 from "../../config";
/**
 * List of anomaly related actions for the anomaly detection service
 * @RequestHeader X-API-KEY The key to identify the application (console)
 */
export class AnomalyService {
    /**
     * Class constructor
     */
    constructor(config, rest) {
        this.config = config;
        this.rest = rest;
        // URL to web api
        this.baseUrl = '/anomaly';
        this.baseUrl = this.config.api + this.baseUrl;
    }
    /**
     * Get training results of all sensors with anomaly enabled flag ordered by the last training time
     * @Return: QueryResponse<SensorAnalysisResults>
     */
    getSensorsAnalysisResults(page, pageSize) {
        const params = new Array();
        if (page != null) {
            params.push(`page=${page}`);
        }
        if (pageSize != null) {
            params.push(`pageSize=${pageSize}`);
        }
        return this.rest.get(`${this.baseUrl}/results`, ...params);
    }
    /**
     * Update sensor analysis results bach for a specific sensors
     * @Return: EntityResponse<SensorAnalysisResults>
     */
    update(sensorId, body) {
        return this.rest.put(`${this.baseUrl}/sensor/${sensorId}`, typeof body === 'object' ? JSON.stringify(body) : body);
    }
    /**
     * Delete all analysis results for a specific sensors
     * @Return: ActionResponse
     */
    delete(sensorId) {
        return this.rest.delete(`${this.baseUrl}/sensor/${sensorId}`);
    }
    /**
     * Get sensor info for anomaly
     * @Return: EntityResponse<SensorAnomalyInfo>
     */
    getSensorAnomalyInfo(sensorId) {
        return this.rest.get(`${this.baseUrl}/sensor/${sensorId}/info`);
    }
    /**
     * Find list of anomaly event info objects per sensor in a given time period
     * @return QueryResponse<AnomalyEventInfo> List of anomaly event info objects
     */
    findAnomalyEventInfo(accountId, sensorId, status, from, to, sort, page, pageSize) {
        const params = new Array();
        if (accountId != null) {
            params.push(`accountId=${accountId}`);
        }
        if (sensorId != null) {
            params.push(`sensorId=${sensorId}`);
        }
        if (status != null) {
            params.push(`status=${status}`);
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
        return this.rest.get(`${this.baseUrl}/events`, ...params);
    }
    /**
     * Update sensor anomaly rule attributed
     * @return ActionResponse
     */
    updateAnomalyRule(sensorId, body) {
        return this.rest.put(`${this.baseUrl}/rule/${sensorId}`, typeof body === 'object' ? JSON.stringify(body) : body);
    }
    /**
     * Create dummy event (for anomaly tests only)
     * This method is used for testing only, the only service generates events in the system is the event service
     * @param event Event data to create
     * Some of the event fields are mandatory: (the other are optional)
     * <ul>
     * <li><b>id:</b> Unique event id (e.g. GUID string)</li>
     * <li><b>accountId</b> Account Id</li>
     * <li><b>sensorId</b> Sensor Id</li>
     * <li><b>objectType</b> Detected object type</li>
     * <li><b>behaviorType</b> Behavior</li>
     * <li><b>ruleId</b> Rule Id</li>
     * <li><b>startTime:</b> If set to 0, server time will be set</li>
     * </ul>
     * @return EntityResponse<Event>
     */
    createDummyEvent(body) {
        return this.rest.post(`${this.baseUrl}/event`, typeof body === 'object' ? JSON.stringify(body) : body);
    }
}
/** @nocollapse */ AnomalyService.ɵfac = function AnomalyService_Factory(t) { return new (t || AnomalyService)(i0.ɵɵinject('config'), i0.ɵɵinject(i1.RestUtil)); };
/** @nocollapse */ AnomalyService.ɵprov = i0.ɵɵdefineInjectable({ token: AnomalyService, factory: AnomalyService.ɵfac });
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(AnomalyService, [{
        type: Injectable
    }], function () { return [{ type: i2.CoreConfig, decorators: [{
                type: Inject,
                args: ['config']
            }] }, { type: i1.RestUtil }]; }, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYW5vbWFseVNlcnZpY2UuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AYWdlbnR2aS9uZy1jb3JlLWxpYi8iLCJzb3VyY2VzIjpbImxpYi9zZXJ2aWNlcy9hbm9tYWx5U2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUNuRCxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sdUJBQXVCLENBQUM7QUFDakQsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGNBQWMsQ0FBQzs7OztBQVExQzs7O0dBR0c7QUFFSCxNQUFNLE9BQU8sY0FBYztJQUt6Qjs7T0FFRztJQUNILFlBQXNDLE1BQWtCLEVBQVUsSUFBYztRQUExQyxXQUFNLEdBQU4sTUFBTSxDQUFZO1FBQVUsU0FBSSxHQUFKLElBQUksQ0FBVTtRQU5oRixpQkFBaUI7UUFDVCxZQUFPLEdBQUcsVUFBVSxDQUFDO1FBTTNCLElBQUksQ0FBQyxPQUFPLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxHQUFHLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQztJQUNoRCxDQUFDO0lBR0Q7OztPQUdHO0lBQ0gseUJBQXlCLENBQUMsSUFBYSxFQUFFLFFBQWlCO1FBQ3hELE1BQU0sTUFBTSxHQUFHLElBQUksS0FBSyxFQUFFLENBQUM7UUFDM0IsSUFBSSxJQUFJLElBQUksSUFBSSxFQUFFO1lBQUUsTUFBTSxDQUFDLElBQUksQ0FBQyxRQUFRLElBQUksRUFBRSxDQUFDLENBQUM7U0FBRTtRQUNsRCxJQUFJLFFBQVEsSUFBSSxJQUFJLEVBQUU7WUFBRSxNQUFNLENBQUMsSUFBSSxDQUFDLFlBQVksUUFBUSxFQUFFLENBQUMsQ0FBQztTQUFFO1FBRWhFLE9BQU8sSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsR0FBRyxJQUFJLENBQUMsT0FBTyxVQUFVLEVBQUUsR0FBRyxNQUFNLENBQUMsQ0FBQztJQUMzRCxDQUFDO0lBRUQ7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QyxDQUFDLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDekcsQ0FBQzs7K0ZBN0ZVLGNBQWMsY0FRTCxRQUFRO3lFQVJqQixjQUFjLFdBQWQsY0FBYztrREFBZCxjQUFjO2NBRDFCLFVBQVU7O3NCQVNJLE1BQU07dUJBQUMsUUFBUSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUsIEluamVjdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgUmVzdFV0aWwgfSBmcm9tICcuLi8uLi91dGlscy9yZXN0LXV0aWwnO1xuaW1wb3J0IHsgQ29yZUNvbmZpZyB9IGZyb20gJy4uLy4uL2NvbmZpZyc7XG5cbmltcG9ydCB7IFNlbnNvckFub21hbHlSdWxlSW5mbyB9IGZyb20gJy4uL2NvbW1vbi9TZW5zb3JBbm9tYWx5UnVsZUluZm8nO1xuaW1wb3J0IHsgRXZlbnQgfSBmcm9tICcuLi9lbnRpdGllcy9FdmVudCc7XG5pbXBvcnQgeyBBbmFseXNpc1Jlc3VsdCB9IGZyb20gJy4uL2NvbW1vbi9BbmFseXNpc1Jlc3VsdCc7XG5pbXBvcnQgeyBFdmVudFN0YXR1c0NvZGUgfSBmcm9tICcuLi9lbnVtcy9FdmVudFN0YXR1c0NvZGUnO1xuXG5cbi8qKlxuICogTGlzdCBvZiBhbm9tYWx5IHJlbGF0ZWQgYWN0aW9ucyBmb3IgdGhlIGFub21hbHkgZGV0ZWN0aW9uIHNlcnZpY2VcbiAqIEBSZXF1ZXN0SGVhZGVyIFgtQVBJLUtFWSBUaGUga2V5IHRvIGlkZW50aWZ5IHRoZSBhcHBsaWNhdGlvbiAoY29uc29sZSkgXG4gKi9cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBBbm9tYWx5U2VydmljZSB7XG5cbiAgLy8gVVJMIHRvIHdlYiBhcGlcbiAgcHJpdmF0ZSBiYXNlVXJsID0gJy9hbm9tYWx5JztcblxuICAvKipcbiAgICogQ2xhc3MgY29uc3RydWN0b3JcbiAgICovXG4gIGNvbnN0cnVjdG9yKEBJbmplY3QoJ2NvbmZpZycpIHByaXZhdGUgY29uZmlnOiBDb3JlQ29uZmlnLCBwcml2YXRlIHJlc3Q6IFJlc3RVdGlsKSB7XG4gICAgdGhpcy5iYXNlVXJsID0gdGhpcy5jb25maWcuYXBpICsgdGhpcy5iYXNlVXJsO1xuICB9XG5cblxuICAvKipcbiAgICogR2V0IHRyYWluaW5nIHJlc3VsdHMgb2YgYWxsIHNlbnNvcnMgd2l0aCBhbm9tYWx5IGVuYWJsZWQgZmxhZyBvcmRlcmVkIGJ5IHRoZSBsYXN0IHRyYWluaW5nIHRpbWVcbiAgICogQFJldHVybjogUXVlcnlSZXNwb25zZTxTZW5zb3JBbmFseXNpc1Jlc3VsdHM+XG4gICAqL1xuICBnZXRTZW5zb3JzQW5hbHlzaXNSZXN1bHRzKHBhZ2U/OiBudW1iZXIsIHBhZ2VTaXplPzogbnVtYmVyKSB7XG4gICAgY29uc3QgcGFyYW1zID0gbmV3IEFycmF5KCk7XHRcdFxuICAgIGlmIChwYWdlICE9IG51bGwpIHsgcGFyYW1zLnB1c2goYHBhZ2U9JHtwYWdlfWApOyB9XG4gICAgaWYgKHBhZ2VTaXplICE9IG51bGwpIHsgcGFyYW1zLnB1c2goYHBhZ2VTaXplPSR7cGFnZVNpemV9YCk7IH1cblxuXHRcdHJldHVybiB0aGlzLnJlc3QuZ2V0KGAke3RoaXMuYmFzZVVybH0vcmVzdWx0c2AsIC4uLnBhcmFtcyk7XG4gIH1cblxuICAvKipcbiAgICogVXBkYXRlIHNlbnNvciBhbmFseXNpcyByZXN1bHRzIGJhY2ggZm9yIGEgc3BlY2lmaWMgc2Vuc29yc1xuICAgKiBAUmV0dXJuOiBFbnRpdHlSZXNwb25zZTxTZW5zb3JBbmFseXNpc1Jlc3VsdHM+XG4gICAqL1xuICB1cGRhdGUoc2Vuc29ySWQ/OiBzdHJpbmcsIGJvZHk/OiBBbmFseXNpc1Jlc3VsdCkge1xuICAgIHJldHVybiB0aGlzLnJlc3QucHV0KGAke3RoaXMuYmFzZVVybH0vc2Vuc29yLyR7c2Vuc29ySWR9YCwgdHlwZW9mIGJvZHkgPT09ICdvYmplY3QnID8gSlNPTi5zdHJpbmdpZnkoYm9keSkgOiBib2R5KTtcbiAgfVxuXG4gIC8qKlxuICAgKiBEZWxldGUgYWxsIGFuYWx5c2lzIHJlc3VsdHMgZm9yIGEgc3BlY2lmaWMgc2Vuc29yc1xuICAgKiBAUmV0dXJuOiBBY3Rpb25SZXNwb25zZVxuICAgKi9cbiAgZGVsZXRlKHNlbnNvcklkPzogc3RyaW5nKSB7XG4gICAgcmV0dXJuIHRoaXMucmVzdC5kZWxldGUoYCR7dGhpcy5iYXNlVXJsfS9zZW5zb3IvJHtzZW5zb3JJZH1gKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBHZXQgc2Vuc29yIGluZm8gZm9yIGFub21hbHlcbiAgICogQFJldHVybjogRW50aXR5UmVzcG9uc2U8U2Vuc29yQW5vbWFseUluZm8+XG4gICAqL1xuICBnZXRTZW5zb3JBbm9tYWx5SW5mbyhzZW5zb3JJZD86IHN0cmluZykge1xuICAgIHJldHVybiB0aGlzLnJlc3QuZ2V0KGAke3RoaXMuYmFzZVVybH0vc2Vuc29yLyR7c2Vuc29ySWR9L2luZm9gKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBGaW5kIGxpc3Qgb2YgYW5vbWFseSBldmVudCBpbmZvIG9iamVjdHMgcGVyIHNlbnNvciBpbiBhIGdpdmVuIHRpbWUgcGVyaW9kXG4gICAqIEByZXR1cm4gUXVlcnlSZXNwb25zZTxBbm9tYWx5RXZlbnRJbmZvPiBMaXN0IG9mIGFub21hbHkgZXZlbnQgaW5mbyBvYmplY3RzXG4gICAqL1xuICBmaW5kQW5vbWFseUV2ZW50SW5mbyhhY2NvdW50SWQ/OiBzdHJpbmcsIHNlbnNvcklkPzogc3RyaW5nLCBzdGF0dXM/OiBFdmVudFN0YXR1c0NvZGUsIGZyb20/OiBudW1iZXIsIHRvPzogbnVtYmVyLCBzb3J0Pzogc3RyaW5nLCBwYWdlPzogbnVtYmVyLCBwYWdlU2l6ZT86IG51bWJlcikge1xuICAgIGNvbnN0IHBhcmFtcyA9IG5ldyBBcnJheSgpO1x0XHRcbiAgICBpZiAoYWNjb3VudElkICE9IG51bGwpIHsgcGFyYW1zLnB1c2goYGFjY291bnRJZD0ke2FjY291bnRJZH1gKTsgfVxuICAgIGlmIChzZW5zb3JJZCAhPSBudWxsKSB7IHBhcmFtcy5wdXNoKGBzZW5zb3JJZD0ke3NlbnNvcklkfWApOyB9XG4gICAgaWYgKHN0YXR1cyAhPSBudWxsKSB7IHBhcmFtcy5wdXNoKGBzdGF0dXM9JHtzdGF0dXN9YCk7IH1cbiAgICBpZiAoZnJvbSAhPSBudWxsKSB7IHBhcmFtcy5wdXNoKGBmcm9tPSR7ZnJvbX1gKTsgfVxuICAgIGlmICh0byAhPSBudWxsKSB7IHBhcmFtcy5wdXNoKGB0bz0ke3RvfWApOyB9XG4gICAgaWYgKHNvcnQgIT0gbnVsbCkgeyBwYXJhbXMucHVzaChgc29ydD0ke3NvcnR9YCk7IH1cbiAgICBpZiAocGFnZSAhPSBudWxsKSB7IHBhcmFtcy5wdXNoKGBwYWdlPSR7cGFnZX1gKTsgfVxuICAgIGlmIChwYWdlU2l6ZSAhPSBudWxsKSB7IHBhcmFtcy5wdXNoKGBwYWdlU2l6ZT0ke3BhZ2VTaXplfWApOyB9XG5cblx0XHRyZXR1cm4gdGhpcy5yZXN0LmdldChgJHt0aGlzLmJhc2VVcmx9L2V2ZW50c2AsIC4uLnBhcmFtcyk7XG4gIH1cblxuICAvKipcbiAgICogVXBkYXRlIHNlbnNvciBhbm9tYWx5IHJ1bGUgYXR0cmlidXRlZFxuICAgKiBAcmV0dXJuIEFjdGlvblJlc3BvbnNlXG4gICAqL1xuICB1cGRhdGVBbm9tYWx5UnVsZShzZW5zb3JJZD86IHN0cmluZywgYm9keT86IFNlbnNvckFub21hbHlSdWxlSW5mbykge1xuICAgIHJldHVybiB0aGlzLnJlc3QucHV0KGAke3RoaXMuYmFzZVVybH0vcnVsZS8ke3NlbnNvcklkfWAsIHR5cGVvZiBib2R5ID09PSAnb2JqZWN0JyA/IEpTT04uc3RyaW5naWZ5KGJvZHkpIDogYm9keSk7XG4gIH1cblxuICAvKipcbiAgICogQ3JlYXRlIGR1bW15IGV2ZW50IChmb3IgYW5vbWFseSB0ZXN0cyBvbmx5KVxuICAgKiBUaGlzIG1ldGhvZCBpcyB1c2VkIGZvciB0ZXN0aW5nIG9ubHksIHRoZSBvbmx5IHNlcnZpY2UgZ2VuZXJhdGVzIGV2ZW50cyBpbiB0aGUgc3lzdGVtIGlzIHRoZSBldmVudCBzZXJ2aWNlXG4gICAqIEBwYXJhbSBldmVudCBFdmVudCBkYXRhIHRvIGNyZWF0ZVxuICAgKiBTb21lIG9mIHRoZSBldmVudCBmaWVsZHMgYXJlIG1hbmRhdG9yeTogKHRoZSBvdGhlciBhcmUgb3B0aW9uYWwpXG4gICAqIDx1bD5cbiAgICogPGxpPjxiPmlkOjwvYj4gVW5pcXVlIGV2ZW50IGlkIChlLmcuIEdVSUQgc3RyaW5nKTwvbGk+XG4gICAqIDxsaT48Yj5hY2NvdW50SWQ8L2I+IEFjY291bnQgSWQ8L2xpPlxuICAgKiA8bGk+PGI+c2Vuc29ySWQ8L2I+IFNlbnNvciBJZDwvbGk+XG4gICAqIDxsaT48Yj5vYmplY3RUeXBlPC9iPiBEZXRlY3RlZCBvYmplY3QgdHlwZTwvbGk+XG4gICAqIDxsaT48Yj5iZWhhdmlvclR5cGU8L2I+IEJlaGF2aW9yPC9saT5cbiAgICogPGxpPjxiPnJ1bGVJZDwvYj4gUnVsZSBJZDwvbGk+XG4gICAqIDxsaT48Yj5zdGFydFRpbWU6PC9iPiBJZiBzZXQgdG8gMCwgc2VydmVyIHRpbWUgd2lsbCBiZSBzZXQ8L2xpPlxuICAgKiA8L3VsPlxuICAgKiBAcmV0dXJuIEVudGl0eVJlc3BvbnNlPEV2ZW50PlxuICAgKi9cbiAgY3JlYXRlRHVtbXlFdmVudChib2R5PzogRXZlbnQpIHtcbiAgICByZXR1cm4gdGhpcy5yZXN0LnBvc3QoYCR7dGhpcy5iYXNlVXJsfS9ldmVudGAsIHR5cGVvZiBib2R5ID09PSAnb2JqZWN0JyA/IEpTT04uc3RyaW5naWZ5KGJvZHkpIDogYm9keSk7XG4gIH1cblxufVxuIl19