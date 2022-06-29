import { BaseEntity } from '../entities/BaseEntity';
import { TimeFrame } from '../common/TimeFrame';
import { SensorUsageReport } from '../common/SensorUsageReport';
export declare class UsageReport extends BaseEntity {
    accountId: string;
    period: TimeFrame;
    totalSensors: number;
    usage: SensorUsageReport[];
    id: string;
    _type: string;
    createdOn: number;
    updatedOn: number;
    path: string;
}
