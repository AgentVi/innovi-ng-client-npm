import { EntitiesResponse } from '../messages/EntitiesResponse';
import { ApplianceConfiguration } from '../common/ApplianceConfiguration';
export declare class EntityResponseOfApplianceConfiguration extends EntitiesResponse {
    entity: ApplianceConfiguration;
    code: number;
    error: string;
}
