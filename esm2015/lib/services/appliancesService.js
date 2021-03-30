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
     * Get single appliance by machine id (across all system accounts)
     * @Return: EntityResponse<Appliance>
     */
    getByMachineId(machineId) {
        return this.rest.get(`${this.baseUrl}/machine/${machineId}`);
    }
    /**
     * Get all sensors assigned to the appliance (getSensors)
     * @Return: QueryResponse<Sensor>
     */
    findApplianceSensors(id, search, type, status, stream, sort, page, pageSize, format, fields, fileName) {
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
        if (fileName != null) {
            params.push(`fileName=${fileName}`);
        }
        return this.rest.get(`${this.baseUrl}/${id}/sensors`, ...params);
    }
    /**
     * Import sensors from CSV file
     * The file must include header with the columns:
     * @return ActionResponse
     */
    importSensors(id, csvFile) {
        return this.rest.upload(csvFile, `${this.baseUrl}/${id}/sensors/import`);
    }
    /**
     * Export appliance sensors to CSV file
     * @return StreamContent
     */
    exportSensors(id, format, fileName) {
        const params = new Array();
        if (format != null) {
            params.push(`format=${format}`);
        }
        if (fileName != null) {
            params.push(`fileName=${fileName}`);
        }
        return this.rest.download(`appliances`, `${this.baseUrl}/${id}/sensors/export`, ...params);
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
     * Send get network bandwidth speed test command to the appliance
     * @Return:  EntityResponse<Appliance>
     */
    getSpeedTest(id) {
        return this.rest.post(`${this.baseUrl}/${id}/speed-test`, null);
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
     * Get appliance status distribution over time (for pie chart)
     * @Return:  EntityResponse<DistributionOfLong>
     */
    getStatusDistribution(id, from, to) {
        const params = new Array();
        if (from != null) {
            params.push(`from=${from}`);
        }
        if (to != null) {
            params.push(`to=${to}`);
        }
        return this.rest.get(`${this.baseUrl}/${id}/status/distribution`, ...params);
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
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(AppliancesService, [{
        type: Injectable
    }], function () { return [{ type: i2.CoreConfig, decorators: [{
                type: Inject,
                args: ['config']
            }] }, { type: i1.RestUtil }]; }, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwbGlhbmNlc1NlcnZpY2UuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9uZy1jb3JlLWxpYi9zcmMvbGliL3NlcnZpY2VzL2FwcGxpYW5jZXNTZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ25ELE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSx1QkFBdUIsQ0FBQztBQUNqRCxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sY0FBYyxDQUFDOzs7O0FBYzFDOzs7O0dBSUc7QUFFSCxNQUFNLE9BQU8saUJBQWlCO0lBSzVCOztPQUVHO0lBQ0gsWUFBc0MsTUFBa0IsRUFBVSxJQUFjO1FBQTFDLFdBQU0sR0FBTixNQUFNLENBQVk7UUFBVSxTQUFJLEdBQUosSUFBSSxDQUFVO1FBTmhGLGlCQUFpQjtRQUNULFlBQU8sR0FBRyxhQUFhLENBQUM7UUFNOUIsSUFBSSxDQUFDLE9BQU8sR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDLEdBQUcsR0FBRyxJQUFJLENBQUMsT0FBTyxDQUFDO0lBQ2hELENBQUM7SUFHRDs7O09BR0c7SUFDSCxJQUFJLENBQUMsUUFBaUIsRUFBRSxVQUFvQixFQUFFLE1BQWUsRUFBRSxNQUE4QixFQUFFLFdBQStCLEVBQUUsSUFBYSxFQUFFLElBQWEsRUFBRSxRQUFpQjtRQUM3SyxNQUFNLE1BQU0sR0FBRyxJQUFJLEtBQUssRUFBRSxDQUFDO1FBQzNCLElBQUksUUFBUSxJQUFJLElBQUksRUFBRTtZQUFFLE1BQU0sQ0FBQyxJQUFJLENBQUMsWUFBWSxRQUFRLEVBQUUsQ0FBQyxDQUFDO1NBQUU7UUFDOUQsSUFBSSxVQUFVLElBQUksSUFBSSxFQUFFO1lBQUUsTUFBTSxDQUFDLElBQUksQ0FBQyxjQUFjLFVBQVUsRUFBRSxDQUFDLENBQUM7U0FBRTtRQUNwRSxJQUFJLE1BQU0sSUFBSSxJ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QyxJQUFJLENBQUMsY0FBYyxVQUFVLEVBQUUsQ0FBQyxDQUFDO1NBQUU7UUFFdEUsT0FBTyxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxHQUFHLElBQUksQ0FBQyxPQUFPLGtCQUFrQixFQUFFLEdBQUcsTUFBTSxDQUFDLENBQUM7SUFDbkUsQ0FBQzs7cUdBdFZVLGlCQUFpQixjQVFSLFFBQVE7NEVBUmpCLGlCQUFpQixXQUFqQixpQkFBaUI7dUZBQWpCLGlCQUFpQjtjQUQ3QixVQUFVOztzQkFTSSxNQUFNO3VCQUFDLFFBQVEiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlLCBJbmplY3QgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFJlc3RVdGlsIH0gZnJvbSAnLi4vLi4vdXRpbHMvcmVzdC11dGlsJztcbmltcG9ydCB7IENvcmVDb25maWcgfSBmcm9tICcuLi8uLi9jb25maWcnO1xuXG5pbXBvcnQgeyBTdHJlYW1UeXBlQ29kZSB9IGZyb20gJy4uL2VudW1zL1N0cmVhbVR5cGVDb2RlJztcbmltcG9ydCB7IEFwcGxpYW5jZSB9IGZyb20gJy4uL2VudGl0aWVzL0FwcGxpYW5jZSc7XG5pbXBvcnQgeyBBcHBsaWFuY2VTdGF0dXNDb2RlIH0gZnJvbSAnLi4vZW51bXMvQXBwbGlhbmNlU3RhdHVzQ29kZSc7XG5pbXBvcnQgeyBBZ2VudFN0YXR1c0NvZGUgfSBmcm9tICcuLi9lbnVtcy9BZ2VudFN0YXR1c0NvZGUnO1xuaW1wb3J0IHsgU2Vuc29yVHlwZUNvZGUgfSBmcm9tICcuLi9lbnVtcy9TZW5zb3JUeXBlQ29kZSc7XG5pbXBvcnQgeyBTZW5zb3JTdGF0dXNDb2RlIH0gZnJvbSAnLi4vZW51bXMvU2Vuc29yU3RhdHVzQ29kZSc7XG5pbXBvcnQgeyBTZW5zb3IgfSBmcm9tICcuLi9lbnRpdGllcy9TZW5zb3InO1xuaW1wb3J0IHsgQXBwbGlhbmNlUmVnaXN0cmF0aW9uIH0gZnJvbSAnLi4vY29tbW9uL0FwcGxpYW5jZVJlZ2lzdHJhdGlvbic7XG5pbXBvcnQgeyBQcm9kdWN0VHlwZUNvZGUgfSBmcm9tICcuLi9lbnVtcy9Qcm9kdWN0VHlwZUNvZGUnO1xuaW1wb3J0IHsgQ29tbWFuZFN0YXR1c0NvZGUgfSBmcm9tICcuLi9lbnVtcy9Db21tYW5kU3RhdHVzQ29kZSc7XG5cblxuLyoqXG4gKiBMaXN0IG9mIGFwcGxpYW5jZSByZWxhdGVkIGFjdGlvbnNcbiAqIEBSZXF1ZXN0SGVhZGVyIFgtQVBJLUtFWSBUaGUga2V5IHRvIGlkZW50aWZ5IHRoZSBhcHBsaWNhdGlvbiAocG9ydGFsKVxuICogQFJlcXVlc3RIZWFkZXIgWC1BQ0NFU1MtVE9LRU4gVGhlIHRva2VuIHRvIGlkZW50aWZ5IHRoZSBsb2dnZWQtaW4gdXNlciBcbiAqL1xuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIEFwcGxpYW5jZXNTZXJ2aWNlIHtcblxuICAvLyBVUkwgdG8gd2ViIGFwaVxuICBwcml2YXRlIGJhc2VVcmwgPSAnL2FwcGxpYW5jZXMnO1xuXG4gIC8qKlxuICAgKiBDbGFzcyBjb25zdHJ1Y3RvclxuICAgKi9cbiAgY29uc3RydWN0b3IoQEluamVjdCgnY29uZmlnJykgcHJpdmF0ZSBjb25maWc6IENvcmVDb25maWcsIHByaXZhdGUgcmVzdDogUmVzdFV0aWwpIHtcbiAgICB0aGlzLmJhc2VVcmwgPSB0aGlzLmNvbmZpZy5hcGkgKyB0aGlzLmJhc2VVcmw7XG4gIH1cblxuXG4gIC8qKlxuICAgKiBGaW5kIGxpc3Qgb2YgYXBwbGlhbmNlcyBhbmQgZmlsdGVyXG4gICAqIEBSZXR1cm46IFF1ZXJ5UmVzcG9uc2U8QXBwbGlhbmNlPlxuICAgKi9cbiAgZmluZChmb2xkZXJJZD86IHN0cmluZywgc3ViRm9sZGVycz86IGJvb2xlYW4sIHNlYXJjaD86IHN0cmluZywgc3RhdHVzPzogQXBwbGlhbmNlU3RhdHVzQ29kZVtdLCBhZ2VudFN0YXR1cz86IEFnZW50U3RhdHVzQ29kZVtdLCBzb3J0Pzogc3RyaW5nLCBwYWdlPzogbnVtYmVyLCBwYWdlU2l6ZT86IG51bWJlcikge1xuICAgIGNvbnN0IHBhcmFtcyA9IG5ldyBBcnJheSgpO1x0XHRcbiAgICBpZiAoZm9sZGVySWQgIT0gbnVsbCkgeyBwYXJhbXMucHVzaChgZm9sZGVySWQ9JHtmb2xkZXJJZH1gKTsgfVxuICAgIGlmIChzdWJGb2xkZXJzICE9IG51bGwpIHsgcGFyYW1zLnB1c2goYHN1YkZvbGRlcnM9JHtzdWJGb2xkZXJzfWApOyB9XG4gICAgaWYgKHNlYXJjaCAhPSBudWxsKSB7IHBhcmFtcy5wdXNoKGBzZWFyY2g9JHtzZWFyY2h9YCk7IH1cbiAgICBpZiAoc3RhdHVzICE9IG51bGwpIHsgcGFyYW1zLnB1c2goYHN0YXR1cz0ke3N0YXR1c31gKTsgfVxuICAgIGlmIChhZ2VudFN0YXR1cyAhPSBudWxsKSB7IHBhcmFtcy5wdXNoKGBhZ2VudFN0YXR1cz0ke2FnZW50U3RhdHVzfWApOyB9XG4gICAgaWYgKHNvcnQgIT0gbnVsbCkgeyBwYXJhbXMucHVzaChgc29ydD0ke3NvcnR9YCk7IH1cbiAgICBpZiAocGFnZSAhPSBudWxsKSB7IHBhcmFtcy5wdXNoKGBwYWdlPSR7cGFnZX1gKTsgfVxuICAgIGlmIChwYWdlU2l6ZSAhPSBudWxsKSB7IHBhcmFtcy5wdXNoKGBwYWdlU2l6ZT0ke3BhZ2VTaXplfWApOyB9XG5cblx0XHRyZXR1cm4gdGhpcy5yZXN0LmdldChgJHt0aGlzLmJhc2VVcmx9YCwgLi4ucGFyYW1zKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBFeHBvcnQgbGlzdCBvZiBhcHBsaWFuY2VzIGFuZCBmaWx0ZXJcbiAgICogQFJldHVybjogU3RyZWFtQ29udGVudFxuICAgKi9cbiAgZXhwb3J0Rm9ybWF0KGZvbGRlcklkPzogc3RyaW5nLCBzdWJGb2xkZXJzPzogYm9vbGVhbiwgc2VhcmNoPzogc3RyaW5nLCBzdGF0dXM/OiBBcHBsaWFuY2VTdGF0dXNDb2RlW10sIGFnZW50U3RhdHVzPzogQWdlbnRTdGF0dXNDb2RlW10sIHNvcnQ/OiBzdHJpbmcsIGZvcm1hdD86IHN0cmluZywgZmllbGRzPzogc3RyaW5nW10pIHtcbiAgICBjb25zdCBwYXJhbXMgPSBuZXcgQXJyYXkoKTtcdFx0XG4gICAgaWYgKGZvbGRlcklkICE9IG51bGwpIHsgcGFyYW1zLnB1c2goYGZvbGRlcklkPSR7Zm9sZGVySWR9YCk7IH1cbiAgICBpZiAoc3ViRm9sZGVycyAhPSBudWxsKSB7IHBhcmFtcy5wdXNoKGBzdWJGb2xkZXJzPSR7c3ViRm9sZGVyc31gKTsgfVxuICAgIGlmIChzZWFyY2ggIT0gbnVsbCkgeyBwYXJhbXMucHVzaChgc2VhcmNoPSR7c2VhcmNofWApOyB9XG4gICAgaWYgKHN0YXR1cyAhPSBudWxsKSB7IHBhcmFtcy5wdXNoKGBzdGF0dXM9JHtzdGF0dXN9YCk7IH1cbiAgICBpZiAoYWdlbnRTdGF0dXMgIT0gbnVsbCkgeyBwYXJhbXMucHVzaChgYWdlbnRTdGF0dXM9JHthZ2VudFN0YXR1c31gKTsgfVxuICAgIGlmIChzb3J0ICE9IG51bGwpIHsgcGFyYW1zLnB1c2goYHNvcnQ9JHtzb3J0fWApOyB9XG4gICAgaWYgKGZvcm1hdCAhPSBudWxsKSB7IHBhcmFtcy5wdXNoKGBmb3JtYXQ9JHtmb3JtYXR9YCk7IH1cbiAgICBpZiAoZmllbGRzICE9IG51bGwpIHsgcGFyYW1zLnB1c2goYGZpZWxkcz0ke2ZpZWxkc31gKTsgfVxuXG5cdFx0cmV0dXJuIHRoaXMucmVzdC5kb3dubG9hZChgYXBwbGlhbmNlc2AsYCR7dGhpcy5iYXNlVXJsfS9leHBvcnRgLCAuLi5wYXJhbXMpO1xuICB9XG5cbiAgLyoqXG4gICAqIEdldCBzaW5nbGUgYXBwbGlhbmNlIGJ5IGlkXG4gICAqIEBSZXR1cm46IEVudGl0eVJlc3BvbnNlPEFwcGxpYW5jZT5cbiAgICovXG4gIGdldChpZD86IHN0cmluZykge1xuICAgIHJldHVybiB0aGlzLnJlc3QuZ2V0KGAke3RoaXMuYmFzZVVybH0vJHtpZH1gKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBHZXQgc2luZ2xlIGFwcGxpYW5jZSBieSBtYWNoaW5lIGlkIChhY3Jvc3MgYWxsIHN5c3RlbSBhY2NvdW50cylcbiAgICogQFJldHVybjogRW50aXR5UmVzcG9uc2U8QXBwbGlhbmNlPlxuICAgKi9cbiAgZ2V0QnlNYWNoaW5lSWQobWFjaGluZUlkPzogc3RyaW5nKSB7XG4gICAgcmV0dXJuIHRoaXMucmVzdC5nZXQoYCR7dGhpcy5iYXNlVXJsfS9tYWNoaW5lLyR7bWFjaGluZUlkfWApO1xuICB9XG5cbiAgLyoqXG4gICAqIEdldCBhbGwgc2Vuc29ycyBhc3NpZ25lZCB0byB0aGUgYXBwbGlhbmNlIChnZXRTZW5zb3JzKVxuICAgKiBAUmV0dXJuOiBRdWVyeVJlc3BvbnNlPFNlbnNvcj5cbiAgICovXG4gIGZpbmRBcHBsaWFuY2VTZW5zb3JzKGlkPzogc3RyaW5nLCBzZWFyY2g/OiBzdHJpbmcsIHR5cGU/OiBTZW5zb3JUeXBlQ29kZVtdLCBzdGF0dXM/OiBTZW5zb3JTdGF0dXNDb2RlW10sIHN0cmVhbT86IFN0cmVhbVR5cGVDb2RlW10sIHNvcnQ/OiBzdHJpbmcsIHBhZ2U/OiBudW1iZXIsIHBhZ2VTaXplPzogbnVtYmVyLCBmb3JtYXQ/OiBzdHJpbmcsIGZpZWxkcz86IHN0cmluZ1tdLCBmaWxlTmFtZT86IHN0cmluZykge1xuICAgIGNvbnN0IHBhcmFtcyA9IG5ldyBBcnJheSgpO1x0XHRcbiAgICBpZiAoc2VhcmNoICE9IG51bGwpIHsgcGFyYW1zLnB1c2goYHNlYXJjaD0ke3NlYXJjaH1gKTsgfVxuICAgIGlmICh0eXBlICE9IG51bGwpIHsgcGFyYW1zLnB1c2goYHR5cGU9JHt0eXBlfWApOyB9XG4gICAgaWYgKHN0YXR1cyAhPSBudWxsKSB7IHBhcmFtcy5wdXNoKGBzdGF0dXM9JHtzdGF0dXN9YCk7IH1cbiAgICBpZiAoc3RyZWFtICE9IG51bGwpIHsgcGFyYW1zLnB1c2goYHN0cmVhbT0ke3N0cmVhbX1gKTsgfVxuICAgIGlmIChzb3J0ICE9IG51bGwpIHsgcGFyYW1zLnB1c2goYHNvcnQ9JHtzb3J0fWApOyB9XG4gICAgaWYgKHBhZ2UgIT0gbnVsbCkgeyBwYXJhbXMucHVzaChgcGFnZT0ke3BhZ2V9YCk7IH1cbiAgICBpZiAocGFnZVNpemUgIT0gbnVsbCkgeyBwYXJhbXMucHVzaChgcGFnZVNpemU9JHtwYWdlU2l6ZX1gKTsgfVxuICAgIGlmIChmb3JtYXQgIT0gbnVsbCkgeyBwYXJhbXMucHVzaChgZm9ybWF0PSR7Zm9ybWF0fWApOyB9XG4gICAgaWYgKGZpZWxkcyAhPSBudWxsKSB7IHBhcmFtcy5wdXNoKGBmaWVsZHM9JHtmaWVsZHN9YCk7IH1cbiAgICBpZiAoZmlsZU5hbWUgIT0gbnVsbCkgeyBwYXJhbXMucHVzaChgZmlsZU5hbWU9JHtmaWxlTmFtZX1gKTsgfVxuXG5cdFx0cmV0dXJuIHRoaXMucmVzdC5nZXQoYCR7dGhpcy5iYXNlVXJsfS8ke2lkfS9zZW5zb3JzYCwgLi4ucGFyYW1zKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBJbXBvcnQgc2Vuc29ycyBmcm9tIENTViBmaWxlXG4gICAqIFRoZSBmaWxlIG11c3QgaW5jbHVkZSBoZWFkZXIgd2l0aCB0aGUgY29sdW1uczpcbiAgICogQHJldHVybiBBY3Rpb25SZXNwb25zZVxuICAgKi9cbiAgaW1wb3J0U2Vuc29ycyhpZD86IHN0cmluZywgY3N2RmlsZT86IEZpbGUpIHtcbiAgICByZXR1cm4gdGhpcy5yZXN0LnVwbG9hZChjc3ZGaWxlLGAke3RoaXMuYmFzZVVybH0vJHtpZH0vc2Vuc29ycy9pbXBvcnRgKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBFeHBvcnQgYXBwbGlhbmNlIHNlbnNvcnMgdG8gQ1NWIGZpbGVcbiAgICogQHJldHVybiBTdHJlYW1Db250ZW50XG4gICAqL1xuICBleHBvcnRTZW5zb3JzKGlkPzogc3RyaW5nLCBmb3JtYXQ/OiBzdHJpbmcsIGZpbGVOYW1lPzogc3RyaW5nKSB7XG4gICAgY29uc3QgcGFyYW1zID0gbmV3IEFycmF5KCk7XHRcdFxuICAgIGlmIChmb3JtYXQgIT0gbnVsbCkgeyBwYXJhbXMucHVzaChgZm9ybWF0PSR7Zm9ybWF0fWApOyB9XG4gICAgaWYgKGZpbGVOYW1lICE9IG51bGwpIHsgcGFyYW1zLnB1c2goYGZpbGVOYW1lPSR7ZmlsZU5hbWV9YCk7IH1cblxuXHRcdHJldHVybiB0aGlzLnJlc3QuZG93bmxvYWQoYGFwcGxpYW5jZXNgLGAke3RoaXMuYmFzZVVybH0vJHtpZH0vc2Vuc29ycy9leHBvcnRgLCAuLi5wYXJhbXMpO1xuICB9XG5cbiAgLyoqXG4gICAqIEdldCBhbGwgYXBwbGlhbmNlIGFnZW50c1xuICAgKiBAUmV0dXJuOiBFbnRpdGllc1Jlc3BvbnNlPEFnZW50PlxuICAgKi9cbiAgZ2V0QXBwbGlhbmNlQWdlbnRzKGlkPzogc3RyaW5nKSB7XG4gICAgcmV0dXJuIHRoaXMucmVzdC5nZXQoYCR7dGhpcy5iYXNlVXJsfS8ke2lkfS9hZ2VudHNgKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBBZGQgbmV3IHNlbnNvciBhbmQgYXNzaWduZWQgaXQgdG8gYSBzcGVjaWZpYyBhcHBsaWFuY2VcbiAgICogVGhlIHNlbnNvciB3aWxsIGJlIGNyZWF0ZWQgd2l0aCBzdGF0dXMgUEVORElORywgdGhlIHN0YXR1cyB3aWxsIGJlIGNoYW5nZWQgd2hlbiB0aGUgYWdlbnQgd2lsbCBlc3RhYmxpc2ggY29ubmVjdGlvbiB0byB0aGUgcHJveHlcbiAgICogQFJldHVybjogRW50aXR5UmVzcG9uc2U8U2Vuc29yPiBUaGUgdXBkYXRlZCBzZW5zb3JcbiAgICovXG4gIGFkZEFwcGxpYW5jZVNlbnNvcihpZD86IHN0cmluZywgYm9keT86IFNlbnNvcikge1xuICAgIHJldHVybiB0aGlzLnJlc3QucG9zdChgJHt0aGlzLmJhc2VVcmx9LyR7aWR9L3NlbnNvcnNgLCB0eXBlb2YgYm9keSA9PT0gJ29iamVjdCcgPyBKU09OLnN0cmluZ2lmeShib2R5KSA6IGJvZHkpO1xuICB9XG5cbiAgLyoqXG4gICAqIFJlZ2lzdGVyIG5ldyBhcHBsaWFuY2UgaW4gdGhlIHN5c3RlbVxuICAgKiBAUmV0dXJuOiBFbnRpdHlSZXNwb25zZTxBcHBsaWFuY2U+IFRoZSByZWdpc3RlcmVkIGFwcGxpYW5jZVxuICAgKi9cbiAgcmVnaXN0ZXJBcHBsaWFuY2UoaWQ/OiBzdHJpbmcsIGJvZHk/OiBBcHBsaWFuY2VSZWdpc3RyYXRpb24pIHtcbiAgICByZXR1cm4gdGhpcy5yZXN0LnBvc3QoYCR7dGhpcy5iYXNlVXJsfS9yZWdpc3RlcmAsIHR5cGVvZiBib2R5ID09PSAnb2JqZWN0JyA/IEpTT04uc3RyaW5naWZ5KGJvZHkpIDogYm9keSk7XG4gIH1cblxuICAvKipcbiAgICogR2V0IGFwcGxpYW5jZSBydW50aW1lIGNvbmZpZ3VyYXRpb24gY29tcG9uZW50c1xuICAgKiBAUmV0dXJuOiBFbnRpdGllc1Jlc3BvbnNlPENvbXBvbmVudENvbmZpZ3VyYXRpb24+XG4gICAqL1xuICBnZXRSdW50aW1lQ29uZmlndXJhdGlvbihpZD86IHN0cmluZykge1xuICAgIHJldHVybiB0aGlzLnJlc3QuZ2V0KGAke3RoaXMuYmFzZVVybH0vJHtpZH0vY29tcG9uZW50c2ApO1xuICB9XG5cbiAgLyoqXG4gICAqIEdldCBsaXN0IG9mIGFwcGxpYW5jZSBjb25maWd1cmF0aW9ucyBmb3IgdGhlIHNwZWNpZmljIHByb2R1Y3RcbiAgICogQFJldHVybjogRW50aXRpZXNSZXNwb25zZTxBcHBsaWFuY2VDb25maWd1cmF0aW9uPlxuICAgKi9cbiAgZ2V0Q29uZmlndXJhdGlvbnModGFyZ2V0PzogUHJvZHVjdFR5cGVDb2RlKSB7XG4gICAgcmV0dXJuIHRoaXMucmVzdC5nZXQoYCR7dGhpcy5iYXNlVXJsfS9jb25maWd1cmF0aW9ucy8ke3RhcmdldH1gKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBHZXQgYXBwbGlhbmNlIGNvbmZpZ3VyYXRpb24gZm9yIHRoZSBzcGVjaWZpYyBlZGdlIG1vZGVsXG4gICAqIEBSZXR1cm46IEVudGl0eVJlc3BvbnNlPEFwcGxpYW5jZUNvbmZpZ3VyYXRpb24+XG4gICAqL1xuICBnZXRDb25maWd1cmF0aW9uKG1vZGVsPzogc3RyaW5nKSB7XG4gICAgcmV0dXJuIHRoaXMucmVzdC5nZXQoYCR7dGhpcy5iYXNlVXJsfS9jb25maWd1cmF0aW9uLyR7bW9kZWx9YCk7XG4gIH1cblxuICAvKipcbiAgICogR2V0IG5ldHdvcmsgY2hhbm5lbHMgdXNpbmcgT05WSUYgZGlzY292ZXJ5IHByb3RvY29sXG4gICAqIEBSZXR1cm46IEVudGl0aWVzUmVzcG9uc2U8Q29tcG9uZW50Q29uZmlndXJhdGlvbj5cbiAgICovXG4gIGdldE9udmlmRGlzY292ZXJ5TGlzdChpZD86IHN0cmluZykge1xuICAgIHJldHVybiB0aGlzLnJlc3QuZ2V0KGAke3RoaXMuYmFzZVVybH0vJHtpZH0vZGlzY292ZXJ5YCk7XG4gIH1cblxuICAvKipcbiAgICogQ2hhbmdlIGFwcGxpYW5jZSBuYW1lXG4gICAqIEBSZXR1cm46IEVudGl0eVJlc3BvbnNlPEFwcGxpYW5jZT5cbiAgICovXG4gIGNoYW5nZU5hbWUoaWQ/OiBzdHJpbmcsIG5hbWU/OiBzdHJpbmcpIHtcbiAgICByZXR1cm4gdGhpcy5yZXN0LnB1dChgJHt0aGlzLmJhc2VVcmx9LyR7aWR9L25hbWUvJHtuYW1lfWAsIG51bGwpO1xuICB9XG5cbiAgLyoqXG4gICAqIFVwZGF0ZSBzb21lIGFwcGxpYW5jZSBhdHRyaWJ1dGVzIChuYW1lLCBmb2xkZXIsIGNvbmZpZ3VyYXRpb24sIGludGVncmF0aW9uKVxuICAgKiBAUmV0dXJuOiBFbnRpdHlSZXNwb25zZTxBcHBsaWFuY2U+XG4gICAqL1xuICB1cGRhdGUoaWQ/OiBzdHJpbmcsIGJvZHk/OiBBcHBsaWFuY2UpIHtcbiAgICByZXR1cm4gdGhpcy5yZXN0LnB1dChgJHt0aGlzLmJhc2VVcmx9LyR7aWR9YCwgdHlwZW9mIGJvZHkgPT09ICdvYmplY3QnID8gSlNPTi5zdHJpbmdpZnkoYm9keSkgOiBib2R5KTtcbiAgfVxuXG4gIC8qKlxuICAgKiBDaGFuZ2UgYXBwbGlhbmNlIGZvbGRlclxuICAgKiBAUmV0dXJuOiBFbnRpdHlSZXNwb25zZTxBcHBsaWFuY2U+XG4gICAqL1xuICBjaGFuZ2VGb2xkZXIoaWQ/OiBzdHJpbmcsIGZvbGRlcklkPzogc3RyaW5nKSB7XG4gICAgcmV0dXJuIHRoaXMucmVzdC5wdXQoYCR7dGhpcy5iYXNlVXJsfS8ke2lkfS9mb2xkZXIvJHtmb2xkZXJJZH1gLCBudWxsKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBDaGFuZ2UgYXBwbGlhbmNlIG1hY2hpbmUgSWQgKGZvciBWSVJUVUFMIGRldmljZSBvbmx5KVxuICAgKiBAUmV0dXJuOiBFbnRpdHlSZXNwb25zZTxBcHBsaWFuY2U+IC0gVXBkYXRlZCBhcHBsaWFuY2VcbiAgICovXG4gIGNoYW5nZU1hY2hpbmVJZChpZD86IHN0cmluZywgbWFjaGluZUlkPzogc3RyaW5nKSB7XG4gICAgcmV0dXJuIHRoaXMucmVzdC5wdXQoYCR7dGhpcy5iYXNlVXJsfS8ke2lkfS9tYWNoaW5lLyR7bWFjaGluZUlkfWAsIG51bGwpO1xuICB9XG5cbiAgLyoqXG4gICAqIENoYW5nZSBhcHBsaWFuY2UgY29uZmlndXJhdGlvblxuICAgKiBAUmV0dXJuOiBFbnRpdHlSZXNwb25zZTxBcHBsaWFuY2U+IC0gVXBkYXRlZCBhcHBsaWFuY2VcbiAgICovXG4gIGNoYW5nZUNvbmZpZ3VyYXRpb24oaWQ/OiBzdHJpbmcsIGNvbmZpZ0lkPzogc3RyaW5nLCB2ZXJzaW9uSWQ/OiBzdHJpbmcpIHtcbiAgICByZXR1cm4gdGhpcy5yZXN0LnB1dChgJHt0aGlzLmJhc2VVcmx9LyR7aWR9L2NvbmZpZy8ke2NvbmZpZ0lkfS8ke3ZlcnNpb25JZH1gLCBudWxsKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBTZW5kIGdldCBjYXBhYmlsaXRpZXMgY29tbWFuZCB0byB0aGUgYXBwbGlhbmNlIGFuZCB3YWl0IGZvciByZXNwb25zZSB1cCB0byA2MCBzZWNvbmRzXG4gICAqIEBSZXR1cm46ICBFbnRpdHlSZXNwb25zZTxBcHBsaWFuY2U+XG4gICAqL1xuICBnZXRDYXBhYmlsaXRpZXMoaWQ/OiBzdHJpbmcpIHtcbiAgICByZXR1cm4gdGhpcy5yZXN0LnBvc3QoYCR7dGhpcy5iYXNlVXJsfS8ke2lkfS9jYXBhYmlsaXRpZXNgLCBudWxsKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBTZW5kIGdldCBuZXR3b3JrIGJhbmR3aWR0aCBzcGVlZCB0ZXN0IGNvbW1hbmQgdG8gdGhlIGFwcGxpYW5jZVxuICAgKiBAUmV0dXJuOiAgRW50aXR5UmVzcG9uc2U8QXBwbGlhbmNlPlxuICAgKi9cbiAgZ2V0U3BlZWRUZXN0KGlkPzogc3RyaW5nKSB7XG4gICAgcmV0dXJuIHRoaXMucmVzdC5wb3N0KGAke3RoaXMuYmFzZVVybH0vJHtpZH0vc3BlZWQtdGVzdGAsIG51bGwpO1xuICB9XG5cbiAgLyoqXG4gICAqIFNlbmQgcmVzZXQgY3JlZGVudGlhbHMgY29tbWFuZCB0byB0aGUgYXBwbGlhbmNlIChyZXNldCB0byB0aGUgZmFjdG9yeSBkZWZhdWx0IHBhc3N3b3JkKVxuICAgKiBAUmV0dXJuOiAgQWN0aW9uUmVzcG9uc2VcbiAgICovXG4gIHJlc2V0UGFzc3dvcmQoaWQ/OiBzdHJpbmcpIHtcbiAgICByZXR1cm4gdGhpcy5yZXN0LnBvc3QoYCR7dGhpcy5iYXNlVXJsfS8ke2lkfS9yZXNldC1wYXNzd29yZGAsIG51bGwpO1xuICB9XG5cbiAgLyoqXG4gICAqIFJlYm9vdCBhcHBsaWFuY2UgaG9zdFxuICAgKiBAUmV0dXJuOiBBY3Rpb25SZXNwb25zZVxuICAgKi9cbiAgcmVib290KGlkPzogc3RyaW5nKSB7XG4gICAgcmV0dXJuIHRoaXMucmVzdC5wb3N0KGAke3RoaXMuYmFzZVVybH0vJHtpZH0vcmVib290YCwgbnVsbCk7XG4gIH1cblxuICAvKipcbiAgICogUmVidWlsZCBhcHBsaWFuY2UgY29uZmlndXJhdGlvbiBhbmQgZGVwbG95IHRoZSBjb25maWd1cmF0aW9uIHRvIHRoZSBkZXZpY2UgbWFuYWdlclxuICAgKiBAUmV0dXJuOiBBY3Rpb25SZXNwb25zZVxuICAgKi9cbiAgcmVkZXBsb3koaWQ/OiBzdHJpbmcpIHtcbiAgICByZXR1cm4gdGhpcy5yZXN0LnBvc3QoYCR7dGhpcy5iYXNlVXJsfS8ke2lkfS9yZWRlcGxveWAsIG51bGwpO1xuICB9XG5cbiAgLyoqXG4gICAqIEdldCBjb250YWluZXIgbG9ncyBhcHBsaWFuY2UgaG9zdFxuICAgKiBAUmV0dXJuOiBBY3Rpb25SZXNwb25zZVxuICAgKi9cbiAgZ2V0TG9ncyhpZD86IHN0cmluZywgZnJvbT86IG51bWJlciwgdG8/OiBudW1iZXIsIGNvbXBvbmVudD86IHN0cmluZ1tdKSB7XG4gICAgY29uc3QgcGFyYW1zID0gbmV3IEFycmF5KCk7XHRcdFxuICAgIGlmIChmcm9tICE9IG51bGwpIHsgcGFyYW1zLnB1c2goYGZyb209JHtmcm9tfWApOyB9XG4gICAgaWYgKHRvICE9IG51bGwpIHsgcGFyYW1zLnB1c2goYHRvPSR7dG99YCk7IH1cbiAgICBpZiAoY29tcG9uZW50ICE9IG51bGwpIHsgcGFyYW1zLnB1c2goYGNvbXBvbmVudD0ke2NvbXBvbmVudH1gKTsgfVxuXG5cdFx0cmV0dXJuIHRoaXMucmVzdC5wb3N0KGAke3RoaXMuYmFzZVVybH0vJHtpZH0vbG9nc2AsIG51bGwsIC4uLnBhcmFtcyk7XG4gIH1cblxuICAvKipcbiAgICogRGVsZXRlIGFwcGxpYW5jZSBmcm9tIHRoZSBzeXN0ZW0gYW5kIGRldGFjaCBhbGwgaXQncyByZWxhdGVkIHNlbnNvcnNcbiAgICogSWYgdGhlIGFwcGxpYW5jZSBoYXMgY29ubmVjdGVkIGNhbWVyYXMsIHRoZXkgd2lsbCBhbGwgYmUgY29udmVydGVkIHRvIHVucmVnaXN0ZXJlZCAtIG1lYW5pbmcgdGhleSBhcmUgbm90IGF0dGFjaGVkIHRvIGFueSBkZXZpY2UgYW5kIHRoZWlyIHN0YXR1cyBpcyBTVVNQRU5ERURcbiAgICogVW5yZWdpc3RlcmVkIGNhbWVyYXMga2VlcHMgYWxsIHRoZWlyIHNldHRpbmdzIGFuZCBydWxlcyBhbmQgdGhleSBjYW4gYmUgYXNzaWduZWQgbGF0ZXIgdG8gYW5vdGhlciBkZXZpY2VcbiAgICogQFJldHVybjogQWN0aW9uUmVzcG9uc2VcbiAgICovXG4gIGRlbGV0ZShpZD86IHN0cmluZykge1xuICAgIHJldHVybiB0aGlzLnJlc3QuZGVsZXRlKGAke3RoaXMuYmFzZVVybH0vJHtpZH1gKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBEZWxldGUgYXBwbGlhbmNlIGZyb20gdGhlIHN5c3RlbSBpbmNsdWRpbmcgYWxsIGl0J3MgcmVsYXRlZCBzZW5zb3JzIGFuZCBzZW5zb3IgZGF0YSAocnVsZXMsIHByZXNldHMsIGFuYWx5c2lzIC4uLilcbiAgICogQFJldHVybjogQWN0aW9uUmVzcG9uc2VcbiAgICovXG4gIHB1cmdlKGlkPzogc3RyaW5nKSB7XG4gICAgcmV0dXJuIHRoaXMucmVzdC5kZWxldGUoYCR7dGhpcy5iYXNlVXJsfS9wdXJnZS8ke2lkfWApO1xuICB9XG5cbiAgLyoqXG4gICAqIEZpbmQgbGlzdCBvZiBhcHBsaWFuY2UgY29tbWFuZHMgYW5kIGZpbHRlclxuICAgKiBAUmV0dXJuOiBFbnRpdGllc1Jlc3BvbnNlPEFwcGxpYW5jZUNvbW1hbmQ+IExpc3Qgb2YgYXBwbGlhbmNlIGNvbW1hbmRzXG4gICAqL1xuICBnZXRDb21tYW5kcyhpZD86IHN0cmluZywgc3RhdHVzPzogQ29tbWFuZFN0YXR1c0NvZGVbXSwgc29ydD86IHN0cmluZywgcGFnZT86IG51bWJlciwgcGFnZVNpemU/OiBudW1iZXIpIHtcbiAgICBjb25zdCBwYXJhbXMgPSBuZXcgQXJyYXkoKTtcdFx0XG4gICAgaWYgKHN0YXR1cyAhPSBudWxsKSB7IHBhcmFtcy5wdXNoKGBzdGF0dXM9JHtzdGF0dXN9YCk7IH1cbiAgICBpZiAoc29ydCAhPSBudWxsKSB7IHBhcmFtcy5wdXNoKGBzb3J0PSR7c29ydH1gKTsgfVxuICAgIGlmIChwYWdlICE9IG51bGwpIHsgcGFyYW1zLnB1c2goYHBhZ2U9JHtwYWdlfWApOyB9XG4gICAgaWYgKHBhZ2VTaXplICE9IG51bGwpIHsgcGFyYW1zLnB1c2goYHBhZ2VTaXplPSR7cGFnZVNpemV9YCk7IH1cblxuXHRcdHJldHVybiB0aGlzLnJlc3QuZ2V0KGAke3RoaXMuYmFzZVVybH0vJHtpZH0vY29tbWFuZHNgLCAuLi5wYXJhbXMpO1xuICB9XG5cbiAgLyoqXG4gICAqIERlbGV0ZSBjb21tYW5kXG4gICAqIEBSZXR1cm46IEFjdGlvblJlc3BvbnNlXG4gICAqL1xuICBkZWxldGVDb21tYW5kKGNvbW1hbmRJZD86IHN0cmluZykge1xuICAgIHJldHVybiB0aGlzLnJlc3QuZGVsZXRlKGAke3RoaXMuYmFzZVVybH0vY29tbWFuZHMvJHtjb21tYW5kSWR9YCk7XG4gIH1cblxuICAvKipcbiAgICogR2V0IGFwcGxpYW5jZSBzdGF0dXMgaGlzdG9yeSBvdmVyIHRpbWVcbiAgICogQFJldHVybjogIEVudGl0eVJlc3BvbnNlPEFwcGxpYW5jZVN0YXR1c1RpbWVTZXJpZXM+XG4gICAqL1xuICBnZXRTdGF0dXNPdmVyVGltZShpZD86IHN0cmluZywgZnJvbT86IG51bWJlciwgdG8/OiBudW1iZXIpIHtcbiAgICBjb25zdCBwYXJhbXMgPSBuZXcgQXJyYXkoKTtcdFx0XG4gICAgaWYgKGZyb20gIT0gbnVsbCkgeyBwYXJhbXMucHVzaChgZnJvbT0ke2Zyb219YCk7IH1cbiAgICBpZiAodG8gIT0gbnVsbCkgeyBwYXJhbXMucHVzaChgdG89JHt0b31gKTsgfVxuXG5cdFx0cmV0dXJuIHRoaXMucmVzdC5nZXQoYCR7dGhpcy5iYXNlVXJsfS8ke2lkfS9zdGF0dXMvb3ZlcnRpbWVgLCAuLi5wYXJhbXMpO1xuICB9XG5cbiAgLyoqXG4gICAqIEdldCBhcHBsaWFuY2Ugc3RhdHVzIGRpc3RyaWJ1dGlvbiBvdmVyIHRpbWUgKGZvciBwaWUgY2hhcnQpXG4gICAqIEBSZXR1cm46ICBFbnRpdHlSZXNwb25zZTxEaXN0cmlidXRpb25PZkxvbmc+XG4gICAqL1xuICBnZXRTdGF0dXNEaXN0cmlidXRpb24oaWQ/OiBzdHJpbmcsIGZyb20/OiBudW1iZXIsIHRvPzogbnVtYmVyKSB7XG4gICAgY29uc3QgcGFyYW1zID0gbmV3IEFycmF5KCk7XHRcdFxuICAgIGlmIChmcm9tICE9IG51bGwpIHsgcGFyYW1zLnB1c2goYGZyb209JHtmcm9tfWApOyB9XG4gICAgaWYgKHRvICE9IG51bGwpIHsgcGFyYW1zLnB1c2goYHRvPSR7dG99YCk7IH1cblxuXHRcdHJldHVybiB0aGlzLnJlc3QuZ2V0KGAke3RoaXMuYmFzZVVybH0vJHtpZH0vc3RhdHVzL2Rpc3RyaWJ1dGlvbmAsIC4uLnBhcmFtcyk7XG4gIH1cblxuICAvKipcbiAgICogR2V0IGFwcGxpYW5jZSBLUEkgKEtleSBQZXJmb3JtYW5jZSBJbmRpY2F0b3JzKSBoaXN0b3J5IG92ZXIgdGltZSAoQ1BVLCBSQU0uIExPQUQpXG4gICAqIEBSZXR1cm46ICBFbnRpdHlSZXNwb25zZTxBcHBsaWFuY2VLUElzVGltZVNlcmllcz5cbiAgICovXG4gIGdldEtwaU92ZXJUaW1lKGlkPzogc3RyaW5nLCBmcm9tPzogbnVtYmVyLCB0bz86IG51bWJlcikge1xuICAgIGNvbnN0IHBhcmFtcyA9IG5ldyBBcnJheSgpO1x0XHRcbiAgICBpZiAoZnJvbSAhPSBudWxsKSB7IHBhcmFtcy5wdXNoKGBmcm9tPSR7ZnJvbX1gKTsgfVxuICAgIGlmICh0byAhPSBudWxsKSB7IHBhcmFtcy5wdXNoKGB0bz0ke3RvfWApOyB9XG5cblx0XHRyZXR1cm4gdGhpcy5yZXN0LmdldChgJHt0aGlzLmJhc2VVcmx9LyR7aWR9L2twaS9vdmVydGltZWAsIC4uLnBhcmFtcyk7XG4gIH1cblxuICAvKipcbiAgICogQWdncmVnYXRlIGFwcGxpYW5jZXMgY291bnQgZGlzdHJpYnV0aW9uIGJ5IHN0YXR1c1xuICAgKiBAUmV0dXJuOiAgRW50aXR5UmVzcG9uc2U8RGlzdHJpYnV0aW9uT2ZMb25nPlxuICAgKi9cbiAgZ2V0QXBwbGlhbmNlc0NvdW50QnlTdGF0dXMoZm9sZGVySWQ/OiBzdHJpbmcsIHN1YkZvbGRlcnM/OiBib29sZWFuKSB7XG4gICAgY29uc3QgcGFyYW1zID0gbmV3IEFycmF5KCk7XHRcdFxuICAgIGlmIChmb2xkZXJJZCAhPSBudWxsKSB7IHBhcmFtcy5wdXNoKGBmb2xkZXJJZD0ke2ZvbGRlcklkfWApOyB9XG4gICAgaWYgKHN1YkZvbGRlcnMgIT0gbnVsbCkgeyBwYXJhbXMucHVzaChgc3ViRm9sZGVycz0ke3N1YkZvbGRlcnN9YCk7IH1cblxuXHRcdHJldHVybiB0aGlzLnJlc3QuZ2V0KGAke3RoaXMuYmFzZVVybH0vY291bnQvYnktc3RhdHVzYCwgLi4ucGFyYW1zKTtcbiAgfVxuXG59XG4iXX0=