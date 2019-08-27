import { AnalysisResult } from '../common/AnalysisResult';
import { Sensitivity } from '../common/Sensitivity';
import { ObjectTypeCode } from '../enums/ObjectTypeCode';
export declare class SensorAnomalyInfo {
    sensorId: string;
    results: AnalysisResult[];
    sensitivity: Sensitivity;
    objectTypes: ObjectTypeCode[];
    constructor(sensorId?: string, results?: AnalysisResult[], sensitivity?: Sensitivity, objectTypes?: ObjectTypeCode[]);
}
