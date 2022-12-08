import { IdentifiedPoiFromImage } from '../messages/IdentifiedPoiFromImage';
export declare class ResponseOfSearchForPoiFromImage {
    errorMessage: string;
    poi: IdentifiedPoiFromImage[];
    constructor(errorMessage?: string, poi?: IdentifiedPoiFromImage[]);
}
