import { CommandStatusCode } from '../enums/CommandStatusCode';
export declare class AppliancesServiceGetCommandsRequest {
    accountId: string;
    status: CommandStatusCode;
    sort: string;
    page: number;
    pageSize: number;
}
