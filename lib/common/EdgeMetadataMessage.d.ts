import { EdgeMetadataBody } from '../common/EdgeMetadataBody';
export declare class EdgeMetadataMessage {
    id: number;
    op: number;
    ver: number;
    body: EdgeMetadataBody;
    constructor(id?: number, op?: number, ver?: number, body?: EdgeMetadataBody);
}
