import { ApiKey } from '../entities/ApiKey';
import { EntityResponse } from '../messages/EntityResponse';
export declare class EntityResponseOfApiKey extends EntityResponse {
    entity: ApiKey;
    code: number;
    error: string;
}
