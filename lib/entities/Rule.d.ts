import { SeverityTypeCode } from '../enums/SeverityTypeCode';
import { Sensitivity } from '../common/Sensitivity';
import { RulePolygon } from '../common/RulePolygon';
import { BaseEntity } from '../entities/BaseEntity';
import { BehaviorTypeCode } from '../enums/BehaviorTypeCode';
import { ObjectTypeCode } from '../enums/ObjectTypeCode';
export declare class Rule extends BaseEntity {
    accountId: string;
    sensorId: string;
    name: string;
    description: string;
    scheduleId: string;
    active: boolean;
    externalId: string;
    behaviorType: BehaviorTypeCode;
    objectTypes: ObjectTypeCode[];
    severity: SeverityTypeCode;
    sensitivity: Sensitivity;
    dwellTime: number;
    maxObjectsInGroup: number;
    polygons: RulePolygon[];
    createImage: boolean;
    createClip: boolean;
    lastTrainingOn: number;
    id: string;
    _type: string;
    createdOn: number;
    updatedOn: number;
}
