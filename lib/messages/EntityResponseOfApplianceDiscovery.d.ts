import { EntityResponse } from '../messages/EntityResponse';
import { ApplianceDiscovery } from '../entities/ApplianceDiscovery';
export declare class EntityResponseOfApplianceDiscovery extends EntityResponse {
    entity: ApplianceDiscovery;
    code: number;
    error: string;
}
