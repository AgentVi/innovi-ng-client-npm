import { ObjectInfo } from '../common/ObjectInfo';
import { BoundingBox } from '../common/BoundingBox';
import { BaseEntity } from '../entities/BaseEntity';
import { ObjectTypeCode } from '../enums/ObjectTypeCode';
import { BehaviorTypeCode } from '../enums/BehaviorTypeCode';
import { EventStatusCode } from '../enums/EventStatusCode';
import { Coordinate } from '../common/Coordinate';
import { SeverityTypeCode } from '../enums/SeverityTypeCode';
export declare class SearchEvent extends BaseEntity {
    sensorId: string;
    extSensorId: string;
    accountId: string;
    eventTime: number;
    eventSiteTime: string;
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
    score: number;
    externalModelName: string;
    id: string;
    _type: string;
    createdOn: number;
    updatedOn: number;
    path: string;
}
