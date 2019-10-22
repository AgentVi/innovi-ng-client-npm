import { Coordinate } from '../common/Coordinate';
import { Dimension } from '../common/Dimension';
import { GeoControlPoint } from '../common/GeoControlPoint';
export declare class FovGeoAttributes {
    geoArea: Coordinate[];
    visibleArea: Dimension;
    coefficients: number[];
    controlPoints: GeoControlPoint[];
    constructor(geoArea?: Coordinate[], visibleArea?: Dimension, coefficients?: number[], controlPoints?: GeoControlPoint[]);
}
