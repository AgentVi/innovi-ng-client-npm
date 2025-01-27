import { HealthEvent } from '../entities/HealthEvent';
import { EntityResponse } from '../messages/EntityResponse';
export declare class EntityResponseOfHealthEvent extends EntityResponse {
    entity: HealthEvent;
    code: number;
    error: string;
}
