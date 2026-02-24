import { Appliance } from '../entities/Appliance';
import { EntitiesResponse } from '../messages/EntitiesResponse';
export declare class EntitiesResponseOfAppliance extends EntitiesResponse {
    list: Appliance[];
    code: number;
    error: string;
}
