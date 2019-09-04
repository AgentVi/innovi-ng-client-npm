import { ColorCode } from '../enums/ColorCode';
import { ObjectTypeCode } from '../enums/ObjectTypeCode';
export declare class SearchObject {
    type: ObjectTypeCode;
    color: ColorCode;
    identifier: string;
    constructor(type?: ObjectTypeCode, color?: ColorCode, identifier?: string);
}
