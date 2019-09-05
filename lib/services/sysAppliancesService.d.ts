import { RestUtil } from '../../utils/rest-util';
import { CoreConfig } from '../../core-config';
import { ApplianceStatusCode } from '../enums/ApplianceStatusCode';
import { CommandStatusCode } from '../enums/CommandStatusCode';
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
     * Get single appliance by id
     * @Return: EntityResponse<Appliance>
     */
    get(id?: string): import("rxjs").Observable<any>;
    /**
     * Find list of appliances and filter
     * @Return: QueryResponse<Appliance>
     */
    find(accountId?: string, search?: string, status?: ApplianceStatusCode[], sort?: string, page?: number, pageSize?: number): import("rxjs").Observable<any>;
    /**
     * Delete appliance from the system
     * @Return: ActionResponse
     */
    delete(id?: string): import("rxjs").Observable<any>;
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
    deleteCommand(commandId?: string): import("rxjs").Observable<any>;
}
