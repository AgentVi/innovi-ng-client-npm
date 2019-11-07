import { UserTypeCode } from '../enums/UserTypeCode';
import { UserStatusCode } from '../enums/UserStatusCode';
export declare class UsersServiceFindRequest {
    search: string;
    type: UserTypeCode[];
    status: UserStatusCode[];
    sort: string;
    page: number;
    pageSize: number;
    format: string;
    fields: string[];
    constructor(search?: string, type?: UserTypeCode[], status?: UserStatusCode[], sort?: string, page?: number, pageSize?: number, format?: string, fields?: string[]);
}
