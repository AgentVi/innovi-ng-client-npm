import { IntegrationTarget } from '../entities/IntegrationTarget';
import { EntityResponse } from '../messages/EntityResponse';
export declare class EntityResponseOfIntegration extends EntityResponse {
    entity: IntegrationTarget;
    code: number;
    error: string;
}
