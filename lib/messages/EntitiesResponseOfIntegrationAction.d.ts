import { IntegrationAction } from '../entities/IntegrationAction';
import { EntitiesResponse } from '../messages/EntitiesResponse';
export declare class EntitiesResponseOfIntegrationAction extends EntitiesResponse {
    list: IntegrationAction[];
    code: number;
    error: string;
}
