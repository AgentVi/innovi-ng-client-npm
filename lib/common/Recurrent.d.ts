import { DayOfWeekCode } from '../enums/DayOfWeekCode';
export declare class Recurrent {
    startTime: string;
    endTime: string;
    period: string;
    daysOfWeek: DayOfWeekCode[];
    targetId: string;
    recipients: string[];
    subject: string;
    body: string;
    mimeType: string;
    constructor(startTime?: string, endTime?: string, period?: string, daysOfWeek?: DayOfWeekCode[], targetId?: string, recipients?: string[], subject?: string, body?: string, mimeType?: string);
}
