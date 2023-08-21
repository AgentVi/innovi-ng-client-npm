import { ApplianceKpiTimestamped } from '../common/ApplianceKpiTimestamped';
import { TimeUnitCode } from '../enums/TimeUnitCode';
export declare class ApplianceKpiTimeSeries {
    label: string;
    interval: TimeUnitCode;
    data: ApplianceKpiTimestamped[];
    constructor(label?: string, interval?: TimeUnitCode, data?: ApplianceKpiTimestamped[]);
}
