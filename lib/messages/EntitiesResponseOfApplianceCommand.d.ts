import { EntitiesResponse } from '../messages/EntitiesResponse';
import { ApplianceCommand } from '../entities/ApplianceCommand';
export declare class EntitiesResponseOfApplianceCommand extends EntitiesResponse {
    list: ApplianceCommand[];
    code: number;
    error: string;
}
