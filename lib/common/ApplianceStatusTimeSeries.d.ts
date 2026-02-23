import { TimeUnitCode } from '../enums/TimeUnitCode';
import { ApplianceStatusTimestamped } from '../common/ApplianceStatusTimestamped';
export declare class ApplianceStatusTimeSeries {
    label: string;
    interval: TimeUnitCode;
    data: ApplianceStatusTimestamped[];
    constructor(label?: string, interval?: TimeUnitCode, data?: ApplianceStatusTimestamped[]);
}
