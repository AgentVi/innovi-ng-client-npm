import { __read, __spread } from "tslib";
import { Injectable, Inject } from '@angular/core';
import { RestUtil } from '../../utils/rest-util';
import { CoreConfig } from '../../config';
import * as i0 from "@angular/core";
import * as i1 from "../../utils/rest-util";
import * as i2 from "../../config";
/**
 * List of appliance related actions
 * @RequestHeader X-API-KEY The key to identify the application (portal)
 * @RequestHeader X-ACCESS-TOKEN The token to identify the logged-in user
 */
var AppliancesService = /** @class */ (function () {
    /**
     * Class constructor
     */
    function AppliancesService(config, rest) {
        this.config = config;
        this.rest = rest;
        // URL to web api
        this.baseUrl = '/appliances';
        this.baseUrl = this.config.api + this.baseUrl;
    }
    /**
     * Find list of appliances and filter
     * @Return: QueryResponse<Appliance>
     */
    AppliancesService.prototype.find = function (folderId, subFolders, search, status, sort, page, pageSize) {
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
    AppliancesService.prototype.exportFormat = function (folderId, subFolders, search, status, sort, format, fields) {
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
        if (sort != null) {
            params.push("sort=" + sort);
        }
        if (format != null) {
            params.push("format=" + format);
        }
        if (fields != null) {
            params.push("fields=" + fields);
        }
        return (_a = this.rest).download.apply(_a, __spread(["appliances", this.baseUrl + "/export"], params));
    };
    /**
     * Get single appliance by id
     * @Return: EntityResponse<Appliance>
     */
    AppliancesService.prototype.get = function (id) {
        return this.rest.get(this.baseUrl + "/" + id);
    };
    /**
     * Get all sensors assigned to the appliance (getSensors)
     * @Return: QueryResponse<Sensor>
     */
    AppliancesService.prototype.findApplianceSensors = function (id, search, type, status, stream, sort, page, pageSize, format, fields) {
        var _a;
        var params = new Array();
        if (search != null) {
            params.push("search=" + search);
        }
        if (type != null) {
            params.push("type=" + type);
        }
        if (status != null) {
            params.push("status=" + status);
        }
        if (stream != null) {
            params.push("stream=" + stream);
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
        if (format != null) {
            params.push("format=" + format);
        }
        if (fields != null) {
            params.push("fields=" + fields);
        }
        return (_a = this.rest).get.apply(_a, __spread([this.baseUrl + "/" + id + "/sensors"], params));
    };
    /**
     * Get all appliance agents
     * @Return: EntitiesResponse<Agent>
     */
    AppliancesService.prototype.getApplianceAgents = function (id) {
        return this.rest.get(this.baseUrl + "/" + id + "/agents");
    };
    /**
     * Add new sensor and assigned it to a specific appliance
     * The sensor will be created with status PENDING, the status will be changed when the agent will establish connection to the proxy
     * @Return: EntityResponse<Sensor> The updated sensor
     */
    AppliancesService.prototype.addApplianceSensor = function (id, body) {
        return this.rest.post(this.baseUrl + "/" + id + "/sensors", typeof body === 'object' ? JSON.stringify(body) : body);
    };
    /**
     * Register new appliance in the system
     * @Return: EntityResponse<Appliance> The registered appliance
     */
    AppliancesService.prototype.registerAppliance = function (id, body) {
        return this.rest.post(this.baseUrl + "/register", typeof body === 'object' ? JSON.stringify(body) : body);
    };
    /**
     * Get appliance runtime configuration components
     * @Return: EntitiesResponse<ComponentConfiguration>
     */
    AppliancesService.prototype.getRuntimeConfiguration = function (id) {
        return this.rest.get(this.baseUrl + "/" + id + "/components");
    };
    /**
     * Get list of appliance configurations for the specific product
     * @Return: EntitiesResponse<ApplianceConfiguration>
     */
    AppliancesService.prototype.getConfigurations = function (target) {
        return this.rest.get(this.baseUrl + "/configurations/" + target);
    };
    /**
     * Get appliance configuration for the specific edge model
     * @Return: EntityResponse<ApplianceConfiguration>
     */
    AppliancesService.prototype.getConfiguration = function (model) {
        return this.rest.get(this.baseUrl + "/configuration/" + model);
    };
    /**
     * Get network channels using ONVIF discovery protocol
     * @Return: EntitiesResponse<ComponentConfiguration>
     */
    AppliancesService.prototype.getOnvifDiscoveryList = function (id) {
        return this.rest.get(this.baseUrl + "/" + id + "/discovery");
    };
    /**
     * Change appliance name
     * @Return: EntityResponse<Appliance>
     */
    AppliancesService.prototype.changeName = function (id, name) {
        return this.rest.put(this.baseUrl + "/" + id + "/name/" + name, null);
    };
    /**
     * Update some appliance attributes (name, folder, configuration, integration)
     * @Return: EntityResponse<Appliance>
     */
    AppliancesService.prototype.update = function (id, body) {
        return this.rest.put(this.baseUrl + "/" + id, typeof body === 'object' ? JSON.stringify(body) : body);
    };
    /**
     * Change appliance folder
     * @Return: EntityResponse<Appliance>
     */
    AppliancesService.prototype.changeFolder = function (id, folderId) {
        return this.rest.put(this.baseUrl + "/" + id + "/folder/" + folderId, null);
    };
    /**
     * Change appliance machine Id (for VIRTUAL device only)
     * @Return: EntityResponse<Appliance> - Updated appliance
     */
    AppliancesService.prototype.changeMachineId = function (id, machineId) {
        return this.rest.put(this.baseUrl + "/" + id + "/machine/" + machineId, null);
    };
    /**
     * Change appliance configuration
     * @Return: EntityResponse<Appliance> - Updated appliance
     */
    AppliancesService.prototype.changeConfiguration = function (id, configId, versionId) {
        return this.rest.put(this.baseUrl + "/" + id + "/config/" + configId + "/" + versionId, null);
    };
    /**
     * Send get capabilities command to the appliance and wait for response up to 60 seconds
     * @Return:  EntityResponse<Appliance>
     */
    AppliancesService.prototype.getCapabilities = function (id) {
        return this.rest.post(this.baseUrl + "/" + id + "/capabilities", null);
    };
    /**
     * Send reset credentials command to the appliance (reset to the factory default password)
     * @Return:  ActionResponse
     */
    AppliancesService.prototype.resetPassword = function (id) {
        return this.rest.post(this.baseUrl + "/" + id + "/reset-password", null);
    };
    /**
     * Reboot appliance host
     * @Return: ActionResponse
     */
    AppliancesService.prototype.reboot = function (id) {
        return this.rest.post(this.baseUrl + "/" + id + "/reboot", null);
    };
    /**
     * Get container logs appliance host
     * @Return: ActionResponse
     */
    AppliancesService.prototype.getLogs = function (id, from, to, component) {
        var _a;
        var params = new Array();
        if (from != null) {
            params.push("from=" + from);
        }
        if (to != null) {
            params.push("to=" + to);
        }
        if (component != null) {
            params.push("component=" + component);
        }
        return (_a = this.rest).post.apply(_a, __spread([this.baseUrl + "/" + id + "/logs", null], params));
    };
    /**
     * Delete appliance from the system and detach all it's related sensors
     * If the appliance has connected cameras, they will all be converted to unregistered - meaning they are not attached to any device and their status is SUSPENDED
     * Unregistered cameras keeps all their settings and rules and they can be assigned later to another device
     * @Return: ActionResponse
     */
    AppliancesService.prototype.delete = function (id) {
        return this.rest.delete(this.baseUrl + "/" + id);
    };
    /**
     * Delete appliance from the system including all it's related sensors and sensor data (rules, presets, analysis ...)
     * @Return: ActionResponse
     */
    AppliancesService.prototype.purge = function (id) {
        return this.rest.delete(this.baseUrl + "/purge/" + id);
    };
    /**
     * Find list of appliance commands and filter
     * @Return: EntitiesResponse<ApplianceCommand> List of appliance commands
     */
    AppliancesService.prototype.getCommands = function (id, status, sort, page, pageSize) {
        var _a;
        var params = new Array();
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
        return (_a = this.rest).get.apply(_a, __spread([this.baseUrl + "/" + id + "/commands"], params));
    };
    /**
     * Delete command
     * @Return: ActionResponse
     */
    AppliancesService.prototype.deleteCommand = function (commandId) {
        return this.rest.delete(this.baseUrl + "/commands/" + commandId);
    };
    /**
     * Get appliance status history over time
     * @Return:  EntityResponse<ApplianceStatusTimeSeries>
     */
    AppliancesService.prototype.getStatusOverTime = function (id, from, to) {
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
    AppliancesService.prototype.getKpiOverTime = function (id, from, to) {
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
    AppliancesService.prototype.getAppliancesCountByStatus = function (folderId, subFolders) {
        var _a;
        var params = new Array();
        if (folderId != null) {
            params.push("folderId=" + folderId);
        }
        if (subFolders != null) {
            params.push("subFolders=" + subFolders);
        }
        return (_a = this.rest).get.apply(_a, __spread([this.baseUrl + "/count/by-status"], params));
    };
    /** @nocollapse */ AppliancesService.ɵfac = function AppliancesService_Factory(t) { return new (t || AppliancesService)(i0.ɵɵinject('config'), i0.ɵɵinject(i1.RestUtil)); };
    /** @nocollapse */ AppliancesService.ɵprov = i0.ɵɵdefineInjectable({ token: AppliancesService, factory: AppliancesService.ɵfac });
    return AppliancesService;
}());
export { AppliancesService };
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(AppliancesService, [{
        type: Injectable
    }], function () { return [{ type: i2.CoreConfig, decorators: [{
                type: Inject,
                args: ['config']
            }] }, { type: i1.RestUtil }]; }, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwbGlhbmNlc1NlcnZpY2UuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AYWdlbnR2aS9uZy1jb3JlLWxpYi8iLCJzb3VyY2VzIjpbImxpYi9zZXJ2aWNlcy9hcHBsaWFuY2VzU2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDbkQsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLHVCQUF1QixDQUFDO0FBQ2pELE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxjQUFjLENBQUM7Ozs7QUFhMUM7Ozs7R0FJRztBQUNIO0lBTUU7O09BRUc7SUFDSCwyQkFBc0MsTUFBa0IsRUFBVSxJQUFjO1FBQTFDLFdBQU0sR0FBTixNQUFNLENBQVk7UUFBVSxTQUFJLEdBQUosSUFBSSxDQUFVO1FBTmhGLGlCQUFpQjtRQUNULFlBQU8sR0FBRyxhQUFhLENBQUM7UUFNOUIsSUFBSSxDQUFDLE9BQU8sR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDLEdBQUcsR0FBRyxJQUFJLENBQUMsT0FBTyxDQUFDO0lBQ2hELENBQUM7SUFHRDs7O09BR0c7SUFDSCxnQ0FBSSxHQUFKLFVBQUssUUFBaUIsRUFBRSxVQUFvQixFQUFFLE1BQWUsRUFBRSxNQUE4QixFQUFFLElBQWEsRUFBRSxJQUFhLEVBQUUsUUFBaUI7O1FBQzVJLElBQU0sTUFBTSxHQUFHLElBQUksS0FBSyxFQUFFLENBQUM7UUFDM0IsSUFBSSxRQUFRLElBQUksSUFBSSxFQUFFO1lBQUUsTUFBTSxDQUFDLElBQUksQ0FBQyxjQUFZLFFBQVUsQ0FBQyxDQUFDO1NBQUU7UUFDOUQsSUFBSSxVQUFVLElBQUksSUFBSSxFQUFFO1lBQUUsTUFBTSxDQUFDLElBQUksQ0FBQyxnQkFBYyxVQUFZLENBQUMsQ0FBQztTQUFFO1FBQ3BFLElBQUksTUFBTSxJQUFJLElBQUksRUFBRTtZQUFFLE1BQU0sQ0FBQyxJQUFJLENBQUMsWUFBVSxNQUFR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QUFJLEVBQUU7WUFBRSxNQUFNLENBQUMsSUFBSSxDQUFDLGdCQUFjLFVBQVksQ0FBQyxDQUFDO1NBQUU7UUFFdEUsT0FBTyxDQUFBLEtBQUEsSUFBSSxDQUFDLElBQUksQ0FBQSxDQUFDLEdBQUcscUJBQUksSUFBSSxDQUFDLE9BQU8scUJBQWtCLEdBQUssTUFBTSxHQUFFO0lBQ25FLENBQUM7eUdBMVJVLGlCQUFpQixjQVFSLFFBQVE7Z0ZBUmpCLGlCQUFpQixXQUFqQixpQkFBaUI7NEJBckI5QjtDQWlUQyxBQTdSRCxJQTZSQztTQTVSWSxpQkFBaUI7a0RBQWpCLGlCQUFpQjtjQUQ3QixVQUFVOztzQkFTSSxNQUFNO3VCQUFDLFFBQVEiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlLCBJbmplY3QgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFJlc3RVdGlsIH0gZnJvbSAnLi4vLi4vdXRpbHMvcmVzdC11dGlsJztcbmltcG9ydCB7IENvcmVDb25maWcgfSBmcm9tICcuLi8uLi9jb25maWcnO1xuXG5pbXBvcnQgeyBBcHBsaWFuY2VTdGF0dXNDb2RlIH0gZnJvbSAnLi4vZW51bXMvQXBwbGlhbmNlU3RhdHVzQ29kZSc7XG5pbXBvcnQgeyBTZW5zb3JTdGF0dXNDb2RlIH0gZnJvbSAnLi4vZW51bXMvU2Vuc29yU3RhdHVzQ29kZSc7XG5pbXBvcnQgeyBQcm9kdWN0VHlwZUNvZGUgfSBmcm9tICcuLi9lbnVtcy9Qcm9kdWN0VHlwZUNvZGUnO1xuaW1wb3J0IHsgU2Vuc29yVHlwZUNvZGUgfSBmcm9tICcuLi9lbnVtcy9TZW5zb3JUeXBlQ29kZSc7XG5pbXBvcnQgeyBTdHJlYW1UeXBlQ29kZSB9IGZyb20gJy4uL2VudW1zL1N0cmVhbVR5cGVDb2RlJztcbmltcG9ydCB7IFNlbnNvciB9IGZyb20gJy4uL2VudGl0aWVzL1NlbnNvcic7XG5pbXBvcnQgeyBBcHBsaWFuY2VSZWdpc3RyYXRpb24gfSBmcm9tICcuLi9jb21tb24vQXBwbGlhbmNlUmVnaXN0cmF0aW9uJztcbmltcG9ydCB7IEFwcGxpYW5jZSB9IGZyb20gJy4uL2VudGl0aWVzL0FwcGxpYW5jZSc7XG5pbXBvcnQgeyBDb21tYW5kU3RhdHVzQ29kZSB9IGZyb20gJy4uL2VudW1zL0NvbW1hbmRTdGF0dXNDb2RlJztcblxuXG4vKipcbiAqIExpc3Qgb2YgYXBwbGlhbmNlIHJlbGF0ZWQgYWN0aW9uc1xuICogQFJlcXVlc3RIZWFkZXIgWC1BUEktS0VZIFRoZSBrZXkgdG8gaWRlbnRpZnkgdGhlIGFwcGxpY2F0aW9uIChwb3J0YWwpXG4gKiBAUmVxdWVzdEhlYWRlciBYLUFDQ0VTUy1UT0tFTiBUaGUgdG9rZW4gdG8gaWRlbnRpZnkgdGhlIGxvZ2dlZC1pbiB1c2VyIFxuICovXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgQXBwbGlhbmNlc1NlcnZpY2Uge1xuXG4gIC8vIFVSTCB0byB3ZWIgYXBpXG4gIHByaXZhdGUgYmFzZVVybCA9ICcvYXBwbGlhbmNlcyc7XG5cbiAgLyoqXG4gICAqIENsYXNzIGNvbnN0cnVjdG9yXG4gICAqL1xuICBjb25zdHJ1Y3RvcihASW5qZWN0KCdjb25maWcnKSBwcml2YXRlIGNvbmZpZzogQ29yZUNvbmZpZywgcHJpdmF0ZSByZXN0OiBSZXN0VXRpbCkge1xuICAgIHRoaXMuYmFzZVVybCA9IHRoaXMuY29uZmlnLmFwaSArIHRoaXMuYmFzZVVybDtcbiAgfVxuXG5cbiAgLyoqXG4gICAqIEZpbmQgbGlzdCBvZiBhcHBsaWFuY2VzIGFuZCBmaWx0ZXJcbiAgICogQFJldHVybjogUXVlcnlSZXNwb25zZTxBcHBsaWFuY2U+XG4gICAqL1xuICBmaW5kKGZvbGRlcklkPzogc3RyaW5nLCBzdWJGb2xkZXJzPzogYm9vbGVhbiwgc2VhcmNoPzogc3RyaW5nLCBzdGF0dXM/OiBBcHBsaWFuY2VTdGF0dXNDb2RlW10sIHNvcnQ/OiBzdHJpbmcsIHBhZ2U/OiBudW1iZXIsIHBhZ2VTaXplPzogbnVtYmVyKSB7XG4gICAgY29uc3QgcGFyYW1zID0gbmV3IEFycmF5KCk7XHRcdFxuICAgIGlmIChmb2xkZXJJZCAhPSBudWxsKSB7IHBhcmFtcy5wdXNoKGBmb2xkZXJJZD0ke2ZvbGRlcklkfWApOyB9XG4gICAgaWYgKHN1YkZvbGRlcnMgIT0gbnVsbCkgeyBwYXJhbXMucHVzaChgc3ViRm9sZGVycz0ke3N1YkZvbGRlcnN9YCk7IH1cbiAgICBpZiAoc2VhcmNoICE9IG51bGwpIHsgcGFyYW1zLnB1c2goYHNlYXJjaD0ke3NlYXJjaH1gKTsgfVxuICAgIGlmIChzdGF0dXMgIT0gbnVsbCkgeyBwYXJhbXMucHVzaChgc3RhdHVzPSR7c3RhdHVzfWApOyB9XG4gICAgaWYgKHNvcnQgIT0gbnVsbCkgeyBwYXJhbXMucHVzaChgc29ydD0ke3NvcnR9YCk7IH1cbiAgICBpZiAocGFnZSAhPSBudWxsKSB7IHBhcmFtcy5wdXNoKGBwYWdlPSR7cGFnZX1gKTsgfVxuICAgIGlmIChwYWdlU2l6ZSAhPSBudWxsKSB7IHBhcmFtcy5wdXNoKGBwYWdlU2l6ZT0ke3BhZ2VTaXplfWApOyB9XG5cblx0XHRyZXR1cm4gdGhpcy5yZXN0LmdldChgJHt0aGlzLmJhc2VVcmx9YCwgLi4ucGFyYW1zKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBFeHBvcnQgbGlzdCBvZiBhcHBsaWFuY2VzIGFuZCBmaWx0ZXJcbiAgICogQFJldHVybjogU3RyZWFtQ29udGVudFxuICAgKi9cbiAgZXhwb3J0Rm9ybWF0KGZvbGRlcklkPzogc3RyaW5nLCBzdWJGb2xkZXJzPzogYm9vbGVhbiwgc2VhcmNoPzogc3RyaW5nLCBzdGF0dXM/OiBBcHBsaWFuY2VTdGF0dXNDb2RlW10sIHNvcnQ/OiBzdHJpbmcsIGZvcm1hdD86IHN0cmluZywgZmllbGRzPzogc3RyaW5nW10pIHtcbiAgICBjb25zdCBwYXJhbXMgPSBuZXcgQXJyYXkoKTtcdFx0XG4gICAgaWYgKGZvbGRlcklkICE9IG51bGwpIHsgcGFyYW1zLnB1c2goYGZvbGRlcklkPSR7Zm9sZGVySWR9YCk7IH1cbiAgICBpZiAoc3ViRm9sZGVycyAhPSBudWxsKSB7IHBhcmFtcy5wdXNoKGBzdWJGb2xkZXJzPSR7c3ViRm9sZGVyc31gKTsgfVxuICAgIGlmIChzZWFyY2ggIT0gbnVsbCkgeyBwYXJhbXMucHVzaChgc2VhcmNoPSR7c2VhcmNofWApOyB9XG4gICAgaWYgKHN0YXR1cyAhPSBudWxsKSB7IHBhcmFtcy5wdXNoKGBzdGF0dXM9JHtzdGF0dXN9YCk7IH1cbiAgICBpZiAoc29ydCAhPSBudWxsKSB7IHBhcmFtcy5wdXNoKGBzb3J0PSR7c29ydH1gKTsgfVxuICAgIGlmIChmb3JtYXQgIT0gbnVsbCkgeyBwYXJhbXMucHVzaChgZm9ybWF0PSR7Zm9ybWF0fWApOyB9XG4gICAgaWYgKGZpZWxkcyAhPSBudWxsKSB7IHBhcmFtcy5wdXNoKGBmaWVsZHM9JHtmaWVsZHN9YCk7IH1cblxuXHRcdHJldHVybiB0aGlzLnJlc3QuZG93bmxvYWQoYGFwcGxpYW5jZXNgLGAke3RoaXMuYmFzZVVybH0vZXhwb3J0YCwgLi4ucGFyYW1zKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBHZXQgc2luZ2xlIGFwcGxpYW5jZSBieSBpZFxuICAgKiBAUmV0dXJuOiBFbnRpdHlSZXNwb25zZTxBcHBsaWFuY2U+XG4gICAqL1xuICBnZXQoaWQ/OiBzdHJpbmcpIHtcbiAgICByZXR1cm4gdGhpcy5yZXN0LmdldChgJHt0aGlzLmJhc2VVcmx9LyR7aWR9YCk7XG4gIH1cblxuICAvKipcbiAgICogR2V0IGFsbCBzZW5zb3JzIGFzc2lnbmVkIHRvIHRoZSBhcHBsaWFuY2UgKGdldFNlbnNvcnMpXG4gICAqIEBSZXR1cm46IFF1ZXJ5UmVzcG9uc2U8U2Vuc29yPlxuICAgKi9cbiAgZmluZEFwcGxpYW5jZVNlbnNvcnMoaWQ/OiBzdHJpbmcsIHNlYXJjaD86IHN0cmluZywgdHlwZT86IFNlbnNvclR5cGVDb2RlW10sIHN0YXR1cz86IFNlbnNvclN0YXR1c0NvZGVbXSwgc3RyZWFtPzogU3RyZWFtVHlwZUNvZGVbXSwgc29ydD86IHN0cmluZywgcGFnZT86IG51bWJlciwgcGFnZVNpemU/OiBudW1iZXIsIGZvcm1hdD86IHN0cmluZywgZmllbGRzPzogc3RyaW5nW10pIHtcbiAgICBjb25zdCBwYXJhbXMgPSBuZXcgQXJyYXkoKTtcdFx0XG4gICAgaWYgKHNlYXJjaCAhPSBudWxsKSB7IHBhcmFtcy5wdXNoKGBzZWFyY2g9JHtzZWFyY2h9YCk7IH1cbiAgICBpZiAodHlwZSAhPSBudWxsKSB7IHBhcmFtcy5wdXNoKGB0eXBlPSR7dHlwZX1gKTsgfVxuICAgIGlmIChzdGF0dXMgIT0gbnVsbCkgeyBwYXJhbXMucHVzaChgc3RhdHVzPSR7c3RhdHVzfWApOyB9XG4gICAgaWYgKHN0cmVhbSAhPSBudWxsKSB7IHBhcmFtcy5wdXNoKGBzdHJlYW09JHtzdHJlYW19YCk7IH1cbiAgICBpZiAoc29ydCAhPSBudWxsKSB7IHBhcmFtcy5wdXNoKGBzb3J0PSR7c29ydH1gKTsgfVxuICAgIGlmIChwYWdlICE9IG51bGwpIHsgcGFyYW1zLnB1c2goYHBhZ2U9JHtwYWdlfWApOyB9XG4gICAgaWYgKHBhZ2VTaXplICE9IG51bGwpIHsgcGFyYW1zLnB1c2goYHBhZ2VTaXplPSR7cGFnZVNpemV9YCk7IH1cbiAgICBpZiAoZm9ybWF0ICE9IG51bGwpIHsgcGFyYW1zLnB1c2goYGZvcm1hdD0ke2Zvcm1hdH1gKTsgfVxuICAgIGlmIChmaWVsZHMgIT0gbnVsbCkgeyBwYXJhbXMucHVzaChgZmllbGRzPSR7ZmllbGRzfWApOyB9XG5cblx0XHRyZXR1cm4gdGhpcy5yZXN0LmdldChgJHt0aGlzLmJhc2VVcmx9LyR7aWR9L3NlbnNvcnNgLCAuLi5wYXJhbXMpO1xuICB9XG5cbiAgLyoqXG4gICAqIEdldCBhbGwgYXBwbGlhbmNlIGFnZW50c1xuICAgKiBAUmV0dXJuOiBFbnRpdGllc1Jlc3BvbnNlPEFnZW50PlxuICAgKi9cbiAgZ2V0QXBwbGlhbmNlQWdlbnRzKGlkPzogc3RyaW5nKSB7XG4gICAgcmV0dXJuIHRoaXMucmVzdC5nZXQoYCR7dGhpcy5iYXNlVXJsfS8ke2lkfS9hZ2VudHNgKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBBZGQgbmV3IHNlbnNvciBhbmQgYXNzaWduZWQgaXQgdG8gYSBzcGVjaWZpYyBhcHBsaWFuY2VcbiAgICogVGhlIHNlbnNvciB3aWxsIGJlIGNyZWF0ZWQgd2l0aCBzdGF0dXMgUEVORElORywgdGhlIHN0YXR1cyB3aWxsIGJlIGNoYW5nZWQgd2hlbiB0aGUgYWdlbnQgd2lsbCBlc3RhYmxpc2ggY29ubmVjdGlvbiB0byB0aGUgcHJveHlcbiAgICogQFJldHVybjogRW50aXR5UmVzcG9uc2U8U2Vuc29yPiBUaGUgdXBkYXRlZCBzZW5zb3JcbiAgICovXG4gIGFkZEFwcGxpYW5jZVNlbnNvcihpZD86IHN0cmluZywgYm9keT86IFNlbnNvcikge1xuICAgIHJldHVybiB0aGlzLnJlc3QucG9zdChgJHt0aGlzLmJhc2VVcmx9LyR7aWR9L3NlbnNvcnNgLCB0eXBlb2YgYm9keSA9PT0gJ29iamVjdCcgPyBKU09OLnN0cmluZ2lmeShib2R5KSA6IGJvZHkpO1xuICB9XG5cbiAgLyoqXG4gICAqIFJlZ2lzdGVyIG5ldyBhcHBsaWFuY2UgaW4gdGhlIHN5c3RlbVxuICAgKiBAUmV0dXJuOiBFbnRpdHlSZXNwb25zZTxBcHBsaWFuY2U+IFRoZSByZWdpc3RlcmVkIGFwcGxpYW5jZVxuICAgKi9cbiAgcmVnaXN0ZXJBcHBsaWFuY2UoaWQ/OiBzdHJpbmcsIGJvZHk/OiBBcHBsaWFuY2VSZWdpc3RyYXRpb24pIHtcbiAgICByZXR1cm4gdGhpcy5yZXN0LnBvc3QoYCR7dGhpcy5iYXNlVXJsfS9yZWdpc3RlcmAsIHR5cGVvZiBib2R5ID09PSAnb2JqZWN0JyA/IEpTT04uc3RyaW5naWZ5KGJvZHkpIDogYm9keSk7XG4gIH1cblxuICAvKipcbiAgICogR2V0IGFwcGxpYW5jZSBydW50aW1lIGNvbmZpZ3VyYXRpb24gY29tcG9uZW50c1xuICAgKiBAUmV0dXJuOiBFbnRpdGllc1Jlc3BvbnNlPENvbXBvbmVudENvbmZpZ3VyYXRpb24+XG4gICAqL1xuICBnZXRSdW50aW1lQ29uZmlndXJhdGlvbihpZD86IHN0cmluZykge1xuICAgIHJldHVybiB0aGlzLnJlc3QuZ2V0KGAke3RoaXMuYmFzZVVybH0vJHtpZH0vY29tcG9uZW50c2ApO1xuICB9XG5cbiAgLyoqXG4gICAqIEdldCBsaXN0IG9mIGFwcGxpYW5jZSBjb25maWd1cmF0aW9ucyBmb3IgdGhlIHNwZWNpZmljIHByb2R1Y3RcbiAgICogQFJldHVybjogRW50aXRpZXNSZXNwb25zZTxBcHBsaWFuY2VDb25maWd1cmF0aW9uPlxuICAgKi9cbiAgZ2V0Q29uZmlndXJhdGlvbnModGFyZ2V0PzogUHJvZHVjdFR5cGVDb2RlKSB7XG4gICAgcmV0dXJuIHRoaXMucmVzdC5nZXQoYCR7dGhpcy5iYXNlVXJsfS9jb25maWd1cmF0aW9ucy8ke3RhcmdldH1gKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBHZXQgYXBwbGlhbmNlIGNvbmZpZ3VyYXRpb24gZm9yIHRoZSBzcGVjaWZpYyBlZGdlIG1vZGVsXG4gICAqIEBSZXR1cm46IEVudGl0eVJlc3BvbnNlPEFwcGxpYW5jZUNvbmZpZ3VyYXRpb24+XG4gICAqL1xuICBnZXRDb25maWd1cmF0aW9uKG1vZGVsPzogc3RyaW5nKSB7XG4gICAgcmV0dXJuIHRoaXMucmVzdC5nZXQoYCR7dGhpcy5iYXNlVXJsfS9jb25maWd1cmF0aW9uLyR7bW9kZWx9YCk7XG4gIH1cblxuICAvKipcbiAgICogR2V0IG5ldHdvcmsgY2hhbm5lbHMgdXNpbmcgT05WSUYgZGlzY292ZXJ5IHByb3RvY29sXG4gICAqIEBSZXR1cm46IEVudGl0aWVzUmVzcG9uc2U8Q29tcG9uZW50Q29uZmlndXJhdGlvbj5cbiAgICovXG4gIGdldE9udmlmRGlzY292ZXJ5TGlzdChpZD86IHN0cmluZykge1xuICAgIHJldHVybiB0aGlzLnJlc3QuZ2V0KGAke3RoaXMuYmFzZVVybH0vJHtpZH0vZGlzY292ZXJ5YCk7XG4gIH1cblxuICAvKipcbiAgICogQ2hhbmdlIGFwcGxpYW5jZSBuYW1lXG4gICAqIEBSZXR1cm46IEVudGl0eVJlc3BvbnNlPEFwcGxpYW5jZT5cbiAgICovXG4gIGNoYW5nZU5hbWUoaWQ/OiBzdHJpbmcsIG5hbWU/OiBzdHJpbmcpIHtcbiAgICByZXR1cm4gdGhpcy5yZXN0LnB1dChgJHt0aGlzLmJhc2VVcmx9LyR7aWR9L25hbWUvJHtuYW1lfWAsIG51bGwpO1xuICB9XG5cbiAgLyoqXG4gICAqIFVwZGF0ZSBzb21lIGFwcGxpYW5jZSBhdHRyaWJ1dGVzIChuYW1lLCBmb2xkZXIsIGNvbmZpZ3VyYXRpb24sIGludGVncmF0aW9uKVxuICAgKiBAUmV0dXJuOiBFbnRpdHlSZXNwb25zZTxBcHBsaWFuY2U+XG4gICAqL1xuICB1cGRhdGUoaWQ/OiBzdHJpbmcsIGJvZHk/OiBBcHBsaWFuY2UpIHtcbiAgICByZXR1cm4gdGhpcy5yZXN0LnB1dChgJHt0aGlzLmJhc2VVcmx9LyR7aWR9YCwgdHlwZW9mIGJvZHkgPT09ICdvYmplY3QnID8gSlNPTi5zdHJpbmdpZnkoYm9keSkgOiBib2R5KTtcbiAgfVxuXG4gIC8qKlxuICAgKiBDaGFuZ2UgYXBwbGlhbmNlIGZvbGRlclxuICAgKiBAUmV0dXJuOiBFbnRpdHlSZXNwb25zZTxBcHBsaWFuY2U+XG4gICAqL1xuICBjaGFuZ2VGb2xkZXIoaWQ/OiBzdHJpbmcsIGZvbGRlcklkPzogc3RyaW5nKSB7XG4gICAgcmV0dXJuIHRoaXMucmVzdC5wdXQoYCR7dGhpcy5iYXNlVXJsfS8ke2lkfS9mb2xkZXIvJHtmb2xkZXJJZH1gLCBudWxsKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBDaGFuZ2UgYXBwbGlhbmNlIG1hY2hpbmUgSWQgKGZvciBWSVJUVUFMIGRldmljZSBvbmx5KVxuICAgKiBAUmV0dXJuOiBFbnRpdHlSZXNwb25zZTxBcHBsaWFuY2U+IC0gVXBkYXRlZCBhcHBsaWFuY2VcbiAgICovXG4gIGNoYW5nZU1hY2hpbmVJZChpZD86IHN0cmluZywgbWFjaGluZUlkPzogc3RyaW5nKSB7XG4gICAgcmV0dXJuIHRoaXMucmVzdC5wdXQoYCR7dGhpcy5iYXNlVXJsfS8ke2lkfS9tYWNoaW5lLyR7bWFjaGluZUlkfWAsIG51bGwpO1xuICB9XG5cbiAgLyoqXG4gICAqIENoYW5nZSBhcHBsaWFuY2UgY29uZmlndXJhdGlvblxuICAgKiBAUmV0dXJuOiBFbnRpdHlSZXNwb25zZTxBcHBsaWFuY2U+IC0gVXBkYXRlZCBhcHBsaWFuY2VcbiAgICovXG4gIGNoYW5nZUNvbmZpZ3VyYXRpb24oaWQ/OiBzdHJpbmcsIGNvbmZpZ0lkPzogc3RyaW5nLCB2ZXJzaW9uSWQ/OiBzdHJpbmcpIHtcbiAgICByZXR1cm4gdGhpcy5yZXN0LnB1dChgJHt0aGlzLmJhc2VVcmx9LyR7aWR9L2NvbmZpZy8ke2NvbmZpZ0lkfS8ke3ZlcnNpb25JZH1gLCBudWxsKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBTZW5kIGdldCBjYXBhYmlsaXRpZXMgY29tbWFuZCB0byB0aGUgYXBwbGlhbmNlIGFuZCB3YWl0IGZvciByZXNwb25zZSB1cCB0byA2MCBzZWNvbmRzXG4gICAqIEBSZXR1cm46ICBFbnRpdHlSZXNwb25zZTxBcHBsaWFuY2U+XG4gICAqL1xuICBnZXRDYXBhYmlsaXRpZXMoaWQ/OiBzdHJpbmcpIHtcbiAgICByZXR1cm4gdGhpcy5yZXN0LnBvc3QoYCR7dGhpcy5iYXNlVXJsfS8ke2lkfS9jYXBhYmlsaXRpZXNgLCBudWxsKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBTZW5kIHJlc2V0IGNyZWRlbnRpYWxzIGNvbW1hbmQgdG8gdGhlIGFwcGxpYW5jZSAocmVzZXQgdG8gdGhlIGZhY3RvcnkgZGVmYXVsdCBwYXNzd29yZClcbiAgICogQFJldHVybjogIEFjdGlvblJlc3BvbnNlXG4gICAqL1xuICByZXNldFBhc3N3b3JkKGlkPzogc3RyaW5nKSB7XG4gICAgcmV0dXJuIHRoaXMucmVzdC5wb3N0KGAke3RoaXMuYmFzZVVybH0vJHtpZH0vcmVzZXQtcGFzc3dvcmRgLCBudWxsKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBSZWJvb3QgYXBwbGlhbmNlIGhvc3RcbiAgICogQFJldHVybjogQWN0aW9uUmVzcG9uc2VcbiAgICovXG4gIHJlYm9vdChpZD86IHN0cmluZykge1xuICAgIHJldHVybiB0aGlzLnJlc3QucG9zdChgJHt0aGlzLmJhc2VVcmx9LyR7aWR9L3JlYm9vdGAsIG51bGwpO1xuICB9XG5cbiAgLyoqXG4gICAqIEdldCBjb250YWluZXIgbG9ncyBhcHBsaWFuY2UgaG9zdFxuICAgKiBAUmV0dXJuOiBBY3Rpb25SZXNwb25zZVxuICAgKi9cbiAgZ2V0TG9ncyhpZD86IHN0cmluZywgZnJvbT86IG51bWJlciwgdG8/OiBudW1iZXIsIGNvbXBvbmVudD86IHN0cmluZ1tdKSB7XG4gICAgY29uc3QgcGFyYW1zID0gbmV3IEFycmF5KCk7XHRcdFxuICAgIGlmIChmcm9tICE9IG51bGwpIHsgcGFyYW1zLnB1c2goYGZyb209JHtmcm9tfWApOyB9XG4gICAgaWYgKHRvICE9IG51bGwpIHsgcGFyYW1zLnB1c2goYHRvPSR7dG99YCk7IH1cbiAgICBpZiAoY29tcG9uZW50ICE9IG51bGwpIHsgcGFyYW1zLnB1c2goYGNvbXBvbmVudD0ke2NvbXBvbmVudH1gKTsgfVxuXG5cdFx0cmV0dXJuIHRoaXMucmVzdC5wb3N0KGAke3RoaXMuYmFzZVVybH0vJHtpZH0vbG9nc2AsIG51bGwsIC4uLnBhcmFtcyk7XG4gIH1cblxuICAvKipcbiAgICogRGVsZXRlIGFwcGxpYW5jZSBmcm9tIHRoZSBzeXN0ZW0gYW5kIGRldGFjaCBhbGwgaXQncyByZWxhdGVkIHNlbnNvcnNcbiAgICogSWYgdGhlIGFwcGxpYW5jZSBoYXMgY29ubmVjdGVkIGNhbWVyYXMsIHRoZXkgd2lsbCBhbGwgYmUgY29udmVydGVkIHRvIHVucmVnaXN0ZXJlZCAtIG1lYW5pbmcgdGhleSBhcmUgbm90IGF0dGFjaGVkIHRvIGFueSBkZXZpY2UgYW5kIHRoZWlyIHN0YXR1cyBpcyBTVVNQRU5ERURcbiAgICogVW5yZWdpc3RlcmVkIGNhbWVyYXMga2VlcHMgYWxsIHRoZWlyIHNldHRpbmdzIGFuZCBydWxlcyBhbmQgdGhleSBjYW4gYmUgYXNzaWduZWQgbGF0ZXIgdG8gYW5vdGhlciBkZXZpY2VcbiAgICogQFJldHVybjogQWN0aW9uUmVzcG9uc2VcbiAgICovXG4gIGRlbGV0ZShpZD86IHN0cmluZykge1xuICAgIHJldHVybiB0aGlzLnJlc3QuZGVsZXRlKGAke3RoaXMuYmFzZVVybH0vJHtpZH1gKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBEZWxldGUgYXBwbGlhbmNlIGZyb20gdGhlIHN5c3RlbSBpbmNsdWRpbmcgYWxsIGl0J3MgcmVsYXRlZCBzZW5zb3JzIGFuZCBzZW5zb3IgZGF0YSAocnVsZXMsIHByZXNldHMsIGFuYWx5c2lzIC4uLilcbiAgICogQFJldHVybjogQWN0aW9uUmVzcG9uc2VcbiAgICovXG4gIHB1cmdlKGlkPzogc3RyaW5nKSB7XG4gICAgcmV0dXJuIHRoaXMucmVzdC5kZWxldGUoYCR7dGhpcy5iYXNlVXJsfS9wdXJnZS8ke2lkfWApO1xuICB9XG5cbiAgLyoqXG4gICAqIEZpbmQgbGlzdCBvZiBhcHBsaWFuY2UgY29tbWFuZHMgYW5kIGZpbHRlclxuICAgKiBAUmV0dXJuOiBFbnRpdGllc1Jlc3BvbnNlPEFwcGxpYW5jZUNvbW1hbmQ+IExpc3Qgb2YgYXBwbGlhbmNlIGNvbW1hbmRzXG4gICAqL1xuICBnZXRDb21tYW5kcyhpZD86IHN0cmluZywgc3RhdHVzPzogQ29tbWFuZFN0YXR1c0NvZGVbXSwgc29ydD86IHN0cmluZywgcGFnZT86IG51bWJlciwgcGFnZVNpemU/OiBudW1iZXIpIHtcbiAgICBjb25zdCBwYXJhbXMgPSBuZXcgQXJyYXkoKTtcdFx0XG4gICAgaWYgKHN0YXR1cyAhPSBudWxsKSB7IHBhcmFtcy5wdXNoKGBzdGF0dXM9JHtzdGF0dXN9YCk7IH1cbiAgICBpZiAoc29ydCAhPSBudWxsKSB7IHBhcmFtcy5wdXNoKGBzb3J0PSR7c29ydH1gKTsgfVxuICAgIGlmIChwYWdlICE9IG51bGwpIHsgcGFyYW1zLnB1c2goYHBhZ2U9JHtwYWdlfWApOyB9XG4gICAgaWYgKHBhZ2VTaXplICE9IG51bGwpIHsgcGFyYW1zLnB1c2goYHBhZ2VTaXplPSR7cGFnZVNpemV9YCk7IH1cblxuXHRcdHJldHVybiB0aGlzLnJlc3QuZ2V0KGAke3RoaXMuYmFzZVVybH0vJHtpZH0vY29tbWFuZHNgLCAuLi5wYXJhbXMpO1xuICB9XG5cbiAgLyoqXG4gICAqIERlbGV0ZSBjb21tYW5kXG4gICAqIEBSZXR1cm46IEFjdGlvblJlc3BvbnNlXG4gICAqL1xuICBkZWxldGVDb21tYW5kKGNvbW1hbmRJZD86IHN0cmluZykge1xuICAgIHJldHVybiB0aGlzLnJlc3QuZGVsZXRlKGAke3RoaXMuYmFzZVVybH0vY29tbWFuZHMvJHtjb21tYW5kSWR9YCk7XG4gIH1cblxuICAvKipcbiAgICogR2V0IGFwcGxpYW5jZSBzdGF0dXMgaGlzdG9yeSBvdmVyIHRpbWVcbiAgICogQFJldHVybjogIEVudGl0eVJlc3BvbnNlPEFwcGxpYW5jZVN0YXR1c1RpbWVTZXJpZXM+XG4gICAqL1xuICBnZXRTdGF0dXNPdmVyVGltZShpZD86IHN0cmluZywgZnJvbT86IG51bWJlciwgdG8/OiBudW1iZXIpIHtcbiAgICBjb25zdCBwYXJhbXMgPSBuZXcgQXJyYXkoKTtcdFx0XG4gICAgaWYgKGZyb20gIT0gbnVsbCkgeyBwYXJhbXMucHVzaChgZnJvbT0ke2Zyb219YCk7IH1cbiAgICBpZiAodG8gIT0gbnVsbCkgeyBwYXJhbXMucHVzaChgdG89JHt0b31gKTsgfVxuXG5cdFx0cmV0dXJuIHRoaXMucmVzdC5nZXQoYCR7dGhpcy5iYXNlVXJsfS8ke2lkfS9zdGF0dXMvb3ZlcnRpbWVgLCAuLi5wYXJhbXMpO1xuICB9XG5cbiAgLyoqXG4gICAqIEdldCBhcHBsaWFuY2UgS1BJIChLZXkgUGVyZm9ybWFuY2UgSW5kaWNhdG9ycykgaGlzdG9yeSBvdmVyIHRpbWUgKENQVSwgUkFNLiBMT0FEKVxuICAgKiBAUmV0dXJuOiAgRW50aXR5UmVzcG9uc2U8QXBwbGlhbmNlS1BJc1RpbWVTZXJpZXM+XG4gICAqL1xuICBnZXRLcGlPdmVyVGltZShpZD86IHN0cmluZywgZnJvbT86IG51bWJlciwgdG8/OiBudW1iZXIpIHtcbiAgICBjb25zdCBwYXJhbXMgPSBuZXcgQXJyYXkoKTtcdFx0XG4gICAgaWYgKGZyb20gIT0gbnVsbCkgeyBwYXJhbXMucHVzaChgZnJvbT0ke2Zyb219YCk7IH1cbiAgICBpZiAodG8gIT0gbnVsbCkgeyBwYXJhbXMucHVzaChgdG89JHt0b31gKTsgfVxuXG5cdFx0cmV0dXJuIHRoaXMucmVzdC5nZXQoYCR7dGhpcy5iYXNlVXJsfS8ke2lkfS9rcGkvb3ZlcnRpbWVgLCAuLi5wYXJhbXMpO1xuICB9XG5cbiAgLyoqXG4gICAqIEFnZ3JlZ2F0ZSBhcHBsaWFuY2VzIGNvdW50IGRpc3RyaWJ1dGlvbiBieSBzdGF0dXNcbiAgICogQFJldHVybjogIEVudGl0eVJlc3BvbnNlPERpc3RyaWJ1dGlvbk9mTG9uZz5cbiAgICovXG4gIGdldEFwcGxpYW5jZXNDb3VudEJ5U3RhdHVzKGZvbGRlcklkPzogc3RyaW5nLCBzdWJGb2xkZXJzPzogYm9vbGVhbikge1xuICAgIGNvbnN0IHBhcmFtcyA9IG5ldyBBcnJheSgpO1x0XHRcbiAgICBpZiAoZm9sZGVySWQgIT0gbnVsbCkgeyBwYXJhbXMucHVzaChgZm9sZGVySWQ9JHtmb2xkZXJJZH1gKTsgfVxuICAgIGlmIChzdWJGb2xkZXJzICE9IG51bGwpIHsgcGFyYW1zLnB1c2goYHN1YkZvbGRlcnM9JHtzdWJGb2xkZXJzfWApOyB9XG5cblx0XHRyZXR1cm4gdGhpcy5yZXN0LmdldChgJHt0aGlzLmJhc2VVcmx9L2NvdW50L2J5LXN0YXR1c2AsIC4uLnBhcmFtcyk7XG4gIH1cblxufVxuIl19