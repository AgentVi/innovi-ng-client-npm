import { RestUtil } from '../../utils/rest-util';
import { CoreConfig } from '../../core-lib.module';
import { GeoControlPoint } from '../common/GeoControlPoint';
/**
 * List of Geo-spatial utilities
 * @RequestHeader X-API-KEY The key to identify the application (portal)
 * @RequestHeader X-ACCESS-TOKEN The token to identify the logged-in user
 * @ResourceGroup User Actions
 */
export declare class GeoService {
    private config;
    private rest;
    private baseUrl;
    /**
     * Class constructor
     */
    constructor(config: CoreConfig, rest: RestUtil);
    /**
     * Digitize sensor FOV on WGS-84 coordinate system
     * Each GeoControlPoint in the list composed of point in the FOV and its referenced coordinate.
     * The point represents the x,y values a normalized scale (each axis is 0 - 1000)
     * The returned value is a GeoReference data structure describes the contours of the
     * FOV on the image and the map and X,Y factors and offsets for transformation
     * @Return: EntityResponse<GeoReferenceData>
     */
    geoReference(body?: GeoControlPoint[]): import("rxjs").Observable<any>;
}
