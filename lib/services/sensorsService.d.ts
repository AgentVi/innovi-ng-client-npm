import { RestUtil } from '../../utils/rest-util';
import { CoreConfig } from '../../config';
import { Coordinate } from '../common/Coordinate';
import { FovGeoAttributes } from '../common/FovGeoAttributes';
import { SensorStatusCode } from '../enums/SensorStatusCode';
import { SensorTypeCode } from '../enums/SensorTypeCode';
import { StreamTypeCode } from '../enums/StreamTypeCode';
import { Sensor } from '../entities/Sensor';
/**
 * Services for sensor actions
 * @RequestHeader X-API-KEY The key to identify the application (portal)
 * @RequestHeader X-ACCESS-TOKEN The token to identify the logged-in user
 */
export declare class SensorsService {
    private config;
    private rest;
    private baseUrl;
    /**
     * Class constructor
     */
    constructor(config: CoreConfig, rest: RestUtil);
    /**
     * Create new sensor
     * @Return: EntityResponse<Sensor>
     */
    create(body?: Sensor): import("rxjs").Observable<any>;
    /**
     * Update sensor parameters
     * @Return: EntityResponse<Sensor>
     */
    update(id?: string, body?: Sensor): import("rxjs").Observable<any>;
    /**
     * Change sensor name
     * @Return: EntityResponse<Sensor>
     */
    changeName(id?: string, body?: string): import("rxjs").Observable<any>;
    /**
     * Change sensor parent folder id
     * @Return: EntityResponse<Sensor>
     */
    changeFolder(id?: string, folderId?: string): import("rxjs").Observable<any>;
    /**
     * Change sensor geo-location
     * @Return: EntityResponse<Sensor>
     */
    changeGeoLocation(id?: string, body?: Coordinate): import("rxjs").Observable<any>;
    /**
     * Change sensor field of view transformation attributes
     * @Return: EntityResponse<Sensor>
     */
    changeFovAttributes(id?: string, azimuth?: number, body?: FovGeoAttributes): import("rxjs").Observable<any>;
    /**
     * Change sensor status
     * @Return: EntityResponse<Sensor>
     */
    changeStatus(id?: string, status?: SensorStatusCode): import("rxjs").Observable<any>;
    /**
     * Delete sensor from the system
     * @Return: ActionResponse
     */
    delete(id?: string): import("rxjs").Observable<any>;
    /**
     * Get single sensor by id
     * @Return: EntityResponse<Sensor>
     */
    get(id?: string): import("rxjs").Observable<any>;
    /**
     * Get sensors by list of ids
     * @Return: EntitiesResponse<Sensor>
     */
    list(id?: string[]): import("rxjs").Observable<any>;
    /**
     * Find sensors by filters
     * @Return: QueryResponse<Sensor>
     */
    find(folderId?: string, subFolders?: boolean, search?: string, type?: SensorTypeCode[], status?: SensorStatusCode[], stream?: StreamTypeCode[], sort?: string, page?: number, pageSize?: number): import("rxjs").Observable<any>;
    /**
     * Get sensor reference image [response content type: image/jpeg]
     * @Return: StreamingOutput of the reference image
     */
    getRefImage(id?: string): import("rxjs").Observable<any>;
    /**
     * Set sensor reference image [put binary image in body with content type: image/jpeg]
     * @Return: ActionResponse
     */
    setRefImage(id?: string, body?: string): import("rxjs").Observable<any>;
    /**
     * Get default geo location
     * @Return: EntityResponse<Coordinate>
     */
    getDefaultLocation(id?: string): import("rxjs").Observable<any>;
    /**
     * Get single sensor health by sensor id
     * @Return: EntityResponse<SensorHealth>
     */
    getSensorHealthStatus(id?: string): import("rxjs").Observable<any>;
    /**
     * Get all sensors health status
     * @Return: EntitiesResponse<SensorHealth>
     */
    getSensorsHealthStatus(): import("rxjs").Observable<any>;
    /**
     * Get sensor status history over time
     * @Return:  EntityResponse<SensorStatusTimeSeries>
     */
    getStatusOverTime(id?: string, from?: number, to?: number): import("rxjs").Observable<any>;
}
