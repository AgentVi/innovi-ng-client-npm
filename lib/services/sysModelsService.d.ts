import { RestUtil } from '../../utils/rest-util';
import { CoreConfig } from '../../config';
import { DetectionModel } from '../entities/DetectionModel';
import * as i0 from "@angular/core";
/**
 * List of all detection models related actions for system administrator only
 * @RequestHeader X-API-KEY The key to identify the application (portal)
 * @RequestHeader X-ACCESS-TOKEN The token to identify the logged-in user
 */
export declare class SysModelsService {
    private config;
    private rest;
    private baseUrl;
    /**
     * Class constructor
     */
    constructor(config: CoreConfig, rest: RestUtil);
    /**
     * Create new Detection Model
     * @Return: EntityResponse<DetectionModel>
     */
    create(body?: DetectionModel): import("rxjs").Observable<any>;
    /**
     * Update new Detection Model
     * @Return: EntityResponse<DetectionModel>
     */
    update(body?: DetectionModel): import("rxjs").Observable<any>;
    /**
     * Delete Detection Model
     * @Return: ActionResponse
     */
    delete(id?: string): import("rxjs").Observable<any>;
    /**
     * Get single Detection Model by id
     * @Return: EntityResponse<DetectionModel>
     */
    get(id?: string): import("rxjs").Observable<any>;
    /**
     * Get list of all detection models
     * @Return: EntitiesResponse<DetectionModel>
     */
    find(): import("rxjs").Observable<any>;
    /**
     * Get list of all detection models per sensor
     * @Return: EntitiesResponse<DetectionModel>
     */
    getSensorModels(sensorId?: string): import("rxjs").Observable<any>;
    /**
     * Add detection model to sensor
     * @Return: ActionResponse
     */
    addSensorModels(sensorId?: string, id?: string[]): import("rxjs").Observable<any>;
    /**
     * Remove detection model from sensor
     * @Return: ActionResponse
     */
    removeSensorModels(sensorId?: string, id?: string[]): import("rxjs").Observable<any>;
    static ɵfac: i0.ɵɵFactoryDeclaration<SysModelsService, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<SysModelsService>;
}
