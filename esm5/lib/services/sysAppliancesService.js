/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Injectable, Inject } from '@angular/core';
import { RestUtil } from '../../utils/rest-util';
import { CoreConfig } from '../../config';
/**
 * List of appliance queries for system administrator only
 * \@RequestHeader X-API-KEY The key to identify the application (console)
 * \@RequestHeader X-ACCESS-TOKEN The token to identify the logged-in user
 */
var SysAppliancesService = /** @class */ (function () {
    /**
     * Class constructor
     */
    function SysAppliancesService(config, rest) {
        this.config = config;
        this.rest = rest;
        // URL to web api
        this.baseUrl = '/sys/appliances';
        this.baseUrl = this.config.api + this.baseUrl;
    }
    /**
     * Get single appliance by id
     * @Return: EntityResponse<Appliance>
     */
    /**
     * Get single appliance by id
     * \@Return: EntityResponse<Appliance>
     * @param {?=} id
     * @return {?}
     */
    SysAppliancesService.prototype.get = /**
     * Get single appliance by id
     * \@Return: EntityResponse<Appliance>
     * @param {?=} id
     * @return {?}
     */
    function (id) {
        return this.rest.get(this.baseUrl + "/" + id);
    };
    /**
     * Find list of appliances and filter
     * @Return: QueryResponse<Appliance>
     */
    /**
     * Find list of appliances and filter
     * \@Return: QueryResponse<Appliance>
     * @param {?=} accountId
     * @param {?=} search
     * @param {?=} status
     * @param {?=} sort
     * @param {?=} page
     * @param {?=} pageSize
     * @return {?}
     */
    SysAppliancesService.prototype.find = /**
     * Find list of appliances and filter
     * \@Return: QueryResponse<Appliance>
     * @param {?=} accountId
     * @param {?=} search
     * @param {?=} status
     * @param {?=} sort
     * @param {?=} page
     * @param {?=} pageSize
     * @return {?}
     */
    function (accountId, search, status, sort, page, pageSize) {
        var _a;
        /** @type {?} */
        var params = new Array();
        if (accountId != null) {
            params.push("accountId=" + accountId);
        }
        if (search != null) {
            params.push("search=" + search);
        }
        if (status != null) {
            params.push("status=" + status);
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
     * Export list of appliances and filter
     * @Return: StreamContent
     */
    /**
     * Export list of appliances and filter
     * \@Return: StreamContent
     * @param {?=} folderId
     * @param {?=} subFolders
     * @param {?=} search
     * @param {?=} status
     * @param {?=} sort
     * @param {?=} format
     * @param {?=} fields
     * @return {?}
     */
    SysAppliancesService.prototype.exportFormat = /**
     * Export list of appliances and filter
     * \@Return: StreamContent
     * @param {?=} folderId
     * @param {?=} subFolders
     * @param {?=} search
     * @param {?=} status
     * @param {?=} sort
     * @param {?=} format
     * @param {?=} fields
     * @return {?}
     */
    function (folderId, subFolders, search, status, sort, format, fields) {
        var _a;
        /** @type {?} */
        var params = new Array();
        if (folderId != null) {
            params.push("folderId=" + folderId);
        }
        if (subFolders != null) {
            params.push("subFolders=" + subFolders);
        }
        if (search != null) {
            params.push("search=" + search);
        }
        if (status != null) {
            params.push("status=" + status);
        }
        if (sort != null) {
            params.push("sort=" + sort);
        }
        if (format != null) {
            params.push("format=" + format);
        }
        if (fields != null) {
            params.push("fields=" + fields);
        }
        return (_a = this.rest).download.apply(_a, tslib_1.__spread(["sys-appliances", this.baseUrl + "/export"], params));
    };
    /**
     * Delete appliance from the system
     * @Return: ActionResponse
     */
    /**
     * Delete appliance from the system
     * \@Return: ActionResponse
     * @param {?=} id
     * @return {?}
     */
    SysAppliancesService.prototype.delete = /**
     * Delete appliance from the system
     * \@Return: ActionResponse
     * @param {?=} id
     * @return {?}
     */
    function (id) {
        return this.rest.delete(this.baseUrl + "/" + id);
    };
    /**
     * Get all appliance agents
     * @Return: EntitiesResponse<Agent>
     */
    /**
     * Get all appliance agents
     * \@Return: EntitiesResponse<Agent>
     * @param {?=} id
     * @return {?}
     */
    SysAppliancesService.prototype.getApplianceAgents = /**
     * Get all appliance agents
     * \@Return: EntitiesResponse<Agent>
     * @param {?=} id
     * @return {?}
     */
    function (id) {
        return this.rest.get(this.baseUrl + "/" + id + "/agents");
    };
    /**
     * Add agent to appliance
     * Agent can be added to virtual appliance only
     * @Return: EntityResponse<Agent>
     */
    /**
     * Add agent to appliance
     * Agent can be added to virtual appliance only
     * \@Return: EntityResponse<Agent>
     * @param {?=} id
     * @return {?}
     */
    SysAppliancesService.prototype.addApplianceAgent = /**
     * Add agent to appliance
     * Agent can be added to virtual appliance only
     * \@Return: EntityResponse<Agent>
     * @param {?=} id
     * @return {?}
     */
    function (id) {
        return this.rest.post(this.baseUrl + "/" + id + "/agents", null);
    };
    /**
     * Delete agent from the system
     * Only virtual device agent can be deleted
     * @Return: ActionResponse
     */
    /**
     * Delete agent from the system
     * Only virtual device agent can be deleted
     * \@Return: ActionResponse
     * @param {?=} id
     * @param {?=} agentId
     * @return {?}
     */
    SysAppliancesService.prototype.deleteApplianceAgent = /**
     * Delete agent from the system
     * Only virtual device agent can be deleted
     * \@Return: ActionResponse
     * @param {?=} id
     * @param {?=} agentId
     * @return {?}
     */
    function (id, agentId) {
        return this.rest.delete(this.baseUrl + "/" + id + "/agents/" + agentId);
    };
    /**
     * Find list of appliance commands and filter
     * @Return: EntitiesResponse<ApplianceCommand> List of appliance commands
     */
    /**
     * Find list of appliance commands and filter
     * \@Return: EntitiesResponse<ApplianceCommand> List of appliance commands
     * @param {?=} accountId
     * @param {?=} applianceId
     * @param {?=} status
     * @return {?}
     */
    SysAppliancesService.prototype.getCommands = /**
     * Find list of appliance commands and filter
     * \@Return: EntitiesResponse<ApplianceCommand> List of appliance commands
     * @param {?=} accountId
     * @param {?=} applianceId
     * @param {?=} status
     * @return {?}
     */
    function (accountId, applianceId, status) {
        var _a;
        /** @type {?} */
        var params = new Array();
        if (accountId != null) {
            params.push("accountId=" + accountId);
        }
        if (applianceId != null) {
            params.push("applianceId=" + applianceId);
        }
        if (status != null) {
            params.push("status=" + status);
        }
        return (_a = this.rest).get.apply(_a, tslib_1.__spread([this.baseUrl + "/commands"], params));
    };
    /**
     * Update command status
     * @Return: ActionResponse
     */
    /**
     * Update command status
     * \@Return: ActionResponse
     * @param {?=} commandId
     * @param {?=} status
     * @return {?}
     */
    SysAppliancesService.prototype.setCommandStatus = /**
     * Update command status
     * \@Return: ActionResponse
     * @param {?=} commandId
     * @param {?=} status
     * @return {?}
     */
    function (commandId, status) {
        return this.rest.put(this.baseUrl + "/commands/" + commandId + "/" + status, null);
    };
    /**
     * Delete command
     * @Return: ActionResponse
     */
    /**
     * Delete command
     * \@Return: ActionResponse
     * @param {?=} commandId
     * @return {?}
     */
    SysAppliancesService.prototype.deleteCommand = /**
     * Delete command
     * \@Return: ActionResponse
     * @param {?=} commandId
     * @return {?}
     */
    function (commandId) {
        return this.rest.delete(this.baseUrl + "/commands/" + commandId);
    };
    SysAppliancesService.decorators = [
        { type: Injectable }
    ];
    /** @nocollapse */
    SysAppliancesService.ctorParameters = function () { return [
        { type: CoreConfig, decorators: [{ type: Inject, args: ['config',] }] },
        { type: RestUtil }
    ]; };
    return SysAppliancesService;
}());
export { SysAppliancesService };
if (false) {
    /**
     * @type {?}
     * @private
     */
    SysAppliancesService.prototype.baseUrl;
    /**
     * @type {?}
     * @private
     */
    SysAppliancesService.prototype.config;
    /**
     * @type {?}
     * @private
     */
    SysAppliancesService.prototype.rest;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3lzQXBwbGlhbmNlc1NlcnZpY2UuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AYWdlbnR2aS9uZy1jb3JlLWxpYi8iLCJzb3VyY2VzIjpbImxpYi9zZXJ2aWNlcy9zeXNBcHBsaWFuY2VzU2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ25ELE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSx1QkFBdUIsQ0FBQztBQUNqRCxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sY0FBYyxDQUFDOzs7Ozs7QUFXMUM7SUFNRTs7T0FFRztJQUNILDhCQUFzQyxNQUFrQixFQUFVLElBQWM7UUFBMUMsV0FBTSxHQUFOLE1BQU0sQ0FBWTtRQUFVLFNBQUksR0FBSixJQUFJLENBQVU7O1FBTHhFLFlBQU8sR0FBRyxpQkFBaUIsQ0FBQztRQU1sQyxJQUFJLENBQUMsT0FBTyxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUMsR0FBRyxHQUFHLElBQUksQ0FBQyxPQUFPLENBQUM7SUFDaEQsQ0FBQztJQUdEOzs7T0FHRzs7Ozs7OztJQUNILGtDQUFHOzs7Ozs7SUFBSCxVQUFJLEVBQVc7UUFDYixPQUFPLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFJLElBQUksQ0FBQyxPQUFPLFNBQUksRUFBSSxDQUFDLENBQUM7SUFDaEQsQ0FBQztJQUVEOzs7T0FHRzs7Ozs7Ozs7Ozs7O0lBQ0gsbUNBQUk7Ozs7Ozs7Ozs7O0lBQUosVUFBSyxTQUFrQixFQUFFLE1BQWUsRUFBRSxNQUE4QixFQUFFLElBQWEsRUFBRSxJQUFhLEVBQUUsUUFBaUI7OztZQUNqSCxNQUFNLEdBQUcsSUFBSSxLQUFLLEVBQUU7UUFDMUIsSUFBSSxTQUFTLElBQUksSUFBSSxFQUFFO1lBQUUsTUFBTSxDQUFDLElBQUksQ0FBQyxlQUFhLFNBQVcsQ0FBQyxDQUFDO1NBQUU7UUFDakUsSUFBSSxNQUFNLElBQUks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Z0JBcEhGLFVBQVU7Ozs7Z0JBWEYsVUFBVSx1QkFvQkosTUFBTSxTQUFDLFFBQVE7Z0JBckJyQixRQUFROztJQWtJakIsMkJBQUM7Q0FBQSxBQXRIRCxJQXNIQztTQXJIWSxvQkFBb0I7Ozs7OztJQUcvQix1Q0FBb0M7Ozs7O0lBS3hCLHNDQUE0Qzs7Ozs7SUFBRSxvQ0FBc0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlLCBJbmplY3QgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFJlc3RVdGlsIH0gZnJvbSAnLi4vLi4vdXRpbHMvcmVzdC11dGlsJztcbmltcG9ydCB7IENvcmVDb25maWcgfSBmcm9tICcuLi8uLi9jb25maWcnO1xuXG5pbXBvcnQgeyBDb21tYW5kU3RhdHVzQ29kZSB9IGZyb20gJy4uL2VudW1zL0NvbW1hbmRTdGF0dXNDb2RlJztcbmltcG9ydCB7IEFwcGxpYW5jZVN0YXR1c0NvZGUgfSBmcm9tICcuLi9lbnVtcy9BcHBsaWFuY2VTdGF0dXNDb2RlJztcblxuXG4vKipcbiAqIExpc3Qgb2YgYXBwbGlhbmNlIHF1ZXJpZXMgZm9yIHN5c3RlbSBhZG1pbmlzdHJhdG9yIG9ubHlcbiAqIEBSZXF1ZXN0SGVhZGVyIFgtQVBJLUtFWSBUaGUga2V5IHRvIGlkZW50aWZ5IHRoZSBhcHBsaWNhdGlvbiAoY29uc29sZSlcbiAqIEBSZXF1ZXN0SGVhZGVyIFgtQUNDRVNTLVRPS0VOIFRoZSB0b2tlbiB0byBpZGVudGlmeSB0aGUgbG9nZ2VkLWluIHVzZXIgXG4gKi9cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBTeXNBcHBsaWFuY2VzU2VydmljZSB7XG5cbiAgLy8gVVJMIHRvIHdlYiBhcGlcbiAgcHJpdmF0ZSBiYXNlVXJsID0gJy9zeXMvYXBwbGlhbmNlcyc7XG5cbiAgLyoqXG4gICAqIENsYXNzIGNvbnN0cnVjdG9yXG4gICAqL1xuICBjb25zdHJ1Y3RvcihASW5qZWN0KCdjb25maWcnKSBwcml2YXRlIGNvbmZpZzogQ29yZUNvbmZpZywgcHJpdmF0ZSByZXN0OiBSZXN0VXRpbCkge1xuICAgIHRoaXMuYmFzZVVybCA9IHRoaXMuY29uZmlnLmFwaSArIHRoaXMuYmFzZVVybDtcbiAgfVxuXG5cbiAgLyoqXG4gICAqIEdldCBzaW5nbGUgYXBwbGlhbmNlIGJ5IGlkXG4gICAqIEBSZXR1cm46IEVudGl0eVJlc3BvbnNlPEFwcGxpYW5jZT5cbiAgICovXG4gIGdldChpZD86IHN0cmluZykge1xuICAgIHJldHVybiB0aGlzLnJlc3QuZ2V0KGAke3RoaXMuYmFzZVVybH0vJHtpZH1gKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBGaW5kIGxpc3Qgb2YgYXBwbGlhbmNlcyBhbmQgZmlsdGVyXG4gICAqIEBSZXR1cm46IFF1ZXJ5UmVzcG9uc2U8QXBwbGlhbmNlPlxuICAgKi9cbiAgZmluZChhY2NvdW50SWQ/OiBzdHJpbmcsIHNlYXJjaD86IHN0cmluZywgc3RhdHVzPzogQXBwbGlhbmNlU3RhdHVzQ29kZVtdLCBzb3J0Pzogc3RyaW5nLCBwYWdlPzogbnVtYmVyLCBwYWdlU2l6ZT86IG51bWJlcikge1xuICAgIGNvbnN0IHBhcmFtcyA9IG5ldyBBcnJheSgpO1x0XHRcbiAgICBpZiAoYWNjb3VudElkICE9IG51bGwpIHsgcGFyYW1zLnB1c2goYGFjY291bnRJZD0ke2FjY291bnRJZH1gKTsgfVxuICAgIGlmIChzZWFyY2ggIT0gbnVsbCkgeyBwYXJhbXMucHVzaChgc2VhcmNoPSR7c2VhcmNofWApOyB9XG4gICAgaWYgKHN0YXR1cyAhPSBudWxsKSB7IHBhcmFtcy5wdXNoKGBzdGF0dXM9JHtzdGF0dXN9YCk7IH1cbiAgICBpZiAoc29ydCAhPSBudWxsKSB7IHBhcmFtcy5wdXNoKGBzb3J0PSR7c29ydH1gKTsgfVxuICAgIGlmIChwYWdlICE9IG51bGwpIHsgcGFyYW1zLnB1c2goYHBhZ2U9JHtwYWdlfWApOyB9XG4gICAgaWYgKHBhZ2VTaXplICE9IG51bGwpIHsgcGFyYW1zLnB1c2goYHBhZ2VTaXplPSR7cGFnZVNpemV9YCk7IH1cblxuXHRcdHJldHVybiB0aGlzLnJlc3QuZ2V0KGAke3RoaXMuYmFzZVVybH1gLCAuLi5wYXJhbXMpO1xuICB9XG5cbiAgLyoqXG4gICAqIEV4cG9ydCBsaXN0IG9mIGFwcGxpYW5jZXMgYW5kIGZpbHRlclxuICAgKiBAUmV0dXJuOiBTdHJlYW1Db250ZW50XG4gICAqL1xuICBleHBvcnRGb3JtYXQoZm9sZGVySWQ/OiBzdHJpbmcsIHN1YkZvbGRlcnM/OiBib29sZWFuLCBzZWFyY2g/OiBzdHJpbmcsIHN0YXR1cz86IEFwcGxpYW5jZVN0YXR1c0NvZGVbXSwgc29ydD86IHN0cmluZywgZm9ybWF0Pzogc3RyaW5nLCBmaWVsZHM/OiBzdHJpbmdbXSkge1xuICAgIGNvbnN0IHBhcmFtcyA9IG5ldyBBcnJheSgpO1x0XHRcbiAgICBpZiAoZm9sZGVySWQgIT0gbnVsbCkgeyBwYXJhbXMucHVzaChgZm9sZGVySWQ9JHtmb2xkZXJJZH1gKTsgfVxuICAgIGlmIChzdWJGb2xkZXJzICE9IG51bGwpIHsgcGFyYW1zLnB1c2goYHN1YkZvbGRlcnM9JHtzdWJGb2xkZXJzfWApOyB9XG4gICAgaWYgKHNlYXJjaCAhPSBudWxsKSB7IHBhcmFtcy5wdXNoKGBzZWFyY2g9JHtzZWFyY2h9YCk7IH1cbiAgICBpZiAoc3RhdHVzICE9IG51bGwpIHsgcGFyYW1zLnB1c2goYHN0YXR1cz0ke3N0YXR1c31gKTsgfVxuICAgIGlmIChzb3J0ICE9IG51bGwpIHsgcGFyYW1zLnB1c2goYHNvcnQ9JHtzb3J0fWApOyB9XG4gICAgaWYgKGZvcm1hdCAhPSBudWxsKSB7IHBhcmFtcy5wdXNoKGBmb3JtYXQ9JHtmb3JtYXR9YCk7IH1cbiAgICBpZiAoZmllbGRzICE9IG51bGwpIHsgcGFyYW1zLnB1c2goYGZpZWxkcz0ke2ZpZWxkc31gKTsgfVxuXG5cdFx0cmV0dXJuIHRoaXMucmVzdC5kb3dubG9hZChgc3lzLWFwcGxpYW5jZXNgLGAke3RoaXMuYmFzZVVybH0vZXhwb3J0YCwgLi4ucGFyYW1zKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBEZWxldGUgYXBwbGlhbmNlIGZyb20gdGhlIHN5c3RlbVxuICAgKiBAUmV0dXJuOiBBY3Rpb25SZXNwb25zZVxuICAgKi9cbiAgZGVsZXRlKGlkPzogc3RyaW5nKSB7XG4gICAgcmV0dXJuIHRoaXMucmVzdC5kZWxldGUoYCR7dGhpcy5iYXNlVXJsfS8ke2lkfWApO1xuICB9XG5cbiAgLyoqXG4gICAqIEdldCBhbGwgYXBwbGlhbmNlIGFnZW50c1xuICAgKiBAUmV0dXJuOiBFbnRpdGllc1Jlc3BvbnNlPEFnZW50PlxuICAgKi9cbiAgZ2V0QXBwbGlhbmNlQWdlbnRzKGlkPzogc3RyaW5nKSB7XG4gICAgcmV0dXJuIHRoaXMucmVzdC5nZXQoYCR7dGhpcy5iYXNlVXJsfS8ke2lkfS9hZ2VudHNgKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBBZGQgYWdlbnQgdG8gYXBwbGlhbmNlXG4gICAqIEFnZW50IGNhbiBiZSBhZGRlZCB0byB2aXJ0dWFsIGFwcGxpYW5jZSBvbmx5XG4gICAqIEBSZXR1cm46IEVudGl0eVJlc3BvbnNlPEFnZW50PlxuICAgKi9cbiAgYWRkQXBwbGlhbmNlQWdlbnQoaWQ/OiBzdHJpbmcpIHtcbiAgICByZXR1cm4gdGhpcy5yZXN0LnBvc3QoYCR7dGhpcy5iYXNlVXJsfS8ke2lkfS9hZ2VudHNgLCBudWxsKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBEZWxldGUgYWdlbnQgZnJvbSB0aGUgc3lzdGVtXG4gICAqIE9ubHkgdmlydHVhbCBkZXZpY2UgYWdlbnQgY2FuIGJlIGRlbGV0ZWRcbiAgICogQFJldHVybjogQWN0aW9uUmVzcG9uc2VcbiAgICovXG4gIGRlbGV0ZUFwcGxpYW5jZUFnZW50KGlkPzogc3RyaW5nLCBhZ2VudElkPzogc3RyaW5nKSB7XG4gICAgcmV0dXJuIHRoaXMucmVzdC5kZWxldGUoYCR7dGhpcy5iYXNlVXJsfS8ke2lkfS9hZ2VudHMvJHthZ2VudElkfWApO1xuICB9XG5cbiAgLyoqXG4gICAqIEZpbmQgbGlzdCBvZiBhcHBsaWFuY2UgY29tbWFuZHMgYW5kIGZpbHRlclxuICAgKiBAUmV0dXJuOiBFbnRpdGllc1Jlc3BvbnNlPEFwcGxpYW5jZUNvbW1hbmQ+IExpc3Qgb2YgYXBwbGlhbmNlIGNvbW1hbmRzXG4gICAqL1xuICBnZXRDb21tYW5kcyhhY2NvdW50SWQ/OiBzdHJpbmcsIGFwcGxpYW5jZUlkPzogc3RyaW5nLCBzdGF0dXM/OiBDb21tYW5kU3RhdHVzQ29kZVtdKSB7XG4gICAgY29uc3QgcGFyYW1zID0gbmV3IEFycmF5KCk7XHRcdFxuICAgIGlmIChhY2NvdW50SWQgIT0gbnVsbCkgeyBwYXJhbXMucHVzaChgYWNjb3VudElkPSR7YWNjb3VudElkfWApOyB9XG4gICAgaWYgKGFwcGxpYW5jZUlkICE9IG51bGwpIHsgcGFyYW1zLnB1c2goYGFwcGxpYW5jZUlkPSR7YXBwbGlhbmNlSWR9YCk7IH1cbiAgICBpZiAoc3RhdHVzICE9IG51bGwpIHsgcGFyYW1zLnB1c2goYHN0YXR1cz0ke3N0YXR1c31gKTsgfVxuXG5cdFx0cmV0dXJuIHRoaXMucmVzdC5nZXQoYCR7dGhpcy5iYXNlVXJsfS9jb21tYW5kc2AsIC4uLnBhcmFtcyk7XG4gIH1cblxuICAvKipcbiAgICogVXBkYXRlIGNvbW1hbmQgc3RhdHVzXG4gICAqIEBSZXR1cm46IEFjdGlvblJlc3BvbnNlXG4gICAqL1xuICBzZXRDb21tYW5kU3RhdHVzKGNvbW1hbmRJZD86IHN0cmluZywgc3RhdHVzPzogQ29tbWFuZFN0YXR1c0NvZGUpIHtcbiAgICByZXR1cm4gdGhpcy5yZXN0LnB1dChgJHt0aGlzLmJhc2VVcmx9L2NvbW1hbmRzLyR7Y29tbWFuZElkfS8ke3N0YXR1c31gLCBudWxsKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBEZWxldGUgY29tbWFuZFxuICAgKiBAUmV0dXJuOiBBY3Rpb25SZXNwb25zZVxuICAgKi9cbiAgZGVsZXRlQ29tbWFuZChjb21tYW5kSWQ/OiBzdHJpbmcpIHtcbiAgICByZXR1cm4gdGhpcy5yZXN0LmRlbGV0ZShgJHt0aGlzLmJhc2VVcmx9L2NvbW1hbmRzLyR7Y29tbWFuZElkfWApO1xuICB9XG5cbn1cbiJdfQ==