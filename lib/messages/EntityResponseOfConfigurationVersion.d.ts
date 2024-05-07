import { EntityResponse } from '../messages/EntityResponse';
import { ConfigurationVersion } from '../entities/ConfigurationVersion';
export declare class EntityResponseOfConfigurationVersion extends EntityResponse {
    entity: ConfigurationVersion;
    code: number;
    error: string;
}
