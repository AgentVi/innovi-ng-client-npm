import { ModelAttributes } from '../common/ModelAttributes';
import { ObjectTypeCode } from '../enums/ObjectTypeCode';
import { SearchColor } from '../common/SearchColor';
import { ObjectData } from '../common/ObjectData';
export declare class SearchObject {
    type: ObjectTypeCode;
    colors: SearchColor[];
    objectData: ObjectData;
    tolerance: number;
    externalModelResults: ModelAttributes[];
    constructor(type?: ObjectTypeCode, colors?: SearchColor[], objectData?: ObjectData, tolerance?: number, externalModelResults?: ModelAttributes[]);
}
