import { SensorUsageReport } from '../common/SensorUsageReport';
import { BaseEntity } from '../entities/BaseEntity';
import { TimeFrame } from '../common/TimeFrame';
export declare class UsageReport extends BaseEntity {
    accountId: string;
    period: TimeFrame;
    totalSensors: number;
    usage: SensorUsageReport[];
    cursor: string;
    id: string;
    _type: string;
    createdOn: number;
    updatedOn: number;
    path: string;
}
