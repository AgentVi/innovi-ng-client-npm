import { EntitiesResponse } from '../messages/EntitiesResponse';
import { AccountStatistics } from '../entities/AccountStatistics';
export declare class EntitiesResponseOfAccountStatistics extends EntitiesResponse {
    list: AccountStatistics[];
    code: number;
    error: string;
}
