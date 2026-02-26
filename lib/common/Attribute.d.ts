import { AttributeValue } from '../common/AttributeValue';
export declare class Attribute {
    id: string;
    version: number;
    values: AttributeValue[];
    constructor(id?: string, version?: number, values?: AttributeValue[]);
}
