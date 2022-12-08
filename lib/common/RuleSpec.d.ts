import { SensorTypeCode } from '../enums/SensorTypeCode';
import { ViewTypeCode } from '../enums/ViewTypeCode';
import { RuleAutoSensitivityCode } from '../enums/RuleAutoSensitivityCode';
import { BehaviorTypeCode } from '../enums/BehaviorTypeCode';
import { ObjectTypeCode } from '../enums/ObjectTypeCode';
import { RuleDefault } from '../common/RuleDefault';
import { ObjectTypeNode } from '../common/ObjectTypeNode';
export declare class RuleSpec {
    behaviorType: BehaviorTypeCode;
    ruleTypeName: string;
    objectTypes: ObjectTypeCode[];
    isLineDrawing: boolean;
    dwellTime: RuleDefault;
    minSpeed: RuleDefault;
    peopleInGroup: RuleDefault;
    clusterDistance: RuleDefault;
    intervalTime: RuleDefault;
    referenceCrop: boolean;
    objectHierarchy: ObjectTypeNode[];
    sensorTypes: SensorTypeCode[];
    externalModel: string;
    viewTypes: ViewTypeCode[];
    excludeObjectTypes: ObjectTypeCode[];
    autoSensitivity: RuleAutoSensitivityCode[];
    constructor(behaviorType?: BehaviorTypeCode, ruleTypeName?: string, objectTypes?: ObjectTypeCode[], isLineDrawing?: boolean, dwellTime?: RuleDefault, minSpeed?: RuleDefault, peopleInGroup?: RuleDefault, clusterDistance?: RuleDefault, intervalTime?: RuleDefault, referenceCrop?: boolean, objectHierarchy?: ObjectTypeNode[], sensorTypes?: SensorTypeCode[], externalModel?: string, viewTypes?: ViewTypeCode[], excludeObjectTypes?: ObjectTypeCode[], autoSensitivity?: RuleAutoSensitivityCode[]);
}
