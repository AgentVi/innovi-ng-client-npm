import { SearchDefinition } from '../entities/SearchDefinition';
export declare class SearchServiceUpdateRequest {
    id: string;
    body: SearchDefinition;
    constructor(id?: string, body?: SearchDefinition);
}
