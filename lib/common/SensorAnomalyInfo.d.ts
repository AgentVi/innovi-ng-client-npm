import { AnalysisResult } from '../common/AnalysisResult';
import { Sensitivity } from '../common/Sensitivity';
import { ObjectTypeCode } from '../enums/ObjectTypeCode';
import { SensorAnomalyRuleInfo } from '../common/SensorAnomalyRuleInfo';
export declare class SensorAnomalyInfo extends SensorAnomalyRuleInfo {
    sensorId: string;
    results: AnalysisResult[];
    sensitivity: Sensitivity;
    objectTypes: ObjectTypeCode[];
}
