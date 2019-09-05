import { SearchScopeCode } from '../enums/SearchScopeCode';
import { GeoCircle } from '../common/GeoCircle';
import { GeoPolygon } from '../common/GeoPolygon';
import { BaseEntity } from '../entities/BaseEntity';
import { SearchObject } from '../common/SearchObject';
import { SearchTimeCode } from '../enums/SearchTimeCode';
import { TimeFrame } from '../common/TimeFrame';
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
    sensorIds: string[];
    folderIds: string[];
    geoCircle: GeoCircle;
    geoPolygon: GeoPolygon;
    id: string;
    _type: string;
    createdOn: number;
    updatedOn: number;
}
