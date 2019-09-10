import { Sensitivity } from '../common/Sensitivity';
import { ObjectTypeCode } from '../enums/ObjectTypeCode';
import { SensorAnomalyRuleInfo } from '../common/SensorAnomalyRuleInfo';
import { AnalysisResult } from '../common/AnalysisResult';
export declare class SensorAnomalyInfo extends SensorAnomalyRuleInfo {
    sensorId: string;
    results: AnalysisResult[];
    sensitivity: Sensitivity;
    objectTypes: ObjectTypeCode[];
}
