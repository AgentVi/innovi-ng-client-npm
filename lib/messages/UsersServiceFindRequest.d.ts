import { UserStatusCode } from '../enums/UserStatusCode';
import { UserTypeCode } from '../enums/UserTypeCode';
export declare class UsersServiceFindRequest {
    accountId: string;
    search: string;
    type: UserTypeCode[];
    status: UserStatusCode[];
    sort: string;
    page: number;
    pageSize: number;
    constructor(accountId?: string, search?: string, type?: UserTypeCode[], status?: UserStatusCode[], sort?: string, page?: number, pageSize?: number);
}
