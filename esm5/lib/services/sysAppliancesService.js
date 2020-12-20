import { __read, __spread } from "tslib";
import { Injectable, Inject } from '@angular/core';
import { RestUtil } from '../../utils/rest-util';
import { CoreConfig } from '../../config';
import * as i0 from "@angular/core";
import * as i1 from "../../utils/rest-util";
import * as i2 from "../../config";
/**
 * List of appliance queries for system administrator only
 * @RequestHeader X-API-KEY The key to identify the application (console)
 * @RequestHeader X-ACCESS-TOKEN The token to identify the logged-in user
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
    SysAppliancesService.prototype.registerAppliance = function (id, body) {
        return this.rest.post(this.baseUrl + "/register", typeof body === 'object' ? JSON.stringify(body) : body);
    };
    /**
     * Get single appliance by id
     * @Return: EntityResponse<Appliance>
     */
    SysAppliancesService.prototype.get = function (id) {
        return this.rest.get(this.baseUrl + "/" + id);
    };
    /**
     * Find list of appliances and filter
     * @Return: QueryResponse<Appliance>
     */
    SysAppliancesService.prototype.find = function (accountId, search, status, agentStatus, sort, page, pageSize) {
        var _a;
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
        if (agentStatus != null) {
            params.push("agentStatus=" + agentStatus);
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
        return (_a = this.rest).get.apply(_a, __spread(["" + this.baseUrl], params));
    };
    /**
     * Export list of appliances and filter
     * @Return: StreamContent
     */
    SysAppliancesService.prototype.exportFormat = function (folderId, subFolders, search, status, agentStatus, sort, format, fields) {
        var _a;
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
        if (agentStatus != null) {
            params.push("agentStatus=" + agentStatus);
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
        return (_a = this.rest).download.apply(_a, __spread(["sys-appliances", this.baseUrl + "/export"], params));
    };
    /**
     * Delete appliance from the system
     * @Return: ActionResponse
     */
    SysAppliancesService.prototype.delete = function (id) {
        return this.rest.delete(this.baseUrl + "/" + id);
    };
    /**
     * Reboot appliance host
     * @Return: ActionResponse
     */
    SysAppliancesService.prototype.reboot = function (id) {
        return this.rest.post(this.baseUrl + "/" + id + "/reboot", null);
    };
    /**
     * Rebuild appliance configuration and deploy the configuration to the device manager
     * @Return: ActionResponse
     */
    SysAppliancesService.prototype.redeploy = function (id) {
        return this.rest.post(this.baseUrl + "/" + id + "/redeploy", null);
    };
    /**
     * Change appliance machine Id (for VIRTUAL device only)
     * @Return: EntityResponse<Appliance> - Updated appliance
     */
    SysAppliancesService.prototype.changeMachineId = function (id, machineId) {
        return this.rest.put(this.baseUrl + "/" + id + "/machine/" + machineId, null);
    };
    /**
     * Change appliance configuration
     * @Return: EntityResponse<Appliance> - Updated appliance
     */
    SysAppliancesService.prototype.changeConfiguration = function (id, configId, versionId) {
        return this.rest.put(this.baseUrl + "/" + id + "/config/" + configId + "/" + versionId, null);
    };
    /**
     * Get all appliance agents
     * @Return: EntitiesResponse<Agent>
     */
    SysAppliancesService.prototype.getApplianceAgents = function (id) {
        return this.rest.get(this.baseUrl + "/" + id + "/agents");
    };
    /**
     * Add agent to appliance
     * Agent can be added to virtual appliance only
     * @Return: EntityResponse<Agent>
     */
    SysAppliancesService.prototype.addApplianceAgent = function (id) {
        return this.rest.post(this.baseUrl + "/" + id + "/agents", null);
    };
    /**
     * Delete agent from the system
     * Only virtual device agent can be deleted
     * @Return: ActionResponse
     */
    SysAppliancesService.prototype.deleteApplianceAgent = function (id, agentId) {
        return this.rest.delete(this.baseUrl + "/" + id + "/agents/" + agentId);
    };
    /**
     * Find list of appliance commands and filter
     * @Return: EntitiesResponse<ApplianceCommand> List of appliance commands
     */
    SysAppliancesService.prototype.getCommands = function (accountId, applianceId, status) {
        var _a;
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
        return (_a = this.rest).get.apply(_a, __spread([this.baseUrl + "/commands"], params));
    };
    /**
     * Update command status
     * @Return: ActionResponse
     */
    SysAppliancesService.prototype.setCommandStatus = function (commandId, status) {
        return this.rest.put(this.baseUrl + "/commands/" + commandId + "/" + status, null);
    };
    /**
     * Delete command
     * @Return: ActionResponse
     */
    SysAppliancesService.prototype.deleteCommand = function (id, commandId) {
        return this.rest.delete(this.baseUrl + "/" + id + "/commands/" + commandId);
    };
    /**
     * Delete all appliance commands
     * @Return: ActionResponse
     */
    SysAppliancesService.prototype.deleteAllCommands = function (id, agentId) {
        return this.rest.delete(this.baseUrl + "/" + id + "/commands");
    };
    /**
     * Get appliance status history over time
     * @Return:  EntityResponse<ApplianceStatusTimeSeries>
     */
    SysAppliancesService.prototype.getStatusOverTime = function (id, from, to) {
        var _a;
        var params = new Array();
        if (from != null) {
            params.push("from=" + from);
        }
        if (to != null) {
            params.push("to=" + to);
        }
        return (_a = this.rest).get.apply(_a, __spread([this.baseUrl + "/" + id + "/status/overtime"], params));
    };
    /**
     * Get appliance KPI (Key Performance Indicators) history over time (CPU, RAM. LOAD)
     * @Return:  EntityResponse<ApplianceKPIsTimeSeries>
     */
    SysAppliancesService.prototype.getKpiOverTime = function (id, from, to) {
        var _a;
        var params = new Array();
        if (from != null) {
            params.push("from=" + from);
        }
        if (to != null) {
            params.push("to=" + to);
        }
        return (_a = this.rest).get.apply(_a, __spread([this.baseUrl + "/" + id + "/kpi/overtime"], params));
    };
    /**
     * Aggregate appliances count distribution by status
     * @Return:  EntityResponse<DistributionOfLong>
     */
    SysAppliancesService.prototype.getAppliancesCountByStatus = function (accountId, folderId, subFolders) {
        var _a;
        var params = new Array();
        if (accountId != null) {
            params.push("accountId=" + accountId);
        }
        if (folderId != null) {
            params.push("folderId=" + folderId);
        }
        if (subFolders != null) {
            params.push("subFolders=" + subFolders);
        }
        return (_a = this.rest).get.apply(_a, __spread([this.baseUrl + "/count/by-status"], params));
    };
    /**
     * Send get capabilities command to the appliance and wait for response up to 60 seconds
     * @Return:  EntityResponse<Appliance>
     */
    SysAppliancesService.prototype.getCapabilities = function (id) {
        return this.rest.post(this.baseUrl + "/" + id + "/capabilities", null);
    };
    /**
     * Send get logs command to the appliance
     * @Return:  ActionResponse
     */
    SysAppliancesService.prototype.getLogs = function (id, componentId, from, to) {
        var _a;
        var params = new Array();
        if (componentId != null) {
            params.push("componentId=" + componentId);
        }
        if (from != null) {
            params.push("from=" + from);
        }
        if (to != null) {
            params.push("to=" + to);
        }
        return (_a = this.rest).post.apply(_a, __spread([this.baseUrl + "/" + id + "/logs", null], params));
    };
    /**
     * Upgrade batch of appliances
     * @Return:  EntitiesResponse<UpdateStatus>
     */
    SysAppliancesService.prototype.batchUpgrade = function (configId, versionId, id) {
        var _a;
        var params = new Array();
        if (id != null) {
            params.push("id=" + id);
        }
        return (_a = this.rest).post.apply(_a, __spread([this.baseUrl + "/config/" + configId + "/" + versionId + "/batch-upgrade", null], params));
    };
    /**
     * Find list of device update status entries by filter
     * @Return:  QueryResponse<UpdateStatus>
     */
    SysAppliancesService.prototype.findUpgradeStatus = function (accountId, applianceId, userId, commandId, batchId, from, to, sort, page, pageSize) {
        var _a;
        var params = new Array();
        if (accountId != null) {
            params.push("accountId=" + accountId);
        }
        if (applianceId != null) {
            params.push("applianceId=" + applianceId);
        }
        if (userId != null) {
            params.push("userId=" + userId);
        }
        if (commandId != null) {
            params.push("commandId=" + commandId);
        }
        if (batchId != null) {
            params.push("batchId=" + batchId);
        }
        if (from != null) {
            params.push("from=" + from);
        }
        if (to != null) {
            params.push("to=" + to);
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
        return (_a = this.rest).get.apply(_a, __spread([this.baseUrl + "/batch-upgrade"], params));
    };
    /**
     * Find list of devices configurations (configured vs. actual)
     * @Return:  EntityResponse<ApplianceConfigReport>
     */
    SysAppliancesService.prototype.findDevicesConfigurations = function (account, format) {
        var _a;
        var params = new Array();
        if (account != null) {
            params.push("account=" + account);
        }
        if (format != null) {
            params.push("format=" + format);
        }
        return (_a = this.rest).get.apply(_a, __spread([this.baseUrl + "/actual-config"], params));
    };
    /**
     * Export list of devices configurations (configured vs. actual)
     * @Return:  StreamingOutput of the report file
     */
    SysAppliancesService.prototype.exportDevicesConfigurations = function (account, format) {
        var _a;
        var params = new Array();
        if (account != null) {
            params.push("account=" + account);
        }
        if (format != null) {
            params.push("format=" + format);
        }
        return (_a = this.rest).download.apply(_a, __spread(["sys-appliances", this.baseUrl + "/actual-config/export"], params));
    };
    /** @nocollapse */ SysAppliancesService.ɵfac = function SysAppliancesService_Factory(t) { return new (t || SysAppliancesService)(i0.ɵɵinject('config'), i0.ɵɵinject(i1.RestUtil)); };
    /** @nocollapse */ SysAppliancesService.ɵprov = i0.ɵɵdefineInjectable({ token: SysAppliancesService, factory: SysAppliancesService.ɵfac });
    return SysAppliancesService;
}());
export { SysAppliancesService };
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(SysAppliancesService, [{
        type: Injectable
    }], function () { return [{ type: i2.CoreConfig, decorators: [{
                type: Inject,
                args: ['config']
            }] }, { type: i1.RestUtil }]; }, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3lzQXBwbGlhbmNlc1NlcnZpY2UuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AYWdlbnR2aS9uZy1jb3JlLWxpYi8iLCJzb3VyY2VzIjpbImxpYi9zZXJ2aWNlcy9zeXNBcHBsaWFuY2VzU2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDbkQsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLHVCQUF1QixDQUFDO0FBQ2pELE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxjQUFjLENBQUM7Ozs7QUFRMUM7Ozs7R0FJRztBQUNIO0lBTUU7O09BRUc7SUFDSCw4QkFBc0MsTUFBa0IsRUFBVSxJQUFjO1FBQTFDLFdBQU0sR0FBTixNQUFNLENBQVk7UUFBVSxTQUFJLEdBQUosSUFBSSxDQUFVO1FBTmhGLGlCQUFpQjtRQUNULFlBQU8sR0FBRyxpQkFBaUIsQ0FBQztRQU1sQyxJQUFJLENBQUMsT0FBTyxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUMsR0FBRyxHQUFHLElBQUksQ0FBQyxPQUFPLENBQUM7SUFDaEQsQ0FBQztJQUdEOzs7T0FHRztJQUNILGdEQUFpQixHQUFqQixVQUFrQixFQUFXLEVBQUUsSUFBNEI7UUFDekQsT0FBTyxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBSSxJQUFJLENBQUMsT0FBTyxjQUFXLEVBQUUsT0FBTyxJQUFJLEtBQUssUUFBUSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUM1RyxDQUFDO0lBRUQ7OztPQUdHO0lBQ0gsa0NBQUcsR0FBSCxVQUFJLEVBQVc7UUFDYixPQUFPLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFJLElBQUksQ0FBQyxPQUFPLFNBQUksRUFBSSxDQUFDLENBQUM7SUFDaEQsQ0FBQztJQUVEOzs7T0FHRztJQUNI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QyxDQUFDO1NBQUU7UUFDM0QsSUFBSSxNQUFNLElBQUksSUFBSSxFQUFFO1lBQUUsTUFBTSxDQUFDLElBQUksQ0FBQyxZQUFVLE1BQVEsQ0FBQyxDQUFDO1NBQUU7UUFFMUQsT0FBTyxDQUFBLEtBQUEsSUFBSSxDQUFDLElBQUksQ0FBQSxDQUFDLEdBQUcscUJBQUksSUFBSSxDQUFDLE9BQU8sbUJBQWdCLEdBQUssTUFBTSxHQUFFO0lBQ2pFLENBQUM7SUFFRDs7O09BR0c7SUFDSCwwREFBMkIsR0FBM0IsVUFBNEIsT0FBZ0IsRUFBRSxNQUFlOztRQUMzRCxJQUFNLE1BQU0sR0FBRyxJQUFJLEtBQUssRUFBRSxDQUFDO1FBQzNCLElBQUksT0FBTyxJQUFJLElBQUksRUFBRTtZQUFFLE1BQU0sQ0FBQyxJQUFJLENBQUMsYUFBVyxPQUFTLENBQUMsQ0FBQztTQUFFO1FBQzNELElBQUksTUFBTSxJQUFJLElBQUksRUFBRTtZQUFFLE1BQU0sQ0FBQyxJQUFJLENBQUMsWUFBVSxNQUFRLENBQUMsQ0FBQztTQUFFO1FBRTFELE9BQU8sQ0FBQSxLQUFBLElBQUksQ0FBQyxJQUFJLENBQUEsQ0FBQyxRQUFRLHFCQUFDLGdCQUFnQixFQUFJLElBQUksQ0FBQyxPQUFPLDBCQUF1QixHQUFLLE1BQU0sR0FBRTtJQUM5RixDQUFDOytHQXRSVSxvQkFBb0IsY0FRWCxRQUFRO21GQVJqQixvQkFBb0IsV0FBcEIsb0JBQW9COytCQWhCakM7Q0F3U0MsQUF6UkQsSUF5UkM7U0F4Ulksb0JBQW9CO2tEQUFwQixvQkFBb0I7Y0FEaEMsVUFBVTs7c0JBU0ksTUFBTTt1QkFBQyxRQUFRIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSwgSW5qZWN0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBSZXN0VXRpbCB9IGZyb20gJy4uLy4uL3V0aWxzL3Jlc3QtdXRpbCc7XG5pbXBvcnQgeyBDb3JlQ29uZmlnIH0gZnJvbSAnLi4vLi4vY29uZmlnJztcblxuaW1wb3J0IHsgQXBwbGlhbmNlUmVnaXN0cmF0aW9uIH0gZnJvbSAnLi4vY29tbW9uL0FwcGxpYW5jZVJlZ2lzdHJhdGlvbic7XG5pbXBvcnQgeyBBcHBsaWFuY2VTdGF0dXNDb2RlIH0gZnJvbSAnLi4vZW51bXMvQXBwbGlhbmNlU3RhdHVzQ29kZSc7XG5pbXBvcnQgeyBBZ2VudFN0YXR1c0NvZGUgfSBmcm9tICcuLi9lbnVtcy9BZ2VudFN0YXR1c0NvZGUnO1xuaW1wb3J0IHsgQ29tbWFuZFN0YXR1c0NvZGUgfSBmcm9tICcuLi9lbnVtcy9Db21tYW5kU3RhdHVzQ29kZSc7XG5cblxuLyoqXG4gKiBMaXN0IG9mIGFwcGxpYW5jZSBxdWVyaWVzIGZvciBzeXN0ZW0gYWRtaW5pc3RyYXRvciBvbmx5XG4gKiBAUmVxdWVzdEhlYWRlciBYLUFQSS1LRVkgVGhlIGtleSB0byBpZGVudGlmeSB0aGUgYXBwbGljYXRpb24gKGNvbnNvbGUpXG4gKiBAUmVxdWVzdEhlYWRlciBYLUFDQ0VTUy1UT0tFTiBUaGUgdG9rZW4gdG8gaWRlbnRpZnkgdGhlIGxvZ2dlZC1pbiB1c2VyIFxuICovXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgU3lzQXBwbGlhbmNlc1NlcnZpY2Uge1xuXG4gIC8vIFVSTCB0byB3ZWIgYXBpXG4gIHByaXZhdGUgYmFzZVVybCA9ICcvc3lzL2FwcGxpYW5jZXMnO1xuXG4gIC8qKlxuICAgKiBDbGFzcyBjb25zdHJ1Y3RvclxuICAgKi9cbiAgY29uc3RydWN0b3IoQEluamVjdCgnY29uZmlnJykgcHJpdmF0ZSBjb25maWc6IENvcmVDb25maWcsIHByaXZhdGUgcmVzdDogUmVzdFV0aWwpIHtcbiAgICB0aGlzLmJhc2VVcmwgPSB0aGlzLmNvbmZpZy5hcGkgKyB0aGlzLmJhc2VVcmw7XG4gIH1cblxuXG4gIC8qKlxuICAgKiBSZWdpc3RlciBuZXcgYXBwbGlhbmNlIGluIHRoZSBzeXN0ZW1cbiAgICogQFJldHVybjogRW50aXR5UmVzcG9uc2U8QXBwbGlhbmNlPiBUaGUgcmVnaXN0ZXJlZCBhcHBsaWFuY2VcbiAgICovXG4gIHJlZ2lzdGVyQXBwbGlhbmNlKGlkPzogc3RyaW5nLCBib2R5PzogQXBwbGlhbmNlUmVnaXN0cmF0aW9uKSB7XG4gICAgcmV0dXJuIHRoaXMucmVzdC5wb3N0KGAke3RoaXMuYmFzZVVybH0vcmVnaXN0ZXJgLCB0eXBlb2YgYm9keSA9PT0gJ29iamVjdCcgPyBKU09OLnN0cmluZ2lmeShib2R5KSA6IGJvZHkpO1xuICB9XG5cbiAgLyoqXG4gICAqIEdldCBzaW5nbGUgYXBwbGlhbmNlIGJ5IGlkXG4gICAqIEBSZXR1cm46IEVudGl0eVJlc3BvbnNlPEFwcGxpYW5jZT5cbiAgICovXG4gIGdldChpZD86IHN0cmluZykge1xuICAgIHJldHVybiB0aGlzLnJlc3QuZ2V0KGAke3RoaXMuYmFzZVVybH0vJHtpZH1gKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBGaW5kIGxpc3Qgb2YgYXBwbGlhbmNlcyBhbmQgZmlsdGVyXG4gICAqIEBSZXR1cm46IFF1ZXJ5UmVzcG9uc2U8QXBwbGlhbmNlPlxuICAgKi9cbiAgZmluZChhY2NvdW50SWQ/OiBzdHJpbmcsIHNlYXJjaD86IHN0cmluZywgc3RhdHVzPzogQXBwbGlhbmNlU3RhdHVzQ29kZVtdLCBhZ2VudFN0YXR1cz86IEFnZW50U3RhdHVzQ29kZVtdLCBzb3J0Pzogc3RyaW5nLCBwYWdlPzogbnVtYmVyLCBwYWdlU2l6ZT86IG51bWJlcikge1xuICAgIGNvbnN0IHBhcmFtcyA9IG5ldyBBcnJheSgpO1x0XHRcbiAgICBpZiAoYWNjb3VudElkICE9IG51bGwpIHsgcGFyYW1zLnB1c2goYGFjY291bnRJZD0ke2FjY291bnRJZH1gKTsgfVxuICAgIGlmIChzZWFyY2ggIT0gbnVsbCkgeyBwYXJhbXMucHVzaChgc2VhcmNoPSR7c2VhcmNofWApOyB9XG4gICAgaWYgKHN0YXR1cyAhPSBudWxsKSB7IHBhcmFtcy5wdXNoKGBzdGF0dXM9JHtzdGF0dXN9YCk7IH1cbiAgICBpZiAoYWdlbnRTdGF0dXMgIT0gbnVsbCkgeyBwYXJhbXMucHVzaChgYWdlbnRTdGF0dXM9JHthZ2VudFN0YXR1c31gKTsgfVxuICAgIGlmIChzb3J0ICE9IG51bGwpIHsgcGFyYW1zLnB1c2goYHNvcnQ9JHtzb3J0fWApOyB9XG4gICAgaWYgKHBhZ2UgIT0gbnVsbCkgeyBwYXJhbXMucHVzaChgcGFnZT0ke3BhZ2V9YCk7IH1cbiAgICBpZiAocGFnZVNpemUgIT0gbnVsbCkgeyBwYXJhbXMucHVzaChgcGFnZVNpemU9JHtwYWdlU2l6ZX1gKTsgfVxuXG5cdFx0cmV0dXJuIHRoaXMucmVzdC5nZXQoYCR7dGhpcy5iYXNlVXJsfWAsIC4uLnBhcmFtcyk7XG4gIH1cblxuICAvKipcbiAgICogRXhwb3J0IGxpc3Qgb2YgYXBwbGlhbmNlcyBhbmQgZmlsdGVyXG4gICAqIEBSZXR1cm46IFN0cmVhbUNvbnRlbnRcbiAgICovXG4gIGV4cG9ydEZvcm1hdChmb2xkZXJJZD86IHN0cmluZywgc3ViRm9sZGVycz86IGJvb2xlYW4sIHNlYXJjaD86IHN0cmluZywgc3RhdHVzPzogQXBwbGlhbmNlU3RhdHVzQ29kZVtdLCBhZ2VudFN0YXR1cz86IEFnZW50U3RhdHVzQ29kZVtdLCBzb3J0Pzogc3RyaW5nLCBmb3JtYXQ/OiBzdHJpbmcsIGZpZWxkcz86IHN0cmluZ1tdKSB7XG4gICAgY29uc3QgcGFyYW1zID0gbmV3IEFycmF5KCk7XHRcdFxuICAgIGlmIChmb2xkZXJJZCAhPSBudWxsKSB7IHBhcmFtcy5wdXNoKGBmb2xkZXJJZD0ke2ZvbGRlcklkfWApOyB9XG4gICAgaWYgKHN1YkZvbGRlcnMgIT0gbnVsbCkgeyBwYXJhbXMucHVzaChgc3ViRm9sZGVycz0ke3N1YkZvbGRlcnN9YCk7IH1cbiAgICBpZiAoc2VhcmNoICE9IG51bGwpIHsgcGFyYW1zLnB1c2goYHNlYXJjaD0ke3NlYXJjaH1gKTsgfVxuICAgIGlmIChzdGF0dXMgIT0gbnVsbCkgeyBwYXJhbXMucHVzaChgc3RhdHVzPSR7c3RhdHVzfWApOyB9XG4gICAgaWYgKGFnZW50U3RhdHVzICE9IG51bGwpIHsgcGFyYW1zLnB1c2goYGFnZW50U3RhdHVzPSR7YWdlbnRTdGF0dXN9YCk7IH1cbiAgICBpZiAoc29ydCAhPSBudWxsKSB7IHBhcmFtcy5wdXNoKGBzb3J0PSR7c29ydH1gKTsgfVxuICAgIGlmIChmb3JtYXQgIT0gbnVsbCkgeyBwYXJhbXMucHVzaChgZm9ybWF0PSR7Zm9ybWF0fWApOyB9XG4gICAgaWYgKGZpZWxkcyAhPSBudWxsKSB7IHBhcmFtcy5wdXNoKGBmaWVsZHM9JHtmaWVsZHN9YCk7IH1cblxuXHRcdHJldHVybiB0aGlzLnJlc3QuZG93bmxvYWQoYHN5cy1hcHBsaWFuY2VzYCxgJHt0aGlzLmJhc2VVcmx9L2V4cG9ydGAsIC4uLnBhcmFtcyk7XG4gIH1cblxuICAvKipcbiAgICogRGVsZXRlIGFwcGxpYW5jZSBmcm9tIHRoZSBzeXN0ZW1cbiAgICogQFJldHVybjogQWN0aW9uUmVzcG9uc2VcbiAgICovXG4gIGRlbGV0ZShpZD86IHN0cmluZykge1xuICAgIHJldHVybiB0aGlzLnJlc3QuZGVsZXRlKGAke3RoaXMuYmFzZVVybH0vJHtpZH1gKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBSZWJvb3QgYXBwbGlhbmNlIGhvc3RcbiAgICogQFJldHVybjogQWN0aW9uUmVzcG9uc2VcbiAgICovXG4gIHJlYm9vdChpZD86IHN0cmluZykge1xuICAgIHJldHVybiB0aGlzLnJlc3QucG9zdChgJHt0aGlzLmJhc2VVcmx9LyR7aWR9L3JlYm9vdGAsIG51bGwpO1xuICB9XG5cbiAgLyoqXG4gICAqIFJlYnVpbGQgYXBwbGlhbmNlIGNvbmZpZ3VyYXRpb24gYW5kIGRlcGxveSB0aGUgY29uZmlndXJhdGlvbiB0byB0aGUgZGV2aWNlIG1hbmFnZXJcbiAgICogQFJldHVybjogQWN0aW9uUmVzcG9uc2VcbiAgICovXG4gIHJlZGVwbG95KGlkPzogc3RyaW5nKSB7XG4gICAgcmV0dXJuIHRoaXMucmVzdC5wb3N0KGAke3RoaXMuYmFzZVVybH0vJHtpZH0vcmVkZXBsb3lgLCBudWxsKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBDaGFuZ2UgYXBwbGlhbmNlIG1hY2hpbmUgSWQgKGZvciBWSVJUVUFMIGRldmljZSBvbmx5KVxuICAgKiBAUmV0dXJuOiBFbnRpdHlSZXNwb25zZTxBcHBsaWFuY2U+IC0gVXBkYXRlZCBhcHBsaWFuY2VcbiAgICovXG4gIGNoYW5nZU1hY2hpbmVJZChpZD86IHN0cmluZywgbWFjaGluZUlkPzogc3RyaW5nKSB7XG4gICAgcmV0dXJuIHRoaXMucmVzdC5wdXQoYCR7dGhpcy5iYXNlVXJsfS8ke2lkfS9tYWNoaW5lLyR7bWFjaGluZUlkfWAsIG51bGwpO1xuICB9XG5cbiAgLyoqXG4gICAqIENoYW5nZSBhcHBsaWFuY2UgY29uZmlndXJhdGlvblxuICAgKiBAUmV0dXJuOiBFbnRpdHlSZXNwb25zZTxBcHBsaWFuY2U+IC0gVXBkYXRlZCBhcHBsaWFuY2VcbiAgICovXG4gIGNoYW5nZUNvbmZpZ3VyYXRpb24oaWQ/OiBzdHJpbmcsIGNvbmZpZ0lkPzogc3RyaW5nLCB2ZXJzaW9uSWQ/OiBzdHJpbmcpIHtcbiAgICByZXR1cm4gdGhpcy5yZXN0LnB1dChgJHt0aGlzLmJhc2VVcmx9LyR7aWR9L2NvbmZpZy8ke2NvbmZpZ0lkfS8ke3ZlcnNpb25JZH1gLCBudWxsKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBHZXQgYWxsIGFwcGxpYW5jZSBhZ2VudHNcbiAgICogQFJldHVybjogRW50aXRpZXNSZXNwb25zZTxBZ2VudD5cbiAgICovXG4gIGdldEFwcGxpYW5jZUFnZW50cyhpZD86IHN0cmluZykge1xuICAgIHJldHVybiB0aGlzLnJlc3QuZ2V0KGAke3RoaXMuYmFzZVVybH0vJHtpZH0vYWdlbnRzYCk7XG4gIH1cblxuICAvKipcbiAgICogQWRkIGFnZW50IHRvIGFwcGxpYW5jZVxuICAgKiBBZ2VudCBjYW4gYmUgYWRkZWQgdG8gdmlydHVhbCBhcHBsaWFuY2Ugb25seVxuICAgKiBAUmV0dXJuOiBFbnRpdHlSZXNwb25zZTxBZ2VudD5cbiAgICovXG4gIGFkZEFwcGxpYW5jZUFnZW50KGlkPzogc3RyaW5nKSB7XG4gICAgcmV0dXJuIHRoaXMucmVzdC5wb3N0KGAke3RoaXMuYmFzZVVybH0vJHtpZH0vYWdlbnRzYCwgbnVsbCk7XG4gIH1cblxuICAvKipcbiAgICogRGVsZXRlIGFnZW50IGZyb20gdGhlIHN5c3RlbVxuICAgKiBPbmx5IHZpcnR1YWwgZGV2aWNlIGFnZW50IGNhbiBiZSBkZWxldGVkXG4gICAqIEBSZXR1cm46IEFjdGlvblJlc3BvbnNlXG4gICAqL1xuICBkZWxldGVBcHBsaWFuY2VBZ2VudChpZD86IHN0cmluZywgYWdlbnRJZD86IHN0cmluZykge1xuICAgIHJldHVybiB0aGlzLnJlc3QuZGVsZXRlKGAke3RoaXMuYmFzZVVybH0vJHtpZH0vYWdlbnRzLyR7YWdlbnRJZH1gKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBGaW5kIGxpc3Qgb2YgYXBwbGlhbmNlIGNvbW1hbmRzIGFuZCBmaWx0ZXJcbiAgICogQFJldHVybjogRW50aXRpZXNSZXNwb25zZTxBcHBsaWFuY2VDb21tYW5kPiBMaXN0IG9mIGFwcGxpYW5jZSBjb21tYW5kc1xuICAgKi9cbiAgZ2V0Q29tbWFuZHMoYWNjb3VudElkPzogc3RyaW5nLCBhcHBsaWFuY2VJZD86IHN0cmluZywgc3RhdHVzPzogQ29tbWFuZFN0YXR1c0NvZGVbXSkge1xuICAgIGNvbnN0IHBhcmFtcyA9IG5ldyBBcnJheSgpO1x0XHRcbiAgICBpZiAoYWNjb3VudElkICE9IG51bGwpIHsgcGFyYW1zLnB1c2goYGFjY291bnRJZD0ke2FjY291bnRJZH1gKTsgfVxuICAgIGlmIChhcHBsaWFuY2VJZCAhPSBudWxsKSB7IHBhcmFtcy5wdXNoKGBhcHBsaWFuY2VJZD0ke2FwcGxpYW5jZUlkfWApOyB9XG4gICAgaWYgKHN0YXR1cyAhPSBudWxsKSB7IHBhcmFtcy5wdXNoKGBzdGF0dXM9JHtzdGF0dXN9YCk7IH1cblxuXHRcdHJldHVybiB0aGlzLnJlc3QuZ2V0KGAke3RoaXMuYmFzZVVybH0vY29tbWFuZHNgLCAuLi5wYXJhbXMpO1xuICB9XG5cbiAgLyoqXG4gICAqIFVwZGF0ZSBjb21tYW5kIHN0YXR1c1xuICAgKiBAUmV0dXJuOiBBY3Rpb25SZXNwb25zZVxuICAgKi9cbiAgc2V0Q29tbWFuZFN0YXR1cyhjb21tYW5kSWQ/OiBzdHJpbmcsIHN0YXR1cz86IENvbW1hbmRTdGF0dXNDb2RlKSB7XG4gICAgcmV0dXJuIHRoaXMucmVzdC5wdXQoYCR7dGhpcy5iYXNlVXJsfS9jb21tYW5kcy8ke2NvbW1hbmRJZH0vJHtzdGF0dXN9YCwgbnVsbCk7XG4gIH1cblxuICAvKipcbiAgICogRGVsZXRlIGNvbW1hbmRcbiAgICogQFJldHVybjogQWN0aW9uUmVzcG9uc2VcbiAgICovXG4gIGRlbGV0ZUNvbW1hbmQoaWQ/OiBzdHJpbmcsIGNvbW1hbmRJZD86IHN0cmluZykge1xuICAgIHJldHVybiB0aGlzLnJlc3QuZGVsZXRlKGAke3RoaXMuYmFzZVVybH0vJHtpZH0vY29tbWFuZHMvJHtjb21tYW5kSWR9YCk7XG4gIH1cblxuICAvKipcbiAgICogRGVsZXRlIGFsbCBhcHBsaWFuY2UgY29tbWFuZHNcbiAgICogQFJldHVybjogQWN0aW9uUmVzcG9uc2VcbiAgICovXG4gIGRlbGV0ZUFsbENvbW1hbmRzKGlkPzogc3RyaW5nLCBhZ2VudElkPzogc3RyaW5nKSB7XG4gICAgcmV0dXJuIHRoaXMucmVzdC5kZWxldGUoYCR7dGhpcy5iYXNlVXJsfS8ke2lkfS9jb21tYW5kc2ApO1xuICB9XG5cbiAgLyoqXG4gICAqIEdldCBhcHBsaWFuY2Ugc3RhdHVzIGhpc3Rvcnkgb3ZlciB0aW1lXG4gICAqIEBSZXR1cm46ICBFbnRpdHlSZXNwb25zZTxBcHBsaWFuY2VTdGF0dXNUaW1lU2VyaWVzPlxuICAgKi9cbiAgZ2V0U3RhdHVzT3ZlclRpbWUoaWQ/OiBzdHJpbmcsIGZyb20/OiBudW1iZXIsIHRvPzogbnVtYmVyKSB7XG4gICAgY29uc3QgcGFyYW1zID0gbmV3IEFycmF5KCk7XHRcdFxuICAgIGlmIChmcm9tICE9IG51bGwpIHsgcGFyYW1zLnB1c2goYGZyb209JHtmcm9tfWApOyB9XG4gICAgaWYgKHRvICE9IG51bGwpIHsgcGFyYW1zLnB1c2goYHRvPSR7dG99YCk7IH1cblxuXHRcdHJldHVybiB0aGlzLnJlc3QuZ2V0KGAke3RoaXMuYmFzZVVybH0vJHtpZH0vc3RhdHVzL292ZXJ0aW1lYCwgLi4ucGFyYW1zKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBHZXQgYXBwbGlhbmNlIEtQSSAoS2V5IFBlcmZvcm1hbmNlIEluZGljYXRvcnMpIGhpc3Rvcnkgb3ZlciB0aW1lIChDUFUsIFJBTS4gTE9BRClcbiAgICogQFJldHVybjogIEVudGl0eVJlc3BvbnNlPEFwcGxpYW5jZUtQSXNUaW1lU2VyaWVzPlxuICAgKi9cbiAgZ2V0S3BpT3ZlclRpbWUoaWQ/OiBzdHJpbmcsIGZyb20/OiBudW1iZXIsIHRvPzogbnVtYmVyKSB7XG4gICAgY29uc3QgcGFyYW1zID0gbmV3IEFycmF5KCk7XHRcdFxuICAgIGlmIChmcm9tICE9IG51bGwpIHsgcGFyYW1zLnB1c2goYGZyb209JHtmcm9tfWApOyB9XG4gICAgaWYgKHRvICE9IG51bGwpIHsgcGFyYW1zLnB1c2goYHRvPSR7dG99YCk7IH1cblxuXHRcdHJldHVybiB0aGlzLnJlc3QuZ2V0KGAke3RoaXMuYmFzZVVybH0vJHtpZH0va3BpL292ZXJ0aW1lYCwgLi4ucGFyYW1zKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBBZ2dyZWdhdGUgYXBwbGlhbmNlcyBjb3VudCBkaXN0cmlidXRpb24gYnkgc3RhdHVzXG4gICAqIEBSZXR1cm46ICBFbnRpdHlSZXNwb25zZTxEaXN0cmlidXRpb25PZkxvbmc+XG4gICAqL1xuICBnZXRBcHBsaWFuY2VzQ291bnRCeVN0YXR1cyhhY2NvdW50SWQ/OiBzdHJpbmcsIGZvbGRlcklkPzogc3RyaW5nLCBzdWJGb2xkZXJzPzogYm9vbGVhbikge1xuICAgIGNvbnN0IHBhcmFtcyA9IG5ldyBBcnJheSgpO1x0XHRcbiAgICBpZiAoYWNjb3VudElkICE9IG51bGwpIHsgcGFyYW1zLnB1c2goYGFjY291bnRJZD0ke2FjY291bnRJZH1gKTsgfVxuICAgIGlmIChmb2xkZXJJZCAhPSBudWxsKSB7IHBhcmFtcy5wdXNoKGBmb2xkZXJJZD0ke2ZvbGRlcklkfWApOyB9XG4gICAgaWYgKHN1YkZvbGRlcnMgIT0gbnVsbCkgeyBwYXJhbXMucHVzaChgc3ViRm9sZGVycz0ke3N1YkZvbGRlcnN9YCk7IH1cblxuXHRcdHJldHVybiB0aGlzLnJlc3QuZ2V0KGAke3RoaXMuYmFzZVVybH0vY291bnQvYnktc3RhdHVzYCwgLi4ucGFyYW1zKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBTZW5kIGdldCBjYXBhYmlsaXRpZXMgY29tbWFuZCB0byB0aGUgYXBwbGlhbmNlIGFuZCB3YWl0IGZvciByZXNwb25zZSB1cCB0byA2MCBzZWNvbmRzXG4gICAqIEBSZXR1cm46ICBFbnRpdHlSZXNwb25zZTxBcHBsaWFuY2U+XG4gICAqL1xuICBnZXRDYXBhYmlsaXRpZXMoaWQ/OiBzdHJpbmcpIHtcbiAgICByZXR1cm4gdGhpcy5yZXN0LnBvc3QoYCR7dGhpcy5iYXNlVXJsfS8ke2lkfS9jYXBhYmlsaXRpZXNgLCBudWxsKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBTZW5kIGdldCBsb2dzIGNvbW1hbmQgdG8gdGhlIGFwcGxpYW5jZVxuICAgKiBAUmV0dXJuOiAgQWN0aW9uUmVzcG9uc2VcbiAgICovXG4gIGdldExvZ3MoaWQ/OiBzdHJpbmcsIGNvbXBvbmVudElkPzogc3RyaW5nW10sIGZyb20/OiBudW1iZXIsIHRvPzogbnVtYmVyKSB7XG4gICAgY29uc3QgcGFyYW1zID0gbmV3IEFycmF5KCk7XHRcdFxuICAgIGlmIChjb21wb25lbnRJZCAhPSBudWxsKSB7IHBhcmFtcy5wdXNoKGBjb21wb25lbnRJZD0ke2NvbXBvbmVudElkfWApOyB9XG4gICAgaWYgKGZyb20gIT0gbnVsbCkgeyBwYXJhbXMucHVzaChgZnJvbT0ke2Zyb219YCk7IH1cbiAgICBpZiAodG8gIT0gbnVsbCkgeyBwYXJhbXMucHVzaChgdG89JHt0b31gKTsgfVxuXG5cdFx0cmV0dXJuIHRoaXMucmVzdC5wb3N0KGAke3RoaXMuYmFzZVVybH0vJHtpZH0vbG9nc2AsIG51bGwsIC4uLnBhcmFtcyk7XG4gIH1cblxuICAvKipcbiAgICogVXBncmFkZSBiYXRjaCBvZiBhcHBsaWFuY2VzXG4gICAqIEBSZXR1cm46ICBFbnRpdGllc1Jlc3BvbnNlPFVwZGF0ZVN0YXR1cz5cbiAgICovXG4gIGJhdGNoVXBncmFkZShjb25maWdJZD86IHN0cmluZywgdmVyc2lvbklkPzogc3RyaW5nLCBpZD86IHN0cmluZ1tdKSB7XG4gICAgY29uc3QgcGFyYW1zID0gbmV3IEFycmF5KCk7XHRcdFxuICAgIGlmIChpZCAhPSBudWxsKSB7IHBhcmFtcy5wdXNoKGBpZD0ke2lkfWApOyB9XG5cblx0XHRyZXR1cm4gdGhpcy5yZXN0LnBvc3QoYCR7dGhpcy5iYXNlVXJsfS9jb25maWcvJHtjb25maWdJZH0vJHt2ZXJzaW9uSWR9L2JhdGNoLXVwZ3JhZGVgLCBudWxsLCAuLi5wYXJhbXMpO1xuICB9XG5cbiAgLyoqXG4gICAqIEZpbmQgbGlzdCBvZiBkZXZpY2UgdXBkYXRlIHN0YXR1cyBlbnRyaWVzIGJ5IGZpbHRlclxuICAgKiBAUmV0dXJuOiAgUXVlcnlSZXNwb25zZTxVcGRhdGVTdGF0dXM+XG4gICAqL1xuICBmaW5kVXBncmFkZVN0YXR1cyhhY2NvdW50SWQ/OiBzdHJpbmcsIGFwcGxpYW5jZUlkPzogc3RyaW5nLCB1c2VySWQ/OiBzdHJpbmcsIGNvbW1hbmRJZD86IHN0cmluZywgYmF0Y2hJZD86IHN0cmluZywgZnJvbT86IG51bWJlciwgdG8/OiBudW1iZXIsIHNvcnQ/OiBzdHJpbmcsIHBhZ2U/OiBudW1iZXIsIHBhZ2VTaXplPzogbnVtYmVyKSB7XG4gICAgY29uc3QgcGFyYW1zID0gbmV3IEFycmF5KCk7XHRcdFxuICAgIGlmIChhY2NvdW50SWQgIT0gbnVsbCkgeyBwYXJhbXMucHVzaChgYWNjb3VudElkPSR7YWNjb3VudElkfWApOyB9XG4gICAgaWYgKGFwcGxpYW5jZUlkICE9IG51bGwpIHsgcGFyYW1zLnB1c2goYGFwcGxpYW5jZUlkPSR7YXBwbGlhbmNlSWR9YCk7IH1cbiAgICBpZiAodXNlcklkICE9IG51bGwpIHsgcGFyYW1zLnB1c2goYHVzZXJJZD0ke3VzZXJJZH1gKTsgfVxuICAgIGlmIChjb21tYW5kSWQgIT0gbnVsbCkgeyBwYXJhbXMucHVzaChgY29tbWFuZElkPSR7Y29tbWFuZElkfWApOyB9XG4gICAgaWYgKGJhdGNoSWQgIT0gbnVsbCkgeyBwYXJhbXMucHVzaChgYmF0Y2hJZD0ke2JhdGNoSWR9YCk7IH1cbiAgICBpZiAoZnJvbSAhPSBudWxsKSB7IHBhcmFtcy5wdXNoKGBmcm9tPSR7ZnJvbX1gKTsgfVxuICAgIGlmICh0byAhPSBudWxsKSB7IHBhcmFtcy5wdXNoKGB0bz0ke3RvfWApOyB9XG4gICAgaWYgKHNvcnQgIT0gbnVsbCkgeyBwYXJhbXMucHVzaChgc29ydD0ke3NvcnR9YCk7IH1cbiAgICBpZiAocGFnZSAhPSBudWxsKSB7IHBhcmFtcy5wdXNoKGBwYWdlPSR7cGFnZX1gKTsgfVxuICAgIGlmIChwYWdlU2l6ZSAhPSBudWxsKSB7IHBhcmFtcy5wdXNoKGBwYWdlU2l6ZT0ke3BhZ2VTaXplfWApOyB9XG5cblx0XHRyZXR1cm4gdGhpcy5yZXN0LmdldChgJHt0aGlzLmJhc2VVcmx9L2JhdGNoLXVwZ3JhZGVgLCAuLi5wYXJhbXMpO1xuICB9XG5cbiAgLyoqXG4gICAqIEZpbmQgbGlzdCBvZiBkZXZpY2VzIGNvbmZpZ3VyYXRpb25zIChjb25maWd1cmVkIHZzLiBhY3R1YWwpXG4gICAqIEBSZXR1cm46ICBFbnRpdHlSZXNwb25zZTxBcHBsaWFuY2VDb25maWdSZXBvcnQ+XG4gICAqL1xuICBmaW5kRGV2aWNlc0NvbmZpZ3VyYXRpb25zKGFjY291bnQ/OiBzdHJpbmcsIGZvcm1hdD86IHN0cmluZykge1xuICAgIGNvbnN0IHBhcmFtcyA9IG5ldyBBcnJheSgpO1x0XHRcbiAgICBpZiAoYWNjb3VudCAhPSBudWxsKSB7IHBhcmFtcy5wdXNoKGBhY2NvdW50PSR7YWNjb3VudH1gKTsgfVxuICAgIGlmIChmb3JtYXQgIT0gbnVsbCkgeyBwYXJhbXMucHVzaChgZm9ybWF0PSR7Zm9ybWF0fWApOyB9XG5cblx0XHRyZXR1cm4gdGhpcy5yZXN0LmdldChgJHt0aGlzLmJhc2VVcmx9L2FjdHVhbC1jb25maWdgLCAuLi5wYXJhbXMpO1xuICB9XG5cbiAgLyoqXG4gICAqIEV4cG9ydCBsaXN0IG9mIGRldmljZXMgY29uZmlndXJhdGlvbnMgKGNvbmZpZ3VyZWQgdnMuIGFjdHVhbClcbiAgICogQFJldHVybjogIFN0cmVhbWluZ091dHB1dCBvZiB0aGUgcmVwb3J0IGZpbGVcbiAgICovXG4gIGV4cG9ydERldmljZXNDb25maWd1cmF0aW9ucyhhY2NvdW50Pzogc3RyaW5nLCBmb3JtYXQ/OiBzdHJpbmcpIHtcbiAgICBjb25zdCBwYXJhbXMgPSBuZXcgQXJyYXkoKTtcdFx0XG4gICAgaWYgKGFjY291bnQgIT0gbnVsbCkgeyBwYXJhbXMucHVzaChgYWNjb3VudD0ke2FjY291bnR9YCk7IH1cbiAgICBpZiAoZm9ybWF0ICE9IG51bGwpIHsgcGFyYW1zLnB1c2goYGZvcm1hdD0ke2Zvcm1hdH1gKTsgfVxuXG5cdFx0cmV0dXJuIHRoaXMucmVzdC5kb3dubG9hZChgc3lzLWFwcGxpYW5jZXNgLGAke3RoaXMuYmFzZVVybH0vYWN0dWFsLWNvbmZpZy9leHBvcnRgLCAuLi5wYXJhbXMpO1xuICB9XG5cbn1cbiJdfQ==