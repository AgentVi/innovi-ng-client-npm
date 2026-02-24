import { EntitiesResponse } from '../messages/EntitiesResponse';
import { Folder } from '../entities/Folder';
export declare class EntitiesResponseOfFolder extends EntitiesResponse {
    list: Folder[];
    code: number;
    error: string;
}
