import { ObjectTypeCode } from '../enums/ObjectTypeCode';
import { Sensitivity } from '../common/Sensitivity';
export declare class SensorAnomalyRuleInfo {
    active: boolean;
    sensitivity: Sensitivity;
    objectTypes: ObjectTypeCode[];
    createImage: boolean;
    createClip: boolean;
    constructor(active?: boolean, sensitivity?: Sensitivity, objectTypes?: ObjectTypeCode[], createImage?: boolean, createClip?: boolean);
}
