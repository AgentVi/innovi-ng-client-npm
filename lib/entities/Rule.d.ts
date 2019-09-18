import { BehaviorTypeCode } from '../enums/BehaviorTypeCode';
import { ObjectTypeCode } from '../enums/ObjectTypeCode';
import { SeverityTypeCode } from '../enums/SeverityTypeCode';
import { Sensitivity } from '../common/Sensitivity';
import { RulePolygon } from '../common/RulePolygon';
import { BaseEntity } from '../entities/BaseEntity';
import { RuleTypeCode } from '../enums/RuleTypeCode';
export declare class Rule extends BaseEntity {
    accountId: string;
    sensorId: string;
    name: string;
    description: string;
    scheduleId: string;
    active: boolean;
    externalId: string;
    ruleType: RuleTypeCode;
    behaviorType: BehaviorTypeCode;
    objectTypes: ObjectTypeCode[];
    severity: SeverityTypeCode;
    sensitivity: Sensitivity;
    dwellTime: number;
    maxObjectsInGroup: number;
    polygons: RulePolygon[];
    id: string;
    _type: string;
    createdOn: number;
    updatedOn: number;
}
