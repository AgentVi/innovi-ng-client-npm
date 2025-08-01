import { Embedding } from '../common/Embedding';
import { Attribute } from '../common/Attribute';
import { BoundingBox } from '../common/BoundingBox';
export declare class ExternalModelResults {
    modelName: string;
    attributes: Attribute[];
    boundingBox: BoundingBox;
    embedding: Embedding;
    keypoints: number[];
    constructor(modelName?: string, attributes?: Attribute[], boundingBox?: BoundingBox, embedding?: Embedding, keypoints?: number[]);
}
