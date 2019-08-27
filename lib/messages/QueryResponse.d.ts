export declare class QueryResponse {
    code: number;
    error: string;
    page: number;
    pageSize: number;
    pages: number;
    total: number;
    queryDef: string;
    docType: string;
    constructor(code?: number, error?: string, page?: number, pageSize?: number, pages?: number, total?: number, queryDef?: string, docType?: string);
}
