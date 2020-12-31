import { ProductTypeCode } from '../enums/ProductTypeCode';
import { BaseEntity } from '../entities/BaseEntity';
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
