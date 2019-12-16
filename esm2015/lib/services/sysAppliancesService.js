/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable, Inject } from '@angular/core';
import { RestUtil } from '../../utils/rest-util';
import { CoreConfig } from '../../config';
/**
 * List of appliance queries for system administrator only
 * \@RequestHeader X-API-KEY The key to identify the application (console)
 * \@RequestHeader X-ACCESS-TOKEN The token to identify the logged-in user
 */
export class SysAppliancesService {
    /**
     * Class constructor
     * @param {?} config
     * @param {?} rest
     */
    constructor(config, rest) {
        this.config = config;
        this.rest = rest;
        // URL to web api
        this.baseUrl = '/sys/appliances';
        this.baseUrl = this.config.api + this.baseUrl;
    }
    /**
     * Register new appliance in the system
     * \@Return: EntityResponse<Appliance> The registered appliance
     * @param {?=} id
     * @param {?=} body
     * @return {?}
     */
    registerAppliance(id, body) {
        return this.rest.post(`${this.baseUrl}/register`, typeof body === 'object' ? JSON.stringify(body) : body);
    }
    /**
     * Get single appliance by id
     * \@Return: EntityResponse<Appliance>
     * @param {?=} id
     * @return {?}
     */
    get(id) {
        return this.rest.get(`${this.baseUrl}/${id}`);
    }
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
    find(accountId, search, status, sort, page, pageSize) {
        /** @type {?} */
        const params = new Array();
        if (accountId != null) {
            params.push(`accountId=${accountId}`);
        }
        if (search != null) {
            params.push(`search=${search}`);
        }
        if (status != null) {
            params.push(`status=${status}`);
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
    exportFormat(folderId, subFolders, search, status, sort, format, fields) {
        /** @type {?} */
        const params = new Array();
        if (folderId != null) {
            params.push(`folderId=${folderId}`);
        }
        if (subFolders != null) {
            params.push(`subFolders=${subFolders}`);
        }
        if (search != null) {
            params.push(`search=${search}`);
        }
        if (status != null) {
            params.push(`status=${status}`);
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
        return this.rest.download(`sys-appliances`, `${this.baseUrl}/export`, ...params);
    }
    /**
     * Delete appliance from the system
     * \@Return: ActionResponse
     * @param {?=} id
     * @return {?}
     */
    delete(id) {
        return this.rest.delete(`${this.baseUrl}/${id}`);
    }
    /**
     * Reboot appliance host
     * \@Return: ActionResponse
     * @param {?=} id
     * @return {?}
     */
    reboot(id) {
        return this.rest.post(`${this.baseUrl}/${id}/reboot`, null);
    }
    /**
     * Change appliance machine Id (for VIRTUAL device only)
     * \@Return: EntityResponse<Appliance> - Updated appliance
     * @param {?=} id
     * @param {?=} machineId
     * @return {?}
     */
    changeMachineId(id, machineId) {
        return this.rest.put(`${this.baseUrl}/${id}/machine/${machineId}`, null);
    }
    /**
     * Change appliance configuration
     * \@Return: EntityResponse<Appliance> - Updated appliance
     * @param {?=} id
     * @param {?=} configId
     * @param {?=} versionId
     * @return {?}
     */
    changeConfiguration(id, configId, versionId) {
        return this.rest.put(`${this.baseUrl}/${id}/config/${configId}/${versionId}`, null);
    }
    /**
     * Get all appliance agents
     * \@Return: EntitiesResponse<Agent>
     * @param {?=} id
     * @return {?}
     */
    getApplianceAgents(id) {
        return this.rest.get(`${this.baseUrl}/${id}/agents`);
    }
    /**
     * Add agent to appliance
     * Agent can be added to virtual appliance only
     * \@Return: EntityResponse<Agent>
     * @param {?=} id
     * @return {?}
     */
    addApplianceAgent(id) {
        return this.rest.post(`${this.baseUrl}/${id}/agents`, null);
    }
    /**
     * Delete agent from the system
     * Only virtual device agent can be deleted
     * \@Return: ActionResponse
     * @param {?=} id
     * @param {?=} agentId
     * @return {?}
     */
    deleteApplianceAgent(id, agentId) {
        return this.rest.delete(`${this.baseUrl}/${id}/agents/${agentId}`);
    }
    /**
     * Find list of appliance commands and filter
     * \@Return: EntitiesResponse<ApplianceCommand> List of appliance commands
     * @param {?=} accountId
     * @param {?=} applianceId
     * @param {?=} status
     * @return {?}
     */
    getCommands(accountId, applianceId, status) {
        /** @type {?} */
        const params = new Array();
        if (accountId != null) {
            params.push(`accountId=${accountId}`);
        }
        if (applianceId != null) {
            params.push(`applianceId=${applianceId}`);
        }
        if (status != null) {
            params.push(`status=${status}`);
        }
        return this.rest.get(`${this.baseUrl}/commands`, ...params);
    }
    /**
     * Update command status
     * \@Return: ActionResponse
     * @param {?=} commandId
     * @param {?=} status
     * @return {?}
     */
    setCommandStatus(commandId, status) {
        return this.rest.put(`${this.baseUrl}/commands/${commandId}/${status}`, null);
    }
    /**
     * Delete command
     * \@Return: ActionResponse
     * @param {?=} id
     * @param {?=} commandId
     * @return {?}
     */
    deleteCommand(id, commandId) {
        return this.rest.delete(`${this.baseUrl}/${id}/commands/${commandId}`);
    }
    /**
     * Delete all appliance commands
     * \@Return: ActionResponse
     * @param {?=} id
     * @param {?=} agentId
     * @return {?}
     */
    deleteAllCommands(id, agentId) {
        return this.rest.delete(`${this.baseUrl}/${id}/commands`);
    }
    /**
     * Get appliance status history over time
     * \@Return: EntityResponse<ApplianceStatusTimeSeries>
     * @param {?=} id
     * @param {?=} from
     * @param {?=} to
     * @return {?}
     */
    getStatusOverTime(id, from, to) {
        /** @type {?} */
        const params = new Array();
        if (from != null) {
            params.push(`from=${from}`);
        }
        if (to != null) {
            params.push(`to=${to}`);
        }
        return this.rest.get(`${this.baseUrl}/${id}/status/overtime`, ...params);
    }
    /**
     * Get appliance KPI (Key Performance Indicators) history over time (CPU, RAM. LOAD)
     * \@Return: EntityResponse<ApplianceKPIsTimeSeries>
     * @param {?=} id
     * @param {?=} from
     * @param {?=} to
     * @return {?}
     */
    getKpiOverTime(id, from, to) {
        /** @type {?} */
        const params = new Array();
        if (from != null) {
            params.push(`from=${from}`);
        }
        if (to != null) {
            params.push(`to=${to}`);
        }
        return this.rest.get(`${this.baseUrl}/${id}/kpi/overtime`, ...params);
    }
}
SysAppliancesService.decorators = [
    { type: Injectable }
];
/** @nocollapse */
SysAppliancesService.ctorParameters = () => [
    { type: CoreConfig, decorators: [{ type: Inject, args: ['config',] }] },
    { type: RestUtil }
];
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3lzQXBwbGlhbmNlc1NlcnZpY2UuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AYWdlbnR2aS9uZy1jb3JlLWxpYi8iLCJzb3VyY2VzIjpbImxpYi9zZXJ2aWNlcy9zeXNBcHBsaWFuY2VzU2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDbkQsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLHVCQUF1QixDQUFDO0FBQ2pELE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxjQUFjLENBQUM7Ozs7OztBQWExQyxNQUFNLE9BQU8sb0JBQW9COzs7Ozs7SUFRL0IsWUFBc0MsTUFBa0IsRUFBVSxJQUFjO1FBQTFDLFdBQU0sR0FBTixNQUFNLENBQVk7UUFBVSxTQUFJLEdBQUosSUFBSSxDQUFVOztRQUx4RSxZQUFPLEdBQUcsaUJBQWlCLENBQUM7UUFNbEMsSUFBSSxDQUFDLE9BQU8sR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDLEdBQUcsR0FBRyxJQUFJLENBQUMsT0FBTyxDQUFDO0lBQ2hELENBQUM7Ozs7Ozs7O0lBT0QsaUJBQWlCLENBQUMsRUFBVyxFQUFFLElBQTRCO1FBQ3pELE9BQU8sSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxJQUFJLENBQUMsT0FBTyxXQUFXLEVBQUUsT0FBTyxJQUFJLEtBQUssUUFBUSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUM1RyxDQUFDOzs7Ozs7O0lBTUQsR0FBRyxDQUFDLEVBQVc7UUFDYixPQUFPLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLEdBQUcsSUFBSSxDQUFDLE9BQU8sSUFBSSxFQUFFLEVBQUUsQ0FBQyxDQUFDO0lBQ2hELENBQUM7Ozs7Ozs7Ozs7OztJQU1ELElBQUksQ0FBQyxTQUFrQixF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LElBQUksRUFBRSxJQUFJLElBQUksRUFBRTtZQUFFLE1BQU0sQ0FBQyxJQUFJLENBQUMsTUFBTSxFQUFFLEVBQUUsQ0FBQyxDQUFDO1NBQUU7UUFFOUMsT0FBTyxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxHQUFHLElBQUksQ0FBQyxPQUFPLElBQUksRUFBRSxrQkFBa0IsRUFBRSxHQUFHLE1BQU0sQ0FBQyxDQUFDO0lBQ3pFLENBQUM7Ozs7Ozs7OztJQU1ELGNBQWMsQ0FBQyxFQUFXLEVBQUUsSUFBYSxFQUFFLEVBQVc7O2NBQzlDLE1BQU0sR0FBRyxJQUFJLEtBQUssRUFBRTtRQUMxQixJQUFJLElBQUksSUFBSSxJQUFJLEVBQUU7WUFBRSxNQUFNLENBQUMsSUFBSSxDQUFDLFFBQVEsSUFBSSxFQUFFLENBQUMsQ0FBQztTQUFFO1FBQ2xELElBQUksRUFBRSxJQUFJLElBQUksRUFBRTtZQUFFLE1BQU0sQ0FBQyxJQUFJLENBQUMsTUFBTSxFQUFFLEVBQUUsQ0FBQyxDQUFDO1NBQUU7UUFFOUMsT0FBTyxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxHQUFHLElBQUksQ0FBQyxPQUFPLElBQUksRUFBRSxlQUFlLEVBQUUsR0FBRyxNQUFNLENBQUMsQ0FBQztJQUN0RSxDQUFDOzs7WUFwTEYsVUFBVTs7OztZQVpGLFVBQVUsdUJBcUJKLE1BQU0sU0FBQyxRQUFRO1lBdEJyQixRQUFROzs7Ozs7O0lBaUJmLHVDQUFvQzs7Ozs7SUFLeEIsc0NBQTRDOzs7OztJQUFFLG9DQUFzQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUsIEluamVjdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgUmVzdFV0aWwgfSBmcm9tICcuLi8uLi91dGlscy9yZXN0LXV0aWwnO1xuaW1wb3J0IHsgQ29yZUNvbmZpZyB9IGZyb20gJy4uLy4uL2NvbmZpZyc7XG5cbmltcG9ydCB7IEFwcGxpYW5jZVJlZ2lzdHJhdGlvbiB9IGZyb20gJy4uL2NvbW1vbi9BcHBsaWFuY2VSZWdpc3RyYXRpb24nO1xuaW1wb3J0IHsgQXBwbGlhbmNlU3RhdHVzQ29kZSB9IGZyb20gJy4uL2VudW1zL0FwcGxpYW5jZVN0YXR1c0NvZGUnO1xuaW1wb3J0IHsgQ29tbWFuZFN0YXR1c0NvZGUgfSBmcm9tICcuLi9lbnVtcy9Db21tYW5kU3RhdHVzQ29kZSc7XG5cblxuLyoqXG4gKiBMaXN0IG9mIGFwcGxpYW5jZSBxdWVyaWVzIGZvciBzeXN0ZW0gYWRtaW5pc3RyYXRvciBvbmx5XG4gKiBAUmVxdWVzdEhlYWRlciBYLUFQSS1LRVkgVGhlIGtleSB0byBpZGVudGlmeSB0aGUgYXBwbGljYXRpb24gKGNvbnNvbGUpXG4gKiBAUmVxdWVzdEhlYWRlciBYLUFDQ0VTUy1UT0tFTiBUaGUgdG9rZW4gdG8gaWRlbnRpZnkgdGhlIGxvZ2dlZC1pbiB1c2VyIFxuICovXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgU3lzQXBwbGlhbmNlc1NlcnZpY2Uge1xuXG4gIC8vIFVSTCB0byB3ZWIgYXBpXG4gIHByaXZhdGUgYmFzZVVybCA9ICcvc3lzL2FwcGxpYW5jZXMnO1xuXG4gIC8qKlxuICAgKiBDbGFzcyBjb25zdHJ1Y3RvclxuICAgKi9cbiAgY29uc3RydWN0b3IoQEluamVjdCgnY29uZmlnJykgcHJpdmF0ZSBjb25maWc6IENvcmVDb25maWcsIHByaXZhdGUgcmVzdDogUmVzdFV0aWwpIHtcbiAgICB0aGlzLmJhc2VVcmwgPSB0aGlzLmNvbmZpZy5hcGkgKyB0aGlzLmJhc2VVcmw7XG4gIH1cblxuXG4gIC8qKlxuICAgKiBSZWdpc3RlciBuZXcgYXBwbGlhbmNlIGluIHRoZSBzeXN0ZW1cbiAgICogQFJldHVybjogRW50aXR5UmVzcG9uc2U8QXBwbGlhbmNlPiBUaGUgcmVnaXN0ZXJlZCBhcHBsaWFuY2VcbiAgICovXG4gIHJlZ2lzdGVyQXBwbGlhbmNlKGlkPzogc3RyaW5nLCBib2R5PzogQXBwbGlhbmNlUmVnaXN0cmF0aW9uKSB7XG4gICAgcmV0dXJuIHRoaXMucmVzdC5wb3N0KGAke3RoaXMuYmFzZVVybH0vcmVnaXN0ZXJgLCB0eXBlb2YgYm9keSA9PT0gJ29iamVjdCcgPyBKU09OLnN0cmluZ2lmeShib2R5KSA6IGJvZHkpO1xuICB9XG5cbiAgLyoqXG4gICAqIEdldCBzaW5nbGUgYXBwbGlhbmNlIGJ5IGlkXG4gICAqIEBSZXR1cm46IEVudGl0eVJlc3BvbnNlPEFwcGxpYW5jZT5cbiAgICovXG4gIGdldChpZD86IHN0cmluZykge1xuICAgIHJldHVybiB0aGlzLnJlc3QuZ2V0KGAke3RoaXMuYmFzZVVybH0vJHtpZH1gKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBGaW5kIGxpc3Qgb2YgYXBwbGlhbmNlcyBhbmQgZmlsdGVyXG4gICAqIEBSZXR1cm46IFF1ZXJ5UmVzcG9uc2U8QXBwbGlhbmNlPlxuICAgKi9cbiAgZmluZChhY2NvdW50SWQ/OiBzdHJpbmcsIHNlYXJjaD86IHN0cmluZywgc3RhdHVzPzogQXBwbGlhbmNlU3RhdHVzQ29kZVtdLCBzb3J0Pzogc3RyaW5nLCBwYWdlPzogbnVtYmVyLCBwYWdlU2l6ZT86IG51bWJlcikge1xuICAgIGNvbnN0IHBhcmFtcyA9IG5ldyBBcnJheSgpO1x0XHRcbiAgICBpZiAoYWNjb3VudElkICE9IG51bGwpIHsgcGFyYW1zLnB1c2goYGFjY291bnRJZD0ke2FjY291bnRJZH1gKTsgfVxuICAgIGlmIChzZWFyY2ggIT0gbnVsbCkgeyBwYXJhbXMucHVzaChgc2VhcmNoPSR7c2VhcmNofWApOyB9XG4gICAgaWYgKHN0YXR1cyAhPSBudWxsKSB7IHBhcmFtcy5wdXNoKGBzdGF0dXM9JHtzdGF0dXN9YCk7IH1cbiAgICBpZiAoc29ydCAhPSBudWxsKSB7IHBhcmFtcy5wdXNoKGBzb3J0PSR7c29ydH1gKTsgfVxuICAgIGlmIChwYWdlICE9IG51bGwpIHsgcGFyYW1zLnB1c2goYHBhZ2U9JHtwYWdlfWApOyB9XG4gICAgaWYgKHBhZ2VTaXplICE9IG51bGwpIHsgcGFyYW1zLnB1c2goYHBhZ2VTaXplPSR7cGFnZVNpemV9YCk7IH1cblxuXHRcdHJldHVybiB0aGlzLnJlc3QuZ2V0KGAke3RoaXMuYmFzZVVybH1gLCAuLi5wYXJhbXMpO1xuICB9XG5cbiAgLyoqXG4gICAqIEV4cG9ydCBsaXN0IG9mIGFwcGxpYW5jZXMgYW5kIGZpbHRlclxuICAgKiBAUmV0dXJuOiBTdHJlYW1Db250ZW50XG4gICAqL1xuICBleHBvcnRGb3JtYXQoZm9sZGVySWQ/OiBzdHJpbmcsIHN1YkZvbGRlcnM/OiBib29sZWFuLCBzZWFyY2g/OiBzdHJpbmcsIHN0YXR1cz86IEFwcGxpYW5jZVN0YXR1c0NvZGVbXSwgc29ydD86IHN0cmluZywgZm9ybWF0Pzogc3RyaW5nLCBmaWVsZHM/OiBzdHJpbmdbXSkge1xuICAgIGNvbnN0IHBhcmFtcyA9IG5ldyBBcnJheSgpO1x0XHRcbiAgICBpZiAoZm9sZGVySWQgIT0gbnVsbCkgeyBwYXJhbXMucHVzaChgZm9sZGVySWQ9JHtmb2xkZXJJZH1gKTsgfVxuICAgIGlmIChzdWJGb2xkZXJzICE9IG51bGwpIHsgcGFyYW1zLnB1c2goYHN1YkZvbGRlcnM9JHtzdWJGb2xkZXJzfWApOyB9XG4gICAgaWYgKHNlYXJjaCAhPSBudWxsKSB7IHBhcmFtcy5wdXNoKGBzZWFyY2g9JHtzZWFyY2h9YCk7IH1cbiAgICBpZiAoc3RhdHVzICE9IG51bGwpIHsgcGFyYW1zLnB1c2goYHN0YXR1cz0ke3N0YXR1c31gKTsgfVxuICAgIGlmIChzb3J0ICE9IG51bGwpIHsgcGFyYW1zLnB1c2goYHNvcnQ9JHtzb3J0fWApOyB9XG4gICAgaWYgKGZvcm1hdCAhPSBudWxsKSB7IHBhcmFtcy5wdXNoKGBmb3JtYXQ9JHtmb3JtYXR9YCk7IH1cbiAgICBpZiAoZmllbGRzICE9IG51bGwpIHsgcGFyYW1zLnB1c2goYGZpZWxkcz0ke2ZpZWxkc31gKTsgfVxuXG5cdFx0cmV0dXJuIHRoaXMucmVzdC5kb3dubG9hZChgc3lzLWFwcGxpYW5jZXNgLGAke3RoaXMuYmFzZVVybH0vZXhwb3J0YCwgLi4ucGFyYW1zKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBEZWxldGUgYXBwbGlhbmNlIGZyb20gdGhlIHN5c3RlbVxuICAgKiBAUmV0dXJuOiBBY3Rpb25SZXNwb25zZVxuICAgKi9cbiAgZGVsZXRlKGlkPzogc3RyaW5nKSB7XG4gICAgcmV0dXJuIHRoaXMucmVzdC5kZWxldGUoYCR7dGhpcy5iYXNlVXJsfS8ke2lkfWApO1xuICB9XG5cbiAgLyoqXG4gICAqIFJlYm9vdCBhcHBsaWFuY2UgaG9zdFxuICAgKiBAUmV0dXJuOiBBY3Rpb25SZXNwb25zZVxuICAgKi9cbiAgcmVib290KGlkPzogc3RyaW5nKSB7XG4gICAgcmV0dXJuIHRoaXMucmVzdC5wb3N0KGAke3RoaXMuYmFzZVVybH0vJHtpZH0vcmVib290YCwgbnVsbCk7XG4gIH1cblxuICAvKipcbiAgICogQ2hhbmdlIGFwcGxpYW5jZSBtYWNoaW5lIElkIChmb3IgVklSVFVBTCBkZXZpY2Ugb25seSlcbiAgICogQFJldHVybjogRW50aXR5UmVzcG9uc2U8QXBwbGlhbmNlPiAtIFVwZGF0ZWQgYXBwbGlhbmNlXG4gICAqL1xuICBjaGFuZ2VNYWNoaW5lSWQoaWQ/OiBzdHJpbmcsIG1hY2hpbmVJZD86IHN0cmluZykge1xuICAgIHJldHVybiB0aGlzLnJlc3QucHV0KGAke3RoaXMuYmFzZVVybH0vJHtpZH0vbWFjaGluZS8ke21hY2hpbmVJZH1gLCBudWxsKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBDaGFuZ2UgYXBwbGlhbmNlIGNvbmZpZ3VyYXRpb25cbiAgICogQFJldHVybjogRW50aXR5UmVzcG9uc2U8QXBwbGlhbmNlPiAtIFVwZGF0ZWQgYXBwbGlhbmNlXG4gICAqL1xuICBjaGFuZ2VDb25maWd1cmF0aW9uKGlkPzogc3RyaW5nLCBjb25maWdJZD86IHN0cmluZywgdmVyc2lvbklkPzogc3RyaW5nKSB7XG4gICAgcmV0dXJuIHRoaXMucmVzdC5wdXQoYCR7dGhpcy5iYXNlVXJsfS8ke2lkfS9jb25maWcvJHtjb25maWdJZH0vJHt2ZXJzaW9uSWR9YCwgbnVsbCk7XG4gIH1cblxuICAvKipcbiAgICogR2V0IGFsbCBhcHBsaWFuY2UgYWdlbnRzXG4gICAqIEBSZXR1cm46IEVudGl0aWVzUmVzcG9uc2U8QWdlbnQ+XG4gICAqL1xuICBnZXRBcHBsaWFuY2VBZ2VudHMoaWQ/OiBzdHJpbmcpIHtcbiAgICByZXR1cm4gdGhpcy5yZXN0LmdldChgJHt0aGlzLmJhc2VVcmx9LyR7aWR9L2FnZW50c2ApO1xuICB9XG5cbiAgLyoqXG4gICAqIEFkZCBhZ2VudCB0byBhcHBsaWFuY2VcbiAgICogQWdlbnQgY2FuIGJlIGFkZGVkIHRvIHZpcnR1YWwgYXBwbGlhbmNlIG9ubHlcbiAgICogQFJldHVybjogRW50aXR5UmVzcG9uc2U8QWdlbnQ+XG4gICAqL1xuICBhZGRBcHBsaWFuY2VBZ2VudChpZD86IHN0cmluZykge1xuICAgIHJldHVybiB0aGlzLnJlc3QucG9zdChgJHt0aGlzLmJhc2VVcmx9LyR7aWR9L2FnZW50c2AsIG51bGwpO1xuICB9XG5cbiAgLyoqXG4gICAqIERlbGV0ZSBhZ2VudCBmcm9tIHRoZSBzeXN0ZW1cbiAgICogT25seSB2aXJ0dWFsIGRldmljZSBhZ2VudCBjYW4gYmUgZGVsZXRlZFxuICAgKiBAUmV0dXJuOiBBY3Rpb25SZXNwb25zZVxuICAgKi9cbiAgZGVsZXRlQXBwbGlhbmNlQWdlbnQoaWQ/OiBzdHJpbmcsIGFnZW50SWQ/OiBzdHJpbmcpIHtcbiAgICByZXR1cm4gdGhpcy5yZXN0LmRlbGV0ZShgJHt0aGlzLmJhc2VVcmx9LyR7aWR9L2FnZW50cy8ke2FnZW50SWR9YCk7XG4gIH1cblxuICAvKipcbiAgICogRmluZCBsaXN0IG9mIGFwcGxpYW5jZSBjb21tYW5kcyBhbmQgZmlsdGVyXG4gICAqIEBSZXR1cm46IEVudGl0aWVzUmVzcG9uc2U8QXBwbGlhbmNlQ29tbWFuZD4gTGlzdCBvZiBhcHBsaWFuY2UgY29tbWFuZHNcbiAgICovXG4gIGdldENvbW1hbmRzKGFjY291bnRJZD86IHN0cmluZywgYXBwbGlhbmNlSWQ/OiBzdHJpbmcsIHN0YXR1cz86IENvbW1hbmRTdGF0dXNDb2RlW10pIHtcbiAgICBjb25zdCBwYXJhbXMgPSBuZXcgQXJyYXkoKTtcdFx0XG4gICAgaWYgKGFjY291bnRJZCAhPSBudWxsKSB7IHBhcmFtcy5wdXNoKGBhY2NvdW50SWQ9JHthY2NvdW50SWR9YCk7IH1cbiAgICBpZiAoYXBwbGlhbmNlSWQgIT0gbnVsbCkgeyBwYXJhbXMucHVzaChgYXBwbGlhbmNlSWQ9JHthcHBsaWFuY2VJZH1gKTsgfVxuICAgIGlmIChzdGF0dXMgIT0gbnVsbCkgeyBwYXJhbXMucHVzaChgc3RhdHVzPSR7c3RhdHVzfWApOyB9XG5cblx0XHRyZXR1cm4gdGhpcy5yZXN0LmdldChgJHt0aGlzLmJhc2VVcmx9L2NvbW1hbmRzYCwgLi4ucGFyYW1zKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBVcGRhdGUgY29tbWFuZCBzdGF0dXNcbiAgICogQFJldHVybjogQWN0aW9uUmVzcG9uc2VcbiAgICovXG4gIHNldENvbW1hbmRTdGF0dXMoY29tbWFuZElkPzogc3RyaW5nLCBzdGF0dXM/OiBDb21tYW5kU3RhdHVzQ29kZSkge1xuICAgIHJldHVybiB0aGlzLnJlc3QucHV0KGAke3RoaXMuYmFzZVVybH0vY29tbWFuZHMvJHtjb21tYW5kSWR9LyR7c3RhdHVzfWAsIG51bGwpO1xuICB9XG5cbiAgLyoqXG4gICAqIERlbGV0ZSBjb21tYW5kXG4gICAqIEBSZXR1cm46IEFjdGlvblJlc3BvbnNlXG4gICAqL1xuICBkZWxldGVDb21tYW5kKGlkPzogc3RyaW5nLCBjb21tYW5kSWQ/OiBzdHJpbmcpIHtcbiAgICByZXR1cm4gdGhpcy5yZXN0LmRlbGV0ZShgJHt0aGlzLmJhc2VVcmx9LyR7aWR9L2NvbW1hbmRzLyR7Y29tbWFuZElkfWApO1xuICB9XG5cbiAgLyoqXG4gICAqIERlbGV0ZSBhbGwgYXBwbGlhbmNlIGNvbW1hbmRzXG4gICAqIEBSZXR1cm46IEFjdGlvblJlc3BvbnNlXG4gICAqL1xuICBkZWxldGVBbGxDb21tYW5kcyhpZD86IHN0cmluZywgYWdlbnRJZD86IHN0cmluZykge1xuICAgIHJldHVybiB0aGlzLnJlc3QuZGVsZXRlKGAke3RoaXMuYmFzZVVybH0vJHtpZH0vY29tbWFuZHNgKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBHZXQgYXBwbGlhbmNlIHN0YXR1cyBoaXN0b3J5IG92ZXIgdGltZVxuICAgKiBAUmV0dXJuOiAgRW50aXR5UmVzcG9uc2U8QXBwbGlhbmNlU3RhdHVzVGltZVNlcmllcz5cbiAgICovXG4gIGdldFN0YXR1c092ZXJUaW1lKGlkPzogc3RyaW5nLCBmcm9tPzogbnVtYmVyLCB0bz86IG51bWJlcikge1xuICAgIGNvbnN0IHBhcmFtcyA9IG5ldyBBcnJheSgpO1x0XHRcbiAgICBpZiAoZnJvbSAhPSBudWxsKSB7IHBhcmFtcy5wdXNoKGBmcm9tPSR7ZnJvbX1gKTsgfVxuICAgIGlmICh0byAhPSBudWxsKSB7IHBhcmFtcy5wdXNoKGB0bz0ke3RvfWApOyB9XG5cblx0XHRyZXR1cm4gdGhpcy5yZXN0LmdldChgJHt0aGlzLmJhc2VVcmx9LyR7aWR9L3N0YXR1cy9vdmVydGltZWAsIC4uLnBhcmFtcyk7XG4gIH1cblxuICAvKipcbiAgICogR2V0IGFwcGxpYW5jZSBLUEkgKEtleSBQZXJmb3JtYW5jZSBJbmRpY2F0b3JzKSBoaXN0b3J5IG92ZXIgdGltZSAoQ1BVLCBSQU0uIExPQUQpXG4gICAqIEBSZXR1cm46ICBFbnRpdHlSZXNwb25zZTxBcHBsaWFuY2VLUElzVGltZVNlcmllcz5cbiAgICovXG4gIGdldEtwaU92ZXJUaW1lKGlkPzogc3RyaW5nLCBmcm9tPzogbnVtYmVyLCB0bz86IG51bWJlcikge1xuICAgIGNvbnN0IHBhcmFtcyA9IG5ldyBBcnJheSgpO1x0XHRcbiAgICBpZiAoZnJvbSAhPSBudWxsKSB7IHBhcmFtcy5wdXNoKGBmcm9tPSR7ZnJvbX1gKTsgfVxuICAgIGlmICh0byAhPSBudWxsKSB7IHBhcmFtcy5wdXNoKGB0bz0ke3RvfWApOyB9XG5cblx0XHRyZXR1cm4gdGhpcy5yZXN0LmdldChgJHt0aGlzLmJhc2VVcmx9LyR7aWR9L2twaS9vdmVydGltZWAsIC4uLnBhcmFtcyk7XG4gIH1cblxufVxuIl19