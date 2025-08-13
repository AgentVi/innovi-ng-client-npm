import { Account } from '../entities/Account';
import { EntitiesResponse } from '../messages/EntitiesResponse';
export declare class EntitiesResponseOfAccount extends EntitiesResponse {
    list: Account[];
    code: number;
    error: string;
}
