import { Schedule } from '../entities/Schedule';
export declare class SchedulesServiceUpdateRequest {
    id: string;
    body: Schedule;
    constructor(id?: string, body?: Schedule);
}
