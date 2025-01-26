import { EntityResponse } from '../messages/EntityResponse';
import { IntegrationAction } from '../entities/IntegrationAction';
export declare class EntityResponseOfIntegrationAction extends EntityResponse {
    entity: IntegrationAction;
    code: number;
    error: string;
}
