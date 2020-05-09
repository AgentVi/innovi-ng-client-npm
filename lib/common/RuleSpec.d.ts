import { ObjectTypeNode } from '../common/ObjectTypeNode';
import { BehaviorTypeCode } from '../enums/BehaviorTypeCode';
import { ObjectTypeCode } from '../enums/ObjectTypeCode';
import { RuleDefault } from '../common/RuleDefault';
export declare class RuleSpec {
    behaviorType: BehaviorTypeCode;
    ruleTypeName: string;
    objectTypes: ObjectTypeCode[];
    isLineDrawing: boolean;
    dwellTime: RuleDefault;
    peopleInGroup: RuleDefault;
    clusterDistance: RuleDefault;
    referenceCrop: boolean;
    objectHierarchy: ObjectTypeNode[];
    constructor(behaviorType?: BehaviorTypeCode, ruleTypeName?: string, objectTypes?: ObjectTypeCode[], isLineDrawing?: boolean, dwellTime?: RuleDefault, peopleInGroup?: RuleDefault, clusterDistance?: RuleDefault, referenceCrop?: boolean, objectHierarchy?: ObjectTypeNode[]);
}
