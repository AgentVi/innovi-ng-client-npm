import { AbsoluteTimeFrame } from '../common/AbsoluteTimeFrame';
import { BaseEntity } from '../entities/BaseEntity';
export declare class Calendar extends BaseEntity {
    accountId: string;
    folderId: string;
    name: string;
    description: string;
    enabled: boolean;
    timeFrames: AbsoluteTimeFrame[];
    id: string;
    _type: string;
    createdOn: number;
    updatedOn: number;
}
