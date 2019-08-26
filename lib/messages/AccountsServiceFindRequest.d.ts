import { AccountTypeCode } from '../enums/AccountTypeCode';
import { AccountStatusCode } from '../enums/AccountStatusCode';
export declare class AccountsServiceFindRequest {
    search: string;
    type: AccountTypeCode;
    status: AccountStatusCode;
    sort: string;
    page: number;
    pageSize: number;
}
