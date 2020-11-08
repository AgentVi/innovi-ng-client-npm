import { ScheduledReport } from '../entities/ScheduledReport';
import { EntitiesResponse } from '../messages/EntitiesResponse';
export declare class EntitiesResponseOfScheduledReport extends EntitiesResponse {
    list: ScheduledReport[];
    code: number;
    error: string;
}
