import { StreamTypeCode } from '../enums/StreamTypeCode';
import { SensorResolutionCode } from '../enums/SensorResolutionCode';
import { Coordinate } from '../common/Coordinate';
import { FovGeoAttributes } from '../common/FovGeoAttributes';
import { StringKeyValue } from '../common/StringKeyValue';
import { SensorDebugInfo } from '../common/SensorDebugInfo';
import { ViewTypeCode } from '../enums/ViewTypeCode';
import { SensorTypeCode } from '../enums/SensorTypeCode';
export declare class SensorInfo {
    name: string;
    type: SensorTypeCode;
    streamType: StreamTypeCode;
    imageResolution: SensorResolutionCode;
    recording: boolean;
    metadata: boolean;
    anomalyDetection: boolean;
    alarmInterval: number;
    maxBBoxPerFrame: number;
    maxFrameRate: number;
    streamUri: string;
    geoLocation: Coordinate;
    azimuth: number;
    fovAttributes: FovGeoAttributes;
    externalId: string;
    tags: StringKeyValue[];
    debugInfo: SensorDebugInfo;
    viewType: ViewTypeCode;
    constructor(name?: string, type?: SensorTypeCode, streamType?: StreamTypeCode, imageResolution?: SensorResolutionCode, recording?: boolean, metadata?: boolean, anomalyDetection?: boolean, alarmInterval?: number, maxBBoxPerFrame?: number, maxFrameRate?: number, streamUri?: string, geoLocation?: Coordinate, azimuth?: number, fovAttributes?: FovGeoAttributes, externalId?: string, tags?: StringKeyValue[], debugInfo?: SensorDebugInfo, viewType?: ViewTypeCode);
}
