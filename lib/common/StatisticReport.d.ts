import { BehaviorTypeCode } from '../enums/BehaviorTypeCode';
import { ObjectTypeReport } from '../common/ObjectTypeReport';
export declare class StatisticReport {
    accountId: string;
    sensorId: string;
    ruleId: string;
    behaviorType: BehaviorTypeCode;
    reportIntervalStart: number;
    reportIntervalEnd: number;
    totalCount: number;
    avgTimeBetween: number;
    avgSpeed: number;
    reportDetails: ObjectTypeReport[];
    constructor(accountId?: string, sensorId?: string, ruleId?: string, behaviorType?: BehaviorTypeCode, reportIntervalStart?: number, reportIntervalEnd?: number, totalCount?: number, avgTimeBetween?: number, avgSpeed?: number, reportDetails?: ObjectTypeReport[]);
}
