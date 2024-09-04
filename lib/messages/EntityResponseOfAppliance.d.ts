import { Appliance } from '../entities/Appliance';
import { EntityResponse } from '../messages/EntityResponse';
export declare class EntityResponseOfAppliance extends EntityResponse {
    entity: Appliance;
    code: number;
    error: string;
}
