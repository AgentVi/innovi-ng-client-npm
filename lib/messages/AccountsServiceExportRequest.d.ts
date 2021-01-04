import { AccountTypeCode } from '../enums/AccountTypeCode';
import { AccountStatusCode } from '../enums/AccountStatusCode';
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
