/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Injectable, Inject } from '@angular/core';
import { RestUtil } from '../../utils/rest-util';
import { CoreConfig } from '../../config';
/**
 * List of configurations related actions for system administrator only
 * \@RequestHeader X-API-KEY The key to identify the application (console)
 * \@RequestHeader X-ACCESS-TOKEN The token to identify the logged-in user
 */
var SysConfigurationsService = /** @class */ (function () {
    /**
     * Class constructor
     */
    function SysConfigurationsService(config, rest) {
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
    /**
     * Create new configuration in the system
     * The response includes access token valid for 20 minutes. The client side should renew the token before expiration using refresh-token method
     * \@Return: EntityResponse<Configuration>
     * @param {?=} body
     * @return {?}
     */
    SysConfigurationsService.prototype.create = /**
     * Create new configuration in the system
     * The response includes access token valid for 20 minutes. The client side should renew the token before expiration using refresh-token method
     * \@Return: EntityResponse<Configuration>
     * @param {?=} body
     * @return {?}
     */
    function (body) {
        return this.rest.post("" + this.baseUrl, typeof body === 'object' ? JSON.stringify(body) : body);
    };
    /**
     * Update configuration in the system
     * @Return: EntityResponse<Configuration>
     */
    /**
     * Update configuration in the system
     * \@Return: EntityResponse<Configuration>
     * @param {?=} id
     * @param {?=} body
     * @return {?}
     */
    SysConfigurationsService.prototype.update = /**
     * Update configuration in the system
     * \@Return: EntityResponse<Configuration>
     * @param {?=} id
     * @param {?=} body
     * @return {?}
     */
    function (id, body) {
        return this.rest.put(this.baseUrl + "/" + id, typeof body === 'object' ? JSON.stringify(body) : body);
    };
    /**
     * Delete configuration by id
     * @Return: ActionResponse
     */
    /**
     * Delete configuration by id
     * \@Return: ActionResponse
     * @param {?=} id
     * @return {?}
     */
    SysConfigurationsService.prototype.delete = /**
     * Delete configuration by id
     * \@Return: ActionResponse
     * @param {?=} id
     * @return {?}
     */
    function (id) {
        return this.rest.delete(this.baseUrl + "/" + id);
    };
    /**
     * Set default version for configuration
     * @Return: ActionResponse
     */
    /**
     * Set default version for configuration
     * \@Return: ActionResponse
     * @param {?=} id
     * @param {?=} versionId
     * @return {?}
     */
    SysConfigurationsService.prototype.setDefaultVersion = /**
     * Set default version for configuration
     * \@Return: ActionResponse
     * @param {?=} id
     * @param {?=} versionId
     * @return {?}
     */
    function (id, versionId) {
        return this.rest.put(this.baseUrl + "/" + id + "/default-version/" + versionId, null);
    };
    /**
     * Get configuration by id
     * @Return: EntityResponse<Configuration>
     */
    /**
     * Get configuration by id
     * \@Return: EntityResponse<Configuration>
     * @param {?=} id
     * @return {?}
     */
    SysConfigurationsService.prototype.get = /**
     * Get configuration by id
     * \@Return: EntityResponse<Configuration>
     * @param {?=} id
     * @return {?}
     */
    function (id) {
        return this.rest.get(this.baseUrl + "/" + id);
    };
    /**
     * Get list of configurations by filter
     * @Return: QueryResponse<Configuration>
     */
    /**
     * Get list of configurations by filter
     * \@Return: QueryResponse<Configuration>
     * @param {?=} target
     * @param {?=} search
     * @param {?=} sort
     * @param {?=} page
     * @param {?=} pageSize
     * @return {?}
     */
    SysConfigurationsService.prototype.find = /**
     * Get list of configurations by filter
     * \@Return: QueryResponse<Configuration>
     * @param {?=} target
     * @param {?=} search
     * @param {?=} sort
     * @param {?=} page
     * @param {?=} pageSize
     * @return {?}
     */
    function (target, search, sort, page, pageSize) {
        var _a;
        /** @type {?} */
        var params = new Array();
        if (target != null) {
            params.push("target=" + target);
        }
        if (search != null) {
            params.push("search=" + search);
        }
        if (sort != null) {
            params.push("sort=" + sort);
        }
        if (page != null) {
            params.push("page=" + page);
        }
        if (pageSize != null) {
            params.push("pageSize=" + pageSize);
        }
        return (_a = this.rest).get.apply(_a, tslib_1.__spread(["" + this.baseUrl], params));
    };
    /**
     * Create new configuration version in the system
     * @Return: EntityResponse<ConfigurationVersion>
     */
    /**
     * Create new configuration version in the system
     * \@Return: EntityResponse<ConfigurationVersion>
     * @param {?=} id
     * @param {?=} body
     * @return {?}
     */
    SysConfigurationsService.prototype.createVersion = /**
     * Create new configuration version in the system
     * \@Return: EntityResponse<ConfigurationVersion>
     * @param {?=} id
     * @param {?=} body
     * @return {?}
     */
    function (id, body) {
        return this.rest.post(this.baseUrl + "/" + id + "/versions", typeof body === 'object' ? JSON.stringify(body) : body);
    };
    /**
     * Update configuration version in the system
     * @Return: EntityResponse<ConfigurationVersion>
     */
    /**
     * Update configuration version in the system
     * \@Return: EntityResponse<ConfigurationVersion>
     * @param {?=} id
     * @param {?=} body
     * @return {?}
     */
    SysConfigurationsService.prototype.updateVersion = /**
     * Update configuration version in the system
     * \@Return: EntityResponse<ConfigurationVersion>
     * @param {?=} id
     * @param {?=} body
     * @return {?}
     */
    function (id, body) {
        return this.rest.put(this.baseUrl + "/" + id + "/versions", typeof body === 'object' ? JSON.stringify(body) : body);
    };
    /**
     * Duplicate configuration version from existing one
     * @Return: EntityResponse<ConfigurationVersion>
     */
    /**
     * Duplicate configuration version from existing one
     * \@Return: EntityResponse<ConfigurationVersion>
     * @param {?=} id
     * @param {?=} versionId
     * @return {?}
     */
    SysConfigurationsService.prototype.duplicateVersion = /**
     * Duplicate configuration version from existing one
     * \@Return: EntityResponse<ConfigurationVersion>
     * @param {?=} id
     * @param {?=} versionId
     * @return {?}
     */
    function (id, versionId) {
        return this.rest.post(this.baseUrl + "/" + id + "/versions/" + versionId, null);
    };
    /**
     * Delete configuration version by id
     * @Return: ActionResponse
     */
    /**
     * Delete configuration version by id
     * \@Return: ActionResponse
     * @param {?=} id
     * @param {?=} versionId
     * @return {?}
     */
    SysConfigurationsService.prototype.deleteVersion = /**
     * Delete configuration version by id
     * \@Return: ActionResponse
     * @param {?=} id
     * @param {?=} versionId
     * @return {?}
     */
    function (id, versionId) {
        return this.rest.delete(this.baseUrl + "/" + id + "/versions/" + versionId);
    };
    /**
     * Get specific configuration version
     * @Return: EntityResponse<ConfigurationVersion>
     */
    /**
     * Get specific configuration version
     * \@Return: EntityResponse<ConfigurationVersion>
     * @param {?=} id
     * @param {?=} versionId
     * @return {?}
     */
    SysConfigurationsService.prototype.getVersion = /**
     * Get specific configuration version
     * \@Return: EntityResponse<ConfigurationVersion>
     * @param {?=} id
     * @param {?=} versionId
     * @return {?}
     */
    function (id, versionId) {
        return this.rest.get(this.baseUrl + "/" + id + "/versions/" + versionId);
    };
    /**
     * Get all versions of specific configuration
     * @Return: EntitiesResponse<ConfigurationVersion>
     */
    /**
     * Get all versions of specific configuration
     * \@Return: EntitiesResponse<ConfigurationVersion>
     * @param {?=} id
     * @return {?}
     */
    SysConfigurationsService.prototype.getVersions = /**
     * Get all versions of specific configuration
     * \@Return: EntitiesResponse<ConfigurationVersion>
     * @param {?=} id
     * @return {?}
     */
    function (id) {
        return this.rest.get(this.baseUrl + "/" + id + "/versions");
    };
    /**
     * Create new configuration template in the system
     * @Return: EntityResponse<ConfigurationTemplate>
     */
    /**
     * Create new configuration template in the system
     * \@Return: EntityResponse<ConfigurationTemplate>
     * @param {?=} body
     * @return {?}
     */
    SysConfigurationsService.prototype.createTemplate = /**
     * Create new configuration template in the system
     * \@Return: EntityResponse<ConfigurationTemplate>
     * @param {?=} body
     * @return {?}
     */
    function (body) {
        return this.rest.post(this.baseUrl + "/templates", typeof body === 'object' ? JSON.stringify(body) : body);
    };
    /**
     * Update configuration template in the system
     * @Return: EntityResponse<ConfigurationTemplate>
     */
    /**
     * Update configuration template in the system
     * \@Return: EntityResponse<ConfigurationTemplate>
     * @param {?=} id
     * @param {?=} body
     * @return {?}
     */
    SysConfigurationsService.prototype.updateTemplate = /**
     * Update configuration template in the system
     * \@Return: EntityResponse<ConfigurationTemplate>
     * @param {?=} id
     * @param {?=} body
     * @return {?}
     */
    function (id, body) {
        return this.rest.put(this.baseUrl + "/templates/" + id, typeof body === 'object' ? JSON.stringify(body) : body);
    };
    /**
     * Delete configuration template by id
     * @Return: ActionResponse
     */
    /**
     * Delete configuration template by id
     * \@Return: ActionResponse
     * @param {?=} id
     * @return {?}
     */
    SysConfigurationsService.prototype.deleteTemplate = /**
     * Delete configuration template by id
     * \@Return: ActionResponse
     * @param {?=} id
     * @return {?}
     */
    function (id) {
        return this.rest.delete(this.baseUrl + "/templates/" + id);
    };
    /**
     * Get configuration template by id
     * @Return: EntityResponse<ConfigurationTemplate>
     */
    /**
     * Get configuration template by id
     * \@Return: EntityResponse<ConfigurationTemplate>
     * @param {?=} id
     * @return {?}
     */
    SysConfigurationsService.prototype.getTemplate = /**
     * Get configuration template by id
     * \@Return: EntityResponse<ConfigurationTemplate>
     * @param {?=} id
     * @return {?}
     */
    function (id) {
        return this.rest.get(this.baseUrl + "/templates/" + id);
    };
    /**
     * Get list of configuration templates
     * @Return: QueryResponse<ConfigurationTemplate>
     */
    /**
     * Get list of configuration templates
     * \@Return: QueryResponse<ConfigurationTemplate>
     * @param {?=} page
     * @param {?=} pageSize
     * @return {?}
     */
    SysConfigurationsService.prototype.findTemplates = /**
     * Get list of configuration templates
     * \@Return: QueryResponse<ConfigurationTemplate>
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
        return (_a = this.rest).get.apply(_a, tslib_1.__spread([this.baseUrl + "/templates"], params));
    };
    SysConfigurationsService.decorators = [
        { type: Injectable }
    ];
    /** @nocollapse */
    SysConfigurationsService.ctorParameters = function () { return [
        { type: CoreConfig, decorators: [{ type: Inject, args: ['config',] }] },
        { type: RestUtil }
    ]; };
    return SysConfigurationsService;
}());
export { SysConfigurationsService };
if (false) {
    /**
     * @type {?}
     * @private
     */
    SysConfigurationsService.prototype.baseUrl;
    /**
     * @type {?}
     * @private
     */
    SysConfigurationsService.prototype.config;
    /**
     * @type {?}
     * @private
     */
    SysConfigurationsService.prototype.rest;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3lzQ29uZmlndXJhdGlvbnNTZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGFnZW50dmkvbmctY29yZS1saWIvIiwic291cmNlcyI6WyJsaWIvc2VydmljZXMvc3lzQ29uZmlndXJhdGlvbnNTZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDbkQsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLHVCQUF1QixDQUFDO0FBQ2pELE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxjQUFjLENBQUM7Ozs7OztBQWExQztJQU1FOztPQUVHO0lBQ0gsa0NBQXNDLE1BQWtCLEVBQVUsSUFBYztRQUExQyxXQUFNLEdBQU4sTUFBTSxDQUFZO1FBQVUsU0FBSSxHQUFKLElBQUksQ0FBVTs7UUFMeEUsWUFBTyxHQUFHLHFCQUFxQixDQUFDO1FBTXRDLElBQUksQ0FBQyxPQUFPLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxHQUFHLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQztJQUNoRCxDQUFDO0lBR0Q7Ozs7T0FJRzs7Ozs7Ozs7SUFDSCx5Q0FBTTs7Ozs7OztJQUFOLFVBQU8sSUFBb0I7UUFDekIsT0FBTyxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxLQUFHLElBQUksQ0FBQyxPQUFTLEVBQUUsT0FBTyxJQUFJLEtBQUssUUFBUSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUNuRyxDQUFDO0lBRUQ7OztPQUdHOzs7Ozs7OztJQUNILHlDQUFNOzs7Ozs7O0lBQU4sVUFBTyxFQUFXLEVBQUUsSUFBb0I7UUFDdEMsT0FBTyxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBSSxJQUFJLENBQUMsT0FBTyxTQUFJLEVBQUksRUFBRSxPQUFPLElBQUksS0FBSyxR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ZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBSZXN0VXRpbCB9IGZyb20gJy4uLy4uL3V0aWxzL3Jlc3QtdXRpbCc7XG5pbXBvcnQgeyBDb3JlQ29uZmlnIH0gZnJvbSAnLi4vLi4vY29uZmlnJztcblxuaW1wb3J0IHsgQ29uZmlndXJhdGlvblRlbXBsYXRlIH0gZnJvbSAnLi4vZW50aXRpZXMvQ29uZmlndXJhdGlvblRlbXBsYXRlJztcbmltcG9ydCB7IENvbmZpZ3VyYXRpb24gfSBmcm9tICcuLi9lbnRpdGllcy9Db25maWd1cmF0aW9uJztcbmltcG9ydCB7IFByb2R1Y3RUeXBlQ29kZSB9IGZyb20gJy4uL2VudW1zL1Byb2R1Y3RUeXBlQ29kZSc7XG5pbXBvcnQgeyBDb25maWd1cmF0aW9uVmVyc2lvbiB9IGZyb20gJy4uL2VudGl0aWVzL0NvbmZpZ3VyYXRpb25WZXJzaW9uJztcblxuXG4vKipcbiAqIExpc3Qgb2YgY29uZmlndXJhdGlvbnMgcmVsYXRlZCBhY3Rpb25zIGZvciBzeXN0ZW0gYWRtaW5pc3RyYXRvciBvbmx5XG4gKiBAUmVxdWVzdEhlYWRlciBYLUFQSS1LRVkgVGhlIGtleSB0byBpZGVudGlmeSB0aGUgYXBwbGljYXRpb24gKGNvbnNvbGUpXG4gKiBAUmVxdWVzdEhlYWRlciBYLUFDQ0VTUy1UT0tFTiBUaGUgdG9rZW4gdG8gaWRlbnRpZnkgdGhlIGxvZ2dlZC1pbiB1c2VyIFxuICovXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgU3lzQ29uZmlndXJhdGlvbnNTZXJ2aWNlIHtcblxuICAvLyBVUkwgdG8gd2ViIGFwaVxuICBwcml2YXRlIGJhc2VVcmwgPSAnL3N5cy9jb25maWd1cmF0aW9ucyc7XG5cbiAgLyoqXG4gICAqIENsYXNzIGNvbnN0cnVjdG9yXG4gICAqL1xuICBjb25zdHJ1Y3RvcihASW5qZWN0KCdjb25maWcnKSBwcml2YXRlIGNvbmZpZzogQ29yZUNvbmZpZywgcHJpdmF0ZSByZXN0OiBSZXN0VXRpbCkge1xuICAgIHRoaXMuYmFzZVVybCA9IHRoaXMuY29uZmlnLmFwaSArIHRoaXMuYmFzZVVybDtcbiAgfVxuXG5cbiAgLyoqXG4gICAqIENyZWF0ZSBuZXcgY29uZmlndXJhdGlvbiBpbiB0aGUgc3lzdGVtXG4gICAqIFRoZSByZXNwb25zZSBpbmNsdWRlcyBhY2Nlc3MgdG9rZW4gdmFsaWQgZm9yIDIwIG1pbnV0ZXMuIFRoZSBjbGllbnQgc2lkZSBzaG91bGQgcmVuZXcgdGhlIHRva2VuIGJlZm9yZSBleHBpcmF0aW9uIHVzaW5nIHJlZnJlc2gtdG9rZW4gbWV0aG9kXG4gICAqIEBSZXR1cm46IEVudGl0eVJlc3BvbnNlPENvbmZpZ3VyYXRpb24+XG4gICAqL1xuICBjcmVhdGUoYm9keT86IENvbmZpZ3VyYXRpb24pIHtcbiAgICByZXR1cm4gdGhpcy5yZXN0LnBvc3QoYCR7dGhpcy5iYXNlVXJsfWAsIHR5cGVvZiBib2R5ID09PSAnb2JqZWN0JyA/IEpTT04uc3RyaW5naWZ5KGJvZHkpIDogYm9keSk7XG4gIH1cblxuICAvKipcbiAgICogVXBkYXRlIGNvbmZpZ3VyYXRpb24gaW4gdGhlIHN5c3RlbVxuICAgKiBAUmV0dXJuOiBFbnRpdHlSZXNwb25zZTxDb25maWd1cmF0aW9uPlxuICAgKi9cbiAgdXBkYXRlKGlkPzogc3RyaW5nLCBib2R5PzogQ29uZmlndXJhdGlvbikge1xuICAgIHJldHVybiB0aGlzLnJlc3QucHV0KGAke3RoaXMuYmFzZVVybH0vJHtpZH1gLCB0eXBlb2YgYm9keSA9PT0gJ29iamVjdCcgPyBKU09OLnN0cmluZ2lmeShib2R5KSA6IGJvZHkpO1xuICB9XG5cbiAgLyoqXG4gICAqIERlbGV0ZSBjb25maWd1cmF0aW9uIGJ5IGlkXG4gICAqIEBSZXR1cm46IEFjdGlvblJlc3BvbnNlXG4gICAqL1xuICBkZWxldGUoaWQ/OiBzdHJpbmcpIHtcbiAgICByZXR1cm4gdGhpcy5yZXN0LmRlbGV0ZShgJHt0aGlzLmJhc2VVcmx9LyR7aWR9YCk7XG4gIH1cblxuICAvKipcbiAgICogU2V0IGRlZmF1bHQgdmVyc2lvbiBmb3IgY29uZmlndXJhdGlvblxuICAgKiBAUmV0dXJuOiBBY3Rpb25SZXNwb25zZVxuICAgKi9cbiAgc2V0RGVmYXVsdFZlcnNpb24oaWQ/OiBzdHJpbmcsIHZlcnNpb25JZD86IHN0cmluZykge1xuICAgIHJldHVybiB0aGlzLnJlc3QucHV0KGAke3RoaXMuYmFzZVVybH0vJHtpZH0vZGVmYXVsdC12ZXJzaW9uLyR7dmVyc2lvbklkfWAsIG51bGwpO1xuICB9XG5cbiAgLyoqXG4gICAqIEdldCBjb25maWd1cmF0aW9uIGJ5IGlkXG4gICAqIEBSZXR1cm46IEVudGl0eVJlc3BvbnNlPENvbmZpZ3VyYXRpb24+XG4gICAqL1xuICBnZXQoaWQ/OiBzdHJpbmcpIHtcbiAgICByZXR1cm4gdGhpcy5yZXN0LmdldChgJHt0aGlzLmJhc2VVcmx9LyR7aWR9YCk7XG4gIH1cblxuICAvKipcbiAgICogR2V0IGxpc3Qgb2YgY29uZmlndXJhdGlvbnMgYnkgZmlsdGVyXG4gICAqIEBSZXR1cm46IFF1ZXJ5UmVzcG9uc2U8Q29uZmlndXJhdGlvbj5cbiAgICovXG4gIGZpbmQodGFyZ2V0PzogUHJvZHVjdFR5cGVDb2RlW10sIHNlYXJjaD86IHN0cmluZywgc29ydD86IHN0cmluZywgcGFnZT86IG51bWJlciwgcGFnZVNpemU/OiBudW1iZXIpIHtcbiAgICBjb25zdCBwYXJhbXMgPSBuZXcgQXJyYXkoKTtcdFx0XG4gICAgaWYgKHRhcmdldCAhPSBudWxsKSB7IHBhcmFtcy5wdXNoKGB0YXJnZXQ9JHt0YXJnZXR9YCk7IH1cbiAgICBpZiAoc2VhcmNoICE9IG51bGwpIHsgcGFyYW1zLnB1c2goYHNlYXJjaD0ke3NlYXJjaH1gKTsgfVxuICAgIGlmIChzb3J0ICE9IG51bGwpIHsgcGFyYW1zLnB1c2goYHNvcnQ9JHtzb3J0fWApOyB9XG4gICAgaWYgKHBhZ2UgIT0gbnVsbCkgeyBwYXJhbXMucHVzaChgcGFnZT0ke3BhZ2V9YCk7IH1cbiAgICBpZiAocGFnZVNpemUgIT0gbnVsbCkgeyBwYXJhbXMucHVzaChgcGFnZVNpemU9JHtwYWdlU2l6ZX1gKTsgfVxuXG5cdFx0cmV0dXJuIHRoaXMucmVzdC5nZXQoYCR7dGhpcy5iYXNlVXJsfWAsIC4uLnBhcmFtcyk7XG4gIH1cblxuICAvKipcbiAgICogQ3JlYXRlIG5ldyBjb25maWd1cmF0aW9uIHZlcnNpb24gaW4gdGhlIHN5c3RlbVxuICAgKiBAUmV0dXJuOiBFbnRpdHlSZXNwb25zZTxDb25maWd1cmF0aW9uVmVyc2lvbj5cbiAgICovXG4gIGNyZWF0ZVZlcnNpb24oaWQ/OiBzdHJpbmcsIGJvZHk/OiBDb25maWd1cmF0aW9uVmVyc2lvbikge1xuICAgIHJldHVybiB0aGlzLnJlc3QucG9zdChgJHt0aGlzLmJhc2VVcmx9LyR7aWR9L3ZlcnNpb25zYCwgdHlwZW9mIGJvZHkgPT09ICdvYmplY3QnID8gSlNPTi5zdHJpbmdpZnkoYm9keSkgOiBib2R5KTtcbiAgfVxuXG4gIC8qKlxuICAgKiBVcGRhdGUgY29uZmlndXJhdGlvbiB2ZXJzaW9uIGluIHRoZSBzeXN0ZW1cbiAgICogQFJldHVybjogRW50aXR5UmVzcG9uc2U8Q29uZmlndXJhdGlvblZlcnNpb24+XG4gICAqL1xuICB1cGRhdGVWZXJzaW9uKGlkPzogc3RyaW5nLCBib2R5PzogQ29uZmlndXJhdGlvblZlcnNpb24pIHtcbiAgICByZXR1cm4gdGhpcy5yZXN0LnB1dChgJHt0aGlzLmJhc2VVcmx9LyR7aWR9L3ZlcnNpb25zYCwgdHlwZW9mIGJvZHkgPT09ICdvYmplY3QnID8gSlNPTi5zdHJpbmdpZnkoYm9keSkgOiBib2R5KTtcbiAgfVxuXG4gIC8qKlxuICAgKiBEdXBsaWNhdGUgY29uZmlndXJhdGlvbiB2ZXJzaW9uIGZyb20gZXhpc3Rpbmcgb25lXG4gICAqIEBSZXR1cm46IEVudGl0eVJlc3BvbnNlPENvbmZpZ3VyYXRpb25WZXJzaW9uPlxuICAgKi9cbiAgZHVwbGljYXRlVmVyc2lvbihpZD86IHN0cmluZywgdmVyc2lvbklkPzogc3RyaW5nKSB7XG4gICAgcmV0dXJuIHRoaXMucmVzdC5wb3N0KGAke3RoaXMuYmFzZVVybH0vJHtpZH0vdmVyc2lvbnMvJHt2ZXJzaW9uSWR9YCwgbnVsbCk7XG4gIH1cblxuICAvKipcbiAgICogRGVsZXRlIGNvbmZpZ3VyYXRpb24gdmVyc2lvbiBieSBpZFxuICAgKiBAUmV0dXJuOiBBY3Rpb25SZXNwb25zZVxuICAgKi9cbiAgZGVsZXRlVmVyc2lvbihpZD86IHN0cmluZywgdmVyc2lvbklkPzogc3RyaW5nKSB7XG4gICAgcmV0dXJuIHRoaXMucmVzdC5kZWxldGUoYCR7dGhpcy5iYXNlVXJsfS8ke2lkfS92ZXJzaW9ucy8ke3ZlcnNpb25JZH1gKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBHZXQgc3BlY2lmaWMgY29uZmlndXJhdGlvbiB2ZXJzaW9uXG4gICAqIEBSZXR1cm46IEVudGl0eVJlc3BvbnNlPENvbmZpZ3VyYXRpb25WZXJzaW9uPlxuICAgKi9cbiAgZ2V0VmVyc2lvbihpZD86IHN0cmluZywgdmVyc2lvbklkPzogc3RyaW5nKSB7XG4gICAgcmV0dXJuIHRoaXMucmVzdC5nZXQoYCR7dGhpcy5iYXNlVXJsfS8ke2lkfS92ZXJzaW9ucy8ke3ZlcnNpb25JZH1gKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBHZXQgYWxsIHZlcnNpb25zIG9mIHNwZWNpZmljIGNvbmZpZ3VyYXRpb25cbiAgICogQFJldHVybjogRW50aXRpZXNSZXNwb25zZTxDb25maWd1cmF0aW9uVmVyc2lvbj5cbiAgICovXG4gIGdldFZlcnNpb25zKGlkPzogc3RyaW5nKSB7XG4gICAgcmV0dXJuIHRoaXMucmVzdC5nZXQoYCR7dGhpcy5iYXNlVXJsfS8ke2lkfS92ZXJzaW9uc2ApO1xuICB9XG5cbiAgLyoqXG4gICAqIENyZWF0ZSBuZXcgY29uZmlndXJhdGlvbiB0ZW1wbGF0ZSBpbiB0aGUgc3lzdGVtXG4gICAqIEBSZXR1cm46IEVudGl0eVJlc3BvbnNlPENvbmZpZ3VyYXRpb25UZW1wbGF0ZT5cbiAgICovXG4gIGNyZWF0ZVRlbXBsYXRlKGJvZHk/OiBDb25maWd1cmF0aW9uVGVtcGxhdGUpIHtcbiAgICByZXR1cm4gdGhpcy5yZXN0LnBvc3QoYCR7dGhpcy5iYXNlVXJsfS90ZW1wbGF0ZXNgLCB0eXBlb2YgYm9keSA9PT0gJ29iamVjdCcgPyBKU09OLnN0cmluZ2lmeShib2R5KSA6IGJvZHkpO1xuICB9XG5cbiAgLyoqXG4gICAqIFVwZGF0ZSBjb25maWd1cmF0aW9uIHRlbXBsYXRlIGluIHRoZSBzeXN0ZW1cbiAgICogQFJldHVybjogRW50aXR5UmVzcG9uc2U8Q29uZmlndXJhdGlvblRlbXBsYXRlPlxuICAgKi9cbiAgdXBkYXRlVGVtcGxhdGUoaWQ/OiBzdHJpbmcsIGJvZHk/OiBDb25maWd1cmF0aW9uVGVtcGxhdGUpIHtcbiAgICByZXR1cm4gdGhpcy5yZXN0LnB1dChgJHt0aGlzLmJhc2VVcmx9L3RlbXBsYXRlcy8ke2lkfWAsIHR5cGVvZiBib2R5ID09PSAnb2JqZWN0JyA/IEpTT04uc3RyaW5naWZ5KGJvZHkpIDogYm9keSk7XG4gIH1cblxuICAvKipcbiAgICogRGVsZXRlIGNvbmZpZ3VyYXRpb24gdGVtcGxhdGUgYnkgaWRcbiAgICogQFJldHVybjogQWN0aW9uUmVzcG9uc2VcbiAgICovXG4gIGRlbGV0ZVRlbXBsYXRlKGlkPzogc3RyaW5nKSB7XG4gICAgcmV0dXJuIHRoaXMucmVzdC5kZWxldGUoYCR7dGhpcy5iYXNlVXJsfS90ZW1wbGF0ZXMvJHtpZH1gKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBHZXQgY29uZmlndXJhdGlvbiB0ZW1wbGF0ZSBieSBpZFxuICAgKiBAUmV0dXJuOiBFbnRpdHlSZXNwb25zZTxDb25maWd1cmF0aW9uVGVtcGxhdGU+XG4gICAqL1xuICBnZXRUZW1wbGF0ZShpZD86IHN0cmluZykge1xuICAgIHJldHVybiB0aGlzLnJlc3QuZ2V0KGAke3RoaXMuYmFzZVVybH0vdGVtcGxhdGVzLyR7aWR9YCk7XG4gIH1cblxuICAvKipcbiAgICogR2V0IGxpc3Qgb2YgY29uZmlndXJhdGlvbiB0ZW1wbGF0ZXNcbiAgICogQFJldHVybjogUXVlcnlSZXNwb25zZTxDb25maWd1cmF0aW9uVGVtcGxhdGU+XG4gICAqL1xuICBmaW5kVGVtcGxhdGVzKHBhZ2U/OiBudW1iZXIsIHBhZ2VTaXplPzogbnVtYmVyKSB7XG4gICAgY29uc3QgcGFyYW1zID0gbmV3IEFycmF5KCk7XHRcdFxuICAgIGlmIChwYWdlICE9IG51bGwpIHsgcGFyYW1zLnB1c2goYHBhZ2U9JHtwYWdlfWApOyB9XG4gICAgaWYgKHBhZ2VTaXplICE9IG51bGwpIHsgcGFyYW1zLnB1c2goYHBhZ2VTaXplPSR7cGFnZVNpemV9YCk7IH1cblxuXHRcdHJldHVybiB0aGlzLnJlc3QuZ2V0KGAke3RoaXMuYmFzZVVybH0vdGVtcGxhdGVzYCwgLi4ucGFyYW1zKTtcbiAgfVxuXG59XG4iXX0=