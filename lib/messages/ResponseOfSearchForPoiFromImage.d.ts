import { IdentifiedPoiFromImage } from '../messages/IdentifiedPoiFromImage';
export declare class ResponseOfSearchForPoiFromImage {
    code: number;
    poi: IdentifiedPoiFromImage[];
    constructor(code?: number, poi?: IdentifiedPoiFromImage[]);
}
