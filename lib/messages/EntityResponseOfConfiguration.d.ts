import { Configuration } from '../entities/Configuration';
import { EntityResponse } from '../messages/EntityResponse';
export declare class EntityResponseOfConfiguration extends EntityResponse {
    entity: Configuration;
    code: number;
    error: string;
}
