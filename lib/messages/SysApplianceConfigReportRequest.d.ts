export declare class SysApplianceConfigReportRequest {
    accountId: string;
    search: string;
    configId: string;
    versionId: string;
    unmatched: boolean;
    page: number;
    pageSize: number;
    constructor(accountId?: string, search?: string, configId?: string, versionId?: string, unmatched?: boolean, page?: number, pageSize?: number);
}
