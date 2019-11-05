import { CommandStatusCode } from '../enums/CommandStatusCode';
export declare class AppliancesServiceGetCommandsRequest {
    id: string;
    status: CommandStatusCode[];
    sort: string;
    page: number;
    pageSize: number;
    constructor(id?: string, status?: CommandStatusCode[], sort?: string, page?: number, pageSize?: number);
}
