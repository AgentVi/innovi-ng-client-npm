import { BehaviorTypeCode } from '../enums/BehaviorTypeCode';
import { ObjectTypeCode } from '../enums/ObjectTypeCode';
export declare class IntegrationActionFilter {
    sensorIds: string[];
    ruleIds: string[];
    objectTypes: ObjectTypeCode[];
    behaviorTypes: BehaviorTypeCode[];
    constructor(sensorIds?: string[], ruleIds?: string[], objectTypes?: ObjectTypeCode[], behaviorTypes?: BehaviorTypeCode[]);
}
