import { Coordinate } from '../common/Coordinate';
import { Dimension } from '../common/Dimension';
import { ControlPoint } from '../common/ControlPoint';
export declare class FovGeoAttributes {
    geoArea: Coordinate[];
    visibleArea: Dimension;
    affineCoefficients: number[];
    controlPoints: ControlPoint[];
    constructor(geoArea?: Coordinate[], visibleArea?: Dimension, affineCoefficients?: number[], controlPoints?: ControlPoint[]);
}
