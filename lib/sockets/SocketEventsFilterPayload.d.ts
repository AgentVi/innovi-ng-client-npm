import { BehaviorTypeCode } from '../enums/BehaviorTypeCode';
import { ObjectTypeCode } from '../enums/ObjectTypeCode';
export declare class SocketEventsFilterPayload {
    sensorIds: string[];
    extSensorIds: string[];
    ruleIds: string[];
    extRuleIds: string[];
    objectTypes: ObjectTypeCode[];
    behaviorTypes: BehaviorTypeCode[];
    constructor(sensorIds?: string[], extSensorIds?: string[], ruleIds?: string[], extRuleIds?: string[], objectTypes?: ObjectTypeCode[], behaviorTypes?: BehaviorTypeCode[]);
}
