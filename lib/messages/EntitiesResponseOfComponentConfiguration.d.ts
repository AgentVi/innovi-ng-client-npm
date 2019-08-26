import { ComponentConfiguration } from '../entities/ComponentConfiguration';
import { EntitiesResponse } from '../messages/EntitiesResponse';
export declare class EntitiesResponseOfComponentConfiguration extends EntitiesResponse {
    list: ComponentConfiguration[];
    code: number;
    error: string;
}
