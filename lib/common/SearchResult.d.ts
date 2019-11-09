import { ObjectTypeCode } from '../enums/ObjectTypeCode';
import { Coordinate } from '../common/Coordinate';
import { SearchResultObject } from '../common/SearchResultObject';
import { BehaviorTypeCode } from '../enums/BehaviorTypeCode';
export declare class SearchResult {
    id: string;
    sequenceId: number;
    timestamp: number;
    behaviorType: BehaviorTypeCode;
    objectType: ObjectTypeCode;
    description: string;
    isGeo: boolean;
    location: Coordinate;
    objectsInfo: SearchResultObject[];
    constructor(id?: string, sequenceId?: number, timestamp?: number, behaviorType?: BehaviorTypeCode, objectType?: ObjectTypeCode, description?: string, isGeo?: boolean, location?: Coordinate, objectsInfo?: SearchResultObject[]);
}
