import { ResponsePoi } from '../messages/ResponsePoi';
export declare class ResponseUpdatePoi {
    code: number;
    pOI: ResponsePoi;
    constructor(code?: number, pOI?: ResponsePoi);
}
