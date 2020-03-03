import { Injectable, Inject } from '@angular/core';
import { RestUtil } from '../../utils/rest-util';
import { CoreConfig } from '../../config';
import * as i0 from "@angular/core";
import * as i1 from "../../utils/rest-util";
import * as i2 from "../../config";
/**
 * List of configurations related actions for system administrator only
 * @RequestHeader X-API-KEY The key to identify the application (console)
 * @RequestHeader X-ACCESS-TOKEN The token to identify the logged-in user
 */
export class SysConfigurationsService {
    /**
     * Class constructor
     */
    constructor(config, rest) {
        this.config = config;
        this.rest = rest;
        // URL to web api
        this.baseUrl = '/sys/configurations';
        this.baseUrl = this.config.api + this.baseUrl;
    }
    /**
     * Create new configuration in the system
     * The response includes access token valid for 20 minutes. The client side should renew the token before expiration using refresh-token method
     * @Return: EntityResponse<Configuration>
     */
    create(body) {
        return this.rest.post(`${this.baseUrl}`, typeof body === 'object' ? JSON.stringify(body) : body);
    }
    /**
     * Update configuration in the system
     * @Return: EntityResponse<Configuration>
     */
    update(id, body) {
        return this.rest.put(`${this.baseUrl}/${id}`, typeof body === 'object' ? JSON.stringify(body) : body);
    }
    /**
     * Delete configuration by id
     * @Return: ActionResponse
     */
    delete(id) {
        return this.rest.delete(`${this.baseUrl}/${id}`);
    }
    /**
     * Set default version for configuration
     * @Return: ActionResponse
     */
    setDefaultVersion(id, versionId) {
        return this.rest.put(`${this.baseUrl}/${id}/default-version/${versionId}`, null);
    }
    /**
     * Get configuration by id
     * @Return: EntityResponse<Configuration>
     */
    get(id) {
        return this.rest.get(`${this.baseUrl}/${id}`);
    }
    /**
     * Get list of configurations by filter
     * @Return: QueryResponse<Configuration>
     */
    find(target, search, sort, page, pageSize) {
        const params = new Array();
        if (target != null) {
            params.push(`target=${target}`);
        }
        if (search != null) {
            params.push(`search=${search}`);
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
     * Create new configuration version in the system
     * @Return: EntityResponse<ConfigurationVersion>
     */
    createVersion(id, body) {
        return this.rest.post(`${this.baseUrl}/${id}/versions`, typeof body === 'object' ? JSON.stringify(body) : body);
    }
    /**
     * Update configuration version in the system
     * @Return: EntityResponse<ConfigurationVersion>
     */
    updateVersion(id, body) {
        return this.rest.put(`${this.baseUrl}/${id}/versions`, typeof body === 'object' ? JSON.stringify(body) : body);
    }
    /**
     * Duplicate configuration version from existing one
     * @Return: EntityResponse<ConfigurationVersion>
     */
    duplicateVersion(id, versionId) {
        return this.rest.post(`${this.baseUrl}/${id}/versions/${versionId}`, null);
    }
    /**
     * Delete configuration version by id
     * @Return: ActionResponse
     */
    deleteVersion(id, versionId) {
        return this.rest.delete(`${this.baseUrl}/${id}/versions/${versionId}`);
    }
    /**
     * Get specific configuration version
     * @Return: EntityResponse<ConfigurationVersion>
     */
    getVersion(id, versionId) {
        return this.rest.get(`${this.baseUrl}/${id}/versions/${versionId}`);
    }
    /**
     * Get all versions of specific configuration
     * @Return: EntitiesResponse<ConfigurationVersion>
     */
    getVersions(id) {
        return this.rest.get(`${this.baseUrl}/${id}/versions`);
    }
    /**
     * Create new configuration template in the system
     * @Return: EntityResponse<ConfigurationTemplate>
     */
    createTemplate(body) {
        return this.rest.post(`${this.baseUrl}/templates`, typeof body === 'object' ? JSON.stringify(body) : body);
    }
    /**
     * Update configuration template in the system
     * @Return: EntityResponse<ConfigurationTemplate>
     */
    updateTemplate(id, body) {
        return this.rest.put(`${this.baseUrl}/templates/${id}`, typeof body === 'object' ? JSON.stringify(body) : body);
    }
    /**
     * Delete configuration template by id
     * @Return: ActionResponse
     */
    deleteTemplate(id) {
        return this.rest.delete(`${this.baseUrl}/templates/${id}`);
    }
    /**
     * Get configuration template by id
     * @Return: EntityResponse<ConfigurationTemplate>
     */
    getTemplate(id) {
        return this.rest.get(`${this.baseUrl}/templates/${id}`);
    }
    /**
     * Get list of configuration templates
     * @Return: QueryResponse<ConfigurationTemplate>
     */
    findTemplates(page, pageSize) {
        const params = new Array();
        if (page != null) {
            params.push(`page=${page}`);
        }
        if (pageSize != null) {
            params.push(`pageSize=${pageSize}`);
        }
        return this.rest.get(`${this.baseUrl}/templates`, ...params);
    }
}
/** @nocollapse */ SysConfigurationsService.ɵfac = function SysConfigurationsService_Factory(t) { return new (t || SysConfigurationsService)(i0.ɵɵinject('config'), i0.ɵɵinject(i1.RestUtil)); };
/** @nocollapse */ SysConfigurationsService.ɵprov = i0.ɵɵdefineInjectable({ token: SysConfigurationsService, factory: SysConfigurationsService.ɵfac });
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(SysConfigurationsService, [{
        type: Injectable
    }], function () { return [{ type: i2.CoreConfig, decorators: [{
                type: Inject,
                args: ['config']
            }] }, { type: i1.RestUtil }]; }, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3lzQ29uZmlndXJhdGlvbnNTZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGFnZW50dmkvbmctY29yZS1saWIvIiwic291cmNlcyI6WyJsaWIvc2VydmljZXMvc3lzQ29uZmlndXJhdGlvbnNTZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ25ELE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSx1QkFBdUIsQ0FBQztBQUNqRCxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sY0FBYyxDQUFDOzs7O0FBUTFDOzs7O0dBSUc7QUFFSCxNQUFNLE9BQU8sd0JBQXdCO0lBS25DOztPQUVHO0lBQ0gsWUFBc0MsTUFBa0IsRUFBVSxJQUFjO1FBQTFDLFdBQU0sR0FBTixNQUFNLENBQVk7UUFBVSxTQUFJLEdBQUosSUFBSSxDQUFVO1FBTmhGLGlCQUFpQjtRQUNULFlBQU8sR0FBRyxxQkFBcUIsQ0FBQztRQU10QyxJQUFJLENBQUMsT0FBTyxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUMsR0FBRyxHQUFHLElBQUksQ0FBQyxPQUFPLENBQUM7SUFDaEQsQ0FBQztJQUdEOzs7O09BSUc7SUFDSCxNQUFNLENBQUMsSUFBb0I7UUFDekIsT0FBTyxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLElBQUksQ0FBQyxPQUFPLEVBQUUsRUFBRSxPQUFPLElBQUksS0FBSyxRQUFRLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQ25HLENBQUM7SUFFRDs7O09BR0c7SUFDSCxNQUFNLENBQUMsRUFBVyxFQUFFLElBQW9CO1FBQ3RDLE9BQU8sSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsR0FBRyxJQUFJLENBQUMsT0FBTyxJQUFJLEVBQUUsRUFBRSxFQUFFLE9BQU8s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QU8sSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsR0FBRyxJQUFJLENBQUMsT0FBTyxjQUFjLEVBQUUsRUFBRSxDQUFDLENBQUM7SUFDN0QsQ0FBQztJQUVEOzs7T0FHRztJQUNILFdBQVcsQ0FBQyxFQUFXO1FBQ3JCLE9BQU8sSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsR0FBRyxJQUFJLENBQUMsT0FBTyxjQUFjLEVBQUUsRUFBRSxDQUFDLENBQUM7SUFDMUQsQ0FBQztJQUVEOzs7T0FHRztJQUNILGFBQWEsQ0FBQyxJQUFhLEVBQUUsUUFBaUI7UUFDNUMsTUFBTSxNQUFNLEdBQUcsSUFBSSxLQUFLLEVBQUUsQ0FBQztRQUMzQixJQUFJLElBQUksSUFBSSxJQUFJLEVBQUU7WUFBRSxNQUFNLENBQUMsSUFBSSxDQUFDLFFBQVEsSUFBSSxFQUFFLENBQUMsQ0FBQztTQUFFO1FBQ2xELElBQUksUUFBUSxJQUFJLElBQUksRUFBRTtZQUFFLE1BQU0sQ0FBQyxJQUFJLENBQUMsWUFBWSxRQUFRLEVBQUUsQ0FBQyxDQUFDO1NBQUU7UUFFaEUsT0FBTyxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxHQUFHLElBQUksQ0FBQyxPQUFPLFlBQVksRUFBRSxHQUFHLE1BQU0sQ0FBQyxDQUFDO0lBQzdELENBQUM7O2dHQS9KVSx3QkFBd0IsY0FRZixRQUFRO2dFQVJqQix3QkFBd0IsV0FBeEIsd0JBQXdCO2tEQUF4Qix3QkFBd0I7Y0FEcEMsVUFBVTs7c0JBU0ksTUFBTTt1QkFBQyxRQUFRIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSwgSW5qZWN0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBSZXN0VXRpbCB9IGZyb20gJy4uLy4uL3V0aWxzL3Jlc3QtdXRpbCc7XG5pbXBvcnQgeyBDb3JlQ29uZmlnIH0gZnJvbSAnLi4vLi4vY29uZmlnJztcblxuaW1wb3J0IHsgQ29uZmlndXJhdGlvbiB9IGZyb20gJy4uL2VudGl0aWVzL0NvbmZpZ3VyYXRpb24nO1xuaW1wb3J0IHsgUHJvZHVjdFR5cGVDb2RlIH0gZnJvbSAnLi4vZW51bXMvUHJvZHVjdFR5cGVDb2RlJztcbmltcG9ydCB7IENvbmZpZ3VyYXRpb25WZXJzaW9uIH0gZnJvbSAnLi4vZW50aXRpZXMvQ29uZmlndXJhdGlvblZlcnNpb24nO1xuaW1wb3J0IHsgQ29uZmlndXJhdGlvblRlbXBsYXRlIH0gZnJvbSAnLi4vZW50aXRpZXMvQ29uZmlndXJhdGlvblRlbXBsYXRlJztcblxuXG4vKipcbiAqIExpc3Qgb2YgY29uZmlndXJhdGlvbnMgcmVsYXRlZCBhY3Rpb25zIGZvciBzeXN0ZW0gYWRtaW5pc3RyYXRvciBvbmx5XG4gKiBAUmVxdWVzdEhlYWRlciBYLUFQSS1LRVkgVGhlIGtleSB0byBpZGVudGlmeSB0aGUgYXBwbGljYXRpb24gKGNvbnNvbGUpXG4gKiBAUmVxdWVzdEhlYWRlciBYLUFDQ0VTUy1UT0tFTiBUaGUgdG9rZW4gdG8gaWRlbnRpZnkgdGhlIGxvZ2dlZC1pbiB1c2VyIFxuICovXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgU3lzQ29uZmlndXJhdGlvbnNTZXJ2aWNlIHtcblxuICAvLyBVUkwgdG8gd2ViIGFwaVxuICBwcml2YXRlIGJhc2VVcmwgPSAnL3N5cy9jb25maWd1cmF0aW9ucyc7XG5cbiAgLyoqXG4gICAqIENsYXNzIGNvbnN0cnVjdG9yXG4gICAqL1xuICBjb25zdHJ1Y3RvcihASW5qZWN0KCdjb25maWcnKSBwcml2YXRlIGNvbmZpZzogQ29yZUNvbmZpZywgcHJpdmF0ZSByZXN0OiBSZXN0VXRpbCkge1xuICAgIHRoaXMuYmFzZVVybCA9IHRoaXMuY29uZmlnLmFwaSArIHRoaXMuYmFzZVVybDtcbiAgfVxuXG5cbiAgLyoqXG4gICAqIENyZWF0ZSBuZXcgY29uZmlndXJhdGlvbiBpbiB0aGUgc3lzdGVtXG4gICAqIFRoZSByZXNwb25zZSBpbmNsdWRlcyBhY2Nlc3MgdG9rZW4gdmFsaWQgZm9yIDIwIG1pbnV0ZXMuIFRoZSBjbGllbnQgc2lkZSBzaG91bGQgcmVuZXcgdGhlIHRva2VuIGJlZm9yZSBleHBpcmF0aW9uIHVzaW5nIHJlZnJlc2gtdG9rZW4gbWV0aG9kXG4gICAqIEBSZXR1cm46IEVudGl0eVJlc3BvbnNlPENvbmZpZ3VyYXRpb24+XG4gICAqL1xuICBjcmVhdGUoYm9keT86IENvbmZpZ3VyYXRpb24pIHtcbiAgICByZXR1cm4gdGhpcy5yZXN0LnBvc3QoYCR7dGhpcy5iYXNlVXJsfWAsIHR5cGVvZiBib2R5ID09PSAnb2JqZWN0JyA/IEpTT04uc3RyaW5naWZ5KGJvZHkpIDogYm9keSk7XG4gIH1cblxuICAvKipcbiAgICogVXBkYXRlIGNvbmZpZ3VyYXRpb24gaW4gdGhlIHN5c3RlbVxuICAgKiBAUmV0dXJuOiBFbnRpdHlSZXNwb25zZTxDb25maWd1cmF0aW9uPlxuICAgKi9cbiAgdXBkYXRlKGlkPzogc3RyaW5nLCBib2R5PzogQ29uZmlndXJhdGlvbikge1xuICAgIHJldHVybiB0aGlzLnJlc3QucHV0KGAke3RoaXMuYmFzZVVybH0vJHtpZH1gLCB0eXBlb2YgYm9keSA9PT0gJ29iamVjdCcgPyBKU09OLnN0cmluZ2lmeShib2R5KSA6IGJvZHkpO1xuICB9XG5cbiAgLyoqXG4gICAqIERlbGV0ZSBjb25maWd1cmF0aW9uIGJ5IGlkXG4gICAqIEBSZXR1cm46IEFjdGlvblJlc3BvbnNlXG4gICAqL1xuICBkZWxldGUoaWQ/OiBzdHJpbmcpIHtcbiAgICByZXR1cm4gdGhpcy5yZXN0LmRlbGV0ZShgJHt0aGlzLmJhc2VVcmx9LyR7aWR9YCk7XG4gIH1cblxuICAvKipcbiAgICogU2V0IGRlZmF1bHQgdmVyc2lvbiBmb3IgY29uZmlndXJhdGlvblxuICAgKiBAUmV0dXJuOiBBY3Rpb25SZXNwb25zZVxuICAgKi9cbiAgc2V0RGVmYXVsdFZlcnNpb24oaWQ/OiBzdHJpbmcsIHZlcnNpb25JZD86IHN0cmluZykge1xuICAgIHJldHVybiB0aGlzLnJlc3QucHV0KGAke3RoaXMuYmFzZVVybH0vJHtpZH0vZGVmYXVsdC12ZXJzaW9uLyR7dmVyc2lvbklkfWAsIG51bGwpO1xuICB9XG5cbiAgLyoqXG4gICAqIEdldCBjb25maWd1cmF0aW9uIGJ5IGlkXG4gICAqIEBSZXR1cm46IEVudGl0eVJlc3BvbnNlPENvbmZpZ3VyYXRpb24+XG4gICAqL1xuICBnZXQoaWQ/OiBzdHJpbmcpIHtcbiAgICByZXR1cm4gdGhpcy5yZXN0LmdldChgJHt0aGlzLmJhc2VVcmx9LyR7aWR9YCk7XG4gIH1cblxuICAvKipcbiAgICogR2V0IGxpc3Qgb2YgY29uZmlndXJhdGlvbnMgYnkgZmlsdGVyXG4gICAqIEBSZXR1cm46IFF1ZXJ5UmVzcG9uc2U8Q29uZmlndXJhdGlvbj5cbiAgICovXG4gIGZpbmQodGFyZ2V0PzogUHJvZHVjdFR5cGVDb2RlW10sIHNlYXJjaD86IHN0cmluZywgc29ydD86IHN0cmluZywgcGFnZT86IG51bWJlciwgcGFnZVNpemU/OiBudW1iZXIpIHtcbiAgICBjb25zdCBwYXJhbXMgPSBuZXcgQXJyYXkoKTtcdFx0XG4gICAgaWYgKHRhcmdldCAhPSBudWxsKSB7IHBhcmFtcy5wdXNoKGB0YXJnZXQ9JHt0YXJnZXR9YCk7IH1cbiAgICBpZiAoc2VhcmNoICE9IG51bGwpIHsgcGFyYW1zLnB1c2goYHNlYXJjaD0ke3NlYXJjaH1gKTsgfVxuICAgIGlmIChzb3J0ICE9IG51bGwpIHsgcGFyYW1zLnB1c2goYHNvcnQ9JHtzb3J0fWApOyB9XG4gICAgaWYgKHBhZ2UgIT0gbnVsbCkgeyBwYXJhbXMucHVzaChgcGFnZT0ke3BhZ2V9YCk7IH1cbiAgICBpZiAocGFnZVNpemUgIT0gbnVsbCkgeyBwYXJhbXMucHVzaChgcGFnZVNpemU9JHtwYWdlU2l6ZX1gKTsgfVxuXG5cdFx0cmV0dXJuIHRoaXMucmVzdC5nZXQoYCR7dGhpcy5iYXNlVXJsfWAsIC4uLnBhcmFtcyk7XG4gIH1cblxuICAvKipcbiAgICogQ3JlYXRlIG5ldyBjb25maWd1cmF0aW9uIHZlcnNpb24gaW4gdGhlIHN5c3RlbVxuICAgKiBAUmV0dXJuOiBFbnRpdHlSZXNwb25zZTxDb25maWd1cmF0aW9uVmVyc2lvbj5cbiAgICovXG4gIGNyZWF0ZVZlcnNpb24oaWQ/OiBzdHJpbmcsIGJvZHk/OiBDb25maWd1cmF0aW9uVmVyc2lvbikge1xuICAgIHJldHVybiB0aGlzLnJlc3QucG9zdChgJHt0aGlzLmJhc2VVcmx9LyR7aWR9L3ZlcnNpb25zYCwgdHlwZW9mIGJvZHkgPT09ICdvYmplY3QnID8gSlNPTi5zdHJpbmdpZnkoYm9keSkgOiBib2R5KTtcbiAgfVxuXG4gIC8qKlxuICAgKiBVcGRhdGUgY29uZmlndXJhdGlvbiB2ZXJzaW9uIGluIHRoZSBzeXN0ZW1cbiAgICogQFJldHVybjogRW50aXR5UmVzcG9uc2U8Q29uZmlndXJhdGlvblZlcnNpb24+XG4gICAqL1xuICB1cGRhdGVWZXJzaW9uKGlkPzogc3RyaW5nLCBib2R5PzogQ29uZmlndXJhdGlvblZlcnNpb24pIHtcbiAgICByZXR1cm4gdGhpcy5yZXN0LnB1dChgJHt0aGlzLmJhc2VVcmx9LyR7aWR9L3ZlcnNpb25zYCwgdHlwZW9mIGJvZHkgPT09ICdvYmplY3QnID8gSlNPTi5zdHJpbmdpZnkoYm9keSkgOiBib2R5KTtcbiAgfVxuXG4gIC8qKlxuICAgKiBEdXBsaWNhdGUgY29uZmlndXJhdGlvbiB2ZXJzaW9uIGZyb20gZXhpc3Rpbmcgb25lXG4gICAqIEBSZXR1cm46IEVudGl0eVJlc3BvbnNlPENvbmZpZ3VyYXRpb25WZXJzaW9uPlxuICAgKi9cbiAgZHVwbGljYXRlVmVyc2lvbihpZD86IHN0cmluZywgdmVyc2lvbklkPzogc3RyaW5nKSB7XG4gICAgcmV0dXJuIHRoaXMucmVzdC5wb3N0KGAke3RoaXMuYmFzZVVybH0vJHtpZH0vdmVyc2lvbnMvJHt2ZXJzaW9uSWR9YCwgbnVsbCk7XG4gIH1cblxuICAvKipcbiAgICogRGVsZXRlIGNvbmZpZ3VyYXRpb24gdmVyc2lvbiBieSBpZFxuICAgKiBAUmV0dXJuOiBBY3Rpb25SZXNwb25zZVxuICAgKi9cbiAgZGVsZXRlVmVyc2lvbihpZD86IHN0cmluZywgdmVyc2lvbklkPzogc3RyaW5nKSB7XG4gICAgcmV0dXJuIHRoaXMucmVzdC5kZWxldGUoYCR7dGhpcy5iYXNlVXJsfS8ke2lkfS92ZXJzaW9ucy8ke3ZlcnNpb25JZH1gKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBHZXQgc3BlY2lmaWMgY29uZmlndXJhdGlvbiB2ZXJzaW9uXG4gICAqIEBSZXR1cm46IEVudGl0eVJlc3BvbnNlPENvbmZpZ3VyYXRpb25WZXJzaW9uPlxuICAgKi9cbiAgZ2V0VmVyc2lvbihpZD86IHN0cmluZywgdmVyc2lvbklkPzogc3RyaW5nKSB7XG4gICAgcmV0dXJuIHRoaXMucmVzdC5nZXQoYCR7dGhpcy5iYXNlVXJsfS8ke2lkfS92ZXJzaW9ucy8ke3ZlcnNpb25JZH1gKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBHZXQgYWxsIHZlcnNpb25zIG9mIHNwZWNpZmljIGNvbmZpZ3VyYXRpb25cbiAgICogQFJldHVybjogRW50aXRpZXNSZXNwb25zZTxDb25maWd1cmF0aW9uVmVyc2lvbj5cbiAgICovXG4gIGdldFZlcnNpb25zKGlkPzogc3RyaW5nKSB7XG4gICAgcmV0dXJuIHRoaXMucmVzdC5nZXQoYCR7dGhpcy5iYXNlVXJsfS8ke2lkfS92ZXJzaW9uc2ApO1xuICB9XG5cbiAgLyoqXG4gICAqIENyZWF0ZSBuZXcgY29uZmlndXJhdGlvbiB0ZW1wbGF0ZSBpbiB0aGUgc3lzdGVtXG4gICAqIEBSZXR1cm46IEVudGl0eVJlc3BvbnNlPENvbmZpZ3VyYXRpb25UZW1wbGF0ZT5cbiAgICovXG4gIGNyZWF0ZVRlbXBsYXRlKGJvZHk/OiBDb25maWd1cmF0aW9uVGVtcGxhdGUpIHtcbiAgICByZXR1cm4gdGhpcy5yZXN0LnBvc3QoYCR7dGhpcy5iYXNlVXJsfS90ZW1wbGF0ZXNgLCB0eXBlb2YgYm9keSA9PT0gJ29iamVjdCcgPyBKU09OLnN0cmluZ2lmeShib2R5KSA6IGJvZHkpO1xuICB9XG5cbiAgLyoqXG4gICAqIFVwZGF0ZSBjb25maWd1cmF0aW9uIHRlbXBsYXRlIGluIHRoZSBzeXN0ZW1cbiAgICogQFJldHVybjogRW50aXR5UmVzcG9uc2U8Q29uZmlndXJhdGlvblRlbXBsYXRlPlxuICAgKi9cbiAgdXBkYXRlVGVtcGxhdGUoaWQ/OiBzdHJpbmcsIGJvZHk/OiBDb25maWd1cmF0aW9uVGVtcGxhdGUpIHtcbiAgICByZXR1cm4gdGhpcy5yZXN0LnB1dChgJHt0aGlzLmJhc2VVcmx9L3RlbXBsYXRlcy8ke2lkfWAsIHR5cGVvZiBib2R5ID09PSAnb2JqZWN0JyA/IEpTT04uc3RyaW5naWZ5KGJvZHkpIDogYm9keSk7XG4gIH1cblxuICAvKipcbiAgICogRGVsZXRlIGNvbmZpZ3VyYXRpb24gdGVtcGxhdGUgYnkgaWRcbiAgICogQFJldHVybjogQWN0aW9uUmVzcG9uc2VcbiAgICovXG4gIGRlbGV0ZVRlbXBsYXRlKGlkPzogc3RyaW5nKSB7XG4gICAgcmV0dXJuIHRoaXMucmVzdC5kZWxldGUoYCR7dGhpcy5iYXNlVXJsfS90ZW1wbGF0ZXMvJHtpZH1gKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBHZXQgY29uZmlndXJhdGlvbiB0ZW1wbGF0ZSBieSBpZFxuICAgKiBAUmV0dXJuOiBFbnRpdHlSZXNwb25zZTxDb25maWd1cmF0aW9uVGVtcGxhdGU+XG4gICAqL1xuICBnZXRUZW1wbGF0ZShpZD86IHN0cmluZykge1xuICAgIHJldHVybiB0aGlzLnJlc3QuZ2V0KGAke3RoaXMuYmFzZVVybH0vdGVtcGxhdGVzLyR7aWR9YCk7XG4gIH1cblxuICAvKipcbiAgICogR2V0IGxpc3Qgb2YgY29uZmlndXJhdGlvbiB0ZW1wbGF0ZXNcbiAgICogQFJldHVybjogUXVlcnlSZXNwb25zZTxDb25maWd1cmF0aW9uVGVtcGxhdGU+XG4gICAqL1xuICBmaW5kVGVtcGxhdGVzKHBhZ2U/OiBudW1iZXIsIHBhZ2VTaXplPzogbnVtYmVyKSB7XG4gICAgY29uc3QgcGFyYW1zID0gbmV3IEFycmF5KCk7XHRcdFxuICAgIGlmIChwYWdlICE9IG51bGwpIHsgcGFyYW1zLnB1c2goYHBhZ2U9JHtwYWdlfWApOyB9XG4gICAgaWYgKHBhZ2VTaXplICE9IG51bGwpIHsgcGFyYW1zLnB1c2goYHBhZ2VTaXplPSR7cGFnZVNpemV9YCk7IH1cblxuXHRcdHJldHVybiB0aGlzLnJlc3QuZ2V0KGAke3RoaXMuYmFzZVVybH0vdGVtcGxhdGVzYCwgLi4ucGFyYW1zKTtcbiAgfVxuXG59XG4iXX0=