import { SearchEvent } from '../entities/SearchEvent';
import { BaseEntity } from '../entities/BaseEntity';
export declare class CaseInfo extends BaseEntity {
    accountId: string;
    name: string;
    description: string;
    userId: string;
    userName: string;
    tag: string;
    isPrivate: boolean;
    events: SearchEvent[];
    id: string;
    _type: string;
    createdOn: number;
    updatedOn: number;
}
