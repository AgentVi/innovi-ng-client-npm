import { ProductTypeCode } from '../enums/ProductTypeCode';
export declare class SysConfigurationsServiceFindRequest {
    target: ProductTypeCode;
    search: string;
    sort: string;
    page: number;
    pageSize: number;
    constructor(target?: ProductTypeCode, search?: string, sort?: string, page?: number, pageSize?: number);
}
