import { SocketOpCode } from '../enums/SocketOpCode';
export declare class SSHSocketInputRequest {
    op: SocketOpCode;
    payload: string;
    constructor(op?: SocketOpCode, payload?: string);
}
