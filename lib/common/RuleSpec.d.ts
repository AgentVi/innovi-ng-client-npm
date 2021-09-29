import { ObjectTypeCode } from '../enums/ObjectTypeCode';
import { RuleDefault } from '../common/RuleDefault';
import { ObjectTypeNode } from '../common/ObjectTypeNode';
import { SensorTypeCode } from '../enums/SensorTypeCode';
import { BehaviorTypeCode } from '../enums/BehaviorTypeCode';
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
    constructor(behaviorType?: BehaviorTypeCode, ruleTypeName?: string, objectTypes?: ObjectTypeCode[], isLineDrawing?: boolean, dwellTime?: RuleDefault, minSpeed?: RuleDefault, peopleInGroup?: RuleDefault, clusterDistance?: RuleDefault, intervalTime?: RuleDefault, referenceCrop?: boolean, objectHierarchy?: ObjectTypeNode[], sensorTypes?: SensorTypeCode[]);
}
