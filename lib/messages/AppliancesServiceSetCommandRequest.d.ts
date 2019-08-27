import { CommandStatusCode } from '../enums/CommandStatusCode';
export declare class AppliancesServiceSetCommandRequest {
    commandId: string;
    status: CommandStatusCode;
    constructor(commandId?: string, status?: CommandStatusCode);
}
