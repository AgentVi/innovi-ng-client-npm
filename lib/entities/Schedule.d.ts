import { BaseEntity } from '../entities/BaseEntity';
import { RecurrentTimeFrame } from '../common/RecurrentTimeFrame';
export declare class Schedule extends BaseEntity {
    accountId: string;
    folderId: string;
    name: string;
    description: string;
    enabled: boolean;
    timezone: string;
    timeFrames: RecurrentTimeFrame[];
    id: string;
    _type: string;
    createdOn: number;
    updatedOn: number;
}
