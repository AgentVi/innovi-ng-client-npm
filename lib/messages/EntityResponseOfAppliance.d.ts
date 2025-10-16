import { EntityResponse } from '../messages/EntityResponse';
import { Appliance } from '../entities/Appliance';
export declare class EntityResponseOfAppliance extends EntityResponse {
    entity: Appliance;
    code: number;
    error: string;
}
