import { Calendar } from '../entities/Calendar';
import { EntityResponse } from '../messages/EntityResponse';
export declare class EntityResponseOfCalendar extends EntityResponse {
    entity: Calendar;
    code: number;
    error: string;
}
