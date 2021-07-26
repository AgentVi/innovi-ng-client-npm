import { ObjectTypeCode } from '../enums/ObjectTypeCode';
import { SearchColor } from '../common/SearchColor';
import { ObjectData } from '../common/ObjectData';
import { ModelAttributes } from '../common/ModelAttributes';
export declare class SearchObject {
    type: ObjectTypeCode;
    colors: SearchColor[];
    objectData: ObjectData;
    tolerance: number;
    externalModelResults: ModelAttributes[];
    constructor(type?: ObjectTypeCode, colors?: SearchColor[], objectData?: ObjectData, tolerance?: number, externalModelResults?: ModelAttributes[]);
}
