import { Event } from '../entities/Event';
import { EntitiesResponse } from '../messages/EntitiesResponse';
export declare class EntitiesResponseOfEvent extends EntitiesResponse {
    list: Event[];
    code: number;
    error: string;
}
