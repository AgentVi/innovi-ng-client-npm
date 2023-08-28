import { License } from '../entities/License';
import { EntitiesResponse } from '../messages/EntitiesResponse';
export declare class EntitiesResponseOfLicense extends EntitiesResponse {
    list: License[];
    code: number;
    error: string;
}
