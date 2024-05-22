import { Sensitivity } from '../common/Sensitivity';
import { RulePolygon } from '../common/RulePolygon';
import { RuleAutoSensitivityCode } from '../enums/RuleAutoSensitivityCode';
import { BaseEntity } from '../entities/BaseEntity';
import { BehaviorTypeCode } from '../enums/BehaviorTypeCode';
import { ObjectTypeCode } from '../enums/ObjectTypeCode';
import { SeverityTypeCode } from '../enums/SeverityTypeCode';
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
    minSpeed: number;
    maxObjectsInGroup: number;
    clusterDistance: number;
    polygons: RulePolygon[];
    referenceCrop: string;
    createImage: boolean;
    createClip: boolean;
    lastTrainingOn: number;
    nextTrainingOn: number;
    trainingReadiness: number;
    externalModel: string;
    excludeObjectTypes: ObjectTypeCode[];
    autoSensitivity: RuleAutoSensitivityCode;
    existsInWatchlist: boolean;
    watchlistId: string[];
    id: string;
    _type: string;
    createdOn: number;
    updatedOn: number;
    path: string;
}
