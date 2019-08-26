import { IntegrationTarget } from '../entities/IntegrationTarget';
import { EntitiesResponse } from '../messages/EntitiesResponse';
export declare class EntitiesResponseOfIntegration extends EntitiesResponse {
    list: IntegrationTarget[];
    code: number;
    error: string;
}
