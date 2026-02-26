import { EntitiesResponse } from '../messages/EntitiesResponse';
import { ConfigurationVersion } from '../entities/ConfigurationVersion';
export declare class EntitiesResponseOfConfiguration extends EntitiesResponse {
    list: ConfigurationVersion[];
    code: number;
    error: string;
}
