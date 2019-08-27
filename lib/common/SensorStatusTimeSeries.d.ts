import { SensorStatusTimestamped } from '../common/SensorStatusTimestamped';
export declare class SensorStatusTimeSeries {
    accountId: string;
    sensorId: string;
    label: string;
    data: SensorStatusTimestamped[];
    constructor(accountId?: string, sensorId?: string, label?: string, data?: SensorStatusTimestamped[]);
}
