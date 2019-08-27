import { AccountStatusCode } from '../enums/AccountStatusCode';
export declare class AccountsServiceChangeStatusRequest {
    id: string;
    status: AccountStatusCode;
    constructor(id?: string, status?: AccountStatusCode);
}
