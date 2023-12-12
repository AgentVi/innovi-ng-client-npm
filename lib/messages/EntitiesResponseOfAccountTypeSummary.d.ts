import { EntitiesResponse } from '../messages/EntitiesResponse';
import { AccountTypeSummary } from '../common/AccountTypeSummary';
export declare class EntitiesResponseOfAccountTypeSummary extends EntitiesResponse {
    list: AccountTypeSummary[];
    code: number;
    error: string;
}
