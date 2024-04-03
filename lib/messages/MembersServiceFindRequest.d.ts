import { UserStatusCode } from '../enums/UserStatusCode';
import { UserTypeCode } from '../enums/UserTypeCode';
export declare class MembersServiceFindRequest {
    search: string;
    type: UserTypeCode[];
    status: UserStatusCode[];
    group: string;
    sort: string;
    page: number;
    pageSize: number;
    constructor(search?: string, type?: UserTypeCode[], status?: UserStatusCode[], group?: string, sort?: string, page?: number, pageSize?: number);
}
