import { RestUtil } from '../../utils/rest-util';
import { CoreConfig } from '../../config';
import { GeoReferenceTest } from '../common/GeoReferenceTest';
import { GeoControlPoints } from '../common/GeoControlPoints';
/**
 * List of Geo-spatial utilities
 * @RequestHeader X-API-KEY The key to identify the application (portal)
 * @RequestHeader X-ACCESS-TOKEN The token to identify the logged-in user
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
     * The point represents the x,y values a normalized scale (each axis is 0 - 10000)
     * The returned value is a GeoReference data structure describes the contours of the
     * FOV on the image and the map and X,Y factors and offsets for transformation
     * @Return: EntityResponse<GeoReferenceData>
     */
    geoReference(body?: GeoControlPoints): import("rxjs").Observable<any>;
    /**
     * Test transformation, provide the transformation coefficients matrix and a list of arbitrary points and return
     * GeoReferenceData with the transformed coordinates (the number of coordinates is equal to the number of points)
     * @Return: EntityResponse<GeoReferenceData>
     */
    transform(body?: GeoReferenceTest): import("rxjs").Observable<any>;
}
