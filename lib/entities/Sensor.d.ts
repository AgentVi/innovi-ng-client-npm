import { StreamTypeCode } from '../enums/StreamTypeCode';
import { Coordinate } from '../common/Coordinate';
import { StringKeyValue } from '../common/StringKeyValue';
import { SensorDebugInfo } from '../common/SensorDebugInfo';
import { ViewTypeCode } from '../enums/ViewTypeCode';
import { BaseEntity } from '../entities/BaseEntity';
import { SensorTypeCode } from '../enums/SensorTypeCode';
import { SensorStatusCode } from '../enums/SensorStatusCode';
import { SensorResolutionCode } from '../enums/SensorResolutionCode';
import { FovGeoAttributes } from '../common/FovGeoAttributes';
import { Thresholds } from '../common/Thresholds';
import { SensorAnonymizationTypeCode } from '../enums/SensorAnonymizationTypeCode';
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
    unattendedObject: boolean;
    faceRecognition: boolean;
    alarmInterval: number;
    maxBBoxPerFrame: number;
    maxFrameRate: number;
    streamUri: string;
    geoLocation: Coordinate;
    azimuth: number;
    fovAttributes: FovGeoAttributes;
    externalId: string;
    tags: StringKeyValue[];
    healthThresholds: Thresholds;
    debugInfo: SensorDebugInfo;
    syncTimeToStream: boolean;
    codec: string;
    resolution: string;
    framerate: number;
    highSensitivity: boolean;
    viewType: ViewTypeCode;
    poseEstimation: boolean;
    eventFiltering: boolean;
    eventClipLengthSec: number;
    personRecognition: boolean;
    anonymizationType: SensorAnonymizationTypeCode;
    id: string;
    _type: string;
    createdOn: number;
    updatedOn: number;
    path: string;
}
