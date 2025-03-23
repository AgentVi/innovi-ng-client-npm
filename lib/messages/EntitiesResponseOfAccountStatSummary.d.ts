import { EntitiesResponse } from '../messages/EntitiesResponse';
import { AccountStatSummary } from '../common/AccountStatSummary';
export declare class EntitiesResponseOfAccountStatSummary extends EntitiesResponse {
    list: AccountStatSummary[];
    code: number;
    error: string;
}
