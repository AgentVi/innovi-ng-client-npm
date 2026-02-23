import { EntityResponse } from '../messages/EntityResponse';
import { ApplianceProfile } from '../entities/ApplianceProfile';
export declare class EntityResponseOfApplianceProfile extends EntityResponse {
    entity: ApplianceProfile;
    code: number;
    error: string;
}
