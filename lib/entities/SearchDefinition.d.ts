import { BaseEntity } from '../entities/BaseEntity';
import { SearchObject } from '../entities/SearchObject';
import { SearchColor } from '../entities/SearchColor';
import { SearchTimeCode } from '../enums/SearchTimeCode';
import { TimeFrame } from '../common/TimeFrame';
import { SearchScopeCode } from '../enums/SearchScopeCode';
import { SensorRule } from '../entities/SensorRule';
import { GeoRule } from '../entities/GeoRule';
export declare class SearchDefinition extends BaseEntity {
    accountId: string;
    userId: string;
    name: string;
    tag: string;
    privateSearch: boolean;
    objects: SearchObject[];
    colors: SearchColor[];
    timeScope: SearchTimeCode;
    timeFrame: TimeFrame;
    sourceScope: SearchScopeCode;
    sensorRules: SensorRule[];
    geoRule: GeoRule;
    folderIds: string[];
    id: string;
    _type: string;
    createdOn: number;
    updatedOn: number;
}
