import { LevelTypeCode } from '../enums/LevelTypeCode';
import { ObjectTypeCode } from '../enums/ObjectTypeCode';
export declare class SearchEventFindRequestBody {
    sensorIds: string[];
    objectType: ObjectTypeCode[];
    tolerance: LevelTypeCode;
    from: number;
    to: number;
    sort: string;
    page: number;
    pageSize: number;
    isPromptSearch: boolean;
    constructor(sensorIds?: string[], objectType?: ObjectTypeCode[], tolerance?: LevelTypeCode, from?: number, to?: number, sort?: string, page?: number, pageSize?: number, isPromptSearch?: boolean);
}
