import { BehaviorTypeCode } from '../enums/BehaviorTypeCode';
import { ObjectInfo } from '../common/ObjectInfo';
import { BaseEntity } from '../entities/BaseEntity';
import { Coordinate } from '../common/Coordinate';
import { SeverityTypeCode } from '../enums/SeverityTypeCode';
import { BoundingBox } from '../common/BoundingBox';
import { RuleTypeCode } from '../enums/RuleTypeCode';
import { ObjectTypeCode } from '../enums/ObjectTypeCode';
import { EventStatusCode } from '../enums/EventStatusCode';
export declare class Event extends BaseEntity {
    sensorId: string;
    accountId: string;
    eventTime: number;
    ruleId: string;
    description: string;
    ruleType: RuleTypeCode;
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
