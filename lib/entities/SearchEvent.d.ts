import { ObjectInfo } from '../common/ObjectInfo';
import { BoundingBox } from '../common/BoundingBox';
import { Event } from '../entities/Event';
import { ObjectTypeCode } from '../enums/ObjectTypeCode';
import { BehaviorTypeCode } from '../enums/BehaviorTypeCode';
import { EventStatusCode } from '../enums/EventStatusCode';
import { Coordinate } from '../common/Coordinate';
import { SeverityTypeCode } from '../enums/SeverityTypeCode';
export declare class SearchEvent extends Event {
    sensorId: string;
    accountId: string;
    eventTime: number;
    ruleId: string;
    description: string;
    objectType: ObjectTypeCode;
    behaviorType: BehaviorTypeCode;
    status: EventStatusCode;
    geoLocation: Coordinate;
    imagePath: string;
    clipPath: string;
    severity: SeverityTypeCode;
    eventImageTime: number;
    eventObjects: ObjectInfo[];
    boundingBoxes: BoundingBox[];
    id: string;
    _type: string;
    createdOn: number;
    updatedOn: number;
}
