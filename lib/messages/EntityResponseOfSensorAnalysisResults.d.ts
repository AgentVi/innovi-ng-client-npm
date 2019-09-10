import { SensorAnalysisResults } from '../entities/SensorAnalysisResults';
import { EntityResponse } from '../messages/EntityResponse';
export declare class EntityResponseOfSensorAnalysisResults extends EntityResponse {
    entity: SensorAnalysisResults;
    code: number;
    error: string;
}
