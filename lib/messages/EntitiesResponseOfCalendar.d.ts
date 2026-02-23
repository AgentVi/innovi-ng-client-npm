import { Calendar } from '../entities/Calendar';
import { EntitiesResponse } from '../messages/EntitiesResponse';
export declare class EntitiesResponseOfCalendar extends EntitiesResponse {
    list: Calendar[];
    code: number;
    error: string;
}
