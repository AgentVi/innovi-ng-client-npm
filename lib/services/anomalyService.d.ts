import { RestUtil } from '../../utils/rest-util';
import { CoreConfig } from '../../config';
import { SensorAnomalyRuleInfo } from '../common/SensorAnomalyRuleInfo';
import { Event } from '../entities/Event';
import { AnalysisResult } from '../common/AnalysisResult';
import { EventStatusCode } from '../enums/EventStatusCode';
import * as i0 from "@angular/core";
/**
 * List of anomaly related actions for the anomaly detection service
 * @RequestHeader X-API-KEY The key to identify the application (console)
 */
export declare class AnomalyService {
    private config;
    private rest;
    private baseUrl;
    /**
     * Class constructor
     */
    constructor(config: CoreConfig, rest: RestUtil);
    /**
     * Get training results of all sensors with anomaly enabled flag ordered by the last training time
     * @Return: QueryResponse<SensorAnalysisResults>
     */
    getSensorsAnalysisResults(page?: number, pageSize?: number): import("rxjs").Observable<any>;
    /**
     * Update sensor analysis results bach for a specific sensors
     * @Return: EntityResponse<SensorAnalysisResults>
     */
    update(sensorId?: string, body?: AnalysisResult): import("rxjs").Observable<any>;
    /**
     * Delete all analysis results for a specific sensors
     * @Return: ActionResponse
     */
    delete(sensorId?: string): import("rxjs").Observable<any>;
    /**
     * Get sensor info for anomaly
     * @Return: EntityResponse<SensorAnomalyInfo>
     */
    getSensorAnomalyInfo(sensorId?: string): import("rxjs").Observable<any>;
    /**
     * Find list of anomaly event info objects per sensor in a given time period
     * @return QueryResponse<AnomalyEventInfo> List of anomaly event info objects
     */
    findAnomalyEventInfo(accountId?: string, sensorId?: string, status?: EventStatusCode, from?: number, to?: number, sort?: string, page?: number, pageSize?: number): import("rxjs").Observable<any>;
    /**
     * Update sensor anomaly rule attributed
     * @return ActionResponse
     */
    updateAnomalyRule(sensorId?: string, body?: SensorAnomalyRuleInfo): import("rxjs").Observable<any>;
    /**
     * Create dummy event (for anomaly tests only)
     * This method is used for testing only, the only service generates events in the system is the event service
     * @param event Event data to create
     * Some of the event fields are mandatory: (the other are optional)
     * <ul>
     * <li><b>id:</b> Unique event id (e.g. GUID string)</li>
     * <li><b>accountId</b> Account Id</li>
     * <li><b>sensorId</b> Sensor Id</li>
     * <li><b>objectType</b> Detected object type</li>
     * <li><b>behaviorType</b> Behavior</li>
     * <li><b>ruleId</b> Rule Id</li>
     * <li><b>startTime:</b> If set to 0, server time will be set</li>
     * </ul>
     * @return EntityResponse<Event>
     */
    createDummyEvent(body?: Event): import("rxjs").Observable<any>;
    /**
     * Get single sensor preset
     * @return EntityResponse<Preset>
     */
    getSensorPreset(sensorId?: string, presetNum?: number): import("rxjs").Observable<any>;
    /**
     * Get single sensor schedule for the next hour
     * @return EntityResponse<Timeline>
     */
    getSensorSchedule(sensorId?: string): import("rxjs").Observable<any>;
    static ɵfac: i0.ɵɵFactoryDeclaration<AnomalyService, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<AnomalyService>;
}
