import { IntegrationTarget } from '../entities/IntegrationTarget';
export declare class IntegrationsServiceUpdateRequest {
    id: string;
    body: IntegrationTarget;
    constructor(id?: string, body?: IntegrationTarget);
}
