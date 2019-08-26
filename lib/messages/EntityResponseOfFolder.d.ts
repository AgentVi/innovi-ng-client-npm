import { Folder } from '../entities/Folder';
import { EntityResponse } from '../messages/EntityResponse';
export declare class EntityResponseOfFolder extends EntityResponse {
    entity: Folder;
    code: number;
    error: string;
}
