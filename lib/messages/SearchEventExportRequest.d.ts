import { SearchEventFindRequestBody } from '../messages/SearchEventFindRequestBody';
export declare class SearchEventExportRequest {
    sessionId: string;
    body: SearchEventFindRequestBody;
    format: string;
    fields: string[];
    fileName: string;
    constructor(sessionId?: string, body?: SearchEventFindRequestBody, format?: string, fields?: string[], fileName?: string);
}
