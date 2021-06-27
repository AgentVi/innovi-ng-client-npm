import { ObjectData } from '../common/ObjectData';
import { ModelAttributes } from '../common/ModelAttributes';
import { ObjectTypeCode } from '../enums/ObjectTypeCode';
import { SearchColor } from '../common/SearchColor';
export declare class SearchObject {
    type: ObjectTypeCode;
    colors: SearchColor[];
    objectData: ObjectData;
    tolerance: number;
    externalModelResults: ModelAttributes[];
    constructor(type?: ObjectTypeCode, colors?: SearchColor[], objectData?: ObjectData, tolerance?: number, externalModelResults?: ModelAttributes[]);
}
