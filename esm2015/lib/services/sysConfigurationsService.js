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
/** @nocollapse */ SysConfigurationsService.ɵprov = /** @pureOrBreakMyCode */ i0.ɵɵdefineInjectable({ token: SysConfigurationsService, factory: SysConfigurationsService.ɵfac });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(SysConfigurationsService, [{
        type: Injectable
    }], function () { return [{ type: i2.CoreConfig, decorators: [{
                type: Inject,
                args: ['config']
            }] }, { type: i1.RestUtil }]; }, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3lzQ29uZmlndXJhdGlvbnNTZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvbmctY29yZS1saWIvc3JjL2xpYi9zZXJ2aWNlcy9zeXNDb25maWd1cmF0aW9uc1NlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDbkQsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLHVCQUF1QixDQUFDO0FBQ2pELE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxjQUFjLENBQUM7Ozs7QUFRMUM7Ozs7R0FJRztBQUVILE1BQU0sT0FBTyx3QkFBd0I7SUFLbkM7O09BRUc7SUFDSCxZQUFzQyxNQUFrQixFQUFVLElBQWM7UUFBMUMsV0FBTSxHQUFOLE1BQU0sQ0FBWTtRQUFVLFNBQUksR0FBSixJQUFJLENBQVU7UUFOaEYsaUJBQWlCO1FBQ1QsWUFBTyxHQUFHLHFCQUFxQixDQUFDO1FBTXRDLElBQUksQ0FBQyxPQUFPLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxHQUFHLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQztJQUNoRCxDQUFDO0lBR0Q7Ozs7T0FJRztJQUNILE1BQU0sQ0FBQyxJQUFvQjtRQUN6QixPQUFPLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsSUFBSSxDQUFDLE9BQU8sRUFBRSxFQUFFLE9BQU8sSUFBSSxLQUFLLFFBQVEsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDbkcsQ0FBQztJQUVEOzs7T0FHRztJQUNILE1BQU0sQ0FBQyxFQUFXLEVBQUUsSUFBb0I7UUFDdEMsT0FBTyxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxHQUFHLElBQUksQ0FBQyxPQUFPLElBQUksRUFBRSxF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LEVBQVc7UUFDeEIsT0FBTyxJQUFJLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxHQUFHLElBQUksQ0FBQyxPQUFPLGNBQWMsRUFBRSxFQUFFLENBQUMsQ0FBQztJQUM3RCxDQUFDO0lBRUQ7OztPQUdHO0lBQ0gsV0FBVyxDQUFDLEVBQVc7UUFDckIsT0FBTyxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxHQUFHLElBQUksQ0FBQyxPQUFPLGNBQWMsRUFBRSxFQUFFLENBQUMsQ0FBQztJQUMxRCxDQUFDO0lBRUQ7OztPQUdHO0lBQ0gsYUFBYSxDQUFDLElBQWEsRUFBRSxRQUFpQjtRQUM1QyxNQUFNLE1BQU0sR0FBRyxJQUFJLEtBQUssRUFBRSxDQUFDO1FBQzNCLElBQUksSUFBSSxJQUFJLElBQUksRUFBRTtZQUFFLE1BQU0sQ0FBQyxJQUFJLENBQUMsUUFBUSxJQUFJLEVBQUUsQ0FBQyxDQUFDO1NBQUU7UUFDbEQsSUFBSSxRQUFRLElBQUksSUFBSSxFQUFFO1lBQUUsTUFBTSxDQUFDLElBQUksQ0FBQyxZQUFZLFFBQVEsRUFBRSxDQUFDLENBQUM7U0FBRTtRQUVoRSxPQUFPLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLEdBQUcsSUFBSSxDQUFDLE9BQU8sWUFBWSxFQUFFLEdBQUcsTUFBTSxDQUFDLENBQUM7SUFDN0QsQ0FBQzs7bUhBL0pVLHdCQUF3QixjQVFmLFFBQVE7NkdBUmpCLHdCQUF3QixXQUF4Qix3QkFBd0I7dUZBQXhCLHdCQUF3QjtjQURwQyxVQUFVOztzQkFTSSxNQUFNO3VCQUFDLFFBQVEiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlLCBJbmplY3QgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFJlc3RVdGlsIH0gZnJvbSAnLi4vLi4vdXRpbHMvcmVzdC11dGlsJztcbmltcG9ydCB7IENvcmVDb25maWcgfSBmcm9tICcuLi8uLi9jb25maWcnO1xuXG5pbXBvcnQgeyBDb25maWd1cmF0aW9uVGVtcGxhdGUgfSBmcm9tICcuLi9lbnRpdGllcy9Db25maWd1cmF0aW9uVGVtcGxhdGUnO1xuaW1wb3J0IHsgQ29uZmlndXJhdGlvbiB9IGZyb20gJy4uL2VudGl0aWVzL0NvbmZpZ3VyYXRpb24nO1xuaW1wb3J0IHsgUHJvZHVjdFR5cGVDb2RlIH0gZnJvbSAnLi4vZW51bXMvUHJvZHVjdFR5cGVDb2RlJztcbmltcG9ydCB7IENvbmZpZ3VyYXRpb25WZXJzaW9uIH0gZnJvbSAnLi4vZW50aXRpZXMvQ29uZmlndXJhdGlvblZlcnNpb24nO1xuXG5cbi8qKlxuICogTGlzdCBvZiBjb25maWd1cmF0aW9ucyByZWxhdGVkIGFjdGlvbnMgZm9yIHN5c3RlbSBhZG1pbmlzdHJhdG9yIG9ubHlcbiAqIEBSZXF1ZXN0SGVhZGVyIFgtQVBJLUtFWSBUaGUga2V5IHRvIGlkZW50aWZ5IHRoZSBhcHBsaWNhdGlvbiAoY29uc29sZSlcbiAqIEBSZXF1ZXN0SGVhZGVyIFgtQUNDRVNTLVRPS0VOIFRoZSB0b2tlbiB0byBpZGVudGlmeSB0aGUgbG9nZ2VkLWluIHVzZXIgXG4gKi9cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBTeXNDb25maWd1cmF0aW9uc1NlcnZpY2Uge1xuXG4gIC8vIFVSTCB0byB3ZWIgYXBpXG4gIHByaXZhdGUgYmFzZVVybCA9ICcvc3lzL2NvbmZpZ3VyYXRpb25zJztcblxuICAvKipcbiAgICogQ2xhc3MgY29uc3RydWN0b3JcbiAgICovXG4gIGNvbnN0cnVjdG9yKEBJbmplY3QoJ2NvbmZpZycpIHByaXZhdGUgY29uZmlnOiBDb3JlQ29uZmlnLCBwcml2YXRlIHJlc3Q6IFJlc3RVdGlsKSB7XG4gICAgdGhpcy5iYXNlVXJsID0gdGhpcy5jb25maWcuYXBpICsgdGhpcy5iYXNlVXJsO1xuICB9XG5cblxuICAvKipcbiAgICogQ3JlYXRlIG5ldyBjb25maWd1cmF0aW9uIGluIHRoZSBzeXN0ZW1cbiAgICogVGhlIHJlc3BvbnNlIGluY2x1ZGVzIGFjY2VzcyB0b2tlbiB2YWxpZCBmb3IgMjAgbWludXRlcy4gVGhlIGNsaWVudCBzaWRlIHNob3VsZCByZW5ldyB0aGUgdG9rZW4gYmVmb3JlIGV4cGlyYXRpb24gdXNpbmcgcmVmcmVzaC10b2tlbiBtZXRob2RcbiAgICogQFJldHVybjogRW50aXR5UmVzcG9uc2U8Q29uZmlndXJhdGlvbj5cbiAgICovXG4gIGNyZWF0ZShib2R5PzogQ29uZmlndXJhdGlvbikge1xuICAgIHJldHVybiB0aGlzLnJlc3QucG9zdChgJHt0aGlzLmJhc2VVcmx9YCwgdHlwZW9mIGJvZHkgPT09ICdvYmplY3QnID8gSlNPTi5zdHJpbmdpZnkoYm9keSkgOiBib2R5KTtcbiAgfVxuXG4gIC8qKlxuICAgKiBVcGRhdGUgY29uZmlndXJhdGlvbiBpbiB0aGUgc3lzdGVtXG4gICAqIEBSZXR1cm46IEVudGl0eVJlc3BvbnNlPENvbmZpZ3VyYXRpb24+XG4gICAqL1xuICB1cGRhdGUoaWQ/OiBzdHJpbmcsIGJvZHk/OiBDb25maWd1cmF0aW9uKSB7XG4gICAgcmV0dXJuIHRoaXMucmVzdC5wdXQoYCR7dGhpcy5iYXNlVXJsfS8ke2lkfWAsIHR5cGVvZiBib2R5ID09PSAnb2JqZWN0JyA/IEpTT04uc3RyaW5naWZ5KGJvZHkpIDogYm9keSk7XG4gIH1cblxuICAvKipcbiAgICogRGVsZXRlIGNvbmZpZ3VyYXRpb24gYnkgaWRcbiAgICogQFJldHVybjogQWN0aW9uUmVzcG9uc2VcbiAgICovXG4gIGRlbGV0ZShpZD86IHN0cmluZykge1xuICAgIHJldHVybiB0aGlzLnJlc3QuZGVsZXRlKGAke3RoaXMuYmFzZVVybH0vJHtpZH1gKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBTZXQgZGVmYXVsdCB2ZXJzaW9uIGZvciBjb25maWd1cmF0aW9uXG4gICAqIEBSZXR1cm46IEFjdGlvblJlc3BvbnNlXG4gICAqL1xuICBzZXREZWZhdWx0VmVyc2lvbihpZD86IHN0cmluZywgdmVyc2lvbklkPzogc3RyaW5nKSB7XG4gICAgcmV0dXJuIHRoaXMucmVzdC5wdXQoYCR7dGhpcy5iYXNlVXJsfS8ke2lkfS9kZWZhdWx0LXZlcnNpb24vJHt2ZXJzaW9uSWR9YCwgbnVsbCk7XG4gIH1cblxuICAvKipcbiAgICogR2V0IGNvbmZpZ3VyYXRpb24gYnkgaWRcbiAgICogQFJldHVybjogRW50aXR5UmVzcG9uc2U8Q29uZmlndXJhdGlvbj5cbiAgICovXG4gIGdldChpZD86IHN0cmluZykge1xuICAgIHJldHVybiB0aGlzLnJlc3QuZ2V0KGAke3RoaXMuYmFzZVVybH0vJHtpZH1gKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBHZXQgbGlzdCBvZiBjb25maWd1cmF0aW9ucyBieSBmaWx0ZXJcbiAgICogQFJldHVybjogUXVlcnlSZXNwb25zZTxDb25maWd1cmF0aW9uPlxuICAgKi9cbiAgZmluZCh0YXJnZXQ/OiBQcm9kdWN0VHlwZUNvZGVbXSwgc2VhcmNoPzogc3RyaW5nLCBzb3J0Pzogc3RyaW5nLCBwYWdlPzogbnVtYmVyLCBwYWdlU2l6ZT86IG51bWJlcikge1xuICAgIGNvbnN0IHBhcmFtcyA9IG5ldyBBcnJheSgpO1x0XHRcbiAgICBpZiAodGFyZ2V0ICE9IG51bGwpIHsgcGFyYW1zLnB1c2goYHRhcmdldD0ke3RhcmdldH1gKTsgfVxuICAgIGlmIChzZWFyY2ggIT0gbnVsbCkgeyBwYXJhbXMucHVzaChgc2VhcmNoPSR7c2VhcmNofWApOyB9XG4gICAgaWYgKHNvcnQgIT0gbnVsbCkgeyBwYXJhbXMucHVzaChgc29ydD0ke3NvcnR9YCk7IH1cbiAgICBpZiAocGFnZSAhPSBudWxsKSB7IHBhcmFtcy5wdXNoKGBwYWdlPSR7cGFnZX1gKTsgfVxuICAgIGlmIChwYWdlU2l6ZSAhPSBudWxsKSB7IHBhcmFtcy5wdXNoKGBwYWdlU2l6ZT0ke3BhZ2VTaXplfWApOyB9XG5cblx0XHRyZXR1cm4gdGhpcy5yZXN0LmdldChgJHt0aGlzLmJhc2VVcmx9YCwgLi4ucGFyYW1zKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBDcmVhdGUgbmV3IGNvbmZpZ3VyYXRpb24gdmVyc2lvbiBpbiB0aGUgc3lzdGVtXG4gICAqIEBSZXR1cm46IEVudGl0eVJlc3BvbnNlPENvbmZpZ3VyYXRpb25WZXJzaW9uPlxuICAgKi9cbiAgY3JlYXRlVmVyc2lvbihpZD86IHN0cmluZywgYm9keT86IENvbmZpZ3VyYXRpb25WZXJzaW9uKSB7XG4gICAgcmV0dXJuIHRoaXMucmVzdC5wb3N0KGAke3RoaXMuYmFzZVVybH0vJHtpZH0vdmVyc2lvbnNgLCB0eXBlb2YgYm9keSA9PT0gJ29iamVjdCcgPyBKU09OLnN0cmluZ2lmeShib2R5KSA6IGJvZHkpO1xuICB9XG5cbiAgLyoqXG4gICAqIFVwZGF0ZSBjb25maWd1cmF0aW9uIHZlcnNpb24gaW4gdGhlIHN5c3RlbVxuICAgKiBAUmV0dXJuOiBFbnRpdHlSZXNwb25zZTxDb25maWd1cmF0aW9uVmVyc2lvbj5cbiAgICovXG4gIHVwZGF0ZVZlcnNpb24oaWQ/OiBzdHJpbmcsIGJvZHk/OiBDb25maWd1cmF0aW9uVmVyc2lvbikge1xuICAgIHJldHVybiB0aGlzLnJlc3QucHV0KGAke3RoaXMuYmFzZVVybH0vJHtpZH0vdmVyc2lvbnNgLCB0eXBlb2YgYm9keSA9PT0gJ29iamVjdCcgPyBKU09OLnN0cmluZ2lmeShib2R5KSA6IGJvZHkpO1xuICB9XG5cbiAgLyoqXG4gICAqIER1cGxpY2F0ZSBjb25maWd1cmF0aW9uIHZlcnNpb24gZnJvbSBleGlzdGluZyBvbmVcbiAgICogQFJldHVybjogRW50aXR5UmVzcG9uc2U8Q29uZmlndXJhdGlvblZlcnNpb24+XG4gICAqL1xuICBkdXBsaWNhdGVWZXJzaW9uKGlkPzogc3RyaW5nLCB2ZXJzaW9uSWQ/OiBzdHJpbmcpIHtcbiAgICByZXR1cm4gdGhpcy5yZXN0LnBvc3QoYCR7dGhpcy5iYXNlVXJsfS8ke2lkfS92ZXJzaW9ucy8ke3ZlcnNpb25JZH1gLCBudWxsKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBEZWxldGUgY29uZmlndXJhdGlvbiB2ZXJzaW9uIGJ5IGlkXG4gICAqIEBSZXR1cm46IEFjdGlvblJlc3BvbnNlXG4gICAqL1xuICBkZWxldGVWZXJzaW9uKGlkPzogc3RyaW5nLCB2ZXJzaW9uSWQ/OiBzdHJpbmcpIHtcbiAgICByZXR1cm4gdGhpcy5yZXN0LmRlbGV0ZShgJHt0aGlzLmJhc2VVcmx9LyR7aWR9L3ZlcnNpb25zLyR7dmVyc2lvbklkfWApO1xuICB9XG5cbiAgLyoqXG4gICAqIEdldCBzcGVjaWZpYyBjb25maWd1cmF0aW9uIHZlcnNpb25cbiAgICogQFJldHVybjogRW50aXR5UmVzcG9uc2U8Q29uZmlndXJhdGlvblZlcnNpb24+XG4gICAqL1xuICBnZXRWZXJzaW9uKGlkPzogc3RyaW5nLCB2ZXJzaW9uSWQ/OiBzdHJpbmcpIHtcbiAgICByZXR1cm4gdGhpcy5yZXN0LmdldChgJHt0aGlzLmJhc2VVcmx9LyR7aWR9L3ZlcnNpb25zLyR7dmVyc2lvbklkfWApO1xuICB9XG5cbiAgLyoqXG4gICAqIEdldCBhbGwgdmVyc2lvbnMgb2Ygc3BlY2lmaWMgY29uZmlndXJhdGlvblxuICAgKiBAUmV0dXJuOiBFbnRpdGllc1Jlc3BvbnNlPENvbmZpZ3VyYXRpb25WZXJzaW9uPlxuICAgKi9cbiAgZ2V0VmVyc2lvbnMoaWQ/OiBzdHJpbmcpIHtcbiAgICByZXR1cm4gdGhpcy5yZXN0LmdldChgJHt0aGlzLmJhc2VVcmx9LyR7aWR9L3ZlcnNpb25zYCk7XG4gIH1cblxuICAvKipcbiAgICogQ3JlYXRlIG5ldyBjb25maWd1cmF0aW9uIHRlbXBsYXRlIGluIHRoZSBzeXN0ZW1cbiAgICogQFJldHVybjogRW50aXR5UmVzcG9uc2U8Q29uZmlndXJhdGlvblRlbXBsYXRlPlxuICAgKi9cbiAgY3JlYXRlVGVtcGxhdGUoYm9keT86IENvbmZpZ3VyYXRpb25UZW1wbGF0ZSkge1xuICAgIHJldHVybiB0aGlzLnJlc3QucG9zdChgJHt0aGlzLmJhc2VVcmx9L3RlbXBsYXRlc2AsIHR5cGVvZiBib2R5ID09PSAnb2JqZWN0JyA/IEpTT04uc3RyaW5naWZ5KGJvZHkpIDogYm9keSk7XG4gIH1cblxuICAvKipcbiAgICogVXBkYXRlIGNvbmZpZ3VyYXRpb24gdGVtcGxhdGUgaW4gdGhlIHN5c3RlbVxuICAgKiBAUmV0dXJuOiBFbnRpdHlSZXNwb25zZTxDb25maWd1cmF0aW9uVGVtcGxhdGU+XG4gICAqL1xuICB1cGRhdGVUZW1wbGF0ZShpZD86IHN0cmluZywgYm9keT86IENvbmZpZ3VyYXRpb25UZW1wbGF0ZSkge1xuICAgIHJldHVybiB0aGlzLnJlc3QucHV0KGAke3RoaXMuYmFzZVVybH0vdGVtcGxhdGVzLyR7aWR9YCwgdHlwZW9mIGJvZHkgPT09ICdvYmplY3QnID8gSlNPTi5zdHJpbmdpZnkoYm9keSkgOiBib2R5KTtcbiAgfVxuXG4gIC8qKlxuICAgKiBEZWxldGUgY29uZmlndXJhdGlvbiB0ZW1wbGF0ZSBieSBpZFxuICAgKiBAUmV0dXJuOiBBY3Rpb25SZXNwb25zZVxuICAgKi9cbiAgZGVsZXRlVGVtcGxhdGUoaWQ/OiBzdHJpbmcpIHtcbiAgICByZXR1cm4gdGhpcy5yZXN0LmRlbGV0ZShgJHt0aGlzLmJhc2VVcmx9L3RlbXBsYXRlcy8ke2lkfWApO1xuICB9XG5cbiAgLyoqXG4gICAqIEdldCBjb25maWd1cmF0aW9uIHRlbXBsYXRlIGJ5IGlkXG4gICAqIEBSZXR1cm46IEVudGl0eVJlc3BvbnNlPENvbmZpZ3VyYXRpb25UZW1wbGF0ZT5cbiAgICovXG4gIGdldFRlbXBsYXRlKGlkPzogc3RyaW5nKSB7XG4gICAgcmV0dXJuIHRoaXMucmVzdC5nZXQoYCR7dGhpcy5iYXNlVXJsfS90ZW1wbGF0ZXMvJHtpZH1gKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBHZXQgbGlzdCBvZiBjb25maWd1cmF0aW9uIHRlbXBsYXRlc1xuICAgKiBAUmV0dXJuOiBRdWVyeVJlc3BvbnNlPENvbmZpZ3VyYXRpb25UZW1wbGF0ZT5cbiAgICovXG4gIGZpbmRUZW1wbGF0ZXMocGFnZT86IG51bWJlciwgcGFnZVNpemU/OiBudW1iZXIpIHtcbiAgICBjb25zdCBwYXJhbXMgPSBuZXcgQXJyYXkoKTtcdFx0XG4gICAgaWYgKHBhZ2UgIT0gbnVsbCkgeyBwYXJhbXMucHVzaChgcGFnZT0ke3BhZ2V9YCk7IH1cbiAgICBpZiAocGFnZVNpemUgIT0gbnVsbCkgeyBwYXJhbXMucHVzaChgcGFnZVNpemU9JHtwYWdlU2l6ZX1gKTsgfVxuXG5cdFx0cmV0dXJuIHRoaXMucmVzdC5nZXQoYCR7dGhpcy5iYXNlVXJsfS90ZW1wbGF0ZXNgLCAuLi5wYXJhbXMpO1xuICB9XG5cbn1cbiJdfQ==