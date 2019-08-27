import { Coordinate } from '../common/Coordinate';
export declare class GeoReferenceData {
    coordinates: Coordinate[];
    coefficients: number[];
    constructor(coordinates?: Coordinate[], coefficients?: number[]);
}
