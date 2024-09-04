import { EntitiesResponse } from '../messages/EntitiesResponse';
import { IntegrationStatus } from '../entities/IntegrationStatus';
export declare class EntitiesResponseOfIntegrationStatus extends EntitiesResponse {
    list: IntegrationStatus[];
    code: number;
    error: string;
}
