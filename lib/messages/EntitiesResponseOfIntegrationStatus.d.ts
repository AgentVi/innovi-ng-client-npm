import { IntegrationStatus } from '../entities/IntegrationStatus';
import { EntitiesResponse } from '../messages/EntitiesResponse';
export declare class EntitiesResponseOfIntegrationStatus extends EntitiesResponse {
    list: IntegrationStatus[];
    code: number;
    error: string;
}
