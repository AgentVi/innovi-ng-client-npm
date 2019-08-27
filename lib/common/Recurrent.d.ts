import { DayOfWeekCode } from '../enums/DayOfWeekCode';
import { EventAction } from '../common/EventAction';
export declare class Recurrent {
    startTime: string;
    endTime: string;
    period: string;
    daysOfWeek: DayOfWeekCode[];
    action: EventAction;
    constructor(startTime?: string, endTime?: string, period?: string, daysOfWeek?: DayOfWeekCode[], action?: EventAction);
}
