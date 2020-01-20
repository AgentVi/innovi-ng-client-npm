import { ObjectTypeCode } from '../enums/ObjectTypeCode';
import { BehaviorTypeCode } from '../enums/BehaviorTypeCode';
import { EventStatusCode } from '../enums/EventStatusCode';
import { Coordinate } from '../common/Coordinate';
import { SeverityTypeCode } from '../enums/SeverityTypeCode';
import { ObjectInfo } from '../common/ObjectInfo';
import { BoundingBox } from '../common/BoundingBox';
import { BaseEntity } from '../entities/BaseEntity';
export declare class Event extends BaseEntity {
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
