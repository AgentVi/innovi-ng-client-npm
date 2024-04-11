import { EntityResponse } from '../messages/EntityResponse';
import { Calendar } from '../entities/Calendar';
export declare class EntityResponseOfCalendar extends EntityResponse {
    entity: Calendar;
    code: number;
    error: string;
}
