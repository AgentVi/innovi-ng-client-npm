import { ObjectTypeCode } from '../enums/ObjectTypeCode';
import { SearchColor } from '../common/SearchColor';
export declare class SearchObject {
    type: ObjectTypeCode;
    colors: SearchColor[];
    identifier: string;
    constructor(type?: ObjectTypeCode, colors?: SearchColor[], identifier?: string);
}
