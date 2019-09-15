import { QueryResponse } from '../messages/QueryResponse';
import { ObjectInfo } from '../common/ObjectInfo';
export declare class QueryResponseOfObjectInfo extends QueryResponse {
    list: ObjectInfo[];
    code: number;
    error: string;
    page: number;
    pageSize: number;
    pages: number;
    total: number;
    queryDef: string;
    docType: string;
}
