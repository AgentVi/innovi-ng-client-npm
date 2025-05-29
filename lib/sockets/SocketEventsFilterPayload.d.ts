import { BehaviorTypeCode } from '../enums/BehaviorTypeCode';
import { SeverityTypeCode } from '../enums/SeverityTypeCode';
import { EventStatusCode } from '../enums/EventStatusCode';
import { ObjectTypeCode } from '../enums/ObjectTypeCode';
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
