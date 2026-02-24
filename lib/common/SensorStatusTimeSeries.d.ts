import { TimeUnitCode } from '../enums/TimeUnitCode';
import { SensorStatusTimestamped } from '../common/SensorStatusTimestamped';
export declare class SensorStatusTimeSeries {
    accountId: string;
    sensorId: string;
    label: string;
    interval: TimeUnitCode;
    data: SensorStatusTimestamped[];
    constructor(accountId?: string, sensorId?: string, label?: string, interval?: TimeUnitCode, data?: SensorStatusTimestamped[]);
}
