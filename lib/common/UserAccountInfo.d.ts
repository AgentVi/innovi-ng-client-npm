import { AccountRole } from '../common/AccountRole';
import { TreeNode } from '../common/TreeNode';
import { FeatureCode } from '../enums/FeatureCode';
export declare class UserAccountInfo {
    accountRole: AccountRole;
    rootNode: TreeNode;
    features: FeatureCode[];
    constructor(accountRole?: AccountRole, rootNode?: TreeNode, features?: FeatureCode[]);
}
