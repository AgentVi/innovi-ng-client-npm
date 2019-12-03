import { RestUtil } from '../../utils/rest-util';
import { CoreConfig } from '../../config';
import { StreamTypeCode } from '../enums/StreamTypeCode';
import { SensorTypeCode } from '../enums/SensorTypeCode';
import { SensorStatusCode } from '../enums/SensorStatusCode';
/**
 * Services for sensor actions for system administrator only
 * @RequestHeader X-API-KEY The key to identify the application (portal)
 * @RequestHeader X-ACCESS-TOKEN The token to identify the logged-in user
 */
export declare class SysSensorsService {
    private config;
    private rest;
    private baseUrl;
    /**
     * Class constructor
     */
    constructor(config: CoreConfig, rest: RestUtil);
    /**
     * Get single sensor by id
     * @Return: EntityResponse<Sensor>
     */
    get(id?: string): import("rxjs").Observable<any>;
    /**
     * Find sensors by filters
     * @Return: QueryResponse<Sensor>
     */
    find(accountId?: string, folderId?: string, subFolders?: boolean, search?: string, type?: SensorTypeCode[], status?: SensorStatusCode[], stream?: StreamTypeCode[], sort?: string, page?: number, pageSize?: number): import("rxjs").Observable<any>;
    /**
     * Get single sensor health by sensor id
     * @Return: EntityResponse<SensorStatus>
     */
    getSensorHealthStatus(id?: string): import("rxjs").Observable<any>;
    /**
     * Get all sensors health status
     * @Return: EntitiesResponse<SensorStatus>
     */
    getSensorsHealthStatus(): import("rxjs").Observable<any>;
    /**
     * Get sensor status history over time
     * @Return:  EntityResponse<SensorStatusTimeSeries>
     */
    getStatusOverTime(id?: string, from?: number, to?: number): import("rxjs").Observable<any>;
}
