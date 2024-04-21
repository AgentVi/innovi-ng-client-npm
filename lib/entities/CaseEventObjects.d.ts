import { BoundingBox } from '../common/BoundingBox';
import { BaseEntity } from '../entities/BaseEntity';
import { EventStatusCode } from '../enums/EventStatusCode';
import { Coordinate } from '../common/Coordinate';
import { SeverityTypeCode } from '../enums/SeverityTypeCode';
import { ObjectInfo } from '../common/ObjectInfo';
import { TimestampedCrop } from '../common/TimestampedCrop';
import { ObjectTypeCode } from '../enums/ObjectTypeCode';
import { BehaviorTypeCode } from '../enums/BehaviorTypeCode';
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
