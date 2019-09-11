import { SensorAnomalyRuleInfo } from '../common/SensorAnomalyRuleInfo';
import { AnalysisResult } from '../common/AnalysisResult';
export declare class SensorAnomalyInfo {
    sensorId: string;
    results: AnalysisResult[];
    ruleInfo: SensorAnomalyRuleInfo;
    constructor(sensorId?: string, results?: AnalysisResult[], ruleInfo?: SensorAnomalyRuleInfo);
}
