import { ConfigurationVersion } from '../entities/ConfigurationVersion';
import { EntitiesResponse } from '../messages/EntitiesResponse';
export declare class EntitiesResponseOfConfiguration extends EntitiesResponse {
    list: ConfigurationVersion[];
    code: number;
    error: string;
}
