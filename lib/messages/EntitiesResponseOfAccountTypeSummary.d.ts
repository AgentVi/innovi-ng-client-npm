import { AccountTypeSummary } from '../common/AccountTypeSummary';
import { EntitiesResponse } from '../messages/EntitiesResponse';
export declare class EntitiesResponseOfAccountTypeSummary extends EntitiesResponse {
    list: AccountTypeSummary[];
    code: number;
    error: string;
}
