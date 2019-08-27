import { LineCrossDirectionCode } from '../enums/LineCrossDirectionCode';
import { Point } from '../common/Point';
export declare class RulePolygon {
    lineCrossDir: LineCrossDirectionCode;
    points: Point[];
    constructor(lineCrossDir?: LineCrossDirectionCode, points?: Point[]);
}
