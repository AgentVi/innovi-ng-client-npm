export declare class WebSocketMessageHeader {
    op: number;
    ver: number;
    id: number;
    cid: number;
    sid: string;
    constructor(opcode?: number, version?: number, messageId?: number, correlationId?: number, sessionId?: string);
}
