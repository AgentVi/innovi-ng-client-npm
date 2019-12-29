import { ApplianceDiscovery } from '../entities/ApplianceDiscovery';
import { EntityResponse } from '../messages/EntityResponse';
export declare class EntityResponseOfApplianceDiscovery extends EntityResponse {
    entity: ApplianceDiscovery;
    code: number;
    error: string;
}
