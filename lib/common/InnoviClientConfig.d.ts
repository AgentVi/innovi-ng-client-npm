import { MapClientCode } from '../enums/MapClientCode';
export declare class InnoviClientConfig {
    mapClient: MapClientCode;
    mapKey: string;
    wMS: string;
    constructor(mapClient?: MapClientCode, mapKey?: string, wMS?: string);
}
