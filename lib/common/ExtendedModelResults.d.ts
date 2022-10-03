import { Attribute } from '../common/Attribute';
import { BoundingBox } from '../common/BoundingBox';
import { Embedding } from '../common/Embedding';
export declare class ExtendedModelResults {
    modelName: string;
    attributes: Attribute[];
    boundingBox: BoundingBox;
    embedding: Embedding;
    constructor(modelName?: string, attributes?: Attribute[], boundingBox?: BoundingBox, embedding?: Embedding);
}
