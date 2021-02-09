import { Injectable, Inject } from '@angular/core';
import { RestUtil } from '../../utils/rest-util';
import { CoreConfig } from '../../config';
import * as i0 from "@angular/core";
import * as i1 from "../../utils/rest-util";
import * as i2 from "../../config";
/**
 * Services for integrations targets (templates)
 * @RequestHeader X-API-KEY The key to identify the application (portal)
 * @RequestHeader X-ACCESS-TOKEN The token to identify the logged-in user
 */
export class IntegrationsService {
    /**
     * Class constructor
     */
    constructor(config, rest) {
        this.config = config;
        this.rest = rest;
        // URL to web api
        this.baseUrl = '/integrations';
        this.baseUrl = this.config.api + this.baseUrl;
    }
    /**
     * Create new integration target
     * @Return: EntityResponse<IntegrationTarget>
     */
    create(body) {
        return this.rest.post(`${this.baseUrl}`, typeof body === 'object' ? JSON.stringify(body) : body);
    }
    /**
     * Update integration target
     * @Return: EntityResponse<IntegrationTarget>
     */
    update(id, body) {
        return this.rest.put(`${this.baseUrl}/${id}`, typeof body === 'object' ? JSON.stringify(body) : body);
    }
    /**
     * Delete integration target from the system
     * @Return: ActionResponse
     */
    delete(id) {
        return this.rest.delete(`${this.baseUrl}/${id}`);
    }
    /**
     * Get single integration target by id
     * @Return: EntityResponse<IntegrationTarget>
     */
    get(id) {
        return this.rest.get(`${this.baseUrl}/${id}`);
    }
    /**
     * Get integration targets by list of ids
     * @Return: EntitiesResponse<IntegrationTarget>
     */
    list(id) {
        const params = new Array();
        if (id != null) {
            params.push(`id=${id}`);
        }
        return this.rest.get(`${this.baseUrl}/list`, ...params);
    }
    /**
     * Find integration targets by filters
     * @Return: EntitiesResponse<IntegrationTarget>
     */
    find(search, type) {
        const params = new Array();
        if (search != null) {
            params.push(`search=${search}`);
        }
        if (type != null) {
            params.push(`type=${type}`);
        }
        return this.rest.get(`${this.baseUrl}`, ...params);
    }
    /**
     * Find all integration status
     * @Return: EntitiesResponse<IntegrationStatus>
     */
    findStatus(source, entityId, integrationTargetId, integrationActionId) {
        const params = new Array();
        if (source != null) {
            params.push(`source=${source}`);
        }
        if (entityId != null) {
            params.push(`entityId=${entityId}`);
        }
        if (integrationTargetId != null) {
            params.push(`integrationTargetId=${integrationTargetId}`);
        }
        if (integrationActionId != null) {
            params.push(`integrationActionId=${integrationActionId}`);
        }
        return this.rest.get(`${this.baseUrl}/status`, ...params);
    }
    /**
     * Create new integration action
     * @Return: EntityResponse<IntegrationAction>
     */
    createAction(body) {
        return this.rest.post(`${this.baseUrl}/actions`, typeof body === 'object' ? JSON.stringify(body) : body);
    }
    /**
     * Update integration action
     * @Return: EntityResponse<IntegrationAction>
     */
    updateAction(id, body) {
        return this.rest.put(`${this.baseUrl}/actions/${id}`, typeof body === 'object' ? JSON.stringify(body) : body);
    }
    /**
     * Delete integration action from the system
     * @Return: ActionResponse
     */
    deleteAction(id) {
        return this.rest.delete(`${this.baseUrl}/actions/${id}`);
    }
    /**
     * Get single integration action by id
     * @Return: EntityResponse<IntegrationAction>
     */
    getAction(id) {
        return this.rest.get(`${this.baseUrl}/actions/${id}`);
    }
    /**
     * Get integration actions by list of ids
     * @Return: EntitiesResponse<IntegrationAction>
     */
    listActions(id) {
        const params = new Array();
        if (id != null) {
            params.push(`id=${id}`);
        }
        return this.rest.get(`${this.baseUrl}/actions/list`, ...params);
    }
    /**
     * Find integration actions by filters
     * @Return: EntitiesResponse<IntegrationAction>
     */
    findActions(search) {
        const params = new Array();
        if (search != null) {
            params.push(`search=${search}`);
        }
        return this.rest.get(`${this.baseUrl}/actions`, ...params);
    }
    /**
     * Find all integration actions for a specified level in the folder hierarchy
     * @Return: EntitiesResponse<IntegrationAction>
     */
    getFolderActions(folderId) {
        return this.rest.get(`${this.baseUrl}/actions/folder/${folderId}`);
    }
    /**
     * Test integration action
     * @Return: EntityResponse<IntegrationAction>
     */
    testAction(body) {
        return this.rest.post(`${this.baseUrl}/actions/test`, typeof body === 'object' ? JSON.stringify(body) : body);
    }
}
/** @nocollapse */ IntegrationsService.ɵfac = function IntegrationsService_Factory(t) { return new (t || IntegrationsService)(i0.ɵɵinject('config'), i0.ɵɵinject(i1.RestUtil)); };
/** @nocollapse */ IntegrationsService.ɵprov = i0.ɵɵdefineInjectable({ token: IntegrationsService, factory: IntegrationsService.ɵfac });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(IntegrationsService, [{
        type: Injectable
    }], function () { return [{ type: i2.CoreConfig, decorators: [{
                type: Inject,
                args: ['config']
            }] }, { type: i1.RestUtil }]; }, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW50ZWdyYXRpb25zU2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL25nLWNvcmUtbGliL3NyYy9saWIvc2VydmljZXMvaW50ZWdyYXRpb25zU2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUNuRCxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sdUJBQXVCLENBQUM7QUFDakQsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGNBQWMsQ0FBQzs7OztBQU8xQzs7OztHQUlHO0FBRUgsTUFBTSxPQUFPLG1CQUFtQjtJQUs5Qjs7T0FFRztJQUNILFlBQXNDLE1BQWtCLEVBQVUsSUFBYztRQUExQyxXQUFNLEdBQU4sTUFBTSxDQUFZO1FBQVUsU0FBSSxHQUFKLElBQUksQ0FBVTtRQU5oRixpQkFBaUI7UUFDVCxZQUFPLEdBQUcsZUFBZSxDQUFDO1FBTWhDLElBQUksQ0FBQyxPQUFPLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxHQUFHLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQztJQUNoRCxDQUFDO0lBR0Q7OztPQUdHO0lBQ0gsTUFBTSxDQUFDLElBQXdCO1FBQzdCLE9BQU8sSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxJQUFJLENBQUMsT0FBTyxFQUFFLEVBQUUsT0FBTyxJQUFJLEtBQUssUUFBUSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUNuRyxDQUFDO0lBRUQ7OztPQUdHO0lBQ0gsTUFBTSxDQUFDLEVBQVcsRUFBRSxJQUF3QjtRQUMxQyxPQUFPLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLEdBQUcsSUFBSSxDQUFDLE9BQU8sSUFBSSxFQUFFLEVBQUUsRUFBRSxPQUFP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QUMsR0FBRyxJQUFJLENBQUMsT0FBTyxVQUFVLEVBQUUsR0FBRyxNQUFNLENBQUMsQ0FBQztJQUMzRCxDQUFDO0lBRUQ7OztPQUdHO0lBQ0gsZ0JBQWdCLENBQUMsUUFBaUI7UUFDaEMsT0FBTyxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxHQUFHLElBQUksQ0FBQyxPQUFPLG1CQUFtQixRQUFRLEVBQUUsQ0FBQyxDQUFDO0lBQ3JFLENBQUM7SUFFRDs7O09BR0c7SUFDSCxVQUFVLENBQUMsSUFBd0I7UUFDakMsT0FBTyxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLElBQUksQ0FBQyxPQUFPLGVBQWUsRUFBRSxPQUFPLElBQUksS0FBSyxRQUFRLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQ2hILENBQUM7O3lHQXRKVSxtQkFBbUIsY0FRVixRQUFROzhFQVJqQixtQkFBbUIsV0FBbkIsbUJBQW1CO3VGQUFuQixtQkFBbUI7Y0FEL0IsVUFBVTs7c0JBU0ksTUFBTTt1QkFBQyxRQUFRIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSwgSW5qZWN0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBSZXN0VXRpbCB9IGZyb20gJy4uLy4uL3V0aWxzL3Jlc3QtdXRpbCc7XG5pbXBvcnQgeyBDb3JlQ29uZmlnIH0gZnJvbSAnLi4vLi4vY29uZmlnJztcblxuaW1wb3J0IHsgSW50ZWdyYXRpb25BY3Rpb24gfSBmcm9tICcuLi9lbnRpdGllcy9JbnRlZ3JhdGlvbkFjdGlvbic7XG5pbXBvcnQgeyBJbnRlZ3JhdGlvblRhcmdldCB9IGZyb20gJy4uL2VudGl0aWVzL0ludGVncmF0aW9uVGFyZ2V0JztcbmltcG9ydCB7IEVudGl0eVR5cGVDb2RlIH0gZnJvbSAnLi4vZW51bXMvRW50aXR5VHlwZUNvZGUnO1xuXG5cbi8qKlxuICogU2VydmljZXMgZm9yIGludGVncmF0aW9ucyB0YXJnZXRzICh0ZW1wbGF0ZXMpXG4gKiBAUmVxdWVzdEhlYWRlciBYLUFQSS1LRVkgVGhlIGtleSB0byBpZGVudGlmeSB0aGUgYXBwbGljYXRpb24gKHBvcnRhbClcbiAqIEBSZXF1ZXN0SGVhZGVyIFgtQUNDRVNTLVRPS0VOIFRoZSB0b2tlbiB0byBpZGVudGlmeSB0aGUgbG9nZ2VkLWluIHVzZXIgXG4gKi9cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBJbnRlZ3JhdGlvbnNTZXJ2aWNlIHtcblxuICAvLyBVUkwgdG8gd2ViIGFwaVxuICBwcml2YXRlIGJhc2VVcmwgPSAnL2ludGVncmF0aW9ucyc7XG5cbiAgLyoqXG4gICAqIENsYXNzIGNvbnN0cnVjdG9yXG4gICAqL1xuICBjb25zdHJ1Y3RvcihASW5qZWN0KCdjb25maWcnKSBwcml2YXRlIGNvbmZpZzogQ29yZUNvbmZpZywgcHJpdmF0ZSByZXN0OiBSZXN0VXRpbCkge1xuICAgIHRoaXMuYmFzZVVybCA9IHRoaXMuY29uZmlnLmFwaSArIHRoaXMuYmFzZVVybDtcbiAgfVxuXG5cbiAgLyoqXG4gICAqIENyZWF0ZSBuZXcgaW50ZWdyYXRpb24gdGFyZ2V0XG4gICAqIEBSZXR1cm46IEVudGl0eVJlc3BvbnNlPEludGVncmF0aW9uVGFyZ2V0PlxuICAgKi9cbiAgY3JlYXRlKGJvZHk/OiBJbnRlZ3JhdGlvblRhcmdldCkge1xuICAgIHJldHVybiB0aGlzLnJlc3QucG9zdChgJHt0aGlzLmJhc2VVcmx9YCwgdHlwZW9mIGJvZHkgPT09ICdvYmplY3QnID8gSlNPTi5zdHJpbmdpZnkoYm9keSkgOiBib2R5KTtcbiAgfVxuXG4gIC8qKlxuICAgKiBVcGRhdGUgaW50ZWdyYXRpb24gdGFyZ2V0XG4gICAqIEBSZXR1cm46IEVudGl0eVJlc3BvbnNlPEludGVncmF0aW9uVGFyZ2V0PlxuICAgKi9cbiAgdXBkYXRlKGlkPzogc3RyaW5nLCBib2R5PzogSW50ZWdyYXRpb25UYXJnZXQpIHtcbiAgICByZXR1cm4gdGhpcy5yZXN0LnB1dChgJHt0aGlzLmJhc2VVcmx9LyR7aWR9YCwgdHlwZW9mIGJvZHkgPT09ICdvYmplY3QnID8gSlNPTi5zdHJpbmdpZnkoYm9keSkgOiBib2R5KTtcbiAgfVxuXG4gIC8qKlxuICAgKiBEZWxldGUgaW50ZWdyYXRpb24gdGFyZ2V0IGZyb20gdGhlIHN5c3RlbVxuICAgKiBAUmV0dXJuOiBBY3Rpb25SZXNwb25zZVxuICAgKi9cbiAgZGVsZXRlKGlkPzogc3RyaW5nKSB7XG4gICAgcmV0dXJuIHRoaXMucmVzdC5kZWxldGUoYCR7dGhpcy5iYXNlVXJsfS8ke2lkfWApO1xuICB9XG5cbiAgLyoqXG4gICAqIEdldCBzaW5nbGUgaW50ZWdyYXRpb24gdGFyZ2V0IGJ5IGlkXG4gICAqIEBSZXR1cm46IEVudGl0eVJlc3BvbnNlPEludGVncmF0aW9uVGFyZ2V0PlxuICAgKi9cbiAgZ2V0KGlkPzogc3RyaW5nKSB7XG4gICAgcmV0dXJuIHRoaXMucmVzdC5nZXQoYCR7dGhpcy5iYXNlVXJsfS8ke2lkfWApO1xuICB9XG5cbiAgLyoqXG4gICAqIEdldCBpbnRlZ3JhdGlvbiB0YXJnZXRzIGJ5IGxpc3Qgb2YgaWRzXG4gICAqIEBSZXR1cm46IEVudGl0aWVzUmVzcG9uc2U8SW50ZWdyYXRpb25UYXJnZXQ+XG4gICAqL1xuICBsaXN0KGlkPzogc3RyaW5nW10pIHtcbiAgICBjb25zdCBwYXJhbXMgPSBuZXcgQXJyYXkoKTtcdFx0XG4gICAgaWYgKGlkICE9IG51bGwpIHsgcGFyYW1zLnB1c2goYGlkPSR7aWR9YCk7IH1cblxuXHRcdHJldHVybiB0aGlzLnJlc3QuZ2V0KGAke3RoaXMuYmFzZVVybH0vbGlzdGAsIC4uLnBhcmFtcyk7XG4gIH1cblxuICAvKipcbiAgICogRmluZCBpbnRlZ3JhdGlvbiB0YXJnZXRzIGJ5IGZpbHRlcnNcbiAgICogQFJldHVybjogRW50aXRpZXNSZXNwb25zZTxJbnRlZ3JhdGlvblRhcmdldD5cbiAgICovXG4gIGZpbmQoc2VhcmNoPzogc3RyaW5nLCB0eXBlPzogc3RyaW5nKSB7XG4gICAgY29uc3QgcGFyYW1zID0gbmV3IEFycmF5KCk7XHRcdFxuICAgIGlmIChzZWFyY2ggIT0gbnVsbCkgeyBwYXJhbXMucHVzaChgc2VhcmNoPSR7c2VhcmNofWApOyB9XG4gICAgaWYgKHR5cGUgIT0gbnVsbCkgeyBwYXJhbXMucHVzaChgdHlwZT0ke3R5cGV9YCk7IH1cblxuXHRcdHJldHVybiB0aGlzLnJlc3QuZ2V0KGAke3RoaXMuYmFzZVVybH1gLCAuLi5wYXJhbXMpO1xuICB9XG5cbiAgLyoqXG4gICAqIEZpbmQgYWxsIGludGVncmF0aW9uIHN0YXR1c1xuICAgKiBAUmV0dXJuOiBFbnRpdGllc1Jlc3BvbnNlPEludGVncmF0aW9uU3RhdHVzPlxuICAgKi9cbiAgZmluZFN0YXR1cyhzb3VyY2U/OiBFbnRpdHlUeXBlQ29kZSwgZW50aXR5SWQ/OiBzdHJpbmcsIGludGVncmF0aW9uVGFyZ2V0SWQ/OiBzdHJpbmcsIGludGVncmF0aW9uQWN0aW9uSWQ/OiBzdHJpbmcpIHtcbiAgICBjb25zdCBwYXJhbXMgPSBuZXcgQXJyYXkoKTtcdFx0XG4gICAgaWYgKHNvdXJjZSAhPSBudWxsKSB7IHBhcmFtcy5wdXNoKGBzb3VyY2U9JHtzb3VyY2V9YCk7IH1cbiAgICBpZiAoZW50aXR5SWQgIT0gbnVsbCkgeyBwYXJhbXMucHVzaChgZW50aXR5SWQ9JHtlbnRpdHlJZH1gKTsgfVxuICAgIGlmIChpbnRlZ3JhdGlvblRhcmdldElkICE9IG51bGwpIHsgcGFyYW1zLnB1c2goYGludGVncmF0aW9uVGFyZ2V0SWQ9JHtpbnRlZ3JhdGlvblRhcmdldElkfWApOyB9XG4gICAgaWYgKGludGVncmF0aW9uQWN0aW9uSWQgIT0gbnVsbCkgeyBwYXJhbXMucHVzaChgaW50ZWdyYXRpb25BY3Rpb25JZD0ke2ludGVncmF0aW9uQWN0aW9uSWR9YCk7IH1cblxuXHRcdHJldHVybiB0aGlzLnJlc3QuZ2V0KGAke3RoaXMuYmFzZVVybH0vc3RhdHVzYCwgLi4ucGFyYW1zKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBDcmVhdGUgbmV3IGludGVncmF0aW9uIGFjdGlvblxuICAgKiBAUmV0dXJuOiBFbnRpdHlSZXNwb25zZTxJbnRlZ3JhdGlvbkFjdGlvbj5cbiAgICovXG4gIGNyZWF0ZUFjdGlvbihib2R5PzogSW50ZWdyYXRpb25BY3Rpb24pIHtcbiAgICByZXR1cm4gdGhpcy5yZXN0LnBvc3QoYCR7dGhpcy5iYXNlVXJsfS9hY3Rpb25zYCwgdHlwZW9mIGJvZHkgPT09ICdvYmplY3QnID8gSlNPTi5zdHJpbmdpZnkoYm9keSkgOiBib2R5KTtcbiAgfVxuXG4gIC8qKlxuICAgKiBVcGRhdGUgaW50ZWdyYXRpb24gYWN0aW9uXG4gICAqIEBSZXR1cm46IEVudGl0eVJlc3BvbnNlPEludGVncmF0aW9uQWN0aW9uPlxuICAgKi9cbiAgdXBkYXRlQWN0aW9uKGlkPzogc3RyaW5nLCBib2R5PzogSW50ZWdyYXRpb25BY3Rpb24pIHtcbiAgICByZXR1cm4gdGhpcy5yZXN0LnB1dChgJHt0aGlzLmJhc2VVcmx9L2FjdGlvbnMvJHtpZH1gLCB0eXBlb2YgYm9keSA9PT0gJ29iamVjdCcgPyBKU09OLnN0cmluZ2lmeShib2R5KSA6IGJvZHkpO1xuICB9XG5cbiAgLyoqXG4gICAqIERlbGV0ZSBpbnRlZ3JhdGlvbiBhY3Rpb24gZnJvbSB0aGUgc3lzdGVtXG4gICAqIEBSZXR1cm46IEFjdGlvblJlc3BvbnNlXG4gICAqL1xuICBkZWxldGVBY3Rpb24oaWQ/OiBzdHJpbmcpIHtcbiAgICByZXR1cm4gdGhpcy5yZXN0LmRlbGV0ZShgJHt0aGlzLmJhc2VVcmx9L2FjdGlvbnMvJHtpZH1gKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBHZXQgc2luZ2xlIGludGVncmF0aW9uIGFjdGlvbiBieSBpZFxuICAgKiBAUmV0dXJuOiBFbnRpdHlSZXNwb25zZTxJbnRlZ3JhdGlvbkFjdGlvbj5cbiAgICovXG4gIGdldEFjdGlvbihpZD86IHN0cmluZykge1xuICAgIHJldHVybiB0aGlzLnJlc3QuZ2V0KGAke3RoaXMuYmFzZVVybH0vYWN0aW9ucy8ke2lkfWApO1xuICB9XG5cbiAgLyoqXG4gICAqIEdldCBpbnRlZ3JhdGlvbiBhY3Rpb25zIGJ5IGxpc3Qgb2YgaWRzXG4gICAqIEBSZXR1cm46IEVudGl0aWVzUmVzcG9uc2U8SW50ZWdyYXRpb25BY3Rpb24+XG4gICAqL1xuICBsaXN0QWN0aW9ucyhpZD86IHN0cmluZ1tdKSB7XG4gICAgY29uc3QgcGFyYW1zID0gbmV3IEFycmF5KCk7XHRcdFxuICAgIGlmIChpZCAhPSBudWxsKSB7IHBhcmFtcy5wdXNoKGBpZD0ke2lkfWApOyB9XG5cblx0XHRyZXR1cm4gdGhpcy5yZXN0LmdldChgJHt0aGlzLmJhc2VVcmx9L2FjdGlvbnMvbGlzdGAsIC4uLnBhcmFtcyk7XG4gIH1cblxuICAvKipcbiAgICogRmluZCBpbnRlZ3JhdGlvbiBhY3Rpb25zIGJ5IGZpbHRlcnNcbiAgICogQFJldHVybjogRW50aXRpZXNSZXNwb25zZTxJbnRlZ3JhdGlvbkFjdGlvbj5cbiAgICovXG4gIGZpbmRBY3Rpb25zKHNlYXJjaD86IHN0cmluZykge1xuICAgIGNvbnN0IHBhcmFtcyA9IG5ldyBBcnJheSgpO1x0XHRcbiAgICBpZiAoc2VhcmNoICE9IG51bGwpIHsgcGFyYW1zLnB1c2goYHNlYXJjaD0ke3NlYXJjaH1gKTsgfVxuXG5cdFx0cmV0dXJuIHRoaXMucmVzdC5nZXQoYCR7dGhpcy5iYXNlVXJsfS9hY3Rpb25zYCwgLi4ucGFyYW1zKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBGaW5kIGFsbCBpbnRlZ3JhdGlvbiBhY3Rpb25zIGZvciBhIHNwZWNpZmllZCBsZXZlbCBpbiB0aGUgZm9sZGVyIGhpZXJhcmNoeVxuICAgKiBAUmV0dXJuOiBFbnRpdGllc1Jlc3BvbnNlPEludGVncmF0aW9uQWN0aW9uPlxuICAgKi9cbiAgZ2V0Rm9sZGVyQWN0aW9ucyhmb2xkZXJJZD86IHN0cmluZykge1xuICAgIHJldHVybiB0aGlzLnJlc3QuZ2V0KGAke3RoaXMuYmFzZVVybH0vYWN0aW9ucy9mb2xkZXIvJHtmb2xkZXJJZH1gKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBUZXN0IGludGVncmF0aW9uIGFjdGlvblxuICAgKiBAUmV0dXJuOiBFbnRpdHlSZXNwb25zZTxJbnRlZ3JhdGlvbkFjdGlvbj5cbiAgICovXG4gIHRlc3RBY3Rpb24oYm9keT86IEludGVncmF0aW9uQWN0aW9uKSB7XG4gICAgcmV0dXJuIHRoaXMucmVzdC5wb3N0KGAke3RoaXMuYmFzZVVybH0vYWN0aW9ucy90ZXN0YCwgdHlwZW9mIGJvZHkgPT09ICdvYmplY3QnID8gSlNPTi5zdHJpbmdpZnkoYm9keSkgOiBib2R5KTtcbiAgfVxuXG59XG4iXX0=