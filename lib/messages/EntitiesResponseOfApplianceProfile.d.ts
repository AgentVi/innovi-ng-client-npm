import { EntitiesResponse } from '../messages/EntitiesResponse';
import { ApplianceProfile } from '../entities/ApplianceProfile';
export declare class EntitiesResponseOfApplianceProfile extends EntitiesResponse {
    list: ApplianceProfile[];
    code: number;
    error: string;
}
