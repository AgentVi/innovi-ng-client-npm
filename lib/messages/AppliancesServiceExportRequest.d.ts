import { ApplianceStatusCode } from '../enums/ApplianceStatusCode';
import { AgentStatusCode } from '../enums/AgentStatusCode';
export declare class AppliancesServiceExportRequest {
    folderId: string;
    subFolders: boolean;
    search: string;
    status: ApplianceStatusCode[];
    agentStatus: AgentStatusCode[];
    sort: string;
    format: string;
    fields: string[];
    constructor(folderId?: string, subFolders?: boolean, search?: string, status?: ApplianceStatusCode[], agentStatus?: AgentStatusCode[], sort?: string, format?: string, fields?: string[]);
}
