import { UserStatusCode } from '../enums/UserStatusCode';
import { UserTypeCode } from '../enums/UserTypeCode';
export declare class UsersServiceExportRequest {
    search: string;
    type: UserTypeCode[];
    status: UserStatusCode[];
    sort: string;
    format: string;
    fields: string[];
    constructor(search?: string, type?: UserTypeCode[], status?: UserStatusCode[], sort?: string, format?: string, fields?: string[]);
}
