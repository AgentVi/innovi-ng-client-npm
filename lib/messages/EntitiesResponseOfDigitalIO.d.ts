import { DigitalIO } from '../entities/DigitalIO';
import { EntitiesResponse } from '../messages/EntitiesResponse';
export declare class EntitiesResponseOfDigitalIO extends EntitiesResponse {
    list: DigitalIO[];
    code: number;
    error: string;
}
