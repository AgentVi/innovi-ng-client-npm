import { BaseEntity } from '../entities/BaseEntity';
import { SearchEvent } from '../entities/SearchEvent';
export declare class CaseInfo extends BaseEntity {
    accountId: string;
    name: string;
    description: string;
    userId: string;
    tag: string;
    isPrivate: boolean;
    events: SearchEvent[];
    id: string;
    _type: string;
    createdOn: number;
    updatedOn: number;
    path: string;
}
