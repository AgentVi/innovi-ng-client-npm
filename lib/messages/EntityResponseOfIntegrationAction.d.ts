import { IntegrationAction } from '../entities/IntegrationAction';
import { EntityResponse } from '../messages/EntityResponse';
export declare class EntityResponseOfIntegrationAction extends EntityResponse {
    entity: IntegrationAction;
    code: number;
    error: string;
}
