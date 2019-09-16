import { GeoControlPoint } from '../common/GeoControlPoint';
import { Coordinate } from '../common/Coordinate';
import { Dimension } from '../common/Dimension';
export declare class FovGeoAttributes {
    geoArea: Coordinate[];
    visibleArea: Dimension;
    affineCoefficients: number[];
    controlPoints: GeoControlPoint[];
    constructor(geoArea?: Coordinate[], visibleArea?: Dimension, affineCoefficients?: number[], controlPoints?: GeoControlPoint[]);
}
