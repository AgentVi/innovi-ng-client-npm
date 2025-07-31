import { EntitiesResponse } from '../messages/EntitiesResponse';
import { Calendar } from '../entities/Calendar';
export declare class EntitiesResponseOfCalendar extends EntitiesResponse {
    list: Calendar[];
    code: number;
    error: string;
}
