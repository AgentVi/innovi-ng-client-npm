import { PoiPicture } from '../entities/PoiPicture';
import { EntityResponse } from '../messages/EntityResponse';
export declare class EntityResponseOfPoiPicture extends EntityResponse {
    entity: PoiPicture;
    code: number;
    error: string;
}
