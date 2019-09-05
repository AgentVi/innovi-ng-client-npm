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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYW5vbWFseVNlcnZpY2UuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AYWdlbnR2aS9uZy1jb3JlLWxpYi8iLCJzb3VyY2VzIjpbImxpYi9zZXJ2aWNlcy9hbm9tYWx5U2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDbkQsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLHVCQUF1QixDQUFDO0FBQ2pELE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxjQUFjLENBQUM7Ozs7O0FBVTFDLE1BQU0sT0FBTyxjQUFjOzs7Ozs7SUFRekIsWUFBc0MsTUFBa0IsRUFBVSxJQUFjO1FBQTFDLFdBQU0sR0FBTixNQUFNLENBQVk7UUFBVSxTQUFJLEdBQUosSUFBSSxDQUFVOztRQUx4RSxZQUFPLEdBQUcsVUFBVSxDQUFDO1FBTTNCLElBQUksQ0FBQyxPQUFPLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxHQUFHLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQztJQUNoRCxDQUFDOzs7Ozs7OztJQU9ELHlCQUF5QixDQUFDLElBQWEsRUFBRSxRQUFpQjs7Y0FDbEQsTUFBTSxHQUFHLElBQUksS0FBSyxFQUFFO1FBQzFCLElBQUksSUFBSSxJQUFJLElBQUksRUFBRTtZQUFFLE1BQU0sQ0FBQyxJQUFJLENBQUMsUUFBUSxJQUFJLEVBQUUsQ0FBQyxDQUFDO1NBQUU7UUFDbEQsSUFBSSxRQUFRLElBQUksSUFBSSxFQUFFO1lBQUUsTUFBTSxDQUFDLElBQUksQ0FBQyxZQUFZLFFBQVEsRUFBRSxDQUFDLENBQUM7U0FBRTtRQUVoRSxPQUFPLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLEdBQUcsSUFBSSxDQUFDLE9BQU8sbUJBQW1CLEVBQUUsR0FBRyxNQUFNLENBQUMsQ0FBQztJQUNwRSxDQUFDOzs7Ozs7OztJQU1ELE1BQU0sQ0FBQyxRQUFpQixFQUFFLElBQTRCO1FBQ3BELE9BQU8sSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsR0FBRyxJQUFJLENBQUMsT0FBTyxvQkFBb0IsUUFBUSxFQUFFLEVBQUUsT0FBTyxJQUFJLEtBQUssUUFBUSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUM5SCxDQUFDOzs7Ozs7O0lBTUQsTUFBTSxDQUFDLFFBQWlCO1FBQ3RCLE9BQU8sSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsR0FBRyxJQUFJLENBQUMsT0FBTyxvQkFBb0IsUUFBUSxFQUFFLENBQUMsQ0FBQztJQUN6RSxDQUFDOzs7Ozs7O0lBTUQsb0JBQW9CLENBQUMsUUFBaUI7UUFDcEMsT0FBTyxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxHQUFHLElBQUksQ0FBQyxPQUFPLGNBQWMsUUFBUSxPQUFPLENBQUMsQ0FBQztJQUNyRSxDQUFDOzs7WUFoREYsVUFBVTs7OztZQVRGLFVBQVUsdUJBa0JKLE1BQU0sU0FBQyxRQUFRO1lBbkJyQixRQUFROzs7Ozs7O0lBY2YsaUNBQTZCOzs7OztJQUtqQixnQ0FBNEM7Ozs7O0lBQUUsOEJBQXNCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSwgSW5qZWN0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBSZXN0VXRpbCB9IGZyb20gJy4uLy4uL3V0aWxzL3Jlc3QtdXRpbCc7XG5pbXBvcnQgeyBDb3JlQ29uZmlnIH0gZnJvbSAnLi4vLi4vY29uZmlnJztcblxuaW1wb3J0IHsgU2Vuc29yQW5hbHlzaXNSZXN1bHRzIH0gZnJvbSAnLi4vZW50aXRpZXMvU2Vuc29yQW5hbHlzaXNSZXN1bHRzJztcblxuXG4vKipcbiAqIExpc3Qgb2YgYW5vbWFseSByZWxhdGVkIGFjdGlvbnMgZm9yIHRoZSBhbm9tYWx5IGRldGVjdGlvbiBzZXJ2aWNlXG4gKiBAUmVxdWVzdEhlYWRlciBYLUFQSS1LRVkgVGhlIGtleSB0byBpZGVudGlmeSB0aGUgYXBwbGljYXRpb24gKGNvbnNvbGUpIFxuICovXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgQW5vbWFseVNlcnZpY2Uge1xuXG4gIC8vIFVSTCB0byB3ZWIgYXBpXG4gIHByaXZhdGUgYmFzZVVybCA9ICcvYW5vbWFseSc7XG5cbiAgLyoqXG4gICAqIENsYXNzIGNvbnN0cnVjdG9yXG4gICAqL1xuICBjb25zdHJ1Y3RvcihASW5qZWN0KCdjb25maWcnKSBwcml2YXRlIGNvbmZpZzogQ29yZUNvbmZpZywgcHJpdmF0ZSByZXN0OiBSZXN0VXRpbCkge1xuICAgIHRoaXMuYmFzZVVybCA9IHRoaXMuY29uZmlnLmFwaSArIHRoaXMuYmFzZVVybDtcbiAgfVxuXG5cbiAgLyoqXG4gICAqIEdldCB0cmFpbmluZyByZXN1bHRzIG9mIGFsbCBzZW5zb3JzIHdpdGggYW5vbWFseSBlbmFibGVkIGZsYWcgb3JkZXJlZCBieSB0aGUgbGFzdCB0cmFpbmluZyB0aW1lXG4gICAqIEBSZXR1cm46IFF1ZXJ5UmVzcG9uc2U8U2Vuc29yQW5hbHlzaXNSZXN1bHRzPlxuICAgKi9cbiAgZ2V0U2Vuc29yc0FuYWx5c2lzUmVzdWx0cyhwYWdlPzogbnVtYmVyLCBwYWdlU2l6ZT86IG51bWJlcikge1xuICAgIGNvbnN0IHBhcmFtcyA9IG5ldyBBcnJheSgpO1x0XHRcbiAgICBpZiAocGFnZSAhPSBudWxsKSB7IHBhcmFtcy5wdXNoKGBwYWdlPSR7cGFnZX1gKTsgfVxuICAgIGlmIChwYWdlU2l6ZSAhPSBudWxsKSB7IHBhcmFtcy5wdXNoKGBwYWdlU2l6ZT0ke3BhZ2VTaXplfWApOyB9XG5cblx0XHRyZXR1cm4gdGhpcy5yZXN0LmdldChgJHt0aGlzLmJhc2VVcmx9L3RyYWluaW5nL3Jlc3VsdHNgLCAuLi5wYXJhbXMpO1xuICB9XG5cbiAgLyoqXG4gICAqIFVwZGF0ZSBzZW5zb3IgYW5hbHlzaXMgcmVzdWx0cyBiYWNoIGZvciBhIHNwZWNpZmljIHNlbnNvcnNcbiAgICogQFJldHVybjogRW50aXR5UmVzcG9uc2U8U2Vuc29yQW5hbHlzaXNSZXN1bHRzPlxuICAgKi9cbiAgdXBkYXRlKHNlbnNvcklkPzogc3RyaW5nLCBib2R5PzogU2Vuc29yQW5hbHlzaXNSZXN1bHRzKSB7XG4gICAgcmV0dXJuIHRoaXMucmVzdC5wdXQoYCR7dGhpcy5iYXNlVXJsfS90cmFpbmluZy9zZW5zb3IvJHtzZW5zb3JJZH1gLCB0eXBlb2YgYm9keSA9PT0gJ29iamVjdCcgPyBKU09OLnN0cmluZ2lmeShib2R5KSA6IGJvZHkpO1xuICB9XG5cbiAgLyoqXG4gICAqIERlbGV0ZSBhbGwgYW5hbHlzaXMgcmVzdWx0cyBmb3IgYSBzcGVjaWZpYyBzZW5zb3JzXG4gICAqIEBSZXR1cm46IEFjdGlvblJlc3BvbnNlXG4gICAqL1xuICBkZWxldGUoc2Vuc29ySWQ/OiBzdHJpbmcpIHtcbiAgICByZXR1cm4gdGhpcy5yZXN0LmRlbGV0ZShgJHt0aGlzLmJhc2VVcmx9L3RyYWluaW5nL3NlbnNvci8ke3NlbnNvcklkfWApO1xuICB9XG5cbiAgLyoqXG4gICAqIEdldCBzZW5zb3IgaW5mZXJlbmNlIGluZm8gZm9yIGFub21hbHlcbiAgICogQFJldHVybjogRW50aXR5UmVzcG9uc2U8U2Vuc29yQW5vbWFseUluZm8+XG4gICAqL1xuICBnZXRTZW5zb3JBbm9tYWx5SW5mbyhzZW5zb3JJZD86IHN0cmluZykge1xuICAgIHJldHVybiB0aGlzLnJlc3QuZ2V0KGAke3RoaXMuYmFzZVVybH0vaW5mZXJlbmNlLyR7c2Vuc29ySWR9L2luZm9gKTtcbiAgfVxuXG59XG4iXX0=