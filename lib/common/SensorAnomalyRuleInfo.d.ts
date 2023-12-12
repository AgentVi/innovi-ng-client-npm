import { Sensitivity } from '../common/Sensitivity';
import { ObjectTypeCode } from '../enums/ObjectTypeCode';
export declare class SensorAnomalyRuleInfo {
    active: boolean;
    sensitivity: Sensitivity;
    objectTypes: ObjectTypeCode[];
    createImage: boolean;
    createClip: boolean;
    ruleId: string;
    externalId: string;
    constructor(active?: boolean, sensitivity?: Sensitivity, objectTypes?: ObjectTypeCode[], createImage?: boolean, createClip?: boolean, ruleId?: string, externalId?: string);
}
