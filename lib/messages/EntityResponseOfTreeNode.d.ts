import { EntityResponse } from '../messages/EntityResponse';
import { TreeNode } from '../common/TreeNode';
export declare class EntityResponseOfTreeNode extends EntityResponse {
    entity: TreeNode;
    code: number;
    error: string;
}
