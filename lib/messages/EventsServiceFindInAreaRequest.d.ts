import { Coordinate } from '../common/Coordinate';
import { ObjectTypeCode } from '../enums/ObjectTypeCode';
import { BehaviorTypeCode } from '../enums/BehaviorTypeCode';
import { SeverityTypeCode } from '../enums/SeverityTypeCode';
export declare class EventsServiceFindInAreaRequest {
    folderId: string;
    searchArea: Coordinate[];
    sensorId: string;
    objectType: ObjectTypeCode;
    behaviorType: BehaviorTypeCode;
    severity: SeverityTypeCode;
    from: number;
    to: number;
    sort: string;
    page: number;
    pageSize: number;
}
