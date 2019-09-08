import { TreeNode } from '../common/TreeNode';
import { AccountRole } from '../common/AccountRole';
export declare class UserAccountInfo {
    accountRole: AccountRole;
    rootNode: TreeNode;
    features: string[];
    constructor(accountRole?: AccountRole, rootNode?: TreeNode, features?: string[]);
}
