import { SeverityTypeCode } from '../enums/SeverityTypeCode';
import { EntityTypeCode } from '../enums/EntityTypeCode';
import { ObjectTypeCode } from '../enums/ObjectTypeCode';
import { BehaviorTypeCode } from '../enums/BehaviorTypeCode';
export declare class IntegrationActionFilter {
    sensorIds: string[];
    ruleIds: string[];
    objectTypes: ObjectTypeCode[];
    behaviorTypes: BehaviorTypeCode[];
    severity: SeverityTypeCode;
    subjectType: EntityTypeCode;
    subjectStatus: number;
    subjectState: number;
    constructor(sensorIds?: string[], ruleIds?: string[], objectTypes?: ObjectTypeCode[], behaviorTypes?: BehaviorTypeCode[], severity?: SeverityTypeCode, subjectType?: EntityTypeCode, subjectStatus?: number, subjectState?: number);
}
