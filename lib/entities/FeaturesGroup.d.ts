import { BaseEntity } from '../entities/BaseEntity';
export declare class FeaturesGroup extends BaseEntity {
    name: string;
    features: string[];
    id: string;
    _type: string;
    createdOn: number;
    updatedOn: number;
}
