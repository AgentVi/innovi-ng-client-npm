import { AnalysisResult } from '../common/AnalysisResult';
import { SensorAnomalyRuleInfo } from '../common/SensorAnomalyRuleInfo';
export declare class SensorAnomalyInfo {
    sensorId: string;
    results: AnalysisResult[];
    ruleInfo: SensorAnomalyRuleInfo;
    constructor(sensorId?: string, results?: AnalysisResult[], ruleInfo?: SensorAnomalyRuleInfo);
}
