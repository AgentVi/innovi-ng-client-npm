import { FovGeoAttributes } from '../common/FovGeoAttributes';
export declare class SensorsServiceChangeFovRequest {
    id: string;
    azimuth: number;
    body: FovGeoAttributes;
    constructor(id?: string, azimuth?: number, body?: FovGeoAttributes);
}
