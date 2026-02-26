import { EntityResponse } from '../messages/EntityResponse';
import { IntegrationTarget } from '../entities/IntegrationTarget';
export declare class EntityResponseOfIntegration extends EntityResponse {
    entity: IntegrationTarget;
    code: number;
    error: string;
}
