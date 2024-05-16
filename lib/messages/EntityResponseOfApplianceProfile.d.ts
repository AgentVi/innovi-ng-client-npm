import { ApplianceProfile } from '../entities/ApplianceProfile';
import { EntityResponse } from '../messages/EntityResponse';
export declare class EntityResponseOfApplianceProfile extends EntityResponse {
    entity: ApplianceProfile;
    code: number;
    error: string;
}
