import { EntitiesResponse } from '../messages/EntitiesResponse';
import { ComponentConfiguration } from '../entities/ComponentConfiguration';
export declare class EntitiesResponseOfComponentConfiguration extends EntitiesResponse {
    list: ComponentConfiguration[];
    code: number;
    error: string;
}
