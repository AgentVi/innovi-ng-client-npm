import { EntitiesResponse } from '../messages/EntitiesResponse';
import { Appliance } from '../entities/Appliance';
export declare class EntitiesResponseOfAppliance extends EntitiesResponse {
    list: Appliance[];
    code: number;
    error: string;
}
