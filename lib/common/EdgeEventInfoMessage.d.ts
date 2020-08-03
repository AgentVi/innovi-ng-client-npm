import { EdgeEventInfoBody } from '../common/EdgeEventInfoBody';
export declare class EdgeEventInfoMessage {
    id: number;
    op: number;
    ver: number;
    body: EdgeEventInfoBody;
    constructor(id?: number, op?: number, ver?: number, body?: EdgeEventInfoBody);
}
