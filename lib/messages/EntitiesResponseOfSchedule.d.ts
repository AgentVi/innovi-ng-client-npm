import { Schedule } from '../entities/Schedule';
import { EntitiesResponse } from '../messages/EntitiesResponse';
export declare class EntitiesResponseOfSchedule extends EntitiesResponse {
    list: Schedule[];
    code: number;
    error: string;
}
