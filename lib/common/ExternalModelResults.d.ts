import { BoundingBox } from '../common/BoundingBox';
import { Embedding } from '../common/Embedding';
import { Attribute } from '../common/Attribute';
export declare class ExternalModelResults {
    modelName: string;
    attributes: Attribute[];
    boundingBox: BoundingBox;
    embedding: Embedding;
    keypoints: number[];
    constructor(modelName?: string, attributes?: Attribute[], boundingBox?: BoundingBox, embedding?: Embedding, keypoints?: number[]);
}
