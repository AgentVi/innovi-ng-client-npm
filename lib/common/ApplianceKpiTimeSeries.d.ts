import { TimeUnitCode } from '../enums/TimeUnitCode';
import { ApplianceKpiTimestamped } from '../common/ApplianceKpiTimestamped';
export declare class ApplianceKpiTimeSeries {
    label: string;
    interval: TimeUnitCode;
    data: ApplianceKpiTimestamped[];
    constructor(label?: string, interval?: TimeUnitCode, data?: ApplianceKpiTimestamped[]);
}
