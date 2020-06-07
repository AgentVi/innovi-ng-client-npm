import { EntityTypeCode } from '../enums/EntityTypeCode';
export declare class TreeItem {
    itemId: string;
    type: EntityTypeCode;
    name: string;
    typeName: string;
    constructor(itemId?: string, type?: EntityTypeCode, name?: string, typeName?: string);
}
