import { BaseEntity } from '../entities/BaseEntity';
export declare class Feature extends BaseEntity {
    name: string;
    description: string;
    category: string;
    id: string;
    _type: string;
    createdOn: number;
    updatedOn: number;
}
