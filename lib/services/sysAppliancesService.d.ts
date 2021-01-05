import { RestUtil } from '../../utils/rest-util';
import { CoreConfig } from '../../config';
import { ApplianceRegistration } from '../common/ApplianceRegistration';
import { ApplianceStatusCode } from '../enums/ApplianceStatusCode';
import { AgentStatusCode } from '../enums/AgentStatusCode';
import { CommandStatusCode } from '../enums/CommandStatusCode';
import * as i0 from "@angular/core";
/**
 * List of appliance queries for system administrator only
 * @RequestHeader X-API-KEY The key to identify the application (console)
 * @RequestHeader X-ACCESS-TOKEN The token to identify the logged-in user
 */
export declare class SysAppliancesService {
    private config;
    private rest;
    private baseUrl;
    /**
     * Class constructor
     */
    constructor(config: CoreConfig, rest: RestUtil);
    /**
     * Register new appliance in the system
     * @Return: EntityResponse<Appliance> The registered appliance
     */
    registerAppliance(id?: string, body?: ApplianceRegistration): import("rxjs").Observable<any>;
    /**
     * Get single appliance by id
     * @Return: EntityResponse<Appliance>
     */
    get(id?: string): import("rxjs").Observable<any>;
    /**
     * Find list of appliances and filter
     * @Return: QueryResponse<Appliance>
     */
    find(accountId?: string, search?: string, status?: ApplianceStatusCode[], agentStatus?: AgentStatusCode[], sort?: string, page?: number, pageSize?: number): import("rxjs").Observable<any>;
    /**
     * Export list of appliances and filter
     * @Return: StreamContent
     */
    exportFormat(folderId?: string, subFolders?: boolean, search?: string, status?: ApplianceStatusCode[], agentStatus?: AgentStatusCode[], sort?: string, format?: string, fields?: string[]): import("rxjs").Subscription;
    /**
     * Delete appliance from the system
     * @Return: ActionResponse
     */
    delete(id?: string): import("rxjs").Observable<any>;
    /**
     * Reboot appliance host
     * @Return: ActionResponse
     */
    reboot(id?: string): import("rxjs").Observable<any>;
    /**
     * Open reverse SSH tunnel (for 60 minutes)
     * @Return: ActionResponse
     */
    openSsh(id?: string): import("rxjs").Observable<any>;
    /**
     * Close reverse SSH tunnel
     * @Return: ActionResponse
     */
    closeSsh(id?: string): import("rxjs").Observable<any>;
    /**
     * Rebuild appliance configuration and deploy the configuration to the device manager
     * @Return: ActionResponse
     */
    redeploy(id?: string): import("rxjs").Observable<any>;
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
     * Get all appliance agents
     * @Return: EntitiesResponse<Agent>
     */
    getApplianceAgents(id?: string): import("rxjs").Observable<any>;
    /**
     * Add agent to appliance
     * Agent can be added to virtual appliance only
     * @Return: EntityResponse<Agent>
     */
    addApplianceAgent(id?: string): import("rxjs").Observable<any>;
    /**
     * Delete agent from the system
     * Only virtual device agent can be deleted
     * @Return: ActionResponse
     */
    deleteApplianceAgent(id?: string, agentId?: string): import("rxjs").Observable<any>;
    /**
     * Find list of appliance commands and filter
     * @Return: EntitiesResponse<ApplianceCommand> List of appliance commands
     */
    getCommands(accountId?: string, applianceId?: string, status?: CommandStatusCode[]): import("rxjs").Observable<any>;
    /**
     * Update command status
     * @Return: ActionResponse
     */
    setCommandStatus(commandId?: string, status?: CommandStatusCode): import("rxjs").Observable<any>;
    /**
     * Delete command
     * @Return: ActionResponse
     */
    deleteCommand(id?: string, commandId?: string): import("rxjs").Observable<any>;
    /**
     * Delete all appliance commands
     * @Return: ActionResponse
     */
    deleteAllCommands(id?: string, agentId?: string): import("rxjs").Observable<any>;
    /**
     * Get appliance status history over time
     * @Return:  EntityResponse<ApplianceStatusTimeSeries>
     */
    getStatusOverTime(id?: string, from?: number, to?: number): import("rxjs").Observable<any>;
    /**
     * Get appliance KPI (Key Performance Indicators) history over time (CPU, RAM. LOAD)
     * @Return:  EntityResponse<ApplianceKPIsTimeSeries>
     */
    getKpiOverTime(id?: string, from?: number, to?: number): import("rxjs").Observable<any>;
    /**
     * Aggregate appliances count distribution by status
     * @Return:  EntityResponse<DistributionOfLong>
     */
    getAppliancesCountByStatus(accountId?: string, folderId?: string, subFolders?: boolean): import("rxjs").Observable<any>;
    /**
     * Send get capabilities command to the appliance and wait for response up to 60 seconds
     * @Return:  EntityResponse<Appliance>
     */
    getCapabilities(id?: string): import("rxjs").Observable<any>;
    /**
     * Send get logs command to the appliance
     * @Return:  ActionResponse
     */
    getLogs(id?: string, componentId?: string[], from?: number, to?: number): import("rxjs").Observable<any>;
    /**
     * Upgrade batch of appliances
     * @Return:  EntitiesResponse<UpdateStatus>
     */
    batchUpgrade(configId?: string, versionId?: string, id?: string[]): import("rxjs").Observable<any>;
    /**
     * Find list of device update status entries by filter
     * @Return:  QueryResponse<UpdateStatus>
     */
    findUpgradeStatus(accountId?: string, applianceId?: string, userId?: string, commandId?: string, batchId?: string, from?: number, to?: number, sort?: string, page?: number, pageSize?: number): import("rxjs").Observable<any>;
    /**
     * Find list of devices configurations (configured vs. actual)
     * @Return:  EntityResponse<ApplianceConfigReport>
     */
    findDevicesConfigurations(accountId?: string, search?: string, configId?: string, versionId?: string, unmatched?: boolean, page?: number, pageSize?: number): import("rxjs").Observable<any>;
    /**
     * Export list of devices configurations (configured vs. actual)
     * @Return:  StreamingOutput of the report file
     */
    exportDevicesConfigurations(accountId?: string, search?: string, configId?: string, versionId?: string, unmatched?: boolean, format?: string, fileName?: string): import("rxjs").Subscription;
    static ɵfac: i0.ɵɵFactoryDef<SysAppliancesService, never>;
    static ɵprov: i0.ɵɵInjectableDef<SysAppliancesService>;
}
