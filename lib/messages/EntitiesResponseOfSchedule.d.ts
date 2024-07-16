import { EntitiesResponse } from '../messages/EntitiesResponse';
import { Schedule } from '../entities/Schedule';
export declare class EntitiesResponseOfSchedule extends EntitiesResponse {
    list: Schedule[];
    code: number;
    error: string;
}
