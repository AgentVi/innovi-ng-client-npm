/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Injectable, Inject } from '@angular/core';
import { RestUtil } from '../../utils/rest-util';
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
        return (_a = this.rest).get.apply(_a, tslib_1.__spread([this.baseUrl + "/training/results"], params));
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
        return this.rest.put(this.baseUrl + "/training/sensor/" + sensorId, typeof body === 'object' ? JSON.stringify(body) : body);
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
        return this.rest.delete(this.baseUrl + "/training/sensor/" + sensorId);
    };
    /**
     * Get sensor inference info for anomaly
     * @Return: EntityResponse<SensorAnomalyInfo>
     */
    /**
     * Get sensor inference info for anomaly
     * \@Return: EntityResponse<SensorAnomalyInfo>
     * @param {?=} sensorId
     * @return {?}
     */
    AnomalyService.prototype.getSensorAnomalyInfo = /**
     * Get sensor inference info for anomaly
     * \@Return: EntityResponse<SensorAnomalyInfo>
     * @param {?=} sensorId
     * @return {?}
     */
    function (sensorId) {
        return this.rest.get(this.baseUrl + "/inference/" + sensorId + "/info");
    };
    AnomalyService.decorators = [
        { type: Injectable }
    ];
    /** @nocollapse */
    AnomalyService.ctorParameters = function () { return [
        { type: undefined, decorators: [{ type: Inject, args: ['config',] }] },
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYW5vbWFseVNlcnZpY2UuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AYWdlbnR2aS9uZy1jb3JlLWxpYi8iLCJzb3VyY2VzIjpbImxpYi9zZXJ2aWNlcy9hbm9tYWx5U2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ25ELE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSx1QkFBdUIsQ0FBQzs7Ozs7QUFVakQ7SUFNRTs7T0FFRztJQUNILHdCQUFzQyxNQUFrQixFQUFVLElBQWM7UUFBMUMsV0FBTSxHQUFOLE1BQU0sQ0FBWTtRQUFVLFNBQUksR0FBSixJQUFJLENBQVU7O1FBTHhFLFlBQU8sR0FBRyxVQUFVLENBQUM7UUFNM0IsSUFBSSxDQUFDLE9BQU8sR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDLEdBQUcsR0FBRyxJQUFJLENBQUMsT0FBTyxDQUFDO0lBQ2hELENBQUM7SUFHRDs7O09BR0c7Ozs7Ozs7O0lBQ0gsa0RBQXlCOzs7Ozs7O0lBQXpCLFVBQTBCLElBQWEsRUFBRSxRQUFpQjs7O1lBQ2xELE1BQU0sR0FBRyxJQUFJLEtBQUssRUFBRTtRQUMxQixJQUFJLElBQUksSUFBSSxJQUFJLEVBQUU7WUFBRSxNQUFNLENBQUMsSUFBSSxDQUFDLFVBQVEsSUFBTSxDQUFDLENBQUM7U0FBRTtRQUNsRCxJQUFJLFFBQVEsSUFBSSxJQUFJLEVBQUU7WUFBRSxNQUFNLENBQUMsSUFBSSxDQUFDLGNBQVksUUFBVSxDQUFDLENBQUM7U0FBRTtRQUVoRSxPQUFPLENBQUEsS0FBQSxJQUFJLENBQUMsSUFBSSxDQUFBLENBQUMsR0FBRyw2QkFBSSxJQUFJLENBQUMsT0FBTyxzQkFBbUIsR0FBSyxNQUFNLEdBQUU7SUFDcEUsQ0FBQztJQUVEOzs7T0FHRzs7Ozs7Ozs7SUFDSCwrQkFBTTs7Ozs7OztJQUFOLFVBQU8sUUFBaUIsRUFBRSxJQUE0QjtRQUNwRCxPQUFPLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFJLElBQUksQ0FBQyxPQUFPLHlCQUFvQixRQUFVLEVBQUUsT0FBTyxJQUFJLEtBQUssUUFBUSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUM5SCxDQUFDO0lBRUQ7OztPQUdHOzs7Ozs7O0lBQ0gsK0JBQU07Ozs7OztJQUFOLFVBQU8sUUFBaUI7UUFDdEIsT0FBTyxJQUFJLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBSSxJQUFJLENBQUMsT0FBTyx5QkFBb0IsUUFBVSxDQUFDLENBQUM7SUFDekUsQ0FBQztJQUVEOzs7T0FHRzs7Ozs7OztJQUNILDZDQUFvQjs7Ozs7O0lBQXBCLFVBQXFCLFFBQWlCO1FBQ3BDLE9BQU8sSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUksSUFBSSxDQUFDLE9BQU8sbUJBQWMsUUFBUSxVQUFPLENBQUMsQ0FBQztJQUNyRSxDQUFDOztnQkFoREYsVUFBVTs7OztnREFTSSxNQUFNLFNBQUMsUUFBUTtnQkFuQnJCLFFBQVE7O0lBNERqQixxQkFBQztDQUFBLEFBbERELElBa0RDO1NBakRZLGNBQWM7Ozs7OztJQUd6QixpQ0FBNkI7Ozs7O0lBS2pCLGdDQUE0Qzs7Ozs7SUFBRSw4QkFBc0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlLCBJbmplY3QgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFJlc3RVdGlsIH0gZnJvbSAnLi4vLi4vdXRpbHMvcmVzdC11dGlsJztcbmltcG9ydCB7IENvcmVDb25maWcgfSBmcm9tICcuLi8uLi9jb3JlLWNvbmZpZyc7XG5cbmltcG9ydCB7IFNlbnNvckFuYWx5c2lzUmVzdWx0cyB9IGZyb20gJy4uL2VudGl0aWVzL1NlbnNvckFuYWx5c2lzUmVzdWx0cyc7XG5cblxuLyoqXG4gKiBMaXN0IG9mIGFub21hbHkgcmVsYXRlZCBhY3Rpb25zIGZvciB0aGUgYW5vbWFseSBkZXRlY3Rpb24gc2VydmljZVxuICogQFJlcXVlc3RIZWFkZXIgWC1BUEktS0VZIFRoZSBrZXkgdG8gaWRlbnRpZnkgdGhlIGFwcGxpY2F0aW9uIChjb25zb2xlKSBcbiAqL1xuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIEFub21hbHlTZXJ2aWNlIHtcblxuICAvLyBVUkwgdG8gd2ViIGFwaVxuICBwcml2YXRlIGJhc2VVcmwgPSAnL2Fub21hbHknO1xuXG4gIC8qKlxuICAgKiBDbGFzcyBjb25zdHJ1Y3RvclxuICAgKi9cbiAgY29uc3RydWN0b3IoQEluamVjdCgnY29uZmlnJykgcHJpdmF0ZSBjb25maWc6IENvcmVDb25maWcsIHByaXZhdGUgcmVzdDogUmVzdFV0aWwpIHtcbiAgICB0aGlzLmJhc2VVcmwgPSB0aGlzLmNvbmZpZy5hcGkgKyB0aGlzLmJhc2VVcmw7XG4gIH1cblxuXG4gIC8qKlxuICAgKiBHZXQgdHJhaW5pbmcgcmVzdWx0cyBvZiBhbGwgc2Vuc29ycyB3aXRoIGFub21hbHkgZW5hYmxlZCBmbGFnIG9yZGVyZWQgYnkgdGhlIGxhc3QgdHJhaW5pbmcgdGltZVxuICAgKiBAUmV0dXJuOiBRdWVyeVJlc3BvbnNlPFNlbnNvckFuYWx5c2lzUmVzdWx0cz5cbiAgICovXG4gIGdldFNlbnNvcnNBbmFseXNpc1Jlc3VsdHMocGFnZT86IG51bWJlciwgcGFnZVNpemU/OiBudW1iZXIpIHtcbiAgICBjb25zdCBwYXJhbXMgPSBuZXcgQXJyYXkoKTtcdFx0XG4gICAgaWYgKHBhZ2UgIT0gbnVsbCkgeyBwYXJhbXMucHVzaChgcGFnZT0ke3BhZ2V9YCk7IH1cbiAgICBpZiAocGFnZVNpemUgIT0gbnVsbCkgeyBwYXJhbXMucHVzaChgcGFnZVNpemU9JHtwYWdlU2l6ZX1gKTsgfVxuXG5cdFx0cmV0dXJuIHRoaXMucmVzdC5nZXQoYCR7dGhpcy5iYXNlVXJsfS90cmFpbmluZy9yZXN1bHRzYCwgLi4ucGFyYW1zKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBVcGRhdGUgc2Vuc29yIGFuYWx5c2lzIHJlc3VsdHMgYmFjaCBmb3IgYSBzcGVjaWZpYyBzZW5zb3JzXG4gICAqIEBSZXR1cm46IEVudGl0eVJlc3BvbnNlPFNlbnNvckFuYWx5c2lzUmVzdWx0cz5cbiAgICovXG4gIHVwZGF0ZShzZW5zb3JJZD86IHN0cmluZywgYm9keT86IFNlbnNvckFuYWx5c2lzUmVzdWx0cykge1xuICAgIHJldHVybiB0aGlzLnJlc3QucHV0KGAke3RoaXMuYmFzZVVybH0vdHJhaW5pbmcvc2Vuc29yLyR7c2Vuc29ySWR9YCwgdHlwZW9mIGJvZHkgPT09ICdvYmplY3QnID8gSlNPTi5zdHJpbmdpZnkoYm9keSkgOiBib2R5KTtcbiAgfVxuXG4gIC8qKlxuICAgKiBEZWxldGUgYWxsIGFuYWx5c2lzIHJlc3VsdHMgZm9yIGEgc3BlY2lmaWMgc2Vuc29yc1xuICAgKiBAUmV0dXJuOiBBY3Rpb25SZXNwb25zZVxuICAgKi9cbiAgZGVsZXRlKHNlbnNvcklkPzogc3RyaW5nKSB7XG4gICAgcmV0dXJuIHRoaXMucmVzdC5kZWxldGUoYCR7dGhpcy5iYXNlVXJsfS90cmFpbmluZy9zZW5zb3IvJHtzZW5zb3JJZH1gKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBHZXQgc2Vuc29yIGluZmVyZW5jZSBpbmZvIGZvciBhbm9tYWx5XG4gICAqIEBSZXR1cm46IEVudGl0eVJlc3BvbnNlPFNlbnNvckFub21hbHlJbmZvPlxuICAgKi9cbiAgZ2V0U2Vuc29yQW5vbWFseUluZm8oc2Vuc29ySWQ/OiBzdHJpbmcpIHtcbiAgICByZXR1cm4gdGhpcy5yZXN0LmdldChgJHt0aGlzLmJhc2VVcmx9L2luZmVyZW5jZS8ke3NlbnNvcklkfS9pbmZvYCk7XG4gIH1cblxufVxuIl19