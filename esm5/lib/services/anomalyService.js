/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Injectable, Inject } from '@angular/core';
import { RestUtil } from '../../utils/rest-util';
import { CoreConfig } from '../../config';
/**
 * List of anomaly related actions for the anomaly detection service
 * \@RequestHeader X-API-KEY The key to identify the application (console)
 */
var AnomalyService = /** @class */ (function () {
    /**
     * Class constructor
     */
    function AnomalyService(config, rest) {
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
    /**
     * Get training results of all sensors with anomaly enabled flag ordered by the last training time
     * \@Return: QueryResponse<SensorAnalysisResults>
     * @param {?=} page
     * @param {?=} pageSize
     * @return {?}
     */
    AnomalyService.prototype.getSensorsAnalysisResults = /**
     * Get training results of all sensors with anomaly enabled flag ordered by the last training time
     * \@Return: QueryResponse<SensorAnalysisResults>
     * @param {?=} page
     * @param {?=} pageSize
     * @return {?}
     */
    function (page, pageSize) {
        var _a;
        /** @type {?} */
        var params = new Array();
        if (page != null) {
            params.push("page=" + page);
        }
        if (pageSize != null) {
            params.push("pageSize=" + pageSize);
        }
        return (_a = this.rest).get.apply(_a, tslib_1.__spread([this.baseUrl + "/results"], params));
    };
    /**
     * Update sensor analysis results bach for a specific sensors
     * @Return: EntityResponse<SensorAnalysisResults>
     */
    /**
     * Update sensor analysis results bach for a specific sensors
     * \@Return: EntityResponse<SensorAnalysisResults>
     * @param {?=} sensorId
     * @param {?=} body
     * @return {?}
     */
    AnomalyService.prototype.update = /**
     * Update sensor analysis results bach for a specific sensors
     * \@Return: EntityResponse<SensorAnalysisResults>
     * @param {?=} sensorId
     * @param {?=} body
     * @return {?}
     */
    function (sensorId, body) {
        return this.rest.put(this.baseUrl + "/sensor/" + sensorId, typeof body === 'object' ? JSON.stringify(body) : body);
    };
    /**
     * Delete all analysis results for a specific sensors
     * @Return: ActionResponse
     */
    /**
     * Delete all analysis results for a specific sensors
     * \@Return: ActionResponse
     * @param {?=} sensorId
     * @return {?}
     */
    AnomalyService.prototype.delete = /**
     * Delete all analysis results for a specific sensors
     * \@Return: ActionResponse
     * @param {?=} sensorId
     * @return {?}
     */
    function (sensorId) {
        return this.rest.delete(this.baseUrl + "/sensor/" + sensorId);
    };
    /**
     * Get sensor info for anomaly
     * @Return: EntityResponse<SensorAnomalyInfo>
     */
    /**
     * Get sensor info for anomaly
     * \@Return: EntityResponse<SensorAnomalyInfo>
     * @param {?=} sensorId
     * @return {?}
     */
    AnomalyService.prototype.getSensorAnomalyInfo = /**
     * Get sensor info for anomaly
     * \@Return: EntityResponse<SensorAnomalyInfo>
     * @param {?=} sensorId
     * @return {?}
     */
    function (sensorId) {
        return this.rest.get(this.baseUrl + "/sensor/" + sensorId + "/info");
    };
    /**
     * Find list of anomaly event info objects per sensor in a given time period
     * @return QueryResponse<AnomalyEventInfo> List of anomaly event info objects
     */
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
    AnomalyService.prototype.findAnomalyEventInfo = /**
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
    function (accountId, sensorId, status, from, to, sort, page, pageSize) {
        var _a;
        /** @type {?} */
        var params = new Array();
        if (accountId != null) {
            params.push("accountId=" + accountId);
        }
        if (sensorId != null) {
            params.push("sensorId=" + sensorId);
        }
        if (status != null) {
            params.push("status=" + status);
        }
        if (from != null) {
            params.push("from=" + from);
        }
        if (to != null) {
            params.push("to=" + to);
        }
        if (sort != null) {
            params.push("sort=" + sort);
        }
        if (page != null) {
            params.push("page=" + page);
        }
        if (pageSize != null) {
            params.push("pageSize=" + pageSize);
        }
        return (_a = this.rest).get.apply(_a, tslib_1.__spread([this.baseUrl + "/events"], params));
    };
    /**
     * Update sensor anomaly rule attributed
     * @return ActionResponse
     */
    /**
     * Update sensor anomaly rule attributed
     * @param {?=} sensorId
     * @param {?=} body
     * @return {?} ActionResponse
     */
    AnomalyService.prototype.updateAnomalyRule = /**
     * Update sensor anomaly rule attributed
     * @param {?=} sensorId
     * @param {?=} body
     * @return {?} ActionResponse
     */
    function (sensorId, body) {
        return this.rest.put(this.baseUrl + "/rule/" + sensorId, typeof body === 'object' ? JSON.stringify(body) : body);
    };
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
    /**
     * Create dummy event (for anomaly tests only)
     * This method is used for testing only, the only service generates events in the system is the event service
     * @param {?=} body
     * @return {?} EntityResponse<Event>
     */
    AnomalyService.prototype.createDummyEvent = /**
     * Create dummy event (for anomaly tests only)
     * This method is used for testing only, the only service generates events in the system is the event service
     * @param {?=} body
     * @return {?} EntityResponse<Event>
     */
    function (body) {
        return this.rest.post(this.baseUrl + "/event", typeof body === 'object' ? JSON.stringify(body) : body);
    };
    AnomalyService.decorators = [
        { type: Injectable }
    ];
    /** @nocollapse */
    AnomalyService.ctorParameters = function () { return [
        { type: CoreConfig, decorators: [{ type: Inject, args: ['config',] }] },
        { type: RestUtil }
    ]; };
    return AnomalyService;
}());
export { AnomalyService };
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYW5vbWFseVNlcnZpY2UuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AYWdlbnR2aS9uZy1jb3JlLWxpYi8iLCJzb3VyY2VzIjpbImxpYi9zZXJ2aWNlcy9hbm9tYWx5U2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ25ELE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSx1QkFBdUIsQ0FBQztBQUNqRCxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sY0FBYyxDQUFDOzs7OztBQVkxQztJQU1FOztPQUVHO0lBQ0gsd0JBQXNDLE1BQWtCLEVBQVUsSUFBYztRQUExQyxXQUFNLEdBQU4sTUFBTSxDQUFZO1FBQVUsU0FBSSxHQUFKLElBQUksQ0FBVTs7UUFMeEUsWUFBTyxHQUFHLFVBQVUsQ0FBQztRQU0zQixJQUFJLENBQUMsT0FBTyxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUMsR0FBRyxHQUFHLElBQUksQ0FBQyxPQUFPLENBQUM7SUFDaEQsQ0FBQztJQUdEOzs7T0FHRzs7Ozs7Ozs7SUFDSCxrREFBeUI7Ozs7Ozs7SUFBekIsVUFBMEIsSUFBYSxFQUFFLFFBQWlCOzs7WUFDbEQsTUFBTSxHQUFHLElBQUksS0FBSyxFQUFFO1FBQzFCLElBQUksSUFBSSxJQUFJLElBQUksRUFBRTtZQUFFLE1BQU0sQ0FBQyxJQUFJLENBQUMsVUFBUSxJQUFNLENBQUMsQ0FBQztTQUFFO1FBQ2xELElBQUksUUFBUSxJQUFJLElBQUksRUFBRTtZQUFFLE1BQU0sQ0FBQyxJQUFJLENBQUMsY0FBWSxRQUFVLENBQUMsQ0FBQztTQUFFO1FBRWhFLE9BQU8sQ0FBQSxLQUFBLElBQUksQ0FBQyxJQUFJLENBQUEsQ0FBQyxHQUFHLDZCQUFJLElBQUksQ0FBQyxPQUFPLGFBQVUsR0FBSyxNQUFNLEdBQUU7SUFDM0QsQ0FBQztJQUVEOzs7T0FHRzs7Ozs7Ozs7SUFDSCwrQkFBTTs7Ozs7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QUFRLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQ3pHLENBQUM7O2dCQTlGRixVQUFVOzs7O2dCQVpGLFVBQVUsdUJBcUJKLE1BQU0sU0FBQyxRQUFRO2dCQXRCckIsUUFBUTs7SUE2R2pCLHFCQUFDO0NBQUEsQUFoR0QsSUFnR0M7U0EvRlksY0FBYzs7Ozs7O0lBR3pCLGlDQUE2Qjs7Ozs7SUFLakIsZ0NBQTRDOzs7OztJQUFFLDhCQUFzQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUsIEluamVjdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgUmVzdFV0aWwgfSBmcm9tICcuLi8uLi91dGlscy9yZXN0LXV0aWwnO1xuaW1wb3J0IHsgQ29yZUNvbmZpZyB9IGZyb20gJy4uLy4uL2NvbmZpZyc7XG5cbmltcG9ydCB7IEV2ZW50U3RhdHVzQ29kZSB9IGZyb20gJy4uL2VudW1zL0V2ZW50U3RhdHVzQ29kZSc7XG5pbXBvcnQgeyBTZW5zb3JBbm9tYWx5UnVsZUluZm8gfSBmcm9tICcuLi9jb21tb24vU2Vuc29yQW5vbWFseVJ1bGVJbmZvJztcbmltcG9ydCB7IEV2ZW50IH0gZnJvbSAnLi4vZW50aXRpZXMvRXZlbnQnO1xuaW1wb3J0IHsgQW5hbHlzaXNSZXN1bHQgfSBmcm9tICcuLi9jb21tb24vQW5hbHlzaXNSZXN1bHQnO1xuXG5cbi8qKlxuICogTGlzdCBvZiBhbm9tYWx5IHJlbGF0ZWQgYWN0aW9ucyBmb3IgdGhlIGFub21hbHkgZGV0ZWN0aW9uIHNlcnZpY2VcbiAqIEBSZXF1ZXN0SGVhZGVyIFgtQVBJLUtFWSBUaGUga2V5IHRvIGlkZW50aWZ5IHRoZSBhcHBsaWNhdGlvbiAoY29uc29sZSkgXG4gKi9cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBBbm9tYWx5U2VydmljZSB7XG5cbiAgLy8gVVJMIHRvIHdlYiBhcGlcbiAgcHJpdmF0ZSBiYXNlVXJsID0gJy9hbm9tYWx5JztcblxuICAvKipcbiAgICogQ2xhc3MgY29uc3RydWN0b3JcbiAgICovXG4gIGNvbnN0cnVjdG9yKEBJbmplY3QoJ2NvbmZpZycpIHByaXZhdGUgY29uZmlnOiBDb3JlQ29uZmlnLCBwcml2YXRlIHJlc3Q6IFJlc3RVdGlsKSB7XG4gICAgdGhpcy5iYXNlVXJsID0gdGhpcy5jb25maWcuYXBpICsgdGhpcy5iYXNlVXJsO1xuICB9XG5cblxuICAvKipcbiAgICogR2V0IHRyYWluaW5nIHJlc3VsdHMgb2YgYWxsIHNlbnNvcnMgd2l0aCBhbm9tYWx5IGVuYWJsZWQgZmxhZyBvcmRlcmVkIGJ5IHRoZSBsYXN0IHRyYWluaW5nIHRpbWVcbiAgICogQFJldHVybjogUXVlcnlSZXNwb25zZTxTZW5zb3JBbmFseXNpc1Jlc3VsdHM+XG4gICAqL1xuICBnZXRTZW5zb3JzQW5hbHlzaXNSZXN1bHRzKHBhZ2U/OiBudW1iZXIsIHBhZ2VTaXplPzogbnVtYmVyKSB7XG4gICAgY29uc3QgcGFyYW1zID0gbmV3IEFycmF5KCk7XHRcdFxuICAgIGlmIChwYWdlICE9IG51bGwpIHsgcGFyYW1zLnB1c2goYHBhZ2U9JHtwYWdlfWApOyB9XG4gICAgaWYgKHBhZ2VTaXplICE9IG51bGwpIHsgcGFyYW1zLnB1c2goYHBhZ2VTaXplPSR7cGFnZVNpemV9YCk7IH1cblxuXHRcdHJldHVybiB0aGlzLnJlc3QuZ2V0KGAke3RoaXMuYmFzZVVybH0vcmVzdWx0c2AsIC4uLnBhcmFtcyk7XG4gIH1cblxuICAvKipcbiAgICogVXBkYXRlIHNlbnNvciBhbmFseXNpcyByZXN1bHRzIGJhY2ggZm9yIGEgc3BlY2lmaWMgc2Vuc29yc1xuICAgKiBAUmV0dXJuOiBFbnRpdHlSZXNwb25zZTxTZW5zb3JBbmFseXNpc1Jlc3VsdHM+XG4gICAqL1xuICB1cGRhdGUoc2Vuc29ySWQ/OiBzdHJpbmcsIGJvZHk/OiBBbmFseXNpc1Jlc3VsdCkge1xuICAgIHJldHVybiB0aGlzLnJlc3QucHV0KGAke3RoaXMuYmFzZVVybH0vc2Vuc29yLyR7c2Vuc29ySWR9YCwgdHlwZW9mIGJvZHkgPT09ICdvYmplY3QnID8gSlNPTi5zdHJpbmdpZnkoYm9keSkgOiBib2R5KTtcbiAgfVxuXG4gIC8qKlxuICAgKiBEZWxldGUgYWxsIGFuYWx5c2lzIHJlc3VsdHMgZm9yIGEgc3BlY2lmaWMgc2Vuc29yc1xuICAgKiBAUmV0dXJuOiBBY3Rpb25SZXNwb25zZVxuICAgKi9cbiAgZGVsZXRlKHNlbnNvcklkPzogc3RyaW5nKSB7XG4gICAgcmV0dXJuIHRoaXMucmVzdC5kZWxldGUoYCR7dGhpcy5iYXNlVXJsfS9zZW5zb3IvJHtzZW5zb3JJZH1gKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBHZXQgc2Vuc29yIGluZm8gZm9yIGFub21hbHlcbiAgICogQFJldHVybjogRW50aXR5UmVzcG9uc2U8U2Vuc29yQW5vbWFseUluZm8+XG4gICAqL1xuICBnZXRTZW5zb3JBbm9tYWx5SW5mbyhzZW5zb3JJZD86IHN0cmluZykge1xuICAgIHJldHVybiB0aGlzLnJlc3QuZ2V0KGAke3RoaXMuYmFzZVVybH0vc2Vuc29yLyR7c2Vuc29ySWR9L2luZm9gKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBGaW5kIGxpc3Qgb2YgYW5vbWFseSBldmVudCBpbmZvIG9iamVjdHMgcGVyIHNlbnNvciBpbiBhIGdpdmVuIHRpbWUgcGVyaW9kXG4gICAqIEByZXR1cm4gUXVlcnlSZXNwb25zZTxBbm9tYWx5RXZlbnRJbmZvPiBMaXN0IG9mIGFub21hbHkgZXZlbnQgaW5mbyBvYmplY3RzXG4gICAqL1xuICBmaW5kQW5vbWFseUV2ZW50SW5mbyhhY2NvdW50SWQ/OiBzdHJpbmcsIHNlbnNvcklkPzogc3RyaW5nLCBzdGF0dXM/OiBFdmVudFN0YXR1c0NvZGUsIGZyb20/OiBudW1iZXIsIHRvPzogbnVtYmVyLCBzb3J0Pzogc3RyaW5nLCBwYWdlPzogbnVtYmVyLCBwYWdlU2l6ZT86IG51bWJlcikge1xuICAgIGNvbnN0IHBhcmFtcyA9IG5ldyBBcnJheSgpO1x0XHRcbiAgICBpZiAoYWNjb3VudElkICE9IG51bGwpIHsgcGFyYW1zLnB1c2goYGFjY291bnRJZD0ke2FjY291bnRJZH1gKTsgfVxuICAgIGlmIChzZW5zb3JJZCAhPSBudWxsKSB7IHBhcmFtcy5wdXNoKGBzZW5zb3JJZD0ke3NlbnNvcklkfWApOyB9XG4gICAgaWYgKHN0YXR1cyAhPSBudWxsKSB7IHBhcmFtcy5wdXNoKGBzdGF0dXM9JHtzdGF0dXN9YCk7IH1cbiAgICBpZiAoZnJvbSAhPSBudWxsKSB7IHBhcmFtcy5wdXNoKGBmcm9tPSR7ZnJvbX1gKTsgfVxuICAgIGlmICh0byAhPSBudWxsKSB7IHBhcmFtcy5wdXNoKGB0bz0ke3RvfWApOyB9XG4gICAgaWYgKHNvcnQgIT0gbnVsbCkgeyBwYXJhbXMucHVzaChgc29ydD0ke3NvcnR9YCk7IH1cbiAgICBpZiAocGFnZSAhPSBudWxsKSB7IHBhcmFtcy5wdXNoKGBwYWdlPSR7cGFnZX1gKTsgfVxuICAgIGlmIChwYWdlU2l6ZSAhPSBudWxsKSB7IHBhcmFtcy5wdXNoKGBwYWdlU2l6ZT0ke3BhZ2VTaXplfWApOyB9XG5cblx0XHRyZXR1cm4gdGhpcy5yZXN0LmdldChgJHt0aGlzLmJhc2VVcmx9L2V2ZW50c2AsIC4uLnBhcmFtcyk7XG4gIH1cblxuICAvKipcbiAgICogVXBkYXRlIHNlbnNvciBhbm9tYWx5IHJ1bGUgYXR0cmlidXRlZFxuICAgKiBAcmV0dXJuIEFjdGlvblJlc3BvbnNlXG4gICAqL1xuICB1cGRhdGVBbm9tYWx5UnVsZShzZW5zb3JJZD86IHN0cmluZywgYm9keT86IFNlbnNvckFub21hbHlSdWxlSW5mbykge1xuICAgIHJldHVybiB0aGlzLnJlc3QucHV0KGAke3RoaXMuYmFzZVVybH0vcnVsZS8ke3NlbnNvcklkfWAsIHR5cGVvZiBib2R5ID09PSAnb2JqZWN0JyA/IEpTT04uc3RyaW5naWZ5KGJvZHkpIDogYm9keSk7XG4gIH1cblxuICAvKipcbiAgICogQ3JlYXRlIGR1bW15IGV2ZW50IChmb3IgYW5vbWFseSB0ZXN0cyBvbmx5KVxuICAgKiBUaGlzIG1ldGhvZCBpcyB1c2VkIGZvciB0ZXN0aW5nIG9ubHksIHRoZSBvbmx5IHNlcnZpY2UgZ2VuZXJhdGVzIGV2ZW50cyBpbiB0aGUgc3lzdGVtIGlzIHRoZSBldmVudCBzZXJ2aWNlXG4gICAqIEBwYXJhbSBldmVudCBFdmVudCBkYXRhIHRvIGNyZWF0ZVxuICAgKiBTb21lIG9mIHRoZSBldmVudCBmaWVsZHMgYXJlIG1hbmRhdG9yeTogKHRoZSBvdGhlciBhcmUgb3B0aW9uYWwpXG4gICAqIDx1bD5cbiAgICogPGxpPjxiPmlkOjwvYj4gVW5pcXVlIGV2ZW50IGlkIChlLmcuIEdVSUQgc3RyaW5nKTwvbGk+XG4gICAqIDxsaT48Yj5hY2NvdW50SWQ8L2I+IEFjY291bnQgSWQ8L2xpPlxuICAgKiA8bGk+PGI+c2Vuc29ySWQ8L2I+IFNlbnNvciBJZDwvbGk+XG4gICAqIDxsaT48Yj5vYmplY3RUeXBlPC9iPiBEZXRlY3RlZCBvYmplY3QgdHlwZTwvbGk+XG4gICAqIDxsaT48Yj5iZWhhdmlvclR5cGU8L2I+IEJlaGF2aW9yPC9saT5cbiAgICogPGxpPjxiPnJ1bGVJZDwvYj4gUnVsZSBJZDwvbGk+XG4gICAqIDxsaT48Yj5zdGFydFRpbWU6PC9iPiBJZiBzZXQgdG8gMCwgc2VydmVyIHRpbWUgd2lsbCBiZSBzZXQ8L2xpPlxuICAgKiA8L3VsPlxuICAgKiBAcmV0dXJuIEVudGl0eVJlc3BvbnNlPEV2ZW50PlxuICAgKi9cbiAgY3JlYXRlRHVtbXlFdmVudChib2R5PzogRXZlbnQpIHtcbiAgICByZXR1cm4gdGhpcy5yZXN0LnBvc3QoYCR7dGhpcy5iYXNlVXJsfS9ldmVudGAsIHR5cGVvZiBib2R5ID09PSAnb2JqZWN0JyA/IEpTT04uc3RyaW5naWZ5KGJvZHkpIDogYm9keSk7XG4gIH1cblxufVxuIl19