import { ApplianceProfile } from '../entities/ApplianceProfile';
import { EntitiesResponse } from '../messages/EntitiesResponse';
export declare class EntitiesResponseOfApplianceProfile extends EntitiesResponse {
    list: ApplianceProfile[];
    code: number;
    error: string;
}
