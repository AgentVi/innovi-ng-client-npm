import { EntityResponse } from '../messages/EntityResponse';
import { Configuration } from '../entities/Configuration';
export declare class EntityResponseOfConfiguration extends EntityResponse {
    entity: Configuration;
    code: number;
    error: string;
}
