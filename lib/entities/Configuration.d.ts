import { BaseEntity } from '../entities/BaseEntity';
import { ProductTypeCode } from '../enums/ProductTypeCode';
export declare class Configuration extends BaseEntity {
    description: string;
    currentVersion: string;
    targets: ProductTypeCode[];
    id: string;
    _type: string;
    createdOn: number;
    updatedOn: number;
    path: string;
}
