export declare class SysApplianceBatchUpgradeFindRequest {
    accountId: string;
    applianceId: string;
    userId: string;
    commandId: string;
    batchId: string;
    from: number;
    to: number;
    sort: string;
    page: number;
    pageSize: number;
    constructor(accountId?: string, applianceId?: string, userId?: string, commandId?: string, batchId?: string, from?: number, to?: number, sort?: string, page?: number, pageSize?: number);
}
