/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable, Inject } from '@angular/core';
import { RestUtil } from '../../utils/rest-util';
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
        return this.rest.get(`${this.baseUrl}/training/results`, ...params);
    }
    /**
     * Update sensor analysis results bach for a specific sensors
     * \@Return: EntityResponse<SensorAnalysisResults>
     * @param {?=} sensorId
     * @param {?=} body
     * @return {?}
     */
    update(sensorId, body) {
        return this.rest.put(`${this.baseUrl}/training/sensor/${sensorId}`, typeof body === 'object' ? JSON.stringify(body) : body);
    }
    /**
     * Delete all analysis results for a specific sensors
     * \@Return: ActionResponse
     * @param {?=} sensorId
     * @return {?}
     */
    delete(sensorId) {
        return this.rest.delete(`${this.baseUrl}/training/sensor/${sensorId}`);
    }
    /**
     * Get sensor inference info for anomaly
     * \@Return: EntityResponse<SensorAnomalyInfo>
     * @param {?=} sensorId
     * @return {?}
     */
    getSensorAnomalyInfo(sensorId) {
        return this.rest.get(`${this.baseUrl}/inference/${sensorId}/info`);
    }
}
AnomalyService.decorators = [
    { type: Injectable }
];
/** @nocollapse */
AnomalyService.ctorParameters = () => [
    { type: undefined, decorators: [{ type: Inject, args: ['config',] }] },
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYW5vbWFseVNlcnZpY2UuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AYWdlbnR2aS9uZy1jb3JlLWxpYi8iLCJzb3VyY2VzIjpbImxpYi9zZXJ2aWNlcy9hbm9tYWx5U2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDbkQsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLHVCQUF1QixDQUFDOzs7OztBQVdqRCxNQUFNLE9BQU8sY0FBYzs7Ozs7O0lBUXpCLFlBQXNDLE1BQWtCLEVBQVUsSUFBYztRQUExQyxXQUFNLEdBQU4sTUFBTSxDQUFZO1FBQVUsU0FBSSxHQUFKLElBQUksQ0FBVTs7UUFMeEUsWUFBTyxHQUFHLFVBQVUsQ0FBQztRQU0zQixJQUFJLENBQUMsT0FBTyxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUMsR0FBRyxHQUFHLElBQUksQ0FBQyxPQUFPLENBQUM7SUFDaEQsQ0FBQzs7Ozs7Ozs7SUFPRCx5QkFBeUIsQ0FBQyxJQUFhLEVBQUUsUUFBaUI7O2NBQ2xELE1BQU0sR0FBRyxJQUFJLEtBQUssRUFBRTtRQUMxQixJQUFJLElBQUksSUFBSSxJQUFJLEVBQUU7WUFBRSxNQUFNLENBQUMsSUFBSSxDQUFDLFFBQVEsSUFBSSxFQUFFLENBQUMsQ0FBQztTQUFFO1FBQ2xELElBQUksUUFBUSxJQUFJLElBQUksRUFBRTtZQUFFLE1BQU0sQ0FBQyxJQUFJLENBQUMsWUFBWSxRQUFRLEVBQUUsQ0FBQyxDQUFDO1NBQUU7UUFFaEUsT0FBTyxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxHQUFHLElBQUksQ0FBQyxPQUFPLG1CQUFtQixFQUFFLEdBQUcsTUFBTSxDQUFDLENBQUM7SUFDcEUsQ0FBQzs7Ozs7Ozs7SUFNRCxNQUFNLENBQUMsUUFBaUIsRUFBRSxJQUE0QjtRQUNwRCxPQUFPLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLEdBQUcsSUFBSSxDQUFDLE9BQU8sb0JBQW9CLFFBQVEsRUFBRSxFQUFFLE9BQU8sSUFBSSxLQUFLLFFBQVEsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDOUgsQ0FBQzs7Ozs7OztJQU1ELE1BQU0sQ0FBQyxRQUFpQjtRQUN0QixPQUFPLElBQUksQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLEdBQUcsSUFBSSxDQUFDLE9BQU8sb0JBQW9CLFFBQVEsRUFBRSxDQUFDLENBQUM7SUFDekUsQ0FBQzs7Ozs7OztJQU1ELG9CQUFvQixDQUFDLFFBQWlCO1FBQ3BDLE9BQU8sSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsR0FBRyxJQUFJLENBQUMsT0FBTyxjQUFjLFFBQVEsT0FBTyxDQUFDLENBQUM7SUFDckUsQ0FBQzs7O1lBaERGLFVBQVU7Ozs7NENBU0ksTUFBTSxTQUFDLFFBQVE7WUFuQnJCLFFBQVE7Ozs7Ozs7SUFjZixpQ0FBNkI7Ozs7O0lBS2pCLGdDQUE0Qzs7Ozs7SUFBRSw4QkFBc0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlLCBJbmplY3QgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFJlc3RVdGlsIH0gZnJvbSAnLi4vLi4vdXRpbHMvcmVzdC11dGlsJztcbmltcG9ydCB7IENvcmVDb25maWcgfSBmcm9tICcuLi8uLi9jb3JlLWxpYi5tb2R1bGUnO1xuXG5pbXBvcnQgeyBTZW5zb3JBbmFseXNpc1Jlc3VsdHMgfSBmcm9tICcuLi9lbnRpdGllcy9TZW5zb3JBbmFseXNpc1Jlc3VsdHMnO1xuXG5cbi8qKlxuICogTGlzdCBvZiBhbm9tYWx5IHJlbGF0ZWQgYWN0aW9ucyBmb3IgdGhlIGFub21hbHkgZGV0ZWN0aW9uIHNlcnZpY2VcbiAqIEBSZXF1ZXN0SGVhZGVyIFgtQVBJLUtFWSBUaGUga2V5IHRvIGlkZW50aWZ5IHRoZSBhcHBsaWNhdGlvbiAoY29uc29sZSkgXG4gKi9cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBBbm9tYWx5U2VydmljZSB7XG5cbiAgLy8gVVJMIHRvIHdlYiBhcGlcbiAgcHJpdmF0ZSBiYXNlVXJsID0gJy9hbm9tYWx5JztcblxuICAvKipcbiAgICogQ2xhc3MgY29uc3RydWN0b3JcbiAgICovXG4gIGNvbnN0cnVjdG9yKEBJbmplY3QoJ2NvbmZpZycpIHByaXZhdGUgY29uZmlnOiBDb3JlQ29uZmlnLCBwcml2YXRlIHJlc3Q6IFJlc3RVdGlsKSB7XG4gICAgdGhpcy5iYXNlVXJsID0gdGhpcy5jb25maWcuYXBpICsgdGhpcy5iYXNlVXJsO1xuICB9XG5cblxuICAvKipcbiAgICogR2V0IHRyYWluaW5nIHJlc3VsdHMgb2YgYWxsIHNlbnNvcnMgd2l0aCBhbm9tYWx5IGVuYWJsZWQgZmxhZyBvcmRlcmVkIGJ5IHRoZSBsYXN0IHRyYWluaW5nIHRpbWVcbiAgICogQFJldHVybjogUXVlcnlSZXNwb25zZTxTZW5zb3JBbmFseXNpc1Jlc3VsdHM+XG4gICAqL1xuICBnZXRTZW5zb3JzQW5hbHlzaXNSZXN1bHRzKHBhZ2U/OiBudW1iZXIsIHBhZ2VTaXplPzogbnVtYmVyKSB7XG4gICAgY29uc3QgcGFyYW1zID0gbmV3IEFycmF5KCk7XHRcdFxuICAgIGlmIChwYWdlICE9IG51bGwpIHsgcGFyYW1zLnB1c2goYHBhZ2U9JHtwYWdlfWApOyB9XG4gICAgaWYgKHBhZ2VTaXplICE9IG51bGwpIHsgcGFyYW1zLnB1c2goYHBhZ2VTaXplPSR7cGFnZVNpemV9YCk7IH1cblxuXHRcdHJldHVybiB0aGlzLnJlc3QuZ2V0KGAke3RoaXMuYmFzZVVybH0vdHJhaW5pbmcvcmVzdWx0c2AsIC4uLnBhcmFtcyk7XG4gIH1cblxuICAvKipcbiAgICogVXBkYXRlIHNlbnNvciBhbmFseXNpcyByZXN1bHRzIGJhY2ggZm9yIGEgc3BlY2lmaWMgc2Vuc29yc1xuICAgKiBAUmV0dXJuOiBFbnRpdHlSZXNwb25zZTxTZW5zb3JBbmFseXNpc1Jlc3VsdHM+XG4gICAqL1xuICB1cGRhdGUoc2Vuc29ySWQ/OiBzdHJpbmcsIGJvZHk/OiBTZW5zb3JBbmFseXNpc1Jlc3VsdHMpIHtcbiAgICByZXR1cm4gdGhpcy5yZXN0LnB1dChgJHt0aGlzLmJhc2VVcmx9L3RyYWluaW5nL3NlbnNvci8ke3NlbnNvcklkfWAsIHR5cGVvZiBib2R5ID09PSAnb2JqZWN0JyA/IEpTT04uc3RyaW5naWZ5KGJvZHkpIDogYm9keSk7XG4gIH1cblxuICAvKipcbiAgICogRGVsZXRlIGFsbCBhbmFseXNpcyByZXN1bHRzIGZvciBhIHNwZWNpZmljIHNlbnNvcnNcbiAgICogQFJldHVybjogQWN0aW9uUmVzcG9uc2VcbiAgICovXG4gIGRlbGV0ZShzZW5zb3JJZD86IHN0cmluZykge1xuICAgIHJldHVybiB0aGlzLnJlc3QuZGVsZXRlKGAke3RoaXMuYmFzZVVybH0vdHJhaW5pbmcvc2Vuc29yLyR7c2Vuc29ySWR9YCk7XG4gIH1cblxuICAvKipcbiAgICogR2V0IHNlbnNvciBpbmZlcmVuY2UgaW5mbyBmb3IgYW5vbWFseVxuICAgKiBAUmV0dXJuOiBFbnRpdHlSZXNwb25zZTxTZW5zb3JBbm9tYWx5SW5mbz5cbiAgICovXG4gIGdldFNlbnNvckFub21hbHlJbmZvKHNlbnNvcklkPzogc3RyaW5nKSB7XG4gICAgcmV0dXJuIHRoaXMucmVzdC5nZXQoYCR7dGhpcy5iYXNlVXJsfS9pbmZlcmVuY2UvJHtzZW5zb3JJZH0vaW5mb2ApO1xuICB9XG5cbn1cbiJdfQ==