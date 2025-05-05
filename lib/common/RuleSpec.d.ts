import { RuleAutoSensitivityCode } from '../enums/RuleAutoSensitivityCode';
import { RuleDefaultSensitivity } from '../common/RuleDefaultSensitivity';
import { BehaviorTypeCode } from '../enums/BehaviorTypeCode';
import { ObjectTypeCode } from '../enums/ObjectTypeCode';
import { RuleDefault } from '../common/RuleDefault';
import { ObjectTypeNode } from '../common/ObjectTypeNode';
import { SensorTypeCode } from '../enums/SensorTypeCode';
import { ViewTypeCode } from '../enums/ViewTypeCode';
export declare class RuleSpec {
    behaviorType: BehaviorTypeCode;
    ruleTypeName: string;
    objectTypes: ObjectTypeCode[];
    isLineDrawing: boolean;
    dwellTime: RuleDefault;
    minSpeed: RuleDefault;
    peopleInGroup: RuleDefault;
    clusterDistance: RuleDefault;
    referenceCrop: boolean;
    objectHierarchy: ObjectTypeNode[];
    sensorTypes: SensorTypeCode[];
    externalModel: string;
    viewTypes: ViewTypeCode[];
    excludeObjectTypes: ObjectTypeCode[];
    autoSensitivity: RuleAutoSensitivityCode[];
    sensitivity: RuleDefaultSensitivity;
    existsInWatchlist: boolean[];
    constructor(behaviorType?: BehaviorTypeCode, ruleTypeName?: string, objectTypes?: ObjectTypeCode[], isLineDrawing?: boolean, dwellTime?: RuleDefault, minSpeed?: RuleDefault, peopleInGroup?: RuleDefault, clusterDistance?: RuleDefault, referenceCrop?: boolean, objectHierarchy?: ObjectTypeNode[], sensorTypes?: SensorTypeCode[], externalModel?: string, viewTypes?: ViewTypeCode[], excludeObjectTypes?: ObjectTypeCode[], autoSensitivity?: RuleAutoSensitivityCode[], sensitivity?: RuleDefaultSensitivity, existsInWatchlist?: boolean[]);
}
