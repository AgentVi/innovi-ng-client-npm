import { RuleDefault } from '../common/RuleDefault';
import { ObjectTypeNode } from '../common/ObjectTypeNode';
import { SensorTypeCode } from '../enums/SensorTypeCode';
import { BehaviorTypeCode } from '../enums/BehaviorTypeCode';
import { ObjectTypeCode } from '../enums/ObjectTypeCode';
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
    constructor(behaviorType?: BehaviorTypeCode, ruleTypeName?: string, objectTypes?: ObjectTypeCode[], isLineDrawing?: boolean, dwellTime?: RuleDefault, minSpeed?: RuleDefault, peopleInGroup?: RuleDefault, clusterDistance?: RuleDefault, intervalTime?: RuleDefault, referenceCrop?: boolean, objectHierarchy?: ObjectTypeNode[], sensorTypes?: SensorTypeCode[], externalModel?: string);
}
