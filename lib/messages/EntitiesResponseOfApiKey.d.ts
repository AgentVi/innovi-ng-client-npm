import { EntitiesResponse } from '../messages/EntitiesResponse';
import { ApiKey } from '../entities/ApiKey';
export declare class EntitiesResponseOfApiKey extends EntitiesResponse {
    list: ApiKey[];
    code: number;
    error: string;
}
