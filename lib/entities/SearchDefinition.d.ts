import { Coordinate } from '../common/Coordinate';
import { SearchScopeCode } from '../enums/SearchScopeCode';
import { TimeFrame } from '../common/TimeFrame';
import { SearchBehavior } from '../common/SearchBehavior';
import { SearchObject } from '../common/SearchObject';
import { LevelTypeCode } from '../enums/LevelTypeCode';
import { SearchTimeCode } from '../enums/SearchTimeCode';
import { ObjectData } from '../common/ObjectData';
import { BaseEntity } from '../entities/BaseEntity';
export declare class SearchDefinition extends BaseEntity {
    accountId: string;
    userId: string;
    name: string;
    tag: string;
    scopeKey: string;
    privateSearch: boolean;
    geoLocation: Coordinate;
    sourceScope: SearchScopeCode;
    timeScope: SearchTimeCode;
    timeFrame: TimeFrame;
    sensorIds: string[];
    behavior: SearchBehavior;
    objects: SearchObject[];
    objectData: ObjectData;
    limit: number;
    similarity: LevelTypeCode;
    id: string;
    _type: string;
    createdOn: number;
    updatedOn: number;
    path: string;
}
