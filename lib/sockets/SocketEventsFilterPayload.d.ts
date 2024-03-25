import { SeverityTypeCode } from '../enums/SeverityTypeCode';
import { EventStatusCode } from '../enums/EventStatusCode';
import { ObjectTypeCode } from '../enums/ObjectTypeCode';
import { BehaviorTypeCode } from '../enums/BehaviorTypeCode';
export declare class SocketEventsFilterPayload {
    sensorIds: string[];
    extSensorIds: string[];
    ruleIds: string[];
    extRuleIds: string[];
    objectTypes: ObjectTypeCode[];
    behaviorTypes: BehaviorTypeCode[];
    severityTypes: SeverityTypeCode[];
    eventStatusCodes: EventStatusCode[];
    constructor(sensorIds?: string[], extSensorIds?: string[], ruleIds?: string[], extRuleIds?: string[], objectTypes?: ObjectTypeCode[], behaviorTypes?: BehaviorTypeCode[], severityTypes?: SeverityTypeCode[], eventStatusCodes?: EventStatusCode[]);
}
