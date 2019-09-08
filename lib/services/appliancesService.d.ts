import { RestUtil } from '../../utils/rest-util';
import { CoreConfig } from '../../config';
import { ApplianceRegistration } from '../common/ApplianceRegistration';
import { ProductTypeCode } from '../enums/ProductTypeCode';
import { CommandStatusCode } from '../enums/CommandStatusCode';
import { ApplianceStatusCode } from '../enums/ApplianceStatusCode';
import { SensorTypeCode } from '../enums/SensorTypeCode';
import { SensorStatusCode } from '../enums/SensorStatusCode';
import { StreamTypeCode } from '../enums/StreamTypeCode';
import { Sensor } from '../entities/Sensor';
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
    find(folderId?: string, subFolders?: boolean, search?: string, status?: ApplianceStatusCode[], sort?: string, page?: number, pageSize?: number): import("rxjs").Observable<any>;
    /**
     * Get single appliance by id
     * @Return: EntityResponse<Appliance>
     */
    get(id?: string): import("rxjs").Observable<any>;
    /**
     * Get all sensors assigned to the appliance (getSensors)
     * @Return: QueryResponse<Sensor>
     */
    findApplianceSensors(id?: string, search?: string, type?: SensorTypeCode[], status?: SensorStatusCode[], stream?: StreamTypeCode[], sort?: string, page?: number, pageSize?: number): import("rxjs").Observable<any>;
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
     * Change appliance name
     * @Return: EntityResponse<Appliance>
     */
    changeName(id?: string, name?: string): import("rxjs").Observable<any>;
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
     * Delete appliance from the system
     * @Return: ActionResponse
     */
    delete(id?: string): import("rxjs").Observable<any>;
    /**
     * Find list of appliance commands and filter
     * @Return: EntitiesResponse<ApplianceCommand> List of appliance commands
     */
    getCommands(accountId?: string, status?: CommandStatusCode[], sort?: string, page?: number, pageSize?: number): import("rxjs").Observable<any>;
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
}
