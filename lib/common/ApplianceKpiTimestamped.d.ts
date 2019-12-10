import { ApplianceKpiDataPoint } from '../common/ApplianceKpiDataPoint';
export declare class ApplianceKpiTimestamped {
    timestamp: number;
    label: string;
    value: ApplianceKpiDataPoint;
    constructor(timestamp?: number, label?: string, value?: ApplianceKpiDataPoint);
}
