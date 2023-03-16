import { SocketOpCode } from '../enums/SocketOpCode';
export declare class SSHSocketOutputResponse {
    op: SocketOpCode;
    error: string;
    payload: string;
    constructor(op?: SocketOpCode, error?: string, payload?: string);
}
