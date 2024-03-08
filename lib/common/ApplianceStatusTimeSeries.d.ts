import { ApplianceStatusTimestamped } from '../common/ApplianceStatusTimestamped';
import { TimeUnitCode } from '../enums/TimeUnitCode';
export declare class ApplianceStatusTimeSeries {
    label: string;
    interval: TimeUnitCode;
    data: ApplianceStatusTimestamped[];
    constructor(label?: string, interval?: TimeUnitCode, data?: ApplianceStatusTimestamped[]);
}
