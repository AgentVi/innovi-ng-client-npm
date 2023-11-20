import { EntityResponse } from '../messages/EntityResponse';
import { GeoReferenceData } from '../common/GeoReferenceData';
export declare class EntityResponseOfGeoReferenceData extends EntityResponse {
    entity: GeoReferenceData;
    code: number;
    error: string;
}
