import { Coordinate } from '../common/Coordinate';
import { SearchResultObject } from '../common/SearchResultObject';
import { BehaviorTypeCode } from '../enums/BehaviorTypeCode';
import { ObjectTypeCode } from '../enums/ObjectTypeCode';
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
