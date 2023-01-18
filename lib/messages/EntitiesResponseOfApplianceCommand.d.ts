import { ApplianceCommand } from '../entities/ApplianceCommand';
import { EntitiesResponse } from '../messages/EntitiesResponse';
export declare class EntitiesResponseOfApplianceCommand extends EntitiesResponse {
    list: ApplianceCommand[];
    code: number;
    error: string;
}
