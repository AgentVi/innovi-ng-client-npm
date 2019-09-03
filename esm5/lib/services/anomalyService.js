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
        return (_a = this.rest).get.apply(_a, tslib_1.__spread([this.baseUrl + "//training/results"], params));
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYW5vbWFseVNlcnZpY2UuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AYWdlbnR2aS9uZy1jb3JlLWxpYi8iLCJzb3VyY2VzIjpbImxpYi9zZXJ2aWNlcy9hbm9tYWx5U2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ25ELE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSx1QkFBdUIsQ0FBQzs7Ozs7QUFVakQ7SUFNRTs7T0FFRztJQUNILHdCQUFzQyxNQUFrQixFQUFVLElBQWM7UUFBMUMsV0FBTSxHQUFOLE1BQU0sQ0FBWTtRQUFVLFNBQUksR0FBSixJQUFJLENBQVU7O1FBTHhFLFlBQU8sR0FBRyxVQUFVLENBQUM7UUFNM0IsSUFBSSxDQUFDLE9BQU8sR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDLEdBQUcsR0FBRyxJQUFJLENBQUMsT0FBTyxDQUFDO0lBQ2hELENBQUM7SUFHRDs7O09BR0c7Ozs7Ozs7O0lBQ0gsa0RBQXlCOzs7Ozs7O0lBQXpCLFVBQTBCLElBQWEsRUFBRSxRQUFpQjs7O1lBQ2xELE1BQU0sR0FBRyxJQUFJLEtBQUssRUFBRTtRQUMxQixJQUFJLElBQUksSUFBSSxJQUFJLEVBQUU7WUFBRSxNQUFNLENBQUMsSUFBSSxDQUFDLFVBQVEsSUFBTSxDQUFDLENBQUM7U0FBRTtRQUNsRCxJQUFJLFFBQVEsSUFBSSxJQUFJLEVBQUU7WUFBRSxNQUFNLENBQUMsSUFBSSxDQUFDLGNBQVksUUFBVSxDQUFDLENBQUM7U0FBRTtRQUVoRSxPQUFPLENBQUEsS0FBQSxJQUFJLENBQUMsSUFBSSxDQUFBLENBQUMsR0FBRyw2QkFBSSxJQUFJLENBQUMsT0FBTyx1QkFBb0IsR0FBSyxNQUFNLEdBQUU7SUFDckUsQ0FBQztJQUVEOzs7T0FHRzs7Ozs7Ozs7SUFDSCwrQkFBTTs7Ozs7OztJQUFOLFVBQU8sUUFBaUIsRUFBRSxJQUE0QjtRQUNwRCxPQUFPLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFJLElBQUksQ0FBQyxPQUFPLHlCQUFvQixRQUFVLEVBQUUsT0FBTyxJQUFJLEtBQUssUUFBUSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUM5SCxDQUFDO0lBRUQ7OztPQUdHOzs7Ozs7O0lBQ0gsK0JBQU07Ozs7OztJQUFOLFVBQU8sUUFBaUI7UUFDdEIsT0FBTyxJQUFJLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBSSxJQUFJLENBQUMsT0FBTyx5QkFBb0IsUUFBVSxDQUFDLENBQUM7SUFDekUsQ0FBQztJQUVEOzs7T0FHRzs7Ozs7OztJQUNILDZDQUFvQjs7Ozs7O0lBQXBCLFVBQXFCLFFBQWlCO1FBQ3BDLE9BQU8sSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUksSUFBSSxDQUFDLE9BQU8sbUJBQWMsUUFBUSxVQUFPLENBQUMsQ0FBQztJQUNyRSxDQUFDOztnQkFoREYsVUFBVTs7OztnREFTSSxNQUFNLFNBQUMsUUFBUTtnQkFuQnJCLFFBQVE7O0lBNERqQixxQkFBQztDQUFBLEFBbERELElBa0RDO1NBakRZLGNBQWM7Ozs7OztJQUd6QixpQ0FBNkI7Ozs7O0lBS2pCLGdDQUE0Qzs7Ozs7SUFBRSw4QkFBc0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlLCBJbmplY3QgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFJlc3RVdGlsIH0gZnJvbSAnLi4vLi4vdXRpbHMvcmVzdC11dGlsJztcbmltcG9ydCB7IENvcmVDb25maWcgfSBmcm9tICcuLi8uLi9jb3JlLWxpYi5tb2R1bGUnO1xuXG5pbXBvcnQgeyBTZW5zb3JBbmFseXNpc1Jlc3VsdHMgfSBmcm9tICcuLi9lbnRpdGllcy9TZW5zb3JBbmFseXNpc1Jlc3VsdHMnO1xuXG5cbi8qKlxuICogTGlzdCBvZiBhbm9tYWx5IHJlbGF0ZWQgYWN0aW9ucyBmb3IgdGhlIGFub21hbHkgZGV0ZWN0aW9uIHNlcnZpY2VcbiAqIEBSZXF1ZXN0SGVhZGVyIFgtQVBJLUtFWSBUaGUga2V5IHRvIGlkZW50aWZ5IHRoZSBhcHBsaWNhdGlvbiAoY29uc29sZSkgXG4gKi9cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBBbm9tYWx5U2VydmljZSB7XG5cbiAgLy8gVVJMIHRvIHdlYiBhcGlcbiAgcHJpdmF0ZSBiYXNlVXJsID0gJy9hbm9tYWx5JztcblxuICAvKipcbiAgICogQ2xhc3MgY29uc3RydWN0b3JcbiAgICovXG4gIGNvbnN0cnVjdG9yKEBJbmplY3QoJ2NvbmZpZycpIHByaXZhdGUgY29uZmlnOiBDb3JlQ29uZmlnLCBwcml2YXRlIHJlc3Q6IFJlc3RVdGlsKSB7XG4gICAgdGhpcy5iYXNlVXJsID0gdGhpcy5jb25maWcuYXBpICsgdGhpcy5iYXNlVXJsO1xuICB9XG5cblxuICAvKipcbiAgICogR2V0IHRyYWluaW5nIHJlc3VsdHMgb2YgYWxsIHNlbnNvcnMgd2l0aCBhbm9tYWx5IGVuYWJsZWQgZmxhZyBvcmRlcmVkIGJ5IHRoZSBsYXN0IHRyYWluaW5nIHRpbWVcbiAgICogQFJldHVybjogUXVlcnlSZXNwb25zZTxTZW5zb3JBbmFseXNpc1Jlc3VsdHM+XG4gICAqL1xuICBnZXRTZW5zb3JzQW5hbHlzaXNSZXN1bHRzKHBhZ2U/OiBudW1iZXIsIHBhZ2VTaXplPzogbnVtYmVyKSB7XG4gICAgY29uc3QgcGFyYW1zID0gbmV3IEFycmF5KCk7XHRcdFxuICAgIGlmIChwYWdlICE9IG51bGwpIHsgcGFyYW1zLnB1c2goYHBhZ2U9JHtwYWdlfWApOyB9XG4gICAgaWYgKHBhZ2VTaXplICE9IG51bGwpIHsgcGFyYW1zLnB1c2goYHBhZ2VTaXplPSR7cGFnZVNpemV9YCk7IH1cblxuXHRcdHJldHVybiB0aGlzLnJlc3QuZ2V0KGAke3RoaXMuYmFzZVVybH0vL3RyYWluaW5nL3Jlc3VsdHNgLCAuLi5wYXJhbXMpO1xuICB9XG5cbiAgLyoqXG4gICAqIFVwZGF0ZSBzZW5zb3IgYW5hbHlzaXMgcmVzdWx0cyBiYWNoIGZvciBhIHNwZWNpZmljIHNlbnNvcnNcbiAgICogQFJldHVybjogRW50aXR5UmVzcG9uc2U8U2Vuc29yQW5hbHlzaXNSZXN1bHRzPlxuICAgKi9cbiAgdXBkYXRlKHNlbnNvcklkPzogc3RyaW5nLCBib2R5PzogU2Vuc29yQW5hbHlzaXNSZXN1bHRzKSB7XG4gICAgcmV0dXJuIHRoaXMucmVzdC5wdXQoYCR7dGhpcy5iYXNlVXJsfS90cmFpbmluZy9zZW5zb3IvJHtzZW5zb3JJZH1gLCB0eXBlb2YgYm9keSA9PT0gJ29iamVjdCcgPyBKU09OLnN0cmluZ2lmeShib2R5KSA6IGJvZHkpO1xuICB9XG5cbiAgLyoqXG4gICAqIERlbGV0ZSBhbGwgYW5hbHlzaXMgcmVzdWx0cyBmb3IgYSBzcGVjaWZpYyBzZW5zb3JzXG4gICAqIEBSZXR1cm46IEFjdGlvblJlc3BvbnNlXG4gICAqL1xuICBkZWxldGUoc2Vuc29ySWQ/OiBzdHJpbmcpIHtcbiAgICByZXR1cm4gdGhpcy5yZXN0LmRlbGV0ZShgJHt0aGlzLmJhc2VVcmx9L3RyYWluaW5nL3NlbnNvci8ke3NlbnNvcklkfWApO1xuICB9XG5cbiAgLyoqXG4gICAqIEdldCBzZW5zb3IgaW5mZXJlbmNlIGluZm8gZm9yIGFub21hbHlcbiAgICogQFJldHVybjogRW50aXR5UmVzcG9uc2U8U2Vuc29yQW5vbWFseUluZm8+XG4gICAqL1xuICBnZXRTZW5zb3JBbm9tYWx5SW5mbyhzZW5zb3JJZD86IHN0cmluZykge1xuICAgIHJldHVybiB0aGlzLnJlc3QuZ2V0KGAke3RoaXMuYmFzZVVybH0vaW5mZXJlbmNlLyR7c2Vuc29ySWR9L2luZm9gKTtcbiAgfVxuXG59XG4iXX0=