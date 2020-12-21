export declare class SysApplianceConfigReportRequest {
    account: string;
    search: string;
    configId: string;
    versionId: string;
    unmatched: boolean;
    page: number;
    pageSize: number;
    constructor(account?: string, search?: string, configId?: string, versionId?: string, unmatched?: boolean, page?: number, pageSize?: number);
}
