import { SensorTypeCode } from '../enums/SensorTypeCode';
import { StreamTypeCode } from '../enums/StreamTypeCode';
import { SensorResolutionCode } from '../enums/SensorResolutionCode';
import { FovGeoAttributes } from '../common/FovGeoAttributes';
import { StringKeyValue } from '../common/StringKeyValue';
import { Thresholds } from '../common/Thresholds';
import { SensorStatusCode } from '../enums/SensorStatusCode';
import { Coordinate } from '../common/Coordinate';
import { SensorDebugInfo } from '../common/SensorDebugInfo';
import { BaseEntity } from '../entities/BaseEntity';
export declare class Sensor extends BaseEntity {
    accountId: string;
    folderId: string;
    applianceId: string;
    agentId: string;
    name: string;
    type: SensorTypeCode;
    status: SensorStatusCode;
    state: number;
    stateReportedOn: number;
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
    path: string;
    healthThresholds: Thresholds;
    debugInfo: SensorDebugInfo;
    syncTimeToStream: boolean;
    codec: string;
    resolution: string;
    framerate: number;
    id: string;
    _type: string;
    createdOn: number;
    updatedOn: number;
}
