import { ApplianceConfiguration } from '../common/ApplianceConfiguration';
import { EntitiesResponse } from '../messages/EntitiesResponse';
export declare class EntitiesResponseOfApplianceConfiguration extends EntitiesResponse {
    list: ApplianceConfiguration[];
    code: number;
    error: string;
}
