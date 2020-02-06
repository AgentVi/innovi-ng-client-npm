/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Injectable, Inject } from '@angular/core';
import { RestUtil } from '../../utils/rest-util';
import { CoreConfig } from '../../config';
/**
 * Services for integrations targets (templates)
 * \@RequestHeader X-API-KEY The key to identify the application (portal)
 * \@RequestHeader X-ACCESS-TOKEN The token to identify the logged-in user
 */
var IntegrationsService = /** @class */ (function () {
    /**
     * Class constructor
     */
    function IntegrationsService(config, rest) {
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
    /**
     * Create new integration target
     * \@Return: EntityResponse<IntegrationTarget>
     * @param {?=} body
     * @return {?}
     */
    IntegrationsService.prototype.create = /**
     * Create new integration target
     * \@Return: EntityResponse<IntegrationTarget>
     * @param {?=} body
     * @return {?}
     */
    function (body) {
        return this.rest.post("" + this.baseUrl, typeof body === 'object' ? JSON.stringify(body) : body);
    };
    /**
     * Update integration target
     * @Return: EntityResponse<IntegrationTarget>
     */
    /**
     * Update integration target
     * \@Return: EntityResponse<IntegrationTarget>
     * @param {?=} id
     * @param {?=} body
     * @return {?}
     */
    IntegrationsService.prototype.update = /**
     * Update integration target
     * \@Return: EntityResponse<IntegrationTarget>
     * @param {?=} id
     * @param {?=} body
     * @return {?}
     */
    function (id, body) {
        return this.rest.put(this.baseUrl + "/" + id, typeof body === 'object' ? JSON.stringify(body) : body);
    };
    /**
     * Delete integration target from the system
     * @Return: ActionResponse
     */
    /**
     * Delete integration target from the system
     * \@Return: ActionResponse
     * @param {?=} id
     * @return {?}
     */
    IntegrationsService.prototype.delete = /**
     * Delete integration target from the system
     * \@Return: ActionResponse
     * @param {?=} id
     * @return {?}
     */
    function (id) {
        return this.rest.delete(this.baseUrl + "/" + id);
    };
    /**
     * Get single integration target by id
     * @Return: EntityResponse<IntegrationTarget>
     */
    /**
     * Get single integration target by id
     * \@Return: EntityResponse<IntegrationTarget>
     * @param {?=} id
     * @return {?}
     */
    IntegrationsService.prototype.get = /**
     * Get single integration target by id
     * \@Return: EntityResponse<IntegrationTarget>
     * @param {?=} id
     * @return {?}
     */
    function (id) {
        return this.rest.get(this.baseUrl + "/" + id);
    };
    /**
     * Get integration targets by list of ids
     * @Return: EntitiesResponse<IntegrationTarget>
     */
    /**
     * Get integration targets by list of ids
     * \@Return: EntitiesResponse<IntegrationTarget>
     * @param {?=} id
     * @return {?}
     */
    IntegrationsService.prototype.list = /**
     * Get integration targets by list of ids
     * \@Return: EntitiesResponse<IntegrationTarget>
     * @param {?=} id
     * @return {?}
     */
    function (id) {
        var _a;
        /** @type {?} */
        var params = new Array();
        if (id != null) {
            params.push("id=" + id);
        }
        return (_a = this.rest).get.apply(_a, tslib_1.__spread([this.baseUrl + "/list"], params));
    };
    /**
     * Find integration targets by filters
     * @Return: EntitiesResponse<IntegrationTarget>
     */
    /**
     * Find integration targets by filters
     * \@Return: EntitiesResponse<IntegrationTarget>
     * @param {?=} search
     * @param {?=} type
     * @return {?}
     */
    IntegrationsService.prototype.find = /**
     * Find integration targets by filters
     * \@Return: EntitiesResponse<IntegrationTarget>
     * @param {?=} search
     * @param {?=} type
     * @return {?}
     */
    function (search, type) {
        var _a;
        /** @type {?} */
        var params = new Array();
        if (search != null) {
            params.push("search=" + search);
        }
        if (type != null) {
            params.push("type=" + type);
        }
        return (_a = this.rest).get.apply(_a, tslib_1.__spread(["" + this.baseUrl], params));
    };
    /**
     * Create new integration action
     * @Return: EntityResponse<IntegrationAction>
     */
    /**
     * Create new integration action
     * \@Return: EntityResponse<IntegrationAction>
     * @param {?=} body
     * @return {?}
     */
    IntegrationsService.prototype.createAction = /**
     * Create new integration action
     * \@Return: EntityResponse<IntegrationAction>
     * @param {?=} body
     * @return {?}
     */
    function (body) {
        return this.rest.post(this.baseUrl + "/actions", typeof body === 'object' ? JSON.stringify(body) : body);
    };
    /**
     * Update integration action
     * @Return: EntityResponse<IntegrationAction>
     */
    /**
     * Update integration action
     * \@Return: EntityResponse<IntegrationAction>
     * @param {?=} id
     * @param {?=} body
     * @return {?}
     */
    IntegrationsService.prototype.updateAction = /**
     * Update integration action
     * \@Return: EntityResponse<IntegrationAction>
     * @param {?=} id
     * @param {?=} body
     * @return {?}
     */
    function (id, body) {
        return this.rest.put(this.baseUrl + "/actions/" + id, typeof body === 'object' ? JSON.stringify(body) : body);
    };
    /**
     * Delete integration action from the system
     * @Return: ActionResponse
     */
    /**
     * Delete integration action from the system
     * \@Return: ActionResponse
     * @param {?=} id
     * @return {?}
     */
    IntegrationsService.prototype.deleteAction = /**
     * Delete integration action from the system
     * \@Return: ActionResponse
     * @param {?=} id
     * @return {?}
     */
    function (id) {
        return this.rest.delete(this.baseUrl + "/actions/" + id);
    };
    /**
     * Get single integration action by id
     * @Return: EntityResponse<IntegrationAction>
     */
    /**
     * Get single integration action by id
     * \@Return: EntityResponse<IntegrationAction>
     * @param {?=} id
     * @return {?}
     */
    IntegrationsService.prototype.getAction = /**
     * Get single integration action by id
     * \@Return: EntityResponse<IntegrationAction>
     * @param {?=} id
     * @return {?}
     */
    function (id) {
        return this.rest.get(this.baseUrl + "/actions/" + id);
    };
    /**
     * Get integration actions by list of ids
     * @Return: EntitiesResponse<IntegrationAction>
     */
    /**
     * Get integration actions by list of ids
     * \@Return: EntitiesResponse<IntegrationAction>
     * @param {?=} id
     * @return {?}
     */
    IntegrationsService.prototype.listActions = /**
     * Get integration actions by list of ids
     * \@Return: EntitiesResponse<IntegrationAction>
     * @param {?=} id
     * @return {?}
     */
    function (id) {
        var _a;
        /** @type {?} */
        var params = new Array();
        if (id != null) {
            params.push("id=" + id);
        }
        return (_a = this.rest).get.apply(_a, tslib_1.__spread([this.baseUrl + "/actions/list"], params));
    };
    /**
     * Find integration actions by filters
     * @Return: EntitiesResponse<IntegrationAction>
     */
    /**
     * Find integration actions by filters
     * \@Return: EntitiesResponse<IntegrationAction>
     * @param {?=} search
     * @return {?}
     */
    IntegrationsService.prototype.findActions = /**
     * Find integration actions by filters
     * \@Return: EntitiesResponse<IntegrationAction>
     * @param {?=} search
     * @return {?}
     */
    function (search) {
        var _a;
        /** @type {?} */
        var params = new Array();
        if (search != null) {
            params.push("search=" + search);
        }
        return (_a = this.rest).get.apply(_a, tslib_1.__spread([this.baseUrl + "/actions"], params));
    };
    /**
     * Find all integration actions for a specified level in the folder hierarchy
     * @Return: EntitiesResponse<IntegrationAction>
     */
    /**
     * Find all integration actions for a specified level in the folder hierarchy
     * \@Return: EntitiesResponse<IntegrationAction>
     * @param {?=} folderId
     * @return {?}
     */
    IntegrationsService.prototype.getFolderActions = /**
     * Find all integration actions for a specified level in the folder hierarchy
     * \@Return: EntitiesResponse<IntegrationAction>
     * @param {?=} folderId
     * @return {?}
     */
    function (folderId) {
        return this.rest.get(this.baseUrl + "/actions/folder/" + folderId);
    };
    IntegrationsService.decorators = [
        { type: Injectable }
    ];
    /** @nocollapse */
    IntegrationsService.ctorParameters = function () { return [
        { type: CoreConfig, decorators: [{ type: Inject, args: ['config',] }] },
        { type: RestUtil }
    ]; };
    return IntegrationsService;
}());
export { IntegrationsService };
if (false) {
    /**
     * @type {?}
     * @private
     */
    IntegrationsService.prototype.baseUrl;
    /**
     * @type {?}
     * @private
     */
    IntegrationsService.prototype.config;
    /**
     * @type {?}
     * @private
     */
    IntegrationsService.prototype.rest;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW50ZWdyYXRpb25zU2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BhZ2VudHZpL25nLWNvcmUtbGliLyIsInNvdXJjZXMiOlsibGliL3NlcnZpY2VzL2ludGVncmF0aW9uc1NlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUNuRCxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sdUJBQXVCLENBQUM7QUFDakQsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGNBQWMsQ0FBQzs7Ozs7O0FBVzFDO0lBTUU7O09BRUc7SUFDSCw2QkFBc0MsTUFBa0IsRUFBVSxJQUFjO1FBQTFDLFdBQU0sR0FBTixNQUFNLENBQVk7UUFBVSxTQUFJLEdBQUosSUFBSSxDQUFVOztRQUx4RSxZQUFPLEdBQUcsZUFBZSxDQUFDO1FBTWhDLElBQUksQ0FBQyxPQUFPLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxHQUFHLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQztJQUNoRCxDQUFDO0lBR0Q7OztPQUdHOzs7Ozs7O0lBQ0gsb0NBQU07Ozs7OztJQUFOLFVBQU8sSUFBd0I7UUFDN0IsT0FBTyxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxLQUFHLElBQUksQ0FBQyxPQUFTLEVBQUUsT0FBTyxJQUFJLEtBQUssUUFBUSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUNuRyxDQUFDO0lBRUQ7OztPQUdHOzs7Ozs7OztJQUNILG9DQUFNOzs7Ozs7O0lBQU4sVUFBTyxFQUFXLEVBQUUsSUFBd0I7UUFDMUMsT0FBTyxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBSSxJQUFJLENBQUMsT0FBTyxTQUFJLEVBQUksRUFBRSxPQUFPLElBQUksS0FBSyxRQUFRLENBQUMsQ0FBQyxD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QUFFLElBQUksSUFBSSxFQUFFO1lBQUUsTUFBTSxDQUFDLElBQUksQ0FBQyxRQUFNLEVBQUksQ0FBQyxDQUFDO1NBQUU7UUFFOUMsT0FBTyxDQUFBLEtBQUEsSUFBSSxDQUFDLElBQUksQ0FBQSxDQUFDLEdBQUcsNkJBQUksSUFBSSxDQUFDLE9BQU8sa0JBQWUsR0FBSyxNQUFNLEdBQUU7SUFDaEUsQ0FBQztJQUVEOzs7T0FHRzs7Ozs7OztJQUNILHlDQUFXOzs7Ozs7SUFBWCxVQUFZLE1BQWU7OztZQUNuQixNQUFNLEdBQUcsSUFBSSxLQUFLLEVBQUU7UUFDMUIsSUFBSSxNQUFNLElBQUksSUFBSSxFQUFFO1lBQUUsTUFBTSxDQUFDLElBQUksQ0FBQyxZQUFVLE1BQVEsQ0FBQyxDQUFDO1NBQUU7UUFFMUQsT0FBTyxDQUFBLEtBQUEsSUFBSSxDQUFDLElBQUksQ0FBQSxDQUFDLEdBQUcsNkJBQUksSUFBSSxDQUFDLE9BQU8sYUFBVSxHQUFLLE1BQU0sR0FBRTtJQUMzRCxDQUFDO0lBRUQ7OztPQUdHOzs7Ozs7O0lBQ0gsOENBQWdCOzs7Ozs7SUFBaEIsVUFBaUIsUUFBaUI7UUFDaEMsT0FBTyxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBSSxJQUFJLENBQUMsT0FBTyx3QkFBbUIsUUFBVSxDQUFDLENBQUM7SUFDckUsQ0FBQzs7Z0JBaklGLFVBQVU7Ozs7Z0JBWEYsVUFBVSx1QkFvQkosTUFBTSxTQUFDLFFBQVE7Z0JBckJyQixRQUFROztJQStJakIsMEJBQUM7Q0FBQSxBQW5JRCxJQW1JQztTQWxJWSxtQkFBbUI7Ozs7OztJQUc5QixzQ0FBa0M7Ozs7O0lBS3RCLHFDQUE0Qzs7Ozs7SUFBRSxtQ0FBc0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlLCBJbmplY3QgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFJlc3RVdGlsIH0gZnJvbSAnLi4vLi4vdXRpbHMvcmVzdC11dGlsJztcbmltcG9ydCB7IENvcmVDb25maWcgfSBmcm9tICcuLi8uLi9jb25maWcnO1xuXG5pbXBvcnQgeyBJbnRlZ3JhdGlvbkFjdGlvbiB9IGZyb20gJy4uL2VudGl0aWVzL0ludGVncmF0aW9uQWN0aW9uJztcbmltcG9ydCB7IEludGVncmF0aW9uVGFyZ2V0IH0gZnJvbSAnLi4vZW50aXRpZXMvSW50ZWdyYXRpb25UYXJnZXQnO1xuXG5cbi8qKlxuICogU2VydmljZXMgZm9yIGludGVncmF0aW9ucyB0YXJnZXRzICh0ZW1wbGF0ZXMpXG4gKiBAUmVxdWVzdEhlYWRlciBYLUFQSS1LRVkgVGhlIGtleSB0byBpZGVudGlmeSB0aGUgYXBwbGljYXRpb24gKHBvcnRhbClcbiAqIEBSZXF1ZXN0SGVhZGVyIFgtQUNDRVNTLVRPS0VOIFRoZSB0b2tlbiB0byBpZGVudGlmeSB0aGUgbG9nZ2VkLWluIHVzZXIgXG4gKi9cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBJbnRlZ3JhdGlvbnNTZXJ2aWNlIHtcblxuICAvLyBVUkwgdG8gd2ViIGFwaVxuICBwcml2YXRlIGJhc2VVcmwgPSAnL2ludGVncmF0aW9ucyc7XG5cbiAgLyoqXG4gICAqIENsYXNzIGNvbnN0cnVjdG9yXG4gICAqL1xuICBjb25zdHJ1Y3RvcihASW5qZWN0KCdjb25maWcnKSBwcml2YXRlIGNvbmZpZzogQ29yZUNvbmZpZywgcHJpdmF0ZSByZXN0OiBSZXN0VXRpbCkge1xuICAgIHRoaXMuYmFzZVVybCA9IHRoaXMuY29uZmlnLmFwaSArIHRoaXMuYmFzZVVybDtcbiAgfVxuXG5cbiAgLyoqXG4gICAqIENyZWF0ZSBuZXcgaW50ZWdyYXRpb24gdGFyZ2V0XG4gICAqIEBSZXR1cm46IEVudGl0eVJlc3BvbnNlPEludGVncmF0aW9uVGFyZ2V0PlxuICAgKi9cbiAgY3JlYXRlKGJvZHk/OiBJbnRlZ3JhdGlvblRhcmdldCkge1xuICAgIHJldHVybiB0aGlzLnJlc3QucG9zdChgJHt0aGlzLmJhc2VVcmx9YCwgdHlwZW9mIGJvZHkgPT09ICdvYmplY3QnID8gSlNPTi5zdHJpbmdpZnkoYm9keSkgOiBib2R5KTtcbiAgfVxuXG4gIC8qKlxuICAgKiBVcGRhdGUgaW50ZWdyYXRpb24gdGFyZ2V0XG4gICAqIEBSZXR1cm46IEVudGl0eVJlc3BvbnNlPEludGVncmF0aW9uVGFyZ2V0PlxuICAgKi9cbiAgdXBkYXRlKGlkPzogc3RyaW5nLCBib2R5PzogSW50ZWdyYXRpb25UYXJnZXQpIHtcbiAgICByZXR1cm4gdGhpcy5yZXN0LnB1dChgJHt0aGlzLmJhc2VVcmx9LyR7aWR9YCwgdHlwZW9mIGJvZHkgPT09ICdvYmplY3QnID8gSlNPTi5zdHJpbmdpZnkoYm9keSkgOiBib2R5KTtcbiAgfVxuXG4gIC8qKlxuICAgKiBEZWxldGUgaW50ZWdyYXRpb24gdGFyZ2V0IGZyb20gdGhlIHN5c3RlbVxuICAgKiBAUmV0dXJuOiBBY3Rpb25SZXNwb25zZVxuICAgKi9cbiAgZGVsZXRlKGlkPzogc3RyaW5nKSB7XG4gICAgcmV0dXJuIHRoaXMucmVzdC5kZWxldGUoYCR7dGhpcy5iYXNlVXJsfS8ke2lkfWApO1xuICB9XG5cbiAgLyoqXG4gICAqIEdldCBzaW5nbGUgaW50ZWdyYXRpb24gdGFyZ2V0IGJ5IGlkXG4gICAqIEBSZXR1cm46IEVudGl0eVJlc3BvbnNlPEludGVncmF0aW9uVGFyZ2V0PlxuICAgKi9cbiAgZ2V0KGlkPzogc3RyaW5nKSB7XG4gICAgcmV0dXJuIHRoaXMucmVzdC5nZXQoYCR7dGhpcy5iYXNlVXJsfS8ke2lkfWApO1xuICB9XG5cbiAgLyoqXG4gICAqIEdldCBpbnRlZ3JhdGlvbiB0YXJnZXRzIGJ5IGxpc3Qgb2YgaWRzXG4gICAqIEBSZXR1cm46IEVudGl0aWVzUmVzcG9uc2U8SW50ZWdyYXRpb25UYXJnZXQ+XG4gICAqL1xuICBsaXN0KGlkPzogc3RyaW5nW10pIHtcbiAgICBjb25zdCBwYXJhbXMgPSBuZXcgQXJyYXkoKTtcdFx0XG4gICAgaWYgKGlkICE9IG51bGwpIHsgcGFyYW1zLnB1c2goYGlkPSR7aWR9YCk7IH1cblxuXHRcdHJldHVybiB0aGlzLnJlc3QuZ2V0KGAke3RoaXMuYmFzZVVybH0vbGlzdGAsIC4uLnBhcmFtcyk7XG4gIH1cblxuICAvKipcbiAgICogRmluZCBpbnRlZ3JhdGlvbiB0YXJnZXRzIGJ5IGZpbHRlcnNcbiAgICogQFJldHVybjogRW50aXRpZXNSZXNwb25zZTxJbnRlZ3JhdGlvblRhcmdldD5cbiAgICovXG4gIGZpbmQoc2VhcmNoPzogc3RyaW5nLCB0eXBlPzogc3RyaW5nKSB7XG4gICAgY29uc3QgcGFyYW1zID0gbmV3IEFycmF5KCk7XHRcdFxuICAgIGlmIChzZWFyY2ggIT0gbnVsbCkgeyBwYXJhbXMucHVzaChgc2VhcmNoPSR7c2VhcmNofWApOyB9XG4gICAgaWYgKHR5cGUgIT0gbnVsbCkgeyBwYXJhbXMucHVzaChgdHlwZT0ke3R5cGV9YCk7IH1cblxuXHRcdHJldHVybiB0aGlzLnJlc3QuZ2V0KGAke3RoaXMuYmFzZVVybH1gLCAuLi5wYXJhbXMpO1xuICB9XG5cbiAgLyoqXG4gICAqIENyZWF0ZSBuZXcgaW50ZWdyYXRpb24gYWN0aW9uXG4gICAqIEBSZXR1cm46IEVudGl0eVJlc3BvbnNlPEludGVncmF0aW9uQWN0aW9uPlxuICAgKi9cbiAgY3JlYXRlQWN0aW9uKGJvZHk/OiBJbnRlZ3JhdGlvbkFjdGlvbikge1xuICAgIHJldHVybiB0aGlzLnJlc3QucG9zdChgJHt0aGlzLmJhc2VVcmx9L2FjdGlvbnNgLCB0eXBlb2YgYm9keSA9PT0gJ29iamVjdCcgPyBKU09OLnN0cmluZ2lmeShib2R5KSA6IGJvZHkpO1xuICB9XG5cbiAgLyoqXG4gICAqIFVwZGF0ZSBpbnRlZ3JhdGlvbiBhY3Rpb25cbiAgICogQFJldHVybjogRW50aXR5UmVzcG9uc2U8SW50ZWdyYXRpb25BY3Rpb24+XG4gICAqL1xuICB1cGRhdGVBY3Rpb24oaWQ/OiBzdHJpbmcsIGJvZHk/OiBJbnRlZ3JhdGlvbkFjdGlvbikge1xuICAgIHJldHVybiB0aGlzLnJlc3QucHV0KGAke3RoaXMuYmFzZVVybH0vYWN0aW9ucy8ke2lkfWAsIHR5cGVvZiBib2R5ID09PSAnb2JqZWN0JyA/IEpTT04uc3RyaW5naWZ5KGJvZHkpIDogYm9keSk7XG4gIH1cblxuICAvKipcbiAgICogRGVsZXRlIGludGVncmF0aW9uIGFjdGlvbiBmcm9tIHRoZSBzeXN0ZW1cbiAgICogQFJldHVybjogQWN0aW9uUmVzcG9uc2VcbiAgICovXG4gIGRlbGV0ZUFjdGlvbihpZD86IHN0cmluZykge1xuICAgIHJldHVybiB0aGlzLnJlc3QuZGVsZXRlKGAke3RoaXMuYmFzZVVybH0vYWN0aW9ucy8ke2lkfWApO1xuICB9XG5cbiAgLyoqXG4gICAqIEdldCBzaW5nbGUgaW50ZWdyYXRpb24gYWN0aW9uIGJ5IGlkXG4gICAqIEBSZXR1cm46IEVudGl0eVJlc3BvbnNlPEludGVncmF0aW9uQWN0aW9uPlxuICAgKi9cbiAgZ2V0QWN0aW9uKGlkPzogc3RyaW5nKSB7XG4gICAgcmV0dXJuIHRoaXMucmVzdC5nZXQoYCR7dGhpcy5iYXNlVXJsfS9hY3Rpb25zLyR7aWR9YCk7XG4gIH1cblxuICAvKipcbiAgICogR2V0IGludGVncmF0aW9uIGFjdGlvbnMgYnkgbGlzdCBvZiBpZHNcbiAgICogQFJldHVybjogRW50aXRpZXNSZXNwb25zZTxJbnRlZ3JhdGlvbkFjdGlvbj5cbiAgICovXG4gIGxpc3RBY3Rpb25zKGlkPzogc3RyaW5nW10pIHtcbiAgICBjb25zdCBwYXJhbXMgPSBuZXcgQXJyYXkoKTtcdFx0XG4gICAgaWYgKGlkICE9IG51bGwpIHsgcGFyYW1zLnB1c2goYGlkPSR7aWR9YCk7IH1cblxuXHRcdHJldHVybiB0aGlzLnJlc3QuZ2V0KGAke3RoaXMuYmFzZVVybH0vYWN0aW9ucy9saXN0YCwgLi4ucGFyYW1zKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBGaW5kIGludGVncmF0aW9uIGFjdGlvbnMgYnkgZmlsdGVyc1xuICAgKiBAUmV0dXJuOiBFbnRpdGllc1Jlc3BvbnNlPEludGVncmF0aW9uQWN0aW9uPlxuICAgKi9cbiAgZmluZEFjdGlvbnMoc2VhcmNoPzogc3RyaW5nKSB7XG4gICAgY29uc3QgcGFyYW1zID0gbmV3IEFycmF5KCk7XHRcdFxuICAgIGlmIChzZWFyY2ggIT0gbnVsbCkgeyBwYXJhbXMucHVzaChgc2VhcmNoPSR7c2VhcmNofWApOyB9XG5cblx0XHRyZXR1cm4gdGhpcy5yZXN0LmdldChgJHt0aGlzLmJhc2VVcmx9L2FjdGlvbnNgLCAuLi5wYXJhbXMpO1xuICB9XG5cbiAgLyoqXG4gICAqIEZpbmQgYWxsIGludGVncmF0aW9uIGFjdGlvbnMgZm9yIGEgc3BlY2lmaWVkIGxldmVsIGluIHRoZSBmb2xkZXIgaGllcmFyY2h5XG4gICAqIEBSZXR1cm46IEVudGl0aWVzUmVzcG9uc2U8SW50ZWdyYXRpb25BY3Rpb24+XG4gICAqL1xuICBnZXRGb2xkZXJBY3Rpb25zKGZvbGRlcklkPzogc3RyaW5nKSB7XG4gICAgcmV0dXJuIHRoaXMucmVzdC5nZXQoYCR7dGhpcy5iYXNlVXJsfS9hY3Rpb25zL2ZvbGRlci8ke2ZvbGRlcklkfWApO1xuICB9XG5cbn1cbiJdfQ==