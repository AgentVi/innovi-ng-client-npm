import { ObjectTypeCode } from '../enums/ObjectTypeCode';
import { SeverityTypeCode } from '../enums/SeverityTypeCode';
import { Sensitivity } from '../common/Sensitivity';
import { RulePolygon } from '../common/RulePolygon';
import { BaseEntity } from '../entities/BaseEntity';
import { BehaviorTypeCode } from '../enums/BehaviorTypeCode';
export declare class Rule extends BaseEntity {
    accountId: string;
    sensorId: string;
    name: string;
    description: string;
    scheduleId: string;
    enabled: boolean;
    active: boolean;
    externalId: string;
    behaviorType: BehaviorTypeCode;
    objectTypes: ObjectTypeCode[];
    severity: SeverityTypeCode;
    sensitivity: Sensitivity;
    dwellTime: number;
    maxObjectsInGroup: number;
    clusterDistance: number;
    intervalTime: number;
    polygons: RulePolygon[];
    referenceCrop: string;
    createImage: boolean;
    createClip: boolean;
    lastTrainingOn: number;
    nextTrainingOn: number;
    trainingReadiness: number;
    id: string;
    _type: string;
    createdOn: number;
    updatedOn: number;
    path: string;
}
