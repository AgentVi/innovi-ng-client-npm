import { SocketOpCode } from '../enums/SocketOpCode';
export declare class SSHSocketCloseRequest {
    op: SocketOpCode;
    payload: string;
    constructor(op?: SocketOpCode, payload?: string);
}
