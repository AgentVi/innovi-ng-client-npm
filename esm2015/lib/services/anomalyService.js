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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYW5vbWFseVNlcnZpY2UuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AYWdlbnR2aS9uZy1jb3JlLWxpYi8iLCJzb3VyY2VzIjpbImxpYi9zZXJ2aWNlcy9hbm9tYWx5U2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDbkQsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLHVCQUF1QixDQUFDOzs7OztBQVdqRCxNQUFNLE9BQU8sY0FBYzs7Ozs7O0lBUXpCLFlBQXNDLE1BQWtCLEVBQVUsSUFBYztRQUExQyxXQUFNLEdBQU4sTUFBTSxDQUFZO1FBQVUsU0FBSSxHQUFKLElBQUksQ0FBVTs7UUFMeEUsWUFBTyxHQUFHLFVBQVUsQ0FBQztRQU0zQixJQUFJLENBQUMsT0FBTyxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUMsR0FBRyxHQUFHLElBQUksQ0FBQyxPQUFPLENBQUM7SUFDaEQsQ0FBQzs7Ozs7Ozs7SUFPRCx5QkFBeUIsQ0FBQyxJQUFhLEVBQUUsUUFBaUI7O2NBQ2xELE1BQU0sR0FBRyxJQUFJLEtBQUssRUFBRTtRQUMxQixJQUFJLElBQUksSUFBSSxJQUFJLEVBQUU7WUFBRSxNQUFNLENBQUMsSUFBSSxDQUFDLFFBQVEsSUFBSSxFQUFFLENBQUMsQ0FBQztTQUFFO1FBQ2xELElBQUksUUFBUSxJQUFJLElBQUksRUFBRTtZQUFFLE1BQU0sQ0FBQyxJQUFJLENBQUMsWUFBWSxRQUFRLEVBQUUsQ0FBQyxDQUFDO1NBQUU7UUFFaEUsT0FBTyxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxHQUFHLElBQUksQ0FBQyxPQUFPLG1CQUFtQixFQUFFLEdBQUcsTUFBTSxDQUFDLENBQUM7SUFDcEUsQ0FBQzs7Ozs7Ozs7SUFNRCxNQUFNLENBQUMsUUFBaUIsRUFBRSxJQUE0QjtRQUNwRCxPQUFPLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLEdBQUcsSUFBSSxDQUFDLE9BQU8sb0JBQW9CLFFBQVEsRUFBRSxFQUFFLE9BQU8sSUFBSSxLQUFLLFFBQVEsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDOUgsQ0FBQzs7Ozs7OztJQU1ELE1BQU0sQ0FBQyxRQUFpQjtRQUN0QixPQUFPLElBQUksQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLEdBQUcsSUFBSSxDQUFDLE9BQU8sb0JBQW9CLFFBQVEsRUFBRSxDQUFDLENBQUM7SUFDekUsQ0FBQzs7Ozs7OztJQU1ELG9CQUFvQixDQUFDLFFBQWlCO1FBQ3BDLE9BQU8sSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsR0FBRyxJQUFJLENBQUMsT0FBTyxjQUFjLFFBQVEsT0FBTyxDQUFDLENBQUM7SUFDckUsQ0FBQzs7O1lBaERGLFVBQVU7Ozs7NENBU0ksTUFBTSxTQUFDLFFBQVE7WUFuQnJCLFFBQVE7Ozs7Ozs7SUFjZixpQ0FBNkI7Ozs7O0lBS2pCLGdDQUE0Qzs7Ozs7SUFBRSw4QkFBc0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlLCBJbmplY3QgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFJlc3RVdGlsIH0gZnJvbSAnLi4vLi4vdXRpbHMvcmVzdC11dGlsJztcbmltcG9ydCB7IENvcmVDb25maWcgfSBmcm9tICcuLi8uLi9jb3JlLWNvbmZpZyc7XG5cbmltcG9ydCB7IFNlbnNvckFuYWx5c2lzUmVzdWx0cyB9IGZyb20gJy4uL2VudGl0aWVzL1NlbnNvckFuYWx5c2lzUmVzdWx0cyc7XG5cblxuLyoqXG4gKiBMaXN0IG9mIGFub21hbHkgcmVsYXRlZCBhY3Rpb25zIGZvciB0aGUgYW5vbWFseSBkZXRlY3Rpb24gc2VydmljZVxuICogQFJlcXVlc3RIZWFkZXIgWC1BUEktS0VZIFRoZSBrZXkgdG8gaWRlbnRpZnkgdGhlIGFwcGxpY2F0aW9uIChjb25zb2xlKSBcbiAqL1xuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIEFub21hbHlTZXJ2aWNlIHtcblxuICAvLyBVUkwgdG8gd2ViIGFwaVxuICBwcml2YXRlIGJhc2VVcmwgPSAnL2Fub21hbHknO1xuXG4gIC8qKlxuICAgKiBDbGFzcyBjb25zdHJ1Y3RvclxuICAgKi9cbiAgY29uc3RydWN0b3IoQEluamVjdCgnY29uZmlnJykgcHJpdmF0ZSBjb25maWc6IENvcmVDb25maWcsIHByaXZhdGUgcmVzdDogUmVzdFV0aWwpIHtcbiAgICB0aGlzLmJhc2VVcmwgPSB0aGlzLmNvbmZpZy5hcGkgKyB0aGlzLmJhc2VVcmw7XG4gIH1cblxuXG4gIC8qKlxuICAgKiBHZXQgdHJhaW5pbmcgcmVzdWx0cyBvZiBhbGwgc2Vuc29ycyB3aXRoIGFub21hbHkgZW5hYmxlZCBmbGFnIG9yZGVyZWQgYnkgdGhlIGxhc3QgdHJhaW5pbmcgdGltZVxuICAgKiBAUmV0dXJuOiBRdWVyeVJlc3BvbnNlPFNlbnNvckFuYWx5c2lzUmVzdWx0cz5cbiAgICovXG4gIGdldFNlbnNvcnNBbmFseXNpc1Jlc3VsdHMocGFnZT86IG51bWJlciwgcGFnZVNpemU/OiBudW1iZXIpIHtcbiAgICBjb25zdCBwYXJhbXMgPSBuZXcgQXJyYXkoKTtcdFx0XG4gICAgaWYgKHBhZ2UgIT0gbnVsbCkgeyBwYXJhbXMucHVzaChgcGFnZT0ke3BhZ2V9YCk7IH1cbiAgICBpZiAocGFnZVNpemUgIT0gbnVsbCkgeyBwYXJhbXMucHVzaChgcGFnZVNpemU9JHtwYWdlU2l6ZX1gKTsgfVxuXG5cdFx0cmV0dXJuIHRoaXMucmVzdC5nZXQoYCR7dGhpcy5iYXNlVXJsfS90cmFpbmluZy9yZXN1bHRzYCwgLi4ucGFyYW1zKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBVcGRhdGUgc2Vuc29yIGFuYWx5c2lzIHJlc3VsdHMgYmFjaCBmb3IgYSBzcGVjaWZpYyBzZW5zb3JzXG4gICAqIEBSZXR1cm46IEVudGl0eVJlc3BvbnNlPFNlbnNvckFuYWx5c2lzUmVzdWx0cz5cbiAgICovXG4gIHVwZGF0ZShzZW5zb3JJZD86IHN0cmluZywgYm9keT86IFNlbnNvckFuYWx5c2lzUmVzdWx0cykge1xuICAgIHJldHVybiB0aGlzLnJlc3QucHV0KGAke3RoaXMuYmFzZVVybH0vdHJhaW5pbmcvc2Vuc29yLyR7c2Vuc29ySWR9YCwgdHlwZW9mIGJvZHkgPT09ICdvYmplY3QnID8gSlNPTi5zdHJpbmdpZnkoYm9keSkgOiBib2R5KTtcbiAgfVxuXG4gIC8qKlxuICAgKiBEZWxldGUgYWxsIGFuYWx5c2lzIHJlc3VsdHMgZm9yIGEgc3BlY2lmaWMgc2Vuc29yc1xuICAgKiBAUmV0dXJuOiBBY3Rpb25SZXNwb25zZVxuICAgKi9cbiAgZGVsZXRlKHNlbnNvcklkPzogc3RyaW5nKSB7XG4gICAgcmV0dXJuIHRoaXMucmVzdC5kZWxldGUoYCR7dGhpcy5iYXNlVXJsfS90cmFpbmluZy9zZW5zb3IvJHtzZW5zb3JJZH1gKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBHZXQgc2Vuc29yIGluZmVyZW5jZSBpbmZvIGZvciBhbm9tYWx5XG4gICAqIEBSZXR1cm46IEVudGl0eVJlc3BvbnNlPFNlbnNvckFub21hbHlJbmZvPlxuICAgKi9cbiAgZ2V0U2Vuc29yQW5vbWFseUluZm8oc2Vuc29ySWQ/OiBzdHJpbmcpIHtcbiAgICByZXR1cm4gdGhpcy5yZXN0LmdldChgJHt0aGlzLmJhc2VVcmx9L2luZmVyZW5jZS8ke3NlbnNvcklkfS9pbmZvYCk7XG4gIH1cblxufVxuIl19