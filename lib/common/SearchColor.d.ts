import { ColorTypeCode } from '../enums/ColorTypeCode';
import { ColorCode } from '../enums/ColorCode';
export declare class SearchColor {
    conf: number;
    color: ColorCode;
    type: ColorTypeCode;
    constructor(conf?: number, color?: ColorCode, type?: ColorTypeCode);
}
