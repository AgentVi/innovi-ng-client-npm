import { SocketOpCode } from '../enums/SocketOpCode';
export declare class SSHSocketOpenRequest {
    op: SocketOpCode;
    payload: string;
    constructor(op?: SocketOpCode, payload?: string);
}
