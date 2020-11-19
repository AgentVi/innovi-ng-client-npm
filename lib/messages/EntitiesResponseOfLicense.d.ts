import { EntitiesResponse } from '../messages/EntitiesResponse';
import { License } from '../entities/License';
export declare class EntitiesResponseOfLicense extends EntitiesResponse {
    list: License[];
    code: number;
    error: string;
}
