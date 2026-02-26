import { ApiKey } from '../entities/ApiKey';
import { EntitiesResponse } from '../messages/EntitiesResponse';
export declare class EntitiesResponseOfApiKey extends EntitiesResponse {
    list: ApiKey[];
    code: number;
    error: string;
}
