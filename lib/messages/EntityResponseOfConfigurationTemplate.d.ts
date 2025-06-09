import { ConfigurationTemplate } from '../entities/ConfigurationTemplate';
import { EntityResponse } from '../messages/EntityResponse';
export declare class EntityResponseOfConfigurationTemplate extends EntityResponse {
    entity: ConfigurationTemplate;
    code: number;
    error: string;
}
