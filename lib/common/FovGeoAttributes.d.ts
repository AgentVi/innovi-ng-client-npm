import { ControlPoint } from '../common/ControlPoint';
import { Coordinate } from '../common/Coordinate';
import { Dimension } from '../common/Dimension';
export declare class FovGeoAttributes {
    geoArea: Coordinate[];
    visibleArea: Dimension;
    affineCoefficients: number[];
    controlPoints: ControlPoint[];
    constructor(geoArea?: Coordinate[], visibleArea?: Dimension, affineCoefficients?: number[], controlPoints?: ControlPoint[]);
}
