import { RuleDefault } from '../common/RuleDefault';
import { ObjectTypeNode } from '../common/ObjectTypeNode';
import { BehaviorTypeCode } from '../enums/BehaviorTypeCode';
import { ObjectTypeCode } from '../enums/ObjectTypeCode';
export declare class RuleSpec {
    behaviorType: BehaviorTypeCode;
    ruleTypeName: string;
    objectTypes: ObjectTypeCode[];
    isLineDrawing: boolean;
    dwellTime: RuleDefault;
    peopleInGroup: RuleDefault;
    objectHierarchy: ObjectTypeNode[];
    constructor(behaviorType?: BehaviorTypeCode, ruleTypeName?: string, objectTypes?: ObjectTypeCode[], isLineDrawing?: boolean, dwellTime?: RuleDefault, peopleInGroup?: RuleDefault, objectHierarchy?: ObjectTypeNode[]);
}
