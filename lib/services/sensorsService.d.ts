import { RestUtil } from '../../utils/rest-util';
import { CoreConfig } from '../../config';
import { Sensor } from '../entities/Sensor';
import { SensorStatusCode } from '../enums/SensorStatusCode';
import { RulePolygon } from '../common/RulePolygon';
import { Preset } from '../entities/Preset';
import { SensorsGroup } from '../common/SensorsGroup';
import { Coordinate } from '../common/Coordinate';
import { FovGeoAttributes } from '../common/FovGeoAttributes';
import { SensorTypeCode } from '../enums/SensorTypeCode';
import { StreamTypeCode } from '../enums/StreamTypeCode';
import * as i0 from "@angular/core";
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
     * Create bulk of sensors with the same account Id, appliance Id and agent Id
     * @Return: EntitiesResponse<Sensor>
     */
    createBulk(body?: SensorsGroup): import("rxjs").Observable<any>;
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
     * Enable (activate) sensor
     * @Return: EntityResponse<Sensor>
     */
    enable(id?: string): import("rxjs").Observable<any>;
    /**
     * Disable (de-activate) sensor
     * @Return: EntityResponse<Sensor>
     */
    disable(id?: string): import("rxjs").Observable<any>;
    /**
     * Attach sensor to a device with the given appliance Id
     * This action enabled on already detached and SUSPENDED sensor
     * @Return: EntityResponse<Sensor>
     */
    attach(id?: string, applianceId?: string): import("rxjs").Observable<any>;
    /**
     * Detach sensor from a device and change it's status to SUSPENDED
     * This action remove the sensor from the device but keep the sensor and all its configuration and rules in the system
     * The sensor can be attached later to any other device in the system
     * @Return: EntityResponse<Sensor>
     */
    detach(id?: string): import("rxjs").Observable<any>;
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
     * Get sensors Ids by list of external ids
     * @Return: EntitiesResponse<StringKeyValue> (Key=ExternalId, Value=SensorId)
     */
    mapExternalIds(id?: string[]): import("rxjs").Observable<any>;
    /**
     * Find sensors by filters
     * @Return: QueryResponse<Sensor>
     */
    find(folderId?: string, subFolders?: boolean, applianceId?: string, physical?: boolean, search?: string, type?: SensorTypeCode[], status?: SensorStatusCode[], stream?: StreamTypeCode[], sort?: string, page?: number, pageSize?: number): import("rxjs").Observable<any>;
    /**
     * Export list of sensors and filter
     * @Return: StreamContent
     */
    exportFormat(folderId?: string, subFolders?: boolean, search?: string, type?: SensorTypeCode[], status?: SensorStatusCode[], stream?: StreamTypeCode[], sort?: string, format?: string, fields?: string[], fileName?: string): import("rxjs").Observable<import("@angular/common/http").HttpEvent<Blob>>;
    /**
     * Get single sensor preset data by id
     * @Return: EntityResponse<Preset>
     */
    getPreset(id?: string): import("rxjs").Observable<any>;
    /**
     * Set single sensor preset data
     * @Return: EntityResponse<Preset>
     */
    setPreset(id?: string, body?: Preset): import("rxjs").Observable<any>;
    /**
     * Reset single sensor preset back to the default
     * @Return: EntityResponse<Preset>
     */
    resetPreset(id?: string, body?: Preset): import("rxjs").Observable<any>;
    /**
     * Export single sensor preset (including calibration) as Json stream
     * @Return: Sensor preset Json as StreamContent
     */
    exportPreset(id?: string): import("rxjs").Observable<import("@angular/common/http").HttpEvent<Blob>>;
    /**
     * Get sensor reference image [response content type: image/jpeg]
     * @Return: StreamingOutput of the reference image
     */
    getRefImage(id?: string): import("rxjs").Observable<import("@angular/common/http").HttpEvent<Blob>>;
    /**
     * Clear sensor reference image
     * @Return: ActionResponse
     */
    clearRefImage(id?: string): import("rxjs").Observable<any>;
    /**
     * Get sensor reference image for a specific timestamp [response content type: image/jpeg]
     * @Return: StreamingOutput of the reference image
     */
    getRefImageAt(id?: string, timestamp?: string): import("rxjs").Observable<import("@angular/common/http").HttpEvent<Blob>>;
    /**
     * Get sensor reference image Url suffix
     * @Return: ActionResponse key is sensor Id and data is the URL suffix
     */
    getRefImageUrl(id?: string): import("rxjs").Observable<any>;
    /**
     * Set sensor reference image [put binary image in body with content type: image/jpeg]
     * @Return: ActionResponse
     */
    setRefImage(id?: string, body?: string): import("rxjs").Observable<any>;
    /**
     * Return a cropped Jpeg image out of sensor reference image for Asset Protection rule
     * @Return: ActionResponse - the encoded jpeg as base64 is in the data key
     */
    cropImage(id?: string, body?: RulePolygon): import("rxjs").Observable<any>;
    /**
     * Collect object crops from agents based on the query parameters
     * @Return: ActionResponse
     */
    fetchObjectCrops(id?: string, ts?: number[], objectId?: number[], bucketFolder?: string): import("rxjs").Observable<any>;
    /**
     * Get default geo location
     * @Return: EntityResponse<Coordinate>
     */
    getDefaultLocation(id?: string): import("rxjs").Observable<any>;
    /**
     * Get single sensor health by sensor id
     * REMOVED: Please use /sensors/{id} instead.
     * @Return: EntityResponse<SensorStatus>
     */
    getSensorHealthStatus(id?: string): import("rxjs").Observable<any>;
    /**
     * Get all sensors health status
     * REMOVED: Please use /sensors instead.
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
    getSensorsCountByType(folderId?: string, subFolders?: boolean, sensorType?: SensorTypeCode, status?: SensorStatusCode, streamType?: StreamTypeCode): import("rxjs").Observable<any>;
    /**
     * Aggregate sensors count distribution by stream type
     * @Return:  EntityResponse<DistributionOfLong>
     */
    getSensorsCountByStream(folderId?: string, subFolders?: boolean, sensorType?: SensorTypeCode, status?: SensorStatusCode, streamType?: StreamTypeCode): import("rxjs").Observable<any>;
    /**
     * Aggregate sensors count distribution by status
     * @Return:  EntityResponse<DistributionOfLong>
     */
    getSensorsCountByStatus(folderId?: string, subFolders?: boolean, sensorType?: SensorTypeCode, status?: SensorStatusCode, streamType?: StreamTypeCode): import("rxjs").Observable<any>;
    /**
     * Get list of all detection models available for the account
     * @Return: EntitiesResponse<DetectionModel>
     */
    getAllModels(): import("rxjs").Observable<any>;
    /**
     * Get list of all detection models per sensor
     * @Return: EntitiesResponse<DetectionModel>
     */
    getSensorModels(id?: string): import("rxjs").Observable<any>;
    /**
     * Add detection model to sensor
     * @Return: ActionResponse
     */
    addSensorModel(id?: string, modelId?: string): import("rxjs").Observable<any>;
    /**
     * Remove detection model from sensor
     * @Return: ActionResponse
     */
    removeSensorModel(id?: string, modelId?: string): import("rxjs").Observable<any>;
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
     * Add new sensor and assigned it to a specific appliance
     * The sensor will be created with status PENDING, the status will be changed when the agent will establish connection to the proxy
     * @Return: EntityResponse<Sensor> The updated sensor
     */
    addApplianceSensor(id?: string, body?: Sensor): import("rxjs").Observable<any>;
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
    static ɵfac: i0.ɵɵFactoryDeclaration<SensorsService, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<SensorsService>;
}
