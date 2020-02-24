import { AccountStatSummary } from '../common/AccountStatSummary';
import { EntitiesResponse } from '../messages/EntitiesResponse';
export declare class EntitiesResponseOfAccountStatSummary extends EntitiesResponse {
    list: AccountStatSummary[];
    code: number;
    error: string;
}
