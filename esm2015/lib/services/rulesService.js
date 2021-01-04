import { Injectable, Inject } from '@angular/core';
import { RestUtil } from '../../utils/rest-util';
import { CoreConfig } from '../../config';
import * as i0 from "@angular/core";
import * as i1 from "../../utils/rest-util";
import * as i2 from "../../config";
/**
 * Services for rules actions
 * @RequestHeader X-API-KEY The key to identify the application (portal)
 * @RequestHeader X-ACCESS-TOKEN The token to identify the logged-in user
 */
export class RulesService {
    /**
     * Class constructor
     */
    constructor(config, rest) {
        this.config = config;
        this.rest = rest;
        // URL to web api
        this.baseUrl = '/rules';
        this.baseUrl = this.config.api + this.baseUrl;
    }
    /**
     * Create new rule
     * @Return: EntityResponse<Rule>
     */
    create(body) {
        return this.rest.post(`${this.baseUrl}`, typeof body === 'object' ? JSON.stringify(body) : body);
    }
    /**
     * Update rule
     * @Return: EntityResponse<Rule>
     */
    update(id, body) {
        return this.rest.put(`${this.baseUrl}/${id}`, typeof body === 'object' ? JSON.stringify(body) : body);
    }
    /**
     * Enable list of rules
     * @Return: ActionResponse
     */
    enable(id) {
        const params = new Array();
        if (id != null) {
            params.push(`id=${id}`);
        }
        return this.rest.put(`${this.baseUrl}/enable`, null, ...params);
    }
    /**
     * Disable list of rules
     * @Return: ActionResponse
     */
    disable(id) {
        const params = new Array();
        if (id != null) {
            params.push(`id=${id}`);
        }
        return this.rest.put(`${this.baseUrl}/disable`, null, ...params);
    }
    /**
     * Arm (Enable analytics rules) on group of sensors or all sensors in site (folder)
     * @Return: ActionResponse
     */
    arm(folderId, folderExtId, sensorId, sensorExtId) {
        const params = new Array();
        if (folderId != null) {
            params.push(`folderId=${folderId}`);
        }
        if (folderExtId != null) {
            params.push(`folderExtId=${folderExtId}`);
        }
        if (sensorId != null) {
            params.push(`sensorId=${sensorId}`);
        }
        if (sensorExtId != null) {
            params.push(`sensorExtId=${sensorExtId}`);
        }
        return this.rest.post(`${this.baseUrl}/arm`, null, ...params);
    }
    /**
     * Disarm (Disable analytics rules) on group of sensors or all sensors in site (folder)
     * @Return: ActionResponse
     */
    disarm(folderId, folderExtId, sensorId, sensorExtId) {
        const params = new Array();
        if (folderId != null) {
            params.push(`folderId=${folderId}`);
        }
        if (folderExtId != null) {
            params.push(`folderExtId=${folderExtId}`);
        }
        if (sensorId != null) {
            params.push(`sensorId=${sensorId}`);
        }
        if (sensorExtId != null) {
            params.push(`sensorExtId=${sensorExtId}`);
        }
        return this.rest.post(`${this.baseUrl}/disarm`, null, ...params);
    }
    /**
     * Delete rule from the system
     * @Return: ActionResponse
     */
    delete(id) {
        return this.rest.delete(`${this.baseUrl}/${id}`);
    }
    /**
     * Get single rule by id
     * @Return: EntityResponse<Rule>
     */
    get(id) {
        return this.rest.get(`${this.baseUrl}/${id}`);
    }
    /**
     * Export single rule as Json stream
     * @Return: Rule Json as StreamContent
     */
    exportRule(id, fileName) {
        return this.rest.download(`rules`, `${this.baseUrl}/${id}/export`);
    }
    /**
     * Get rules by list of ids
     * @Return: EntitiesResponse<Rule>
     */
    list(id) {
        const params = new Array();
        if (id != null) {
            params.push(`id=${id}`);
        }
        return this.rest.get(`${this.baseUrl}/list`, ...params);
    }
    /**
     * Get rules Ids by list of external ids
     * @Return: EntitiesResponse<StringKeyValue> (Key=ExternalId, Value=RuleId)
     */
    mapExternalIds(id) {
        const params = new Array();
        if (id != null) {
            params.push(`id=${id}`);
        }
        return this.rest.get(`${this.baseUrl}/map-external-ids`, ...params);
    }
    /**
     * Find rules by filters
     * @Return: QueryResponse<Rule>
     */
    find(folderId, physical, sensorId, search, behaviorType, severity, sort, page, pageSize) {
        const params = new Array();
        if (folderId != null) {
            params.push(`folderId=${folderId}`);
        }
        if (physical != null) {
            params.push(`physical=${physical}`);
        }
        if (sensorId != null) {
            params.push(`sensorId=${sensorId}`);
        }
        if (search != null) {
            params.push(`search=${search}`);
        }
        if (behaviorType != null) {
            params.push(`behaviorType=${behaviorType}`);
        }
        if (severity != null) {
            params.push(`severity=${severity}`);
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
        return this.rest.get(`${this.baseUrl}`, ...params);
    }
    /**
     * Export list of rules and filter
     * @Return: StreamContent
     */
    exportFormat(folderId, sensorId, search, behaviorType, severity, sort, format, fields, fileName) {
        const params = new Array();
        if (folderId != null) {
            params.push(`folderId=${folderId}`);
        }
        if (sensorId != null) {
            params.push(`sensorId=${sensorId}`);
        }
        if (search != null) {
            params.push(`search=${search}`);
        }
        if (behaviorType != null) {
            params.push(`behaviorType=${behaviorType}`);
        }
        if (severity != null) {
            params.push(`severity=${severity}`);
        }
        if (sort != null) {
            params.push(`sort=${sort}`);
        }
        if (format != null) {
            params.push(`format=${format}`);
        }
        if (fields != null) {
            params.push(`fields=${fields}`);
        }
        return this.rest.download(`rules`, `${this.baseUrl}/export`, ...params);
    }
    /**
     * Find anomaly rules by filters
     * @Return: QueryResponse<Rule>
     */
    findAnomalyRules(folderId, physical, sensorId, search, severity, sort, page, pageSize) {
        const params = new Array();
        if (folderId != null) {
            params.push(`folderId=${folderId}`);
        }
        if (physical != null) {
            params.push(`physical=${physical}`);
        }
        if (sensorId != null) {
            params.push(`sensorId=${sensorId}`);
        }
        if (search != null) {
            params.push(`search=${search}`);
        }
        if (severity != null) {
            params.push(`severity=${severity}`);
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
        return this.rest.get(`${this.baseUrl}/anomaly`, ...params);
    }
    /**
     * Get rules specifications available by account features
     * @Return: EntitiesResponse<RuleSpec>
     */
    getSpecs() {
        return this.rest.get(`${this.baseUrl}/spec`);
    }
    /**
     * Pause analytics detections on site (folder) for a specified time frame
     * @Return: ActionResponse
     */
    pause(folderId, folderExtId, from, to) {
        const params = new Array();
        if (folderId != null) {
            params.push(`folderId=${folderId}`);
        }
        if (folderExtId != null) {
            params.push(`folderExtId=${folderExtId}`);
        }
        if (from != null) {
            params.push(`from=${from}`);
        }
        if (to != null) {
            params.push(`to=${to}`);
        }
        return this.rest.post(`${this.baseUrl}/pause`, null, ...params);
    }
    /**
     * Resume analytics on site (folder) that was paused
     * @Return: ActionResponse
     */
    resume(folderId, folderExtId) {
        const params = new Array();
        if (folderId != null) {
            params.push(`folderId=${folderId}`);
        }
        if (folderExtId != null) {
            params.push(`folderExtId=${folderExtId}`);
        }
        return this.rest.post(`${this.baseUrl}/resume`, null, ...params);
    }
}
/** @nocollapse */ RulesService.ɵfac = function RulesService_Factory(t) { return new (t || RulesService)(i0.ɵɵinject('config'), i0.ɵɵinject(i1.RestUtil)); };
/** @nocollapse */ RulesService.ɵprov = i0.ɵɵdefineInjectable({ token: RulesService, factory: RulesService.ɵfac });
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(RulesService, [{
        type: Injectable
    }], function () { return [{ type: i2.CoreConfig, decorators: [{
                type: Inject,
                args: ['config']
            }] }, { type: i1.RestUtil }]; }, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicnVsZXNTZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6Ii4uLy4uLy4uL3Byb2plY3RzL25nLWNvcmUtbGliL3NyYy8iLCJzb3VyY2VzIjpbImxpYi9zZXJ2aWNlcy9ydWxlc1NlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDbkQsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLHVCQUF1QixDQUFDO0FBQ2pELE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxjQUFjLENBQUM7Ozs7QUFPMUM7Ozs7R0FJRztBQUVILE1BQU0sT0FBTyxZQUFZO0lBS3ZCOztPQUVHO0lBQ0gsWUFBc0MsTUFBa0IsRUFBVSxJQUFjO1FBQTFDLFdBQU0sR0FBTixNQUFNLENBQVk7UUFBVSxTQUFJLEdBQUosSUFBSSxDQUFVO1FBTmhGLGlCQUFpQjtRQUNULFlBQU8sR0FBRyxRQUFRLENBQUM7UUFNekIsSUFBSSxDQUFDLE9BQU8sR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDLEdBQUcsR0FBRyxJQUFJLENBQUMsT0FBTyxDQUFDO0lBQ2hELENBQUM7SUFHRDs7O09BR0c7SUFDSCxNQUFNLENBQUMsSUFBVztRQUNoQixPQUFPLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsSUFBSSxDQUFDLE9BQU8sRUFBRSxFQUFFLE9BQU8sSUFBSSxLQUFLLFFBQVEsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDbkcsQ0FBQztJQUVEOzs7T0FHRztJQUNILE1BQU0sQ0FBQyxFQUFXLEVBQUUsSUFBVztRQUM3QixPQUFPLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLEdBQUcsSUFBSSxDQUFDLE9BQU8sSUFBSSxFQUFFLEVBQUUsRUFBRSxPQUFPLElBQUksS0FBSyxRQUFRLENBQUMsQ0FB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QUFDLFFBQWlCLEVBQUUsUUFBa0IsRUFBRSxRQUFpQixFQUFFLE1BQWUsRUFBRSxZQUFpQyxFQUFFLFFBQTZCLEVBQUUsSUFBYSxFQUFFLElBQWEsRUFBRSxRQUFpQjtRQUMvTCxNQUFNLE1BQU0sR0FBRyxJQUFJLEtBQUssRUFBRSxDQUFDO1FBQzNCLElBQUksUUFBUSxJQUFJLElBQUksRUFBRTtZQUFFLE1BQU0sQ0FBQyxJQUFJLENBQUMsWUFBWSxRQUFRLEVBQUUsQ0FBQyxDQUFDO1NBQUU7UUFDOUQsSUFBSSxRQUFRLElBQUksSUFBSSxFQUFFO1lBQUUsTUFBTSxDQUFDLElBQUksQ0FBQyxZQUFZLFFBQVEsRUFBRSxDQUFDLENBQUM7U0FBRTtRQUM5RCxJQUFJLFFBQVEsSUFBSSxJQUFJLEVBQUU7WUFBRSxNQUFNLENBQUMsSUFBSSxDQUFDLFlBQVksUUFBUSxFQUFFLENBQUMsQ0FBQztTQUFFO1FBQzlELElBQUksTUFBTSxJQUFJLElBQUksRUFBRTtZQUFFLE1BQU0sQ0FBQyxJQUFJLENBQUMsVUFBVSxNQUFNLEVBQUUsQ0FBQyxDQUFDO1NBQUU7UUFDeEQsSUFBSSxZQUFZLElBQUksSUFBSSxFQUFFO1lBQUUsTUFBTSxDQUFDLElBQUksQ0FBQyxnQkFBZ0IsWUFBWSxFQUFFLENBQUMsQ0FBQztTQUFFO1FBQzFFLElBQUksUUFBUSxJQUFJLElBQUksRUFBRTtZQUFFLE1BQU0sQ0FBQyxJQUFJLENBQUMsWUFBWSxRQUFRLEVBQUUsQ0FBQyxDQUFDO1NBQUU7UUFDOUQsSUFBSSxJQUFJLElBQUksSUFBSSxFQUFFO1lBQUUsTUFBTSxDQUFDLElBQUksQ0FBQyxRQUFRLElBQUksRUFBRSxDQUFDLENBQUM7U0FBRTtRQUNsRCxJQUFJLElBQUksSUFBSSxJQUFJLEVBQUU7WUFBRSxNQUFNLENBQUMsSUFBSSxDQUFDLFFBQVEsSUFBSSxFQUFFLENBQUMsQ0FBQztTQUFFO1FBQ2xELElBQUksUUFBUSxJQUFJLElBQUksRUFBRTtZQUFFLE1BQU0sQ0FBQyxJQUFJLENBQUMsWUFBWSxRQUFRLEVBQUUsQ0FB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LE1BQU0sQ0FBQyxRQUFpQixFQUFFLFdBQW9CO1FBQzVDLE1BQU0sTUFBTSxHQUFHLElBQUksS0FBSyxFQUFFLENBQUM7UUFDM0IsSUFBSSxRQUFRLElBQUksSUFBSSxFQUFFO1lBQUUsTUFBTSxDQUFDLElBQUksQ0FBQyxZQUFZLFFBQVEsRUFBRSxDQUFDLENBQUM7U0FBRTtRQUM5RCxJQUFJLFdBQVcsSUFBSSxJQUFJLEVBQUU7WUFBRSxNQUFNLENBQUMsSUFBSSxDQUFDLGVBQWUsV0FBVyxFQUFFLENBQUMsQ0FBQztTQUFFO1FBRXpFLE9BQU8sSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxJQUFJLENBQUMsT0FBTyxTQUFTLEVBQUUsSUFBSSxFQUFFLEdBQUcsTUFBTSxDQUFDLENBQUM7SUFDakUsQ0FBQzs7MkZBcE5VLFlBQVksY0FRSCxRQUFRO3VFQVJqQixZQUFZLFdBQVosWUFBWTtrREFBWixZQUFZO2NBRHhCLFVBQVU7O3NCQVNJLE1BQU07dUJBQUMsUUFBUSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUsIEluamVjdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgUmVzdFV0aWwgfSBmcm9tICcuLi8uLi91dGlscy9yZXN0LXV0aWwnO1xuaW1wb3J0IHsgQ29yZUNvbmZpZyB9IGZyb20gJy4uLy4uL2NvbmZpZyc7XG5cbmltcG9ydCB7IFJ1bGUgfSBmcm9tICcuLi9lbnRpdGllcy9SdWxlJztcbmltcG9ydCB7IEJlaGF2aW9yVHlwZUNvZGUgfSBmcm9tICcuLi9lbnVtcy9CZWhhdmlvclR5cGVDb2RlJztcbmltcG9ydCB7IFNldmVyaXR5VHlwZUNvZGUgfSBmcm9tICcuLi9lbnVtcy9TZXZlcml0eVR5cGVDb2RlJztcblxuXG4vKipcbiAqIFNlcnZpY2VzIGZvciBydWxlcyBhY3Rpb25zXG4gKiBAUmVxdWVzdEhlYWRlciBYLUFQSS1LRVkgVGhlIGtleSB0byBpZGVudGlmeSB0aGUgYXBwbGljYXRpb24gKHBvcnRhbClcbiAqIEBSZXF1ZXN0SGVhZGVyIFgtQUNDRVNTLVRPS0VOIFRoZSB0b2tlbiB0byBpZGVudGlmeSB0aGUgbG9nZ2VkLWluIHVzZXIgXG4gKi9cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBSdWxlc1NlcnZpY2Uge1xuXG4gIC8vIFVSTCB0byB3ZWIgYXBpXG4gIHByaXZhdGUgYmFzZVVybCA9ICcvcnVsZXMnO1xuXG4gIC8qKlxuICAgKiBDbGFzcyBjb25zdHJ1Y3RvclxuICAgKi9cbiAgY29uc3RydWN0b3IoQEluamVjdCgnY29uZmlnJykgcHJpdmF0ZSBjb25maWc6IENvcmVDb25maWcsIHByaXZhdGUgcmVzdDogUmVzdFV0aWwpIHtcbiAgICB0aGlzLmJhc2VVcmwgPSB0aGlzLmNvbmZpZy5hcGkgKyB0aGlzLmJhc2VVcmw7XG4gIH1cblxuXG4gIC8qKlxuICAgKiBDcmVhdGUgbmV3IHJ1bGVcbiAgICogQFJldHVybjogRW50aXR5UmVzcG9uc2U8UnVsZT5cbiAgICovXG4gIGNyZWF0ZShib2R5PzogUnVsZSkge1xuICAgIHJldHVybiB0aGlzLnJlc3QucG9zdChgJHt0aGlzLmJhc2VVcmx9YCwgdHlwZW9mIGJvZHkgPT09ICdvYmplY3QnID8gSlNPTi5zdHJpbmdpZnkoYm9keSkgOiBib2R5KTtcbiAgfVxuXG4gIC8qKlxuICAgKiBVcGRhdGUgcnVsZVxuICAgKiBAUmV0dXJuOiBFbnRpdHlSZXNwb25zZTxSdWxlPlxuICAgKi9cbiAgdXBkYXRlKGlkPzogc3RyaW5nLCBib2R5PzogUnVsZSkge1xuICAgIHJldHVybiB0aGlzLnJlc3QucHV0KGAke3RoaXMuYmFzZVVybH0vJHtpZH1gLCB0eXBlb2YgYm9keSA9PT0gJ29iamVjdCcgPyBKU09OLnN0cmluZ2lmeShib2R5KSA6IGJvZHkpO1xuICB9XG5cbiAgLyoqXG4gICAqIEVuYWJsZSBsaXN0IG9mIHJ1bGVzXG4gICAqIEBSZXR1cm46IEFjdGlvblJlc3BvbnNlXG4gICAqL1xuICBlbmFibGUoaWQ/OiBzdHJpbmdbXSkge1xuICAgIGNvbnN0IHBhcmFtcyA9IG5ldyBBcnJheSgpO1x0XHRcbiAgICBpZiAoaWQgIT0gbnVsbCkgeyBwYXJhbXMucHVzaChgaWQ9JHtpZH1gKTsgfVxuXG5cdFx0cmV0dXJuIHRoaXMucmVzdC5wdXQoYCR7dGhpcy5iYXNlVXJsfS9lbmFibGVgLCBudWxsLCAuLi5wYXJhbXMpO1xuICB9XG5cbiAgLyoqXG4gICAqIERpc2FibGUgbGlzdCBvZiBydWxlc1xuICAgKiBAUmV0dXJuOiBBY3Rpb25SZXNwb25zZVxuICAgKi9cbiAgZGlzYWJsZShpZD86IHN0cmluZ1tdKSB7XG4gICAgY29uc3QgcGFyYW1zID0gbmV3IEFycmF5KCk7XHRcdFxuICAgIGlmIChpZCAhPSBudWxsKSB7IHBhcmFtcy5wdXNoKGBpZD0ke2lkfWApOyB9XG5cblx0XHRyZXR1cm4gdGhpcy5yZXN0LnB1dChgJHt0aGlzLmJhc2VVcmx9L2Rpc2FibGVgLCBudWxsLCAuLi5wYXJhbXMpO1xuICB9XG5cbiAgLyoqXG4gICAqIEFybSAoRW5hYmxlIGFuYWx5dGljcyBydWxlcykgb24gZ3JvdXAgb2Ygc2Vuc29ycyBvciBhbGwgc2Vuc29ycyBpbiBzaXRlIChmb2xkZXIpXG4gICAqIEBSZXR1cm46IEFjdGlvblJlc3BvbnNlXG4gICAqL1xuICBhcm0oZm9sZGVySWQ/OiBzdHJpbmcsIGZvbGRlckV4dElkPzogc3RyaW5nLCBzZW5zb3JJZD86IHN0cmluZ1tdLCBzZW5zb3JFeHRJZD86IHN0cmluZ1tdKSB7XG4gICAgY29uc3QgcGFyYW1zID0gbmV3IEFycmF5KCk7XHRcdFxuICAgIGlmIChmb2xkZXJJZCAhPSBudWxsKSB7IHBhcmFtcy5wdXNoKGBmb2xkZXJJZD0ke2ZvbGRlcklkfWApOyB9XG4gICAgaWYgKGZvbGRlckV4dElkICE9IG51bGwpIHsgcGFyYW1zLnB1c2goYGZvbGRlckV4dElkPSR7Zm9sZGVyRXh0SWR9YCk7IH1cbiAgICBpZiAoc2Vuc29ySWQgIT0gbnVsbCkgeyBwYXJhbXMucHVzaChgc2Vuc29ySWQ9JHtzZW5zb3JJZH1gKTsgfVxuICAgIGlmIChzZW5zb3JFeHRJZCAhPSBudWxsKSB7IHBhcmFtcy5wdXNoKGBzZW5zb3JFeHRJZD0ke3NlbnNvckV4dElkfWApOyB9XG5cblx0XHRyZXR1cm4gdGhpcy5yZXN0LnBvc3QoYCR7dGhpcy5iYXNlVXJsfS9hcm1gLCBudWxsLCAuLi5wYXJhbXMpO1xuICB9XG5cbiAgLyoqXG4gICAqIERpc2FybSAoRGlzYWJsZSBhbmFseXRpY3MgcnVsZXMpIG9uIGdyb3VwIG9mIHNlbnNvcnMgb3IgYWxsIHNlbnNvcnMgaW4gc2l0ZSAoZm9sZGVyKVxuICAgKiBAUmV0dXJuOiBBY3Rpb25SZXNwb25zZVxuICAgKi9cbiAgZGlzYXJtKGZvbGRlcklkPzogc3RyaW5nLCBmb2xkZXJFeHRJZD86IHN0cmluZywgc2Vuc29ySWQ/OiBzdHJpbmdbXSwgc2Vuc29yRXh0SWQ/OiBzdHJpbmdbXSkge1xuICAgIGNvbnN0IHBhcmFtcyA9IG5ldyBBcnJheSgpO1x0XHRcbiAgICBpZiAoZm9sZGVySWQgIT0gbnVsbCkgeyBwYXJhbXMucHVzaChgZm9sZGVySWQ9JHtmb2xkZXJJZH1gKTsgfVxuICAgIGlmIChmb2xkZXJFeHRJZCAhPSBudWxsKSB7IHBhcmFtcy5wdXNoKGBmb2xkZXJFeHRJZD0ke2ZvbGRlckV4dElkfWApOyB9XG4gICAgaWYgKHNlbnNvcklkICE9IG51bGwpIHsgcGFyYW1zLnB1c2goYHNlbnNvcklkPSR7c2Vuc29ySWR9YCk7IH1cbiAgICBpZiAoc2Vuc29yRXh0SWQgIT0gbnVsbCkgeyBwYXJhbXMucHVzaChgc2Vuc29yRXh0SWQ9JHtzZW5zb3JFeHRJZH1gKTsgfVxuXG5cdFx0cmV0dXJuIHRoaXMucmVzdC5wb3N0KGAke3RoaXMuYmFzZVVybH0vZGlzYXJtYCwgbnVsbCwgLi4ucGFyYW1zKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBEZWxldGUgcnVsZSBmcm9tIHRoZSBzeXN0ZW1cbiAgICogQFJldHVybjogQWN0aW9uUmVzcG9uc2VcbiAgICovXG4gIGRlbGV0ZShpZD86IHN0cmluZykge1xuICAgIHJldHVybiB0aGlzLnJlc3QuZGVsZXRlKGAke3RoaXMuYmFzZVVybH0vJHtpZH1gKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBHZXQgc2luZ2xlIHJ1bGUgYnkgaWRcbiAgICogQFJldHVybjogRW50aXR5UmVzcG9uc2U8UnVsZT5cbiAgICovXG4gIGdldChpZD86IHN0cmluZykge1xuICAgIHJldHVybiB0aGlzLnJlc3QuZ2V0KGAke3RoaXMuYmFzZVVybH0vJHtpZH1gKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBFeHBvcnQgc2luZ2xlIHJ1bGUgYXMgSnNvbiBzdHJlYW1cbiAgICogQFJldHVybjogUnVsZSBKc29uIGFzIFN0cmVhbUNvbnRlbnRcbiAgICovXG4gIGV4cG9ydFJ1bGUoaWQ/OiBzdHJpbmcsIGZpbGVOYW1lPzogc3RyaW5nKSB7XG4gICAgcmV0dXJuIHRoaXMucmVzdC5kb3dubG9hZChgcnVsZXNgLGAke3RoaXMuYmFzZVVybH0vJHtpZH0vZXhwb3J0YCk7XG4gIH1cblxuICAvKipcbiAgICogR2V0IHJ1bGVzIGJ5IGxpc3Qgb2YgaWRzXG4gICAqIEBSZXR1cm46IEVudGl0aWVzUmVzcG9uc2U8UnVsZT5cbiAgICovXG4gIGxpc3QoaWQ/OiBzdHJpbmdbXSkge1xuICAgIGNvbnN0IHBhcmFtcyA9IG5ldyBBcnJheSgpO1x0XHRcbiAgICBpZiAoaWQgIT0gbnVsbCkgeyBwYXJhbXMucHVzaChgaWQ9JHtpZH1gKTsgfVxuXG5cdFx0cmV0dXJuIHRoaXMucmVzdC5nZXQoYCR7dGhpcy5iYXNlVXJsfS9saXN0YCwgLi4ucGFyYW1zKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBHZXQgcnVsZXMgSWRzIGJ5IGxpc3Qgb2YgZXh0ZXJuYWwgaWRzXG4gICAqIEBSZXR1cm46IEVudGl0aWVzUmVzcG9uc2U8U3RyaW5nS2V5VmFsdWU+IChLZXk9RXh0ZXJuYWxJZCwgVmFsdWU9UnVsZUlkKVxuICAgKi9cbiAgbWFwRXh0ZXJuYWxJZHMoaWQ/OiBzdHJpbmdbXSkge1xuICAgIGNvbnN0IHBhcmFtcyA9IG5ldyBBcnJheSgpO1x0XHRcbiAgICBpZiAoaWQgIT0gbnVsbCkgeyBwYXJhbXMucHVzaChgaWQ9JHtpZH1gKTsgfVxuXG5cdFx0cmV0dXJuIHRoaXMucmVzdC5nZXQoYCR7dGhpcy5iYXNlVXJsfS9tYXAtZXh0ZXJuYWwtaWRzYCwgLi4ucGFyYW1zKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBGaW5kIHJ1bGVzIGJ5IGZpbHRlcnNcbiAgICogQFJldHVybjogUXVlcnlSZXNwb25zZTxSdWxlPlxuICAgKi9cbiAgZmluZChmb2xkZXJJZD86IHN0cmluZywgcGh5c2ljYWw/OiBib29sZWFuLCBzZW5zb3JJZD86IHN0cmluZywgc2VhcmNoPzogc3RyaW5nLCBiZWhhdmlvclR5cGU/OiBCZWhhdmlvclR5cGVDb2RlW10sIHNldmVyaXR5PzogU2V2ZXJpdHlUeXBlQ29kZVtdLCBzb3J0Pzogc3RyaW5nLCBwYWdlPzogbnVtYmVyLCBwYWdlU2l6ZT86IG51bWJlcikge1xuICAgIGNvbnN0IHBhcmFtcyA9IG5ldyBBcnJheSgpO1x0XHRcbiAgICBpZiAoZm9sZGVySWQgIT0gbnVsbCkgeyBwYXJhbXMucHVzaChgZm9sZGVySWQ9JHtmb2xkZXJJZH1gKTsgfVxuICAgIGlmIChwaHlzaWNhbCAhPSBudWxsKSB7IHBhcmFtcy5wdXNoKGBwaHlzaWNhbD0ke3BoeXNpY2FsfWApOyB9XG4gICAgaWYgKHNlbnNvcklkICE9IG51bGwpIHsgcGFyYW1zLnB1c2goYHNlbnNvcklkPSR7c2Vuc29ySWR9YCk7IH1cbiAgICBpZiAoc2VhcmNoICE9IG51bGwpIHsgcGFyYW1zLnB1c2goYHNlYXJjaD0ke3NlYXJjaH1gKTsgfVxuICAgIGlmIChiZWhhdmlvclR5cGUgIT0gbnVsbCkgeyBwYXJhbXMucHVzaChgYmVoYXZpb3JUeXBlPSR7YmVoYXZpb3JUeXBlfWApOyB9XG4gICAgaWYgKHNldmVyaXR5ICE9IG51bGwpIHsgcGFyYW1zLnB1c2goYHNldmVyaXR5PSR7c2V2ZXJpdHl9YCk7IH1cbiAgICBpZiAoc29ydCAhPSBudWxsKSB7IHBhcmFtcy5wdXNoKGBzb3J0PSR7c29ydH1gKTsgfVxuICAgIGlmIChwYWdlICE9IG51bGwpIHsgcGFyYW1zLnB1c2goYHBhZ2U9JHtwYWdlfWApOyB9XG4gICAgaWYgKHBhZ2VTaXplICE9IG51bGwpIHsgcGFyYW1zLnB1c2goYHBhZ2VTaXplPSR7cGFnZVNpemV9YCk7IH1cblxuXHRcdHJldHVybiB0aGlzLnJlc3QuZ2V0KGAke3RoaXMuYmFzZVVybH1gLCAuLi5wYXJhbXMpO1xuICB9XG5cbiAgLyoqXG4gICAqIEV4cG9ydCBsaXN0IG9mIHJ1bGVzIGFuZCBmaWx0ZXJcbiAgICogQFJldHVybjogU3RyZWFtQ29udGVudFxuICAgKi9cbiAgZXhwb3J0Rm9ybWF0KGZvbGRlcklkPzogc3RyaW5nLCBzZW5zb3JJZD86IHN0cmluZywgc2VhcmNoPzogc3RyaW5nLCBiZWhhdmlvclR5cGU/OiBCZWhhdmlvclR5cGVDb2RlW10sIHNldmVyaXR5PzogU2V2ZXJpdHlUeXBlQ29kZVtdLCBzb3J0Pzogc3RyaW5nLCBmb3JtYXQ/OiBzdHJpbmcsIGZpZWxkcz86IHN0cmluZ1tdLCBmaWxlTmFtZT86IHN0cmluZykge1xuICAgIGNvbnN0IHBhcmFtcyA9IG5ldyBBcnJheSgpO1x0XHRcbiAgICBpZiAoZm9sZGVySWQgIT0gbnVsbCkgeyBwYXJhbXMucHVzaChgZm9sZGVySWQ9JHtmb2xkZXJJZH1gKTsgfVxuICAgIGlmIChzZW5zb3JJZCAhPSBudWxsKSB7IHBhcmFtcy5wdXNoKGBzZW5zb3JJZD0ke3NlbnNvcklkfWApOyB9XG4gICAgaWYgKHNlYXJjaCAhPSBudWxsKSB7IHBhcmFtcy5wdXNoKGBzZWFyY2g9JHtzZWFyY2h9YCk7IH1cbiAgICBpZiAoYmVoYXZpb3JUeXBlICE9IG51bGwpIHsgcGFyYW1zLnB1c2goYGJlaGF2aW9yVHlwZT0ke2JlaGF2aW9yVHlwZX1gKTsgfVxuICAgIGlmIChzZXZlcml0eSAhPSBudWxsKSB7IHBhcmFtcy5wdXNoKGBzZXZlcml0eT0ke3NldmVyaXR5fWApOyB9XG4gICAgaWYgKHNvcnQgIT0gbnVsbCkgeyBwYXJhbXMucHVzaChgc29ydD0ke3NvcnR9YCk7IH1cbiAgICBpZiAoZm9ybWF0ICE9IG51bGwpIHsgcGFyYW1zLnB1c2goYGZvcm1hdD0ke2Zvcm1hdH1gKTsgfVxuICAgIGlmIChmaWVsZHMgIT0gbnVsbCkgeyBwYXJhbXMucHVzaChgZmllbGRzPSR7ZmllbGRzfWApOyB9XG5cblx0XHRyZXR1cm4gdGhpcy5yZXN0LmRvd25sb2FkKGBydWxlc2AsYCR7dGhpcy5iYXNlVXJsfS9leHBvcnRgLCAuLi5wYXJhbXMpO1xuICB9XG5cbiAgLyoqXG4gICAqIEZpbmQgYW5vbWFseSBydWxlcyBieSBmaWx0ZXJzXG4gICAqIEBSZXR1cm46IFF1ZXJ5UmVzcG9uc2U8UnVsZT5cbiAgICovXG4gIGZpbmRBbm9tYWx5UnVsZXMoZm9sZGVySWQ/OiBzdHJpbmcsIHBoeXNpY2FsPzogYm9vbGVhbiwgc2Vuc29ySWQ/OiBzdHJpbmcsIHNlYXJjaD86IHN0cmluZywgc2V2ZXJpdHk/OiBTZXZlcml0eVR5cGVDb2RlW10sIHNvcnQ/OiBzdHJpbmcsIHBhZ2U/OiBudW1iZXIsIHBhZ2VTaXplPzogbnVtYmVyKSB7XG4gICAgY29uc3QgcGFyYW1zID0gbmV3IEFycmF5KCk7XHRcdFxuICAgIGlmIChmb2xkZXJJZCAhPSBudWxsKSB7IHBhcmFtcy5wdXNoKGBmb2xkZXJJZD0ke2ZvbGRlcklkfWApOyB9XG4gICAgaWYgKHBoeXNpY2FsICE9IG51bGwpIHsgcGFyYW1zLnB1c2goYHBoeXNpY2FsPSR7cGh5c2ljYWx9YCk7IH1cbiAgICBpZiAoc2Vuc29ySWQgIT0gbnVsbCkgeyBwYXJhbXMucHVzaChgc2Vuc29ySWQ9JHtzZW5zb3JJZH1gKTsgfVxuICAgIGlmIChzZWFyY2ggIT0gbnVsbCkgeyBwYXJhbXMucHVzaChgc2VhcmNoPSR7c2VhcmNofWApOyB9XG4gICAgaWYgKHNldmVyaXR5ICE9IG51bGwpIHsgcGFyYW1zLnB1c2goYHNldmVyaXR5PSR7c2V2ZXJpdHl9YCk7IH1cbiAgICBpZiAoc29ydCAhPSBudWxsKSB7IHBhcmFtcy5wdXNoKGBzb3J0PSR7c29ydH1gKTsgfVxuICAgIGlmIChwYWdlICE9IG51bGwpIHsgcGFyYW1zLnB1c2goYHBhZ2U9JHtwYWdlfWApOyB9XG4gICAgaWYgKHBhZ2VTaXplICE9IG51bGwpIHsgcGFyYW1zLnB1c2goYHBhZ2VTaXplPSR7cGFnZVNpemV9YCk7IH1cblxuXHRcdHJldHVybiB0aGlzLnJlc3QuZ2V0KGAke3RoaXMuYmFzZVVybH0vYW5vbWFseWAsIC4uLnBhcmFtcyk7XG4gIH1cblxuICAvKipcbiAgICogR2V0IHJ1bGVzIHNwZWNpZmljYXRpb25zIGF2YWlsYWJsZSBieSBhY2NvdW50IGZlYXR1cmVzXG4gICAqIEBSZXR1cm46IEVudGl0aWVzUmVzcG9uc2U8UnVsZVNwZWM+XG4gICAqL1xuICBnZXRTcGVjcygpIHtcbiAgICByZXR1cm4gdGhpcy5yZXN0LmdldChgJHt0aGlzLmJhc2VVcmx9L3NwZWNgKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBQYXVzZSBhbmFseXRpY3MgZGV0ZWN0aW9ucyBvbiBzaXRlIChmb2xkZXIpIGZvciBhIHNwZWNpZmllZCB0aW1lIGZyYW1lXG4gICAqIEBSZXR1cm46IEFjdGlvblJlc3BvbnNlXG4gICAqL1xuICBwYXVzZShmb2xkZXJJZD86IHN0cmluZywgZm9sZGVyRXh0SWQ/OiBzdHJpbmcsIGZyb20/OiBudW1iZXIsIHRvPzogbnVtYmVyKSB7XG4gICAgY29uc3QgcGFyYW1zID0gbmV3IEFycmF5KCk7XHRcdFxuICAgIGlmIChmb2xkZXJJZCAhPSBudWxsKSB7IHBhcmFtcy5wdXNoKGBmb2xkZXJJZD0ke2ZvbGRlcklkfWApOyB9XG4gICAgaWYgKGZvbGRlckV4dElkICE9IG51bGwpIHsgcGFyYW1zLnB1c2goYGZvbGRlckV4dElkPSR7Zm9sZGVyRXh0SWR9YCk7IH1cbiAgICBpZiAoZnJvbSAhPSBudWxsKSB7IHBhcmFtcy5wdXNoKGBmcm9tPSR7ZnJvbX1gKTsgfVxuICAgIGlmICh0byAhPSBudWxsKSB7IHBhcmFtcy5wdXNoKGB0bz0ke3RvfWApOyB9XG5cblx0XHRyZXR1cm4gdGhpcy5yZXN0LnBvc3QoYCR7dGhpcy5iYXNlVXJsfS9wYXVzZWAsIG51bGwsIC4uLnBhcmFtcyk7XG4gIH1cblxuICAvKipcbiAgICogUmVzdW1lIGFuYWx5dGljcyBvbiBzaXRlIChmb2xkZXIpIHRoYXQgd2FzIHBhdXNlZFxuICAgKiBAUmV0dXJuOiBBY3Rpb25SZXNwb25zZVxuICAgKi9cbiAgcmVzdW1lKGZvbGRlcklkPzogc3RyaW5nLCBmb2xkZXJFeHRJZD86IHN0cmluZykge1xuICAgIGNvbnN0IHBhcmFtcyA9IG5ldyBBcnJheSgpO1x0XHRcbiAgICBpZiAoZm9sZGVySWQgIT0gbnVsbCkgeyBwYXJhbXMucHVzaChgZm9sZGVySWQ9JHtmb2xkZXJJZH1gKTsgfVxuICAgIGlmIChmb2xkZXJFeHRJZCAhPSBudWxsKSB7IHBhcmFtcy5wdXNoKGBmb2xkZXJFeHRJZD0ke2ZvbGRlckV4dElkfWApOyB9XG5cblx0XHRyZXR1cm4gdGhpcy5yZXN0LnBvc3QoYCR7dGhpcy5iYXNlVXJsfS9yZXN1bWVgLCBudWxsLCAuLi5wYXJhbXMpO1xuICB9XG5cbn1cbiJdfQ==