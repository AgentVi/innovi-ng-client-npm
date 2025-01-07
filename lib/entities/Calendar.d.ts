import { BaseEntity } from '../entities/BaseEntity';
import { AbsoluteTimeFrame } from '../common/AbsoluteTimeFrame';
export declare class Calendar extends BaseEntity {
    accountId: string;
    folderId: string;
    name: string;
    description: string;
    enabled: boolean;
    timeFrames: AbsoluteTimeFrame[];
    inactiveRule: boolean;
    id: string;
    _type: string;
    createdOn: number;
    updatedOn: number;
    path: string;
}
