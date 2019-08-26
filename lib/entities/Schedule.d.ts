import { RecurrentTimeFrame } from '../common/RecurrentTimeFrame';
import { BaseEntity } from '../entities/BaseEntity';
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
