import { EntityResponse } from '../messages/EntityResponse';
import { Schedule } from '../entities/Schedule';
export declare class EntityResponseOfSchedule extends EntityResponse {
    entity: Schedule;
    code: number;
    error: string;
}
