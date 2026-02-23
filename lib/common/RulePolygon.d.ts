import { Point } from '../common/Point';
import { RuleColorCode } from '../enums/RuleColorCode';
import { LineCrossDirectionCode } from '../enums/LineCrossDirectionCode';
export declare class RulePolygon {
    lineCrossDir: LineCrossDirectionCode;
    points: Point[];
    color: RuleColorCode;
    constructor(lineCrossDir?: LineCrossDirectionCode, points?: Point[], color?: RuleColorCode);
}
