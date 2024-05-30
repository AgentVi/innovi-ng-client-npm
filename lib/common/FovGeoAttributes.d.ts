import { GeoControlPoint } from '../common/GeoControlPoint';
import { Coordinate } from '../common/Coordinate';
import { Dimension } from '../common/Dimension';
import { TransformationTypeCode } from '../enums/TransformationTypeCode';
export declare class FovGeoAttributes {
    geoArea: Coordinate[];
    visibleArea: Dimension;
    transformType: TransformationTypeCode;
    coefficients: number[];
    controlPoints: GeoControlPoint[];
    constructor(geoArea?: Coordinate[], visibleArea?: Dimension, transformType?: TransformationTypeCode, coefficients?: number[], controlPoints?: GeoControlPoint[]);
}
