import { EventStatusCode } from '../enums/EventStatusCode';
import { Coordinate } from '../common/Coordinate';
import { TimestampedCrop } from '../common/TimestampedCrop';
import { BaseEntity } from '../entities/BaseEntity';
import { BehaviorTypeCode } from '../enums/BehaviorTypeCode';
import { SeverityTypeCode } from '../enums/SeverityTypeCode';
import { ObjectInfo } from '../common/ObjectInfo';
import { BoundingBox } from '../common/BoundingBox';
import { ObjectTypeCode } from '../enums/ObjectTypeCode';
export declare class CaseEventObjects extends BaseEntity {
    sensorId: string;
    extSensorId: string;
    accountId: string;
    eventTime: number;
    ruleId: string;
    extRuleId: string;
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
    eventBboxes: BoundingBox[];
    sessionId: string;
    crops: TimestampedCrop[];
    id: string;
    _type: string;
    createdOn: number;
    updatedOn: number;
    path: string;
}
