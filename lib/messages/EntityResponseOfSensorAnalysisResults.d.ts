import { EntityResponse } from '../messages/EntityResponse';
import { SensorAnalysisResults } from '../entities/SensorAnalysisResults';
export declare class EntityResponseOfSensorAnalysisResults extends EntityResponse {
    entity: SensorAnalysisResults;
    code: number;
    error: string;
}
