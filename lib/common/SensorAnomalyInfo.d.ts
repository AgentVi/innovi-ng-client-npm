import { SensorAnomalyRuleInfo } from '../common/SensorAnomalyRuleInfo';
import { AnalysisResult } from '../common/AnalysisResult';
import { Sensitivity } from '../common/Sensitivity';
import { ObjectTypeCode } from '../enums/ObjectTypeCode';
export declare class SensorAnomalyInfo extends SensorAnomalyRuleInfo {
    sensorId: string;
    results: AnalysisResult[];
    sensitivity: Sensitivity;
    objectTypes: ObjectTypeCode[];
}
