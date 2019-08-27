import { ApplianceStatusDataPoint } from '../common/ApplianceStatusDataPoint';
export declare class ApplianceStatusTimestamped {
    timestamp: number;
    label: string;
    value: ApplianceStatusDataPoint;
    constructor(timestamp?: number, label?: string, value?: ApplianceStatusDataPoint);
}
