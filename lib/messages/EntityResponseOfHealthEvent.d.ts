import { EntityResponse } from '../messages/EntityResponse';
import { HealthEvent } from '../entities/HealthEvent';
export declare class EntityResponseOfHealthEvent extends EntityResponse {
    entity: HealthEvent;
    code: number;
    error: string;
}
