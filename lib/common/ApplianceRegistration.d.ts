import { ProductTypeCode } from '../enums/ProductTypeCode';
export declare class ApplianceRegistration {
    name: string;
    accountId: string;
    folderId: string;
    machineId: string;
    productType: ProductTypeCode;
    configurationId: string;
    configurationVersionId: string;
    customProfile: string;
    constructor(name?: string, accountId?: string, folderId?: string, machineId?: string, productType?: ProductTypeCode, configurationId?: string, configurationVersionId?: string, customProfile?: string);
}
