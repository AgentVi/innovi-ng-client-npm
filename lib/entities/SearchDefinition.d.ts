import { SearchTimeCode } from '../enums/SearchTimeCode';
import { SearchScopeCode } from '../enums/SearchScopeCode';
import { SensorRule } from '../entities/SensorRule';
import { GeoPolygon } from '../common/GeoPolygon';
import { BaseEntity } from '../entities/BaseEntity';
import { SearchObject } from '../common/SearchObject';
import { TimeFrame } from '../common/TimeFrame';
import { GeoRule } from '../entities/GeoRule';
import { GeoCircle } from '../common/GeoCircle';
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
