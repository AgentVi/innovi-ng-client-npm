import { EntityResponse } from '../messages/EntityResponse';
import { ComponentConfiguration } from '../entities/ComponentConfiguration';
export declare class EntityResponseOfComponentConfiguration extends EntityResponse {
    entity: ComponentConfiguration;
    code: number;
    error: string;
}
