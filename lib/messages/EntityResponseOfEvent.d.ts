import { Event } from '../entities/Event';
import { EntityResponse } from '../messages/EntityResponse';
export declare class EntityResponseOfEvent extends EntityResponse {
    entity: Event;
    code: number;
    error: string;
}
