import { ObjectTypeNode } from '../common/ObjectTypeNode';
import { RuleTypeCode } from '../enums/RuleTypeCode';
import { BehaviorTypeCode } from '../enums/BehaviorTypeCode';
import { ObjectTypeCode } from '../enums/ObjectTypeCode';
import { RuleDefault } from '../common/RuleDefault';
export declare class RuleSpec {
    ruleType: RuleTypeCode;
    ruleTypeName: string;
    behaviorTypes: BehaviorTypeCode[];
    objectTypes: ObjectTypeCode[];
    isLineDrawing: boolean;
    dwellTime: RuleDefault;
    peopleInGroup: RuleDefault;
    objectHierarchy: ObjectTypeNode[];
    constructor(ruleType?: RuleTypeCode, ruleTypeName?: string, behaviorTypes?: BehaviorTypeCode[], objectTypes?: ObjectTypeCode[], isLineDrawing?: boolean, dwellTime?: RuleDefault, peopleInGroup?: RuleDefault, objectHierarchy?: ObjectTypeNode[]);
}
