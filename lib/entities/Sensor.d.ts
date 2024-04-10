import { StringKeyValue } from '../common/StringKeyValue';
import { Thresholds } from '../common/Thresholds';
import { SensorDebugInfo } from '../common/SensorDebugInfo';
import { SensorAnonymizationTypeCode } from '../enums/SensorAnonymizationTypeCode';
import { SensorStatusCode } from '../enums/SensorStatusCode';
import { StreamTypeCode } from '../enums/StreamTypeCode';
import { Coordinate } from '../common/Coordinate';
import { FovGeoAttributes } from '../common/FovGeoAttributes';
import { SensorTypeCode } from '../enums/SensorTypeCode';
import { SensorResolutionCode } from '../enums/SensorResolutionCode';
import { ViewTypeCode } from '../enums/ViewTypeCode';
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
