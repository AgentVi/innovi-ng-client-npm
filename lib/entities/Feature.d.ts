import { BaseEntity } from '../entities/BaseEntity';
import { FeatureCode } from '../enums/FeatureCode';
export declare class Feature extends BaseEntity {
    code: FeatureCode;
    name: string;
    description: string;
    category: string;
    id: string;
    _type: string;
    createdOn: number;
    updatedOn: number;
}
