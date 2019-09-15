import { AnalysisResult } from '../common/AnalysisResult';
export declare class AnomalyServiceUpdateRequest {
    sensorId: string;
    body: AnalysisResult;
    constructor(sensorId?: string, body?: AnalysisResult);
}
