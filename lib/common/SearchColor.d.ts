import { ColorCode } from '../enums/ColorCode';
import { ColorTypeCode } from '../enums/ColorTypeCode';
export declare class SearchColor {
    conf: number;
    color: ColorCode;
    type: ColorTypeCode;
    constructor(conf?: number, color?: ColorCode, type?: ColorTypeCode);
}
