import { LineCrossDirectionCode } from '../enums/LineCrossDirectionCode';
import { Coordinate } from '../common/Coordinate';
export declare class GeoShape {
    coordinates: Coordinate[];
    lineCrossDir: LineCrossDirectionCode;
    constructor(coordinates?: Coordinate[], lineCrossDir?: LineCrossDirectionCode);
}
