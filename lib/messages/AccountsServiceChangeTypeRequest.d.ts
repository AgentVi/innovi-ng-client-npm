import { AccountTypeCode } from '../enums/AccountTypeCode';
export declare class AccountsServiceChangeTypeRequest {
    id: string;
    type: AccountTypeCode;
    constructor(id?: string, type?: AccountTypeCode);
}
