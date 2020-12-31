import { TimeFrame } from '../common/TimeFrame';
import { StringIntValue } from '../common/StringIntValue';
import { BaseEntity } from '../entities/BaseEntity';
export declare class UsageReport extends BaseEntity {
    accountId: string;
    period: TimeFrame;
    totalSensors: number;
    usage: StringIntValue[];
    id: string;
    _type: string;
    createdOn: number;
    updatedOn: number;
    path: string;
}
