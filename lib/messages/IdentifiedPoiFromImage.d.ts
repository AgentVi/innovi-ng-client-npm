import { PoiBoundingBox } from '../messages/PoiBoundingBox';
export declare class IdentifiedPoiFromImage {
    poiId: string;
    displayName: string;
    score: number;
    boundingBox: PoiBoundingBox;
    constructor(poiId?: string, displayName?: string, score?: number, boundingBox?: PoiBoundingBox);
}
