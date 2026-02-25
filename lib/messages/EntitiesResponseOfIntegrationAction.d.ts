import { EntitiesResponse } from '../messages/EntitiesResponse';
import { IntegrationAction } from '../entities/IntegrationAction';
export declare class EntitiesResponseOfIntegrationAction extends EntitiesResponse {
    list: IntegrationAction[];
    code: number;
    error: string;
}
