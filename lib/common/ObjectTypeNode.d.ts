import { ObjectTypeCode } from '../enums/ObjectTypeCode';
export declare class ObjectTypeNode {
    name: string;
    objectTypeCode: ObjectTypeCode;
    children: ObjectTypeNode[];
    constructor(name?: string, objectTypeCode?: ObjectTypeCode, children?: ObjectTypeNode[]);
}
