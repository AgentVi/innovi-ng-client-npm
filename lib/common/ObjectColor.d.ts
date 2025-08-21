import { ColorCode } from '../enums/ColorCode';
import { ColorTypeCode } from '../enums/ColorTypeCode';
export declare class ObjectColor {
    colorType: ColorTypeCode;
    primaryColor: ColorCode;
    primaryConf: number;
    secondaryColor: ColorCode;
    secondaryConf: number;
    constructor(colorType?: ColorTypeCode, primaryColor?: ColorCode, primaryConf?: number, secondaryColor?: ColorCode, secondaryConf?: number);
}
