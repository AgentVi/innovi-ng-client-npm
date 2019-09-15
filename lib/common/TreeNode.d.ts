import { TreeItem } from '../common/TreeItem';
export declare class TreeNode {
    id: string;
    parentId: string;
    name: string;
    item: TreeItem;
    children: TreeNode[];
    constructor(id?: string, parentId?: string, name?: string, item?: TreeItem, children?: TreeNode[]);
}
