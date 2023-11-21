import { RestUtil } from '../../utils/rest-util';
import { CoreConfig } from '../../config';
import { StreamTypeCode } from '../enums/StreamTypeCode';
import { Appliance } from '../entities/Appliance';
import { CommandStatusCode } from '../enums/CommandStatusCode';
import { SensorStatusCode } from '../enums/SensorStatusCode';
import { Sensor } from '../entities/Sensor';
import { ApplianceRegistration } from '../common/ApplianceRegistration';
import { ProductTypeCode } from '../enums/ProductTypeCode';
import { ApplianceStatusCode } from '../enums/ApplianceStatusCode';
import { AgentStatusCode } from '../enums/AgentStatusCode';
import { SensorTypeCode } from '../enums/SensorTypeCode';
import * as i0 from "@angular/core";
/**
 * List of appliance related actions
 * @RequestHeader X-API-KEY The key to identify the application (portal)
 * @RequestHeader X-ACCESS-TOKEN The token to identify the logged-in user
 */
export declare class AppliancesService {
    private config;
    private rest;
    private baseUrl;
    /**
     * Class constructor
     */
    constructor(config: CoreConfig, rest: RestUtil);
    /**
     * Find list of appliances and filter
     * @Return: QueryResponse<Appliance>
     */
    find(folderId?: string, subFolders?: boolean, search?: string, status?: ApplianceStatusCode[], agentStatus?: AgentStatusCode[], sort?: string, page?: number, pageSize?: number): import("rxjs").Observable<any>;
    /**
     * Export list of appliances and filter
     * @Return: StreamContent
     */
    exportFormat(folderId?: string, subFolders?: boolean, search?: string, status?: ApplianceStatusCode[], agentStatus?: AgentStatusCode[], sort?: string, format?: string, fields?: string[]): import("rxjs").Observable<import("@angular/common/http").HttpEvent<Blob>>;
    /**
     * Get single appliance by id
     * @Return: EntityResponse<Appliance>
     */
    get(id?: string): import("rxjs").Observable<any>;
    /**
     * Get single appliance by machine id (across all system accounts)
     * @Return: EntityResponse<Appliance>
     */
    getByMachineId(machineId?: string): import("rxjs").Observable<any>;
    /**
     * Get all sensors assigned to the appliance (getSensors)
     * @Return: QueryResponse<Sensor>
     */
    findApplianceSensors(id?: string, search?: string, type?: SensorTypeCode[], status?: SensorStatusCode[], stream?: StreamTypeCode[], sort?: string, page?: number, pageSize?: number, format?: string, fields?: string[], fileName?: string): import("rxjs").Observable<any>;
    /**
     * Import sensors from CSV file
     * The file must include header with the columns:
     * @return ActionResponse
     */
    importSensors(id?: string, csvFile?: File): import("rxjs").Observable<import("@angular/common/http").HttpEvent<unknown>>;
    /**
     * Export appliance sensors to CSV file
     * @return StreamContent
     */
    exportSensors(id?: string, format?: string, fileName?: string): import("rxjs").Observable<import("@angular/common/http").HttpEvent<Blob>>;
    /**
     * Get all appliance agents
     * @Return: EntitiesResponse<Agent>
     */
    getApplianceAgents(id?: string): import("rxjs").Observable<any>;
    /**
     * Add new sensor and assigned it to a specific appliance
     * The sensor will be created with status PENDING, the status will be changed when the agent will establish connection to the proxy
     * @Return: EntityResponse<Sensor> The updated sensor
     */
    addApplianceSensor(id?: string, body?: Sensor): import("rxjs").Observable<any>;
    /**
     * Register new appliance in the system
     * @Return: EntityResponse<Appliance> The registered appliance
     */
    registerAppliance(id?: string, body?: ApplianceRegistration): import("rxjs").Observable<any>;
    /**
     * Get appliance runtime configuration components
     * @Return: EntitiesResponse<ComponentConfiguration>
     */
    getRuntimeConfiguration(id?: string): import("rxjs").Observable<any>;
    /**
     * Get list of appliance configurations for the specific product
     * @Return: EntitiesResponse<ApplianceConfiguration>
     */
    getConfigurations(target?: ProductTypeCode): import("rxjs").Observable<any>;
    /**
     * Get appliance configuration for the specific edge model
     * @Return: EntityResponse<ApplianceConfiguration>
     */
    getConfiguration(model?: string): import("rxjs").Observable<any>;
    /**
     * Get network channels using ONVIF discovery protocol
     * @Return: EntitiesResponse<ComponentConfiguration>
     */
    getOnvifDiscoveryList(id?: string): import("rxjs").Observable<any>;
    /**
     * Change appliance name
     * @Return: EntityResponse<Appliance>
     */
    changeName(id?: string, name?: string): import("rxjs").Observable<any>;
    /**
     * Update some appliance attributes (name, folder, configuration, integration)
     * @Return: EntityResponse<Appliance>
     */
    update(id?: string, body?: Appliance): import("rxjs").Observable<any>;
    /**
     * Change appliance folder
     * @Return: EntityResponse<Appliance>
     */
    changeFolder(id?: string, folderId?: string): import("rxjs").Observable<any>;
    /**
     * Change appliance machine Id (for VIRTUAL device only)
     * @Return: EntityResponse<Appliance> - Updated appliance
     */
    changeMachineId(id?: string, machineId?: string): import("rxjs").Observable<any>;
    /**
     * Change appliance configuration
     * @Return: EntityResponse<Appliance> - Updated appliance
     */
    changeConfiguration(id?: string, configId?: string, versionId?: string): import("rxjs").Observable<any>;
    /**
     * Send get capabilities command to the appliance and wait for response up to 60 seconds
     * @Return:  EntityResponse<Appliance>
     */
    getCapabilities(id?: string): import("rxjs").Observable<any>;
    /**
     * Send get network bandwidth speed test command to the appliance
     * @Return:  EntityResponse<Appliance>
     */
    getSpeedTest(id?: string): import("rxjs").Observable<any>;
    /**
     * Send reset credentials command to the appliance (reset to the factory default password)
     * @Return:  ActionResponse
     */
    resetPassword(id?: string): import("rxjs").Observable<any>;
    /**
     * Reboot appliance host
     * @Return: ActionResponse
     */
    reboot(id?: string): import("rxjs").Observable<any>;
    /**
     * Rebuild appliance configuration and deploy the configuration to the device manager
     * @Return: ActionResponse
     */
    redeploy(id?: string): import("rxjs").Observable<any>;
    /**
     * Get container logs appliance host
     * @Return: ActionResponse
     */
    getLogs(id?: string, from?: number, to?: number, component?: string[]): import("rxjs").Observable<any>;
    /**
     * Delete appliance from the system and detach all it's related sensors
     * If the appliance has connected cameras, they will all be converted to unregistered - meaning they are not attached to any device and their status is SUSPENDED
     * Unregistered cameras keeps all their settings and rules and they can be assigned later to another device
     * @Return: ActionResponse
     */
    delete(id?: string): import("rxjs").Observable<any>;
    /**
     * Delete appliance from the system including all it's related sensors and sensor data (rules, presets, analysis ...)
     * @Return: ActionResponse
     */
    purge(id?: string): import("rxjs").Observable<any>;
    /**
     * Find list of appliance commands and filter
     * @Return: EntitiesResponse<ApplianceCommand> List of appliance commands
     */
    getCommands(id?: string, status?: CommandStatusCode[], sort?: string, page?: number, pageSize?: number): import("rxjs").Observable<any>;
    /**
     * Delete command
     * @Return: ActionResponse
     */
    deleteCommand(commandId?: string): import("rxjs").Observable<any>;
    /**
     * Get appliance status history over time
     * @Return:  EntityResponse<ApplianceStatusTimeSeries>
     */
    getStatusOverTime(id?: string, from?: number, to?: number): import("rxjs").Observable<any>;
    /**
     * Get appliance status distribution over time (for pie chart)
     * @Return:  EntityResponse<DistributionOfLong>
     */
    getStatusDistribution(id?: string, from?: number, to?: number): import("rxjs").Observable<any>;
    /**
     * Get appliance KPI (Key Performance Indicators) history over time (CPU, RAM. LOAD)
     * @Return:  EntityResponse<ApplianceKPIsTimeSeries>
     */
    getKpiOverTime(id?: string, from?: number, to?: number): import("rxjs").Observable<any>;
    /**
     * Aggregate appliances count distribution by status
     * @Return:  EntityResponse<DistributionOfLong>
     */
    getAppliancesCountByStatus(folderId?: string, subFolders?: boolean): import("rxjs").Observable<any>;
    /**
     * Aggregate appliances count distribution by state
     * @Return:  EntityResponse<DistributionOfLong>
     */
    getAppliancesCountByState(folderId?: string, subFolders?: boolean): import("rxjs").Observable<any>;
    /**
     * Aggregate appliances count distribution by agent status
     * @Return:  EntityResponse<DistributionOfLong>
     */
    getAppliancesCountByAgentStatus(folderId?: string, subFolders?: boolean): import("rxjs").Observable<any>;
    /**
     * Aggregate appliances count distribution by agent state
     * @Return:  EntityResponse<DistributionOfLong>
     */
    getAppliancesCountByAgentState(folderId?: string, subFolders?: boolean): import("rxjs").Observable<any>;
    /**
     * Attach multiple sensors to the device
     * @Return: ActionResponse
     */
    bulkAttach(id?: string, sensorId?: string[]): import("rxjs").Observable<any>;
    /**
     * Detach multiple sensors from the device
     * @Return: ActionResponse
     */
    bulkDetach(id?: string, sensorId?: string[]): import("rxjs").Observable<any>;
    static ɵfac: i0.ɵɵFactoryDeclaration<AppliancesService, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<AppliancesService>;
}
