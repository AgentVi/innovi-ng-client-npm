import { BoundingBox } from '../common/BoundingBox';
import { Embedding } from '../common/Embedding';
import { Attribute } from '../common/Attribute';
export declare class ExtendedModelResults {
    modelName: string;
    attributes: Attribute[];
    boundingBox: BoundingBox;
    embedding: Embedding;
    constructor(modelName?: string, attributes?: Attribute[], boundingBox?: BoundingBox, embedding?: Embedding);
}
