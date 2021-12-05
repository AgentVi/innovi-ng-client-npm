import { ColorTypeCode } from '../enums/ColorTypeCode';
import { ColorCode } from '../enums/ColorCode';
export declare class ObjectColor {
    colorType: ColorTypeCode;
    primaryColor: ColorCode;
    primaryConf: number;
    secondaryColor: ColorCode;
    secondaryConf: number;
    constructor(colorType?: ColorTypeCode, primaryColor?: ColorCode, primaryConf?: number, secondaryColor?: ColorCode, secondaryConf?: number);
}
