import { AccountRole } from '../common/AccountRole';
import { TreeNode } from '../common/TreeNode';
export declare class UserAccountInfo {
    accountRole: AccountRole;
    rootNode: TreeNode;
    features: string[];
    constructor(accountRole?: AccountRole, rootNode?: TreeNode, features?: string[]);
}
