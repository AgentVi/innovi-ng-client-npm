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
export class AppliancesService {
    /**
     * Class constructor
     */
    constructor(config, rest) {
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
    find(folderId, subFolders, search, status, agentStatus, sort, page, pageSize) {
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
        if (agentStatus != null) {
            params.push(`agentStatus=${agentStatus}`);
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
     * @Return: StreamContent
     */
    exportFormat(folderId, subFolders, search, status, agentStatus, sort, format, fields) {
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
        if (agentStatus != null) {
            params.push(`agentStatus=${agentStatus}`);
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
        return this.rest.download(`appliances`, `${this.baseUrl}/export`, ...params);
    }
    /**
     * Get single appliance by id
     * @Return: EntityResponse<Appliance>
     */
    get(id) {
        return this.rest.get(`${this.baseUrl}/${id}`);
    }
    /**
     * Get single appliance by machine id (accros all system accounts)
     * @Return: EntityResponse<Appliance>
     */
    getByMachineId(machineId) {
        return this.rest.get(`${this.baseUrl}/machine/${machineId}`);
    }
    /**
     * Get all sensors assigned to the appliance (getSensors)
     * @Return: QueryResponse<Sensor>
     */
    findApplianceSensors(id, search, type, status, stream, sort, page, pageSize, format, fields) {
        const params = new Array();
        if (search != null) {
            params.push(`search=${search}`);
        }
        if (type != null) {
            params.push(`type=${type}`);
        }
        if (status != null) {
            params.push(`status=${status}`);
        }
        if (stream != null) {
            params.push(`stream=${stream}`);
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
        if (format != null) {
            params.push(`format=${format}`);
        }
        if (fields != null) {
            params.push(`fields=${fields}`);
        }
        return this.rest.get(`${this.baseUrl}/${id}/sensors`, ...params);
    }
    /**
     * Get all appliance agents
     * @Return: EntitiesResponse<Agent>
     */
    getApplianceAgents(id) {
        return this.rest.get(`${this.baseUrl}/${id}/agents`);
    }
    /**
     * Add new sensor and assigned it to a specific appliance
     * The sensor will be created with status PENDING, the status will be changed when the agent will establish connection to the proxy
     * @Return: EntityResponse<Sensor> The updated sensor
     */
    addApplianceSensor(id, body) {
        return this.rest.post(`${this.baseUrl}/${id}/sensors`, typeof body === 'object' ? JSON.stringify(body) : body);
    }
    /**
     * Register new appliance in the system
     * @Return: EntityResponse<Appliance> The registered appliance
     */
    registerAppliance(id, body) {
        return this.rest.post(`${this.baseUrl}/register`, typeof body === 'object' ? JSON.stringify(body) : body);
    }
    /**
     * Get appliance runtime configuration components
     * @Return: EntitiesResponse<ComponentConfiguration>
     */
    getRuntimeConfiguration(id) {
        return this.rest.get(`${this.baseUrl}/${id}/components`);
    }
    /**
     * Get list of appliance configurations for the specific product
     * @Return: EntitiesResponse<ApplianceConfiguration>
     */
    getConfigurations(target) {
        return this.rest.get(`${this.baseUrl}/configurations/${target}`);
    }
    /**
     * Get appliance configuration for the specific edge model
     * @Return: EntityResponse<ApplianceConfiguration>
     */
    getConfiguration(model) {
        return this.rest.get(`${this.baseUrl}/configuration/${model}`);
    }
    /**
     * Get network channels using ONVIF discovery protocol
     * @Return: EntitiesResponse<ComponentConfiguration>
     */
    getOnvifDiscoveryList(id) {
        return this.rest.get(`${this.baseUrl}/${id}/discovery`);
    }
    /**
     * Change appliance name
     * @Return: EntityResponse<Appliance>
     */
    changeName(id, name) {
        return this.rest.put(`${this.baseUrl}/${id}/name/${name}`, null);
    }
    /**
     * Update some appliance attributes (name, folder, configuration, integration)
     * @Return: EntityResponse<Appliance>
     */
    update(id, body) {
        return this.rest.put(`${this.baseUrl}/${id}`, typeof body === 'object' ? JSON.stringify(body) : body);
    }
    /**
     * Change appliance folder
     * @Return: EntityResponse<Appliance>
     */
    changeFolder(id, folderId) {
        return this.rest.put(`${this.baseUrl}/${id}/folder/${folderId}`, null);
    }
    /**
     * Change appliance machine Id (for VIRTUAL device only)
     * @Return: EntityResponse<Appliance> - Updated appliance
     */
    changeMachineId(id, machineId) {
        return this.rest.put(`${this.baseUrl}/${id}/machine/${machineId}`, null);
    }
    /**
     * Change appliance configuration
     * @Return: EntityResponse<Appliance> - Updated appliance
     */
    changeConfiguration(id, configId, versionId) {
        return this.rest.put(`${this.baseUrl}/${id}/config/${configId}/${versionId}`, null);
    }
    /**
     * Send get capabilities command to the appliance and wait for response up to 60 seconds
     * @Return:  EntityResponse<Appliance>
     */
    getCapabilities(id) {
        return this.rest.post(`${this.baseUrl}/${id}/capabilities`, null);
    }
    /**
     * Send reset credentials command to the appliance (reset to the factory default password)
     * @Return:  ActionResponse
     */
    resetPassword(id) {
        return this.rest.post(`${this.baseUrl}/${id}/reset-password`, null);
    }
    /**
     * Reboot appliance host
     * @Return: ActionResponse
     */
    reboot(id) {
        return this.rest.post(`${this.baseUrl}/${id}/reboot`, null);
    }
    /**
     * Rebuild appliance configuration and deploy the configuration to the device manager
     * @Return: ActionResponse
     */
    redeploy(id) {
        return this.rest.post(`${this.baseUrl}/${id}/redeploy`, null);
    }
    /**
     * Get container logs appliance host
     * @Return: ActionResponse
     */
    getLogs(id, from, to, component) {
        const params = new Array();
        if (from != null) {
            params.push(`from=${from}`);
        }
        if (to != null) {
            params.push(`to=${to}`);
        }
        if (component != null) {
            params.push(`component=${component}`);
        }
        return this.rest.post(`${this.baseUrl}/${id}/logs`, null, ...params);
    }
    /**
     * Delete appliance from the system and detach all it's related sensors
     * If the appliance has connected cameras, they will all be converted to unregistered - meaning they are not attached to any device and their status is SUSPENDED
     * Unregistered cameras keeps all their settings and rules and they can be assigned later to another device
     * @Return: ActionResponse
     */
    delete(id) {
        return this.rest.delete(`${this.baseUrl}/${id}`);
    }
    /**
     * Delete appliance from the system including all it's related sensors and sensor data (rules, presets, analysis ...)
     * @Return: ActionResponse
     */
    purge(id) {
        return this.rest.delete(`${this.baseUrl}/purge/${id}`);
    }
    /**
     * Find list of appliance commands and filter
     * @Return: EntitiesResponse<ApplianceCommand> List of appliance commands
     */
    getCommands(id, status, sort, page, pageSize) {
        const params = new Array();
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
        return this.rest.get(`${this.baseUrl}/${id}/commands`, ...params);
    }
    /**
     * Delete command
     * @Return: ActionResponse
     */
    deleteCommand(commandId) {
        return this.rest.delete(`${this.baseUrl}/commands/${commandId}`);
    }
    /**
     * Get appliance status history over time
     * @Return:  EntityResponse<ApplianceStatusTimeSeries>
     */
    getStatusOverTime(id, from, to) {
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
     * @Return:  EntityResponse<ApplianceKPIsTimeSeries>
     */
    getKpiOverTime(id, from, to) {
        const params = new Array();
        if (from != null) {
            params.push(`from=${from}`);
        }
        if (to != null) {
            params.push(`to=${to}`);
        }
        return this.rest.get(`${this.baseUrl}/${id}/kpi/overtime`, ...params);
    }
    /**
     * Aggregate appliances count distribution by status
     * @Return:  EntityResponse<DistributionOfLong>
     */
    getAppliancesCountByStatus(folderId, subFolders) {
        const params = new Array();
        if (folderId != null) {
            params.push(`folderId=${folderId}`);
        }
        if (subFolders != null) {
            params.push(`subFolders=${subFolders}`);
        }
        return this.rest.get(`${this.baseUrl}/count/by-status`, ...params);
    }
}
/** @nocollapse */ AppliancesService.ɵfac = function AppliancesService_Factory(t) { return new (t || AppliancesService)(i0.ɵɵinject('config'), i0.ɵɵinject(i1.RestUtil)); };
/** @nocollapse */ AppliancesService.ɵprov = i0.ɵɵdefineInjectable({ token: AppliancesService, factory: AppliancesService.ɵfac });
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(AppliancesService, [{
        type: Injectable
    }], function () { return [{ type: i2.CoreConfig, decorators: [{
                type: Inject,
                args: ['config']
            }] }, { type: i1.RestUtil }]; }, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwbGlhbmNlc1NlcnZpY2UuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AYWdlbnR2aS9uZy1jb3JlLWxpYi8iLCJzb3VyY2VzIjpbImxpYi9zZXJ2aWNlcy9hcHBsaWFuY2VzU2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUNuRCxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sdUJBQXVCLENBQUM7QUFDakQsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGNBQWMsQ0FBQzs7OztBQWMxQzs7OztHQUlHO0FBRUgsTUFBTSxPQUFPLGlCQUFpQjtJQUs1Qjs7T0FFRztJQUNILFlBQXNDLE1BQWtCLEVBQVUsSUFBYztRQUExQyxXQUFNLEdBQU4sTUFBTSxDQUFZO1FBQVUsU0FBSSxHQUFKLElBQUksQ0FBVTtRQU5oRixpQkFBaUI7UUFDVCxZQUFPLEdBQUcsYUFBYSxDQUFDO1FBTTlCLElBQUksQ0FBQyxPQUFPLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxHQUFHLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQztJQUNoRCxDQUFDO0lBR0Q7OztPQUdHO0lBQ0gsSUFBSSxDQUFDLFFBQWlCLEVBQUUsVUFBb0IsRUFBRSxNQUFlLEVBQUUsTUFBOEIsRUFBRSxXQUErQixFQUFFLElBQWEsRUFBRSxJQUFhLEVBQUUsUUFBaUI7UUFDN0ssTUFBTSxNQUFNLEdBQUcsSUFBSSxLQUFLLEVBQUUsQ0FBQztRQUMzQixJQUFJLFFBQVEsSUFBSSxJQUFJLEVBQUU7WUFBRSxNQUFNLENBQUMsSUFBSSxDQUFDLFlBQVksUUFBUSxFQUFFLENBQUMsQ0FBQztTQUFFO1FBQzlELElBQUksVUFBVSxJQUFJLElBQUksRUFBRTtZQUFFLE1BQU0sQ0FBQyxJQUFJLENBQUMsY0FBYyxVQUFVLEVBQUUsQ0FBQyxDQUFDO1NBQUU7UUFDcEUsSUFBSSxNQUFNLElBQUksSUFBSSxFQUFFO1lBQUUs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eyBJbmplY3RhYmxlLCBJbmplY3QgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFJlc3RVdGlsIH0gZnJvbSAnLi4vLi4vdXRpbHMvcmVzdC11dGlsJztcbmltcG9ydCB7IENvcmVDb25maWcgfSBmcm9tICcuLi8uLi9jb25maWcnO1xuXG5pbXBvcnQgeyBTZW5zb3JTdGF0dXNDb2RlIH0gZnJvbSAnLi4vZW51bXMvU2Vuc29yU3RhdHVzQ29kZSc7XG5pbXBvcnQgeyBTdHJlYW1UeXBlQ29kZSB9IGZyb20gJy4uL2VudW1zL1N0cmVhbVR5cGVDb2RlJztcbmltcG9ydCB7IEFwcGxpYW5jZSB9IGZyb20gJy4uL2VudGl0aWVzL0FwcGxpYW5jZSc7XG5pbXBvcnQgeyBBcHBsaWFuY2VSZWdpc3RyYXRpb24gfSBmcm9tICcuLi9jb21tb24vQXBwbGlhbmNlUmVnaXN0cmF0aW9uJztcbmltcG9ydCB7IFByb2R1Y3RUeXBlQ29kZSB9IGZyb20gJy4uL2VudW1zL1Byb2R1Y3RUeXBlQ29kZSc7XG5pbXBvcnQgeyBDb21tYW5kU3RhdHVzQ29kZSB9IGZyb20gJy4uL2VudW1zL0NvbW1hbmRTdGF0dXNDb2RlJztcbmltcG9ydCB7IEFwcGxpYW5jZVN0YXR1c0NvZGUgfSBmcm9tICcuLi9lbnVtcy9BcHBsaWFuY2VTdGF0dXNDb2RlJztcbmltcG9ydCB7IEFnZW50U3RhdHVzQ29kZSB9IGZyb20gJy4uL2VudW1zL0FnZW50U3RhdHVzQ29kZSc7XG5pbXBvcnQgeyBTZW5zb3JUeXBlQ29kZSB9IGZyb20gJy4uL2VudW1zL1NlbnNvclR5cGVDb2RlJztcbmltcG9ydCB7IFNlbnNvciB9IGZyb20gJy4uL2VudGl0aWVzL1NlbnNvcic7XG5cblxuLyoqXG4gKiBMaXN0IG9mIGFwcGxpYW5jZSByZWxhdGVkIGFjdGlvbnNcbiAqIEBSZXF1ZXN0SGVhZGVyIFgtQVBJLUtFWSBUaGUga2V5IHRvIGlkZW50aWZ5IHRoZSBhcHBsaWNhdGlvbiAocG9ydGFsKVxuICogQFJlcXVlc3RIZWFkZXIgWC1BQ0NFU1MtVE9LRU4gVGhlIHRva2VuIHRvIGlkZW50aWZ5IHRoZSBsb2dnZWQtaW4gdXNlciBcbiAqL1xuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIEFwcGxpYW5jZXNTZXJ2aWNlIHtcblxuICAvLyBVUkwgdG8gd2ViIGFwaVxuICBwcml2YXRlIGJhc2VVcmwgPSAnL2FwcGxpYW5jZXMnO1xuXG4gIC8qKlxuICAgKiBDbGFzcyBjb25zdHJ1Y3RvclxuICAgKi9cbiAgY29uc3RydWN0b3IoQEluamVjdCgnY29uZmlnJykgcHJpdmF0ZSBjb25maWc6IENvcmVDb25maWcsIHByaXZhdGUgcmVzdDogUmVzdFV0aWwpIHtcbiAgICB0aGlzLmJhc2VVcmwgPSB0aGlzLmNvbmZpZy5hcGkgKyB0aGlzLmJhc2VVcmw7XG4gIH1cblxuXG4gIC8qKlxuICAgKiBGaW5kIGxpc3Qgb2YgYXBwbGlhbmNlcyBhbmQgZmlsdGVyXG4gICAqIEBSZXR1cm46IFF1ZXJ5UmVzcG9uc2U8QXBwbGlhbmNlPlxuICAgKi9cbiAgZmluZChmb2xkZXJJZD86IHN0cmluZywgc3ViRm9sZGVycz86IGJvb2xlYW4sIHNlYXJjaD86IHN0cmluZywgc3RhdHVzPzogQXBwbGlhbmNlU3RhdHVzQ29kZVtdLCBhZ2VudFN0YXR1cz86IEFnZW50U3RhdHVzQ29kZVtdLCBzb3J0Pzogc3RyaW5nLCBwYWdlPzogbnVtYmVyLCBwYWdlU2l6ZT86IG51bWJlcikge1xuICAgIGNvbnN0IHBhcmFtcyA9IG5ldyBBcnJheSgpO1x0XHRcbiAgICBpZiAoZm9sZGVySWQgIT0gbnVsbCkgeyBwYXJhbXMucHVzaChgZm9sZGVySWQ9JHtmb2xkZXJJZH1gKTsgfVxuICAgIGlmIChzdWJGb2xkZXJzICE9IG51bGwpIHsgcGFyYW1zLnB1c2goYHN1YkZvbGRlcnM9JHtzdWJGb2xkZXJzfWApOyB9XG4gICAgaWYgKHNlYXJjaCAhPSBudWxsKSB7IHBhcmFtcy5wdXNoKGBzZWFyY2g9JHtzZWFyY2h9YCk7IH1cbiAgICBpZiAoc3RhdHVzICE9IG51bGwpIHsgcGFyYW1zLnB1c2goYHN0YXR1cz0ke3N0YXR1c31gKTsgfVxuICAgIGlmIChhZ2VudFN0YXR1cyAhPSBudWxsKSB7IHBhcmFtcy5wdXNoKGBhZ2VudFN0YXR1cz0ke2FnZW50U3RhdHVzfWApOyB9XG4gICAgaWYgKHNvcnQgIT0gbnVsbCkgeyBwYXJhbXMucHVzaChgc29ydD0ke3NvcnR9YCk7IH1cbiAgICBpZiAocGFnZSAhPSBudWxsKSB7IHBhcmFtcy5wdXNoKGBwYWdlPSR7cGFnZX1gKTsgfVxuICAgIGlmIChwYWdlU2l6ZSAhPSBudWxsKSB7IHBhcmFtcy5wdXNoKGBwYWdlU2l6ZT0ke3BhZ2VTaXplfWApOyB9XG5cblx0XHRyZXR1cm4gdGhpcy5yZXN0LmdldChgJHt0aGlzLmJhc2VVcmx9YCwgLi4ucGFyYW1zKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBFeHBvcnQgbGlzdCBvZiBhcHBsaWFuY2VzIGFuZCBmaWx0ZXJcbiAgICogQFJldHVybjogU3RyZWFtQ29udGVudFxuICAgKi9cbiAgZXhwb3J0Rm9ybWF0KGZvbGRlcklkPzogc3RyaW5nLCBzdWJGb2xkZXJzPzogYm9vbGVhbiwgc2VhcmNoPzogc3RyaW5nLCBzdGF0dXM/OiBBcHBsaWFuY2VTdGF0dXNDb2RlW10sIGFnZW50U3RhdHVzPzogQWdlbnRTdGF0dXNDb2RlW10sIHNvcnQ/OiBzdHJpbmcsIGZvcm1hdD86IHN0cmluZywgZmllbGRzPzogc3RyaW5nW10pIHtcbiAgICBjb25zdCBwYXJhbXMgPSBuZXcgQXJyYXkoKTtcdFx0XG4gICAgaWYgKGZvbGRlcklkICE9IG51bGwpIHsgcGFyYW1zLnB1c2goYGZvbGRlcklkPSR7Zm9sZGVySWR9YCk7IH1cbiAgICBpZiAoc3ViRm9sZGVycyAhPSBudWxsKSB7IHBhcmFtcy5wdXNoKGBzdWJGb2xkZXJzPSR7c3ViRm9sZGVyc31gKTsgfVxuICAgIGlmIChzZWFyY2ggIT0gbnVsbCkgeyBwYXJhbXMucHVzaChgc2VhcmNoPSR7c2VhcmNofWApOyB9XG4gICAgaWYgKHN0YXR1cyAhPSBudWxsKSB7IHBhcmFtcy5wdXNoKGBzdGF0dXM9JHtzdGF0dXN9YCk7IH1cbiAgICBpZiAoYWdlbnRTdGF0dXMgIT0gbnVsbCkgeyBwYXJhbXMucHVzaChgYWdlbnRTdGF0dXM9JHthZ2VudFN0YXR1c31gKTsgfVxuICAgIGlmIChzb3J0ICE9IG51bGwpIHsgcGFyYW1zLnB1c2goYHNvcnQ9JHtzb3J0fWApOyB9XG4gICAgaWYgKGZvcm1hdCAhPSBudWxsKSB7IHBhcmFtcy5wdXNoKGBmb3JtYXQ9JHtmb3JtYXR9YCk7IH1cbiAgICBpZiAoZmllbGRzICE9IG51bGwpIHsgcGFyYW1zLnB1c2goYGZpZWxkcz0ke2ZpZWxkc31gKTsgfVxuXG5cdFx0cmV0dXJuIHRoaXMucmVzdC5kb3dubG9hZChgYXBwbGlhbmNlc2AsYCR7dGhpcy5iYXNlVXJsfS9leHBvcnRgLCAuLi5wYXJhbXMpO1xuICB9XG5cbiAgLyoqXG4gICAqIEdldCBzaW5nbGUgYXBwbGlhbmNlIGJ5IGlkXG4gICAqIEBSZXR1cm46IEVudGl0eVJlc3BvbnNlPEFwcGxpYW5jZT5cbiAgICovXG4gIGdldChpZD86IHN0cmluZykge1xuICAgIHJldHVybiB0aGlzLnJlc3QuZ2V0KGAke3RoaXMuYmFzZVVybH0vJHtpZH1gKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBHZXQgc2luZ2xlIGFwcGxpYW5jZSBieSBtYWNoaW5lIGlkIChhY2Nyb3MgYWxsIHN5c3RlbSBhY2NvdW50cylcbiAgICogQFJldHVybjogRW50aXR5UmVzcG9uc2U8QXBwbGlhbmNlPlxuICAgKi9cbiAgZ2V0QnlNYWNoaW5lSWQobWFjaGluZUlkPzogc3RyaW5nKSB7XG4gICAgcmV0dXJuIHRoaXMucmVzdC5nZXQoYCR7dGhpcy5iYXNlVXJsfS9tYWNoaW5lLyR7bWFjaGluZUlkfWApO1xuICB9XG5cbiAgLyoqXG4gICAqIEdldCBhbGwgc2Vuc29ycyBhc3NpZ25lZCB0byB0aGUgYXBwbGlhbmNlIChnZXRTZW5zb3JzKVxuICAgKiBAUmV0dXJuOiBRdWVyeVJlc3BvbnNlPFNlbnNvcj5cbiAgICovXG4gIGZpbmRBcHBsaWFuY2VTZW5zb3JzKGlkPzogc3RyaW5nLCBzZWFyY2g/OiBzdHJpbmcsIHR5cGU/OiBTZW5zb3JUeXBlQ29kZVtdLCBzdGF0dXM/OiBTZW5zb3JTdGF0dXNDb2RlW10sIHN0cmVhbT86IFN0cmVhbVR5cGVDb2RlW10sIHNvcnQ/OiBzdHJpbmcsIHBhZ2U/OiBudW1iZXIsIHBhZ2VTaXplPzogbnVtYmVyLCBmb3JtYXQ/OiBzdHJpbmcsIGZpZWxkcz86IHN0cmluZ1tdKSB7XG4gICAgY29uc3QgcGFyYW1zID0gbmV3IEFycmF5KCk7XHRcdFxuICAgIGlmIChzZWFyY2ggIT0gbnVsbCkgeyBwYXJhbXMucHVzaChgc2VhcmNoPSR7c2VhcmNofWApOyB9XG4gICAgaWYgKHR5cGUgIT0gbnVsbCkgeyBwYXJhbXMucHVzaChgdHlwZT0ke3R5cGV9YCk7IH1cbiAgICBpZiAoc3RhdHVzICE9IG51bGwpIHsgcGFyYW1zLnB1c2goYHN0YXR1cz0ke3N0YXR1c31gKTsgfVxuICAgIGlmIChzdHJlYW0gIT0gbnVsbCkgeyBwYXJhbXMucHVzaChgc3RyZWFtPSR7c3RyZWFtfWApOyB9XG4gICAgaWYgKHNvcnQgIT0gbnVsbCkgeyBwYXJhbXMucHVzaChgc29ydD0ke3NvcnR9YCk7IH1cbiAgICBpZiAocGFnZSAhPSBudWxsKSB7IHBhcmFtcy5wdXNoKGBwYWdlPSR7cGFnZX1gKTsgfVxuICAgIGlmIChwYWdlU2l6ZSAhPSBudWxsKSB7IHBhcmFtcy5wdXNoKGBwYWdlU2l6ZT0ke3BhZ2VTaXplfWApOyB9XG4gICAgaWYgKGZvcm1hdCAhPSBudWxsKSB7IHBhcmFtcy5wdXNoKGBmb3JtYXQ9JHtmb3JtYXR9YCk7IH1cbiAgICBpZiAoZmllbGRzICE9IG51bGwpIHsgcGFyYW1zLnB1c2goYGZpZWxkcz0ke2ZpZWxkc31gKTsgfVxuXG5cdFx0cmV0dXJuIHRoaXMucmVzdC5nZXQoYCR7dGhpcy5iYXNlVXJsfS8ke2lkfS9zZW5zb3JzYCwgLi4ucGFyYW1zKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBHZXQgYWxsIGFwcGxpYW5jZSBhZ2VudHNcbiAgICogQFJldHVybjogRW50aXRpZXNSZXNwb25zZTxBZ2VudD5cbiAgICovXG4gIGdldEFwcGxpYW5jZUFnZW50cyhpZD86IHN0cmluZykge1xuICAgIHJldHVybiB0aGlzLnJlc3QuZ2V0KGAke3RoaXMuYmFzZVVybH0vJHtpZH0vYWdlbnRzYCk7XG4gIH1cblxuICAvKipcbiAgICogQWRkIG5ldyBzZW5zb3IgYW5kIGFzc2lnbmVkIGl0IHRvIGEgc3BlY2lmaWMgYXBwbGlhbmNlXG4gICAqIFRoZSBzZW5zb3Igd2lsbCBiZSBjcmVhdGVkIHdpdGggc3RhdHVzIFBFTkRJTkcsIHRoZSBzdGF0dXMgd2lsbCBiZSBjaGFuZ2VkIHdoZW4gdGhlIGFnZW50IHdpbGwgZXN0YWJsaXNoIGNvbm5lY3Rpb24gdG8gdGhlIHByb3h5XG4gICAqIEBSZXR1cm46IEVudGl0eVJlc3BvbnNlPFNlbnNvcj4gVGhlIHVwZGF0ZWQgc2Vuc29yXG4gICAqL1xuICBhZGRBcHBsaWFuY2VTZW5zb3IoaWQ/OiBzdHJpbmcsIGJvZHk/OiBTZW5zb3IpIHtcbiAgICByZXR1cm4gdGhpcy5yZXN0LnBvc3QoYCR7dGhpcy5iYXNlVXJsfS8ke2lkfS9zZW5zb3JzYCwgdHlwZW9mIGJvZHkgPT09ICdvYmplY3QnID8gSlNPTi5zdHJpbmdpZnkoYm9keSkgOiBib2R5KTtcbiAgfVxuXG4gIC8qKlxuICAgKiBSZWdpc3RlciBuZXcgYXBwbGlhbmNlIGluIHRoZSBzeXN0ZW1cbiAgICogQFJldHVybjogRW50aXR5UmVzcG9uc2U8QXBwbGlhbmNlPiBUaGUgcmVnaXN0ZXJlZCBhcHBsaWFuY2VcbiAgICovXG4gIHJlZ2lzdGVyQXBwbGlhbmNlKGlkPzogc3RyaW5nLCBib2R5PzogQXBwbGlhbmNlUmVnaXN0cmF0aW9uKSB7XG4gICAgcmV0dXJuIHRoaXMucmVzdC5wb3N0KGAke3RoaXMuYmFzZVVybH0vcmVnaXN0ZXJgLCB0eXBlb2YgYm9keSA9PT0gJ29iamVjdCcgPyBKU09OLnN0cmluZ2lmeShib2R5KSA6IGJvZHkpO1xuICB9XG5cbiAgLyoqXG4gICAqIEdldCBhcHBsaWFuY2UgcnVudGltZSBjb25maWd1cmF0aW9uIGNvbXBvbmVudHNcbiAgICogQFJldHVybjogRW50aXRpZXNSZXNwb25zZTxDb21wb25lbnRDb25maWd1cmF0aW9uPlxuICAgKi9cbiAgZ2V0UnVudGltZUNvbmZpZ3VyYXRpb24oaWQ/OiBzdHJpbmcpIHtcbiAgICByZXR1cm4gdGhpcy5yZXN0LmdldChgJHt0aGlzLmJhc2VVcmx9LyR7aWR9L2NvbXBvbmVudHNgKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBHZXQgbGlzdCBvZiBhcHBsaWFuY2UgY29uZmlndXJhdGlvbnMgZm9yIHRoZSBzcGVjaWZpYyBwcm9kdWN0XG4gICAqIEBSZXR1cm46IEVudGl0aWVzUmVzcG9uc2U8QXBwbGlhbmNlQ29uZmlndXJhdGlvbj5cbiAgICovXG4gIGdldENvbmZpZ3VyYXRpb25zKHRhcmdldD86IFByb2R1Y3RUeXBlQ29kZSkge1xuICAgIHJldHVybiB0aGlzLnJlc3QuZ2V0KGAke3RoaXMuYmFzZVVybH0vY29uZmlndXJhdGlvbnMvJHt0YXJnZXR9YCk7XG4gIH1cblxuICAvKipcbiAgICogR2V0IGFwcGxpYW5jZSBjb25maWd1cmF0aW9uIGZvciB0aGUgc3BlY2lmaWMgZWRnZSBtb2RlbFxuICAgKiBAUmV0dXJuOiBFbnRpdHlSZXNwb25zZTxBcHBsaWFuY2VDb25maWd1cmF0aW9uPlxuICAgKi9cbiAgZ2V0Q29uZmlndXJhdGlvbihtb2RlbD86IHN0cmluZykge1xuICAgIHJldHVybiB0aGlzLnJlc3QuZ2V0KGAke3RoaXMuYmFzZVVybH0vY29uZmlndXJhdGlvbi8ke21vZGVsfWApO1xuICB9XG5cbiAgLyoqXG4gICAqIEdldCBuZXR3b3JrIGNoYW5uZWxzIHVzaW5nIE9OVklGIGRpc2NvdmVyeSBwcm90b2NvbFxuICAgKiBAUmV0dXJuOiBFbnRpdGllc1Jlc3BvbnNlPENvbXBvbmVudENvbmZpZ3VyYXRpb24+XG4gICAqL1xuICBnZXRPbnZpZkRpc2NvdmVyeUxpc3QoaWQ/OiBzdHJpbmcpIHtcbiAgICByZXR1cm4gdGhpcy5yZXN0LmdldChgJHt0aGlzLmJhc2VVcmx9LyR7aWR9L2Rpc2NvdmVyeWApO1xuICB9XG5cbiAgLyoqXG4gICAqIENoYW5nZSBhcHBsaWFuY2UgbmFtZVxuICAgKiBAUmV0dXJuOiBFbnRpdHlSZXNwb25zZTxBcHBsaWFuY2U+XG4gICAqL1xuICBjaGFuZ2VOYW1lKGlkPzogc3RyaW5nLCBuYW1lPzogc3RyaW5nKSB7XG4gICAgcmV0dXJuIHRoaXMucmVzdC5wdXQoYCR7dGhpcy5iYXNlVXJsfS8ke2lkfS9uYW1lLyR7bmFtZX1gLCBudWxsKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBVcGRhdGUgc29tZSBhcHBsaWFuY2UgYXR0cmlidXRlcyAobmFtZSwgZm9sZGVyLCBjb25maWd1cmF0aW9uLCBpbnRlZ3JhdGlvbilcbiAgICogQFJldHVybjogRW50aXR5UmVzcG9uc2U8QXBwbGlhbmNlPlxuICAgKi9cbiAgdXBkYXRlKGlkPzogc3RyaW5nLCBib2R5PzogQXBwbGlhbmNlKSB7XG4gICAgcmV0dXJuIHRoaXMucmVzdC5wdXQoYCR7dGhpcy5iYXNlVXJsfS8ke2lkfWAsIHR5cGVvZiBib2R5ID09PSAnb2JqZWN0JyA/IEpTT04uc3RyaW5naWZ5KGJvZHkpIDogYm9keSk7XG4gIH1cblxuICAvKipcbiAgICogQ2hhbmdlIGFwcGxpYW5jZSBmb2xkZXJcbiAgICogQFJldHVybjogRW50aXR5UmVzcG9uc2U8QXBwbGlhbmNlPlxuICAgKi9cbiAgY2hhbmdlRm9sZGVyKGlkPzogc3RyaW5nLCBmb2xkZXJJZD86IHN0cmluZykge1xuICAgIHJldHVybiB0aGlzLnJlc3QucHV0KGAke3RoaXMuYmFzZVVybH0vJHtpZH0vZm9sZGVyLyR7Zm9sZGVySWR9YCwgbnVsbCk7XG4gIH1cblxuICAvKipcbiAgICogQ2hhbmdlIGFwcGxpYW5jZSBtYWNoaW5lIElkIChmb3IgVklSVFVBTCBkZXZpY2Ugb25seSlcbiAgICogQFJldHVybjogRW50aXR5UmVzcG9uc2U8QXBwbGlhbmNlPiAtIFVwZGF0ZWQgYXBwbGlhbmNlXG4gICAqL1xuICBjaGFuZ2VNYWNoaW5lSWQoaWQ/OiBzdHJpbmcsIG1hY2hpbmVJZD86IHN0cmluZykge1xuICAgIHJldHVybiB0aGlzLnJlc3QucHV0KGAke3RoaXMuYmFzZVVybH0vJHtpZH0vbWFjaGluZS8ke21hY2hpbmVJZH1gLCBudWxsKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBDaGFuZ2UgYXBwbGlhbmNlIGNvbmZpZ3VyYXRpb25cbiAgICogQFJldHVybjogRW50aXR5UmVzcG9uc2U8QXBwbGlhbmNlPiAtIFVwZGF0ZWQgYXBwbGlhbmNlXG4gICAqL1xuICBjaGFuZ2VDb25maWd1cmF0aW9uKGlkPzogc3RyaW5nLCBjb25maWdJZD86IHN0cmluZywgdmVyc2lvbklkPzogc3RyaW5nKSB7XG4gICAgcmV0dXJuIHRoaXMucmVzdC5wdXQoYCR7dGhpcy5iYXNlVXJsfS8ke2lkfS9jb25maWcvJHtjb25maWdJZH0vJHt2ZXJzaW9uSWR9YCwgbnVsbCk7XG4gIH1cblxuICAvKipcbiAgICogU2VuZCBnZXQgY2FwYWJpbGl0aWVzIGNvbW1hbmQgdG8gdGhlIGFwcGxpYW5jZSBhbmQgd2FpdCBmb3IgcmVzcG9uc2UgdXAgdG8gNjAgc2Vjb25kc1xuICAgKiBAUmV0dXJuOiAgRW50aXR5UmVzcG9uc2U8QXBwbGlhbmNlPlxuICAgKi9cbiAgZ2V0Q2FwYWJpbGl0aWVzKGlkPzogc3RyaW5nKSB7XG4gICAgcmV0dXJuIHRoaXMucmVzdC5wb3N0KGAke3RoaXMuYmFzZVVybH0vJHtpZH0vY2FwYWJpbGl0aWVzYCwgbnVsbCk7XG4gIH1cblxuICAvKipcbiAgICogU2VuZCByZXNldCBjcmVkZW50aWFscyBjb21tYW5kIHRvIHRoZSBhcHBsaWFuY2UgKHJlc2V0IHRvIHRoZSBmYWN0b3J5IGRlZmF1bHQgcGFzc3dvcmQpXG4gICAqIEBSZXR1cm46ICBBY3Rpb25SZXNwb25zZVxuICAgKi9cbiAgcmVzZXRQYXNzd29yZChpZD86IHN0cmluZykge1xuICAgIHJldHVybiB0aGlzLnJlc3QucG9zdChgJHt0aGlzLmJhc2VVcmx9LyR7aWR9L3Jlc2V0LXBhc3N3b3JkYCwgbnVsbCk7XG4gIH1cblxuICAvKipcbiAgICogUmVib290IGFwcGxpYW5jZSBob3N0XG4gICAqIEBSZXR1cm46IEFjdGlvblJlc3BvbnNlXG4gICAqL1xuICByZWJvb3QoaWQ/OiBzdHJpbmcpIHtcbiAgICByZXR1cm4gdGhpcy5yZXN0LnBvc3QoYCR7dGhpcy5iYXNlVXJsfS8ke2lkfS9yZWJvb3RgLCBudWxsKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBSZWJ1aWxkIGFwcGxpYW5jZSBjb25maWd1cmF0aW9uIGFuZCBkZXBsb3kgdGhlIGNvbmZpZ3VyYXRpb24gdG8gdGhlIGRldmljZSBtYW5hZ2VyXG4gICAqIEBSZXR1cm46IEFjdGlvblJlc3BvbnNlXG4gICAqL1xuICByZWRlcGxveShpZD86IHN0cmluZykge1xuICAgIHJldHVybiB0aGlzLnJlc3QucG9zdChgJHt0aGlzLmJhc2VVcmx9LyR7aWR9L3JlZGVwbG95YCwgbnVsbCk7XG4gIH1cblxuICAvKipcbiAgICogR2V0IGNvbnRhaW5lciBsb2dzIGFwcGxpYW5jZSBob3N0XG4gICAqIEBSZXR1cm46IEFjdGlvblJlc3BvbnNlXG4gICAqL1xuICBnZXRMb2dzKGlkPzogc3RyaW5nLCBmcm9tPzogbnVtYmVyLCB0bz86IG51bWJlciwgY29tcG9uZW50Pzogc3RyaW5nW10pIHtcbiAgICBjb25zdCBwYXJhbXMgPSBuZXcgQXJyYXkoKTtcdFx0XG4gICAgaWYgKGZyb20gIT0gbnVsbCkgeyBwYXJhbXMucHVzaChgZnJvbT0ke2Zyb219YCk7IH1cbiAgICBpZiAodG8gIT0gbnVsbCkgeyBwYXJhbXMucHVzaChgdG89JHt0b31gKTsgfVxuICAgIGlmIChjb21wb25lbnQgIT0gbnVsbCkgeyBwYXJhbXMucHVzaChgY29tcG9uZW50PSR7Y29tcG9uZW50fWApOyB9XG5cblx0XHRyZXR1cm4gdGhpcy5yZXN0LnBvc3QoYCR7dGhpcy5iYXNlVXJsfS8ke2lkfS9sb2dzYCwgbnVsbCwgLi4ucGFyYW1zKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBEZWxldGUgYXBwbGlhbmNlIGZyb20gdGhlIHN5c3RlbSBhbmQgZGV0YWNoIGFsbCBpdCdzIHJlbGF0ZWQgc2Vuc29yc1xuICAgKiBJZiB0aGUgYXBwbGlhbmNlIGhhcyBjb25uZWN0ZWQgY2FtZXJhcywgdGhleSB3aWxsIGFsbCBiZSBjb252ZXJ0ZWQgdG8gdW5yZWdpc3RlcmVkIC0gbWVhbmluZyB0aGV5IGFyZSBub3QgYXR0YWNoZWQgdG8gYW55IGRldmljZSBhbmQgdGhlaXIgc3RhdHVzIGlzIFNVU1BFTkRFRFxuICAgKiBVbnJlZ2lzdGVyZWQgY2FtZXJhcyBrZWVwcyBhbGwgdGhlaXIgc2V0dGluZ3MgYW5kIHJ1bGVzIGFuZCB0aGV5IGNhbiBiZSBhc3NpZ25lZCBsYXRlciB0byBhbm90aGVyIGRldmljZVxuICAgKiBAUmV0dXJuOiBBY3Rpb25SZXNwb25zZVxuICAgKi9cbiAgZGVsZXRlKGlkPzogc3RyaW5nKSB7XG4gICAgcmV0dXJuIHRoaXMucmVzdC5kZWxldGUoYCR7dGhpcy5iYXNlVXJsfS8ke2lkfWApO1xuICB9XG5cbiAgLyoqXG4gICAqIERlbGV0ZSBhcHBsaWFuY2UgZnJvbSB0aGUgc3lzdGVtIGluY2x1ZGluZyBhbGwgaXQncyByZWxhdGVkIHNlbnNvcnMgYW5kIHNlbnNvciBkYXRhIChydWxlcywgcHJlc2V0cywgYW5hbHlzaXMgLi4uKVxuICAgKiBAUmV0dXJuOiBBY3Rpb25SZXNwb25zZVxuICAgKi9cbiAgcHVyZ2UoaWQ/OiBzdHJpbmcpIHtcbiAgICByZXR1cm4gdGhpcy5yZXN0LmRlbGV0ZShgJHt0aGlzLmJhc2VVcmx9L3B1cmdlLyR7aWR9YCk7XG4gIH1cblxuICAvKipcbiAgICogRmluZCBsaXN0IG9mIGFwcGxpYW5jZSBjb21tYW5kcyBhbmQgZmlsdGVyXG4gICAqIEBSZXR1cm46IEVudGl0aWVzUmVzcG9uc2U8QXBwbGlhbmNlQ29tbWFuZD4gTGlzdCBvZiBhcHBsaWFuY2UgY29tbWFuZHNcbiAgICovXG4gIGdldENvbW1hbmRzKGlkPzogc3RyaW5nLCBzdGF0dXM/OiBDb21tYW5kU3RhdHVzQ29kZVtdLCBzb3J0Pzogc3RyaW5nLCBwYWdlPzogbnVtYmVyLCBwYWdlU2l6ZT86IG51bWJlcikge1xuICAgIGNvbnN0IHBhcmFtcyA9IG5ldyBBcnJheSgpO1x0XHRcbiAgICBpZiAoc3RhdHVzICE9IG51bGwpIHsgcGFyYW1zLnB1c2goYHN0YXR1cz0ke3N0YXR1c31gKTsgfVxuICAgIGlmIChzb3J0ICE9IG51bGwpIHsgcGFyYW1zLnB1c2goYHNvcnQ9JHtzb3J0fWApOyB9XG4gICAgaWYgKHBhZ2UgIT0gbnVsbCkgeyBwYXJhbXMucHVzaChgcGFnZT0ke3BhZ2V9YCk7IH1cbiAgICBpZiAocGFnZVNpemUgIT0gbnVsbCkgeyBwYXJhbXMucHVzaChgcGFnZVNpemU9JHtwYWdlU2l6ZX1gKTsgfVxuXG5cdFx0cmV0dXJuIHRoaXMucmVzdC5nZXQoYCR7dGhpcy5iYXNlVXJsfS8ke2lkfS9jb21tYW5kc2AsIC4uLnBhcmFtcyk7XG4gIH1cblxuICAvKipcbiAgICogRGVsZXRlIGNvbW1hbmRcbiAgICogQFJldHVybjogQWN0aW9uUmVzcG9uc2VcbiAgICovXG4gIGRlbGV0ZUNvbW1hbmQoY29tbWFuZElkPzogc3RyaW5nKSB7XG4gICAgcmV0dXJuIHRoaXMucmVzdC5kZWxldGUoYCR7dGhpcy5iYXNlVXJsfS9jb21tYW5kcy8ke2NvbW1hbmRJZH1gKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBHZXQgYXBwbGlhbmNlIHN0YXR1cyBoaXN0b3J5IG92ZXIgdGltZVxuICAgKiBAUmV0dXJuOiAgRW50aXR5UmVzcG9uc2U8QXBwbGlhbmNlU3RhdHVzVGltZVNlcmllcz5cbiAgICovXG4gIGdldFN0YXR1c092ZXJUaW1lKGlkPzogc3RyaW5nLCBmcm9tPzogbnVtYmVyLCB0bz86IG51bWJlcikge1xuICAgIGNvbnN0IHBhcmFtcyA9IG5ldyBBcnJheSgpO1x0XHRcbiAgICBpZiAoZnJvbSAhPSBudWxsKSB7IHBhcmFtcy5wdXNoKGBmcm9tPSR7ZnJvbX1gKTsgfVxuICAgIGlmICh0byAhPSBudWxsKSB7IHBhcmFtcy5wdXNoKGB0bz0ke3RvfWApOyB9XG5cblx0XHRyZXR1cm4gdGhpcy5yZXN0LmdldChgJHt0aGlzLmJhc2VVcmx9LyR7aWR9L3N0YXR1cy9vdmVydGltZWAsIC4uLnBhcmFtcyk7XG4gIH1cblxuICAvKipcbiAgICogR2V0IGFwcGxpYW5jZSBLUEkgKEtleSBQZXJmb3JtYW5jZSBJbmRpY2F0b3JzKSBoaXN0b3J5IG92ZXIgdGltZSAoQ1BVLCBSQU0uIExPQUQpXG4gICAqIEBSZXR1cm46ICBFbnRpdHlSZXNwb25zZTxBcHBsaWFuY2VLUElzVGltZVNlcmllcz5cbiAgICovXG4gIGdldEtwaU92ZXJUaW1lKGlkPzogc3RyaW5nLCBmcm9tPzogbnVtYmVyLCB0bz86IG51bWJlcikge1xuICAgIGNvbnN0IHBhcmFtcyA9IG5ldyBBcnJheSgpO1x0XHRcbiAgICBpZiAoZnJvbSAhPSBudWxsKSB7IHBhcmFtcy5wdXNoKGBmcm9tPSR7ZnJvbX1gKTsgfVxuICAgIGlmICh0byAhPSBudWxsKSB7IHBhcmFtcy5wdXNoKGB0bz0ke3RvfWApOyB9XG5cblx0XHRyZXR1cm4gdGhpcy5yZXN0LmdldChgJHt0aGlzLmJhc2VVcmx9LyR7aWR9L2twaS9vdmVydGltZWAsIC4uLnBhcmFtcyk7XG4gIH1cblxuICAvKipcbiAgICogQWdncmVnYXRlIGFwcGxpYW5jZXMgY291bnQgZGlzdHJpYnV0aW9uIGJ5IHN0YXR1c1xuICAgKiBAUmV0dXJuOiAgRW50aXR5UmVzcG9uc2U8RGlzdHJpYnV0aW9uT2ZMb25nPlxuICAgKi9cbiAgZ2V0QXBwbGlhbmNlc0NvdW50QnlTdGF0dXMoZm9sZGVySWQ/OiBzdHJpbmcsIHN1YkZvbGRlcnM/OiBib29sZWFuKSB7XG4gICAgY29uc3QgcGFyYW1zID0gbmV3IEFycmF5KCk7XHRcdFxuICAgIGlmIChmb2xkZXJJZCAhPSBudWxsKSB7IHBhcmFtcy5wdXNoKGBmb2xkZXJJZD0ke2ZvbGRlcklkfWApOyB9XG4gICAgaWYgKHN1YkZvbGRlcnMgIT0gbnVsbCkgeyBwYXJhbXMucHVzaChgc3ViRm9sZGVycz0ke3N1YkZvbGRlcnN9YCk7IH1cblxuXHRcdHJldHVybiB0aGlzLnJlc3QuZ2V0KGAke3RoaXMuYmFzZVVybH0vY291bnQvYnktc3RhdHVzYCwgLi4ucGFyYW1zKTtcbiAgfVxuXG59XG4iXX0=