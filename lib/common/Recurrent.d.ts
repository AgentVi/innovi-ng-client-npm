import { DayOfWeekCode } from '../enums/DayOfWeekCode';
import { IntegrationSpec } from '../common/IntegrationSpec';
export declare class Recurrent {
    startTime: string;
    endTime: string;
    period: string;
    daysOfWeek: DayOfWeekCode[];
    action: IntegrationSpec;
    constructor(startTime?: string, endTime?: string, period?: string, daysOfWeek?: DayOfWeekCode[], action?: IntegrationSpec);
}
