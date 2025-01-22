import { EntityResponse } from '../messages/EntityResponse';
import { Event } from '../entities/Event';
export declare class EntityResponseOfEvent extends EntityResponse {
    entity: Event;
    code: number;
    error: string;
}
