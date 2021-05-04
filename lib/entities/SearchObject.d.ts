import { ObjectTypeCode } from '../enums/ObjectTypeCode';
import { SearchColor } from '../entities/SearchColor';
export declare class SearchObject {
    type: ObjectTypeCode;
    colors: SearchColor[];
    constructor(type?: ObjectTypeCode, colors?: SearchColor[]);
}
