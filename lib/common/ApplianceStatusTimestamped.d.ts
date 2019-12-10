import { ApplianceStatusCode } from '../enums/ApplianceStatusCode';
export declare class ApplianceStatusTimestamped {
    timestamp: number;
    label: string;
    value: ApplianceStatusCode;
    constructor(timestamp?: number, label?: string, value?: ApplianceStatusCode);
}
