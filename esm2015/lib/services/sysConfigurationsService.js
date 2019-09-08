/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable, Inject } from '@angular/core';
import { RestUtil } from '../../utils/rest-util';
import { CoreConfig } from '../../config';
/**
 * List of configurations related actions for system administrator only
 * \@RequestHeader X-API-KEY The key to identify the application (console)
 * \@RequestHeader X-ACCESS-TOKEN The token to identify the logged-in user
 */
export class SysConfigurationsService {
    /**
     * Class constructor
     * @param {?} config
     * @param {?} rest
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
     * \@Return: EntityResponse<Configuration>
     * @param {?=} body
     * @return {?}
     */
    create(body) {
        return this.rest.post(`${this.baseUrl}`, typeof body === 'object' ? JSON.stringify(body) : body);
    }
    /**
     * Update configuration in the system
     * \@Return: EntityResponse<Configuration>
     * @param {?=} id
     * @param {?=} body
     * @return {?}
     */
    update(id, body) {
        return this.rest.put(`${this.baseUrl}/${id}`, typeof body === 'object' ? JSON.stringify(body) : body);
    }
    /**
     * Delete configuration by id
     * \@Return: ActionResponse
     * @param {?=} id
     * @return {?}
     */
    delete(id) {
        return this.rest.delete(`${this.baseUrl}/${id}`);
    }
    /**
     * Set default version for configuration
     * \@Return: ActionResponse
     * @param {?=} id
     * @param {?=} versionId
     * @return {?}
     */
    setDefaultVersion(id, versionId) {
        return this.rest.put(`${this.baseUrl}/${id}/default-version/${versionId}`, null);
    }
    /**
     * Get configuration by id
     * \@Return: EntityResponse<Configuration>
     * @param {?=} id
     * @return {?}
     */
    get(id) {
        return this.rest.get(`${this.baseUrl}/${id}`);
    }
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
    find(target, search, sort, page, pageSize) {
        /** @type {?} */
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
     * The response includes access token valid for 20 minutes. The client side should renew the token before expiration using refresh-token method
     * \@Return: EntityResponse<ConfigurationVersion>
     * @param {?=} id
     * @param {?=} body
     * @return {?}
     */
    createVersion(id, body) {
        return this.rest.post(`${this.baseUrl}/${id}/versions`, typeof body === 'object' ? JSON.stringify(body) : body);
    }
    /**
     * Update configuration version in the system
     * The response includes access token valid for 20 minutes. The client side should renew the token before expiration using refresh-token method
     * \@Return: EntityResponse<ConfigurationVersion>
     * @param {?=} id
     * @param {?=} body
     * @return {?}
     */
    updateVersion(id, body) {
        return this.rest.put(`${this.baseUrl}/${id}/versions`, typeof body === 'object' ? JSON.stringify(body) : body);
    }
    /**
     * Delete configuration version by id
     * \@Return: ActionResponse
     * @param {?=} id
     * @param {?=} versionId
     * @return {?}
     */
    deleteVersion(id, versionId) {
        return this.rest.delete(`${this.baseUrl}/${id}/versions/${versionId}`);
    }
    /**
     * Get specific configuration version
     * \@Return: EntityResponse<ConfigurationVersion>
     * @param {?=} id
     * @param {?=} versionId
     * @return {?}
     */
    getVersion(id, versionId) {
        return this.rest.get(`${this.baseUrl}/${id}/versions/${versionId}`);
    }
    /**
     * Get all versions of specific configuration
     * \@Return: EntitiesResponse<ConfigurationVersion>
     * @param {?=} id
     * @return {?}
     */
    getVersions(id) {
        return this.rest.get(`${this.baseUrl}/${id}/versions`);
    }
}
SysConfigurationsService.decorators = [
    { type: Injectable }
];
/** @nocollapse */
SysConfigurationsService.ctorParameters = () => [
    { type: CoreConfig, decorators: [{ type: Inject, args: ['config',] }] },
    { type: RestUtil }
];
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3lzQ29uZmlndXJhdGlvbnNTZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGFnZW50dmkvbmctY29yZS1saWIvIiwic291cmNlcyI6WyJsaWIvc2VydmljZXMvc3lzQ29uZmlndXJhdGlvbnNTZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUNuRCxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sdUJBQXVCLENBQUM7QUFDakQsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGNBQWMsQ0FBQzs7Ozs7O0FBYTFDLE1BQU0sT0FBTyx3QkFBd0I7Ozs7OztJQVFuQyxZQUFzQyxNQUFrQixFQUFVLElBQWM7UUFBMUMsV0FBTSxHQUFOLE1BQU0sQ0FBWTtRQUFVLFNBQUksR0FBSixJQUFJLENBQVU7O1FBTHhFLFlBQU8sR0FBRyxxQkFBcUIsQ0FBQztRQU10QyxJQUFJLENBQUMsT0FBTyxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUMsR0FBRyxHQUFHLElBQUksQ0FBQyxPQUFPLENBQUM7SUFDaEQsQ0FBQzs7Ozs7Ozs7SUFRRCxNQUFNLENBQUMsSUFBb0I7UUFDekIsT0FBTyxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLElBQUksQ0FBQyxPQUFPLEVBQUUsRUFBRSxPQUFPLElBQUksS0FBSyxRQUFRLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQ25HLENBQUM7Ozs7Ozs7O0lBTUQsTUFBTSxDQUFDLEVBQVcsRUFBRSxJQUFvQjtRQUN0QyxPQUFPLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLEdBQUcsSUFBSSxDQUFDLE9BQU8sSUFBSSxFQUFFLEVBQUUsRUFBRSxPQUFPLElBQUksS0FBSyxRQUFRLENBQUMsQ0FBQyxDQUFDLElBQUks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TyxJQUFJLEVBQUUsYUFBYSxTQUFTLEVBQUUsQ0FBQyxDQUFDO0lBQ3RFLENBQUM7Ozs7Ozs7SUFNRCxXQUFXLENBQUMsRUFBVztRQUNyQixPQUFPLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLEdBQUcsSUFBSSxDQUFDLE9BQU8sSUFBSSxFQUFFLFdBQVcsQ0FBQyxDQUFDO0lBQ3pELENBQUM7OztZQTlHRixVQUFVOzs7O1lBWkYsVUFBVSx1QkFxQkosTUFBTSxTQUFDLFFBQVE7WUF0QnJCLFFBQVE7Ozs7Ozs7SUFpQmYsMkNBQXdDOzs7OztJQUs1QiwwQ0FBNEM7Ozs7O0lBQUUsd0NBQXNCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSwgSW5qZWN0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBSZXN0VXRpbCB9IGZyb20gJy4uLy4uL3V0aWxzL3Jlc3QtdXRpbCc7XG5pbXBvcnQgeyBDb3JlQ29uZmlnIH0gZnJvbSAnLi4vLi4vY29uZmlnJztcblxuaW1wb3J0IHsgQ29uZmlndXJhdGlvblZlcnNpb24gfSBmcm9tICcuLi9lbnRpdGllcy9Db25maWd1cmF0aW9uVmVyc2lvbic7XG5pbXBvcnQgeyBDb25maWd1cmF0aW9uIH0gZnJvbSAnLi4vZW50aXRpZXMvQ29uZmlndXJhdGlvbic7XG5pbXBvcnQgeyBQcm9kdWN0VHlwZUNvZGUgfSBmcm9tICcuLi9lbnVtcy9Qcm9kdWN0VHlwZUNvZGUnO1xuXG5cbi8qKlxuICogTGlzdCBvZiBjb25maWd1cmF0aW9ucyByZWxhdGVkIGFjdGlvbnMgZm9yIHN5c3RlbSBhZG1pbmlzdHJhdG9yIG9ubHlcbiAqIEBSZXF1ZXN0SGVhZGVyIFgtQVBJLUtFWSBUaGUga2V5IHRvIGlkZW50aWZ5IHRoZSBhcHBsaWNhdGlvbiAoY29uc29sZSlcbiAqIEBSZXF1ZXN0SGVhZGVyIFgtQUNDRVNTLVRPS0VOIFRoZSB0b2tlbiB0byBpZGVudGlmeSB0aGUgbG9nZ2VkLWluIHVzZXIgXG4gKi9cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBTeXNDb25maWd1cmF0aW9uc1NlcnZpY2Uge1xuXG4gIC8vIFVSTCB0byB3ZWIgYXBpXG4gIHByaXZhdGUgYmFzZVVybCA9ICcvc3lzL2NvbmZpZ3VyYXRpb25zJztcblxuICAvKipcbiAgICogQ2xhc3MgY29uc3RydWN0b3JcbiAgICovXG4gIGNvbnN0cnVjdG9yKEBJbmplY3QoJ2NvbmZpZycpIHByaXZhdGUgY29uZmlnOiBDb3JlQ29uZmlnLCBwcml2YXRlIHJlc3Q6IFJlc3RVdGlsKSB7XG4gICAgdGhpcy5iYXNlVXJsID0gdGhpcy5jb25maWcuYXBpICsgdGhpcy5iYXNlVXJsO1xuICB9XG5cblxuICAvKipcbiAgICogQ3JlYXRlIG5ldyBjb25maWd1cmF0aW9uIGluIHRoZSBzeXN0ZW1cbiAgICogVGhlIHJlc3BvbnNlIGluY2x1ZGVzIGFjY2VzcyB0b2tlbiB2YWxpZCBmb3IgMjAgbWludXRlcy4gVGhlIGNsaWVudCBzaWRlIHNob3VsZCByZW5ldyB0aGUgdG9rZW4gYmVmb3JlIGV4cGlyYXRpb24gdXNpbmcgcmVmcmVzaC10b2tlbiBtZXRob2RcbiAgICogQFJldHVybjogRW50aXR5UmVzcG9uc2U8Q29uZmlndXJhdGlvbj5cbiAgICovXG4gIGNyZWF0ZShib2R5PzogQ29uZmlndXJhdGlvbikge1xuICAgIHJldHVybiB0aGlzLnJlc3QucG9zdChgJHt0aGlzLmJhc2VVcmx9YCwgdHlwZW9mIGJvZHkgPT09ICdvYmplY3QnID8gSlNPTi5zdHJpbmdpZnkoYm9keSkgOiBib2R5KTtcbiAgfVxuXG4gIC8qKlxuICAgKiBVcGRhdGUgY29uZmlndXJhdGlvbiBpbiB0aGUgc3lzdGVtXG4gICAqIEBSZXR1cm46IEVudGl0eVJlc3BvbnNlPENvbmZpZ3VyYXRpb24+XG4gICAqL1xuICB1cGRhdGUoaWQ/OiBzdHJpbmcsIGJvZHk/OiBDb25maWd1cmF0aW9uKSB7XG4gICAgcmV0dXJuIHRoaXMucmVzdC5wdXQoYCR7dGhpcy5iYXNlVXJsfS8ke2lkfWAsIHR5cGVvZiBib2R5ID09PSAnb2JqZWN0JyA/IEpTT04uc3RyaW5naWZ5KGJvZHkpIDogYm9keSk7XG4gIH1cblxuICAvKipcbiAgICogRGVsZXRlIGNvbmZpZ3VyYXRpb24gYnkgaWRcbiAgICogQFJldHVybjogQWN0aW9uUmVzcG9uc2VcbiAgICovXG4gIGRlbGV0ZShpZD86IHN0cmluZykge1xuICAgIHJldHVybiB0aGlzLnJlc3QuZGVsZXRlKGAke3RoaXMuYmFzZVVybH0vJHtpZH1gKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBTZXQgZGVmYXVsdCB2ZXJzaW9uIGZvciBjb25maWd1cmF0aW9uXG4gICAqIEBSZXR1cm46IEFjdGlvblJlc3BvbnNlXG4gICAqL1xuICBzZXREZWZhdWx0VmVyc2lvbihpZD86IHN0cmluZywgdmVyc2lvbklkPzogc3RyaW5nKSB7XG4gICAgcmV0dXJuIHRoaXMucmVzdC5wdXQoYCR7dGhpcy5iYXNlVXJsfS8ke2lkfS9kZWZhdWx0LXZlcnNpb24vJHt2ZXJzaW9uSWR9YCwgbnVsbCk7XG4gIH1cblxuICAvKipcbiAgICogR2V0IGNvbmZpZ3VyYXRpb24gYnkgaWRcbiAgICogQFJldHVybjogRW50aXR5UmVzcG9uc2U8Q29uZmlndXJhdGlvbj5cbiAgICovXG4gIGdldChpZD86IHN0cmluZykge1xuICAgIHJldHVybiB0aGlzLnJlc3QuZ2V0KGAke3RoaXMuYmFzZVVybH0vJHtpZH1gKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBHZXQgbGlzdCBvZiBjb25maWd1cmF0aW9ucyBieSBmaWx0ZXJcbiAgICogQFJldHVybjogUXVlcnlSZXNwb25zZTxDb25maWd1cmF0aW9uPlxuICAgKi9cbiAgZmluZCh0YXJnZXQ/OiBQcm9kdWN0VHlwZUNvZGVbXSwgc2VhcmNoPzogc3RyaW5nLCBzb3J0Pzogc3RyaW5nLCBwYWdlPzogbnVtYmVyLCBwYWdlU2l6ZT86IG51bWJlcikge1xuICAgIGNvbnN0IHBhcmFtcyA9IG5ldyBBcnJheSgpO1x0XHRcbiAgICBpZiAodGFyZ2V0ICE9IG51bGwpIHsgcGFyYW1zLnB1c2goYHRhcmdldD0ke3RhcmdldH1gKTsgfVxuICAgIGlmIChzZWFyY2ggIT0gbnVsbCkgeyBwYXJhbXMucHVzaChgc2VhcmNoPSR7c2VhcmNofWApOyB9XG4gICAgaWYgKHNvcnQgIT0gbnVsbCkgeyBwYXJhbXMucHVzaChgc29ydD0ke3NvcnR9YCk7IH1cbiAgICBpZiAocGFnZSAhPSBudWxsKSB7IHBhcmFtcy5wdXNoKGBwYWdlPSR7cGFnZX1gKTsgfVxuICAgIGlmIChwYWdlU2l6ZSAhPSBudWxsKSB7IHBhcmFtcy5wdXNoKGBwYWdlU2l6ZT0ke3BhZ2VTaXplfWApOyB9XG5cblx0XHRyZXR1cm4gdGhpcy5yZXN0LmdldChgJHt0aGlzLmJhc2VVcmx9YCwgLi4ucGFyYW1zKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBDcmVhdGUgbmV3IGNvbmZpZ3VyYXRpb24gdmVyc2lvbiBpbiB0aGUgc3lzdGVtXG4gICAqIFRoZSByZXNwb25zZSBpbmNsdWRlcyBhY2Nlc3MgdG9rZW4gdmFsaWQgZm9yIDIwIG1pbnV0ZXMuIFRoZSBjbGllbnQgc2lkZSBzaG91bGQgcmVuZXcgdGhlIHRva2VuIGJlZm9yZSBleHBpcmF0aW9uIHVzaW5nIHJlZnJlc2gtdG9rZW4gbWV0aG9kXG4gICAqIEBSZXR1cm46IEVudGl0eVJlc3BvbnNlPENvbmZpZ3VyYXRpb25WZXJzaW9uPlxuICAgKi9cbiAgY3JlYXRlVmVyc2lvbihpZD86IHN0cmluZywgYm9keT86IENvbmZpZ3VyYXRpb25WZXJzaW9uKSB7XG4gICAgcmV0dXJuIHRoaXMucmVzdC5wb3N0KGAke3RoaXMuYmFzZVVybH0vJHtpZH0vdmVyc2lvbnNgLCB0eXBlb2YgYm9keSA9PT0gJ29iamVjdCcgPyBKU09OLnN0cmluZ2lmeShib2R5KSA6IGJvZHkpO1xuICB9XG5cbiAgLyoqXG4gICAqIFVwZGF0ZSBjb25maWd1cmF0aW9uIHZlcnNpb24gaW4gdGhlIHN5c3RlbVxuICAgKiBUaGUgcmVzcG9uc2UgaW5jbHVkZXMgYWNjZXNzIHRva2VuIHZhbGlkIGZvciAyMCBtaW51dGVzLiBUaGUgY2xpZW50IHNpZGUgc2hvdWxkIHJlbmV3IHRoZSB0b2tlbiBiZWZvcmUgZXhwaXJhdGlvbiB1c2luZyByZWZyZXNoLXRva2VuIG1ldGhvZFxuICAgKiBAUmV0dXJuOiBFbnRpdHlSZXNwb25zZTxDb25maWd1cmF0aW9uVmVyc2lvbj5cbiAgICovXG4gIHVwZGF0ZVZlcnNpb24oaWQ/OiBzdHJpbmcsIGJvZHk/OiBDb25maWd1cmF0aW9uVmVyc2lvbikge1xuICAgIHJldHVybiB0aGlzLnJlc3QucHV0KGAke3RoaXMuYmFzZVVybH0vJHtpZH0vdmVyc2lvbnNgLCB0eXBlb2YgYm9keSA9PT0gJ29iamVjdCcgPyBKU09OLnN0cmluZ2lmeShib2R5KSA6IGJvZHkpO1xuICB9XG5cbiAgLyoqXG4gICAqIERlbGV0ZSBjb25maWd1cmF0aW9uIHZlcnNpb24gYnkgaWRcbiAgICogQFJldHVybjogQWN0aW9uUmVzcG9uc2VcbiAgICovXG4gIGRlbGV0ZVZlcnNpb24oaWQ/OiBzdHJpbmcsIHZlcnNpb25JZD86IHN0cmluZykge1xuICAgIHJldHVybiB0aGlzLnJlc3QuZGVsZXRlKGAke3RoaXMuYmFzZVVybH0vJHtpZH0vdmVyc2lvbnMvJHt2ZXJzaW9uSWR9YCk7XG4gIH1cblxuICAvKipcbiAgICogR2V0IHNwZWNpZmljIGNvbmZpZ3VyYXRpb24gdmVyc2lvblxuICAgKiBAUmV0dXJuOiBFbnRpdHlSZXNwb25zZTxDb25maWd1cmF0aW9uVmVyc2lvbj5cbiAgICovXG4gIGdldFZlcnNpb24oaWQ/OiBzdHJpbmcsIHZlcnNpb25JZD86IHN0cmluZykge1xuICAgIHJldHVybiB0aGlzLnJlc3QuZ2V0KGAke3RoaXMuYmFzZVVybH0vJHtpZH0vdmVyc2lvbnMvJHt2ZXJzaW9uSWR9YCk7XG4gIH1cblxuICAvKipcbiAgICogR2V0IGFsbCB2ZXJzaW9ucyBvZiBzcGVjaWZpYyBjb25maWd1cmF0aW9uXG4gICAqIEBSZXR1cm46IEVudGl0aWVzUmVzcG9uc2U8Q29uZmlndXJhdGlvblZlcnNpb24+XG4gICAqL1xuICBnZXRWZXJzaW9ucyhpZD86IHN0cmluZykge1xuICAgIHJldHVybiB0aGlzLnJlc3QuZ2V0KGAke3RoaXMuYmFzZVVybH0vJHtpZH0vdmVyc2lvbnNgKTtcbiAgfVxuXG59XG4iXX0=