import { BehaviorTypeCode } from '../enums/BehaviorTypeCode';
import { SensorShape } from '../entities/SensorShape';
import { GeoShape } from '../entities/GeoShape';
export declare class SearchBehavior {
    behaviorType: BehaviorTypeCode;
    dwellTime: number;
    minObjectsInGroup: number;
    sensorShapes: SensorShape[];
    geoShape: GeoShape;
    constructor(behaviorType?: BehaviorTypeCode, dwellTime?: number, minObjectsInGroup?: number, sensorShapes?: SensorShape[], geoShape?: GeoShape);
}
