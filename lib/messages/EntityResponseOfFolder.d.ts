import { EntityResponse } from '../messages/EntityResponse';
import { Folder } from '../entities/Folder';
export declare class EntityResponseOfFolder extends EntityResponse {
    entity: Folder;
    code: number;
    error: string;
}
