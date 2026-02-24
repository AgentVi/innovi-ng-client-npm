import { EntitiesResponse } from '../messages/EntitiesResponse';
import { ScheduledReport } from '../entities/ScheduledReport';
export declare class EntitiesResponseOfScheduledReport extends EntitiesResponse {
    list: ScheduledReport[];
    code: number;
    error: string;
}
