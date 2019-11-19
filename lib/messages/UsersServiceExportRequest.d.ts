import { UserTypeCode } from '../enums/UserTypeCode';
import { UserStatusCode } from '../enums/UserStatusCode';
export declare class UsersServiceExportRequest {
    search: string;
    type: UserTypeCode[];
    status: UserStatusCode[];
    sort: string;
    format: string;
    fields: string[];
    constructor(search?: string, type?: UserTypeCode[], status?: UserStatusCode[], sort?: string, format?: string, fields?: string[]);
}
