import { AccountStatusCode } from '../enums/AccountStatusCode';
import { AccountTypeCode } from '../enums/AccountTypeCode';
export declare class AccountsServiceExportRequest {
    name: string;
    type: AccountTypeCode[];
    status: AccountStatusCode[];
    sort: string;
    format: string;
    fields: string[];
    fileName: string;
    constructor(name?: string, type?: AccountTypeCode[], status?: AccountStatusCode[], sort?: string, format?: string, fields?: string[], fileName?: string);
}
