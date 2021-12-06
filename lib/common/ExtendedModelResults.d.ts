import { Embedding } from '../common/Embedding';
import { Attribute } from '../common/Attribute';
import { BoundingBox } from '../common/BoundingBox';
export declare class ExtendedModelResults {
    modelName: string;
    attributes: Attribute[];
    boundingBox: BoundingBox;
    embedding: Embedding;
    constructor(modelName?: string, attributes?: Attribute[], boundingBox?: BoundingBox, embedding?: Embedding);
}
