export declare class SysApplianceConfigExportRequest {
    account: string;
    search: string;
    configId: string;
    versionId: string;
    unmatched: boolean;
    format: string;
    page: number;
    pageSize: number;
    constructor(account?: string, search?: string, configId?: string, versionId?: string, unmatched?: boolean, format?: string, page?: number, pageSize?: number);
}
