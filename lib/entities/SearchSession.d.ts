import { BaseEntity } from '../entities/BaseEntity';
export declare class SearchSession extends BaseEntity {
    searchId: string;
    progress: string;
    completed: boolean;
    id: string;
    _type: string;
    createdOn: number;
    updatedOn: number;
    path: string;
}
