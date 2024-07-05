import { AgentStatusCode } from '../enums/AgentStatusCode';
import { ApplianceStatusCode } from '../enums/ApplianceStatusCode';
export declare class AppliancesServiceFindRequest {
    folderId: string;
    subFolders: boolean;
    search: string;
    status: ApplianceStatusCode[];
    agentStatus: AgentStatusCode[];
    sort: string;
    page: number;
    pageSize: number;
    constructor(folderId?: string, subFolders?: boolean, search?: string, status?: ApplianceStatusCode[], agentStatus?: AgentStatusCode[], sort?: string, page?: number, pageSize?: number);
}
