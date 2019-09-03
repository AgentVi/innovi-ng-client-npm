import { SensorAnalysisResults } from '../entities/SensorAnalysisResults';
export declare class AnomalyServiceUpdateRequest {
    sensorId: string;
    body: SensorAnalysisResults;
    constructor(sensorId?: string, body?: SensorAnalysisResults);
}
