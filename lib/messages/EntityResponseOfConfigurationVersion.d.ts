import { ConfigurationVersion } from '../entities/ConfigurationVersion';
import { EntityResponse } from '../messages/EntityResponse';
export declare class EntityResponseOfConfigurationVersion extends EntityResponse {
    entity: ConfigurationVersion;
    code: number;
    error: string;
}
