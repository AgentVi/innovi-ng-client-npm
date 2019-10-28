import { Coordinate } from '../common/Coordinate';
import { Dimension } from '../common/Dimension';
import { TransformationTypeCode } from '../enums/TransformationTypeCode';
import { GeoControlPoint } from '../common/GeoControlPoint';
export declare class FovGeoAttributes {
    geoArea: Coordinate[];
    visibleArea: Dimension;
    transformType: TransformationTypeCode;
    coefficients: number[];
    controlPoints: GeoControlPoint[];
    constructor(geoArea?: Coordinate[], visibleArea?: Dimension, transformType?: TransformationTypeCode, coefficients?: number[], controlPoints?: GeoControlPoint[]);
}
