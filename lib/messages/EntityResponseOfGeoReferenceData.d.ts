import { GeoReferenceData } from '../common/GeoReferenceData';
import { EntityResponse } from '../messages/EntityResponse';
export declare class EntityResponseOfGeoReferenceData extends EntityResponse {
    entity: GeoReferenceData;
    code: number;
    error: string;
}
