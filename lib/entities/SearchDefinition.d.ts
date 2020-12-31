import { SearchObject } from '../entities/SearchObject';
import { BaseEntity } from '../entities/BaseEntity';
import { Coordinate } from '../common/Coordinate';
import { SearchScopeCode } from '../enums/SearchScopeCode';
import { SearchTimeCode } from '../enums/SearchTimeCode';
import { TimeFrame } from '../common/TimeFrame';
import { SearchBehavior } from '../entities/SearchBehavior';
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
    limit: number;
    id: string;
    _type: string;
    createdOn: number;
    updatedOn: number;
}
