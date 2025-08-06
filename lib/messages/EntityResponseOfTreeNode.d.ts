import { TreeNode } from '../common/TreeNode';
import { EntityResponse } from '../messages/EntityResponse';
export declare class EntityResponseOfTreeNode extends EntityResponse {
    entity: TreeNode;
    code: number;
    error: string;
}
