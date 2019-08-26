import { CommandStatusCode } from '../enums/CommandStatusCode';
export declare class SysAppliancesServiceGetCommandsRequest {
    accountId: string;
    applianceId: string;
    status: CommandStatusCode;
}
