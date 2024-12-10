import { EntityResponse } from '../messages/EntityResponse';
import { ConfigurationTemplate } from '../entities/ConfigurationTemplate';
export declare class EntityResponseOfConfigurationTemplate extends EntityResponse {
    entity: ConfigurationTemplate;
    code: number;
    error: string;
}
