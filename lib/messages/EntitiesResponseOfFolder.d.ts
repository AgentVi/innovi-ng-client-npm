import { Folder } from '../entities/Folder';
import { EntitiesResponse } from '../messages/EntitiesResponse';
export declare class EntitiesResponseOfFolder extends EntitiesResponse {
    list: Folder[];
    code: number;
    error: string;
}
