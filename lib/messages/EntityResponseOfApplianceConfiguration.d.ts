import { ApplianceConfiguration } from '../common/ApplianceConfiguration';
import { EntitiesResponse } from '../messages/EntitiesResponse';
export declare class EntityResponseOfApplianceConfiguration extends EntitiesResponse {
    entity: ApplianceConfiguration;
    code: number;
    error: string;
}
