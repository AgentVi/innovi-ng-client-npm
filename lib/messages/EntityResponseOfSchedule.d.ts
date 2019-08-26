import { Schedule } from '../entities/Schedule';
import { EntityResponse } from '../messages/EntityResponse';
export declare class EntityResponseOfSchedule extends EntityResponse {
    entity: Schedule;
    code: number;
    error: string;
}
