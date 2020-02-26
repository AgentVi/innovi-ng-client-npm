import { SearchTimeCode } from '../enums/SearchTimeCode';
import { TimeFrame } from '../common/TimeFrame';
import { SearchBehavior } from '../entities/SearchBehavior';
import { SearchObject } from '../entities/SearchObject';
import { BaseEntity } from '../entities/BaseEntity';
import { SearchScopeCode } from '../enums/SearchScopeCode';
export declare class SearchDefinition extends BaseEntity {
    accountId: string;
    userId: string;
    name: string;
    tag: string;
    privateSearch: boolean;
    sourceScope: SearchScopeCode;
    timeScope: SearchTimeCode;
    timeFrame: TimeFrame;
    sensorIds: string[];
    behavior: SearchBehavior;
    objects: SearchObject[];
    id: string;
    _type: string;
    createdOn: number;
    updatedOn: number;
}
