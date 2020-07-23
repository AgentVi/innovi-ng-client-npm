import { RestUtil } from '../../utils/rest-util';
import { CoreConfig } from '../../config';
import { SensorTypeCode } from '../enums/SensorTypeCode';
import { SensorStatusCode } from '../enums/SensorStatusCode';
import { StreamTypeCode } from '../enums/StreamTypeCode';
import { ObjectTypeCode } from '../enums/ObjectTypeCode';
import * as i0 from "@angular/core";
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
    /**
     * Aggregate sensors count distribution by type
     * @Return:  EntityResponse<DistributionOfLong>
     */
    getSensorsCountByType(accountId?: string, folderId?: string, subFolders?: boolean, sensorType?: SensorTypeCode, status?: SensorStatusCode, streamType?: StreamTypeCode): import("rxjs").Observable<any>;
    /**
     * Aggregate sensors count distribution by stream type
     * @Return:  EntityResponse<DistributionOfLong>
     */
    getSensorsCountByStream(accountId?: string, folderId?: string, subFolders?: boolean, sensorType?: SensorTypeCode, status?: SensorStatusCode, streamType?: StreamTypeCode): import("rxjs").Observable<any>;
    /**
     * Aggregate sensors count distribution by status
     * @Return:  EntityResponse<DistributionOfLong>
     */
    getSensorsCountByStatus(accountId?: string, folderId?: string, subFolders?: boolean, sensorType?: SensorTypeCode, status?: SensorStatusCode, streamType?: StreamTypeCode): import("rxjs").Observable<any>;
    /**
     * Collect object crops from agents based on the query parameters
     * @Return:  ActionResponse
     */
    fetchObjectsCrops(from?: number, to?: number, accountId?: string[], sensorId?: string[], objectType?: ObjectTypeCode[], objectId?: string[], minConf?: number, maxConf?: number, bucketFolder?: string): import("rxjs").Observable<any>;
    static ɵfac: i0.ɵɵFactoryDef<SysSensorsService, never>;
    static ɵprov: i0.ɵɵInjectableDef<SysSensorsService>;
}
