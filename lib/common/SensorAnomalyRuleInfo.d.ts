import { Sensitivity } from '../common/Sensitivity';
import { ObjectTypeCode } from '../enums/ObjectTypeCode';
export declare class SensorAnomalyRuleInfo {
    sensitivity: Sensitivity;
    objectTypes: ObjectTypeCode[];
    constructor(sensitivity?: Sensitivity, objectTypes?: ObjectTypeCode[]);
}
