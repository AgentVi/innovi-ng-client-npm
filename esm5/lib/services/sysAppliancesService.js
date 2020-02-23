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
     * Register new appliance in the system
     * @Return: EntityResponse<Appliance> The registered appliance
     */
    /**
     * Register new appliance in the system
     * \@Return: EntityResponse<Appliance> The registered appliance
     * @param {?=} id
     * @param {?=} body
     * @return {?}
     */
    SysAppliancesService.prototype.registerAppliance = /**
     * Register new appliance in the system
     * \@Return: EntityResponse<Appliance> The registered appliance
     * @param {?=} id
     * @param {?=} body
     * @return {?}
     */
    function (id, body) {
        return this.rest.post(this.baseUrl + "/register", typeof body === 'object' ? JSON.stringify(body) : body);
    };
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
     * Reboot appliance host
     * @Return: ActionResponse
     */
    /**
     * Reboot appliance host
     * \@Return: ActionResponse
     * @param {?=} id
     * @return {?}
     */
    SysAppliancesService.prototype.reboot = /**
     * Reboot appliance host
     * \@Return: ActionResponse
     * @param {?=} id
     * @return {?}
     */
    function (id) {
        return this.rest.post(this.baseUrl + "/" + id + "/reboot", null);
    };
    /**
     * Change appliance machine Id (for VIRTUAL device only)
     * @Return: EntityResponse<Appliance> - Updated appliance
     */
    /**
     * Change appliance machine Id (for VIRTUAL device only)
     * \@Return: EntityResponse<Appliance> - Updated appliance
     * @param {?=} id
     * @param {?=} machineId
     * @return {?}
     */
    SysAppliancesService.prototype.changeMachineId = /**
     * Change appliance machine Id (for VIRTUAL device only)
     * \@Return: EntityResponse<Appliance> - Updated appliance
     * @param {?=} id
     * @param {?=} machineId
     * @return {?}
     */
    function (id, machineId) {
        return this.rest.put(this.baseUrl + "/" + id + "/machine/" + machineId, null);
    };
    /**
     * Change appliance configuration
     * @Return: EntityResponse<Appliance> - Updated appliance
     */
    /**
     * Change appliance configuration
     * \@Return: EntityResponse<Appliance> - Updated appliance
     * @param {?=} id
     * @param {?=} configId
     * @param {?=} versionId
     * @return {?}
     */
    SysAppliancesService.prototype.changeConfiguration = /**
     * Change appliance configuration
     * \@Return: EntityResponse<Appliance> - Updated appliance
     * @param {?=} id
     * @param {?=} configId
     * @param {?=} versionId
     * @return {?}
     */
    function (id, configId, versionId) {
        return this.rest.put(this.baseUrl + "/" + id + "/config/" + configId + "/" + versionId, null);
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
     * @param {?=} id
     * @param {?=} commandId
     * @return {?}
     */
    SysAppliancesService.prototype.deleteCommand = /**
     * Delete command
     * \@Return: ActionResponse
     * @param {?=} id
     * @param {?=} commandId
     * @return {?}
     */
    function (id, commandId) {
        return this.rest.delete(this.baseUrl + "/" + id + "/commands/" + commandId);
    };
    /**
     * Delete all appliance commands
     * @Return: ActionResponse
     */
    /**
     * Delete all appliance commands
     * \@Return: ActionResponse
     * @param {?=} id
     * @param {?=} agentId
     * @return {?}
     */
    SysAppliancesService.prototype.deleteAllCommands = /**
     * Delete all appliance commands
     * \@Return: ActionResponse
     * @param {?=} id
     * @param {?=} agentId
     * @return {?}
     */
    function (id, agentId) {
        return this.rest.delete(this.baseUrl + "/" + id + "/commands");
    };
    /**
     * Get appliance status history over time
     * @Return:  EntityResponse<ApplianceStatusTimeSeries>
     */
    /**
     * Get appliance status history over time
     * \@Return: EntityResponse<ApplianceStatusTimeSeries>
     * @param {?=} id
     * @param {?=} from
     * @param {?=} to
     * @return {?}
     */
    SysAppliancesService.prototype.getStatusOverTime = /**
     * Get appliance status history over time
     * \@Return: EntityResponse<ApplianceStatusTimeSeries>
     * @param {?=} id
     * @param {?=} from
     * @param {?=} to
     * @return {?}
     */
    function (id, from, to) {
        var _a;
        /** @type {?} */
        var params = new Array();
        if (from != null) {
            params.push("from=" + from);
        }
        if (to != null) {
            params.push("to=" + to);
        }
        return (_a = this.rest).get.apply(_a, tslib_1.__spread([this.baseUrl + "/" + id + "/status/overtime"], params));
    };
    /**
     * Get appliance KPI (Key Performance Indicators) history over time (CPU, RAM. LOAD)
     * @Return:  EntityResponse<ApplianceKPIsTimeSeries>
     */
    /**
     * Get appliance KPI (Key Performance Indicators) history over time (CPU, RAM. LOAD)
     * \@Return: EntityResponse<ApplianceKPIsTimeSeries>
     * @param {?=} id
     * @param {?=} from
     * @param {?=} to
     * @return {?}
     */
    SysAppliancesService.prototype.getKpiOverTime = /**
     * Get appliance KPI (Key Performance Indicators) history over time (CPU, RAM. LOAD)
     * \@Return: EntityResponse<ApplianceKPIsTimeSeries>
     * @param {?=} id
     * @param {?=} from
     * @param {?=} to
     * @return {?}
     */
    function (id, from, to) {
        var _a;
        /** @type {?} */
        var params = new Array();
        if (from != null) {
            params.push("from=" + from);
        }
        if (to != null) {
            params.push("to=" + to);
        }
        return (_a = this.rest).get.apply(_a, tslib_1.__spread([this.baseUrl + "/" + id + "/kpi/overtime"], params));
    };
    /**
     * Aggregate appliances count distribution by status
     * @Return:  EntityResponse<DistributionOfLong>
     */
    /**
     * Aggregate appliances count distribution by status
     * \@Return: EntityResponse<DistributionOfLong>
     * @param {?=} folderId
     * @param {?=} subFolders
     * @return {?}
     */
    SysAppliancesService.prototype.getAppliancesCountByStatus = /**
     * Aggregate appliances count distribution by status
     * \@Return: EntityResponse<DistributionOfLong>
     * @param {?=} folderId
     * @param {?=} subFolders
     * @return {?}
     */
    function (folderId, subFolders) {
        var _a;
        /** @type {?} */
        var params = new Array();
        if (folderId != null) {
            params.push("folderId=" + folderId);
        }
        if (subFolders != null) {
            params.push("subFolders=" + subFolders);
        }
        return (_a = this.rest).get.apply(_a, tslib_1.__spread([this.baseUrl + "/count/by-status"], params));
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3lzQXBwbGlhbmNlc1NlcnZpY2UuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AYWdlbnR2aS9uZy1jb3JlLWxpYi8iLCJzb3VyY2VzIjpbImxpYi9zZXJ2aWNlcy9zeXNBcHBsaWFuY2VzU2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ25ELE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSx1QkFBdUIsQ0FBQztBQUNqRCxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sY0FBYyxDQUFDOzs7Ozs7QUFZMUM7SUFNRTs7T0FFRztJQUNILDhCQUFzQyxNQUFrQixFQUFVLElBQWM7UUFBMUMsV0FBTSxHQUFOLE1BQU0sQ0FBWTtRQUFVLFNBQUksR0FBSixJQUFJLENBQVU7O1FBTHhFLFlBQU8sR0FBRyxpQkFBaUIsQ0FBQztRQU1sQyxJQUFJLENBQUMsT0FBTyxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUMsR0FBRyxHQUFHLElBQUksQ0FBQyxPQUFPLENBQUM7SUFDaEQsQ0FBQztJQUdEOzs7T0FHRzs7Ozs7Ozs7SUFDSCxnREFBaUI7Ozs7Ozs7SUFBakIsVUFBa0IsRUFBVyxFQUFFLElBQTRCO1FBQ3pELE9BQU8sSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUksSUFBSSxDQUFDLE9BQU8sY0FBVyxFQUFFLE9BQU8sSUFBSSxLQUFLLFFBQVEsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDNUcsQ0FBQztJQUVEOzs7T0FHRzs7Ozs7OztJQUNILGtDQUFHOzs7Ozs7SUFBSCxVQUFJLEVBQVc7UUFDYixPQUFPLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFJLElBQUksQ0FBQyxPQUFPLFNBQUksRUFBSSxDQUFDLENBQUM7SUFDaEQsQ0FBQztJQUVEOzs7T0FH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UUFDMUIsSUFBSSxRQUFRLElBQUksSUFBSSxFQUFFO1lBQUUsTUFBTSxDQUFDLElBQUksQ0FBQyxjQUFZLFFBQVUsQ0FBQyxDQUFDO1NBQUU7UUFDOUQsSUFBSSxVQUFVLElBQUksSUFBSSxFQUFFO1lBQUUsTUFBTSxDQUFDLElBQUksQ0FBQyxnQkFBYyxVQUFZLENBQUMsQ0FBQztTQUFFO1FBRXRFLE9BQU8sQ0FBQSxLQUFBLElBQUksQ0FBQyxJQUFJLENBQUEsQ0FBQyxHQUFHLDZCQUFJLElBQUksQ0FBQyxPQUFPLHFCQUFrQixHQUFLLE1BQU0sR0FBRTtJQUNuRSxDQUFDOztnQkFoTUYsVUFBVTs7OztnQkFaRixVQUFVLHVCQXFCSixNQUFNLFNBQUMsUUFBUTtnQkF0QnJCLFFBQVE7O0lBK01qQiwyQkFBQztDQUFBLEFBbE1ELElBa01DO1NBak1ZLG9CQUFvQjs7Ozs7O0lBRy9CLHVDQUFvQzs7Ozs7SUFLeEIsc0NBQTRDOzs7OztJQUFFLG9DQUFzQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUsIEluamVjdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgUmVzdFV0aWwgfSBmcm9tICcuLi8uLi91dGlscy9yZXN0LXV0aWwnO1xuaW1wb3J0IHsgQ29yZUNvbmZpZyB9IGZyb20gJy4uLy4uL2NvbmZpZyc7XG5cbmltcG9ydCB7IEFwcGxpYW5jZVN0YXR1c0NvZGUgfSBmcm9tICcuLi9lbnVtcy9BcHBsaWFuY2VTdGF0dXNDb2RlJztcbmltcG9ydCB7IENvbW1hbmRTdGF0dXNDb2RlIH0gZnJvbSAnLi4vZW51bXMvQ29tbWFuZFN0YXR1c0NvZGUnO1xuaW1wb3J0IHsgQXBwbGlhbmNlUmVnaXN0cmF0aW9uIH0gZnJvbSAnLi4vY29tbW9uL0FwcGxpYW5jZVJlZ2lzdHJhdGlvbic7XG5cblxuLyoqXG4gKiBMaXN0IG9mIGFwcGxpYW5jZSBxdWVyaWVzIGZvciBzeXN0ZW0gYWRtaW5pc3RyYXRvciBvbmx5XG4gKiBAUmVxdWVzdEhlYWRlciBYLUFQSS1LRVkgVGhlIGtleSB0byBpZGVudGlmeSB0aGUgYXBwbGljYXRpb24gKGNvbnNvbGUpXG4gKiBAUmVxdWVzdEhlYWRlciBYLUFDQ0VTUy1UT0tFTiBUaGUgdG9rZW4gdG8gaWRlbnRpZnkgdGhlIGxvZ2dlZC1pbiB1c2VyIFxuICovXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgU3lzQXBwbGlhbmNlc1NlcnZpY2Uge1xuXG4gIC8vIFVSTCB0byB3ZWIgYXBpXG4gIHByaXZhdGUgYmFzZVVybCA9ICcvc3lzL2FwcGxpYW5jZXMnO1xuXG4gIC8qKlxuICAgKiBDbGFzcyBjb25zdHJ1Y3RvclxuICAgKi9cbiAgY29uc3RydWN0b3IoQEluamVjdCgnY29uZmlnJykgcHJpdmF0ZSBjb25maWc6IENvcmVDb25maWcsIHByaXZhdGUgcmVzdDogUmVzdFV0aWwpIHtcbiAgICB0aGlzLmJhc2VVcmwgPSB0aGlzLmNvbmZpZy5hcGkgKyB0aGlzLmJhc2VVcmw7XG4gIH1cblxuXG4gIC8qKlxuICAgKiBSZWdpc3RlciBuZXcgYXBwbGlhbmNlIGluIHRoZSBzeXN0ZW1cbiAgICogQFJldHVybjogRW50aXR5UmVzcG9uc2U8QXBwbGlhbmNlPiBUaGUgcmVnaXN0ZXJlZCBhcHBsaWFuY2VcbiAgICovXG4gIHJlZ2lzdGVyQXBwbGlhbmNlKGlkPzogc3RyaW5nLCBib2R5PzogQXBwbGlhbmNlUmVnaXN0cmF0aW9uKSB7XG4gICAgcmV0dXJuIHRoaXMucmVzdC5wb3N0KGAke3RoaXMuYmFzZVVybH0vcmVnaXN0ZXJgLCB0eXBlb2YgYm9keSA9PT0gJ29iamVjdCcgPyBKU09OLnN0cmluZ2lmeShib2R5KSA6IGJvZHkpO1xuICB9XG5cbiAgLyoqXG4gICAqIEdldCBzaW5nbGUgYXBwbGlhbmNlIGJ5IGlkXG4gICAqIEBSZXR1cm46IEVudGl0eVJlc3BvbnNlPEFwcGxpYW5jZT5cbiAgICovXG4gIGdldChpZD86IHN0cmluZykge1xuICAgIHJldHVybiB0aGlzLnJlc3QuZ2V0KGAke3RoaXMuYmFzZVVybH0vJHtpZH1gKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBGaW5kIGxpc3Qgb2YgYXBwbGlhbmNlcyBhbmQgZmlsdGVyXG4gICAqIEBSZXR1cm46IFF1ZXJ5UmVzcG9uc2U8QXBwbGlhbmNlPlxuICAgKi9cbiAgZmluZChhY2NvdW50SWQ/OiBzdHJpbmcsIHNlYXJjaD86IHN0cmluZywgc3RhdHVzPzogQXBwbGlhbmNlU3RhdHVzQ29kZVtdLCBzb3J0Pzogc3RyaW5nLCBwYWdlPzogbnVtYmVyLCBwYWdlU2l6ZT86IG51bWJlcikge1xuICAgIGNvbnN0IHBhcmFtcyA9IG5ldyBBcnJheSgpO1x0XHRcbiAgICBpZiAoYWNjb3VudElkICE9IG51bGwpIHsgcGFyYW1zLnB1c2goYGFjY291bnRJZD0ke2FjY291bnRJZH1gKTsgfVxuICAgIGlmIChzZWFyY2ggIT0gbnVsbCkgeyBwYXJhbXMucHVzaChgc2VhcmNoPSR7c2VhcmNofWApOyB9XG4gICAgaWYgKHN0YXR1cyAhPSBudWxsKSB7IHBhcmFtcy5wdXNoKGBzdGF0dXM9JHtzdGF0dXN9YCk7IH1cbiAgICBpZiAoc29ydCAhPSBudWxsKSB7IHBhcmFtcy5wdXNoKGBzb3J0PSR7c29ydH1gKTsgfVxuICAgIGlmIChwYWdlICE9IG51bGwpIHsgcGFyYW1zLnB1c2goYHBhZ2U9JHtwYWdlfWApOyB9XG4gICAgaWYgKHBhZ2VTaXplICE9IG51bGwpIHsgcGFyYW1zLnB1c2goYHBhZ2VTaXplPSR7cGFnZVNpemV9YCk7IH1cblxuXHRcdHJldHVybiB0aGlzLnJlc3QuZ2V0KGAke3RoaXMuYmFzZVVybH1gLCAuLi5wYXJhbXMpO1xuICB9XG5cbiAgLyoqXG4gICAqIEV4cG9ydCBsaXN0IG9mIGFwcGxpYW5jZXMgYW5kIGZpbHRlclxuICAgKiBAUmV0dXJuOiBTdHJlYW1Db250ZW50XG4gICAqL1xuICBleHBvcnRGb3JtYXQoZm9sZGVySWQ/OiBzdHJpbmcsIHN1YkZvbGRlcnM/OiBib29sZWFuLCBzZWFyY2g/OiBzdHJpbmcsIHN0YXR1cz86IEFwcGxpYW5jZVN0YXR1c0NvZGVbXSwgc29ydD86IHN0cmluZywgZm9ybWF0Pzogc3RyaW5nLCBmaWVsZHM/OiBzdHJpbmdbXSkge1xuICAgIGNvbnN0IHBhcmFtcyA9IG5ldyBBcnJheSgpO1x0XHRcbiAgICBpZiAoZm9sZGVySWQgIT0gbnVsbCkgeyBwYXJhbXMucHVzaChgZm9sZGVySWQ9JHtmb2xkZXJJZH1gKTsgfVxuICAgIGlmIChzdWJGb2xkZXJzICE9IG51bGwpIHsgcGFyYW1zLnB1c2goYHN1YkZvbGRlcnM9JHtzdWJGb2xkZXJzfWApOyB9XG4gICAgaWYgKHNlYXJjaCAhPSBudWxsKSB7IHBhcmFtcy5wdXNoKGBzZWFyY2g9JHtzZWFyY2h9YCk7IH1cbiAgICBpZiAoc3RhdHVzICE9IG51bGwpIHsgcGFyYW1zLnB1c2goYHN0YXR1cz0ke3N0YXR1c31gKTsgfVxuICAgIGlmIChzb3J0ICE9IG51bGwpIHsgcGFyYW1zLnB1c2goYHNvcnQ9JHtzb3J0fWApOyB9XG4gICAgaWYgKGZvcm1hdCAhPSBudWxsKSB7IHBhcmFtcy5wdXNoKGBmb3JtYXQ9JHtmb3JtYXR9YCk7IH1cbiAgICBpZiAoZmllbGRzICE9IG51bGwpIHsgcGFyYW1zLnB1c2goYGZpZWxkcz0ke2ZpZWxkc31gKTsgfVxuXG5cdFx0cmV0dXJuIHRoaXMucmVzdC5kb3dubG9hZChgc3lzLWFwcGxpYW5jZXNgLGAke3RoaXMuYmFzZVVybH0vZXhwb3J0YCwgLi4ucGFyYW1zKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBEZWxldGUgYXBwbGlhbmNlIGZyb20gdGhlIHN5c3RlbVxuICAgKiBAUmV0dXJuOiBBY3Rpb25SZXNwb25zZVxuICAgKi9cbiAgZGVsZXRlKGlkPzogc3RyaW5nKSB7XG4gICAgcmV0dXJuIHRoaXMucmVzdC5kZWxldGUoYCR7dGhpcy5iYXNlVXJsfS8ke2lkfWApO1xuICB9XG5cbiAgLyoqXG4gICAqIFJlYm9vdCBhcHBsaWFuY2UgaG9zdFxuICAgKiBAUmV0dXJuOiBBY3Rpb25SZXNwb25zZVxuICAgKi9cbiAgcmVib290KGlkPzogc3RyaW5nKSB7XG4gICAgcmV0dXJuIHRoaXMucmVzdC5wb3N0KGAke3RoaXMuYmFzZVVybH0vJHtpZH0vcmVib290YCwgbnVsbCk7XG4gIH1cblxuICAvKipcbiAgICogQ2hhbmdlIGFwcGxpYW5jZSBtYWNoaW5lIElkIChmb3IgVklSVFVBTCBkZXZpY2Ugb25seSlcbiAgICogQFJldHVybjogRW50aXR5UmVzcG9uc2U8QXBwbGlhbmNlPiAtIFVwZGF0ZWQgYXBwbGlhbmNlXG4gICAqL1xuICBjaGFuZ2VNYWNoaW5lSWQoaWQ/OiBzdHJpbmcsIG1hY2hpbmVJZD86IHN0cmluZykge1xuICAgIHJldHVybiB0aGlzLnJlc3QucHV0KGAke3RoaXMuYmFzZVVybH0vJHtpZH0vbWFjaGluZS8ke21hY2hpbmVJZH1gLCBudWxsKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBDaGFuZ2UgYXBwbGlhbmNlIGNvbmZpZ3VyYXRpb25cbiAgICogQFJldHVybjogRW50aXR5UmVzcG9uc2U8QXBwbGlhbmNlPiAtIFVwZGF0ZWQgYXBwbGlhbmNlXG4gICAqL1xuICBjaGFuZ2VDb25maWd1cmF0aW9uKGlkPzogc3RyaW5nLCBjb25maWdJZD86IHN0cmluZywgdmVyc2lvbklkPzogc3RyaW5nKSB7XG4gICAgcmV0dXJuIHRoaXMucmVzdC5wdXQoYCR7dGhpcy5iYXNlVXJsfS8ke2lkfS9jb25maWcvJHtjb25maWdJZH0vJHt2ZXJzaW9uSWR9YCwgbnVsbCk7XG4gIH1cblxuICAvKipcbiAgICogR2V0IGFsbCBhcHBsaWFuY2UgYWdlbnRzXG4gICAqIEBSZXR1cm46IEVudGl0aWVzUmVzcG9uc2U8QWdlbnQ+XG4gICAqL1xuICBnZXRBcHBsaWFuY2VBZ2VudHMoaWQ/OiBzdHJpbmcpIHtcbiAgICByZXR1cm4gdGhpcy5yZXN0LmdldChgJHt0aGlzLmJhc2VVcmx9LyR7aWR9L2FnZW50c2ApO1xuICB9XG5cbiAgLyoqXG4gICAqIEFkZCBhZ2VudCB0byBhcHBsaWFuY2VcbiAgICogQWdlbnQgY2FuIGJlIGFkZGVkIHRvIHZpcnR1YWwgYXBwbGlhbmNlIG9ubHlcbiAgICogQFJldHVybjogRW50aXR5UmVzcG9uc2U8QWdlbnQ+XG4gICAqL1xuICBhZGRBcHBsaWFuY2VBZ2VudChpZD86IHN0cmluZykge1xuICAgIHJldHVybiB0aGlzLnJlc3QucG9zdChgJHt0aGlzLmJhc2VVcmx9LyR7aWR9L2FnZW50c2AsIG51bGwpO1xuICB9XG5cbiAgLyoqXG4gICAqIERlbGV0ZSBhZ2VudCBmcm9tIHRoZSBzeXN0ZW1cbiAgICogT25seSB2aXJ0dWFsIGRldmljZSBhZ2VudCBjYW4gYmUgZGVsZXRlZFxuICAgKiBAUmV0dXJuOiBBY3Rpb25SZXNwb25zZVxuICAgKi9cbiAgZGVsZXRlQXBwbGlhbmNlQWdlbnQoaWQ/OiBzdHJpbmcsIGFnZW50SWQ/OiBzdHJpbmcpIHtcbiAgICByZXR1cm4gdGhpcy5yZXN0LmRlbGV0ZShgJHt0aGlzLmJhc2VVcmx9LyR7aWR9L2FnZW50cy8ke2FnZW50SWR9YCk7XG4gIH1cblxuICAvKipcbiAgICogRmluZCBsaXN0IG9mIGFwcGxpYW5jZSBjb21tYW5kcyBhbmQgZmlsdGVyXG4gICAqIEBSZXR1cm46IEVudGl0aWVzUmVzcG9uc2U8QXBwbGlhbmNlQ29tbWFuZD4gTGlzdCBvZiBhcHBsaWFuY2UgY29tbWFuZHNcbiAgICovXG4gIGdldENvbW1hbmRzKGFjY291bnRJZD86IHN0cmluZywgYXBwbGlhbmNlSWQ/OiBzdHJpbmcsIHN0YXR1cz86IENvbW1hbmRTdGF0dXNDb2RlW10pIHtcbiAgICBjb25zdCBwYXJhbXMgPSBuZXcgQXJyYXkoKTtcdFx0XG4gICAgaWYgKGFjY291bnRJZCAhPSBudWxsKSB7IHBhcmFtcy5wdXNoKGBhY2NvdW50SWQ9JHthY2NvdW50SWR9YCk7IH1cbiAgICBpZiAoYXBwbGlhbmNlSWQgIT0gbnVsbCkgeyBwYXJhbXMucHVzaChgYXBwbGlhbmNlSWQ9JHthcHBsaWFuY2VJZH1gKTsgfVxuICAgIGlmIChzdGF0dXMgIT0gbnVsbCkgeyBwYXJhbXMucHVzaChgc3RhdHVzPSR7c3RhdHVzfWApOyB9XG5cblx0XHRyZXR1cm4gdGhpcy5yZXN0LmdldChgJHt0aGlzLmJhc2VVcmx9L2NvbW1hbmRzYCwgLi4ucGFyYW1zKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBVcGRhdGUgY29tbWFuZCBzdGF0dXNcbiAgICogQFJldHVybjogQWN0aW9uUmVzcG9uc2VcbiAgICovXG4gIHNldENvbW1hbmRTdGF0dXMoY29tbWFuZElkPzogc3RyaW5nLCBzdGF0dXM/OiBDb21tYW5kU3RhdHVzQ29kZSkge1xuICAgIHJldHVybiB0aGlzLnJlc3QucHV0KGAke3RoaXMuYmFzZVVybH0vY29tbWFuZHMvJHtjb21tYW5kSWR9LyR7c3RhdHVzfWAsIG51bGwpO1xuICB9XG5cbiAgLyoqXG4gICAqIERlbGV0ZSBjb21tYW5kXG4gICAqIEBSZXR1cm46IEFjdGlvblJlc3BvbnNlXG4gICAqL1xuICBkZWxldGVDb21tYW5kKGlkPzogc3RyaW5nLCBjb21tYW5kSWQ/OiBzdHJpbmcpIHtcbiAgICByZXR1cm4gdGhpcy5yZXN0LmRlbGV0ZShgJHt0aGlzLmJhc2VVcmx9LyR7aWR9L2NvbW1hbmRzLyR7Y29tbWFuZElkfWApO1xuICB9XG5cbiAgLyoqXG4gICAqIERlbGV0ZSBhbGwgYXBwbGlhbmNlIGNvbW1hbmRzXG4gICAqIEBSZXR1cm46IEFjdGlvblJlc3BvbnNlXG4gICAqL1xuICBkZWxldGVBbGxDb21tYW5kcyhpZD86IHN0cmluZywgYWdlbnRJZD86IHN0cmluZykge1xuICAgIHJldHVybiB0aGlzLnJlc3QuZGVsZXRlKGAke3RoaXMuYmFzZVVybH0vJHtpZH0vY29tbWFuZHNgKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBHZXQgYXBwbGlhbmNlIHN0YXR1cyBoaXN0b3J5IG92ZXIgdGltZVxuICAgKiBAUmV0dXJuOiAgRW50aXR5UmVzcG9uc2U8QXBwbGlhbmNlU3RhdHVzVGltZVNlcmllcz5cbiAgICovXG4gIGdldFN0YXR1c092ZXJUaW1lKGlkPzogc3RyaW5nLCBmcm9tPzogbnVtYmVyLCB0bz86IG51bWJlcikge1xuICAgIGNvbnN0IHBhcmFtcyA9IG5ldyBBcnJheSgpO1x0XHRcbiAgICBpZiAoZnJvbSAhPSBudWxsKSB7IHBhcmFtcy5wdXNoKGBmcm9tPSR7ZnJvbX1gKTsgfVxuICAgIGlmICh0byAhPSBudWxsKSB7IHBhcmFtcy5wdXNoKGB0bz0ke3RvfWApOyB9XG5cblx0XHRyZXR1cm4gdGhpcy5yZXN0LmdldChgJHt0aGlzLmJhc2VVcmx9LyR7aWR9L3N0YXR1cy9vdmVydGltZWAsIC4uLnBhcmFtcyk7XG4gIH1cblxuICAvKipcbiAgICogR2V0IGFwcGxpYW5jZSBLUEkgKEtleSBQZXJmb3JtYW5jZSBJbmRpY2F0b3JzKSBoaXN0b3J5IG92ZXIgdGltZSAoQ1BVLCBSQU0uIExPQUQpXG4gICAqIEBSZXR1cm46ICBFbnRpdHlSZXNwb25zZTxBcHBsaWFuY2VLUElzVGltZVNlcmllcz5cbiAgICovXG4gIGdldEtwaU92ZXJUaW1lKGlkPzogc3RyaW5nLCBmcm9tPzogbnVtYmVyLCB0bz86IG51bWJlcikge1xuICAgIGNvbnN0IHBhcmFtcyA9IG5ldyBBcnJheSgpO1x0XHRcbiAgICBpZiAoZnJvbSAhPSBudWxsKSB7IHBhcmFtcy5wdXNoKGBmcm9tPSR7ZnJvbX1gKTsgfVxuICAgIGlmICh0byAhPSBudWxsKSB7IHBhcmFtcy5wdXNoKGB0bz0ke3RvfWApOyB9XG5cblx0XHRyZXR1cm4gdGhpcy5yZXN0LmdldChgJHt0aGlzLmJhc2VVcmx9LyR7aWR9L2twaS9vdmVydGltZWAsIC4uLnBhcmFtcyk7XG4gIH1cblxuICAvKipcbiAgICogQWdncmVnYXRlIGFwcGxpYW5jZXMgY291bnQgZGlzdHJpYnV0aW9uIGJ5IHN0YXR1c1xuICAgKiBAUmV0dXJuOiAgRW50aXR5UmVzcG9uc2U8RGlzdHJpYnV0aW9uT2ZMb25nPlxuICAgKi9cbiAgZ2V0QXBwbGlhbmNlc0NvdW50QnlTdGF0dXMoZm9sZGVySWQ/OiBzdHJpbmcsIHN1YkZvbGRlcnM/OiBib29sZWFuKSB7XG4gICAgY29uc3QgcGFyYW1zID0gbmV3IEFycmF5KCk7XHRcdFxuICAgIGlmIChmb2xkZXJJZCAhPSBudWxsKSB7IHBhcmFtcy5wdXNoKGBmb2xkZXJJZD0ke2ZvbGRlcklkfWApOyB9XG4gICAgaWYgKHN1YkZvbGRlcnMgIT0gbnVsbCkgeyBwYXJhbXMucHVzaChgc3ViRm9sZGVycz0ke3N1YkZvbGRlcnN9YCk7IH1cblxuXHRcdHJldHVybiB0aGlzLnJlc3QuZ2V0KGAke3RoaXMuYmFzZVVybH0vY291bnQvYnktc3RhdHVzYCwgLi4ucGFyYW1zKTtcbiAgfVxuXG59XG4iXX0=