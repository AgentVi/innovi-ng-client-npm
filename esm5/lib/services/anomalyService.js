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
     * <li><b>RuleType</b> Rule type</li>
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYW5vbWFseVNlcnZpY2UuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AYWdlbnR2aS9uZy1jb3JlLWxpYi8iLCJzb3VyY2VzIjpbImxpYi9zZXJ2aWNlcy9hbm9tYWx5U2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ25ELE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSx1QkFBdUIsQ0FBQztBQUNqRCxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sY0FBYyxDQUFDOzs7OztBQVkxQztJQU1FOztPQUVHO0lBQ0gsd0JBQXNDLE1BQWtCLEVBQVUsSUFBYztRQUExQyxXQUFNLEdBQU4sTUFBTSxDQUFZO1FBQVUsU0FBSSxHQUFKLElBQUksQ0FBVTs7UUFMeEUsWUFBTyxHQUFHLFVBQVUsQ0FBQztRQU0zQixJQUFJLENBQUMsT0FBTyxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUMsR0FBRyxHQUFHLElBQUksQ0FBQyxPQUFPLENBQUM7SUFDaEQsQ0FBQztJQUdEOzs7T0FHRzs7Ozs7Ozs7SUFDSCxrREFBeUI7Ozs7Ozs7SUFBekIsVUFBMEIsSUFBYSxFQUFFLFFBQWlCOzs7WUFDbEQsTUFBTSxHQUFHLElBQUksS0FBSyxFQUFFO1FBQzFCLElBQUksSUFBSSxJQUFJLElBQUksRUFBRTtZQUFFLE1BQU0sQ0FBQyxJQUFJLENBQUMsVUFBUSxJQUFNLENBQUMsQ0FBQztTQUFFO1FBQ2xELElBQUksUUFBUSxJQUFJLElBQUksRUFBRTtZQUFFLE1BQU0sQ0FBQyxJQUFJLENBQUMsY0FBWSxRQUFVLENBQUMsQ0FBQztTQUFFO1FBRWhFLE9BQU8sQ0FBQSxLQUFBLElBQUksQ0FBQyxJQUFJLENBQUEsQ0FBQyxHQUFHLDZCQUFJLElBQUksQ0FBQyxPQUFPLGFBQVUsR0FBSyxNQUFNLEdBQUU7SUFDM0QsQ0FBQztJQUVEOzs7T0FHRzs7Ozs7Ozs7SUFDSCwrQkFBTTs7Ozs7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LFFBQVEsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDekcsQ0FBQzs7Z0JBL0ZGLFVBQVU7Ozs7Z0JBWkYsVUFBVSx1QkFxQkosTUFBTSxTQUFDLFFBQVE7Z0JBdEJyQixRQUFROztJQThHakIscUJBQUM7Q0FBQSxBQWpHRCxJQWlHQztTQWhHWSxjQUFjOzs7Ozs7SUFHekIsaUNBQTZCOzs7OztJQUtqQixnQ0FBNEM7Ozs7O0lBQUUsOEJBQXNCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSwgSW5qZWN0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBSZXN0VXRpbCB9IGZyb20gJy4uLy4uL3V0aWxzL3Jlc3QtdXRpbCc7XG5pbXBvcnQgeyBDb3JlQ29uZmlnIH0gZnJvbSAnLi4vLi4vY29uZmlnJztcblxuaW1wb3J0IHsgQW5hbHlzaXNSZXN1bHQgfSBmcm9tICcuLi9jb21tb24vQW5hbHlzaXNSZXN1bHQnO1xuaW1wb3J0IHsgRXZlbnRTdGF0dXNDb2RlIH0gZnJvbSAnLi4vZW51bXMvRXZlbnRTdGF0dXNDb2RlJztcbmltcG9ydCB7IFNlbnNvckFub21hbHlSdWxlSW5mbyB9IGZyb20gJy4uL2NvbW1vbi9TZW5zb3JBbm9tYWx5UnVsZUluZm8nO1xuaW1wb3J0IHsgRXZlbnQgfSBmcm9tICcuLi9lbnRpdGllcy9FdmVudCc7XG5cblxuLyoqXG4gKiBMaXN0IG9mIGFub21hbHkgcmVsYXRlZCBhY3Rpb25zIGZvciB0aGUgYW5vbWFseSBkZXRlY3Rpb24gc2VydmljZVxuICogQFJlcXVlc3RIZWFkZXIgWC1BUEktS0VZIFRoZSBrZXkgdG8gaWRlbnRpZnkgdGhlIGFwcGxpY2F0aW9uIChjb25zb2xlKSBcbiAqL1xuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIEFub21hbHlTZXJ2aWNlIHtcblxuICAvLyBVUkwgdG8gd2ViIGFwaVxuICBwcml2YXRlIGJhc2VVcmwgPSAnL2Fub21hbHknO1xuXG4gIC8qKlxuICAgKiBDbGFzcyBjb25zdHJ1Y3RvclxuICAgKi9cbiAgY29uc3RydWN0b3IoQEluamVjdCgnY29uZmlnJykgcHJpdmF0ZSBjb25maWc6IENvcmVDb25maWcsIHByaXZhdGUgcmVzdDogUmVzdFV0aWwpIHtcbiAgICB0aGlzLmJhc2VVcmwgPSB0aGlzLmNvbmZpZy5hcGkgKyB0aGlzLmJhc2VVcmw7XG4gIH1cblxuXG4gIC8qKlxuICAgKiBHZXQgdHJhaW5pbmcgcmVzdWx0cyBvZiBhbGwgc2Vuc29ycyB3aXRoIGFub21hbHkgZW5hYmxlZCBmbGFnIG9yZGVyZWQgYnkgdGhlIGxhc3QgdHJhaW5pbmcgdGltZVxuICAgKiBAUmV0dXJuOiBRdWVyeVJlc3BvbnNlPFNlbnNvckFuYWx5c2lzUmVzdWx0cz5cbiAgICovXG4gIGdldFNlbnNvcnNBbmFseXNpc1Jlc3VsdHMocGFnZT86IG51bWJlciwgcGFnZVNpemU/OiBudW1iZXIpIHtcbiAgICBjb25zdCBwYXJhbXMgPSBuZXcgQXJyYXkoKTtcdFx0XG4gICAgaWYgKHBhZ2UgIT0gbnVsbCkgeyBwYXJhbXMucHVzaChgcGFnZT0ke3BhZ2V9YCk7IH1cbiAgICBpZiAocGFnZVNpemUgIT0gbnVsbCkgeyBwYXJhbXMucHVzaChgcGFnZVNpemU9JHtwYWdlU2l6ZX1gKTsgfVxuXG5cdFx0cmV0dXJuIHRoaXMucmVzdC5nZXQoYCR7dGhpcy5iYXNlVXJsfS9yZXN1bHRzYCwgLi4ucGFyYW1zKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBVcGRhdGUgc2Vuc29yIGFuYWx5c2lzIHJlc3VsdHMgYmFjaCBmb3IgYSBzcGVjaWZpYyBzZW5zb3JzXG4gICAqIEBSZXR1cm46IEVudGl0eVJlc3BvbnNlPFNlbnNvckFuYWx5c2lzUmVzdWx0cz5cbiAgICovXG4gIHVwZGF0ZShzZW5zb3JJZD86IHN0cmluZywgYm9keT86IEFuYWx5c2lzUmVzdWx0KSB7XG4gICAgcmV0dXJuIHRoaXMucmVzdC5wdXQoYCR7dGhpcy5iYXNlVXJsfS9zZW5zb3IvJHtzZW5zb3JJZH1gLCB0eXBlb2YgYm9keSA9PT0gJ29iamVjdCcgPyBKU09OLnN0cmluZ2lmeShib2R5KSA6IGJvZHkpO1xuICB9XG5cbiAgLyoqXG4gICAqIERlbGV0ZSBhbGwgYW5hbHlzaXMgcmVzdWx0cyBmb3IgYSBzcGVjaWZpYyBzZW5zb3JzXG4gICAqIEBSZXR1cm46IEFjdGlvblJlc3BvbnNlXG4gICAqL1xuICBkZWxldGUoc2Vuc29ySWQ/OiBzdHJpbmcpIHtcbiAgICByZXR1cm4gdGhpcy5yZXN0LmRlbGV0ZShgJHt0aGlzLmJhc2VVcmx9L3NlbnNvci8ke3NlbnNvcklkfWApO1xuICB9XG5cbiAgLyoqXG4gICAqIEdldCBzZW5zb3IgaW5mbyBmb3IgYW5vbWFseVxuICAgKiBAUmV0dXJuOiBFbnRpdHlSZXNwb25zZTxTZW5zb3JBbm9tYWx5SW5mbz5cbiAgICovXG4gIGdldFNlbnNvckFub21hbHlJbmZvKHNlbnNvcklkPzogc3RyaW5nKSB7XG4gICAgcmV0dXJuIHRoaXMucmVzdC5nZXQoYCR7dGhpcy5iYXNlVXJsfS9zZW5zb3IvJHtzZW5zb3JJZH0vaW5mb2ApO1xuICB9XG5cbiAgLyoqXG4gICAqIEZpbmQgbGlzdCBvZiBhbm9tYWx5IGV2ZW50IGluZm8gb2JqZWN0cyBwZXIgc2Vuc29yIGluIGEgZ2l2ZW4gdGltZSBwZXJpb2RcbiAgICogQHJldHVybiBRdWVyeVJlc3BvbnNlPEFub21hbHlFdmVudEluZm8+IExpc3Qgb2YgYW5vbWFseSBldmVudCBpbmZvIG9iamVjdHNcbiAgICovXG4gIGZpbmRBbm9tYWx5RXZlbnRJbmZvKGFjY291bnRJZD86IHN0cmluZywgc2Vuc29ySWQ/OiBzdHJpbmcsIHN0YXR1cz86IEV2ZW50U3RhdHVzQ29kZSwgZnJvbT86IG51bWJlciwgdG8/OiBudW1iZXIsIHNvcnQ/OiBzdHJpbmcsIHBhZ2U/OiBudW1iZXIsIHBhZ2VTaXplPzogbnVtYmVyKSB7XG4gICAgY29uc3QgcGFyYW1zID0gbmV3IEFycmF5KCk7XHRcdFxuICAgIGlmIChhY2NvdW50SWQgIT0gbnVsbCkgeyBwYXJhbXMucHVzaChgYWNjb3VudElkPSR7YWNjb3VudElkfWApOyB9XG4gICAgaWYgKHNlbnNvcklkICE9IG51bGwpIHsgcGFyYW1zLnB1c2goYHNlbnNvcklkPSR7c2Vuc29ySWR9YCk7IH1cbiAgICBpZiAoc3RhdHVzICE9IG51bGwpIHsgcGFyYW1zLnB1c2goYHN0YXR1cz0ke3N0YXR1c31gKTsgfVxuICAgIGlmIChmcm9tICE9IG51bGwpIHsgcGFyYW1zLnB1c2goYGZyb209JHtmcm9tfWApOyB9XG4gICAgaWYgKHRvICE9IG51bGwpIHsgcGFyYW1zLnB1c2goYHRvPSR7dG99YCk7IH1cbiAgICBpZiAoc29ydCAhPSBudWxsKSB7IHBhcmFtcy5wdXNoKGBzb3J0PSR7c29ydH1gKTsgfVxuICAgIGlmIChwYWdlICE9IG51bGwpIHsgcGFyYW1zLnB1c2goYHBhZ2U9JHtwYWdlfWApOyB9XG4gICAgaWYgKHBhZ2VTaXplICE9IG51bGwpIHsgcGFyYW1zLnB1c2goYHBhZ2VTaXplPSR7cGFnZVNpemV9YCk7IH1cblxuXHRcdHJldHVybiB0aGlzLnJlc3QuZ2V0KGAke3RoaXMuYmFzZVVybH0vZXZlbnRzYCwgLi4ucGFyYW1zKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBVcGRhdGUgc2Vuc29yIGFub21hbHkgcnVsZSBhdHRyaWJ1dGVkXG4gICAqIEByZXR1cm4gQWN0aW9uUmVzcG9uc2VcbiAgICovXG4gIHVwZGF0ZUFub21hbHlSdWxlKHNlbnNvcklkPzogc3RyaW5nLCBib2R5PzogU2Vuc29yQW5vbWFseVJ1bGVJbmZvKSB7XG4gICAgcmV0dXJuIHRoaXMucmVzdC5wdXQoYCR7dGhpcy5iYXNlVXJsfS9ydWxlLyR7c2Vuc29ySWR9YCwgdHlwZW9mIGJvZHkgPT09ICdvYmplY3QnID8gSlNPTi5zdHJpbmdpZnkoYm9keSkgOiBib2R5KTtcbiAgfVxuXG4gIC8qKlxuICAgKiBDcmVhdGUgZHVtbXkgZXZlbnQgKGZvciBhbm9tYWx5IHRlc3RzIG9ubHkpXG4gICAqIFRoaXMgbWV0aG9kIGlzIHVzZWQgZm9yIHRlc3Rpbmcgb25seSwgdGhlIG9ubHkgc2VydmljZSBnZW5lcmF0ZXMgZXZlbnRzIGluIHRoZSBzeXN0ZW0gaXMgdGhlIGV2ZW50IHNlcnZpY2VcbiAgICogQHBhcmFtIGV2ZW50IEV2ZW50IGRhdGEgdG8gY3JlYXRlXG4gICAqIFNvbWUgb2YgdGhlIGV2ZW50IGZpZWxkcyBhcmUgbWFuZGF0b3J5OiAodGhlIG90aGVyIGFyZSBvcHRpb25hbClcbiAgICogPHVsPlxuICAgKiA8bGk+PGI+aWQ6PC9iPiBVbmlxdWUgZXZlbnQgaWQgKGUuZy4gR1VJRCBzdHJpbmcpPC9saT5cbiAgICogPGxpPjxiPmFjY291bnRJZDwvYj4gQWNjb3VudCBJZDwvbGk+XG4gICAqIDxsaT48Yj5zZW5zb3JJZDwvYj4gU2Vuc29yIElkPC9saT5cbiAgICogPGxpPjxiPm9iamVjdFR5cGU8L2I+IERldGVjdGVkIG9iamVjdCB0eXBlPC9saT5cbiAgICogPGxpPjxiPmJlaGF2aW9yVHlwZTwvYj4gQmVoYXZpb3I8L2xpPlxuICAgKiA8bGk+PGI+cnVsZUlkPC9iPiBSdWxlIElkPC9saT5cbiAgICogPGxpPjxiPlJ1bGVUeXBlPC9iPiBSdWxlIHR5cGU8L2xpPlxuICAgKiA8bGk+PGI+c3RhcnRUaW1lOjwvYj4gSWYgc2V0IHRvIDAsIHNlcnZlciB0aW1lIHdpbGwgYmUgc2V0PC9saT5cbiAgICogPC91bD5cbiAgICogQHJldHVybiBFbnRpdHlSZXNwb25zZTxFdmVudD5cbiAgICovXG4gIGNyZWF0ZUR1bW15RXZlbnQoYm9keT86IEV2ZW50KSB7XG4gICAgcmV0dXJuIHRoaXMucmVzdC5wb3N0KGAke3RoaXMuYmFzZVVybH0vZXZlbnRgLCB0eXBlb2YgYm9keSA9PT0gJ29iamVjdCcgPyBKU09OLnN0cmluZ2lmeShib2R5KSA6IGJvZHkpO1xuICB9XG5cbn1cbiJdfQ==