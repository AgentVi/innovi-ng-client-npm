import { TreeItem } from '../common/TreeItem';
import { QueryResponse } from '../messages/QueryResponse';
export declare class QueryResponseOfTreeItem extends QueryResponse {
    list: TreeItem[];
    code: number;
    error: string;
    page: number;
    pageSize: number;
    pages: number;
    total: number;
    queryDef: string;
    docType: string;
}
