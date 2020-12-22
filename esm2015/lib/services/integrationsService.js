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
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(IntegrationsService, [{
        type: Injectable
    }], function () { return [{ type: i2.CoreConfig, decorators: [{
                type: Inject,
                args: ['config']
            }] }, { type: i1.RestUtil }]; }, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW50ZWdyYXRpb25zU2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BhZ2VudHZpL25nLWNvcmUtbGliLyIsInNvdXJjZXMiOlsibGliL3NlcnZpY2VzL2ludGVncmF0aW9uc1NlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDbkQsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLHVCQUF1QixDQUFDO0FBQ2pELE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxjQUFjLENBQUM7Ozs7QUFPMUM7Ozs7R0FJRztBQUVILE1BQU0sT0FBTyxtQkFBbUI7SUFLOUI7O09BRUc7SUFDSCxZQUFzQyxNQUFrQixFQUFVLElBQWM7UUFBMUMsV0FBTSxHQUFOLE1BQU0sQ0FBWTtRQUFVLFNBQUksR0FBSixJQUFJLENBQVU7UUFOaEYsaUJBQWlCO1FBQ1QsWUFBTyxHQUFHLGVBQWUsQ0FBQztRQU1oQyxJQUFJLENBQUMsT0FBTyxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUMsR0FBRyxHQUFHLElBQUksQ0FBQyxPQUFPLENBQUM7SUFDaEQsQ0FBQztJQUdEOzs7T0FHRztJQUNILE1BQU0sQ0FBQyxJQUF3QjtRQUM3QixPQUFPLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsSUFBSSxDQUFDLE9BQU8sRUFBRSxFQUFFLE9BQU8sSUFBSSxLQUFLLFFBQVEsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDbkcsQ0FBQztJQUVEOzs7T0FHRztJQUNILE1BQU0sQ0FBQyxFQUFXLEVBQUUsSUFBd0I7UUFDMUMsT0FBTyxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxHQUFHLElBQUksQ0FBQyxPQUFPLElBQUksRUFBRSxFQUFFLEVBQUUsT0FBTyxJQUFJLEtBQUssUUFB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QUFDLE9BQU8sVUFBVSxFQUFFLEdBQUcsTUFBTSxDQUFDLENBQUM7SUFDM0QsQ0FBQztJQUVEOzs7T0FHRztJQUNILGdCQUFnQixDQUFDLFFBQWlCO1FBQ2hDLE9BQU8sSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsR0FBRyxJQUFJLENBQUMsT0FBTyxtQkFBbUIsUUFBUSxFQUFFLENBQUMsQ0FBQztJQUNyRSxDQUFDO0lBRUQ7OztPQUdHO0lBQ0gsVUFBVSxDQUFDLElBQXdCO1FBQ2pDLE9BQU8sSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxJQUFJLENBQUMsT0FBTyxlQUFlLEVBQUUsT0FBTyxJQUFJLEtBQUssUUFBUSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUNoSCxDQUFDOzt5R0F0SlUsbUJBQW1CLGNBUVYsUUFBUTs4RUFSakIsbUJBQW1CLFdBQW5CLG1CQUFtQjtrREFBbkIsbUJBQW1CO2NBRC9CLFVBQVU7O3NCQVNJLE1BQU07dUJBQUMsUUFBUSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUsIEluamVjdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgUmVzdFV0aWwgfSBmcm9tICcuLi8uLi91dGlscy9yZXN0LXV0aWwnO1xuaW1wb3J0IHsgQ29yZUNvbmZpZyB9IGZyb20gJy4uLy4uL2NvbmZpZyc7XG5cbmltcG9ydCB7IEludGVncmF0aW9uVGFyZ2V0IH0gZnJvbSAnLi4vZW50aXRpZXMvSW50ZWdyYXRpb25UYXJnZXQnO1xuaW1wb3J0IHsgRW50aXR5VHlwZUNvZGUgfSBmcm9tICcuLi9lbnVtcy9FbnRpdHlUeXBlQ29kZSc7XG5pbXBvcnQgeyBJbnRlZ3JhdGlvbkFjdGlvbiB9IGZyb20gJy4uL2VudGl0aWVzL0ludGVncmF0aW9uQWN0aW9uJztcblxuXG4vKipcbiAqIFNlcnZpY2VzIGZvciBpbnRlZ3JhdGlvbnMgdGFyZ2V0cyAodGVtcGxhdGVzKVxuICogQFJlcXVlc3RIZWFkZXIgWC1BUEktS0VZIFRoZSBrZXkgdG8gaWRlbnRpZnkgdGhlIGFwcGxpY2F0aW9uIChwb3J0YWwpXG4gKiBAUmVxdWVzdEhlYWRlciBYLUFDQ0VTUy1UT0tFTiBUaGUgdG9rZW4gdG8gaWRlbnRpZnkgdGhlIGxvZ2dlZC1pbiB1c2VyIFxuICovXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgSW50ZWdyYXRpb25zU2VydmljZSB7XG5cbiAgLy8gVVJMIHRvIHdlYiBhcGlcbiAgcHJpdmF0ZSBiYXNlVXJsID0gJy9pbnRlZ3JhdGlvbnMnO1xuXG4gIC8qKlxuICAgKiBDbGFzcyBjb25zdHJ1Y3RvclxuICAgKi9cbiAgY29uc3RydWN0b3IoQEluamVjdCgnY29uZmlnJykgcHJpdmF0ZSBjb25maWc6IENvcmVDb25maWcsIHByaXZhdGUgcmVzdDogUmVzdFV0aWwpIHtcbiAgICB0aGlzLmJhc2VVcmwgPSB0aGlzLmNvbmZpZy5hcGkgKyB0aGlzLmJhc2VVcmw7XG4gIH1cblxuXG4gIC8qKlxuICAgKiBDcmVhdGUgbmV3IGludGVncmF0aW9uIHRhcmdldFxuICAgKiBAUmV0dXJuOiBFbnRpdHlSZXNwb25zZTxJbnRlZ3JhdGlvblRhcmdldD5cbiAgICovXG4gIGNyZWF0ZShib2R5PzogSW50ZWdyYXRpb25UYXJnZXQpIHtcbiAgICByZXR1cm4gdGhpcy5yZXN0LnBvc3QoYCR7dGhpcy5iYXNlVXJsfWAsIHR5cGVvZiBib2R5ID09PSAnb2JqZWN0JyA/IEpTT04uc3RyaW5naWZ5KGJvZHkpIDogYm9keSk7XG4gIH1cblxuICAvKipcbiAgICogVXBkYXRlIGludGVncmF0aW9uIHRhcmdldFxuICAgKiBAUmV0dXJuOiBFbnRpdHlSZXNwb25zZTxJbnRlZ3JhdGlvblRhcmdldD5cbiAgICovXG4gIHVwZGF0ZShpZD86IHN0cmluZywgYm9keT86IEludGVncmF0aW9uVGFyZ2V0KSB7XG4gICAgcmV0dXJuIHRoaXMucmVzdC5wdXQoYCR7dGhpcy5iYXNlVXJsfS8ke2lkfWAsIHR5cGVvZiBib2R5ID09PSAnb2JqZWN0JyA/IEpTT04uc3RyaW5naWZ5KGJvZHkpIDogYm9keSk7XG4gIH1cblxuICAvKipcbiAgICogRGVsZXRlIGludGVncmF0aW9uIHRhcmdldCBmcm9tIHRoZSBzeXN0ZW1cbiAgICogQFJldHVybjogQWN0aW9uUmVzcG9uc2VcbiAgICovXG4gIGRlbGV0ZShpZD86IHN0cmluZykge1xuICAgIHJldHVybiB0aGlzLnJlc3QuZGVsZXRlKGAke3RoaXMuYmFzZVVybH0vJHtpZH1gKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBHZXQgc2luZ2xlIGludGVncmF0aW9uIHRhcmdldCBieSBpZFxuICAgKiBAUmV0dXJuOiBFbnRpdHlSZXNwb25zZTxJbnRlZ3JhdGlvblRhcmdldD5cbiAgICovXG4gIGdldChpZD86IHN0cmluZykge1xuICAgIHJldHVybiB0aGlzLnJlc3QuZ2V0KGAke3RoaXMuYmFzZVVybH0vJHtpZH1gKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBHZXQgaW50ZWdyYXRpb24gdGFyZ2V0cyBieSBsaXN0IG9mIGlkc1xuICAgKiBAUmV0dXJuOiBFbnRpdGllc1Jlc3BvbnNlPEludGVncmF0aW9uVGFyZ2V0PlxuICAgKi9cbiAgbGlzdChpZD86IHN0cmluZ1tdKSB7XG4gICAgY29uc3QgcGFyYW1zID0gbmV3IEFycmF5KCk7XHRcdFxuICAgIGlmIChpZCAhPSBudWxsKSB7IHBhcmFtcy5wdXNoKGBpZD0ke2lkfWApOyB9XG5cblx0XHRyZXR1cm4gdGhpcy5yZXN0LmdldChgJHt0aGlzLmJhc2VVcmx9L2xpc3RgLCAuLi5wYXJhbXMpO1xuICB9XG5cbiAgLyoqXG4gICAqIEZpbmQgaW50ZWdyYXRpb24gdGFyZ2V0cyBieSBmaWx0ZXJzXG4gICAqIEBSZXR1cm46IEVudGl0aWVzUmVzcG9uc2U8SW50ZWdyYXRpb25UYXJnZXQ+XG4gICAqL1xuICBmaW5kKHNlYXJjaD86IHN0cmluZywgdHlwZT86IHN0cmluZykge1xuICAgIGNvbnN0IHBhcmFtcyA9IG5ldyBBcnJheSgpO1x0XHRcbiAgICBpZiAoc2VhcmNoICE9IG51bGwpIHsgcGFyYW1zLnB1c2goYHNlYXJjaD0ke3NlYXJjaH1gKTsgfVxuICAgIGlmICh0eXBlICE9IG51bGwpIHsgcGFyYW1zLnB1c2goYHR5cGU9JHt0eXBlfWApOyB9XG5cblx0XHRyZXR1cm4gdGhpcy5yZXN0LmdldChgJHt0aGlzLmJhc2VVcmx9YCwgLi4ucGFyYW1zKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBGaW5kIGFsbCBpbnRlZ3JhdGlvbiBzdGF0dXNcbiAgICogQFJldHVybjogRW50aXRpZXNSZXNwb25zZTxJbnRlZ3JhdGlvblN0YXR1cz5cbiAgICovXG4gIGZpbmRTdGF0dXMoc291cmNlPzogRW50aXR5VHlwZUNvZGUsIGVudGl0eUlkPzogc3RyaW5nLCBpbnRlZ3JhdGlvblRhcmdldElkPzogc3RyaW5nLCBpbnRlZ3JhdGlvbkFjdGlvbklkPzogc3RyaW5nKSB7XG4gICAgY29uc3QgcGFyYW1zID0gbmV3IEFycmF5KCk7XHRcdFxuICAgIGlmIChzb3VyY2UgIT0gbnVsbCkgeyBwYXJhbXMucHVzaChgc291cmNlPSR7c291cmNlfWApOyB9XG4gICAgaWYgKGVudGl0eUlkICE9IG51bGwpIHsgcGFyYW1zLnB1c2goYGVudGl0eUlkPSR7ZW50aXR5SWR9YCk7IH1cbiAgICBpZiAoaW50ZWdyYXRpb25UYXJnZXRJZCAhPSBudWxsKSB7IHBhcmFtcy5wdXNoKGBpbnRlZ3JhdGlvblRhcmdldElkPSR7aW50ZWdyYXRpb25UYXJnZXRJZH1gKTsgfVxuICAgIGlmIChpbnRlZ3JhdGlvbkFjdGlvbklkICE9IG51bGwpIHsgcGFyYW1zLnB1c2goYGludGVncmF0aW9uQWN0aW9uSWQ9JHtpbnRlZ3JhdGlvbkFjdGlvbklkfWApOyB9XG5cblx0XHRyZXR1cm4gdGhpcy5yZXN0LmdldChgJHt0aGlzLmJhc2VVcmx9L3N0YXR1c2AsIC4uLnBhcmFtcyk7XG4gIH1cblxuICAvKipcbiAgICogQ3JlYXRlIG5ldyBpbnRlZ3JhdGlvbiBhY3Rpb25cbiAgICogQFJldHVybjogRW50aXR5UmVzcG9uc2U8SW50ZWdyYXRpb25BY3Rpb24+XG4gICAqL1xuICBjcmVhdGVBY3Rpb24oYm9keT86IEludGVncmF0aW9uQWN0aW9uKSB7XG4gICAgcmV0dXJuIHRoaXMucmVzdC5wb3N0KGAke3RoaXMuYmFzZVVybH0vYWN0aW9uc2AsIHR5cGVvZiBib2R5ID09PSAnb2JqZWN0JyA/IEpTT04uc3RyaW5naWZ5KGJvZHkpIDogYm9keSk7XG4gIH1cblxuICAvKipcbiAgICogVXBkYXRlIGludGVncmF0aW9uIGFjdGlvblxuICAgKiBAUmV0dXJuOiBFbnRpdHlSZXNwb25zZTxJbnRlZ3JhdGlvbkFjdGlvbj5cbiAgICovXG4gIHVwZGF0ZUFjdGlvbihpZD86IHN0cmluZywgYm9keT86IEludGVncmF0aW9uQWN0aW9uKSB7XG4gICAgcmV0dXJuIHRoaXMucmVzdC5wdXQoYCR7dGhpcy5iYXNlVXJsfS9hY3Rpb25zLyR7aWR9YCwgdHlwZW9mIGJvZHkgPT09ICdvYmplY3QnID8gSlNPTi5zdHJpbmdpZnkoYm9keSkgOiBib2R5KTtcbiAgfVxuXG4gIC8qKlxuICAgKiBEZWxldGUgaW50ZWdyYXRpb24gYWN0aW9uIGZyb20gdGhlIHN5c3RlbVxuICAgKiBAUmV0dXJuOiBBY3Rpb25SZXNwb25zZVxuICAgKi9cbiAgZGVsZXRlQWN0aW9uKGlkPzogc3RyaW5nKSB7XG4gICAgcmV0dXJuIHRoaXMucmVzdC5kZWxldGUoYCR7dGhpcy5iYXNlVXJsfS9hY3Rpb25zLyR7aWR9YCk7XG4gIH1cblxuICAvKipcbiAgICogR2V0IHNpbmdsZSBpbnRlZ3JhdGlvbiBhY3Rpb24gYnkgaWRcbiAgICogQFJldHVybjogRW50aXR5UmVzcG9uc2U8SW50ZWdyYXRpb25BY3Rpb24+XG4gICAqL1xuICBnZXRBY3Rpb24oaWQ/OiBzdHJpbmcpIHtcbiAgICByZXR1cm4gdGhpcy5yZXN0LmdldChgJHt0aGlzLmJhc2VVcmx9L2FjdGlvbnMvJHtpZH1gKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBHZXQgaW50ZWdyYXRpb24gYWN0aW9ucyBieSBsaXN0IG9mIGlkc1xuICAgKiBAUmV0dXJuOiBFbnRpdGllc1Jlc3BvbnNlPEludGVncmF0aW9uQWN0aW9uPlxuICAgKi9cbiAgbGlzdEFjdGlvbnMoaWQ/OiBzdHJpbmdbXSkge1xuICAgIGNvbnN0IHBhcmFtcyA9IG5ldyBBcnJheSgpO1x0XHRcbiAgICBpZiAoaWQgIT0gbnVsbCkgeyBwYXJhbXMucHVzaChgaWQ9JHtpZH1gKTsgfVxuXG5cdFx0cmV0dXJuIHRoaXMucmVzdC5nZXQoYCR7dGhpcy5iYXNlVXJsfS9hY3Rpb25zL2xpc3RgLCAuLi5wYXJhbXMpO1xuICB9XG5cbiAgLyoqXG4gICAqIEZpbmQgaW50ZWdyYXRpb24gYWN0aW9ucyBieSBmaWx0ZXJzXG4gICAqIEBSZXR1cm46IEVudGl0aWVzUmVzcG9uc2U8SW50ZWdyYXRpb25BY3Rpb24+XG4gICAqL1xuICBmaW5kQWN0aW9ucyhzZWFyY2g/OiBzdHJpbmcpIHtcbiAgICBjb25zdCBwYXJhbXMgPSBuZXcgQXJyYXkoKTtcdFx0XG4gICAgaWYgKHNlYXJjaCAhPSBudWxsKSB7IHBhcmFtcy5wdXNoKGBzZWFyY2g9JHtzZWFyY2h9YCk7IH1cblxuXHRcdHJldHVybiB0aGlzLnJlc3QuZ2V0KGAke3RoaXMuYmFzZVVybH0vYWN0aW9uc2AsIC4uLnBhcmFtcyk7XG4gIH1cblxuICAvKipcbiAgICogRmluZCBhbGwgaW50ZWdyYXRpb24gYWN0aW9ucyBmb3IgYSBzcGVjaWZpZWQgbGV2ZWwgaW4gdGhlIGZvbGRlciBoaWVyYXJjaHlcbiAgICogQFJldHVybjogRW50aXRpZXNSZXNwb25zZTxJbnRlZ3JhdGlvbkFjdGlvbj5cbiAgICovXG4gIGdldEZvbGRlckFjdGlvbnMoZm9sZGVySWQ/OiBzdHJpbmcpIHtcbiAgICByZXR1cm4gdGhpcy5yZXN0LmdldChgJHt0aGlzLmJhc2VVcmx9L2FjdGlvbnMvZm9sZGVyLyR7Zm9sZGVySWR9YCk7XG4gIH1cblxuICAvKipcbiAgICogVGVzdCBpbnRlZ3JhdGlvbiBhY3Rpb25cbiAgICogQFJldHVybjogRW50aXR5UmVzcG9uc2U8SW50ZWdyYXRpb25BY3Rpb24+XG4gICAqL1xuICB0ZXN0QWN0aW9uKGJvZHk/OiBJbnRlZ3JhdGlvbkFjdGlvbikge1xuICAgIHJldHVybiB0aGlzLnJlc3QucG9zdChgJHt0aGlzLmJhc2VVcmx9L2FjdGlvbnMvdGVzdGAsIHR5cGVvZiBib2R5ID09PSAnb2JqZWN0JyA/IEpTT04uc3RyaW5naWZ5KGJvZHkpIDogYm9keSk7XG4gIH1cblxufVxuIl19