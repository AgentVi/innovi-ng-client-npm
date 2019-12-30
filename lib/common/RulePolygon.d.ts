import { Point } from '../common/Point';
import { LineCrossDirectionCode } from '../enums/LineCrossDirectionCode';
export declare class RulePolygon {
    lineCrossDir: LineCrossDirectionCode;
    points: Point[];
    constructor(lineCrossDir?: LineCrossDirectionCode, points?: Point[]);
}
