import { ObjectTypeCode } from '../enums/ObjectTypeCode';
import { AnalysisResult } from '../common/AnalysisResult';
import { Sensitivity } from '../common/Sensitivity';
export declare class SensorAnomalyInfo {
    sensorId: string;
    results: AnalysisResult[];
    sensitivity: Sensitivity;
    objectTypes: ObjectTypeCode[];
    constructor(sensorId?: string, results?: AnalysisResult[], sensitivity?: Sensitivity, objectTypes?: ObjectTypeCode[]);
}
