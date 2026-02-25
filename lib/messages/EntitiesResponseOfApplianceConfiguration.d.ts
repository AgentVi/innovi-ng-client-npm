import { EntitiesResponse } from '../messages/EntitiesResponse';
import { ApplianceConfiguration } from '../common/ApplianceConfiguration';
export declare class EntitiesResponseOfApplianceConfiguration extends EntitiesResponse {
    list: ApplianceConfiguration[];
    code: number;
    error: string;
}
