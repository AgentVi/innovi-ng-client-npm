/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable, Inject } from '@angular/core';
import { RestUtil } from '../../utils/rest-util';
import { CoreConfig } from '../../config';
/**
 * List of anomaly related actions for the anomaly detection service
 * \@RequestHeader X-API-KEY The key to identify the application (console)
 */
export class AnomalyService {
    /**
     * Class constructor
     * @param {?} config
     * @param {?} rest
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
     * \@Return: QueryResponse<SensorAnalysisResults>
     * @param {?=} page
     * @param {?=} pageSize
     * @return {?}
     */
    getSensorsAnalysisResults(page, pageSize) {
        /** @type {?} */
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
     * \@Return: EntityResponse<SensorAnalysisResults>
     * @param {?=} sensorId
     * @param {?=} body
     * @return {?}
     */
    update(sensorId, body) {
        return this.rest.put(`${this.baseUrl}/sensor/${sensorId}`, typeof body === 'object' ? JSON.stringify(body) : body);
    }
    /**
     * Delete all analysis results for a specific sensors
     * \@Return: ActionResponse
     * @param {?=} sensorId
     * @return {?}
     */
    delete(sensorId) {
        return this.rest.delete(`${this.baseUrl}/sensor/${sensorId}`);
    }
    /**
     * Get sensor info for anomaly
     * \@Return: EntityResponse<SensorAnomalyInfo>
     * @param {?=} sensorId
     * @return {?}
     */
    getSensorAnomalyInfo(sensorId) {
        return this.rest.get(`${this.baseUrl}/sensor/${sensorId}/info`);
    }
    /**
     * Find list of anomaly event info objects per sensor in a given time period
     * @param {?=} accountId
     * @param {?=} sensorId
     * @param {?=} status
     * @param {?=} from
     * @param {?=} to
     * @param {?=} sort
     * @param {?=} page
     * @param {?=} pageSize
     * @return {?} QueryResponse<AnomalyEventInfo> List of anomaly event info objects
     */
    findAnomalyEventInfo(accountId, sensorId, status, from, to, sort, page, pageSize) {
        /** @type {?} */
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
     * @param {?=} sensorId
     * @param {?=} body
     * @return {?} ActionResponse
     */
    updateAnomalyRule(sensorId, body) {
        return this.rest.put(`${this.baseUrl}/rule/${sensorId}`, typeof body === 'object' ? JSON.stringify(body) : body);
    }
    /**
     * Create dummy event (for anomaly tests only)
     * This method is used for testing only, the only service generates events in the system is the event service
     * @param {?=} body
     * @return {?} EntityResponse<Event>
     */
    createDummyEvent(body) {
        return this.rest.post(`${this.baseUrl}/event`, typeof body === 'object' ? JSON.stringify(body) : body);
    }
}
AnomalyService.decorators = [
    { type: Injectable }
];
/** @nocollapse */
AnomalyService.ctorParameters = () => [
    { type: CoreConfig, decorators: [{ type: Inject, args: ['config',] }] },
    { type: RestUtil }
];
if (false) {
    /**
     * @type {?}
     * @private
     */
    AnomalyService.prototype.baseUrl;
    /**
     * @type {?}
     * @private
     */
    AnomalyService.prototype.config;
    /**
     * @type {?}
     * @private
     */
    AnomalyService.prototype.rest;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYW5vbWFseVNlcnZpY2UuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AYWdlbnR2aS9uZy1jb3JlLWxpYi8iLCJzb3VyY2VzIjpbImxpYi9zZXJ2aWNlcy9hbm9tYWx5U2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDbkQsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLHVCQUF1QixDQUFDO0FBQ2pELE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxjQUFjLENBQUM7Ozs7O0FBYTFDLE1BQU0sT0FBTyxjQUFjOzs7Ozs7SUFRekIsWUFBc0MsTUFBa0IsRUFBVSxJQUFjO1FBQTFDLFdBQU0sR0FBTixNQUFNLENBQVk7UUFBVSxTQUFJLEdBQUosSUFBSSxDQUFVOztRQUx4RSxZQUFPLEdBQUcsVUFBVSxDQUFDO1FBTTNCLElBQUksQ0FBQyxPQUFPLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxHQUFHLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQztJQUNoRCxDQUFDOzs7Ozs7OztJQU9ELHlCQUF5QixDQUFDLElBQWEsRUFBRSxRQUFpQjs7Y0FDbEQsTUFBTSxHQUFHLElBQUksS0FBSyxFQUFFO1FBQzFCLElBQUksSUFBSSxJQUFJLElBQUksRUFBRTtZQUFFLE1BQU0sQ0FBQyxJQUFJLENBQUMsUUFBUSxJQUFJLEVBQUUsQ0FBQyxDQUFDO1NBQUU7UUFDbEQsSUFBSSxRQUFRLElBQUksSUFBSSxFQUFFO1lBQUUsTUFBTSxDQUFDLElBQUksQ0FBQyxZQUFZLFFBQVEsRUFBRSxDQUFDLENBQUM7U0FBRTtRQUVoRSxPQUFPLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLEdBQUcsSUFBSSxDQUFDLE9BQU8sVUFBVSxFQUFFLEdBQUcsTUFBTSxDQUFDLENBQUM7SUFDM0QsQ0FBQzs7Ozs7Ozs7SUFNRCxNQUFNLENBQUMsUUFBaUIsRUFBRSxJQUFxQjtRQUM3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L0ZGLFVBQVU7Ozs7WUFaRixVQUFVLHVCQXFCSixNQUFNLFNBQUMsUUFBUTtZQXRCckIsUUFBUTs7Ozs7OztJQWlCZixpQ0FBNkI7Ozs7O0lBS2pCLGdDQUE0Qzs7Ozs7SUFBRSw4QkFBc0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlLCBJbmplY3QgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFJlc3RVdGlsIH0gZnJvbSAnLi4vLi4vdXRpbHMvcmVzdC11dGlsJztcbmltcG9ydCB7IENvcmVDb25maWcgfSBmcm9tICcuLi8uLi9jb25maWcnO1xuXG5pbXBvcnQgeyBBbmFseXNpc1Jlc3VsdCB9IGZyb20gJy4uL2NvbW1vbi9BbmFseXNpc1Jlc3VsdCc7XG5pbXBvcnQgeyBFdmVudFN0YXR1c0NvZGUgfSBmcm9tICcuLi9lbnVtcy9FdmVudFN0YXR1c0NvZGUnO1xuaW1wb3J0IHsgU2Vuc29yQW5vbWFseVJ1bGVJbmZvIH0gZnJvbSAnLi4vY29tbW9uL1NlbnNvckFub21hbHlSdWxlSW5mbyc7XG5pbXBvcnQgeyBFdmVudCB9IGZyb20gJy4uL2VudGl0aWVzL0V2ZW50JztcblxuXG4vKipcbiAqIExpc3Qgb2YgYW5vbWFseSByZWxhdGVkIGFjdGlvbnMgZm9yIHRoZSBhbm9tYWx5IGRldGVjdGlvbiBzZXJ2aWNlXG4gKiBAUmVxdWVzdEhlYWRlciBYLUFQSS1LRVkgVGhlIGtleSB0byBpZGVudGlmeSB0aGUgYXBwbGljYXRpb24gKGNvbnNvbGUpIFxuICovXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgQW5vbWFseVNlcnZpY2Uge1xuXG4gIC8vIFVSTCB0byB3ZWIgYXBpXG4gIHByaXZhdGUgYmFzZVVybCA9ICcvYW5vbWFseSc7XG5cbiAgLyoqXG4gICAqIENsYXNzIGNvbnN0cnVjdG9yXG4gICAqL1xuICBjb25zdHJ1Y3RvcihASW5qZWN0KCdjb25maWcnKSBwcml2YXRlIGNvbmZpZzogQ29yZUNvbmZpZywgcHJpdmF0ZSByZXN0OiBSZXN0VXRpbCkge1xuICAgIHRoaXMuYmFzZVVybCA9IHRoaXMuY29uZmlnLmFwaSArIHRoaXMuYmFzZVVybDtcbiAgfVxuXG5cbiAgLyoqXG4gICAqIEdldCB0cmFpbmluZyByZXN1bHRzIG9mIGFsbCBzZW5zb3JzIHdpdGggYW5vbWFseSBlbmFibGVkIGZsYWcgb3JkZXJlZCBieSB0aGUgbGFzdCB0cmFpbmluZyB0aW1lXG4gICAqIEBSZXR1cm46IFF1ZXJ5UmVzcG9uc2U8U2Vuc29yQW5hbHlzaXNSZXN1bHRzPlxuICAgKi9cbiAgZ2V0U2Vuc29yc0FuYWx5c2lzUmVzdWx0cyhwYWdlPzogbnVtYmVyLCBwYWdlU2l6ZT86IG51bWJlcikge1xuICAgIGNvbnN0IHBhcmFtcyA9IG5ldyBBcnJheSgpO1x0XHRcbiAgICBpZiAocGFnZSAhPSBudWxsKSB7IHBhcmFtcy5wdXNoKGBwYWdlPSR7cGFnZX1gKTsgfVxuICAgIGlmIChwYWdlU2l6ZSAhPSBudWxsKSB7IHBhcmFtcy5wdXNoKGBwYWdlU2l6ZT0ke3BhZ2VTaXplfWApOyB9XG5cblx0XHRyZXR1cm4gdGhpcy5yZXN0LmdldChgJHt0aGlzLmJhc2VVcmx9L3Jlc3VsdHNgLCAuLi5wYXJhbXMpO1xuICB9XG5cbiAgLyoqXG4gICAqIFVwZGF0ZSBzZW5zb3IgYW5hbHlzaXMgcmVzdWx0cyBiYWNoIGZvciBhIHNwZWNpZmljIHNlbnNvcnNcbiAgICogQFJldHVybjogRW50aXR5UmVzcG9uc2U8U2Vuc29yQW5hbHlzaXNSZXN1bHRzPlxuICAgKi9cbiAgdXBkYXRlKHNlbnNvcklkPzogc3RyaW5nLCBib2R5PzogQW5hbHlzaXNSZXN1bHQpIHtcbiAgICByZXR1cm4gdGhpcy5yZXN0LnB1dChgJHt0aGlzLmJhc2VVcmx9L3NlbnNvci8ke3NlbnNvcklkfWAsIHR5cGVvZiBib2R5ID09PSAnb2JqZWN0JyA/IEpTT04uc3RyaW5naWZ5KGJvZHkpIDogYm9keSk7XG4gIH1cblxuICAvKipcbiAgICogRGVsZXRlIGFsbCBhbmFseXNpcyByZXN1bHRzIGZvciBhIHNwZWNpZmljIHNlbnNvcnNcbiAgICogQFJldHVybjogQWN0aW9uUmVzcG9uc2VcbiAgICovXG4gIGRlbGV0ZShzZW5zb3JJZD86IHN0cmluZykge1xuICAgIHJldHVybiB0aGlzLnJlc3QuZGVsZXRlKGAke3RoaXMuYmFzZVVybH0vc2Vuc29yLyR7c2Vuc29ySWR9YCk7XG4gIH1cblxuICAvKipcbiAgICogR2V0IHNlbnNvciBpbmZvIGZvciBhbm9tYWx5XG4gICAqIEBSZXR1cm46IEVudGl0eVJlc3BvbnNlPFNlbnNvckFub21hbHlJbmZvPlxuICAgKi9cbiAgZ2V0U2Vuc29yQW5vbWFseUluZm8oc2Vuc29ySWQ/OiBzdHJpbmcpIHtcbiAgICByZXR1cm4gdGhpcy5yZXN0LmdldChgJHt0aGlzLmJhc2VVcmx9L3NlbnNvci8ke3NlbnNvcklkfS9pbmZvYCk7XG4gIH1cblxuICAvKipcbiAgICogRmluZCBsaXN0IG9mIGFub21hbHkgZXZlbnQgaW5mbyBvYmplY3RzIHBlciBzZW5zb3IgaW4gYSBnaXZlbiB0aW1lIHBlcmlvZFxuICAgKiBAcmV0dXJuIFF1ZXJ5UmVzcG9uc2U8QW5vbWFseUV2ZW50SW5mbz4gTGlzdCBvZiBhbm9tYWx5IGV2ZW50IGluZm8gb2JqZWN0c1xuICAgKi9cbiAgZmluZEFub21hbHlFdmVudEluZm8oYWNjb3VudElkPzogc3RyaW5nLCBzZW5zb3JJZD86IHN0cmluZywgc3RhdHVzPzogRXZlbnRTdGF0dXNDb2RlLCBmcm9tPzogbnVtYmVyLCB0bz86IG51bWJlciwgc29ydD86IHN0cmluZywgcGFnZT86IG51bWJlciwgcGFnZVNpemU/OiBudW1iZXIpIHtcbiAgICBjb25zdCBwYXJhbXMgPSBuZXcgQXJyYXkoKTtcdFx0XG4gICAgaWYgKGFjY291bnRJZCAhPSBudWxsKSB7IHBhcmFtcy5wdXNoKGBhY2NvdW50SWQ9JHthY2NvdW50SWR9YCk7IH1cbiAgICBpZiAoc2Vuc29ySWQgIT0gbnVsbCkgeyBwYXJhbXMucHVzaChgc2Vuc29ySWQ9JHtzZW5zb3JJZH1gKTsgfVxuICAgIGlmIChzdGF0dXMgIT0gbnVsbCkgeyBwYXJhbXMucHVzaChgc3RhdHVzPSR7c3RhdHVzfWApOyB9XG4gICAgaWYgKGZyb20gIT0gbnVsbCkgeyBwYXJhbXMucHVzaChgZnJvbT0ke2Zyb219YCk7IH1cbiAgICBpZiAodG8gIT0gbnVsbCkgeyBwYXJhbXMucHVzaChgdG89JHt0b31gKTsgfVxuICAgIGlmIChzb3J0ICE9IG51bGwpIHsgcGFyYW1zLnB1c2goYHNvcnQ9JHtzb3J0fWApOyB9XG4gICAgaWYgKHBhZ2UgIT0gbnVsbCkgeyBwYXJhbXMucHVzaChgcGFnZT0ke3BhZ2V9YCk7IH1cbiAgICBpZiAocGFnZVNpemUgIT0gbnVsbCkgeyBwYXJhbXMucHVzaChgcGFnZVNpemU9JHtwYWdlU2l6ZX1gKTsgfVxuXG5cdFx0cmV0dXJuIHRoaXMucmVzdC5nZXQoYCR7dGhpcy5iYXNlVXJsfS9ldmVudHNgLCAuLi5wYXJhbXMpO1xuICB9XG5cbiAgLyoqXG4gICAqIFVwZGF0ZSBzZW5zb3IgYW5vbWFseSBydWxlIGF0dHJpYnV0ZWRcbiAgICogQHJldHVybiBBY3Rpb25SZXNwb25zZVxuICAgKi9cbiAgdXBkYXRlQW5vbWFseVJ1bGUoc2Vuc29ySWQ/OiBzdHJpbmcsIGJvZHk/OiBTZW5zb3JBbm9tYWx5UnVsZUluZm8pIHtcbiAgICByZXR1cm4gdGhpcy5yZXN0LnB1dChgJHt0aGlzLmJhc2VVcmx9L3J1bGUvJHtzZW5zb3JJZH1gLCB0eXBlb2YgYm9keSA9PT0gJ29iamVjdCcgPyBKU09OLnN0cmluZ2lmeShib2R5KSA6IGJvZHkpO1xuICB9XG5cbiAgLyoqXG4gICAqIENyZWF0ZSBkdW1teSBldmVudCAoZm9yIGFub21hbHkgdGVzdHMgb25seSlcbiAgICogVGhpcyBtZXRob2QgaXMgdXNlZCBmb3IgdGVzdGluZyBvbmx5LCB0aGUgb25seSBzZXJ2aWNlIGdlbmVyYXRlcyBldmVudHMgaW4gdGhlIHN5c3RlbSBpcyB0aGUgZXZlbnQgc2VydmljZVxuICAgKiBAcGFyYW0gZXZlbnQgRXZlbnQgZGF0YSB0byBjcmVhdGVcbiAgICogU29tZSBvZiB0aGUgZXZlbnQgZmllbGRzIGFyZSBtYW5kYXRvcnk6ICh0aGUgb3RoZXIgYXJlIG9wdGlvbmFsKVxuICAgKiA8dWw+XG4gICAqIDxsaT48Yj5pZDo8L2I+IFVuaXF1ZSBldmVudCBpZCAoZS5nLiBHVUlEIHN0cmluZyk8L2xpPlxuICAgKiA8bGk+PGI+YWNjb3VudElkPC9iPiBBY2NvdW50IElkPC9saT5cbiAgICogPGxpPjxiPnNlbnNvcklkPC9iPiBTZW5zb3IgSWQ8L2xpPlxuICAgKiA8bGk+PGI+b2JqZWN0VHlwZTwvYj4gRGV0ZWN0ZWQgb2JqZWN0IHR5cGU8L2xpPlxuICAgKiA8bGk+PGI+YmVoYXZpb3JUeXBlPC9iPiBCZWhhdmlvcjwvbGk+XG4gICAqIDxsaT48Yj5ydWxlSWQ8L2I+IFJ1bGUgSWQ8L2xpPlxuICAgKiA8bGk+PGI+UnVsZVR5cGU8L2I+IFJ1bGUgdHlwZTwvbGk+XG4gICAqIDxsaT48Yj5zdGFydFRpbWU6PC9iPiBJZiBzZXQgdG8gMCwgc2VydmVyIHRpbWUgd2lsbCBiZSBzZXQ8L2xpPlxuICAgKiA8L3VsPlxuICAgKiBAcmV0dXJuIEVudGl0eVJlc3BvbnNlPEV2ZW50PlxuICAgKi9cbiAgY3JlYXRlRHVtbXlFdmVudChib2R5PzogRXZlbnQpIHtcbiAgICByZXR1cm4gdGhpcy5yZXN0LnBvc3QoYCR7dGhpcy5iYXNlVXJsfS9ldmVudGAsIHR5cGVvZiBib2R5ID09PSAnb2JqZWN0JyA/IEpTT04uc3RyaW5naWZ5KGJvZHkpIDogYm9keSk7XG4gIH1cblxufVxuIl19