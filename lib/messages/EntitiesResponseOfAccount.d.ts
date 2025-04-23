import { EntitiesResponse } from '../messages/EntitiesResponse';
import { Account } from '../entities/Account';
export declare class EntitiesResponseOfAccount extends EntitiesResponse {
    list: Account[];
    code: number;
    error: string;
}
