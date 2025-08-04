import { EntityResponse } from '../messages/EntityResponse';
import { PoiPicture } from '../entities/PoiPicture';
export declare class EntityResponseOfPoiPicture extends EntityResponse {
    entity: PoiPicture;
    code: number;
    error: string;
}
