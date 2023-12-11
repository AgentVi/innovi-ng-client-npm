import { EntitiesResponse } from '../messages/EntitiesResponse';
import { IntegrationTarget } from '../entities/IntegrationTarget';
export declare class EntitiesResponseOfIntegration extends EntitiesResponse {
    list: IntegrationTarget[];
    code: number;
    error: string;
}
