import { SearchColor } from '../entities/SearchColor';
import { ObjectTypeCode } from '../enums/ObjectTypeCode';
export declare class SearchObject {
    type: ObjectTypeCode;
    colors: SearchColor[];
    constructor(type?: ObjectTypeCode, colors?: SearchColor[]);
}
