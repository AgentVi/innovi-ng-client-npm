import { EntitiesResponse } from '../messages/EntitiesResponse';
import { DigitalIO } from '../entities/DigitalIO';
export declare class EntitiesResponseOfDigitalIO extends EntitiesResponse {
    list: DigitalIO[];
    code: number;
    error: string;
}
