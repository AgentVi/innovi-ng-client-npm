import { EntityResponse } from '../messages/EntityResponse';
import { ApiKey } from '../entities/ApiKey';
export declare class EntityResponseOfApiKey extends EntityResponse {
    entity: ApiKey;
    code: number;
    error: string;
}
