import { SensorStatusTimestamped } from '../common/SensorStatusTimestamped';
import { TimeUnitCode } from '../enums/TimeUnitCode';
export declare class SensorStatusTimeSeries {
    accountId: string;
    sensorId: string;
    label: string;
    interval: TimeUnitCode;
    data: SensorStatusTimestamped[];
    constructor(accountId?: string, sensorId?: string, label?: string, interval?: TimeUnitCode, data?: SensorStatusTimestamped[]);
}
