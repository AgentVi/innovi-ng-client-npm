import { AccountStatistics } from '../entities/AccountStatistics';
import { EntitiesResponse } from '../messages/EntitiesResponse';
export declare class EntitiesResponseOfAccountStatistics extends EntitiesResponse {
    list: AccountStatistics[];
    code: number;
    error: string;
}
