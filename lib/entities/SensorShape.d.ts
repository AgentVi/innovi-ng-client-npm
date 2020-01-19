import { RulePolygon } from '../common/RulePolygon';
import { LineCrossDirectionCode } from '../enums/LineCrossDirectionCode';
import { Point } from '../common/Point';
export declare class SensorShape extends RulePolygon {
    sensorId: string;
    lineCrossDir: LineCrossDirectionCode;
    points: Point[];
}
