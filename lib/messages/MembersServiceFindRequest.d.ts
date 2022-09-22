import { UserTypeCode } from '../enums/UserTypeCode';
import { UserStatusCode } from '../enums/UserStatusCode';
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
