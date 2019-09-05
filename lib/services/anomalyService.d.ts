import { RestUtil } from '../../utils/rest-util';
import { CoreConfig } from '../../config';
import { SensorAnalysisResults } from '../entities/SensorAnalysisResults';
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
    update(sensorId?: string, body?: SensorAnalysisResults): import("rxjs").Observable<any>;
    /**
     * Delete all analysis results for a specific sensors
     * @Return: ActionResponse
     */
    delete(sensorId?: string): import("rxjs").Observable<any>;
    /**
     * Get sensor inference info for anomaly
     * @Return: EntityResponse<SensorAnomalyInfo>
     */
    getSensorAnomalyInfo(sensorId?: string): import("rxjs").Observable<any>;
}
