import { ResponsePoi } from '../messages/ResponsePoi';
export declare class ResponseGetPoi {
    code: number;
    pOI: ResponsePoi;
    constructor(code?: number, pOI?: ResponsePoi);
}
