import { ApplianceStatusCode } from '../enums/ApplianceStatusCode';
import { AgentStatusCode } from '../enums/AgentStatusCode';
export declare class SysAppliancesServiceFindRequest {
    accountId: string;
    search: string;
    status: ApplianceStatusCode[];
    agentStatus: AgentStatusCode[];
    sort: string;
    page: number;
    pageSize: number;
    constructor(accountId?: string, search?: string, status?: ApplianceStatusCode[], agentStatus?: AgentStatusCode[], sort?: string, page?: number, pageSize?: number);
}
