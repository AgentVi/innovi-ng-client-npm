import { RulePolygon } from '../common/RulePolygon';
import { LineCrossDirectionCode } from '../enums/LineCrossDirectionCode';
import { Point } from '../common/Point';
import { RuleColorCode } from '../enums/RuleColorCode';
export declare class SearchShape extends RulePolygon {
    sensorId: string;
    lineCrossDir: LineCrossDirectionCode;
    points: Point[];
    color: RuleColorCode;
}
