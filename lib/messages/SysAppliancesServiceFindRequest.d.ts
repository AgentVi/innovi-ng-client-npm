import { ApplianceStatusCode } from '../enums/ApplianceStatusCode';
export declare class SysAppliancesServiceFindRequest {
    accountId: string;
    search: string;
    status: ApplianceStatusCode;
    sort: string;
    page: number;
    pageSize: number;
    constructor(accountId?: string, search?: string, status?: ApplianceStatusCode, sort?: string, page?: number, pageSize?: number);
}
