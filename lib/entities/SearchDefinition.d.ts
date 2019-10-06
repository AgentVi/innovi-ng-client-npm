import { SearchScopeCode } from '../enums/SearchScopeCode';
import { GeoRule } from '../entities/GeoRule';
import { BaseEntity } from '../entities/BaseEntity';
import { SearchObject } from '../common/SearchObject';
import { TimeFrame } from '../common/TimeFrame';
import { GeoCircle } from '../common/GeoCircle';
import { GeoPolygon } from '../common/GeoPolygon';
import { SearchTimeCode } from '../enums/SearchTimeCode';
import { SensorRule } from '../entities/SensorRule';
export declare class SearchDefinition extends BaseEntity {
    accountId: string;
    userId: string;
    name: string;
    tag: string;
    privateSearch: boolean;
    objects: SearchObject[];
    timeScope: SearchTimeCode;
    timeFrame: TimeFrame;
    sourceScope: SearchScopeCode;
    sensorRules: SensorRule[];
    geoRule: GeoRule;
    folderIds: string[];
    geoCircle: GeoCircle;
    geoPolygon: GeoPolygon;
    id: string;
    _type: string;
    createdOn: number;
    updatedOn: number;
}
