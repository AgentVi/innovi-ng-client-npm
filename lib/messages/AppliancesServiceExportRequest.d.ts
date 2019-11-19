import { ApplianceStatusCode } from '../enums/ApplianceStatusCode';
export declare class AppliancesServiceExportRequest {
    folderId: string;
    subFolders: boolean;
    search: string;
    status: ApplianceStatusCode[];
    sort: string;
    format: string;
    fields: string[];
    constructor(folderId?: string, subFolders?: boolean, search?: string, status?: ApplianceStatusCode[], sort?: string, format?: string, fields?: string[]);
}
