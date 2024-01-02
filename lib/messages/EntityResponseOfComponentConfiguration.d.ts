import { ComponentConfiguration } from '../entities/ComponentConfiguration';
import { EntityResponse } from '../messages/EntityResponse';
export declare class EntityResponseOfComponentConfiguration extends EntityResponse {
    entity: ComponentConfiguration;
    code: number;
    error: string;
}
